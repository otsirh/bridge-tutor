import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';
import pkg from './package.json' with { type: 'json' };
import { viteSingleFile } from 'vite-plugin-singlefile';

/**
 * Link previews need absolute URLs: SITE_URL if set, else the site's address
 * from package.json for production builds on Cloudflare (main branch), else
 * that deployment's own URL; with none of these, the tags are dropped.
 */
function siteUrl(): Plugin {
  const branch = process.env.CF_PAGES_BRANCH;
  const url = (process.env.SITE_URL || (branch === 'main' ? pkg.homepage : process.env.CF_PAGES_URL) || '').replace(/\/$/, '');
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
});
