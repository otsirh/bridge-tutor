import { describe, it, expect } from 'vitest';
import {
  type Card, type Seat, mulberry32, dealCards, boardDealer, boardVulnerability, parseCard, sortHand, HEARTS,
} from '../src/core/cards';
import { Auction, PASS, DOUBLE, REDOUBLE, isBid } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import {
  type BoardData, PbnError, toPBN, toPBNFile, parsePBN, parseDealString, dealToPBN,
  boardContract, boardResult, replayPlay, validateBoard, callCode, parseCallCode, contractCode, parseSeat,
} from '../src/core/pbn';

// --- random legal boards ---------------------------------------------------

/** Random legal auction: mostly passes and low bids, with some doubles. */
function randomCalls(dealer: Seat, rnd: () => number, stopEarly: boolean) {
  const a = new Auction(dealer);
  while (!a.isComplete() && !(stopEarly && rnd() < 0.15)) {
    const legal = a.legalCalls();
    const bids = legal.filter(isBid).slice(0, 6);
    const r = rnd();
    let c = PASS;
    if (r > 0.75 && legal.includes(DOUBLE)) c = DOUBLE;
    else if (r > 0.75 && legal.includes(REDOUBLE)) c = REDOUBLE;
    else if (r > 0.45 && bids.length) c = bids[Math.floor(rnd() * bids.length)];
    a.push(c);
  }
  return a;
}

function randomPlay(b: BoardData, rnd: () => number, n: number): Card[] {
  const state = new PlayState(boardContract(b)!, b.deal);
  const play: Card[] = [];
  while (play.length < n && !state.isOver) {
    const legal = state.legal();
    const c = legal[Math.floor(rnd() * legal.length)];
    state.play(c);
    play.push(c);
  }
  return play;
}

/** seed % 4: 0 deal only, 1 partial auction, 2 auction + partial play, 3 auction + full play. */
function randomBoard(seed: number): BoardData {
  const rnd = mulberry32(seed);
  const board = 1 + Math.floor(rnd() * 36);
  const b: BoardData = { board, dealer: boardDealer(board), vul: boardVulnerability(board), deal: dealCards(rnd) };
  const mode = seed % 4;
  if (mode === 0) return b;
  const a = randomCalls(b.dealer, rnd, mode === 1);
  if (a.calls.length) b.calls = a.calls;
  if (mode >= 2 && a.isComplete() && a.contract()) b.play = randomPlay(b, rnd, mode === 3 ? 52 : 1 + Math.floor(rnd() * 51));
  return b;
}

const withNames = (b: BoardData): BoardData => ({
  ...b, event: 'Club "Monday" pairs', site: 'Sofia; room {2}', date: '2026.10.21',
  north: 'Ana', east: 'Boris', south: 'Vera \\ V.', west: 'Georgi',
});

const hand = (s: string): Card[] => sortHand(s.split(' ').map(parseCard));

// --- a hand-checked board ----------------------------------------------------

const DEAL = 'N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53';
const FIXED: BoardData = {
  board: 1,
  dealer: 0,
  vul: 'None',
  deal: parseDealString(DEAL),
  // 1NT P 2D P / 2H P 4H P / P X P P / P  → 4HX by North, East leads
  calls: ['1NT', 'P', '2D', 'P', '2H', 'P', '4H', 'P', 'P', 'X', 'P', 'P', 'P'].map(t => parseCallCode(t)!),
  play: ['DK', 'DA', 'D4', 'D2', 'H4', 'H2', 'HK', 'HA', 'DQ', 'D3'].map(parseCard),
};

const FIXED_PBN = `[Event ""]
[Site ""]
[Date ""]
[Board "1"]
[West ""]
[North ""]
[East ""]
[South ""]
[Dealer "N"]
[Vulnerable "None"]
[Deal "N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53"]
[Declarer "N"]
[Contract "4HX"]
[Result ""]
[Auction "N"]
1NT Pass 2D Pass
2H Pass 4H Pass
Pass X Pass Pass
Pass
[Play "E"]
DK DA D4 D2
HA H4 H2 HK
DQ D3 - -
*
`;

describe('PBN deals', () => {
  it('parses a deal string with any first seat and case', () => {
    const deal = parseDealString(DEAL);
    expect(deal[0]).toEqual(hand('SA SK SQ S2 HK H7 H3 DJ D5 D2 CQ C8 C4'));
    expect(deal[3]).toEqual(hand('S5 S4 S3 H6 H2 DT D9 D8 D6 D4 CT C5 C3'));
    expect(parseDealString('e:t98.aqj.kq7.kj76 j76.t9854.a3.a92 543.62.t9864.t53 akq2.k73.j52.q84')).toEqual(deal);
    expect(parseDealString('W:543.62.T9864.T53 AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92')).toEqual(deal);
    expect(parseDealString('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 -')).toEqual(deal);
    expect(parseDealString('S:J76.T9854.A3.A92 - AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76')).toEqual(deal);
    expect(dealToPBN(deal)).toBe(DEAL);
    expect(dealToPBN(deal, 1)).toBe('E:T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53 AKQ2.K73.J52.Q84');
  });

  it('writes voids and tens', () => {
    const deal = parseDealString('N:AKQJT98765432... .AKQJT98765432.. ..AKQJT98765432. ...AKQJT98765432');
    expect(dealToPBN(deal, 2)).toBe('S:..AKQJT98765432. ...AKQJT98765432 AKQJT98765432... .AKQJT98765432..');
  });

  it('reports bad deals with language-neutral codes', () => {
    const code = (s: string) => {
      try {
        parseDealString(s);
      } catch (e) {
        expect(e).toBeInstanceOf(PbnError);
        return (e as PbnError).code;
      }
      return 'ok';
    };
    expect(code('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53')).toBe('ok');
    expect(code('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T5A')).toBe('duplicate');
    expect(code('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ7 J76.T9854.A3.A92 543.62.T9864.T53')).toBe('cards');
    expect(code('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 - -')).toBe('missing-hand');
    expect(code('N:AKQ2.K73.J52.Q8Z T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 -')).toBe('syntax');
    expect(code('N:AKQ2.K73.J52 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 -')).toBe('syntax');
    expect(code('')).toBe('missing-hand');
  });
});

describe('PBN writing', () => {
  it('writes a hand-checked board', () => {
    expect(toPBN(FIXED)).toBe(FIXED_PBN);
  });

  it('derives contract, declarer and result', () => {
    expect(boardContract(FIXED)).toEqual({ level: 4, strain: HEARTS, declarer: 0, doubled: 1 });
    expect(contractCode(boardContract(FIXED)!)).toBe('4HX');
    expect(boardResult(FIXED)).toBeUndefined(); // play unfinished
    expect(boardContract({ ...FIXED, calls: FIXED.calls!.slice(0, 7), play: undefined })).toBeUndefined();
    expect(boardContract({ ...FIXED, calls: [PASS, PASS, PASS, PASS], play: undefined })).toBeNull();
    expect(contractCode(null)).toBe('Pass');

    const rnd = mulberry32(7);
    const full = { ...FIXED, play: undefined } as BoardData;
    full.play = randomPlay(full, rnd, 52);
    const state = replayPlay(full)!;
    expect(state.isOver).toBe(true);
    expect(boardResult(full)).toBe(state.declarerTricks);
    const text = toPBN(full);
    expect(text).toContain(`[Result "${state.declarerTricks}"]`);
    expect(text).not.toContain('*');
  });

  it('writes passed-out and unfinished auctions', () => {
    const passed: BoardData = { dealer: 1, vul: 'Both', deal: FIXED.deal, calls: [PASS, PASS, PASS, PASS] };
    const text = toPBN(passed);
    expect(text).toContain('[Board ""]\n');
    expect(text).toContain('[Vulnerable "All"]\n');
    expect(text).toContain('[Declarer ""]\n[Contract "Pass"]\n[Result ""]\n[Auction "E"]\nPass Pass Pass Pass\n');
    const open = toPBN({ ...passed, calls: [PASS, 3] });
    expect(open).toContain('[Contract ""]\n[Result ""]\n[Auction "E"]\nPass 1C\n*\n');
  });

  it('escapes tag values and converts ISO dates', () => {
    const text = toPBN({ ...withNames(FIXED), date: '2026-10-21' });
    expect(text).toContain('[Event "Club \\"Monday\\" pairs"]');
    expect(text).toContain('[Date "2026.10.21"]');
    expect(text).toContain('[South "Vera \\\\ V."]');
  });

  it('uses fixed English call names', () => {
    expect([0, 1, 2, 3, 7, 37].map(callCode)).toEqual(['Pass', 'X', 'XX', '1C', '1NT', '7NT']);
    for (const t of ['p', 'Pass', 'x', 'D', 'XX', 'r', '3n', '3NT', '7s']) expect(parseCallCode(t)).not.toBeNull();
    expect(parseCallCode('8C')).toBeNull();
    expect(parseCallCode('Пас')).toBeNull();
    expect(['N', 'e', 'South', 'west', '', 'NE', 'С'].map(parseSeat)).toEqual([0, 1, 2, 3, null, null, null]);
  });

  it('refuses to write invalid boards', () => {
    const err = (b: BoardData) => {
      try {
        toPBN(b);
      } catch (e) {
        return (e as PbnError).code;
      }
      return 'ok';
    };
    expect(err(FIXED)).toBe('ok');
    expect(err({ ...FIXED, deal: [FIXED.deal[0], FIXED.deal[0], FIXED.deal[2], FIXED.deal[3]] })).toBe('duplicate');
    expect(err({ ...FIXED, deal: [FIXED.deal[0].slice(1), FIXED.deal[1], FIXED.deal[2], FIXED.deal[3]] })).toBe('cards');
    expect(err({ ...FIXED, calls: [3, 3] })).toBe('auction');
    expect(err({ ...FIXED, play: [parseCard('SA')] })).toBe('play'); // North doesn't lead
    expect(err({ ...FIXED, calls: [PASS, PASS, PASS, PASS] })).toBe('play'); // no contract
    expect(err({ ...FIXED, dealer: 5 as Seat })).toBe('syntax');
  });
});

describe('PBN round trips', () => {
  it('round-trips random legal boards', () => {
    for (let seed = 1; seed <= 300; seed++) {
      const b = seed % 3 ? randomBoard(seed) : withNames(randomBoard(seed));
      expect(() => validateBoard(b)).not.toThrow();
      expect(parsePBN(toPBN(b))).toEqual([b]);
    }
  });

  it('round-trips a whole file', () => {
    const boards = Array.from({ length: 24 }, (_, i) => randomBoard(1000 + i));
    const file = toPBNFile(boards);
    expect(file.startsWith('% PBN 2.1\n')).toBe(true);
    expect(parsePBN(file)).toEqual(boards);
    // Also without blank lines between games, and with Windows line ends.
    expect(parsePBN(boards.map(toPBN).join('').replace(/\n/g, '\r\n'))).toEqual(boards);
  });
});

describe('PBN reading', () => {
  const FILE = `% PBN 2.1
% EXPORT
;Exported by the club scorer
[Event "Monday Pairs"]
[Site "Sofia; [main room]"]
[Date "2026.10.19"]
[Board "1"]
[West "Ivanov"]
[North "Petrova"]
[East "Georgiev"]
[South "Dimitrova"]
[Dealer "N"]
[Vulnerable "None"]
[Deal "N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53"]
[Scoring "MP"]
[Declarer "N"]
[Contract "4H"]
[Result "10"]
[Auction "N"]
1NT Pass 2D =1= Pass
2H Pass 4H AP
[Note "1:transfer to hearts"]
[Play "E"]
DK DA D4 D2
HA! H4 H2 HK
{ East should
  switch here }
DQ D3 - -
*
[OptimumResultTable "Declarer;Denomination\\2R;Result\\2R"]
N NT 9
N S 10

[Event "#"]
[Site "#"]
[board "2"]
[dealer "e"]
[vulnerable "n-s"]
[deal "e:akj43.q2.k75.963 82.akj5.qj4.akq2 q95.t9876.a3.j74 -"]
[auction "e"]
1s x! 2s pass ; a quiet North
pass 3h $1 ap
[Board "3"]
[Vulnerable "Both"]
[Deal "W:- T76.43.T9862.T85 AKJ43.Q2.K75.963 82.AKJ5.QJ4.AKQ2"]
[Declarer "?"]
[Contract "?"]
`;

  it('reads a realistic multi-board file', () => {
    const boards = parsePBN(FILE);
    expect(boards).toHaveLength(3);

    const [b1, b2, b3] = boards;
    expect(b1).toEqual({
      ...FIXED,
      calls: FIXED.calls!.slice(0, 7).concat([PASS, PASS, PASS]), // 4H undoubled
      play: FIXED.play,
      event: 'Monday Pairs', site: 'Sofia; [main room]', date: '2026.10.19',
      north: 'Petrova', east: 'Georgiev', south: 'Dimitrova', west: 'Ivanov',
    });
    expect(contractCode(boardContract(b1)!)).toBe('4H');

    const deal2 = parseDealString('N:T76.43.T9862.T85 AKJ43.Q2.K75.963 82.AKJ5.QJ4.AKQ2 Q95.T9876.A3.J74');
    expect(b2).toEqual({
      board: 2, dealer: 1, vul: 'NS', deal: deal2, event: 'Monday Pairs', site: 'Sofia; [main room]',
      calls: ['1S', 'X', '2S', 'P', 'P', '3H', 'P', 'P', 'P'].map(t => parseCallCode(t)!),
    });
    expect(boardContract(b2)).toEqual({ level: 3, strain: HEARTS, declarer: 2, doubled: 0 });

    // Dealer from the board number; Q95.T9876.A3.J74 reconstructed for West.
    expect(b3).toEqual({ board: 3, dealer: 2, vul: 'Both', deal: deal2 });
  });

  it('reads Vulnerable variants', () => {
    const vul = (v: string) => parsePBN(`[Vulnerable "${v}"]\n[Deal "${DEAL}"]`)[0].vul;
    expect(['None', 'none', 'Love', '-'].map(vul)).toEqual(['None', 'None', 'None', 'None']);
    expect(['NS', 'ns', 'N-S'].map(vul)).toEqual(['NS', 'NS', 'NS']);
    expect(['EW', 'ew', 'E-W'].map(vul)).toEqual(['EW', 'EW', 'EW']);
    expect(['All', 'Both', 'both'].map(vul)).toEqual(['Both', 'Both', 'Both']);
    expect(parsePBN(`[Board "4"]\n[Deal "${DEAL}"]`)[0]).toMatchObject({ dealer: 3, vul: 'Both' });
    expect(parsePBN(`[Deal "${DEAL}"]`)[0]).toEqual({ dealer: 0, vul: 'None', deal: FIXED.deal });
  });

  it('accepts "AP" for a passed-out board and a play without auction', () => {
    const b = parsePBN(`[Dealer "S"]\n[Deal "${DEAL}"]\n[Auction "S"]\nAP\n`)[0];
    expect(b.calls).toEqual([PASS, PASS, PASS, PASS]);
    expect(boardContract(b)).toBeNull();
    // Contract tags without an auction: the play can't be checked, so it is dropped.
    const c = parsePBN(`[Deal "${DEAL}"]\n[Declarer "N"]\n[Contract "4H"]\n[Play "E"]\nDK DA D4 D2\n`)[0];
    expect(c.calls).toBeUndefined();
    expect(c.play).toBeUndefined();
  });

  it('accepts a left-out fourth hand and a short last trick line', () => {
    const text = '[Deal "N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92"]\n[Auction "N"]\n' +
      '1NT Pass 2D Pass 2H Pass 4H Pass Pass X AP\n[Play "E"]\nDK DA D4 D2\nHA H4 H2 HK\nDQ D3\n';
    expect(parsePBN(text)).toEqual([{ ...FIXED, board: undefined }].map(({ board, ...b }) => b));
  });

  const errorOf = (text: string) => {
    try {
      parsePBN(text);
    } catch (e) {
      expect(e).toBeInstanceOf(PbnError);
      return e as PbnError;
    }
    throw new Error('no error');
  };

  it('reports errors with codes and the failing board', () => {
    expect(errorOf('just some text').code).toBe('empty');
    expect(errorOf('[Event "x"]\n').code).toBe('empty');
    expect(errorOf(`[Deal "${DEAL}"]\n{ never closed`).code).toBe('syntax');
    expect(errorOf(`[Deal "${DEAL}]\n`).code).toBe('syntax');
    expect(errorOf(`[Vulnerable "Red"]\n[Deal "${DEAL}"]`).code).toBe('syntax');
    expect(errorOf(`[Dealer "Q"]\n[Deal "${DEAL}"]`).code).toBe('syntax');
    expect(errorOf('[Deal "N:AKQ2.K73.J52.Q84 - - J76.T9854.A3.A92"]').code).toBe('missing-hand');
    expect(errorOf('[Deal "N:AKQ2.K73.J52.Q84 AKQ2.K73.J52.Q84 J76.T9854.A3.A92 -"]').code).toBe('duplicate');

    const auction = (calls: string) => errorOf(`[Dealer "N"]\n[Deal "${DEAL}"]\n[Auction "N"]\n${calls}\n`);
    expect(auction('1S 1H').code).toBe('auction'); // insufficient
    expect(auction('1S X X').code).toBe('auction'); // double own side
    expect(auction('1Z').detail).toBe('1Z');
    expect(auction('!'.repeat(20000) + 'a').code).toBe('auction'); // no slow regex on junk
    expect(auction('Pass Pass Pass Pass Pass').code).toBe('auction'); // after the end
    expect(errorOf(`[Dealer "N"]\n[Deal "${DEAL}"]\n[Auction "E"]\nPass\n`).code).toBe('auction');

    const play = (seat: string, cards: string) =>
      errorOf(`[Dealer "N"]\n[Deal "${DEAL}"]\n[Auction "N"]\n1NT Pass 2D Pass 2H Pass 4H AP\n[Play "${seat}"]\n${cards}\n`);
    expect(play('E', 'DK DA D4 S2').detail).toBe('S2'); // North revokes
    expect(play('E', 'SA - - -').detail).toBe('SA'); // East doesn't hold SA
    expect(play('S', 'DA D4 D2 DK').detail).toBe('leader');
    expect(play('E', 'DK - D4 D2').code).toBe('play'); // a card after a gap
    expect(play('E', 'DK DA D4 D2 QQ').detail).toBe('QQ');
    expect(errorOf(`[Deal "${DEAL}"]\n[Auction "N"]\nAP\n[Play "E"]\nDK DA D4 D2\n`).detail).toBe('contract');

    const second = errorOf(`[Deal "${DEAL}"]\n\n[Board "2"]\n[Deal "N:AKQ2.K73.J52.Q84 - - -"]\n`);
    expect(second.code).toBe('missing-hand');
    expect(second.game).toBe(2);
    expect(second.message).not.toMatch(/[А-я]/); // no localized prose
  });
});
