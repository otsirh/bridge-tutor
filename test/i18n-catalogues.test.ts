// Every language's catalogue is complete and actually translated: same text
// keys as English, nothing empty, and only a small share left identical to
// English (symbols, abbreviations and convention names such as "Stayman").

import { describe, it, expect, afterAll } from 'vitest';
import { LANGUAGES, T, setLang } from '../src/i18n';

/** Every string in the catalogue (functions aside), by path. */
function texts(o: unknown, path = '', out = new Map<string, string>()): Map<string, string> {
  if (typeof o === 'string') out.set(path, o);
  else if (Array.isArray(o)) o.forEach((v, i) => texts(v, `${path}[${i}]`, out));
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) texts(v, path ? `${path}.${k}` : k, out);
  return out;
}

describe('catalogues', () => {
  afterAll(() => setLang('en'));
  setLang('en');
  const en = texts(T);

  for (const { id, name } of LANGUAGES.filter(l => l.id !== 'en')) {
    it(`${name} is complete and translated`, () => {
      setLang(id);
      const own = texts(T);
      expect([...own.keys()].sort()).toEqual([...en.keys()].sort());
      for (const [k, v] of own) expect(v.trim(), k).not.toBe('');
      const same = [...own].filter(([k, v]) => v === en.get(k) && /[a-z]{3}/i.test(v)).map(([k]) => k);
      expect(same.length / own.size, same.join(', ')).toBeLessThan(0.06);
    });
  }
});
