// Optional conventions on top of SAYC (see config.ts): splinters, Drury, Texas
// transfers, new minor forcing, fourth suit forcing and control (cue) bids.
// Each builder returns no rules when its convention is switched off, so the
// auction then falls back to the plain system.

import { bid, PASS, isBid, levelOf, strainOf, type Call } from '../core/auction';
import { CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, dummyPoints, declarerPoints } from '../core/eval';
import { T } from '../i18n';
import type { Ctx, CallRecord } from './context';
import { getSystem } from './config';
import { R, hcpC, lenC, dpC, cond, type Rule, type Cond } from './types';
import { aceAsk, aceAskMade } from './slam';

const SIDE = (trump: number) => [CLUBS, DIAMONDS, HEARTS, SPADES].filter(s => s !== trump);

/** First- or second-round control: ace, king, void or singleton. */
const control = (h: HandInfo, s: number) => h.ranks[s].includes(14) || h.ranks[s].includes(13) || h.len[s] <= 1;

/**
 * Points lost to honours facing partner's shortness: the king, queen and jack
 * count for half (they may still give a discard), the ace counts in full.
 */
const wasted = (h: HandInfo, s: number) => (h.suitHcp[s] - (h.ranks[s].includes(14) ? 4 : 0)) / 2;

// ---------------------------------------------------------------------------
// Splinter raises: 1♥–3♠/4♣/4♦, 1♠–4♣/4♦/4♥

/** Responder's splinters over partner's 1♥/1♠ (not by a passed hand). */
export function splinterRaises(M: number): Rule[] {
  if (!getSystem().splinters) return [];
  const t = T.bidding.splinters;
  return SIDE(M).map(s =>
    R(bid(s > M ? 3 : 4, s), 'splinter', t.raise(s, M), [lenC(M, 4), hcpC(10), dpC(M, 13, 16), lenC(s, 0, 1)], {
      artificial: true, forcing: 'game', tag: 'splinter', data: { suit: M, short: s },
    }),
  );
}

/** Opener after partner's splinter: slam try with working values, otherwise game. */
export function openerAfterSplinter(x: Ctx, M: number, resp: CallRecord): Rule[] {
  const t = T.bidding.splinters;
  const short = resp.meaning.data!.short;
  const working = (h: HandInfo) => declarerPoints(h, M) - wasted(h, short);
  const value = (h: HandInfo) => t.workingValue(Math.round(working(h)));
  const others = SIDE(M).filter(s => s !== short);
  const rules: Rule[] = [];
  rules.push(...cueBids(x, M, resp.call, others, cond(t.slamInterest, h => working(h) >= 16, undefined, value)));
  rules.push(aceAsk(M, [
    cond(t.strongSlamInterest, h => working(h) >= 18, undefined, value),
    cond(T.bidding.cues.controlsCond(others), h => others.every(s => control(h, s))),
  ], {}, t.aceAsk));
  rules.push(R(bid(4, M), 'signOff', t.signOff(short), [], {}));
  return rules;
}

// ---------------------------------------------------------------------------
// Control (cue) bids once a major is agreed in a game-forcing auction

/**
 * Cue bids at the four level below game in the agreed major, in the given suits,
 * cheapest first: the first suit with a control is the one shown, so skipping a
 * suit denies a control in it.
 */
function cueBids(x: Ctx, M: number, above: Call, suits: number[], interest: Cond): Rule[] {
  if (!getSystem().controlBids) return [];
  const t = T.bidding.cues;
  return suits
    .map(s => bid(4, s))
    .filter(c => c > above && c < bid(4, M))
    .map(c => {
      const s = strainOf(c);
      return R(c, 'cue', t.cue(s, M), [cond(t.controlCond(s), h => control(h, s)), interest], {
        artificial: true, forcing: 'one', tag: 'cue', data: { suit: M, control: s },
      });
    });
}

/** The major our side agreed in a game-forcing auction (Jacoby 2NT, a splinter or a control bid), if any. */
function agreedMajor(x: Ctx): number | null {
  const r = x.records.find(r => x.ourSide(r.seat) && (r.meaning.tag === 'jacoby2nt' || r.meaning.tag === 'splinter' || r.meaning.tag === 'cue'));
  return r ? r.meaning.data!.suit : null;
}

/**
 * The major a control-bid slam try would agree: partner's last bid, natural in
 * a major below game, or a raise convention (Drury, a cue-bid raise) in one.
 */
export function tryMajor(x: Ctx): number | null {
  const pc = x.partnerCall(), rc = x.rhoCall();
  if (!pc || !isBid(pc.call) || (rc && rc.call !== PASS)) return null;
  const raise = pc.meaning.tag === 'drury' || pc.meaning.tag === 'cueRaise';
  if (pc.meaning.artificial && !raise) return null;
  let M = raise ? pc.meaning.data!.suit : strainOf(pc.call);
  // partner's new minor after opening a major: the control bid agrees the major
  if (!raise && M < HEARTS && x.opening()?.seat === x.partner) {
    const os = strainOf(x.opening()!.call);
    if (os >= HEARTS && os < NT && levelOf(x.opening()!.call) === 1) M = os;
  }
  return M >= HEARTS && M < NT && pc.call < bid(4, M) ? M : null;
}

/**
 * A slam try in a natural auction. Partner's last bid is a major I can raise
 * to game, and slam is on if partner has a little more than shown (`slamTry`):
 * instead of bidding game, show the cheapest control at the four level. The
 * control bid agrees partner's major; the dialogue then goes on as after
 * Jacoby 2NT (slamTryRules).
 */
export function controlBidTry(x: Ctx, slamTry: Cond): Rule[] {
  // not as a first response: there a four-level bid is a splinter or natural
  if (!getSystem().controlBids || agreedMajor(x) !== null || aceAskMade(x) || !x.actionsBy(x.seat).length) return [];
  const M = tryMajor(x), lb = x.lastBid();
  if (M === null || lb === null) return [];
  const t = T.bidding.cues;
  const P = x.shownBy(x.partner);
  const need = Math.max(2, 8 - P.len[M][0]);
  if (x.shownBy(x.seat).len[M][1] < need) return []; // I have denied the support
  const fit = cond(t.supportCond(need, M), h => h.len[M] >= need, s => { s.len[M] = [Math.max(need, s.len[M][0]), s.len[M][1]]; },
    h => T.bidding.conds.lenValue(h.len[M], M));
  // a suit our side has bid naturally stays natural
  const ours = x.ourSuits();
  return SIDE(M)
    .filter(s => !ours.includes(s))
    .map(s => bid(4, s))
    .filter(c => c > lb && c < bid(4, M))
    .map(c => {
      const s = strainOf(c);
      return R(c, 'cue', t.cueAgree(s, M), [fit, cond(t.controlCond(s), h => control(h, s)), slamTry], {
        artificial: true, forcing: 'one', tag: 'cue', data: { suit: M, control: s },
      });
    });
}

/**
 * The slam-try dialogue after a game-forcing major raise: responder's first
 * move after opener's Jacoby rebid, answering partner's cue bid, and respecting
 * partner's sign-off. Null when it does not apply.
 */
export function slamTryRules(x: Ctx): Rule[] | null {
  const M = agreedMajor(x);
  const pc = x.partnerCall();
  const rc = x.rhoCall();
  if (M === null || !pc || (rc && rc.call !== PASS) || aceAskMade(x)) return null;
  const t = T.bidding.cues;
  const game = bid(4, M);
  const P = x.shownBy(x.partner);
  const partnerShort = (s: number) => P.len[s][1] <= 1;
  const partnerCued = (s: number) => x.records.some(r => r.seat === x.partner && r.meaning.tag === 'cue' && r.meaning.data!.control === s);
  const points = (h: HandInfo) => {
    let p = h.len[M] >= 5 ? declarerPoints(h, M) : dummyPoints(h, M);
    for (const s of SIDE(M)) if (partnerShort(s)) p -= wasted(h, s);
    return p;
  };
  const combined = (h: HandInfo) => points(h) + x.partnerHcp().est + (SIDE(M).some(partnerShort) ? 2 : 0);
  const value = (h: HandInfo) => t.combinedValue(Math.round(combined(h)));
  const covered = (h: HandInfo) => SIDE(M).every(s => control(h, s) || partnerShort(s) || partnerCued(s));
  const coveredCond = cond(t.allControlled, covered);
  const mine = x.lastAction(x.seat);
  const myTag = mine?.meaning.tag;

  // partner cue-bid: show my cheapest control above it, or ask, or sign off
  if (pc.meaning.tag === 'cue' && pc.call < game) {
    const suits = SIDE(M).filter(s => !partnerShort(s) && !partnerCued(s));
    return [
      ...cueBids(x, M, pc.call, suits, cond(t.cooperate, h => combined(h) >= 30, undefined, value)),
      aceAsk(M, [cond(t.slamValues, h => combined(h) >= 31, undefined, value), coveredCond], {}, t.aceAsk),
      R(game, 'signOff', t.signOff, []),
    ];
  }
  // partner signed off after my cue bid: respect it unless I have far more than shown
  if (myTag === 'cue' && pc.call === game) {
    return [
      aceAsk(M, [cond(t.extraValues, h => combined(h) >= 34, undefined, value), coveredCond], {}, t.aceAsk),
      R(PASS, 'pass', t.respectSignOff, []),
    ];
  }
  // I splintered and opener signed off: done
  if (myTag === 'splinter' && pc.call === game) return [R(PASS, 'pass', T.bidding.splinters.passGame, [])];
  // responder after opener's Jacoby rebid below game
  if (myTag === 'jacoby2nt' && getSystem().controlBids && x.lastBid()! < game && x.actionsBy(x.seat).length === 1) {
    const suits = SIDE(M).filter(s => !partnerShort(s));
    return [
      ...cueBids(x, M, x.lastBid()!, suits, cond(t.slamInterest, h => combined(h) >= 30, undefined, value)),
      aceAsk(M, [cond(t.strongSlamValues, h => combined(h) >= 33, undefined, value), coveredCond], {}, t.aceAsk),
      R(game, 'signOff', t.signOff, []),
    ];
  }
  return null;
}

// ---------------------------------------------------------------------------
// Reverse Drury: a passed hand's 2♣ over partner's third- or fourth-seat 1♥/1♠

export function druryRaise(M: number): Rule[] {
  if (!getSystem().drury) return [];
  return [R(bid(2, CLUBS), 'drury', T.bidding.drury.raise(M), [lenC(M, 3), dpC(M, 10, 12)], {
    artificial: true, forcing: 'one', tag: 'drury', data: { suit: M },
  })];
}

export function openerAfterDrury(M: number): Rule[] {
  const t = T.bidding.drury;
  return [
    R(bid(4, M), 'game', t.game, [cond(t.gameCond, h => declarerPoints(h, M) >= 15, s => { s.hcp = [Math.max(s.hcp[0], 11), s.hcp[1]]; }, h => T.bidding.rebids.pointsValue(declarerPoints(h, M)))], { tag: 'druryReply', data: { suit: M } }),
    R(bid(2, M), 'minimum', t.minimum, [], { tag: 'druryReply', data: { suit: M }, shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 13)]; } }),
  ];
}

/** Drury bidder after opener's minimum 2M: the partscore is reached. */
export function afterDruryReply(x: Ctx): Rule[] | null {
  const pc = x.partnerCall();
  if (pc?.meaning.tag !== 'druryReply' || levelOf(pc.call) !== 2) return null;
  return [R(PASS, 'pass', T.bidding.drury.pass, [])];
}

// ---------------------------------------------------------------------------
// Texas transfers: 1NT/2NT – 4♦/4♥ = six-card major and game values

export function texasTransfers(minHcp: number): Rule[] {
  if (!getSystem().texas) return [];
  const t = T.bidding.texas;
  return [
    R(bid(4, HEARTS), 'texas', t.transfer(SPADES), [lenC(SPADES, 6), hcpC(minHcp), cond(T.bidding.responses.spadesAtLeastHearts, h => h.len[SPADES] >= h.len[HEARTS])], {
      artificial: true, forcing: 'one', tag: 'texas', data: { suit: SPADES },
    }),
    R(bid(4, DIAMONDS), 'texas', t.transfer(HEARTS), [lenC(HEARTS, 6), hcpC(minHcp), cond(T.bidding.responses.heartsLonger, h => h.len[HEARTS] > h.len[SPADES])], {
      artificial: true, forcing: 'one', tag: 'texas', data: { suit: HEARTS },
    }),
  ];
}

export function completeTexas(M: number): Rule[] {
  return [R(bid(4, M), 'completeTransfer', T.bidding.texas.complete(M), [], { tag: 'transferDone', data: { suit: M } })];
}

// ---------------------------------------------------------------------------
// New minor forcing: 1m – 1M – 1NT – 2(other minor)

export function newMinorForcing(m: number, M: number): Rule[] {
  if (!getSystem().newMinorForcing) return [];
  const t = T.bidding.nmf;
  const other = m === CLUBS ? DIAMONDS : CLUBS;
  return [R(bid(2, other), 'nmf', t.ask(M), [hcpC(11),
    // with six cards in the major responder simply rebids it (or bids game)
    cond(M === SPADES ? t.askCondSpades : t.askCond(M), h => h.len[M] === 5 || (M === SPADES && h.len[SPADES] <= 5 && h.len[HEARTS] >= 4), undefined, h => T.bidding.conds.lengths(h.len, [SPADES, HEARTS])),
  ], { artificial: true, forcing: 'one', tag: 'nmf', data: { suit: M } })];
}

/** Opener answers new minor forcing: three-card support, four hearts, or neither; minimum or maximum. */
export function nmfReplies(M: number): Rule[] {
  const t = T.bidding.nmf;
  const reply = (fit: number, max: number) => ({ tag: 'nmfReply', data: { suit: M, fit, max } });
  const noFit: (s: { len: [number, number][] }) => void = s => {
    s.len[M] = [s.len[M][0], Math.min(2, s.len[M][1])];
    if (M === SPADES) s.len[HEARTS] = [s.len[HEARTS][0], Math.min(3, s.len[HEARTS][1])];
  };
  const rules: Rule[] = [
    R(bid(3, M), 'nmfSupport', t.supportMax(M), [lenC(M, 3), hcpC(14)], reply(M, 1)),
    R(bid(2, M), 'nmfSupport', t.supportMin(M), [lenC(M, 3), hcpC(0, 13)], reply(M, 0)),
  ];
  if (M === SPADES) {
    rules.push(R(bid(3, HEARTS), 'nmfHearts', t.heartsMax, [lenC(HEARTS, 4), hcpC(14)], reply(HEARTS, 1)));
    rules.push(R(bid(2, HEARTS), 'nmfHearts', t.heartsMin, [lenC(HEARTS, 4), hcpC(0, 13)], reply(HEARTS, 0)));
  }
  rules.push(R(bid(3, NT), 'nmfNoFit', t.noFitMax(M), [hcpC(14)], { ...reply(-1, 1), shows: noFit }));
  rules.push(R(bid(2, NT), 'nmfNoFit', t.noFitMin(M), [], { ...reply(-1, 0), shows: s => { noFit(s); s.hcp = [s.hcp[0], Math.min(s.hcp[1], 13)]; } }));
  return rules;
}

/** Responder places the contract after opener's answer to new minor forcing. */
export function afterNmfReply(x: Ctx): Rule[] | null {
  const pc = x.partnerCall();
  if (pc?.meaning.tag !== 'nmfReply' || x.myTag() !== 'nmf') return null;
  const t = T.bidding.nmf;
  const { suit: M, fit, max } = pc.meaning.data!;
  const rules: Rule[] = [];
  if (fit >= 0) {
    const need = fit === M ? 5 : 4;
    const fitC = () => cond(t.fitCond(fit), h => h.len[fit] >= need, undefined, h => T.bidding.conds.lenValue(h.len[fit], fit));
    rules.push(R(bid(4, fit), 'game', t.gameInFit(fit), [fitC(), hcpC(max ? 11 : 13)]));
    if (!max) rules.push(R(bid(3, fit), 'invitation', t.inviteInFit(fit), [fitC(), hcpC(11, 12)], { tag: 'invite' }));
  }
  rules.push(R(bid(3, NT), ['nt', 3], t.threeNt, [hcpC(max ? 11 : 13)]));
  rules.push(R(bid(2, NT), ['nt', 2], t.twoNt, [hcpC(11, 12)]));
  rules.push(R(PASS, 'pass', t.pass, []));
  return rules.filter(r => r.call === PASS || r.call > pc.call);
}

// ---------------------------------------------------------------------------
// Fourth suit forcing: responder bids the fourth suit, artificial and game forcing

/** Opener's suits a and b, responder's suit y: the fourth suit at the two or three level. */
export function fourthSuitForcing(x: Ctx, a: number, y: number, b: number): Rule[] {
  if (!getSystem().fourthSuitForcing) return [];
  const t = T.bidding.fsf;
  const f = [CLUBS, DIAMONDS, HEARTS, SPADES].find(s => s !== a && s !== y && s !== b)!;
  const c = x.cheapest(f);
  if (c === null || levelOf(c) < 2 || levelOf(c) > 3) return [];
  return [R(c, 'fsf', t.ask(f), [hcpC(13),
    // with six cards in a suit of your own, rebid it instead
    cond(b >= HEARTS ? t.askCondMajor(b, f) : t.askCond(f), h => !(b >= HEARTS && h.len[b] >= 4) && (!hasStopper(h, f) || h.len[y] === 5) && h.shape[0] <= 5),
    cond(t.noMajorFit(a), h => !(a >= HEARTS && h.len[a] >= 3)),
  ], { artificial: true, forcing: 'game', tag: 'fsf', data: { suit: f, a, b, y } })];
}

/** Opener answers fourth suit forcing: support, a stopper, or more length. */
export function fsfReplies(x: Ctx, fsf: CallRecord): Rule[] {
  const t = T.bidding.fsf;
  const { suit: f, a, b, y } = fsf.meaning.data!;
  const extra = { tag: 'fsfReply', data: { suit: f } };
  const rules: Rule[] = [];
  const at = (s: number) => x.cheapest(s);
  const ys = at(y), nt = at(NT), bs = at(b), as = at(a);
  if (ys !== null) rules.push(R(ys, 'raise', t.support(y), [lenC(y, 3)], extra));
  if (nt !== null) rules.push(R(nt, 'notrump', t.notrump(f), [cond(T.bidding.conds.stopper(f), h => hasStopper(h, f))], extra));
  if (bs !== null) rules.push(R(bs, 'rebidSuit', t.secondSuit(b), [lenC(b, 5)], extra));
  if (as !== null) {
    rules.push(R(as, 'rebidSuit', t.firstSuit(a), [lenC(a, a >= HEARTS ? 6 : 5)], extra));
    rules.push(R(as, 'rebidSuit', t.fallback, [], extra));
  }
  return rules;
}

/** Is this record a natural bid in a suit? */
export const naturalSuitBid = (r: CallRecord | undefined): r is CallRecord => !!r && isBid(r.call) && strainOf(r.call) < NT && !r.meaning.artificial;
