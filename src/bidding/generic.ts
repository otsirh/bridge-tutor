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
import { R, cond, always, lenC, hcpC, type Rule } from './types';
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

const isGame = (call: number) => {
  const l = levelOf(call), s = strainOf(call);
  return (s === NT && l >= 3) || (s >= HEARTS && s < NT && l >= 4) || l >= 5;
};

/** Must we bid again: partner's last call is forcing, or game is forced and not yet reached? */
function mustBid(x: Ctx): boolean {
  const lb = x.lastBidRecord();
  return x.forcedByPartner() || (x.gameForced() && !(lb && x.ourSide(lb.seat) && isGame(lb.call)));
}

/** Partner's last action is natural notrump, made after the opponents' last suit bid (so their suits are stopped). */
function partnerNotrump(x: Ctx): boolean {
  const pLast = x.lastAction(x.partner);
  const theirLastSuitBid = Math.max(-1, ...x.records.filter(r => !x.ourSide(r.seat) && isBid(r.call) && strainOf(r.call) < NT && !r.meaning.artificial).map(r => r.index));
  return !!pLast && isBid(pLast.call) && strainOf(pLast.call) === NT && !pLast.meaning.artificial && pLast.index > theirLastSuitBid;
}

/** Suits partner has bid naturally and shown four or more cards in: shortness there is no asset. */
export const partnerSuits = (x: Ctx) => {
  const P = x.shownBy(x.partner);
  return [...new Set(x.bidsBy(x.partner).filter(r => !r.meaning.artificial && strainOf(r.call) < NT).map(r => strainOf(r.call)))].filter(s => P.len[s][0] >= 4);
};

/** Suits nobody has bid naturally. */
const unbidSuits = (x: Ctx) => [0, 1, 2, 3].filter(s => !x.ourSuits().includes(s) && !x.theirSuits().includes(s));

/**
 * Is notrump a sensible strain for this hand? A balanced or semi-balanced hand
 * (or one opposite a balanced partner) is fine. An unbalanced one needs a
 * stopper in every suit nobody has bid, a singleton only in a suit partner has
 * bid (or a singleton ace), and no second five-card suit.
 */
function notrumpHand(h: HandInfo, x: Ctx, partnerBal: boolean): { shape: boolean; unbidStopped: boolean } {
  if (partnerBal || h.semiBalanced) return { shape: true, unbidStopped: true };
  const P = x.shownBy(x.partner);
  const partnerBid = (s: number) => x.bidsBy(x.partner).some(r => !r.meaning.artificial && strainOf(r.call) === s);
  const shortOk = [0, 1, 2, 3].every(s => h.len[s] >= 2 || (h.len[s] === 1 && (partnerBid(s) || h.ranks[s][0] === 14)));
  const shape = shortOk && h.shape[1] <= 4;
  const unbidStopped = unbidSuits(x).every(s => hasStopper(h, s) || P.len[s][0] >= 4);
  return { shape, unbidStopped };
}

/** Work out the best contract given my hand and what partner has shown. */
export function targetContract(h: HandInfo, x: Ctx): Target {
  const t = T.bidding.generic;
  const P = x.shownBy(x.partner);
  const ph = x.partnerHcp();
  const theirs = x.theirSuits();
  const ours = x.ourSuits();
  const fitLen = (s: number) => h.len[s] + P.len[s][0];
  const pSuits = partnerSuits(x);
  const pts = (s: number) => (h.len[s] >= P.len[s][0] ? declarerPoints(h, s, pSuits) : dummyPoints(h, s, pSuits));
  // best fit: majors first
  let fit = -1;
  for (const s of [SPADES, HEARTS]) if (fitLen(s) >= 8 && (fit < 0 || fitLen(s) > fitLen(fit))) fit = s;
  if (fit < 0) for (const s of [1, 0]) if (fitLen(s) >= 8 && (fit < 0 || fitLen(s) > fitLen(fit))) fit = s;
  const partnerBidNT = partnerNotrump(x);
  const stoppers = partnerBidNT || theirs.every(s => hasStopper(h, s) || P.len[s][0] >= 4);
  const nt = notrumpHand(h, x, partnerBidNT || P.balanced === true);
  const ntShape = nt.shape;
  const partnerPart = t.partner(ph.est, ph.min, ph.max >= 30 ? null : ph.max);

  const level = (c: number, gameLevel: number) => (c >= 37 ? 7 : c >= (gameLevel === 3 ? 33 : 32) ? 6 : c >= (gameLevel === 5 ? 28 : 25) ? gameLevel : c >= 23 ? -1 : 0);

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
  // forced to bid on and a major of mine is still unshown: show it before choosing notrump
  const showMajor = () => {
    if (fit >= HEARTS || !mustBid(x)) return undefined;
    return [SPADES, HEARTS].find(s => {
      const c = x.cheapest(s);
      return c !== null && levelOf(c) <= (x.gameForced() ? 3 : 2) && !ours.includes(s) && !theirs.includes(s) && (h.len[s] >= 5 ? P.len[s][1] >= 3 : h.len[s] === 4 && P.len[s][1] >= 4);
    });
  };
  const notrump = (why: (c: number) => string): Target => {
    const c = h.hcp + ph.est, show = showMajor();
    if (show !== undefined) return { strain: -1, level: level(c, 3), combined: c, fit: 0, why: t.whyShowMajor(show, h.hcp, partnerPart, c) };
    return { strain: NT, level: level(c, 3), combined: c, fit: 0, why: why(c) };
  };
  const minorFitNT = fit >= 0 && h.shape[3] >= 1;
  // with a minor fit, notrump is preferred for the nine-trick game only while 3NT is still available
  const nt3 = x.cheapest(NT);
  const ntGameOpen = nt3 !== null && levelOf(nt3) <= 3;
  if (stoppers && nt.unbidStopped && (ntShape || minorFitNT) && (fit < 0 || (h.hcp + ph.est < 29 && ntGameOpen))) {
    return notrump(c => t.whyNoMajorFit(theirs.length > 0, h.hcp, partnerPart, c));
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
  // an awkward shape is no reason to stop short of game when nothing else fits
  if (!nt.unbidStopped || (!ntShape && c < 25)) return { strain: -1, level: 0, combined: c, fit: 0, why: t.whyNotNotrump(h.hcp, partnerPart, c) };
  return notrump(cc => t.whyNoFitYet(h.hcp, partnerPart, cc));
}

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
      // its own family: the same call is also a forced new suit (4+), so it reads as 4+
      rules.push(R(c, 'newSuit', t.setTrumps(s), [
        cond(t.setTrumpsCond(s), h => {
          const tc = target(h);
          return tc.strain === s && tc.level >= 6 && h.len[s] >= 6;
        }, sh => { sh.len[s] = [Math.max(6, sh.len[s][0]), sh.len[s][1]]; }, value),
      ], { forcing: 'one', family: 'setTrumps' }));
    }
  }
  // with Roman Key Card, a suit grand slam is only bid after asking for key cards
  const grandOk = (s: number) => !rk || s === NT || asked;
  for (const lvl of [7, 6]) {
    for (const s of [NT, SPADES, HEARTS, 1, 0]) {
      const c = bid(lvl, s);
      if (!x.isLegal(c)) continue;
      const min = lvl === 7 ? 37 : s === NT ? 33 : 32;
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
      return tc.strain === M && tc.level < 6 && tc.combined >= SLAM_TRY && tc.combined - ph0.est + ph0.max >= 32;
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
          return tc.strain === m && tc.level < 6 && tc.combined >= SLAM_TRY && tc.combined - ph0.est + ph0.max >= 32;
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
  const pSuits = partnerSuits(x);
  const points = (h: HandInfo) => (h.len[m] >= 4 ? declarerPoints(h, m, pSuits) : dummyPoints(h, m, pSuits));
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
  const forced = mustBid(x);
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
      // five cards in the major I bid and four in the other: partner's 3NT denied support
      // for the first, not four cards in the second
      const mine = x.shownBy(x.seat);
      for (const M of [HEARTS, SPADES]) {
        const other = M === HEARTS ? SPADES : HEARTS;
        if (lb.seat !== x.partner || mine.len[other][0] < 5 || x.ourSuits().includes(M) || theirs.includes(M) || P.len[M][1] < 4) continue;
        rules.push(R(bid(4, M), 'correctToMajor', t.correctSecondMajor(M, other), [
          cond(t.correctSecondMajorCond(M, other), h => h.len[M] >= 4 && h.len[other] >= 5 && h.shape[3] <= 1),
        ], { shows: sh => { sh.len[M] = [Math.max(4, sh.len[M][0]), sh.len[M][1]]; } }));
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
    // forced below game with a long minor and no known fit: show it cheaply rather than jump to five
    const showFirst = s < HEARTS && forced && levelOf(x.cheapest(s) ?? c) < gl - 1;
    rules.push(R(c, 'bidGame', s === NT ? t.gameNt : s >= HEARTS ? t.gameMajor(s) : t.gameMinor(s), [
      cond(t.gameCond(s), h => {
        const tc = target(h);
        return tc.strain === s && tc.level >= gl && !(showFirst && h.len[s] + P.len[s][0] < 8);
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

  // --- penalty doubles (a call's meaning is read from its first rule, so a double offered
  // only where it can apply: below the three level after we have bid, a double of their
  // suit is the competitive double, for takeout)
  if (lb && !weHold && x.auction.doubleStatus() === 0) {
    const ts = strainOf(lb.call), tl = levelOf(lb.call);
    const competitive = ts < NT && tl <= 2 && x.actionsBy(x.seat).length > 0;
    if (tl >= 3) {
      rules.push(R(DOUBLE, 'penaltyDouble', t.penaltyDouble, [
        cond(t.strengthCond, h => h.hcp + ph.est >= 24, undefined, h => t.strengthValue(h.hcp, ph.est)),
        cond(t.threeLevel, () => tl >= 3),
        cond(ts === NT ? t.ntContract : t.trumpLength, h => ts === NT || h.len[ts] >= 2),
      ], { tag: 'penaltyX' }));
    }
    if (ts < NT && tl >= 2 && !competitive) {
      rules.push(R(DOUBLE, 'penaltyDouble', t.trumpStack, [
        cond(t.trumpStackCond, h => h.len[ts] >= 4 && suitHonours(h, ts) >= 2),
        cond(t.valuesCond, h => h.hcp >= 10 && ph.min >= 6),
        cond(t.twoLevel, () => tl >= 2),
      ], { tag: 'penaltyX' }));
    }
  }

  // --- forced: must find a descriptive bid
  if (forced) {
    // partner's takeout double of a suit: long, strong trumps convert it to penalties
    const pDbl = x.partnerCall();
    if (pDbl?.call === DOUBLE && pDbl.meaning.tag === 'takeoutX' && lb && !weHold && strainOf(lb.call) < NT) {
      const ts = strainOf(lb.call), c = T.bidding.competitive;
      rules.push(R(PASS, 'penaltyPass', c.penaltyPass, [lenC(ts, 5), cond(c.threeHonours, h => suitHonours(h, ts) >= 3), hcpC(8)]));
    }
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
      const mineAlready = x.bidsBy(x.seat).some(r => strainOf(r.call) === s && !r.meaning.artificial);
      if (mineAlready || x.ourSuits().includes(s) || theirs.includes(s)) rules.push(R(c, 'rebidSuit', t.rebidSuit(s), [lenC(s, 6)]));
      else rules.push(R(c, 'longSuit', t.showLongSuit(s), [lenC(s, 6)]));
    }
    // a major nobody has bid comes before notrump: five cards, or four when partner may hold four
    for (const need of [5, 4]) {
      for (const s of [SPADES, HEARTS]) {
        const c = x.cheapest(s);
        if (c === null || claimed.has(c) || levelOf(c) > (x.gameForced() ? 3 : 2) || x.ourSuits().includes(s) || theirs.includes(s) || P.len[s][1] < 8 - need) continue;
        rules.push(R(c, 'newSuit', t.newSuit(s), [lenC(s, need)]));
      }
    }
    const nt = x.cheapest(NT);
    const partnerBal = P.balanced === true || partnerNotrump(x);
    const open = unbidSuits(x);
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'notrump', t.ntStoppers, [cond(t.stoppersTheirs, h => theirs.every(s => hasStopper(h, s)) && (partnerBal || open.every(s => hasStopper(h, s) || P.len[s][0] >= 4)))]));
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
      rules.push(R(c, 'newSuit', t.newSuit(s), [lenC(s, 4)]));
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || claimed.has(c) || P.len[s][0] < 3) continue;
      rules.push(R(c, 'preference', t.preference(s), [cond(t.preferenceCond(s), h => h.len[s] >= 2, sh => { sh.len[s] = [Math.max(2, sh.len[s][0]), sh.len[s][1]]; })]));
    }
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'notrump', t.ntFallback, []));
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c !== null && !claimed.has(c) && levelOf(c) <= 5) rules.push(R(c, 'longestSuit', t.longestSuit, [cond(T.bidding.conds.longestSuit(s), h => h.len[s] === h.shape[0], sh => { sh.len[s] = [Math.max(4, sh.len[s][0]), sh.len[s][1]]; })]));
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
        cond(t.competitiveDoubleCond(ts), h => (h.hcp >= 15 && h.len[ts] <= 1) || (h.hcp >= 18 && h.len[ts] <= 2), undefined, h => t.competitiveDoubleValue(h.hcp, h.len[ts], ts)),
      ], { tag: 'takeoutX', forcing: 'one' }));
    }
  }

  // --- preference / correction when partner's suit is a misfit and we hold the contract
  if (lb && weHold && lb.seat === x.partner && !isGame(lb.call)) {
    const ls = strainOf(lb.call);
    if (ls < NT) {
      // a long suit of my own needs little help: rebid it rather than play in partner's misfit
      for (const s of [3, 2, 1, 0]) {
        const c = x.cheapest(s);
        if (s === ls || c === null || levelOf(c) > 3 || claimed.has(c) || !x.bidsBy(x.seat).some(r => strainOf(r.call) === s && !r.meaning.artificial)) continue;
        rules.push(R(c, 'rebidSuit', t.rebidMisfit(s, ls), [
          lenC(s, levelOf(c) >= 3 ? 7 : 6),
          cond(t.misfitCond(ls), h => h.len[ls] <= 2 && h.len[ls] + P.len[ls][0] < 8, sh => { sh.len[ls] = [sh.len[ls][0], Math.min(2, sh.len[ls][1])]; }, h => T.bidding.conds.lenValue(h.len[ls], ls)),
        ]));
      }
      for (const s of [3, 2, 1, 0]) {
        if (s === ls) continue;
        const c = x.cheapest(s);
        if (c === null || levelOf(c) > 3 || claimed.has(c) || P.len[s][0] < 4) continue;
        rules.push(R(c, 'preference', t.preferenceMisfit(s), [
          cond(t.betterFit(s, ls), h => h.len[s] >= 2 && h.len[s] + P.len[s][0] > h.len[ls] + P.len[ls][0] + 1, sh => { sh.len[s] = [Math.max(2, sh.len[s][0]), sh.len[s][1]]; }),
        ]));
      }
    }
  }

  rules.push(R(PASS, 'pass', weHold ? t.passReasonable : t.passNothing, []));
  for (const r of rules) r.generic = true;
  return rules;
}
