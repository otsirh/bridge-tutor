// Lint rules: the recommended JavaScript and TypeScript sets, with the few
// adjustments this codebase relies on. Formatting is left to .editorconfig.

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', '.claude/**', 'playwright-report/**', 'test-results/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.worker } },
    rules: {
      // like tsconfig (noUnusedLocals on, noUnusedParameters off): unused locals are errors, parameters are fine
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none', varsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    },
  },
  {
    files: ['public/sw.js'],
    languageOptions: { globals: globals.serviceworker },
  },
  {
    files: ['*.config.{js,ts}', 'e2e/**', 'test/**'],
    languageOptions: { globals: { ...globals.node } },
  },
);
