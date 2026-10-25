// Situation dispatch: which rules apply at this point of the auction.

import { type Call, PASS, DOUBLE, REDOUBLE, isBid, levelOf, strainOf, bid, callName } from '../core/auction';
import { NT, CLUBS, DIAMONDS, HEARTS } from '../core/cards';
import { T } from '../i18n';
import type { Ctx, CallRecord, Meaning } from './context';
import { type Rule, type Shown, unknownShown, unionShown, R, hcpC, cond } from './types';
import { openingRules } from './openings';
import { responsesToOneSuit, responsesTo1NT, responsesTo2NT, responsesTo2C, responsesToWeakTwo, responsesToPreempt } from './responses';
import {
  openerRebidOneSuit, openerAfterNT, responderAfterNTConvention, openerAfterNTContinuation,
  openerAfter2C, openerAfterFeatureAsk, openerAfterWeakTwoNewSuit, responderAfterInvite, responderAfter1ntRebid,
} from './rebids';
import {
  overcallRules, advanceRules, contestedResponse, openerAfterNegDouble, doublerRebid, overcallerAfterCueRaise, openerReopening, afterReopeningDouble, openerAfterRedouble, doublerAfterRedouble,
  michaelsMinorReply, advancerAfterCueRaiseMin,
} from './competitive';
import { conventionReplies, blackwoodTrump } from './slam';
import { getSystem } from './config';
import { genericRules, slamRules, afterMinorSlamTry } from './generic';
import {
  slamTryRules, afterDruryReply, newMinorForcing, nmfReplies, afterNmfReply, fourthSuitForcing, fsfReplies, naturalSuitBid,
} from './conventions';

const NT_CONVENTIONS = new Set(['stayman', 'transfer', 'minorTransfer']);

function specificRules(x: Ctx): Rule[] {
  const op = x.opening()!;
  const pc = x.partnerCall();
  const rc = x.rhoCall();
  const rhoQuiet = !rc || rc.call === PASS;
  const myActs = x.actionsBy(x.seat);
  const pActs = x.actionsBy(x.partner);

  if (pc && pc.meaning.tag === 'cueRaise' && myActs.length >= 1 && !x.ourSide(op.seat)) {
    return overcallerAfterCueRaise(x, pc);
  }
  if (pc && rhoQuiet && pc.meaning.tag === 'invite') {
    const st = strainOf(pc.call);
    return responderAfterInvite(x, st);
  }
  if (pc && rhoQuiet && pc.meaning.tag === 'quant' && !(op.seat === x.seat && strainOf(op.call) === NT && myActs.length === 1)) {
    const mid = (x.shownBy(x.seat).hcp[0] + Math.min(x.shownBy(x.seat).hcp[1], x.shownBy(x.seat).hcp[0] + 6)) / 2;
    return [
      R(bid(6, NT), 'accept', T.bidding.slam.acceptQuant, [hcpC(Math.ceil(mid))]),
      R(PASS, 'decline', T.bidding.slam.declineQuant, []),
    ];
  }

  if (x.ourSide(op.seat)) {
    const os = strainOf(op.call), ol = levelOf(op.call);
    const interfered = x.records.some(r => r.index > op.index && !x.ourSide(r.seat) && r.call !== PASS);
    const myCallsSinceOpening = x.callsBy(x.seat).filter(r => r.index > op.index).length;
    const followUp = slamTryRules(x) ?? afterNmfReply(x);
    if (followUp) return followUp;
    if (pc && rhoQuiet && pc.meaning.tag === 'reopenX' && op.seat === x.partner) return afterReopeningDouble(x, pc);
    if (pc && rhoQuiet && pc.meaning.tag === 'minorTry') return afterMinorSlamTry(x, pc.meaning.data!.suit);
    if (op.seat === x.partner && myActs.length === 0 && myCallsSinceOpening === 0) {
      if (!interfered) {
        if (op.meaning.tag === 'strong2c') return responsesTo2C(x);
        if (op.meaning.tag === 'weak2') return responsesToWeakTwo(x, os);
        if (op.meaning.tag === 'preempt') return responsesToPreempt(x, ol, os);
        if (ol === 1 && os < NT) return responsesToOneSuit(x, os);
        if (ol === 1 && os === NT) return responsesTo1NT(x);
        if (ol === 2 && os === NT) return responsesTo2NT(x);
        return [];
      }
      if (ol === 1) return contestedResponse(x, op);
      return [];
    }
    if (op.seat === x.partner && myActs.length === 1 && rhoQuiet) {
      const myFirst = myActs[0];
      const reply = pActs[1];
      if (reply && reply.index > myFirst.index && strainOf(op.call) === NT && NT_CONVENTIONS.has(myFirst.meaning.tag ?? '')) {
        return responderAfterNTConvention(x, ol, myFirst, reply);
      }
      if (op.meaning.tag === 'strong2c' && myFirst.meaning.tag === 'waiting' && reply?.meaning.tag === 'nt2c') return responsesTo2NT(x);
      if (myFirst.meaning.tag === 'drury') return afterDruryReply(x) ?? [];
      if (reply && reply.index > myFirst.index && !interfered && ol === 1 && os < NT && naturalSuitBid(myFirst)) {
        const y = strainOf(myFirst.call);
        // 1♣/1♦ – 1♥/1♠ – 1NT: new minor forcing; and after any 1NT rebid, notrump with a balanced hand
        if (levelOf(myFirst.call) === 1 && reply.call === bid(1, NT)) {
          return [...(os <= DIAMONDS && y >= HEARTS ? newMinorForcing(os, y) : []), ...responderAfter1ntRebid()];
        }
        // three suits bid naturally: fourth suit forcing
        if (naturalSuitBid(reply) && y !== os && strainOf(reply.call) !== os && strainOf(reply.call) !== y) return fourthSuitForcing(x, os, y, strainOf(reply.call));
      }
    }
    if (op.seat === x.seat && myActs.length === 1) {
      const resp = pActs[0];
      if (!resp) return openerReopening(x);
      if (resp.meaning.tag === 'negX') return openerAfterNegDouble(x, resp, op);
      if (resp.meaning.tag === 'redouble' && rhoQuiet) return openerAfterRedouble(x, op);
      if (!rhoQuiet && !interfered) return [];
      if (op.meaning.tag === 'strong2c') return openerAfter2C(x, resp);
      if (op.meaning.tag === 'weak2' && resp.meaning.tag === 'featureAsk') return openerAfterFeatureAsk(x, os);
      if (op.meaning.tag === 'weak2' && resp.meaning.tag === 'w2new' && rhoQuiet) return openerAfterWeakTwoNewSuit(x, os, resp.meaning.data!.suit);
      if (ol === 1 && os < NT) return openerRebidOneSuit(x, os, resp);
      if (os === NT && ol <= 2) return openerAfterNT(x, ol, resp);
      return [];
    }
    // 2♣ – 2♦ – 2NT: Stayman and transfers continue as over a 2NT opening
    const over2c = op.meaning.tag === 'strong2c' && pActs.concat(myActs).some(r => r.meaning.tag === 'nt2c') && rhoQuiet;
    if (over2c && op.seat === x.partner && myActs.length === 2 && myActs[0].meaning.tag === 'waiting' && NT_CONVENTIONS.has(myActs[1].meaning.tag ?? '')) {
      const reply = pActs[2];
      if (reply && reply.index > myActs[1].index) return responderAfterNTConvention(x, 2, myActs[1], reply);
    }
    if (over2c && op.seat === x.seat && myActs.length === 3 && myActs[1].meaning.tag === 'nt2c' && NT_CONVENTIONS.has(pActs[1]?.meaning.tag ?? '') && pActs[2]) {
      return openerAfterNTContinuation(x, 2, pActs[1], pActs[2]);
    }
    if (op.seat === x.seat && myActs.length === 2 && rhoQuiet && pc) {
      if (pc.meaning.tag === 'nmf') return nmfReplies(pc.meaning.data!.suit);
      if (pc.meaning.tag === 'fsf') return fsfReplies(x, pc);
      // 2♣ – 2♦ – 2NT: answer Stayman, transfers and Texas as over a 2NT opening
      const conv = pc.meaning.tag ?? '';
      if (op.meaning.tag === 'strong2c' && myActs[1].meaning.tag === 'nt2c' && (NT_CONVENTIONS.has(conv) || conv === 'texas')) return openerAfterNT(x, 2, pc);
    }
    if (op.seat === x.seat && myActs.length === 2 && os === NT && ol <= 2 && rhoQuiet) {
      const conv = pActs[0], cont = pActs[1];
      if (conv && cont && NT_CONVENTIONS.has(conv.meaning.tag ?? '')) return openerAfterNTContinuation(x, ol, conv, cont);
    }
    return [];
  }

  // the opponents opened
  if (myActs.length === 0 && pActs.length === 0) return overcallRules(x);
  if (myActs.length === 0 && pActs.length >= 1) return advanceRules(x, pActs[pActs.length - 1]);
  // our cue-bid raise of partner's overcall, and partner showed a minimum
  if (myActs.length === 1 && myActs[0].meaning.tag === 'cueRaise' && pc?.meaning.tag === 'cueRaiseMin' && rhoQuiet) return advancerAfterCueRaiseMin(x, pc.meaning.data!.suit);
  // our Michaels cue bid (the other major and a minor), and partner's 2NT asks for the minor
  if (myActs.length === 1 && myActs[0].meaning.tag === 'michaels' && pc?.meaning.tag === 'askMinor' && pActs.length === 1) return michaelsMinorReply(x);
  if (myActs.length === 1 && myActs[0].meaning.tag === 'takeoutX' && pActs.length === 1 && pActs[0].index > myActs[0].index && x.partnerCall()?.index === pActs[0].index) {
    return doublerRebid(x, pActs[0]);
  }
  // our takeout double was redoubled and partner passed: the doubler must pick a suit
  if (myActs.length === 1 && myActs[0].meaning.tag === 'takeoutX' && pActs.length === 0 && x.auction.doubleStatus() === 2 && rhoQuiet) {
    return doublerAfterRedouble(x);
  }
  return [];
}

/** A natural game contract (not a slam). */
const naturalGame = (r: Rule) => {
  if (r.artificial || !isBid(r.call)) return false;
  const l = levelOf(r.call), s = strainOf(r.call);
  return l < 6 && ((s === NT && l >= 3) || (s >= HEARTS && s < NT && l >= 4) || l >= 5);
};

/**
 * Should the slam decisions of general judgment come before the specific
 * rules? When the system's own answer here is to sign off in game, with no
 * slam call of its own, and partner's last call was natural (or a raise),
 * a hand with slam values asks for key cards or tries for slam instead.
 */
function slamBeforeSignOff(x: Ctx, specific: Rule[]): boolean {
  if (!x.actionsBy(x.seat).length) return false; // a first response has its own slam bids
  if (!specific.some(naturalGame) || specific.some(r => isBid(r.call) && (levelOf(r.call) >= 6 || r.call === bid(4, NT)))) return false;
  const pc = x.partnerCall(), rc = x.rhoCall();
  if (!pc || !isBid(pc.call) || (rc && rc.call !== PASS)) return false;
  return !pc.meaning.artificial || pc.meaning.tag === 'drury' || pc.meaning.tag === 'cueRaise';
}

/** All rules for the seat to call, specific system rules first, then general judgment. */
export function rulesFor(x: Ctx): Rule[] {
  const conv = conventionReplies(x);
  if (conv) return conv;
  if (!x.opening()) return openingRules(x);
  const legal = (r: Rule) => x.isLegal(r.call);
  const specific = specificRules(x).filter(legal);
  if (slamBeforeSignOff(x, specific)) return [...slamRules(x).filter(legal), ...specific, ...genericRules(x, true).filter(legal)];
  return [...specific, ...genericRules(x).filter(legal)];
}

// ---------------------------------------------------------------------------
// Meanings

function shownOf(rule: Rule): Shown {
  const s = unknownShown();
  for (const c of rule.conds) c.apply?.(s);
  rule.shows?.(s);
  return s;
}

export function meaningFromRules(rules: Rule[]): Meaning {
  const first = rules[0];
  let shown = shownOf(first);
  const sameTag = (first.tag !== undefined && rules.every(r => r.tag === first.tag)) || rules.every(r => r.family === first.family);
  for (const r of rules.slice(1)) {
    const o = shownOf(r);
    if (sameTag) shown.hcp = [Math.min(shown.hcp[0], o.hcp[0]), Math.max(shown.hcp[1], o.hcp[1])];
    else shown = unionShown(shown, o);
  }
  const names = [...new Map(rules.map(r => [r.key, r.name])).values()]; // one label per rule key
  return {
    name: names.slice(0, 2).join(' / '),
    desc: first.desc,
    shown,
    forcing: first.forcing ?? 'none',
    artificial: !!first.artificial,
    tag: first.tag,
    data: first.data,
    conds: first.conds.map(c => c.text),
  };
}

/** Meaning of a call nobody's system covers: read it naturally. */
export function naturalMeaning(x: Ctx, call: Call): Meaning {
  const n = T.bidding.names, t = T.bidding.natural;
  const s = unknownShown();
  const base = { forcing: 'none' as const, artificial: false, natural: true, conds: [] as string[] };
  if (call === PASS) return { ...base, name: n.pass, desc: t.pass, shown: s };
  if (call === REDOUBLE) {
    s.hcp = [10, 37];
    return { ...base, name: n.redouble, desc: t.redouble, shown: s };
  }
  const lb = x.lastBidRecord();
  if (call === DOUBLE) {
    const ts = lb ? strainOf(lb.call) : NT;
    const tl = lb ? levelOf(lb.call) : 0;
    if (ts < NT && tl <= 3 && x.actionsBy(x.partner).length === 0) {
      s.hcp = [11, 37];
      s.len[ts] = [0, 2];
      return { ...base, name: n.takeoutDouble, desc: t.takeout(ts), shown: s, tag: 'takeoutX', forcing: 'one' };
    }
    s.hcp = [8, 37];
    return { ...base, name: n.penaltyDouble, desc: t.penalty, shown: s, tag: 'penaltyX' };
  }
  const lvl = levelOf(call), st = strainOf(call);
  const op = x.opening();
  if (lvl === 4 && st === NT) {
    const trump = blackwoodTrump(x);
    if (trump !== null && getSystem().rkcb) return { ...base, name: n.rkcb, desc: t.rkcb, shown: s, artificial: true, tag: 'rkcb', data: { suit: trump }, forcing: 'one' };
    if (trump !== null) return { ...base, name: n.blackwood, desc: t.blackwood, shown: s, artificial: true, tag: 'blackwood', data: { suit: trump }, forcing: 'one' };
    return { ...base, name: n.quant4nt, desc: t.quant, shown: s, tag: 'quant' };
  }
  if (lvl === 4 && st === CLUBS) {
    const pa = x.lastAction(x.partner);
    if (pa && strainOf(pa.call) === NT && levelOf(pa.call) <= 2 && x.rhoCall()?.call === PASS) {
      return { ...base, name: n.gerber, desc: t.gerber, shown: s, artificial: true, tag: 'gerber', forcing: 'one' };
    }
  }
  if (st === NT) {
    s.balanced = null;
    s.hcp = lvl === 1 ? [8, 18] : lvl === 2 ? [11, 21] : [13, 37];
    return { ...base, name: callName(call), desc: t.notrump, shown: s };
  }
  const ourOpening = op && x.ourSide(op.seat);
  const minLen = ourOpening ? 4 : 5;
  s.len[st] = [minLen, 13];
  const isJump = x.isJump(call);
  s.hcp = !op ? [12, 21] : ourOpening ? [6 + (isJump ? 4 : 0), 37] : [8 + (lvl - 1) * 2, 37];
  return { ...base, name: callName(call), desc: t.suit(minLen, st), shown: s };
}

export function meaningOf(x: Ctx, call: Call): Meaning {
  const rules = rulesFor(x).filter(r => r.call === call);
  if (!rules.length) return naturalMeaning(x, call);
  const specific = rules.filter(r => !r.generic);
  return meaningFromRules(specific.length ? specific : rules);
}

export { isBid, cond };
export type { CallRecord };
