// Languages and the active text catalogue.
//
// Every piece of text people see lives in a catalogue, one per language
// (src/i18n/<lang>/), split by area: core, ui, bidding, tutor, practice.
// English defines the shape (`Text`); every other language must provide the
// same keys with the same parameters, and the compiler checks it. Lesson
// content lives separately in src/learn/content/<lang>/.
//
// `T` is the active catalogue. Switching language replaces its areas in place,
// so read `T.ui.someKey` while rendering — never copy strings (or a whole area
// such as `T.ui`) into module-level constants.
//
// Adding a language: copy src/i18n/en to src/i18n/<id>, translate it, add the
// id to `Lang` and `LANGUAGES`, register it in LOADERS, and add lesson
// content in src/learn/content/<id> (registered in src/learn/lessons.ts;
// English lessons are used until then).

import { SEAT_NAMES, SEAT_LETTERS, SUIT_NAMES, SUIT_NAME_SINGULAR, STRAIN_SYMBOLS, STRAIN_NAMES, setCardLongName } from '../core/cards';
import { CALL_WORDS } from '../core/auction';
import { en, type Text } from './en';

export type { Text };
export type Lang = 'en' | 'bg' | 'de' | 'es' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'ru' | 'ja' | 'zh';

export interface LanguageInfo {
  id: Lang;
  name: string; // in the language itself
  locale: string; // for numbers and dates
  listSep?: string; // between items of a list (default ", ")
  unitSep?: string; // between a number and its unit (default a no-break space)
  colon?: string; // between a label and its text (default ": ")
}

export const LANGUAGES: LanguageInfo[] = [
  { id: 'en', name: 'English', locale: 'en-GB' },
  { id: 'de', name: 'Deutsch', locale: 'de-DE' },
  { id: 'es', name: 'Español', locale: 'es-ES' },
  { id: 'fr', name: 'Français', locale: 'fr-FR', colon: '\u00a0: ' },
  { id: 'it', name: 'Italiano', locale: 'it-IT' },
  { id: 'nl', name: 'Nederlands', locale: 'nl-NL' },
  { id: 'pl', name: 'Polski', locale: 'pl-PL' },
  { id: 'pt', name: 'Português', locale: 'pt-BR' },
  { id: 'bg', name: 'Български', locale: 'bg-BG' },
  { id: 'ru', name: 'Русский', locale: 'ru-RU' },
  { id: 'ja', name: '日本語', locale: 'ja-JP', listSep: '、', unitSep: '', colon: '：' },
  { id: 'zh', name: '中文', locale: 'zh-CN', listSep: '、', unitSep: '', colon: '：' },
];

/**
 * Every language but English is loaded on demand (each is its own chunk), so a
 * visitor downloads only the language they use. English is always present: it
 * is the fallback and defines the shape.
 */
const LOADERS: Record<Exclude<Lang, 'en'>, () => Promise<Text>> = {
  bg: () => import('./bg').then(m => m.bg),
  de: () => import('./de').then(m => m.de),
  es: () => import('./es').then(m => m.es),
  fr: () => import('./fr').then(m => m.fr),
  it: () => import('./it').then(m => m.it),
  nl: () => import('./nl').then(m => m.nl),
  pl: () => import('./pl').then(m => m.pl),
  pt: () => import('./pt').then(m => m.pt),
  ru: () => import('./ru').then(m => m.ru),
  ja: () => import('./ja').then(m => m.ja),
  zh: () => import('./zh').then(m => m.zh),
};
const CATALOGUES: Partial<Record<Lang, Text>> = { en };

export function isLoaded(l: Lang): boolean {
  return !!CATALOGUES[l];
}

/** Load a language's catalogue (does nothing if it is already there). Lessons load separately (src/learn/lessons.ts). */
export async function loadLang(l: Lang): Promise<void> {
  if (!CATALOGUES[l] && l !== 'en') CATALOGUES[l] = await LOADERS[l]();
}
const KEY = 'bridge-tutor.lang.v1';

/** The active catalogue. */
export const T: Text = { ...en };

let current: Lang = 'en';
const listeners = new Set<(l: Lang) => void>();

export function lang(): Lang {
  return current;
}

function info(): LanguageInfo {
  return LANGUAGES.find(l => l.id === current)!;
}

export function locale(): string {
  return info().locale;
}

export function isLang(x: unknown): x is Lang {
  return LANGUAGES.some(l => l.id === x);
}

let wanted: Lang = 'en';

/**
 * Switch language. A language that is already loaded switches at once (before
 * this returns); another is fetched first, and the switch happens when it
 * arrives unless a newer choice came in meanwhile.
 */
export async function setLang(l: Lang): Promise<void> {
  wanted = l;
  if (l === current) return;
  if (!isLoaded(l)) {
    await loadLang(l);
    if (wanted !== l) return;
  }
  apply(l);
  saveLang(l);
  for (const fn of listeners) fn(l);
}

/** Remember a language for the next visit (also used when it could not be loaded now). */
export function saveLang(l: Lang) {
  try {
    localStorage.setItem(KEY, l);
  } catch {
    /* storage may be unavailable */
  }
}

export function onLangChange(fn: (l: Lang) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function replace(target: string[], values: readonly string[]) {
  target.splice(0, target.length, ...values);
}

function apply(l: Lang) {
  current = l;
  const cat = CATALOGUES[l] ?? en;
  for (const k of Object.keys(cat) as (keyof Text)[]) (T as Record<keyof Text, unknown>)[k] = cat[k];
  const c = cat.core;
  replace(SEAT_NAMES, c.seats);
  replace(SEAT_LETTERS, c.seatLetters);
  replace(SUIT_NAMES, c.suits);
  replace(SUIT_NAME_SINGULAR, c.suitSingular);
  replace(STRAIN_NAMES, c.strains);
  STRAIN_SYMBOLS[4] = c.nt;
  setCardLongName(c.cardLong);
  CALL_WORDS.pass = c.pass;
  CALL_WORDS.double = c.double;
  CALL_WORDS.redouble = c.redouble;
  CALL_WORDS.passedOut = c.passedOut;
  if (typeof document !== 'undefined') document.documentElement.lang = l;
}

function detect(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* ignore */
  }
  const nav = typeof navigator !== 'undefined' ? (navigator.languages ?? [navigator.language]) : [];
  for (const n of nav) {
    const id = String(n).toLowerCase().split('-')[0];
    if (isLang(id)) return id;
  }
  return 'en';
}

apply('en');

/** Start in the saved (or browser) language; call once, before the first render. Falls back to English. */
export async function initLang(): Promise<void> {
  const l = detect();
  if (l === 'en') return;
  try {
    await loadLang(l);
    wanted = l;
    apply(l);
  } catch {
    /* couldn't load it (offline, first visit): stay in English */
  }
}

// ---------------------------------------------------------------------------
// Formatting in the active locale

/** A number with a fixed number of decimals ("0.75" / "0,75"). */
export function fmtNum(x: number, digits = 0): string {
  return x.toLocaleString(locale(), { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** A fraction 0..1 as a percentage ("68%"; "68 %" in French or German). */
export function fmtPct(frac: number, digits = 0): string {
  return frac.toLocaleString(locale(), { style: 'percent', minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** A signed whole number ("+3", "−2", "0"). */
export function fmtSigned(x: number): string {
  return x > 0 ? `+${x}` : x < 0 ? `−${-x}` : '0';
}

/** Items as a list ("A, B, C"; "A、B、C" in Japanese and Chinese). */
export function fmtList(items: readonly string[]): string {
  return items.join(info().listSep ?? ', ');
}

/** A number with its unit ("13 HCP", kept on one line; "13点" in Chinese). */
export function fmtUnit(n: number | string, unit: string): string {
  return `${n}${info().unitSep ?? '\u00a0'}${unit}`;
}

/** A label and its text ("Board 3: 4♥ by South"; "Donne 3 : …" in French). */
export function fmtLabel(label: string, text: string): string {
  return `${label}${info().colon ?? ': '}${text}`;
}

/** The first clause of a sentence, up to its first colon or full stop. */
export function firstClause(s: string): string {
  return s.split(/[:.;：。；]/)[0].trim();
}

export function fmtDate(ms: number): string {
  return new Date(ms).toLocaleDateString(locale());
}
