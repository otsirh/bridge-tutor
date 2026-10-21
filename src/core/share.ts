// Compact, URL-safe share codes for boards.
//
// A code is base64url (no padding) of these bytes:
//   [0]       version (1)
//   [1]       flags: bits 0-1 dealer, bits 2-3 vulnerability (None, NS, EW, Both),
//             bit 4 board number, bit 5 calls, bit 6 play, bit 7 zero
//   varint    board number                                        (if bit 4)
//   13 bytes  deal: 2 bits per card = the seat holding it; card c is in
//             byte c >> 2 at bit 2 * (c & 3)
//   varint    number of calls, then one byte per call             (if bit 5)
//   varint    number of cards played, varint byte length, then the play as one
//             big-endian mixed-radix number: digit i is the index of the i-th
//             card among the legal cards (ascending) at that moment, radix the
//             number of legal cards; forced cards cost nothing     (if bit 6)
//   [last]    CRC-8 (polynomial 0x07) of all the bytes before it
// Varints are little-endian base 128. A deal-only code is 22-23 characters.
//
// Only the board number, dealer, vulnerability, deal, calls and play are
// shared; event, site, date and player names are left out to keep codes short.

import { type Card, type Seat, type Vulnerability, sortHand } from './cards';
import { PlayState } from './play';
import { type BoardData, PbnError, boardContract, validateBoard } from './pbn';

const VERSION = 1;
const VULS: readonly Vulnerability[] = ['None', 'NS', 'EW', 'Both'];
const HAS_BOARD = 0x10, HAS_CALLS = 0x20, HAS_PLAY = 0x40, RESERVED = 0x80;

const shareError = (detail: string) => new PbnError('share', detail);

/** Share code for a board. Throws PbnError for an invalid board. */
export function encodeBoard(b: BoardData): string {
  validateBoard(b);
  const flags = b.dealer | (VULS.indexOf(b.vul) << 2)
    | (b.board !== undefined ? HAS_BOARD : 0) | (b.calls ? HAS_CALLS : 0) | (b.play ? HAS_PLAY : 0);
  const out = [VERSION, flags];
  if (b.board !== undefined) writeVarint(out, b.board);
  out.push(...packDeal(b.deal));
  if (b.calls) {
    writeVarint(out, b.calls.length);
    out.push(...b.calls);
  }
  if (b.play) {
    const bytes = packPlay(b, b.play);
    writeVarint(out, b.play.length);
    writeVarint(out, bytes.length);
    out.push(...bytes);
  }
  out.push(crc8(out));
  return toBase64Url(out);
}

/** Board from a share code. Throws PbnError('share', <failed check>) for a corrupt or truncated code. */
export function decodeBoard(code: string): BoardData {
  const bytes = fromBase64Url(code.trim());
  if (bytes.length < 2) throw shareError('truncated');
  if (bytes[0] !== VERSION) throw shareError('version');
  const crc = bytes.pop()!;
  if (crc8(bytes) !== crc) throw shareError('checksum');

  const r = new ByteReader(bytes, 1);
  const flags = r.byte();
  if (flags & RESERVED) throw shareError('flags');
  const b: BoardData = { dealer: (flags & 3) as Seat, vul: VULS[(flags >> 2) & 3], deal: [] };
  if (flags & HAS_BOARD) b.board = r.varint();
  b.deal = unpackDeal(r.bytes(13));
  if (flags & HAS_CALLS) b.calls = r.bytes(r.varint());
  if (flags & HAS_PLAY) {
    const count = r.varint();
    b.play = unpackPlay(b, count, r.bytes(r.varint()));
  }
  if (!r.done) throw shareError('trailing');
  checked(() => validateBoard(b));
  return b;
}

/** Runs a check, reporting its failure as a share-code error. */
function checked<T>(check: () => T): T {
  try {
    return check();
  } catch (e) {
    if (e instanceof PbnError) throw shareError(e.code);
    throw e;
  }
}

// ---------------------------------------------------------------------------
// Deal and play

function packDeal(deal: readonly (readonly Card[])[]): number[] {
  const bytes = new Array<number>(13).fill(0);
  deal.forEach((hand, seat) => hand.forEach(c => (bytes[c >> 2] |= seat << (2 * (c & 3)))));
  return bytes;
}

function unpackDeal(bytes: readonly number[]): Card[][] {
  const hands: Card[][] = [[], [], [], []];
  for (let c = 0; c < 52; c++) hands[(bytes[c >> 2] >> (2 * (c & 3))) & 3].push(c);
  if (hands.some(h => h.length !== 13)) throw shareError('cards');
  return hands.map(h => sortHand(h));
}

const legalAscending = (state: PlayState) => state.legal().sort((a, b) => a - b);

function packPlay(b: BoardData, play: readonly Card[]): number[] {
  if (!play.length) return [];
  const state = new PlayState(boardContract(b)!, b.deal);
  const digits: number[] = [], radices: number[] = [];
  for (const c of play) {
    const legal = legalAscending(state);
    digits.push(legal.indexOf(c));
    radices.push(legal.length);
    state.play(c);
  }
  let v = 0n;
  for (let i = play.length - 1; i >= 0; i--) v = v * BigInt(radices[i]) + BigInt(digits[i]);
  const bytes: number[] = [];
  for (; v > 0n; v >>= 8n) bytes.unshift(Number(v & 255n));
  return bytes;
}

function unpackPlay(b: BoardData, count: number, bytes: readonly number[]): Card[] {
  if (bytes[0] === 0) throw shareError('format'); // not minimal
  let v = bytes.reduce((acc, x) => (acc << 8n) | BigInt(x), 0n);
  const play: Card[] = [];
  if (count > 0) {
    const contract = checked(() => boardContract(b)); // also checks the auction
    if (!contract) throw shareError('play');
    const state = new PlayState(contract, b.deal);
    for (let i = 0; i < count; i++) {
      if (state.isOver) throw shareError('play');
      const legal = legalAscending(state);
      const radix = BigInt(legal.length);
      const c = legal[Number(v % radix)];
      v /= radix;
      state.play(c);
      play.push(c);
    }
  }
  if (v !== 0n) throw shareError('play'); // digits left over
  return play;
}

// ---------------------------------------------------------------------------
// Bytes: varints, CRC-8, base64url

function writeVarint(out: number[], n: number): void {
  for (; n >= 128; n = Math.floor(n / 128)) out.push((n % 128) | 128);
  out.push(n);
}

class ByteReader {
  constructor(private readonly data: readonly number[], private pos: number) {}

  get done(): boolean {
    return this.pos === this.data.length;
  }

  byte(): number {
    if (this.pos >= this.data.length) throw shareError('truncated');
    return this.data[this.pos++];
  }

  bytes(n: number): number[] {
    if (this.pos + n > this.data.length) throw shareError('truncated');
    this.pos += n;
    return this.data.slice(this.pos - n, this.pos);
  }

  varint(): number {
    let n = 0;
    for (let i = 0, scale = 1; i < 8; i++, scale *= 128) {
      const x = this.byte();
      if (x === 0 && i > 0) throw shareError('format'); // not minimal
      n += (x & 127) * scale;
      if (!(x & 128)) return n;
    }
    throw shareError('format');
  }
}

function crc8(bytes: readonly number[]): number {
  let crc = 0;
  for (const x of bytes) {
    crc ^= x;
    for (let k = 0; k < 8; k++) crc = crc & 0x80 ? ((crc << 1) ^ 0x07) & 0xff : (crc << 1) & 0xff;
  }
  return crc;
}

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function toBase64Url(bytes: readonly number[]): string {
  let out = '', acc = 0, bits = 0;
  for (const x of bytes) {
    acc = (acc << 8) | x;
    bits += 8;
    while (bits >= 6) {
      bits -= 6;
      out += B64[(acc >> bits) & 63];
    }
    acc &= (1 << bits) - 1;
  }
  if (bits) out += B64[(acc << (6 - bits)) & 63];
  return out;
}

function fromBase64Url(s: string): number[] {
  const t = s.replace(/=+$/, '');
  if (t.length % 4 === 1) throw shareError('format');
  const bytes: number[] = [];
  let acc = 0, bits = 0;
  for (const ch of t) {
    const v = B64.indexOf(ch);
    if (v < 0) throw shareError('format');
    acc = (acc << 6) | v;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      bytes.push((acc >> bits) & 255);
    }
    acc &= (1 << bits) - 1;
  }
  if (acc) throw shareError('format'); // leftover bits must be zero
  return bytes;
}
