// Checks the Learn-room content of every language in src/learn/content/<lang>/:
// each language must teach the same lessons as English (same ids, diagrams and
// quiz answers), use only the allowed markup, and every hand, deal and auction
// in the diagrams must be well formed.

import { describe, it, expect } from 'vitest';
import { Auction, parseCall } from '../src/core/auction';
import type { Seat } from '../src/core/cards';
import type { Lesson, LessonContent } from '../src/learn/types';

const modules = import.meta.glob<{ content: LessonContent }>('../src/learn/content/*/index.ts', { eager: true });
const CONTENT: Record<string, LessonContent> = {};
for (const [path, mod] of Object.entries(modules)) CONTENT[path.split('/').slice(-2)[0]] = mod.content;
const LANGS = Object.keys(CONTENT).sort();
const en = CONTENT.en;

// ---------------------------------------------------------------------------
// markup

const ALLOWED_TAGS = new Set(['h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div']);
/** Special div classes and the data attributes each may carry. */
const DIV_DATA: Record<string, string[]> = {
  hand: ['cards', 'label'],
  deal: ['n', 'e', 's', 'w', 'caption'],
  auction: ['calls', 'dealer'],
  tip: [],
  warn: [],
};
const EMPTY_DIVS = new Set(['hand', 'deal', 'auction']);
/** Tags that give a lesson its shape; their sequence must match across languages. */
const STRUCTURE_TAGS = new Set(['h3', 'h4', 'ul', 'ol', 'li', 'table', 'tr', 'th', 'td']);
/** Prose attributes, translated per language. */
const PROSE_DATA = new Set(['label', 'caption']);

interface Div {
  cls: string;
  data: Record<string, string>;
}

interface Markup {
  problems: string[];
  divs: Div[];
  structure: string[];
}

function scanMarkup(body: string): Markup {
  const problems: string[] = [];
  const divs: Div[] = [];
  const structure: string[] = [];
  const stack: string[] = [];
  const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^<>]*)>/g;
  let tags = 0;
  for (const m of body.matchAll(tagRe)) {
    tags++;
    const [whole, slash, rawName, rawAttrs] = m;
    const name = rawName.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) {
      problems.push(`tag not allowed: ${whole}`);
      continue;
    }
    if (slash) {
      const open = stack.pop();
      if (open !== name) problems.push(`</${name}> closes <${open ?? 'nothing'}>`);
      continue;
    }
    stack.push(name);
    const attrText = rawAttrs.trim();
    if (name !== 'div') {
      if (attrText) problems.push(`attributes not allowed on <${name}>: ${whole}`);
      if (STRUCTURE_TAGS.has(name)) structure.push(name);
      continue;
    }
    const attrs: Record<string, string> = {};
    const rest = attrText.replace(/([a-z-]+)="([^"]*)"/g, (_, k: string, v: string) => {
      if (k in attrs) problems.push(`duplicate attribute ${k}: ${whole}`);
      attrs[k] = v;
      return '';
    });
    if (rest.trim()) problems.push(`malformed attributes: ${whole}`);
    const cls = attrs.class;
    if (!cls || !(cls in DIV_DATA)) {
      problems.push(`div needs class hand, deal, auction, tip or warn: ${whole}`);
      continue;
    }
    structure.push('div.' + cls);
    const data: Record<string, string> = {};
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') continue;
      const key = k.startsWith('data-') ? k.slice(5) : '';
      if (!DIV_DATA[cls].includes(key)) problems.push(`attribute ${k} not allowed on div.${cls}`);
      else data[key] = v;
    }
    divs.push({ cls, data });
    if (EMPTY_DIVS.has(cls) && !body.startsWith('</div>', m.index! + whole.length)) problems.push(`div.${cls} must be empty: ${whole}`);
  }
  if (stack.length) problems.push(`unclosed tags: ${stack.join(', ')}`);
  const lt = body.split('<').length - 1;
  if (lt !== tags) problems.push(`${lt - tags} stray "<" characters`);
  return { problems, divs, structure };
}

/** Plain-text fields of a lesson (everything except the HTML body). */
function plainTexts(l: Lesson): string[] {
  return [l.title, l.summary, ...l.keyPoints, ...l.quiz.flatMap(q => [q.q, ...q.options, q.explain])];
}

// ---------------------------------------------------------------------------
// hands, deals and auctions

const RANKS = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

/** Parses "S:AK52 H:KJ3 D:Q72 C:A85" ("-" for a void) into cards like "SA", "H10". */
function parseHolding(spec: string): string[] {
  const parts = spec.split(' ');
  if (parts.length !== 4 || parts.map(p => p.slice(0, 2)).join(' ') !== 'S: H: D: C:') {
    throw new Error(`"${spec}": expected "S:… H:… D:… C:…"`);
  }
  const cards: string[] = [];
  for (const part of parts) {
    const suit = part[0];
    const holding = part.slice(2);
    if (holding === '-') continue;
    const ranks = holding.match(/10|[AKQJ2-9]/g) ?? [];
    if (ranks.join('') !== holding) throw new Error(`"${spec}": bad ranks in ${part} (ten is "10")`);
    for (let i = 0; i < ranks.length; i++) {
      if (i > 0 && RANKS.indexOf(ranks[i]) <= RANKS.indexOf(ranks[i - 1])) {
        throw new Error(`"${spec}": ranks in ${part} must be distinct and run from high to low`);
      }
      cards.push(suit + ranks[i]);
    }
  }
  return cards;
}

function checkHand(div: Div): string[] {
  try {
    const cards = parseHolding(div.data.cards ?? '');
    return cards.length === 13 ? [] : [`hand "${div.data.cards}" has ${cards.length} cards`];
  } catch (e) {
    return [(e as Error).message];
  }
}

function checkDeal(div: Div): string[] {
  const hands: string[][] = [];
  try {
    for (const seat of ['n', 'e', 's', 'w']) if (div.data[seat] !== undefined) hands.push(parseHolding(div.data[seat]));
  } catch (e) {
    return [(e as Error).message];
  }
  const problems: string[] = [];
  const desc = JSON.stringify(div.data);
  if (hands.length < 2) problems.push(`deal needs at least two hands: ${desc}`);
  // A full deal has 13 cards a hand; an end position has the same smaller number in every hand.
  if (new Set(hands.map(h => h.length)).size > 1) problems.push(`hands of different lengths: ${desc}`);
  const all = hands.flat();
  const twice = all.filter((c, i) => all.indexOf(c) !== i);
  if (twice.length) problems.push(`cards dealt twice (${twice.join(' ')}): ${desc}`);
  return problems;
}

function checkAuction(div: Div): string[] {
  const { calls = '', dealer = '' } = div.data;
  const seat = 'NESW'.indexOf(dealer);
  if (!dealer || seat < 0) return [`bad data-dealer "${dealer}"`];
  const tokens = calls.trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return ['empty data-calls'];
  const auction = new Auction(seat as Seat);
  for (const t of tokens) {
    if (!/^(P|X|XX|[1-7](C|D|H|S|NT))$/.test(t)) return [`"${calls}": "${t}" is not a call in short English form`];
    try {
      auction.push(parseCall(t));
    } catch (e) {
      return [`"${calls}" (dealer ${dealer}): ${(e as Error).message}`];
    }
  }
  return [];
}

const DIAGRAM_CHECKS: Record<string, (d: Div) => string[]> = { hand: checkHand, deal: checkDeal, auction: checkAuction };

/** Language-neutral data attributes of a lesson, as sorted "name=value" strings. */
function dataValues(divs: Div[]): string[] {
  return divs.flatMap(d => Object.entries(d.data).filter(([k]) => !PROSE_DATA.has(k)).map(([k, v]) => `${d.cls}.${k}=${v}`)).sort();
}

// ---------------------------------------------------------------------------

describe('lesson content', () => {
  it('has English and at least one other language', () => {
    expect(en).toBeDefined();
    expect(LANGS.length).toBeGreaterThan(1);
  });

  it('English lessons have unique ids and sensible quizzes', () => {
    const ids = en.lessons.map(l => l.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const l of en.lessons) {
      expect(l.id, l.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      for (const [i, q] of l.quiz.entries()) {
        expect(q.answer, `${l.id} question ${i + 1}`).toBeGreaterThanOrEqual(0);
        expect(q.answer, `${l.id} question ${i + 1}`).toBeLessThan(q.options.length);
      }
    }
  });

  it('English contains no Cyrillic', () => {
    const cyr = /[Ѐ-ӿ]/;
    for (const l of en.lessons) {
      for (const t of [...plainTexts(l), l.body]) expect(cyr.test(t), `${l.id}: ${t.match(/.{0,30}[Ѐ-ӿ]+.{0,30}/)?.[0]}`).toBe(false);
    }
    for (const g of en.glossary) expect(cyr.test(g.term + g.def), g.term).toBe(false);
  });

  for (const lang of LANGS) {
    describe(lang, () => {
      const c = CONTENT[lang];

      it('has the same lessons in the same order as English', () => {
        expect(c.lessons.map(l => l.id)).toEqual(en.lessons.map(l => l.id));
      });

      it('matches English topic, level, key points and quiz shape', () => {
        for (const [i, l] of c.lessons.entries()) {
          const e = en.lessons[i];
          if (!e || e.id !== l.id) continue;
          expect(l.topic, l.id).toBe(e.topic);
          expect(l.level, l.id).toBe(e.level);
          expect(l.keyPoints.length, `${l.id} key points`).toBe(e.keyPoints.length);
          expect(l.quiz.length, `${l.id} quiz`).toBe(e.quiz.length);
          for (const [qi, q] of l.quiz.entries()) {
            const eq = e.quiz[qi];
            if (!eq) continue;
            expect(q.options.length, `${l.id} question ${qi + 1} options`).toBe(eq.options.length);
            expect(q.answer, `${l.id} question ${qi + 1} answer`).toBe(eq.answer);
          }
        }
      });

      it('uses only the allowed markup', () => {
        const problems: string[] = [];
        for (const l of c.lessons) {
          for (const p of scanMarkup(l.body).problems) problems.push(`${l.id}: ${p}`);
          for (const t of plainTexts(l)) if (/<\/?[a-zA-Z]/.test(t)) problems.push(`${l.id}: markup in plain text: ${t}`);
        }
        expect(problems).toEqual([]);
      });

      it('has well-formed hands, deals and auctions', () => {
        const problems: string[] = [];
        for (const l of c.lessons) {
          for (const d of scanMarkup(l.body).divs) for (const p of DIAGRAM_CHECKS[d.cls]?.(d) ?? []) problems.push(`${l.id}: ${p}`);
        }
        expect(problems).toEqual([]);
      });

      it('has the same diagrams and lesson structure as English', () => {
        for (const l of c.lessons) {
          const e = en.lessons.find(x => x.id === l.id);
          if (!e) continue;
          const mine = scanMarkup(l.body);
          const theirs = scanMarkup(e.body);
          expect(dataValues(mine.divs), `${l.id} data attributes`).toEqual(dataValues(theirs.divs));
          expect(mine.structure, `${l.id} sections, lists, tables, tips and warnings`).toEqual(theirs.structure);
        }
      });

      it('has a glossary the size of the English one', () => {
        expect(c.glossary.length).toBe(en.glossary.length);
        const terms = c.glossary.map(g => g.term);
        expect(new Set(terms).size).toBe(terms.length);
        for (const g of c.glossary) expect(g.def.trim(), g.term).not.toBe('');
      });
    });
  }
});
