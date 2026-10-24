// Shared bidding types: what a call shows, conditions, rules.

import type { Call } from '../core/auction';
import type { HandInfo } from '../core/eval';
import { hasStopper, goodSuit, dummyPoints } from '../core/eval';
import { SUIT_SYMBOLS } from '../core/cards';
import { T, fmtList, type Text } from '../i18n';
import type { Ctx } from './context';

/** What we know about a hand from its calls. */
export interface Shown {
  hcp: [number, number];
  len: [number, number][]; // per suit
  balanced: boolean | null;
}

export const unknownShown = (): Shown => ({
  hcp: [0, 37],
  len: [[0, 13], [0, 13], [0, 13], [0, 13]],
  balanced: null,
});

export function cloneShown(s: Shown): Shown {
  return { hcp: [s.hcp[0], s.hcp[1]], len: s.len.map(l => [l[0], l[1]] as [number, number]), balanced: s.balanced };
}

/** Intersect `add` into `base`. Conflicting information (a misbid) favours the newer statement. */
export function mergeShown(base: Shown, add: Shown): Shown {
  const r = cloneShown(base);
  const lo = Math.max(r.hcp[0], add.hcp[0]), hi = Math.min(r.hcp[1], add.hcp[1]);
  r.hcp = lo <= hi ? [lo, hi] : [add.hcp[0], add.hcp[1]];
  for (let s = 0; s < 4; s++) {
    const a = Math.max(r.len[s][0], add.len[s][0]), b = Math.min(r.len[s][1], add.len[s][1]);
    r.len[s] = a <= b ? [a, b] : [add.len[s][0], add.len[s][1]];
  }
  if (add.balanced !== null) r.balanced = add.balanced;
  return r;
}

/** Union (bounding box) of two meanings — used when one call can mean either of two things. */
export function unionShown(a: Shown, b: Shown): Shown {
  return {
    hcp: [Math.min(a.hcp[0], b.hcp[0]), Math.max(a.hcp[1], b.hcp[1])],
    len: a.len.map((l, s) => [Math.min(l[0], b.len[s][0]), Math.max(l[1], b.len[s][1])] as [number, number]),
    balanced: a.balanced === b.balanced ? a.balanced : null,
  };
}

export function describeShown(s: Shown): string {
  const c = T.bidding.conds, t = T.bidding.shown;
  const parts: string[] = [];
  const [lo, hi] = s.hcp;
  if (lo > 0 || hi < 37) parts.push(hi >= 30 ? c.hcpMin(lo) : lo === 0 ? c.hcpRange(0, hi) : lo === hi ? c.hcpExact(lo) : c.hcpRange(lo, hi));
  for (const su of [3, 2, 1, 0]) {
    const [a, b] = s.len[su];
    if (a === 0 && b >= 13) continue;
    if (a === b) parts.push(t.exactly(a, su));
    else if (b >= 13 || b >= 9) parts.push(`${a}+${SUIT_SYMBOLS[su]}`);
    else if (a === 0) parts.push(`≤${b}${SUIT_SYMBOLS[su]}`);
    else parts.push(`${a}–${b}${SUIT_SYMBOLS[su]}`);
  }
  if (s.balanced) parts.push(t.balanced);
  return fmtList(parts);
}

export type Forcing = 'none' | 'one' | 'game';

export interface Cond {
  text: string; // requirement in words, e.g. "13+ HCP"
  test(h: HandInfo, x: Ctx): boolean;
  apply?(s: Shown): void; // what meeting this condition tells the table
  value?(h: HandInfo, x: Ctx): string; // the hand's own figure, for "why not" explanations
}

export interface Rule {
  call: Call;
  key: string; // language-independent identity, a key of T.bidding.names (e.g. "limitRaise")
  name: string; // short label in the active language, e.g. "Limit raise"
  desc: string; // teaching explanation of what the call shows and why
  conds: Cond[];
  shows?(s: Shown): void; // extra inference beyond the conditions
  forcing?: Forcing;
  artificial?: boolean; // says nothing about the named strain
  tag?: string; // convention id used to recognise follow-ups
  data?: Record<string, number>; // tag-specific details (e.g. the trump suit for Blackwood)
  generic?: boolean; // produced by general judgment rather than a specific system agreement
  family?: string; // rules that are variants of one bid (same meaning family); the key unless set
}

// ---------------------------------------------------------------------------
// Condition builders (text in the active language, read when the rule is built)

export function hcpC(min: number, max = 37): Cond {
  const c = T.bidding.conds;
  return {
    text: max >= 37 ? c.hcpMin(min) : min <= 0 ? c.hcpMax(max) : min === max ? c.hcpExact(min) : c.hcpRange(min, max),
    test: h => h.hcp >= min && h.hcp <= max,
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min), Math.min(s.hcp[1], max)];
    },
    value: h => c.hcpValue(h.hcp),
  };
}

/** Total points (HCP + length points). */
export function tpC(min: number, max = 37): Cond {
  const c = T.bidding.conds;
  return {
    text: max >= 37 ? c.totalMin(min) : c.totalRange(min, max),
    test: h => h.tp >= min && h.tp <= max,
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min - 2), Math.min(s.hcp[1], max)];
    },
    value: h => c.totalValue(h.tp),
  };
}

/** Dummy points in support of `trump` (shortness counts). */
export function dpC(trump: number, min: number, max = 37): Cond {
  const c = T.bidding.conds;
  return {
    text: max >= 37 ? c.dummyMin(min, trump) : c.dummyRange(min, max, trump),
    test: h => {
      const d = dummyPoints(h, trump);
      return d >= min && d <= max;
    },
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min - 3), Math.min(s.hcp[1], max)];
    },
    value: h => c.dummyValue(dummyPoints(h, trump)),
  };
}

export function lenC(suit: number, min: number, max = 13): Cond {
  const c = T.bidding.conds;
  return {
    text: max >= 13 ? c.lenMin(min, suit) : min === 0 ? c.lenMax(max, suit) : min === max ? c.lenExact(min, suit) : c.lenRange(min, max, suit),
    test: h => h.len[suit] >= min && h.len[suit] <= max,
    apply: s => {
      s.len[suit] = [Math.max(s.len[suit][0], min), Math.min(s.len[suit][1], max)];
    },
    value: h => c.lenValue(h.len[suit], suit),
  };
}

export function balancedC(): Cond {
  const c = T.bidding.conds;
  return {
    text: c.balanced,
    test: h => h.balanced,
    apply: s => {
      s.balanced = true;
      for (let i = 0; i < 4; i++) s.len[i] = [Math.max(2, s.len[i][0]), Math.min(5, s.len[i][1])];
    },
    value: h => c.shape(h.shape),
  };
}

export function semiBalancedC(): Cond {
  const c = T.bidding.conds;
  return {
    text: c.semiBalanced,
    test: h => h.semiBalanced,
    apply: s => {
      for (let i = 0; i < 4; i++) s.len[i] = [Math.max(2, s.len[i][0]), Math.min(6, s.len[i][1])];
    },
    value: h => c.shape(h.shape),
  };
}

export function unbalancedC(): Cond {
  const c = T.bidding.conds;
  return {
    text: c.unbalanced,
    test: h => !h.balanced,
    apply: s => {
      s.balanced = false;
    },
    value: h => c.shape(h.shape),
  };
}

export function stopperC(suit: number): Cond {
  const c = T.bidding.conds;
  return {
    text: c.stopper(suit),
    test: h => hasStopper(h, suit),
    value: h => (hasStopper(h, suit) ? c.hasStopper : c.notStopped(suit)),
  };
}

export function stoppersC(suits: number[]): Cond {
  if (suits.length === 1) return stopperC(suits[0]);
  const c = T.bidding.conds;
  return {
    text: c.stoppers(suits),
    test: h => suits.every(s => hasStopper(h, s)),
    value: h => {
      const miss = suits.filter(s => !hasStopper(h, s));
      return miss.length ? c.noStopper(miss) : c.hasStoppers;
    },
  };
}

export function goodSuitC(suit: number): Cond {
  const c = T.bidding.conds;
  return {
    text: c.goodSuit(suit),
    test: h => goodSuit(h, suit),
    value: h => c.suitQuality(suit, goodSuit(h, suit)),
  };
}

export function cond(text: string, test: (h: HandInfo, x: Ctx) => boolean, apply?: (s: Shown) => void, value?: (h: HandInfo, x: Ctx) => string): Cond {
  return { text, test, apply, value };
}

/** A rule with no conditions on the hand. */
export function always(text = T.bidding.conds.anyHand): Cond {
  return { text, test: () => true };
}

// ---------------------------------------------------------------------------
// Rules

type Names = Text['bidding']['names'];

/** A rule's name: a key of T.bidding.names, or [key, ...arguments] when its label takes some. */
export type RuleName = { [K in keyof Names]: Names[K] extends (...args: infer A) => string ? [K, ...A] : K }[keyof Names];

/** The label of a rule name in the active language. */
export function ruleName(name: RuleName): string {
  const [key, ...args] = typeof name === 'string' ? [name] : name;
  const label = T.bidding.names[key] as string | ((...a: unknown[]) => string);
  return typeof label === 'function' ? label(...args) : label;
}

/**
 * A rule. The name's key is the rule's identity: rules with the same key are
 * variants of one bid and the engine reads them together, whatever the label
 * says in the active language.
 */
export function R(call: Call, name: RuleName, desc: string, conds: Cond[], extra: Partial<Rule> = {}): Rule {
  const key = typeof name === 'string' ? name : name[0];
  return { call, key, name: ruleName(name), desc, conds, family: key, ...extra };
}
