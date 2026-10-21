// English lesson content.

import type { LessonContent } from '../../types';
import { LESSONS_1 } from './lessons1';
import { LESSONS_2 } from './lessons2';
import { LESSONS_3 } from './lessons3';
import { GLOSSARY } from './glossary';

export const content: LessonContent = {
  lessons: [...LESSONS_1, ...LESSONS_2, ...LESSONS_3],
  glossary: GLOSSARY,
};
