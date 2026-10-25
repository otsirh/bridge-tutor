// The table's asynchronous flow: the computer playing out the hand or checking
// a claim while you move on (a new deal, a second click) must never touch the
// next board, and damaged stored data must not break the readers.

import { describe, it, expect, beforeEach } from 'vitest';
import { Game } from '../src/game/game';
import { PASS, bid } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import { dealCards, mulberry32, N, type Card } from '../src/core/cards';
import { DDSolver, masksOf } from '../src/engine/dds';
import { loadBoards, loadItems, encodeDeal } from '../src/game/journal';
import { loadSettings, DEFAULT_SETTINGS } from '../src/game/storage';
import { decisions } from '../src/game/skills';

let mem: Map<string, string>;
beforeEach(() => {
  mem = new Map();
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, String(v)), removeItem: (k: string) => void mem.delete(k) },
  });
});

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

/** South declares 3NT with `played` random legal cards already on the table. */
function inPlay(played: number, seed = 5): Game {
  const g = new Game({ idle: true });
  g.updateSettings({ speed: 'fast', tutor: false, coach: false });
  const deal = dealCards(mulberry32(seed));
  Object.assign(g, { dealer: N, vul: 'None', deal, seed: 1 });
  const p = new PlayState({ level: 3, strain: 4, declarer: 2, doubled: 0 }, deal);
  const rnd = mulberry32(seed + 1);
  const play: Card[] = [];
  for (let i = 0; i < played; i++) {
    const legal = p.legal();
    const c = legal[Math.floor(rnd() * legal.length)];
    p.play(c);
    play.push(c);
  }
  (g as unknown as { begin(replay: boolean, preset: { calls: number[]; play: Card[] }): void }).begin(true, { calls: [PASS, PASS, bid(3, 4), PASS, PASS, PASS], play });
  return g;
}

/** A seed whose position after 40 cards lets declarer's side, on play, take every remaining trick. */
function claimableSeed(): number {
  const solver = new DDSolver(16);
  for (let seed = 1; seed < 400; seed++) {
    const p = inPlay(40, seed).play!;
    if ((p.toPlay & 1) !== 0) continue;
    solver.load({ masks: masksOf(p.hands), trump: p.trump, leader: p.current.leader, trick: [...p.current.cards] });
    if (solver.value() === 13 - p.completedTricks.length) return seed;
  }
  throw new Error('no claimable position');
}

describe('playing out and claiming', () => {
  it('a new deal during the play-out gets no card from the old hand', async () => {
    const g = inPlay(40);
    const po = g.playOut();
    g.newDeal();
    await po;
    await sleep(50);
    expect(g.phase).toBe('bidding');
    expect(g.cards.length).toBe(0);
  }, 60_000);

  it('a second click on Play out does not strand the hand', async () => {
    const g = inPlay(40);
    const a = g.playOut();
    const b = g.playOut();
    await Promise.all([a, b]);
    expect(g.phase).toBe('review');
    expect(g.play?.isOver).toBe(true);
    expect(g.thinking).toBeNull();
  }, 60_000);

  it('an accepted claim checked after a new deal leaves the new board alone', async () => {
    const g = inPlay(40, claimableSeed());
    const c = g.claim();
    g.newDeal();
    expect(await c).toBeNull();
    await sleep(300);
    expect(g.phase).toBe('bidding');
    // the bots bid the new board as usual (it used to hang on "Playing out the hand…")
    expect(g.playingOut).toBe(false);
    expect(g.auction.calls.length > 0 || g.isHumanTurn()).toBe(true);
  }, 60_000);
});

describe('damaged stored data', () => {
  const good = { v: 1, id: 1, board: 1, dealer: 0, vul: 'None', deal: encodeDeal(dealCards(mulberry32(3))), calls: [], cards: [], declTricks: 0, scoreNS: 0, parNS: null, table: null };

  it('boards and review items that cannot be read are skipped', () => {
    mem.set('bridge-tutor.archive.v1', JSON.stringify([good, { ...good, id: 2, deal: 42 }, { ...good, id: 3, deal: '0123' }, null]));
    expect(loadBoards().map(b => b.id)).toEqual([1]);
    const item = { id: '1:b:0', kind: 'bid', skill: 'bid.opening', board: 1, dealer: 0, vul: 'None', deal: good.deal, calls: [], seat: 2, answer: [5], yours: 0, created: 0, box: 0, due: 0, tries: 0, right: 0 };
    mem.set('bridge-tutor.review.v1', JSON.stringify([item, { ...item, id: '2:b:0', deal: 42 }, { ...item, id: '3:b:0', calls: undefined }]));
    expect(loadItems().map(i => i.id)).toEqual(['1:b:0']);
  });

  it('a board whose cards do not replay is left out of the skills', () => {
    const deal = dealCards(mulberry32(3));
    const calls = [bid(1, 4), PASS, PASS, PASS].map(c => ({ c }));
    const broken = { ...good, calls, cards: [{ c: deal[0][0], h: 1 as const, sim: { n: 10, best: [1], bt: 1, bs: 1, mt: 0, ms: 0 } }] };
    expect(() => decisions([broken as never])).not.toThrow();
  });

  it('unknown settings values fall back to the defaults', () => {
    mem.set('bridge-tutor.settings.v1', JSON.stringify({ speed: 'warp', strength: 7, tutor: 'yes', conventions: [1], theme: 5, peek: true }));
    const s = loadSettings();
    expect(s.speed).toBe(DEFAULT_SETTINGS.speed);
    expect(s.strength).toBe(DEFAULT_SETTINGS.strength);
    expect(s.tutor).toBe(DEFAULT_SETTINGS.tutor);
    expect(s.conventions).toEqual({});
    expect(s.theme).toBeNull();
    expect(s.peek).toBe(true);
  });
});
