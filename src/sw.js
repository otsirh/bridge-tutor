// Offline support. The page is served network-first (a new deploy is picked
// up whenever you're online) with the cached copy as the fallback; the app's
// own code is cached at install, and other languages, icons and the Google
// fonts are cached as they are used. Built files (/assets/, hashed names) are
// served from the cache once there; the rest is refreshed in the background.
// The build (vite.config.ts) fills in the file list and a version, so each
// deploy gets a fresh cache; an open tab moves to it at its next deal
// (src/ui/update.ts).

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
  const store = res => {
    const copy = res.clone();
    event.waitUntil(caches.open(CACHE).then(c => c.put(req.mode === 'navigate' ? '/' : req, copy)));
  };
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) store(res);
          return res;
        })
        .catch(() => caches.match('/')),
    );
    return;
  }
  const url = new URL(req.url);
  if (!cacheable(url)) return;
  // the build's files never change under the same name: a cached copy needs no second look
  if (url.origin === self.location.origin && url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(req).then(
        hit =>
          hit ||
          fetch(req).then(res => {
            if (res.ok) store(res);
            return res;
          }),
      ),
    );
    return;
  }
  // everything else: stale-while-revalidate, the refresh kept alive until it is stored
  const fresh = fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') store(res);
    return res;
  });
  event.waitUntil(fresh.catch(() => {}));
  event.respondWith(caches.match(req).then(hit => hit || fresh));
});
