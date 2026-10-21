import { defineConfig, type Plugin } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

/**
 * Link previews need absolute URLs. Use SITE_URL if set, else the deployment
 * URL Cloudflare Pages provides while building; without either, drop the tags.
 */
function siteUrl(): Plugin {
  const url = (process.env.SITE_URL || process.env.CF_PAGES_URL || '').replace(/\/$/, '');
  return {
    name: 'site-url',
    transformIndexHtml: html => (url ? html.replaceAll('%SITE_URL%', url) : html.replace(/^.*%SITE_URL%.*\n/gm, '')),
  };
}

// Single-file build: dist/index.html runs by itself (worker is inlined as a blob).
// Files in public/ (icons, manifest, service worker, preview image) are copied next to it.
export default defineConfig({
  plugins: [siteUrl(), viteSingleFile()],
  worker: { format: 'es' },
  build: { target: 'es2022' },
  test: { environment: 'node', exclude: ['**/node_modules/**', '**/dist/**', '.claude/**', 'e2e/**'] },
} as any);
