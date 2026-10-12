/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - DEDICATED ARTICLES CONTROLLER (js/articles.js)
 * ============================================================================
 * Handles:
 * - Dynamic rendering of all essays on articles.html from AnagutaArticles
 * - Instant search and category filtering for articles
 * - Single article reader view on article-detail.html by URL parameter (?id=1)
 * - Related articles suggestions
 */

document.addEventListener('DOMContentLoaded', () => {
  // If on articles.html (list view)
  if (document.getElementById('articlesListGrid')) {
    initArticlesList();
  }

  // If on article-detail.html (reader view)
  if (document.getElementById('articleContainer')) {
    initArticleReader();
  }
});

// 1. Articles Directory List View
function initArticlesList() {
  const grid = document.getElementById('articlesListGrid');
  const searchInput = document.getElementById('articlesSearchInput');
  const filterBtns = document.querySelectorAll('.article-filter-btn');

  if (!grid || !window.AnagutaArticles) return;

  const articles = window.AnagutaArticles;
  let activeCategory = 'all';
  let searchQuery = '';

  function render() {
    const filtered = articles.filter((art) => {
      // Category match
      if (activeCategory !== 'all' && art.category !== activeCategory) {
        return false;
      }

      // Search match
      if (searchQuery) {
        const titleMatch = art.title.toLowerCase().includes(searchQuery);
        const authorMatch = (art.author || '').toLowerCase().includes(searchQuery);
        const excerptMatch = (art.excerpt || '').toLowerCase().includes(searchQuery);
        const tagMatch = (art.tags || []).some((t) => t.toLowerCase().includes(searchQuery));
        if (!titleMatch && !authorMatch && !excerptMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    });

    if (!filtered.length) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: #fff; border: 1px solid var(--border-light);">
          <h3 style="font-family: var(--serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--deep-brown);">No Articles Found</h3>
          <p style="color: var(--muted); font-size: 0.95rem;">Try adjusting your search terms or selecting another category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (art) => `
        <div class="project-card reveal visible">
          <div class="project-card-img">
            <img src="${art.image || 'images/culture (11).webp'}" alt="${art.title}" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">${art.category} &middot; ${art.readTime || '5 min read'}</span>
            <h3 class="project-card-title">${art.title}</h3>
            <p>${art.excerpt || ''}</p>
            <a href="article-detail.html?id=${art.id}" class="btn-text">Read Full Essay</a>
          </div>
        </div>
      `
      )
      .join('');
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      render();
    });
  }

  // Filter button listeners
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || 'all';
      render();
    });
  });

  // Initial render
  render();
}

// 2. Single Article Reader View
function initArticleReader() {
  if (!window.AnagutaArticles) return;

  const params = new URLSearchParams(window.location.search);
  const rawId = params.get('id') || '1';
  const id = isNaN(rawId) ? rawId : parseInt(rawId, 10);

  const articles = window.AnagutaArticles;
  const article = articles.find((a) => a.id === id || a.id === rawId) || articles[0];

  if (!article) return;

  // Populate elements
  const titleEl = document.getElementById('articleTitle');
  const catEl = document.getElementById('articleCategory');
  const readTimeEl = document.getElementById('articleReadTime');
  const dateEl = document.getElementById('articleDate');
  const authorEl = document.getElementById('articleAuthor');
  const imgEl = document.getElementById('articleImg');
  const bodyEl = document.getElementById('articleBody');

  if (titleEl) titleEl.textContent = article.title;
  if (catEl) catEl.textContent = article.category;
  if (readTimeEl) readTimeEl.textContent = article.readTime || '5 min read';
  if (dateEl) dateEl.textContent = article.date || 'October 2026';
  if (authorEl) authorEl.textContent = 'By ' + (article.author || 'Tradomodern Research Team');
  if (imgEl && article.image) imgEl.src = article.image;
  if (bodyEl && article.content) bodyEl.innerHTML = article.content;

  // Render Related Articles suggestions
  const relatedContainer = document.getElementById('relatedArticlesList');
  if (relatedContainer) {
    const related = articles.filter((a) => a.id !== article.id).slice(0, 2);
    relatedContainer.innerHTML = related
      .map(
        (rel) => `
        <div class="project-card reveal visible">
          <div class="project-card-img">
            <img src="${rel.image || 'images/culture (11).webp'}" alt="${rel.title}" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">${rel.category}</span>
            <h3 class="project-card-title">${rel.title}</h3>
            <p>${rel.excerpt || ''}</p>
            <a href="article-detail.html?id=${rel.id}" class="btn-text">Read Essay</a>
          </div>
        </div>
      `
      )
      .join('');
  }
}
