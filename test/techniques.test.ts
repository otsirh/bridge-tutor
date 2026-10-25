import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { type Card, type Seat, N, E, S, W, NT, SPADES, dealCards, mulberry32, parseCard, suitOf } from '../src/core/cards';
import { Auction, PASS, bid } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import { encodeDeal, loadItems, exportAll } from '../src/game/journal';
import { problemPosition, type ProblemStat } from '../src/game/problems';
import {
  type TechniqueDeal, type TechniqueId, TECHNIQUES, TECHNIQUE_INFO, LESSON_TECHNIQUES, TECH_BANK_SIZE, ANY_TARGET, recogniseTechnique, mayArise,
  interchangeable, followScript, scriptedCard, techniqueOutcome, keyDecision, techniqueReviewItem, validTechnique, generateTechnique,
  addTechnique, loadTechBank, removeTechnique, pickTechnique, techCounts, recordTechScore, loadTechScore, TechniqueFactory,
} from '../src/game/techniques';
import { STARTER_TECHNIQUES } from '../src/game/starterTechniques';
import { LESSON_THEMES, themeById } from '../src/game/themes';
import { readAuction } from '../src/bidding/engine';
import { Game } from '../src/game/game';

const C = (s: string) => parseCard(s);
const Cs = (s: string) => (s ? s.split(' ').map(C) : []);

// a small in-memory localStorage for the bank
beforeEach(() => {
  const mem = new Map<string, string>();
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, String(v)), removeItem: (k: string) => void mem.delete(k) },
  });
});

/**
 * A position with South declaring (`strain`): hands as card lists, then the
 * cards played. With `lead`, a first trick is added — West's ♣2, North's ♣3,
 * East's ♣4, South's ♣A — so South leads the second trick.
 */
function position(strain: number, hands: Record<'n' | 'e' | 's' | 'w', string>, play: string[] = [], lead = true): PlayState {
  const extra = lead ? { n: 'C3', e: 'C4', s: 'CA', w: 'C2' } : { n: '', e: '', s: '', w: '' };
  const deal: Card[][] = (['n', 'e', 's', 'w'] as const).map(k => [...Cs(hands[k]), ...Cs(extra[k])]);
  const p = new PlayState({ level: 3, strain: strain as 0 | 1 | 2 | 3 | 4, declarer: S, doubled: 0 }, deal);
  for (const c of [...(lead ? ['C2', 'C3', 'C4', 'CA'] : []), ...play]) p.play(C(c));
  return p;
}

const stats = (cards: string[], t = 9, s = 0.5): ProblemStat[] => cards.map((c, i) => ({ c: C(c), t: t - i * 0.5, s: Math.max(0, s - i * 0.2) }));

describe('recognising the technique (declarer’s view only)', () => {
  it('hold-up: notrump, the defenders’ suit, a card that wins kept back', () => {
    // West leads the ♠K; dummy and East play low; South holds A 8 5
    const hands = { n: 'S7 S4 H2', e: 'S9 S3 H3', s: 'SA S8 S5', w: 'SK SQ SJ' };
    const p = position(NT, hands, ['SK', 'S4', 'S3'], false);
    expect(recogniseTechnique(p, Cs('S8 S5'), stats(['S5', 'S8', 'SA']))).toBe('holdUp');
    // taking the trick is no hold-up
    expect(recogniseTechnique(p, Cs('SA'), stats(['SA', 'S5', 'S8']))).not.toBe('holdUp');
    // in a suit contract the same card is not called a hold-up
    expect(recogniseTechnique(position(2, hands, ['SK', 'S4', 'S3'], false), Cs('S8 S5'), stats(['S5', 'S8', 'SA']))).not.toBe('holdUp');
    // with A J 5 ducking the king may be a Bath coup: not called a hold-up either
    const bath = position(NT, { ...hands, s: 'SA SJ S5', w: 'SK SQ S8' }, ['SK', 'S4', 'S3'], false);
    expect(recogniseTechnique(bath, Cs('S5'), stats(['S5', 'SA', 'SJ']))).not.toBe('holdUp');
  });

  it('hold-up from dummy: second hand plays below the card led, declarer has nothing higher', () => {
    const p = position(NT, { n: 'SA S7 S4', e: 'S9 S3 H3', s: 'S6 S5 H2', w: 'SK SQ SJ' }, ['SK'], false);
    expect(recogniseTechnique(p, Cs('S4 S7'), stats(['S4', 'S7', 'SA']))).toBe('holdUp');
  });

  it('duck: low from the long hand that holds the top cards, in your own long suit', () => {
    // South leads the ♦2 towards dummy's A K 7 6 5; West plays the 3
    const p = position(NT, { n: 'DA DK D7 D6 D5', e: 'DQ DJ D9 D8 H2', s: 'D4 D2 H5 H4 H3', w: 'D10 D3 HA HK HQ' }, ['D2', 'D3']);
    expect(recogniseTechnique(p, Cs('D5 D6 D7'), stats(['D5', 'D6', 'D7', 'DA', 'DK']))).toBe('duck');
    expect(recogniseTechnique(p, Cs('DA DK'), stats(['DA', 'DK', 'D5']))).not.toBe('duck');
  });

  it('finesse: the queen from A Q after a low card from the other hand; or partner’s honour left to run', () => {
    const p = position(NT, { n: 'DA DQ D4', e: 'DK D9 D8', s: 'D3 D2 HA', w: 'DJ D7 D5' }, ['D3', 'D5']);
    expect(p.toPlay).toBe(N);
    expect(recogniseTechnique(p, Cs('DQ'), stats(['DQ', 'DA', 'D4']))).toBe('finesse');
    // running the queen led from Q J 10 towards the ace
    const q = position(NT, { n: 'DA D4 D3', e: 'DK D9 D8', s: 'DQ DJ D10', w: 'D7 D6 D5' }, ['DQ', 'D5']);
    expect(recogniseTechnique(q, Cs('D3 D4'), stats(['D3', 'D4', 'DA']))).toBe('finesse');
  });

  it('unblocking: the honour from the short hand first, when a low card would also have kept the trick', () => {
    const p = position(NT, { n: 'HA HQ HJ H7 H5', e: 'H10 H9 H8 D3', s: 'HK H2 D2 D4', w: 'H6 H4 H3 D5' });
    expect(p.toPlay).toBe(S);
    expect(recogniseTechnique(p, Cs('HK'), stats(['HK', 'H2']))).toBe('unblock');
    // a low card that would lose the trick: winning with the honour is no unblock
    const q = position(NT, { n: 'H7 H5 H4 S2', e: 'HQ H9 H8 S3', s: 'HK H2 S4 S5', w: 'HA H6 H3 SA' }, ['H3', 'H4', 'HQ'], false);
    expect(recogniseTechnique(q, Cs('HK'), stats(['HK', 'H2']))).not.toBe('unblock');
  });

  it('ruffing in the short hand: lead a loser of the suit the hand with fewer trumps is void in', () => {
    // 3♠ by South: South has five trumps, dummy three and no hearts
    const p = position(SPADES, { n: 'S9 S8 S7 D5', e: 'HA HK SJ D6', s: 'SA SK SQ S6 S5 H7', w: 'HQ HJ S2 D7' });
    expect(recogniseTechnique(p, Cs('H7'), stats(['H7', 'SA']))).toBe('ruffShort');
  });

  it('drawing trumps: any trump does it — when only one trump is right, it is no "draw trumps"', () => {
    const p = position(SPADES, { n: 'S9 S8 D5 D4', e: 'SJ S10 D6 D3', s: 'SA SK SQ S3', w: 'S2 HJ D7 D2' });
    expect(recogniseTechnique(p, Cs('SA SK SQ S3'), stats(['SA', 'SK', 'SQ', 'S3', 'D7']))).toBe('drawTrumps');
    expect(recogniseTechnique(p, Cs('SA'), stats(['SA', 'S3']))).not.toBe('drawTrumps');
  });

  it('a safety play: fewer tricks on average than another card, but clearly more often making', () => {
    const p = position(NT, { n: 'DA D5 D4', e: 'DQ D9 D8', s: 'DK D10 D2', w: 'DJ D7 D6' }, ['D6', 'D4', 'D8', 'DK'], false);
    const st: ProblemStat[] = [{ c: C('D2'), t: 9.4, s: 0.95 }, { c: C('D10'), t: 9.8, s: 0.7 }];
    expect(recogniseTechnique(p, [C('D2')], st)).toBe('safety');
    // more tricks and more success: just the better card
    expect(recogniseTechnique(p, [C('D2')], [{ c: C('D2'), t: 9.9, s: 0.95 }, { c: C('D10'), t: 9.4, s: 0.7 }])).toBeNull();
  });

  it('never for the defenders, nor the opening lead', () => {
    const p = position(NT, { n: 'S7 S4 H2', e: 'S9 S3 H3', s: 'SA S8 S5', w: 'SK SQ SJ' }, [], false);
    expect(recogniseTechnique(p, Cs('SK'), stats(['SK', 'SQ']))).toBeNull();
    // West to play to the second trick: a defender's decision
    const q = position(NT, { n: 'S7 S4 H2', e: 'S9 S3 H3', s: 'SA S8 S5', w: 'SK SQ SJ' }, ['S5']);
    expect(q.toPlay).toBe(W);
    expect(recogniseTechnique(q, Cs('SJ'), stats(['SJ', 'SK']))).toBeNull();
  });
});

describe('techniques and lessons', () => {
  it('every technique is dealt from real themes and taught by a lesson; lessons linked to one exist', () => {
    for (const t of TECHNIQUES) {
      expect(TECHNIQUE_INFO[t].themes.length).toBeGreaterThan(0);
      for (const th of TECHNIQUE_INFO[t].themes) expect(themeById(th), th).toBeTruthy();
      expect(TECHNIQUE_INFO[t].lesson in LESSON_THEMES, TECHNIQUE_INFO[t].lesson).toBe(true);
    }
    for (const [lesson, t] of Object.entries(LESSON_TECHNIQUES)) {
      expect(lesson in LESSON_THEMES, lesson).toBe(true);
      expect(TECHNIQUES).toContain(t);
    }
  });

  it('the quick look before a walk keeps only deals where the technique can come up', () => {
    const hands = dealCards(mulberry32(5));
    const suit = { level: 4, strain: SPADES, declarer: S, doubled: 0 } as const;
    expect(mayArise('holdUp', hands, suit, [])).toBe(false); // no hold-up in a suit contract
    expect(mayArise('drawTrumps', hands, suit, [])).toBe(true);
    expect(mayArise('ruffShort', hands, { ...suit, strain: NT }, [])).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// A hand-made technique deal to follow at the table

/** Give `seat` the card, taking it from whoever holds it in exchange for one of `seat`'s cards of another suit. */
function give(deal: Card[][], seat: Seat, card: Card) {
  const from = deal.findIndex(h => h.includes(card));
  if (from === seat) return;
  const back = deal[seat].find(c => suitOf(c) !== suitOf(card) && !(deal[from].includes(c)))!;
  deal[from] = deal[from].filter(c => c !== card).concat(back);
  deal[seat] = deal[seat].filter(c => c !== back).concat(card);
}

/**
 * 3NT by South (South opens 1NT, North raises). West
 * leads the ♥K; North plays the ♥2, East the ♥3; South to play from ♥A 5 4
 * with ♥5 and ♥4 interchangeable. The answer is a low heart.
 */
function heartDeal(): TechniqueDeal {
  const deal = dealCards(mulberry32(11)).map(h => [...h]);
  give(deal, W, C('HK'));
  give(deal, N, C('H2'));
  give(deal, E, C('H3'));
  for (const c of ['HA', 'H5', 'H4']) give(deal, S, C(c));
  const calls = [PASS, PASS, bid(1, NT), PASS, bid(3, NT), PASS, PASS, PASS];
  const play = Cs('HK H2 H3');
  const p = new PlayState(new Auction(N, calls).contract()!, deal);
  for (const c of play) p.play(c);
  const legal = p.legal();
  const st: ProblemStat[] = legal.map(c => ({ c, t: c === C('HA') ? 8.4 : 9.1, s: c === C('HA') ? 0.4 : 0.8 })).sort((a, b) => b.s - a.s || b.c - a.c);
  return {
    v: 1, id: 'test-heart', kind: 'declarer', theme: 'nt-games', board: 1, dealer: N, vul: 'None', deal: encodeDeal(deal), calls, play, seat: S,
    skill: 'play.declarer', n: 48, stats: st, answer: legal.filter(c => c !== C('HA')).sort((a, b) => b - a), created: 1, technique: 'holdUp',
  };
}

describe('following the walk at the table', () => {
  it('a stored deal replays to its position and is valid', () => {
    const td = heartDeal();
    expect(validTechnique(JSON.parse(JSON.stringify(td)))).toBe(true);
    const { play } = problemPosition(td);
    expect(play.toPlay).toBe(S);
    expect(new Set(play.legal())).toEqual(new Set(td.stats.map(s => s.c)));
    expect(validTechnique({ ...td, technique: 'nonsense' })).toBe(false);
    expect(validTechnique({ ...td, seat: W })).toBe(false);
  });

  it('the defenders play the walk’s cards while you follow it, then play freely', () => {
    const td = heartDeal();
    expect(scriptedCard(td, [])).toBe(C('HK'));
    expect(scriptedCard(td, Cs('HK H2'))).toBe(C('H3'));
    expect(scriptedCard(td, Cs('HK H2 H3'))).toBeNull(); // the key moment: yours
    expect(scriptedCard(td, Cs('HK H2 H3 HA'))).toBeNull(); // after it: the bots' own cards
    // a card that is not interchangeable with the walk's leaves it
    const longer = { ...td, play: Cs('HK H2 H3 H4') };
    expect(followScript(longer, Cs('HK H2 H3')).on).toBe(true);
    expect(followScript(longer, Cs('HK H2 H3 HA'))).toMatchObject({ on: false, at: 3 });
  });

  it('an interchangeable card keeps the play on the walk, and the key card is translated', () => {
    const td: TechniqueDeal = { ...heartDeal(), play: Cs('HK H2 H3 H4'), seat: W };
    // (the walk goes one card further: South's ♥4; the outcome below only needs the translation)
    const p = problemPosition({ ...td, play: Cs('HK H2 H3') }).play;
    expect(interchangeable(p, S, C('H5'), C('H4'))).toBe(true);
    expect(interchangeable(p, S, C('HA'), C('H4'))).toBe(false);
    const f = followScript(td, Cs('HK H2 H3 H5'));
    expect(f.on).toBe(true);
    expect(f.at).toBe(4);
    expect(f.toScript(C('H4'))).toBe(C('H5'));
    expect(f.toActual(C('H5'))).toBe(C('H4'));
  });

  it('the outcome: ahead, found, missed or off the walk — with the numbers in your cards', () => {
    const td = heartDeal();
    const yes = [true, true, true, true];
    expect(techniqueOutcome(td, Cs('HK H2'), yes).status).toBe('ahead');
    expect(techniqueOutcome(td, Cs('HK H2 H3 H4'), yes)).toMatchObject({ status: 'found', index: 3, card: C('H4') });
    expect(techniqueOutcome(td, Cs('HK H2 H3 HA'), yes)).toMatchObject({ status: 'missed', card: C('HA'), best: td.answer });
    expect(techniqueOutcome(td, Cs('HK H2 H3 HA'), [true, true, true, false]).status).toBe('auto');
    const d = keyDecision(td, Cs('HK H2 H3'));
    expect(d.samples).toBe(48);
    expect(d.equal).toEqual(td.answer);
    const item = techniqueReviewItem(td, C('HA'), 5);
    expect(item).toMatchObject({ id: 'technique-test-heart:c:3', source: 'technique', kind: 'card', seat: S, yours: C('HA'), play: td.play, answer: td.answer });
  });
});

describe('the bank of ready deals', () => {
  const deal = (id: string, technique: TechniqueId): TechniqueDeal => ({ ...heartDeal(), id, technique });

  it('a new player starts with the ready-made deals, all valid and recognised again from their position', () => {
    const bank = loadTechBank();
    expect(bank.length).toBe(STARTER_TECHNIQUES.length);
    expect(new Set(STARTER_TECHNIQUES.map(t => t.id)).size).toBe(STARTER_TECHNIQUES.length);
    for (const td of STARTER_TECHNIQUES) {
      expect(validTechnique(td), td.id).toBe(true);
      const { play } = problemPosition(td);
      expect(recogniseTechnique(play, td.answer, td.stats), td.id).toBe(td.technique);
      expect(td.stats[0].s).toBeGreaterThanOrEqual(0.5);
    }
  });

  it('keeps the newest few of each technique and serves "any" in turn', () => {
    localStorage.setItem('bridge-tutor.techniques.v1', JSON.stringify({ v: 1, bank: [], score: {} }));
    for (let i = 0; i < TECH_BANK_SIZE + 2; i++) addTechnique(deal(`h${i}`, 'holdUp'));
    addTechnique(deal('f0', 'finesse'));
    expect(techCounts().holdUp).toBe(TECH_BANK_SIZE);
    expect(loadTechBank().map(t => t.id)).not.toContain('h0');
    expect(pickTechnique('holdUp')?.technique).toBe('holdUp');
    expect(pickTechnique('duck')).toBeNull();
    expect(pickTechnique('any', 'finesse')?.technique).toBe('holdUp');
    expect(pickTechnique('any', 'holdUp')?.technique).toBe('finesse');
    removeTechnique('f0');
    expect(techCounts().finesse).toBe(0);
    recordTechScore('holdUp', true);
    recordTechScore('holdUp', false);
    expect(loadTechScore().holdUp).toEqual({ done: 2, right: 1 });
    // part of the backup
    expect(JSON.parse(exportAll()).data['bridge-tutor.techniques.v1'].bank.length).toBe(TECH_BANK_SIZE);
  });

  it('the factory looks for the technique wanted, or any until enough are ready', () => {
    const f = new TechniqueFactory();
    const none = Object.fromEntries(TECHNIQUES.map(t => [t, 0])) as Record<TechniqueId, number>;
    expect(f.nextWant('holdUp', none)).toBe('holdUp');
    expect(f.nextWant('holdUp', { ...none, holdUp: TECH_BANK_SIZE })).toBeUndefined();
    expect(f.nextWant('any', none)).toBeNull();
    expect(f.nextWant('any', { ...none, finesse: ANY_TARGET })).toBeUndefined();
  });
});

describe('finding deals', () => {
  const quick = { extraSamples: 48, screenMs: 1e9, extraMs: 1e9, botMs: 1e9, dealBudgetMs: 1e9, now: () => 1 };

  it('finds a hold-up on known seeds, and the stored position gives the same technique again', async () => {
    let found: TechniqueDeal | null = null;
    // seeds known to give one (deterministic: unlimited time), others in case the bidding changes
    for (const seed of [20004, 30002, 20000, 20001, 20002]) {
      found = await generateTechnique(seed, { ...quick, want: 'holdUp' });
      if (found) break;
    }
    expect(found).not.toBeNull();
    const td = found!;
    expect(td.technique).toBe('holdUp');
    expect(td.theme).toBe('nt-games');
    expect(td.play.length).toBeLessThan(8);
    expect(validTechnique(JSON.parse(JSON.stringify(td)))).toBe(true);
    const { play, auction } = problemPosition(td);
    expect(play.toPlay).toBe(td.seat);
    expect((play.contract.declarer & 1)).toBe(0);
    expect(new Set(play.legal())).toEqual(new Set(td.stats.map(s => s.c)));
    expect(td.answer).toContain(td.stats[0].c);
    expect(td.n).toBeGreaterThanOrEqual(32);
    expect(td.stats[0].s).toBeGreaterThanOrEqual(0.5);
    expect(recogniseTechnique(play, td.answer, td.stats)).toBe(td.technique);
    expect(auction.calls).toEqual(td.calls);
    expect(readAuction(auction, td.vul).records.length).toBe(td.calls.length);
  }, 400000);
});

// ---------------------------------------------------------------------------
// At the table

describe('a technique deal at the table', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  async function until(g: Game, cond: () => boolean) {
    for (let i = 0; i < 200 && !cond(); i++) await vi.advanceTimersByTimeAsync(300);
    expect(cond()).toBe(true);
  }

  it('starts at the play, keeps the tutor quiet before the key moment, and counts the outcome once', async () => {
    vi.useFakeTimers();
    const td = heartDeal();
    const g = new Game({ idle: true });
    g.updateSettings({ speed: 'fast', strength: 'quick', tutor: true, coach: true, biddingOnly: true });
    g.playTechnique(td, { hints: false });
    expect(g.auction.calls).toEqual(td.calls);
    expect(g.phase).toBe('play'); // even with bidding-only practice on
    expect(g.feedback.some(f => f.wording().title === 'Technique practice')).toBe(true);
    // West leads the walk's card, then it is your turn in dummy
    await until(g, () => g.isHumanTurn());
    expect(g.play!.history().map(h => h.card)).toEqual([C('HK')]);
    expect(g.hint?.kind === 'card' && g.hint.withheld).toBe(true);
    await g.submitCard(C('H2'));
    await until(g, () => g.isHumanTurn());
    expect(g.play!.history().map(h => h.card)).toEqual(Cs('HK H2 H3'));
    expect(g.techniqueOutcome()?.status).toBe('ahead');
    expect(g.hint?.kind === 'card' && g.hint.withheld).toBe(true);
    // the wrong card (no coach to stop it), then the computer plays the hand out
    await g.submitCard(C('HA'));
    expect(g.techniqueOutcome()?.status).toBe('missed');
    void g.playOut();
    await until(g, () => g.phase === 'review');
    expect(loadTechScore().holdUp).toEqual({ done: 1, right: 0 });
    const items = loadItems();
    expect(items.filter(i => i.source === 'technique').map(i => i.id)).toEqual(['technique-test-heart:c:3']);
    // the board's own item for that card is not added twice
    expect(items.filter(i => i.id.endsWith(':c:3')).length).toBe(1);
    // the key card is judged with the walk's simulation
    expect(g.cards[3].advice?.samples).toBe(48);
    // playing it again does not count again
    g.newDeal(true);
    expect(g.technique?.deal.id).toBe('test-heart');
    expect(g.auction.calls).toEqual(td.calls);
    expect(loadTechScore().holdUp.done).toBe(1);
  }, 120000);
});
