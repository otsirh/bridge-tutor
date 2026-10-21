// PLACEHOLDER (Polish): an English copy until the Polish translation lands.
// Interface: table, tutor panel, review, Learn room, progress, settings.
//
// Grouped by screen. Plain strings are labels; functions build a sentence
// around values the code passes in (numbers for counts, so each language can
// pick its plural; already formatted text for calls, cards, decimals and
// percentages). Suit symbols in any text are coloured by the UI.

import type { Text } from '../en';

const s = (n: number) => (n === 1 ? '' : 's');
const tricks = (n: number) => `${n} trick${s(n)}`;

export const ui: Text['ui'] = {
  /** Words used on several screens. */
  common: {
    close: 'Close',
    you: 'You',
    partner: 'Partner',
    declarer: 'Declarer',
    dummy: 'Dummy',
    /** Plan tables: winners in notrump, losers in a suit contract. */
    topTricks: 'Top tricks',
    losers: 'Losers',
    sideNS: 'N/S',
    sideEW: 'E/W',
    shows: 'Shows: ',
    alert: 'Alert',
    nextHand: 'Next hand',
    board: (n: number) => `Board ${n}`,
    /** "4♥ by South" */
    contractBy: (contract: string, seat: string) => `${contract} by ${seat}`,
    /** Vulnerability in a sentence or under a diagram. */
    vul: { None: 'none vulnerable', NS: 'N/S vulnerable', EW: 'E/W vulnerable', Both: 'both vulnerable' },
  },

  /** Top bar. */
  header: {
    /** App name: the brand and the browser tab title. */
    title: 'Bridge Tutor',
    board: 'Board',
    dealer: 'Dealer',
    vul: 'Vul',
    /** Who is vulnerable, shown after "Vul". */
    vulValue: { None: 'None', NS: 'N/S (us)', EW: 'E/W (them)', Both: 'Both' },
    contract: 'Contract',
    tutor: 'Tutor',
    tutorTitle: 'Hints, explanations and coaching',
    learn: 'Learn',
    settings: 'Settings',
    newDeal: 'New deal',
    language: 'Language',
    /** Screen-reader names of the two columns. */
    tableRegion: 'Table',
    tutorRegion: 'Tutor',
  },

  /** The felt: seats, auction, trick, status line. */
  table: {
    dealerChip: 'Dealer',
    dealerTitle: 'Dealer',
    vulChip: 'Vul',
    vulTitle: 'Vulnerable',
    nvChip: 'NV',
    nvTitle: 'Not vulnerable',
    yourTurn: 'Your turn',
    toPlay: 'To play',
    /** Face-down hand. */
    cards: (n: number) => `${n} card${s(n)}`,
    thinking: 'thinking',
    alertTitle: 'Alert: artificial',
    /** Under the contract in the middle of the table. */
    by: (seat: string) => `by ${seat}`,
    /** Trick tally. */
    we: 'We',
    they: 'They',
    defence: 'Defence',
    // status line
    handOver: 'Hand over.',
    yourCall: 'Your call.',
    yourLead: 'Your opening lead.',
    yourHand: 'your hand',
    northHand: 'North’s hand',
    leadFrom: (hand: string) => `Lead from ${hand}.`,
    playFrom: (hand: string) => `Play from ${hand}.`,
    bidForMe: 'Bid for me',
    bidForMeTitle: 'Let the system bid this hand for you',
    claim: 'Claim rest',
    playOut: 'Play it out',
    playOutTitle: 'The computer plays the rest double-dummy',
    undo: '↶ Undo',
    undoTitle: 'Take back your last call or card',
    review: 'Review the hand',
  },

  /** Bidding box under the table. */
  bidBox: {
    label: 'Bidding box',
    notSystem: ' (not a system bid — read naturally)',
    hoverHelp: 'Hover over a call to see what it would tell partner.',
  },

  /** The tutor's column. */
  panel: {
    title: 'Tutor',
    yourCall: 'Your call',
    yourPlay: 'Your play',
    showCall: 'Show the recommended call',
    showCard: 'Show the recommended card',
    declarerPlan: 'Declarer’s plan',
    counting: 'Counting',
    readingPlay: 'Reading the play',
    auctionSays: 'What the auction says',
    yourHand: 'Your hand',
    notes: 'Notes',
    // think first (before the recommendation is shown)
    thinkBid: (hcp: number, tp: number, shape: string, balanced: boolean) =>
      `Think first: you have ${hcp} HCP (${tp} with length), shape ${shape}${balanced ? ', balanced' : ''}. `,
    partnerShown: (what: string) => `Partner has shown ${what}. `,
    partnerNothing: 'Partner hasn’t shown anything yet. ',
    thinkBidQuestion: 'What is your plan, and which call describes your hand best?',
    thinkPlay: 'Think first: which card wins the most tricks given what the auction and play have shown? Count the hidden hands’ points and distribution.',
    // recommended call
    met: 'met',
    notMet: 'not met',
    noRuleBetter: 'No rule fits better than passing.',
    partnerReads: 'Partner will read it as: ',
    noPromise: 'no specific promise',
    otherCalls: 'Other calls considered',
    /** Why another call doesn't fit: its first unmet condition. */
    needs: (cond: string) => ` — needs ${cond.replace(/^a /, '')}`,
    // recommended card
    bookLead: 'Opening lead by the book',
    otherSuits: 'Other suits: ',
    simulateLeads: 'Simulate the leads (slower)',
    simulating: (done: number, total: number) => `Simulating layouts that fit the auction… ${done}${total ? '/' + total : ''}`,
    equalCards: (n: number) => `or any of ${n} equal cards`,
    bestInSim: 'best in simulation',
    simSummary: (samples: number, card: string, avg: string, ours: boolean, pct: string) =>
      `Over ${samples} layouts consistent with the bidding and play, ${card} averages ${avg} tricks for your side and ${ours ? 'makes the contract' : 'beats the contract'} ${pct} of the time.`,
    colCard: 'Card',
    colTricks: 'Tricks',
    colMakes: 'Makes',
    colSets: 'Sets',
    colScore: 'Score',
    onlyCard: 'Only one legal card.',
    // counting
    seenHcp: (seen: number, rest: number) => `You can see ${seen} HCP, so ${rest} are in the two hidden hands.`,
    hiddenHcp: (a: string, ra: string, b: string, rb: string) => `${a}: ${ra} HCP · ${b}: ${rb} HCP (combining the auction with what you see).`,
    showedOut: (seat: string, suits: string) => `${seat} has shown out of ${suits}.`,
    trumpsOut: (suit: string, n: number) => `Trumps (${suit}) still out in the hidden hands: ${n}.`,
    // what the auction says
    partnerTag: ' (partner)',
    nothingShown: 'Nothing shown yet.',
    /** A call you made, clicked in the auction. */
    systemPreferred: (call: string, rule: string) => `The system preferred ${call} (${rule}).`,
    // "are you sure?" before a clearly worse call or card
    sureAbout: (what: string) => `Are you sure about ${what}?`,
    partnerWouldRead: (call: string, name: string, desc: string) => `Partner would read ${call} as: ${name} — ${desc}`,
    handDoesntMatch: 'Your hand doesn’t match it: ',
    systemBids: (call: string, rule: string) => `The system bids ${call} — ${rule}.`,
    cardWarning: (samples: number, best: string, bestAvg: string, bestPct: string, card: string, mineAvg: string, minePct: string) =>
      `In ${samples} simulated layouts ${best} averages ${bestAvg} tricks (${bestPct} success); ${card} averages ${mineAvg} (${minePct}).`,
    bidIt: (call: string) => `Bid ${call}`,
    playIt: (card: string) => `Play ${card}`,
    anyway: (what: string) => `${what} anyway`,
    letMeThink: 'Let me think',
  },

  /** Notes in the tutor's feed, written as the hand goes. */
  notes: {
    welcomeTitle: 'Welcome to the table',
    welcomeText:
      'You are South and North is your partner; the bots play Standard American (SAYC). Bid with the box under the table, then click cards to play. The tutor explains every call (click it in the auction), suggests a call or card when you ask, and reviews the deal at the end. You can always take back a move.',
    contract: (contractBy: string) => `Contract: ${contractBy}`,
    youDefend: (leader: string) => `You defend. ${leader} makes the opening lead.`,
    youDeclare: 'Your side declares: you play both your hand and North’s.',
    callOk: (call: string) => `${call} — matches the system`,
    callOff: (call: string, systemCall: string) => `${call} — the system bids ${systemCall}`,
    callOffText: (call: string, meaning: string, systemCall: string, rule: string) =>
      `Your ${call} would be read as: ${meaning}. The system prefers ${systemCall} (${rule}).`,
    cardOff: (card: string, best: string) => `${card} — ${best} rated higher`,
    cardOffText: (samples: number, best: string, bestAvg: string, bestPct: string, mineAvg: string, minePct: string, card: string) =>
      `In ${samples} simulated layouts ${best} averaged ${bestAvg} tricks (${bestPct} success) vs ${mineAvg} (${minePct}) for ${card}.`,
    madeExactly: 'made exactly',
    madePlus: (n: number) => `made +${n}`,
    down: (n: number) => `down ${n}`,
    resultText: (score: string) => `Score for North-South: ${score}.`,
  },

  /** Messages from the game itself. */
  game: {
    thinking: (seat: string) => `${seat} is thinking…`,
    playingOut: 'Playing out the hand…',
    claimOnlyDeclarer: 'You can claim only as declarer.',
    claimUnchecked: 'Could not check the claim.',
    claimNotYet: (lose: number, remaining: number) => `Not yet: with best defence you would lose ${lose} of the remaining ${remaining} tricks.`,
    claimAccepted: 'Claim accepted.',
  },

  /** Post-hand review. */
  review: {
    label: 'Hand review',
    tabs: { summary: 'Summary', bidding: 'Bidding', play: 'Play' },
    replay: 'Replay this deal',
    nextDeal: 'Next deal',
    // result tiles
    contract: 'Contract',
    madeExactly: 'made exactly',
    madeOver: (n: number) => `made with ${n} overtrick${s(n)}`,
    down: (n: number) => `down ${n}`,
    noScore: 'no score',
    score: 'Score (N/S)',
    declTricks: (n: number) => `${tricks(n)} for declarer`,
    par: 'Par',
    solvingPar: 'solving all 20 contracts',
    vsPar: 'vs par',
    imps: (n: number) => (Math.abs(n) === 1 ? 'IMP' : 'IMPs'),
    atOrAbovePar: 'at or above the double-dummy par',
    belowPar: 'below the double-dummy par',
    doubleDummy: 'Double dummy',
    bestPlayAll: (makes: boolean) => `best play by all four: ${makes ? 'makes' : 'fails'}`,
    yourBidding: 'Your bidding',
    callsMatching: 'calls matching the system',
    yourPlay: 'Your card play',
    noErrors: 'No errors',
    ddCards: (n: number) => `double-dummy, ${n} card${s(n)}`,
    analysing: (pct: string) => `analysing ${pct}`,
    sdTitle: 'With what you knew',
    sdErrors: (n: number) => (n === 1 ? '1 clear error' : `${n} clear errors`),
    sdNote: (n: number) => `single-dummy, ${n} card${s(n)} checked`,
    sdChecking: (done: number, total: number) => `checking your cards ${done}/${total}`,
    keyMoments: 'Key moments',
    keyMomentsText: 'The decisions where the card mattered most, with the information you had.',
    keyMoment: (trick: number, card: string, right: boolean) => `Trick ${trick}, you played ${card}${right ? ' — the best card.' : '.'}`,
    keyMomentNumbers: (best: string, bs: string, worst: string, ws: string) => `Best ${best} (succeeds ${bs}), worst ${worst} (${ws}).`,
    keyMomentTricks: (best: string, bt: string, worst: string, wt: string) => `Best ${best} (${bt} tricks on average), worst ${worst} (${wt}).`,
    // sharing
    share: 'Share this deal',
    shareText: 'A link or code opens this deal in Bridge Tutor; PBN works in most bridge programs; BBO shows the whole board.',
    copyLink: 'Copy link',
    copyCode: 'Copy code',
    copyPBN: 'Copy PBN',
    openBBO: 'Open in BBO viewer',
    copied: 'Copied.',
    copyManual: 'Copy this text',
    // summary tab
    takeaways: 'What to take away',
    theDeal: 'The deal',
    ddMakes: 'Double-dummy makes',
    youTag: ' (you)',
    solvingTable: 'Solving the double-dummy table…',
    ddTableNote: 'The highest level each declarer can make in each strain with perfect play by everyone (— = not even one).',
    lessonBid: (call: string, meaning: string, systemCall: string, rule: string) =>
      `Bidding: you bid ${call} (${meaning}); the system bids ${systemCall} — ${rule}. `,
    lessonCard: (trick: number, card: string, cost: number, better: string) =>
      `Trick ${trick}: ${card} cost ${tricks(cost)} double-dummy (better: ${better}). `,
    bestOnInfo: 'But it was the best card on the information you had — double-dummy hindsight sees all hands.',
    lessonContract: (contract: string, makes: boolean, t: number, par: string) =>
      `Contract: ${contract} ${makes ? 'can make' : 'cannot make'} double-dummy (${tricks(t)}). Par is ${par}.`,
    cleanHand: 'Clean hand: no bidding disagreements and no double-dummy card errors.',
    // bidding tab
    system: (call: string, rule: string, desc: string) => `System: ${call} (${rule}) — ${desc}`,
    // play tab
    noPlay: 'No play: the hand was passed out.',
    analysingAll: (pct: string) => `Analysing every card double-dummy… ${pct}`,
    playLegend: 'Underlined = your cards. A red badge is the number of tricks that card cost with perfect play by everyone. Click a trick to see the position.',
    costTitle: 'Tricks lost double-dummy',
    youCost: (n: number) => `you −${n}`,
    forced: ' — forced or not analysed.',
    verdict: (got: number, side: string, best: number) => ` → ${tricks(got)} for ${side} (best ${best}). `,
    options: 'Options: ',
    beforeTrick: (n: number) => `Before trick ${n}`,
    trick: (n: number) => `Trick ${n}`,
  },

  /** The Learn room: lessons, drills, glossary. */
  learn: {
    title: 'Learn',
    tabs: { lessons: 'Lessons', bid: 'Bidding drill', lead: 'Lead drill', count: 'Counting drill', glossary: 'Glossary' },
    lessonsNav: 'Lessons',
    noLessons: 'No lessons found.',
    /** Lesson topics and levels, keyed by their ids in the lesson files. */
    topics: {
      Basics: 'Basics',
      Bidding: 'Bidding',
      'Competitive bidding': 'Competitive bidding',
      'Slam bidding': 'Slam bidding',
      'Declarer play': 'Declarer play',
      Defense: 'Defence',
      'Scoring & tactics': 'Scoring & tactics',
    },
    levels: { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Advanced' },
    keyPoints: 'Key points',
    checkYourself: 'Check yourself',
    right: 'Right. ',
    notQuite: 'Not quite. ',
    // drills
    score: (ok: number, total: number) => `  Score ${ok}/${total}`,
    bidDrill: 'Bidding drill. ',
    bidPrompt: (vul: string) => `You are South, ${vul}. What do you call?`,
    rightCall: (call: string, rule: string) => `Right: ${call} — ${rule}`,
    systemBids: (call: string, rule: string) => `The system bids ${call} — ${rule}`,
    yourCallReads: (call: string, name: string, desc: string) => `Your ${call} would be read as ${name}: ${desc}`,
    doesntFit: 'It doesn’t fit because: ',
    leadDrill: 'Opening lead drill. ',
    leadPrompt: (contract: string) => `East is declarer in ${contract}. Choose your opening lead.`,
    rightSuitScore: (ok: number, total: number) => `  Right suit ${ok}/${total}`,
    bookLead: 'The book lead.',
    rightSuit: (card: string) => `Right suit; the standard card is ${card}.`,
    bookLeadIs: (card: string) => `The book lead is ${card}.`,
    leadNoMatter: (def: number, need: number) =>
      `On this actual deal every lead gives the defence ${tricks(def)} double-dummy (they need ${need}) — here the lead made no difference.`,
    defenceNeeds: (need: number) => `On this actual deal (double-dummy, all hands known) the defence needs ${tricks(need)}:`,
    defTricks: (n: number) => `${tricks(n)} for the defence`,
    beatsIt: 'beats it',
    solvingDeal: 'Solving this deal double-dummy…',
    wholeDeal: 'The whole deal',
    /** "West (dummy)", "East (declarer)" under the diagram. */
    dummyTag: 'dummy',
    declarerTag: 'declarer',
    countDrill: 'Declarer counting drill. ',
    countPrompt: (contract: string, lead: string, question: string) => `You are declarer in ${contract}; West leads ${lead}. ${question}`,
    countTopTricks: 'How many top tricks (sure winners) do you have?',
    countLosers: 'How many losers? Count them in the hand with more trumps (the master hand), letting the other hand’s top cards cover.',
    correct: 'Correct.',
    theCountIs: (n: number) => `The count is ${n}.`,
  },

  /** Progress: headline numbers and the hand history. */
  settings: {
    title: 'Settings',
    tutor: { title: 'Tutor', desc: 'Hints, explanations of every call, counting help and the declarer plan. Turn it on or off at any time.' },
    autoHint: { title: 'Show recommendations straight away', desc: 'Off: the tutor asks you to think first and reveals its choice when you ask.' },
    coach: { title: 'Coach me before mistakes', desc: 'When your call or card is clearly worse than the recommendation, the tutor asks you to confirm.' },
    peek: { title: 'Show all four hands', desc: 'Practice mode: see every card while you play (the bots still play fair).' },
    dealMode: { title: 'Deals', desc: 'Choose what kind of hands to practise. Takes effect on the next deal.' },
    strength: { title: 'Bot strength', desc: 'How many layouts the bots and the tutor simulate before each card. Deeper is stronger and slower.' },
    speed: { title: 'Speed', desc: 'Pause between the bots’ cards.' },
    theme: { title: 'Theme', desc: 'Follows your system unless you choose.' },
    language: { title: 'Language', desc: 'For the whole app, the tutor and the lessons. Switch at any time — the hand in progress is kept.' },
    dealModes: {
      random: 'Random deals',
      declare: 'Practise declarer play (strong N/S)',
      defend: 'Practise defence (strong E/W)',
      slam: 'Slam hunting (31+ for N/S)',
      competitive: 'Competitive auctions',
      strong: 'You hold a strong hand',
    },
    strengths: { quick: 'Quick', standard: 'Standard', deep: 'Deep' },
    speeds: { slow: 'Slow', normal: 'Normal', fast: 'Fast' },
    themes: { system: 'System', light: 'Light', dark: 'Dark' },
    systemNote:
      'System: Standard American Yellow Card (SAYC) — 15–17 1NT, five-card majors, Stayman, Jacoby transfers and Jacoby 2NT, weak twos, negative doubles, Michaels and Unusual 2NT, Blackwood or Roman Key Card Blackwood, standard leads and signals — plus the conventions below. Duplicate scoring.',
    install: { title: 'Install the app', desc: 'Add Bridge Tutor to your home screen or desktop. It opens in its own window and works offline.', button: 'Install' },
    conventionsTitle: 'Conventions',
    conventionsNote: 'You, your partner and the opponents all play these. Changes apply from the next deal.',
    lessonLink: 'Lesson',
  },
};
