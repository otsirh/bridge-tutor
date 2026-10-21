// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SUITS = ['クラブ', 'ダイヤ', 'ハート', 'スペード'];
const RANK_WORDS: Record<number, string> = { 14: 'エース', 13: 'キング', 12: 'クイーン', 11: 'ジャック' };

export const core: Text['core'] = {
  seats: ['北', '東', '南', '西'],
  // One kanji per seat is already as short as a letter; Japanese diagrams and auctions use them.
  seatLetters: ['北', '東', '南', '西'],
  suits: SUITS,
  suitSingular: SUITS,
  strains: ['クラブ', 'ダイヤ', 'ハート', 'スペード', 'ノートランプ'],
  nt: 'NT',
  pass: 'パス',
  double: 'ダブル',
  redouble: 'リダブル',
  passedOut: 'オールパス',
  /** "ハートのクイーン" */
  cardLong: (rank: number, suit: number) => `${SUITS[suit]}の${RANK_WORDS[rank] ?? rankLabel(rank)}`,
  hcp: 'HCP',
  tricks: (_n: number) => 'トリック',
};
