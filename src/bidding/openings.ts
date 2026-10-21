// Opening bids (SAYC).

import { bid, PASS } from '../core/auction';
import { CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { suitHonours } from '../core/eval';
import { T } from '../i18n';
import type { Ctx } from './context';
import { R, hcpC, lenC, balancedC, cond, type Rule } from './types';

/** The suit SAYC opens at the one level. */
export function openingSuit(h: HandInfo): number {
  const max = Math.max(...h.len);
  if (max >= 5) {
    // longest suit; with two of equal length (5-5, 6-6) open the higher-ranking
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) if (h.len[s] === max) return s;
  }
  if (h.len[DIAMONDS] > h.len[CLUBS]) return DIAMONDS;
  if (h.len[CLUBS] > h.len[DIAMONDS]) return CLUBS;
  return h.len[CLUBS] === 3 ? CLUBS : DIAMONDS;
}

const ruleOf20 = (h: HandInfo) => h.hcp + h.shape[0] + h.shape[1] >= 20;
const ruleOf15 = (h: HandInfo) => h.hcp + h.len[SPADES] >= 15;

/** Seat position relative to dealer: 1st..4th. */
export function seatPosition(x: Ctx): number {
  return x.records.length + 1;
}

export function openingRules(x: Ctx): Rule[] {
  const t = T.bidding.openings;
  const pos = seatPosition(x);
  const rules: Rule[] = [];

  rules.push(
    R(bid(2, CLUBS), 'strong2c', t.strong2c, [
      cond(t.strong2cCond, h => h.hcp >= 22 || (h.hcp >= 18 && h.ltc <= 3), s => {
        s.hcp = [Math.max(s.hcp[0], 18), s.hcp[1]];
      }, h => t.strong2cValue(h.hcp, h.ltc)),
    ], { artificial: true, forcing: 'one', tag: 'strong2c' }),
  );

  rules.push(R(bid(2, NT), ['opening', 2, NT], t.open2nt, [hcpC(20, 21), balancedC()]));

  rules.push(R(bid(1, NT), ['opening', 1, NT], t.open1nt, [hcpC(15, 17), balancedC()]));

  const openOk = (h: HandInfo) => {
    if (h.hcp > 21) return false;
    if (pos === 4) return h.hcp >= 10 && (h.hcp >= 12 ? ruleOf15(h) || h.hcp >= 13 : ruleOf15(h));
    return h.hcp >= 12 || (h.hcp >= 10 && ruleOf20(h));
  };
  const strengthCond = cond(pos === 4 ? t.strength4th : t.strength, openOk, s => {
    s.hcp = [Math.max(s.hcp[0], 10), Math.min(s.hcp[1], 21)];
  }, h => t.strengthValue(h.hcp, h.hcp < 12 ? h.hcp + h.shape[0] + h.shape[1] : null));

  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    const major = s >= HEARTS;
    const lenCond = major ? lenC(s, 5) : lenC(s, 3);
    const which = cond(major ? t.whichMajor(s) : s === DIAMONDS ? t.whichDiamonds : t.whichClubs, h => openingSuit(h) === s, sh => {
      if (!major) {
        sh.len[HEARTS] = [sh.len[HEARTS][0], Math.min(sh.len[HEARTS][1], 4)];
        sh.len[SPADES] = [sh.len[SPADES][0], Math.min(sh.len[SPADES][1], 4)];
      } else if (s === HEARTS) sh.len[SPADES] = [sh.len[SPADES][0], Math.min(sh.len[SPADES][1], 5)];
    }, h => t.whichValue(openingSuit(h)));
    const desc = major ? t.oneMajor(s) : s === DIAMONDS ? t.oneDiamond : t.oneClub;
    rules.push(R(bid(1, s), ['opening', 1, s], desc, [strengthCond, lenCond, which]));
  }

  if (pos < 4) {
    const decent = (s: number) => cond(t.decent(s), h => suitHonours(h, s) >= 2, undefined, h => t.decentValue(suitHonours(h, s)));
    for (const s of [SPADES, HEARTS, DIAMONDS]) {
      rules.push(
        R(bid(2, s), 'weakTwo', t.weakTwo(s), [
          hcpC(5, 10),
          lenC(s, 6, 6),
          decent(s),
          cond(t.noSideMajor, h => [HEARTS, SPADES].every(m => m === s || h.len[m] < 4), undefined, h => t.majorsValue(h.len[SPADES], h.len[HEARTS])),
        ], { tag: 'weak2' }),
      );
    }
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      rules.push(
        R(bid(3, s), 'preempt3', t.preempt3(s), [
          hcpC(5, 10),
          lenC(s, 7, 7),
          decent(s),
        ], { tag: 'preempt' }),
      );
    }
    for (const s of [SPADES, HEARTS]) {
      rules.push(
        R(bid(4, s), 'preempt4', t.preempt4(s), [
          hcpC(5, 10),
          cond(t.preempt4Cond(s), h => h.len[s] >= 8 || (h.len[s] === 7 && h.shape[3] <= 1), sh => {
            sh.len[s] = [Math.max(sh.len[s][0], 7), sh.len[s][1]];
          }, h => T.bidding.conds.lenValue(h.len[s], s)),
        ], { tag: 'preempt' }),
      );
    }
  }

  rules.push(
    R(PASS, 'pass', pos === 4 ? t.pass4th : t.pass, [], {
      shows: s => {
        s.hcp = [s.hcp[0], Math.min(s.hcp[1], pos === 4 ? 14 : 12)];
      },
    }),
  );
  return rules;
}
