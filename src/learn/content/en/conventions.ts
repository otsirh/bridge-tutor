// Lessons on the optional conventions: Roman Key Card Blackwood, splinters and
// Drury, new minor forcing and fourth suit forcing, Texas transfers.
// Every example auction is the one the bots bid with these hands.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Roman Key Card Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'The modern 4NT: asking for the four aces and the king of trumps, then the trump queen and side kings, so that you bid the slams that make and stop when two key cards are missing.',
    body: `
<h3>Five key cards</h3>
<p>Plain Blackwood counts aces, but the king and queen of trumps matter just as much: a slam missing an ace and the trump king is as doomed as one missing two aces. <strong>Roman Key Card Blackwood</strong> (RKCB) treats the trump king as a fifth ace. Once a suit is agreed, 4NT asks for the <strong>five key cards</strong>: the four aces and the king of trumps. The replies also tell you about the queen of trumps.</p>
<p>The trump suit is the agreed suit; if no suit has been agreed, it is the last suit your side has bid naturally. The bots in this app play RKCB by default (you can switch back to plain Blackwood in the system settings).</p>

<h3>The replies (1430)</h3>
<table>
<thead><tr><th>Reply</th><th>Key cards</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 or 4</td></tr>
<tr><td>5♦</td><td>0 or 3</td></tr>
<tr><td>5♥</td><td>2, without the trump queen</td></tr>
<tr><td>5♠</td><td>2, with the trump queen</td></tr>
</tbody>
</table>
<p>The name "1430" comes from the first two replies: 5♣ shows one or four, 5♦ zero or three. The asker can almost always tell which. Count your own key cards, and remember what partner has shown: a partner who opened and made a strong raise cannot hold zero key cards, because there are not enough other high cards outside your hand to make up the points.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Spades agreed; partner bids 4NT: reply 5♥"></div>
<p>Two key cards, the ♥A and the ♠K, but not the ♠Q: 5♥.</p>

<h3>After the reply</h3>
<ul>
<li><strong>Two key cards missing</strong>, or one and the trump queen: sign off in five of the trump suit. Partner must pass.</li>
<li><strong>One missing</strong> and the queen is yours: bid the small slam.</li>
<li><strong>None missing</strong>: bid the small slam, or look for a grand.</li>
</ul>
<p>The asker is the captain. Once partner has replied, the asker decides, and partner passes the sign-off or the slam.</p>

<h3>The queen ask</h3>
<p>After 5♣ or 5♦ the trump queen is still unknown. If it matters, the asker bids the <strong>next step</strong>, skipping the trump suit: 5♦ over 5♣, 5♥ over 5♦. Partner replies:</p>
<ul>
<li>without the queen: return to the trump suit at the cheapest level;</li>
<li>with the queen: bid six of the trump suit (or 5NT, when six of trumps would be the "no queen" answer).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="North opens 2♣ and South shows a good five-card spade suit."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>North holds all four aces, so South's 5♣ shows one key card: the ♠K. Every key card is present, but the ♠Q is not, as far as North knows, so North asks with 5♦. South's 5♠ denies the queen, and North settles for 6♠: a grand slam missing the trump queen would need a lucky break.</p>

<h3>Asking for kings</h3>
<p>When all five key cards and the trump queen are held and a grand slam is possible, the asker bids <strong>5NT</strong> to ask for side kings (the trump king has already been counted): 6♣ = none, 6♦ = one, 6♥ = two, 6♠ = three. 5NT promises that nothing is missing, so partner may bid the grand slam with extra tricks.</p>

<h3>A complete example</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P 7H P P P" data-dealer="N"></div>
<p>North jumps to 4♥ with four-card support and 19+ points. South has 17 HCP and a source of tricks in diamonds, so slam is likely. 5♣ shows one or four key cards. South holds only the ♣A, and North's strong raise cannot be made up without aces, so it is four. One question remains, the ♥Q, and 5♦ asks it. North has it and bids 6♥. Now South can count thirteen tricks: four hearts, five diamonds (North's ♦A with South's ♦KQJ10), and the ace and king of both spades and clubs. South bids 7♥, and North passes.</p>
<div class="tip">Before you bid 4NT, make sure that the reply cannot carry you past the contract you want. With clubs or diamonds as trumps, a 5♥ or 5♠ reply leaves no way to stop at the five level, so you need to know that two key cards cannot be missing.</div>
<div class="warn">RKCB needs an agreed trump suit. After a natural notrump bid by partner, 4NT is quantitative. With a void, RKCB cannot tell you whether partner's key cards are useful: cue bid instead.</div>
`,
    keyPoints: [
      'RKCB asks for five key cards: the four aces and the king of trumps.',
      'Replies (1430): 5♣ 1 or 4, 5♦ 0 or 3, 5♥ 2 without the trump queen, 5♠ 2 with it.',
      'Two key cards missing (or one and the queen): stop at five. One missing: bid the small slam.',
      'After 5♣ or 5♦, the next step asks for the trump queen; without it, partner returns to the trump suit.',
      '5NT then asks for side kings and promises every key card and the trump queen.',
    ],
    quiz: [
      {
        q: 'Hearts are agreed and partner bids 4NT (RKCB). You hold ♠A72 ♥K965 ♦Q84 ♣J53. What do you reply?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Two key cards, the ♠A and the ♥K, without the ♥Q: 5♥.',
      },
      {
        q: 'What does a 5♦ reply to RKCB show?',
        options: ['One key card', 'Zero or three key cards', 'Two key cards and the trump queen', 'Diamonds'],
        answer: 1,
        explain: 'In 1430 replies, 5♣ is one or four, 5♦ zero or three; the asker works out which from the bidding.',
      },
      {
        q: 'Spades are agreed. You asked with 4NT holding two key cards and the ♠Q, and partner replies 5♥ (two without the queen). What now?',
        options: ['Pass', '6♠: one key card is missing, but the queen is yours', '5♠: two key cards are missing', '5NT'],
        answer: 1,
        explain: 'Two plus two is four key cards, so one is missing, and you hold the trump queen yourself. Bid the small slam.',
      },
      {
        q: 'Spades are agreed. Partner\'s 5♣ shows one key card and you hold the other four, but not the ♠Q. Which bid asks for the trump queen?',
        options: ['5♦', '5♥', '5♠', '5NT'],
        answer: 0,
        explain: 'The queen ask is the next step above the reply that is not the trump suit: 5♦ over 5♣.',
      },
      {
        q: 'Every key card and the trump queen are yours and you are thinking of a grand slam. What does 5NT ask?',
        options: ['For aces again', 'How many side kings partner holds', 'For the trump queen', 'Nothing: it is to play'],
        answer: 1,
        explain: 'After RKCB, 5NT asks for side kings (the trump king was counted as a key card) and promises that no key card is missing.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Splinter raises and Reverse Drury',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Two raises of partner\'s major: the splinter, which shows game values and shortness so that opener can judge slam, and Drury, which lets a passed hand show a limit raise safely.',
    body: `
<h3>Splinter raises</h3>
<p>A <strong>splinter</strong> is a double jump in a new suit after partner opens 1♥ or 1♠. It shows four or more trumps, game values (about 13-16 points counting shortness) and a singleton or void in the suit you bid. It says nothing else about that suit, so it is alerted.</p>
<table>
<thead><tr><th>Opening</th><th>Splinters</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Partner opened 1♠: bid 4♥"></div>
<p>10 HCP, four trumps and a singleton heart: 10 + 3 for the singleton = 13 dummy points. 4♥ tells partner all of this in one bid. With a stronger hand, start with Jacoby 2NT; with 10-12 points, make a limit raise.</p>

<h3>Opener's decision: working values</h3>
<p>Opposite a splinter, opener counts only the high cards that work. Honours facing partner's singleton are mostly wasted: a king or queen there will never take a trick, because partner ruffs the suit. Only the ace still counts. With no wasted values and about 16 or more working points, opener looks for slam; otherwise opener signs off in four of the major.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>North has 14 HCP, but the ♥K and ♥J face South's singleton. Without them North has about 10 working points, so North signs off. Eleven tricks are there, twelve are not.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Here North has nothing in clubs, so all 15 HCP are working, and the hearts fit well. North cue bids 4♦, showing a diamond control and slam interest. South cooperates with 4♥ (the ♥A), and North asks for key cards. South's 5♠ shows two key cards and the trump queen, and North bids 6♠.</p>

<h3>Reverse Drury</h3>
<p>In third or fourth seat, partner may open a little light. If you have already passed and hold a limit raise (three or more trumps and 10-12 points), a jump to three of the major can get you too high opposite a light opening. <strong>Reverse Drury</strong> solves this: a passed hand bids <strong>2♣</strong> over partner's 1♥ or 1♠ to show three or more trumps and 10-12 points. It is artificial and says nothing about clubs.</p>
<ul>
<li>Opener rebids <strong>two of the major</strong> with a minimum or light opening: there is no game, and you pass.</li>
<li>Opener bids <strong>game</strong> with a full opening and extra values.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="North dealt and passed; South opened 1♠ in third seat."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>South's 1♠ has only 11 HCP. Over Drury, 2♠ says "no game", and the partnership stops safely: nine tricks are the limit.</p>
<div class="tip">Drury is for passed hands only, and it must be agreed. In this app it is switched off by default; turn it on in the system settings to practise it.</div>
<div class="warn">A splinter promises four trumps. With only three, make another bid: partner will count on the fourth trump to ruff the short suit.</div>
`,
    keyPoints: [
      'A splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) shows four or more trumps, game values and a singleton or void in the suit bid.',
      'Opposite a splinter, count only working values: honours facing the shortness are wasted, except the ace.',
      'With wasted values opener signs off in game; with working values opener cue bids or asks for key cards.',
      'Reverse Drury: a passed hand\'s 2♣ over 1♥/1♠ shows three or more trumps and 10-12 points.',
      'Over Drury, two of the major is a minimum; game shows extra values.',
    ],
    quiz: [
      {
        q: 'Partner opens 1♠. You hold ♠KQ74 ♥A853 ♦K962 ♣5 (12 HCP). What do you bid?',
        options: ['2NT', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Four trumps, a singleton club and 12 + 3 = 15 dummy points: the splinter 4♣ describes the hand in one bid.',
      },
      {
        q: 'Partner opens 1♥ and you bid 3♠. What have you shown?',
        options: ['Long spades', 'Four or more hearts, game values and a singleton or void in spades', 'A weak hand with spades', 'A spade stopper'],
        answer: 1,
        explain: 'Over 1♥, 3♠ is a double jump in a new suit: a splinter.',
      },
      {
        q: 'You opened 1♠ with ♠AK1063 ♥KQ5 ♦Q84 ♣K7 and partner splintered with 4♥. What do you do?',
        options: ['Bid 4♠: your ♥K and ♥Q are wasted', 'Bid 4NT', 'Cue bid 5♣', 'Bid 6♠'],
        answer: 0,
        explain: 'Five of your 17 HCP face partner\'s heart shortness and will not take tricks. With about 12 working points, sign off.',
      },
      {
        q: 'Who may use Reverse Drury?',
        options: ['Any responder with support', 'A passed hand with three or more trumps and 10-12 points, after partner opens 1♥ or 1♠', 'A passed hand with long clubs', 'Opener with a strong hand'],
        answer: 1,
        explain: 'Drury is a passed-hand limit raise that keeps the bidding low opposite a possibly light third- or fourth-seat opening.',
      },
      {
        q: 'Partner, a passed hand, bids 2♣ (Drury) over your third-seat 1♥. You have a light 11-count. What do you rebid?',
        options: ['2♥', '3♥', '4♥', '2NT'],
        answer: 0,
        explain: 'Two of the major says you have a minimum and there is no game; partner passes.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'New minor forcing and fourth suit forcing',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Two artificial bids that let responder ask instead of guessing: new minor forcing after opener\'s 1NT rebid, and fourth suit forcing when three suits have been bid.',
    body: `
<h3>Why responder needs to ask</h3>
<p>After 1♦ – 1♠ – 1NT, responder with five spades and game values would like to know whether opener has three spades. 3♠ would only invite; 4♠ might find a 5-2 fit; 3NT might miss a 5-3 fit. Natural bids cannot ask the question, so an artificial bid does.</p>

<h3>New minor forcing</h3>
<p>After opener's 1NT rebid, responder's bid of <strong>the other minor</strong> at the two level (1♣ – 1♥ – 1NT – 2♦, or 1♦ – 1♠ – 1NT – 2♣) is artificial and forcing for one round. It shows 11 or more points and asks about responder's major. Responder has exactly five cards in it (after 1♠, perhaps with four hearts as well; with four cards in each major responder would have answered 1♥); with six, responder simply rebids the major or bids game.</p>
<table>
<thead><tr><th>Opener's reply</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>2 of responder's major</td><td>Three-card support, minimum (12-13)</td></tr>
<tr><td>3 of responder's major</td><td>Three-card support, maximum (14)</td></tr>
<tr><td>2♥ or 3♥ (after 1♠)</td><td>Four hearts, minimum or maximum</td></tr>
<tr><td>2NT or 3NT</td><td>Neither, minimum or maximum</td></tr>
</tbody>
</table>
<p>Responder then places the contract: game with 13 or more (or opposite a maximum), an invitation with 11-12 opposite a minimum, and notrump without a fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>South has 14 HCP and five spades. 2♣ asks; North's 2♠ shows three-card support, and South bids the spade game, where the ruffing value makes eleven tricks.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>With 11 HCP and five hearts (♠5 ♥AQJ62 ♦A32 ♣9743), South asks with 2♣ and, opposite a minimum with three hearts, invites with 3♥. North has a minimum and passes.</p>

<h3>Fourth suit forcing</h3>
<p>When three suits have been bid naturally, responder's bid of the <strong>fourth suit</strong> is artificial and forcing to game. Responder has game values but no clear bid: often a five-card suit looking for three-card support, or a hand that could play in 3NT if only the fourth suit were stopped.</p>
<p>Opener describes the hand further, in this order:</p>
<ol>
<li>Three-card support for responder's suit: raise it.</li>
<li>A stopper in the fourth suit: bid notrump.</li>
<li>Extra length: rebid a five-card second suit, or the first suit.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>South has 14 HCP and five good hearts. 2♣, the fourth suit, asks North to describe. North has no three-card heart support but has clubs stopped, so bids 2NT, and South raises to 3NT.</p>
<div class="tip">With a balanced game-going hand, the fourth suit stopped and no five-card major to check, just bid 3NT. Fourth suit forcing is for hands that need an answer.</div>
<div class="warn">Both bids are artificial: they say nothing about the minor or the fourth suit. Alert them, and never pass them.</div>
`,
    keyPoints: [
      'New minor forcing: 1m – 1M – 1NT – two of the other minor asks for three-card support (or four hearts after 1♠), with 11+ points.',
      'Opener shows support or four hearts at the two level with a minimum and at the three level with a maximum; 2NT or 3NT shows neither.',
      'Fourth suit forcing: responder\'s bid of the fourth suit is artificial and forcing to game.',
      'Opener answers with support for responder\'s suit first, then notrump with a stopper, then extra length.',
      'With a balanced hand, a stopper in the fourth suit and no five-card major to check, bid 3NT directly.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1NT – ? You hold ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 HCP). What do you bid?',
        options: ['2♠', '3♠', '2♦', '3NT'],
        answer: 2,
        explain: '2♦, new minor forcing, asks whether opener has three spades (or four hearts). Then you can choose between spades and notrump.',
      },
      {
        q: '1♦ – 1♥ – 1NT – 2♣. You opened with ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 HCP). What do you reply?',
        options: ['2♦', '2♥', '3♥', '2NT'],
        answer: 2,
        explain: 'Three-card heart support with a maximum for the 1NT rebid: jump to 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. What does 2♦ show?',
        options: ['Long diamonds', 'An artificial game force asking opener to describe the hand', 'A weak hand', 'Support for spades'],
        answer: 1,
        explain: 'Diamonds is the fourth suit. Responder has game values and is asking, not showing diamonds.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. You opened with ♠AQ74 ♥J5 ♦K103 ♣KJ96. What do you bid?',
        options: ['2♥', '2NT', '3♣', '2♠'],
        answer: 1,
        explain: 'No three-card heart support, but the ♦K10x stops diamonds: bid notrump.',
      },
      {
        q: 'After 1♦ – 1♠ – 1NT, which hand should use new minor forcing?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Five spades and 12 HCP: ask for three-card support. The first hand is too weak, the third should rebid 2♠, and the last, with four spades and 12 HCP, bids 3NT.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Texas transfers',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'How to bid game in a six-card major opposite 1NT or 2NT so that the strong hand plays it, and how to go on towards slam.',
    body: `
<h3>Four-level transfers</h3>
<p>Opposite partner's 1NT, a hand with a six-card major and enough for game wants to play four of the major, and wants the notrump opener to declare, so that the opening lead comes up to the strong hand. <strong>Texas transfers</strong> do it in one bid:</p>
<table>
<thead><tr><th>Bid</th><th>Meaning</th><th>Opener bids</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Six or more hearts, game values</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Six or more spades, game values</td><td>4♠</td></tr>
</tbody>
</table>
<p>Opener must complete the transfer. Responder passes with no interest in slam.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>South has 10 HCP and six spades: enough for game but not for slam. 4♥ transfers, North bids 4♠ and South passes. North declares, so the opening lead comes up to North's kings instead of through them.</p>

<h3>Texas or Jacoby?</h3>
<table>
<thead><tr><th>Responder's hand</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>0-7, five or more cards</td><td>Jacoby transfer, then pass</td></tr>
<tr><td>8-9, six cards</td><td>Jacoby transfer, then raise to three</td></tr>
<tr><td>Game values, exactly five cards</td><td>Jacoby transfer, then 3NT: opener chooses</td></tr>
<tr><td>Game values, six or more cards</td><td>Texas: 4♦ or 4♥</td></tr>
<tr><td>Slam interest, six or more cards</td><td>Texas, then 4NT (Roman Key Card Blackwood)</td></tr>
</tbody>
</table>

<h3>Going on to slam</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>South has 15 HCP and a strong six-card heart suit opposite 15-17: slam is likely. Texas sets hearts as trumps, and 4NT asks for key cards. North's 5♥ shows two, the ♥A and the ♦A, without the queen. South holds the ♥K, the ♣A and the ♥Q, so only one key card is missing, and South bids 6♥.</p>

<h3>After 2NT</h3>
<p>The same bids work over a 2NT opening (20-21), where even 4 points are enough for game:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">Texas makes the strong hand declarer and saves room for slam bidding: after the transfer, 4NT is Roman Key Card Blackwood for the major.</div>
<div class="warn">4♣ over 1NT or 2NT is Gerber, not Texas. And opener must never pass 4♦ or 4♥: the transfer has to be completed.</div>
`,
    keyPoints: [
      'Texas: 1NT (or 2NT) – 4♦ shows six or more hearts, 4♥ six or more spades, with game values.',
      'Opener always completes the transfer, so the notrump opener declares.',
      'Responder passes without slam interest; with interest, Texas and then 4NT asks for key cards.',
      'With exactly five cards and game values, use a Jacoby transfer and then 3NT instead.',
      'Invitational hands transfer at the two level and raise to three.',
    ],
    quiz: [
      {
        q: 'Partner opens 1NT. You hold ♠KQ10965 ♥A4 ♦K73 ♣85 (12 HCP). What do you bid?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Six spades and game values: 4♥ is a Texas transfer, and partner bids 4♠.',
      },
      {
        q: '1NT – 4♦. What does opener bid?',
        options: ['Pass', '4♥', '4NT', '5♦'],
        answer: 1,
        explain: '4♦ shows six or more hearts; opener completes the transfer with 4♥.',
      },
      {
        q: 'Partner opens 1NT. You hold ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 HCP, five hearts). What is your plan?',
        options: ['4♦ (Texas)', '2♦, then 3NT', '2♦, then 4♥', '3NT'],
        answer: 1,
        explain: 'With exactly five hearts, transfer and bid 3NT: opener chooses 4♥ with three-card support and passes with two.',
      },
      {
        q: '1NT – 4♥ – 4♠ – 4NT. What is 4NT?',
        options: ['Quantitative', 'Roman Key Card Blackwood for spades', 'To play', 'Gerber'],
        answer: 1,
        explain: 'The Texas transfer has set spades as trumps, so 4NT asks for key cards.',
      },
      {
        q: 'Partner opens 2NT. You have ♠64 ♥Q97543 ♦AJ9 ♣87 (7 HCP). What do you bid?',
        options: ['3♦', '4♦', '3♥', 'Pass'],
        answer: 1,
        explain: 'Six hearts and enough for game opposite 20-21: Texas 4♦, and partner plays 4♥.',
      },
    ],
  },
];
