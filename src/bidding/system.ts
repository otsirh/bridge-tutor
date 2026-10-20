// Situation dispatch: which rules apply at this point of the auction.

import { type Call, PASS, DOUBLE, REDOUBLE, isBid, levelOf, strainOf, bid } from '../core/auction';
import { NT, CLUBS, SUIT_NAMES, SUIT_SYMBOLS } from '../core/cards';
import type { Ctx, CallRecord, Meaning } from './context';
import { type Rule, type Shown, unknownShown, unionShown, R, hcpC, cond } from './types';
import { openingRules } from './openings';
import { responsesToOneSuit, responsesTo1NT, responsesTo2NT, responsesTo2C, responsesToWeakTwo, responsesToPreempt } from './responses';
import {
  openerRebidOneSuit, openerAfterNT, responderAfterNTConvention, openerAfterNTContinuation,
  openerAfter2C, openerAfterFeatureAsk, responderAfterInvite,
} from './rebids';
import { overcallRules, advanceRules, contestedResponse, openerAfterNegDouble, doublerRebid, overcallerAfterCueRaise } from './competitive';
import { conventionReplies, blackwoodTrump } from './slam';
import { genericRules } from './generic';

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
      R(bid(6, NT), 'Приемане', '4БК на партньора е инвитация за 6БК: приемете, ако сте в горната половина на показаното.', [hcpC(Math.ceil(mid))]),
      R(PASS, 'Отказ', 'Долната граница на показания диапазон: пасувайте на 4БК.', []),
    ];
  }

  if (x.ourSide(op.seat)) {
    const os = strainOf(op.call), ol = levelOf(op.call);
    const interfered = x.records.some(r => r.index > op.index && !x.ourSide(r.seat) && r.call !== PASS);
    const myCallsSinceOpening = x.callsBy(x.seat).filter(r => r.index > op.index).length;
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
    }
    if (op.seat === x.seat && myActs.length === 1) {
      const resp = pActs[0];
      if (!resp) return [];
      if (resp.meaning.tag === 'negX') return openerAfterNegDouble(x, resp, op);
      if (!rhoQuiet && !interfered) return [];
      if (op.meaning.tag === 'strong2c') return openerAfter2C(x, resp);
      if (op.meaning.tag === 'weak2' && resp.meaning.tag === 'featureAsk') return openerAfterFeatureAsk(x, os);
      if (ol === 1 && os < NT) return openerRebidOneSuit(x, os, resp);
      if (os === NT && ol <= 2) return openerAfterNT(x, ol, resp);
      return [];
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
  if (myActs.length === 1 && myActs[0].meaning.tag === 'takeoutX' && pActs.length === 1 && pActs[0].index > myActs[0].index && x.partnerCall()?.index === pActs[0].index) {
    return doublerRebid(x, pActs[0]);
  }
  return [];
}

/** All rules for the seat to call, specific system rules first, then general judgment. */
export function rulesFor(x: Ctx): Rule[] {
  const conv = conventionReplies(x);
  if (conv) return conv;
  if (!x.opening()) return openingRules(x);
  const legal = (r: Rule) => x.isLegal(r.call);
  return [...specificRules(x).filter(legal), ...genericRules(x).filter(legal)];
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
  const names = [...new Set(rules.map(r => r.name))];
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
  const s = unknownShown();
  const base = { forcing: 'none' as const, artificial: false, natural: true, conds: [] as string[] };
  if (call === PASS) return { ...base, name: 'Пас', desc: 'Без действие.', shown: s };
  if (call === REDOUBLE) {
    s.hcp = [10, 37];
    return { ...base, name: 'Реконтра', desc: 'Показва сила: нашата двойка има превес в силата.', shown: s };
  }
  const lb = x.lastBidRecord();
  if (call === DOUBLE) {
    const ts = lb ? strainOf(lb.call) : NT;
    const tl = lb ? levelOf(lb.call) : 0;
    if (ts < NT && tl <= 3 && x.actionsBy(x.partner).length === 0) {
      s.hcp = [11, 37];
      s.len[ts] = [0, 2];
      return { ...base, name: 'Информативна контра', desc: `Моли партньора да обяви: късота в ${SUIT_NAMES[ts]}, подкрепа за другите цветове.`, shown: s, tag: 'takeoutX', forcing: 'one' };
    }
    s.hcp = [8, 37];
    return { ...base, name: 'Наказателна контра', desc: 'Очаква договорът да падне.', shown: s, tag: 'penaltyX' };
  }
  const lvl = levelOf(call), st = strainOf(call);
  const op = x.opening();
  if (lvl === 4 && st === NT) {
    const trump = blackwoodTrump(x);
    if (trump !== null) return { ...base, name: 'Блекууд', desc: 'Пита партньора колко аса има.', shown: s, artificial: true, tag: 'blackwood', data: { suit: trump }, forcing: 'one' };
    return { ...base, name: 'Количествено 4БК', desc: 'Инвитация за 6БК.', shown: s, tag: 'quant' };
  }
  if (lvl === 4 && st === CLUBS) {
    const pa = x.lastAction(x.partner);
    if (pa && strainOf(pa.call) === NT && levelOf(pa.call) <= 2 && x.rhoCall()?.call === PASS) {
      return { ...base, name: 'Гербер', desc: 'Пита партньора колко аса има (4♦ 0/4, 4♥ 1, 4♠ 2, 4БК 3).', shown: s, artificial: true, tag: 'gerber', forcing: 'one' };
    }
  }
  if (st === NT) {
    s.balanced = null;
    s.hcp = lvl === 1 ? [8, 18] : lvl === 2 ? [11, 21] : [13, 37];
    return { ...base, name: `${lvl}БК`, desc: 'Естествено: без коз, със стопери.', shown: s };
  }
  const ourOpening = op && x.ourSide(op.seat);
  const minLen = ourOpening ? 4 : 5;
  s.len[st] = [minLen, 13];
  const isJump = x.isJump(call);
  s.hcp = !op ? [12, 21] : ourOpening ? [6 + (isJump ? 4 : 0), 37] : [8 + (lvl - 1) * 2, 37];
  return { ...base, name: `${lvl}${SUIT_SYMBOLS[st]}`, desc: `Естествено: ${minLen}+ ${SUIT_NAMES[st]}.`, shown: s };
}

export function meaningOf(x: Ctx, call: Call): Meaning {
  const rules = rulesFor(x).filter(r => r.call === call);
  if (!rules.length) return naturalMeaning(x, call);
  const specific = rules.filter(r => !r.generic);
  return meaningFromRules(specific.length ? specific : rules);
}

export { isBid, cond };
export type { CallRecord };
