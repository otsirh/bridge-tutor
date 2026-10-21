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
import { lang, type Lang } from '../i18n';
import { content as en } from './content/en';
import { content as bg } from './content/bg';
import { content as de } from './content/de';
import { content as es } from './content/es';
import { content as fr } from './content/fr';
import { content as it } from './content/it';
import { content as nl } from './content/nl';
import { content as pl } from './content/pl';
import { content as pt } from './content/pt';
import { content as ru } from './content/ru';
import { content as ja } from './content/ja';
import { content as zh } from './content/zh';

const CONTENT: Partial<Record<Lang, LessonContent>> = { en, bg, de, es, fr, it, nl, pl, pt, ru, ja, zh };

function active(): LessonContent {
  return CONTENT[lang()] ?? en;
}

export function getLessons(): Lesson[] {
  return active().lessons;
}

export function getGlossary(): GlossaryEntry[] {
  return active().glossary;
}

/** Lesson by id in the active language (falls back to English). */
export function getLesson(id: string): Lesson | undefined {
  return active().lessons.find(l => l.id === id) ?? en.lessons.find(l => l.id === id);
}
