import { describe, it, expect } from 'vitest';
import { type Card, mulberry32, dealCards, boardDealer, boardVulnerability, parseCard } from '../src/core/cards';
import { Auction, PASS, DOUBLE, REDOUBLE, isBid } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import { type BoardData, PbnError, parseDealString, parseCallCode } from '../src/core/pbn';
import { encodeBoard, decodeBoard } from '../src/core/share';

/** seed % 5: 0 deal only, 1 no board number, 2 partial auction, 3 auction + partial play, 4 full play. */
function randomBoard(seed: number): BoardData {
  const rnd = mulberry32(seed);
  const board = 1 + Math.floor(rnd() * 200);
  const b: BoardData = { board, dealer: boardDealer(board), vul: boardVulnerability(board), deal: dealCards(rnd) };
  const mode = seed % 5;
  if (mode === 0) return b;
  if (mode === 1) delete b.board;
  const a = new Auction(b.dealer);
  while (!a.isComplete() && !(mode === 2 && rnd() < 0.1)) {
    const bids = a.legalCalls().filter(isBid).slice(0, 5);
    const r = rnd();
    const c = r > 0.8 && a.isLegal(DOUBLE) ? DOUBLE : r > 0.8 && a.isLegal(REDOUBLE) ? REDOUBLE
      : r > 0.45 && bids.length ? bids[Math.floor(rnd() * bids.length)] : PASS;
    a.push(c);
  }
  b.calls = a.calls;
  const contract = a.isComplete() ? a.contract() : null;
  if (mode >= 3 && contract) {
    const state = new PlayState(contract, b.deal);
    const play: Card[] = [];
    for (let n = mode === 4 ? 52 : Math.floor(rnd() * 52); n > 0; n--) {
      const legal = state.legal();
      play.push(legal[Math.floor(rnd() * legal.length)]);
      state.play(play[play.length - 1]);
    }
    b.play = play;
  }
  return b;
}

// An independent writer for hand-made codes: CRC-8 (poly 0x07) + base64url.
function crc8(bytes: number[]): number {
  let crc = 0;
  for (const x of bytes) {
    crc ^= x;
    for (let k = 0; k < 8; k++) crc = crc & 0x80 ? ((crc << 1) ^ 7) & 255 : (crc << 1) & 255;
  }
  return crc;
}
function makeCode(bytes: number[]): string {
  const all = [...bytes, crc8(bytes)];
  return btoa(String.fromCharCode(...all)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function dealBytes(deal: Card[][]): number[] {
  const out = new Array(13).fill(0);
  deal.forEach((h, seat) => h.forEach(c => (out[c >> 2] |= seat << (2 * (c & 3)))));
  return out;
}

const shareError = (code: string) => {
  try {
    decodeBoard(code);
  } catch (e) {
    expect(e).toBeInstanceOf(PbnError);
    expect((e as PbnError).code).toBe('share');
    return (e as PbnError).detail;
  }
  throw new Error('accepted ' + code);
};

const FIXED_CODE = 'AXABzoVH4txPOTpqEb9WAg0HAAkACgAUAAABAAAACgMHl_vB';
const FIXED: BoardData = {
  board: 1,
  dealer: 0,
  vul: 'None',
  deal: parseDealString('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53'),
  calls: ['1NT', 'P', '2D', 'P', '2H', 'P', '4H', 'P', 'P', 'X', 'P', 'P', 'P'].map(t => parseCallCode(t)!),
  play: ['DK', 'DA', 'D4', 'D2', 'H4', 'H2', 'HK', 'HA', 'DQ', 'D3'].map(parseCard),
};

describe('share codes', () => {
  it('matches the documented byte layout', () => {
    const dealOnly: BoardData = { board: 1, dealer: 0, vul: 'None', deal: FIXED.deal };
    const code = makeCode([1, 0x10, 1, ...dealBytes(FIXED.deal)]);
    expect(encodeBoard(dealOnly)).toBe(code);
    expect(decodeBoard(code)).toEqual(dealOnly);
    expect(code).toHaveLength(23);

    // Board 300 (two-byte varint), dealer W, EW, two calls, empty play list.
    const b: BoardData = { board: 300, dealer: 3, vul: 'EW', deal: FIXED.deal, calls: [PASS, 3], play: [] };
    expect(encodeBoard(b)).toBe(makeCode([1, 3 | (2 << 2) | 0x10 | 0x20 | 0x40, 0xac, 0x02, ...dealBytes(FIXED.deal), 2, 0, 3, 0, 0]));
    expect(decodeBoard(encodeBoard(b))).toEqual(b);
  });

  it('keeps known codes decodable', () => {
    // Regression guard: codes already shared must keep working.
    expect(encodeBoard({ dealer: 0, vul: 'None', deal: FIXED.deal })).toBe('AQDOhUfi3E85OmoRv1YCPQ');
    expect(decodeBoard('AQDOhUfi3E85OmoRv1YCPQ')).toEqual({ dealer: 0, vul: 'None', deal: FIXED.deal });
    const code = encodeBoard(FIXED);
    expect(code).toBe(FIXED_CODE);
    expect(decodeBoard(FIXED_CODE)).toEqual(FIXED);
  });

  it('round-trips random legal boards exactly and compactly', () => {
    let fullPlays = 0;
    for (let seed = 1; seed <= 400; seed++) {
      const b = randomBoard(seed);
      const code = encodeBoard(b);
      expect(code).toMatch(/^[A-Za-z0-9_-]+$/);
      expect(decodeBoard(code)).toEqual(b);
      expect(encodeBoard(decodeBoard(code))).toBe(code);
      if (!b.calls) expect(code.length).toBeLessThanOrEqual(24);
      if (b.play?.length === 52) {
        // All 52 cards in at most 18 bytes (1 byte per card would be 52).
        expect(code.length - encodeBoard({ ...b, play: undefined }).length).toBeLessThanOrEqual(24);
        fullPlays++;
      }
    }
    expect(fullPlays).toBeGreaterThan(20);
  });

  it('rejects truncated, extended and corrupted codes', () => {
    for (const seed of [5, 13, 24, 39]) {
      const code = encodeBoard(randomBoard(seed));
      for (let n = 0; n < code.length; n++) shareError(code.slice(0, n));
      shareError(code + 'A');
      shareError(code + 'AA');
      // Every single-character change is caught (CRC-8 finds all bursts up to 8 bits).
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
      for (let i = 0; i < code.length; i++) {
        for (const ch of alphabet) if (ch !== code[i]) shareError(code.slice(0, i) + ch + code.slice(i + 1));
      }
    }
    expect(shareError('')).toBe('truncated');
    expect(shareError('AQB6JAeT+5gpeDYeQmJVhwc')).toBe('format');
    expect(shareError('A')).toBe('format');
  });

  it('checks the contents behind a valid checksum', () => {
    const deal = dealBytes(FIXED.deal);
    expect(shareError(makeCode([2, 0, ...deal]))).toBe('version');
    expect(shareError(makeCode([1, 0x80, ...deal]))).toBe('flags');
    expect(shareError(makeCode([1, 0, ...deal.slice(0, 12)]))).toBe('truncated');
    expect(shareError(makeCode([1, 0, ...deal, 0]))).toBe('trailing');
    const moved = [...deal];
    moved[0] ^= 1; // the club 2 changes hands: 12 and 14 cards
    expect(shareError(makeCode([1, 0, ...moved]))).toBe('cards');
    expect(shareError(makeCode([1, 0x20, ...deal, 2, 4, 3]))).toBe('auction'); // 1D then 1C
    expect(shareError(makeCode([1, 0x20, ...deal, 1, 40]))).toBe('auction'); // no such call
    expect(shareError(makeCode([1, 0x40, ...deal, 1, 0]))).toBe('play'); // a card without a contract
    expect(shareError(makeCode([1, 0x60, ...deal, 4, 3, 0, 0, 0, 53, 1, 1]))).toBe('play'); // more than 52 cards
    expect(shareError(makeCode([1, 0x60, ...deal, 4, 3, 0, 0, 0, 1, 1, 0]))).toBe('format'); // leading zero
    expect(shareError(makeCode([1, 0x60, ...deal, 4, 3, 0, 0, 0, 1, 1, 200]))).toBe('play'); // digits left over
    expect(shareError(makeCode([1, 0x10, 0x80, 0, ...deal]))).toBe('format'); // varint not minimal
  });

  it('refuses to encode invalid boards', () => {
    const code = (b: BoardData) => {
      try {
        encodeBoard(b);
      } catch (e) {
        return (e as PbnError).code;
      }
      return 'ok';
    };
    expect(code({ ...FIXED, deal: [FIXED.deal[0], FIXED.deal[0], FIXED.deal[2], FIXED.deal[3]] })).toBe('duplicate');
    expect(code({ ...FIXED, calls: [PASS, PASS, DOUBLE] })).toBe('auction');
    expect(code({ ...FIXED, play: [parseCard('S2')] })).toBe('play');
    expect(code({ ...FIXED, board: -1 })).toBe('syntax');
  });
});
