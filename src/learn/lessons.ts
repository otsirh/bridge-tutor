// Teaching content for the "Learn" section.
//
// Every lesson matches the system the bots play (SAYC style: 5-card majors,
// 15-17 1NT, strong 2♣, weak twos, Jacoby 2NT, Stayman and Jacoby transfers,
// negative doubles, Michaels / Unusual 2NT, standard leads and signals).
//
// Body markup: h3, h4, p, ul, ol, li, strong, em, table/thead/tbody/tr/th/td,
// plus the special empty divs rendered by the UI:
//   <div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="..."></div>
//   <div class="deal" data-n="..." data-e="..." data-s="..." data-w="..." data-caption="..."></div>
//   <div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
//   <div class="tip">...</div>  <div class="warn">...</div>
// Ten is written as "10" everywhere, including inside data-cards.

export type { LessonTopic, LessonLevel, QuizQuestion, Lesson } from './types';
import type { Lesson } from './types';
import { LESSONS_1 } from './lessons1';
import { LESSONS_2 } from './lessons2';
import { LESSONS_3 } from './lessons3';
export { GLOSSARY } from './glossary';

export const LESSONS: Lesson[] = [...LESSONS_1, ...LESSONS_2, ...LESSONS_3];
