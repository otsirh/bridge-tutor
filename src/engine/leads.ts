// Opening leads by the book — the bots' choice and the tutor's explanation.

import { type Card, suitOf, rankOf, makeCard, SUIT_SYMBOLS, rankLabel, NT } from '../core/cards';
import type { Contract } from '../core/auction';
import type { CallRecord } from '../bidding/context';
import { isBid, strainOf } from '../core/auction';
import { T } from '../i18n';

export interface LeadChoice {
  card: Card;
  suitReason: string; // why this suit
  cardReason: string; // why this card from the suit
  score: number;
}

/** Which card to lead from a holding (ranks high→low), with the reason. */
export type LeadKind = 'singleton' | 'ak' | 'doubleton' | 'sequence' | 'interior' | 'touching' | 'nothing' | 'small' | 'partner-low' | 'fourth' | 'third';

export function cardFromHolding(ranks: number[], vsNT: boolean, partnersSuit: boolean): { rank: number; why: string; kind: LeadKind } {
  const X = T.tutor.leads.card;
  const r = ranks;
  const n = r.length;
  const has = (x: number) => r.includes(x);
  if (n === 1) return { rank: r[0], kind: 'singleton', why: X.singleton };
  // Ace from AK (vs suit contracts; vs NT too unless long and lead K)
  if (has(14) && has(13)) return { rank: 14, kind: 'ak', why: X.ak };
  if (n === 2) return { rank: r[0], kind: 'doubleton', why: X.doubleton };
  // solid / near sequences: top card (KQJ, QJ10, J109, 1098, KQ10, QJ9, J108)
  const touching = (a: number) => has(a) && has(a - 1);
  const top = r[0];
  if (top >= 10 && touching(top) && (has(top - 2) || (has(top - 3) && n >= 3))) {
    return { rank: top, kind: 'sequence', why: X.sequence(seq(r)) };
  }
  // interior sequences: KJ10 → J, Q109 → 10, AJ10 / A109 (vs NT) → second card
  if (n >= 3 && r[1] >= 9 && touching(r[1]) && top > r[1] + 1 && (vsNT || top !== 14)) {
    return { rank: r[1], kind: 'interior', why: X.interior(seq(r), r[1]) };
  }
  // KQx vs suit contract: K
  if (!vsNT && touching(top) && top >= 12) return { rank: top, kind: 'touching', why: X.touching(seq(r)) };
  const honour = top >= 11;
  if (!honour) {
    if (n === 3) return { rank: r[0], kind: 'nothing', why: X.nothing };
    return { rank: r[1], kind: 'small', why: X.small };
  }
  if (partnersSuit && n === 3) return { rank: r[2], kind: 'partner-low', why: X.partnerLow };
  if (n >= 4) return { rank: r[3], kind: 'fourth', why: X.fourth(seq(r)) };
  return { rank: r[2], kind: 'third', why: X.third(seq(r)) };
}

function seq(r: number[]): string {
  return r.map(x => rankLabel(x)).join('');
}

/** Rank the four suits as opening leads and pick a card. */
export function openingLeadChoices(hand: readonly Card[], contract: Contract, records: CallRecord[], leader: number): LeadChoice[] {
  const X = T.tutor.leads.suit;
  const vsNT = contract.strain === NT;
  const trump = contract.strain;
  const partner = (leader + 2) & 3;
  const declSide = contract.declarer & 1;
  const bidBy = (side: 'partner' | 'them') => {
    const set = new Set<number>();
    for (const r of records) {
      if (!isBid(r.call) || r.meaning.artificial || strainOf(r.call) === NT) continue;
      const mine = side === 'partner' ? r.seat === partner : (r.seat & 1) === declSide;
      if (mine) set.add(strainOf(r.call));
    }
    return set;
  };
  const partnerSuits = bidBy('partner');
  const theirSuits = bidBy('them');
  const ranks: number[][] = [[], [], [], []];
  for (const c of hand) ranks[suitOf(c)].push(rankOf(c));
  ranks.forEach(r => r.sort((a, b) => b - a));
  const trumpLen = trump < 4 ? ranks[trump].length : 0;

  const out: LeadChoice[] = [];
  for (let s = 0; s < 4; s++) {
    const r = ranks[s];
    if (!r.length) continue;
    const has = (x: number) => r.includes(x);
    const n = r.length;
    let score = 0;
    let why = '';
    const pSuit = partnerSuits.has(s);
    const card = cardFromHolding(r, vsNT, pSuit);
    const seqLead = card.kind === 'sequence' || card.kind === 'interior' || card.kind === 'touching' || card.kind === 'ak';
    if (pSuit) {
      score += 60;
      why = X.partnerBid(s);
    }
    if (theirSuits.has(s) && s !== trump) {
      score -= 35;
      why ||= X.theyBid(s);
    }
    if (vsNT) {
      score += n * 6;
      if (seqLead) score += 25;
      if (n >= 4 && r[0] >= 11) score += 10;
      if (!why) why = n >= 4 ? X.ntLong(s, n) : seqLead ? X.ntSequence : X.ntShort(n);
    } else {
      if (s === trump) {
        score -= 10;
        if (n >= 2 && n <= 3 && r[0] <= 10) score += 8;
        why ||= X.trump;
      } else {
        if (has(14) && has(13)) score += 40;
        else if (seqLead) score += 30;
        if (n === 1 && trumpLen >= 1 && trumpLen <= 3 && r[0] < 13) {
          score += 28;
          why ||= X.singleton;
        }
        if (n === 2 && r[0] <= 10) score += 10;
        if (has(14) && !has(13)) {
          score -= 30;
          why ||= X.aceAway;
        }
        if (!has(14) && (has(13) || has(12)) && !seqLead) score -= 12;
        if (r[0] <= 10 && n === 3) score += 4;
        why ||= seqLead ? X.sequence(s) : X.plain(s, n);
      }
    }
    out.push({ card: makeCard(s, card.rank), suitReason: why, cardReason: card.why, score });
  }
  out.sort((a, b) => b.score - a.score);
  return out;
}

export function describeLead(c: LeadChoice): string {
  return `${SUIT_SYMBOLS[suitOf(c.card)]}${rankLabel(rankOf(c.card))}: ${c.suitReason} ${c.cardReason}`;
}
