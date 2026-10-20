// Shared bidding types: what a call shows, conditions, rules.

import type { Call } from '../core/auction';
import type { HandInfo } from '../core/eval';
import { hasStopper, goodSuit, dummyPoints } from '../core/eval';
import { SUIT_SYMBOLS, SUIT_NAMES } from '../core/cards';
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
  const parts: string[] = [];
  const [lo, hi] = s.hcp;
  if (lo > 0 || hi < 37) parts.push(hi >= 30 ? `${lo}+ т.` : lo === 0 ? `0–${hi} т.` : lo === hi ? `${lo} т.` : `${lo}–${hi} т.`);
  for (const su of [3, 2, 1, 0]) {
    const [a, b] = s.len[su];
    if (a === 0 && b >= 13) continue;
    if (a === b) parts.push(`точно ${a}${SUIT_SYMBOLS[su]}`);
    else if (b >= 13 || b >= 9) parts.push(`${a}+${SUIT_SYMBOLS[su]}`);
    else if (a === 0) parts.push(`≤${b}${SUIT_SYMBOLS[su]}`);
    else parts.push(`${a}–${b}${SUIT_SYMBOLS[su]}`);
  }
  if (s.balanced) parts.push('балансирана');
  return parts.join(', ');
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
  name: string; // short label, e.g. "Limit raise"
  desc: string; // teaching explanation of what the call shows and why
  conds: Cond[];
  shows?(s: Shown): void; // extra inference beyond the conditions
  forcing?: Forcing;
  artificial?: boolean; // says nothing about the named strain
  tag?: string; // convention id used to recognise follow-ups
  data?: Record<string, number>; // tag-specific details (e.g. the trump suit for Blackwood)
  generic?: boolean; // produced by general judgment rather than a specific system agreement
  family?: string; // rules that are variants of one bid (same meaning family); set from the original name
}

// ---------------------------------------------------------------------------
// Condition builders

export function hcpC(min: number, max = 37): Cond {
  return {
    text: max >= 37 ? `${min}+ т.` : min <= 0 ? `най-много ${max} т.` : min === max ? `${min} т.` : `${min}–${max} т.`,
    test: h => h.hcp >= min && h.hcp <= max,
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min), Math.min(s.hcp[1], max)];
    },
    value: h => `имате ${h.hcp} т.`,
  };
}

/** Total points (HCP + length points). */
export function tpC(min: number, max = 37): Cond {
  return {
    text: max >= 37 ? `${min}+ общо точки` : `${min}–${max} общо точки`,
    test: h => h.tp >= min && h.tp <= max,
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min - 2), Math.min(s.hcp[1], max)];
    },
    value: h => `имате ${h.tp} общо точки`,
  };
}

/** Dummy points in support of `trump` (shortness counts). */
export function dpC(trump: number, min: number, max = 37): Cond {
  return {
    text: max >= 37 ? `${min}+ точки за подкрепа в ${SUIT_NAMES[trump]}` : `${min}–${max} точки за подкрепа в ${SUIT_NAMES[trump]}`,
    test: h => {
      const d = dummyPoints(h, trump);
      return d >= min && d <= max;
    },
    apply: s => {
      s.hcp = [Math.max(s.hcp[0], min - 3), Math.min(s.hcp[1], max)];
    },
    value: h => `имате ${dummyPoints(h, trump)} точки за подкрепа`,
  };
}

export function lenC(suit: number, min: number, max = 13): Cond {
  const sym = SUIT_SYMBOLS[suit];
  return {
    text: max >= 13 ? `${min}+ ${sym}` : min === 0 ? `най-много ${max} ${sym}` : min === max ? `точно ${min} ${sym}` : `${min}–${max} ${sym}`,
    test: h => h.len[suit] >= min && h.len[suit] <= max,
    apply: s => {
      s.len[suit] = [Math.max(s.len[suit][0], min), Math.min(s.len[suit][1], max)];
    },
    value: h => `имате ${h.len[suit]} ${sym}`,
  };
}

export function balancedC(): Cond {
  return {
    text: 'балансирана ръка (4-3-3-3, 4-4-3-2 или 5-3-3-2)',
    test: h => h.balanced,
    apply: s => {
      s.balanced = true;
      for (let i = 0; i < 4; i++) s.len[i] = [Math.max(2, s.len[i][0]), Math.min(5, s.len[i][1])];
    },
    value: h => `разпределението ви е ${h.shape.join('-')}`,
  };
}

export function semiBalancedC(): Cond {
  return {
    text: 'балансирана или полубалансирана ръка',
    test: h => h.semiBalanced,
    apply: s => {
      for (let i = 0; i < 4; i++) s.len[i] = [Math.max(2, s.len[i][0]), Math.min(6, s.len[i][1])];
    },
    value: h => `разпределението ви е ${h.shape.join('-')}`,
  };
}

export function unbalancedC(): Cond {
  return {
    text: 'небалансирана ръка',
    test: h => !h.balanced,
    apply: s => {
      s.balanced = false;
    },
    value: h => `разпределението ви е ${h.shape.join('-')}`,
  };
}

export function stopperC(suit: number): Cond {
  return {
    text: `стопер в ${SUIT_NAMES[suit]} (A, Kx, Qxx или Jxxx)`,
    test: h => hasStopper(h, suit),
    value: h => (hasStopper(h, suit) ? 'имате стопер' : `картите ви в ${SUIT_SYMBOLS[suit]} не спират цвета`),
  };
}

export function stoppersC(suits: number[]): Cond {
  if (suits.length === 1) return stopperC(suits[0]);
  return {
    text: `стопери в ${suits.map(s => SUIT_SYMBOLS[s]).join(' и ')}`,
    test: h => suits.every(s => hasStopper(h, s)),
    value: h => {
      const miss = suits.filter(s => !hasStopper(h, s));
      return miss.length ? `нямате стопер в ${miss.map(s => SUIT_SYMBOLS[s]).join(' ')}` : 'имате ги';
    },
  };
}

export function goodSuitC(suit: number): Cond {
  return {
    text: `добри ${SUIT_NAMES[suit]} (две от трите най-високи фигури или три от петте)`,
    test: h => goodSuit(h, suit),
    value: h => `цветът ви ${SUIT_SYMBOLS[suit]} е ${goodSuit(h, suit) ? 'добър' : 'слаб'}`,
  };
}

export function cond(text: string, test: (h: HandInfo, x: Ctx) => boolean, apply?: (s: Shown) => void, value?: (h: HandInfo, x: Ctx) => string): Cond {
  return { text, test, apply, value };
}

/** A rule with no conditions on the hand. */
export function always(text = 'всяка ръка'): Cond {
  return { text, test: () => true };
}

export function R(call: Call, name: string, desc: string, conds: Cond[], extra: Partial<Rule> = {}): Rule {
  return { call, name, desc, conds, family: name, ...extra };
}
