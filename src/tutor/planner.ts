// Declarer's plan: count winners (notrump) or losers (suit contracts) and
// point out where extra tricks can come from. A teaching aid, not a solver.

import { type Card, suitOf, rankOf, rankLabel, NT } from '../core/cards';
import type { Contract } from '../core/auction';
import { T } from '../i18n';

export interface SuitPlan {
  suit: number;
  decl: number[]; // ranks high→low
  dummy: number[];
  winners: number; // sure tricks (top cards)
  losers: number; // losers in the master hand (suit contracts)
  note: string;
}

export interface Plan {
  kind: 'winners' | 'losers';
  need: number; // tricks needed (winners) or losers you can afford
  total: number;
  suits: SuitPlan[];
  summary: string;
  ideas: string[];
}

const fmt = (r: number[]) => (r.length ? r.map(rankLabel).join('') : '—');

/** Sure tricks from a suit: top cards in an unbroken run held by the partnership, limited by the longer hand. */
export function topTricks(a: number[], b: number[], theirs: (r: number) => boolean): number {
  let k = 0;
  for (let r = 14; r >= 2; r--) {
    if (a.includes(r) || b.includes(r)) k++;
    else if (theirs(r)) break;
  }
  return Math.min(k, Math.max(a.length, b.length));
}

export function makePlan(declHand: readonly Card[], dummyHand: readonly Card[], contract: Contract, gone: readonly Card[] = []): Plan {
  const X = T.tutor.plan;
  const trump = contract.strain;
  const need = contract.level + 6;
  const goneSet = new Set(gone);
  const suits: SuitPlan[] = [];
  const declTrumps = trump < NT ? declHand.filter(c => suitOf(c) === trump).length : 0;
  const dummyTrumps = trump < NT ? dummyHand.filter(c => suitOf(c) === trump).length : 0;
  const masterIsDecl = declTrumps >= dummyTrumps;
  for (const s of [3, 2, 1, 0]) {
    const d = declHand.filter(c => suitOf(c) === s).map(rankOf).sort((x, y) => y - x);
    const m = dummyHand.filter(c => suitOf(c) === s).map(rankOf).sort((x, y) => y - x);
    const theirs = (r: number) => !d.includes(r) && !m.includes(r) && !goneSet.has(s * 13 + r - 2);
    const winners = topTricks(d, m, theirs);
    let losers = 0;
    if (trump !== NT) {
      const master = masterIsDecl ? d : m;
      const live: number[] = [];
      for (let r = 14; r >= 2 && live.length < 3; r--) if (!goneSet.has(s * 13 + r - 2)) live.push(r);
      for (let i = 0; i < Math.min(master.length, 3); i++) if (theirs(live[i])) losers++;
    }
    const total = d.length + m.length;
    const note = winners >= total && total > 0 ? X.allWinners : winners > 0 ? X.topTricks(winners) : X.noTopTricks;
    suits.push({ suit: s, decl: d, dummy: m, winners, losers, note });
  }

  const ideas: string[] = []; // at most one of each kind per suit, so none repeats
  const oppCount = (sp: SuitPlan) => 13 - sp.decl.length - sp.dummy.length - gone.filter(c => suitOf(c) === sp.suit).length;
  for (const sp of suits) {
    const both = [...sp.decl, ...sp.dummy];
    const total = both.length;
    const missing = oppCount(sp);
    const longer = Math.max(sp.decl.length, sp.dummy.length);
    // length tricks
    if (total >= 7 && longer >= 4 && longer > sp.winners) {
      const split = Math.ceil(missing / 2);
      const extra = Math.max(0, longer - Math.max(split, sp.winners) - (sp.winners >= split ? 0 : 1));
      if (extra > 0 && sp.suit !== trump) ideas.push(X.establish(sp.suit, total, missing, missingSplitOdds(missing), extra));
    }
    // finesse opportunities
    const has = (arr: number[], r: number) => arr.includes(r);
    const pairs: [number[], number[]][] = [[sp.decl, sp.dummy], [sp.dummy, sp.decl]];
    for (const [a, b] of pairs) {
      if (has(a, 14) && has(a, 12) && !has(a, 13) && !has(b, 13) && b.length > 0) {
        ideas.push(X.finesseAQ(sp.suit, fmt(a)));
        break;
      }
      if (has(a, 13) && !has(a, 14) && !has(b, 14) && b.length > 0 && a.length >= 2) {
        ideas.push(X.leadTowardKing(sp.suit, fmt(a)));
        break;
      }
      if (has(a, 14) && has(a, 11) && has(a, 10) && !has(a, 13) && !has(a, 12) && !has(b, 13) && !has(b, 12)) {
        ideas.push(X.doubleFinesse(sp.suit));
        break;
      }
    }
    // promotion
    if (!has(both, 14) && has(both, 13) && has(both, 12) && (has(both, 11) || total >= 5)) {
      ideas.push(X.knockOutAce(sp.suit, has(both, 11)));
    }
  }

  if (trump === NT) {
    const total = suits.reduce((t, s) => t + s.winners, 0);
    const short = need - total;
    const summary = short <= 0 ? X.ntEnough(total, need) : X.ntShort(total, need);
    if (short > 0) ideas.push(X.ntDevelopEarly);
    return { kind: 'winners', need, total, suits, summary, ideas };
  }

  const trumpPlan = suits.find(s => s.suit === trump)!;
  const losers = suits.reduce((t, s) => t + s.losers, 0);
  const allowed = 13 - need;
  const ruffable: { suit: number; len: number }[] = [];
  for (const sp of suits) {
    if (sp.suit === trump || sp.losers === 0) continue;
    const shortSide = masterIsDecl ? sp.dummy : sp.decl;
    const longSide = masterIsDecl ? sp.decl : sp.dummy;
    const shortTrumps = masterIsDecl ? trumpPlan.dummy.length : trumpPlan.decl.length;
    if (shortSide.length < longSide.length && shortSide.length <= 2 && shortTrumps > 0) ruffable.push({ suit: sp.suit, len: shortSide.length });
  }
  if (ruffable.length) ideas.push(X.ruffInShortHand(masterIsDecl, ruffable));
  // discards on a long side suit
  for (const sp of suits) {
    if (sp.suit === trump) continue;
    const dl = sp.decl.length, ml = sp.dummy.length;
    const extra = sp.winners - Math.min(dl, ml);
    if (extra <= 0 || Math.min(dl, ml) === Math.max(dl, ml)) continue;
    const longIsDummy = ml > dl;
    const losersElsewhere = suits.filter(o => o.suit !== sp.suit && o.suit !== trump && o.losers > 0).map(o => o.suit);
    if (losersElsewhere.length) ideas.push(X.discardOnWinners(longIsDummy, extra, sp.suit, losersElsewhere));
  }
  const trumpsOut = 13 - trumpPlan.decl.length - trumpPlan.dummy.length - gone.filter(c => suitOf(c) === trump).length;
  if (trumpsOut > 0) ideas.push(X.trumpsOut(trumpsOut, missingSplitOdds(trumpsOut)));
  const summary = losers <= allowed ? X.losersOk(losers, allowed) : X.tooManyLosers(losers, allowed);
  return { kind: 'losers', need: allowed, total: losers, suits, summary, ideas };
}

/** Most likely split of the opponents' cards in a suit. */
export function missingSplitOdds(n: number): string {
  const table: Record<number, string> = {
    1: '1-0: 100%',
    2: '1-1 52%, 2-0 48%',
    3: '2-1 78%, 3-0 22%',
    4: '3-1 50%, 2-2 40%, 4-0 10%',
    5: '3-2 68%, 4-1 28%, 5-0 4%',
    6: '4-2 48%, 3-3 36%, 5-1 15%',
    7: '4-3 62%, 5-2 31%, 6-1 7%',
    8: '5-3 47%, 4-4 33%, 6-2 17%',
  };
  return table[n] ?? T.tutor.plan.cardsOut(n);
}
