// Offline support. The page is served network-first (a new deploy is picked
// up whenever you're online) with the cached copy as the fallback; the app's
// own code is cached at install, and other languages, icons and the Google
// fonts are cached as they are used. The build (vite.config.ts) fills in the
// file list and a version, so each deploy gets a fresh cache.

const CACHE = 'bridge-tutor-dev';
const PRECACHE = [/* filled in by the build */];
const CORE = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', ...PRECACHE];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const cacheable = url =>
  url.origin === self.location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put('/', copy));
          }
          return res;
        })
        .catch(() => caches.match('/')),
    );
    return;
  }
  const url = new URL(req.url);
  if (!cacheable(url)) return;
  // stale-while-revalidate
  event.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req)
        .then(res => {
          if (res.ok || res.type === 'opaque') {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    }),
  );
});
