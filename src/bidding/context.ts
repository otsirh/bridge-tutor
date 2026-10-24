// The bidding context: who has said what, and what it means so far.

import { type Auction, type Call, PASS, DOUBLE, REDOUBLE, isBid, levelOf, strainOf, bid } from '../core/auction';
import { type Seat, type Vulnerability, isVulnerable, partnerOf, lhoOf, rhoOf } from '../core/cards';
import { type Shown, type Forcing, unknownShown } from './types';

export interface Meaning {
  name: string;
  desc: string;
  shown: Shown; // what this call alone shows
  forcing: Forcing;
  artificial: boolean;
  tag?: string;
  data?: Record<string, number>;
  natural?: boolean; // not a system call: interpreted naturally
  conds: string[]; // requirement texts of the rule(s)
}

export interface CallRecord {
  index: number;
  seat: Seat;
  call: Call;
  meaning: Meaning;
}

export class Ctx {
  constructor(
    public readonly auction: Auction, // the auction so far (before the call being considered)
    public readonly vul: Vulnerability,
    public readonly records: CallRecord[],
    public readonly shown: Shown[], // cumulative per seat, before this call
  ) {}

  get seat(): Seat {
    return this.auction.nextSeat;
  }
  get partner(): Seat {
    return partnerOf(this.seat);
  }
  get lho(): Seat {
    return lhoOf(this.seat);
  }
  get rho(): Seat {
    return rhoOf(this.seat);
  }
  get weVul(): boolean {
    return isVulnerable(this.vul, this.seat);
  }
  get theyVul(): boolean {
    return isVulnerable(this.vul, this.lho);
  }

  /** First bid of the auction. */
  opening(): CallRecord | null {
    return this.records.find(r => isBid(r.call)) ?? null;
  }

  callsBy(seat: Seat): CallRecord[] {
    return this.records.filter(r => r.seat === seat);
  }

  /** Non-pass calls (bids, doubles, redoubles) by a seat. */
  actionsBy(seat: Seat): CallRecord[] {
    return this.records.filter(r => r.seat === seat && r.call !== PASS);
  }

  bidsBy(seat: Seat): CallRecord[] {
    return this.records.filter(r => r.seat === seat && isBid(r.call));
  }

  lastAction(seat: Seat): CallRecord | null {
    const a = this.actionsBy(seat);
    return a.length ? a[a.length - 1] : null;
  }

  lastBidRecord(): CallRecord | null {
    for (let i = this.records.length - 1; i >= 0; i--) if (isBid(this.records[i].call)) return this.records[i];
    return null;
  }

  /** The call made just before ours (by RHO), if any. */
  rhoCall(): CallRecord | null {
    const r = this.records[this.records.length - 1];
    return r && r.seat === this.rho ? r : null;
  }

  /** The call made by partner most recently (may be a pass). */
  partnerCall(): CallRecord | null {
    const r = this.records[this.records.length - 2];
    return r && r.seat === this.partner ? r : null;
  }

  /** True if the seat passed before the opening bid (a "passed hand"). */
  passedHand(seat: Seat): boolean {
    const op = this.opening();
    return this.records.some(r => r.seat === seat && r.call === PASS && (!op || r.index < op.index));
  }

  ourSide(seat: Seat): boolean {
    return (seat & 1) === (this.seat & 1);
  }

  /** Strains bid naturally (suit really shown) by a side, and the suits a two-suited overcall shows. */
  naturalSuits(side: 0 | 1): number[] {
    const out = new Set<number>();
    for (const r of this.records) {
      if ((r.seat & 1) !== side || !isBid(r.call)) continue;
      const two = r.meaning.tag === 'michaels' || r.meaning.tag === 'unusual';
      if (two) for (const st of [r.meaning.data?.a ?? -1, r.meaning.data?.b ?? -1]) if (st >= 0) out.add(st);
      if (r.meaning.artificial) continue;
      const st = strainOf(r.call);
      if (st < 4) out.add(st);
    }
    return [...out];
  }

  theirSuits(): number[] {
    return this.naturalSuits(((this.seat & 1) ^ 1) as 0 | 1);
  }

  ourSuits(): number[] {
    return this.naturalSuits((this.seat & 1) as 0 | 1);
  }

  /** Has our side made a game-forcing call (and are we still below game)? */
  gameForced(): boolean {
    return this.records.some(r => this.ourSide(r.seat) && r.meaning.forcing === 'game');
  }

  /** Partner's last action is forcing and RHO has not bid in between. */
  forcedByPartner(): boolean {
    const pc = this.partnerCall();
    if (!pc || pc.call === PASS) return false;
    const rc = this.rhoCall();
    if (rc && rc.call !== PASS && rc.call !== DOUBLE) return false;
    return pc.meaning.forcing === 'one' || pc.meaning.forcing === 'game';
  }

  lastBid(): Call | null {
    return this.auction.lastBid();
  }

  isLegal(c: Call): boolean {
    return this.auction.isLegal(c);
  }

  /** Cheapest legal bid in a strain (null if above 7). */
  cheapest(strain: number): Call | null {
    const lb = this.lastBid();
    for (let level = 1; level <= 7; level++) {
      const c = bid(level, strain);
      if (lb === null || c > lb) return c;
    }
    return null;
  }

  /** The bid one level above the cheapest (a jump). */
  jump(strain: number, extra = 1): Call | null {
    const c = this.cheapest(strain);
    if (c === null) return null;
    const l = levelOf(c) + extra;
    return l <= 7 ? bid(l, strain) : null;
  }

  isJump(c: Call): boolean {
    const ch = this.cheapest(strainOf(c));
    return ch !== null && levelOf(c) > levelOf(ch);
  }

  /** Is the last bid ours (our side holds the contract)? */
  weHoldContract(): boolean {
    const r = this.lastBidRecord();
    return !!r && this.ourSide(r.seat);
  }

  doubled(): boolean {
    return this.auction.doubleStatus() === 1;
  }

  shownBy(seat: Seat): Shown {
    return this.shown[seat] ?? unknownShown();
  }

  /** Partner's HCP range, and a working estimate (low end plus a third of the range). */
  partnerHcp(): { min: number; max: number; est: number } {
    const [lo, hi0] = this.shownBy(this.partner).hcp;
    // open-ended ranges ("17+") are estimated near the bottom; closed ones a third of the way up
    const est = hi0 - lo > 12 ? lo + 2 : Math.round(lo + (hi0 - lo) / 3);
    return { min: lo, max: hi0, est };
  }

  /** Our side's last call meaning with a given tag, if partner's last action carries it. */
  partnerTag(): string | undefined {
    return this.lastAction(this.partner)?.meaning.tag;
  }

  myTag(): string | undefined {
    return this.lastAction(this.seat)?.meaning.tag;
  }

  /** Count of the bidder's own actions so far. */
  myActionCount(): number {
    return this.actionsBy(this.seat).length;
  }

  isDoubleOrRedouble(c: Call) {
    return c === DOUBLE || c === REDOUBLE;
  }
}
