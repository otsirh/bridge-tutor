// Double-dummy solver.
//
// Alpha-beta search over card plays using null-window tests ("can North-South
// take at least T tricks?") with:
//   * a partition-search transposition table: each stored result remembers
//     which high cards ("winning ranks") actually decided it, so it is reused
//     for any position with the same suit lengths in which those top cards
//     have the same owners — small cards are interchangeable. When it fills
//     up, the entries nearest the root are kept;
//   * equivalent-card pruning (touching cards in one hand are one move);
//   * cutoffs at the start of each trick: quick tricks for the side on lead
//     (cashing, or crossing to partner's winners, or a crossruff) and the
//     tricks the top trumps are sure to win for either side;
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
// A cached position is ENT consecutive ints, so walking a chain touches one
// cache line per entry: [0] club and diamond lengths per seat, [1] heart and
// spade lengths, [2] key: leader (2 bits) | cards to match per suit (4 bits
// each) | lower bound << 18 | upper bound << 22, [3] next entry in the chain,
// [4..7] owners of the cards to match per suit, top card first.
const ENT = 8;
const KEY_MASK = (1 << 18) - 1;
// Entries for one set of suit lengths can be many. Those that match at least
// one or two top cards in every suit still held are filed by the owners of
// those cards too (levels 1 and 2), so each chain stays short; a lookup walks
// the chains of levels 0, 1 and 2.
const LEVELS = 2;

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
  // transposition table: buckets keyed by leader, the 16 suit lengths and, from level 1, the owners of the top cards
  private heads = new Int32Array(BUCKETS).fill(-1);
  private ent: Int32Array;
  private eMove: Int8Array; // best move: suit*16 + index from the top among live cards, or -1
  private poolUsed = 0;
  private ttTrump = -1;
  // scratch for the current trick-start node
  private curSeq = new Int32Array(MAX_DEPTH * 4);
  private curLen = new Int32Array(MAX_DEPTH * 4);
  private qtTop = new Int32Array(4);
  private stRel = 0; // trump ranks behind the last sureTrumps() count
  private hintSuit = -1; // move-ordering hint for the next genMoves call
  private hintRank = -1;
  private probeHint = -1;
  private stSeq = new Int32Array(4); // scratch for ttStore
  private stKs = new Int32Array(4);

  private pool: number;

  nodes = 0;

  /** poolBits: log2 of the number of cached positions (2^20 ≈ 34 MB). */
  constructor(poolBits = 20) {
    const n = (this.pool = 1 << poolBits);
    this.ent = new Int32Array(n * ENT);
    this.eMove = new Int8Array(n);
  }

  /** Forget all cached results (done automatically when the trump suit changes). */
  reset() {
    this.heads.fill(-1);
    this.poolUsed = 0;
  }

  /**
   * The pool is full. Wiping it would throw away everything a long search has
   * learnt and can send it into a loop of refilling and wiping; instead keep
   * the entries nearest the root (most cards left: each saves the most work),
   * at most three quarters of the pool, and relink them.
   */
  private compact() {
    const n = this.poolUsed, ent = this.ent;
    const left = new Uint8Array(n);
    const perCount = new Int32Array(53);
    for (let e = 0; e < n; e++) {
      const a = ent[e * ENT], b = ent[e * ENT + 1];
      let cards = 0;
      for (let i = 0; i < 32; i += 4) cards += ((a >>> i) & 15) + ((b >>> i) & 15);
      left[e] = cards;
      perCount[cards]++;
    }
    let from = 53, kept = 0;
    while (from > 0 && kept + perCount[from - 1] <= (n * 3) >> 2) kept += perCount[--from];
    this.heads.fill(-1);
    let w = 0;
    for (let e = 0; e < n; e++) {
      if (left[e] < from) continue;
      if (w !== e) ent.copyWithin(w * ENT, e * ENT, e * ENT + ENT);
      this.eMove[w] = this.eMove[e];
      const x = w * ENT, bucket = this.entryBucket(x);
      ent[x + 3] = this.heads[bucket];
      this.heads[bucket] = w;
      w++;
    }
    this.poolUsed = w;
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
      let all = h[s] | m1 | m2 | m3;
      this.curLen[o + s] = POP[all];
      let seq = 0;
      while (all) {
        const bit = 1 << HIGH[all];
        all ^= bit;
        seq = (seq << 2) | (m1 & bit ? 1 : m2 & bit ? 2 : m3 & bit ? 3 : 0);
      }
      this.curSeq[o + s] = seq;
    }
  }

  /** Suit lengths per seat: clubs and diamonds (first key), hearts and spades (second). */
  private lengthKey(first: boolean): number {
    const h = this.h, s = first ? 0 : 2;
    let a = 0;
    for (let seat = 0; seat < 4; seat++) a |= (POP[h[seat * 4 + s]] | (POP[h[seat * 4 + s + 1]] << 4)) << (seat * 8);
    return a | 0;
  }

  private bucketOf(a: number, b: number, leader: number): number {
    let x = Math.imul(a ^ (leader * 0x45d9f3b), 0x9e3779b1) ^ Math.imul(b, 0x85ebca77);
    x ^= x >>> 15;
    x = Math.imul(x, 0xc2b2ae3d);
    x ^= x >>> 13;
    return x >>> (32 - BUCKET_BITS);
  }

  /** The chain for `level`, given the owners of the top `level` cards per suit (0 for a suit no one holds). */
  private levelBucket(a: number, b: number, leader: number, level: number, t0: number, t1: number, t2: number, t3: number): number {
    const t = level ? (level << 16) | (t0 << 12) | (t1 << 8) | (t2 << 4) | t3 : 0;
    return this.bucketOf(a, b ^ Math.imul(t, 0x2545f491), leader);
  }

  /** The chain an entry belongs to (for relinking). */
  private entryBucket(x: number): number {
    const ent = this.ent, a = ent[x], b = ent[x + 1], k = ent[x + 2];
    const len = this.stKs;
    let level = LEVELS;
    for (let s = 0; s < 4; s++) {
      const m = s < 2 ? a >>> (s * 4) : b >>> ((s - 2) * 4);
      len[s] = (m & 15) + ((m >>> 8) & 15) + ((m >>> 16) & 15) + ((m >>> 24) & 15);
      if (len[s]) level = Math.min(level, (k >>> (2 + s * 4)) & 15);
    }
    const top = (s: number) => (len[s] ? ent[x + 4 + s] >>> (2 * (((k >>> (2 + s * 4)) & 15) - level)) : 0);
    return this.levelBucket(a, b, k & 3, level, top(0), top(1), top(2), top(3));
  }

  /** Find an entry whose bounds decide `need`; returns pool index or -1. */
  private ttProbe(a: number, b: number, d: number, need: number): number {
    const o = d * 4, len = this.curLen, seq = this.curSeq;
    let maxLevel = LEVELS;
    for (let s = 0; s < 4; s++) if (len[o + s] && len[o + s] < maxLevel) maxLevel = len[o + s];
    this.probeHint = -1;
    for (let level = 0; level <= maxLevel; level++) {
      const t0 = len[o] ? seq[o] >>> (2 * (len[o] - level)) : 0;
      const t1 = len[o + 1] ? seq[o + 1] >>> (2 * (len[o + 1] - level)) : 0;
      const t2 = len[o + 2] ? seq[o + 2] >>> (2 * (len[o + 2] - level)) : 0;
      const t3 = len[o + 3] ? seq[o + 3] >>> (2 * (len[o + 3] - level)) : 0;
      const e = this.probeChain(this.levelBucket(a, b, this.leader, level, t0, t1, t2, t3), a, b, d, need);
      if (e >= 0) return e;
    }
    return -1;
  }

  private probeChain(bucket: number, a: number, b: number, d: number, need: number): number {
    const ent = this.ent, leader = this.leader, o = d * 4;
    let e = this.heads[bucket], prev = -1;
    let steps = 0;
    while (e >= 0 && steps++ < CHAIN_LIMIT) {
      const x = e * ENT, k = ent[x + 2];
      if (ent[x] === a && ent[x + 1] === b && (k & 3) === leader) {
        const decisive = ((k >>> 18) & 15) >= need || ((k >>> 22) & 15) < need;
        if (decisive || (this.probeHint < 0 && this.eMove[e] >= 0)) {
          let ok = true;
          for (let s = 0; s < 4 && ok; s++) {
            const ks = (k >>> (2 + s * 4)) & 15;
            if (ks !== 0 && this.curSeq[o + s] >>> (2 * (this.curLen[o + s] - ks)) !== ent[x + 4 + s]) ok = false;
          }
          if (ok) {
            if (decisive) {
              // move to the front: positions recur in bursts
              if (prev >= 0) {
                ent[prev * ENT + 3] = ent[x + 3];
                ent[x + 3] = this.heads[bucket];
                this.heads[bucket] = e;
              }
              return e;
            }
            this.probeHint = this.eMove[e];
          }
        }
      }
      prev = e;
      e = ent[x + 3];
    }
    return -1;
  }

  private ttStore(a: number, b: number, d: number, lo: number, hi: number, move = -1) {
    const o = d * 4, ent = this.ent, seq = this.stSeq, kss = this.stKs;
    // relevant cards per suit -> number of top alive cards to match, and their owners
    let k = this.leader, level = LEVELS;
    for (let s = 0; s < 4; s++) {
      const r = this.rel[o + s];
      seq[s] = kss[s] = 0;
      if (r !== 0) {
        const all = this.h[s] | this.h[4 + s] | this.h[8 + s] | this.h[12 + s];
        kss[s] = POP[all & ~((1 << LOW[r]) - 1)];
        seq[s] = this.curSeq[o + s] >>> (2 * (this.curLen[o + s] - kss[s]));
        k |= kss[s] << (2 + s * 4);
      }
      if (this.curLen[o + s] && kss[s] < level) level = kss[s];
    }
    const len = this.curLen;
    const bucket = this.levelBucket(
      a, b, this.leader, level,
      len[o] ? seq[0] >>> (2 * (kss[0] - level)) : 0,
      len[o + 1] ? seq[1] >>> (2 * (kss[1] - level)) : 0,
      len[o + 2] ? seq[2] >>> (2 * (kss[2] - level)) : 0,
      len[o + 3] ? seq[3] >>> (2 * (kss[3] - level)) : 0,
    );
    // update an identical entry if present
    let e = this.heads[bucket];
    let steps = 0;
    while (e >= 0 && steps++ < 16) {
      const x = e * ENT, ek = ent[x + 2];
      if ((ek & KEY_MASK) === k && ent[x] === a && ent[x + 1] === b && ent[x + 4] === seq[0] && ent[x + 5] === seq[1] && ent[x + 6] === seq[2] && ent[x + 7] === seq[3]) {
        const elo = Math.max(lo, (ek >>> 18) & 15), ehi = Math.min(hi, (ek >>> 22) & 15);
        ent[x + 2] = k | (elo << 18) | (ehi << 22);
        if (move >= 0) this.eMove[e] = move;
        return;
      }
      e = ent[x + 3];
    }
    if (this.poolUsed >= this.pool) this.compact();
    e = this.poolUsed++;
    const x = e * ENT;
    ent[x] = a;
    ent[x + 1] = b;
    ent[x + 2] = k | (lo << 18) | (hi << 22);
    ent[x + 3] = this.heads[bucket];
    ent[x + 4] = seq[0];
    ent[x + 5] = seq[1];
    ent[x + 6] = seq[2];
    ent[x + 7] = seq[3];
    this.eMove[e] = move;
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

  /**
   * Quick tricks for the side on lead: the leader's own, or partner's after a
   * low card to partner's winner in a suit no opponent can ruff. Fills qtTop.
   */
  private sideQuickTricks(seat: number): number {
    const own = this.quickTricks(seat);
    const h = this.h, trump = this.trump, partner = seat ^ 2, o1 = (seat + 1) & 3, o2 = (seat + 3) & 3;
    let cross = -1;
    for (let e = 0; e < 4 && cross < 0; e++) {
      const lm = h[seat * 4 + e], pm = h[partner * 4 + e];
      if (!lm || !pm || HIGH[pm] < HIGH[lm | h[o1 * 4 + e] | h[o2 * 4 + e]]) continue;
      if (trump < 4 && e !== trump && ((!h[o1 * 4 + e] && h[o1 * 4 + trump]) || (!h[o2 * 4 + e] && h[o2 * 4 + trump]))) continue;
      cross = e;
    }
    if (cross < 0) return own;
    const top = this.qtTop, t0 = top[0], t1 = top[1], t2 = top[2], t3 = top[3];
    const viaPartner = this.quickTricks(partner);
    if (viaPartner > own) {
      if (!top[cross]) top[cross] = 1; // the crossing: partner's top card there
      return viaPartner;
    }
    top[0] = t0;
    top[1] = t1;
    top[2] = t2;
    top[3] = t3;
    return own;
  }

  /**
   * Tricks the side on lead takes by a crossruff from trick start: the leader
   * leads a suit partner is void in and partner ruffs, partner leads one the
   * leader is void in and the leader ruffs, and so on — counted only while
   * each opponent holding trumps must follow suit, so no ruff can be
   * overruffed. Depends on suit lengths alone.
   */
  private crossRuff(seat: number): number {
    const t = this.trump, h = this.h, p = seat ^ 2, o1 = (seat + 1) & 3, o2 = (seat + 3) & 3;
    const myTrumps = POP[h[seat * 4 + t]], partnerTrumps = POP[h[p * 4 + t]];
    if (!myTrumps || !partnerTrumps) return 0;
    const o1t = h[o1 * 4 + t] !== 0, o2t = h[o2 * 4 + t] !== 0;
    let toPartner = 0, toMe = 0;
    for (let s = 0; s < 4; s++) {
      if (s === t) continue;
      const mine = POP[h[seat * 4 + s]], his = POP[h[p * 4 + s]];
      let follow = 13;
      if (o1t) follow = Math.min(follow, POP[h[o1 * 4 + s]]);
      if (o2t) follow = Math.min(follow, POP[h[o2 * 4 + s]]);
      if (!his) toPartner += Math.min(mine, follow);
      if (!mine) toMe += Math.min(his, follow);
    }
    const x = Math.min(toPartner, partnerTrumps), y = Math.min(toMe, myTrumps);
    if (!x) return 0;
    return x > y ? 2 * y + 1 : 2 * x;
  }

  /**
   * Tricks `side` (0 = NS, 1 = EW) is sure to win with its trumps, at trick
   * start: each trick to which it plays a trump above all the opponents'
   * trumps is its own, so it wins at least as many tricks as one of its hands
   * holds such trumps — every trump, when the opponents have none — and two
   * when each hand holds one of the top two and either has another trump (the
   * two cannot be forced onto one trick). Sets stRel to the trump ranks the
   * count relies on.
   */
  private sureTrumps(side: number): number {
    const t = this.trump, h = this.h;
    const a = h[side * 4 + t], b = h[(side + 2) * 4 + t];
    const opp = h[(side + 1) * 4 + t] | h[((side + 3) & 3) * 4 + t];
    this.stRel = 0;
    if (!opp) return Math.max(POP[a], POP[b]);
    const above = HIGH[opp] + 1;
    const ta = POP[a >> above], tb = POP[b >> above];
    this.stRel = (a | b) & ~((1 << above) - 1);
    if (ta === 1 && tb === 1 && (POP[a] > 1 || POP[b] > 1)) return 2;
    return Math.max(ta, tb);
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
    let atStart = false, la = 0, lb = 0;
    if (this.pos === 0) {
      if (this.tricksLeft === 1) return this.lastTrick(ro) >= need;
      this.computeShape(d);
      la = this.lengthKey(true);
      lb = this.lengthKey(false);
      atStart = true;
      const e = this.ttProbe(la, lb, d, need);
      if (e >= 0) {
        const k = this.ent[e * ENT + 2];
        for (let s = 0; s < 4; s++) {
          const ks = (k >>> (2 + s * 4)) & 15;
          if (ks) rel[ro + s] = this.topCards(s, ks);
        }
        return ((k >>> 18) & 15) >= need;
      }
      const qt = this.sideQuickTricks(this.leader);
      const nsLeads = (this.leader & 1) === 0;
      if (nsLeads ? qt >= need : this.tricksLeft - qt < need) {
        for (let s = 0; s < 4; s++) if (this.qtTop[s]) rel[ro + s] = this.topCards(s, this.qtTop[s]);
        if (nsLeads) this.ttStore(la, lb, d, qt, this.tricksLeft);
        else this.ttStore(la, lb, d, 0, this.tricksLeft - qt);
        return nsLeads;
      }
      if (this.trump < 4) {
        const cr = this.crossRuff(this.leader);
        if (nsLeads ? cr >= need : this.tricksLeft - cr < need) {
          // depends on suit lengths alone: no rank is relevant
          if (nsLeads) this.ttStore(la, lb, d, cr, this.tricksLeft);
          else this.ttStore(la, lb, d, 0, this.tricksLeft - cr);
          return nsLeads;
        }
        // tricks the top trumps win for their side whatever happens
        const nsSure = this.sureTrumps(0);
        if (nsSure >= need) {
          rel[ro + this.trump] = this.stRel;
          this.ttStore(la, lb, d, nsSure, this.tricksLeft);
          return true;
        }
        const ewSure = this.sureTrumps(1);
        if (this.tricksLeft - ewSure < need) {
          rel[ro + this.trump] = this.stRel;
          this.ttStore(la, lb, d, 0, this.tricksLeft - ewSure);
          return false;
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
        if (atStart) {
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
    if (result !== isMax) {
      // Every move was tried, each standing for its run of touching cards.
      // A cached result is reused wherever the cards from the top down to the
      // lowest relevant one have the same owners, so a run reaching into that
      // range must lie wholly inside it, or elsewhere it could split into moves
      // never tried here.
      const seat = this.toPlay;
      let suits = 0;
      for (let i = 0; i < n; i++) suits |= 1 << this.mvS[base + i];
      if (suits & 1) r0 = this.runsRelevant(seat, 0, r0);
      if (suits & 2) r1 = this.runsRelevant(seat, 1, r1);
      if (suits & 4) r2 = this.runsRelevant(seat, 2, r2);
      if (suits & 8) r3 = this.runsRelevant(seat, 3, r3);
    }
    rel[ro] = r0;
    rel[ro + 1] = r1;
    rel[ro + 2] = r2;
    rel[ro + 3] = r3;
    if (atStart) {
      if (result) this.ttStore(la, lb, d, need, this.tricksLeft, bestMove);
      else this.ttStore(la, lb, d, 0, need - 1, bestMove);
    }
    return result;
  }

  /**
   * `rel` (relevant ranks of suit s) extended so that every run of touching
   * cards in `seat`'s hand that starts at or above the lowest relevant rank
   * ends there too.
   */
  private runsRelevant(seat: number, s: number, rel: number): number {
    if (rel === 0) return 0;
    const h = this.h, m = h[seat * 4 + s];
    const alive = h[s] | h[4 + s] | h[8 + s] | h[12 + s] | this.table[s];
    let low = -1; // lowest card of the current run, -1 between runs
    for (let r = 12; r >= 0; r--) {
      const bit = 1 << r;
      if ((alive & bit) === 0) continue;
      if (m & bit) {
        if (low < 0 && r < LOW[rel]) break; // a run starting below the relevant range
        low = r;
      } else if (low >= 0) {
        rel |= 1 << low;
        low = -1;
      }
    }
    if (low >= 0) rel |= 1 << low;
    return rel;
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
    let ns: number | undefined;
    for (let decl = 0; decl < 4; decl++) {
      solver.load({ masks, trump: strain, leader: (decl + 1) & 3, trick: [] });
      // a new leader rarely changes North-South's tricks by more than one
      ns = solver.value(ns);
      row.push((decl & 1) === 0 ? ns : 13 - ns);
    }
    out.push(row);
  }
  return out;
}
