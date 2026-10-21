import { describe, it, expect, vi, afterEach } from 'vitest';
import { en } from '../src/i18n/en';
import { bg } from '../src/i18n/bg';
import { T, setLang, lang } from '../src/i18n';
import { callName } from '../src/core/auction';
import { readAuction } from '../src/bidding/engine';
import { Game } from '../src/game/game';

// A sample argument that passes for a number, a string or a flag.
const ANY = new String('7');

/** Every leaf of a catalogue area as [path, text]; functions are called with sample arguments. */
function leaves(x: unknown, path = ''): [string, string][] {
  if (typeof x === 'string') return [[path, x]];
  if (typeof x === 'function') return [[path, String((x as (...a: unknown[]) => unknown)(...Array(x.length).fill(ANY)))]];
  if (Array.isArray(x)) return x.flatMap((v, i) => leaves(v, `${path}[${i}]`));
  if (x && typeof x === 'object') return Object.entries(x).flatMap(([k, v]) => leaves(v, path ? `${path}.${k}` : k));
  return [];
}

describe('interface catalogue', () => {
  it('has the same entries in every language', () => {
    expect(leaves(bg.ui).map(([p]) => p)).toEqual(leaves(en.ui).map(([p]) => p));
  });
  it('has no Bulgarian left in English and no empty text', () => {
    for (const [path, text] of leaves(en.ui)) {
      expect(text, path).not.toMatch(/[А-Яа-я]/);
      expect(text.trim(), path).not.toBe('');
    }
    for (const [path, text] of leaves(bg.ui)) expect(text.trim(), path).not.toBe('');
  });
  it('uses plural forms per language', () => {
    expect(en.ui.review.madeOver(1)).toBe('made with 1 overtrick');
    expect(en.ui.review.madeOver(2)).toBe('made with 2 overtricks');
    expect(bg.ui.review.madeOver(1)).toBe('изпълнен с 1 надвзятка');
    expect(bg.ui.review.madeOver(3)).toBe('изпълнен с 3 надвзятки');
    expect(en.ui.table.cards(1)).toBe('1 card');
    expect(bg.ui.table.cards(5)).toBe('5 карти');
  });
});

describe('switching language mid-game', () => {
  afterEach(() => {
    setLang('en');
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  /** Let the bots bid until it's your call. */
  async function yourCall(g: Game) {
    for (let i = 0; i < 50 && !(g.phase === 'bidding' && g.isHumanTurn()); i++) await vi.advanceTimersByTimeAsync(500);
    expect(g.phase).toBe('bidding');
    expect(g.isHumanTurn()).toBe(true);
  }

  it.each([0.11, 0.37, 0.62, 0.89])('re-words notes, keeps the hand, and undo still works (deal %s)', async seed => {
    vi.useFakeTimers();
    vi.spyOn(Math, 'random').mockReturnValue(seed);
    setLang('en');
    const g = new Game();
    await yourCall(g);
    const deal = g.deal.map(h => [...h]);
    const welcome = g.feedback.at(-1)!;
    expect(welcome.wording().title).toBe('Welcome to the table');

    // a call the system doesn't make, confirmed: a "warn" note about it
    const rec = g.hint && g.hint.kind === 'bid' ? g.hint.advice.call : 0;
    const other = g.legalCalls().find(c => c !== rec)!;
    g.submitCall(other, true);
    const note = g.feedback[0];
    expect(note.tone).toBe('warn');
    expect(note.wording().title).toBe(`${callName(other)} — the system bids ${callName(rec)}`);
    const mine = g.calls.find(c => c.human)!;

    setLang('bg');
    expect(lang()).toBe('bg');
    g.relocalize();
    expect(T.ui.header.title).toBe('Бридж треньор');
    expect(welcome.wording().title).toBe('Добре дошли на масата');
    expect(note.wording().title).toBe(`${callName(other)} — системата обявява ${callName(rec)}`);
    // meanings and advice are rebuilt from the same auction
    expect(mine.meaning).toEqual(readAuction(g.auction, g.vul).records[mine.index].meaning);
    expect(mine.advice!.call).toBe(rec);
    expect(mine.agrees).toBe(false);
    expect(g.deal).toEqual(deal);

    // undo after the switch: back to your call, the note goes, the welcome stays (in Bulgarian)
    g.undo();
    expect(g.calls.every(c => !c.human)).toBe(true);
    expect(g.feedback).toContain(welcome);
    expect(g.feedback).not.toContain(note);
    expect(g.feedback[0].wording().title).toBe('Добре дошли на масата');
    await yourCall(g);

    setLang('en');
    g.relocalize();
    expect(g.feedback[0].wording().title).toBe('Welcome to the table');
    // the bid hint is rebuilt for the same position
    expect(g.hint?.kind).toBe('bid');
    expect(g.hint && g.hint.kind === 'bid' && g.hint.advice.call).toBe(rec);
  });

  it('re-words the play: principles, plan, contract note', async () => {
    vi.useFakeTimers();
    vi.spyOn(Math, 'random').mockReturnValue(0.42);
    setLang('en');
    const g = new Game();
    g.updateSettings({ speed: 'fast', strength: 'quick', dealMode: 'declare', coach: false });
    g.newDeal(true);
    // bid with the system, then play the tutor's cards for a few tricks
    for (let i = 0; i < 400 && (g.phase !== 'play' || !g.play || g.play.history().length < 9); i++) {
      if (g.isHumanTurn()) {
        if (g.phase === 'bidding') g.autoCall();
        else if (g.hint?.kind === 'card' && !g.hint.pending) void g.submitCard(g.hint.decision?.card ?? g.hint.lead?.[0].card ?? g.play!.legal()[0], true);
      }
      await vi.advanceTimersByTimeAsync(300);
    }
    expect(g.phase).toBe('play');
    const played = g.cards.filter(c => c.principle);
    expect(played.length).toBeGreaterThan(4);
    const before = played.map(c => c.principle);
    const contractNote = g.feedback.find(f => f.wording().title.startsWith('Contract: '))!;
    expect(contractNote).toBeTruthy();

    setLang('bg');
    g.relocalize();
    expect(contractNote.wording().title).toMatch(/^Договор: .*, разиграва /);
    // the same entries, each principle rebuilt for the position it was played in
    expect(g.cards.filter(c => c.principle)).toEqual(played);
    played.forEach((c, i) => {
      expect(c.principle).not.toBe(before[i]);
      expect(c.principle).toEqual(before[i]);
    });
    if (g.declarerSide === 0) expect(g.plan).toBeTruthy();

    // undo still works after the switch
    const n = g.play!.history().length;
    expect(g.canUndo).toBe(true);
    g.undo();
    expect(g.phase).toBe('play');
    expect(g.play!.history().length).toBeLessThan(n);
    expect(g.cards.map(c => c.card)).toEqual(g.play!.history().map(x => x.card));
  }, 30000);

  it('names the thinking bot in the active language', async () => {
    vi.useFakeTimers();
    setLang('en');
    const g = new Game();
    // the first bot to act (if any) is "thinking"
    if (g.thinking) {
      expect(g.thinking).toMatch(/is thinking…$/);
      setLang('bg');
      expect(g.thinking).toMatch(/ мисли…$/);
    }
    await yourCall(g);
    expect(g.thinking).toBeNull();
  });
});
