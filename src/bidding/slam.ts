// Slam conventions: Blackwood or Roman Key Card Blackwood (with the queen and
// king asks), and Gerber.

import { bid, PASS, levelOf, strainOf, type Call } from '../core/auction';
import { NT, CLUBS, DIAMONDS, HEARTS, SPADES } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { T } from '../i18n';
import type { Ctx, CallRecord } from './context';
import { getSystem } from './config';
import { R, cond, ruleName, type Rule, type Cond, type Shown } from './types';

function stepReplies(base: number[], what: 'aces' | 'kings', counter: (h: { aces: number; kings: number }) => number, tag: string): Rule[] {
  const t = T.bidding.slam;
  return base.map((call, i) => {
    const label = ruleName([what, i]);
    return R(call, [what, i], t.stepReply(label), [
      cond(label, h => {
        const n = counter(h);
        return i === 0 ? n === 0 || n === 4 : n === i;
      }, undefined, h => t.youHave(counter(h))),
    ], { artificial: true, tag, data: { step: i } });
  });
}

/**
 * 4NT asking for aces once a suit is agreed: Roman Key Card Blackwood when the
 * system plays it, plain Blackwood otherwise. `desc` replaces the standard explanation.
 */
export function aceAsk(trump: number, conds: Cond[], extra: Partial<Rule> = {}, desc?: string): Rule {
  const rk = getSystem().rkcb;
  return R(bid(4, NT), rk ? 'rkcb' : 'blackwood', desc ?? (rk ? T.bidding.rkcb.ask : T.bidding.generic.blackwood), conds, {
    artificial: true, forcing: 'one', tag: rk ? 'rkcb' : 'blackwood', data: { suit: trump }, ...extra,
  });
}

// ---------------------------------------------------------------------------
// Roman Key Card Blackwood 1430: five key cards (four aces and the trump king)

const keyCards = (h: HandInfo, trump: number) => h.aces + (h.ranks[trump].includes(13) ? 1 : 0);
const hasQueen = (h: HandInfo, trump: number) => h.ranks[trump].includes(12);
const sideKings = (h: HandInfo, trump: number) => h.kings - (h.ranks[trump].includes(13) ? 1 : 0);

/** The two counts a key-card reply can mean (5♣ = 1 or 4, 5♦ = 0 or 3, 5♥/5♠ = 2). */
const REPLY_COUNTS = [[1, 4], [0, 3], [2, 2], [2, 2]];

/**
 * Partner's key cards from an ambiguous reply (5♣ = 1 or 4, 5♦ = 0 or 3), as a
 * player works it out: a count that does not fit is ruled out, either because
 * partner's shown strength could not be made up without the higher count (the
 * high cards left outside my hand are mostly key cards, so partner would need
 * nearly all the others), or because partner is
 * too weak to hold it. Otherwise the lower count, unless that leaves the
 * partnership with fewer than two key cards or partner has shown plenty.
 */
function partnerKeyCards(step: number, h: HandInfo, trump: number, partner: Shown): number {
  const [lo, hi] = REPLY_COUNTS[step];
  const mine = keyCards(h, trump);
  if (mine + hi > 5) return lo;
  const kingOut = h.ranks[trump].includes(13) ? 0 : 3;
  const otherHcpOut = 40 - h.hcp - (4 - h.aces) * 4 - kingOut; // high cards outside my hand that are not key cards
  // (or could only just: partner would need nearly every other high card left)
  if (partner.hcp[0] > otherHcpOut - 2 + 4 * lo) return hi;
  if (partner.hcp[1] < 4 * hi - (kingOut ? 1 : 0)) return lo;
  const est = partner.hcp[1] - partner.hcp[0] > 12 ? partner.hcp[0] + 2 : (partner.hcp[0] + partner.hcp[1]) / 2;
  return mine + lo < 2 || est >= 4 * hi + 2 ? hi : lo;
}

function keyCardReplies(trump: number): Rule[] {
  const t = T.bidding.rkcb;
  const tests: ((h: HandInfo) => boolean)[] = [
    h => keyCards(h, trump) === 1 || keyCards(h, trump) >= 4,
    h => keyCards(h, trump) === 0 || keyCards(h, trump) === 3,
    h => keyCards(h, trump) === 2 && !hasQueen(h, trump),
    h => keyCards(h, trump) === 2 && hasQueen(h, trump),
  ];
  return [CLUBS, DIAMONDS, HEARTS, SPADES].map((s, i) => {
    const label = ruleName(['keyCards', i]);
    return R(bid(5, s), ['keyCards', i], t.reply(label), [
      cond(label, tests[i], undefined, h => t.keyCardsValue(keyCards(h, trump), hasQueen(h, trump))),
    ], { artificial: true, tag: 'rkcbReply', data: { step: i, suit: trump } });
  });
}

/** The queen ask after a 5♣/5♦ reply: the next step that is not the trump suit. */
function queenAskCall(reply: Call, trump: number): Call {
  return strainOf(reply + 1) === trump ? reply + 2 : reply + 1;
}

/** The cheapest bid in the trump suit above a call. */
function cheapestTrump(above: Call, trump: number): Call {
  return bid(5, trump) > above ? bid(5, trump) : bid(6, trump);
}

function queenReplies(ask: Call, trump: number): Rule[] {
  const t = T.bidding.rkcb;
  const none = cheapestTrump(ask, trump);
  const yes = levelOf(none) === 5 ? bid(6, trump) : bid(5, NT);
  return [
    R(yes, 'trumpQueen', t.queenYes, [cond(t.queenCond, h => hasQueen(h, trump))], { artificial: strainOf(yes) === NT, tag: 'queenReply', data: { suit: trump, queen: 1 } }),
    R(none, 'noTrumpQueen', t.queenNo, [], { tag: 'queenReply', data: { suit: trump, queen: 0 } }),
  ];
}

function sideKingReplies(trump: number): Rule[] {
  const t = T.bidding.rkcb;
  return [CLUBS, DIAMONDS, HEARTS, SPADES].map((s, i) => {
    const label = ruleName(['sideKings', i]);
    return R(bid(6, s), ['sideKings', i], t.reply(label), [
      cond(label, h => Math.min(3, sideKings(h, trump)) === i, undefined, h => T.bidding.slam.youHave(sideKings(h, trump))),
    ], { artificial: true, tag: 'kingReply', data: { step: i, rkcb: 1 } });
  });
}

/** Partner's key-card reply in this auction (the last one). */
function lastKeyCardReply(x: Ctx): CallRecord | undefined {
  return x.records.filter(r => r.seat === x.partner && r.meaning.tag === 'rkcbReply').at(-1);
}

/**
 * Tricks the asker can count once every key card and the trump queen are known
 * to be ours: the trump suit when its top cards cover the opponents' trumps,
 * and in each side suit the run of top cards from the ace down that the two
 * hands hold between them (every ace is ours; the rest of the run must be in
 * my hand), up to my length in the suit, or one for partner's ace where I am void.
 */
export function countedTricks(h: HandInfo, trump: number, partner: Shown): number {
  const run = (s: number, known: number[]) => {
    let n = 0;
    for (let rank = 14; rank >= 2 && (known.includes(rank) || h.ranks[s].includes(rank)); rank--) n++;
    return n;
  };
  const fit = h.len[trump] + partner.len[trump][0];
  const trumpRun = run(trump, [14, 13, 12]);
  const solid = trumpRun >= 4 || (trumpRun >= 3 && fit >= 9) || trumpRun >= 13 - fit;
  let tricks = solid ? Math.max(h.len[trump], partner.len[trump][0]) : trumpRun;
  for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
    if (s !== trump) tricks += Math.min(run(s, [14]), Math.max(1, h.len[s]));
  }
  return tricks;
}

/** A grand slam the asker can count: every key card and the trump queen held, and thirteen tricks. */
function countedGrand(trump: number, ok: (h: HandInfo) => boolean, partner: Shown): Rule {
  const t = T.bidding.rkcb;
  return R(bid(7, trump), 'grandSlam', t.grandCounted, [
    cond(t.grandCountedCond, h => ok(h) && countedTricks(h, trump, partner) >= 13, undefined, h => t.tricksValue(countedTricks(h, trump, partner))),
  ]);
}

/** The asker's next bid after the key-card reply. */
function afterKeyCardReply(x: Ctx, trump: number, reply: CallRecord): Rule[] {
  const t = T.bidding.rkcb;
  const step = reply.meaning.data!.step;
  const r = reply.call;
  const five = bid(5, trump), six = bid(6, trump);
  const P = x.shownBy(x.partner);
  const missing = (h: HandInfo) => 5 - keyCards(h, trump) - partnerKeyCards(step, h, trump, P);
  const queenMissing = (h: HandInfo) => step === 2 && !hasQueen(h, trump);
  const queenUnknown = (h: HandInfo) => step <= 1 && !hasQueen(h, trump);
  const haveQueen = (h: HandInfo) => hasQueen(h, trump) || step === 3;
  const missingValue = (h: HandInfo) => t.missingValue(missing(h));
  const rules: Rule[] = [];

  rules.push(countedGrand(trump, h => missing(h) === 0 && haveQueen(h), P));
  rules.push(R(bid(5, NT), 'kingAsk', t.kingAsk, [
    cond(t.kingAskCond, (h, xx) => missing(h) === 0 && haveQueen(h) && h.hcp + xx.partnerHcp().est >= 35, undefined, missingValue),
  ], { artificial: true, forcing: 'one', tag: 'kingask', data: { suit: trump, rkcb: 1 } }));

  if (step <= 1) {
    const ask = queenAskCall(r, trump);
    const noQueenAtFive = cheapestTrump(ask, trump) === five;
    if (ask < bid(5, NT)) {
      rules.push(R(ask, 'queenAsk', t.queenAsk, [
        cond(t.queenAskCond, h => queenUnknown(h) && (missing(h) === 0 || (missing(h) === 1 && noQueenAtFive)), undefined, missingValue),
      ], { artificial: true, forcing: 'one', tag: 'queenAsk', data: { suit: trump } }));
    }
  }
  if (six > r) {
    rules.push(R(six, 'smallSlam', t.smallSlam, [
      cond(t.smallSlamCond, h => missing(h) <= 1 && !(missing(h) === 1 && queenMissing(h) && five > r), undefined, missingValue),
    ]));
  }
  const stopCond = cond(t.stopCond, h => missing(h) >= 2 || (missing(h) === 1 && queenMissing(h)), undefined, missingValue);
  if (five > r) rules.push(R(five, 'signOff', t.signOff, [stopCond]));
  else if (strainOf(r) === trump) rules.push(R(PASS, 'signOff', t.signOffPass, [stopCond]));
  if (six > r) rules.push(R(six, 'smallSlam', T.bidding.slam.cannotStop, []));
  rules.push(R(PASS, 'pass', T.bidding.slam.stopHere, []));
  return rules;
}

/** The asker's next bid after the queen reply. */
function afterQueenReply(x: Ctx, trump: number, reply: CallRecord): Rule[] {
  const t = T.bidding.rkcb;
  const kcReply = lastKeyCardReply(x);
  const step = kcReply?.meaning.data?.step ?? 0;
  const queen = reply.meaning.data?.queen === 1;
  const r = reply.call;
  const six = bid(6, trump), seven = bid(7, trump);
  const P = x.shownBy(x.partner);
  const missing = (h: HandInfo) => 5 - keyCards(h, trump) - partnerKeyCards(step, h, trump, P);
  const rules: Rule[] = [];
  if (queen && seven > r) {
    rules.push(countedGrand(trump, h => missing(h) === 0, P));
    rules.push(R(seven, 'grandSlam', t.grandSlam, [cond(t.grandSlamCond, (h, xx) => missing(h) === 0 && h.hcp + xx.partnerHcp().est >= 36)]));
  }
  if (six > r) rules.push(R(six, 'smallSlam', queen ? t.smallSlamQueen : t.smallSlamNoQueen, [cond(t.smallSlamCond, h => missing(h) <= (queen ? 1 : 0))]));
  rules.push(R(PASS, 'pass', T.bidding.slam.stopHere, []));
  return rules;
}

/** The asker's next bid after partner shows side kings. */
function afterSideKings(x: Ctx, trump: number, reply: CallRecord): Rule[] {
  const t = T.bidding.rkcb;
  const n = reply.meaning.data!.step;
  const r = reply.call;
  const six = bid(6, trump), seven = bid(7, trump);
  const rules: Rule[] = [];
  if (seven > r) rules.push(R(seven, 'grandSlam', t.grandSlam, [cond(t.allKingsCond, (h, xx) => sideKings(h, trump) + n >= 3 && h.hcp + xx.partnerHcp().est >= 36)]));
  if (six > r) rules.push(R(six, 'smallSlam', T.bidding.slam.kingMissing, []));
  else if (bid(6, NT) > r) rules.push(R(bid(6, NT), 'smallSlam', T.bidding.slam.settleForSix, []));
  else if (seven > r) rules.push(R(seven, 'grandSlam', T.bidding.slam.allKings, []));
  rules.push(R(PASS, 'pass', T.bidding.slam.stopHere, []));
  return rules;
}

// ---------------------------------------------------------------------------

export function conventionReplies(x: Ctx): Rule[] | null {
  const t = T.bidding.slam;
  const pc = x.partnerCall();
  const rc = x.rhoCall();
  const rhoQuiet = !rc || rc.call === PASS;
  if (pc && rhoQuiet) {
    const tag = pc.meaning.tag;
    const data = pc.meaning.data;
    if (tag === 'rkcb') return keyCardReplies(data!.suit);
    if (tag === 'queenAsk') return queenReplies(pc.call, data!.suit);
    if (tag === 'kingask' && data?.rkcb) return sideKingReplies(data.suit);
    if (tag === 'blackwood') return stepReplies([bid(5, CLUBS), bid(5, DIAMONDS), bid(5, HEARTS), bid(5, SPADES)], 'aces', h => h.aces, 'aceReply');
    if (tag === 'kingask') {
      const r = stepReplies([bid(6, CLUBS), bid(6, DIAMONDS), bid(6, HEARTS), bid(6, SPADES)], 'kings', h => h.kings, 'kingReply');
      r[0].conds = [cond(t.noKings, h => h.kings === 0)];
      r.push(R(bid(6, NT), 'fourKings', t.fourKings, [cond(t.fourKingsCond, h => h.kings === 4)], { artificial: true, tag: 'kingReply', data: { step: 4 } }));
      return r;
    }
    if (tag === 'gerber') return stepReplies([bid(4, DIAMONDS), bid(4, HEARTS), bid(4, SPADES), bid(4, NT)], 'aces', h => h.aces, 'gerberReply');
  }
  // asker's continuation
  const mine = x.lastAction(x.seat);
  if (pc && mine) {
    const mt = mine.meaning.tag, pt = pc.meaning.tag;
    const trump = mine.meaning.data?.suit ?? NT;
    if (mt === 'rkcb' && pt === 'rkcbReply') return afterKeyCardReply(x, trump, pc);
    if (mt === 'queenAsk' && pt === 'queenReply') return afterQueenReply(x, trump, pc);
    if (mt === 'kingask' && mine.meaning.data?.rkcb && pt === 'kingReply') return afterSideKings(x, trump, pc);
    // the asker is the captain: once they place the contract, the replier passes
    const answered = mt === 'rkcbReply' || mt === 'queenReply' || (mt === 'kingReply' && mine.meaning.data?.rkcb);
    if (answered && rhoQuiet) return [R(PASS, 'pass', T.bidding.rkcb.captain, [])];
  }
  if (pc && mine && (mine.meaning.tag === 'blackwood' || mine.meaning.tag === 'kingask') && (pc.meaning.tag === 'aceReply' || pc.meaning.tag === 'kingReply')) {
    const trump = mine.meaning.data?.suit ?? NT;
    const step = pc.meaning.data!.step;
    const reply = pc.call;
    const six = bid(6, trump), seven = bid(7, trump);
    const sixOk = six > reply, fiveOk = bid(5, trump) > reply;
    if (pc.meaning.tag === 'aceReply') {
      const partnerAces = (h: { aces: number }) => (step === 0 ? (h.aces === 0 ? 4 : 0) : step);
      const missing = (h: { aces: number }) => 4 - h.aces - partnerAces(h);
      const rules: Rule[] = [];
      rules.push(R(bid(5, NT), 'kingAsk', t.kingAsk, [cond(t.kingAskCond, (h, xx) => missing(h) === 0 && h.hcp + xx.partnerHcp().est >= 35)], { artificial: true, tag: 'kingask', data: { suit: trump } }));
      if (sixOk) rules.push(R(six, 'smallSlam', t.smallSlam, [cond(t.oneAceMissing, h => missing(h) <= 1, undefined, h => t.acesMissing(missing(h)))]));
      if (fiveOk) rules.push(R(bid(5, trump), 'signOff', t.signOff, [cond(t.twoAcesMissing, h => missing(h) >= 2)]));
      else if (strainOf(reply) === trump) rules.push(R(PASS, 'signOff', t.signOffPass, [cond(t.twoAcesMissing, h => missing(h) >= 2)]));
      if (sixOk) rules.push(R(six, 'smallSlam', t.cannotStop, []));
      rules.push(R(PASS, 'pass', t.stopHere, []));
      return rules;
    }
    const partnerKings = step;
    const rules: Rule[] = [];
    if (seven > reply) rules.push(R(seven, 'grandSlam', t.grandSlam, [cond(t.grandSlamCond, (h, xx) => h.kings + partnerKings >= 4 && h.hcp + xx.partnerHcp().est >= 36)]));
    if (sixOk) rules.push(R(six, 'smallSlam', t.kingMissing, []));
    else if (bid(6, NT) > reply) rules.push(R(bid(6, NT), 'smallSlam', t.settleForSix, []));
    else if (seven > reply) rules.push(R(seven, 'grandSlam', t.allKings, []));
    rules.push(R(PASS, 'pass', t.stopHere, []));
    return rules;
  }
  return null;
}

/** Is a 4NT bid by our side ace-asking? (a suit has been bid by our side and no NT opening/rebid by partner just now) */
export function blackwoodTrump(x: Ctx): number | null {
  const ourSuits = x.ourSuits();
  const pa = x.lastAction(x.partner);
  if (pa && strainOf(pa.call) === NT && levelOf(pa.call) <= 3 && !pa.meaning.artificial) return null; // quantitative
  if (!ourSuits.length) return null;
  // the most recent suit bid by our side that both have shown, else partner's last suit
  const recs = x.records.filter(r => x.ourSide(r.seat) && r.call >= 3 && !r.meaning.artificial && strainOf(r.call) < 4);
  return recs.length ? strainOf(recs[recs.length - 1].call) : ourSuits[0];
}

/** Has our side already asked for aces or key cards in this auction? */
export function aceAskMade(x: Ctx): boolean {
  return x.records.some(r => x.ourSide(r.seat) && (r.meaning.tag === 'blackwood' || r.meaning.tag === 'rkcb'));
}
