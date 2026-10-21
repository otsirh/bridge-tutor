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
// id to `Lang` and `LANGUAGES`, register it in CATALOGUES, and add lesson
// content in src/learn/content/<id> (English lessons are used until then).

import { SEAT_NAMES, SEAT_LETTERS, SUIT_NAMES, SUIT_NAME_SINGULAR, STRAIN_SYMBOLS, STRAIN_NAMES, setCardLongName } from '../core/cards';
import { CALL_WORDS } from '../core/auction';
import { en, type Text } from './en';
import { bg } from './bg';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { nl } from './nl';
import { pl } from './pl';
import { pt } from './pt';
import { ru } from './ru';
import { ja } from './ja';
import { zh } from './zh';

export type { Text };
export type Lang = 'en' | 'bg' | 'de' | 'es' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'ru' | 'ja' | 'zh';

export interface LanguageInfo {
  id: Lang;
  name: string; // in the language itself
  locale: string; // for numbers and dates
}

export const LANGUAGES: LanguageInfo[] = [
  { id: 'en', name: 'English', locale: 'en-GB' },
  { id: 'de', name: 'Deutsch', locale: 'de-DE' },
  { id: 'es', name: 'Español', locale: 'es-ES' },
  { id: 'fr', name: 'Français', locale: 'fr-FR' },
  { id: 'it', name: 'Italiano', locale: 'it-IT' },
  { id: 'nl', name: 'Nederlands', locale: 'nl-NL' },
  { id: 'pl', name: 'Polski', locale: 'pl-PL' },
  { id: 'pt', name: 'Português', locale: 'pt-BR' },
  { id: 'bg', name: 'Български', locale: 'bg-BG' },
  { id: 'ru', name: 'Русский', locale: 'ru-RU' },
  { id: 'ja', name: '日本語', locale: 'ja-JP' },
  { id: 'zh', name: '中文', locale: 'zh-CN' },
];

const CATALOGUES: Record<Lang, Text> = { en, bg, de, es, fr, it, nl, pl, pt, ru, ja, zh };
const KEY = 'bridge-tutor.lang.v1';

/** The active catalogue. */
export const T: Text = { ...en };

let current: Lang = 'en';
const listeners = new Set<(l: Lang) => void>();

export function lang(): Lang {
  return current;
}

export function locale(): string {
  return LANGUAGES.find(l => l.id === current)!.locale;
}

export function isLang(x: unknown): x is Lang {
  return LANGUAGES.some(l => l.id === x);
}

export function setLang(l: Lang) {
  if (l === current) return;
  apply(l);
  try {
    localStorage.setItem(KEY, l);
  } catch {
    /* storage may be unavailable */
  }
  for (const fn of listeners) fn(l);
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
  const cat = CATALOGUES[l];
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

apply(detect());

// ---------------------------------------------------------------------------
// Formatting in the active locale

/** A number with a fixed number of decimals ("0.75" / "0,75"). */
export function fmtNum(x: number, digits = 0): string {
  return x.toLocaleString(locale(), { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** A fraction 0..1 as a percentage ("68%"). */
export function fmtPct(frac: number, digits = 0): string {
  return `${fmtNum(frac * 100, digits)}%`;
}

/** A signed whole number ("+3", "−2", "0"). */
export function fmtSigned(x: number): string {
  return x > 0 ? `+${x}` : x < 0 ? `−${-x}` : '0';
}

export function fmtDate(ms: number): string {
  return new Date(ms).toLocaleDateString(locale());
}
