import { describe, it, expect } from 'vitest';
import { dealCards, mulberry32, S, N } from '../src/core/cards';
import { Auction } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import { readAuction, advise } from '../src/bidding/engine';
import { encodeDeal, decodeDeal, answerItem, dueItems, INTERVALS, LAST_BOX, type ReviewItem } from '../src/game/journal';
import { bidSkill, cardSkill, decisions, skillStats, weakestSkill } from '../src/game/skills';
import { archiveBoard, reviewItems, type FinishedBoard } from '../src/game/record';

/** A whole board played by the system, with South's calls marked as yours. */
function playedBoard(seed: number, spoilBid = false): FinishedBoard {
  const rnd = mulberry32(seed);
  for (;;) {
    const deal = dealCards(rnd);
    const a = new Auction(N);
    const calls: FinishedBoard['calls'] = [];
    let spoiled = false;
    while (!a.isComplete()) {
      const adv = advise(deal[a.nextSeat], readAuction(a, 'None').ctx);
      const human = a.nextSeat === S;
      let call = adv.call;
      if (human && spoilBid && !spoiled && a.isLegal(adv.call + 1) && adv.call >= 3 && !adv.rule?.generic) {
        call = adv.call + 1;
        spoiled = true;
      }
      calls.push({ call, human, advice: human ? { call: adv.call, generic: !!adv.rule?.generic, tag: adv.rule?.tag } : undefined });
      a.push(call);
    }
    const c = a.contract();
    if (!c || (spoilBid && !spoiled)) continue;
    const p = new PlayState(c, deal);
    const cards: FinishedBoard['cards'] = [];
    while (!p.isOver) {
      const seat = p.toPlay;
      const legal = p.legal();
      const card = legal[0];
      const human = seat === S || (seat === N && (c.declarer & 1) === 0);
      // pretend the simulation preferred the last legal card by a clear margin
      const sim = human && legal.length > 1 ? { n: 20, best: [legal[legal.length - 1]], bt: 9, bs: 0.8, mt: 8, ms: 0.4 } : null;
      cards.push({ card, human, sim });
      p.play(card);
    }
    return { id: 1000 + seed, board: 1, dealer: N, vul: 'None', deal, calls, cards, declTricks: p.declarerTricks, scoreNS: 0, parNS: null, table: null };
  }
}

describe('journal', () => {
  it('encodes deals compactly and losslessly', () => {
    const d = dealCards(mulberry32(3));
    const s = encodeDeal(d);
    expect(s).toHaveLength(52);
    expect(decodeDeal(s).map(h => [...h].sort((a, b) => a - b))).toEqual(d.map(h => [...h].sort((a, b) => a - b)));
  });

  it('schedules review items with growing intervals and resets on a miss', () => {
    const item = { box: 0, due: 0, tries: 0, right: 0 } as ReviewItem;
    let now = 1_000_000;
    for (let b = 1; b <= LAST_BOX; b++) {
      expect(answerItem(item, true, now)).toBe(true);
      expect(item.box).toBe(b);
      expect(item.due).toBe(now + INTERVALS[b] * 86400000);
      now = item.due;
    }
    expect(answerItem(item, true, now)).toBe(false); // retired from the last box
    answerItem(item, false, now);
    expect(item.box).toBe(0);
    expect(dueItems([item], now)).toHaveLength(1);
  });

  it('classifies calls by situation', () => {
    expect(bidSkill(N, [], 3)).toBe('bid.opening');
    expect(bidSkill(N, [0, 0], 3)).toBe('bid.opening'); // South still first to open
    expect(bidSkill(N, [3 + 4, 0], 3 + 5 + 0)).toBe('bid.notrump'); // 1NT P, partner responds
    expect(bidSkill(N, [3 + 2, 0], 3 + 5 + 2)).toBe('bid.response');
    expect(bidSkill(N, [3 + 2, 3 + 3], 1)).toBe('bid.competitive');
    expect(bidSkill(N, [0, 3 + 2], 1)).toBe('bid.competitive');
    expect(bidSkill(N, [3 + 2, 0, 3 + 5 + 2, 0], 3 + 15 + 4, 'blackwood')).toBe('bid.slam');
    expect(cardSkill(1, S, true)).toBe('play.lead');
    expect(cardSkill(S, N, false)).toBe('play.declarer');
    expect(cardSkill(1, S, false)).toBe('play.defense');
  });

  it('records boards and review items, and measures skills from them', () => {
    const f = playedBoard(11, true);
    const rec = archiveBoard(f);
    expect(rec.calls.filter(c => c.h).length).toBe(f.calls.filter(c => c.human).length);
    const items = reviewItems(f, 5);
    const bidItems = items.filter(i => i.kind === 'bid');
    expect(bidItems.length).toBe(1);
    const cardItems = items.filter(i => i.kind === 'card');
    expect(cardItems.length).toBe(f.cards.filter(c => c.human && c.sim).length);
    for (const it of cardItems) {
      // the stored position replays to the decision, with the deciding seat to play
      const a = new Auction(it.dealer, it.calls);
      const p = new PlayState(a.contract()!, decodeDeal(it.deal));
      for (const c of it.play!) p.play(c);
      expect(p.toPlay).toBe(it.seat);
      expect(p.isLegal(it.yours)).toBe(true);
    }
    const ds = decisions([rec]);
    // cards count only when the choice mattered (not every legal card rated best)
    const p = new PlayState(new Auction(rec.dealer, rec.calls.map(c => c.c)).contract()!, decodeDeal(rec.deal));
    let realCards = 0;
    for (const c of rec.cards) {
      if (c.h && c.sim && c.sim.best.length < p.legal().length) realCards++;
      p.play(c.c);
    }
    expect(ds.length).toBe(rec.calls.filter(c => c.h && c.a !== undefined).length + realCards);
    // only calls the system makes on general judgment count half
    expect(ds.every(d => d.weight === 1 || (d.weight === 0.5 && d.skill.startsWith('bid')))).toBe(true);
    const stats = skillStats([rec]);
    expect(stats.reduce((t, s) => t + s.decisions, 0)).toBe(ds.length);
    expect(typeof weakestSkill(stats)).toBe('string');
  });
});
