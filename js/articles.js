/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - CONTENT CONTROLLER (js/articles.js)
 * ============================================================================
 * One data file (js/articles-data.js) holds everything. Each entry has
 * type: "project" or "article".
 *
 * articles.html
 *   - Projects / Articles tabs
 *   - Category filter buttons are built automatically from the data
 *   - Search, newest-first ordering (by the "date" field)
 *   - URL stays shareable: articles.html?type=project&cat=Expeditions
 *
 * article-detail.html?id=N
 *   - Reader for either type, with related items of the same type
 * ============================================================================
 */

const SITE_BASE = 'https://garba-js.github.io/anaguta/';

const TYPE_INFO = {
  project: {
    pageTitle: 'Community Projects | Anaguta Tradomodern',
    eyebrow: 'Action \u00b7 Impact \u00b7 Heritage',
    title: 'Our <em>Projects</em>',
    text: 'Grassroots community initiatives, field expeditions, anthropological recordings, and youth programs bridging our past and future.',
    placeholder: 'Search projects by title, topic, or keyword...',
    allLabel: 'All Projects',
    cta: 'Read Full Story',
    back: '\u2190 Back to All Projects',
    related: 'Related <em>Projects</em>',
    singular: 'Project'
  },
  article: {
    pageTitle: 'Cultural Essays & Articles | Anaguta Tradomodern',
    eyebrow: 'Essays \u00b7 Archives \u00b7 Memoirs',
    title: 'Cultural <em>Essays</em> &amp;<br>Stories',
    text: 'In-depth historical analyses, elder memoirs, anthropological records, and literary reflections on Anaguta heritage.',
    placeholder: 'Search essays by title, topic, or keyword...',
    allLabel: 'All Essays',
    cta: 'Read Full Essay',
    back: '\u2190 Back to All Essays',
    related: 'Related <em>Essays</em>',
    singular: 'Article'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('articlesListGrid')) initListing();
  if (document.getElementById('articleContainer')) initArticleReader();
  if (document.getElementById('homeProjectsGrid') || document.getElementById('homeArticlesGrid')) initHomeFeed();
});

/* ---------- helpers ---------- */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Newest first, based on the "date" field. Ties keep the order written in the data file.
function getItems() {
  const list = (window.AnagutaArticles || []).map((a, i) => ({ a, i }));
  list.sort((x, y) => {
    const dx = Date.parse(x.a.date) || 0;
    const dy = Date.parse(y.a.date) || 0;
    return dy - dx || x.i - y.i;
  });
  return list.map((o) => o.a);
}

// Anything without type: "project" is treated as an article, so old entries never break.
function itemType(a) {
  return a.type === 'project' ? 'project' : 'article';
}

/* ---------- 1. Listing page (articles.html) ---------- */

function initListing() {
  const grid = document.getElementById('articlesListGrid');
  const searchInput = document.getElementById('articlesSearchInput');
  const filterBar = document.getElementById('articlesFilterBar');
  const tabs = document.querySelectorAll('.type-tab');
  if (!grid || !filterBar) return;

  const items = getItems();
  const params = new URLSearchParams(window.location.search);

  let activeType = params.get('type') === 'project' ? 'project' : 'article';
  let activeCategory = params.get('cat') || 'all';
  let searchQuery = '';

  const ofType = () => items.filter((a) => itemType(a) === activeType);

  function applyType() {
    const info = TYPE_INFO[activeType];
    document.title = info.pageTitle;

    const eyebrow = document.getElementById('heroEyebrow');
    const title = document.getElementById('heroTitle');
    const text = document.getElementById('heroText');
    if (eyebrow) eyebrow.textContent = info.eyebrow;
    if (title) title.innerHTML = info.title;
    if (text) text.textContent = info.text;
    if (searchInput) searchInput.placeholder = info.placeholder;

    tabs.forEach((t) => {
      const on = t.dataset.type === activeType;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      const count = t.querySelector('.type-count');
      if (count) count.textContent = items.filter((a) => itemType(a) === t.dataset.type).length;
    });

    document.querySelectorAll('[data-nav-type]').forEach((a) => {
      a.classList.toggle('active', a.dataset.navType === activeType);
    });

    // Impact numbers only make sense on the Projects tab
    const stats = document.getElementById('projectStats');
    if (stats) stats.hidden = activeType !== 'project';
  }

  function buildFilters() {
    const cats = [...new Set(ofType().map((a) => a.category).filter(Boolean))];
    if (activeCategory !== 'all' && !cats.includes(activeCategory)) activeCategory = 'all';

    const allBtn = `<button class="filter-pill article-filter-btn${activeCategory === 'all' ? ' active' : ''}" data-category="all">${esc(TYPE_INFO[activeType].allLabel)}</button>`;
    const catBtns = cats
      .map(
        (c) =>
          `<button class="filter-pill article-filter-btn${c === activeCategory ? ' active' : ''}" data-category="${esc(c)}">${esc(c)}</button>`
      )
      .join('');
    filterBar.innerHTML = allBtn + catBtns;
  }

  function render() {
    const info = TYPE_INFO[activeType];
    const filtered = ofType().filter((art) => {
      if (activeCategory !== 'all' && art.category !== activeCategory) return false;
      if (searchQuery) {
        const hay = [art.title, art.author, art.excerpt, art.category, (art.tags || []).join(' ')]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(searchQuery)) return false;
      }
      return true;
    });

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>Nothing Found</h3>
          <p>Try different search words or another category.</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (art) => `
        <div class="project-card reveal visible">
          <div class="project-card-img">
            <img src="${esc(art.image || 'images/culture (11).webp')}" alt="${esc(art.title)}" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">${esc(art.category)} &middot; ${esc(art.readTime || '5 min read')}</span>
            <h3 class="project-card-title">${esc(art.title)}</h3>
            <p>${esc(art.excerpt || '')}</p>
            <a href="article-detail.html?id=${encodeURIComponent(art.id)}" class="btn-text">${info.cta}</a>
          </div>
        </div>`
      )
      .join('');
  }

  function updateUrl() {
    const p = new URLSearchParams();
    p.set('type', activeType);
    if (activeCategory !== 'all') p.set('cat', activeCategory);
    history.replaceState(null, '', window.location.pathname + '?' + p.toString());
  }

  function refresh() {
    applyType();
    buildFilters();
    render();
    updateUrl();
  }

  function setType(type) {
    activeType = type;
    activeCategory = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    refresh();
  }

  // Tabs
  tabs.forEach((t) => t.addEventListener('click', () => setType(t.dataset.type)));

  // Navbar "Projects" / "Articles" links switch tabs without reloading
  document.querySelectorAll('[data-nav-type]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      setType(a.dataset.navType);
      if (window.closeMobile) window.closeMobile();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Category buttons (built dynamically, so use delegation)
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.article-filter-btn');
    if (!btn) return;
    activeCategory = btn.dataset.category || 'all';
    buildFilters();
    render();
    updateUrl();
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      render();
    });
  }

  refresh();
}

/* ---------- 2. Reader page (article-detail.html?id=N) ---------- */

function initArticleReader() {
  const container = document.getElementById('articleContainer');
  const reveal = () => container && container.classList.add('ready');
  try {
    renderArticle();
  } finally {
    reveal(); // always show the page, even if something above failed
  }
}

function renderArticle() {
  const articles = getItems();
  if (!articles.length) return;

  const params = new URLSearchParams(window.location.search);
  const rawId = params.get('id');
  const article = articles.find((a) => String(a.id) === String(rawId)) || articles[0];

  const type = itemType(article);
  const info = TYPE_INFO[type];

  // SEO: page title and meta tags for the selected item
  const pageUrl = SITE_BASE + 'article-detail.html?id=' + article.id;
  document.title = article.title + ' | Anaguta Tradomodern';

  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };
  const imageUrl = article.image ? SITE_BASE + encodeURI(article.image) : '';
  setMeta('meta[name="description"]', article.excerpt || '');
  setMeta('meta[property="og:title"]', article.title);
  setMeta('meta[property="og:description"]', article.excerpt || '');
  setMeta('meta[property="og:url"]', pageUrl);
  setMeta('meta[name="twitter:title"]', article.title);
  setMeta('meta[name="twitter:description"]', article.excerpt || '');
  if (imageUrl) {
    setMeta('meta[property="og:image"]', imageUrl);
    setMeta('meta[name="twitter:image"]', imageUrl);
  }
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', pageUrl);

  // Fill the page
  const set = (id, fn) => {
    const el = document.getElementById(id);
    if (el) fn(el);
  };
  set('articleTitle', (el) => (el.textContent = article.title));
  set('articleCategory', (el) => (el.textContent = info.singular + ' \u00b7 ' + article.category));
  set('articleReadTime', (el) => (el.textContent = article.readTime || '5 min read'));
  set('articleDate', (el) => (el.textContent = article.date || ''));
  set('articleAuthor', (el) => (el.textContent = 'By ' + (article.author || 'Tradomodern Research Team')));
  set('articleImg', (el) => {
    if (article.image) {
      el.src = article.image;
      el.alt = article.title;
    }
  });
  set('articleBody', (el) => {
    if (article.content) el.innerHTML = article.content;
  });
  renderGallery(article);
  renderShare(article, pageUrl, info.singular);

  // Back button + related heading follow the type
  set('backLink', (el) => {
    el.href = 'articles.html?type=' + type;
    el.innerHTML = info.back;
  });
  set('relatedTitle', (el) => (el.innerHTML = info.related));

  // Navbar highlight
  document.querySelectorAll('[data-nav-type]').forEach((a) => {
    a.classList.toggle('active', a.dataset.navType === type);
  });

  // Related: same type, same category first
  const relatedContainer = document.getElementById('relatedArticlesList');
  if (relatedContainer) {
    const related = articles
      .filter((a) => a.id !== article.id && itemType(a) === type)
      .sort((x, y) => (y.category === article.category) - (x.category === article.category))
      .slice(0, 2);

    if (!related.length) {
      const section = document.querySelector('.related-articles-section');
      if (section) section.style.display = 'none';
      return;
    }

    relatedContainer.innerHTML = related
      .map(
        (rel) => `
        <div class="project-card reveal visible">
          <div class="project-card-img">
            <img src="${esc(rel.image || 'images/culture (11).webp')}" alt="${esc(rel.title)}" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">${esc(rel.category)}</span>
            <h3 class="project-card-title">${esc(rel.title)}</h3>
            <p>${esc(rel.excerpt || '')}</p>
            <a href="article-detail.html?id=${encodeURIComponent(rel.id)}" class="btn-text">${info.cta}</a>
          </div>
        </div>`
      )
      .join('');
  }
}

/* ---------- 3. Photo carousel (optional "gallery" field in the data) ---------- */
// gallery: ["images/a.webp", "images/b.webp"]  or  [{ src: "images/a.webp", caption: "Optional caption" }]
function renderGallery(article) {
  const host = document.getElementById('articleGallery');
  if (!host) return;

  const photos = (article.gallery || [])
    .map((g, i) => {
      const o = typeof g === 'string' ? { src: g } : g;
      return { src: o.src, caption: o.caption || '', alt: o.alt || o.caption || article.title + ' \u2014 photo ' + (i + 1) };
    })
    .filter((g) => g.src);

  if (!photos.length) {
    host.style.display = 'none';
    return;
  }

  const many = photos.length > 1;
  host.innerHTML = `
    <span class="section-label">Photo Gallery</span>
    <div class="gc-viewport">
      <div class="gc-track" tabindex="0" aria-label="Photo gallery, use arrow keys or swipe">
        ${photos
          .map(
            (g, i) => `
          <figure class="gc-slide">
            <img src="${esc(g.src)}" alt="${esc(g.alt)}" ${i === 0 ? '' : 'loading="lazy"'} />
          </figure>`
          )
          .join('')}
      </div>
      ${many ? '<button type="button" class="gc-btn gc-prev" aria-label="Previous photo">&#8249;</button><button type="button" class="gc-btn gc-next" aria-label="Next photo">&#8250;</button>' : ''}
    </div>
    <div class="gc-meta">
      <p class="gc-caption"></p>
      ${many ? '<span class="gc-count"></span>' : ''}
    </div>
    ${many ? `<div class="gc-dots">${photos.map((_, i) => `<button type="button" class="gc-dot" data-i="${i}" aria-label="Go to photo ${i + 1}"></button>`).join('')}</div>` : ''}
  `;

  const track = host.querySelector('.gc-track');
  const dots = host.querySelectorAll('.gc-dot');
  const caption = host.querySelector('.gc-caption');
  const count = host.querySelector('.gc-count');
  let current = 0;

  const goTo = (i) => {
    const n = photos.length;
    track.scrollTo({ left: ((i % n) + n) % n * track.clientWidth, behavior: 'smooth' });
  };

  const update = () => {
    current = Math.round(track.scrollLeft / (track.clientWidth || 1));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (count) count.textContent = current + 1 + ' / ' + photos.length;
    if (caption) caption.textContent = (photos[current] && photos[current].caption) || '';
  };

  track.addEventListener('scroll', () => window.requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', () => goTo(current));
  const prev = host.querySelector('.gc-prev');
  const next = host.querySelector('.gc-next');
  if (prev) prev.addEventListener('click', () => goTo(current - 1));
  if (next) next.addEventListener('click', () => goTo(current + 1));
  dots.forEach((d) => d.addEventListener('click', () => goTo(parseInt(d.dataset.i, 10))));
  update();
}

/* ---------- 4. Homepage feed: newest projects + newest articles ---------- */
// How many cards the homepage shows in each section. Change the numbers if you want more or fewer.
const HOME_FEED = { projects: 3, articles: 3 };

function initHomeFeed() {
  const items = getItems(); // already newest first

  const fill = (gridId, type, limit) => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const list = items.filter((a) => itemType(a) === type).slice(0, limit);

    // Nothing of this type yet: hide the whole section instead of showing an empty gap
    if (!list.length) {
      const section = grid.closest('section');
      if (section) section.style.display = 'none';
      return;
    }

    const cta = TYPE_INFO[type].cta;
    grid.innerHTML = list
      .map(
        (art) => `
        <div class="project-card reveal visible">
          <div class="project-card-img">
            <img src="${esc(art.image || 'images/culture (11).webp')}" alt="${esc(art.title)}" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">${esc(art.category)} &middot; ${esc(art.readTime || '5 min read')}</span>
            <h3 class="project-card-title">${esc(art.title)}</h3>
            <p>${esc(art.excerpt || '')}</p>
            <a href="article-detail.html?id=${encodeURIComponent(art.id)}" class="btn-text">${cta}</a>
          </div>
        </div>`
      )
      .join('');
  };

  fill('homeProjectsGrid', 'project', HOME_FEED.projects);
  fill('homeArticlesGrid', 'article', HOME_FEED.articles);
}

/* ---------- 5. Share buttons under every article / project ---------- */
function renderShare(article, url, noun) {
  const host = document.getElementById('shareBar');
  if (!host) return;

  const enc = encodeURIComponent;
  const text = article.title + ' \u2014 Anaguta Tradomodern';
  const svg = (paths) =>
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + paths + '</svg>';

  const ICON = {
    whatsapp: svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
    facebook: svg('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'),
    x: svg('<line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>'),
    link: svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
    share: svg('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>')
  };

  const links = [
    ['WhatsApp', 'https://wa.me/?text=' + enc(text + '\n' + url), ICON.whatsapp],
    ['Facebook', 'https://www.facebook.com/sharer/sharer.php?u=' + enc(url), ICON.facebook],
    ['X', 'https://twitter.com/intent/tweet?text=' + enc(text) + '&url=' + enc(url), ICON.x]
  ];

  host.innerHTML =
    '<span class="share-label">Share this ' + esc(noun.toLowerCase()) + '</span>' +
    '<div class="share-buttons">' +
    (navigator.share
      ? '<button type="button" class="share-btn" data-share="native">' + ICON.share + '<span>Share</span></button>'
      : '') +
    links
      .map(
        (l) =>
          '<a class="share-btn" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + l[2] + '<span>' + l[0] + '</span></a>'
      )
      .join('') +
    '<button type="button" class="share-btn" data-share="copy">' + ICON.link + '<span>Copy link</span></button>' +
    '</div>';

  const native = host.querySelector('[data-share="native"]');
  if (native) {
    native.addEventListener('click', () => {
      navigator.share({ title: article.title, text: text, url: url }).catch(() => {});
    });
  }

  const copyBtn = host.querySelector('[data-share="copy"]');
  const copyLabel = copyBtn.querySelector('span');
  copyBtn.addEventListener('click', () => {
    const done = () => {
      copyLabel.textContent = 'Link copied \u2713';
      setTimeout(() => (copyLabel.textContent = 'Copy link'), 2200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done, done);
    } else {
      const t = document.createElement('textarea');
      t.value = url;
      document.body.appendChild(t);
      t.select();
      try { document.execCommand('copy'); } catch (e) {}
      t.remove();
      done();
    }
  });
}
