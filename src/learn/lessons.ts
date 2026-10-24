// Teaching content for the Learn room, one set per language
// (src/learn/content/<lang>/). Languages without their own lessons use English.
//
// Every lesson matches the system the bots play (SAYC style: 5-card majors,
// 15-17 1NT, strong 2♣, weak twos, Jacoby 2NT, Stayman and Jacoby transfers,
// negative doubles, Michaels / Unusual 2NT, standard leads and signals).
// The same lesson has the same id, topic, level, diagrams and quiz answers in
// every language; only the words differ.
//
// Body markup: h3, h4, p, ul, ol, li, strong, em, table/thead/tbody/tr/th/td,
// plus the special empty divs rendered by the UI:
//   <div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="..."></div>
//   <div class="deal" data-n="..." data-e="..." data-s="..." data-w="..." data-caption="..."></div>
//   <div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
//   <div class="tip">...</div>  <div class="warn">...</div>
// data-cards / data-calls use English letters in every language. Ten is
// written as "10" everywhere, including inside data-cards.

export type { LessonTopic, LessonLevel, QuizQuestion, Lesson, GlossaryEntry, LessonContent } from './types';
import type { Lesson, GlossaryEntry, LessonContent } from './types';
import { lang, locale, type Lang } from '../i18n';

/**
 * Lessons load when first needed (the Learn and Training rooms), not before
 * the first screen: they are the biggest part of every language and the table
 * doesn't use them. The app also asks for them once the browser is idle after
 * start-up, so they are usually there before anyone opens a lesson.
 */
const LOADERS: Record<Lang, () => Promise<LessonContent>> = {
  en: () => import('./content/en').then(m => m.content),
  bg: () => import('./content/bg').then(m => m.content),
  de: () => import('./content/de').then(m => m.content),
  es: () => import('./content/es').then(m => m.content),
  fr: () => import('./content/fr').then(m => m.content),
  it: () => import('./content/it').then(m => m.content),
  nl: () => import('./content/nl').then(m => m.content),
  pl: () => import('./content/pl').then(m => m.content),
  pt: () => import('./content/pt').then(m => m.content),
  ru: () => import('./content/ru').then(m => m.content),
  ja: () => import('./content/ja').then(m => m.content),
  zh: () => import('./content/zh').then(m => m.content),
};
const CONTENT: Partial<Record<Lang, LessonContent>> = {};
const loading = new Map<Lang, Promise<void>>();
const EMPTY: LessonContent = { lessons: [], glossary: [] };

/** The first lesson of the course (where a beginner starts). */
export const FIRST_LESSON = 'how-bridge-works';

/** Whether the active language's lessons are loaded. */
export function lessonsReady(): boolean {
  return !!CONTENT[lang()];
}

/** Load a language's lessons (the active one by default). Resolves at once when they are here. */
export function ensureLessons(l: Lang = lang()): Promise<void> {
  if (CONTENT[l]) return Promise.resolve();
  let p = loading.get(l);
  if (!p) {
    p = LOADERS[l]().then(
      c => {
        CONTENT[l] = c;
      },
      e => {
        loading.delete(l); // try again next time (offline, or the app was updated)
        throw e;
      },
    );
    loading.set(l, p);
  }
  return p;
}

function active(): LessonContent {
  return CONTENT[lang()] ?? CONTENT.en ?? EMPTY;
}

export function getLessons(): Lesson[] {
  return active().lessons;
}

const sortedGlossary = new Map<Lang, GlossaryEntry[]>();

/** The glossary in the language's alphabetical order, numbers by value ("Rule of 7" before "Rule of 11"). */
export function getGlossary(): GlossaryEntry[] {
  const l = lang();
  let g = sortedGlossary.get(l);
  if (!g) {
    const order = new Intl.Collator(locale(), { numeric: true });
    g = [...active().glossary].sort((a, b) => order.compare(a.term, b.term));
    if (CONTENT[l]) sortedGlossary.set(l, g);
  }
  return g;
}

/** Lesson by id in the active language (falls back to English). */
export function getLesson(id: string): Lesson | undefined {
  return active().lessons.find(l => l.id === id) ?? CONTENT.en?.lessons.find(l => l.id === id);
}
