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
import { lang, locale, addLanguageData, type Lang } from '../i18n';
import { content as en } from './content/en';

/** Lessons for every language but English load with the language (one chunk each). */
const LOADERS: Record<Exclude<Lang, 'en'>, () => Promise<LessonContent>> = {
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
const CONTENT: Partial<Record<Lang, LessonContent>> = { en };

addLanguageData({
  has: l => !!CONTENT[l],
  load: async l => {
    if (l !== 'en' && !CONTENT[l]) CONTENT[l] = await LOADERS[l]();
  },
});

function active(): LessonContent {
  return CONTENT[lang()] ?? en;
}

export function getLessons(): Lesson[] {
  return active().lessons;
}

const sortedGlossary = new Map<Lang, GlossaryEntry[]>();

/** The glossary in the language's alphabetical order, numbers by value ("Rule of 7" before "Rule of 11"). */
export function getGlossary(): GlossaryEntry[] {
  let g = sortedGlossary.get(lang());
  if (!g) {
    const order = new Intl.Collator(locale(), { numeric: true });
    g = [...active().glossary].sort((a, b) => order.compare(a.term, b.term));
    sortedGlossary.set(lang(), g);
  }
  return g;
}

/** Lesson by id in the active language (falls back to English). */
export function getLesson(id: string): Lesson | undefined {
  return active().lessons.find(l => l.id === id) ?? en.lessons.find(l => l.id === id);
}
