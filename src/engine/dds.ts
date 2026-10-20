// Double-dummy solver.
//
// Alpha-beta search over card plays using null-window tests ("can North-South
// take at least T tricks?") with:
//   * a partition-search transposition table: each stored result remembers
//     which high cards ("winning ranks") actually decided it, so it is reused
//     for any position with the same suit lengths in which those top cards
//     have the same owners — small cards are interchangeable;
//   * equivalent-card pruning (touching cards in one hand are one move);
//   * quick-trick cutoffs at the start of each trick;
//   * heuristic move ordering.
//
// Hands are held as suit masks: bit (rank-2) per card, per seat and suit.
// Stored results depend only on the remaining position, so the table stays
// valid across different deals with the same trump suit.

import type { Card } from '../core/cards';

const POP = new Uint8Array(8192);
const HIGH = new Int8Array(8192);
const LOW = new Int8Array(8192);
for (let i = 1; i < 8192; i++) {
  POP[i] = POP[i >> 1] + (i & 1);
  HIGH[i] = 31 - Math.clz32(i);
  LOW[i] = 31 - Math.clz32(i & -i);
}
HIGH[0] = -1;
LOW[0] = -1;

export interface DDPosition {
  /** masks[seat][suit] — cards still in each hand (cards already on the table this trick excluded). */
  masks: number[][];
  trump: number; // 0..3 suit, 4 = notrump
  leader: number; // seat that led (or will lead) the current trick
  trick: Card[]; // cards already played to the current trick, in order
}

export interface MoveValue {
  card: Card;
  nsTricks: number; // NS tricks from the position (current trick included) after this card, best play
}

const BUCKET_BITS = 18;
const BUCKETS = 1 << BUCKET_BITS;
const MAX_DEPTH = 56;
const CHAIN_LIMIT = 256;

export class DDSolver {
  // hands
  private h = new Int32Array(16); // seat*4 + suit
  private trump = 4;
  // play state
  private ns = 0; // NS tricks won since the root
  private tricksLeft = 0; // counting the current trick
  private leader = 0;
  private toPlay = 0;
  private pos = 0; // cards in the current trick
  private depth = 0;
  private table = new Int32Array(4); // cards on the table this trick, per suit
  // per-depth play records
  private cS = new Int32Array(MAX_DEPTH);
  private cR = new Int32Array(MAX_DEPTH);
  private cSeat = new Int32Array(MAX_DEPTH);
  private wSeat = new Int32Array(MAX_DEPTH);
  private wSuit = new Int32Array(MAX_DEPTH);
  private wRank = new Int32Array(MAX_DEPTH);
  private uLeader = new Int32Array(MAX_DEPTH);
  private uWon = new Int32Array(MAX_DEPTH);
  private tblSave = new Int32Array(MAX_DEPTH * 4);
  // relevant ("winning") ranks per depth, per suit, as absolute rank masks
  private rel = new Int32Array(MAX_DEPTH * 4);
  // move buffers
  private mvS = new Int32Array(MAX_DEPTH * 13);
  private mvR = new Int32Array(MAX_DEPTH * 13);
  private mvSc = new Int32Array(MAX_DEPTH * 13);
  // transposition table: buckets keyed by (leader, 16 suit lengths)
  private heads = new Int32Array(BUCKETS).fill(-1);
  private eL0: Int32Array;
  private eL1: Int32Array;
  private eK: Int32Array; // leader (2 bits) | k per suit (4 bits each)
  private eSeq: Int32Array;
  private eLb: Int8Array;
  private eUb: Int8Array;
  private eNext: Int32Array;
  private eMove: Int8Array; // best move: suit*16 + index from the top among live cards, or -1
  private poolUsed = 0;
  private ttTrump = -1;
  // scratch for the current trick-start node
  private curSeq = new Int32Array(MAX_DEPTH * 4);
  private curLen = new Int32Array(MAX_DEPTH * 4);
  private qtTop = new Int32Array(4);
  private hintSuit = -1; // move-ordering hint for the next genMoves call
  private hintRank = -1;
  private probeHint = -1;

  private pool: number;

  nodes = 0;

  /** poolBits: log2 of the number of cached positions (2^20 ≈ 38 MB). */
  constructor(poolBits = 20) {
    const n = (this.pool = 1 << poolBits);
    this.eL0 = new Int32Array(n);
    this.eL1 = new Int32Array(n);
    this.eK = new Int32Array(n);
    this.eNext = new Int32Array(n);
    this.eSeq = new Int32Array(n * 4);
    this.eLb = new Int8Array(n);
    this.eUb = new Int8Array(n);
    this.eMove = new Int8Array(n);
  }

  /** Forget all cached results (done automatically when the trump suit changes). */
  reset() {
    this.heads.fill(-1);
    this.poolUsed = 0;
  }

  load(p: DDPosition) {
    if (p.trump !== this.ttTrump) {
      this.reset();
      this.ttTrump = p.trump;
    }
    this.trump = p.trump;
    let total = 0;
    for (let s = 0; s < 4; s++) {
      for (let su = 0; su < 4; su++) {
        this.h[s * 4 + su] = p.masks[s][su];
        total += POP[p.masks[s][su]];
      }
    }
    for (let i = 0; i < p.trick.length; i++) {
      const seat = (p.leader + i) & 3;
      const c = p.trick[i];
      this.h[seat * 4 + ((c / 13) | 0)] |= 1 << c % 13;
    }
    total += p.trick.length;
    if (total % 4 !== 0) throw new Error('DD: inconsistent card count');
    this.tricksLeft = total / 4;
    this.ns = 0;
    this.leader = p.leader;
    this.toPlay = p.leader;
    this.pos = 0;
    this.depth = 0;
    this.table.fill(0);
    for (const c of p.trick) {
      const seat = this.toPlay, s = (c / 13) | 0;
      if (!(this.h[seat * 4 + s] & (1 << c % 13))) throw new Error('DD: trick card not in hand');
      this.applyCard(s, c % 13);
    }
  }

  // -------------------------------------------------------------------------
  // play / undo

  private applyCard(s: number, r: number) {
    const d = this.depth, seat = this.toPlay, pos = this.pos, bit = 1 << r;
    this.h[seat * 4 + s] ^= bit;
    this.cS[d] = s;
    this.cR[d] = r;
    this.cSeat[d] = seat;
    let ws = seat, wsu = s, wr = r;
    if (pos > 0) {
      ws = this.wSeat[d - 1];
      wsu = this.wSuit[d - 1];
      wr = this.wRank[d - 1];
      if ((s === wsu && r > wr) || (s === this.trump && wsu !== this.trump)) {
        ws = seat;
        wsu = s;
        wr = r;
      }
    }
    this.wSeat[d] = ws;
    this.wSuit[d] = wsu;
    this.wRank[d] = wr;
    this.depth = d + 1;
    if (pos < 3) {
      this.table[s] |= bit;
      this.pos = pos + 1;
      this.toPlay = (seat + 1) & 3;
    } else {
      const t = this.table, o = d * 4;
      this.tblSave[o] = t[0];
      this.tblSave[o + 1] = t[1];
      this.tblSave[o + 2] = t[2];
      this.tblSave[o + 3] = t[3];
      t[0] = t[1] = t[2] = t[3] = 0;
      this.uLeader[d] = this.leader;
      const won = (ws & 1) === 0 ? 1 : 0;
      this.uWon[d] = won;
      this.ns += won;
      this.tricksLeft--;
      this.leader = ws;
      this.toPlay = ws;
      this.pos = 0;
    }
  }

  private undoCard() {
    const d = --this.depth;
    const s = this.cS[d], r = this.cR[d], seat = this.cSeat[d], bit = 1 << r;
    if (this.pos === 0) {
      const t = this.table, o = d * 4;
      t[0] = this.tblSave[o];
      t[1] = this.tblSave[o + 1];
      t[2] = this.tblSave[o + 2];
      t[3] = this.tblSave[o + 3];
      this.ns -= this.uWon[d];
      this.tricksLeft++;
      this.leader = this.uLeader[d];
      this.pos = 3;
    } else {
      this.table[s] &= ~bit;
      this.pos--;
    }
    this.toPlay = seat;
    this.h[seat * 4 + s] ^= bit;
  }

  /** After the 4th card of a trick (at depth d), the rank that decided it, as a suit mask contribution. */
  private trickRelevance(d: number): number {
    const wsu = this.wSuit[d];
    let others = 0;
    for (let k = d - 3; k <= d; k++) if (this.cS[k] === wsu && this.cR[k] !== this.wRank[d]) others++;
    return others ? 1 << this.wRank[d] : 0;
  }

  // -------------------------------------------------------------------------
  // move generation

  /** Fill move buffers for the current depth; returns the move count (one card per equivalence class). */
  private genMoves(): number {
    const d = this.depth, base = d * 13, seat = this.toPlay, h = this.h, pos = this.pos;
    const ledSuit = pos > 0 ? this.cS[d - pos] : -1;
    let n = 0;
    const follow = ledSuit >= 0 && h[seat * 4 + ledSuit] !== 0;
    for (let s = 0; s < 4; s++) {
      if (follow && s !== ledSuit) continue;
      const m = h[seat * 4 + s];
      if (m === 0) continue;
      const alive = h[s] | h[4 + s] | h[8 + s] | h[12 + s] | this.table[s];
      let prevIn = false;
      for (let r = 12; r >= 0; r--) {
        const bit = 1 << r;
        if ((alive & bit) === 0) continue;
        if (m & bit) {
          if (!prevIn) {
            this.mvS[base + n] = s;
            this.mvR[base + n] = r;
            this.mvSc[base + n] = s === this.hintSuit && r === this.hintRank ? 10000 : this.scoreMove(s, r, seat, pos, ledSuit, d);
            n++;
          }
          prevIn = true;
        } else prevIn = false;
      }
    }
    for (let i = 1; i < n; i++) {
      const sc = this.mvSc[base + i], ss = this.mvS[base + i], rr = this.mvR[base + i];
      let j = i - 1;
      while (j >= 0 && this.mvSc[base + j] < sc) {
        this.mvSc[base + j + 1] = this.mvSc[base + j];
        this.mvS[base + j + 1] = this.mvS[base + j];
        this.mvR[base + j + 1] = this.mvR[base + j];
        j--;
      }
      this.mvSc[base + j + 1] = sc;
      this.mvS[base + j + 1] = ss;
      this.mvR[base + j + 1] = rr;
    }
    return n;
  }

  private scoreMove(s: number, r: number, seat: number, pos: number, ledSuit: number, d: number): number {
    const h = this.h, trump = this.trump;
    const partner = seat ^ 2, lho = (seat + 1) & 3, rho = (seat + 3) & 3;
    if (pos === 0) {
      const all = h[s] | h[4 + s] | h[8 + s] | h[12 + s];
      const top = HIGH[all];
      const lhoRuff = trump < 4 && s !== trump && h[lho * 4 + s] === 0 && h[lho * 4 + trump] !== 0;
      const rhoRuff = trump < 4 && s !== trump && h[rho * 4 + s] === 0 && h[rho * 4 + trump] !== 0;
      let sc = 0;
      if (r === top) sc += lhoRuff || rhoRuff ? -20 : 60;
      else if (HIGH[h[partner * 4 + s]] === top && !lhoRuff && !rhoRuff) sc += 40 + (12 - r);
      if (trump < 4 && s !== trump && h[partner * 4 + s] === 0 && h[partner * 4 + trump] !== 0 && !rhoRuff) sc += 45 - r;
      if (trump < 4 && s === trump) {
        const ours = POP[h[seat * 4 + trump]] + POP[h[partner * 4 + trump]];
        const theirs = POP[h[lho * 4 + trump]] + POP[h[rho * 4 + trump]];
        if (ours > theirs && theirs > 0) sc += 15;
      }
      sc += POP[h[seat * 4 + s]] * 2 - (r >> 1);
      if (r !== top && r >= 8 && HIGH[h[lho * 4 + s]] > r) sc -= 12;
      return sc;
    }
    const ws = this.wSeat[d - 1], wsu = this.wSuit[d - 1], wr = this.wRank[d - 1];
    const partnerWinning = ws === partner;
    if (s === ledSuit) {
      const beats = wsu === s && r > wr;
      if (pos === 3) {
        if (partnerWinning) return 100 - r;
        return beats ? 200 - r : 100 - r;
      }
      let laterHigh = -1;
      let laterRuff = false;
      for (let k = pos + 1; k < 4; k++) {
        const p = (seat + k - pos) & 3;
        if ((p & 1) === (seat & 1)) continue;
        const hs = HIGH[h[p * 4 + s]];
        if (hs > laterHigh) laterHigh = hs;
        if (h[p * 4 + s] === 0 && trump < 4 && s !== trump && h[p * 4 + trump] !== 0) laterRuff = true;
      }
      if (pos === 2 && partnerWinning && wr > laterHigh && !laterRuff) return 100 - r;
      if (beats && r > laterHigh && !laterRuff) return 200 - r;
      if (pos === 2 && beats) return 120 + r;
      return 100 - r;
    }
    if (trump < 4 && s === trump) {
      if (partnerWinning) return 20 - r;
      if (wsu === trump && r < wr) return 5 - r;
      return 180 - r;
    }
    const all = h[s] | h[4 + s] | h[8 + s] | h[12 + s];
    let sc = 50 - r * 2 + POP[h[seat * 4 + s]] * 3;
    if (r === HIGH[all]) sc -= 30;
    return sc;
  }

  // -------------------------------------------------------------------------
  // transposition table

  /** Owner sequences (top card first) and lengths for the trick-start node at depth d. */
  private computeShape(d: number) {
    const h = this.h, o = d * 4;
    for (let s = 0; s < 4; s++) {
      const m1 = h[4 + s], m2 = h[8 + s], m3 = h[12 + s];
      const all = h[s] | m1 | m2 | m3;
      let seq = 0;
      for (let r = 12; r >= 0; r--) {
        const bit = 1 << r;
        if ((all & bit) === 0) continue;
        seq = seq * 4 + (m1 & bit ? 1 : m2 & bit ? 2 : m3 & bit ? 3 : 0);
      }
      this.curSeq[o + s] = seq;
      this.curLen[o + s] = POP[all];
    }
  }

  private lengthKeys(): [number, number] {
    const h = this.h;
    let a = 0, b = 0;
    for (let seat = 0; seat < 4; seat++) {
      a |= (POP[h[seat * 4]] | (POP[h[seat * 4 + 1]] << 4)) << (seat * 8);
      b |= (POP[h[seat * 4 + 2]] | (POP[h[seat * 4 + 3]] << 4)) << (seat * 8);
    }
    return [a | 0, b | 0];
  }

  private bucketOf(a: number, b: number, leader: number): number {
    let x = Math.imul(a ^ (leader * 0x45d9f3b), 0x9e3779b1) ^ Math.imul(b, 0x85ebca77);
    x ^= x >>> 15;
    x = Math.imul(x, 0xc2b2ae3d);
    x ^= x >>> 13;
    return x >>> (32 - BUCKET_BITS);
  }

  /** Find an entry whose bounds decide `need`; returns pool index or -1. */
  private ttProbe(bucket: number, a: number, b: number, d: number, need: number): number {
    let e = this.heads[bucket];
    let steps = 0;
    const o = d * 4;
    this.probeHint = -1;
    while (e >= 0 && steps++ < CHAIN_LIMIT) {
      if (this.eL0[e] === a && this.eL1[e] === b && (this.eK[e] & 3) === this.leader) {
        const lo = this.eLb[e], hi = this.eUb[e];
        const decisive = lo >= need || hi < need;
        if (decisive || (this.probeHint < 0 && this.eMove[e] >= 0)) {
          const k = this.eK[e];
          let ok = true;
          for (let s = 0; s < 4 && ok; s++) {
            const ks = (k >>> (2 + s * 4)) & 15;
            if (ks === 0) continue;
            const shift = 2 * (this.curLen[o + s] - ks);
            if (this.curSeq[o + s] >>> shift !== this.eSeq[e * 4 + s]) ok = false;
          }
          if (ok) {
            if (decisive) return e;
            this.probeHint = this.eMove[e];
          }
        }
      }
      e = this.eNext[e];
    }
    return -1;
  }

  private ttStore(bucket: number, a: number, b: number, d: number, lo: number, hi: number, move = -1) {
    const o = d * 4;
    // relevant cards per suit -> number of top alive cards to match
    let k = this.leader;
    const ks = [0, 0, 0, 0];
    for (let s = 0; s < 4; s++) {
      const r = this.rel[o + s];
      if (r === 0) continue;
      const all = this.h[s] | this.h[4 + s] | this.h[8 + s] | this.h[12 + s];
      const minR = LOW[r];
      ks[s] = POP[all & ~((1 << minR) - 1)];
      k |= ks[s] << (2 + s * 4);
    }
    // update an identical entry if present
    let e = this.heads[bucket];
    let steps = 0;
    while (e >= 0 && steps++ < 16) {
      if (this.eK[e] === k && this.eL0[e] === a && this.eL1[e] === b) {
        let same = true;
        for (let s = 0; s < 4 && same; s++) {
          if (ks[s] && this.curSeq[o + s] >>> (2 * (this.curLen[o + s] - ks[s])) !== this.eSeq[e * 4 + s]) same = false;
        }
        if (same) {
          if (lo > this.eLb[e]) this.eLb[e] = lo;
          if (hi < this.eUb[e]) this.eUb[e] = hi;
          if (move >= 0) this.eMove[e] = move;
          return;
        }
      }
      e = this.eNext[e];
    }
    if (this.poolUsed >= this.pool) this.reset();
    e = this.poolUsed++;
    this.eL0[e] = a;
    this.eL1[e] = b;
    this.eK[e] = k;
    for (let s = 0; s < 4; s++) this.eSeq[e * 4 + s] = ks[s] ? this.curSeq[o + s] >>> (2 * (this.curLen[o + s] - ks[s])) : 0;
    this.eLb[e] = lo;
    this.eUb[e] = hi;
    this.eMove[e] = move;
    this.eNext[e] = this.heads[bucket];
    this.heads[bucket] = e;
  }

  /** Absolute rank mask of the top n alive cards of suit s. */
  private topCards(s: number, n: number): number {
    const all = this.h[s] | this.h[4 + s] | this.h[8 + s] | this.h[12 + s] | this.table[s];
    let m = 0;
    for (let r = 12; r >= 0 && n > 0; r--) {
      if (all & (1 << r)) {
        m |= 1 << r;
        n--;
      }
    }
    return m;
  }

  // -------------------------------------------------------------------------
  // quick tricks for the side on lead (trick start only). Fills qtTop with the
  // number of top cards per suit the count relies on.

  private quickTricks(seat: number): number {
    const h = this.h, trump = this.trump, top = this.qtTop;
    top[0] = top[1] = top[2] = top[3] = 0;
    const partner = seat ^ 2, o1 = (seat + 1) & 3, o2 = (seat + 3) & 3;
    const tops = [0, 0, 0, 0];
    const counts = [0, 0, 0, 0];
    for (let s = 0; s < 4; s++) {
      const m = h[seat * 4 + s];
      if (m === 0) continue;
      const others = h[partner * 4 + s] | h[o1 * 4 + s] | h[o2 * 4 + s];
      const hiOther = HIGH[others];
      let k = 0;
      for (let r = 12; r > hiOther; r--) if (m & (1 << r)) k++;
      tops[s] = k;
      const oppMax = Math.max(POP[h[o1 * 4 + s]], POP[h[o2 * 4 + s]]);
      counts[s] = k > 0 && k >= oppMax && POP[h[partner * 4 + s]] <= k ? POP[m] : k;
    }
    if (trump === 4 || (h[o1 * 4 + trump] | h[o2 * 4 + trump]) === 0) {
      let t = 0;
      for (let s = 0; s < 4; s++) {
        t += counts[s];
        top[s] = tops[s];
      }
      return t;
    }
    const oppTrumpMax = Math.max(POP[h[o1 * 4 + trump]], POP[h[o2 * 4 + trump]]);
    if (tops[trump] >= oppTrumpMax) {
      let t = 0;
      for (let s = 0; s < 4; s++) {
        t += counts[s];
        top[s] = tops[s];
      }
      return t;
    }
    let best = counts[trump], bestSuit = trump;
    for (let s = 0; s < 4; s++) {
      if (s === trump) continue;
      let k = counts[s];
      if (h[o1 * 4 + trump]) k = Math.min(k, POP[h[o1 * 4 + s]]);
      if (h[o2 * 4 + trump]) k = Math.min(k, POP[h[o2 * 4 + s]]);
      if (k > best) {
        best = k;
        bestSuit = s;
      }
    }
    top[bestSuit] = tops[bestSuit];
    return best;
  }

  // -------------------------------------------------------------------------
  // search

  /** Can NS take at least `target` tricks (counted from the root)? Sets rel[] for this depth. */
  private search(target: number): boolean {
    this.nodes++;
    const d = this.depth, ro = d * 4, rel = this.rel;
    rel[ro] = rel[ro + 1] = rel[ro + 2] = rel[ro + 3] = 0;
    const ns = this.ns;
    if (ns >= target) return true;
    if (ns + this.tricksLeft < target) return false;
    const need = target - ns;
    let bucket = -1, la = 0, lb = 0;
    if (this.pos === 0) {
      if (this.tricksLeft === 1) return this.lastTrick(ro) >= need;
      this.computeShape(d);
      [la, lb] = this.lengthKeys();
      bucket = this.bucketOf(la, lb, this.leader);
      const e = this.ttProbe(bucket, la, lb, d, need);
      if (e >= 0) {
        const k = this.eK[e];
        for (let s = 0; s < 4; s++) {
          const ks = (k >>> (2 + s * 4)) & 15;
          if (ks) rel[ro + s] = this.topCards(s, ks);
        }
        return this.eLb[e] >= need;
      }
      const qt = this.quickTricks(this.leader);
      const nsLeads = (this.leader & 1) === 0;
      if (nsLeads ? qt >= need : this.tricksLeft - qt < need) {
        for (let s = 0; s < 4; s++) if (this.qtTop[s]) rel[ro + s] = this.topCards(s, this.qtTop[s]);
        if (nsLeads) this.ttStore(bucket, la, lb, d, qt, this.tricksLeft);
        else this.ttStore(bucket, la, lb, d, 0, this.tricksLeft - qt);
        return nsLeads;
      }
      // the top trump always wins a trick for its owner
      if (this.trump < 4) {
        const t = this.trump, h = this.h;
        const allT = h[t] | h[4 + t] | h[8 + t] | h[12 + t];
        if (allT) {
          const top = HIGH[allT], bit = 1 << top;
          const nsHasTop = ((h[t] | h[8 + t]) & bit) !== 0;
          if (nsHasTop ? need <= 1 : this.tricksLeft - 1 < need) {
            rel[ro + t] = bit;
            if (nsHasTop) this.ttStore(bucket, la, lb, d, 1, this.tricksLeft);
            else this.ttStore(bucket, la, lb, d, 0, this.tricksLeft - 1);
            return nsHasTop;
          }
        }
      }
      if (this.probeHint >= 0) {
        const hs = this.probeHint >> 4;
        let idx = this.probeHint & 15;
        const all = this.h[hs] | this.h[4 + hs] | this.h[8 + hs] | this.h[12 + hs];
        for (let r = 12; r >= 0; r--) {
          if (all & (1 << r) && idx-- === 0) {
            if (this.h[this.leader * 4 + hs] & (1 << r)) {
              this.hintSuit = hs;
              this.hintRank = r;
            }
            break;
          }
        }
      }
    }
    const isMax = (this.toPlay & 1) === 0;
    const n = this.genMoves();
    this.hintSuit = this.hintRank = -1;
    let bestMove = -1;
    const base = d * 13, co = ro + 4;
    let result = !isMax;
    let r0 = 0, r1 = 0, r2 = 0, r3 = 0;
    for (let i = 0; i < n; i++) {
      this.applyCard(this.mvS[base + i], this.mvR[base + i]);
      const res = this.search(target);
      let c0 = rel[co], c1 = rel[co + 1], c2 = rel[co + 2], c3 = rel[co + 3];
      if (this.pos === 0) {
        // this card completed a trick: the deciding rank of that trick matters
        const tr = this.trickRelevance(d);
        if (tr) {
          const ws = this.wSuit[d];
          if (ws === 0) c0 |= tr;
          else if (ws === 1) c1 |= tr;
          else if (ws === 2) c2 |= tr;
          else c3 |= tr;
        }
      }
      this.undoCard();
      if (res === isMax) {
        result = isMax;
        if (bucket >= 0) {
          const ms = this.mvS[base + i], mr = this.mvR[base + i];
          const all = this.h[ms] | this.h[4 + ms] | this.h[8 + ms] | this.h[12 + ms];
          bestMove = ms * 16 + POP[all >> (mr + 1)];
        }
        r0 = c0;
        r1 = c1;
        r2 = c2;
        r3 = c3;
        break;
      }
      r0 |= c0;
      r1 |= c1;
      r2 |= c2;
      r3 |= c3;
    }
    rel[ro] = r0;
    rel[ro + 1] = r1;
    rel[ro + 2] = r2;
    rel[ro + 3] = r3;
    if (bucket >= 0) {
      if (result) this.ttStore(bucket, la, lb, d, need, this.tricksLeft, bestMove);
      else this.ttStore(bucket, la, lb, d, 0, need - 1, bestMove);
    }
    return result;
  }

  /** Future NS tricks when each hand holds one card at trick start. */
  private lastTrick(ro: number): number {
    const h = this.h, trump = this.trump;
    let ws = this.leader, wsu = -1, wr = -1, beat = false;
    for (let k = 0; k < 4; k++) {
      const seat = (this.leader + k) & 3;
      let s = 0;
      while (h[seat * 4 + s] === 0) s++;
      const r = HIGH[h[seat * 4 + s]];
      if (k === 0 || (s === wsu && r > wr) || (s === trump && wsu !== trump)) {
        beat = k > 0 && s === wsu;
        ws = seat;
        wsu = s;
        wr = r;
      } else if (s === wsu) beat = true;
    }
    if (beat) this.rel[ro + wsu] = 1 << wr;
    return (ws & 1) === 0 ? 1 : 0;
  }

  /** Exact NS tricks (counted from the root) knowing the answer is in [lo, hi]. */
  private exact(lo: number, hi: number, guess: number): number {
    let g = guess;
    while (lo < hi) {
      const t = Math.max(lo + 1, Math.min(hi, g));
      if (this.search(t)) {
        lo = t;
        g = t + 1;
      } else {
        hi = t - 1;
        g = t - 1;
      }
    }
    return lo;
  }

  // -------------------------------------------------------------------------
  // public API

  /** NS tricks from the loaded position (current trick included) with best play. */
  value(guess?: number): number {
    const lo = this.ns, hi = this.ns + this.tricksLeft;
    return this.exact(lo, hi, guess ?? lo + (this.tricksLeft >> 1));
  }

  /** Every legal card for the player to move with its DD value (NS tricks). */
  analyze(guess?: number): MoveValue[] {
    const best = this.value(guess);
    const isMax = (this.toPlay & 1) === 0;
    const seat = this.toPlay;
    const n = this.genMoves();
    const base = this.depth * 13;
    const reps: number[] = [];
    for (let i = 0; i < n; i++) reps.push(this.mvS[base + i] * 13 + this.mvR[base + i]);
    const out: MoveValue[] = [];
    for (const rep of reps) {
      const s = (rep / 13) | 0, r = rep % 13;
      const m = this.h[seat * 4 + s];
      const alive = this.h[s] | this.h[4 + s] | this.h[8 + s] | this.h[12 + s] | this.table[s];
      this.applyCard(s, r);
      const lo = this.ns, hi = this.ns + this.tricksLeft;
      let v: number;
      if (isMax) v = this.search(best) ? best : this.exact(lo, Math.min(hi, best - 1), best - 1);
      else v = best + 1 <= hi && this.search(best + 1) ? this.exact(best + 1, hi, best + 1) : best;
      this.undoCard();
      for (let rr = r; rr >= 0; rr--) {
        const bit = 1 << rr;
        if ((alive & bit) === 0) continue;
        if ((m & bit) === 0) break;
        out.push({ card: s * 13 + rr, nsTricks: v });
      }
    }
    return out;
  }
}

/** Masks for a list of hands. */
export function masksOf(hands: readonly (readonly Card[])[]): number[][] {
  return hands.map(hand => {
    const m = [0, 0, 0, 0];
    for (const c of hand) m[(c / 13) | 0] |= 1 << c % 13;
    return m;
  });
}

/** Double-dummy table: tricks for declarer, indexed [strain][declarer]. */
export function ddTable(solver: DDSolver, hands: readonly (readonly Card[])[]): number[][] {
  const masks = masksOf(hands);
  const out: number[][] = [];
  for (let strain = 0; strain < 5; strain++) {
    const row: number[] = [];
    for (let decl = 0; decl < 4; decl++) {
      solver.load({ masks, trump: strain, leader: (decl + 1) & 3, trick: [] });
      const prev = decl >= 2 ? row[decl - 2] : undefined;
      const guess = prev === undefined ? undefined : (decl & 1) === 0 ? prev : 13 - prev;
      const ns = solver.value(guess);
      row.push((decl & 1) === 0 ? ns : 13 - ns);
    }
    out.push(row);
  }
  return out;
}
