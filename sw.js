// Anaguta Tradomodern PWA Service Worker
const CACHE_NAME = 'anaguta-tradomodern-v1';

const PRECACHE_ASSETS = [
  './',
  'index.html',
  'projects.html',
  'dictionary.html',
  'articles.html',
  'article-detail.html',
  'media.html',
  'contact.html',
  'event.html',
  'css/style.css',
  'js/data.js',
  'js/app.js',
  'js/dictionary.js',
  'manifest.json',
  'images/logo-icon.jpg',
  'images/logo.png',
  'images/tri-stripe.png',
  'images/icon-192.png',
  'images/icon-512.png'
];

// Install: Pre-cache static shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate: Clean up old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch: Network-first for navigation, Stale-While-Revalidate for static assets
self.addEventListener('fetch', (event) => {
  // Only handle HTTP/HTTPS GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // If navigation request (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // Fallback to cached index.html
          return caches.match('index.html');
        })
    );
    return;
  }

  // Static assets (CSS, JS, Images, Fonts): Cache first with network fallback & background update
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed, nothing more to do if no cache
        });

      return cachedResponse || fetchPromise;
    })
  );
});
