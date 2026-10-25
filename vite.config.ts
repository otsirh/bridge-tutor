import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';
import type { OutputChunk } from 'rollup';
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

/**
 * The service worker (src/sw.js), with the app's own files to cache at install:
 * the entry chunk, what it imports statically and its CSS — not the other
 * languages, which are cached when first used. The cache name changes with the
 * file list, so each deploy replaces the previous cache.
 */
function serviceWorker(): Plugin {
  return {
    name: 'service-worker',
    apply: 'build',
    generateBundle(_, bundle) {
      const chunks = Object.values(bundle).filter((f): f is OutputChunk => f.type === 'chunk');
      const files = new Set<string>();
      const add = (c: OutputChunk) => {
        if (files.has(c.fileName)) return;
        files.add(c.fileName);
        for (const css of (c as OutputChunk & { viteMetadata?: { importedCss: Set<string> } }).viteMetadata?.importedCss ?? []) files.add(css);
        for (const i of c.imports) {
          const dep = bundle[i];
          if (dep?.type === 'chunk') add(dep);
        }
      };
      // the app, plus the English lessons (loaded on demand, but always there offline)
      for (const c of chunks) if (c.isEntry || /\/learn\/content\/en\/index\.ts$/.test(c.facadeModuleId ?? '')) add(c);
      const list = [...files].sort().map(f => `/${f}`);
      const version = createHash('sha256').update(list.join('\n')).digest('hex').slice(0, 10);
      const source = readFileSync('src/sw.js', 'utf8')
        .replace("const CACHE = 'bridge-tutor-dev';", `const CACHE = 'bridge-tutor-${version}';`)
        .replace('[/* filled in by the build */]', JSON.stringify(list));
      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    },
  };
}

/** The headers public/_headers gives every path (`/*`), for `vite preview` to send as Cloudflare does. */
function siteHeaders(): Record<string, string> {
  const out: Record<string, string> = {};
  let all = false;
  for (const line of readFileSync('public/_headers', 'utf8').split('\n')) {
    if (!line.trim() || line.startsWith('#')) continue;
    if (!/^\s/.test(line)) all = line.trim() === '/*';
    else if (all) {
      const i = line.indexOf(':');
      out[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return out;
}

// `vite build`: the website (Cloudflare) — code-split, one chunk per language.
// `vite build --mode single`: one self-contained dist-single/index.html (the
// worker and every language inlined), for hosts that take a single page.
// Files in public/ (icons, manifest, preview image) are copied next to it.
export default defineConfig(({ mode }) => {
  const single = mode === 'single';
  return {
    plugins: [siteUrl(), serviceWorker(), ...(single ? [viteSingleFile()] : [])],
    worker: { format: 'es' },
    // The main chunk holds the engine, the UI and the English text, all needed at start: about
    // 420 kB, 130 kB gzipped. Other languages and the lessons are separate chunks.
    build: { target: 'es2022', outDir: single ? 'dist-single' : 'dist', chunkSizeWarningLimit: 800 },
    preview: { headers: siteHeaders() },
    test: { environment: 'node', setupFiles: ['test/setup.ts'], exclude: ['**/node_modules/**', '**/dist/**', '.claude/**', 'e2e/**'] },
  };
});
