// Competitive bidding: overcalls, takeout doubles, advances, negative doubles.

import { bid, PASS, DOUBLE, REDOUBLE, isBid, levelOf, strainOf } from '../core/auction';
import { CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, goodSuit, dummyPoints, suitHonours } from '../core/eval';
import { T } from '../i18n';
import type { Ctx, CallRecord } from './context';
import { R, hcpC, lenC, balancedC, cond, dpC, goodSuitC, tpC, type Rule, type Cond } from './types';

const stopC = (suits: number[]): Cond => suits.length
  ? cond(
    T.bidding.competitive.stopper(suits),
    h => suits.every(s => hasStopper(h, s)),
    undefined,
    h => (suits.every(s => hasStopper(h, s)) ? T.bidding.conds.hasStopper : T.bidding.conds.noStopper(suits.filter(s => !hasStopper(h, s)))),
  )
  : cond(T.bidding.competitive.noSuitShown, () => true);

const decentSuit = (s: number): Cond => cond(
  T.bidding.competitive.decent(s),
  h => suitHonours(h, s) >= 2 || h.len[s] >= 6,
  undefined,
  h => T.bidding.competitive.decentValue(suitHonours(h, s), s),
);

/** "♠ is your longest suit" */
const longestC = (s: number): Cond => cond(T.bidding.conds.longestSuit(s), h => h.len[s] === h.shape[0]);

/** Is this the balancing (pass-out) seat? */
export function isBalancing(x: Ctx): boolean {
  const n = x.records.length;
  if (n < 3) return false;
  const lb = x.lastBidRecord();
  return !!lb && lb.seat === x.lho && x.records[n - 1].call === PASS && x.records[n - 2].call === PASS;
}

function bestUnbid(h: HandInfo, unbid: number[]): number {
  // prefer a four-card major, then the longest suit (higher on ties)
  const majors = unbid.filter(s => s >= HEARTS && h.len[s] >= 4);
  const pool = majors.length ? majors : unbid;
  return pool.reduce((a, s) => (h.len[s] > h.len[a] || (h.len[s] === h.len[a] && s > a) ? s : a), pool[0]);
}

// ---------------------------------------------------------------------------
// Direct and balancing actions over an opponent's opening

export function overcallRules(x: Ctx): Rule[] {
  const t = T.bidding.competitive;
  const rules: Rule[] = [];
  const lb = x.lastBidRecord()!;
  const theirBids = x.records.filter(r => !x.ourSide(r.seat) && isBid(r.call));
  const op = x.opening()!;
  const preemptOpening = op.meaning.tag === 'weak2' || op.meaning.tag === 'preempt';
  if (theirBids.length > 2 || (theirBids.length === 2 && levelOf(lb.call) > 2) || (!preemptOpening && levelOf(lb.call) > 3)) return rules;
  const theirs = x.theirSuits();
  const unbid = [CLUBS, DIAMONDS, HEARTS, SPADES].filter(s => !theirs.includes(s));
  const bal = isBalancing(x);
  const lastStrain = strainOf(lb.call);
  const lastLevel = levelOf(lb.call);
  const borrow = bal ? 3 : 0;

  if (lastStrain === NT && lastLevel === 1) {
    rules.push(R(DOUBLE, 'penaltyDouble', t.penaltyDouble1nt, [hcpC(15 - borrow)], { tag: 'penaltyX' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      rules.push(R(bid(2, s), 'naturalOvercall', t.naturalOvercall(s), [hcpC(8 - borrow, 15),
        cond(t.naturalOvercallCond(s), h => h.len[s] >= 6 || (s >= HEARTS && h.len[s] === 5 && goodSuit(h, s)), sh => { sh.len[s] = [Math.max(sh.len[s][0], 5), sh.len[s][1]]; }, h => T.bidding.conds.lenValue(h.len[s], s)),
        longestC(s)]));
    }
    rules.push(R(PASS, 'pass', t.pass1nt, []));
    return rules;
  }

  if (lastStrain === NT) {
    rules.push(R(PASS, 'pass', t.passNt, []));
    return rules;
  }

  const s0 = lastStrain; // their (last) suit
  const ntCall = x.cheapest(NT);
  const preempt = lb.meaning.tag === 'weak2' || lb.meaning.tag === 'preempt';

  if (ntCall === bid(1, NT)) {
    rules.push(R(ntCall, bal ? 'balancing1nt' : ['ntOvercall', 1], bal ? t.balancing1nt : t.overcall1nt, [
      hcpC(bal ? 11 : 15, bal ? 14 : 18), balancedC(), stopC(theirs)]));
  }
  if (ntCall === bid(2, NT) && preempt) {
    rules.push(R(ntCall, ['ntOvercall', 2], t.overcall2nt, [hcpC(15, 18), balancedC(), stopC(theirs)]));
  }
  if (ntCall === bid(3, NT) && preempt) {
    rules.push(R(ntCall, ['ntOvercall', 3], t.overcall3nt, [hcpC(16, 21), stopC(theirs)]));
  }

  // two-suited overcalls (direct seat, over a one-level opening)
  if (!bal && lastLevel === 1 && theirs.length === 1) {
    const other2 = unbid.filter(s => s !== s0);
    const low2 = [...other2].sort((a, b) => a - b).slice(0, 2);
    if (x.cheapest(NT) === bid(2, NT)) {
      rules.push(R(bid(2, NT), 'unusual2nt', t.unusual2nt(low2[0], low2[1]), [hcpC(6),
        lenC(low2[0], 5), lenC(low2[1], 5)], { artificial: true, forcing: 'one', tag: 'unusual', data: { a: low2[0], b: low2[1] } }));
    }
    const cue = bid(2, s0);
    if (x.isLegal(cue)) {
      if (s0 <= DIAMONDS) {
        rules.push(R(cue, 'michaels', t.michaelsMinor, [hcpC(6), lenC(HEARTS, 5), lenC(SPADES, 5)], { artificial: true, forcing: 'one', tag: 'michaels', data: { a: HEARTS, b: SPADES } }));
      } else {
        const om = s0 === HEARTS ? SPADES : HEARTS;
        rules.push(R(cue, 'michaels', t.michaelsMajor(om), [hcpC(6), lenC(om, 5),
          cond(t.fiveCardMinor, h => h.len[CLUBS] >= 5 || h.len[DIAMONDS] >= 5)], { artificial: true, forcing: 'one', tag: 'michaels', data: { a: om, b: -1 } }));
      }
    }
  }

  // a good five-card major at the one level: overcall rather than double
  for (const M of [SPADES, HEARTS]) {
    if (theirs.includes(M)) continue;
    const c = x.cheapest(M);
    if (c === null || levelOf(c) !== 1 || preempt) continue;
    rules.push(R(c, 'overcall', t.majorOvercall(M, 8 - borrow), [hcpC(8 - borrow, 16), lenC(M, 5), decentSuit(M),
      cond(t.longestUnbid(M), h => unbid.every(o => h.len[o] < h.len[M] || (h.len[o] === h.len[M] && o <= M)))]));
  }

  // takeout double
  const short = theirs.length
    ? cond(t.shortIn(theirs), h => theirs.every(s => h.len[s] <= 2), sh => { theirs.forEach(s => (sh.len[s] = [0, Math.min(2, sh.len[s][1])])); }, h => T.bidding.conds.lengths(h.len, theirs))
    : cond(t.noSuitShown, () => true);
  const support = cond(t.supportUnbid(unbid.some(s => s >= HEARTS)), h => {
    const weak = unbid.filter(s => h.len[s] < 3);
    return weak.length === 0 || (weak.length === 1 && weak[0] <= DIAMONDS && unbid.filter(s => s >= HEARTS).every(s => h.len[s] >= 4));
  }, sh => { unbid.filter(s => s >= HEARTS).forEach(s => (sh.len[s] = [Math.max(3, sh.len[s][0]), sh.len[s][1]])); }, h => T.bidding.conds.lengths(h.len, unbid));
  const minX = preempt ? 13 + Math.max(0, lastLevel - 2) : bal ? 9 : 12;
  rules.push(R(DOUBLE, 'takeoutDouble', t.takeoutDouble(minX), [hcpC(minX), short, support], { tag: 'takeoutX', forcing: 'one' }));
  rules.push(R(DOUBLE, 'strongDouble', t.strongDouble, [hcpC(17)], { tag: 'takeoutX', forcing: 'one' }));

  // weak jump overcall
  if (!bal && !preempt) {
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(s)) continue;
      const j = x.jump(s);
      if (j === null || levelOf(j) > 3) continue;
      rules.push(R(j, 'weakJumpOvercall', t.weakJumpOvercall(s), [hcpC(6, 10), lenC(s, 6, 7), decentSuit(s)], { tag: 'wjo' }));
    }
  }

  // simple overcalls
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (theirs.includes(s)) continue;
    const c = x.cheapest(s);
    if (c === null) continue;
    const lvl = levelOf(c);
    if (lvl > 3) continue;
    const min = (preempt ? 13 : lvl === 1 ? 8 : 10) - borrow;
    const minLen = lvl === 1 ? 5 : 5;
    rules.push(R(c, lvl === 1 ? 'overcall' : ['overcallAtLevel', lvl], lvl === 1 ? t.overcall(s, min) : t.overcallHigher(min),
      [hcpC(min, 17), lenC(s, minLen), lvl === 1 ? decentSuit(s) : goodSuitC(s),
        cond(t.longestUnbid(s), h => unbid.every(o => h.len[o] < h.len[s] || (h.len[o] === h.len[s] && o <= s)))]));
  }
  rules.push(R(PASS, 'pass', bal ? t.passBalancing : t.pass, [], {
    shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], bal ? 9 : 16)]; },
  }));
  return rules;
}

// ---------------------------------------------------------------------------
// Advancing partner's overcall or double

export function advanceRules(x: Ctx, pAct: CallRecord): Rule[] {
  const t = T.bidding.competitive;
  const rules: Rule[] = [];
  if (x.partnerCall()?.index !== pAct.index) return rules; // partner has spoken again since: use judgment
  const theirs = x.theirSuits();
  const unbid = [CLUBS, DIAMONDS, HEARTS, SPADES].filter(s => !theirs.includes(s));
  const rhoBid = x.rhoCall() && x.rhoCall()!.call !== PASS;
  const tag = pAct.meaning.tag;
  const opp = theirs[0] ?? CLUBS;

  if (tag === 'takeoutX') {
    const free = rhoBid;
    const dbl = x.lastBidRecord();
    if (dbl && levelOf(dbl.call) >= 4) {
      for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (theirs.includes(su)) continue;
        const c = x.cheapest(su);
        if (c === null || levelOf(c) > 5) continue;
        rules.push(R(c, 'takeOut', t.takeOut(su), [lenC(su, 6), cond(T.bidding.conds.singletonOrVoid, h => h.shape[3] <= 1)]));
      }
      rules.push(R(PASS, 'pass', t.passHighDouble, []));
      return rules;
    }
    if (!free) {
      rules.push(R(PASS, 'penaltyPass', t.penaltyPass, [lenC(opp, 5), cond(t.threeHonours, h => suitHonours(h, opp) >= 3), hcpC(8)]));
      rules.push(R(bid(3, NT), ['nt', 3], t.threeNtBalanced, [hcpC(13), cond(T.bidding.conds.semiBalanced, h => h.semiBalanced), stopC(theirs)]));
      const cue = x.cheapest(opp);
      if (cue !== null) rules.push(R(cue, 'cueBid', t.cueBid, [hcpC(12)], { artificial: true, forcing: 'game' }));
      for (const M of [SPADES, HEARTS]) {
        if (!unbid.includes(M)) continue;
        rules.push(R(bid(4, M), 'game', t.gameAfterDouble(M), [lenC(M, 5), hcpC(10)]));
      }
      rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfterDouble, [hcpC(13), stopC(theirs)]));
      for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (!unbid.includes(s)) continue;
        const j = x.jump(s);
        if (j === null || levelOf(j) > 3) continue;
        rules.push(R(j, 'jumpResponse', t.jumpResponse(s), [hcpC(9, 11), lenC(s, 4), cond(t.bestSuit(s), h => bestUnbid(h, unbid) === s)]));
      }
      if (x.cheapest(NT) !== null && levelOf(x.cheapest(NT)!) <= 2) {
        const nt = x.cheapest(NT)!;
        if (levelOf(nt) === 1) rules.push(R(nt, ['nt', 1], t.oneNtAfterDouble, [hcpC(6, 10), stopC(theirs), cond(t.noUnbidMajor, h => unbid.filter(s => s >= HEARTS).every(s => h.len[s] < 4))]));
        rules.push(R(levelOf(nt) === 1 ? bid(2, NT) : nt, ['nt', 2], t.twoNtAfterDouble, [hcpC(11, 12), stopC(theirs)]));
      }
      for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (!unbid.includes(s)) continue;
        const c = x.cheapest(s);
        if (c === null) continue;
        rules.push(R(c, 'forcedResponse', t.forcedResponse(s), [hcpC(0, 8),
          cond(t.bestUnbidMajorFirst(s), h => bestUnbid(h, unbid) === s)], {
          shows: sh => { sh.len[s] = [Math.max(sh.len[s][0], 3), sh.len[s][1]]; },
        }));
      }
      for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (!unbid.includes(s)) continue;
        const c = x.cheapest(s);
        if (c !== null) rules.push(R(c, 'advance', t.advanceCheapest, [cond(t.bestUnbid(s), h => bestUnbid(h, unbid) === s)]));
      }
      return rules;
    }
    // RHO bid: a free bid shows values
    for (const M of [SPADES, HEARTS]) {
      if (!unbid.includes(M) || !x.isLegal(bid(4, M))) continue;
      rules.push(R(bid(4, M), 'game', t.gameFreeBid(M), [lenC(M, 5), hcpC(10)]));
    }
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (!unbid.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      const lvl = levelOf(c);
      rules.push(R(c, 'freeBid', t.freeBid(s, lvl >= 4), [hcpC(lvl >= 4 ? 8 : 6), lenC(s, lvl >= 4 ? 5 : 4), cond(t.bestSuit(s), h => bestUnbid(h, unbid) === s)]));
    }
    rules.push(R(PASS, 'pass', t.passFree, []));
    return rules;
  }

  if (tag === 'michaels' || tag === 'unusual') {
    const a = pAct.meaning.data!.a, b = pAct.meaning.data!.b;
    const choices = b >= 0 ? [a, b] : [a];
    for (const s of choices) {
      const game = s >= HEARTS ? 4 : 5;
      rules.push(R(bid(game, s), 'game', t.gameTwoSuiter(s), [lenC(s, 3), hcpC(11)]));
    }
    for (const s of choices) {
      const c = x.cheapest(s);
      if (c === null) continue;
      rules.push(R(c, 'preference', t.preference(s), [cond(t.betterFit(s), h => choices.every(o => h.len[o] <= h.len[s]))]));
    }
    if (b < 0) {
      const c = x.cheapest(CLUBS);
      if (c !== null) rules.push(R(c, 'passOrCorrect', t.passOrCorrect, [lenC(a, 0, 2)], { tag: 'pOrC' }));
    }
    rules.push(R(PASS, 'pass', t.passDefend, []));
    return rules;
  }

  if (tag === 'penaltyX') {
    rules.push(R(PASS, 'pass', t.passPenalty, [hcpC(0, 37)]));
    return rules;
  }

  const ps = isBid(pAct.call) ? strainOf(pAct.call) : -1;
  if (ps === NT) {
    for (const M of [SPADES, HEARTS]) {
      if (theirs.includes(M)) continue;
      rules.push(R(bid(4, M), 'game', t.gameAfterNt(M), [lenC(M, 6), hcpC(9)]));
      rules.push(R(bid(3, M), 'invitation', t.inviteAfterNt(M), [lenC(M, 6), hcpC(6, 8)], { tag: 'invite' }));
    }
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfterNt, [hcpC(10)]));
    rules.push(R(bid(2, NT), 'invitation', t.twoNtAfterNt, [hcpC(8, 9)], { tag: 'nt-invite' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      const c = x.cheapest(s);
      if (c === null || theirs.includes(s)) continue;
      rules.push(R(c, 'toPlay', t.toPlay(s), [lenC(s, 5), hcpC(0, 7)]));
    }
    rules.push(R(PASS, 'pass', t.passAfterNt, []));
    return rules;
  }

  if (ps >= 0 && ps < 4) {
    const cue = x.cheapest(opp);
    const supLen = ps >= HEARTS ? 3 : 4;
    if (ps >= HEARTS) rules.push(R(bid(4, ps), 'gameRaise', t.gameRaise(ps), [lenC(ps, 3),
      cond(t.gameRaiseCond, h => dummyPoints(h, ps) >= 13 || (h.len[ps] >= 5 && h.shape[3] <= 1))]));
    if (cue !== null && cue < bid(4, ps) && levelOf(cue) <= 3) rules.push(R(cue, 'cueBidRaise', t.cueBidRaise(supLen, ps), [lenC(ps, supLen), dpC(ps, 10)], { artificial: true, forcing: 'one', tag: 'cueRaise', data: { suit: ps } }));
    const raise = x.cheapest(ps);
    if (raise !== null && levelOf(raise) <= 3) {
      const j = x.jump(ps);
      if (j !== null && levelOf(j) <= 3) rules.push(R(j, 'preemptiveRaise', t.preemptiveRaise, [lenC(ps, 4), hcpC(0, 8)]));
      rules.push(R(raise, 'raise', t.raise(supLen, ps), [lenC(ps, supLen), dpC(ps, 6, 9)]));
    }
    const nt = x.cheapest(NT);
    if (nt !== null) {
      const l = levelOf(nt);
      if (l === 1) rules.push(R(nt, ['nt', 1], t.oneNtAfterOvercall, [hcpC(8, 11), stopC(theirs)]));
      if (l <= 2) rules.push(R(bid(2, NT), ['nt', 2], t.twoNtAfterOvercall, [hcpC(12, 14), stopC(theirs)]));
      if (l <= 3) rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfterOvercall, [hcpC(15), stopC(theirs)]));
    }
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (s === ps || theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 2) continue;
      rules.push(R(c, 'newSuit', t.newSuitAfterOvercall(s), [hcpC(8), lenC(s, 5), goodSuitC(s)]));
    }
    rules.push(R(PASS, 'pass', t.passNoFit, []));
    return rules;
  }
  return [];
}

// ---------------------------------------------------------------------------
// Responding after the opponents interfere over partner's opening

export function contestedResponse(x: Ctx, open: CallRecord): Rule[] {
  const t = T.bidding.competitive;
  const rules: Rule[] = [];
  const os = strainOf(open.call);
  const rc = x.rhoCall();
  if (!rc) return [];
  const theirs = x.theirSuits();
  const support = os >= HEARTS ? 3 : 4;

  if (os === NT) {
    if (rc.call === DOUBLE) {
      rules.push(R(REDOUBLE, 'redouble', t.redouble1nt, [hcpC(8)]));
      for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        rules.push(R(bid(2, su), 'escape', t.escape(su), [hcpC(0, 7), lenC(su, 5), longestC(su)]));
      }
      rules.push(R(PASS, 'pass', t.nothingToSay, []));
      return rules;
    }
    rules.push(R(DOUBLE, 'penaltyDouble', t.penaltyOver1nt, [hcpC(8), cond(t.fourInTheirSuit, h => theirs.some(s => h.len[s] >= 4))], { tag: 'penaltyX' }));
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtOver1nt, [hcpC(10), stopC(theirs)]));
    rules.push(R(DOUBLE, 'cooperativeDouble', t.cooperative, [hcpC(8),
      cond(t.cooperativeCond, h => theirs.some(s => h.len[s] >= 3) && h.shape[0] <= 4)], { tag: 'penaltyX' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3) continue;
      rules.push(R(c, 'natural', t.natural(s), [lenC(s, 5)]));
    }
    rules.push(R(PASS, 'pass', t.nothingToSay, []));
    return rules;
  }

  if (rc.call === DOUBLE) {
    rules.push(R(REDOUBLE, 'redouble', t.redouble, [hcpC(10)], { tag: 'redouble' }));
    if (os >= HEARTS) rules.push(R(bid(2, NT), 'jordan2nt', t.jordan(os), [lenC(os, 4), dpC(os, 10)], { artificial: true, forcing: 'one', tag: 'cueRaise', data: { suit: os } }));
    rules.push(R(bid(3, os), 'preemptiveRaise', t.preemptiveRaiseAfterDouble, [lenC(os, 4), hcpC(0, 9)]));
    rules.push(R(bid(2, os), 'raise', t.raiseContested(support), [lenC(os, support), dpC(os, 6, 10)]));
    for (const s of [HEARTS, SPADES]) {
      if (s <= os) continue;
      rules.push(R(bid(1, s), 'newSuit', t.newSuitFour(s), [hcpC(6), lenC(s, 4)], { forcing: 'one' }));
    }
    rules.push(R(bid(1, NT), ['nt', 1], t.oneNtAfterTheirDouble, [hcpC(6, 9)]));
    rules.push(R(PASS, 'pass', t.passWeak, []));
    return rules;
  }

  if (!isBid(rc.call)) return [];
  const ys = strainOf(rc.call), yl = levelOf(rc.call);
  if (ys === NT) {
    rules.push(R(DOUBLE, 'penaltyDouble', t.penaltyOverNt, [hcpC(9)], { tag: 'penaltyX' }));
    rules.push(R(x.cheapest(os)!, 'raise', t.raiseWeak, [lenC(os, support), hcpC(5, 8)]));
    rules.push(R(PASS, 'pass', t.nothingToSay, []));
    return rules;
  }

  // cue-bid raise (after the negative double when partner opened a minor: majors first)
  const cue = x.cheapest(ys);
  const cueRule = cue !== null && levelOf(cue) <= 3
    ? R(cue, 'cueBidRaise', t.cueBidRaiseContested(support), [lenC(os, support), dpC(os, 10)], { artificial: true, forcing: 'one', tag: 'cueRaise', data: { suit: os } })
    : null;
  if (cueRule && os >= HEARTS) rules.push(cueRule);
  const raise = x.cheapest(os);
  const jr = x.jump(os);
  if (jr !== null && levelOf(jr) <= 4 && os >= HEARTS && levelOf(jr) === 4) rules.push(R(jr, 'gameRaise', t.gameRaiseContested, [lenC(os, 5), cond(T.bidding.conds.singletonOrVoid, h => h.shape[3] <= 1)]));
  if (jr !== null && levelOf(jr) <= 3) rules.push(R(jr, 'preemptiveRaise', t.preemptiveRaiseContested, [lenC(os, 4), hcpC(0, 9)]));
  if (raise !== null && levelOf(raise) <= 3) rules.push(R(raise, 'raise', t.raiseContested(support), [lenC(os, support), dpC(os, 6, 10)]));

  for (const s of [SPADES, HEARTS]) {
    if (s === os || s === ys) continue;
    const c = x.cheapest(s);
    if (c !== null && levelOf(c) === 1) rules.push(R(c, 'newSuit', t.newSuitFive(s), [hcpC(6), lenC(s, 5)], { forcing: 'one' }));
  }

  // negative double through 2♠
  if (rc.call <= bid(2, SPADES) && ys < NT) {
    const unbidMajors = [HEARTS, SPADES].filter(s => s !== ys && s !== os);
    const unbidMinors = [CLUBS, DIAMONDS].filter(s => s !== ys && s !== os);
    const shows = unbidMajors.length ? unbidMajors : unbidMinors;
    const min = yl === 1 ? 6 : 8;
    rules.push(R(DOUBLE, 'negativeDouble', t.negativeDouble(min, shows), [hcpC(min),
      cond(t.negativeDoubleCond(shows), h => (shows.length === 1 ? h.len[shows[0]] >= 4 : shows.every(s => h.len[s] >= 3) && shows.some(s => h.len[s] >= 4)), sh => {
        shows.forEach(s => (sh.len[s] = [Math.max(3, sh.len[s][0]), sh.len[s][1]]));
      }, h => T.bidding.conds.lengths(h.len, shows))], { tag: 'negX', forcing: 'one', data: { a: shows[0], b: shows[1] ?? -1 } }));
  }

  if (cueRule && os < HEARTS) rules.push(cueRule);
  const nt = x.cheapest(NT);
  if (nt !== null) {
    const l = levelOf(nt);
    if (l === 1) rules.push(R(nt, ['nt', 1], t.oneNtContested, [hcpC(8, 10), stopC([ys])]));
    if (l <= 2) rules.push(R(bid(2, NT), ['nt', 2], t.twoNtContested, [hcpC(11, 12), stopC([ys])]));
    if (l <= 3) rules.push(R(bid(3, NT), ['nt', 3], t.threeNtContested, [hcpC(13, 15), stopC([ys])]));
  }
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (s === os || s === ys) continue;
    const c = x.cheapest(s);
    if (c === null) continue;
    const l = levelOf(c);
    if (l === 1) rules.push(R(c, 'newSuit', t.newSuitFour(s), [hcpC(6), lenC(s, 4)], { forcing: 'one' }));
    else if (l === 2) rules.push(R(c, 'newSuit', t.newSuitTwoLevel(s), [hcpC(10), lenC(s, 5)], { forcing: 'one' }));
  }
  rules.push(R(PASS, 'pass', t.passContested, []));
  return rules;
}

/** Opener's rebid after partner's negative double. */
export function openerAfterNegDouble(x: Ctx, negX: CallRecord, open: CallRecord): Rule[] {
  const t = T.bidding.competitive;
  const rules: Rule[] = [];
  const os = strainOf(open.call);
  const theirs = x.theirSuits();
  const shownMajors = [negX.meaning.data!.a, negX.meaning.data!.b].filter(s => s >= 0);
  for (const s of shownMajors) {
    const c = x.cheapest(s);
    if (c === null) continue;
    const l = levelOf(c);
    if (s >= HEARTS && l <= 3) rules.push(R(bid(4, s), 'game', t.gameAfterNegativeDouble, [lenC(s, 4), hcpC(18)]));
    if (l + 1 <= 3) rules.push(R(bid(l + 1, s), 'jump', t.jumpAfterNegativeDouble(s), [lenC(s, 4), hcpC(16, 18)]));
    rules.push(R(c, 'showFit', t.showFit(s), [lenC(s, 4)]));
  }
  rules.push(R(PASS, 'penaltyPass', t.penaltyPassNegativeDouble, [cond(t.penaltyPassNegativeDoubleCond, h => theirs.some(s => h.len[s] >= 4 && suitHonours(h, s) >= 2)), hcpC(13)]));
  const nt = x.cheapest(NT);
  if (nt !== null && levelOf(nt) <= 2) rules.push(R(nt, 'notrump', t.ntAfterNegativeDouble, [hcpC(12, 14), stopC(theirs)]));
  const own = x.cheapest(os);
  if (own !== null) rules.push(R(own, 'rebidSuit', t.rebidAfterNegativeDouble, []));
  return rules;
}

/** Shared helper so other modules can reuse the stopper condition. */
export { stopC, hasStopper, dummyPoints, goodSuitC };
export type { HandInfo };

/** The takeout doubler's second bid, after partner's forced response. */
export function doublerRebid(x: Ctx, resp: CallRecord): Rule[] {
  const t = T.bidding.competitive;
  const rules: Rule[] = [];
  if (!isBid(resp.call)) return rules;
  const rs = strainOf(resp.call);
  const theirs = x.theirSuits();
  if (resp.meaning.forcing === 'game' || resp.meaning.forcing === 'one') {
    // partner's cue bid: describe the hand, never pass
    rules.push(R(x.cheapest(NT)!, 'notrump', t.ntAfterCueBid, [stopC(theirs)]));
    for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(su)) continue;
      const c = x.cheapest(su);
      if (c === null) continue;
      rules.push(R(c, 'showSuit', t.showSuitAfterCueBid(su), [lenC(su, 4), cond(t.bestUnbid(su), h => bestUnbid(h, [CLUBS, DIAMONDS, HEARTS, SPADES].filter(o => !theirs.includes(o))) === su)]));
    }
    for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(su)) continue;
      const c = x.cheapest(su);
      if (c !== null) rules.push(R(c, 'showSuit', t.showSuitForced, []));
    }
    return rules.filter(r => r.call !== null);
  }
  if (rs < NT) {
    const g = rs >= HEARTS ? 4 : 5;
    rules.push(R(bid(g, rs), 'raiseToGame', t.raiseToGame, [lenC(rs, 4), dpC(rs, 19)]));
    const raise = x.cheapest(rs);
    if (raise !== null && levelOf(raise) <= 3) rules.push(R(raise, 'invitationalRaise', t.invitationalRaise, [lenC(rs, 4), dpC(rs, 16, 18)], { tag: 'invite' }));
  }
  const nt = x.cheapest(NT);
  if (nt !== null && levelOf(nt) <= 2) rules.push(R(nt, 'notrump', t.ntDoubler, [hcpC(18, 20), balancedC(), stopC(theirs)]));
  for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (theirs.includes(su) || su === rs) continue;
    const c = x.cheapest(su);
    if (c === null || levelOf(c) > 3) continue;
    rules.push(R(c, 'strongDoubleThenSuit', t.strongDoubleThenSuit(su), [hcpC(17), lenC(su, 5)]));
  }
  rules.push(R(PASS, 'pass', t.passDoubler, [hcpC(0, 16)]));
  return rules;
}

/** The overcaller's rebid after partner's cue-bid raise (a limit raise or better). */
export function overcallerAfterCueRaise(x: Ctx, cue: CallRecord): Rule[] {
  const t = T.bidding.competitive;
  const suit = cue.meaning.data!.suit;
  const game = suit >= HEARTS ? 4 : 5;
  const rules: Rule[] = [];
  if (x.isLegal(bid(game, suit))) rules.push(R(bid(game, suit), 'accept', t.acceptCueBidRaise, [tpC(13)]));
  const c = x.cheapest(suit);
  if (c !== null && c < bid(game, suit)) rules.push(R(c, 'minimum', t.minimumCueBidRaise, [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 12)]; } }));
  return rules;
}
