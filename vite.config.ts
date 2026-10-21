import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Single-file build: dist/index.html runs by itself (worker is inlined as a blob).
export default defineConfig({
  plugins: [viteSingleFile()],
  worker: { format: 'es' },
  build: { target: 'es2022' },
  test: { environment: 'node', exclude: ['**/node_modules/**', '**/dist/**', '.claude/**'] },
} as any);
