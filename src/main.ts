import { initLang } from './i18n';
import './ui/styles.css';
import { mountApp } from './ui/app';

// the saved or browser language is loaded before the first render
await initLang();
const root = document.getElementById('app')!;
root.replaceChildren(); // the placeholder shown while loading
mountApp(root);

// Offline support and installing as an app, where the page is the site itself
// (not inside a frame, and not the dev server).
if (import.meta.env.PROD && 'serviceWorker' in navigator && location.protocol === 'https:' && window.top === window) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
