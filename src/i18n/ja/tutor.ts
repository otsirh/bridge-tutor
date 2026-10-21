// PLACEHOLDER (Japanese): an English copy until the Japanese translation lands.
// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Grouped by the file that shows the text. Suits and seats arrive as indexes
// (suit 0..3 = clubs, diamonds, hearts, spades; seat 0..3 = N, E, S, W), cards
// as card ids and ranks as numbers (14 = ace), so each language picks its own
// word forms. Holdings ("KJ104") and split odds ("3-2 68%, …") arrive ready-made.

import type { Text } from '../en';

import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

/** "1 trick", "2 tricks". */
const plural = (n: number, word: string) => (n === 1 ? word : `${word}s`);
/** "A 3-card", "An 8-card". */
const aCard = (n: number) => `${n === 8 || n === 11 ? 'An' : 'A'} ${n}-card`;
/** Leading toward the honours in the other hand. */
const TOWARD = { aq: 'A-Q', king: 'king', queen: 'queen', honours: 'honours' };
const HONOUR: Record<number, string> = { 14: 'ace', 13: 'king', 12: 'queen' };
/** "2 or 4", "1, 3 or 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}` : String(xs[0]);
};
/** How a signal card looks from across the table: "High-low (♣8, then ♣3)", "♣7 looks high (…)". */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'High-low' : 'Low-high'} (${cardName(card)}, then ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} is always low`
      : l.sure
        ? `${cardName(card)} is ${l.height} (every ${l.height === 'high' ? 'higher' : 'lower'} spot card is accounted for)`
        : `${cardName(card)} looks ${l.height} (some ${l.height === 'high' ? 'lower' : 'higher'} spot cards are still out)`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts — the principle behind a card: a short title (the
  // review also shows it alone) and one or two sentences of explanation.
  principles: {
    openingLead: {
      title: 'Opening lead',
      /** The card led is not the book card from this holding; `why` explains the book card. */
      notStandard: (holding: string, rank: number, why: string) => `From ${holding} the standard card is ${rankLabel(rank)}: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Drawing trumps',
      text: 'Leading trumps removes the defenders’ trumps so they cannot ruff your winners. Draw them early unless dummy’s trumps are needed for ruffs.',
    },
    unblock: {
      title: 'Unblocking',
      text: 'Cash the high card from the short hand first, so the long hand keeps the lead and can run the rest of the suit.',
    },
    cash: {
      title: 'Cashing a winner',
      declarer: (card: Card) => `${cardName(card)} is the highest ${core.suitSingular[suitOf(card)]} left: it wins the trick unless someone ruffs.`,
      defender: 'Take your sure trick before declarer can discard losers on dummy’s long suit.',
    },
    crossToOtherHand: {
      title: 'Crossing to the other hand',
      text: 'Leading low to a winner in the other hand uses it as an entry, so you can lead from there next.',
    },
    leadTowardHonours: {
      title: 'Leading toward honours',
      /** What the other hand holds: A-Q, the king, the queen, or several honours. */
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Lead low toward the ${TOWARD[toward]} so the defender on your left must play before you choose your card from the other hand — the basis of the finesse.`,
    },
    develop: {
      title: 'Developing a suit',
      text: 'Losing a trick in this suit now sets up the remaining cards as winners while you still control the other suits.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Trump lead',
      text: 'A trump lead reduces declarer’s ruffs in dummy — strong when dummy is short in a side suit.',
    },
    lookForRuff: {
      title: 'Looking for a ruff',
      text: 'A short suit lead hopes partner gets in and gives you a ruff.',
    },
    switchSuits: {
      title: 'Switching suits',
      text: 'Lead through declarer’s strength, or toward dummy’s weakness: the defender in front of the strong hand should lead that suit.',
    },

    // not following suit
    overruff: {
      title: 'Overruff',
      text: 'Ruffing higher than the trump already played wins the trick.',
    },
    ruffPartnersWinner: {
      title: 'Ruffing partner’s winner',
      text: 'Usually wasteful: partner was already winning this trick.',
    },
    ruff: {
      title: 'Ruffing',
      declarer: 'Ruffing in the hand with fewer trumps gains a trick; ruffing in the long trump hand just uses a trump you would make anyway.',
      defender: 'You are out of the suit led, so a ruff takes the trick.',
    },
    discard: {
      title: 'Discard',
      defender: 'Discard from a suit you don’t need, and keep length in suits where you must guard against declarer’s or dummy’s long cards.',
      declarer: 'Throw a loser from a suit that can’t win tricks, keeping the cards that may still be needed.',
    },

    // defenders' signals: `right` = the card says what this hand should say; `best` = the card that would
    countSignal: {
      title: 'Count signal',
      /** `n` cards in the suit before playing. */
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Declarer is playing this suit and partner expects count: with ${n} ${core.suits[suit]} (an ${n % 2 ? 'odd' : 'even'} number) the standard card is ${cardName(best)}${n % 2 ? '' : ', then a lower one (high-low)'}. ${cardName(card)} would show an ${n % 2 ? 'even' : 'odd'} number.`
          : n % 2
            ? `Declarer is playing this suit, so show your count: with ${n} ${core.suits[suit]} (an odd number) play your lowest card, ${cardName(card)}. Partner can then tell how many declarer holds and when to take the ace.`
            : `Declarer is playing this suit, so show your count: with ${n} ${core.suits[suit]} (an even number) play high-low — ${cardName(card)} now, a lower card next time. Partner can then tell how many declarer holds and when to take the ace.`,
    },
    attitudeSignal: {
      title: 'Attitude signal',
      /** Why you like partner's suit (an honour — the highest you hold is `honour` — or a doubleton to ruff), or null. */
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Partner led this suit and expects your attitude: you ${reason ? 'like' : 'don’t like'} it, so the standard card is ${cardName(best)}. ${cardName(card)} says the opposite.`
          : reason === 'honour'
            ? `Partner led this suit: give attitude. You hold the ${HONOUR[honour]}, so encourage with the highest spot card you can spare, ${cardName(card)}, and partner will continue.`
            : reason === 'ruff'
              ? `Partner led this suit: give attitude. With a doubleton, start with the higher card (${cardName(card)}): high-low asks partner to continue, and you ruff the third round.`
              : `Partner led this suit: give attitude. Nothing here is worth continuing, so discourage with your lowest card, ${cardName(card)}; partner will look for a switch.`,
    },
    discardSignal: {
      title: 'Discard (attitude)',
      /** `want`: you would like this suit led; `clear`: you have a spot card high enough to say so. */
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `You would like ${core.suits[suit]} led, but no ${core.suitSingular[suit]} you can spare is high enough to read as encouraging; discard low from a suit you don’t want instead.`
          : want
            ? right
              ? `A high discard encourages: ${cardName(card)} asks partner to lead ${core.suits[suit]}, where you hold strength.`
              : `You would like ${core.suits[suit]} led, but ${cardName(card)} is your lowest and discourages; a high one (${cardName(best)}) would encourage — or discard low from a suit you don’t want.`
            : right
              ? `A low discard discourages: ${cardName(card)} tells partner not to lead ${core.suits[suit]}.`
              : `A high discard asks partner to lead ${core.suits[suit]}, which you don’t want; discard your lowest (${cardName(best)}) instead.`,
    },
    preferenceSignal: {
      title: 'Suit-preference signal',
      /** Leading for partner to ruff; `sides` = the other two side suits, lower first; `want` high = the higher one. */
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Partner will ruff this and read your card as suit preference; with no preference, lead a middle card such as ${cardName(best)}.`
            : `Partner will ruff this and read your card as suit preference: you want ${core.suits[want === 'high' ? sides[1] : sides[0]]} back, so lead ${cardName(best)}.`
          : want === 'middle'
            ? 'Partner will ruff this, and your card also says which suit to return: with no preference, lead a middle card — neither high nor low.'
            : `Partner will ruff this, and your card also says which suit to return: a ${want} card asks for ${core.suits[want === 'high' ? sides[1] : sides[0]]} (the ${want === 'high' ? 'higher' : 'lower'} of the other two side suits), where you hold the ace.`,
    },

    // second hand
    coverHonour: {
      title: 'Cover an honour with an honour',
      text: 'Covering forces declarer to spend two high cards to win one trick, which may promote a lower card in your or partner’s hand.',
    },
    secondHandLow: {
      title: 'Second hand low',
      text: 'Partner plays after you and the leader’s partner, so playing low keeps your high card to capture something bigger later.',
    },
    sureTrick: {
      title: 'Winning a sure trick',
      text: (card: Card) => `${cardName(card)} is the highest card left in the suit.`,
    },
    splitHonours: {
      title: 'Splitting honours',
      text: 'Playing one of touching honours stops declarer winning cheaply with a lower card.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'Partner is winning',
      third: 'Partner’s card is already winning, so play low (or signal).',
      fourth: 'Don’t overtake: play your lowest card.',
    },
    thirdHandHighEquals: {
      title: 'Third hand high — lowest of equals',
      text: 'Play the cheaper of touching cards: partner can then work out where the higher one is.',
    },
    thirdHandHigh: {
      title: 'Third hand high',
      text: 'With partner’s lead not winning, play high to win the trick or force out a big card.',
    },
    cantWin: {
      title: 'Can’t win the trick',
      third: 'Play your lowest card (or signal attitude if partner led the suit).',
      fourth: 'Play your lowest card in the suit.',
    },
    winCheaply: {
      title: 'Win cheaply',
      text: 'Last to play: win with the smallest card that does the job.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts — declarer's plan once dummy is down: count winners
  // (notrump) or losers (suit contracts) and where extra tricks can come from.
  plan: {
    // sure tricks in one suit
    allWinners: 'all winners',
    topTricks: (n: number) => `${n} top ${plural(n, 'trick')}`,
    noTopTricks: 'no top tricks',
    /** Opponents' cards in a suit when there are too many for the split table. */
    cardsOut: (n: number) => `${n} cards`,

    // summary, notrump
    ntEnough: (total: number, need: number) =>
      `You have ${total} top tricks and need ${need}: take your tricks — and don't block a suit (cash the high cards from the short hand first).`,
    ntShort: (total: number, need: number) =>
      `You have ${total} top ${plural(total, 'trick')} and need ${need}: find ${need - total} more before the defenders establish their suit.`,
    // summary, suit contracts
    losersOk: (losers: number, allowed: number) =>
      `About ${losers} ${plural(losers, 'loser')} and you can afford ${allowed}: draw trumps and take your tricks, unless an early ruff or discard is needed.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `About ${losers} losers but you can afford only ${allowed}: you need to get rid of ${losers - allowed} (ruff them, discard them on extra winners, or finesse).`,

    // ideas
    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Establish ${core.suits[suit]}: with ${total} cards between you (${missing} out, ${odds}), the long ${SUIT_SYMBOLS[suit]} can produce about ${extra} extra ${plural(extra, 'trick')}.`,
    finesseAQ: (suit: number, holding: string) =>
      `Finesse in ${core.suits[suit]}: lead toward A-Q (${holding}) and play the queen if the king doesn't appear — about 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `In ${core.suits[suit]}, lead toward the king (${holding}): it scores if the ace is on your left — about 50%.`,
    doubleFinesse: (suit: number) =>
      `Double finesse in ${core.suits[suit]} (A-J-10): finesse twice; you make two tricks 76% of the time.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Knock out the ace of ${core.suits[suit]}: K-Q${withJack ? '-J' : ''} will then give you ${withJack ? '2+ tricks' : '1+ trick'}.`,
    ntDevelopEarly: 'In notrump, set up extra tricks early, while you still control the suits — and count how many times you can afford to lose the lead.',
    /** Suits to ruff in the short trump hand, with that hand's length in each (0 = void). */
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Ruff losers in ${inDummy ? 'dummy' : 'your hand'}, the short trump hand: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'void'})`).join(', ')}. A ruff in the short hand is an extra trick; a ruff in the long trump hand is not.`,
    /** Extra winners in `suit` to throw losers in `loserSuits` on. */
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Discards: ${inDummy ? 'dummy' : 'your hand'} has ${extra} extra ${SUIT_SYMBOLS[suit]} ${plural(extra, 'winner')} — throw ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')} losers from the other hand on ${extra === 1 ? 'it' : 'them'} (usually after drawing trumps).`,
    trumpsOut: (n: number, odds: string) =>
      `Trumps: ${n} ${n === 1 ? 'is' : 'are'} out (${odds}). Draw ${n === 1 ? 'it' : 'them'} early unless you need dummy's trumps for ruffs or must set up a side suit first.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts — opening leads by the book
  leads: {
    /** Why this card from the suit. */
    card: {
      singleton: 'A singleton: lead it.',
      ak: 'Ace from ace-king: you keep the lead and see dummy before deciding what next.',
      doubleton: 'Top of a doubleton: the high card first, then the low one (high-low shows a doubleton and may get you a ruff).',
      sequence: (holding: string) => `Top of a sequence (${holding}): promises the card below it and denies the one above.`,
      interior: (holding: string, rank: number) => `Interior sequence (${holding}): lead the top of the touching cards, ${rankLabel(rank)}.`,
      touching: (holding: string) => `Top of touching honours (${holding}).`,
      nothing: 'Top of nothing from three small cards: tells partner you have no honour here.',
      small: 'From four or more small cards, lead the second-highest so partner does not place you with an honour.',
      partnerLow: 'Low from an honour and two others in partner’s suit (third best).',
      fourth: (holding: string) => `Fourth best from your longest and strongest suit (${holding}). Partner can use the Rule of 11.`,
      third: (holding: string) => `Third best from an honour with two small cards (${holding}): keep the honour to capture one of declarer’s.`,
    },
    /** Why this suit. */
    suit: {
      partnerBid: (suit: number) => `Partner bid ${core.suits[suit]}: leading partner's suit is rarely wrong and usually best.`,
      theyBid: (suit: number) => `The opponents bid ${core.suits[suit]} — leading their suit usually helps declarer.`,
      // against notrump
      ntLong: (suit: number, n: number) =>
        `Against notrump, lead your longest and strongest suit (${n} ${core.suits[suit]}): you hope to set up long-card winners.`,
      ntSequence: 'A solid sequence is safe and builds tricks.',
      ntShort: (n: number) => `${n === 1 ? 'A singleton' : `${aCard(n)} suit`}: not the ideal notrump lead.`,
      // against a suit contract
      trump: 'A trump lead: safe and passive, and it cuts down dummy’s ruffs.',
      singleton: 'A singleton: you hope partner wins an early trick and gives you a ruff.',
      aceAway: 'Never lead away from an ace against a suit contract — and leading the ace itself rarely helps.',
      sequence: (suit: number) => `Top of a sequence in ${core.suits[suit]}: safe, and it may set up tricks.`,
      plain: (suit: number, n: number) =>
        n === 1 ? `A singleton ${core.suitSingular[suit]}.` : `${aCard(n)} ${core.suitSingular[suit]} holding.`,
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts — what the opening lead and partner's signals tell you
  signals: {
    /** Heading over the meaning of the opening lead. */
    leadBy: {
      you: (card: Card) => `Your opening lead: ${cardName(card)}`,
      partner: (card: Card) => `Partner’s opening lead: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `${core.seats[seat]}’s opening lead: ${cardName(card)}`,
    },
    /** What the card led usually shows, by rank. */
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'The ace: usually from ace-king (against notrump it can also ask partner to unblock).'
          : 'The ace: usually from ace-king, or a singleton/doubleton ace.',
      king: (vsNT: boolean) =>
        vsNT ? 'The king: top of a sequence — K-Q (or A-K). It denies the ace unless from A-K.' : 'The king: top of a sequence — K-Q. It denies the ace.',
      queen: 'The queen: top of a sequence (Q-J…), denying the king.',
      jack: 'The jack: top of J-10…, or from an interior sequence such as K-J-10. Denies the queen.',
      ten: 'The ten: top of 10-9…, or an interior sequence (Q-10-9, K-10-9).',
      nine: 'The nine: top of a short or worthless holding, or 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `A low ${core.suitSingular[suit]}: probably fourth best from length with an honour. Use the Rule of 11.`
          : `A low ${core.suitSingular[suit]}: usually third/fourth best from an honour — or a singleton.`,
    },
    ruleOf11: {
      title: 'Rule of 11',
      /** 11 − rank led = cards above it in the other three hands; `declarer` of them are declarer's. */
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Rule of 11: 11 − ${rankLabel(rank)} = ${above} cards higher than the ${rankLabel(rank)} in the other three hands. You can see ${seen} (dummy and your hand), so declarer holds ${declarer}.`,
    },
    /** Partner's signals (and, for declarer, the defenders' count): `look` says how high the card looks and how sure that is. */
    read: {
      count: {
        /** `who`: a seat, or null for partner. */
        title: (who: number | null, card: Card) => `${who === null ? 'Partner’s' : `${core.seats[who]}’s`} ${cardName(card)}: count`,
        /** `lengths`: the lengths that fit; `declarer`: read from declarer's seat. */
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} could be high or low: wait for the next card in ${core.suits[suit]} to read the count.`
            : `${looks(card, look)}: ${look.sure ? '' : 'probably '}an ${look.height === 'high' ? 'even' : 'odd'} number of ${core.suits[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Defenders sometimes falsecard, so treat it as a clue.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `Partner’s ${cardName(card)} on your lead: attitude`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} could be high or low: not clear yet whether partner likes the suit.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'partner likes the suit — continue it.' : 'partner probably likes the suit.') : `partner ${look.sure ? '' : 'probably '}doesn’t like the suit — think about a switch.`}`,
      },
      discard: {
        title: (card: Card) => `Partner discarded ${cardName(card)}`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} could be high or low: not clear yet whether partner wants ${core.suits[suit]} led.`
            : `${looks(card, look)}: partner ${look.sure ? '' : 'probably '}${look.height === 'high' ? 'wants' : 'doesn’t want'} ${core.suits[suit]} led.`,
      },
      preference: {
        title: (card: Card) => `Partner leads ${cardName(card)} for you to ruff: suit preference`,
        /** `sides`: the other two side suits, lower first. */
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} is neither clearly high nor low: partner may have no preference — return whatever suits you best.`
            : `${looks(card, look)}: partner ${look.sure ? '' : 'probably '}asks for ${core.suits[look.height === 'high' ? sides[1] : sides[0]]} back, the ${look.height === 'high' ? 'higher' : 'lower'} of the other two side suits.`,
      },
    },
    /** Short labels for a signal a bot gave, e.g. a badge on its card. */
    badge: {
      count: (even: boolean) => `Count: ${even ? 'even' : 'odd'}`,
      attitude: (encourage: boolean) => `Attitude: ${encourage ? 'encouraging' : 'discouraging'}`,
      discard: (encourage: boolean, suit: number) => `Discard: ${encourage ? 'encouraging' : 'discouraging'} ${SUIT_SYMBOLS[suit]}`,
      /** The suit asked for, or null for no preference. */
      preference: (suit: number | null) => `Suit preference: ${suit === null ? 'none' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts — the hand-evaluation table: label, value, note
  eval: {
    hcp: 'HCP',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Total pts',
    totalNote: (lengthPts: number) => `HCP + ${lengthPts} for length`,
    shape: 'Shape',
    balanced: 'balanced',
    semiBalanced: 'semi-balanced',
    unbalanced: 'unbalanced',
    losers: 'Losers',
    losersNote: 'Losing Trick Count',
    quickTricks: 'Quick tricks',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Longest',
    controls: (n: number) => `${n} ${plural(n, 'control')}`,
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts — the par contract in the review
  par: {
    /** "4♠X by N/S (N)": the contract, the side, and the seat that declares it. */
    contract: (contract: string, declarer: number) =>
      `${contract} by ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
