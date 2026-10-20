// Duplicate bridge scoring, IMPs and par.

import { type Strain, type Vulnerability, isVulnerable, STRAIN_SYMBOLS, SEAT_LETTERS } from './cards';
import type { Contract } from './auction';

const trickValue = (strain: Strain) => (strain <= 1 ? 20 : 30);

export function contractTrickPoints(level: number, strain: Strain): number {
  return strain === 4 ? 40 + 30 * (level - 1) : trickValue(strain) * level;
}

/**
 * Score for the declaring side (negative when they go down).
 * `tricks` = tricks taken by declarer's side.
 */
export function scoreContract(c: Contract, tricks: number, vul: boolean): number {
  const need = c.level + 6;
  const mult = c.doubled === 2 ? 4 : c.doubled === 1 ? 2 : 1;
  if (tricks >= need) {
    const base = contractTrickPoints(c.level, c.strain) * mult;
    let score = base;
    score += base >= 100 ? (vul ? 500 : 300) : 50;
    if (c.level === 6) score += vul ? 750 : 500;
    if (c.level === 7) score += vul ? 1500 : 1000;
    if (c.doubled === 1) score += 50;
    if (c.doubled === 2) score += 100;
    const over = tricks - need;
    if (c.doubled === 0) score += over * trickValue(c.strain);
    else score += over * (vul ? 200 : 100) * (c.doubled === 2 ? 2 : 1);
    return score;
  }
  const down = need - tricks;
  if (c.doubled === 0) return -down * (vul ? 100 : 50);
  let pen = 0;
  for (let i = 1; i <= down; i++) {
    if (vul) pen += i === 1 ? 200 : 300;
    else pen += i === 1 ? 100 : i <= 3 ? 200 : 300;
  }
  return -pen * (c.doubled === 2 ? 2 : 1);
}

/** Score from North-South's point of view. */
export function scoreNS(c: Contract | null, tricks: number, vul: Vulnerability): number {
  if (!c) return 0;
  const s = scoreContract(c, tricks, isVulnerable(vul, c.declarer));
  return (c.declarer & 1) === 0 ? s : -s;
}

const IMP_TABLE = [20, 50, 90, 130, 170, 220, 270, 320, 370, 430, 500, 600, 750, 900, 1100, 1300, 1500, 1750, 2000, 2250, 2500, 3000, 3500, 4000];

export function imps(diff: number): number {
  const a = Math.abs(diff);
  let i = 0;
  while (i < IMP_TABLE.length && a >= IMP_TABLE[i]) i++;
  return diff < 0 ? -i : i;
}

export interface ParResult {
  scoreNS: number;
  contracts: string[]; // e.g. "4♠ by N/S", "5♦X by E/W"
}

/**
 * Par from a double-dummy table (tricks[strain][declarer]).
 * Classic par: the highest-scoring contract one side can make, after the
 * other side's profitable doubled sacrifices are taken into account.
 */
export function parScore(tricks: number[][], vul: Vulnerability): ParResult {
  // best tricks per side and strain (either declarer)
  const best = (side: number, strain: number) => Math.max(tricks[strain][side], tricks[strain][side + 2]);
  const vulOf = (side: number) => isVulnerable(vul, side);

  type Option = { side: number; level: number; strain: Strain; score: number; doubled: boolean };
  // Every contract a side could reach: score if played (undoubled when making, doubled when going down).
  const options: Option[] = [];
  for (let side = 0; side < 2; side++) {
    for (let strain = 0 as Strain; strain < 5; strain = (strain + 1) as Strain) {
      const t = best(side, strain);
      for (let level = 1; level <= 7; level++) {
        const makes = t >= level + 6;
        const c: Contract = { level, strain, declarer: side as 0 | 1, doubled: makes ? 0 : 1 };
        options.push({ side, level, strain, score: scoreContract(c, t, vulOf(side)), doubled: !makes });
      }
    }
  }
  const rank = (o: Option) => (o.level - 1) * 5 + o.strain;
  // Highest makeable contract for each side gives the bidding ceiling; search for an equilibrium.
  const makeable = options.filter(o => o.score > 0);
  if (!makeable.length) return { scoreNS: 0, contracts: ['Всички пас'] };

  // Start from the side with the best making score.
  const bestMaking = (side: number, above = -1) =>
    makeable.filter(o => o.side === side && rank(o) > above).sort((a, b) => b.score - a.score || rank(a) - rank(b))[0];

  const sideScore = (o: Option) => (o.side === 0 ? o.score : -o.score);
  const a = bestMaking(0), b = bestMaking(1);
  let cur: Option = !b || (a && a.score >= b.score) ? a! : b!;
  // Iterate: the other side may sacrifice above cur, then the first side may bid on.
  for (let guard = 0; guard < 20; guard++) {
    const other = 1 - cur.side;
    const curLoss = cur.score; // what `other` loses if they let cur stand
    // other side outbids with a making contract?
    const make = bestMaking(other, rank(cur));
    if (make) {
      cur = make;
      continue;
    }
    // cheapest profitable sacrifice
    const sac = options
      .filter(o => o.side === other && rank(o) > rank(cur) && o.score < 0 && -o.score < curLoss)
      .sort((x, y) => y.score - x.score || rank(x) - rank(y))[0];
    if (!sac) break;
    // can cur's side outbid the sacrifice profitably?
    const over = makeable.filter(o => o.side === cur.side && rank(o) > rank(sac)).sort((x, y) => y.score - x.score)[0];
    if (over && over.score > -sac.score) {
      cur = over;
      continue;
    }
    cur = sac;
    break;
  }
  const sideName = cur.side === 0 ? 'С/Ю' : 'И/З';
  const decl = tricks[cur.strain][cur.side] >= tricks[cur.strain][cur.side + 2] ? cur.side : cur.side + 2;
  return {
    scoreNS: sideScore(cur),
    contracts: [`${cur.level}${STRAIN_SYMBOLS[cur.strain]}${cur.doubled ? 'X' : ''} от ${sideName} (${SEAT_LETTERS[decl]})`],
  };
}
