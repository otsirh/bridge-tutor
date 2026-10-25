// Lessons, part 1.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'How bridge works',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'The deal, the auction, the contract and the play of the cards, from the first call to the last trick.',
    body: `
<h3>Four players, two partnerships</h3>
<p>Bridge is a partnership game. North and South play together against East and West, and partners sit opposite each other. The whole 52-card deck is dealt, so each player holds 13 cards. Within a suit the cards rank from the ace (highest) through K, Q, J, 10, 9 and so on down to the 2. The aim is to win <strong>tricks</strong>: a trick is one card from each player, played in clockwise order.</p>

<h3>Part 1: the auction</h3>
<p>Before a card is played there is an auction. The dealer calls first and the bidding moves clockwise. On each turn a player may <strong>pass</strong>, make a <strong>bid</strong>, <strong>double</strong> an opponent's bid, or <strong>redouble</strong> an opponent's double.</p>
<p>A bid has a level (1 to 7) and a strain (a trump suit, or notrump). The level is the number of tricks you promise <em>above six</em>: 1♠ promises 7 tricks with spades as trumps and 3NT promises 9 tricks with no trump suit. The first six tricks are called the <strong>book</strong>.</p>
<p>The strains rank, from lowest to highest: ♣, ♦, ♥, ♠, NT. Every bid must be higher than the one before it: either at a higher level, or at the same level in a higher-ranking strain. After 1♥ you may bid 1♠ or 1NT, but to mention clubs you must bid at least 2♣.</p>
<p>The auction ends when a bid, double or redouble is followed by three passes in a row. The last bid is the <strong>contract</strong>. If all four players pass at the start, the cards are thrown in.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>North opens 1♥, South raises to 2♥ and North jumps to 4♥. Everyone then passes, so the contract is 4♥: North–South must take at least 10 of the 13 tricks with hearts as trumps.</p>

<h3>Contract levels</h3>
<table>
<thead><tr><th>Level</th><th>Tricks needed</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>partscore</td></tr>
<tr><td>2</td><td>8</td><td>partscore</td></tr>
<tr><td>3</td><td>9</td><td>3NT is a game</td></tr>
<tr><td>4</td><td>10</td><td>4♥ and 4♠ are games</td></tr>
<tr><td>5</td><td>11</td><td>5♣ and 5♦ are games</td></tr>
<tr><td>6</td><td>12</td><td>small slam</td></tr>
<tr><td>7</td><td>13</td><td>grand slam</td></tr>
</tbody>
</table>
<p>Games and slams earn big bonuses. That is why so much of bidding is about one question: does our side have enough strength for game?</p>

<h3>Who plays the hand?</h3>
<p>The <strong>declarer</strong> is the player of the side that won the auction who <em>first</em> named the strain of the final contract. In the auction above North bid hearts first, so North is declarer even though South also bid hearts. Declarer's partner becomes the <strong>dummy</strong>.</p>

<h3>Part 2: the play</h3>
<ol>
<li>The player on declarer's left makes the <strong>opening lead</strong>. With North as declarer, East leads.</li>
<li>Dummy then puts all 13 cards face up on the table, sorted by suit. Declarer plays the cards from both hands; dummy takes no further part.</li>
<li>Play continues clockwise. Each player must <strong>follow suit</strong> (play a card of the suit that was led) if able.</li>
<li>A player with no card of the suit led (a <strong>void</strong>) may play a trump, which is called <strong>ruffing</strong>, or throw any other card, which is a <strong>discard</strong>.</li>
<li>The trick is won by the highest trump played to it or, if no trump was played, by the highest card of the suit led. The winner of a trick leads to the next one.</li>
</ol>
<p>Example: hearts are trumps and East leads the ♠K. South plays the ♠4, West the ♠9, and North, who has no spades, ruffs with the ♥2. North wins the trick, because any trump beats any card of another suit. In a notrump contract there are no trumps, so the highest card of the suit led always wins.</p>
<div class="tip">A discard can never win a trick. Only a card of the suit led or a trump can win.</div>

<h3>Making or defeating the contract</h3>
<p>When all 13 tricks have been played, declarer's side scores if it took at least the number of tricks it contracted for; extra tricks are <strong>overtricks</strong>. If declarer falls short, the defenders score a penalty for each <strong>undertrick</strong>. A double raises both the reward for making the contract and the penalty for failing.</p>
<div class="warn">Failing to follow suit when you could is a <strong>revoke</strong>, and it is penalised by transferring tricks to the other side. Before playing a card of a different suit, check again that you really have none of the suit led.</div>
`,
    keyPoints: [
      'Four players in two partnerships; each player holds 13 cards.',
      'A bid at level N promises 6 + N tricks; strains rank ♣, ♦, ♥, ♠, NT.',
      'The auction ends after three passes in a row; the last bid is the contract.',
      'Declarer is the first player of the winning side to name the final strain; the player on declarer\'s left leads.',
      'You must follow suit if you can; if you cannot, you may ruff or discard.',
      'Games: 3NT, 4♥, 4♠, 5♣, 5♦. Slams: any 6- or 7-level contract.',
    ],
    quiz: [
      {
        q: 'The final contract is 3NT. How many tricks does declarer need?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Add six (the book) to the level: 3 + 6 = 9 tricks.',
      },
      {
        q: 'North opens 1♠, East passes, South bids 2♠ and everyone passes. Who is declarer, and who makes the opening lead?',
        options: ['South declares, West leads', 'North declares, East leads', 'North declares, West leads', 'South declares, East leads'],
        answer: 1,
        explain: 'North was the first player on the side to name spades, so North is declarer. The opening lead is made by the player on declarer\'s left, which is East.',
      },
      {
        q: 'Spades are trumps. A heart is led and you have no hearts. What may you do?',
        options: ['You must ruff with a spade', 'You may ruff with a spade or discard any card', 'You must discard a club or a diamond', 'You must play your lowest card'],
        answer: 1,
        explain: 'Only following suit is compulsory. When you are void in the suit led you are free to ruff or to discard; ruffing is often right but it is never forced.',
      },
      {
        q: 'Your right-hand opponent opened 1♥. Which of these bids is legal?',
        options: ['1♦', '1♣', '1NT', '1♥'],
        answer: 2,
        explain: 'A bid must outrank the previous one. At the one level only spades and notrump rank above hearts, so 1♠ and 1NT are legal; 1♣ and 1♦ would have to be bid at the two level.',
      },
      {
        q: 'Which of these contracts is a game?',
        options: ['3♥', '4♦', '3NT', '2NT'],
        answer: 2,
        explain: 'Game needs 9 tricks in notrump, 10 in a major and 11 in a minor. 3NT qualifies; 3♥ and 4♦ are one level short, and 2NT is one trick short of game.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Valuing your hand',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'How to count high-card points, length and shortness, and how the Rule of 20, the Rule of 15, losing tricks and quick tricks refine the count.',
    body: `
<h3>High-card points</h3>
<p>The standard measure of strength is <strong>high-card points</strong> (HCP): ace 4, king 3, queen 2, jack 1. There are 40 HCP in the deck, so the average hand has 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 HCP"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 HCP. The hand is balanced, so it opens 1NT (15-17).</p>
<p>Useful targets for the partnership's combined total: about 25 for game in 3NT or a major, 29 for game in a minor, 33 for a small slam and 37 for a grand slam. Points are a guide, not a guarantee: shape, fit and the position of the honours all matter.</p>

<h3>Length points: valuing your own suits</h3>
<p>Long suits produce extra tricks once the high cards have gone. When you value your hand for opening or rebidding, add 1 point for each card beyond four in any suit: a 5-card suit adds 1, a 6-card suit adds 2.</p>

<h3>Dummy points: valuing a fit</h3>
<p>Once you know you have a fit for partner's suit, short suits gain value because your trumps can ruff the opponents' winners. When raising partner, count shortness instead of length:</p>
<table>
<thead><tr><th>Shortness</th><th>With 4+ trumps</th><th>With 3 trumps</th></tr></thead>
<tbody>
<tr><td>Void</td><td>5</td><td>3</td></tr>
<tr><td>Singleton</td><td>3</td><td>2</td></tr>
<tr><td>Doubleton</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Partner opened 1♥"></div>
<p>Only 8 HCP, but with four trumps and a singleton you add 3, for 11 dummy points. That is a limit raise to 3♥ (10-12).</p>
<div class="warn">Shortness is only worth something when you have a fit. Without a fit, a singleton in partner's suit is a minus, not a plus: it warns of a misfit.</div>

<h3>Adjusting the count</h3>
<ul>
<li>Honours in long suits carry more weight than honours in short suits: ♠KQJ54 will take tricks, ♠KQ may not.</li>
<li>Unsupported honours in short suits are worth less: a singleton K, Q or J, or a doubleton Q or J. Deduct a point.</li>
<li>4-3-3-3 is the least useful shape; consider deducting a point.</li>
<li>Aces and tens are slightly undervalued by the 4-3-2-1 scale, queens and jacks slightly overvalued.</li>
</ul>

<h3>The Rule of 20 and the Rule of 15</h3>
<p>In first, second or third seat, open a hand with 10 or 11 HCP if HCP plus the number of cards in your two longest suits comes to 20 or more.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Rule of 20: open 1♠"></div>
<p>10 HCP + 5 + 5 = 20, so open, and with two 5-card suits open the higher-ranking one: 1♠. Compare ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 HCP + 4 + 3 = 18, so pass. The scattered queens and jacks and flat shape make it a poor opening.</p>
<p>In fourth seat, after three passes, open with 13 or more HCP, and with 10-12 HCP use the Rule of 15: open only if HCP plus the number of spades is 15 or more. If you pass, the deal is thrown in, so you only want to open when your side is likely to win the partscore battle, and the spade suit decides most of those battles.</p>

<h3>Losing Trick Count</h3>
<p>Once a fit of 8+ cards is found, the Losing Trick Count (LTC) gives a second opinion based on shape. Look at the first three cards of each suit and count a loser for each missing ace, king or queen among them:</p>
<table>
<thead><tr><th>Holding</th><th>Losers</th></tr></thead>
<tbody>
<tr><td>Void</td><td>0</td></tr>
<tr><td>Singleton A / other singleton</td><td>0 / 1</td></tr>
<tr><td>AK / Ax or Kx / Qx or xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Add your losers to partner's and subtract the total from 24: the answer is roughly the number of tricks the partnership will take with that suit as trumps. A minimum opening hand has about 7 losers.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Partner opened 1♠"></div>
<p>♠K87 = 2 losers, ♥4 = 1, ♦A86 = 2, ♣853 = 3: 8 losers. 24 − (7 + 8) = 9 tricks, so invite with 3♠. The point count agrees: 7 HCP + 3 for the singleton = 10 dummy points, a limit raise.</p>

<h3>Quick tricks</h3>
<p>Quick tricks measure defensive strength, the tricks you expect in the first two rounds of a suit: AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. A sound opening bid or takeout double usually has about 2 quick tricks. Hands with few quick tricks and lots of shape are better for playing the hand than for defending.</p>
`,
    keyPoints: [
      'HCP: ace 4, king 3, queen 2, jack 1; 40 in the deck, 10 in an average hand.',
      'For your own hand add a point per card beyond four; when raising partner count shortness instead (void 5, singleton 3, doubleton 1 with four trumps).',
      'Rule of 20 for light openings in first, second or third seat; Rule of 15 (HCP + spades) in fourth seat.',
      'LTC: tricks ≈ 24 − combined losers, and a minimum opener has about 7 losers.',
      'About 25 combined points for 3NT or a major game, 29 for a minor game, 33 for a small slam.',
    ],
    quiz: [
      {
        q: 'How many HCP in ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 HCP.',
      },
      {
        q: 'First seat. You have 10 HCP with five hearts and five clubs. What do you do?',
        options: ['Pass: an opening needs 12 HCP', 'Open 1♥: the Rule of 20 is met', 'Open 1♣: with two 5-card suits open the lower', 'Open 2♥'],
        answer: 1,
        explain: '10 HCP + 5 + 5 = 20, so the hand qualifies under the Rule of 20. With two 5-card suits you open the higher-ranking one, so 1♥ (you can show the clubs later).',
      },
      {
        q: 'Partner opens 1♥. You have four hearts and a void in spades. How many shortness points do you add?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'With four or more trumps a void is worth 5 dummy points: every spade partner holds can be ruffed in your hand.',
      },
      {
        q: 'You have a 7-loser hand and partner has 8 losers, with an 8-card trump fit. How many tricks does the LTC predict?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. With the opener assumed to have 7 losers, an 8-loser responder should invite at the three level rather than bid game.',
      },
      {
        q: 'Fourth seat after three passes: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 HCP). What do you do?',
        options: ['Pass: 11 HCP is not enough', 'Open 1♣: 11 + 4 spades = 15', 'Open 1♠', 'Open 1NT'],
        answer: 1,
        explain: 'The Rule of 15 is met: 11 HCP + 4 spades = 15. With no 5-card major and 3-3 in the minors you open 1♣. 1♠ would promise five spades and 1NT needs 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'Opening the bidding',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Which hands to open and which opening bid to choose, from one of a suit to 1NT, 2NT, 2♣ and preempts.',
    body: `
<h3>The opening bids at a glance</h3>
<table>
<thead><tr><th>Opening</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 HCP, 3+ clubs (the longer minor; with 3-3 in the minors open 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 HCP, 3+ diamonds (the longer minor; with 4-4 in the minors open 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 HCP, 5+ cards in the suit</td></tr>
<tr><td>1NT</td><td>15-17 HCP, balanced (may include a 5-card suit)</td></tr>
<tr><td>2♣</td><td>Strong and artificial: 22+ HCP or 9+ playing tricks</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Weak two: a 6-card suit and 5-10 HCP</td></tr>
<tr><td>2NT</td><td>20-21 HCP, balanced</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Preempt: a 7-card suit and 5-10 HCP</td></tr>
<tr><td>4♥ / 4♠</td><td>Preempt: an 8-card suit (or a 7-card suit with extra shape)</td></tr>
</tbody>
</table>

<h3>Is it an opening hand?</h3>
<p>With 12 or more HCP, open, except in fourth seat. With 10-11 HCP in first, second or third seat, open if the Rule of 20 is met (HCP + the lengths of your two longest suits ≥ 20). In fourth seat open with 13 or more HCP, and with 10-12 HCP only if the Rule of 15 is met (HCP + number of spades ≥ 15). Hands with a long suit and fewer points may suit a weak two or a preempt instead.</p>

<h3>Balanced hands: let the points decide</h3>
<p>A balanced hand has no void, no singleton and at most one doubleton: 4-3-3-3, 4-4-3-2 or 5-3-3-2. With a balanced hand your plan is always to show your strength in notrump, either at once or on your next turn:</p>
<table>
<thead><tr><th>HCP</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Open one of a suit, rebid 1NT</td></tr>
<tr><td>15-17</td><td>Open 1NT</td></tr>
<tr><td>18-19</td><td>Open one of a suit, then jump to 2NT</td></tr>
<tr><td>20-21</td><td>Open 2NT</td></tr>
<tr><td>22-24</td><td>Open 2♣, then rebid 2NT</td></tr>
<tr><td>25-27</td><td>Open 2♣, then rebid 3NT</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Open 1NT: 16 HCP, balanced"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Open 1♦: 14 HCP, plan to rebid 1NT"></div>

<h3>Choosing the suit</h3>
<ul>
<li>With a 5-card or longer major, open it, even with a balanced 12-14.</li>
<li>With two 5-card suits (or two 6-card suits), open the higher-ranking.</li>
<li>With a 6-card suit and a 5-card suit, open the longer one.</li>
<li>With no 5-card major, open the longer minor. With 3-3 in the minors open 1♣; with 4-4 open 1♦.</li>
<li>Four-card majors are never opened. With 4-4 in the majors and no 5-card suit, open a minor; partner will bid a 4-card major if they have one.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Open 1♠: 12 HCP, five spades"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Open 1♦: 4-4 in the minors"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Open 1♣: 3-3 in the minors"></div>
<p>The last hand has four spades, but a major needs five cards to open, and with three cards in each minor the opening is 1♣. If partner has four spades, they will respond 1♠ and the fit is found.</p>

<h3>Strong and weak openings</h3>
<p>2NT shows 20-21 balanced; 2♣ is the only forcing opening and covers every hand of 22+ HCP or about nine playing tricks. At the other end, weak twos and preempts take away the opponents' bidding space when you have a long suit but little defence. Each has its own lesson.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Open 2NT: 21 HCP, balanced"></div>
<div class="tip">Plan your rebid before you open. With 12-14 balanced you will rebid 1NT; with 18-19 balanced you will jump to 2NT; with two suits you will bid the second one. If no sensible rebid exists, think again about the opening.</div>
<div class="warn">Never open 1♥ or 1♠ with only four cards. Partner will raise with three-card support, expecting at least an eight-card fit.</div>
`,
    keyPoints: [
      'Open with 12+ HCP; with 10-11 use the Rule of 20 (first, second or third seat). In fourth seat open with 13+, or with 10-12 if the Rule of 15 is met.',
      '1♥/1♠ promise five cards; with no 5-card major open the longer minor (1♣ with 3-3, 1♦ with 4-4).',
      'Balanced: 12-14 open a suit and rebid 1NT; 15-17 1NT; 18-19 jump to 2NT; 20-21 2NT; 22+ 2♣.',
      'Two 5-card suits: open the higher-ranking; 6-5: open the longer.',
      'Plan your rebid before you open.',
    ],
    quiz: [
      {
        q: 'You hold ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 HCP). What do you open?',
        options: ['1♥', '1♦', '1NT', '2♥'],
        answer: 0,
        explain: 'With two 5-card suits open the higher-ranking one. After 1♥ you can bid diamonds next, and partner can choose between your suits cheaply.',
      },
      {
        q: 'You hold ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 HCP). What do you open?',
        options: ['1♣', '1NT', '1♦', 'Pass'],
        answer: 0,
        explain: 'The hand is balanced but has only 14 HCP, too few for 1NT (15-17). Open the longer minor, 1♣, and rebid 1NT to show 12-14 balanced.',
      },
      {
        q: 'You hold ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 HCP). What do you open?',
        options: ['1♦', '1NT', '2NT', '1♣'],
        answer: 1,
        explain: '16 HCP with a 3-3-4-3 shape is a textbook 1NT opening. One bid describes both your strength and your shape.',
      },
      {
        q: 'You hold ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 HCP). What do you open?',
        options: ['1♥', '1♣', '1♦', 'Pass'],
        answer: 1,
        explain: 'You need five cards to open a major, so 1♥ is out. With no 5-card major open the longer minor; with 3-3 in the minors that is 1♣.',
      },
      {
        q: 'You have a balanced 18 HCP. What is your plan?',
        options: ['Open 1NT', 'Open 2NT', 'Open one of a suit and jump to 2NT next time', 'Open 2♣'],
        answer: 2,
        explain: '18-19 balanced is too strong for 1NT (15-17) and too weak for 2NT (20-21). Open one of a suit and jump to 2NT at your next turn.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Responding to one of a suit',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'How responder raises, bids a new suit or bids notrump after partner opens one of a suit.',
    body: `
<h3>First principles</h3>
<p>Partner's one-level opening shows 12-21 HCP, so with 6 or more points you should respond: even a weak hand can be enough for game opposite a strong opener. With fewer than 6 points, pass. Your first job is to tell partner about a fit; your second is to show your strength range.</p>

<h3>Responding to 1♥ or 1♠</h3>
<p>Partner has at least five cards, so three-card support already gives you an eight-card fit. Supporting partner is your top priority.</p>
<table>
<thead><tr><th>Response</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>2 of the major</td><td>6-10 dummy points, 3+ card support</td></tr>
<tr><td>3 of the major (jump)</td><td>Limit raise: 10-12 dummy points, 4+ card support, invitational</td></tr>
<tr><td>2NT</td><td>Jacoby: 13+ points, 4+ card support, forcing to game</td></tr>
<tr><td>4 of the major</td><td>Weak and distributional: 5+ card support, under 10 HCP</td></tr>
<tr><td>Double jump in a new suit</td><td>Splinter: 4+ card support, a singleton or void in that suit, 13-16 points</td></tr>
<tr><td>1♠ over 1♥</td><td>6+ points, 4+ spades, forcing</td></tr>
<tr><td>1NT</td><td>6-10, no fit, not forcing (over 1♥ it denies four spades)</td></tr>
<tr><td>New suit at the 2 level</td><td>10+ (11+ to be safe), 4+ cards, 5+ for 2♥ over 1♠; forcing for one round</td></tr>
<tr><td>Jump shift</td><td>19+ points, forcing to game</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Partner opened 1♠: bid 2♠"></div>
<p>6 HCP and three-card support: raise to 2♠. Do not bid 1NT or look for hearts at the two level; a 2♥ response needs five hearts and 10+ points.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Partner opened 1♠: bid 3♠"></div>
<p>7 HCP plus 3 for the singleton with four trumps = 10 dummy points: a limit raise. Partner passes with a minimum and bids game with more.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Partner opened 1♠: bid 2NT"></div>
<p>14 HCP with four trumps: Jacoby 2NT sets spades as trumps and forces to game, leaving room to explore for slam.</p>
<p>With a singleton and 13-16 points, a splinter describes the hand better: over 1♠, ♠KQ74 ♥A853 ♦K962 ♣5 bids 4♣. See the lesson on splinter raises.</p>
<p>With 6 HCP, five hearts and a singleton, ♠4 ♥QJ852 ♦K9763 ♣82, jump to 4♥ over 1♥. The opponents surely have a fit and plenty of points, and you want them to guess at the five level.</p>

<h4>Three-card support and 10-12 points</h4>
<p>The jump to three normally promises four trumps. With only three, bid a new suit first and then support partner's major: over 1♥, ♠A84 ♥K93 ♦KJ752 ♣64 bids 2♦ and then 4♥ — 11 points and a fit opposite an opening bid are usually enough for game. (Only when shortness lifts a hand too weak in HCP for a two-over-one to 11–12 points do you jump to 3♥ at once with three trumps: 1NT would deny the support.) With three-card support and 13+, bid a new suit first and then bid game in the major.</p>

<h3>Responding to 1♣ or 1♦</h3>
<p>Partner may have only three cards in the minor, and a major-suit fit is worth more, so look for a major first.</p>
<table>
<thead><tr><th>Response</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>New suit at the 1 level</td><td>6+ points, 4+ cards, forcing. Bid your longer suit first; with two 4-card suits bid the cheaper (up the line).</td></tr>
<tr><td>1NT</td><td>6-10, balanced, no 4-card major</td></tr>
<tr><td>2NT</td><td>13-15, balanced, no 4-card major, forcing to game</td></tr>
<tr><td>3NT</td><td>16-17, balanced</td></tr>
<tr><td>Raise to 2</td><td>6-10, 5+ clubs or 4+ diamonds, no 4-card major</td></tr>
<tr><td>Jump raise to 3</td><td>10-12, the same support, invitational</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ points, forcing</td></tr>
<tr><td>Jump shift</td><td>19+ points</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Partner opened 1♦: bid 1♥"></div>
<p>8 HCP and a 4-card major: show it at the one level. Bidding 1NT could lose a 4-4 heart fit.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Partner opened 1♣: bid 1NT"></div>
<p>8 HCP, balanced, no 4-card major. Four clubs are not enough to raise partner's possible 3-card suit; 1NT describes the hand.</p>
<p>With 11 HCP, five diamonds and no 4-card major, ♠K5 ♥832 ♦KJ763 ♣A94, raise 1♦ to 3♦ (10-12). With 11-12 balanced and no major, for example ♠KQ5 ♥J104 ♦A963 ♣J72 over 1♣, there is no direct bid: respond 1♦ and bid 2NT next to invite game.</p>
<div class="warn">Don't jump to 2NT over 1♣ or 1♦ with 11 or 12 points. That jump shows 13-15 and forces partner to game. Bid a new suit first and invite with 2NT on the next round.</div>
<div class="tip">Responder's new suit is forcing for one round. You can bid a suit on a modest hand and still describe your strength at your next turn.</div>
`,
    keyPoints: [
      'Respond with 6+ points; supporting partner\'s major is the top priority.',
      'Over 1♥/1♠: 2M = 6-10 with 3+ support; 3M = 10-12 with 4+; 2NT = 13+ with 4+ (Jacoby); 4M = weak with 5+.',
      'A new suit at the two level needs 10+ (11+ to be safe) and is forcing; 2♥ over 1♠ needs five hearts.',
      'Over 1♣/1♦: bid a 4-card major at the one level first; 1NT = 6-10, 2NT = 13-15, 3NT = 16-17, all balanced without a major.',
      'With 11-12 balanced, bid a new suit first and invite with 2NT next.',
    ],
    quiz: [
      {
        q: 'Partner opens 1♥. You hold ♠K72 ♥Q84 ♦J953 ♣Q62 (8 HCP). What do you respond?',
        options: ['1NT', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Three-card support for a 5-card major means an eight-card fit; with 6-10 points the single raise to 2♥ tells partner that at once. 1♠ would need four spades.',
      },
      {
        q: 'Partner opens 1♠. You hold ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 HCP). What do you respond?',
        options: ['4♠', '3♠', '2NT', '2♦'],
        answer: 2,
        explain: '2NT (Jacoby) shows 13+ with 4+ trumps and forces to game. 3♠ would be only a limit raise and 4♠ is a weak, shapely raise, so either would understate this hand.',
      },
      {
        q: 'Partner opens 1♦. You hold ♠AJ85 ♥K1062 ♦74 ♣953 (8 HCP). What do you respond?',
        options: ['1♠', '1♥', '1NT', '2♦'],
        answer: 1,
        explain: 'With two 4-card suits, bid up the line: 1♥ first. If partner has four spades, they can bid 1♠ next, so neither fit is lost.',
      },
      {
        q: 'Partner opens 1♣. You hold ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 HCP). What do you respond?',
        options: ['1NT', '2NT', '3NT', '1♦'],
        answer: 1,
        explain: 'Balanced, no 4-card major, 13 HCP: 2NT shows 13-15 and forces to game. 1♦ would promise four diamonds and 3NT shows 16-17.',
      },
      {
        q: 'Partner opens 1♠. You hold ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 HCP). What do you respond?',
        options: ['2♥', '2♣', '1NT', '3♣'],
        answer: 1,
        explain: 'A 2♥ response to 1♠ promises five hearts. Bid your long suit, 2♣, which is forcing; you may get the chance to show the hearts later. 3♣ would be a jump shift showing 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: "Opener's rebid",
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'How opener uses the second bid to show a minimum, medium or maximum hand and to describe shape, including reverses and jump shifts.',
    body: `
<h3>Classify your hand first</h3>
<p>Your opening bid covered a wide range, 12-21. The rebid narrows it down. Count your points again in the light of partner's response (add dummy points if you have found a fit) and place the hand in one of three bands:</p>
<table>
<thead><tr><th>Band</th><th>Points</th><th>Typical action</th></tr></thead>
<tbody>
<tr><td>Minimum</td><td>12-15</td><td>The cheapest descriptive bid</td></tr>
<tr><td>Medium</td><td>16-18</td><td>A jump, or a reverse with 17+</td></tr>
<tr><td>Maximum</td><td>19-21</td><td>Bid game, or force with a jump shift</td></tr>
</tbody>
</table>

<h3>After a one-level response</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>Responder has 6+ points and four or more spades. Opener's choices:</p>
<table>
<thead><tr><th>Rebid</th><th>Points</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>4-card spade support</td></tr>
<tr><td>3♠</td><td>16-18</td><td>4-card support, invitational</td></tr>
<tr><td>4♠</td><td>19-21</td><td>4-card support, to play</td></tr>
<tr><td>1NT</td><td>12-14</td><td>Balanced</td></tr>
<tr><td>2NT (jump)</td><td>18-19</td><td>Balanced, invitational</td></tr>
<tr><td>2♦</td><td>12-15</td><td>Usually six diamonds</td></tr>
<tr><td>3♦ (jump)</td><td>16-18</td><td>A good 6-card suit</td></tr>
<tr><td>2♣ (new lower suit)</td><td>12-18</td><td>Four or more clubs, not forcing</td></tr>
<tr><td>2♥ (reverse)</td><td>17+</td><td>Longer diamonds than hearts, forcing one round</td></tr>
<tr><td>3♣ (jump shift)</td><td>19+</td><td>Forcing to game</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: rebid 1NT"></div>
<p>13 HCP and balanced: 1NT. A raise to 2♠ promises four spades, and partner may have only four.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: rebid 3♠"></div>
<p>16 HCP plus 1 for each of the two doubletons (hearts and clubs) with four trumps: 16 + 1 + 1 = 18 dummy points, a medium hand. Jump to 3♠ to invite game. With a minimum (12-15) raise to 2♠; with 19+ bid 4♠.</p>

<h3>Reverses</h3>
<p>A <strong>reverse</strong> is a rebid in a new suit at the two level that ranks <em>higher</em> than your first suit, such as 1♦ – 1♠ – 2♥ or 1♣ – 1♥ – 2♦. To give preference to your first suit, partner now has to go to the three level, so a reverse promises extra strength (17+) and is forcing for one round. It also shows that your first suit is longer than your second.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: reverse to 2♥"></div>
<p>17 HCP, five diamonds and four hearts: 2♥ shows the shape and the extra values in one bid.</p>
<div class="warn">With a minimum, do not reverse. With ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 HCP) after 1♦ – 1♠, rebid 2♦. You will not miss a heart fit: with four hearts and four spades partner would have responded 1♥ first.</div>

<h3>Jump shifts and jump rebids</h3>
<p>A jump in a new suit (1♦ – 1♠ – 3♣) shows 19+ and forces to game. A jump rebid in your own suit (1♥ – 1♠ – 3♥) shows 16-18 and a good six-card suit; it is invitational, not forcing.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: jump shift to 3♣"></div>
<p>20 HCP: far too strong for a non-forcing 2♣ and outside the 18-19 range of a 2NT rebid. 3♣ forces to game while you look for the best contract.</p>

<h3>After 1NT or a raise</h3>
<p>After 1♠ – 1NT, responder has 6-10 and usually no fit. Pass a balanced minimum; rebid a six-card suit; show a second suit (a new suit lower than your first is not forcing); or invite with a jump when you have 16-18 or more. After 1♠ – 2♠, responder has 6-10 with support: pass with a minimum, bid 3♠ to invite with a medium hand, and bid 4♠ with a maximum. The Losing Trick Count is a good guide here: with 6 losers invite, with 5 bid game.</p>
<div class="tip">A two-level response (1♠ – 2♣) already shows 10+ and is forcing for one round, so opener can make a natural, descriptive rebid and does not need to jump just to keep the auction alive.</div>
`,
    keyPoints: [
      'Classify the hand: minimum 12-15, medium 16-18, maximum 19-21.',
      '1NT rebid = 12-14 balanced; jump to 2NT = 18-19 balanced.',
      'Raise responder\'s major with four-card support: 2 level minimum, 3 level medium, game with a maximum.',
      'A reverse (higher-ranking new suit at the two level) shows 17+, is forcing, and shows the first suit is longer.',
      'A jump shift by opener shows 19+ and forces to game.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. You hold ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 HCP). What is your rebid?',
        options: ['1NT', '2♦', '2NT', '2♠'],
        answer: 0,
        explain: 'The hand is balanced with 12-14 HCP, which is exactly what 1NT shows. 2♦ suggests six diamonds and 2♠ promises four spades.',
      },
      {
        q: '1♣ – 1♥. You hold ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 HCP). What is your rebid?',
        options: ['2♥', '3♥', '4♥', '2NT'],
        answer: 2,
        explain: 'With four-card support count dummy points: 18 HCP + 1 for each doubleton = 20, a maximum. Bid the game: 4♥.',
      },
      {
        q: 'Which of these auctions contains a reverse by opener?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1NT – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Hearts rank above diamonds, and 2♥ is at the two level, so partner must go to 3♦ to prefer opener\'s first suit. In the other auctions the second suit is lower-ranking or is bid at the one level.',
      },
      {
        q: '1♦ – 1♥. You hold ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 HCP). What is your rebid?',
        options: ['2♦', '3♦', '2NT', '1NT'],
        answer: 1,
        explain: 'A medium hand with a good six-card suit: the jump to 3♦ shows 16-18 and invites. 2♦ would show a minimum and 1NT or 2NT a balanced hand.',
      },
      {
        q: '1♠ – 2♠. You hold ♠AQJ84 ♥K73 ♦A62 ♣95 (14 HCP). What do you do?',
        options: ['Pass', '3♠', '4♠', '2NT'],
        answer: 0,
        explain: '14 HCP + 1 for the fifth spade = 15, a minimum. The LTC agrees: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 losers, the count of a minimum opening. Opposite a 6-10 raise, game is unlikely, so pass.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'Notrump openings and responses',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Responding to 1NT and 2NT with Stayman, Jacoby transfers, the minor-suit transfer, invitations and the quantitative 4NT.',
    body: `
<h3>Why notrump openings are easy</h3>
<p>1NT shows 15-17 HCP and a balanced hand (it may include a 5-card suit). Because opener's hand is so well defined, responder usually knows at once where the partnership belongs, and becomes the captain. Add your points to partner's 15-17: with 25 or more combined you want game.</p>

<h3>Responses to 1NT</h3>
<table>
<thead><tr><th>Response</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Pass</td><td>0-7 with no long major</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ HCP and a 4-card major</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ hearts, any strength. Opener bids 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ spades, any strength. Opener bids 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer to clubs: opener bids 3♣. A weak hand with a long minor; pass 3♣ or bid 3♦.</td></tr>
<tr><td>2NT</td><td>8-9, invitational</td></tr>
<tr><td>3NT</td><td>10-15, to play</td></tr>
<tr><td>4♣</td><td>Gerber: asks for aces</td></tr>
<tr><td>4♦ / 4♥</td><td>Texas transfer: 6+ hearts / spades and game values. Opener bids 4♥ / 4♠.</td></tr>
<tr><td>4NT</td><td>16-17, quantitative: invites 6NT</td></tr>
</tbody>
</table>

<h3>Stayman</h3>
<p>2♣ asks opener for a 4-card major. Opener replies 2♦ (no 4-card major), 2♥ (four hearts, possibly four spades too) or 2♠ (four spades, not four hearts). Then:</p>
<ul>
<li>If a fit is found, raise to three to invite or to four to play.</li>
<li>If not, bid 2NT with 8-9 or 3NT with 10-15.</li>
<li>If opener showed hearts and you have spades, bid 2NT or 3NT. Opener, who may hold both majors, converts to spades when holding four of them.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Partner opened 1NT: bid 2♣"></div>
<p>10 HCP and two 4-card majors. Over 2♦ bid 3NT; over 2♥ bid 4♥; over 2♠ bid 4♠. Stayman needs 8+ HCP because after a 2♦ reply you must be able to bid at least 2NT.</p>

<h3>Jacoby transfers</h3>
<p>With a 5-card or longer major, transfer: bid the suit below it and let opener bid your suit. The strong hand becomes declarer and the opening lead comes up to it. Transfers work with any strength, from nothing to slam values.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Partner opened 1NT: 2♥, then pass"></div>
<p>3 HCP. 2♠ will play much better than 1NT. Transfer with 2♥ and pass opener's 2♠.</p>
<p>After the transfer is completed, responder continues:</p>
<table>
<thead><tr><th>Next bid</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Pass</td><td>0-7, sign-off</td></tr>
<tr><td>2NT</td><td>8-9 with exactly five cards in the major (opener chooses)</td></tr>
<tr><td>3 of the major</td><td>8-9 with six or more cards, invitational</td></tr>
<tr><td>3NT</td><td>10-15 with exactly five (opener picks 3NT or 4 of the major)</td></tr>
<tr><td>4 of the major</td><td>10-15 with six or more, to play (with Texas transfers, bid 4♦ or 4♥ at once instead)</td></tr>
<tr><td>New suit</td><td>Natural and forcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Partner opened 1NT: 2♦, then 3NT"></div>
<p>10 HCP and five hearts. Transfer, then bid 3NT. With three or more hearts opener bids 4♥; with a doubleton, opener passes.</p>
<p>With four-card support and 17 HCP, opener <strong>super-accepts</strong> by jumping: 1NT – 2♦ – 3♥. Responder then bids game with almost anything, because the fit is at least nine cards and opener is at the top of their range.</p>

<h3>Long minors, invitations and slam tries</h3>
<p>With a weak hand and six or more cards in a minor, bid 2♠: opener must bid 3♣, and you pass with clubs or bid 3♦ with diamonds. With ♠52 ♥742 ♦J3 ♣Q108653, 1NT – 2♠ – 3♣ – pass.</p>
<p>2NT invites game with 8-9. Opener passes with 15, bids 3NT with 17, and uses judgement with 16 (accept with good tens and nines or a 5-card suit). 4NT is not Blackwood here: it shows 16-17 and asks opener to bid 6NT with a maximum. With ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 HCP), bid 4NT: 16 + 15-17 = 31-33 combined, so slam is good only if opener is at the top of their range.</p>

<h3>Responding to 2NT</h3>
<p>The 2NT opening shows 20-21. The same tools apply one level higher: 3♣ is Stayman, 3♦ and 3♥ are transfers, 4♦ and 4♥ are Texas transfers, 3NT shows 4-10 points, and 4NT (11-12) is quantitative. Even 4 points are enough to raise to game.</p>
<div class="tip">With a 5-card major and enough for game, transfer first and then bid 3NT. Opener, who knows both their own hand and the fact that you have five cards, makes the final choice between 3NT and four of the major.</div>
<div class="warn">Don't use Stayman with a balanced 8+ hand that has no 4-card major. You will end up guessing; just bid 2NT or 3NT.</div>
`,
    keyPoints: [
      '1NT = 15-17 balanced; responder adds points and places the contract.',
      '2♣ Stayman (8+, a 4-card major): replies 2♦ none, 2♥ hearts (maybe spades too), 2♠ spades only.',
      '2♦ and 2♥ are transfers to hearts and spades with any strength; 2♠ is a transfer to clubs for a weak hand with a long minor.',
      '2NT = 8-9 invitational, 3NT = 10-15, 4NT = 16-17 quantitative (not Blackwood).',
      'Opener super-accepts a transfer with four-card support and 17 by jumping to three of the major.',
      'Over 2NT: 3♣ Stayman, 3♦/3♥ transfers, 4♦/4♥ Texas, 3NT with 4-10, 4NT quantitative.',
    ],
    quiz: [
      {
        q: 'Partner opens 1NT. You hold ♠J8752 ♥84 ♦932 ♣Q65 (3 HCP). What is your plan?',
        options: ['Pass', '2♥ (transfer), then pass 2♠', 'Bid 2♠', 'Bid 2♣'],
        answer: 1,
        explain: 'A weak hand with five spades plays better in 2♠ than in 1NT, because the long trumps provide tricks. Transfer with 2♥ and pass. 2♠ would be a transfer to clubs, and 2♣ Stayman needs 8+.',
      },
      {
        q: '1NT – 2♣ – 2♥. You hold ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 HCP). What now?',
        options: ['3NT', '4♥', '3♥', '2NT'],
        answer: 1,
        explain: 'Opener has four hearts, so there is a 4-4 fit, and 11 + 15-17 is enough for game. Bid 4♥; a 4-4 major fit usually plays better than 3NT.',
      },
      {
        q: 'You opened 1NT with ♠KQ75 ♥AJ83 ♦K4 ♣Q62. Partner bids 2♣. What is your reply?',
        options: ['2♥', '2♠', '2♦', '2NT'],
        answer: 0,
        explain: 'With both majors reply 2♥ first. If partner has spades rather than hearts, they will bid 2NT or 3NT and you will convert to spades.',
      },
      {
        q: '1NT – 2♦ – 2♥ – 3NT. You opened with three hearts. What do you do?',
        options: ['Pass, because partner chose 3NT', 'Bid 4♥: partner has shown five hearts, so you have an eight-card fit', 'Bid 4NT', 'Bid 3♥'],
        answer: 1,
        explain: 'Transfer then 3NT shows exactly five hearts and game values. With three-card support opener chooses 4♥; with a doubleton, opener passes 3NT.',
      },
      {
        q: 'Partner opens 2NT. You hold ♠Q8642 ♥K7 ♦J73 ♣1052 (6 HCP). What is your plan?',
        options: ['Bid 3♠', 'Bid 3♥, then 3NT over 3♠', 'Bid 3NT', 'Pass'],
        answer: 1,
        explain: '20-21 opposite 6 is enough for game. Transfer with 3♥, then bid 3NT to show exactly five spades; opener chooses 4♠ with three-card support or passes with two.',
      },
    ],
  },

  {
    id: 'planning-the-play',
    title: 'Planning the play',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Before playing to the first trick, count your winners (in notrump) or your losers (in a suit contract) and make a plan.',
    body: `
<h3>Stop and plan before trick one</h3>
<p>When dummy comes down, most beginners play a card to the first trick at once. Strong players pause. The first trick is often where the contract is won or lost, and you cannot plan it until you have looked at the whole picture. Use the same routine every time:</p>
<ol>
<li><strong>Count.</strong> In notrump count your sure winners: tricks you can take without giving up the lead. In a suit contract count your losers in the hand with the long trumps.</li>
<li><strong>Compare.</strong> How many extra tricks do you need (notrump), or how many losers must you get rid of (suit)?</li>
<li><strong>Find the sources.</strong> Extra tricks come from establishing long suits, driving out high cards, finesses, and ruffs in the short-trump hand. Losers disappear by ruffing them in dummy, by discarding them on dummy's winners, or by finesses.</li>
<li><strong>Look for dangers.</strong> How often must you give up the lead? Which opponent is dangerous? Do you have the entries you need?</li>
<li><strong>Decide the order of play</strong>, starting with which card to play from dummy and which hand should win trick one.</li>
</ol>

<h3>A notrump example: count winners</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3NT by South. West leads the ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Count:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): six sure winners. You need three more.</p>
<p><strong>Sources:</strong> hearts. Once the ♥A has been driven out, dummy's KQJ10 provide three tricks. Clubs offer nothing: the defenders hold the K, Q, J and 10.</p>
<p><strong>Danger:</strong> the defenders may hold up the ♥A until the third round. Then dummy's last heart is a winner, but you need an entry to reach it. Dummy's only outside entry is the ♠A.</p>
<p><strong>Plan:</strong> play low from dummy at trick one and win with the ♠K in your hand, keeping the ♠A as an entry. Then lead hearts at once. Whenever the defenders take their ace, you have nine tricks: two spades, three hearts, three diamonds and a club. If you carelessly win trick one with the ♠A, a defender who holds up the ♥A until the third round leaves dummy's fourth heart stranded, and you make only eight tricks.</p>
<div class="tip">Knock out the opponents' high cards early, while you still have stoppers in every suit. Cash your sure winners last, not first.</div>

<h3>A suit example: count losers</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ by South. West leads the ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Count losers in South's hand:</strong> spades none; hearts one (the third round); diamonds three (the 7, the 3 and the 2); clubs none (dummy's ♣A covers your singleton). Total: four. You can afford three.</p>
<p><strong>Source:</strong> dummy has only two diamonds. After the ♦A and one more round, dummy is void and can ruff your third diamond with a small trump. That ruff is an extra trick because it is taken by the <em>short</em> trump hand: South's own trumps are winners anyway.</p>
<p><strong>Danger:</strong> if you draw three rounds of trumps first, dummy has no trumps left for the ruff. You must keep at least one trump in dummy until the ruff has been taken.</p>
<p><strong>Plan:</strong> win the lead with dummy's ♥A, play a diamond to your ace and give up a diamond. If the defenders win and lead a trump (their best defence), win it and ruff a diamond in dummy at once. Now draw trumps. You lose one heart and two diamonds.</p>
<div class="warn">"Always draw trumps first" is a good habit with a big exception: when you need dummy's trumps for ruffing, take the ruffs before the trumps are gone.</div>

<h3>Counting is a habit</h3>
<p>Counting takes a few seconds and the cost of not counting is huge. In notrump, if your sure winners already reach the target, take them and avoid unnecessary risks. If you are short, decide where the extra tricks will come from <em>before</em> you touch a card, because the order of play and the choice of hand to win the first trick often depend on it.</p>
`,
    keyPoints: [
      'Plan before you play to trick one: count, compare, find sources, look for dangers, then decide the order.',
      'In notrump count sure winners; in a suit contract count losers in the long-trump hand.',
      'Drive out the opponents\' high cards early, while you still have stoppers.',
      'Ruffs in the short-trump hand (usually dummy) gain tricks; keep dummy\'s trumps until the ruffs are taken.',
      'Protect the entries you will need later.',
    ],
    quiz: [
      {
        q: 'What should you count first in a notrump contract?',
        options: ['Your losers', 'Your sure winners', 'Your trumps', 'The opponents\' HCP'],
        answer: 1,
        explain: 'In notrump there are no ruffs, so the natural measure is tricks you can take without losing the lead. The shortfall tells you how many tricks must come from long suits or finesses.',
      },
      {
        q: 'Which ruff gains a trick?',
        options: ['A ruff in the hand with the long trumps', 'A ruff in the hand with the short trumps', 'Both equally', 'Neither'],
        answer: 1,
        explain: 'Your long trumps would win tricks anyway, so ruffing with them just uses up a winner. A ruff with the short hand\'s trumps (usually dummy\'s) wins a trick those small trumps could not otherwise take.',
      },
      {
        q: 'In the 3NT deal above, why win the first trick with the ♠K in hand rather than the ♠A in dummy?',
        options: ['To keep dummy\'s ♠A as an entry to the hearts', 'Because the king is the higher card', 'To hold up the spade stopper', 'To unblock the spade suit'],
        answer: 0,
        explain: 'If the defenders hold up the ♥A until the third round, dummy\'s last heart is a winner with no way to reach it, unless dummy still has the ♠A.',
      },
      {
        q: 'In the 4♠ deal above, what goes wrong if declarer draws three rounds of trumps immediately?',
        options: ['Nothing, it is the safest play', 'Dummy has no trump left to ruff the third diamond', 'The defenders can ruff a heart', 'Declarer loses control of clubs'],
        answer: 1,
        explain: 'Dummy started with only three trumps. Drawing three rounds uses them all, and declarer is left with three diamond losers plus a heart: one too many.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'Opening leads',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'How to choose the suit to lead and the right card in it, against notrump and against suit contracts.',
    body: `
<h3>Two decisions: the suit and the card</h3>
<p>The opening lead is the only card you play without seeing dummy, so it pays to follow good habits. First choose the suit from the auction and your hand; then lead the conventional card in that suit, so partner can work out what you hold.</p>

<h3>Choosing the suit against notrump</h3>
<ul>
<li>If partner has bid a suit, lead it unless you have a very good alternative.</li>
<li>Otherwise lead your longest and strongest suit. Notrump is a race: the defenders try to set up long cards before declarer can cash their own tricks.</li>
<li>Prefer unbid suits. Avoid suits the opponents have bid.</li>
<li>With a very weak hand and no entries, a long suit you can never cash may be pointless; a lead in partner's likely long suit (often a major the opponents did not mention) can be better.</li>
</ul>

<h3>Choosing the suit against a suit contract</h3>
<ul>
<li><strong>Good leads:</strong> the top of a sequence; partner's suit; a singleton (especially when you hold the ace of trumps or partner may have an entry); the ace from AK.</li>
<li><strong>Lead a trump</strong> when the auction suggests dummy will ruff declarer's losers: declarer has shown two suits and dummy has preferred the second, or dummy has shown shortness.</li>
<li><strong>Avoid:</strong> leading away from an ace (declarer may score a singleton king, and you may never take your ace); leading away from a king into declarer's AQ; leading a doubleton honour such as Qx.</li>
</ul>
<div class="warn">Never underlead an ace against a suit contract. If you must lead the suit, lead the ace.</div>

<h3>Which card to lead</h3>
<table>
<thead><tr><th>Holding</th><th>Against notrump</th><th>Against a suit</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (fourth best)</td><td>5, though a lead from a king is risky</td></tr>
<tr><td>A 10 6 3</td><td>3 (fourth best)</td><td>Avoid; if you must, the A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (top of nothing)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (singleton)</td><td>rarely led</td><td>7, often a good lead</td></tr>
</tbody>
</table>
<p>The rules behind the table: lead the top of a sequence (three touching cards, or two touching plus the next-but-one as in KQ10); from an interior sequence such as KJ10 or Q109, lead the top of the touching cards (the J or the 10); lead the ace from AK; lead the top of a doubleton and the top of three small cards; from an honour with two or three small cards lead low (third best from three, fourth best from four); and against notrump lead fourth best from your long suit.</p>

<h3>Examples</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="You are on lead against 1NT – 3NT"></div>
<p>Lead the ♠J, the top of the interior sequence KJ10. Spades are your long suit, and the J lead also tells partner you hold the 10 but not the Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="On lead against 1♠ – 2♠ – 4♠"></div>
<p>Two safe choices: the ♥A (ace from AK) and the ♦Q (top of a sequence). The ♥A wins the trick and lets you see dummy before you decide what to do next, while partner's signal tells you whether to continue hearts.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="East: on lead against 2♦"></div>
<p>Lead a trump. North has five or more spades and four or more diamonds, and South's preference for diamonds suggests shortness in spades. Your strong spades mean declarer's spade losers can only be saved by ruffing them in dummy; each round of trumps you lead removes one of dummy's ruffs.</p>
<div class="tip">After every opening lead, ask yourself what it tells partner. Conventional leads let the other defender count the suit from the first trick.</div>
`,
    keyPoints: [
      'Choose the suit first: partner\'s suit, then your long suit against notrump; sequences, partner\'s suit, singletons or a trump against a suit.',
      'Lead the top of a sequence; from KJ10 lead the J, from Q109 the 10; the A from AK.',
      'Against notrump lead fourth best from your longest and strongest suit.',
      'Lead the top of a doubleton and of three small cards; low from an honour with two or three small cards.',
      'Never underlead an ace against a suit contract; lead a trump when dummy is likely to ruff.',
    ],
    quiz: [
      {
        q: 'You are on lead against 3NT with ♠KQ1086 as your long suit. Which card do you lead?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 is a broken sequence, so lead the king. It is safe and starts to set up the suit; fourth best (the 8) could give declarer a cheap trick with the J.',
      },
      {
        q: 'Against 4♥, which of these leads is the worst?',
        options: ['♦Q from ♦QJ10', 'The ♣2 from ♣AJ62', 'A singleton spade', 'The ♣8 from ♣852'],
        answer: 1,
        explain: 'Underleading an ace against a suit contract is the classic losing lead: declarer may win a cheap trick with the king or queen, and your ace may later be ruffed.',
      },
      {
        q: 'Partner overcalled 1♠ and the opponents reached 3NT. You hold ♠Q85. Which card do you lead?',
        options: ['♠Q', '♠8', '♠5', 'Another suit'],
        answer: 2,
        explain: 'Lead partner\'s suit, and from an honour with two small cards lead low. Leading the Q could waste it if partner holds the AJ, whereas if you keep it, your side may later capture one of declarer\'s honours with it.',
      },
      {
        q: 'You decide to lead from ♦94. Which card?',
        options: ['♦9', '♦4', 'Either, it does not matter', 'Neither: never lead a doubleton'],
        answer: 0,
        explain: 'Lead the top of a doubleton. If you later play the 4, partner sees the high-low and knows you started with two cards.',
      },
      {
        q: 'When is a trump lead most attractive?',
        options: ['When you hold the ace of trumps', 'When the auction suggests dummy is short in declarer\'s side suit and will ruff', 'When you have a singleton in a side suit', 'Whenever the opponents are in a major'],
        answer: 1,
        explain: 'Trump leads cut down the ruffs dummy can make. They are best when declarer has shown a second suit, dummy has given preference, or dummy is known to be short in a suit where you are strong.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'Duplicate scoring',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'How a deal is scored at duplicate: trick values, partscore, game and slam bonuses, overtricks, undertricks and the effect of doubles.',
    body: `
<h3>Each deal stands alone</h3>
<p>At duplicate bridge every deal is scored on its own. There is no carrying of partscores from one deal to the next as in rubber bridge. Each board shows who is <strong>vulnerable</strong>; being vulnerable raises both the bonuses for game and slam and the penalties for going down.</p>

<h3>Step 1: trick score</h3>
<p>Only tricks bid and made count towards the trick score:</p>
<table>
<thead><tr><th>Strain</th><th>Per trick bid and made</th></tr></thead>
<tbody>
<tr><td>♣ or ♦</td><td>20</td></tr>
<tr><td>♥ or ♠</td><td>30</td></tr>
<tr><td>NT</td><td>40 for the first trick, 30 for each later one</td></tr>
</tbody>
</table>
<p>Doubled contracts score twice the trick score, redoubled contracts four times. So 2♥ is worth 60, but 2♥ doubled is worth 120.</p>

<h3>Step 2: bonuses</h3>
<table>
<thead><tr><th>Bonus</th><th>Not vulnerable</th><th>Vulnerable</th></tr></thead>
<tbody>
<tr><td>Partscore (trick score under 100)</td><td>50</td><td>50</td></tr>
<tr><td>Game (trick score 100 or more)</td><td>300</td><td>500</td></tr>
<tr><td>Small slam (6 level)</td><td>500 extra</td><td>750 extra</td></tr>
<tr><td>Grand slam (7 level)</td><td>1000 extra</td><td>1500 extra</td></tr>
<tr><td>Making a doubled contract ("insult")</td><td>50</td><td>50</td></tr>
<tr><td>Making a redoubled contract</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Slam bonuses come on top of the game bonus. Game needs a trick score of 100: 3NT (40 + 30 + 30), 4♥ or 4♠ (120), 5♣ or 5♦ (100).</p>

<h3>Step 3: overtricks</h3>
<p>Undoubled overtricks score their normal trick value (20, 30 or 30 in notrump). Doubled overtricks score 100 each not vulnerable and 200 vulnerable; redoubled, 200 and 400.</p>

<h3>Going down: undertricks</h3>
<table>
<thead><tr><th>Down</th><th>Not vul</th><th>Not vul doubled</th><th>Vul</th><th>Vul doubled</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Doubled and not vulnerable: 100 for the first undertrick, 200 each for the second and third, 300 each after that. Doubled and vulnerable: 200 for the first, 300 for each one after. Redoubled undertricks are twice the doubled figures.</p>

<h3>Scores worth knowing by heart</h3>
<table>
<thead><tr><th>Contract made exactly</th><th>Not vul</th><th>Vul</th></tr></thead>
<tbody>
<tr><td>1NT</td><td>90</td><td>90</td></tr>
<tr><td>2♥ or 2♠, 3♣ or 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2NT</td><td>120</td><td>120</td></tr>
<tr><td>3♥ or 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3NT</td><td>400</td><td>600</td></tr>
<tr><td>4♥ or 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ or 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ or 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6NT</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7NT</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ or 2♠ doubled</td><td>470</td><td>670</td></tr>
<tr><td>1NT doubled</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Worked example: 4♠ making eleven tricks, not vulnerable. Trick score 4 × 30 = 120, game bonus 300, one overtrick 30: total 450. The same result vulnerable: 120 + 500 + 30 = 650.</p>
<p>Worked example: 3NT doubled, making ten tricks, vulnerable. Trick score (40 + 30 + 30) × 2 = 200, game bonus 500, insult 50, one doubled overtrick 200: total 950.</p>
<div class="warn">A double can turn a partscore into a game: 2♥ doubled has a trick score of 120, so making it scores 470 or 670 instead of 110. Don't double a low-level contract for penalty unless you expect to beat it.</div>
<div class="tip">Notice that 5♣ and 3NT score the same, but 3NT needs two tricks fewer. That is one reason why notrump and major-suit games are preferred to minor-suit games.</div>
`,
    keyPoints: [
      'Trick values: minors 20, majors 30, notrump 40 then 30; doubled ×2, redoubled ×4.',
      'Game (trick score 100+) earns 300 not vulnerable or 500 vulnerable; a partscore earns 50.',
      'Slam bonuses: small 500/750, grand 1000/1500, on top of the game bonus.',
      'Undertricks: 50/100 undoubled; doubled 100-300-500-800 not vulnerable and 200-500-800-1100 vulnerable.',
      'Making a doubled contract adds 50 for the insult, and doubled overtricks are worth 100 or 200 each.',
    ],
    quiz: [
      {
        q: 'You make 4♥ exactly, vulnerable. What do you score?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Trick score 4 × 30 = 120, plus the vulnerable game bonus of 500: 620.',
      },
      {
        q: 'You make ten tricks in 3NT, not vulnerable. What do you score?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 for the contract, 300 for a non-vulnerable game and 30 for the overtrick: 430.',
      },
      {
        q: 'Not vulnerable, you go three down doubled. What do the opponents score?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'Not vulnerable doubled: 100 for the first undertrick and 200 each for the second and third: 100 + 200 + 200 = 500.',
      },
      {
        q: 'The opponents make 2♠ doubled, not vulnerable. What do they score?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Doubled, the trick score is 2 × 30 × 2 = 120, which is a game: 120 + 300 game bonus + 50 insult = 470.',
      },
      {
        q: 'You make 6♠ exactly, not vulnerable. What do you score?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Trick score 6 × 30 = 180, game bonus 300 and small slam bonus 500: 980. Vulnerable it would be 180 + 500 + 750 = 1430.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'Establishing long suits',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'How to turn the small cards of a long suit into winners, and how to keep the entries you need to cash them.',
    body: `
<h3>Where extra tricks come from</h3>
<p>In most notrump contracts the extra tricks you need come from long suits. Once the opponents have run out of a suit, every card you have left in it is a winner, even a 2. Turning small cards into winners is called <strong>establishing</strong> (or setting up) the suit.</p>

<h3>Counting the rounds</h3>
<p>To know how many tricks a suit will produce, think about how the opponents' cards are likely to split. With A K 6 4 2 opposite 7 5 3 you have eight cards and the opponents five. If their cards split 3-2 (68% of the time), three rounds exhaust them: you win the A and K, lose one round, and the last two cards are winners. Four tricks. If they split 4-1, you need four rounds and the suit produces only three tricks.</p>
<table>
<thead><tr><th>Cards missing</th><th>Most likely split</th><th>Chance</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (3-3 is only 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Lose the trick you must lose early</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3NT by South. West leads the ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Count:</strong> ♠AK, ♥A, ♦AK, ♣AK: seven sure winners. Two more are needed, and diamonds can provide them if they split 3-2.</p>
<p><strong>The trap:</strong> dummy has no entry outside diamonds. If you play the ♦A, ♦K and a third diamond, the defenders win the third round and dummy's two long diamonds are stranded. You make seven tricks.</p>
<p><strong>The solution:</strong> win the ♠A and immediately play a low diamond from both hands, <em>ducking</em> the first round. Win the defenders' return, lead a diamond to the ace and cash the king; if the suit has split 3-2 it has now gone, and you are still in dummy to cash the two long diamonds. Nine tricks: two spades, a heart, four diamonds and two clubs.</p>
<p>The duck costs nothing: you were always going to lose one diamond trick. Ducking just loses it while dummy still has the A and K to come back to.</p>
<div class="tip">When a suit must lose a trick and the long hand has few entries, lose that trick on the first round, not the last.</div>

<h3>Unblocking: high cards from the short hand first</h3>
<p>With ♣KQ3 opposite ♣A8642, play the king and queen first, then cross to the ace with the 3. If you cash the ace first, the K and Q are left alone in one hand and the suit blocks: you cannot get back to the long cards without an outside entry. The same idea applies whenever one hand is short: cash the short hand's honours first.</p>

<h3>Driving out the opponents' high cards</h3>
<p>Some suits have no small-card problem at all; they just need the opponents' ace knocked out. KQJ10 opposite small cards produces three tricks after the ace has gone. Start such suits early, while you still hold stoppers in the other suits, so that the defenders cannot set up their own long suit first.</p>

<h3>Choosing which suit to establish</h3>
<ul>
<li>Prefer the suit that needs the fewest tricks lost and the most likely split.</li>
<li>Prefer losing the lead to the opponent who cannot hurt you (see the lessons “The hold-up play and entries” and “Avoidance: keeping the dangerous opponent off lead”).</li>
<li>Check the entries: a suit you can set up but never reach is worth nothing.</li>
<li>In a suit contract, long side suits are set up the same way, often by ruffing the small cards in the long-trump hand until the remaining ones are good.</li>
</ul>
<div class="warn">Don't cash all your sure winners first "to see what happens". Each winner you cash also sets up winners for the defenders and destroys your own entries and stoppers.</div>
`,
    keyPoints: [
      'Small cards become winners once the opponents have run out of the suit.',
      'Count the rounds: with five cards missing a 3-2 split (68%) needs three rounds.',
      'Duck the round you must lose while the long hand still has its high cards as entries.',
      'Unblock by cashing the honours from the short hand first.',
      'Start your long suit early, before the defenders set up theirs.',
    ],
    quiz: [
      {
        q: 'You hold A K 6 4 2 opposite 7 5 3. If the five missing cards split 3-2, how many tricks can the suit produce?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Three rounds remove a 3-2 split. You win two of those rounds and lose one; the remaining two cards in the long hand are winners: 4 tricks.',
      },
      {
        q: 'In the 3NT deal above, why duck the first round of diamonds?',
        options: ['To find out who has the queen', 'To keep the ♦A and ♦K as entries to the long diamonds', 'To hold up the spades', 'Because ducking always wins an extra trick'],
        answer: 1,
        explain: 'Dummy has no outside entry. Losing the inevitable diamond trick first means that after the A and K the long cards can be run without needing to get back to dummy.',
      },
      {
        q: 'You hold ♣KQ3 in hand and ♣A8642 in dummy, with no other entry to dummy. How should you play clubs?',
        options: ['Ace first, then king and queen', 'King and queen first, then a small club to the ace', 'Lead the 2 from dummy', 'It does not matter'],
        answer: 1,
        explain: 'Cash the short hand\'s honours first. After the K and Q you can still cross to the ace with the 3 and, if the suit split 3-2, cash the long cards. Ace first leaves the K and Q blocking the suit.',
      },
      {
        q: 'The opponents hold six cards in a suit. How often do they split 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'With an even number of cards missing, an even split is less likely than you might think: 3-3 is about 36%, while 4-2 is about 48%.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Finesses',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'How to win tricks with cards that are not the highest by leading towards them, and when to finesse rather than play for the drop.',
    body: `
<h3>The idea</h3>
<p>A finesse is an attempt to win a trick with a card that is not the highest outstanding, by playing it <em>after</em> the opponent who holds the higher card. You do this by leading <strong>towards</strong> the card you hope will win.</p>
<p>The simplest case: dummy (North) has ♠A Q and you (South) have two small spades. Lead a small spade from your hand. If West plays low, play the queen. If West has the king, the queen wins; if East has it, the queen loses. Either way the ace is still a winner. A simple finesse works half the time, but it costs nothing to try when you have to lead the suit anyway.</p>

<h3>Leading towards an honour</h3>
<p>With K 5 in dummy and 6 4 in hand, lead from your hand towards the king. If West holds the ace, the king will make a trick: if West plays the ace, the king is established; if West ducks, the king wins. If you lead the king from dummy instead, it can never win while the ace is out.</p>
<div class="warn">Leading an honour is only right when you can afford it to be covered, which means you hold the cards just below it. Lead the queen from Q J 10 opposite A 3 2, but not from Q 3 2 in your hand opposite A 5 4 in dummy: if the queen is covered, you have nothing left to promote. Instead, lead low from dummy towards the queen, which will make a trick whenever East holds the king.</div>

<h3>Repeated and double finesses</h3>
<table>
<thead><tr><th>Combination</th><th>How to play</th><th>Result</th></tr></thead>
<tbody>
<tr><td>A Q opposite 3 2</td><td>Lead towards the A Q and finesse the Q</td><td>2 tricks 50%</td></tr>
<tr><td>K 5 opposite 6 4</td><td>Lead towards the K</td><td>1 trick 50%</td></tr>
<tr><td>A Q 10 opposite 4 3 2</td><td>Finesse the 10, then later the Q</td><td>3 tricks 25%, at least 2 tricks 75%</td></tr>
<tr><td>A J 10 opposite 4 3 2</td><td>Finesse the 10 (or J); if it loses, finesse again</td><td>2 tricks 75% (fails only if both K and Q are offside)</td></tr>
<tr><td>A K J opposite 4 3 2</td><td>Finesse the J</td><td>3 tricks about 50%</td></tr>
</tbody>
</table>
<p>A double finesse wins when at least one of two missing honours is well placed; each honour is independently with West or East, so the chance that both are wrong is ½ × ½ = 25%.</p>

<h3>Finesse or drop? "Eight ever, nine never"</h3>
<p>When you are missing the queen and have no other clues:</p>
<ul>
<li>With <strong>eight</strong> cards (five missing), finesse. The finesse (after first cashing the ace in case the queen is singleton) works about 40% of the time with A K J x x (about 51% with A K J 10 x); playing for the queen to drop works only about 33%.</li>
<li>With <strong>nine</strong> cards (four missing), cash the ace and king and hope the queen drops. That works about 53% of the time, the finesse about 51%.</li>
</ul>
<p>The rule is only a tie-breaker. Information from the bidding (a player who opened or preempted holds most of the high cards or most of the length) or from the early play outweighs these small differences.</p>

<h3>A finesse in practice</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ by South. West leads the ♥J."></div>
<p>You must lose the ♦A, so the slam depends on not losing a trump trick. The ♠K is missing, and with nine trumps you finesse for it: you can pick it up only if East holds it, because East plays before your A Q J 10 (or if West has a singleton king).</p>
<p>Win the lead with dummy's ♥Q so that you are in the right hand, and lead a small trump. If East plays low, put in the 10 (or J). If it wins, you may need to repeat the finesse, so come back to dummy with the ♣K and lead another trump. Planning the entries for a repeated finesse is part of the job: dummy has two quick entries (the ♥Q and the ♣K), and you should use them for the trump suit rather than waste them.</p>
<div class="tip">The rule "eight ever, nine never" is about the queen. When you are missing the king, you still finesse for it with nine or ten cards; only with eleven cards is playing for the drop slightly better (52%).</div>
`,
    keyPoints: [
      'Lead towards the card you hope will win; a simple finesse is a 50% chance.',
      'Only lead an honour for a finesse when you hold the cards just below it.',
      'A double finesse (A Q 10, A J 10) gains at least one extra trick 75% of the time.',
      'Missing the queen: finesse with eight cards, play for the drop with nine ("eight ever, nine never").',
      'Plan your entries for repeated finesses.',
    ],
    quiz: [
      {
        q: 'Dummy has ♥A Q and you have ♥7 4. How do you play hearts to try for two tricks?',
        options: ['Cash the ace, then lead the queen', 'Lead the queen from dummy', 'Lead a small heart from hand and play the queen if West plays low', 'Lead the ace and hope the king drops'],
        answer: 2,
        explain: 'The queen can only win if it is played after the king. Lead from your hand so West has to play before dummy; if West has the king, the queen wins.',
      },
      {
        q: 'With A Q 10 in dummy and 4 3 2 in hand, how often will the double finesse give you at least two tricks?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'You make at least two tricks unless both the K and the J are with East. Each is with West half the time, so both are wrong only ¼ of the time.',
      },
      {
        q: 'You hold A K J 5 2 opposite 6 4 3 (eight cards), missing the queen. What is the best play, with no clues from the bidding?',
        options: ['Cash the ace and king', 'Cash the ace, then finesse the jack', 'Lead the jack', 'Duck a round'],
        answer: 1,
        explain: 'With eight cards the finesse (about 40%, cashing the ace first in case the queen is singleton) is better than the drop (about 33%).',
      },
      {
        q: 'You hold A K J 5 4 opposite 7 6 3 2 (nine cards), missing the queen. What is the best play, with no clues?',
        options: ['Cash the ace and king', 'Finesse the jack at once', 'Lead the jack', 'Duck a round'],
        answer: 0,
        explain: '"Nine never": with only four cards missing, the queen falls under the ace and king about 53% of the time, slightly more often than the finesse works (about 51%).',
      },
      {
        q: 'Dummy has ♦K 7 3 and you have ♦8 4 2. How do you give yourself the best chance of a trick?',
        options: ['Lead the king from dummy', 'Lead low from hand towards the king', 'Lead low from dummy', 'Wait for the defenders to lead the suit'],
        answer: 1,
        explain: 'Leading towards the king wins a trick whenever West holds the ace. Leading the king loses to the ace wherever it is.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Second hand low, third hand high',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'The basic rules for defenders playing second and third to a trick, when to break them, and when to cover an honour with an honour.',
    body: `
<h3>Second hand low</h3>
<p>When declarer leads a small card towards the dummy (or from dummy towards declarer's hand), the defender playing second should usually play <strong>low</strong>. Partner plays last to the trick and can often win it cheaply, while your high card is kept to capture one of declarer's honours later.</p>
<p>Example: dummy has ♠K J 5 and declarer leads a small spade from hand towards it. You sit second with ♠A 7 3. If you play the ace, you capture only small cards, and dummy's K and J are both left for later. If you play low, declarer must guess: if declarer plays the jack and partner holds the queen, your side makes two tricks; if declarer plays the king, your ace still scores later.</p>

<h3>When second hand should play high</h3>
<ul>
<li><strong>To cash the setting trick</strong> or a trick you cannot afford to lose, for example when declarer is about to discard their losers.</li>
<li><strong>When an honour is led</strong>: then the question is whether to cover (see below).</li>
<li><strong>To split touching honours.</strong> Suppose dummy has K 10 3, declarer has A 6 2 and you sit in front of dummy with Q J 4. If declarer leads low and you play low, declarer finesses the 10, then cashes the A and K and your Q and J both fall: no trick for you. Play the J on the first round (and the Q when declarer next leads towards dummy) and you are sure to make one trick.</li>
</ul>

<h3>Third hand high</h3>
<p>When partner leads a small card and dummy plays low, play your <strong>highest</strong> card to stop declarer winning the trick cheaply, or to force out declarer's high card and promote partner's.</p>
<ul>
<li>With touching high cards, play the <strong>lowest</strong> of them: from K Q 5 play the Q, from Q J 4 play the J. Partner can then read where the higher card is.</li>
<li>Play only as high as necessary. If dummy has played the 9 and you hold Q 10 2, the 10 is enough.</li>
<li><strong>Finesse against dummy.</strong> If dummy has K 7 3, plays low, and you hold A J 4, play the J. Dummy's king is trapped under your ace: if declarer holds the queen, they win this trick, but your ace still sits over the K; if partner holds the queen, the J wins.</li>
</ul>

<h3>Cover an honour with an honour</h3>
<p>When an honour is led and you hold a higher one, covering forces declarer to use two of their high cards to capture one of yours. That can promote a lower card, such as a 10 or 9, in your hand or partner's.</p>
<table>
<thead><tr><th>Seat</th><th>Diamonds</th></tr></thead>
<tbody>
<tr><td>North (dummy)</td><td>J 7 3</td></tr>
<tr><td>West (partner)</td><td>10 2</td></tr>
<tr><td>East (you)</td><td>Q 9 4</td></tr>
<tr><td>South (declarer)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>Declarer leads the ♦J from dummy. If you play low, the J wins, and the A and K then drop your queen: declarer loses no trick. If you cover with the Q, declarer wins the A and cashes the K, dropping partner's 10, but now your 9 is higher than any diamond declarer has left. Covering has created a trick out of nothing.</p>

<h4>When not to cover</h4>
<ul>
<li>When the honour led is one of touching honours (dummy has Q J 10 4 and leads the Q): wait and cover the last of them, if at all.</li>
<li>When there is clearly nothing to promote, for example in the trump suit when declarer has shown a long, strong suit.</li>
<li>When the honour is led from declarer's hand and covering would only help declarer pick up the suit: think about what declarer holds before reacting.</li>
</ul>
<div class="tip">Whether to cover is a question of promotion. Ask: "If I cover, which card of ours could become a winner?" If the answer is none, do not cover.</div>
<div class="warn">Don't hesitate and then play low: the pause tells declarer you hold the missing honour. Think about these situations as soon as dummy appears, so you are ready when they arise.</div>
`,
    keyPoints: [
      'Second hand low: keep your high cards to capture declarer\'s honours; partner plays last.',
      'Break the rule to take the setting trick or to split touching honours.',
      'Third hand high, but the lowest of touching cards and only as high as necessary.',
      'Finesse against dummy\'s honour when you sit over it.',
      'Cover an honour with an honour when it may promote a card for your side; don\'t cover the first of touching honours.',
    ],
    quiz: [
      {
        q: 'Declarer leads a low card from hand towards dummy\'s K J 5. You hold A 7 3 in second seat. What do you normally play?',
        options: ['The ace', 'A low card', 'The 7, to signal', 'It never matters'],
        answer: 1,
        explain: 'Second hand low. Taking the ace captures only small cards and leaves dummy\'s K and J both alive. Playing low forces declarer to guess, and partner may hold the queen.',
      },
      {
        q: 'Partner leads a low card against 3NT. Dummy has 7 5 2 and plays low. You hold K Q 8. Which card do you play?',
        options: ['K', 'Q', '8', 'Either honour'],
        answer: 1,
        explain: 'Third hand high, lowest of touching cards: the Q. If it forces out the ace, partner knows you also hold the K.',
      },
      {
        q: 'Partner leads low. Dummy has K 7 3 and plays low. You hold A J 4. Which card do you play?',
        options: ['A', 'J', '4', 'K is in dummy, so it does not matter'],
        answer: 1,
        explain: 'Finesse against dummy: the J wins if partner has the Q, and your ace stays over dummy\'s king. Playing the ace would set up dummy\'s king.',
      },
      {
        q: 'Dummy holds ♠Q J 10 4 and the Q is led. You hold ♠K 6 3 behind dummy. Should you cover?',
        options: ['Yes, always cover an honour', 'No, don\'t cover the first of touching honours', 'Only if partner signalled', 'Yes, with the 6'],
        answer: 1,
        explain: 'Covering the Q lets declarer win with the ace and then the J and 10 are good. Wait: if declarer keeps leading honours, cover the last one, which is when covering might promote something.',
      },
      {
        q: 'Why cover an honour with an honour?',
        options: ['To win the trick', 'To make declarer use two honours for one of yours, promoting a lower card for your side', 'To show partner your strength', 'To force declarer to ruff'],
        answer: 1,
        explain: 'Covering rarely wins the trick itself. Its value is promotion: after two of declarer\'s honours have gone, a lower card such as a 10 or 9 may become a winner.',
      },
    ],
  },
];
