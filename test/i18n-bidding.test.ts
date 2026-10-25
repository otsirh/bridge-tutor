// The bidding engine must behave identically in every language: only the
// words change. Bots bid the same deals in every language, and every
// call (chosen or not) must be read the same way. Every optional convention is
// switched on, so their rules are covered too.

import { describe, it, expect, afterAll } from 'vitest';
import { Auction, type Call } from '../src/core/auction';
import { dealCards, mulberry32, type Seat, type Vulnerability } from '../src/core/cards';
import { readAuction, advise, explainCall, summarizeShown } from '../src/bidding/engine';
import type { Meaning } from '../src/bidding/context';
import { describeShown } from '../src/bidding/types';
import { LANGUAGES, lang, setLang, type Lang } from '../src/i18n';
import { CONVENTIONS, DEFAULT_SYSTEM, setSystem } from '../src/bidding/config';

const DEALS = 300;
const VULS: Vulnerability[] = ['None', 'NS', 'EW', 'Both'];
const CYRILLIC = /[Ѐ-ӿ]/;

const distinct = (...lists: string[][]) => new Set(lists.flat());

/** What a meaning tells the table: must not depend on the language. */
const logic = (m: Meaning) => ({ shown: m.shown, forcing: m.forcing, artificial: m.artificial, tag: m.tag, data: m.data, natural: !!m.natural });

interface Run {
  auctions: Call[][];
  /** Per deal: the logic of every auction record. */
  records: ReturnType<typeof logic>[][];
  /** Per deal and call: the key of the rule each bot followed. */
  rules: (string | null)[][];
  /** Per deal and call: how the system reads every legal call at that point. */
  readings: ReturnType<typeof logic>[][][];
  /** Labels of the rules considered. */
  ruleNames: string[];
  /** Meaning names; a natural bid is named by the call ("4♣"). */
  names: string[];
  descs: string[];
  /** Condition texts and the hand's figures. */
  conds: string[];
  /** describeShown output (may be empty when nothing is shown). */
  shown: string[];
  summaries: string[];
}

function run(l: Lang): Run {
  setLang(l);
  const out: Run = { auctions: [], records: [], rules: [], readings: [], ruleNames: [], names: [], descs: [], conds: [], shown: [], summaries: [] };
  const rnd = mulberry32(2026);
  for (let t = 0; t < DEALS; t++) {
    const deal = dealCards(rnd);
    const vul = VULS[t % 4];
    const a = new Auction((t % 4) as Seat);
    const rules: (string | null)[] = [];
    const readings: ReturnType<typeof logic>[][] = [];
    while (!a.isComplete()) {
      const { ctx } = readAuction(a, vul);
      const advice = advise(deal[a.nextSeat], ctx);
      rules.push(advice.rule?.key ?? null);
      for (const rc of [...(advice.rule ? [{ rule: advice.rule, checks: advice.checks }] : []), ...advice.alternatives]) {
        out.ruleNames.push(rc.rule.name);
        out.descs.push(rc.rule.desc);
        for (const c of rc.checks) out.conds.push(c.text, ...(c.value === undefined ? [] : [c.value]));
      }
      readings.push(a.legalCalls().map(call => {
        const m = explainCall(ctx, call);
        out.names.push(m.name);
        out.descs.push(m.desc);
        out.conds.push(...m.conds);
        out.shown.push(describeShown(m.shown));
        return logic(m);
      }));
      a.push(advice.call);
    }
    const view = readAuction(a, vul);
    out.auctions.push(a.calls);
    out.records.push(view.records.map(r => logic(r.meaning)));
    out.rules.push(rules);
    out.readings.push(readings);
    out.summaries.push(...view.shown.map(summarizeShown));
  }
  return out;
}

describe('bidding in every language', () => {
  const initial = lang();
  setSystem(Object.fromEntries(CONVENTIONS.map(c => [c.id, true])));
  afterAll(() => {
    setLang(initial);
    setSystem(DEFAULT_SYSTEM);
  });
  const en = run('en');
  const bg = run('bg');

  it('bots make the same calls', () => {
    expect(bg.auctions).toEqual(en.auctions);
    expect(bg.rules).toEqual(en.rules);
  });

  it('every call shows the same thing', () => {
    expect(bg.records).toEqual(en.records);
    expect(bg.readings).toEqual(en.readings);
  });

  it('English text is all English', () => {
    for (const s of distinct(en.ruleNames, en.names, en.descs, en.conds, en.summaries)) {
      expect(s.trim(), 'empty text').not.toBe('');
      expect(s, s).not.toMatch(CYRILLIC);
    }
    for (const s of distinct(en.shown)) expect(s, s).not.toMatch(CYRILLIC);
  });

  it('Bulgarian names and descriptions are in Bulgarian', () => {
    for (const s of distinct(bg.ruleNames, bg.descs)) {
      expect(s.trim(), 'empty text').not.toBe('');
      expect(s, s).toMatch(CYRILLIC);
    }
    for (const s of distinct(bg.names, bg.conds, bg.summaries)) expect(s.trim(), 'empty text').not.toBe('');
  });

  for (const { id, name } of LANGUAGES.filter(l => l.id !== 'en' && l.id !== 'bg')) {
    it(`${name}: the same calls and readings, every text filled in`, () => {
      const r = run(id);
      expect(r.auctions).toEqual(en.auctions);
      expect(r.rules).toEqual(en.rules);
      expect(r.records).toEqual(en.records);
      expect(r.readings).toEqual(en.readings);
      for (const s of distinct(r.ruleNames, r.names, r.descs, r.conds, r.summaries)) {
        expect(s.trim(), 'empty text').not.toBe('');
        expect(s, s).not.toMatch(/undefined|NaN|\[object/);
      }
    }, 60_000); // a whole system's worth of auctions; slow machines need the time
  }

  it('switching back gives the same English (nothing cached at load)', () => {
    const again = run('en');
    expect(again.ruleNames).toEqual(en.ruleNames);
    expect(again.names).toEqual(en.names);
    expect(again.descs).toEqual(en.descs);
    expect(again.conds).toEqual(en.conds);
  }, 60_000); // the same whole run as above
});
