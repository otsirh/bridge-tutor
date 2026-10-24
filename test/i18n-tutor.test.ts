import { describe, it, expect, afterAll } from 'vitest';
import { LANGUAGES, setLang } from '../src/i18n';
import { bid, type Contract } from '../src/core/auction';
import { dealCards, mulberry32, parseCard, partnerOf, suitOf, type Card, type Seat, type Strain, type Vulnerability } from '../src/core/cards';
import { PlayState } from '../src/core/play';
import { handInfo, evaluationSummary } from '../src/core/eval';
import { parScore, parContractName } from '../src/core/scoring';
import { openingLeadChoices, cardFromHolding, describeLead } from '../src/engine/leads';
import type { CallRecord } from '../src/bidding/context';
import { explainPlay, type PlaySituation } from '../src/tutor/principles';
import { makePlan } from '../src/tutor/planner';
import { readPlay, readSignals, describeSignal } from '../src/tutor/signals';
import { chooseSignal } from '../src/engine/signalling';

const hand = (s: string): Card[] => s.split(' ').map(parseCard);
const CYRILLIC = /[\u0400-\u04FF]/;

/** A natural bid of each seat's longest suit, so leads see partner's and the opponents' suits. */
function records(deal: Card[][], dealer: Seat): CallRecord[] {
  return [0, 1, 2, 3].map(i => {
    const seat = ((dealer + i) & 3) as Seat;
    const len = [0, 1, 2, 3].map(s => deal[seat].filter(c => suitOf(c) === s).length);
    const longest = len.indexOf(Math.max(...len));
    return { index: i, seat, call: bid(1 + (i >> 1), longest), meaning: { artificial: i === 3 } } as CallRecord;
  });
}

function situation(p: PlayState, first: boolean): PlaySituation {
  const seat = p.toPlay;
  const declSide = (seat & 1) === (p.contract.declarer & 1);
  return {
    seat,
    contract: p.contract,
    leader: p.current.leader,
    trick: [...p.current.cards],
    hand: [...p.hands[seat]],
    partnerHand: declSide ? [...p.hands[partnerOf(seat)]] : first ? null : [...p.hands[p.dummy]],
    dummySeat: p.dummy,
    dummyHand: first ? null : [...p.hands[p.dummy]],
    played: p.tricks.slice(0, -1).flatMap(t => t.cards),
    openingLead: first,
    history: p.tricks.slice(0, -1),
  };
}

interface Run {
  struct: unknown[]; // cards, numbers and kinds: must not depend on the language
  text: string[]; // everything shown to people
  titles: string[]; // principle titles, in play order
}

/** Play seeded deals out and collect every piece of tutor output. */
function run(): Run {
  const out: Run = { struct: [], text: [], titles: [] };
  const say = (...t: string[]) => out.text.push(...t);
  for (let seed = 1; seed <= 24; seed++) {
    const rnd = mulberry32(seed * 977);
    const deal = dealCards(rnd);
    const dealer = (seed % 4) as Seat;
    const recs = records(deal, dealer);

    for (const h of deal) {
      const ev = evaluationSummary(handInfo(h));
      out.struct.push(ev.map(x => x.value));
      for (const x of ev) say(x.label, x.note);
    }

    const contract: Contract = { level: 1 + (seed % 7), strain: (seed % 5) as Strain, declarer: ((seed >> 2) % 4) as Seat, doubled: 0 };
    for (let s = 0; s < 4; s++) {
      const choices = openingLeadChoices(deal[s], contract, recs, s);
      out.struct.push(choices.map(c => [c.card, c.score]));
      for (const c of choices) say(c.suitReason, c.cardReason, describeLead(c));
    }

    const p = new PlayState(contract, deal);
    const prnd = mulberry32(seed);
    for (let n = 0; !p.isOver; n++) {
      const legal = p.legal();
      const card = n === 0 && seed % 2 === 0 ? openingLeadChoices(p.hands[p.toPlay], contract, recs, p.toPlay)[0].card : legal[Math.floor(prnd() * legal.length)];
      const sit = situation(p, n === 0);
      for (const c of legal) {
        const pr = explainPlay(sit, c);
        out.titles.push(pr.title);
        say(pr.title, pr.text);
      }
      // the signal a defender would give if every legal card were equally good
      const sg = chooseSignal(legal, p.hands[sit.seat], { seat: sit.seat, declarer: contract.declarer, trump: contract.strain, leader: sit.leader, trick: sit.trick, earlier: sit.history! });
      if (sg) {
        out.struct.push([sg.card, sg.kind, sg.height]);
        say(describeSignal(sg));
      }
      out.struct.push(card);
      p.play(card);
      if (n === 0 || n % 4 === 3) {
        for (let v = 0; v < 4; v++) {
          const rs = readPlay(p.tricks, contract.strain, v as Seat, p.dummy, [...p.hands[p.dummy]], [...p.hands[v]]);
          out.struct.push(rs.length, readSignals(p.tricks, contract.strain, v as Seat, p.dummy, [...p.hands[p.dummy]], [...p.hands[v]]).map(r => [r.fact.card, r.look, r.lengths]));
          for (const r of rs) say(r.title, r.text);
        }
      }
      if (n === 0 || n === 20) {
        const plan = makePlan([...p.hands[contract.declarer]], [...p.hands[p.dummy]], contract, p.tricks.flatMap(t => t.cards));
        out.struct.push([plan.kind, plan.need, plan.total, plan.ideas.length, plan.suits.map(sp => [sp.suit, sp.winners, sp.losers])]);
        say(plan.summary, ...plan.ideas, ...plan.suits.map(sp => sp.note));
      }
    }

    // par from a made-up double-dummy table
    const trnd = mulberry32(seed * 31);
    const table = [0, 1, 2, 3, 4].map(() => {
      const ns = Math.floor(trnd() * 14);
      return [ns, 13 - ns, ns, 13 - ns];
    });
    const par = parScore(table, (['None', 'NS', 'EW', 'Both'] as Vulnerability[])[seed % 4]);
    out.struct.push([par.scoreNS, par.contract]);
    say(...par.contracts, parContractName(par.contract));

    // card choice from single holdings
    const ranks = [...new Set(Array.from({ length: 1 + (seed % 6) }, () => 2 + Math.floor(rnd() * 13)))].sort((a, b) => b - a);
    for (const vsNT of [false, true]) {
      const pick = cardFromHolding(ranks, vsNT, seed % 3 === 0);
      out.struct.push([pick.rank, pick.kind]);
      say(pick.why);
    }
  }
  return out;
}

describe('tutor text in every language', () => {
  afterAll(() => setLang('en'));
  setLang('en');
  const en = run();
  setLang('bg');
  const bg = run();

  it('makes the same choices in English and Bulgarian', () => {
    expect(bg.struct).toEqual(en.struct);
    expect(bg.text.length).toBe(en.text.length);
    expect(en.text.length).toBeGreaterThan(5000);
  });

  it('takes the same principle branch in both languages', () => {
    const map = new Map<string, string>();
    en.titles.forEach((t, i) => {
      if (!map.has(t)) map.set(t, bg.titles[i]);
      expect(bg.titles[i], t).toBe(map.get(t));
    });
    expect(map.size).toBeGreaterThanOrEqual(20); // the deals reach most principles
  });

  it('writes English without Cyrillic or gaps', () => {
    for (const t of en.text) {
      expect(t.trim(), 'empty text').not.toBe('');
      expect(t, t).not.toMatch(CYRILLIC);
      expect(t, t).not.toMatch(/undefined|NaN|\[object/);
    }
  });

  for (const { id, name } of LANGUAGES.filter(l => l.id !== 'en' && l.id !== 'bg')) {
    it(`${name}: the same choices and principles, every text filled in`, () => {
      setLang(id);
      const r = run();
      expect(r.struct).toEqual(en.struct);
      expect(r.text.length).toBe(en.text.length);
      const map = new Map<string, string>();
      en.titles.forEach((t, i) => {
        if (!map.has(t)) map.set(t, r.titles[i]);
        expect(r.titles[i], t).toBe(map.get(t));
      });
      expect(new Set(map.values()).size, 'two principles share a title').toBe(map.size);
      for (const t of r.text) {
        expect(t.trim(), 'empty text').not.toBe('');
        expect(t, t).not.toMatch(/undefined|NaN|\[object/);
      }
    });
  }

  it('writes Bulgarian', () => {
    for (const t of bg.text) {
      expect(t.trim(), 'empty text').not.toBe('');
      expect(t, t).not.toMatch(/undefined|NaN|\[object/);
    }
    for (const t of bg.titles) expect(t, t).toMatch(CYRILLIC);
    expect(bg.text.filter(t => CYRILLIC.test(t)).length).toBeGreaterThan(bg.text.length * 0.9);
  });
});

describe('tutor text samples', () => {
  afterAll(() => setLang('en'));
  const contract: Contract = { level: 4, strain: 3, declarer: 2, doubled: 0 };
  // West leads ♥K; North (dummy) plays second with ♥A 4.
  const sit: PlaySituation = {
    seat: 0, contract, leader: 3, trick: [parseCard('HK')], hand: hand('HA H4 SK S2'), partnerHand: null,
    dummySeat: 0, dummyHand: null, played: [], openingLead: false,
  };

  it('names principles in each language', () => {
    setLang('en');
    expect(explainPlay(sit, parseCard('H4')).title).toBe('Second hand low');
    expect(explainPlay(sit, parseCard('HA')).title).toBe('Cover an honour with an honour');
    setLang('bg');
    expect(explainPlay(sit, parseCard('H4')).title).toBe('Втора ръка ниско');
    expect(explainPlay(sit, parseCard('HA')).title).toBe('Покрийте фигура с фигура');
  });

  it('chooses word forms per language', () => {
    const kqj = hand('SK SQ SJ S4 H9 H8 H7 DA D3 D2 C5 C4 C3');
    const vs3NT: Contract = { level: 3, strain: 4, declarer: 0, doubled: 0 };
    setLang('en');
    const en = openingLeadChoices(kqj, vs3NT, [], 1)[0];
    expect(en.suitReason).toBe('Against notrump, lead your longest and strongest suit (4 spades): you hope to set up long-card winners.');
    expect(en.cardReason).toBe('Top of a sequence (KQJ4): promises the card below it and denies the one above.');
    setLang('bg');
    const bg = openingLeadChoices(kqj, vs3NT, [], 1)[0];
    expect(bg.suitReason).toBe('Срещу без коз изведете най-дългия и най-силния си цвят (4 пики): надявате се да развиете печеливши карти от дължината.');
    expect(bg.card).toBe(en.card);
  });

  it('describes par', () => {
    const c: Contract = { level: 5, strain: 1, declarer: 3, doubled: 1 };
    setLang('en');
    expect(parContractName(c)).toBe('5♦X by E/W (W)');
    expect(parContractName(null)).toBe('Passed out');
    setLang('bg');
    expect(parContractName(c)).toBe('5♦X от И/З (З)');
    expect(parContractName(null)).toBe('Всички пас');
  });

  it('counts in plurals', () => {
    const six = handInfo(hand('SA SK S5 S4 S2 HK HQ H3 DA D7 C9 C8 C2'));
    const one = handInfo(hand('SK S5 S4 S3 S2 HQ HJ H3 D9 D7 C9 C8 C2'));
    setLang('en');
    expect(evaluationSummary(six).at(-1)!.note).toBe('6 controls');
    expect(evaluationSummary(one).at(-1)!.note).toBe('1 control');
    setLang('bg');
    expect(evaluationSummary(six).at(-1)!.note).toBe('контроли: 6');
  });
});
