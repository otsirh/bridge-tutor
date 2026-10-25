// Lessons on competing against the opponents' 1NT and preempts, and on
// responding when they double our opening. Every hand and auction is what the
// bots bid (test/lesson-auctions.test.ts).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Competing over their 1NT',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'When to double or overcall the opponents\' strong 1NT, when to stay out, and how partner advances.',
    body: `
<h3>A strong, precise opening</h3>
<p>When an opponent opens 1NT they show 15-17 HCP and a balanced hand. That leaves at most 25 HCP for the other three players, and the opener's partner knows almost exactly what the partnership holds. Your side seldom has a game, so you bid for one of two reasons: with a strong hand, to double them for penalties; with a long suit, to compete for the partscore. A bid at the two level also takes away the opponents' Stayman and transfers.</p>

<h3>What the bots play</h3>
<table>
<thead><tr><th>Call over 1NT</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>Double</td><td>15+ HCP, any shape: for penalties. Partner passes</td></tr>
<tr><td>2♣ / 2♦</td><td>Natural: 8-15 HCP and a six-card or longer suit</td></tr>
<tr><td>2♥ / 2♠</td><td>Natural: 8-15 HCP and a six-card suit, or a good five-card suit (two of the top three honours or three of the top five)</td></tr>
<tr><td>Pass</td><td>Everything else</td></tr>
</tbody>
</table>
<p>The suit you bid must be your longest. Jumps and 2NT are not used.</p>
<p>Tournament players often use a convention here so that they can also show two-suited hands: Landy and Cappelletti use 2♣ or 2♦ to show both majors, and DONT uses the double for any one-suited hand. They are worth learning once you have a regular partner. The bots use the natural method above, and the tutor judges your calls by it.</p>

<h3>Examples</h3>
<p>West has opened 1NT and you are North, in the direct seat.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1NT – ?: bid 2♠"></div>
<p>10 HCP and six strong spades: compete. Partner knows what you hold and can raise with support.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1NT – ?: bid 2♠"></div>
<p>Only five spades, but K-Q-10-9 is a good suit, and a major: worth a bid at the two level.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1NT – ?: bid 2♦"></div>
<p>13 HCP and six diamonds. A minor needs six cards.</p>

<h3>The penalty double</h3>
<p>A double of 1NT shows 15+ HCP, as much as the opener. Your side holds at least half the deck, the opener will often have to play with a weak dummy, and in the direct seat you will be on lead with your good hand. Partner passes, whatever they hold: in this system the double is for penalties, and the advancer leaves it in.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1NT – ?: double"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1NT – ?: double"></div>
<p>The first hand is the classic penalty double: 17 HCP and nothing to bid. The second doubles too: with 15+ HCP the bots double whatever their shape, rather than bid 2♠. The spades will take tricks in defence as well, since you lead them.</p>

<h3>When to stay out</h3>
<ul>
<li><strong>A balanced hand with fewer than 15 HCP.</strong> Even 13 or 14 is not enough to double, and there is nothing to bid.</li>
<li><strong>A five-card minor, or a poor five-card major.</strong> At the two level the opponents can double you, and a minor needs six cards.</li>
<li><strong>Both majors but no long suit.</strong> Conventions such as Landy and Cappelletti exist for these hands; with natural methods, pass.</li>
<li><strong>Fewer than 8 HCP</strong>, even with a long suit.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1NT – ?: pass"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1NT – ?: pass"></div>
<p>The first hand has 13 HCP but only a five-card minor. The second has five spades, but Q-8-6-5-2 is not a suit to bid at the two level opposite a partner who may hold nothing.</p>
<div class="tip">Passing is often the winning call. A 1NT opener facing a weak dummy goes down more often than you might think, and nobody can double you while you pass.</div>

<h3>In the balancing seat</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>When 1NT is followed by two passes, the opener's partner is weak, so your partner holds some values. Borrow a king: the bots double with <strong>12+ HCP</strong> (still for penalties) and bid a suit with <strong>5-12 HCP</strong>, with the same suit requirements as in the direct seat.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1NT – P – P – ?: bid 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1NT – P – P – ?: double"></div>
<p>With only 6 HCP the first hand would pass in the direct seat, but in the balancing seat a good five-card major is enough. The second, 14 HCP and balanced, doubles: partner passes and you defend 1NT doubled.</p>

<h3>Advancing</h3>
<p>After partner's double, pass: it is for penalties. After a two-level overcall in a major, the bots advance like this:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Advancer's bid</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>3♥ (raise)</td><td>Three-card support and 6-9 points (dummy points count)</td></tr>
<tr><td>3♣</td><td>Artificial: three-card support and 10-12 points. The overcaller bids game with 13+ total points, otherwise 3♥</td></tr>
<tr><td>4♥</td><td>Support and 13+ points, or five trumps and a singleton</td></tr>
<tr><td>2♠ (new suit)</td><td>A good five-card or longer suit and 8+ HCP; not forcing</td></tr>
<tr><td>2NT / 3NT</td><td>No fit: 12-14 HCP, invitational / 15+ HCP</td></tr>
<tr><td>Pass</td><td>Everything else, including a misfit with a long minor</td></tr>
</tbody>
</table>
<p>The opponents have no suit of their own to cue bid, so the bots use 3♣ to show the good raise. After a two-level overcall in a minor, a raise needs four-card support.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="West opens 1NT; North overcalls 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>North has 11 HCP and six good hearts: a natural 2♥. South, with three trumps and 7 points, raises to 3♥. With nine trumps between you the three level is safe enough (the Law of Total Tricks), and the raise makes it harder for East-West, who hold more than half the points, to find their own partscore. North has nothing extra and passes.</p>
<div class="warn">Don't overcall 1NT with a poor suit just because you have 12 or 13 points: without a good suit, those points are worth more in defence.</div>
`,
    keyPoints: [
      'Over their 1NT, double shows 15+ HCP, any shape, and is for penalties: partner passes.',
      'Two-level suit bids are natural: 8-15 HCP and a six-card suit, or a good five-card major.',
      'Stay out with balanced hands below 15 HCP, five-card minors and poor five-card majors.',
      'In the balancing seat, borrow a king: double with 12+, bid a suit with 5-12.',
      'Advancing a major: raise to three with 6-9 and support, 3♣ shows 10-12, game with 13+.',
    ],
    quiz: [
      {
        q: 'RHO opens 1NT (15-17). You hold ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 HCP). What do you bid?',
        options: ['Pass', 'Double', '2♦', '2NT'],
        answer: 1,
        explain: 'With 15+ HCP you have as much as the opener: double for penalties. Partner will pass, and 1NT doubled should go down.',
      },
      {
        q: 'RHO opens 1NT. You hold ♠A83 ♥K4 ♦KQ852 ♣J84 (13 HCP). What do you bid?',
        options: ['2♦', 'Double', 'Pass', '2NT'],
        answer: 2,
        explain: 'A two-level bid in a minor needs six cards, and a double needs 15+ HCP. Pass and defend.',
      },
      {
        q: 'RHO opens 1NT. You hold ♠KQJ974 ♥83 ♦A52 ♣84 (10 HCP). What do you bid?',
        options: ['Pass', 'Double', '2♠', '3♠'],
        answer: 2,
        explain: 'Six strong spades and 8-15 HCP: a natural 2♠. A double would show 15+ HCP, and jumps are not used over 1NT.',
      },
      {
        q: 'LHO opens 1NT, partner overcalls 2♥ and RHO passes. You hold ♠Q852 ♥Q73 ♦K84 ♣962 (7 HCP). What do you bid?',
        options: ['Pass', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Three-card support and 6-9 points: raise to 3♥. With nine trumps the three level is safe enough. 3♣ would show 10-12 points, and 4♥ needs 13+.',
      },
      {
        q: '1NT on your left, then pass, pass. You hold ♠KQ1095 ♥83 ♦952 ♣J84 (6 HCP). What do you bid?',
        options: ['Pass', 'Double', '2♠', '3♠'],
        answer: 2,
        explain: 'In the balancing seat the bots bid a good five-card major with 5-12 HCP: partner must have some values. A double would show 12+ HCP and is for penalties.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Competing over preempts',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'How to double, overcall or bid notrump when the opponents open with a weak two or a three-level preempt, and how partner answers.',
    body: `
<h3>The preempter's plan</h3>
<p>A weak two or a three-level preempt takes away the room you need to find your best contract. The preempter chose the level by the Rule of 2-3-4: they are prepared to go two down doubled when vulnerable against not vulnerable, three down at equal vulnerability and four down when not vulnerable against vulnerable, because that costs about as much as the game you would make. Seen from your side of the table, the rule tells you two things:</p>
<ul>
<li><strong>Don't count on a big penalty.</strong> Even doubled, they lose about what your game is worth. If you have a game, bid it.</li>
<li><strong>Their vulnerability tells you how weak they may be.</strong> Not vulnerable against vulnerable, a preempt can be very weak, so partner is more likely to hold values; vulnerable against not, it promises more.</li>
</ul>
<p>Either way you must act at once and at a high level, often with partner forced to answer at the three level. So you need real values. The bots' requirements below are the same at every vulnerability.</p>

<h3>Over a weak two</h3>
<p>Right-hand opponent has opened 2♦, 2♥ or 2♠:</p>
<table>
<thead><tr><th>Call</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>Double</td><td>Takeout: 13+ HCP, at most two cards in their suit and three or more in each other suit (a doubleton in an unbid minor is allowed with four cards in each unbid major); or any hand with 17+ HCP</td></tr>
<tr><td>2NT</td><td>15-18 HCP, balanced, with a stopper in their suit</td></tr>
<tr><td>A suit</td><td>13-17 HCP and a good five-card or longer suit (two of the top three honours or three of the top five), your longest unbid suit</td></tr>
<tr><td>Pass</td><td>Everything else</td></tr>
</tbody>
</table>
<p>With a good six-card suit, overcall rather than double. Compare the 13 HCP with the 8 that are enough for an overcall at the one level: partner may have to answer your double at the three level with nothing, and your overcall is already at the two or three level. Weak jump overcalls and the Michaels cue bid are not used over a preempt.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: double"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: bid 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: bid 2NT"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: pass"></div>
<p>The first hand is the ideal double: 13 HCP, a singleton heart and support for every other suit. The second has a good six-card suit: bid it. The third is balanced, with 16 HCP and the hearts stopped. The fourth has the perfect shape but only 10 HCP: too little to drive partner to the three level. With length in their suit, such as ♠K4 ♥AQ1093 ♦K83 ♣J106, pass as well: a double would ask partner to bid, and 2NT needs 15 HCP.</p>
<div class="tip">In the balancing seat (2♥ – pass – pass – ?) an overcall needs only 10 HCP, but a double still needs 13.</div>

<h3>Over a three-level preempt</h3>
<table>
<thead><tr><th>Call</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>Double</td><td>Takeout: 14+ HCP and the same shape as over a weak two, or any hand with 17+ HCP</td></tr>
<tr><td>3NT</td><td>16-21 HCP with a stopper in their suit, to play. It may be a long running minor rather than a balanced hand</td></tr>
<tr><td>A suit at the three level</td><td>13-17 HCP and a good five-card or longer suit</td></tr>
<tr><td>Pass</td><td>Everything else</td></tr>
</tbody>
</table>
<p>Each level higher, the double needs a little more. Over a four-level preempt it needs 15+ HCP, and partner usually passes it unless they have a long suit and shape.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: double"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: bid 3NT"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: bid 3♠"></div>
<p>The first hand has 14 HCP and the right shape: double. With the ♦K instead of the ♦A (13 HCP), the bots would pass. The second bids 3NT: the diamonds will run, and the ♥K should stop the hearts, because the lead comes from East and West, who has the long hearts, plays before you. The third bids its good six-card suit.</p>

<h3>Advancing partner's double</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>Partner's double asks you to bid, and you must, however weak you are. Show your strength by the level:</p>
<table>
<thead><tr><th>Advancer's hand</th><th>Bid</th></tr></thead>
<tbody>
<tr><td>0-8 HCP</td><td>Your best suit at the cheapest level, a four-card major first</td></tr>
<tr><td>9-11 HCP</td><td>A jump in your best suit when the jump is still at the three level (3♠ here); otherwise 2NT with 11 HCP and a heart stopper, or your best suit at the cheapest level</td></tr>
<tr><td>10-11 HCP and five or more spades</td><td>4♠</td></tr>
<tr><td>12+ HCP</td><td>3♥, the cue bid: forcing to game. With 13-16, a balanced or semi-balanced hand and a heart stopper, 3NT instead</td></tr>
<tr><td>Five strong hearts (three honours) and 8+ HCP</td><td>Pass: the double becomes a penalty double</td></tr>
</tbody>
</table>
<p>Over a three-level preempt there is no room to jump: bid your best suit at the cheapest level, game with 10-11 HCP and five cards in an unbid major, 3NT with 13-16, a balanced or semi-balanced hand and a stopper, or the cue bid with 12+. The doubler passes a cheapest-level answer with a minimum, and raises it only with extra values.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="West opens 2♥; North doubles."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>South has 9 HCP and four spades: worth a jump to 3♠, since a 2♠ answer could be made with nothing. North, with 13 HCP, four trumps and a singleton heart (16 points in support of spades), accepts the invitation. Opposite a 2♠ answer North would only have invited with 3♠.</p>

<h3>Advancing a notrump overcall</h3>
<p>After partner's 2NT over a weak two (15-18): bid 3NT with 10+ HCP; with a six-card major bid game with 9+ HCP, or three of it with 6-8 to invite; with a weaker hand and a five-card suit, bid it at the three level to play; otherwise pass. Stayman and transfers are not used here. After partner's 3NT over a three-level preempt (16-21), the bots pass with most hands. They bid four of a six-card major with 9+ HCP, or a weak five-card suit at the four level, and with 12+ HCP they look for slam: 4NT is a quantitative invitation with 12-14 HCP, and 6NT is bid with 15+.</p>
<div class="warn">Don't double a preempt for penalty because you have a few high cards in their suit: the bots' double is for takeout. With length in their suit, pass, and wait for partner to double; with long, strong trumps you can then pass that double for penalties.</div>
`,
    keyPoints: [
      'Over a weak two, a double (13+, short in their suit) and an overcall (13-17, good suit) need real values; 2NT is 15-18 balanced with a stopper.',
      'Over a three-level preempt the double needs 14+; 3NT shows 16-21 with a stopper, to play.',
      'With a good six-card suit overcall; with 17+ HCP of any shape, double first.',
      'Advancer must bid: cheapest with 0-8, a jump with 9-11 when it is still at the three level, the cue bid with 12+; pass only with strong trumps.',
      'The preempter expects to lose two to four tricks doubled: if you have a game, bid it rather than hope for a big penalty.',
    ],
    quiz: [
      {
        q: 'RHO opens 2♥. You hold ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 HCP). What do you bid?',
        options: ['Pass', 'Double', '2♠', '2NT'],
        answer: 1,
        explain: 'Short hearts, support for every other suit and 13 HCP: a takeout double. 2♠ would promise a good five-card suit.',
      },
      {
        q: 'RHO opens 2♠. You hold ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 HCP). What do you bid?',
        options: ['Double', '2NT', '3NT', 'Pass'],
        answer: 1,
        explain: 'Balanced, 15-18, with a spade stopper: 2NT. A double would ask partner to bid a suit, and you have no shortness in spades.',
      },
      {
        q: 'RHO opens 3♥. You hold ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 HCP). What do you bid?',
        options: ['Double', '4♦', '3NT', 'Pass'],
        answer: 2,
        explain: '3NT over a three-level preempt shows 16-21 with a stopper and is to play. Your diamonds will run, and the ♥K is well placed behind the preempter.',
      },
      {
        q: 'LHO opens 2♥, partner doubles and RHO passes. You hold ♠K963 ♥874 ♦A52 ♣Q84 (9 HCP). What do you bid?',
        options: ['2♠', '3♠', '4♠', '2NT'],
        answer: 1,
        explain: '9-11 HCP with four spades: jump to 3♠ to invite game. 2♠ could be made with nothing, and 2NT would promise a heart stopper.',
      },
      {
        q: 'LHO opens 2♥, partner doubles and RHO passes. You hold ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 HCP). What do you bid?',
        options: ['2NT', '3♣', 'Pass', '3♦'],
        answer: 2,
        explain: 'Five strong hearts and 8+ HCP: pass, turning partner\'s takeout double into a penalty double. Your hearts will take tricks sitting over the opener.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'When they double us',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'What responder does after a takeout double of partner\'s opening (redouble, Jordan 2NT, raises, new suits, 1NT), and how to escape when partner\'s 1NT is doubled.',
    body: `
<h3>Partner's opening is doubled</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Partner opens 1♥ and right-hand opponent makes a takeout double: opening values, short in hearts, support for the other suits. The double gives you new ways to describe your hand, and you need them: the doubler's partner is about to bid, perhaps with a jump, and opener must know straight away whether your side has a fit and who holds the balance of strength.</p>

<h3>What the bots play</h3>
<p>After 1♥ or 1♠ – double, the bots choose the first of these that fits:</p>
<table>
<thead><tr><th>Bid</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>2NT (Jordan)</td><td>Artificial: four or more trumps and 10+ dummy points, a limit raise or better</td></tr>
<tr><td>Redouble</td><td>10+ HCP, usually without a fit (at most three trumps)</td></tr>
<tr><td>Jump raise (1♥ – X – 3♥)</td><td>Preemptive: four or more trumps and fewer than 10 HCP</td></tr>
<tr><td>Simple raise (1♥ – X – 2♥)</td><td>Three trumps and 6-10 dummy points (with four, jump or bid 2NT)</td></tr>
<tr><td>1♠ over 1♥</td><td>Four or more spades and 6+ HCP; forcing</td></tr>
<tr><td>1NT</td><td>6-9 HCP and none of the bids above</td></tr>
<tr><td>Pass</td><td>A weak hand</td></tr>
</tbody>
</table>
<p>Notice what is missing: a new suit at the two level. After the double the bots never bid one. With 10+ HCP they redouble, and with less they bid 1NT or pass.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2NT"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: redouble"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1NT"></div>
<p>The first hand has four trumps and 11 dummy points: Jordan 2NT. The second has 10 HCP and no fit: redouble. The third, with five trumps and 6 HCP, jumps to 3♥ to take away the opponents' room; they surely have a fit of their own. The fourth makes a simple raise with three trumps. The fifth shows its spades at the one level. The sixth has 8 HCP and nothing else to say: 1NT.</p>
<div class="tip">The preemptive jump raise works best at once, before the doubler's partner can bid cheaply. With four trumps and a weak hand, take their room away.</div>

<h3>After a minor-suit opening</h3>
<p>After 1♣ or 1♦ – double there is no Jordan 2NT: with 10+ HCP, redouble. A 1♣ or 1♦ opening may be only three cards long, so the raises need more trumps: four for the simple raise, five for the preemptive jump raise. With a four-card major and 6+ HCP, bid it at the one level, hearts first with both.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>After the redouble</h3>
<p>The redouble says that the hand belongs to your side. Opener normally passes and leaves the problem to the opponents: they must find somewhere to play, and the doubler's partner, who may hold nothing, bids only with a five-card suit. Opener bids at once only with a minimum and a six-card suit, which is poor defence. When the opponents land in a suit, the redoubler can double them for penalties with four good cards in it.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AQ94 C:KJ1062" data-s="S:J1093 H:K6 D:853 C:AQ97" data-w="S:8742 H:109732 D:J6 C:53" data-caption="North opens 1♥ and East doubles."></div>
<div class="auction" data-calls="1H X XX P P 2C X P P P" data-dealer="N"></div>
<p>South has 10 HCP and only two hearts: redouble. West has nothing and no five-card suit, so passes; North passes too, and East must choose a suit at the two level. South's ♣A-Q-9-7 sit over East's clubs: double. North-South hold 24 HCP and West has nothing to help: with best play 2♣ doubled goes three down, worth 500 even when East-West are not vulnerable.</p>

<h3>Jordan 2NT in action</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="North opens 1♥ and East doubles."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>South has four trumps and 12 dummy points: Jordan 2NT, a limit raise or better. North, with 14 HCP and a five-card suit, has more than a minimum and bids game. With a minimum North would bid only 3♥.</p>

<h3>When our 1NT is doubled</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>A double of partner's 1NT is for penalties. Responder's choices:</p>
<table>
<thead><tr><th>Bid</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>Redouble</td><td>8+ HCP: with partner's 15-17 your side holds the balance of strength, and it is the opponents who are in trouble</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>To play: 0-7 HCP and five or more cards in the suit, your longest</td></tr>
<tr><td>Pass</td><td>Anything else</td></tr>
</tbody>
</table>
<p>Stayman and transfers are off after the double: 2♣ shows clubs and 2♦ shows diamonds. With a weak hand 1NT doubled can cost a lot, while two of your long suit plays much better.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1NT – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1NT – X – ?: redouble"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1NT – X – ?: pass"></div>
<p>The first hand runs to its five diamonds. The second has 8 HCP: redouble. The third has no five-card suit, so it passes and leaves partner to cope.</p>
<div class="warn">After 1♥ – double, don't bid a new suit at the two level with a weak hand: it is not part of the system. With 10+ HCP redouble first; with less, bid 1NT or pass.</div>
`,
    keyPoints: [
      'After a takeout double of 1♥ or 1♠, 2NT (Jordan) shows four trumps and 10+ dummy points; redouble shows 10+ HCP, usually without a fit.',
      'The jump raise is preemptive (four trumps for a major, five for a minor, under 10 HCP); the simple raise shows 6-10 with support.',
      'A major at the one level shows four+ cards and 6+ HCP and is forcing; 1NT shows 6-9 with nothing else to bid.',
      'After the redouble opener usually passes; the redoubler can double the opponents\' escape with four good trumps.',
      'When partner\'s 1NT is doubled, redouble with 8+; with a weak hand and a five-card suit, bid it at the two level (natural, no Stayman or transfers).',
    ],
    quiz: [
      {
        q: 'Partner opens 1♥ and RHO doubles. You hold ♠K74 ♥Q962 ♦A1053 ♣J4 (10 HCP). What do you bid?',
        options: ['Redouble', '3♥', '2NT', '2♥'],
        answer: 2,
        explain: 'Four trumps and 11 dummy points: Jordan 2NT shows a limit raise or better at once. A redouble would usually deny four trumps, and 3♥ would be preemptive.',
      },
      {
        q: 'Partner opens 1♥ and RHO doubles. You hold ♠K74 ♥Q9862 ♦5 ♣J1043 (6 HCP). What do you bid?',
        options: ['2♥', '3♥', '4♥', 'Pass'],
        answer: 1,
        explain: 'Five trumps, a singleton and fewer than 10 HCP: the preemptive jump raise. It takes away the room the doubler\'s partner needs.',
      },
      {
        q: 'Partner opens 1♥ and RHO doubles. You hold ♠AQ74 ♥62 ♦KJ53 ♣984 (10 HCP). What do you bid?',
        options: ['1♠', 'Redouble', '2♦', '1NT'],
        answer: 1,
        explain: '10+ HCP without a fit: redouble. It tells partner the hand belongs to your side, and you will be ready to double the opponents when they run.',
      },
      {
        q: 'Partner opens 1♦ and RHO doubles. You hold ♠KJ74 ♥Q962 ♦53 ♣J43 (7 HCP). What do you bid?',
        options: ['1♥', '1♠', '1NT', 'Pass'],
        answer: 0,
        explain: 'With four cards in each major and 6+ HCP, bid hearts first, at the one level. 1♥ is forcing, so you will be able to show the spades later if needed.',
      },
      {
        q: 'Partner opens 1NT and RHO doubles. You hold ♠Q74 ♥62 ♦J9853 ♣932 (3 HCP). What do you bid?',
        options: ['Pass', '2♣', '2♦', 'Redouble'],
        answer: 2,
        explain: 'A weak hand with five diamonds: run to 2♦, which is natural after the double, not a transfer. 2♣ would show clubs, and a redouble 8+ HCP.',
      },
    ],
  },
];
