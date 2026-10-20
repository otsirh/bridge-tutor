// Card play: tricks, legality and trick winners.

import { type Card, type Seat, type Strain, suitOf, partnerOf, sortHand } from './cards';
import type { Contract } from './auction';

export interface Trick {
  leader: Seat;
  cards: Card[]; // in play order from the leader
  winner?: Seat;
}

export function trickWinner(cards: readonly Card[], leader: Seat, trump: Strain): Seat {
  let w = 0;
  for (let i = 1; i < cards.length; i++) {
    const c = cards[i], b = cards[w];
    const cs = suitOf(c), bs = suitOf(b);
    if ((cs === bs && c > b) || (cs === trump && bs !== trump)) w = i;
  }
  return ((leader + w) & 3) as Seat;
}

export function legalCards(hand: readonly Card[], trick: readonly Card[]): Card[] {
  if (trick.length === 0) return [...hand];
  const led = suitOf(trick[0]);
  const follow = hand.filter(c => suitOf(c) === led);
  return follow.length ? follow : [...hand];
}

/** Full state of the play of one deal. */
export class PlayState {
  hands: Card[][]; // remaining cards per seat
  tricks: Trick[] = [];
  readonly trump: Strain;
  readonly dummy: Seat;

  constructor(public readonly contract: Contract, original: readonly (readonly Card[])[]) {
    this.hands = original.map(h => sortHand(h));
    this.trump = contract.strain;
    this.dummy = partnerOf(contract.declarer);
    this.tricks.push({ leader: ((contract.declarer + 1) & 3) as Seat, cards: [] });
  }

  clone(): PlayState {
    const p = Object.create(PlayState.prototype) as PlayState;
    Object.assign(p, this);
    p.hands = this.hands.map(h => [...h]);
    p.tricks = this.tricks.map(t => ({ ...t, cards: [...t.cards] }));
    return p;
  }

  get current(): Trick {
    return this.tricks[this.tricks.length - 1];
  }

  get completedTricks(): Trick[] {
    return this.tricks.filter(t => t.winner !== undefined);
  }

  get isOver(): boolean {
    return this.hands.every(h => h.length === 0);
  }

  get toPlay(): Seat {
    const t = this.current;
    return ((t.leader + t.cards.length) & 3) as Seat;
  }

  /** Cards each seat has played so far (in order). */
  playedBy(seat: Seat): Card[] {
    const out: Card[] = [];
    for (const t of this.tricks) t.cards.forEach((c, i) => ((t.leader + i) & 3) === seat && out.push(c));
    return out;
  }

  get declarerTricks(): number {
    return this.completedTricks.filter(t => (t.winner! & 1) === (this.contract.declarer & 1)).length;
  }

  get defenseTricks(): number {
    return this.completedTricks.length - this.declarerTricks;
  }

  get openingLeadMade(): boolean {
    return this.tricks.length > 1 || this.current.cards.length > 0;
  }

  legal(): Card[] {
    return legalCards(this.hands[this.toPlay], this.current.cards);
  }

  isLegal(c: Card): boolean {
    return this.legal().includes(c);
  }

  /** Play a card for the seat on turn; returns the completed trick if this card finished one. */
  play(c: Card): Trick | null {
    const seat = this.toPlay;
    if (!this.isLegal(c)) throw new Error('Illegal card');
    this.hands[seat] = this.hands[seat].filter(x => x !== c);
    const t = this.current;
    t.cards.push(c);
    if (t.cards.length === 4) {
      t.winner = trickWinner(t.cards, t.leader, this.trump);
      if (!this.isOver) this.tricks.push({ leader: t.winner, cards: [] });
      return t;
    }
    return null;
  }

  /** Every card played so far, in order, with its seat. */
  history(): { seat: Seat; card: Card; trick: number }[] {
    const out: { seat: Seat; card: Card; trick: number }[] = [];
    this.tricks.forEach((t, ti) => t.cards.forEach((c, i) => out.push({ seat: ((t.leader + i) & 3) as Seat, card: c, trick: ti })));
    return out;
  }
}
