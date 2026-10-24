// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SUITS = ['paus', 'ouros', 'copas', 'espadas'];
const RANK_WORDS: Record<number, string> = { 14: 'ás', 13: 'rei', 12: 'dama', 11: 'valete' };

export const core: Text['core'] = {
  seats: ['Norte', 'Leste', 'Sul', 'Oeste'],
  seatLetters: ['N', 'L', 'S', 'O'],
  /** Plural, as in "cinco copas". */
  suits: SUITS,
  /** One card of the suit: "uma copa", "um pau". */
  suitSingular: ['pau', 'ouro', 'copa', 'espada'],
  strains: ['paus', 'ouros', 'copas', 'espadas', 'sem trunfo'],
  nt: 'ST',
  pass: 'Passo',
  double: 'Dobre',
  redouble: 'Redobre',
  passedOut: 'Todos passam',
  /** "dama de copas" */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} de ${SUITS[suit]}`,
  hcp: 'PH',
  tricks: (n: number) => (n === 1 ? 'vaza' : 'vazas'),
};
