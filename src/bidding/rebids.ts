// Opener's rebid and the follow-ups of our side's conventions.

import { bid, PASS, isBid, levelOf, strainOf } from '../core/auction';
import { CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, dummyPoints, declarerPoints } from '../core/eval';
import { T } from '../i18n';
import type { Ctx, CallRecord } from './context';
import { R, hcpC, lenC, balancedC, cond, tpC, type Rule, type Cond } from './types';
import { openerAfterSplinter, openerAfterDrury, completeTexas } from './conventions';

/** Opener's strength band by total points: min 12–15, medium 16–18, max 19–21. */
const band = (min: number, max: number, text: string): Cond => ({
  text,
  test: h => h.tp >= min && h.tp <= max,
  apply: s => {
    s.hcp = [Math.max(s.hcp[0], min - 2), Math.min(s.hcp[1], max)];
  },
  value: h => T.bidding.conds.totalValue(h.tp),
});
const MIN = () => band(12, 15, T.bidding.rebids.minimumBand(12, 15));
const MED = () => band(16, 18, T.bidding.rebids.mediumBand(16, 18));

/** Support points when raising partner's suit. */
const supC = (trump: number, min: number, max = 37): Cond => {
  const t = T.bidding.rebids;
  return {
    text: max >= 37 ? t.supportMin(min) : t.supportRange(min, max),
    test: h => {
      const p = Math.max(dummyPoints(h, trump), h.tp);
      return p >= min && p <= max;
    },
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min - 3), Math.min(s.hcp[1], max)];
    },
    value: h => t.supportValue(Math.max(dummyPoints(h, trump), h.tp)),
  };
};

const declC = (trump: number, min: number, max = 37): Cond => {
  const t = T.bidding.rebids;
  return {
    text: max >= 37 ? t.declarerMin(min) : t.declarerRange(min, max),
    test: h => declarerPoints(h, trump) >= min && declarerPoints(h, trump) <= max,
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min - 3), Math.min(s.hcp[1], max)];
    },
    value: h => t.pointsValue(declarerPoints(h, trump)),
  };
};

const stoppersIn = (suits: number[]): Cond => cond(
  suits.length ? T.bidding.rebids.stoppers(suits) : T.bidding.rebids.ntHand,
  h => suits.every(s => hasStopper(h, s)),
  undefined,
  h => {
    const miss = suits.filter(s => !hasStopper(h, s));
    return miss.length ? T.bidding.conds.noStopper(miss) : T.bidding.conds.hasStoppers;
  },
);

/** "♠ is your longest suit" */
const longestC = (s: number, test: (h: HandInfo) => boolean): Cond => cond(T.bidding.conds.longestSuit(s), test);

function unbidSuits(x: Ctx): number[] {
  const bidSuits = new Set([...x.ourSuits(), ...x.theirSuits()]);
  return [0, 1, 2, 3].filter(s => !bidSuits.has(s));
}

/** Suits a notrump bidder must stop: the unbid ones and the opponents'. */
function ntDanger(x: Ctx): number[] {
  return [...new Set([...unbidSuits(x), ...x.theirSuits()])];
}

// ---------------------------------------------------------------------------
// Opener's rebid after a one-of-a-suit opening

export function openerRebidOneSuit(x: Ctx, open: number, resp: CallRecord): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  const rc = resp.call;
  const tag = resp.meaning.tag;
  const myLenC = (n: number, max = 13) => lenC(open, n, max);

  if (rc === PASS) return [];
  if (tag === 'splinter') return openerAfterSplinter(x, open, resp);
  if (tag === 'drury') return openerAfterDrury(open);

  if (tag === 'cueRaise') {
    // partner's cue bid / Jordan 2NT: a limit raise or better in our suit
    const game = open >= HEARTS ? 4 : 5;
    rules.push(R(bid(game, open), 'acceptRaise', t.acceptRaise, [declC(open, 14)]));
    if (open < HEARTS) rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfterCueRaise, [hcpC(13), stoppersIn(x.theirSuits())]));
    const c = x.cheapest(open);
    if (c !== null && c < bid(game, open)) rules.push(R(c, 'minimum', t.minimumAfterCueRaise, [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 13)]; } }));
    return rules;
  }

  if (tag === 'jacoby2nt') {
    for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
      if (s === open) continue;
      rules.push(R(bid(3, s), 'shortness', t.shortness(s), [lenC(s, 0, 1),
        cond(t.shortestSuit(s), h => h.len[s] === Math.min(...[0, 1, 2, 3].filter(o => o !== open).map(o => h.len[o])))], { artificial: true, forcing: 'game' }));
    }
    rules.push(R(bid(4, open), 'minimum', t.jacobyMinimum, [hcpC(0, 14)]));
    rules.push(R(bid(3, NT), 'medium', t.jacobyMedium, [hcpC(15, 17)], { artificial: true, forcing: 'game' }));
    rules.push(R(bid(3, open), 'maximum', t.jacobyMaximum, [hcpC(18)], { forcing: 'game' }));
    return rules;
  }

  if (isBid(rc) && strainOf(rc) === open) {
    const lvl = levelOf(rc);
    if (resp.meaning.shown.hcp[1] < 10 && lvl >= 3) return []; // a preemptive raise: use judgment
    if (lvl === 2) {
      rules.push(R(bid(4, open), 'game', t.gameAfterRaise, [declC(open, 19)]));
      rules.push(R(bid(3, open), 'invitation', t.inviteAfterRaise, [declC(open, 16, 18)], { tag: 'invite' }));
      if (open < HEARTS) rules.push(R(bid(2, NT), 'invitation', t.twoNtAfterRaise, [hcpC(18, 19), balancedC()], { tag: 'invite' }));
      rules.push(R(PASS, 'pass', t.passAfterRaise, [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 16)]; } }));
      return rules;
    }
    if (lvl === 3) {
      if (open >= HEARTS) {
        rules.push(R(bid(4, open), 'acceptInvitation', t.acceptLimitRaise, [declC(open, 14)]));
      } else {
        rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfterLimitRaise, [hcpC(13), stoppersIn(ntDanger(x))]));
        rules.push(R(bid(5, open), 'minorGame', t.minorGame, [declC(open, 16)]));
      }
      rules.push(R(PASS, 'decline', t.declineLimitRaise, [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 14)]; } }));
      return rules;
    }
    return [R(PASS, 'pass', t.placed, [])];
  }

  if (rc === bid(1, NT)) {
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfter1nt, [hcpC(19, 21), balancedC()]));
    rules.push(R(bid(2, NT), 'invitation', t.twoNtAfter1nt, [hcpC(18, 18), balancedC()], { tag: 'invite' }));
    if (open >= HEARTS) rules.push(R(bid(4, open), 'game', t.gameSixCards, [tpC(19), myLenC(6)]));
    rules.push(R(bid(3, open), 'jumpRebid', t.jumpRebid, [MED(), myLenC(6)], { tag: 'invite' }));
    pushNewSuits(x, rules, open, true);
    rules.push(R(bid(2, open), 'rebidSuit', t.rebidSixCards, [MIN(), myLenC(6)]));
    rules.push(R(PASS, 'pass', t.passAfter1nt, [cond(t.passAfter1ntCond, h => h.balanced || h.hcp <= 15)], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 17)]; } }));
    rules.push(R(bid(2, open), 'rebidSuit', t.rebidFiveCards, [MIN()]));
    return rules;
  }

  const respSuit = isBid(rc) ? strainOf(rc) : -1;
  const respLevel = isBid(rc) ? levelOf(rc) : 0;

  if (respLevel === 1 && respSuit < 4) {
    // 1x - 1y
    const y = respSuit;
    if (y >= HEARTS || (y === DIAMONDS && open === CLUBS)) {
      const supLen = 4;
      // four of a minor is not game: past 3NT it is a forcing slam try (partner signs off in five)
      if (y >= HEARTS) rules.push(R(bid(4, y), 'raiseToGame', t.raiseToGame(y), [lenC(y, supLen), supC(y, 19)]));
      else rules.push(R(bid(4, y), 'minorSlamTry', T.bidding.generic.minorSlamTry(y), [lenC(y, supLen), supC(y, 19)], { forcing: 'one', tag: 'minorTry', data: { suit: y } }));
      rules.push(R(bid(3, y), 'jumpRaise', t.jumpRaise, [lenC(y, supLen), supC(y, 16, 18)], { tag: 'invite' }));
      if (y >= HEARTS) rules.push(R(bid(2, y), 'singleRaise', t.singleRaise, [lenC(y, supLen), supC(y, 12, 15)]));
    }
    // a four-card major at the one level
    for (const M of [HEARTS, SPADES]) {
      if (M <= y) continue;
      rules.push(R(bid(1, M), ['rebid', 1, M], t.oneMajor(M), [lenC(M, 4), tpC(12, 18),
        cond(M === SPADES && y < HEARTS ? t.noFourHearts : t.majorToShow, h => !(M === SPADES && y < HEARTS && h.len[HEARTS] >= 4 && h.len[HEARTS] >= h.len[SPADES]))], { forcing: 'none' }));
    }
    rules.push(R(bid(1, NT), ['rebid', 1, NT], t.oneNt, [hcpC(12, 14), balancedC()]));
    rules.push(R(bid(2, NT), ['rebid', 2, NT], t.twoNt, [hcpC(18, 19), balancedC()], { tag: 'invite' }));
    pushNewSuits(x, rules, open, false);
    if (open >= HEARTS) rules.push(R(bid(4, open), 'game', t.gameSelfSufficient, [tpC(19), myLenC(6)]));
    // too strong for the jump rebid with a long minor: game in notrump, the minor running
    else rules.push(R(bid(3, NT), ['rebid', 3, NT], t.threeNtLongMinor, [tpC(19), myLenC(6), stoppersIn(unbidSuits(x))]));
    rules.push(R(bid(3, open), 'jumpRebid', t.jumpRebid, [MED(), myLenC(6)], { tag: 'invite' }));
    rules.push(R(bid(2, open), 'rebidSuit', t.rebidSixPlus, [MIN(), myLenC(6)]));
    if (y === DIAMONDS && open === CLUBS) rules.push(R(bid(2, DIAMONDS), 'raise', t.raiseDiamonds, [lenC(DIAMONDS, 4), MIN()]));
    rules.push(R(bid(1, NT), ['rebid', 1, NT], t.oneNtFallback, [hcpC(12, 15), cond(t.noShortness, h => h.shape[3] >= 2)]));
    rules.push(R(bid(2, open), 'rebidSuit', t.rebidNothingElse, [hcpC(0, 16)]));
    return rules;
  }

  if (respLevel === 2 && respSuit < 4 && !x.isJump(rc) && respSuit !== open) {
    // two-over-one: forcing, 11+
    const y = respSuit;
    const supLen = y >= HEARTS ? 3 : 4;
    rules.push(R(bid(3, y), 'raise', t.raiseTwoOverOne(y, supLen), [lenC(y, supLen)], { forcing: 'one' }));
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtTwoOverOne, [hcpC(15, 17), balancedC(), stoppersIn(ntDanger(x))]));
    rules.push(R(bid(2, NT), ['nt', 2], t.twoNtTwoOverOne, [hcpC(12, 14), balancedC(), stoppersIn(ntDanger(x))]));
    rules.push(R(bid(3, open), 'jumpRebid', t.jumpRebidTwoOverOne, [tpC(16), myLenC(6)], { forcing: 'game' }));
    rules.push(R(bid(2, open), 'rebidSuit', t.rebidTwoOverOne, [myLenC(6)]));
    for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
      if (s === open || s === y) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3) continue;
      rules.push(R(c, 'newSuit', t.newSuitTwoOverOne(s), [lenC(s, 4)], { forcing: 'one' }));
    }
    rules.push(R(bid(2, open), 'rebidSuit', t.rebidFallback, [], {}));
    return rules;
  }

  if (respSuit === NT && respLevel === 2) {
    rules.push(R(bid(3, open), 'longSuit', t.longSuit, [myLenC(6), cond(T.bidding.conds.unbalanced, h => !h.semiBalanced)]));
    // shortness: notrump may be the wrong game, so show a second suit (the game force continues)
    for (const s of [DIAMONDS, CLUBS, HEARTS, SPADES]) {
      if (s === open) continue;
      rules.push(R(bid(3, s), 'newSuit', t.secondSuitAfter2nt(s), [lenC(s, 4), cond(T.bidding.conds.singletonOrVoid, h => h.shape[3] <= 1)], { forcing: 'game' }));
    }
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtAfter2nt, []));
    return rules;
  }
  if (respSuit === NT && respLevel === 3) return [R(PASS, 'pass', t.passAfter3nt, [hcpC(0, 17)])];
  return [];
}

/** New-suit rebids by opener: non-reverse, reverse (17+) and jump shift (19+). */
function pushNewSuits(x: Ctx, rules: Rule[], open: number, after1NT: boolean) {
  const t = T.bidding.rebids;
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (s === open || x.ourSuits().includes(s)) continue;
    const c = x.cheapest(s);
    if (c === null) continue;
    const lvl = levelOf(c);
    const jumpC = bid(lvl + 1, s);
    if (lvl <= 2) {
      rules.push(R(jumpC, 'jumpShift', t.jumpShift(s), [tpC(19), lenC(s, 4)], { forcing: 'game' }));
    }
    if (lvl === 2 && s > open) {
      rules.push(R(c, 'reverse', t.reverse(s), [tpC(17), lenC(open, 5), lenC(s, 4)], { forcing: 'one' }));
    } else if (lvl <= 2) {
      rules.push(R(c, 'newSuit', t.newSuit(s, after1NT), [tpC(12, 18), lenC(s, 4), lenC(open, 4)], {}));
    }
  }
}

// ---------------------------------------------------------------------------
// Notrump openings: opener's replies to Stayman/transfers/invites

export function openerAfterNT(x: Ctx, ntLevel: number, resp: CallRecord): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  const tag = resp.meaning.tag;
  const L = ntLevel + 1; // reply level
  if (tag === 'stayman') {
    rules.push(R(bid(L, HEARTS), 'staymanReply', t.staymanHearts, [lenC(HEARTS, 4)], { tag: 'staymanReply' }));
    rules.push(R(bid(L, SPADES), 'staymanReply', t.staymanSpades, [lenC(SPADES, 4), lenC(HEARTS, 0, 3)], { tag: 'staymanReply' }));
    rules.push(R(bid(L, DIAMONDS), 'staymanReply', t.staymanNone, [lenC(HEARTS, 0, 3), lenC(SPADES, 0, 3)], { artificial: true, tag: 'staymanReply' }));
    return rules;
  }
  if (tag === 'transfer') {
    const M = resp.meaning.data!.suit;
    if (ntLevel === 1) rules.push(R(bid(3, M), 'superAccept', t.superAccept(M), [lenC(M, 4), hcpC(17)]));
    rules.push(R(bid(L, M), 'completeTransfer', t.completeTransfer(L, M), [], { tag: 'transferDone' }));
    return rules;
  }
  if (tag === 'texas') return completeTexas(resp.meaning.data!.suit);
  if (tag === 'minorTransfer') return [R(bid(3, CLUBS), 'completeTransfer', t.completeMinorTransfer, [], { artificial: true, tag: 'transferDone' })];
  if (tag === 'nt-invite') {
    rules.push(R(bid(3, NT), 'accept', t.acceptNtInvite, [hcpC(16)]));
    rules.push(R(PASS, 'decline', t.declineNtInvite, []));
    return rules;
  }
  if (tag === 'quant') {
    const max = ntLevel === 1 ? 17 : 21;
    rules.push(R(bid(6, NT), 'accept', t.acceptQuant, [cond(t.quantMaximum(max), h => h.hcp >= max || (h.hcp === max - 1 && h.shape[0] >= 5))]));
    rules.push(R(PASS, 'decline', t.declineQuant, []));
    return rules;
  }
  if (isBid(resp.call) && (levelOf(resp.call) >= 3 && strainOf(resp.call) === NT || levelOf(resp.call) >= 6)) return [R(PASS, 'pass', t.placed, [])];
  return [];
}

/** Responder's next bid after Stayman or a transfer. */
export function responderAfterNTConvention(x: Ctx, ntLevel: number, myConv: CallRecord, reply: CallRecord): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  // game values opposite partner's notrump range; above `top` the hand looks for slam
  const ph = x.partnerHcp();
  const game = ntLevel === 1 ? 10 : Math.max(0, 25 - ph.max);
  const top = ntLevel === 1 ? 15 : Math.max(game, 32 - ph.max);
  const inv = ntLevel === 1 ? 8 : -1;
  if (myConv.meaning.tag === 'stayman') {
    const rs = strainOf(reply.call);
    const fit = rs === HEARTS || rs === SPADES ? rs : -1;
    if (fit >= 0) {
      rules.push(R(bid(4, fit), 'gameInFit', t.gameInFit(game, top), [lenC(fit, 4), hcpC(game, top)]));
      if (inv > 0) rules.push(R(bid(3, fit), 'invitation', t.inviteInFit, [lenC(fit, 4), hcpC(8, 9)], { tag: 'invite' }));
    } else if (rs === DIAMONDS) {
      // no four-card major: with five cards in a major and game values, offer it (forcing)
      for (const M of [SPADES, HEARTS]) {
        rules.push(R(bid(3, M), 'fiveCardMajor', t.fiveCardMajorAfterStayman(M), [lenC(M, 5, 5), hcpC(game, top)], { forcing: 'one' }));
      }
    }
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtNoFit(game, top), [hcpC(game, top), cond(t.noFit, h => fit < 0 || h.len[fit] < 4)]));
    if (inv > 0) rules.push(R(bid(2, NT), 'invitation', t.twoNtNoFit, [hcpC(8, 9), cond(t.noFit, h => fit < 0 || h.len[fit] < 4)], { tag: 'nt-invite' }));
    return rules;
  }
  if (myConv.meaning.tag === 'transfer') {
    const M = myConv.meaning.data!.suit;
    if (strainOf(reply.call) !== M) return [];
    if (levelOf(reply.call) === 3 && ntLevel === 1) {
      rules.push(R(bid(4, M), 'game', t.gameAfterSuperAccept, [hcpC(4)]));
      rules.push(R(PASS, 'pass', t.passAfterSuperAccept, []));
      return rules;
    }
    if (ntLevel === 1) {
      // five-five in the majors with game values: show hearts too, and let opener choose
      if (M === SPADES) rules.push(R(bid(3, HEARTS), 'newSuit', t.fiveFiveMajors, [lenC(SPADES, 5), lenC(HEARTS, 5), hcpC(10, 15)], { forcing: 'game', tag: 'fiveFive' }));
      rules.push(R(bid(4, M), 'game', t.gameSixPlus(M), [lenC(M, 6), hcpC(10, 15)]));
      rules.push(R(bid(3, NT), 'choiceOfGames', t.choiceOfGames(M), [lenC(M, 5, 5), hcpC(10, 15)], { tag: 'choiceOfGames', data: { suit: M } }));
      rules.push(R(bid(3, M), 'invitation', t.inviteSix(M), [lenC(M, 6), hcpC(8, 9)], { tag: 'invite' }));
      rules.push(R(bid(2, NT), 'invitation', t.inviteFive(M), [lenC(M, 5, 5), hcpC(8, 9)], { tag: 'transferInvite', data: { suit: M } }));
      rules.push(R(PASS, 'pass', t.passTransfer(M), [hcpC(0, 7)]));
    } else {
      rules.push(R(bid(4, M), 'game', t.gameSixPlus2nt(M), [lenC(M, 6), hcpC(game, top)]));
      rules.push(R(bid(3, NT), 'choiceOfGames', t.choiceOfGames2nt(M), [lenC(M, 5, 5), hcpC(game, top)], { tag: 'choiceOfGames', data: { suit: M } }));
      rules.push(R(PASS, 'pass', t.passTransfer2nt, [hcpC(0, Math.max(0, game - 1))]));
    }
    return rules;
  }
  if (myConv.meaning.tag === 'minorTransfer') {
    rules.push(R(bid(3, DIAMONDS), 'signOff', t.signOffDiamonds, [cond(t.diamondsLonger, h => h.len[DIAMONDS] > h.len[CLUBS])]));
    rules.push(R(PASS, 'pass', t.passClubs, []));
    return rules;
  }
  return [];
}

/** Opener's third bid after responder's NT-convention continuation. */
export function openerAfterNTContinuation(x: Ctx, ntLevel: number, conv: CallRecord, cont: CallRecord): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  const max = ntLevel === 1 ? 16 : 21;
  const c = cont.call;
  if (conv.meaning.tag === 'stayman') {
    const myReply = x.lastAction(x.seat)!;
    const rs = strainOf(myReply.call);
    if (c === bid(ntLevel + 1, NT) || c === bid(3, NT)) {
      // responder has a four-card major we didn't show
      if (rs === HEARTS) {
        if (c === bid(3, NT)) rules.push(R(bid(4, SPADES), 'spadeFit', t.spadeFitAfter3nt, [lenC(SPADES, 4)]));
        else {
          rules.push(R(bid(4, SPADES), 'spadeFit', t.spadeFitMaximum, [lenC(SPADES, 4), hcpC(max)]));
          rules.push(R(bid(3, SPADES), 'spadeFit', t.spadeFitMinimum, [lenC(SPADES, 4)]));
        }
      }
      if (c !== bid(3, NT)) rules.push(R(bid(3, NT), 'accept', t.acceptMaximum, [hcpC(max)]));
      rules.push(R(PASS, 'pass', t.nothingMore, []));
      return rules;
    }
    if (strainOf(c) === rs && levelOf(c) === 3) {
      rules.push(R(bid(4, rs), 'accept', t.acceptMaximum, [hcpC(max)]));
      rules.push(R(PASS, 'decline', t.declineMinimum, []));
      return rules;
    }
    if (rs === DIAMONDS && (c === bid(3, HEARTS) || c === bid(3, SPADES))) {
      // responder's five-card major after our denial: raise with three, otherwise 3NT
      const M = strainOf(c);
      rules.push(R(bid(4, M), 'raise', t.raiseFiveCardMajor(M), [lenC(M, 3)]));
      rules.push(R(bid(3, NT), ['nt', 3], t.noFitFiveCardMajor(M), []));
      return rules;
    }
    return [];
  }
  if (conv.meaning.tag === 'transfer') {
    const M = conv.meaning.data!.suit;
    if (cont.meaning.tag === 'transferInvite') {
      rules.push(R(bid(4, M), 'acceptInMajor', t.acceptInMajor, [hcpC(max), lenC(M, 3)]));
      rules.push(R(bid(3, NT), 'acceptInNt', t.acceptInNt, [hcpC(max)]));
      rules.push(R(bid(3, M), 'declineInMajor', t.declineInMajor, [lenC(M, 3)]));
      rules.push(R(PASS, 'decline', t.declineDoubleton, []));
      return rules;
    }
    if (cont.meaning.tag === 'fiveFive') {
      rules.push(R(bid(4, SPADES), 'chooseMajor', t.chooseMajorFiveFive(SPADES), [cond(t.moreInMajorCond(SPADES), h => h.len[SPADES] >= 3 && h.len[SPADES] >= h.len[HEARTS], undefined, h => T.bidding.conds.lengths(h.len, [SPADES, HEARTS]))]));
      rules.push(R(bid(4, HEARTS), 'chooseMajor', t.chooseMajorFiveFive(HEARTS), [cond(t.moreInMajorCond(HEARTS), h => h.len[HEARTS] >= 3, undefined, h => T.bidding.conds.lengths(h.len, [SPADES, HEARTS]))]));
      rules.push(R(bid(4, SPADES), 'chooseMajor', t.chooseMajorFiveFive(SPADES), []));
      return rules;
    }
    if (cont.meaning.tag === 'choiceOfGames') {
      rules.push(R(bid(4, M), 'chooseMajor', t.chooseMajor, [lenC(M, 3)]));
      rules.push(R(PASS, 'chooseNt', t.chooseNt, []));
      return rules;
    }
    if (c === bid(3, M)) {
      rules.push(R(bid(4, M), 'accept', t.acceptMaximum, [hcpC(max)]));
      rules.push(R(PASS, 'decline', t.declineMinimum, []));
      return rules;
    }
  }
  return [];
}

// ---------------------------------------------------------------------------
// Strong 2♣ and weak twos

export function openerAfter2C(x: Ctx, resp: CallRecord): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  if (resp.meaning.tag !== 'waiting') return [];
  const rc = x.rhoCall();
  if (rc && rc.call !== PASS) {
    // they interfered over our strong 2♣: bid naturally
    const theirs = x.theirSuits();
    const nt = x.cheapest(NT);
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'notrump', t.ntAfterInterference, [hcpC(22), balancedC(), stoppersIn(theirs)], { forcing: 'none' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      rules.push(R(c, 'naturalRebid', t.naturalAfterInterference(s), [lenC(s, 5), longestC(s, h => h.len[s] === h.shape[0])], { forcing: 'game' }));
    }
    return rules;
  }
  rules.push(R(bid(3, NT), ['rebid', 3, NT], t.threeNtAfter2c, [hcpC(25, 27), balancedC()]));
  rules.push(R(bid(2, NT), ['rebid', 2, NT], t.twoNtAfter2c, [hcpC(22, 24), balancedC()], { tag: 'nt2c' }));
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    const c = s >= HEARTS ? bid(2, s) : bid(3, s);
    rules.push(R(c, 'naturalRebid', t.naturalRebid(s), [lenC(s, 5),
      longestC(s, h => h.len[s] === h.shape[0] && [0, 1, 2, 3].every(o => h.len[o] < h.len[s] || o <= s))], { forcing: 'game' }));
  }
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    const c = s >= HEARTS ? bid(2, s) : bid(3, s);
    rules.push(R(c, 'naturalRebid', t.naturalRebidLongest(s), [longestC(s, h => h.len[s] === h.shape[0])], { forcing: 'game' }));
  }
  return rules;
}

export function openerAfterFeatureAsk(x: Ctx, s: number): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  const solid = (h: HandInfo) => [14, 13, 12].every(r => h.ranks[s].includes(r));
  rules.push(R(bid(3, NT), 'solidSuit', t.solidSuit, [hcpC(8), cond(t.solidSuitCond, solid)]));
  for (const o of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
    if (o === s) continue;
    const c = x.cheapest(o);
    if (c === null || levelOf(c) > 3) continue;
    rules.push(R(c, 'feature', t.feature(o), [hcpC(8, 10), cond(t.featureCond(o), h => h.ranks[o].some(r => r >= 13))], { artificial: true }));
  }
  rules.push(R(bid(3, s), 'minimum', t.minimumWeakTwo, [], { shows: sh => { sh.hcp = [sh.hcp[0], Math.min(sh.hcp[1], 8)]; } }));
  return rules;
}

/** Weak-two opener after responder's new suit (forcing): raise with three cards or a doubleton honour, otherwise rebid the suit. */
export function openerAfterWeakTwoNewSuit(x: Ctx, s: number, o: number): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  const raise = x.cheapest(o), own = x.cheapest(s);
  if (raise !== null) {
    rules.push(R(raise, 'raise', t.raiseNewSuitWeakTwo(o), [
      cond(t.supportNewSuitCond(o), h => h.len[o] >= 3 || (h.len[o] === 2 && h.ranks[o][0] >= 12), sh => { sh.len[o] = [Math.max(2, sh.len[o][0]), sh.len[o][1]]; }, h => T.bidding.conds.lenValue(h.len[o], o)),
    ]));
  }
  if (own !== null) rules.push(R(own, 'rebidSuit', t.rebidWeakTwo(s), []));
  return rules;
}

/** Responder's continuation after partner's invitation: accept when the combined total can reach game. */
export function responderAfterInvite(x: Ctx, trump: number): Rule[] {
  const t = T.bidding.rebids;
  const rules: Rule[] = [];
  const need = 26 - Math.min(x.partnerHcp().max, 21);
  if (trump === NT) {
    const ph = x.partnerHcp();
    // the slam ranges need partner's range to be a real one (an invitation that may also be a
    // forced catch-all reads open-ended)
    const bounded = ph.max - ph.min <= 8;
    if (bounded && x.isLegal(bid(6, NT))) rules.push(R(bid(6, NT), 'smallSlam', t.slamAfterInvite(ph.min, ph.max, 33 - ph.min), [hcpC(33 - ph.min)]));
    if (bounded && x.isLegal(bid(4, NT))) rules.push(R(bid(4, NT), 'quant4nt', t.quantAfterInvite, [hcpC(33 - ph.max, 32 - ph.min)], { tag: 'quant' }));
    // a major of mine that partner has not supported: play it with six, offer it with five
    const P = x.shownBy(x.partner);
    const responder = x.opening()?.seat !== x.seat;
    for (const M of [SPADES, HEARTS]) {
      if (!responder || P.len[M][0] >= 3 || !x.bidsBy(x.seat).some(r => strainOf(r.call) === M && !r.meaning.artificial)) continue;
      if (x.isLegal(bid(4, M))) rules.push(R(bid(4, M), 'game', t.majorGameAfterNtInvite(M), [lenC(M, 6), hcpC(need)]));
      if (x.isLegal(bid(3, M))) rules.push(R(bid(3, M), 'rebidSuit', t.fiveCardMajorAfterNtInvite(M), [lenC(M, 5, 5), hcpC(need)], { forcing: 'one' }));
    }
    rules.push(R(bid(3, NT), 'accept', t.acceptNtInvitation(need), [hcpC(need)]));
    rules.push(R(PASS, 'decline', t.declineBottom, []));
    return rules;
  }
  const game = trump >= HEARTS ? 4 : 5;
  const needGame = trump >= HEARTS ? need : need + 3; // eleven tricks need more
  if (trump < HEARTS) {
    rules.push(R(bid(3, NT), 'acceptIn3nt', t.acceptIn3nt, [
      hcpC(Math.max(6, need - 1)), stoppersIn(ntDanger(x).filter(s => s !== trump)),
    ]));
  }
  rules.push(R(bid(game, trump), 'accept', t.acceptGame(needGame), [
    cond(t.supportPoints(needGame), h => Math.max(dummyPoints(h, trump), h.tp) >= needGame, undefined, h => t.pointsValue(Math.max(dummyPoints(h, trump), h.tp))),
  ]));
  rules.push(R(PASS, 'decline', t.declineInvitation, []));
  return rules;
}
