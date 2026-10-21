// General bidding judgment for auctions the specific rules don't cover:
// find the best strain from what partner has shown, add up the combined
// values, and bid the right level (partscore, game, slam), or compete with
// the Law of Total Tricks, or double the opponents when they overreach.

import { bid, PASS, DOUBLE, levelOf, strainOf, isBid } from '../core/auction';
import { NT, HEARTS, SPADES } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, dummyPoints, declarerPoints, suitHonours } from '../core/eval';
import { T } from '../i18n';
import type { Ctx } from './context';
import { R, cond, always, lenC, type Rule } from './types';
import { blackwoodTrump, aceAsk, aceAskMade } from './slam';
import { getSystem } from './config';
import { controlBidTry, tryMajor } from './conventions';

/** Combined points (with partner's expected strength) at which a fit hand tries for slam. */
const SLAM_TRY = 30;

export interface Target {
  strain: number; // 0-3, 4 = NT, -1 = none
  level: number; // contract level we want (0 = no opinion)
  combined: number;
  fit: number; // trumps between the hands (known minimum)
  why: string; // the reasoning, in the active language
}

/** Work out the best contract given my hand and what partner has shown. */
export function targetContract(h: HandInfo, x: Ctx): Target {
  const t = T.bidding.generic;
  const P = x.shownBy(x.partner);
  const ph = x.partnerHcp();
  const theirs = x.theirSuits();
  const fitLen = (s: number) => h.len[s] + P.len[s][0];
  const pts = (s: number) => (h.len[s] >= P.len[s][0] ? declarerPoints(h, s) : dummyPoints(h, s));
  // best fit: majors first
  let fit = -1;
  for (const s of [SPADES, HEARTS]) if (fitLen(s) >= 8 && (fit < 0 || fitLen(s) > fitLen(fit))) fit = s;
  if (fit < 0) for (const s of [1, 0]) if (fitLen(s) >= 8 && (fit < 0 || fitLen(s) > fitLen(fit))) fit = s;
  const pLast = x.lastAction(x.partner);
  const theirLastSuitBid = Math.max(-1, ...x.records.filter(r => !x.ourSide(r.seat) && isBid(r.call) && strainOf(r.call) < NT && !r.meaning.artificial).map(r => r.index));
  const partnerBidNT = !!pLast && isBid(pLast.call) && strainOf(pLast.call) === NT && !pLast.meaning.artificial && pLast.index > theirLastSuitBid;
  const stoppers = partnerBidNT || theirs.every(s => hasStopper(h, s) || P.len[s][0] >= 4);
  const ntShape = h.semiBalanced || P.balanced === true;
  const partnerPart = t.partner(ph.est, ph.min, ph.max >= 30 ? null : ph.max);

  const level = (c: number, gameLevel: number) => (c >= 37 ? 7 : c >= 33 ? 6 : c >= (gameLevel === 5 ? 28 : 25) ? gameLevel : c >= 23 ? -1 : 0);

  // each trump beyond eight is worth about a point (up to two)
  const ninth = (s: number) => Math.max(0, Math.min(2, fitLen(s) - 8));
  if (fit >= HEARTS) {
    const c = pts(fit) + ninth(fit) + ph.est;
    return { strain: fit, level: level(c, 4), combined: c, fit: fitLen(fit), why: t.whyFit(fitLen(fit), fit, pts(fit), partnerPart, c, ninth(fit)) };
  }
  // a self-sufficient six-card major usually plays well opposite two small
  const longMajor = [SPADES, HEARTS].find(s => h.len[s] >= 6 && P.len[s][1] >= 2 && !theirs.includes(s) && (h.len[s] >= 7 || h.suitHcp[s] >= 3));
  if (longMajor !== undefined && fit < 0) {
    const c = h.tp + ph.est - 1;
    return { strain: longMajor, level: level(c, 4), combined: c, fit: h.len[longMajor] + Math.max(1, P.len[longMajor][0]), why: t.whyLongMajor(longMajor, h.tp, partnerPart, c) };
  }
  const minorFitNT = fit >= 0 && h.shape[3] >= 1;
  if (stoppers && (ntShape || minorFitNT || (fit < 0 && h.shape[3] >= 1)) && (fit < 0 || h.hcp + ph.est < 29)) {
    const c = h.hcp + ph.est;
    return { strain: NT, level: level(c, 3), combined: c, fit: 0, why: t.whyNoMajorFit(theirs.length > 0, h.hcp, partnerPart, c) };
  }
  if (fit >= 0) {
    const c = pts(fit) + ninth(fit) + ph.est;
    return { strain: fit, level: level(c, 5), combined: c, fit: fitLen(fit), why: t.whyFit(fitLen(fit), fit, pts(fit), partnerPart, c, ninth(fit)) };
  }
  // no fit: a long suit of my own?
  const partnerTwoSuits = [0, 1, 2, 3].filter(s => P.len[s][0] >= 4).length >= 2;
  const long = [3, 2, 1, 0].find(s => h.len[s] >= 6 && P.len[s][1] >= 2 && !theirs.includes(s) && (h.len[s] >= 7 || !partnerTwoSuits));
  if (long !== undefined) {
    const c = h.tp + ph.est;
    return { strain: long, level: level(c, long >= HEARTS ? 4 : 5), combined: c, fit: h.len[long] + Math.max(2, P.len[long][0]), why: t.whyLongSuit(long, h.tp, partnerPart, c) };
  }
  const c = h.hcp + ph.est;
  if (!stoppers) return { strain: -1, level: 0, combined: c, fit: 0, why: t.whyNotStopped(h.hcp, partnerPart, c) };
  return { strain: NT, level: level(c, 3), combined: c, fit: 0, why: t.whyNoFitYet(h.hcp, partnerPart, c) };
}

const isGame = (call: number) => {
  const l = levelOf(call), s = strainOf(call);
  return (s === NT && l >= 3) || (s >= HEARTS && s < NT && l >= 4) || l >= 5;
};

/**
 * The slam decisions of general judgment: ask for key cards, quantitative 4NT,
 * set trumps, bid a slam directly, or try for one with a control bid. They come
 * first among the general rules, and before a specific system call that would
 * sign off in game (see rulesFor).
 */
export function slamRules(x: Ctx): Rule[] {
  const t = T.bidding.generic;
  const rules: Rule[] = [];
  const weHold = x.weHoldContract();
  const theirs = x.theirSuits();
  const asked = aceAskMade(x);
  const target = (h: HandInfo) => targetContract(h, x);
  const value = (h: HandInfo) => target(h).why;

  const bwTrump = blackwoodTrump(x);
  const rk = getSystem().rkcb;
  if (!asked && bwTrump !== null && x.isLegal(bid(4, NT))) {
    // ask in the suit we will play in: the slam that follows is bid in it (and Roman
    // Key Card counts its king and queen)
    rules.push(aceAsk(bwTrump, [
      cond(t.blackwoodCond, h => {
        const tc = target(h);
        return tc.level >= 6 && tc.strain === bwTrump;
      }, undefined, value),
      cond(t.noVoid, h => h.shape[3] > 0),
    ], { shows: s => { s.hcp = [Math.max(s.hcp[0], 13), s.hcp[1]]; } }));
  }
  const pAct = x.lastAction(x.partner);
  if (pAct && strainOf(pAct.call) === NT && isBid(pAct.call) && levelOf(pAct.call) <= 3 && x.isLegal(bid(4, NT)) && !pAct.meaning.artificial) {
    rules.push(R(bid(4, NT), 'quant4nt', t.quant, [
      cond(t.quantCond, h => {
        const tc = target(h);
        return tc.strain === NT && tc.combined >= 31 && tc.combined <= 32 && h.hcp + x.partnerHcp().max >= 33;
      }, undefined, value),
    ], { tag: 'quant' }));
  }
  // Roman Key Card asks in the auction's trump suit; slam in another suit of ours is bid
  // directly, and a long suit partner has not heard about is bid first (forcing) to set trumps
  const ours = x.ourSuits();
  if (rk && !asked && x.gameForced()) {
    // a four-level bid that would be a control bid agreeing partner's major is not natural
    const cueSlots = controlBidTry(x, always()).map(r => r.call);
    for (const s of [SPADES, HEARTS, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || ours.includes(s) || theirs.includes(s) || c >= bid(4, NT) || cueSlots.includes(c)) continue;
      rules.push(R(c, 'newSuit', t.setTrumps(s), [
        cond(t.setTrumpsCond(s), h => {
          const tc = target(h);
          return tc.strain === s && tc.level >= 6 && h.len[s] >= 6;
        }, undefined, value),
      ], { forcing: 'one' }));
    }
  }
  // with Roman Key Card, a suit grand slam is only bid after asking for key cards
  const grandOk = (s: number) => !rk || s === NT || asked;
  for (const lvl of [7, 6]) {
    for (const s of [NT, SPADES, HEARTS, 1, 0]) {
      const c = bid(lvl, s);
      if (!x.isLegal(c)) continue;
      const min = lvl === 7 ? 37 : 33;
      rules.push(R(c, lvl === 7 ? 'grandSlam' : 'smallSlam', lvl === 7 ? t.grandSlam : t.smallSlam, [
        cond(s === NT ? t.slamNoFit(min) : t.slamFit(min, s), h => {
          const tc = target(h);
          const level = tc.level === 7 && !grandOk(s) ? 6 : tc.level;
          return tc.strain === s && level === lvl && (asked || s === NT || h.shape[3] === 0 || bwTrump === null || (rk && bwTrump !== s && ours.includes(s)));
        }, undefined, value),
      ]));
    }
  }

  // --- slam try: slam is on if partner has a little more than shown, so show a
  // control below game (agreeing partner's major) rather than bid the game
  const op = x.opening();
  const pLast = x.partnerCall();
  if (op && x.ourSide(op.seat) && weHold && pLast && isBid(pLast.call)) {
    const M = tryMajor(x) ?? strainOf(pLast.call);
    const ph0 = x.partnerHcp();
    rules.push(...controlBidTry(x, cond(T.bidding.cues.slamTry, h => {
      const tc = target(h);
      return tc.strain === M && tc.level < 6 && tc.combined >= SLAM_TRY && tc.combined - ph0.est + ph0.max >= 33;
    }, s => { s.hcp = [Math.max(s.hcp[0], SLAM_TRY - 2 - ph0.est), s.hcp[1]]; }, value)));
    // in a minor, raise to the four level: past 3NT, forcing, a slam try
    const m = strainOf(pLast.call), four = bid(4, m);
    const P = x.shownBy(x.partner);
    if (m <= 1 && !pLast.meaning.artificial && levelOf(pLast.call) <= 3 && x.isLegal(four) && x.actionsBy(x.seat).length && !aceAskMade(x)) {
      const need = Math.max(2, 8 - P.len[m][0]);
      rules.push(R(four, 'minorSlamTry', t.minorSlamTry(m), [
        cond(T.bidding.cues.supportCond(need, m), h => h.len[m] >= need, s => { s.len[m] = [Math.max(need, s.len[m][0]), s.len[m][1]]; }, h => T.bidding.conds.lenValue(h.len[m], m)),
        cond(T.bidding.cues.slamTry, h => {
          const tc = target(h);
          return tc.strain === m && tc.level < 6 && tc.combined >= SLAM_TRY && tc.combined - ph0.est + ph0.max >= 33;
        }, s => { s.hcp = [Math.max(s.hcp[0], SLAM_TRY - 2 - ph0.est), s.hcp[1]]; }, value),
      ], { forcing: 'one', tag: 'minorTry', data: { suit: m } }));
    }
  }

  for (const r of rules) r.generic = true;
  return rules;
}

/** Partner raised our minor to the four level as a slam try: ask for key cards with something extra, otherwise sign off in five. */
export function afterMinorSlamTry(x: Ctx, m: number): Rule[] {
  const t = T.bidding.generic;
  const value = (h: HandInfo) => targetContract(h, x).why;
  const points = (h: HandInfo) => (h.len[m] >= 4 ? declarerPoints(h, m) : dummyPoints(h, m));
  const strong = (h: HandInfo) => points(h) + x.partnerHcp().est >= SLAM_TRY;
  return [
    aceAsk(m, [cond(t.acceptSlamTry, strong, undefined, value), cond(t.noVoid, h => h.shape[3] > 0)]),
    R(bid(6, m), 'smallSlam', t.acceptSlamTry6, [cond(t.acceptSlamTry, strong, undefined, value)]),
    R(bid(5, m), 'signOff', t.declineSlamTry(m), []),
  ];
}

export function genericRules(x: Ctx, skipSlam = false): Rule[] {
  const t = T.bidding.generic;
  const rules: Rule[] = [];
  const lb = x.lastBidRecord();
  const weHold = x.weHoldContract();
  const P = x.shownBy(x.partner);
  const forced = x.forcedByPartner() || (x.gameForced() && !(lb && x.ourSide(lb.seat) && isGame(lb.call)));
  const theirs = x.theirSuits();
  const target = (h: HandInfo) => targetContract(h, x);
  const value = (h: HandInfo) => target(h).why;

  if (!skipSlam) rules.push(...slamRules(x));

  // --- already in game (or higher) and no slam: stop
  if (lb && weHold && isGame(lb.call)) {
    const cur = lb.call;
    // correct 3NT to four of a major with a known fit and an unbalanced hand
    if (strainOf(cur) === NT && levelOf(cur) === 3) {
      for (const M of [HEARTS, SPADES]) {
        rules.push(R(bid(4, M), 'correctToMajor', t.correctFit(M), [
          cond(t.correctFitCond(M), h => h.len[M] + P.len[M][0] >= 8 && h.shape[3] <= 1),
        ]));
        rules.push(R(bid(4, M), 'correctToMajor', t.correctLong(M), [
          cond(t.correctLongCond(M), h => h.len[M] >= 6 && h.shape[3] <= 1 && (h.ranks[M].filter(r => r >= 12).length >= 2 || h.shape[1] >= 5) && !theirs.includes(M)),
        ]));
      }
    }
    rules.push(R(PASS, 'pass', t.passGame, [cond(t.noSlam, h => target(h).level < 6 || levelOf(cur) >= target(h).level, undefined, value)]));
  }

  // --- delayed support: in a game-forcing auction, show three cards in partner's
  // major (which may be five long) before settling for notrump
  const claimed = new Set<number>(); // calls whose meaning is delayed support, not a forced catch-all
  if (weHold && x.gameForced() && lb && !isGame(lb.call)) {
    const mine = x.shownBy(x.seat);
    for (const M of [SPADES, HEARTS]) {
      const c = x.cheapest(M);
      if (c === null || levelOf(c) > 3 || theirs.includes(M) || P.len[M][0] < 4 || P.len[M][1] < 5 || mine.len[M][0] >= 3) continue;
      if (!x.bidsBy(x.partner).some(r => strainOf(r.call) === M && !r.meaning.artificial)) continue;
      claimed.add(c);
      rules.push(R(c, 'delayedSupport', t.delayedSupport(M), [
        lenC(M, 3, 3),
        cond(t.delayedSupportCond, h => {
          const tc = target(h);
          return tc.level < 6 && (tc.strain === NT || tc.strain === M);
        }, undefined, value),
      ], { forcing: 'one' }));
    }
  }

  // --- game
  for (const s of [NT, SPADES, HEARTS, 1, 0]) {
    const gl = s === NT ? 3 : s >= HEARTS ? 4 : 5;
    const c = bid(gl, s);
    if (!x.isLegal(c)) continue;
    rules.push(R(c, 'bidGame', s === NT ? t.gameNt : s >= HEARTS ? t.gameMajor(s) : t.gameMinor(s), [
      cond(t.gameCond(s), h => {
        const tc = target(h);
        return tc.strain === s && tc.level >= gl;
      }, undefined, value),
    ], { shows: sh => { sh.hcp = [Math.max(sh.hcp[0], Math.max(0, 25 - x.partnerHcp().est - 2)), sh.hcp[1]]; } }));
  }

  // --- invitations (only while the auction is low and partner's range is wide)
  const ph = x.partnerHcp();
  if (weHold && !x.gameForced() && ph.max - ph.min >= 3 && (!lb || levelOf(lb.call) <= 2)) {
    for (const s of [NT, SPADES, HEARTS]) {
      const c = s === NT ? bid(2, NT) : bid(3, s);
      if (!x.isLegal(c)) continue;
      // the inviter counts 23–24 together with partner's expected strength (in a
      // suit some of that may be distribution), so partner accepts when above it
      const lo = 23 - ph.est - (s === NT ? 0 : 4), hi = 25 - ph.est;
      rules.push(R(c, 'invitation', s === NT ? t.invite2nt : t.inviteMajor(s), [
        cond(t.inviteCond, h => {
          const tc = target(h);
          if (tc.strain !== s || tc.level !== -1) return false;
          return tc.combined - ph.est + ph.max >= 26;
        }, undefined, value),
      ], { tag: 'invite', shows: sh => { sh.hcp = [Math.max(sh.hcp[0], lo), Math.max(Math.min(sh.hcp[1], hi), sh.hcp[0], lo)]; } }));
    }
  }

  // --- penalty doubles
  if (lb && !weHold && x.auction.doubleStatus() === 0) {
    const ts = strainOf(lb.call), tl = levelOf(lb.call);
    rules.push(R(DOUBLE, 'penaltyDouble', t.penaltyDouble, [
      cond(t.strengthCond, h => h.hcp + ph.est >= 24, undefined, h => t.strengthValue(h.hcp, ph.est)),
      cond(t.threeLevel, () => tl >= 3),
      cond(ts === NT ? t.ntContract : t.trumpLength, h => ts === NT || h.len[ts] >= 2),
    ], { tag: 'penaltyX' }));
    if (ts < NT) {
      rules.push(R(DOUBLE, 'penaltyDouble', t.trumpStack, [
        cond(t.trumpStackCond, h => h.len[ts] >= 4 && suitHonours(h, ts) >= 2),
        cond(t.valuesCond, h => h.hcp >= 10 && ph.min >= 6),
        cond(t.twoLevel, () => tl >= 2),
      ], { tag: 'penaltyX' }));
    }
  }

  // --- forced: must find a descriptive bid
  if (forced) {
    const pSuits = [3, 2, 1, 0].filter(s => P.len[s][0] >= 4);
    for (const s of pSuits) {
      const c = x.cheapest(s);
      if (c === null || claimed.has(c)) continue;
      const need = s >= HEARTS ? 3 : 4;
      rules.push(R(c, 'supportPartner', t.supportPartner(s), [
        cond(T.bidding.conds.lenMin(need, s), h => h.len[s] >= need, sh => { sh.len[s] = [Math.max(need, sh.len[s][0]), sh.len[s][1]]; }),
      ]));
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || claimed.has(c) || levelOf(c) > 4) continue;
      rules.push(R(c, 'rebidSuit', t.rebidSuit(s), [cond(T.bidding.conds.lenMin(6, s), h => h.len[s] >= 6)]));
    }
    const nt = x.cheapest(NT);
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'notrump', t.ntStoppers, [cond(t.stoppersTheirs, h => theirs.every(s => hasStopper(h, s)))]));
    else if (nt !== null && levelOf(nt) === 4 && x.records.some(r => x.ourSide(r.seat) && isBid(r.call) && strainOf(r.call) < NT && !r.meaning.artificial)) {
      // above 3NT, keep bidding suits — 4NT would be Blackwood
      for (const s of [3, 2, 1, 0]) {
        const c = x.cheapest(s);
        if (c === null || claimed.has(c) || levelOf(c) > 5) continue;
        rules.push(R(c, 'signOffInGame', t.signOffInGame, [cond(t.fitIn(s), h => h.len[s] + P.len[s][0] >= 8)]));
      }
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3 || x.ourSuits().includes(s) || theirs.includes(s)) continue;
      rules.push(R(c, 'newSuit', t.newSuit(s), [cond(T.bidding.conds.lenMin(4, s), h => h.len[s] >= 4)]));
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || claimed.has(c)) continue;
      rules.push(R(c, 'preference', t.preference(s), [cond(t.preferenceCond(s), h => P.len[s][0] >= 3 && h.len[s] >= 2)]));
    }
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'notrump', t.ntFallback, []));
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c !== null && !claimed.has(c) && levelOf(c) <= 5) rules.push(R(c, 'longestSuit', t.longestSuit, [cond(T.bidding.conds.longestSuit(s), h => h.len[s] === h.shape[0])]));
    }
  }

  // --- partscore competition (Law of Total Tricks)
  if (lb && !weHold) {
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      rules.push(R(c, 'compete', t.compete(s), [
        cond(t.competeCond(s), h => {
          const f = h.len[s] + P.len[s][0];
          return f >= 8 && levelOf(c) <= f - 6 && (P.len[s][0] >= 3 || h.len[s] >= 5);
        }, undefined, h => t.trumpsValue(h.len[s] + P.len[s][0])),
        cond(t.competeValues, h => h.hcp + ph.est >= 17, undefined, h => t.strengthValue(h.hcp, ph.est)),
      ]));
    }
  }

  // --- competing with extra values when the opponents outbid us at a low level
  if (lb && !weHold && levelOf(lb.call) <= 3 && x.actionsBy(x.seat).length > 0) {
    for (const s of [3, 2, 1, 0]) {
      if (theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3) continue;
      rules.push(R(c, 'competeWithSuit', t.competeWithSuit(s), [
        cond(t.competeWithSuitCond(s), h => h.len[s] >= 6 && h.tp >= 15, undefined, h => t.competeWithSuitValue(h.len[s], s, h.tp)),
      ]));
    }
    const ts = strainOf(lb.call);
    if (ts < NT && levelOf(lb.call) <= 2 && x.auction.doubleStatus() === 0) {
      rules.push(R(DOUBLE, 'competitiveDouble', t.competitiveDouble(ts), [
        cond(t.competitiveDoubleCond(ts), h => h.hcp >= 15 && h.len[ts] <= 1, undefined, h => t.competitiveDoubleValue(h.hcp, h.len[ts], ts)),
      ], { tag: 'takeoutX' }));
    }
  }

  // --- preference / correction when partner's suit is a misfit and we hold the contract
  if (lb && weHold && lb.seat === x.partner && !isGame(lb.call)) {
    const ls = strainOf(lb.call);
    if (ls < NT) {
      for (const s of [3, 2, 1, 0]) {
        if (s === ls) continue;
        const c = x.cheapest(s);
        if (c === null || levelOf(c) > 3 || claimed.has(c)) continue;
        rules.push(R(c, 'preference', t.preferenceMisfit(s), [
          cond(t.betterFit(s, ls), h => P.len[s][0] >= 4 && h.len[s] >= 2 && h.len[s] + P.len[s][0] > h.len[ls] + P.len[ls][0] + 1),
        ]));
      }
    }
  }

  rules.push(R(PASS, 'pass', weHold ? t.passReasonable : t.passNothing, []));
  for (const r of rules) r.generic = true;
  return rules;
}
