// A new version deployed while the app is open: the service worker takes over
// at once, but the page keeps running the old code, whose lazily loaded files
// (other languages, lessons) are no longer on the server. The page moves to the
// new version at the next natural break, when a new deal is asked for, so a
// hand in progress is never lost.

let ready = false;

/** Watch for a new version taking over (call once the service worker is registered). */
export function watchForUpdates() {
  const sw = navigator.serviceWorker;
  // the first install also takes control: that is no update
  if (!sw?.controller) return;
  sw.addEventListener('controllerchange', () => {
    // a reload may already have brought the new code (the page is fetched network-first): compare the entry script
    const mine = document.querySelector('script[type="module"][src]')?.getAttribute('src');
    void fetch('/', { cache: 'no-store' })
      .then(r => r.text())
      .then(html => {
        if (mine && !html.includes(mine)) ready = true;
      })
      .catch(() => {});
  });
}

/** A new version is waiting for the page to reload. */
export const updateReady = () => ready;
