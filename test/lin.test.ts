import { describe, it, expect } from 'vitest';
import { type Card, type Seat, mulberry32, dealCards, boardDealer, boardVulnerability, parseCard } from '../src/core/cards';
import { Auction, PASS, DOUBLE, isBid } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import { type BoardData, PbnError, parseDealString, parseCallCode, boardContract } from '../src/core/pbn';
import { toLIN, parseLIN, bboHandviewerUrl } from '../src/core/lin';

/** Random legal board: seed % 3 = 0 deal only, 1 auction, 2 auction + play. */
function randomBoard(seed: number): BoardData {
  const rnd = mulberry32(seed);
  const board = 1 + Math.floor(rnd() * 36);
  const b: BoardData = { board, dealer: boardDealer(board), vul: boardVulnerability(board), deal: dealCards(rnd) };
  if (seed % 3 === 0) return b;
  const a = new Auction(b.dealer);
  while (!a.isComplete()) {
    const bids = a.legalCalls().filter(isBid).slice(0, 5);
    const r = rnd();
    a.push(r > 0.8 && a.isLegal(DOUBLE) ? DOUBLE : r > 0.45 && bids.length ? bids[Math.floor(rnd() * bids.length)] : PASS);
  }
  b.calls = a.calls;
  const contract = a.contract();
  if (seed % 3 === 2 && contract) {
    const state = new PlayState(contract, b.deal);
    const play: Card[] = [];
    for (let n = 1 + Math.floor(rnd() * 52); n > 0; n--) {
      const legal = state.legal();
      play.push(legal[Math.floor(rnd() * legal.length)]);
      state.play(play[play.length - 1]);
    }
    b.play = play;
  }
  return b;
}

const FIXED: BoardData = {
  board: 1,
  dealer: 0,
  vul: 'None',
  deal: parseDealString('N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53'),
  calls: ['1NT', 'P', '2D', 'P', '2H', 'P', '4H', 'P', 'P', 'X', 'P', 'P', 'P'].map(t => parseCallCode(t)!),
  play: ['DK', 'DA', 'D4', 'D2', 'H4', 'H2', 'HK', 'HA', 'DQ', 'D3'].map(parseCard),
};

const FIXED_LIN =
  'st||md|3SJ76HT9854DA3CA92,S543H62DT9864CT53,SAKQ2HK73DJ52CQ84,ST98HAQJDKQ7CKJ76|ah|Board 1|sv|o|' +
  'mb|1N|mb|p|mb|2D|mb|p|mb|2H|mb|p|mb|4H|mb|p|mb|p|mb|d|mb|p|mb|p|mb|p|' +
  'pc|DK|pc|DA|pc|D4|pc|D2|pc|H4|pc|H2|pc|HK|pc|HA|pc|DQ|pc|D3|';

describe('LIN', () => {
  it('writes a hand-checked board', () => {
    expect(toLIN(FIXED)).toBe(FIXED_LIN);
    const named = { ...FIXED, north: 'Ana', east: 'Boris', south: 'Vera', west: 'Georgi, Jr.', calls: undefined, play: undefined };
    expect(toLIN(named)).toBe(
      'pn|Vera,Georgi  Jr.,Ana,Boris|st||md|3SJ76HT9854DA3CA92,S543H62DT9864CT53,SAKQ2HK73DJ52CQ84,ST98HAQJDKQ7CKJ76|ah|Board 1|sv|o|',
    );
  });

  it('writes dealer digits, vulnerability and redoubles', () => {
    const md = (dealer: Seat) => /md\|(\d)/.exec(toLIN({ ...FIXED, dealer, calls: undefined, play: undefined }))![1];
    expect([0, 1, 2, 3].map(s => md(s as Seat))).toEqual(['3', '4', '1', '2']);
    const sv = (vul: BoardData['vul']) => /sv\|(\w)\|/.exec(toLIN({ ...FIXED, vul }))![1];
    expect(sv('None') + sv('NS') + sv('EW') + sv('Both')).toBe('oneb');
    const redoubled = toLIN({ ...FIXED, calls: [3, DOUBLE, 2, PASS, PASS, PASS], play: undefined }); // 1C X XX
    expect(redoubled).toContain('mb|1C|mb|d|mb|r|mb|p|mb|p|mb|p|');
    expect(redoubled).not.toContain('pc|');
  });

  it('builds a handviewer link', () => {
    const url = bboHandviewerUrl(FIXED);
    expect(url).toBe('https://www.bridgebase.com/tools/handviewer.html?lin=' + encodeURIComponent(FIXED_LIN));
    expect(url).not.toMatch(/[|, ]/);
    expect(parseLIN(url)).toEqual(FIXED);
  });

  it('round-trips random legal boards', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const b = randomBoard(seed);
      if (seed % 5 === 0) Object.assign(b, { north: 'n' + seed, east: 'e' + seed, south: 's' + seed, west: 'w' + seed });
      expect(parseLIN(toLIN(b))).toEqual(b);
    }
  });

  it('reads BBO hand records', () => {
    // Fourth hand left out, alerts and explanations, a claim, lower case.
    const lin =
      'pn|vera,georgi,ana,boris|st||md|3SJ76HT9854DA3CA92,S543H62DT9864CT53,SAKQ2HK73DJ52CQ84,|rh||ah|Board 1|sv|o|' +
      'mb|1N|an|15-17|mb|p|mb|2D!|an|transfer|mb|p|mb|2H|mb|p|mb|4H|mb|P|mb|p|mb|D|mb|p|mb|p|mb|p|pg||' +
      'pc|dk|pc|DA|pc|D4|pc|D2|pg||pc|H4|pc|H2|pc|HK|pc|HA|pg||pc|DQ|pc|D3|mc|9|';
    expect(parseLIN(lin)).toEqual({ ...FIXED, north: 'ana', east: 'boris', south: 'vera', west: 'georgi' });
    // A session file: only the first board is read; the number comes from qx without ah.
    const session = 'vg|Club,,P,1,2,,,,|pn|a,b,c,d|qx|o7|md|1SJ76HT9854DA3CA92,S543H62DT9864CT53,SAKQ2HK73DJ52CQ84,|sv|b|\n' +
      'mb|p|mb|p|mb|p|mb|p|pg||\nqx|c7|md|3,,,|';
    expect(parseLIN(session)).toMatchObject({ board: 7, dealer: 2, vul: 'Both', calls: [PASS, PASS, PASS, PASS] });
    expect(boardContract(parseLIN(session))).toBeNull();
    // URLs from BBO use "+" for spaces.
    expect(parseLIN('https://www.bridgebase.com/tools/handviewer.html?bbo=y&lin=md%7C3SJ76HT9854DA3CA92%2CS543H62DT9864CT53%2CSAKQ2HK73DJ52CQ84%2C%7Cah%7CBoard+5%7C'))
      .toEqual({ board: 5, dealer: 0, vul: 'NS', deal: FIXED.deal });
  });

  it('reports errors with codes', () => {
    const code = (lin: string) => {
      try {
        parseLIN(lin);
      } catch (e) {
        expect(e).toBeInstanceOf(PbnError);
        return (e as PbnError).code + (e as PbnError).detail;
      }
      return 'ok';
    };
    const md = 'md|3SJ76HT9854DA3CA92,S543H62DT9864CT53,SAKQ2HK73DJ52CQ84,|';
    expect(code(md)).toBe('ok');
    expect(code('pn|a,b,c,d|sv|o|')).toBe('syntaxmd');
    expect(code('md|3SJ76HT9854DA3CA92,S543H62DT9864CT53,,|')).toBe('missing-handNE');
    expect(code('md|3SJ76HT9854DA3CA92,SJ43H62DT9864CT53,SAKQ2HK73DJ52CQ84,|')).toBe('duplicateSJ');
    expect(code('md|3AJ76HT9854DA3CA92,S543H62DT9864CT53,SAKQ2HK73DJ52CQ84,|')).toBe('syntaxAJ76HT9854DA3CA92');
    expect(code(md + 'sv|z|')).toBe('syntaxz');
    expect(code(md + 'mb|1S|mb|1H|')).toBe('auction1H');
    expect(code(md + 'mb|9S|')).toBe('auction9S');
    expect(code(md + 'mb|1S|mb|p|mb|p|mb|p|pc|SA|')).toBe('playSA'); // East leads, not North
    expect(code(md + 'mb|1S|pc|D4|')).toBe('playcontract');
    expect(code(md + 'mb|1S|mb|p|mb|p|mb|p|pc|D|')).toBe('playD');
  });
});
