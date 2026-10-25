const CACHE_NAME = 'anaguta-cache-v1.3.1.6';   // bump this on every deploy

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './dictionary.html',
  './css/style.css',
  './js/dictionary-data.js',
  './js/dictionary.js',
  './js/app.js',

  // --- NATIVE AUDIO FILES ---
  './audio/ujah.mp3',
  './audio/kinaru.mp3',
  './audio/mba.mp3',
  './audio/tukwi.mp3',
  './audio/gwash.mp3',
  './audio/miri.mp3',
  './audio/biro.mp3',
  './audio/shanu.mp3',
  './audio/zana.mp3',
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

  if (isCode) {
    // NETWORK-FIRST: always fresh when online, cached copy when offline
    event.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }))
    );
  } else {
    // CACHE-FIRST: audio, images (rarely change, fast and offline-ready)
    event.respondWith(
      caches.match(req).then((hit) => {
        if (hit) return hit;
        return fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        });
      })
    );
  }
});