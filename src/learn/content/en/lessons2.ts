// Lessons, part 2.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: "Responder's rebid and choosing the game",
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'How responder uses the second bid to sign off, invite or force, and how to choose between a major, 3NT and five of a minor.',
    body: `
<h3>Responder becomes the captain</h3>
<p>After opener's rebid you usually know their strength within three or four points and quite a lot about their shape. Your second bid should put the partnership in the right contract or ask one more question. Think in three bands:</p>
<table>
<thead><tr><th>Responder</th><th>Aim</th><th>Typical bids</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>Sign off at the best partscore</td><td>Pass; preference to opener's first suit; rebid a six-card suit; 1NT</td></tr>
<tr><td>11-12</td><td>Invite game</td><td>2NT; raise opener's suit to the three level; jump rebid of a good six-card suit</td></tr>
<tr><td>13+</td><td>Make sure of game</td><td>Bid game directly, or bid a new suit (forcing) to find the right one</td></tr>
</tbody>
</table>

<h3>Examples</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Responder: bid 2NT"></div>
<p>Opener has shown 12-14 balanced. With 12 HCP the total is 24-26: invite with 2NT. Opener passes with 12 and bids 3NT with 14 (with 13, opener uses judgement). With 13+ you would bid 3NT yourself; with 10 or less you would pass.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Responder: bid 3♥"></div>
<p>Opener has a minimum with six hearts, so Q3 is enough support for an eight-card fit. 12 points opposite 12-15: invite with 3♥. Opener bids 4♥ with the top of their range.</p>

<h4>Preference</h4>
<p>When opener shows two suits and you have no fit for either, choose between them cheaply. Opener's first suit is at least as long as their second, so with equal length go back to the first. After 1♥ – 1♠ – 2♣, with ♥Q43 and ♣97 bid 2♥: this is not extra strength, just a better trump suit. With ♥4 and ♣J973, pass 2♣.</p>

<h3>Choosing the game</h3>
<ol>
<li><strong>Eight-card major fit? Play in the major.</strong> A 4-4 or 5-3 fit usually produces at least one more trick than notrump, because the short trump hand can ruff. Even with two balanced hands, 4♥ or 4♠ is normally right.</li>
<li><strong>No major fit? Prefer 3NT</strong>, provided every unbid suit is stopped. 3NT needs nine tricks; five of a minor needs eleven for the same score (400 or 600).</li>
<li><strong>Five of a minor</strong> is for hands with a big minor fit and a suit the opponents can run in notrump, or with shortness that makes ruffing tricks.</li>
</ol>
<table>
<thead><tr><th>Contract</th><th>Combined points needed (approximate)</th></tr></thead>
<tbody>
<tr><td>3NT, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Small slam</td><td>33</td></tr>
<tr><td>Grand slam</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2NT – 3NT. South is declarer."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>North–South have 27 HCP and a nine-card diamond fit, but no major fit and every suit stopped. In 3NT you count nine tricks almost at once: two spades, a heart, five diamonds and a club once the ♣A (and perhaps the ♣Q) has been driven out. In 5♦ you need eleven tricks and have a spade loser, at least one heart loser and at least one club loser. 3NT is the far better game.</p>

<h3>The limits of "25 points for game"</h3>
<ul>
<li><strong>Fit:</strong> with a nine- or ten-card fit and shortness, game may make with 22-23 points. With a misfit, 26 may not be enough.</li>
<li><strong>Duplication:</strong> honours facing shortness are wasted. ♠KQJ opposite a singleton spade contributes little in a suit contract.</li>
<li><strong>Flat shapes:</strong> two 4-3-3-3 hands produce fewer tricks; deduct a point.</li>
<li><strong>Sources of tricks:</strong> a long, solid suit makes up for missing points. Six running diamonds can make 3NT with 23 HCP.</li>
<li><strong>Stoppers:</strong> 3NT with a wide-open suit fails regardless of points.</li>
</ul>
<div class="tip">With 13+ points opposite an opening bid, never make a bid partner can pass short of game. If you are not sure where to play, bid a new suit: a new suit by responder is forcing.</div>
<div class="warn">Don't keep bidding a hopeless misfit. If partner keeps repeating their suit and you keep repeating yours, the right contract is usually the lowest one available.</div>
`,
    keyPoints: [
      'Responder\'s second bid: 6-10 sign off, 11-12 invite, 13+ make sure of game.',
      'With equal length, give preference to opener\'s first suit.',
      'An eight-card major fit usually belongs in four of the major.',
      'Without a major fit, prefer 3NT to five of a minor when all suits are stopped.',
      'About 25 points for 3NT or four of a major, 29 for five of a minor, 33 for a small slam; adjust for fit and shape.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1NT – ? You hold ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 HCP).',
        options: ['Pass', '2NT', '3NT', '2♠'],
        answer: 1,
        explain: 'Opener has 12-14, so you have 24-26 together: invite with 2NT. Opener will bid 3NT with a maximum.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? You hold ♠KJ753 ♥Q43 ♦J86 ♣97 (7 HCP).',
        options: ['Pass', '2♥', '2♠', '2NT'],
        answer: 1,
        explain: 'Opener has at least five hearts, so you have an eight-card fit. 2♥ is simple preference and shows no extra strength.',
      },
      {
        q: 'You have 26 HCP together, a 4-4 spade fit and two balanced hands. Which game?',
        options: ['3NT', '4♠', '5♣', 'It is a coin flip'],
        answer: 1,
        explain: 'The 4-4 fit usually produces an extra trick: one hand can ruff while the other\'s trumps still draw the opponents\' trumps. Play 4♠.',
      },
      {
        q: 'You have 27 HCP, no major fit, a nine-card diamond fit, and all suits stopped. Which game?',
        options: ['5♦', '3NT', '4♦', '6♦'],
        answer: 1,
        explain: '3NT needs nine tricks, 5♦ eleven, and they score the same. With every suit stopped, 3NT is the percentage game.',
      },
      {
        q: 'Why can game fail with 26 HCP?',
        options: ['It cannot: 26 HCP always makes game', 'Because of misfits, duplicated values or an unstopped suit', 'Because 26 HCP is a slam hand', 'Only if trumps break 4-1'],
        answer: 1,
        explain: 'Points estimate trick-taking power, but tricks also depend on fit, on whether honours are working, and on stoppers in notrump.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'The strong 2♣ and 2NT openings',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'When to open 2♣ or 2NT, how responder answers, and how the strong balanced ranges fit together.',
    body: `
<h3>2♣: the big one</h3>
<p>2♣ is artificial and says nothing about clubs. It shows either <strong>22+ HCP</strong> or about <strong>nine playing tricks</strong> (with a major suit; with a minor you usually want ten, since a minor game needs eleven). It is the only forcing opening bid: partner must respond even with nothing.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Open 2♣: nine playing tricks"></div>
<p>Only 20 HCP, but count the tricks: seven spades and two hearts, with chances for a tenth. Opening 1♠ risks a pass from partner with a hand like ♠83 ♥J852 ♦Q964 ♣Q83 (5 HCP), when 4♠ is an excellent contract. Open 2♣ and rebid 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Open 2♣, then rebid 2NT"></div>
<p>23 HCP balanced: 2♣ followed by 2NT shows 22-24.</p>

<h3>Responding to 2♣</h3>
<table>
<thead><tr><th>Response</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>Waiting: the normal response with most hands, weak or strong</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positive: a good five-card suit (two of the top three honours) and 8+ HCP</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Partner opened 2♣: bid 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Partner opened 2♣: bid 2♥"></div>
<p>The 2♦ response keeps the bidding low so that the strong hand can describe itself. Even with a fair hand, if you have no good suit, bid 2♦ and show your values later.</p>

<h3>Opener's rebid</h3>
<ul>
<li><strong>2NT</strong> = 22-24 balanced. This is the only rebid responder may pass, with a really worthless hand. Responder uses the same methods as over a 2NT opening: 3♣ Stayman, 3♦ and 3♥ transfers, 3NT to play.</li>
<li><strong>3NT</strong> = 25-27 balanced.</li>
<li><strong>A suit</strong> = natural, at least five cards, and forcing: responder must bid again. Raise with support; bid a good suit of your own; with nothing useful make the cheapest bid.</li>
</ul>

<h3>The 2NT opening</h3>
<p>2NT shows <strong>20-21 HCP, balanced</strong>. It is not forcing, but responder should bid game with as little as 4 points.</p>
<table>
<thead><tr><th>Response to 2NT</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Pass</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer to hearts / spades</td></tr>
<tr><td>3NT</td><td>4-10, to play</td></tr>
<tr><td>4NT</td><td>11-12, quantitative: opener bids 6NT with a maximum</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Open 2NT: 20 HCP, balanced"></div>
<p>Facing this, a responder with ♠J10642 ♥Q85 ♦73 ♣962 transfers with 3♥ and passes 3♠: 23-24 combined is not enough for game, but five trumps make 3♠ safer than 2NT.</p>

<h3>The balanced ladder</h3>
<table>
<thead><tr><th>HCP</th><th>Sequence</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>One of a suit, then 1NT</td></tr>
<tr><td>15-17</td><td>1NT</td></tr>
<tr><td>18-19</td><td>One of a suit, then jump to 2NT</td></tr>
<tr><td>20-21</td><td>2NT</td></tr>
<tr><td>22-24</td><td>2♣, then 2NT</td></tr>
<tr><td>25-27</td><td>2♣, then 3NT</td></tr>
</tbody>
</table>
<div class="tip">Opposite 2♣, think in terms of tricks and controls, not just points. An ace or king is worth far more than scattered queens and jacks.</div>
<div class="warn">Don't open 2♣ just because you have 20 HCP. With 20-21 balanced open 2NT; with 19-21 and an ordinary unbalanced hand open one of a suit. Partner will respond with as little as 6 points, and you can jump or reverse to show your strength.</div>
`,
    keyPoints: [
      '2♣ = 22+ HCP or about nine playing tricks; artificial and forcing.',
      'Respond 2♦ (waiting) with most hands; a positive needs a good five-card suit and 8+ HCP.',
      '2♣ – 2♦ – 2NT = 22-24 balanced and may be passed; any suit rebid by opener is forcing.',
      '2NT opening = 20-21 balanced; 3♣ Stayman, 3♦/3♥ transfers, 3NT with 4-10, 4NT with 11-12.',
      'Balanced ladder: 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'You hold ♠AKQJ975 ♥AK4 ♦8 ♣K2. What do you open?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'With nine playing tricks you want to reach game even if partner has very little, so open the forcing 2♣ and bid spades next. 1♠ could be passed out; 2♠ would be a weak two.',
      },
      {
        q: 'Partner opens 2♣. You hold ♠Q74 ♥J863 ♦952 ♣K84 (6 HCP). What do you bid?',
        options: ['Pass', '2♦', '2♥', '2NT'],
        answer: 1,
        explain: '2♣ is forcing, so you cannot pass. With no good five-card suit, bid the waiting 2♦ and let opener describe their hand.',
      },
      {
        q: 'Partner opens 2♣. You hold ♠52 ♥KQJ84 ♦A73 ♣964 (10 HCP). What do you bid?',
        options: ['2♦', '2♥', '3♥', '2NT'],
        answer: 1,
        explain: 'A good five-card suit (KQJ) with 8+ HCP is a positive response: 2♥. It tells opener at once that slam is likely.',
      },
      {
        q: 'What does 2♣ – 2♦ – 2NT show?',
        options: ['20-21 balanced', '22-24 balanced', '25-27 balanced', 'A club suit'],
        answer: 1,
        explain: 'With 20-21 you open 2NT directly. Going through 2♣ first and then bidding 2NT shows 22-24; 2♣ then 3NT shows 25-27.',
      },
      {
        q: 'Partner opens 2NT. You hold a balanced 4 HCP. What do you bid?',
        options: ['Pass', '3NT', '3♣', '4NT'],
        answer: 1,
        explain: '20-21 plus 4 gives 24-25, enough for a play for game. Over 2NT, 3NT covers 4-10 points.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Weak twos and preempts',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'How to open with a long suit and a weak hand to take bidding space away, and how partner responds.',
    body: `
<h3>Why preempt?</h3>
<p>When you have a long suit and little else, the opponents probably hold most of the strength. Opening at a high level takes away the bidding room they need to find their best contract. At the same time it describes your hand precisely, so partner knows exactly what to do.</p>

<h3>The requirements</h3>
<table>
<thead><tr><th>Opening</th><th>Suit</th><th>HCP</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (weak two)</td><td>Six cards</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Seven cards</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Eight cards (or seven with extra shape)</td><td>5-10</td></tr>
</tbody>
</table>
<p>Most of your strength should be in the long suit. A good guide for a weak two is two of the top three honours or three of the top five.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Open 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Open 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Open 4♠"></div>
<p>2♣ is never a weak two: it is the strong artificial opening.</p>

<h3>How high? The Rule of 2-3-4</h3>
<p>Count your playing tricks: the tricks you expect to take with your suit as trumps if partner has nothing useful. KQJ9852 is about six tricks. A traditional guide is that you should be within:</p>
<ul>
<li><strong>two tricks</strong> of your contract when vulnerable against non-vulnerable opponents (unfavourable),</li>
<li><strong>three tricks</strong> at equal vulnerability,</li>
<li><strong>four tricks</strong> when non-vulnerable against vulnerable opponents (favourable).</li>
</ul>
<p>The idea is that even if you are doubled, the penalty should be no more than roughly the value of the game the opponents would probably have made. With six playing tricks, 3♣ (nine tricks) is fine at equal vulnerability. Modern players preempt more aggressively at favourable vulnerability and more carefully at unfavourable.</p>

<h3>When not to preempt</h3>
<ul>
<li>In fourth seat, a preempt makes no sense: with a weak hand simply pass the deal out. An opening at the two or three level in fourth seat shows a decent hand that expects to make the contract.</li>
<li>With a good hand (11+ HCP and a fine suit) open at the one level instead.</li>
<li>In first or second seat, be wary with a side four-card major or with two aces outside your suit: partner may have a good hand and you could miss a better contract.</li>
</ul>

<h3>Responding to a weak two</h3>
<table>
<thead><tr><th>Response</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Raise (2♥ – 3♥)</td><td>Preemptive, not invitational: extend the barrage with three-card support</td></tr>
<tr><td>Game in the suit</td><td>To play: either to make, or as a further preempt</td></tr>
<tr><td>2NT</td><td>Forcing: asks opener to describe</td></tr>
<tr><td>New suit</td><td>Natural, five or more cards, forcing</td></tr>
<tr><td>3NT</td><td>To play</td></tr>
</tbody>
</table>
<p><strong>Opener's answers to 2NT:</strong> with a minimum (about 5-7) rebid three of the suit; with a maximum (about 8-10) bid a suit where you hold an outside ace or king (a "feature"); with a solid suit (AKQxxx) bid 3NT.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="North opens 2♠; South asks with 2NT."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>North has 8 HCP, a maximum, and shows the ♥K. South, with 17 HCP, now knows that the spades will run with the ♠A and that the hearts are well held, and bids game. Had North shown a minimum by rebidding 3♠, South would have passed.</p>

<h3>Responding to a three-level preempt</h3>
<p>Count tricks, not points. Partner's suit will produce about six tricks; game needs three or four more from you, usually aces and kings. With support and a weak hand, raise to make the barrage even higher. Remember that partner has little defence: don't double the opponents for penalty on the strength of their preempt.</p>
<div class="tip">Facing partner's preempt, your aces and kings are gold and your queens and jacks are worth very little, unless they are in partner's suit.</div>
<div class="warn">A raise of a weak two is not a game try. If you have a good hand and want to know more, bid 2NT.</div>
`,
    keyPoints: [
      'Weak two: six cards, 5-10 HCP, most strength in the suit; 2♣ is never weak.',
      'Three-level preempt: seven cards, 5-10; four of a major: eight cards (or seven with shape).',
      'Rule of 2-3-4: within two tricks at unfavourable, three at equal, four at favourable vulnerability.',
      'Don\'t preempt in fourth seat.',
      'Raises of preempts are preemptive; 2NT over a weak two asks for a feature (minimum: rebid the suit).',
    ],
    quiz: [
      {
        q: 'First seat, equal vulnerability. You hold ♠84 ♥KQ10973 ♦J52 ♣63. What do you open?',
        options: ['Pass', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Six good hearts and 6 HCP is a textbook weak two. With seven hearts you would consider 3♥; with 12+ HCP you would open 1♥.',
      },
      {
        q: 'Partner opens 2♠ and the next player passes. You hold ♠Q73 ♥K842 ♦A65 ♣J94 (10 HCP). What do you bid?',
        options: ['Pass', '3♠', '2NT', '4♠'],
        answer: 1,
        explain: 'Game is unlikely opposite 5-10, but with three-card support your side has nine trumps and the opponents have a fit somewhere. Raise to 3♠ to make their entry harder.',
      },
      {
        q: 'You opened 2♥ with ♠K5 ♥AQ10984 ♦862 ♣73 (9 HCP). Partner bids 2NT. What do you rebid?',
        options: ['3♥', '3♠', '3NT', '4♥'],
        answer: 1,
        explain: '9 HCP is a maximum, so show your outside feature, the ♠K, with 3♠. 3♥ would show a minimum and 3NT a solid suit.',
      },
      {
        q: 'Under the Rule of 2-3-4, how many tricks short of your contract may you be at favourable vulnerability?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'At favourable vulnerability four down doubled costs 800, not far above the 620 their vulnerable game is worth, and opponents who also have a game or slam to look for often fail to double you at all.',
      },
      {
        q: 'Partner opens 2♥. What does your raise to 3♥ show?',
        options: ['A game invitation', 'A preemptive raise, not invitational', 'A forcing raise', 'A hand with no hearts'],
        answer: 1,
        explain: 'Raising a preempt continues the barrage. If you want opener to describe their hand, bid 2NT, the forcing ask.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Overcalls',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'When to overcall after the opponents open, what the different overcalls show, and how partner advances.',
    body: `
<h3>Why overcall?</h3>
<p>After an opponent opens, bidding a suit (an <strong>overcall</strong>) does three jobs: it competes for the partscore, it takes bidding space from the opponents, and it tells partner what to lead if they win the auction. Because of the last job, <strong>suit quality matters more than points</strong>.</p>

<h3>What the overcalls show</h3>
<table>
<thead><tr><th>Overcall</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>One-level suit (1♦ – 1♠)</td><td>8-16 HCP, a good five-card or longer suit</td></tr>
<tr><td>Two-level suit (1♠ – 2♦)</td><td>10-16 HCP, a good five-card (usually six-card) suit</td></tr>
<tr><td>Weak jump overcall (1♣ – 2♠)</td><td>A six-card suit, 6-10 HCP, like a weak two</td></tr>
<tr><td>1NT</td><td>15-18 HCP, balanced, with a stopper in opener's suit</td></tr>
</tbody>
</table>
<p>With 17+ and a hand too strong for a simple overcall, start with a takeout double and bid your suit afterwards.</p>

<h3>Examples (right-hand opponent has opened)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="RHO opens 1♦: bid 1♠"></div>
<p>10 HCP with a strong suit you would like partner to lead.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="RHO opens 1♠: bid 2♦"></div>
<p>12 HCP and a good six-card suit: sound enough for the two level.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="RHO opens 1♣: bid 1NT"></div>
<p>17 HCP, balanced, with the clubs well stopped.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="RHO opens 1♥: pass"></div>
<p>11 HCP, but the spades are poor and the values are scattered. An overcall would ask for a spade lead and could be doubled for a big penalty. Pass.</p>

<h3>Vulnerability and level</h3>
<p>The risk of an overcall is a penalty double. At the one level that risk is small; at the two level, especially vulnerable, you need a good suit that will take tricks even if the rest of partner's hand is poor. A two-level overcall in a five-card suit should be close to an opening bid with a strong suit.</p>

<h3>Advancing partner's overcall</h3>
<table>
<thead><tr><th>Advancer's bid</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Simple raise</td><td>6-9 with three or more trumps</td></tr>
<tr><td>Cue bid of opener's suit</td><td>A limit raise or better: 10+ with three or more trumps</td></tr>
<tr><td>Jump raise</td><td>Preemptive: weak, with four or more trumps</td></tr>
<tr><td>New suit</td><td>Natural, a good five-card suit or longer, not forcing</td></tr>
<tr><td>1NT</td><td>About 8-11 with a stopper in opener's suit</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="You are South: bid 2♠"></div>
<p>8 HCP and three-card support: raise to 2♠. Supporting partner at once makes it hard for the opponents to find their best contract.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="You are South: bid 2♥"></div>
<p>12 HCP and four trumps. The cue bid of 2♥ shows a limit raise or better; partner bids 2♠ with a minimum overcall, and you will invite with 3♠, or game if partner shows more.</p>
<div class="tip">Remember the overcall range is wide (8-16). Don't jump to game opposite an overcall just because you have an opening hand: cue bid first and let partner describe.</div>
<div class="warn">An overcall is not an opening bid. Don't overcall a weak suit just because you have 12 points; and don't fail to overcall a strong suit just because you have only 9.</div>
`,
    keyPoints: [
      'One-level overcall: 8-16 HCP, good 5+ suit. Two-level: 10-16, good 5+ (usually 6).',
      'Weak jump overcall: six-card suit, 6-10; 1NT overcall: 15-18 balanced with a stopper.',
      'Suit quality matters more than points, because the overcall also directs the lead.',
      'Advancer: simple raise 6-9 with 3+ support; cue bid = limit raise or better; jump raise is preemptive.',
      'With 17+ too strong to overcall, double first and bid your suit next.',
    ],
    quiz: [
      {
        q: 'Right-hand opponent opens 1♦. You hold ♠KQJ74 ♥83 ♦952 ♣A63. What do you bid?',
        options: ['Pass', '1♠', '2♠', 'Double'],
        answer: 1,
        explain: 'A good five-card suit with 10 HCP is a sound one-level overcall. 2♠ would be a weak jump overcall, and a double would suggest support for hearts and clubs.',
      },
      {
        q: 'RHO opens 1♥. You hold ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 HCP). What do you bid?',
        options: ['1♠', 'Pass', '1NT', 'Double'],
        answer: 1,
        explain: 'The spade suit is too weak to ask for a lead, the hand is not a 15-18 notrump, and you lack the shape for a double. Pass.',
      },
      {
        q: 'RHO opens 1♣. You hold ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 HCP). What do you bid?',
        options: ['1♦', '1NT', 'Double', '2NT'],
        answer: 1,
        explain: 'Balanced, 15-18, with a club stopper: 1NT describes the hand in one bid. Partner can use the same responses as over a 1NT opening.',
      },
      {
        q: 'LHO opened 1♥ and partner overcalled 1♠. You hold ♠K962 ♥83 ♦AQ74 ♣K105 (12 HCP). What do you bid?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'With 10+ and support, cue bid the opponents\' suit to show a limit raise or better. 3♠ would be preemptive, and 4♠ could be too high opposite a minimum overcall.',
      },
      {
        q: 'RHO opens 1♣. You hold ♠KJ10984 ♥73 ♦Q52 ♣43 (6 HCP). What do you bid?',
        options: ['Pass', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Six good spades and 6-10 HCP is a weak jump overcall. It takes away the opponents\' one-level bids and suggests a spade lead.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'Takeout doubles',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'How to use a double to ask partner to choose a suit, and how partner and the opening side respond.',
    body: `
<h3>What a takeout double says</h3>
<p>A double of an opening suit bid at a low level is not for penalty: it asks partner to bid. It shows <strong>12+ HCP, shortness in the opened suit and support (ideally four cards) for the unbid suits</strong>, especially the unbid major. The alternative is a strong hand, 17+, of any shape, which will bid again to show what it really has.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="RHO opens 1♦: double"></div>
<p>13 HCP, a singleton diamond and four cards in every other suit: the perfect shape.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="RHO opens 1♦: pass"></div>
<p>14 HCP but four diamonds and only three cards in each major. If you double, partner will bid hearts or spades with four cards, and you will play a 4-3 fit with the wrong hand. Pass.</p>

<h3>Responding to a takeout double (advancing)</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>West opened 1♥, partner doubled, East passed. You must bid, however weak: a pass would turn the double into a penalty double of 1♥. Prefer a major, and show strength by the level:</p>
<table>
<thead><tr><th>Advancer's points</th><th>Action</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Bid your best suit at the cheapest level</td></tr>
<tr><td>9-11</td><td>Jump in your best suit (invitational)</td></tr>
<tr><td>12+</td><td>Cue bid opener's suit (forcing), or bid game</td></tr>
<tr><td>6-10, balanced</td><td>1NT, with a stopper in opener's suit</td></tr>
<tr><td>Pass</td><td>Only with long, strong trumps in opener's suit (for penalty)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – double – pass: bid 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – double – pass: bid 2♠"></div>
<p>With 3 HCP, bid 1♠ without fear: partner knows you may have nothing. With 10 HCP, jump to 2♠ to invite game. With ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 HCP) bid 4♠ yourself, or cue bid 2♥ if you are unsure which game is best.</p>
<p>If the opener's partner bids (1♥ – double – 2♥), you are no longer forced to bid. Now a bid shows some values, about 6+, and a pass shows a weak hand.</p>

<h3>The doubler's rebid</h3>
<p>Advancer's cheapest-level bid may be made on nothing, so the doubler must not bid again with a minimum. With 12-15 pass; with about 16-18 raise one level; with 19+ jump. If the doubler bids a new suit, that shows the strong type of double (17+) with a long suit of their own.</p>

<h3>The opening side: redouble</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>When partner's opening is doubled, a <strong>redouble</strong> shows 10+ HCP. It tells opener that your side has the balance of strength, and it usually means you are looking for a chance to double the opponents for penalty. With a fit and a weaker hand, raise partner instead; with a new suit and less than 10, bid it.</p>

<h3>Doubles of preempts</h3>
<p>A double of a weak two or a three-level preempt is also for takeout: opening values, short in their suit, and ready for whatever suit partner bids. Partner may have to bid at the three level with a weak hand, so the doubler should be sound, not light.</p>
<div class="tip">The ideal takeout double is short in the opponent's suit and has four cards in each unbid major. The shorter you are in their suit, the lighter you can double.</div>
<div class="warn">Don't double with a long suit of your own and a medium hand: overcall instead. A takeout double followed by your own suit shows 17+ HCP.</div>
`,
    keyPoints: [
      'Takeout double: 12+ HCP, short in their suit, support for the unbid suits; or 17+ of any shape planning to bid again.',
      'Advancer must bid: 0-8 cheapest, 9-11 jump, 12+ cue bid or game; 1NT = 6-10 with a stopper.',
      'Pass the double only with long, strong trumps in their suit.',
      'Doubler passes a minimum response with 12-15; raises with 16-18; jumps with 19+.',
      'Redouble after a takeout double shows 10+ HCP.',
    ],
    quiz: [
      {
        q: 'RHO opens 1♣. You hold ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 HCP). What do you bid?',
        options: ['1♦', 'Double', '1♠', 'Pass'],
        answer: 1,
        explain: 'Short clubs and four cards in each other suit: an ideal takeout double. Whatever partner bids, you have support.',
      },
      {
        q: '1♥ – double – pass – ? You hold ♠Q8642 ♥753 ♦J4 ♣982 (3 HCP).',
        options: ['Pass', '1♠', '1NT', '2♠'],
        answer: 1,
        explain: 'You must bid: passing would leave 1♥ doubled for penalty and the opponents would probably make it with overtricks. Bid your best suit at the cheapest level.',
      },
      {
        q: '1♥ – double – pass – ? You hold ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 HCP).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 points: jump in your best suit to invite game. 1♠ could be made with nothing, so it would undersell this hand.',
      },
      {
        q: '1♠ – double – pass – ? You hold ♠K104 ♥82 ♦Q963 ♣J752 (6 HCP).',
        options: ['2♣', '2♦', '1NT', 'Pass'],
        answer: 2,
        explain: '1NT shows 6-10 with a spade stopper, and it lets you stay at the one level. Bidding a minor at the two level is a possible alternative, but 1NT describes this balanced hand best.',
      },
      {
        q: 'Partner opens 1♥ and RHO doubles. What does your redouble show?',
        options: ['A penalty double of 1♥', '10+ HCP', 'Heart support', 'A weak hand'],
        answer: 1,
        explain: 'Redouble shows 10+ HCP and says the hand belongs to your side. With support and fewer points you would raise instead.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'The hold-up play and entries',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'How to cut the defenders\' communications by holding up a stopper, and how to manage your own entries.',
    body: `
<h3>The hold-up</h3>
<p>Against notrump the defenders usually attack their long suit. If you win the first round with your only stopper and then lose the lead to the defender's partner, that player can return the suit and the long cards will run. A <strong>hold-up</strong> means refusing to win the first round (or rounds) of their suit, so that the defender who might gain the lead has no card of it left to return.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3NT by South. West leads the ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Count:</strong> ♠A, ♥AK, ♣AKQ: six sure winners. Diamonds provide four more once the ♦A is driven out. You must lose the lead once.</p>
<p><strong>Danger:</strong> West's spades. If you win the first spade and East takes the ♦A, East returns a spade and West takes four spade tricks: down one.</p>
<p><strong>The hold-up:</strong> play low on the ♠K. West continues with the ♠Q and you win the ace. East has followed twice and has no spades left. Now drive out the ♦A. As the cards lie East wins it, has no spade to return, and you make ten tricks. If West held the ♦A you would go down, but there was never a way to make the contract then: the hold-up is a free extra chance.</p>

<h4>How many times to hold up: the Rule of 7</h4>
<p>Subtract the number of cards you and dummy hold in the suit from seven. The result is the number of times to hold up. Here you have six spades between the hands, so 7 − 6 = 1: duck once and win the second round. That assumes the suit splits 5-2; watch the cards that fall and adjust.</p>

<h4>When not to hold up</h4>
<ul>
<li>When the defender who can gain the lead has no cards left in the suit anyway, or the suit cannot be run.</li>
<li>When holding up lets the defenders switch to a suit that is even more dangerous.</li>
<li>When you have two stoppers and the dangerous defender cannot get in twice. With A K x, you can often win the first trick and still have a stopper when they regain the lead.</li>
</ul>
<div class="tip">The Bath coup: with A J x in your hand, when West leads the king, play low. If West continues the suit, your A J take two tricks; if West switches, your A J still guard the suit: West cannot lead it again without giving you a trick.</div>

<h3>Managing entries</h3>
<p>An entry is a card that lets you win a trick in a particular hand. Many contracts are lost not for lack of winners but for lack of a way to reach them.</p>
<ul>
<li><strong>Count entries before trick one.</strong> Decide which hand will need to be on lead later, and win the first trick accordingly.</li>
<li><strong>Unblock:</strong> play the high cards from the shorter hand first. With ♦Q3 in hand and ♦AKJ105 in dummy (no other entries to dummy), cash the Q first, then lead the 3 to dummy.</li>
<li><strong>Duck</strong> the round you must lose while the long hand still has its high cards (see the lesson “Establishing long suits”).</li>
<li><strong>Overtake</strong> to change hands: with a singleton ♥Q in hand opposite ♥AKJ104 and no other entry to dummy, overtake the Q with the K and run the suit.</li>
<li><strong>Keep the late entry:</strong> when a suit must be set up in dummy, use your hand's entries first and save dummy's for the end.</li>
</ul>
<div class="warn">Don't win a trick in the wrong hand "because it doesn't matter". If you have not worked out which hand you need to be in later, it is too early to play to the trick.</div>
`,
    keyPoints: [
      'Hold up your stopper so that the defender who may gain the lead has no card of their suit left.',
      'Rule of 7: hold up 7 minus your combined cards in the suit (a guide, assuming a 5-2 split).',
      'Don\'t hold up when a switch is more dangerous or when you have enough stoppers.',
      'Unblock by playing the short hand\'s honours first; overtake to change hands.',
      'Plan entries before trick one and win the first trick in the right hand.',
    ],
    quiz: [
      {
        q: 'You and dummy hold six cards in the suit the defenders lead against 3NT, with only the ace as a stopper. How many times should you hold up?',
        options: ['Never', 'Once', 'Twice', 'Three times'],
        answer: 1,
        explain: 'Rule of 7: 7 − 6 = 1. If the suit is 5-2, winning the second round leaves the partner of the long-suit holder without a card to return.',
      },
      {
        q: 'What is the purpose of the hold-up play?',
        options: ['To make an overtrick', 'To exhaust the partner of the long-suit holder so they cannot return the suit', 'To find out who holds the missing honours', 'To save an entry to dummy'],
        answer: 1,
        explain: 'If the defender who gains the lead has no card of the long suit, the long cards in their partner\'s hand are cut off and may never be cashed.',
      },
      {
        q: 'In the deal above, why does the hold-up not help if West has the ♦A?',
        options: ['Because West can then cash the remaining spades', 'Because diamonds would block', 'Because East could ruff', 'It does help in that case too'],
        answer: 0,
        explain: 'The hold-up only exhausts East. If West, the long-spade hand, gains the lead with the ♦A, the established spades are cashed. No line can stop that; the hold-up wins whenever East has the ♦A.',
      },
      {
        q: 'You have ♦Q3 in hand and ♦AKJ105 in dummy, which has no other entry. How should you play diamonds?',
        options: ['Lead the 3 to the ace first', 'Cash the Q first, then lead the 3 to dummy', 'Lead the jack from dummy', 'Duck the first round'],
        answer: 1,
        explain: 'Play the high card from the short hand first. After the Q, the 3 takes you to dummy and you can run the rest of the suit there.',
      },
      {
        q: 'West leads the ♣K against 3NT and you hold ♣AJ4 in your hand. What is the Bath coup?',
        options: ['Win the ace at once', 'Play low, so that a club continuation runs into your A J', 'Play the jack', 'Discard from dummy'],
        answer: 1,
        explain: 'By ducking you invite West to continue the suit into your A J, giving you two tricks, and if West switches you still hold the suit.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'Trump management',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'When to draw trumps at once, when to delay, how to use ruffs in the short hand, and how to keep control of the trump suit.',
    body: `
<h3>The default: draw trumps</h3>
<p>Once you are declarer in a suit contract, the defenders' trumps are a threat to your winners: every side-suit winner you cash could be ruffed. So the normal plan is to <strong>draw trumps early</strong>, counting the opponents' trumps as they fall. If they hold five trumps and both follow to two rounds, one is still out; if one defender shows out, you know the exact split.</p>

<h3>Reasons to delay drawing trumps</h3>
<ol>
<li><strong>You need dummy's trumps for ruffing.</strong> Ruffing losers in the short-trump hand creates extra tricks. If drawing trumps would use up dummy's trumps, take the ruffs first (see the 4♠ deal in the lesson “Planning the play”).</li>
<li><strong>You must discard losers quickly.</strong> If the defenders hold a trump honour and will win the lead when you play trumps, make sure they cannot then cash enough tricks to beat you.</li>
<li><strong>You need trumps as entries</strong>, for example to reach a long side suit or to take repeated finesses.</li>
<li><strong>You plan a crossruff</strong>, using both hands' trumps separately.</li>
</ol>

<h3>Discarding before drawing trumps</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ by South. West leads the ♦K."></div>
<p><strong>Count losers:</strong> the ♠A, two diamonds after the ♦A has been knocked out at trick one, and the ♣A (the third round of clubs can be ruffed in dummy). Four losers.</p>
<p>If you play a trump now, the defender who wins the ♠A cashes two diamond tricks, and with the ♣A still to come you are down. Instead, win the ♦A and immediately play the ♥A, ♥K and ♥Q, throwing a diamond from your hand on the third heart. Only then lead trumps. You lose the ♠A, one diamond and the ♣A.</p>
<p>The risk is that someone ruffs the third heart. That happens only if hearts split 5-2 or worse <em>and</em> the defender with the doubleton has a trump to ruff with, a far smaller risk than the certain defeat of drawing trumps first.</p>
<div class="tip">Ask: "When I lose the lead in trumps, how many tricks can the defenders cash?" If the answer is too many, get rid of a loser first.</div>

<h3>Ruffing: short hand gains, long hand doesn't</h3>
<p>With five trumps in hand and three in dummy, your five trumps will make five tricks anyway. A ruff in your hand just uses one of them. A ruff in dummy is an extra trick, because dummy's small trumps would otherwise never win a trick. Plan your ruffs in the <strong>short</strong> trump hand.</p>
<p>Ruffing in the long hand is useful for other reasons: to establish a long suit in dummy by ruffing out the opponents' cards, or to shorten your trumps for an endplay or trump coup.</p>

<h3>The crossruff</h3>
<p>When both hands have a short suit, you can ruff one hand's losers with the other hand's trumps, back and forth, without drawing trumps at all. Rules for a crossruff:</p>
<ul>
<li><strong>Cash your side-suit winners first.</strong> Otherwise the defenders will discard from those suits during the crossruff and later ruff your winners.</li>
<li>Ruff high when an overruff is possible, so the defenders cannot score their small trumps cheaply.</li>
<li>Count: the crossruff should produce exactly the tricks you need.</li>
</ul>

<h3>Keeping control</h3>
<p>If the defenders keep leading a suit you must ruff in your long hand, you may end up with fewer trumps than a defender: you have lost <strong>trump control</strong>, and that defender's remaining trumps take tricks while their partner's long suit runs. Defences against the force:</p>
<ul>
<li>Discard a loser instead of ruffing (lose a trick you were going to lose anyway), so that the next force comes when dummy can ruff.</li>
<li>Draw the opponents' small trumps early, even if you leave their top trump out, so that the next force does not cost you control.</li>
<li>Prefer a contract where the short-trump hand can take the force.</li>
</ul>
<div class="warn">Don't waste two of your trumps to draw one of theirs when their last trump is the master. It is a trick for them anyway; let them take it when they choose, and use your trumps to control the play.</div>
`,
    keyPoints: [
      'Normally draw trumps early, counting the opponents\' trumps as they fall.',
      'Delay when you need dummy\'s trumps for ruffs, must discard losers before losing the lead, or need trump entries.',
      'Ruffs in the short-trump hand gain tricks; ruffs in the long hand usually do not.',
      'Before a crossruff, cash your side-suit winners.',
      'Don\'t spend two trumps to draw the opponents\' master trump.',
    ],
    quiz: [
      {
        q: 'When is it wrong to draw trumps immediately?',
        options: ['Never: always draw trumps first', 'When you need dummy\'s trumps to ruff your losers', 'When the opponents have five trumps', 'When you have nine trumps'],
        answer: 1,
        explain: 'Drawing trumps would use dummy\'s trumps as well as the opponents\'. Take the ruffs in the short hand first, then draw the rest.',
      },
      {
        q: 'In the 4♠ deal above, what should declarer do after winning the ♦A?',
        options: ['Lead the ♠K', 'Cash three hearts, discarding a diamond', 'Lead a club towards the ♣Q', 'Duck a diamond'],
        answer: 1,
        explain: 'The defenders hold the ♠A and have two diamond tricks ready. Discard a diamond on the third heart first, and only then play trumps.',
      },
      {
        q: 'The opponents have one trump left: the ace. You have plenty of trumps and winners. What should you usually do?',
        options: ['Lead trumps to force the ace out at once', 'Leave it and play your side suits; it is their trick anyway', 'Ruff something in dummy', 'Concede the rest'],
        answer: 1,
        explain: 'Drawing it costs two of your trumps (one from each hand) for a trick they will always win. Let them ruff with it if they want; your trumps stay in control.',
      },
      {
        q: 'You are about to crossruff. What should you do first?',
        options: ['Draw two rounds of trumps', 'Cash your side-suit winners', 'Ruff with your lowest trumps', 'Lose a trick'],
        answer: 1,
        explain: 'During a crossruff the defenders discard. If they discard a side suit you have not cashed, they can later ruff your winners.',
      },
      {
        q: 'You have five trumps in hand and three in dummy. Which ruff creates an extra trick?',
        options: ['Ruffing in your hand', 'Ruffing in dummy', 'Both', 'Neither'],
        answer: 1,
        explain: 'Your five trumps take five tricks with or without ruffs. Dummy\'s three small trumps only win tricks by ruffing.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'Defensive signals',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'How defenders use the size of the cards they play to show attitude, count and suit preference.',
    body: `
<h3>Talking with your cards</h3>
<p>Defenders cannot see each other's hands, but they may legally choose <em>which</em> card to play. When you are not trying to win the trick, the spot card you play sends a message. Standard signals have three types; the situation tells partner which one you are giving.</p>
<table>
<thead><tr><th>Signal</th><th>When</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Attitude</td><td>Partner leads a suit; your first discard</td><td>High encourages, low discourages</td></tr>
<tr><td>Count</td><td>Declarer leads a side suit (no count in trumps)</td><td>High-low = even number, low-high = odd</td></tr>
<tr><td>Suit preference</td><td>When you lead a suit for partner to ruff</td><td>High card asks for the higher-ranking of the other suits, low for the lower; a middle card — no preference</td></tr>
</tbody>
</table>

<h3>Attitude</h3>
<p>Against 4♥, partner leads the ♠A (from AK) and dummy has ♠8 6 4.</p>
<ul>
<li>With ♠Q 9 3, play the 9: you like spades, because your queen will win the third round.</li>
<li>With ♠7 5 2, play the 2: you have nothing in spades, so partner should consider a switch.</li>
<li>With a doubleton ♠9 3, play the 9 and then the 3: the high-low asks partner to continue, and you will ruff the third round.</li>
</ul>
<p>Discards work the same way: the first discard shows attitude. Throwing the ♣9 says "I like clubs"; throwing the ♦2 says "I don't want diamonds". Only discard from a suit you can spare. If you have no spot card of 6 or higher to spare in the suit you want, discard your lowest card from a suit you don't want instead.</p>

<h3>Count</h3>
<p>When declarer plays a suit, show how many cards you hold in it: high-low with an even number (two or four), lowest first with an odd number (three). Count lets partner work out declarer's distribution, and above all it tells partner when to take an ace.</p>
<table>
<thead><tr><th>Seat</th><th>Diamonds</th></tr></thead>
<tbody>
<tr><td>North (dummy, no outside entry)</td><td>K Q J 10 5</td></tr>
<tr><td>East (you)</td><td>A 7 3</td></tr>
<tr><td>West and South</td><td>9 8 6 4 2 between them</td></tr>
</tbody>
</table>
<p>Declarer leads diamonds towards dummy. You want to win your ace on the round when declarer plays their <em>last</em> diamond, cutting declarer off from the rest of dummy's suit. If partner starts with the 9 (high: an even number, here two), declarer has three: duck twice and take the third round. If partner plays the 4 first (low: odd, here three), declarer has two: take the second round. Without partner's count you would be guessing.</p>

<h3>Suit preference</h3>
<p>Sometimes attitude and count mean nothing, and then the size of the card points to another suit. The classic case is a ruff. Spades are trumps and you lead a heart for partner to ruff. The other suits are diamonds and clubs. Lead a <strong>high</strong> heart to ask for a diamond return (the higher-ranking of the two) and a <strong>low</strong> heart to ask for a club. If you hold the ♦A, lead your highest heart; partner ruffs, returns a diamond to your ace, and you give partner a second ruff.</p>
<p>With no preference, lead a middle card. Some partnerships also use suit preference when returning partner's suit; the bots here use it only when giving a ruff.</p>

<h3>Good habits</h3>
<ul>
<li>Signal on partner's lead first by attitude; on declarer's lead by count; use suit preference only when the situation is clear.</li>
<li>Don't signal with a card that could win a trick later. From Q J 10 9 7, the 7 may be enough to encourage.</li>
<li>Signal in an even tempo: do your thinking when dummy comes down, not in the middle of a trick.</li>
<li>Don't give count when it can only help declarer, for example when declarer is guessing how to play a suit and the count would be of no use to partner. The bots here always give count when declarer plays a side suit, so you can practise reading it.</li>
</ul>
<div class="warn">A signal is information, not a command. Partner combines it with what they can see in dummy and their own hand, and may have good reasons to do something else.</div>
`,
    keyPoints: [
      'Attitude on partner\'s lead and on your first discard: high encourages, low discourages.',
      'Count when declarer leads a side suit: high-low shows an even number, low-high an odd number.',
      'Use count to know when to take your ace against a long suit in dummy with no entries.',
      'Suit preference: a high card asks for the higher-ranking other suit, a low card for the lower; a middle card shows no preference.',
      'Never waste a potential trick-taker just to signal.',
    ],
    quiz: [
      {
        q: 'Partner leads the ♠A (from AK) against 4♥. Dummy has ♠8 6 4. You hold ♠Q 9 3. Which card do you play?',
        options: ['♠Q', '♠9', '♠3', 'It does not matter'],
        answer: 1,
        explain: 'The 9 encourages. Partner continues with the king, and your queen takes the third round. Playing the 3 would tell partner you have nothing in spades.',
      },
      {
        q: 'Declarer leads a suit in which you hold 8 3. Which card should you play first to show your count?',
        options: ['The 8', 'The 3', 'Either', 'Neither: never give count'],
        answer: 0,
        explain: 'High-low shows an even number. Play the 8 now and the 3 next time; partner will know you started with two (or four).',
      },
      {
        q: 'Your first discard, using standard signals, is the ♣2. What does it say?',
        options: ['I like clubs', 'I don\'t want clubs', 'I have two clubs', 'Lead a diamond'],
        answer: 1,
        explain: 'The first discard shows attitude. A low card discourages the suit discarded.',
      },
      {
        q: 'Dummy has ♦K Q J 10 5 and no outside entry; you hold ♦A 7 3. Declarer leads diamonds and partner plays the 9 and then the 4. When should you take your ace?',
        options: ['On the first round', 'On the second round', 'On the third round', 'Never'],
        answer: 2,
        explain: 'Partner\'s high-low shows an even number, two, so declarer started with three. Win the ace on the third round, when declarer has no diamond left to reach dummy.',
      },
      {
        q: 'Spades are trumps. You lead a heart for partner to ruff and you want a diamond back. From ♥9 8 2, which heart do you lead?',
        options: ['♥9', '♥8', '♥2', 'It does not matter'],
        answer: 0,
        explain: 'This is a suit preference situation. A high card asks for the higher-ranking of the remaining side suits (diamonds rather than clubs).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'Negative doubles',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'How responder uses a double after an overcall to show the unbid major, and how the penalty pass and reopening double work together.',
    body: `
<h3>The problem</h3>
<p>Partner opens 1♦ and RHO overcalls 1♠. You hold four hearts and 9 HCP. A 2♥ bid would promise five hearts and 10+ points, so you cannot bid it, but you do not want to lose a possible heart fit. The answer is the <strong>negative double</strong>: after partner's opening and an overcall up to and including 2♠, a double by responder is for takeout and shows the unbid major(s).</p>

<h3>What the double shows</h3>
<p>Strength: 6+ HCP when the overcall is at the one level, 8+ when it is at the two level. Shape:</p>
<table>
<thead><tr><th>Auction</th><th>Responder's double shows</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Both majors (usually four of each)</td></tr>
<tr><td>1♣ or 1♦ – (1♥) – X</td><td>Exactly four spades (1♠ would show five or more)</td></tr>
<tr><td>1♣ or 1♦ – (1♠) – X</td><td>Four or more hearts (2♥ would show five and 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>The minors, or values without a clear bid</td></tr>
<tr><td>1♥ – (2♣ or 2♦) – X</td><td>Four spades, 8+ HCP</td></tr>
<tr><td>1♠ – (2♣ or 2♦) – X</td><td>Four or more hearts, 8+ HCP</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: double"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: double"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: double"></div>
<p>The first hand shows its four hearts. The second has exactly four spades and 7 HCP: double rather than 1♠. The third shows four spades and enough strength for the two level.</p>

<h3>Opener's rebid after a negative double</h3>
<ul>
<li>With four cards in the major partner showed, bid it: at the cheapest level with a minimum, or jump with extra values (about 16-18).</li>
<li>Otherwise make your normal rebid: rebid a six-card suit, bid a second suit, or bid notrump with a stopper in the overcaller's suit.</li>
<li>With a long, strong holding in the overcaller's suit, you may pass the double for penalties.</li>
</ul>

<h3>The penalty pass and the reopening double</h3>
<p>Because responder's double is for takeout, responder cannot double for penalty with a strong holding in the overcaller's suit. Instead, responder <strong>passes</strong> and waits. When opener is short in the overcalled suit, opener should reopen with a double, which responder converts to penalties by passing.</p>
<div class="hand" data-cards="S:K5 H:73 D:AJ84 C:KQ1093" data-label="1♥ – (2♣) – ?: pass"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Opener (North): reopening double"></div>
<p>South's ♣KQ1093 sit over East's clubs and 2♣ doubled is likely to go down several tricks. North, with a singleton club, reopens with a double because partner's pass may be exactly this kind of hand. With length in the overcaller's suit, opener should be more careful about reopening: then partner is unlikely to be waiting to penalise.</p>
<div class="tip">After an overcall, a new suit by responder is still natural and forcing, but it shows five cards when a negative double was available to show four.</div>
<div class="warn">A negative double is not a penalty double. If you want to punish the overcall, pass and hope partner reopens.</div>
`,
    keyPoints: [
      'After partner opens and RHO overcalls (up to 2♠), responder\'s double is for takeout.',
      'It shows the unbid major(s): 6+ HCP at the one level, 8+ at the two level.',
      '1♣/1♦ – (1♥) – X shows exactly four spades; 1♠ would show five.',
      'With strong length in the overcaller\'s suit, responder passes; opener reopens with a double when short in that suit.',
      'Opener rebids naturally, jumping in partner\'s major with extra values.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? You hold ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 HCP).',
        options: ['2♥', 'Double', '1NT', 'Pass'],
        answer: 1,
        explain: '2♥ would promise five hearts and 10+ points. The negative double shows four or more hearts with 6+ and keeps the heart fit in view.',
      },
      {
        q: '1♣ – (1♥) – ? You hold ♠KJ752 ♥84 ♦Q63 ♣J95 (7 HCP).',
        options: ['Double', '1♠', '1NT', '2♠'],
        answer: 1,
        explain: 'After a 1♥ overcall the double shows exactly four spades, so with five spades bid 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? You hold ♠K5 ♥73 ♦AJ84 ♣KQ1093 (13 HCP).',
        options: ['Double', 'Pass', '3NT', '2NT'],
        answer: 1,
        explain: 'You would love to double for penalty, but your double would be negative. Pass and expect partner to reopen with a double when they are short in clubs; you will pass that.',
      },
      {
        q: 'You opened 1♥ with ♠A863 ♥AQJ74 ♦K52 ♣6. LHO overcalled 2♣ and it went pass, pass back to you. What do you do?',
        options: ['Pass', 'Double', '2♥', '2♠'],
        answer: 1,
        explain: 'With a singleton in the overcaller\'s suit, reopen with a double. Partner may have passed with a strong club holding, and will pass for penalties; otherwise they bid their best suit.',
      },
      {
        q: 'Up to what level of overcall does responder\'s double remain a negative (takeout) double in this system?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Negative doubles apply through 2♠. Above that, a double is still often used for takeout by agreement, but this system defines it through 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Recognising slam and Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'How to tell when slam is possible, and how to use Blackwood to make sure you are not missing two aces.',
    body: `
<h3>Why slams matter</h3>
<p>A small slam earns 500 extra points not vulnerable and 750 vulnerable; a grand slam 1000 or 1500. Bidding a makeable slam that others miss is worth a lot; bidding one that fails costs about as much. You need two things: enough <strong>tricks</strong> (strength, fit and shape) and enough <strong>controls</strong> (the opponents must not be able to cash two quick tricks).</p>

<h3>Signs of slam</h3>
<ul>
<li><strong>Combined strength:</strong> about 33 points for a small slam and 37 for a grand, with balanced hands. With a good trump fit and shape, fewer will do.</li>
<li><strong>Partner shows extra values</strong> while you also have a good hand: a jump shift, a reverse, a strong 2♣, a jump raise opposite your opening, a 2NT Jacoby raise opposite extras.</li>
<li><strong>A big fit</strong> (nine or ten trumps) plus a source of tricks such as a long side suit.</li>
<li><strong>Controls:</strong> aces, kings, and shortness in the side suits.</li>
</ul>

<h3>The plan</h3>
<ol>
<li>Agree a trump suit (or decide on notrump).</li>
<li>Establish that the combined strength is enough.</li>
<li>Check the controls, usually with Blackwood.</li>
<li>Bid the slam, or stop at the five level.</li>
</ol>

<h3>Blackwood</h3>
<p>Once a suit is agreed, a bid of 4NT asks partner how many aces they hold:</p>
<table>
<thead><tr><th>Reply</th><th>Aces</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 or 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>The auction always makes clear whether 5♣ means 0 or 4. If two aces are missing, sign off in five of your trump suit; partner must pass. If one is missing, bid the small slam. If none is missing and you are interested in a grand slam, bid <strong>5NT</strong> to ask for kings: 6♣ = 0 or 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5NT promises that the partnership holds all four aces.</p>
<p>The Blackwood bidder is the captain: the replier just answers and then accepts the decision.</p>

<h3>An example</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>North opens 1♠ with 18 HCP. South, with 15 HCP and four spades, bids 2NT, the Jacoby raise: game forcing with support. North's 3♠ is the standard way to show extra values with no singleton or void. South can now count about 33 points together and a nine-card fit, so slam is likely. 4NT asks for aces; 5♥ shows two. With the ♥A in hand, South knows only one ace is missing and bids 6♠.</p>
<p>In play, the ♣A is the only loser: declarer draws trumps, cashes the hearts, and plays the ♦A, a diamond to the king and dummy's ♦Q, discarding one of North's clubs.</p>

<h3>Blackwood's limits</h3>
<p>Blackwood counts aces; it does not tell you <em>which</em> aces, or whether a side suit has two fast losers. Do not use it:</p>
<ul>
<li>with a void (partner's ace may be in your void suit, where it is wasted);</li>
<li>with two small cards in an unbid suit (partner may have neither the ace nor the king of that suit);</li>
<li>when a five-level reply could carry you past your safe contract, as often happens with clubs as trumps.</li>
</ul>
<p>In those cases control-showing cue bids are the tool; see the lesson “Controls and cue bids: when not to use Blackwood”.</p>
<div class="warn">4NT is not always Blackwood. When no suit has been agreed and partner's last bid was a natural notrump (1NT – 4NT, 2NT – 4NT), 4NT is quantitative: it invites 6NT. To ask for aces over partner's notrump, use Gerber 4♣.</div>
`,
    keyPoints: [
      'Small slam needs about 33 combined points (grand about 37); fit and shape can reduce that.',
      'Establish trumps and strength first, then check controls.',
      'Blackwood replies: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; 5NT then asks for kings and promises all the aces.',
      'Two aces missing: stop at five of the agreed suit.',
      'Don\'t use Blackwood with a void or with two quick losers in an unbid suit.',
    ],
    quiz: [
      {
        q: 'Partner bids 4NT (Blackwood) and you hold one ace. What do you reply?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ shows 0 or 4, 5♦ one, 5♥ two, 5♠ three.',
      },
      {
        q: 'You bid 4NT and partner replies 5♥ (two aces). You hold the other two aces. What now?',
        options: ['Sign off at five of the trump suit', 'Bid the small slam, or 5NT to ask for kings if a grand is possible', 'Pass 5♥', 'Bid 6NT whatever the suit'],
        answer: 1,
        explain: 'No ace is missing, so the small slam is safe from two quick aces. If the hands might produce thirteen tricks, 5NT asks for kings and tells partner all the aces are held.',
      },
      {
        q: 'Spades are agreed. You bid 4NT and partner replies 5♦ (one ace). You hold one ace. What do you do?',
        options: ['Bid 6♠', 'Bid 5♠', 'Bid 5NT', 'Pass'],
        answer: 1,
        explain: 'Two aces are missing, so the opponents could cash two tricks at once. Sign off in 5♠; partner must pass.',
      },
      {
        q: 'Two balanced hands with 33 HCP between them and no trump fit. Which contract?',
        options: ['3NT', '4NT', '6NT', '7NT'],
        answer: 2,
        explain: 'About 33 combined HCP gives a good play for twelve tricks in notrump. 37 would be needed for a grand.',
      },
      {
        q: 'Partner replies 5♣ to your Blackwood 4NT. What does it show?',
        options: ['Clubs', 'No aces or all four', 'One ace', 'Three aces'],
        answer: 1,
        explain: '5♣ is 0 or 4 aces. The bidding or your own hand will make clear which: if you hold an ace yourself, partner cannot have four.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Gerber and the quantitative 4NT',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'How to explore slam after a notrump opening: asking for aces with Gerber and inviting with a quantitative 4NT.',
    body: `
<h3>Slam after a notrump opening</h3>
<p>When partner opens 1NT (15-17) or 2NT (20-21), you know their strength within two or three points, so you can often add up the points and decide on your own. Two tools help:</p>
<ul>
<li><strong>4NT, quantitative:</strong> "partner, bid 6NT if you are at the top of your range".</li>
<li><strong>4♣, Gerber:</strong> "partner, how many aces do you have?"</li>
</ul>

<h3>The quantitative 4NT</h3>
<p>A direct raise of 1NT to 4NT is not Blackwood. It shows 16-17 points, so the total is 31-34, on the edge of the 33 needed for slam. Opener passes with a minimum (15) and bids 6NT with a maximum (17); with 16, opener uses judgement, accepting with a good five-card suit or good intermediate cards.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Partner opened 1NT: bid 4NT"></div>
<p>16 HCP, balanced. Bid 4NT. With 18-19 you would bid 6NT directly, since even a minimum opener gives 33.</p>
<p>Over 2NT (20-21), 4NT shows 11-12 and asks opener to bid 6NT with a maximum.</p>
<table>
<thead><tr><th>Responder after</th><th>3NT</th><th>4NT (invite)</th><th>6NT</th></tr></thead>
<tbody>
<tr><td>1NT (15-17)</td><td>10-15</td><td>16-17</td><td>18-19</td></tr>
<tr><td>2NT (20-21)</td><td>4-10</td><td>11-12</td><td>13-14</td></tr>
</tbody>
</table>

<h3>Gerber</h3>
<p>A jump to 4♣ directly over partner's 1NT or 2NT opening (or over 2♣ – 2♦ – 2NT) asks for aces:</p>
<table>
<thead><tr><th>Reply to 4♣</th><th>Aces</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 or 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4NT</td><td>3</td></tr>
</tbody>
</table>
<p>After the reply, 5♣ by the asker asks for kings on the same pattern (5♦ = 0 or 4, 5♥ = 1, 5♠ = 2, 5NT = 3). Any other bid places the contract; a 4NT bid by the asker is a sign-off, and if partner's reply was 4NT, the asker can simply pass.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Partner opened 1NT: bid 4♣"></div>
<p>16 HCP (31-33 in total) and six strong spades: the hand is rich in tricks, but you hold no aces. The question is aces, so bid 4♣. Over 4♠ (two aces), pass and play in 4♠. Over 4NT (three aces), bid 6♠.</p>

<h3>Which to use?</h3>
<ul>
<li>Use the quantitative 4NT when the question is <strong>strength</strong>: you are not sure the combined points reach 33.</li>
<li>Use Gerber when the question is <strong>aces</strong>: with a trick-rich (unbalanced) hand, where strength is not the problem. With balanced hands and 33+ combined HCP, two aces cannot be missing, so you simply count points.</li>
<li>With a long suit opposite 1NT, transfer first (or bid naturally) to set the suit, then use the slam tools. Counting tricks matters more than counting points when you have a long, strong suit.</li>
</ul>
<div class="tip">Count to 33 for a small slam in notrump and 37 for a grand. With a source of tricks, such as a solid five- or six-card suit, you need a little less.</div>
<div class="warn">Don't confuse 1NT – 4NT (quantitative) with Blackwood. If you want to know about aces opposite partner's notrump, bid 4♣.</div>
`,
    keyPoints: [
      '1NT – 4NT = 16-17, quantitative: opener bids 6NT with a maximum.',
      '2NT – 4NT = 11-12, quantitative.',
      'Gerber 4♣ over 1NT or 2NT: 4♦ 0/4, 4♥ 1, 4♠ 2, 4NT 3; 5♣ then asks for kings.',
      'Use the quantitative 4NT when the question is strength, Gerber when it is aces.',
      'Notrump slams need about 33 points (small) or 37 (grand).',
    ],
    quiz: [
      {
        q: 'Partner opens 1NT and you bid 4♣ (Gerber). Partner holds one ace. What is the reply?',
        options: ['4♦', '4♥', '4♠', '4NT'],
        answer: 1,
        explain: 'Gerber replies step up from 4♦: 4♦ = 0 or 4, 4♥ = 1, 4♠ = 2, 4NT = 3.',
      },
      {
        q: 'What does 1NT – 4NT mean?',
        options: ['Blackwood', 'A quantitative invitation to 6NT with 16-17', 'A sign-off', 'Gerber'],
        answer: 1,
        explain: 'No suit has been agreed and partner bid notrump naturally, so 4NT invites slam. Opener bids 6NT with a maximum and passes with a minimum.',
      },
      {
        q: 'You opened 1NT with 17 HCP. Partner raises to 4NT. What do you do?',
        options: ['Pass', 'Bid 5♥ to show two aces', 'Bid 6NT', 'Bid 5NT'],
        answer: 2,
        explain: '17 is the top of the range: 17 + 16-17 = 33-34. Accept the invitation with 6NT.',
      },
      {
        q: 'Partner opens 2NT. You have a balanced 12 HCP. What do you bid?',
        options: ['3NT', '4NT', '6NT', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Invite with 4NT (11-12); partner bids 6NT with 21.',
      },
      {
        q: '1NT – 4♣ – 4♠ (two aces). You have no aces. What do you bid?',
        options: ['6NT', '4NT', '5♣', '7NT'],
        answer: 1,
        explain: 'Two aces are missing, so slam could lose the first two tricks. 4NT after the Gerber reply is a sign-off.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'The Rule of 11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'How a fourth-best lead lets both defenders and declarer work out how many higher cards each hand holds.',
    body: `
<h3>The rule</h3>
<p>When partner leads their <strong>fourth-best</strong> card, subtract its rank from 11. The answer is the number of cards higher than the card led that are held by the <em>other three hands</em>: dummy, you and declarer. You can see dummy and your own hand, so you can work out how many higher cards declarer has.</p>

<h3>Why it works</h3>
<p>For a card of rank r, there are 14 − r cards ranked above it (the ace counts as 14). If the lead is fourth best, the leader holds exactly three of them. That leaves 14 − r − 3 = 11 − r for the other three hands.</p>

<h3>A defensive example</h3>
<table>
<thead><tr><th>Seat</th><th>Diamonds</th></tr></thead>
<tbody>
<tr><td>North (dummy)</td><td>Q 10 4</td></tr>
<tr><td>West (partner, leads the 7)</td><td>A J 9 7 5</td></tr>
<tr><td>East (you)</td><td>K 8 2</td></tr>
<tr><td>South (declarer)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Against 3NT partner leads the ♦7. 11 − 7 = 4 cards higher than the 7 in the other three hands. Dummy has two (Q, 10) and you have two (K, 8). So declarer has none and cannot beat the 7.</p>
<p>When dummy plays low, you can play the 2 and let partner's 7 win the trick. Partner keeps the lead and continues the suit through dummy's Q 10 to your K 8, and the defence takes every diamond trick. If you play the K instead, dummy's Q 10 will take a trick when the suit is continued.</p>

<h3>Declarer can use it too</h3>
<p>Suppose West leads the ♠7 (fourth best) against your 3NT. Dummy has ♠A 10 5 and you hold ♠K 9 3. 11 − 7 = 4 higher cards in North, East and South; you can see all four (A, 10, K, 9). East has no spade higher than the 7. So you can play low from dummy and win cheaply with the 9, keeping the A and K as stoppers.</p>

<h3>The lowest card shows length</h3>
<p>If partner leads the 2 as fourth best, they cannot have a fifth card lower than it: they have exactly four cards in the suit. Leading a 3 with the 2 visible elsewhere tells the same story. That helps you count declarer's hand.</p>

<h3>When the rule fails</h3>
<p>The Rule of 11 only applies to genuine fourth-best leads. It does not apply to leads from sequences (the K from KQJ), to top-of-nothing or doubleton leads, or to leads in partner's suit from an honour with small cards. If the arithmetic gives an impossible answer (for example, declarer would need a negative number of higher cards), the lead was not fourth best, and that tells you something too.</p>
<div class="tip">Do the subtraction as soon as dummy comes down, before third hand plays. Then you know immediately whether you need to play high or can let partner's card win.</div>
<div class="warn">Don't apply the rule mechanically against suit contracts when partner might be leading from a short suit. Use it when the lead is clearly fourth best from length, which is most often against notrump.</div>
`,
    keyPoints: [
      'With a fourth-best lead, 11 minus the card\'s rank = higher cards in the other three hands.',
      'Subtract what you see in dummy and your own hand to find how many declarer holds.',
      'Declarer can apply the same arithmetic to the defenders\' hands.',
      'A fourth-best 2 shows exactly four cards.',
      'The rule only works for genuine fourth-best leads.',
    ],
    quiz: [
      {
        q: 'Partner leads the 7, fourth best. How many cards higher than the 7 are held by dummy, you and declarer together?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. There are seven cards above the 7 (8, 9, 10, J, Q, K, A) and partner holds three of them.',
      },
      {
        q: 'Partner leads the ♥6 (fourth best) against 3NT. Dummy has ♥K 9 3 and you hold ♥A 10 4. How many hearts higher than the 6 does declarer hold?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. Dummy has two higher (K, 9) and you have two (A, 10), so declarer has one.',
      },
      {
        q: 'Partner leads the ♣2 against 3NT, playing fourth-best leads. How many clubs does partner have?',
        options: ['Three', 'Exactly four', 'Five or more', 'Impossible to tell'],
        answer: 1,
        explain: 'The 2 is the lowest card, so there is no card below it: as fourth best it shows exactly four clubs.',
      },
      {
        q: 'You are declarer in 3NT. West leads the ♠7 (fourth best). Dummy has ♠A 10 5 and you hold ♠K 9 3. How many spades higher than the 7 does East hold?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 higher cards in North, East and South, and you can see all four (A, 10, K, 9). East has none, so you can win cheaply with the 9.',
      },
      {
        q: 'When does the Rule of 11 not apply?',
        options: ['Against notrump', 'When the lead is not fourth best, for example the top of a sequence', 'When dummy has an honour', 'When you have a singleton'],
        answer: 1,
        explain: 'The arithmetic relies on the leader holding exactly three higher cards. Sequence leads, top of nothing and similar leads break that assumption.',
      },
    ],
  },
];
