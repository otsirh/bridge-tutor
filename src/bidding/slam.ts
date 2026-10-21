// Slam conventions: Blackwood, king ask and Gerber.

import { bid, PASS, levelOf, strainOf } from '../core/auction';
import { NT, CLUBS, DIAMONDS, HEARTS, SPADES } from '../core/cards';
import { T } from '../i18n';
import type { Ctx } from './context';
import { R, cond, ruleName, type Rule } from './types';

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

export function conventionReplies(x: Ctx): Rule[] | null {
  const t = T.bidding.slam;
  const pc = x.partnerCall();
  const rc = x.rhoCall();
  const rhoQuiet = !rc || rc.call === PASS;
  if (pc && rhoQuiet) {
    const tag = pc.meaning.tag;
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
