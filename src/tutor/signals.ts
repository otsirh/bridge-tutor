// Reading the play: what an opening lead or a signal tells the table under
// standard methods (only public information — never the hidden cards).

import { type Card, type Seat, suitOf, rankOf, NT, partnerOf } from '../core/cards';
import type { Trick } from '../core/play';
import { T } from '../i18n';

export interface Reading {
  title: string;
  text: string;
}

export function leadMeaning(card: Card, strain: number): string {
  const X = T.tutor.signals.lead;
  const r = rankOf(card);
  const vsNT = strain === NT;

  switch (r) {
    case 14: return X.ace(vsNT);
    case 13: return X.king(vsNT);
    case 12: return X.queen;
    case 11: return X.jack;
    case 10: return X.ten;
    case 9: return X.nine;
    default: return X.low(suitOf(card), vsNT);
  }
}

/** Rule of 11 from the third player's point of view (needs the led card to be a 4th-best spot). */
export function ruleOf11(lead: Card, dummy: readonly Card[], mine: readonly Card[]): string | null {
  const r = rankOf(lead);
  if (r > 9) return null;
  const above = 11 - r;
  const su = suitOf(lead);
  const seen = [...dummy, ...mine].filter(c => suitOf(c) === su && rankOf(c) > r).length;
  const declarer = above - seen;
  if (declarer < 0) return null;
  return T.tutor.signals.ruleOf11.text(r, above, seen, declarer);
}

/** What the cards played so far tell you, from `viewer`'s seat. */
export function readPlay(tricks: readonly Trick[], strain: number, viewer: Seat, dummy: Seat, dummyCards: readonly Card[] | null, myCards: readonly Card[]): Reading[] {
  const X = T.tutor.signals;
  const out: Reading[] = [];
  const first = tricks[0];
  if (first && first.cards.length) {
    const lead = first.cards[0];
    const leader = first.leader;
    const title = leader === viewer ? X.leadBy.you(lead) : leader === partnerOf(viewer) ? X.leadBy.partner(lead) : X.leadBy.seat(leader, lead);
    out.push({ title, text: leadMeaning(lead, strain) });
    const third = (leader + 2) & 3;
    if (third === viewer && strain === NT && dummyCards && tricks.length === 1) {
      const dummySeen = [...dummyCards, ...(first.cards.length > 1 ? [first.cards[1]] : [])];
      const r11 = ruleOf11(lead, dummySeen, [...myCards, ...(first.cards.length > 2 ? [first.cards[2]] : [])]);
      if (r11) out.push({ title: X.ruleOf11.title, text: r11 });
    }
  }
  // partner's attitude/discard signals (defenders only)
  const defenders = (viewer & 1) !== (dummy & 1);
  if (defenders) {
    const partner = partnerOf(viewer);
    for (const t of tricks.slice(-3)) {
      t.cards.forEach((c, i) => {
        const seat = ((t.leader + i) & 3) as Seat;
        if (seat !== partner || i === 0) return;
        const led = suitOf(t.cards[0]);
        if (suitOf(c) !== led && suitOf(c) !== strain) {
          out.push({ title: X.partnerDiscard.title(c), text: rankOf(c) >= 8 ? X.partnerDiscard.high(suitOf(c)) : X.partnerDiscard.low(suitOf(c)) });
        } else if (t.leader === viewer && suitOf(c) === led && i === 2) {
          const winning = t.winner === partner;
          if (!winning && rankOf(c) <= 10) out.push({ title: X.onYourLead.title(c), text: rankOf(c) >= 7 ? X.onYourLead.high : X.onYourLead.low });
        }
      });
    }
  }
  return out;
}
