// Calls and auctions.
//
// A call is a small integer: 0 = Pass, 1 = Double, 2 = Redouble,
// 3.. = bids in ascending order (1♣ = 3, 1♦ = 4 … 7NT = 37).

import { STRAIN_SYMBOLS, type Seat, type Strain, sameSide } from './cards';

export type Call = number;
export const PASS: Call = 0;
export const DOUBLE: Call = 1;
export const REDOUBLE: Call = 2;

export const bid = (level: number, strain: number): Call => 3 + (level - 1) * 5 + strain;
export const isBid = (c: Call) => c >= 3;
export const levelOf = (c: Call) => (((c - 3) / 5) | 0) + 1;
export const strainOf = (c: Call): Strain => ((c - 3) % 5) as Strain;

/** Words for the non-bid calls; replaced in place by the active language (src/i18n). */
export const CALL_WORDS = { pass: 'Pass', double: 'Double', redouble: 'Redouble', passedOut: 'Passed out' };

export function callName(c: Call): string {
  if (c === PASS) return CALL_WORDS.pass;
  if (c === DOUBLE) return CALL_WORDS.double;
  if (c === REDOUBLE) return CALL_WORDS.redouble;
  return levelOf(c) + STRAIN_SYMBOLS[strainOf(c)];
}

export function callShort(c: Call): string {
  if (c === PASS) return 'P';
  if (c === DOUBLE) return 'X';
  if (c === REDOUBLE) return 'XX';
  return levelOf(c) + 'CDHSN'[strainOf(c)] + (strainOf(c) === 4 ? 'T' : '');
}

export function parseCall(t: string): Call {
  const s = t.trim().toUpperCase();
  if (s === 'P' || s === 'PASS' || s === 'ПАС') return PASS;
  if (s === 'X' || s === 'DBL' || s === 'DOUBLE' || s === 'КОНТРА') return DOUBLE;
  if (s === 'XX' || s === 'RDBL' || s === 'REDOUBLE' || s === 'РЕКОНТРА') return REDOUBLE;
  const level = +s[0];
  const sym = '♣♦♥♠'.indexOf(s[1]);
  const strain = s[1] === 'Б' ? 4 : sym >= 0 ? sym : 'CDHSN'.indexOf(s[1]);
  if (!(level >= 1 && level <= 7) || strain < 0) throw new Error('Bad call ' + t);
  return bid(level, strain);
}

export interface Contract {
  level: number;
  strain: Strain;
  declarer: Seat;
  doubled: 0 | 1 | 2;
}

export function contractName(c: Contract | null): string {
  if (!c) return CALL_WORDS.passedOut;
  return `${c.level}${STRAIN_SYMBOLS[c.strain]}${c.doubled === 1 ? 'X' : c.doubled === 2 ? 'XX' : ''}`;
}

export class Auction {
  constructor(public dealer: Seat, public calls: Call[] = []) {}

  clone() {
    return new Auction(this.dealer, [...this.calls]);
  }

  seatAt(i: number): Seat {
    return ((this.dealer + i) & 3) as Seat;
  }

  get nextSeat(): Seat {
    return this.seatAt(this.calls.length);
  }

  /** Index of the last bid (not pass/double), or -1. */
  lastBidIndex(): number {
    for (let i = this.calls.length - 1; i >= 0; i--) if (isBid(this.calls[i])) return i;
    return -1;
  }

  lastBid(): Call | null {
    const i = this.lastBidIndex();
    return i < 0 ? null : this.calls[i];
  }

  /** 0 = undoubled, 1 = doubled, 2 = redoubled — status of the last bid. */
  doubleStatus(): 0 | 1 | 2 {
    for (let i = this.calls.length - 1; i >= 0; i--) {
      const c = this.calls[i];
      if (c === DOUBLE) return 1;
      if (c === REDOUBLE) return 2;
      if (isBid(c)) return 0;
    }
    return 0;
  }

  isLegal(c: Call): boolean {
    if (this.isComplete()) return false;
    if (c === PASS) return true;
    const li = this.lastBidIndex();
    if (isBid(c)) return li < 0 || c > this.calls[li];
    if (li < 0) return false;
    const opponents = !sameSide(this.seatAt(li), this.nextSeat);
    const status = this.doubleStatus();
    if (c === DOUBLE) return opponents && status === 0;
    if (c === REDOUBLE) return !opponents && status === 1;
    return false;
  }

  legalCalls(): Call[] {
    const out: Call[] = [];
    for (let c = 0; c <= 37; c++) if (this.isLegal(c)) out.push(c);
    return out;
  }

  isComplete(): boolean {
    const n = this.calls.length;
    if (n < 4) return false;
    if (this.lastBidIndex() < 0) return n >= 4;
    return this.calls[n - 1] === PASS && this.calls[n - 2] === PASS && this.calls[n - 3] === PASS;
  }

  contract(): Contract | null {
    const li = this.lastBidIndex();
    if (li < 0) return null;
    const last = this.calls[li];
    const strain = strainOf(last);
    const side = this.seatAt(li) & 1;
    let declarer: Seat = this.seatAt(li);
    for (let i = 0; i <= li; i++) {
      const c = this.calls[i];
      if (isBid(c) && strainOf(c) === strain && (this.seatAt(i) & 1) === side) {
        declarer = this.seatAt(i);
        break;
      }
    }
    return { level: levelOf(last), strain, declarer, doubled: this.doubleStatus() };
  }

  push(c: Call) {
    if (!this.isLegal(c)) throw new Error('Illegal call ' + callShort(c));
    this.calls.push(c);
  }
}
