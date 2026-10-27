/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - SERVICE WORKER (sw.js)
 * ============================================================================
 * HOW UPDATES WORK
 *  - Pages, CSS, JS and JSON are fetched from the network first, so edits you upload
 *    show up on their own. You do NOT need to change the version for those.
 *  - Images refresh in the background: a visitor sees the saved copy instantly, and
 *    the new one is downloaded for next time. Replacing a photo with the same file
 *    name therefore updates by itself within one or two visits.
 *  - Change CACHE_NAME below only when you edit THIS file (for example to add a new
 *    page to the offline list). Visitors then see the "A new version is available" banner.
 *
 * WHEN A NEW PAGE OR SCRIPT IS ADDED TO THE SITE: add it to ASSETS_TO_CACHE so it is
 * saved for offline use right away. (Anything a visitor opens while online is also saved
 * automatically as they browse.)
 * ============================================================================
 */

const CACHE_NAME = 'anaguta-cache-v1.4.2.0.0.7';

// On a slow or "one bar" connection, wait this long for the network before showing the saved copy.
const NETWORK_TIMEOUT_MS = 4000;

const ASSETS_TO_CACHE = [
  './',

  // --- PAGES ---
  './index.html',
  './about_us.html',
  './history.html',
  './dictionary.html',
  './gallery.html',
  './articles.html',
  './article-detail.html',
  './event.html',
  './contact.html',
  './projects.html',
  './manifest.json',

  // --- STYLES & SCRIPTS ---
  './css/style.css',
  './js/layout.js',
  './js/app.js',
  './js/data.js',
  './js/dictionary-data.js',
  './js/dictionary.js',
  './js/articles-data.js',
  './js/articles-pages.js',
  './js/articles.js',
  './js/event.js',
  './js/forms.js',

  // --- IMAGES SHOWN ON EVERY PAGE ---
  './images/logo.png',
  './images/mobile_icon.png',
  './images/tri-stripe.png',

  // --- NATIVE AUDIO FILES ---
  './audio/ujah.mp3',
  './audio/farm.MP3',
  './audio/chair.mp3',
  './audio/eye.mp3',
  './audio/ear.mp3',
  './audio/head.mp3',
  './audio/mouth.mp3',
  './audio/nose.mp3',
  './audio/tooth.mp3',
  './audio/nishi.mp3',
  './audio/igbun.mp3',
  './audio/kuta.mp3',
  './audio/ran.mp3',
  './audio/watash.mp3',
  './audio/san-kpa.mp3',
  './audio/ishokori.mp3',
  './audio/gwat.mp3',
  './audio/pozoh.mp3'
];

// Install: pre-cache everything (one missing file won't break the install)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        ASSETS_TO_CACHE.map(async (url) => {
          try {
            await cache.add(new Request(url, { cache: 'reload' }));
          } catch (err) {
            console.warn('[Service Worker] Failed to cache:', url, err);
          }
        })
      );
    })
  );
});

// Let the "Update now" banner activate the waiting worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Activate: delete old caches, then take control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// Save a copy of a good response (skips partial 206 responses, which cannot be cached)
function remember(req, res) {
  if (res && res.status === 200) {
    const copy = res.clone();
    caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
  }
}

// Pages / CSS / JS: network first, but never leave a visitor waiting on a weak connection.
// If the network is slower than NETWORK_TIMEOUT_MS and a saved copy exists, show that;
// the network answer still arrives and is saved for the next visit.
function networkFirst(req) {
  return new Promise((resolve) => {
    let settled = false;

    const useSaved = () =>
      caches.match(req, { ignoreSearch: true }).then((hit) => {
        if (hit && !settled) {
          settled = true;
          resolve(hit);
        }
        return hit;
      });

    const timer = setTimeout(useSaved, NETWORK_TIMEOUT_MS);

    fetch(req, { cache: 'no-cache' })
      .then((res) => {
        clearTimeout(timer);
        remember(req, res);
        if (!settled) {
          settled = true;
          resolve(res);
        }
      })
      .catch(() => {
        clearTimeout(timer);
        if (settled) return;
        useSaved().then((hit) => {
          if (!hit && !settled) {
            settled = true;
            resolve(Response.error());
          }
        });
      });
  });
}

// Images: show the saved copy instantly, refresh it in the background
function imageRefresh(req) {
  return caches.match(req).then((hit) => {
    // 'no-cache' = ask the server "has this changed?" (a tiny reply when it has not),
    // so a replaced photo is picked up even when the browser thinks its copy is still fresh
    const fresh = fetch(req, { cache: 'no-cache' })
      .then((res) => {
        remember(req, res);
        return res;
      })
      .catch(() => hit);
    return hit || fresh;
  });
}

// Audio and anything else: saved copy first (these rarely change)
function cacheFirst(req) {
  return caches.match(req).then((hit) => {
    if (hit) return hit;
    return fetch(req).then((res) => {
      remember(req, res);
      return res;
    });
  });
}

// Fetch
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin GET requests
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  const isCode =
    req.mode === 'navigate' ||
    /\.(html|css|js|json)$/.test(url.pathname) ||
    url.pathname.endsWith('/');

  const isImage =
    req.destination === 'image' ||
    /\.(png|jpe?g|jfif|webp|gif|svg|avif|ico)$/i.test(url.pathname);

  if (isCode) {
    event.respondWith(networkFirst(req));
  } else if (isImage) {
    event.respondWith(imageRefresh(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
});
