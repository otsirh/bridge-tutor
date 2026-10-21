// Reading the play: what an opening lead or a signal tells the table under
// standard methods (only public information — never the hidden cards). The
// signalling rules themselves live in src/engine/signalling.ts, shared with
// the bots.

import { type Card, type Seat, suitOf, rankOf, NT, partnerOf, lhoOf, rhoOf } from '../core/cards';
import type { Trick } from '../core/play';
import { signalFacts, look, countLengths, type SignalFact, type Look, type Signal } from '../engine/signalling';
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
  for (const r of readSignals(tricks, strain, viewer, dummy, dummyCards, myCards)) out.push(describeReading(r));
  return out;
}

/** A signal by partner (or, seen from declarer's seat, a defender's count) and how it reads from the viewer's seat. */
export interface SignalReading {
  fact: SignalFact;
  look: Look;
  lengths: number[]; // count: the lengths that fit the reading
  partner: boolean; // the signaller is the viewer's partner
}

/**
 * Signals worth reading now, from `viewer`'s seat: a defender reads partner's
 * attitude, count, discards and suit preference; declarer reads the
 * defenders' count. Shows signals from the last three tricks, and older ones
 * whose echo has just been completed.
 */
export function readSignals(tricks: readonly Trick[], strain: number, viewer: Seat, dummy: Seat, dummyCards: readonly Card[] | null, myCards: readonly Card[]): SignalReading[] {
  const declarer = partnerOf(dummy);
  const defending = (viewer & 1) !== (declarer & 1);
  const seats = defending ? [partnerOf(viewer)] : [lhoOf(declarer), rhoOf(declarer)];
  // every card played, in order, with its seat
  const plays: { card: Card; seat: number; trick: number }[] = [];
  tricks.forEach((t, ti) => t.cards.forEach((card, i) => plays.push({ card, seat: (t.leader + i) & 3, trick: ti })));
  const known = new Set<Card>(myCards);
  for (const p of plays) if (p.seat === viewer) known.add(p.card);
  if (dummyCards) {
    for (const c of dummyCards) known.add(c);
    for (const p of plays) if (p.seat === dummy) known.add(p.card);
  }
  const start = Math.max(0, tricks.length - 3);
  const out: SignalReading[] = [];
  for (const fact of signalFacts(tricks, declarer, strain, seats, defending ? undefined : ['count'])) {
    const at = plays.findIndex(p => p.card === fact.card);
    // cards the viewer knows were not in the signaller's hand at the time
    const seen = (c: Card) => known.has(c) || plays.some((p, i) => p.card === c && (p.seat !== fact.seat || i < at));
    const l = look(fact, seen);
    const echoTrick = l.echo === null ? -1 : plays.find(p => p.card === l.echo)!.trick;
    if (fact.trick < start && echoTrick < start) continue;
    const lengths = fact.op.kind === 'count' && l.height ? countLengths(fact, seen, l.height) : [];
    out.push({ fact, look: l, lengths, partner: fact.seat === partnerOf(viewer) });
  }
  return out;
}

/** A signal reading in words. */
export function describeReading(r: SignalReading): Reading {
  const X = T.tutor.signals.read;
  const { card, op, seat } = r.fact;
  switch (op.kind) {
    case 'count':
      return { title: X.count.title(r.partner ? null : seat, card), text: X.count.text(card, r.look, op.suit, r.lengths, !r.partner) };
    case 'attitude':
      return { title: X.attitude.title(card), text: X.attitude.text(card, r.look) };
    case 'discard':
      return { title: X.discard.title(card), text: X.discard.text(card, r.look, op.suit) };
    case 'preference':
      return { title: X.preference.title(card), text: X.preference.text(card, r.look, op.sides) };
  }
}

/** A short label for a signal a bot gave ("Count: even"), e.g. for a badge on its card. */
export function describeSignal(s: Signal): string {
  const X = T.tutor.signals.badge;
  switch (s.kind) {
    case 'count': return X.count(s.height === 'high');
    case 'attitude': return X.attitude(s.height === 'high');
    case 'discard': return X.discard(s.height === 'high', s.suit);
    case 'preference': return X.preference(s.height === 'middle' ? null : s.sides[s.height === 'high' ? 1 : 0]);
  }
}
