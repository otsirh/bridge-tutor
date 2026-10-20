// Generate layouts of the unseen cards that agree with everything a player knows:
// the auction (HCP and suit-length ranges per seat), cards already played, and
// the suits a player has shown out of.

import { type Card, suitOf, HCP_VALUE, shuffle } from '../core/cards';
import type { Shown } from '../bidding/types';

export interface SampleSpec {
  /** Cards each seat still holds that the viewer can see (others empty). */
  known: Card[][];
  /** Seats whose remaining cards are unknown to the viewer. */
  hidden: number[];
  /** Remaining card count per seat. */
  counts: number[];
  /** Cards already played by each seat (for checking auction constraints on the original hand). */
  played: Card[][];
  /** voids[seat][suit] — seat has shown out of the suit. */
  voids: boolean[][];
  /** What each seat showed in the auction. */
  shown: (Shown | null)[];
  /** Every card not visible to the viewer and not yet played. */
  unknown: Card[];
}

export interface SampleResult {
  hands: Card[][]; // remaining cards per seat
}

function checkShown(original: Card[], s: Shown, slack: number): boolean {
  let h = 0;
  const len = [0, 0, 0, 0];
  for (const c of original) {
    h += HCP_VALUE[c % 13];
    len[(c / 13) | 0]++;
  }
  if (h < s.hcp[0] - slack || h > s.hcp[1] + slack) return false;
  const lslack = slack > 0 ? 1 : 0;
  for (let su = 0; su < 4; su++) {
    if (len[su] < s.len[su][0] - lslack || len[su] > s.len[su][1] + lslack) return false;
  }
  if (s.balanced && slack === 0) {
    const sh = [...len].sort((a, b) => b - a);
    if (sh[3] < 2 || sh[0] > 5) return false;
  }
  return true;
}

/** Deal the unknown cards to the hidden seats at random, respecting voids. */
function dealOnce(spec: SampleSpec, rnd: () => number): Card[][] | null {
  const hands = spec.known.map(h => [...h]);
  const cap = spec.counts.map((n, s) => n - spec.known[s].length);
  const cards = shuffle([...spec.unknown], rnd);
  // most constrained suits first
  const eligibleCount = (c: Card) => spec.hidden.filter(s => !spec.voids[s][suitOf(c)]).length;
  cards.sort((a, b) => eligibleCount(a) - eligibleCount(b));
  for (const c of cards) {
    const su = suitOf(c);
    let total = 0;
    for (const s of spec.hidden) if (!spec.voids[s][su] && cap[s] > 0) total += cap[s];
    if (total === 0) return null;
    let r = rnd() * total;
    let chosen = -1;
    for (const s of spec.hidden) {
      if (spec.voids[s][su] || cap[s] <= 0) continue;
      r -= cap[s];
      if (r < 0) {
        chosen = s;
        break;
      }
    }
    if (chosen < 0) chosen = spec.hidden.find(s => !spec.voids[s][su] && cap[s] > 0)!;
    hands[chosen].push(c);
    cap[chosen]--;
  }
  return hands;
}

/**
 * Draw up to `n` layouts. Auction constraints are relaxed step by step if
 * exact matches are rare (bidding judgment is not exact).
 */
export function sampleLayouts(spec: SampleSpec, n: number, rnd: () => number = Math.random, maxTries = 6000): SampleResult[] {
  const out: SampleResult[] = [];
  const slacks = [0, 2, 4, -1];
  let tries = 0;
  for (const slack of slacks) {
    const budget = slack === -1 ? maxTries : maxTries / 2;
    let localTries = 0;
    while (out.length < n && localTries < budget) {
      localTries++;
      tries++;
      const hands = dealOnce(spec, rnd);
      if (!hands) continue;
      let ok = true;
      if (slack >= 0) {
        for (const s of spec.hidden) {
          const sh = spec.shown[s];
          if (!sh) continue;
          if (!checkShown([...hands[s], ...spec.played[s]], sh, slack)) {
            ok = false;
            break;
          }
        }
      }
      if (ok) out.push({ hands });
    }
    if (out.length >= n) break;
  }
  return out;
}
