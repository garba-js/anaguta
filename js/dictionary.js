/**
 * Anaguta Tradomodern - Dedicated Lexicon Engine (js/dictionary.js)
 * Implements:
 * - Real-time instantaneous search (Anaguta word, English meaning, phonetic, and examples)
 * - Category filter buttons
 * - Alphabet quick-jump filter
 * - Dynamic Word of the Day rotation
 * - Audio pronunciation via SpeechSynthesis and fallback Web Audio chime
 * - URL search parameter auto-fill
 */

document.addEventListener('DOMContentLoaded', () => {
  initDedicatedDictionary();
});

function initDedicatedDictionary() {
  const grid = document.getElementById('lexiconGrid');
  const searchInput = document.getElementById('dictSearchInput');
  const clearBtn = document.getElementById('dictClearBtn');
  const categoryFilterBar = document.getElementById('categoryFilterBar');
  const alphabetBar = document.getElementById('alphabetBar');
  const resultsCount = document.getElementById('resultsCount');
  const dictionary = window.AnagutaDictionary || window.AnagutaWords || (window.AnagutaData && window.AnagutaData.dictionary);
  
  if (!dictionary) return;

  let activeCategory = 'all';
  let activeLetter = 'all';
  let searchQuery = '';

  // 0. Render Word of the Day dynamically
  initWordOfTheDay(dictionary);

  if (!grid) return;

  // Check URL query param e.g. dictionary.html?search=Ujah
  const urlParams = new URLSearchParams(window.location.search);
  const initialSearch = urlParams.get('search');
  if (initialSearch && searchInput) {
    searchInput.value = initialSearch;
    searchQuery = initialSearch.toLowerCase();
    if (clearBtn) clearBtn.style.display = 'block';
  }

  // 1. Build Alphabet Bar
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

  // 2. Category Filter Pills
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

  // 3. Search Input
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

  // 4. Render Function
  function renderLexicon() {
    const filtered = dictionary.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Letter match
      if (activeLetter !== 'all') {
        if (!item.word.toLowerCase().startsWith(activeLetter)) {
          return false;
        }
      }

      // Search match
      if (searchQuery) {
        const matchesWord = item.word.toLowerCase().includes(searchQuery);
        const matchesMeaning = item.meaning.toLowerCase().includes(searchQuery);
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
            <button class="dict-play-btn" onclick="playAudio('${entry.word.replace(/'/g, "\\'")}', '${(entry.audioPath || '').replace(/'/g, "\\'")}', this)" title="Play native pronunciation" aria-label="Pronounce ${entry.word}">&#9658;</button>
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

  // Initial render
  renderLexicon();
}

/**
 * Word of the Day Initialization
 * Rotates through the array daily using calendar