import { describe, it, expect, beforeAll } from 'vitest';
import { setLang, T } from '../src/i18n';
import type { Contract } from '../src/core/auction';
import { parseCard, type Card, type Seat } from '../src/core/cards';
import type { Trick } from '../src/core/play';
import { explainPlay, type PlaySituation } from '../src/tutor/principles';

const N: Seat = 0, E: Seat = 1, S: Seat = 2, W: Seat = 3;
const cards = (s: string): Card[] => s.split(' ').map(parseCard);
const card = parseCard;
const FOUR_SPADES: Contract = { level: 4, strain: 3, declarer: S, doubled: 0 };

/** A situation with South declaring (North dummy); `partner` is the other visible hand. */
function at(seat: Seat, leader: Seat, trick: string, hand: string, partner: string | null, extra: Partial<PlaySituation> = {}): PlaySituation {
  return {
    seat, contract: FOUR_SPADES, leader, trick: trick ? cards(trick) : [], hand: cards(hand), partnerHand: partner ? cards(partner) : null,
    dummySeat: N, dummyHand: null, played: [], openingLead: false, ...extra,
  };
}

describe('the principle named for a card matches the card', () => {
  beforeAll(() => setLang('en'));
  const X = () => T.tutor.principles;

  it('tells an overruff from an underruff, and a ruff of partner’s winner from both', () => {
    // West leads ♥5, dummy ruffs with ♠9; East is out of hearts
    const sit = at(E, W, 'H5 S9', 'SK S4 C5', null);
    expect(explainPlay(sit, card('SK')).title).toBe(X().overruff.title);
    expect(explainPlay(sit, card('S4'))).toEqual({ title: X().underruff.title, text: X().underruff.text(false) });
    // with only trumps left the underruff is forced
    expect(explainPlay({ ...sit, hand: cards('SK S4') }, card('S4')).text).toBe(X().underruff.text(true));
    // East ruffed West's lead; West overruffs partner
    const over = at(W, N, 'H5 S4', 'SQ S2 C5', null);
    expect(explainPlay({ ...over, trick: cards('H5 S4 H6') }, card('SQ')).title).toBe(X().ruffPartnersWinner.title);
  });

  it('says why declarer ruffs: in the short hand, forced by the defenders, or in the long hand on its own lead', () => {
    // West leads ♥K, dummy and East follow; South (5 trumps) is out of hearts, dummy holds 3 trumps
    const south = 'SA SK SQ S5 S4 C3 C2 D2';
    const dummy = 'SJ ST S9 C9 C8 D9';
    const forced = at(S, W, 'HK H2 H3', south, dummy);
    expect(explainPlay(forced, card('S4'))).toEqual({ title: X().ruff.title, text: X().ruff.forced });
    // dummy ruffs West's lead: the short trump hand
    const short = at(N, W, 'HK', dummy, south);
    expect(explainPlay(short, card('S9')).text).toBe(X().ruff.short);
    // declarer led hearts from dummy and ruffs in hand: the long hand, on its own lead
    const own = at(S, N, 'H4 H5', south, dummy);
    expect(explainPlay(own, card('S4')).text).toBe(X().ruff.long);
  });

  it('calls a trump lead drawing trumps only while the defenders have some', () => {
    const south = 'SA SK S5 H2 H3';
    const dummy = 'SQ S4 C2 C3 C4';
    const out = at(S, S, '', south, dummy, { played: [] });
    expect(explainPlay(out, card('SA')).title).toBe(X().drawTrumps.title);
    // the other six trumps have gone
    const gone = { ...out, played: cards('SJ ST S9 S8 S7 S6 S3 S2 H4 H5 H6 H7 H8 H9 HT HJ') };
    expect(explainPlay(gone, card('SA')).title).toBe(X().trumpsDrawn.title);
  });

  it('knows a defender returning partner’s suit from one switching', () => {
    const history: Trick[] = [{ leader: W, cards: cards('D4 D2 DA C3'), winner: E }];
    const sit = at(E, E, '', 'D9 D8 D6 H5 H4 H3', null, { history, played: history[0].cards });
    expect(explainPlay(sit, card('D8')).title).toBe(X().returnPartner.title);
    expect(explainPlay(sit, card('H5')).title).toBe(X().switchSuits.title);
    // East's own suit, led before
    const own: Trick[] = [{ leader: E, cards: cards('H8 H2 HA H7'), winner: W }];
    expect(explainPlay({ ...sit, history: own, played: own[0].cards }, card('H5')).title).toBe(X().continueSuit.title);
  });

  it('gives declarer playing third declarer’s principles, not "third hand high"', () => {
    // South leads ♣2 toward dummy's ♣A Q; West plays ♣5; the ♣K is unseen
    const dummy = 'CA CQ C4 D3';
    const sit = at(N, S, 'C2 C5', dummy, 'C7 C6 D2 D4');
    expect(explainPlay(sit, card('CQ')).title).toBe(X().finesse.title);
    expect(explainPlay(sit, card('CA')).title).toBe(X().sureTrick.title);
    expect(explainPlay(sit, card('C4')).title).toBe(X().duck.title);
    // East has shown out of clubs: the queen cannot lose to the king
    const history: Trick[] = [{ leader: N, cards: cards('C3 H2 C8 C9'), winner: W }];
    expect(explainPlay({ ...sit, history }, card('CQ'))).toEqual({ title: X().sureTrick.title, text: X().sureTrick.safe(card('CQ')) });
    // South led high and West could not beat it: dummy plays low
    const winning = at(N, S, 'CK C5', 'CQ C4 D3', 'C7 C6 D2');
    expect(explainPlay(winning, card('C4'))).toEqual({ title: X().partnerWinning.title, text: X().partnerWinning.declarer });
  });

  it('a defender playing third: the cheaper of touching cards, overtaking, holding up', () => {
    // West leads ♠2, dummy plays ♠4; East holds ♠K Q 5
    const sit = at(E, W, 'S2 S4', 'SK SQ S5 H2', null);
    expect(explainPlay(sit, card('SQ'))).toEqual({ title: X().thirdHandHighEquals.title, text: X().thirdHandHighEquals.text });
    expect(explainPlay(sit, card('SK')).text).toBe(X().thirdHandHighEquals.wrong(card('SK'), card('SQ')));
    // West's ♠J is winning; the ♠K overtakes it
    expect(explainPlay({ ...sit, trick: cards('SJ S4') }, card('SK')).title).toBe(X().overtake.title);
    // dummy's ♠9 beat West's ♠2; East keeps the ace back
    const hold = at(E, W, 'S2 S9', 'SA S5 H2', null);
    expect(explainPlay(hold, card('S5')).title).toBe(X().duck.title);
    // East cannot beat dummy's ♠A
    expect(explainPlay({ ...hold, trick: cards('S2 SA'), hand: cards('S8 S5 H2') }, card('S5')).title).toBe(X().cantWin.title);
  });
});
