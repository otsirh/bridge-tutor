import './i18n';
import './ui/styles.css';
import { mountApp } from './ui/app';

mountApp(document.getElementById('app')!);

// Offline support and installing as an app, where the page is the site itself
// (not inside a frame, and not the dev server).
if (import.meta.env.PROD && 'serviceWorker' in navigator && location.protocol === 'https:' && window.top === window) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
