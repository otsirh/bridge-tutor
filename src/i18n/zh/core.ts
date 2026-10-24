// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SUITS = ['梅花', '方块', '红心', '黑桃'];

export const core: Text['core'] = {
  seats: ['北家', '东家', '南家', '西家'],
  /** Single characters, as in Chinese auction tables. */
  seatLetters: ['北', '东', '南', '西'],
  /** Chinese has no plural: the same word in every position. */
  suits: SUITS,
  suitSingular: SUITS,
  strains: ['梅花', '方块', '红心', '黑桃', '无将'],
  nt: 'NT',
  pass: '不叫',
  double: '加倍',
  redouble: '再加倍',
  passedOut: '四家不叫',
  /** "红心Q": suit word, then the rank letter. */
  cardLong: (rank: number, suit: number) => `${SUITS[suit]}${rankLabel(rank)}`,
  hcp: '点',
  tricks: () => '墩',
};
