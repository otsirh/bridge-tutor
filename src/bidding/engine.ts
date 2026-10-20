// Bidding engine: reads an auction, explains calls, chooses bids, advises.

import { Auction, type Call, PASS, callName } from '../core/auction';
import { type Card, type Vulnerability, type Seat } from '../core/cards';
import { handInfo, type HandInfo } from '../core/eval';
import { Ctx, type CallRecord, type Meaning } from './context';
import { rulesFor, meaningOf } from './system';
import { type Rule, type Shown, unknownShown, mergeShown, describeShown } from './types';

export interface AuctionView {
  records: CallRecord[];
  shown: Shown[]; // cumulative per seat after all calls
  ctx: Ctx; // context for the next call
}

/** Interpret every call of an auction, building what each player has shown. */
export function readAuction(auction: Auction, vul: Vulnerability): AuctionView {
  const records: CallRecord[] = [];
  let shown: Shown[] = [unknownShown(), unknownShown(), unknownShown(), unknownShown()];
  for (let i = 0; i < auction.calls.length; i++) {
    const prefix = new Auction(auction.dealer, auction.calls.slice(0, i));
    const x = new Ctx(prefix, vul, [...records], shown);
    const call = auction.calls[i];
    const meaning = meaningOf(x, call);
    const seat = prefix.nextSeat;
    records.push({ index: i, seat, call, meaning });
    shown = shown.map((s, k) => (k === seat ? mergeShown(s, meaning.shown) : s));
  }
  const ctx = new Ctx(auction.clone(), vul, records, shown);
  return { records, shown, ctx };
}

export interface CondCheck {
  text: string;
  ok: boolean;
  value?: string;
}

export interface RuleCheck {
  rule: Rule;
  checks: CondCheck[];
  ok: boolean;
}

export interface BidAdvice {
  call: Call;
  rule: Rule | null;
  checks: CondCheck[]; // conditions of the chosen rule, with the hand's figures
  alternatives: RuleCheck[]; // other system calls considered, with why they don't fit
  meaning: Meaning; // what the recommended call tells partner
}

function checkRule(rule: Rule, h: HandInfo, x: Ctx): RuleCheck {
  const checks = rule.conds.map(c => {
    let ok = false;
    try {
      ok = c.test(h, x);
    } catch {
      ok = false;
    }
    return { text: c.text, ok, value: c.value?.(h, x) };
  });
  return { rule, checks, ok: checks.every(c => c.ok) };
}

/** Choose a call for a hand at this point of the auction, with the reasoning. */
export function advise(hand: readonly Card[], x: Ctx): BidAdvice {
  const h = handInfo(hand);
  const rules = rulesFor(x);
  let chosen: RuleCheck | null = null;
  const checked: RuleCheck[] = [];
  for (const r of rules) {
    const rc = checkRule(r, h, x);
    checked.push(rc);
    if (rc.ok && !chosen) chosen = rc;
  }
  const call = chosen ? chosen.rule.call : PASS;
  const seen = new Set<Call>([call]);
  const alternatives: RuleCheck[] = [];
  for (const rc of checked) {
    if (seen.has(rc.rule.call) || rc.rule.generic) continue;
    seen.add(rc.rule.call);
    alternatives.push(rc);
  }
  return {
    call,
    rule: chosen?.rule ?? null,
    checks: chosen?.checks ?? [],
    alternatives,
    meaning: meaningOf(x, call),
  };
}

export function chooseCall(hand: readonly Card[], x: Ctx): Call {
  return advise(hand, x).call;
}

/** How the system reads a call the player is considering (or has made). */
export function explainCall(x: Ctx, call: Call): Meaning {
  return meaningOf(x, call);
}

/** Compare a player's call with the system's recommendation. */
export function judgeCall(hand: readonly Card[], x: Ctx, call: Call): { agrees: boolean; advice: BidAdvice; yourMeaning: Meaning; failed: CondCheck[] } {
  const advice = advise(hand, x);
  const yourMeaning = meaningOf(x, call);
  const h = handInfo(hand);
  const own = rulesFor(x).filter(r => r.call === call).map(r => checkRule(r, h, x));
  const failed = own.length ? own.sort((a, b) => a.checks.filter(c => !c.ok).length - b.checks.filter(c => !c.ok).length)[0].checks.filter(c => !c.ok) : [];
  return { agrees: advice.call === call, advice, yourMeaning, failed };
}

export function summarizeShown(s: Shown): string {
  const d = describeShown(s);
  return d || 'нищо конкретно';
}

export function bidLabel(c: Call): string {
  return callName(c);
}

export type { Seat };
