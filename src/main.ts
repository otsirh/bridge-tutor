import { initLang } from './i18n';
import './ui/styles.css';
import { mountApp } from './ui/app';
import { watchForUpdates } from './ui/update';

// the web fonts load as a print stylesheet so they never hold up the first paint; once in, they apply
// (done here rather than in an inline onload, which the content security policy would block)
const fonts = document.querySelector<HTMLLinkElement>('link[data-fonts]');
if (fonts) {
  if (fonts.sheet) fonts.media = 'all';
  else fonts.addEventListener('load', () => (fonts.media = 'all'), { once: true });
}

// the saved or browser language is loaded before the first render
await initLang();
const root = document.getElementById('app')!;
root.replaceChildren(); // the placeholder shown while loading
mountApp(root);

// Offline support and installing as an app, where the page is the site itself
// (not inside a frame, and not the dev server).
if (import.meta.env.PROD && 'serviceWorker' in navigator && location.protocol === 'https:' && window.top === window) {
  navigator.serviceWorker.register('/sw.js').then(watchForUpdates, () => {});
}
