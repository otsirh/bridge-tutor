import { describe, it, expect } from 'vitest';
import { parseCard, dealCards, mulberry32, type Card, type Seat, type Strain } from '../src/core/cards';
import { PlayState, type Trick } from '../src/core/play';
import { chooseSignal, defenderChoice, signalOf, signalFacts, consistent, type Moment } from '../src/engine/signalling';
import { decideCard, knowledgeSpec, pickCard, type PlayKnowledge } from '../src/engine/playEngine';
import { sampleLayouts } from '../src/engine/sampler';
import { readSignals } from '../src/tutor/signals';
import { explainPlay } from '../src/tutor/principles';
import { setLang } from '../src/i18n';
import { unknownShown } from '../src/bidding/types';

const cards = (s: string): Card[] => s.split(' ').filter(Boolean).map(parseCard);
const card = parseCard;
/** Tricks from "leader: cards" strings, e.g. "W: SK S2 S3 SA". */
const tricks = (...ts: string[]): Trick[] => ts.map(t => {
  const [who, cs] = t.split(':');
  return { leader: 'NESW'.indexOf(who.trim()) as Seat, cards: cards(cs) };
});
const N = 0, E = 1, S = 2, W = 3;
const SPADES = 3, HEARTS = 2, NOTRUMP = 4;

/** South declares; `seat` is about to play to the last trick. */
function moment(seat: Seat, trump: number, ...ts: string[]): Moment {
  const all = tricks(...ts);
  const cur = all[all.length - 1];
  return { seat, declarer: S, trump, leader: cur.leader, trick: cur.cards, earlier: all.slice(0, -1) };
}

describe('bots signal by the book', () => {
  it('give count on declarer’s lead: high-low with an even number, lowest with odd', () => {
    const m = moment(W, SPADES, 'S: D3');
    expect(chooseSignal(cards('D8 D6 D4 D2'), cards('D8 D6 D4 D2 SA'), m)).toMatchObject({ kind: 'count', height: 'high', card: card('D8') });
    expect(chooseSignal(cards('D8 D6 D2'), cards('D8 D6 D2 SA'), m)).toMatchObject({ kind: 'count', height: 'low', card: card('D2') });
    // an honour is never a signal card, but it counts in the length
    expect(chooseSignal(cards('D8 D6 D4'), cards('DK D8 D6 D4'), m)).toMatchObject({ height: 'high', card: card('D8') });
  });

  it('stay under the winning card in fourth seat', () => {
    // South leads, North's ♦7 is winning; East's ♦9 would win the trick
    const m = moment(E, SPADES, 'S: D3 D5 D7');
    expect(chooseSignal(cards('D9 D6 D4 D2'), cards('D9 D6 D4 D2'), m)).toMatchObject({ kind: 'count', card: card('D6') });
  });

  it('give no count in trumps', () => {
    expect(chooseSignal(cards('S8 S2'), cards('S8 S2'), moment(W, SPADES, 'S: S3'))).toBeNull();
  });

  it('give attitude on partner’s lead (the lesson’s examples)', () => {
    // 4♥ by South: West leads ♠A, dummy plays ♠4, East to play
    const m = moment(E, HEARTS, 'W: SA S4');
    expect(chooseSignal(cards('S9 S3'), cards('SQ S9 S3 H5'), m)).toMatchObject({ kind: 'attitude', height: 'high', card: card('S9') });
    expect(chooseSignal(cards('S7 S5 S2'), cards('S7 S5 S2 H5'), m)).toMatchObject({ height: 'low', card: card('S2') });
    // a doubleton with a trump: high-low to ruff the third round; without a trump there is nothing to ruff with
    expect(chooseSignal(cards('S9 S3'), cards('S9 S3 H5'), m)).toMatchObject({ height: 'high', card: card('S9') });
    expect(chooseSignal(cards('S9 S3'), cards('S9 S3 D5'), m)).toMatchObject({ height: 'low', card: card('S3') });
  });

  it('never signal with a card from an honour sequence', () => {
    // from ♠Q J 10 9 7 the 9 belongs to the honours; the 7 is the only signal card, so there is nothing to choose
    expect(chooseSignal(cards('S9 S7'), cards('SQ SJ ST S9 S7'), moment(E, HEARTS, 'W: SA S4'))).toBeNull();
  });

  it('discard by attitude: encourage a suit you want, otherwise discourage one you don’t', () => {
    const m = moment(W, SPADES, 'S: C3');
    expect(chooseSignal(cards('H9 H2 D8 D6 D3'), cards('HA HK H9 H2 D8 D6 D3'), m)).toMatchObject({ kind: 'discard', suit: HEARTS, height: 'high', card: card('H9') });
    // no heart high enough to read as encouraging: discourage diamonds instead
    expect(chooseSignal(cards('H4 H2 D8 D6 D3'), cards('HA HK H4 H2 D8 D6 D3'), m)).toMatchObject({ kind: 'discard', suit: 1, height: 'low', card: card('D3') });
  });

  it('never discard a false signal when an honest card is just as good', () => {
    // hearts are wanted but have no high spot; the ♥2 would say "not hearts" — the singleton ♦7 says nothing
    const m = moment(W, SPADES, 'S: C3');
    expect(chooseSignal(cards('H2 D7'), cards('HA HK H4 H2 D7 S5'), m)).toBeNull();
    expect(defenderChoice(cards('H2 D7'), cards('HA HK H4 H2 D7 S5'), m)).toEqual({ card: card('D7'), signal: null });
  });

  it('lead suit preference for partner’s ruff', () => {
    // East leads hearts after West showed out of them; spades are trumps, so the other side suits are ♣ (lower) and ♦ (higher)
    const m = moment(E, SPADES, 'E: HA H3 C2 H4', 'E:');
    expect(chooseSignal(cards('H9 H8 H2'), cards('H9 H8 H2 DA'), m)).toMatchObject({ kind: 'preference', height: 'high', card: card('H9') });
    expect(chooseSignal(cards('H9 H8 H2'), cards('H9 H8 H2 CA'), m)).toMatchObject({ kind: 'preference', height: 'low', card: card('H2') });
    expect(chooseSignal(cards('H9 H8 H2'), cards('H9 H8 H2 DK'), m)).toMatchObject({ kind: 'preference', height: 'middle', card: card('H8') });
  });

  it('declarer’s side never signals', () => {
    expect(chooseSignal(cards('D8 D6 D4 D2'), cards('D8 D6 D4 D2'), { ...moment(W, SPADES, 'W: D3'), seat: N })).toBeNull();
  });
});

describe('reading signals', () => {
  // 3NT by South. West leads ♠Q; South plays diamonds twice. West (partner of East) plays ♦8, then ♦3.
  const play = tricks('W: SQ S2 S3 SA', 'S: DK D8 D5 D4', 'S: DQ D3 D6 D7');
  const east = cards('S9 S8 C4 C3');
  const dummy = cards('S5 S4 C9 C8');

  it('reads a completed high-low as an even number', () => {
    const [r] = readSignals(play, NOTRUMP, E, N, dummy, east);
    expect(r.fact.op.kind).toBe('count');
    expect(r.look).toMatchObject({ height: 'high', sure: true, echo: card('D3') });
    expect(r.lengths[0]).toBe(2);
    expect(r.lengths.every(n => n % 2 === 0)).toBe(true);
  });

  it('reads the first card relative to the spot cards still missing', () => {
    // after one diamond: the ♦2 and ♦3 are unseen below the 8, only the ♦9 above it — probably high, not sure
    const [r] = readSignals(play.slice(0, 2), NOTRUMP, E, N, [...dummy, card('D6')], [...east, card('D7')]);
    expect(r.look).toMatchObject({ height: 'high', sure: false });
  });

  it('a 2 is always low', () => {
    const r = readSignals(tricks('W: HK H5 H2'), SPADES, W, N, cards('H8 H7'), cards('HQ H4'));
    expect(r[0].fact.op.kind).toBe('attitude');
    expect(r[0].look).toMatchObject({ height: 'low', sure: true });
  });

  it('does not read third hand trying to win as a signal (the trick in progress has no winner yet)', () => {
    expect(readSignals(tricks('W: S4 S2 S9'), NOTRUMP, W, N, cards('S8 S7'), cards('SK SQ'))).toEqual([]);
  });

  it('reads discards and, from declarer’s seat, the defenders’ count', () => {
    const disc = readSignals(tricks('S: C3 H2'), SPADES, E, N, cards('C9'), cards('C8'));
    expect(disc[0]).toMatchObject({ fact: { op: { kind: 'discard', suit: HEARTS } }, look: { height: 'low', sure: true } });
    const decl = readSignals(play, NOTRUMP, S, N, dummy, cards('C7 C6'));
    expect(decl.map(r => [r.fact.seat, r.fact.op.kind])).toEqual([[W, 'count'], [E, 'count']]);
    expect(decl[0].partner).toBe(false);
  });

  it('explains the signal card for the player on turn', () => {
    setLang('en');
    const sit = {
      seat: W as Seat, contract: { level: 3, strain: NOTRUMP as 4, declarer: S as Seat, doubled: 0 as const }, leader: S as Seat,
      trick: [card('DK')], hand: cards('D8 D3 C5 C4'), partnerHand: null, dummySeat: N as Seat, dummyHand: dummy, played: play[0].cards, openingLead: false,
      history: play.slice(0, 1),
    };
    expect(explainPlay(sit, card('D8')).title).toBe('Count signal');
    expect(explainPlay(sit, card('D8')).text).toContain('high-low');
    expect(explainPlay(sit, card('D3')).text).toContain('would show an odd number');
    // without the history the tutor cannot tell, and falls back to the general principle
    expect(explainPlay({ ...sit, history: undefined }, card('D3')).title).toBe('Second hand low');
  });
});

describe('the sampler uses partner’s signals', () => {
  // 3NT by South. Trick 1: West leads ♣A; trick 2: West leads ♠J to dummy's ace;
  // trick 3: dummy leads ♦6, East ♦4, South ♦A, West ♦8 (from ♦8 3: high, an even number)
  const deal = [cards('SA SK SQ D9 D7 D6 C2 C3 C4 C5 C6 C7 C8'), cards('S2 S3 S4 S5 S6 D5 D4 D2 H2 H3 H4 H5 H6'),
    cards('S7 S8 S9 DA DK DQ DJ DT H8 H9 HT HJ HQ'), cards('ST SJ D8 D3 H7 HK HA C9 CT CJ CQ CK CA')];
  const upTo = (west: string) => ['CA', 'C2', 'H2', 'H8', 'SJ', 'SA', 'S2', 'S7', 'D6', 'D4', 'DA', west];
  function knowledge(viewer: Seat, played: string[]): PlayKnowledge {
    const p = new PlayState({ level: 3, strain: 4, declarer: S, doubled: 0 }, deal);
    for (const c of played) p.play(card(c));
    return { viewer, toPlay: p.toPlay, contract: p.contract, vul: 'None', hands: p.hands.map(h => [...h]), tricks: p.tricks.map(t => ({ ...t, cards: [...t.cards] })), dummyVisible: true, shown: [0, 1, 2, 3].map(() => unknownShown()) };
  }

  it('favours layouts that agree with an honest count signal', () => {
    const spec = knowledgeSpec(knowledge(E, upTo('D8')));
    expect(spec.signals!.map(s => [s.fact.seat, s.fact.op.kind, s.weak])).toEqual([[W, 'count', false]]);
    const fact = spec.signals![0].fact;
    const disagree = (withSignals: boolean) => {
      const layouts = sampleLayouts(withSignals ? spec : { ...spec, signals: [] }, 300, mulberry32(7));
      expect(layouts.length).toBe(300);
      return layouts.filter(l => !consistent(fact, l.hands[W])).length / layouts.length;
    };
    // soft: a layout against the signal survives only with the chance the signal was untrue
    const without = disagree(false);
    expect(without).toBeGreaterThan(0.1);
    expect(disagree(true)).toBeLessThan(without / 3);
  });

  it('still finds layouts when a signal cannot be true', () => {
    // West plays the ♦3 (low: odd). If South has no diamonds left, West held six — the signal cannot be true
    const spec = knowledgeSpec(knowledge(E, upTo('D3')));
    spec.voids[S][1] = true;
    const layouts = sampleLayouts(spec, 20, mulberry32(3));
    expect(layouts.length).toBe(20);
    expect(layouts.every(l => !consistent(spec.signals![0].fact, l.hands[W]))).toBe(true);
  });

  it('gives declarer the defenders’ count, trusted less', () => {
    const spec = knowledgeSpec(knowledge(S, upTo('D8')));
    expect(spec.signals!.map(s => [s.fact.seat, s.fact.op.kind, s.weak])).toEqual([[E, 'count', true], [W, 'count', true]]);
  });
});

describe('signals never cost a trick', () => {
  it('the card chosen is always one the simulation rates best', async () => {
    let signals = 0;
    for (let seed = 1; seed <= 6; seed++) {
      const deal = dealCards(mulberry32(seed * 101));
      const p = new PlayState({ level: 3, strain: (seed % 5) as 0, declarer: S, doubled: 0 }, deal);
      const rnd = mulberry32(seed);
      // play six tricks at random, then let the simulation choose every card of the next two
      for (let i = 0; i < 24; i++) p.play(p.legal()[Math.floor(rnd() * p.legal().length)]);
      for (let i = 0; i < 8; i++) {
        const seat = p.toPlay;
        const k: PlayKnowledge = { viewer: seat === p.dummy ? S : seat, toPlay: seat, contract: p.contract, vul: 'None', hands: p.hands.map(h => [...h]), tricks: p.tricks.map(t => ({ ...t, cards: [...t.cards] })), dummyVisible: true, shown: [0, 1, 2, 3].map(() => unknownShown()) };
        const d = await decideCard(k, { samples: 8, minSamples: 8, timeMs: 1e9, seed });
        expect(d.equal).toContain(d.card);
        if (d.signal) {
          signals++;
          expect(d.signal.card).toBe(d.card);
          expect((seat & 1) !== (S & 1)).toBe(true);
          const cur = k.tricks[k.tricks.length - 1];
          expect(signalOf({ seat, declarer: S, trump: p.trump, leader: cur.leader, trick: cur.cards, earlier: k.tricks.slice(0, -1) }, d.card)?.kind).toBe(d.signal.kind);
        }
        expect(pickCard(d.equal, k).card).toBe(d.card);
        p.play(d.card);
      }
    }
    expect(signals).toBeGreaterThan(0);
  }, 60000);
});

describe('honesty', () => {
  it('with a free choice among equal cards, every signal agrees with the hand that gave it', () => {
    let facts = 0;
    for (let seed = 1; seed <= 300; seed++) {
      const rnd = mulberry32(seed);
      const c = { level: 3, strain: (seed % 5) as Strain, declarer: S as Seat, doubled: 0 as const };
      const p = new PlayState(c, dealCards(rnd));
      while (!p.isOver) {
        const seat = p.toPlay, legal = p.legal();
        const m: Moment = { seat, declarer: S, trump: c.strain, leader: p.current.leader, trick: [...p.current.cards], earlier: p.tricks.slice(0, -1) };
        p.play(defenderChoice(legal, p.hands[seat], m)?.card ?? legal[Math.floor(rnd() * legal.length)]);
      }
      for (const f of signalFacts(p.tricks, S, c.strain, [E, W])) {
        facts++;
        expect(consistent(f, [])).toBe(true); // at the end every card the signaller held is known
      }
    }
    expect(facts).toBeGreaterThan(500);
  });
});

describe('facts', () => {
  it('collects partner’s signals with the cards played after them', () => {
    const fs = signalFacts(tricks('W: SQ S2 S3 SA', 'S: DK D8 D5 D4', 'S: DQ D3 D6 D7'), S, NOTRUMP, [W]);
    expect(fs.map(f => [f.card, f.op.kind, f.later])).toEqual([[card('D8'), 'count', [card('D3')]]]);
  });
});
