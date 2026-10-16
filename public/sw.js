const CACHE_NAME = 'anaguta-cache-v1.1.7';

// 1. List all native audio files to cache permanently for offline use
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
// 2. Install event: Pre-cache audio files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching native audio & static assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Removed self.skipWaiting() here so it waits for the user to trigger the update prompt
});

// 3. Listen for message from app to force activation (SKIP_WAITING)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 4. Activate event: Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 5. Fetch event: Cache-First strategy for Audio & Static Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached native audio file immediately if offline
      if (cachedResponse) {
        return cachedResponse;
      }
      // Otherwise fetch from network
      return fetch(event.request);
    })
  );
});