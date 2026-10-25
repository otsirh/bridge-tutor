// Chinese (Simplified) lesson content.

import type { LessonContent } from '../../types';
import { LESSONS_1 } from './lessons1';
import { LESSONS_2 } from './lessons2';
import { LESSONS_COMPETITION } from './competition';
import { LESSONS_3 } from './lessons3';
import { LESSONS_4 } from './conventions';
import { GLOSSARY } from './glossary';

export const content: LessonContent = {
  lessons: [...LESSONS_1, ...LESSONS_2, ...LESSONS_COMPETITION, ...LESSONS_3, ...LESSONS_4],
  glossary: GLOSSARY,
};
