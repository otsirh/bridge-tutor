import { describe, it, expect } from 'vitest';
import { dealCards, mulberry32 } from '../src/core/cards';
import { toPBN, dealToPBN } from '../src/core/pbn';
import { toLIN, bboHandviewerUrl } from '../src/core/lin';
import { encodeBoard } from '../src/core/share';
import { detectFormat, importBoards } from '../src/core/importer';

const sorted = (d: number[][]) => d.map(h => [...h].sort((a, b) => a - b));

describe('importer', () => {
  const deal = dealCards(mulberry32(9));
  const b = { board: 7, dealer: 2 as const, vul: 'Both' as const, deal };

  it('recognises every format and reads the same deal back', () => {
    const inputs: [string, string][] = [
      [toPBN(b), 'pbn'],
      [toLIN(b), 'lin'],
      [bboHandviewerUrl(b), 'lin'],
      [dealToPBN(deal), 'deal'],
      [encodeBoard(b), 'share'],
      [`https://example.org/bridge/#b=${encodeBoard(b)}`, 'share'],
    ];
    for (const [text, fmt] of inputs) {
      expect(detectFormat(text), text).toBe(fmt);
      const [got] = importBoards(text);
      expect(sorted(got.deal)).toEqual(sorted(deal));
    }
  });

  it('throws a coded error on nonsense', () => {
    expect(() => importBoards('')).toThrowError(/empty/);
    expect(() => importBoards('hello world')).toThrowError(/share/);
  });
});
