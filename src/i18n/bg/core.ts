// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SINGULAR = ['спатия', 'каро', 'купа', 'пика'];
const RANK_WORDS: Record<number, string> = { 14: 'асо', 13: 'поп', 12: 'дама', 11: 'вале' };

export const core: Text['core'] = {
  seats: ['Север', 'Изток', 'Юг', 'Запад'],
  seatLetters: ['С', 'И', 'Ю', 'З'],
  suits: ['спатии', 'кари', 'купи', 'пики'],
  suitSingular: SINGULAR,
  strains: ['спатии', 'кари', 'купи', 'пики', 'без коз'],
  nt: 'БК',
  pass: 'Пас',
  double: 'Контра',
  redouble: 'Реконтра',
  passedOut: 'Всички пас',
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} ${SINGULAR[suit]}`,
  hcp: 'т.',
  tricks: (n: number) => (n === 1 ? 'взятка' : 'взятки'),
};
