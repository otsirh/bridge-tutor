// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';
import { pl, SEAT_NOM, SUIT_GEN, SUIT_NOM, SUIT_ONE } from './grammar';

const RANK_WORDS: Record<number, string> = { 14: 'туз', 13: 'король', 12: 'дама', 11: 'валет' };

export const core: Text['core'] = {
  seats: SEAT_NOM,
  seatLetters: ['С', 'В', 'Ю', 'З'],
  /** Nominative plural ("червы"); other cases live in grammar.ts. */
  suits: SUIT_NOM,
  suitSingular: SUIT_ONE,
  strains: [...SUIT_NOM, 'без козыря'],
  nt: 'БК',
  pass: 'Пас',
  double: 'Контра',
  redouble: 'Реконтра',
  passedOut: 'Все пас',
  /** "дама червей", "10 пик" */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} ${SUIT_GEN[suit]}`,
  hcp: 'оч.',
  tricks: (n: number) => pl(n, 'взятка', 'взятки', 'взяток'),
};
