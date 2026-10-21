// Responses to partner's opening bid when the opponents stay out.

import { bid, PASS } from '../core/auction';
import { CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, goodSuit, dummyPoints } from '../core/eval';
import { T } from '../i18n';
import type { Ctx } from './context';
import { R, hcpC, lenC, balancedC, semiBalancedC, cond, dpC, goodSuitC, type Rule } from './types';
import { getSystem } from './config';
import { splinterRaises, druryRaise, texasTransfers } from './conventions';

/** Which major to respond at the one level: longer first; 4-4 → hearts (up the line); 5-5 → spades. */
export function majorToShow(h: HandInfo): number | null {
  const s = h.len[SPADES], he = h.len[HEARTS];
  if (s < 4 && he < 4) return null;
  if (s > he) return SPADES;
  if (he > s) return HEARTS;
  return s >= 5 ? SPADES : HEARTS;
}

/** Best new suit among candidates (each with a minimum length): longest; 5-5 → higher, 4-4 → lower. */
export function bestNewSuit(h: HandInfo, cands: { suit: number; min: number }[]): number | null {
  const ok = cands.filter(c => h.len[c.suit] >= c.min);
  if (!ok.length) return null;
  const max = Math.max(...ok.map(c => h.len[c.suit]));
  const top = ok.filter(c => h.len[c.suit] === max).map(c => c.suit);
  return max >= 5 ? Math.max(...top) : Math.min(...top);
}

const noFourMajor = () => cond(T.bidding.responses.noFourMajor, h => h.len[HEARTS] < 4 && h.len[SPADES] < 4, s => {
  s.len[HEARTS] = [s.len[HEARTS][0], Math.min(3, s.len[HEARTS][1])];
  s.len[SPADES] = [s.len[SPADES][0], Math.min(3, s.len[SPADES][1])];
}, h => T.bidding.conds.lengths(h.len, [SPADES, HEARTS]));

const passResponse = (desc: string, max = 5): Rule =>
  R(PASS, 'pass', desc, [], {
    shows: s => {
      s.hcp = [s.hcp[0], Math.min(s.hcp[1], max)];
    },
  });

// ---------------------------------------------------------------------------

export function responsesToOneSuit(x: Ctx, open: number): Rule[] {
  const t = T.bidding.responses;
  const rules: Rule[] = [];
  const major = open >= HEARTS;
  const passed = x.passedHand(x.seat);
  const singletonOrVoid = cond(T.bidding.conds.singletonOrVoid, h => h.shape[3] <= 1, undefined, h => t.shortestValue(h.shape[3]));

  if (major) {
    const M = open;
    const drury = passed && getSystem().drury;
    if (!passed) rules.push(...splinterRaises(M));
    if (!passed) {
      rules.push(
        R(bid(2, NT), 'jacoby2nt', t.jacoby2nt(M), [lenC(M, 4), hcpC(13)], {
          artificial: true, forcing: 'game', tag: 'jacoby2nt', data: { suit: M },
        }),
      );
    }
    for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
      if (s === M) continue;
      const jump = s < M ? 3 : 2;
      if (passed) continue;
      rules.push(
        R(bid(jump, s), 'jumpShift', t.jumpShiftMajor(s), [hcpC(19), lenC(s, 5), goodSuitC(s)], { forcing: 'game' }),
      );
    }
    rules.push(
      R(bid(4, M), 'preemptiveGameRaise', t.preemptiveGameRaise, [lenC(M, 5), hcpC(0, 9), singletonOrVoid]),
    );
    if (drury) rules.push(...druryRaise(M));
    rules.push(
      R(bid(3, M), 'limitRaise', t.limitRaiseMajor, [lenC(M, 4), dpC(M, 10, 12)]),
    );
    rules.push(
      R(bid(2, M), 'singleRaise', t.singleRaiseMajor(M), [lenC(M, 3), dpC(M, 6, 10)]),
    );
    if (M === HEARTS) {
      rules.push(R(bid(1, SPADES), 'newSuitOneLevel', t.oneSpade, [lenC(SPADES, 4), hcpC(6)], { forcing: 'one' }));
    }
    const cands = M === SPADES ? [{ suit: HEARTS, min: 5 }, { suit: DIAMONDS, min: 4 }, { suit: CLUBS, min: 4 }] : [{ suit: DIAMONDS, min: 4 }, { suit: CLUBS, min: 4 }];
    for (const c of cands) {
      if (drury && c.suit === CLUBS) continue; // 2♣ is Drury
      rules.push(
        R(bid(2, c.suit), 'twoOverOne', t.twoOverOne(c.min, c.suit, passed), [
          hcpC(11),
          lenC(c.suit, c.min),
          cond(t.bestToShow(c.suit), h => bestNewSuit(h, cands) === c.suit, undefined, h => t.bestToShowValue(bestNewSuit(h, cands))),
        ], { forcing: passed ? 'none' : 'one' }),
      );
    }
    rules.push(
      R(bid(1, NT), ['response', 1, NT], t.oneNtOverMajor(M === HEARTS), [hcpC(6, 10)], {
        shows: s => {
          s.len[M] = [s.len[M][0], Math.min(s.len[M][1], 2)];
          if (M === HEARTS) s.len[SPADES] = [s.len[SPADES][0], Math.min(s.len[SPADES][1], 3)];
        },
      }),
    );
    if (!drury) {
      rules.push(
        R(bid(2, CLUBS), 'twoOverOneClubs', t.twoClubsThreeCards, [hcpC(11), lenC(CLUBS, 3)], { forcing: 'one' }),
      );
    }
    rules.push(passResponse(t.passMajor));
    return rules;
  }

  // minor opening
  const m = open;
  if (!passed) {
    for (const s of [DIAMONDS, HEARTS, SPADES]) {
      if (s <= m) continue;
      rules.push(R(bid(2, s), 'jumpShift', t.jumpShiftMinor(s), [hcpC(19), lenC(s, 5), goodSuitC(s)], { forcing: 'game' }));
    }
  }
  for (const M of [HEARTS, SPADES]) {
    rules.push(
      R(bid(1, M), ['response', 1, M], t.oneMajor(M), [
        hcpC(6),
        lenC(M, 4),
        cond(t.majorToShow(M), h => majorToShow(h) === M, undefined, h => t.majorToShowValue(majorToShow(h))),
      ], { forcing: passed ? 'none' : 'one' }),
    );
  }
  if (m === CLUBS) {
    rules.push(
      R(bid(1, DIAMONDS), ['response', 1, DIAMONDS], t.oneDiamond, [hcpC(6), lenC(DIAMONDS, 4), noFourMajor()], { forcing: passed ? 'none' : 'one' }),
    );
  }
  rules.push(R(bid(3, NT), ['response', 3, NT], t.threeNtMinor, [hcpC(16, 17), balancedC(), noFourMajor()]));
  if (!passed) rules.push(R(bid(2, NT), ['response', 2, NT], t.twoNtMinor, [hcpC(13, 15), balancedC(), noFourMajor()], { forcing: 'game' }));
  const raiseLen = m === CLUBS ? 5 : 4;
  rules.push(R(bid(3, m), 'limitRaise', t.limitRaiseMinor(raiseLen, m), [lenC(m, raiseLen), hcpC(10, 12), noFourMajor()]));
  rules.push(R(bid(2, m), 'singleRaise', t.singleRaiseMinor(raiseLen, m), [lenC(m, raiseLen), hcpC(6, 10), noFourMajor()]));
  if (m === DIAMONDS) {
    rules.push(R(bid(2, CLUBS), 'twoOverOne', t.twoClubsOverDiamond, [hcpC(11), lenC(CLUBS, 4), noFourMajor()], { forcing: passed ? 'none' : 'one' }));
  }
  rules.push(R(bid(1, NT), ['response', 1, NT], t.oneNtMinor, [hcpC(6, 10), noFourMajor()]));
  // awkward 11-12 balanced hands: temporise with a new minor
  if (m === CLUBS) rules.push(R(bid(1, DIAMONDS), ['response', 1, DIAMONDS], t.oneDiamondWaiting, [hcpC(11, 12), lenC(DIAMONDS, 3), noFourMajor()], { forcing: 'one' }));
  else rules.push(R(bid(2, CLUBS), 'twoOverOne', t.twoClubsWaiting, [hcpC(11, 12), lenC(CLUBS, 3), noFourMajor()], { forcing: 'one' }));
  rules.push(R(bid(1, NT), ['response', 1, NT], t.oneNtFallback, [hcpC(6, 12)]));
  rules.push(passResponse(t.passMinor));
  return rules;
}

// ---------------------------------------------------------------------------

/** Five cards in one major and four in the other with game values: Stayman first, then the five-card major. */
const fiveFourGame = (h: HandInfo, game: number) => h.hcp >= game && Math.max(h.len[SPADES], h.len[HEARTS]) === 5 && Math.min(h.len[SPADES], h.len[HEARTS]) === 4;
const notFiveFour = (game: number) => cond(T.bidding.responses.notFiveFourGame, h => !fiveFourGame(h, game), undefined, h => T.bidding.conds.lengths(h.len, [SPADES, HEARTS]));

export function responsesTo1NT(x: Ctx): Rule[] {
  const t = T.bidding.responses;
  const majors = (h: HandInfo) => T.bidding.conds.lengths(h.len, [SPADES, HEARTS]);
  const rules: Rule[] = [...texasTransfers(10)];
  rules.push(
    R(bid(2, HEARTS), ['jacobyTransfer', SPADES], t.transferSpades, [
      lenC(SPADES, 5),
      cond(t.spadesAtLeastHearts, h => h.len[SPADES] >= h.len[HEARTS], undefined, majors),
      notFiveFour(10),
    ], { artificial: true, forcing: 'one', tag: 'transfer', data: { suit: SPADES } }),
  );
  rules.push(
    R(bid(2, DIAMONDS), ['jacobyTransfer', HEARTS], t.transferHearts, [
      lenC(HEARTS, 5),
      cond(t.heartsLonger, h => h.len[HEARTS] > h.len[SPADES], undefined, majors),
      notFiveFour(10),
    ], { artificial: true, forcing: 'one', tag: 'transfer', data: { suit: HEARTS } }),
  );
  rules.push(
    R(bid(2, CLUBS), 'stayman', t.stayman, [
      hcpC(8),
      cond(t.fourCardMajor, h => h.len[HEARTS] >= 4 || h.len[SPADES] >= 4, undefined, majors),
    ], { artificial: true, forcing: 'one', tag: 'stayman' }),
  );
  rules.push(
    R(bid(2, SPADES), 'minorTransfer', t.minorTransfer, [
      hcpC(0, 7),
      cond(t.sixCardMinor, h => h.len[CLUBS] >= 6 || h.len[DIAMONDS] >= 6, undefined, h => T.bidding.conds.lengths(h.len, [CLUBS, DIAMONDS])),
    ], { artificial: true, forcing: 'one', tag: 'minorTransfer' }),
  );
  rules.push(R(bid(7, NT), 'grandSlam', t.grand1nt, [hcpC(22)]));
  rules.push(R(bid(6, NT), 'smallSlam', t.small1nt, [hcpC(18, 21)]));
  rules.push(R(bid(4, NT), 'quant4nt', t.quant1nt, [hcpC(16, 17)], { tag: 'quant' }));
  rules.push(R(bid(3, NT), ['nt', 3], t.game1nt, [hcpC(10, 15)]));
  rules.push(R(bid(2, NT), 'invitational2nt', t.invite1nt, [hcpC(8, 9)], { tag: 'nt-invite' }));
  rules.push(passResponse(t.pass1nt, 7));
  return rules;
}

export function responsesTo2NT(x: Ctx): Rule[] {
  const t = T.bidding.responses;
  const rules: Rule[] = [...texasTransfers(4)];
  rules.push(
    R(bid(3, HEARTS), ['transfer', SPADES], t.transferSpades2nt, [lenC(SPADES, 5), cond(t.spadesAtLeastHearts, h => h.len[SPADES] >= h.len[HEARTS]), notFiveFour(4)], {
      artificial: true, forcing: 'one', tag: 'transfer', data: { suit: SPADES },
    }),
  );
  rules.push(
    R(bid(3, DIAMONDS), ['transfer', HEARTS], t.transferHearts2nt, [lenC(HEARTS, 5), cond(t.heartsLonger, h => h.len[HEARTS] > h.len[SPADES]), notFiveFour(4)], {
      artificial: true, forcing: 'one', tag: 'transfer', data: { suit: HEARTS },
    }),
  );
  rules.push(
    R(bid(3, CLUBS), 'stayman', t.stayman2nt, [
      hcpC(4),
      cond(t.fourCardMajor, h => h.len[HEARTS] >= 4 || h.len[SPADES] >= 4),
    ], { artificial: true, forcing: 'one', tag: 'stayman' }),
  );
  // ranges opposite partner's notrump: 20–21 for a 2NT opening, 22–24 after 2♣ – 2♦ – 2NT
  const { min, max } = x.partnerHcp();
  rules.push(R(bid(7, NT), 'grandSlam', t.grand2nt(37 - min, min, max), [hcpC(37 - min)]));
  rules.push(R(bid(6, NT), 'smallSlam', t.small2nt(33 - min, 36 - min), [hcpC(33 - min, 36 - min)]));
  rules.push(R(bid(4, NT), 'quant4nt', t.quant2nt(32 - max, 32 - min), [hcpC(32 - max, 32 - min)], { tag: 'quant' }));
  rules.push(R(bid(3, NT), ['nt', 3], t.game2nt(25 - max, 31 - max), [hcpC(25 - max, 31 - max)]));
  rules.push(passResponse(t.pass2nt(Math.max(0, 24 - max)), Math.max(0, 24 - max)));
  return rules;
}

export function responsesTo2C(x: Ctx): Rule[] {
  const t = T.bidding.responses;
  const rules: Rule[] = [];
  for (const s of [HEARTS, SPADES, CLUBS, DIAMONDS]) {
    const level = s >= HEARTS ? 2 : 3;
    rules.push(
      R(bid(level, s), 'positiveResponse', t.positive(s), [hcpC(8), lenC(s, 5), goodSuitC(s),
        cond(t.longestGoodSuit(s), h => [0, 1, 2, 3].every(o => o === s || h.len[o] < h.len[s] || !goodSuit(h, o) || (h.len[o] === h.len[s] && o < s)))], { forcing: 'game' }),
    );
  }
  rules.push(R(bid(2, DIAMONDS), 'waiting2d', t.waiting, [], { artificial: true, forcing: 'one', tag: 'waiting' }));
  return rules;
}

export function responsesToWeakTwo(x: Ctx, s: number): Rule[] {
  const t = T.bidding.responses;
  const rules: Rule[] = [];
  const major = s >= HEARTS;
  rules.push(
    R(bid(2, NT), 'featureAsk', t.featureAsk(s), [hcpC(15)], {
      artificial: true, forcing: 'one', tag: 'featureAsk', data: { suit: s },
    }),
  );
  if (major) {
    rules.push(R(bid(4, s), 'gameRaise', t.gameRaiseWeakTwo, [
      cond(t.gameRaiseWeakTwoCond, h => h.len[s] >= 4 || (h.hcp >= 16 && h.len[s] >= 2)),
    ]));
  }
  rules.push(R(bid(3, NT), ['nt', 3], t.threeNtWeakTwo, [hcpC(16), semiBalancedC(), cond(t.stoppersOtherThree, h => [0, 1, 2, 3].every(o => o === s || hasStopper(h, o)))]));
  for (const o of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
    if (o === s) continue;
    const c = x.cheapest(o);
    if (c === null) continue;
    rules.push(R(c, 'newSuit', t.newSuitWeakTwo(o), [hcpC(16), lenC(o, 5), goodSuitC(o)], { forcing: 'one' }));
  }
  rules.push(R(bid(3, s), 'preemptiveRaise', t.preemptiveRaiseWeakTwo, [lenC(s, 3), hcpC(0, 14)]));
  rules.push(passResponse(t.passWeakTwo, 14));
  return rules;
}

export function responsesToPreempt(x: Ctx, level: number, s: number): Rule[] {
  const t = T.bidding.responses;
  const rules: Rule[] = [];
  const major = s >= HEARTS;
  if (level === 3 && major) {
    rules.push(R(bid(4, s), 'raiseToGame', t.raiseMajorPreempt, [cond(t.raiseMajorPreemptCond, h => (h.len[s] >= 3 && h.hcp >= 14) || h.len[s] >= 4)]));
  }
  if (level === 3 && !major) {
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtMinorPreempt, [hcpC(16), cond(t.stoppersOther, h => [0, 1, 2, 3].every(o => o === s || hasStopper(h, o)))]));
    rules.push(R(bid(5, s), 'raiseToGame', t.raiseMinorPreempt, [lenC(s, 4), cond(t.raiseMinorPreemptCond, h => h.hcp >= 16 || h.shape[3] <= 1)]));
  }
  if (level === 3 && major) {
    rules.push(R(bid(3, NT), ['nt', 3], t.threeNtMajorPreempt, [hcpC(16), lenC(s, 0, 2), cond(t.stoppersOther, h => [0, 1, 2, 3].every(o => o === s || hasStopper(h, o)))]));
  }
  rules.push(passResponse(t.passPreempt, 15));
  return rules;
}

/** Dummy points helper for other modules. */
export { dummyPoints };
