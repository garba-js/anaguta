/**
 * Anaguta Tradomodern - Dedicated Lexicon Engine (js/dictionary.js)
 * Implements:
 * - Real-time instantaneous search (Anaguta word, English meaning, phonetic, and examples)
 * - Category filter buttons
 * - Alphabet quick-jump filter
 * - Dynamic Word of the Day rotation
 * - Audio pronunciation via SpeechSynthesis and HTML5 Audio fallback
 * - URL search parameter auto-fill
 */

document.addEventListener('DOMContentLoaded', () => {
  initDedicatedDictionary();
});

function initDedicatedDictionary() {
  const dictionary = window.AnagutaDictionary || window.AnagutaWords || (window.AnagutaData && window.AnagutaData.dictionary);
  
  if (!dictionary || !Array.isArray(dictionary)) {
    console.error("AnagutaDictionary data array was not found. Make sure dictionary-data.js loads first.");
    return;
  }

  // 1. Initialize Word of the Day dynamically
  try {
    initWordOfTheDay(dictionary);
  } catch (err) {
    console.error("Error initializing Word of the Day:", err);
  }

  // 2. Initialize Lexicon Grid Engine
  const grid = document.getElementById('lexiconGrid');
  if (!grid) {
    console.warn("Element #lexiconGrid not found on this page.");
    return;
  }

  const searchInput = document.getElementById('dictSearchInput');
  const clearBtn = document.getElementById('dictClearBtn');
  const categoryFilterBar = document.getElementById('categoryFilterBar');
  const alphabetBar = document.getElementById('alphabetBar');
  const resultsCount = document.getElementById('resultsCount');

  let activeCategory = 'all';
  let activeLetter = 'all';
  let searchQuery = '';

  // Check URL query param e.g. dictionary.html?search=Ujah
  const urlParams = new URLSearchParams(window.location.search);
  const initialSearch = urlParams.get('search');
  if (initialSearch && searchInput) {
    searchInput.value = initialSearch;
    searchQuery = initialSearch.toLowerCase();
    if (clearBtn) clearBtn.style.display = 'block';
  }

  // Build Alphabet Bar
  const alphabet = ['All', 'B', 'G', 'I', 'K', 'M', 'N', 'R', 'S', 'T', 'U', 'W', 'Z'];
  if (alphabetBar) {
    alphabetBar.innerHTML = alphabet
      .map(
        (letter) =>
          `<button type="button" class="alpha-btn ${letter.toLowerCase() === activeLetter ? 'active' : ''}" data-letter="${letter.toLowerCase()}">${letter}</button>`
      )
      .join('');

    alphabetBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.alpha-btn');
      if (!btn) return;
      alphabetBar.querySelectorAll('.alpha-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeLetter = btn.dataset.letter;
      renderLexicon();
    });
  }

  // Category Filter Pills
  if (categoryFilterBar) {
    categoryFilterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      categoryFilterBar.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderLexicon();
    });
  }

  // Search Input Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderLexicon();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      renderLexicon();
    });
  }

  // Main Render Function
  function renderLexicon() {
    const filtered = dictionary.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Letter match
      if (activeLetter !== 'all') {
        if (!item.word || !item.word.toLowerCase().startsWith(activeLetter)) {
          return false;
        }
      }

      // Search match
      if (searchQuery) {
        const matchesWord = (item.word || '').toLowerCase().includes(searchQuery);
        const matchesMeaning = (item.meaning || '').toLowerCase().includes(searchQuery);
        const matchesPhonetic = (item.phonetic || '').toLowerCase().includes(searchQuery);
        const matchesCategory = (item.category || '').toLowerCase().includes(searchQuery);
        const matchesExample = (item.exampleAnaguta || '').toLowerCase().includes(searchQuery) || (item.exampleEnglish || '').toLowerCase().includes(searchQuery);
        if (!matchesWord && !matchesMeaning && !matchesPhonetic && !matchesCategory && !matchesExample) {
          return false;
        }
      }

      return true;
    });

    if (resultsCount) {
      resultsCount.textContent = `Displaying ${filtered.length} of ${dictionary.length} Anaguta lexicon entries`;
    }

    if (!filtered.length) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: #fff; border: 1px solid var(--border-light);">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--terracotta);">&telrec;</div>
          <h3 style="font-family: var(--serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--deep-brown);">No Words Found</h3>
          <p style="color: var(--muted); font-size: 0.95rem;">Try modifying your search query or switching categories.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (entry) => `
        <div class="dict-card reveal visible">
          <div class="dict-card-top">
            <div>
              <div class="dict-word-title">${entry.word}</div>
              <div class="dict-phonetic">${entry.phonetic} &middot; <span class="dict-pos">${entry.partOfSpeech}</span></div>
            </div>
            <button class="dict-play-btn" onclick="playAudio('${(entry.word || '').replace(/'/g, "\\'")}', '${(entry.audioPath || '').replace(/'/g, "\\'")}', this)" title="Play native pronunciation" aria-label="Pronounce ${entry.word}">&#9658;</button>
          </div>
          <div class="dict-meaning">${entry.meaning}</div>
          <div class="dict-example">
            "${entry.exampleAnaguta}"<br>
            <em>${entry.exampleEnglish}</em>
          </div>
          <span class="dict-badge">${entry.category}</span>
        </div>
      `
      )
      .join('');
  }

  renderLexicon();
}

/**
 * Word of the Day Initialization Engine
 * Dynamically updates based on the calendar day of the year
 */
function initWordOfTheDay(dictionary) {
  if (!dictionary || dictionary.length === 0) return;

  // Calculate day index based on current day of the year
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const selectedIndex = dayOfYear % dictionary.length;
  const todayWord = dictionary[selectedIndex];
  if (!todayWord) return;

  // Query DOM elements (compatible with both HTML classes and IDs)
  const wordEl = document.querySelector('.wotd-title') || document.getElementById('wotdWord');
  const phoneticEl = document.querySelector('.wotd-card .dict-phonetic') || document.getElementById('wotdPhonetic');
  const meaningEl = document.querySelector('.wotd-meaning') || document.getElementById('wotdMeaning');
  const exampleContainer = document.querySelector('.wotd-card .dict-example') || document.getElementById('wotdExampleContainer');
  const playBtn = document.querySelector('.wotd-play-btn') || document.getElementById('wotdPlayBtn');

  if (wordEl) wordEl.textContent = todayWord.word;
  if (phoneticEl) phoneticEl.innerHTML = `${todayWord.phonetic} &middot; <span class="dict-pos">${todayWord.partOfSpeech}</span>`;
  if (meaningEl) meaningEl.textContent = todayWord.meaning;

  if (exampleContainer) {
    exampleContainer.innerHTML = `"${todayWord.exampleAnaguta}"<br><em>${todayWord.exampleEnglish}</em>`;
  }

  if (playBtn) {
    playBtn.onclick = function (e) {
      playAudio(todayWord.word, todayWord.audioPath || '', e.currentTarget);
    };
  }
}

/**
 * Global Audio Player Engine
 */
let activeAudioObj = null;
let activePlayBtn = null;

function resetActiveButton() {
  if (activePlayBtn) {
    activePlayBtn.classList.remove('playing');
    activePlayBtn.innerHTML = '&#9658;';
    activePlayBtn = null;
  }
}

window.playAudio = function (word, audioPath, btnEl) {
  const btn = btnEl || (window.event && window.event.currentTarget) || null;

  if (btn && btn === activePlayBtn) {
    if (activeAudioObj) {
      activeAudioObj.pause();
      activeAudioObj = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    resetActiveButton();
    return;
  }

  if (activeAudioObj) {
    activeAudioObj.pause();
    activeAudioObj = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  resetActiveButton();

  if (btn) {
    btn.classList.add('playing');
    btn.innerHTML = '&#9646;&#9646;';
    activePlayBtn = btn;
  }

  if (audioPath && typeof audioPath === 'string' && audioPath.trim() !== '') {
    const audio = new Audio(audioPath.trim());
    activeAudioObj = audio;

    audio.onended = () => {
      activeAudioObj = null;
      resetActiveButton();
    };

    audio.onerror = () => {
      activeAudioObj = null;
      speakFallback(word, btn);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        activeAudioObj = null;
        speakFallback(word, btn);
      });
    }
  } else {
    speakFallback(word, btn);
  }
};

function speakFallback(word, btn) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    
    // Warm up speech synthesis voices
    window.speechSynthesis.getVoices();

    const utter = new SpeechSynthesisUtterance(word);
    utter.rate = 0.85;
    utter.pitch = 1.0;
    utter.lang = 'en-NG';

    utter.onend = () => resetActiveButton();
    utter.onerror = () => resetActiveButton();

    window.speechSynthesis.speak(utter);
  } else {
    resetActiveButton();
  }
}