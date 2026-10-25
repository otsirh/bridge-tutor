// Lessons, part 3.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels and the Unusual 2NT',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'How to show a two-suited hand in one bid after an opponent opens, and how partner chooses the suit.',
    body: `
<h3>Two suits in one bid</h3>
<p>With two five-card suits you want to show both quickly; the auction may be at the four level before you get a second chance. Two conventional overcalls do it, each promising at least <strong>five cards in each of two suits</strong>.</p>
<table>
<thead><tr><th>They open</th><th>You bid</th><th>Shows</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ and ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ and ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ and a minor</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ and a minor</td></tr>
<tr><td>1♣</td><td>2NT (Unusual)</td><td>♦ and ♥</td></tr>
<tr><td>1♦</td><td>2NT (Unusual)</td><td>♣ and ♥</td></tr>
<tr><td>1♥ or 1♠</td><td>2NT (Unusual)</td><td>♣ and ♦</td></tr>
</tbody>
</table>
<p>Michaels is a cue bid of the opener's suit. Over a minor it shows both majors; over a major it shows the other major and an unspecified minor. The Unusual 2NT shows the <strong>two lowest unbid suits</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="RHO opens 1♦: bid 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="RHO opens 1♠: bid 2NT"></div>

<h3>How strong?</h3>
<p>The range is wide. Most often the hand is modest (roughly 8-12 HCP) with good suits, and the aim is to compete, to find a sacrifice, or to direct the lead. With a strong hand (about 16+) you also start with the two-suited bid and then bid again to show the extra strength. With an in-between hand, many players prefer to overcall the higher suit and bid the other one later.</p>
<p>Suit quality matters, especially vulnerable: the honours should be in your long suits, not in short ones.</p>

<h3>Advancing</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="You are South: bid 2♥"></div>
<ul>
<li><strong>Choose a suit</strong> at the cheapest level, the one where you have more cards. Here four hearts against two spades: 2♥. With equal length in a major and a minor, prefer the major, the higher-scoring choice.</li>
<li><strong>Jump</strong> with a good fit and useful values: shortness in the opponents' suit, and aces and kings in partner's suits.</li>
<li><strong>Go to game</strong> when the fit is big and your honours are working. A ten-card fit opposite a 5-5 hand often makes game with few points.</li>
<li><strong>After a major-minor Michaels</strong> (1♥ – 2♥), bid partner's major if you like it, or bid 2NT to ask for the minor when you have a good minor fit and no major fit.</li>
<li><strong>After the Unusual 2NT</strong>, bid 3♣ or 3♦ (whichever is longer), or jump to game with a fit.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – pass: bid 2NT"></div>
<p>Partner has five spades and five cards in a minor. With a singleton spade but four cards in each minor, bid 2NT: partner names their minor and you pass, with a nine-card fit whichever it is.</p>

<h3>Using the information on defence</h3>
<p>If the opponents win the auction, partner's two-suiter is a gift for the defence: you know at least ten of partner's cards. Count declarer's hand from it, and lead or switch to the suit where partner can ruff or win tricks.</p>
<div class="warn">Don't use Michaels or the Unusual 2NT with a 5-4 hand. Partner will choose a suit expecting five cards, and you will play a seven-card fit doubled.</div>
<div class="tip">At favourable vulnerability, a two-suited bid followed by partner's big jump in your suit can steal the auction or find a cheap sacrifice. Partner should raise with any big fit: the Law of Total Tricks favours bidding with shape.</div>
`,
    keyPoints: [
      'Michaels: a cue bid of opener\'s minor (1m – 2m) shows both majors; a cue bid of opener\'s major (1M – 2M) shows the other major and a minor; 5-5 or better.',
      'Unusual 2NT shows the two lowest unbid suits, 5-5 or better.',
      'Most hands are modest; with a strong hand bid again afterwards.',
      'Advancer chooses the suit where they have more cards, and jumps or bids game with a big fit.',
      'After 1M – 2M, 2NT by advancer asks for the minor.',
    ],
    quiz: [
      {
        q: 'RHO opens 1♣. Which bid shows five spades and five hearts?',
        options: ['Double', '2♣', '2NT', '1♥'],
        answer: 1,
        explain: 'A cue bid of a minor-suit opening (Michaels) shows both majors. 2NT over 1♣ shows the two lowest unbid suits, diamonds and hearts.',
      },
      {
        q: 'RHO opens 1♥ and you bid 2NT. What have you shown?',
        options: ['15-18 balanced', 'Clubs and diamonds', 'Spades and a minor', 'Spades and clubs'],
        answer: 1,
        explain: 'The Unusual 2NT shows the two lowest unbid suits. Over 1♥ those are clubs and diamonds.',
      },
      {
        q: 'LHO opens 1♦, partner bids 2♦ (Michaels), RHO passes. You hold ♠J4 ♥Q852 ♦K73 ♣J1064. What do you bid?',
        options: ['2♠', '2♥', '2NT', 'Pass'],
        answer: 1,
        explain: 'Partner has at least five of each major. You have four hearts and two spades, so hearts is the better fit: bid it at the cheapest level.',
      },
      {
        q: 'RHO opens 1♠ and you bid 2♠. What does it show?',
        options: ['Spades', 'Hearts and a minor', 'Both minors', 'A strong balanced hand'],
        answer: 1,
        explain: 'A cue bid of a major-suit opening shows the other major plus a minor, at least 5-5. Partner can bid 2NT to find out which minor.',
      },
      {
        q: 'RHO opens 1♣ and you bid 2NT. What does it show?',
        options: ['Clubs and diamonds', 'Diamonds and hearts', 'Both majors', 'Hearts and spades'],
        answer: 1,
        explain: 'Over 1♣ the unbid suits are diamonds, hearts and spades; the two lowest are diamonds and hearts.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'Defending against suit contracts',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'How to choose between active and passive defence, take ruffs, lead trumps at the right moment and force declarer.',
    body: `
<h3>Where the defenders' tricks come from</h3>
<p>Against a suit contract the defence takes tricks with high cards, with ruffs, and with trumps of its own. Declarer, meanwhile, tries to get rid of losers by ruffing them in dummy or discarding them on dummy's winners. Good defence starts with a simple question when dummy comes down: <strong>how will declarer make the contract, and where will our tricks come from?</strong></p>

<h3>Active or passive?</h3>
<p><strong>Be active</strong> (cash or set up tricks quickly, even at some risk) when dummy has a long, strong suit that will provide discards. Any tricks you do not take now will disappear.</p>
<p><strong>Be passive</strong> (lead safe cards that give nothing away) when dummy is flat, has no source of discards, and declarer will have to lose those losers anyway. Opening new suits then often gives declarer a trick they could not make alone.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="South plays 4♠ after 1♠ – 2♥ – 2♠ – 4♠. Partner leads the ♣Q; dummy wins the ace and leads the ♥K."></div>
<p>You win the ♥A. Now think: dummy's hearts are set up, and as soon as declarer draws trumps, the diamond losers will be discarded on them. The only hope is to take diamond tricks <em>now</em>. Switch to the ♦J, through declarer's hand: if partner has the ♦A and declarer the ♦Q, you can take three diamond tricks. A passive club return would let declarer draw trumps and throw the diamonds away.</p>

<h3>Getting ruffs</h3>
<ul>
<li>A singleton lead is best when you hold trump control (such as the ace of trumps) or partner may have an entry: you get in, reach partner, and ruff again.</li>
<li>When giving partner a ruff, use a suit preference signal to show where your entry is.</li>
<li>Count declarer's trumps: there is no point leading for a ruff when partner can have no trumps left.</li>
</ul>

<h3>When to lead trumps</h3>
<ul>
<li>When dummy is short in a side suit where your side is strong, and declarer will try to ruff losers there.</li>
<li>When declarer has shown two suits and dummy has given preference to the second: dummy will ruff the first.</li>
<li>When partner passes your takeout double for penalties: they have long, strong trumps and want them drawn.</li>
<li>Not when declarer has long side-suit winners to cash, or when a trump lead might help declarer pick up partner's trump honours.</li>
</ul>

<h3>The forcing defence</h3>
<p>If you hold four trumps, or declarer's trumps are short, make declarer ruff again and again by leading your long suit. Each ruff shortens declarer's trumps; eventually you may hold more trumps than declarer does, and declarer loses control. A forcing defence works best when declarer's trumps are in the long hand and dummy cannot take the force.</p>

<h3>Trump promotion</h3>
<p>Spades are trumps. Declarer has ♠A K 10 9 8 7, you (West) have ♠Q 6 and partner has ♠J 3. Left alone, declarer cashes the ace and king and your queen falls. But suppose you lead a side suit in which both partner and declarer are void. Partner ruffs with the ♠J, declarer must overruff with the ace or king, and now your ♠Q 6 sits against just one top honour: the queen will make a trick. This trump promotion is called an <strong>uppercut</strong>. When you can see a promotion like this, partner should ruff as high as possible.</p>
<div class="tip">Count your tricks. If you can see the setting trick, take it; if you can see that declarer has enough, look for a ruff or a trump promotion that could create one.</div>
<div class="warn">Don't cash winners in a suit where declarer is void and dummy is ruffing: you only help declarer. And don't give a "ruff and discard" (leading a suit both declarer and dummy are void in), which lets declarer ruff in one hand and discard a loser from the other.</div>
`,
    keyPoints: [
      'Ask how declarer will make the contract and where your tricks will come from.',
      'Be active when dummy has a long suit for discards; passive when dummy is flat.',
      'Singleton leads work best with trump control or an entry to partner\'s hand.',
      'Lead trumps when dummy will ruff, or when partner has passed your takeout double.',
      'With four trumps, force declarer; never give a ruff and discard.',
    ],
    quiz: [
      {
        q: 'Dummy has a long, strong side suit that will provide discards. What kind of defence is usually right?',
        options: ['Passive: wait for declarer to go wrong', 'Active: take or set up your tricks quickly', 'Lead trumps at every turn', 'Give declarer a ruff and discard'],
        answer: 1,
        explain: 'Once trumps are drawn, declarer will discard their losers on dummy\'s suit. Tricks the defence does not take quickly will vanish.',
      },
      {
        q: 'Dummy is a flat 4-3-3-3 with no long suit and declarer must lose their side-suit losers anyway. What kind of defence is usually right?',
        options: ['Passive: avoid opening new suits', 'Active: switch to a new suit every trick', 'Underlead your aces', 'Cash all your winners immediately'],
        answer: 0,
        explain: 'With no source of discards, declarer\'s losers will not go away. Breaking new suits risks giving declarer a trick they could not make on their own.',
      },
      {
        q: 'You hold four trumps against declarer\'s 4♥. What defensive plan is often best?',
        options: ['Lead trumps', 'Force declarer to ruff by leading your long suit', 'Lead a singleton', 'Lead from honours in every suit'],
        answer: 1,
        explain: 'Each ruff shortens declarer\'s trumps. With four trumps yourself, two or three forces can leave you with more trumps than declarer, and declarer loses control.',
      },
      {
        q: 'You doubled 1♦ for takeout and partner passed for penalty. What do you lead?',
        options: ['Your best major', 'A trump', 'A singleton club', 'The suit partner would like'],
        answer: 1,
        explain: 'Partner\'s pass shows long, strong diamonds. A trump lead stops declarer from scoring small trumps by ruffing, and partner\'s diamonds will take the tricks.',
      },
      {
        q: 'When is a singleton lead most attractive against a suit contract?',
        options: ['When you hold the ace of trumps or partner is likely to have an entry', 'When you hold four trumps', 'When dummy is known to be short in the suit', 'Always'],
        answer: 0,
        explain: 'You need to get partner on lead after the ruff, or to regain the lead yourself before trumps are drawn. Trump control and partner\'s entries make that possible.',
      },
    ],
  },

  {
    id: 'defending-against-notrump',
    title: 'Defending against notrump',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'How the defenders win the race against notrump: unblocking, returning the right card, keeping in touch, attacking declarer\'s entries and discarding well.',
    body: `
<h3>A race for tricks</h3>
<p>Against notrump nothing stops a long suit once it is established. Both sides race: declarer to set up enough tricks, the defenders to set up and cash their long suit first. Most of the defenders' problems are problems of <strong>communication</strong>: the long suit is in one hand and the entries are often in the other. Good defence keeps the suit flowing between the two defenders and cuts declarer's links.</p>

<h3>Third hand: high, and out of partner's way</h3>
<p>Third hand plays high (see the lesson “Second hand low, third hand high”). Against notrump there is a second duty: don't <strong>block</strong> partner's suit. With a doubleton honour in partner's long suit, get the honour out of the way early, even if that means overtaking partner's card.</p>
<table>
<thead><tr><th>Seat</th><th>Hearts</th></tr></thead>
<tbody>
<tr><td>North (dummy)</td><td>6 5 2</td></tr>
<tr><td>West (partner, leads the K)</td><td>K Q 10 9 7</td></tr>
<tr><td>East (you)</td><td>A 3</td></tr>
<tr><td>South (declarer)</td><td>J 8 4</td></tr>
</tbody>
</table>
<p>If you play the 3, declarer ducks. Partner continues with the Q and your ace has to win the second round: you have no heart left to return, declarer's J still stops the suit, and partner needs two more entries to set up and cash the hearts. Instead, <strong>overtake</strong> the K with the A and return the 3. Declarer's J is trapped, and the defence takes the first five heart tricks.</p>
<ul>
<li>Unblock when partner's lead shows a strong suit (the top of a sequence such as K Q 10 or Q J 10) and you hold a doubleton honour: play the honour early, so that your last card is a small one.</li>
<li>With three cards headed by an honour (A x x, K x x), play high and keep a small card to return: you block nothing.</li>
</ul>

<h3>Returning partner's suit</h3>
<p>When you win a trick and return partner's suit, the card you choose tells partner how many you have left, and so how many declarer has.</p>
<table>
<thead><tr><th>You held</th><th>You win with</th><th>Return</th><th>The rule</th></tr></thead>
<tbody>
<tr><td>A 9 3</td><td>A</td><td>9</td><td>Two cards left: return the higher</td></tr>
<tr><td>A 8 5 2</td><td>A</td><td>2</td><td>Three or more left: return your original fourth best</td></tr>
<tr><td>K 10 6 4 2</td><td>K</td><td>4</td><td>Your original fourth best, not your lowest card</td></tr>
</tbody>
</table>
<p>A high card back says "I have at most one more"; a low card says "I have at least two more". Partner can then work out whether declarer still has a stopper, and whether to win now or duck. Returning the higher of two cards also keeps you from blocking the suit: if you keep the 9, it may win the third round when partner is the one who needs to be on lead.</p>

<h3>Ducking to keep in touch</h3>
<p>The defender with the long suit sometimes has to give up a trick early, while partner still has a card of the suit to lead back.</p>
<div class="deal" data-n="S:109 H:A64 D:KQJ105 C:K83" data-e="S:752 H:1072 D:A83 C:10964" data-s="S:QJ4 H:KQ5 D:742 C:AQJ2" data-w="S:AK863 H:J983 D:96 C:75" data-caption="3NT by South after 1NT – 3NT. West leads the ♠A and East plays the ♠2."></div>
<p>East's 2 denies a spade honour, so declarer holds the ♠Q J. West counts: South has 15-17 HCP, dummy 13 and West 8, so East has at most 4. Declarer will make the contract by driving out the ♦A, so the defence's only hope is that East holds it.</p>
<p>If West cashes the ♠K and plays a third spade, declarer wins with the last honour and East, who started with three spades, has none left. East takes the ♦A but cannot reach West, whose two long spades never score: declarer makes ten tricks. Instead, West plays a <strong>low spade</strong> at trick two. Declarer wins it, but East keeps one spade. When East takes the ♦A he returns it, and West cashes the ♠K and the last two spades: one down.</p>
<p>A low spade at trick one would have done the same job. The principle: when your suit is long and you have no outside entry, give up the trick you must lose <em>while partner still has a card of the suit</em>.</p>

<h3>Attacking declarer's entries</h3>
<p>Declarer has communication problems too, and the defenders can make them worse.</p>
<ul>
<li><strong>Hold up your ace</strong> when dummy has a long suit and no outside entry, and take it when declarer plays the last card of the suit from hand. Partner's count signal tells you when (see the lesson “Defensive signals”).</li>
<li><strong>Knock out dummy's entry</strong> before the long suit is set up, even if it costs a trick.</li>
</ul>
<div class="hand" data-cards="S:A42 H:765 D:KQJ109 C:83" data-label="Dummy, against 3NT"></div>
<p>You are East with ♠K 7 3 and ♦A 6 2, and declarer has two diamonds. Holding up the ♦A is not enough on its own: declarer would use the ♠A to get back to the established diamonds. So when you win a trick before diamonds have been played, lead the <strong>♠K</strong>. If declarer takes the ace, dummy has no entry left: you hold up the ♦A until the second round and dummy's diamonds are dead. If declarer ducks, your king has won a trick and you can lead another spade. Giving up an honour to remove an entry like this is called the <strong>Merrimac coup</strong>. It is rare, but the question behind it is not: which of declarer's entries matters most?</p>

<h3>Discarding</h3>
<p>When declarer runs a long suit, the defenders have to find discards, and one wrong discard can give declarer the contract.</p>
<ul>
<li><strong>Keep length with dummy.</strong> With ♣Q 10 8 3 sitting behind dummy's ♣K J 7 4, keep all four clubs: throw one and dummy's last club may become a winner. Dummy's cards are in plain view, so this is the easiest rule to follow.</li>
<li><strong>Keep length with declarer.</strong> Count declarer's suits from the bidding and the play, and keep a guard in any suit where you alone can stop declarer's long card.</li>
<li><strong>Share the work.</strong> A suit needs only one guard. Let partner keep the suit partner can guard (count signals help here) and keep the other one yourself.</li>
<li><strong>Signal with your first discard:</strong> a high card asks for the suit, a low card says you do not want it. Discard from a suit you can spare; never throw away a card you need just to signal.</li>
<li><strong>Keep the winners of your established suit</strong> while you or partner might still get the lead to cash them.</li>
</ul>
<div class="tip">Count declarer's tricks before you discard. If declarer has eight tricks and needs a ninth, the suit that could provide it is the suit you must keep.</div>
<div class="warn">Plan your discards early. Hesitating and then baring an honour tells declarer exactly where it is.</div>
`,
    keyPoints: [
      'Against notrump, communication decides the race: keep the long suit flowing between the two defenders.',
      'Unblock: with a doubleton honour in partner\'s strong suit, play the honour early, overtaking if necessary.',
      'Return the higher of two remaining cards; with three or more left, return your original fourth best.',
      'The defender with the long suit and no entry ducks a round while partner still has a card to return.',
      'Attack declarer\'s entries; when discarding, keep length with dummy and guard declarer\'s long cards.',
    ],
    quiz: [
      {
        q: 'Against 3NT partner leads the ♥K (from K Q 10 9 7). Dummy has ♥6 5 2 and you hold ♥A 3. What do you play?',
        options: ['The 3, letting partner\'s king win', 'The ace, then return the 3', 'The ace, then switch to another suit', 'It does not matter'],
        answer: 1,
        explain: 'Overtake and return the 3. If you play low, declarer ducks, and your ace has to win the second round with no heart left to return, while declarer\'s J still stops the suit.',
      },
      {
        q: 'You win partner\'s spade lead against 3NT with the ace from ♠A 9 3. Which spade do you return?',
        options: ['The 9', 'The 3', 'Either', 'Don\'t return a spade'],
        answer: 0,
        explain: 'With two cards left, return the higher. Partner sees the 9 and knows you have at most one spade left.',
      },
      {
        q: 'You win with the ace from ♦A 8 5 2. Which diamond do you return?',
        options: ['The 8', 'The 5', 'The 2', 'None: switch to another suit'],
        answer: 2,
        explain: 'With three or more left, return your original fourth best, here the 2. The low card tells partner you still have at least two diamonds.',
      },
      {
        q: 'In the 3NT deal above, why should West play a low spade at trick two?',
        options: ['To find out who holds the ♠Q', 'So that East keeps a spade to return after winning the ♦A', 'Because the ♠K could be ruffed', 'To make declarer use dummy\'s entries'],
        answer: 1,
        explain: 'East started with three spades. If West cashes the king and plays a third spade, East has none left when he gets in. Ducking now keeps the link between the two hands.',
      },
      {
        q: 'Declarer is running a long suit. Dummy holds ♣K J 7 4 and you hold ♣Q 10 8 3 behind it. What should you keep?',
        options: ['All four clubs', 'The Q and 10 only', 'The queen only', 'It depends on partner\'s first discard'],
        answer: 0,
        explain: 'Keep length with dummy. As soon as you throw a club, dummy\'s fourth club can become a winner.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Suit splits and combining chances',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'The a priori probabilities of suit splits, how to combine chances, and the basic ideas of vacant places and restricted choice.',
    body: `
<h3>How the opponents' cards split</h3>
<p>Before any cards have been played, the chance of each split depends only on how many cards the defenders hold in the suit:</p>
<table>
<thead><tr><th>Missing</th><th>Split</th><th>Chance</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1.5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0.5%</td></tr>
</tbody>
</table>
<p>A useful rule: an <strong>odd</strong> number of missing cards tends to split as evenly as possible (3-2, 4-3), but an <strong>even</strong> number tends not to (4-2 is more likely than 3-3, and 3-1 more likely than 2-2).</p>
<p>Two more numbers to know: a finesse is 50%; needing one of two finesses is 75%, needing both is 25%.</p>

<h3>Combining chances</h3>
<p>Often a contract can be made in more than one way. The skill is to try the chances in an order that lets you use the second one if the first fails.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3NT by South. West leads the ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Count:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: eight tricks. The ninth can come from a 3-3 club split (36%), making dummy's ♣2 a winner, or from the spade finesse (50%), which wins when East has the ♠K.</p>
<p><strong>The danger:</strong> once your ♥A has gone, West's hearts are established. If you take the spade finesse and it loses to West, West cashes enough hearts to beat you, and you never get to try the clubs.</p>
<p><strong>The right order:</strong> test the clubs first. Cashing the ♣A, K and Q costs nothing: if both defenders follow three times, the ♣2 is your ninth trick and you do not need the finesse at all. If clubs do not split, you finish in dummy and can still lead a spade towards your A Q. Your chance is 36% + (64% × 50%) = 68%, instead of 50% for the finesse alone.</p>
<div class="tip">Try the chance that does not lose the lead first. Keep the finesse, which may lose the lead to the dangerous opponent, for last.</div>

<h3>Vacant places</h3>
<p>Once the play has started, the a priori numbers change. If West is known to hold five hearts and East only one, then of the remaining unknown cards West has 8 places and East 12. Any particular missing card, such as the ♠K, is now with East 12 times in 20, or 60%, rather than 50%. The hand with more vacant places is more likely to hold any given card. This is why counting the hand matters so much.</p>

<h3>Restricted choice</h3>
<p>You hold A K 10 7 5 opposite 6 4 3 2, missing Q, J, 9 and 8. You cash the ace and East drops the queen. On the next round, West follows low. Should you play the king (hoping East started with Q J) or finesse the 10 (hoping East had the queen alone)?</p>
<p>Finesse. With a singleton queen East had no choice; with Q J, East could equally have played the jack. So a singleton queen is about twice as likely as Q J specifically: the finesse wins about 65% of the time. This principle of <strong>restricted choice</strong> applies whenever an opponent plays one of two equal honours.</p>

<h3>Rules of thumb for the queen</h3>
<ul>
<li>Eight cards missing the queen: finesse (about 40% with A K J x x and about 51% with A K J 10 x, against about 33% for the drop).</li>
<li>Nine cards missing the queen: play for the drop (about 53% against about 51% for the finesse).</li>
<li>Information from the bidding (who opened, who preempted, who showed length) is worth more than these small margins.</li>
</ul>
<div class="warn">These percentages are only a starting point. A defender who has shown long suits in the bidding is less likely to hold length in the suit you are playing.</div>
`,
    keyPoints: [
      'Five missing: 3-2 68%. Six missing: 4-2 48%, 3-3 36%. Four missing: 3-1 50%, 2-2 41%, 4-0 10%.',
      'Odd numbers of missing cards tend to split evenly; even numbers tend not to.',
      'Combine chances: test what does not lose the lead first; keep the finesse into the dangerous hand for last.',
      'Vacant places: the hand with more unknown cards is more likely to hold any given card.',
      'Restricted choice: when an opponent drops one of two equal honours, play that opponent for the singleton.',
    ],
    quiz: [
      {
        q: 'The opponents have six cards in a suit. What is the most likely split?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: '4-2 occurs about 48% of the time against 36% for 3-3. With an even number missing, an even split is the exception, not the rule.',
      },
      {
        q: 'The opponents have five cards in a suit. How often do they split 3-2?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'About 68%. 4-1 is about 28% and 5-0 about 4%.',
      },
      {
        q: 'You can try for a 3-3 split (36%) and, if that fails, take a finesse (50%). What is the combined chance?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: '36% plus half of the remaining 64%: 36 + 32 = 68%.',
      },
      {
        q: 'In the 3NT deal above, why cash the clubs before taking the spade finesse?',
        options: ['To get a count on the hand', 'Testing clubs does not lose the lead, while a losing finesse lets West cash the hearts', 'Because the finesse is more likely to work later', 'To unblock clubs'],
        answer: 1,
        explain: 'If the finesse loses, West runs the hearts and you never get to try the clubs. Cashing the clubs first keeps both chances alive.',
      },
      {
        q: 'You hold A K 10 7 5 opposite 6 4 3 2. On the ace, East drops the queen. On the next round West plays low. What is best?',
        options: ['Play the king', 'Finesse the 10', 'It is exactly 50-50', 'Lead from the other hand'],
        answer: 1,
        explain: 'Restricted choice: from Q J East could have played either honour, but with a singleton queen there was no choice. The singleton is the more likely holding, so the finesse wins about 65% of the time.',
      },
    ],
  },

  {
    id: 'ruffing-finesse-and-loser-on-loser',
    title: 'Ruffing finesses, loser on loser and ruffing a suit good',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Three ways for declarer to use trumps to create tricks: the ruffing finesse, discarding a loser on a loser, and setting up a side suit by ruffing.',
    body: `
<h3>The ruffing finesse</h3>
<p>An ordinary finesse leads <em>towards</em> a tenace. A <strong>ruffing finesse</strong> leads an honour <em>through</em> the defender who may hold the missing higher card, with a void and a trump ready behind it. If that defender covers, you ruff and your remaining honours are winners; if not, you discard a loser.</p>
<p>With ♦K Q J 10 in dummy and no diamond in your hand, lead the ♦K. If East covers with the ace, ruff it, and the Q J 10 are good. If East plays low, throw a loser: when the king wins, you have saved a trick, and when West takes it with the ace, you have only exchanged one loser for another. Either way, the remaining honours give you discards.</p>

<h4>Which finesse?</h4>
<p>With A Q J 10 opposite a singleton you have a choice. The ordinary finesse (lead towards the A Q) wins when <strong>West</strong> holds the king; the ruffing finesse (cash the ace, then lead the queen) wins when <strong>East</strong> holds it. On their own they are equal, so let the rest of the hand decide: the bidding may place the king, and often one defender is dangerous and the other is not. Choose the finesse that, if it loses, loses to the safe defender.</p>
<div class="deal" data-n="S:J103 H:AQJ102 D:762 C:84" data-e="S:62 H:K743 D:J84 C:9653" data-s="S:AKQ984 H:6 D:K53 C:A72" data-w="S:75 H:985 D:AQ109 C:KQJ10" data-caption="4♠ by South. West leads the ♣K."></div>
<p>East is the danger: a diamond from East, through your ♦K, could give the defence three diamond tricks. West is safe: a diamond from West comes round to your king.</p>
<ul>
<li><strong>The ordinary finesse</strong>, a heart to the queen, loses to East's king. East switches to the ♦J and you go two down.</li>
<li><strong>The ruffing finesse</strong>: a heart to the ace, then the ♥Q. If East covers, ruff, and dummy's remaining hearts take care of your diamonds; if East plays low, throw a diamond. As the cards lie you make twelve tricks.</li>
</ul>
<p>And if West had held the ♥K? Then the ruffing finesse loses, but to West, who cannot lead a diamond through your king, and you have already thrown a diamond on the ♥Q: you still make ten tricks. The ruffing finesse makes the contract whoever holds the king.</p>

<h3>Loser on loser</h3>
<p>Sometimes the best answer to a trick you are going to lose is not to ruff it but to throw a loser from another suit on it. The trick count is the same, since one loser replaces another, but you keep your trumps, your control or your entries.</p>
<div class="deal" data-n="S:542 H:9862 D:764 C:A83" data-e="S:J3 H:107 D:J532 C:K9642" data-s="S:AK10987 H:43 D:AKQ C:75" data-w="S:Q6 H:AKQJ5 D:1098 C:QJ10" data-caption="4♠ by South. West cashes the ♥A and ♥K, East playing high-low, and continues with the ♥Q."></div>
<p>East ruffs the third heart with the ♠J. If you overruff, West's ♠Q 6 sits over your one remaining top honour and the queen is promoted: you lose two hearts, a trump and a club, one down. Instead, throw your losing club. East's jack wins the trick, but your trumps are intact: the ace and king drop West's queen, and the club loser has already gone. Ten tricks.</p>
<p>Other common uses:</p>
<ul>
<li><strong>Keeping control:</strong> when the defenders lead a suit you would have to ruff in your long hand, discarding a loser keeps your trump length (see the lesson “Trump management”).</li>
<li><strong>Setting up a suit:</strong> with ♦Q J 10 9 in dummy, no diamond in your hand and the ace and king missing, lead the queen and then the jack, throwing a loser each time. You give up two tricks you were going to lose anyway, and the 10 and 9 are now winners.</li>
<li><strong>An endplay:</strong> the defender who wins a loser-on-loser trick may have to lead into your tenace or give you a ruff and discard (see the lesson “An introduction to squeezes and endplays”).</li>
</ul>

<h3>Setting up a suit by ruffing</h3>
<p>A long side suit in dummy can be <strong>ruffed good</strong>: ruff its low cards in your hand until the defenders have none left, and the rest of the suit provides discards. Each ruff needs an entry back to dummy, and you need one more at the end to cash the long cards, so count entries before you start.</p>
<table>
<thead><tr><th>Dummy</th><th>Your hand</th><th>Split</th><th>Ruffs needed</th><th>Long cards</th></tr></thead>
<tbody>
<tr><td>A K 6 5 4 2</td><td>3</td><td>3-3</td><td>1</td><td>3</td></tr>
<tr><td>A K 6 5 4 2</td><td>3</td><td>4-2</td><td>2</td><td>2</td></tr>
<tr><td>A 6 5 4 3</td><td>7</td><td>4-3</td><td>3</td><td>1</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K85 H:A6543 D:K52 C:64" data-e="S:6 H:K98 D:876 C:QJ10987" data-s="S:AQJ10932 H:7 D:A43 C:A5" data-w="S:74 H:QJ102 D:QJ109 C:K32" data-caption="6♠ by South. West leads the ♦Q."></div>
<p>You have eleven top tricks: seven spades, the ♥A, the ♦A K and the ♣A. The twelfth must come from dummy's hearts, which need three ruffs if they split 4-3, so you need three entries to dummy after the ♥A: the ♠8, the ♠K and the ♦K.</p>
<ol>
<li>Win the ♦Q with the <strong>ace</strong>, keeping dummy's ♦K as an entry.</li>
<li>Play a heart to the ace and ruff a heart with the ♠9.</li>
<li>Lead the ♠2 to dummy's 8 and ruff another heart with the ♠10.</li>
<li>Lead the ♠3 to the king and ruff a third heart with the ♠J. The defenders now have no hearts and no trumps left.</li>
<li>Cross to the ♦K and cash the fifth heart, throwing your losing club. You lose only a diamond.</li>
</ol>
<p>Draw two rounds of trumps before you start, and you are an entry short: the slam goes down.</p>
<div class="tip">Plan the entries before you touch the suit: one for each ruff, plus one to cash the long cards. Dummy's trumps are often the entries, so lead your low trumps to them and ruff with your high ones.</div>
<div class="warn">Ruff high whenever a defender may have run out of the suit and could overruff.</div>
`,
    keyPoints: [
      'A ruffing finesse leads an honour through the defender who may hold the missing card: if covered, ruff; if not, discard a loser.',
      'With A Q J 10 opposite a singleton, choose between the ordinary and the ruffing finesse by asking which defender you can afford to lose to.',
      'Loser on loser: discard a loser instead of ruffing when ruffing would cost a trump trick, control or an entry.',
      'To ruff a suit good you need an entry for each ruff, plus one to cash the long cards.',
      'Use dummy\'s trumps as entries; don\'t draw trumps until you have used them.',
    ],
    quiz: [
      {
        q: 'Dummy has ♦K Q J 10 and you have no diamonds. You lead the ♦K and East plays low. What do you do?',
        options: ['Ruff it', 'Discard a loser', 'Discard a winner', 'Lead another suit instead'],
        answer: 1,
        explain: 'That is the ruffing finesse. If the king wins, you have saved a trick; if West takes it with the ace, you have only exchanged one loser for another, and the Q J 10 are winners.',
      },
      {
        q: 'You hold ♥A Q J 10 in dummy opposite a singleton. When does the ruffing finesse (the ace, then the queen) succeed?',
        options: ['When West has the king', 'When East has the king', 'Whenever hearts split 3-3', 'Always'],
        answer: 1,
        explain: 'The queen is led through East: East covers and you ruff, or East ducks and the queen wins. The ordinary finesse, towards the A Q, is the one that wins when West has the king.',
      },
      {
        q: 'In the 4♠ deal above, why is the ruffing finesse better than the ordinary finesse?',
        options: ['It wins more often', 'If it loses, it loses to West, who cannot attack your ♦K', 'It saves an entry', 'It draws trumps at the same time'],
        answer: 1,
        explain: 'Each finesse wins half the time, but the ordinary one loses to East, who can lead a diamond through your king. If the ruffing finesse loses, West is on lead and you have already thrown a diamond.',
      },
      {
        q: 'In the loser-on-loser deal, East ruffs the third heart with the ♠J. What should you do?',
        options: ['Overruff with the ace', 'Overruff with the king', 'Discard your losing club', 'Discard a diamond'],
        answer: 2,
        explain: 'Overruffing promotes West\'s ♠Q 6 to a trick. Throwing the club, which was a loser anyway, keeps your trumps intact, and the ace and king then drop the queen.',
      },
      {
        q: 'Dummy has ♥A 6 5 4 3 and you have a singleton. The defenders\' hearts split 4-3. How many times must you ruff before dummy\'s last heart is a winner?',
        options: ['Once', 'Twice', 'Three times', 'Four times'],
        answer: 2,
        explain: 'After the ace the defenders still have five hearts, three in one hand. You must ruff three rounds, and you need an entry to dummy after each ruff.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'Balancing',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'When and how to reopen the bidding in the pass-out seat, and why you can bid with less there.',
    body: `
<h3>The balancing seat</h3>
<p>You are in the <strong>balancing</strong> (or pass-out) seat when your pass would end the auction. For example, West opens 1♥, partner passes, East passes, and it is your turn. The opponents have stopped at a low level, which tells you something: East has fewer than 6 points, and West is usually not very strong. The missing strength must be somewhere, and much of it is in partner's hand. Partner may have passed with a good hand simply because there was no suitable bid, for example with length in hearts.</p>

<h3>Borrow a king</h3>
<p>So in the balancing seat you may act with about <strong>3 HCP less</strong> than you would need in the direct seat, as if you had borrowed a king from partner. Partner must then remember to give the king back and should not bid as if you had a full-value action.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Balancing action after 1♥ – pass – pass</th><th>Approximate meaning</th></tr></thead>
<tbody>
<tr><td>Suit overcall</td><td>About 5-13 HCP and a reasonable suit</td></tr>
<tr><td>Double</td><td>About 9+ HCP, short in hearts, support for the other suits (or a strong hand)</td></tr>
<tr><td>1NT</td><td>About 11-14 HCP, balanced, with a heart stopper</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – P – P – ?: double"></div>
<p>10 HCP and short hearts: too light for a direct double, but a normal balancing double.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – P – P – ?: 1NT"></div>
<p>13 HCP, balanced, with diamonds stopped: a balancing 1NT, which shows roughly 11-14 rather than the 15-18 of a direct 1NT overcall.</p>

<h3>When they have found a fit</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Balance with a double"></div>
<p>The opponents have found a spade fit and stopped at the two level, so they have only about half the high-card strength. If they have eight or nine spades, your side very likely has a fit too. Selling out to a two-level contract with a fit is usually a losing policy. Double for takeout, inviting partner to bid their best suit at the three level.</p>

<h3>When not to balance</h3>
<ul>
<li><strong>When you are long in their suit.</strong> Then partner is short in it, and with values they would usually have doubled. They may be in a poor contract; let them play it.</li>
<li><strong>When they have no fit and are struggling.</strong> If opener has rebid a second suit and responder has given a reluctant preference, they may be going down: don't rescue them.</li>
<li><strong>After 1NT – pass – pass</strong>, balance only with a good suit or shape. Opener's partner may have up to 7 points, and the strength is more evenly split.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – P – P – ?: pass"></div>
<p>11 HCP, but five hearts — the opener's suit. Partner probably has at most one or two hearts and did not double, so they are weak. 1♥ is likely to go down; pass.</p>
<div class="tip">When partner balances, remember they have already counted some of your values. Bid one level more cautiously than you would opposite a direct-seat action.</div>
<div class="warn">Don't punish partner for reopening the bidding. If you hold a good hand and partner reopens with a double, consider whether they are making a light balancing bid before you jump to game.</div>
`,
    keyPoints: [
      'In the pass-out seat you may act with about 3 HCP less than in the direct seat ("borrow a king").',
      'After 1♥ – P – P: a suit with about 5-13, a double with about 9+, 1NT with about 11-14.',
      'Don\'t let the opponents play at the two level when they have found a fit; compete.',
      'Be wary of balancing when you are long in their suit.',
      'When partner balances, give back the king: don\'t overbid in response.',
    ],
    quiz: [
      {
        q: '1♥ – P – P – ? You hold ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 HCP).',
        options: ['Pass', 'Double', '1♠', '1NT'],
        answer: 1,
        explain: 'Short hearts and support for the other suits. 10 HCP is light for a direct double but fine in the balancing seat.',
      },
      {
        q: '1♦ – P – P – ? You hold ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 HCP).',
        options: ['Pass', 'Double', '1NT', '2NT'],
        answer: 2,
        explain: 'A balancing 1NT shows about 11-14 with a stopper. This is exactly that hand.',
      },
      {
        q: '1♥ – P – P – ? You hold ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 HCP).',
        options: ['Pass', 'Double', '1NT', '2♦'],
        answer: 0,
        explain: 'With five cards in the opener\'s suit, partner is short in hearts and would have doubled with values. 1♥ may well fail; pass.',
      },
      {
        q: 'Why may you balance with fewer points than you would need in the direct seat?',
        options: ['Because the opponents are weak, partner must hold some values', 'Because the rules allow it', 'Because you are vulnerable', 'Because the opponents cannot double'],
        answer: 0,
        explain: 'If the opponents stop at a low level, the remaining strength is split between you and partner. Partner may have passed a decent hand for lack of a good bid.',
      },
      {
        q: 'The opponents bid 1♠ – 2♠ and pass. In the pass-out seat, what is the general principle?',
        options: ['Always pass: they have a fit', 'Compete: when they have a fit at the two level, your side probably has one too', 'Only bid with 12+ HCP', 'Double for penalty'],
        answer: 1,
        explain: 'If they have eight or nine trumps, you probably have a fit of your own. Letting them play at the two level is usually worse than competing to the three level.',
      },
    ],
  },

  {
    id: 'law-of-total-tricks',
    title: 'The Law of Total Tricks',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'How the number of trumps held by both sides guides competitive decisions in partscore battles.',
    body: `
<h3>The Law</h3>
<p>The <strong>total number of tricks</strong> on a deal is defined as the tricks North–South can take in their best trump suit plus the tricks East–West can take in theirs. The Law of Total Tricks says this total is approximately equal to the <strong>total number of trumps</strong>: the length of North–South's longest fit plus the length of East–West's longest fit.</p>
<p>If you have nine spades and they have eight hearts, there are about 17 total tricks: if they can take nine tricks in hearts, you can take about eight in spades, and so on.</p>

<h3>The practical rule</h3>
<p>In a competitive auction, bid to the level equal to the number of trumps your side holds:</p>
<table>
<thead><tr><th>Your side's trumps</th><th>Compete to</th></tr></thead>
<tbody>
<tr><td>8</td><td>The 2 level (8 tricks)</td></tr>
<tr><td>9</td><td>The 3 level (9 tricks)</td></tr>
<tr><td>10</td><td>The 4 level (10 tricks)</td></tr>
</tbody>
</table>
<p>The logic: with nine trumps you are "safe" at the three level, because even if you go down, the opponents can probably make something themselves. With only eight, bidding at the three level is risky when they also have eight, because the total is just 16.</p>

<h3>An example</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Opener: bid 3♠"></div>
<p>Partner's raise shows three trumps. With six spades your side has nine: compete to 3♠. If they can make 3♥, the total of about 17 tricks suggests you will make eight or nine in spades, so 3♠ is a good result either way.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Opener: pass"></div>
<p>With five spades your side has eight. If both sides have eight trumps (16 total) and they take nine tricks in hearts, you take only seven in spades: 3♠ would go two down. Pass and defend; your values outside spades may well beat 3♥.</p>

<h3>Adjustments</h3>
<p>The Law is an approximation. Expect <strong>more</strong> total tricks than trumps with:</p>
<ul>
<li>a double fit (a second fit in a side suit),</li>
<li>shortness in the opponents' suits combined with long trumps,</li>
<li>honours concentrated in your own long suits.</li>
</ul>
<p>Expect <strong>fewer</strong> total tricks with:</p>
<ul>
<li>queens and jacks in the opponents' suits (good for defence, poor for offence),</li>
<li>flat shape (4-3-3-3) in either hand,</li>
<li>poor trump quality.</li>
</ul>

<h3>Partscore battle principles</h3>
<ul>
<li>Don't sell out at the two level when your side has an eight-card fit and the opponents have one too.</li>
<li>With nine trumps, compete to the three level; preempt with raises when you have extra trumps, especially at favourable vulnerability.</li>
<li>Don't bid three over three with only eight trumps unless you have extra shape: defend instead.</li>
<li>Going one down undoubled (−50 or −100) is better than letting them make a partscore (−110 or −140).</li>
</ul>
<div class="tip">When partner overcalls and you have four-card support and a weak hand, think about the Law: nine or ten trumps between you mean you should raise to the level that matches, making it harder for the opponents.</div>
<div class="warn">Don't use the Law to bid games and slams on weak hands. It is a guide for competitive partscore decisions, where both sides are bidding.</div>
`,
    keyPoints: [
      'Total tricks (both sides\' best contracts) ≈ total trumps (both sides\' longest fits).',
      'Compete to the level equal to your side\'s number of trumps: 8 → two level, 9 → three, 10 → four.',
      'With eight trumps each, three over three is usually wrong: defend.',
      'Adjust upward for double fits and shortness; downward for soft honours in their suits and flat shape.',
      'A small undoubled minus beats letting them make a partscore.',
    ],
    quiz: [
      {
        q: 'Your side has nine trumps in a competitive partscore auction. To what level does the Law suggest competing?',
        options: ['The 2 level', 'The 3 level', 'The 4 level', 'The 5 level'],
        answer: 1,
        explain: 'Bid to the level that equals your trumps: nine trumps, nine tricks, the three level.',
      },
      {
        q: 'Each side has an eight-card fit. The opponents bid 3♥ over your 2♠. What does the Law suggest?',
        options: ['Bid 3♠', 'Defend: with 16 total tricks, if they make nine you make only seven', 'Bid 4♠', 'Double for penalty regardless of your hand'],
        answer: 1,
        explain: 'With 16 total trumps, the tricks add up to about 16. If 3♥ makes, 3♠ goes two down; if 3♠ would make, 3♥ goes down. Either way defending is at least as good.',
      },
      {
        q: 'Which feature suggests more total tricks than the number of trumps?',
        options: ['Queens and jacks in the opponents\' suit', 'A 4-3-3-3 shape', 'A double fit with shortness in the opponents\' suit', 'Weak trumps'],
        answer: 2,
        explain: 'A second fit and shortness let both sides take more tricks in their own contracts than the trump count alone suggests.',
      },
      {
        q: 'You opened 1♠ with six spades and a minimum. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Pass', '3♠', '4♠', 'Double'],
        answer: 1,
        explain: 'Partner has three spades, so your side has nine. Competing to 3♠ is what the Law recommends.',
      },
      {
        q: 'Which is a negative adjustment, suggesting fewer total tricks?',
        options: ['Shortness in the opponents\' suit', 'Queens and jacks in the opponents\' suits', 'A ten-card fit', 'A second fit'],
        answer: 1,
        explain: 'Soft honours in the opponents\' suits take tricks on defence but are of little use when you declare, so both sides tend to take fewer tricks as declarer.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Vulnerability, IMPs, matchpoints and par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'How vulnerability and the form of scoring change your bidding and play decisions.',
    body: `
<h3>Vulnerability</h3>
<p>Each deal states who is vulnerable. From your side's point of view there are four combinations, usually described as:</p>
<ul>
<li><strong>Favourable:</strong> you not vulnerable, they vulnerable. Preempt and sacrifice freely; your undertricks are cheap and their games are expensive.</li>
<li><strong>Equal:</strong> both sides not vulnerable, or both vulnerable.</li>
<li><strong>Unfavourable:</strong> you vulnerable, they not. Be careful: going down costs 100 a trick undoubled and 200-300 doubled, while their games are worth less.</li>
</ul>
<p>Vulnerability also changes your game decisions: a vulnerable game is worth 500 extra rather than 300, so vulnerable games are worth bidding on thinner values, particularly at IMPs.</p>

<h3>Teams: IMPs</h3>
<p>In a teams match the same deals are played at both tables, and the difference in score is converted into International Match Points:</p>
<table>
<thead><tr><th>Difference</th><th>IMPs</th><th>Difference</th><th>IMPs</th></tr></thead>
<tbody>
<tr><td>20-40</td><td>1</td><td>600-740</td><td>12</td></tr>
<tr><td>50-80</td><td>2</td><td>750-890</td><td>13</td></tr>
<tr><td>90-120</td><td>3</td><td>900-1090</td><td>14</td></tr>
<tr><td>130-160</td><td>4</td><td>1100-1290</td><td>15</td></tr>
<tr><td>170-210</td><td>5</td><td>1300-1490</td><td>16</td></tr>
<tr><td>220-260</td><td>6</td><td>1500-1740</td><td>17</td></tr>
<tr><td>270-310</td><td>7</td><td>1750-1990</td><td>18</td></tr>
<tr><td>320-360</td><td>8</td><td>2000-2240</td><td>19</td></tr>
<tr><td>370-420</td><td>9</td><td>2250-2490</td><td>20</td></tr>
<tr><td>430-490</td><td>10</td><td>2500-2990</td><td>21</td></tr>
<tr><td>500-590</td><td>11</td><td>3000-3490</td><td>22</td></tr>
</tbody>
</table>
<p>Differences of 0-10 score 0; 3500-3990 score 23 and 4000+ score 24. The scale grows slowly, so big swings come from games and slams, and overtricks hardly matter. That gives the IMP strategy:</p>
<ul>
<li><strong>Bid games aggressively.</strong> Not vulnerable, bidding 4♠ gains 6 IMPs when it makes (+420 against +170) and loses 5 when it fails (−50 against +140): worth bidding at about 45%. Vulnerable: gain 10 (+620 against +170), lose 6 (−100 against +140): worth bidding at about 37%.</li>
<li><strong>Small slams</strong> are worth bidding at about 50%; <strong>grand slams</strong> only at well over 50% (break-even is about 56-57%, and in practice you want near certainty).</li>
<li><strong>Safety first in the play</strong>: give up an overtrick to guard the contract.</li>
</ul>

<h3>Pairs: matchpoints</h3>
<p>In a pairs event your score on each deal is compared with every other pair who played your direction, and you earn a point (two, in some scoring methods) for each one you beat. The <em>size</em> of the difference does not matter, only how many pairs you beat. That changes priorities:</p>
<ul>
<li>Overtricks matter: +450 beats +420 just as surely as +620 beats +170.</li>
<li>Higher-scoring strains matter: 3NT making ten tricks (+430) beats 4♠ making ten (+420). With two balanced hands and a 4-4 major fit, 3NT is sometimes chosen for this reason.</li>
<li>Partscores are fought hard: +110 against +90 is a big difference in matchpoints, and pushing the opponents one level higher to go down is often the winning action.</li>
<li>Doubling a partscore for +200 can beat everyone who scored +110 or +140, but if they make it doubled, you get a bottom.</li>
<li>Safety plays that cost an overtrick are only right when the contract itself is in real danger.</li>
</ul>

<h3>Par</h3>
<p>The <strong>par</strong> result is what happens when both sides bid perfectly, knowing all four hands. For example, if East–West, vulnerable, can make 4♠ (620) and North–South, not vulnerable, can take eight tricks in diamonds, par is 5♦ doubled down three by North–South: −500 is better for them than −620. Real results are compared with par to see which side gained, and thinking about par trains good competitive judgement.</p>
<div class="tip">Before each deal, note the vulnerability. Ask: "How much is their game worth, and how much can I afford to lose?"</div>
<div class="warn">Don't take unnecessary risks for overtricks at IMPs, and don't take safety plays that cost overtricks at matchpoints when the contract is not in danger. The right play can depend on the scoring.</div>
`,
    keyPoints: [
      'Favourable (you not vulnerable, they vulnerable) is the time to preempt and sacrifice; unfavourable is the time to be careful.',
      'IMPs: bid non-vulnerable games at about 45%, vulnerable games at about 37%, small slams at 50%.',
      'IMPs: overtricks matter little; protect the contract.',
      'Matchpoints: every pair you beat counts, so overtricks and higher-scoring strains matter.',
      'Par is the result of perfect bidding by both sides, including sacrifices.',
    ],
    quiz: [
      {
        q: 'What does "unfavourable vulnerability" mean?',
        options: ['Both sides vulnerable', 'You vulnerable, they not vulnerable', 'You not vulnerable, they vulnerable', 'Neither side vulnerable'],
        answer: 1,
        explain: 'Unfavourable means your undertricks are expensive and their games are relatively cheap: the worst time to sacrifice or preempt wildly.',
      },
      {
        q: 'At IMPs, roughly how often must a vulnerable game make to be worth bidding?',
        options: ['About 37%', 'About 50%', 'About 60%', 'About 75%'],
        answer: 0,
        explain: 'You gain 10 IMPs (+620 against +170) when it makes and lose 6 (−100 against +140) when it fails, so break-even is about 6/16 = 37.5%.',
      },
      {
        q: 'At matchpoints, why does +430 against +420 matter?',
        options: ['It doesn\'t: the difference is tiny', 'Every pair you outscore counts, however small the margin', 'Because of the IMP scale', 'Because notrump scores a bonus'],
        answer: 1,
        explain: 'At pairs, only the ranking matters. Ten points beats a pair as surely as a thousand.',
      },
      {
        q: 'At IMPs, how many IMPs is a difference of 250 points?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 is 6 IMPs. For example, +420 against +170 when one team bids a non-vulnerable game and the other stops in a partscore.',
      },
      {
        q: 'The opponents, vulnerable, can make 4♠ (620). You are not vulnerable and expect to go down three in 5♦ doubled. What is that worth?',
        options: ['A loss of 800', 'A loss of 500, which is better than −620', 'A loss of 300', 'A gain'],
        answer: 1,
        explain: 'Not vulnerable, three down doubled is 100 + 200 + 200 = 500. That is 120 less than their game, so the sacrifice gains if 4♠ really makes.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Safety plays',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'How to give up a little, usually an overtrick, to protect the contract against a bad split.',
    body: `
<h3>Insurance for your contract</h3>
<p>A <strong>safety play</strong> is a way of handling a suit (or the whole hand) that guards against a bad break, usually at the cost of a small chance of an extra trick. You buy insurance: you give up a little on the good layouts to avoid disaster on the bad ones. The first question is therefore always: <em>how many tricks do I need from this suit?</em> The best play for four tricks is often different from the best play for five.</p>

<h3>Keep a tenace on both sides</h3>
<p>You hold A Q 9 6 5 in dummy opposite K 10 4 3 in hand, missing J 8 7 2, and you need five tricks. Most of the time any sensible play works; the danger is all four missing cards in one hand.</p>
<ul>
<li><strong>Cash the ace first.</strong> If West shows out, East holds J 8 7, sitting in front of your K 10, so you lead twice from dummy and finesse. If East shows out, West holds J 8 7 in front of dummy's Q 9, so you lead twice from hand and finesse. Five tricks whichever defender has the length.</li>
<li>Cashing the king first is a mistake: if West then shows out, East's J 8 7 sits behind dummy's remaining A Q 9, your 10 4 3 cannot capture the jack, and East must make a trick.</li>
</ul>
<p>The general rule: when you hold all the top honours but one, cash first the honour that leaves a finessing position in <em>both</em> hands.</p>

<h3>Giving up an overtrick to make sure of the contract</h3>
<p>You hold A K 10 5 4 in dummy opposite 8 7 6, and you need four tricks; you can afford to lose one. The natural play, ace, king and another, makes four tricks only about 73% of the time: it fails against 5-0 splits and most 4-1 splits.</p>
<p>Better: cash the ace, then lead towards dummy and, if West plays low, put in the 10. If East wins with an honour, the suit has usually split 3-2 and the king and the long cards are good; if the 10 wins, you have picked up West's length. This makes four tricks about 82% of the time: as well as every 3-2 split, it copes with all the 4-1 splits in which West holds the length. The price is a slightly smaller chance of five tricks, which matters only if you need them.</p>

<h3>Ducking for safety</h3>
<p>Dummy has A K 7 6 5 4 and only one outside entry; you have 3 2 and need four tricks. If you play the ace and king and a third round, a 4-1 split leaves you with two losers in the suit and no way back to the long cards. Instead, duck the first round completely. Later you can play to the ace and king and, if the suit was 4-1, give up one more round and use the outside entry to cash the last two. Four tricks against any 3-2 or 4-1 split: 96%.</p>

<h3>Safety for the whole hand</h3>
<p>Safety is not only about single suits. Suppose in 3NT you can count nine tricks, and a finesse could give you a tenth, but if it loses, the defender who wins can cash four tricks in their long suit. Don't take it. At teams scoring, an overtrick is worth 1 IMP at most and the contract is worth far more. Similarly, before you take a risk in one suit, ask whether a different suit could provide the tricks with no risk at all.</p>
<div class="tip">Before you touch a key suit, ask: "What is the worst split I can cope with, and which play copes with it?"</div>

<h3>Safety plays and the form of scoring</h3>
<ul>
<li><strong>Teams (IMPs):</strong> take almost every safety play that protects the contract. An overtrick gains very little; a failed game loses a lot.</li>
<li><strong>Pairs (matchpoints):</strong> overtricks matter, because everyone else in the same contract is competing with you. Take a safety play only when the contract is genuinely in danger, or when you suspect you are in a better contract than the rest of the room.</li>
</ul>
<div class="warn">A safety play that you take when you didn't need to, or that guards against the wrong danger, is just a lost trick. Count your tricks first; then decide whether you need insurance and which kind.</div>
`,
    keyPoints: [
      'First decide how many tricks you need from the suit; the best play depends on it.',
      'With A Q 9 x x opposite K 10 x x, cash the ace first so you keep a finesse against either defender.',
      'With A K 10 x x opposite x x x and four tricks needed, cash the ace and then finesse the 10.',
      'Duck an early round when entries are short and you can afford one loser.',
      'At IMPs take safety plays freely; at matchpoints only when the contract is at risk.',
    ],
    quiz: [
      {
        q: 'You hold A Q 9 6 5 opposite K 10 4 3 and need five tricks. Which card should you cash first?',
        options: ['The ace', 'The king', 'The queen', 'It does not matter'],
        answer: 0,
        explain: 'After the ace, you keep K 10 behind East and Q 9 behind West, so a 4-0 split can be picked up whichever defender has the four cards.',
      },
      {
        q: 'You hold A K 10 5 4 opposite 8 7 6 and need only four tricks. What is the safety play?',
        options: ['Cash the ace and king, then play a third round', 'Cash the ace, then lead towards dummy and finesse the 10 if West plays low', 'Lead the 10 from dummy', 'Duck the first two rounds'],
        answer: 1,
        explain: 'This guards against West holding Q J 9 x, and still makes four tricks on all normal splits: about 82%, against about 73% for cashing the top cards.',
      },
      {
        q: 'Dummy has A K 7 6 5 4 and one outside entry; you have 3 2. You need four tricks from the suit. What do you do?',
        options: ['Ace, king, then a third round', 'Duck the first round', 'Lead the 3 and finesse the 7', 'Cash the ace and hope'],
        answer: 1,
        explain: 'Ducking the first round preserves dummy\'s top cards as entries. You then make four tricks against both 3-2 and 4-1 splits, about 96% of the time.',
      },
      {
        q: 'At IMPs you can count nine tricks in 3NT. A finesse could give a tenth, but if it loses, the defence can run a suit. What do you do?',
        options: ['Take the finesse for the overtrick', 'Take your nine tricks', 'Duck a trick first', 'Play for a squeeze'],
        answer: 1,
        explain: 'The overtrick is worth almost nothing at IMPs, while going down costs a game. Bank the contract.',
      },
      {
        q: 'Why are safety plays taken less often at matchpoints?',
        options: ['Because they are illegal there', 'Because an overtrick can beat the other pairs in the same contract', 'Because games score less', 'Because defenders are weaker'],
        answer: 1,
        explain: 'At pairs, +450 beats +420 just as surely as +420 beats −50. Giving up an overtrick costs matchpoints whenever the contract was never really in danger.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Avoidance: keeping the dangerous opponent off lead',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'How to arrange the play so that, if you must lose a trick, you lose it to the defender who cannot hurt you.',
    body: `
<h3>Danger hand and safe hand</h3>
<p>Often only one defender can hurt you. In notrump, it is the one with established winners in their long suit. In a suit contract, it may be the one who can lead through a king, or who can give their partner a ruff. Identify the <strong>danger hand</strong> early, and plan to lose any tricks you have to lose to the <strong>safe hand</strong>. This is avoidance play.</p>

<h3>A complete example</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3NT by South. West leads the ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Count:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: eight top tricks. Clubs will provide the extra tricks, but you may have to lose one to the ♣Q.</p>
<p><strong>Step 1, the hold-up.</strong> You have six spades between the hands, so by the Rule of 7 you hold up once. Duck the ♠K and win the second spade. East started with two spades, so East now has none: <strong>East is the safe hand, West the danger hand.</strong></p>
<p><strong>Step 2, choose the finesse.</strong> Clubs are a two-way guess: you could finesse either defender for the queen. Play the ♣K from hand, then lead a low club towards dummy and, when West plays low, finesse the 10. If West has the queen, the finesse wins. If East has it, as here, East wins but has no spade to return. You win the switch and take ten tricks: a spade, two hearts, three diamonds and four clubs.</p>
<p>Finessing the other way (leading the ♣J through East towards your king) would happen to work on this layout, but it would lose whenever West held the queen, and West would then cash the spades. The avoidance line wins wherever the queen is.</p>
<p>What about the heart finesse, leading towards the A J? That would also lose to West if West held the ♥Q. Prefer the suit where the losing finesse goes into the safe hand.</p>
<div class="tip">With a two-way finesse, ask first: "If this finesse loses, does it matter who wins?" If it does, finesse into the safe hand, and only fall back on guessing when both defenders are equally dangerous.</div>

<h3>Other avoidance techniques</h3>
<ul>
<li><strong>Duck to the safe hand.</strong> When a suit has to give up a trick, arrange for the safe defender to win it: lead from the hand that lets you play low while the danger hand is unable to win cheaply.</li>
<li><strong>Protect a king.</strong> With K x in hand and the danger hand on your right, a lead through your king is fatal, so keep the danger hand off lead.</li>
<li><strong>Play towards honours</strong> so that the danger hand's partner must win, rather than the danger hand.</li>
<li><strong>In suit contracts</strong>, the danger may be a ruff: if one defender is known to be short in a suit, keep their partner off lead so the ruff cannot be given.</li>
</ul>
<div class="warn">Avoidance only works if you know which defender is dangerous. Watch the opening lead, the bidding and the cards played to the first tricks, and work out the long-suit holder before you start your key suit.</div>
`,
    keyPoints: [
      'Identify the danger hand (often the defender with established winners) and the safe hand.',
      'If a trick must be lost, lose it to the safe hand.',
      'Combine the hold-up with avoidance: make the partner of the long-suit holder the safe hand, then finesse into that hand.',
      'With a two-way finesse, choose the direction that loses only to the safe hand.',
      'Prefer a source of tricks where the losing option goes into the safe hand.',
    ],
    quiz: [
      {
        q: 'In notrump, which defender is usually the danger hand?',
        options: ['The one with more HCP', 'The one with established winners in their long suit', 'The one on your left', 'The one who made the opening lead, always'],
        answer: 1,
        explain: 'The danger hand is the one who can cash enough tricks to beat you once on lead, normally the defender with the long, established suit.',
      },
      {
        q: 'In the deal above, why duck the first spade?',
        options: ['To win an extra spade trick', 'To exhaust East\'s spades so that East becomes the safe hand', 'To hide your spade length', 'To create an entry to dummy'],
        answer: 1,
        explain: 'East had two spades. After winning the second round, East has none, so East cannot hurt you on lead.',
      },
      {
        q: 'In the deal above, which way should you take the club finesse?',
        options: ['Finesse West for the queen, so that a losing finesse goes to East', 'Finesse East for the queen', 'Play for the drop', 'Toss a coin'],
        answer: 0,
        explain: 'Leading towards dummy and finessing the 10 wins if West has the queen, and loses only to East, who has no spades. The contract is safe either way.',
      },
      {
        q: 'Why not try the heart finesse (leading towards the A J) for the ninth trick?',
        options: ['It would lose if West, the danger hand, held the ♥Q', 'It cannot win', 'It needs two entries', 'Hearts are blocked'],
        answer: 0,
        explain: 'Leading towards the A J finesses against East but loses to West\'s queen, and West would then cash the spades. The club finesse loses only to the safe hand.',
      },
      {
        q: 'You hold K x in hand and the danger hand sits on your right. What is the risk?',
        options: ['None', 'A lead from the danger hand through your king could trap it', 'Your king will be ruffed', 'You may block the suit'],
        answer: 1,
        explain: 'If the defender on your right gains the lead, their partner\'s ace sits over your king. Keep that defender off lead, or arrange for the other defender to win any trick you must lose.',
      },
    ],
  },

  {
    id: 'dummy-reversal-and-trump-coup',
    title: 'Dummy reversal and the trump coup',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Two plays that ruff in the long trump hand on purpose: letting dummy\'s trumps draw the defenders\', and shortening your own trumps to finesse when dummy has none left to lead.',
    body: `
<h3>Ruffing in the long hand</h3>
<p>The lesson “Trump management” explains that ruffs in the short trump hand gain tricks and ruffs in the long hand usually do not. Two techniques turn that rule around. In a <strong>dummy reversal</strong> you ruff in your hand so often that dummy's trumps take over the job of drawing trumps. In a <strong>trump coup</strong> you ruff to shorten your trumps, so that you can capture a defender's trump honour without leading trumps.</p>

<h3>Dummy reversal</h3>
<p>With five trumps in your hand and three in dummy you normally make five trump tricks. Ruff three times in your hand and then draw trumps with dummy's three, and you make six: three ruffs plus three rounds of trumps from dummy. Dummy has become the master hand, and your ruffs are now ruffs in the short hand.</p>
<div class="deal" data-n="S:KQJ H:A654 D:853 C:K42" data-e="S:532 H:10872 D:964 C:973" data-s="S:A10987 H:3 D:A72 C:AQJ10" data-w="S:64 H:KQJ9 D:KQJ10 C:865" data-caption="6♠ by South. West leads the ♦K."></div>
<p><strong>Count:</strong> five spades, the ♥A, the ♦A and four clubs make eleven tricks. Dummy cannot ruff anything, since it has as many diamonds and clubs as you, and your two diamond losers have nowhere to go.</p>
<p><strong>Reverse the dummy:</strong> ruff dummy's three small hearts in your hand and let the ♠K Q J draw trumps. The entries to dummy are the ♥A, the ♠K, the ♠Q and the ♣K.</p>
<ol>
<li>Win the ♦A and play a heart to the ace.</li>
<li>Ruff a heart, and lead a low spade to the king.</li>
<li>Ruff a heart, and lead a spade to the queen.</li>
<li>Ruff the last heart with the ♠A, and cross to dummy with a club to the king.</li>
<li>Draw the last trump with the ♠J, throwing a diamond, and take the rest of the clubs.</li>
</ol>
<p>Six trump tricks (three ruffs and three rounds from dummy), the ♥A, the ♦A and four clubs make twelve. The plan needs trumps to split 3-2, so that dummy's three trumps can draw them, and it needs every entry. That is why only a trump lead beats 6♠: it takes out a round of trumps before the ruffing has started, and declarer is an entry short.</p>
<div class="tip">Test for a dummy reversal: add the ruffs you can take in your hand to dummy's trump length. If the total beats your own trump length, and dummy's trumps are strong enough to draw the defenders', a reversal gains a trick.</div>

<h3>The trump coup</h3>
<p>Sometimes a defender holds a trump honour behind your tenace, such as ♠K x over your ♠A Q, and dummy has no trump left to lead through it. You cannot finesse by leading trumps yourself. But if dummy leads at the end of the hand, when the defender has nothing but trumps left, the defender has to play one <em>before</em> you, and the finesse works without a trump in dummy. That is a <strong>trump coup</strong>. For it to work, you must first shorten your trumps by ruffing until you have no more than the defender.</p>
<div class="deal" data-n="S:54 H:AK76 D:AKQJ C:765" data-e="S:K876 H:QJ9 D:10985 C:32" data-s="S:AQJ1093 H:54 D:7632 C:4" data-w="S:2 H:10832 D:4 C:AKQJ1098" data-caption="6♠ by South. West cashes the ♣A and switches to the ♥10."></div>
<p>You can lose nothing more. Win the ♥A and lead a spade: East plays low and your 9 wins. Cross to the ♦A and repeat the finesse: the 10 wins and West shows out. East started with four trumps and still holds ♠K 8 over your ♠A Q J 3, and dummy has no spade left. Cash the ace now and East's king takes a trick: one down.</p>
<p>Instead, shorten your trumps. You hold four to East's two, so you must ruff twice:</p>
<ol>
<li>Cross to the ♦K, cash the ♥K and ruff a club with the ♠3.</li>
<li>Cross to the ♦Q and ruff a heart with the ♠J. Now you have ♠A Q, as many trumps as East.</li>
<li>Cross to the ♦J; East follows suit. At trick twelve dummy leads.</li>
</ol>
<p>Ruff one club and one heart, not two clubs: East has to follow suit each time and never gets a free discard. Given one, he would throw a diamond and later ruff one of dummy's diamond winners.</p>
<div class="deal" data-n="S:- H:6 D:- C:6" data-e="S:K8 H:- D:- C:-" data-s="S:AQ H:- D:- C:-" data-w="S:- H:- D:- C:KQ" data-caption="The last two tricks. Spades are trumps and dummy leads."></div>
<p>East has only trumps and must play one before you: the ♠8, and you win with the queen, or the ♠K, and you win with the ace. Twelve tricks.</p>
<h4>What a trump coup needs</h4>
<ul>
<li><strong>No more trumps than the defender</strong> at the end: shorten yours by ruffing, even by ruffing dummy's winners if you must (that is called a <em>grand coup</em>).</li>
<li><strong>Entries to dummy</strong> for every trump finesse, every ruff and the final lead.</li>
<li><strong>The right timing:</strong> when the coup comes, the defender must have nothing but trumps left. Counting the defender's hand tells you when.</li>
</ul>
<div class="warn">Shorten your trumps only when you know you need to. If trumps had split 3-3, the ace would drop the king and ruffing in your hand would only waste trumps. Here West showing out on the second round told you that East started with four.</div>
`,
    keyPoints: [
      'A dummy reversal ruffs in the long trump hand so often that dummy\'s trumps draw the defenders\'.',
      'It gains when ruffs in your hand plus dummy\'s trump length beat your own trump length; it needs good trumps in dummy and entries.',
      'A trump coup captures a defender\'s trump honour without leading trumps: the lead comes from dummy and the defender must play first.',
      'Before a trump coup, shorten your trumps by ruffing until you have no more than the defender.',
      'Count the defender\'s trumps first; a coup is needed only when the split is bad.',
    ],
    quiz: [
      {
        q: 'What is a dummy reversal?',
        options: ['Ruffing dummy\'s losers in dummy', 'Ruffing in your own long trump hand often enough that dummy\'s trumps draw the defenders\'', 'Letting dummy play the hand', 'Switching to notrump'],
        answer: 1,
        explain: 'The roles of the hands are reversed: your trumps are used for ruffing, and dummy\'s shorter but strong trumps draw the defenders\' trumps.',
      },
      {
        q: 'You have five trumps and dummy has three strong ones. How many ruffs in your hand do you need for a dummy reversal to gain a trick?',
        options: ['One', 'Two', 'Three', 'Five'],
        answer: 2,
        explain: 'Three ruffs plus dummy\'s three rounds of trumps make six trump tricks, one more than your own five.',
      },
      {
        q: 'In the dummy reversal deal above, which opening lead beats 6♠?',
        options: ['The ♦K', 'A heart', 'A trump', 'A club'],
        answer: 2,
        explain: 'A trump lead takes out a round of trumps before declarer can start ruffing, and declarer then has one entry too few to complete the reversal.',
      },
      {
        q: 'What must you do before a trump coup?',
        options: ['Draw all the defenders\' trumps', 'Shorten your trumps by ruffing until you have no more than the defender', 'Keep a trump in dummy', 'Lead your trump tenace'],
        answer: 1,
        explain: 'At the end, the defender must have only trumps left and you must not have more trumps than they do, so that the lead from dummy forces them to play before you.',
      },
      {
        q: 'In the trump coup ending above, why does East\'s king not score?',
        options: ['East has to play a trump before you, and you play over it', 'The king was already played', 'West has the king', 'East is squeezed in hearts'],
        answer: 0,
        explain: 'Dummy leads a heart and East has only the ♠K 8. Whichever East plays, you win with the card just above it.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Counting on defence',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'How defenders count declarer\'s points, distribution and tricks to find the right defence.',
    body: `
<h3>Three things to count</h3>
<p>Strong defenders seem to see through the backs of the cards. Their secret is counting. From the auction and the first few tricks they work out three things:</p>
<ol>
<li><strong>Points:</strong> how many HCP declarer and partner have.</li>
<li><strong>Distribution:</strong> how many cards declarer holds in each suit.</li>
<li><strong>Tricks:</strong> how many tricks declarer can take, and how many the defence needs.</li>
</ol>

<h3>Counting points</h3>
<p>Start with the bidding. A 1NT opener has 15-17, a weak two 5-10, a limit raise 10-12. When dummy appears, add its HCP to yours and subtract from 40.</p>
<p>Example: South opens 1NT and North raises to 3NT. Dummy has 10 HCP and you have 9. Partner has 40 − 10 − 9 − (15 to 17) = 4 to 6 HCP. If partner has already shown the ♠K by winning a trick with it, they have at most 3 more HCP, so they cannot hold another ace. Any other missing ace is therefore with declarer, and there is no point hoping partner can get in to cash their long suit.</p>
<p>The same count works in reverse. If declarer, who has shown 15-17, has already turned up with the ♠AQ, ♥AK and ♦K (16), declarer cannot also hold the ♣A (that would make 20). Partner has it, and you can safely lead clubs through dummy's K.</p>

<h3>Counting distribution</h3>
<p>Every hand has 13 cards. Use the bidding first: a 1♥ opener has five or more hearts; 1♠ followed by 2♥ shows five spades and four hearts at least; a 1NT opener has no singleton. Add partner's count signals and the moment a player shows out.</p>
<table>
<thead><tr><th>Source</th><th>What you learn</th></tr></thead>
<tbody>
<tr><td>Declarer's opening and rebid</td><td>Length in the suits bid; balanced or not</td></tr>
<tr><td>Dummy</td><td>13 cards you can see</td></tr>
<tr><td>Partner's count signals</td><td>Partner's length in declarer's suits, so also declarer's</td></tr>
<tr><td>A player showing out</td><td>Their exact length in that suit</td></tr>
</tbody>
</table>
<p>Example: declarer opened 1♠ and rebid 2♥, so declarer has at least 5-4 in the majors. Partner's count shows that declarer has two diamonds. That accounts for eleven cards, so declarer has at most two clubs, and if the auction suggests 5-4-2-2, declarer has exactly two. If declarer now leads a club towards dummy's K Q x x and you hold the ace, you know whether ducking can cut declarer off from the rest of the suit.</p>
<div class="tip">Count the hand as early as you can, ideally by trick three. Write the four suit lengths in your head (for example "5-4-2-2") and update them each time a card tells you something.</div>

<h3>Counting tricks</h3>
<p>Ask: "How many tricks can declarer take once on lead?" If the answer already reaches the contract, you must take your tricks now: switch, cash, or take the setting trick at once. If declarer is short of tricks, defend passively and let declarer lose them.</p>
<p>Example: against 4♠, dummy has ♣A K Q J 5, and the bidding and early play show that declarer has a strong spade suit and the ♥A. Once trumps are drawn, declarer can count five spades, five clubs and the ♥A: eleven tricks. If you have tricks in hearts or diamonds, they must be taken immediately, even at the risk of leading away from a king.</p>
<p>Conversely, against a 1NT – 3NT auction with a flat dummy and no long suit, declarer may have only seven or eight tricks. Then the defence should avoid opening new suits and wait: declarer will have to give tricks away.</p>

<h3>Putting it together</h3>
<p>Counting is not a single calculation but a habit. Each trick, ask what the card played tells you about the four hands. As the picture becomes clear, the right defence often becomes obvious, and when it is not, the count at least tells you which layouts you need for the contract to fail. Play for those layouts.</p>
<div class="warn">Don't count only your own side's tricks. The question is always whether declarer can make the contract, and how your side can prevent it.</div>
`,
    keyPoints: [
      'Count points: from the bidding plus dummy plus your hand, work out partner\'s HCP.',
      'Count distribution: bidding, dummy, partner\'s count signals and show-outs add up to 13.',
      'Count declarer\'s tricks: if declarer has enough, take your tricks now; if not, defend passively.',
      'When declarer has shown a range, the honours already played limit what else declarer can hold.',
      'Assume the layout that lets the contract be defeated and defend accordingly.',
    ],
    quiz: [
      {
        q: 'South opened 1NT (15-17) and North raised to 3NT. Dummy has 10 HCP and you have 9. How many HCP does partner have?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 for declarer and partner together. Declarer has 15-17, so partner has 4-6.',
      },
      {
        q: 'Declarer opened 1NT (15-17) and has already shown the ♠AQ, ♥AK and ♦K. Who has the ♣A?',
        options: ['Declarer', 'Partner', 'It cannot be known', 'Dummy'],
        answer: 1,
        explain: 'Declarer has shown 16 HCP. The ♣A would bring declarer to 20, outside the range, so partner must have it.',
      },
      {
        q: 'Declarer opened 1♠ and rebid 2♥. Partner\'s count shows declarer has two diamonds. What is the most clubs declarer can hold?',
        options: ['One', 'Two', 'Three', 'Four'],
        answer: 1,
        explain: 'At least five spades and four hearts plus two diamonds makes eleven, so declarer has at most two clubs.',
      },
      {
        q: 'Against 4♠, you can count eleven tricks for declarer once declarer regains the lead. What should the defence do?',
        options: ['Defend passively', 'Take or set up your tricks immediately', 'Lead trumps', 'Wait for declarer to make a mistake'],
        answer: 1,
        explain: 'If declarer has the tricks needed, passive defence just lets declarer take them. Your only chance is to take your tricks now.',
      },
      {
        q: 'Against 3NT, dummy is flat and declarer seems to have only seven or eight tricks. What kind of defence is usually best?',
        options: ['Passive: avoid opening new suits', 'Attack every suit in turn', 'Cash all your aces at once', 'Underlead your kings'],
        answer: 0,
        explain: 'Declarer is short of tricks. Breaking new suits risks giving declarer one; safe exits make declarer find the tricks unaided.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Penalty doubles and sacrifices',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'When to double the opponents for penalty, and when to bid on to a contract you expect to fail because it costs less than theirs.',
    body: `
<h3>Penalty doubles</h3>
<p>Many low-level doubles are for takeout, so penalty doubles come from a few clear situations:</p>
<ul>
<li><strong>After a negative-double sequence:</strong> responder passes with a strong holding in the overcaller's suit, and opener reopens with a double that responder passes (see the lesson “Negative doubles”).</li>
<li><strong>After your side has redoubled</strong> (1♥ – X – XX), you have shown the balance of strength, and doubles of the opponents' escape bids are for penalty.</li>
<li><strong>When the opponents have stretched</strong> into a game or high partscore on a misfit or in a competitive auction, and you hold trump tricks.</li>
<li><strong>When you have already described your hand</strong> and partner has values: a double by either of you then says "we can beat this".</li>
</ul>
<h4>Guidelines</h4>
<ul>
<li>Trump tricks are the best reason to double. High cards in side suits can be ruffed or finessed.</li>
<li>Don't double a freely bid game on high cards alone. The opponents know what they are missing, and your double tells declarer where the honours are.</li>
<li>Think about what happens if it makes. 2♥ doubled making scores 470 or 670: a partscore has become a game.</li>
<li>Think about where they can run. Doubling 1♠ when they have an easy escape to a better fit wins little.</li>
</ul>

<h3>How much does a doubled set cost?</h3>
<table>
<thead><tr><th>Down</th><th>Not vul doubled</th><th>Vul doubled</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Sacrifices</h3>
<p>A <strong>sacrifice</strong> is a contract you expect to go down in, because the penalty will cost less than the opponents' contract would score. Compare the numbers:</p>
<table>
<thead><tr><th>Their game</th><th>Worth</th><th>You can afford (doubled), not vul</th><th>You can afford (doubled), vul</th></tr></thead>
<tbody>
<tr><td>Not vulnerable</td><td>420</td><td>2 down (300)</td><td>1 down (200)</td></tr>
<tr><td>Vulnerable</td><td>620</td><td>3 down (500)</td><td>2 down (500)</td></tr>
</tbody>
</table>
<p>So sacrifices are cheapest at <strong>favourable vulnerability</strong>: you not vulnerable, they vulnerable.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Favourable vulnerability: bid 5♥"></div>
<p>Partner overcalled 2♥ and East jumped to 4♠. You have five-card heart support, a singleton spade and little defence: 4♠ will almost certainly make, scoring 620. 5♥ doubled is likely to go two or three down: 300 or 500. Bid 5♥ now, before the opponents can exchange more information.</p>

<h3>When not to sacrifice</h3>
<ul>
<li><strong>When their contract may fail.</strong> A sacrifice against a contract that would have gone down is a <em>phantom sacrifice</em>: you turn a plus score into a minus. If you have defensive tricks, defend.</li>
<li><strong>When the cost is too high.</strong> Vulnerable against not vulnerable, there is almost never a profitable save against a game.</li>
<li><strong>When you have already described your hand and partner is better placed to decide</strong>: the player with more information makes the decision. Don't overrule partner's decision to defend. If partner has made a forcing pass, follow the partnership agreement.</li>
<li><strong>When the opponents might bid on.</strong> Left alone, they may go on to a five-level contract that fails; a sacrifice, on the other hand, can push them into a slam that makes.</li>
</ul>
<div class="tip">"The five level belongs to the opponents": when they bid five over your four-level game, defending (often doubling) is usually right. Bidding six to sacrifice is rarely profitable.</div>
<div class="warn">Decide early. A sacrifice bid quickly, before the opponents have exchanged information, is far more effective than one made after they have found out exactly where they belong.</div>
`,
    keyPoints: [
      'Penalty doubles work best with trump tricks, after your side has shown the balance of strength.',
      'Don\'t double freely bid games on side-suit high cards alone, and beware doubling a partscore into game.',
      'A sacrifice pays when the penalty is less than their contract\'s value.',
      'Against a vulnerable game (620), not vulnerable you can go three down doubled (500); against a non-vulnerable game (420), two down (300).',
      'Avoid phantom sacrifices: if you have defensive tricks, defend.',
    ],
    quiz: [
      {
        q: 'Both sides are not vulnerable. The opponents can make 4♠ (420). How many tricks down doubled can you afford in a sacrifice?',
        options: ['One', 'Two', 'Three', 'Four'],
        answer: 1,
        explain: 'Two down doubled not vulnerable is 300, less than 420. Three down is 500, more than their game.',
      },
      {
        q: 'At favourable vulnerability, the opponents can make a vulnerable 4♠ (620). How many down doubled can you afford?',
        options: ['Two', 'Three', 'Four', 'Five'],
        answer: 1,
        explain: 'Three down doubled not vulnerable costs 500, less than 620. Four down costs 800.',
      },
      {
        q: 'What is a phantom sacrifice?',
        options: ['A sacrifice that costs exactly the value of their game', 'A sacrifice against a contract that would have gone down', 'A sacrifice at the six level', 'A sacrifice that the opponents fail to double'],
        answer: 1,
        explain: 'If their contract was failing, your sacrifice turns a plus into a minus. Defensive values are a reason not to sacrifice.',
      },
      {
        q: 'The opponents bid 1♥ – 3♥ – 4♥ without interference. You hold 12 HCP but only small hearts. Should you double?',
        options: ['Yes: you have an opening hand', 'No: high cards outside trumps rarely justify doubling a freely bid game', 'Yes, to ask for a lead', 'Only if vulnerable'],
        answer: 1,
        explain: 'They expect to be missing high cards. Your double gains little if they go one down, costs a lot if they make, and helps declarer place the missing honours.',
      },
      {
        q: 'Why can doubling a low-level partscore be costly?',
        options: ['It never is', 'Because if it makes, the doubled trick score may reach game: 2♥ doubled scores 470 or 670', 'Because the opponents get a bonus for being doubled', 'Because you must lead a trump'],
        answer: 1,
        explain: 'Doubled, 2♥ has a trick score of 120, which counts as a game. Expect to beat a partscore before you double it.',
      },
    ],
  },

  {
    id: 'leads-against-slams-and-doubles',
    title: 'Leads against slams and doubled contracts',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'How to choose the opening lead against slams, against doubled contracts and sacrifices, and how partner can ask for a lead with a double.',
    body: `
<h3>Against notrump slams: give nothing away</h3>
<p>When the opponents bid 6NT or 7NT they have about 33 HCP or more between them, and your side has very little. You will rarely have time to set up a long suit, so your job is not to hand declarer a trick. Make the safest lead you can: the top of a sequence, or a suit with no honour in it. Don't lead away from a king or a queen: against a slam that is often the twelfth trick.</p>
<div class="hand" data-cards="S:K1074 H:Q963 D:872 C:J3" data-label="On lead against 1NT – 6NT"></div>
<p>Lead the ♦8, top of three small. A spade or a heart could give declarer a trick with honours you cannot see; the diamond gives nothing away, and your ♠K and ♥Q may still score if declarer has to find them.</p>

<h3>Against suit slams: attack or wait?</h3>
<p>Against six of a suit you ask the same question as against any suit contract (see the lesson “Defending against suit contracts”), but you need two tricks and you have one lead. A safe lead is the default, and the tutor's lead advice follows it; an attacking lead is the exception, for auctions that show where declarer's discards will come from.</p>
<ul>
<li><strong>Attack</strong> when the auction shows a long side suit that will provide discards. Lead from a king (or a queen) in an unbid suit, hoping partner holds the ace or the queen, to set up a trick before the discards come.</li>
<li><strong>Be passive</strong> when the opponents seem to have bid on power, with balanced hands and no long side suit. Declarer then has to find twelve tricks unaided, and a safe lead, often a trump, gives nothing away.</li>
<li><strong>A singleton</strong> is worth leading when partner may hold an ace: partner wins it and gives you a ruff.</li>
</ul>
<div class="hand" data-cards="S:K852 H:74 D:9643 C:Q93" data-label="On lead against 6♥; dummy has shown a long, strong club suit"></div>
<p>Lead the ♠2. Once trumps are drawn, declarer will throw losers on dummy's clubs, so the defence must set up its tricks first. A spade from the king may find partner with the ace or the queen and build a trick in time. A diamond would be safe, but too slow.</p>
<h4>Leading an ace</h4>
<p>Lead an unsupported ace against a suit slam when dummy has shown a long side suit, so that your ace's suit could disappear under discards, or when you have a good chance of a second trick, such as a trump trick or a king sitting over declarer's suit. Otherwise keep it: the ace will still take its trick later, while leading it may set up declarer's king and queen. Against 6NT an ace is a sure trick, so there is no hurry to lead it.</p>
<p>Against a grand slam, make the safest lead you have, often a trump: declarer needs every trick, so any trick you give away is fatal.</p>

<h3>Lead-directing doubles</h3>
<p>When the opponents make an artificial bid, a double by the next player usually has nothing to do with penalties: it asks partner to lead that suit.</p>
<table>
<thead><tr><th>Partner doubles</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Stayman: 1NT – 2♣</td><td>Lead a club: partner has a good club suit</td></tr>
<tr><td>A transfer: 1NT – 2♦</td><td>Lead a diamond</td></tr>
<tr><td>A cue bid or control bid, such as 4♣ on the way to a heart slam</td><td>Lead a club</td></tr>
<tr><td>A Blackwood reply, such as 5♦</td><td>Lead a diamond</td></tr>
</tbody>
</table>
<p>The absence of a double tells you something too: if partner could have doubled a cue bid of 4♦ and did not, partner probably does not want a diamond lead.</p>
<div class="auction" data-calls="1NT P 2C X 2H P 4H P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:Q1084 H:75 D:K963 C:842" data-label="West: on lead against 4♥"></div>
<p>Without the double you might lead a spade or a diamond, both from an honour. East's double of Stayman asked for a club, so lead the ♣8, top of three small. East has a good club suit, and you do not have to break your other suits.</p>

<h3>Leads against doubled contracts</h3>
<table>
<thead><tr><th>Situation</th><th>Lead</th></tr></thead>
<tbody>
<tr><td>Partner doubles 3NT after bidding a suit</td><td>Partner's suit</td></tr>
<tr><td>Partner doubles 3NT; you bid a suit and partner did not</td><td>Your suit</td></tr>
<tr><td>Partner doubles 3NT; neither of you has bid</td><td>Dummy's first-bid suit</td></tr>
<tr><td>Partner doubles a slam</td><td>An unusual lead (see below)</td></tr>
<tr><td>Your side has doubled their sacrifice</td><td>Usually a trump</td></tr>
<tr><td>Partner passes your takeout double for penalty</td><td>A trump</td></tr>
</tbody>
</table>
<p>Why a trump against a sacrifice? The sacrificing side has few high cards and hopes to take its tricks by ruffing; your side has the high cards, which will take their tricks anyway. Each round of trumps cuts down the ruffs. These meanings are common agreements: make sure your partner shares them.</p>

<h3>The Lightner double</h3>
<p>Doubling a freely bid slam for penalty gains little. 6♠ one down scores 50 or 100 more doubled than undoubled, but if it makes, the double costs 230, much more if they redouble, and it warns declarer of a bad break. So, by a convention named after Theodore Lightner, a double of a slam by the player <em>not</em> on lead asks for an <strong>unusual lead</strong>:</p>
<ul>
<li>not a trump, and not an unbid suit, since that is what you would lead anyway;</li>
<li>usually the first side suit bid by dummy, often because partner is void in it;</li>
<li>if partner has bid a suit, the double also says: don't lead my suit.</li>
</ul>
<div class="auction" data-calls="1S P 2H P 3S P 4NT P 5H P 6S X P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:73 H:84 D:QJ109 C:K8652" data-label="West: on lead after East's double"></div>
<p>Your normal lead would be the ♦Q. East's double asks for something unusual: dummy's first-bid suit, hearts. Lead the ♥8. East is probably void in hearts and will ruff it, and the defence then needs only one more trick.</p>
<div class="warn">Don't make a lead-directing double just because you hold high cards in the suit. Double when you really want that lead, and remember that the opponents can use the double too: they may redouble, or simply avoid the contract.</div>
`,
    keyPoints: [
      'Against 6NT and 7NT, lead safely: don\'t lead away from honours.',
      'Against a suit slam, attack (often from a king) when dummy has a long suit for discards; otherwise be passive.',
      'Lead an ace against a slam when it could vanish under discards or you hope for a second trick; otherwise keep it.',
      'A double of an artificial bid such as Stayman, a transfer or a cue bid asks for a lead of that suit.',
      'A Lightner double of a slam asks for an unusual lead, usually dummy\'s first-bid side suit; against a doubled sacrifice, lead a trump.',
    ],
    quiz: [
      {
        q: 'You are on lead against 1NT – 6NT with ♠K 10 7 4 ♥Q 9 6 3 ♦8 7 2 ♣J 3. What do you lead?',
        options: ['♠4', '♥3', '♦8', '♣J'],
        answer: 2,
        explain: 'Against a notrump slam, lead safely. The ♦8 gives nothing away; leading from the king, the queen or the jack may hand declarer the twelfth trick.',
      },
      {
        q: 'The opponents bid 6♥ after dummy showed a long, strong club suit. What kind of lead is usually right?',
        options: ['Passive: a trump', 'Attacking: from a king in an unbid suit, to set up a trick before declarer can discard', 'A club, to cut dummy off', 'Always an ace'],
        answer: 1,
        explain: 'Once trumps are drawn, declarer\'s losers will go on dummy\'s clubs. The defence has to build its tricks first.',
      },
      {
        q: 'The opponents bid 1NT – 2♣ (Stayman) and partner doubles. What does the double ask for?',
        options: ['A penalty in 2♣', 'A club lead', 'A takeout for the majors', 'A strong balanced hand'],
        answer: 1,
        explain: '2♣ is artificial, so the double is lead-directing: partner has a good club suit and wants it led.',
      },
      {
        q: 'Partner makes a Lightner double of 6♠. Dummy bid hearts, and you hold two hearts and ♦Q J 10 9. What do you lead?',
        options: ['The ♦Q', 'A heart', 'A trump', 'A club'],
        answer: 1,
        explain: 'The double asks for an unusual lead, usually dummy\'s first-bid side suit. Partner is probably void in hearts.',
      },
      {
        q: 'You have doubled the opponents\' 5♦ sacrifice. What is usually the best lead?',
        options: ['A trump', 'Your longest suit', 'An ace, to look at dummy', 'A singleton'],
        answer: 0,
        explain: 'The sacrificing side has few high cards and takes its tricks by ruffing. Trump leads cut those ruffs, and your high cards will take their tricks anyway.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Controls and cue bids: when not to use Blackwood',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Why counting aces is not enough for slam, and how control-showing cue bids find out whether every suit is covered.',
    body: `
<h3>Controls</h3>
<p>To make a slam you need enough tricks, and you must also stop the opponents taking two tricks before you get going. A suit is <strong>controlled</strong> if the opponents cannot cash two quick tricks in it:</p>
<ul>
<li><strong>First-round control:</strong> the ace or a void (in a suit contract).</li>
<li><strong>Second-round control:</strong> the king or a singleton.</li>
</ul>
<p>For a small slam you need at least second-round control in every side suit and no more than one first-round loser in total. For a grand slam you need first-round control everywhere and no losers at all.</p>
<p>Some players count controls with A = 2 and K = 1 (12 in the deck). Hands rich in aces and kings make slams that 33 points made up of queens and jacks do not.</p>

<h3>Where Blackwood fails</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="North opens 1♥ and South raises with Jacoby 2NT."></div>
<p>North has 16 HCP and South 13, with a nine-card heart fit: a slam try is reasonable. If South uses Blackwood, North shows two aces, South has the third, and South bids 6♥. The defence cashes the ♦A and ♦K. Blackwood said three aces were present, but it could not tell South that neither hand controls diamonds.</p>
<p>Do not use Blackwood when:</p>
<ul>
<li>you have two small cards (or more) in a suit nobody has bid, and don't know whether partner controls it;</li>
<li>you have a void: partner's ace in your void suit is wasted, but Blackwood counts it;</li>
<li>the reply could take you too high, for example with clubs as trumps, where a 5♥ reply leaves you no way to stop in 5♣.</li>
</ul>

<h3>Cue bids (control bids)</h3>
<p>Once a trump suit is agreed in a forcing auction, a bid of a new suit at the four level is not a suit of its own: it shows a <strong>control</strong> in that suit and interest in slam. Partner replies by showing their cheapest control in turn, or signs off in the trump suit. In the common modern style a cue bid shows either first- or second-round control (ace, king, void or singleton), and you bid the cheapest one first, so <strong>skipping a suit denies a control in it</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>After Jacoby 2NT, North's 3NT shows a medium hand (15-17) with no shortness, the standard Jacoby rebid. South bids 4♣: a club control and slam interest. North has no diamond control, so instead of showing the spade control, North signs off in 4♥, bypassing 4♦: that denies a diamond control. South has no diamond control either, so South passes. Both hands have done their job, and the partnership stops safely in game.</p>
<p>Had North held the ♦K instead of the ♠K, North would have cue bid 4♦ over 4♣. Then every suit would be controlled, South could go on towards slam, and Blackwood would be safe to check the aces at the end.</p>
<p>The bots bid this way once a major is agreed in a game-forcing auction, after a Jacoby 2NT raise or a splinter. They also use a control bid as a slam try in a natural auction: when partner has just bid a major they can raise to game, and slam is likely if partner has a little more than shown, a new suit at the four level (one their side has not bid) agrees partner's major and shows a control. Their cue bids show first- or second-round controls, cheapest first, below game in the agreed major.</p>

<h3>Combining the tools</h3>
<ol>
<li>Agree trumps in a forcing auction.</li>
<li>Cue bid to make sure every side suit is controlled.</li>
<li>When all suits are covered, use Blackwood (the bots play Roman Key Card Blackwood) to make sure you are not missing two aces, or an ace and the king of trumps.</li>
<li>Bid the slam, or sign off.</li>
</ol>
<div class="tip">Before bidding 4NT, ask: "If partner shows the right number of aces, will I know what to bid?" If the answer is no, cue bid instead.</div>
<div class="warn">Make sure your partnership agrees on cue bidding before you try it. A cue bid that partner reads as a natural suit can end in a very strange contract.</div>
`,
    keyPoints: [
      'A slam needs every side suit controlled: an ace or void (first round), or a king or singleton (second round).',
      'Blackwood counts aces but cannot tell you which ones, or whether a side suit has two quick losers.',
      'Don\'t use Blackwood with a void, with two small cards in an unbid suit, or when the reply may carry you too high.',
      'Cue bids show controls, cheapest first; skipping a suit denies control in it.',
      'Cue bid first to check every suit, then use Blackwood to check the aces.',
    ],
    quiz: [
      {
        q: 'Which holdings give second-round control of a suit in a trump contract?',
        options: ['Ace or void', 'King or singleton', 'Queen or doubleton', 'Any two honours'],
        answer: 1,
        explain: 'With the king or a singleton, the opponents can take at most one quick trick in the suit. The ace or a void is first-round control.',
      },
      {
        q: 'In the deal above, why does Blackwood lead to a bad slam?',
        options: ['Because two aces are missing', 'Because neither hand controls diamonds, which Blackwood cannot reveal', 'Because hearts break badly', 'Because North has too few points'],
        answer: 1,
        explain: 'Only one ace is missing, but it is the ♦A, and the ♦K is missing too. The opponents cash two diamond tricks at once.',
      },
      {
        q: 'Hearts are agreed in a forcing auction. Partner cue bids 4♣ and you bid 4♥, skipping 4♦. What have you told partner?',
        options: ['I have a diamond control', 'I have no diamond control', 'I have the ♠A', 'I want to play in diamonds'],
        answer: 1,
        explain: 'Cue bids are made cheapest first. By bypassing 4♦ you deny a diamond control, so partner knows to stop unless they control diamonds themselves.',
      },
      {
        q: 'You have a void in clubs and want to explore a slam in spades. Why is Blackwood a poor choice?',
        options: ['Because voids count as aces', 'Because partner\'s ♣A would be wasted, yet Blackwood would count it', 'Because 4NT would be quantitative', 'Because you need 37 points'],
        answer: 1,
        explain: 'Blackwood tells you how many aces partner has, not which ones. The ace opposite your void contributes nothing.',
      },
      {
        q: 'What is a sensible order of tools for a suit slam?',
        options: ['Blackwood first, then cue bids', 'Agree trumps, cue bid controls, then Blackwood', 'Bid slam directly with 33 points', 'Gerber, then Blackwood'],
        answer: 1,
        explain: 'Cue bids reveal whether every suit is covered; Blackwood then makes sure the partnership is not missing two aces.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'An introduction to squeezes and endplays',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Two advanced techniques that create a trick from nothing by forcing a defender to discard a guard or to lead into your strength.',
    body: `
<h3>When finesses and splits are not enough</h3>
<p>Some tricks cannot be won by force or by finesse. They are won because a defender is <em>forced</em> to give them up, either by having to discard a card they need (a <strong>squeeze</strong>) or by having to lead when every lead costs a trick (an <strong>endplay</strong>). Both usually happen at the end of the hand, and both need careful counting.</p>

<h3>The simple squeeze</h3>
<p>A squeeze works when one defender is the only one guarding two suits. When you play your last winner in a third suit, that defender has to throw one of the guards, and the abandoned suit gives you an extra trick.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Notrump. South to lead; South needs all three tricks."></div>
<p>West guards hearts (the K Q against dummy's A J) and diamonds (the Q against your J). South leads the ♠A, the <strong>squeeze card</strong>, and West must discard before dummy:</p>
<ul>
<li>If West throws the ♦Q, your ♦J is a winner.</li>
<li>If West throws a heart, dummy discards the ♣3; you lead the ♥2 to the ace, dropping West's remaining honour, and dummy's ♥J wins the last trick.</li>
</ul>
<p>Without the squeeze, you would have had only two tricks.</p>
<h4>What a squeeze needs</h4>
<ul>
<li><strong>Threats:</strong> cards that will become winners if the defender lets go of the guard (here dummy's ♥J and your ♦J).</li>
<li><strong>One defender busy in both suits.</strong> If partner could guard one of the suits, there is no squeeze.</li>
<li><strong>Entries</strong> to reach the threats after the discard (here the ♥A, with a heart in your hand to get there).</li>
<li><strong>The right count:</strong> you must be able to win all the remaining tricks but one when the squeeze card is played. Losing the tricks you have to lose <em>early</em>, so that this is true, is called <strong>rectifying the count</strong>. A typical sign: you can see that a squeeze is possible but you have two losers; duck one trick early, so only one remains.</li>
</ul>
<div class="tip">You do not always have to see the squeeze in advance. Running a long suit to the end, while keeping your threat cards, gives the defenders many chances to discard wrongly, and sometimes they simply cannot avoid it.</div>

<h3>The endplay</h3>
<p>An endplay (throw-in) puts a defender on lead at a moment when any card they lead gives you a trick: they must lead into your tenace, or give you a ruff and discard.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Notrump. South to lead; East has the ♣K."></div>
<p>If you lead a club and finesse the queen, East wins the king and cashes the ♥A: you make one trick. Instead, lead the ♥6. East wins the ace and now has only clubs left, so must lead away from the king into dummy's A Q, and you make two tricks.</p>
<h4>Strip and endplay in a suit contract</h4>
<p>In a trump contract the same idea is called an elimination. Draw trumps but keep at least one in each hand. <strong>Strip</strong> (eliminate) the side suits in which the defender could exit safely, by cashing them or ruffing them out. Then throw the defender in with the suit you have left. The defender must then either lead into your tenace or lead a suit in which you are void in both hands, which lets you ruff in one hand and discard a loser from the other.</p>
<p>Elimination plays often turn a 50% finesse into a certainty: with A J x opposite K 10 x and the queen missing, you never need to guess if a defender has to open the suit for you.</p>
<div class="warn">An endplay fails if the defender still has a safe card to lead. Before the throw-in, check that every suit the defender might exit in has been eliminated from that defender's hand or from both of yours.</div>
`,
    keyPoints: [
      'A squeeze forces a defender who guards two suits to discard one of the guards.',
      'A squeeze needs threats, one busy defender, entries, and the count rectified (all the remaining tricks but one).',
      'An endplay throws a defender on lead when every lead costs their side a trick.',
      'Strip-and-endplay: draw trumps (keeping some in both hands), eliminate the side suits, then throw the defender in.',
      'Running a long suit while keeping your threats gives defenders the chance to go wrong.',
    ],
    quiz: [
      {
        q: 'What is the essential condition for a simple squeeze?',
        options: ['Both defenders are void in a suit', 'One defender alone guards two suits', 'You hold all the aces', 'Trumps break 3-2'],
        answer: 1,
        explain: 'If one defender must keep guards in two suits, they cannot keep both when forced to discard. If their partner can guard one of them, there is no squeeze.',
      },
      {
        q: 'What does "rectifying the count" mean?',
        options: ['Counting the opponents\' points', 'Losing the tricks you must lose early, so that when the squeeze card is played you can win all the remaining tricks but one', 'Drawing the last trump', 'Counting your own winners twice'],
        answer: 1,
        explain: 'A squeeze needs the defender to run out of spare cards. If you still have two losers, the defender has a spare card to throw; ducking a trick early takes it away.',
      },
      {
        q: 'In the squeeze ending above, what happens if West discards the ♦Q?',
        options: ['South\'s ♦J becomes a winner', 'Dummy\'s ♥J becomes a winner', 'East wins a diamond', 'Nothing changes'],
        answer: 0,
        explain: 'West was the only guard against the ♦J. Once the queen goes, your jack is the highest diamond left.',
      },
      {
        q: 'In the endplay ending above, why does East have to give you a trick?',
        options: ['East must follow suit to hearts', 'After winning the ♥A, East has only clubs left and must lead from the K into the A Q', 'East is squeezed', 'East has to ruff'],
        answer: 1,
        explain: 'Thrown in with the ♥A, East has no safe exit. Any club East leads lets dummy\'s queen win, and the ace then drops the king.',
      },
      {
        q: 'In a strip-and-endplay in a suit contract, what must you keep before throwing a defender in?',
        options: ['A trump in each of your hands', 'All your aces', 'An entry to the defender\'s partner', 'A losing trump'],
        answer: 0,
        explain: 'With trumps in both hands, a defender who leads a suit you are void in gives you a ruff and discard. That leaves the defender only leads into your tenace.',
      },
    ],
  },
];
