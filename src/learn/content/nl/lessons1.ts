// Lessons, part 1.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'Hoe bridge werkt',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Het delen, de bieding, het contract en het spelen van de kaarten, van het eerste bod tot de laatste slag.',
    body: `
<h3>Vier spelers, twee paren</h3>
<p>Bridge is een partnerspel. Noord en Zuid spelen samen tegen Oost en West, en partners zitten tegenover elkaar. Alle 52 kaarten worden gedeeld, dus elke speler krijgt 13 kaarten. Binnen een kleur is de aas de hoogste kaart, gevolgd door de heer (K), de vrouw (Q), de boer (J), de 10, de 9 enzovoort tot en met de 2. Het doel is <strong>slagen</strong> te winnen: een slag bestaat uit één kaart van elke speler, met de wijzers van de klok mee gespeeld.</p>

<h3>Deel 1: de bieding</h3>
<p>Voordat er een kaart wordt gespeeld, is er een bieding. De gever biedt als eerste en de bieding gaat met de klok mee rond. Wie aan de beurt is, mag <strong>passen</strong>, een <strong>bod</strong> doen, een bod van de tegenstanders <strong>doubleren</strong> of een doublet van de tegenstanders <strong>redoubleren</strong>.</p>
<p>Een bod heeft een niveau (1 tot en met 7) en een denominatie (een troefkleur, of sans atout). Het niveau is het aantal slagen dat je belooft <em>boven de zes</em>: 1♠ belooft 7 slagen met schoppen als troef en 3SA belooft 9 slagen zonder troefkleur. De eerste zes slagen heten het <strong>boek</strong>.</p>
<p>De denominaties hebben een rangorde, van laag naar hoog: ♣, ♦, ♥, ♠, SA. Elk bod moet hoger zijn dan het vorige: op een hoger niveau, of op hetzelfde niveau in een hogere denominatie. Na 1♥ mag je 1♠ of 1SA bieden, maar om klaveren te noemen moet je minstens 2♣ bieden.</p>
<p>De bieding eindigt als een bod, doublet of redoublet wordt gevolgd door drie passen achter elkaar. Het laatste bod is het <strong>contract</strong>. Als alle vier de spelers meteen passen, is het spel rondgepast en wordt er niet gespeeld.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Noord opent 1♥, Zuid verhoogt naar 2♥ en Noord springt naar 4♥. Daarna past iedereen, dus het contract is 4♥: Noord-Zuid moeten minstens 10 van de 13 slagen maken met harten als troef.</p>

<h3>Contractniveaus</h3>
<table>
<thead><tr><th>Niveau</th><th>Benodigde slagen</th><th>Opmerkingen</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>deelscore</td></tr>
<tr><td>2</td><td>8</td><td>deelscore</td></tr>
<tr><td>3</td><td>9</td><td>3SA is een manche</td></tr>
<tr><td>4</td><td>10</td><td>4♥ en 4♠ zijn manches</td></tr>
<tr><td>5</td><td>11</td><td>5♣ en 5♦ zijn manches</td></tr>
<tr><td>6</td><td>12</td><td>klein slem</td></tr>
<tr><td>7</td><td>13</td><td>groot slem</td></tr>
</tbody>
</table>
<p>Manches en slems leveren grote premies op. Daarom draait zo veel in de bieding om één vraag: heeft onze kant genoeg kracht voor de manche?</p>

<h3>Wie speelt het spel?</h3>
<p>De <strong>leider</strong> is de speler van de kant die de bieding won die de denominatie van het eindcontract het <em>eerst</em> noemde. In de bieding hierboven bood Noord als eerste harten, dus Noord is leider, ook al bood Zuid ook harten. De partner van de leider wordt de <strong>dummy</strong>.</p>

<h3>Deel 2: het spel</h3>
<ol>
<li>De speler links van de leider doet de <strong>uitkomst</strong>. Is Noord leider, dan komt Oost uit.</li>
<li>Daarna legt de dummy alle 13 kaarten open op tafel, gesorteerd per kleur. De leider speelt de kaarten van beide handen; de dummy doet verder niet mee.</li>
<li>Er wordt met de klok mee gespeeld. Elke speler moet <strong>bekennen</strong> (een kaart van de gespeelde kleur bijspelen) als dat kan.</li>
<li>Een speler zonder kaarten in de gespeelde kleur (<strong>renonce</strong>) mag een troef spelen, dat heet <strong>introeven</strong>, of een willekeurige andere kaart bijspelen, dat heet <strong>afgooien</strong>.</li>
<li>De slag wordt gewonnen door de hoogste troef of, als er geen troef is gespeeld, door de hoogste kaart van de gespeelde kleur. Wie de slag wint, speelt voor naar de volgende slag.</li>
</ol>
<p>Voorbeeld: harten is troef en Oost komt uit met ♠K. Zuid speelt ♠4, West ♠9, en Noord, die geen schoppen heeft, troeft in met ♥2. Noord wint de slag, want elke troef is hoger dan elke kaart van een andere kleur. In een SA-contract is er geen troef, dus wint altijd de hoogste kaart van de gespeelde kleur.</p>
<div class="tip">Met een afgegooide kaart win je nooit een slag. Alleen een kaart van de gespeelde kleur of een troef kan winnen.</div>

<h3>Het contract maken of down gaan</h3>
<p>Als alle 13 slagen zijn gespeeld, scoort de kant van de leider als die minstens het aantal geboden slagen heeft gemaakt; extra slagen zijn <strong>overslagen</strong>. Komt de leider tekort, dan scoren de tegenspelers voor elke <strong>onderslag</strong> (elke slag down). Een doublet verhoogt zowel de beloning voor het maken van het contract als de straf voor down gaan.</p>
<div class="warn">Niet bekennen terwijl dat wel kon, is een <strong>verzaking</strong>; die wordt bestraft doordat er slagen naar de andere kant gaan. Controleer voordat je een kaart van een andere kleur speelt nog eens of je echt niets meer hebt in de gespeelde kleur.</div>
`,
    keyPoints: [
      'Vier spelers in twee paren; elke speler heeft 13 kaarten.',
      'Een bod op niveau N belooft 6 + N slagen; de rangorde is ♣, ♦, ♥, ♠, SA.',
      'De bieding eindigt na drie passen achter elkaar; het laatste bod is het contract.',
      'Leider is de speler van de winnende kant die de denominatie van het eindcontract als eerste noemde; de speler links van de leider komt uit.',
      'Je moet bekennen als je kunt; kun je dat niet, dan mag je introeven of afgooien.',
      'Manches: 3SA, 4♥, 4♠, 5♣, 5♦. Slems: elk contract op 6- of 7-niveau.',
    ],
    quiz: [
      {
        q: 'Het eindcontract is 3SA. Hoeveel slagen heeft de leider nodig?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Tel zes (het boek) op bij het niveau: 3 + 6 = 9 slagen.',
      },
      {
        q: 'Noord opent 1♠, Oost past, Zuid biedt 2♠ en iedereen past. Wie is leider, en wie komt uit?',
        options: ['Zuid is leider, West komt uit', 'Noord is leider, Oost komt uit', 'Noord is leider, West komt uit', 'Zuid is leider, Oost komt uit'],
        answer: 1,
        explain: 'Noord noemde als eerste van zijn kant schoppen, dus Noord is leider. De speler links van de leider komt uit, en dat is Oost.',
      },
      {
        q: 'Schoppen is troef. Er wordt harten gespeeld en jij hebt geen harten. Wat mag je doen?',
        options: ['Je moet introeven met een schoppen', 'Je mag introeven met een schoppen of een willekeurige kaart afgooien', 'Je moet een klaver of een ruiten afgooien', 'Je moet je laagste kaart spelen'],
        answer: 1,
        explain: 'Alleen bekennen is verplicht. Als je renonce bent in de gespeelde kleur, mag je kiezen tussen introeven en afgooien; introeven is vaak goed, maar nooit verplicht.',
      },
      {
        q: 'Je rechtertegenstander opende 1♥. Welk van deze biedingen is toegestaan?',
        options: ['1♦', '1♣', '1SA', '1♥'],
        answer: 2,
        explain: 'Een bod moet hoger zijn dan het vorige. Op 1-niveau zijn alleen schoppen en sans atout hoger dan harten, dus 1♠ en 1SA zijn toegestaan; 1♣ en 1♦ zou je op 2-niveau moeten bieden.',
      },
      {
        q: 'Welk van deze contracten is een manche?',
        options: ['3♥', '4♦', '3SA', '2SA'],
        answer: 2,
        explain: 'Voor de manche heb je 9 slagen nodig in sans atout, 10 in een hoge kleur en 11 in een lage kleur. 3SA is een manche; 3♥ en 4♦ zitten een niveau te laag, en 2SA is één slag te weinig voor de manche.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Je hand waarderen',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Hoe je honneurpunten, lengte en korte kleuren telt, en hoe de regel van 20, de regel van 15, de verliezerstelling en snelle slagen die telling verfijnen.',
    body: `
<h3>Honneurpunten</h3>
<p>De standaardmaat voor kracht zijn de <strong>honneurpunten</strong>, meestal gewoon "punten" genoemd: aas 4, heer 3, vrouw 2, boer 1. Er zitten 40 punten in het spel, dus een gemiddelde hand heeft er 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 punten"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 punten. De hand is evenwichtig, dus je opent 1SA (15-17).</p>
<p>Handige doelen voor het totaal van het paar: ongeveer 25 voor een manche in 3SA of in een hoge kleur, 29 voor een manche in een lage kleur, 33 voor klein slem en 37 voor groot slem. Punten zijn een richtlijn, geen garantie: verdeling, fit en de plaats van de honneurs tellen allemaal mee.</p>

<h3>Lengtepunten: je eigen kleuren waarderen</h3>
<p>Lange kleuren leveren extra slagen op als de hoge kaarten eruit zijn. Als je je hand waardeert om te openen of te herbieden, tel je 1 punt bij voor elke kaart boven de vier in een kleur: een vijfkaart levert 1 punt op, een zeskaart 2.</p>

<h3>Steunpunten: een fit waarderen</h3>
<p>Zodra je weet dat je een fit hebt in de kleur van partner, worden korte kleuren waardevoller, omdat je troeven de vaste slagen van de tegenstanders kunnen introeven. Als je partner verhoogt, tel je in plaats van lengte je korte kleuren:</p>
<table>
<thead><tr><th>Korte kleur</th><th>Met 4+ troeven</th><th>Met 3 troeven</th></tr></thead>
<tbody>
<tr><td>Renonce</td><td>5</td><td>3</td></tr>
<tr><td>Singleton</td><td>3</td><td>2</td></tr>
<tr><td>Doubleton</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Partner opende 1♥"></div>
<p>Maar 8 punten, maar met vier troeven en een singleton tel je er 3 bij, samen 11 steunpunten. Dat is een inviterende verhoging naar 3♥ (10-12).</p>
<div class="warn">Een korte kleur is alleen iets waard als je een fit hebt. Zonder fit is een singleton in de kleur van partner een min, geen plus: het wijst op een misfit.</div>

<h3>De telling bijstellen</h3>
<ul>
<li>Honneurs in lange kleuren wegen zwaarder dan honneurs in korte kleuren: ♠KQJ54 zal slagen maken, ♠KQ misschien niet.</li>
<li>Onbeschermde honneurs in korte kleuren zijn minder waard: een singleton K, Q of J, of een doubleton Q of J. Trek er een punt af.</li>
<li>4-3-3-3 is de minst bruikbare verdeling; overweeg er een punt af te trekken.</li>
<li>Azen en tienen worden door de schaal 4-3-2-1 iets ondergewaardeerd, vrouwen en boeren iets overgewaardeerd.</li>
</ul>

<h3>De regel van 20 en de regel van 15</h3>
<p>In eerste, tweede of derde hand open je een hand met 10 of 11 punten als je punten plus het aantal kaarten in je twee langste kleuren samen 20 of meer is.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Regel van 20: open 1♠"></div>
<p>10 punten + 5 + 5 = 20, dus je opent, en met twee vijfkaarten open je de hoogste: 1♠. Vergelijk ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 punten + 4 + 3 = 18, dus pas. De verspreide vrouwen en boeren en de vlakke verdeling maken er een slechte opening van.</p>
<p>In vierde hand, na drie passen, open je met 13 of meer punten; met 10-12 punten gebruik je de regel van 15: open alleen als je punten plus het aantal schoppen 15 of meer is. Als je past, wordt het spel rondgepast. Je wilt dus alleen openen als jouw kant waarschijnlijk de strijd om de deelscore wint, en die strijd wordt meestal door de schoppenkleur beslist.</p>

<h3>Verliezerstelling</h3>
<p>Zodra er een fit van 8+ kaarten is gevonden, geeft de verliezerstelling (LTC, Losing Trick Count) een tweede mening, gebaseerd op de verdeling. Bekijk de eerste drie kaarten van elke kleur en tel daarin een verliezer voor elke ontbrekende aas, heer of vrouw:</p>
<table>
<thead><tr><th>Kaarten</th><th>Verliezers</th></tr></thead>
<tbody>
<tr><td>Renonce</td><td>0</td></tr>
<tr><td>Singleton A / andere singleton</td><td>0 / 1</td></tr>
<tr><td>AK / Ax of Kx / Qx of xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Tel jouw verliezers op bij die van partner en trek het totaal af van 24: de uitkomst is ongeveer het aantal slagen dat het paar met die kleur als troef maakt. Een minimale openingshand heeft ongeveer 7 verliezers.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Partner opende 1♠"></div>
<p>♠K87 = 2 verliezers, ♥4 = 1, ♦A86 = 2, ♣853 = 3: 8 verliezers. 24 − (7 + 8) = 9 slagen, dus inviteer met 3♠. De puntentelling is het daarmee eens: 7 punten + 3 voor de singleton = 10 steunpunten, een inviterende verhoging.</p>

<h3>Snelle slagen</h3>
<p>Snelle slagen meten je verdedigende kracht: de slagen die je in de eerste twee rondes van een kleur verwacht. AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Een degelijke opening of een informatiedoublet heeft meestal ongeveer 2 snelle slagen. Handen met weinig snelle slagen en veel verdeling zijn geschikter om zelf te spelen dan om tegen te spelen.</p>
`,
    keyPoints: [
      'Punten: aas 4, heer 3, vrouw 2, boer 1; 40 in het spel, 10 in een gemiddelde hand.',
      'Voor je eigen hand tel je een punt per kaart boven de vier; als je partner verhoogt, tel je in plaats daarvan korte kleuren (renonce 5, singleton 3, doubleton 1 met vier troeven).',
      'Regel van 20 voor lichte openingen in eerste, tweede of derde hand; regel van 15 (punten + schoppen) in vierde hand.',
      'Verliezerstelling: slagen ≈ 24 − de verliezers samen; een minimale opening heeft ongeveer 7 verliezers.',
      'Samen ongeveer 25 punten voor 3SA of een manche in een hoge kleur, 29 voor een manche in een lage kleur, 33 voor klein slem.',
    ],
    quiz: [
      {
        q: 'Hoeveel punten heeft ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 punten.',
      },
      {
        q: 'Eerste hand. Je hebt 10 punten met vijf harten en vijf klaveren. Wat doe je?',
        options: ['Pas: voor een opening heb je 12 punten nodig', 'Open 1♥: aan de regel van 20 is voldaan', 'Open 1♣: met twee vijfkaarten open je de laagste', 'Open 2♥'],
        answer: 1,
        explain: '10 punten + 5 + 5 = 20, dus de hand voldoet aan de regel van 20. Met twee vijfkaarten open je de hoogste, dus 1♥ (de klaveren kun je later tonen).',
      },
      {
        q: 'Partner opent 1♥. Je hebt vier harten en een renonce schoppen. Hoeveel punten voor de korte kleur tel je erbij?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Met vier of meer troeven is een renonce 5 steunpunten waard: elke schoppen van partner kan in jouw hand worden ingetroefd.',
      },
      {
        q: 'Je hebt een hand met 7 verliezers en partner heeft er 8, met een achtkaart troeffit. Hoeveel slagen voorspelt de verliezerstelling?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Omdat je bij de openaar van 7 verliezers uitgaat, moet een antwoorder met 8 verliezers op 3-niveau inviteren in plaats van manche te bieden.',
      },
      {
        q: 'Vierde hand na drie passen: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 punten). Wat doe je?',
        options: ['Pas: 11 punten is niet genoeg', 'Open 1♣: 11 + 4 schoppen = 15', 'Open 1♠', 'Open 1SA'],
        answer: 1,
        explain: 'Aan de regel van 15 is voldaan: 11 punten + 4 schoppen = 15. Zonder vijfkaart hoge kleur en met 3-3 in de lage kleuren open je 1♣. 1♠ zou vijf schoppen beloven en 1SA vraagt 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'De bieding openen',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Met welke handen je opent en welke opening je kiest, van één in een kleur tot 1SA, 2SA, 2♣ en preëmpts.',
    body: `
<h3>De openingsbiedingen in één oogopslag</h3>
<table>
<thead><tr><th>Opening</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 punten, 3+ klaveren (de langste lage kleur; met 3-3 in de lage kleuren open je 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 punten, 3+ ruiten (de langste lage kleur; met 4-4 in de lage kleuren open je 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 punten, 5+ kaarten in de kleur</td></tr>
<tr><td>1SA</td><td>15-17 punten, evenwichtig (er mag een vijfkaart in zitten)</td></tr>
<tr><td>2♣</td><td>Sterk en kunstmatig: 22+ punten of 9+ speelslagen</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Zwakke twee: een zeskaart en 5-10 punten</td></tr>
<tr><td>2SA</td><td>20-21 punten, evenwichtig</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Preëmpt: een zevenkaart en 5-10 punten</td></tr>
<tr><td>4♥ / 4♠</td><td>Preëmpt: een achtkaart (of een zevenkaart met extra verdeling)</td></tr>
</tbody>
</table>

<h3>Is het een openingshand?</h3>
<p>Met 12 of meer punten open je, behalve in vierde hand. Met 10-11 punten in eerste, tweede of derde hand open je als aan de regel van 20 is voldaan (punten + de lengte van je twee langste kleuren ≥ 20). In vierde hand open je met 13 of meer punten, en met 10-12 punten alleen als aan de regel van 15 is voldaan (punten + aantal schoppen ≥ 15). Handen met een lange kleur en minder punten passen misschien beter bij een zwakke twee of een preëmpt.</p>

<h3>Evenwichtige handen: de punten beslissen</h3>
<p>Een evenwichtige hand heeft geen renonce, geen singleton en hoogstens één doubleton: 4-3-3-3, 4-4-3-2 of 5-3-3-2. Met een evenwichtige hand is je plan altijd om je kracht in sans atout te tonen, meteen of bij je volgende bod:</p>
<table>
<thead><tr><th>Punten</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Open één in een kleur, herbied 1SA</td></tr>
<tr><td>15-17</td><td>Open 1SA</td></tr>
<tr><td>18-19</td><td>Open één in een kleur en spring daarna naar 2SA</td></tr>
<tr><td>20-21</td><td>Open 2SA</td></tr>
<tr><td>22-24</td><td>Open 2♣ en herbied 2SA</td></tr>
<tr><td>25-27</td><td>Open 2♣ en herbied 3SA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Open 1SA: 16 punten, evenwichtig"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Open 1♦: 14 punten, van plan 1SA te herbieden"></div>

<h3>De kleur kiezen</h3>
<ul>
<li>Met een vijfkaart of langer in een hoge kleur open je die, ook met een evenwichtige 12-14.</li>
<li>Met twee vijfkaarten (of twee zeskaarten) open je de hoogste.</li>
<li>Met een zeskaart en een vijfkaart open je de langste.</li>
<li>Zonder vijfkaart hoge kleur open je de langste lage kleur. Met 3-3 in de lage kleuren open je 1♣, met 4-4 1♦.</li>
<li>Een vierkaart hoge kleur open je nooit. Met 4-4 in de hoge kleuren en geen vijfkaart open je een lage kleur; partner biedt een vierkaart hoge kleur als hij die heeft.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Open 1♠: 12 punten, vijf schoppen"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Open 1♦: 4-4 in de lage kleuren"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Open 1♣: 3-3 in de lage kleuren"></div>
<p>De laatste hand heeft vier schoppen, maar om een hoge kleur te openen heb je vijf kaarten nodig, en met drie kaarten in elke lage kleur is de opening 1♣. Heeft partner vier schoppen, dan antwoordt hij 1♠ en is de fit gevonden.</p>

<h3>Sterke en zwakke openingen</h3>
<p>2SA toont 20-21 evenwichtig; 2♣ is de enige forcing opening en dekt elke hand met 22+ punten of ongeveer negen speelslagen. Aan de andere kant van het spectrum ontnemen zwakke twee-openingen en preëmpts de tegenstanders biedruimte als je een lange kleur hebt maar weinig verdediging. Elk heeft een eigen les.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Open 2SA: 21 punten, evenwichtig"></div>
<div class="tip">Plan je herbieding voordat je opent. Met 12-14 evenwichtig herbied je 1SA; met 18-19 evenwichtig spring je naar 2SA; met twee kleuren bied je de tweede. Als er geen zinnige herbieding is, denk dan opnieuw na over de opening.</div>
<div class="warn">Open nooit 1♥ of 1♠ met maar vier kaarten. Partner verhoogt met driekaartsteun en rekent dan op minstens een achtkaartfit.</div>
`,
    keyPoints: [
      'Open met 12+ punten; met 10-11 gebruik je de regel van 20 (eerste, tweede of derde hand). In vierde hand open je met 13+, of met 10-12 als aan de regel van 15 is voldaan.',
      '1♥/1♠ beloven vijf kaarten; zonder vijfkaart hoge kleur open je de langste lage kleur (1♣ met 3-3, 1♦ met 4-4).',
      'Evenwichtig: met 12-14 open je een kleur en herbied je 1SA; 15-17 1SA; 18-19 spring naar 2SA; 20-21 2SA; 22+ 2♣.',
      'Twee vijfkaarten: open de hoogste; 6-5: open de langste.',
      'Plan je herbieding voordat je opent.',
    ],
    quiz: [
      {
        q: 'Je hebt ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 punten). Wat open je?',
        options: ['1♥', '1♦', '1SA', '2♥'],
        answer: 0,
        explain: 'Met twee vijfkaarten open je de hoogste. Na 1♥ kun je daarna ruiten bieden, en partner kan goedkoop tussen je kleuren kiezen.',
      },
      {
        q: 'Je hebt ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 punten). Wat open je?',
        options: ['1♣', '1SA', '1♦', 'Pas'],
        answer: 0,
        explain: 'De hand is evenwichtig maar heeft maar 14 punten, te weinig voor 1SA (15-17). Open de langste lage kleur, 1♣, en herbied 1SA om 12-14 evenwichtig te tonen.',
      },
      {
        q: 'Je hebt ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 punten). Wat open je?',
        options: ['1♦', '1SA', '2SA', '1♣'],
        answer: 1,
        explain: '16 punten met een 3-3-4-3-verdeling is een 1SA-opening uit het boekje. Eén bod beschrijft zowel je kracht als je verdeling.',
      },
      {
        q: 'Je hebt ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 punten). Wat open je?',
        options: ['1♥', '1♣', '1♦', 'Pas'],
        answer: 1,
        explain: 'Om een hoge kleur te openen heb je vijf kaarten nodig, dus 1♥ valt af. Zonder vijfkaart hoge kleur open je de langste lage kleur; met 3-3 in de lage kleuren is dat 1♣.',
      },
      {
        q: 'Je hebt een evenwichtige hand met 18 punten. Wat is je plan?',
        options: ['Open 1SA', 'Open 2SA', 'Open één in een kleur en spring de volgende keer naar 2SA', 'Open 2♣'],
        answer: 2,
        explain: '18-19 evenwichtig is te sterk voor 1SA (15-17) en te zwak voor 2SA (20-21). Open één in een kleur en spring bij je volgende bod naar 2SA.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Antwoorden op een opening van 1 in een kleur',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Hoe de antwoorder verhoogt, een nieuwe kleur biedt of sans atout biedt nadat partner één in een kleur heeft geopend.',
    body: `
<h3>Uitgangspunten</h3>
<p>Een opening van partner op 1-niveau toont 12-21 punten, dus met 6 of meer punten moet je antwoorden: zelfs een zwakke hand kan genoeg zijn voor de manche tegenover een sterke openaar. Met minder dan 6 punten pas je. Je eerste taak is partner over een fit te vertellen; je tweede is je kracht te laten zien.</p>

<h3>Antwoorden op 1♥ of 1♠</h3>
<p>Partner heeft minstens vijf kaarten, dus met driekaartsteun heb je al een achtkaartfit. Partner steunen heeft de hoogste prioriteit.</p>
<table>
<thead><tr><th>Antwoord</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>2 in de hoge kleur</td><td>6-10 steunpunten, 3+ kaarten steun</td></tr>
<tr><td>3 in de hoge kleur (sprong)</td><td>Inviterende verhoging (limit raise): 10-12 steunpunten, 4+ kaarten steun</td></tr>
<tr><td>2SA</td><td>Jacoby: 13+ punten, 4+ kaarten steun, mancheforcing</td></tr>
<tr><td>4 in de hoge kleur</td><td>Zwak en verdeeld: 5+ kaarten steun, minder dan 10 punten</td></tr>
<tr><td>Dubbele sprong in een nieuwe kleur</td><td>Splinter: 4+ kaarten steun, een singleton of renonce in die kleur, 13-16 punten</td></tr>
<tr><td>1♠ na 1♥</td><td>6+ punten, 4+ schoppen, forcing</td></tr>
<tr><td>1SA</td><td>6-10, geen fit, niet forcing (na 1♥ ontkent het vier schoppen)</td></tr>
<tr><td>Nieuwe kleur op 2-niveau</td><td>10+ (11+ voor de zekerheid), 4+ kaarten, 5+ voor 2♥ na 1♠; forcing voor één ronde</td></tr>
<tr><td>Sprong in een nieuwe kleur</td><td>19+ punten, mancheforcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Partner opende 1♠: bied 2♠"></div>
<p>6 punten en driekaartsteun: verhoog naar 2♠. Bied geen 1SA en ga niet op 2-niveau naar harten zoeken; een antwoord van 2♥ vraagt vijf harten en 10+ punten.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Partner opende 1♠: bied 3♠"></div>
<p>7 punten plus 3 voor de singleton met vier troeven = 10 steunpunten: een inviterende verhoging. Partner past met een minimum en biedt manche met meer.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Partner opende 1♠: bied 2SA"></div>
<p>14 punten met vier troeven: Jacoby 2SA legt schoppen vast als troef en is mancheforcing, zodat er ruimte blijft om naar slem te zoeken.</p>
<p>Met een singleton en 13-16 punten beschrijft een splinter de hand beter: na 1♠ biedt ♠KQ74 ♥A853 ♦K962 ♣5 4♣. Zie de les Splinters en Reverse Drury.</p>
<p>Met 6 punten, vijf harten en een singleton, ♠4 ♥QJ852 ♦K9763 ♣82, spring je na 1♥ naar 4♥. De tegenstanders hebben vast een fit en een hoop punten, en je wilt ze laten gokken op 5-niveau.</p>

<h4>Driekaartsteun en 10-12 punten</h4>
<p>De sprong naar drie belooft normaal vier troeven. Met maar drie bied je eerst een nieuwe kleur en steun je daarna de hoge kleur van partner: na 1♥ biedt ♠A84 ♥K93 ♦KJ752 ♣64 eerst 2♦ en daarna 4♥ — 11 punten en een fit tegenover een opening zijn meestal genoeg voor de manche. (Alleen als een korte kleur een hand met te weinig punten voor twee-over-een op 11–12 punten brengt, spring je met drie troeven meteen naar 3♥: 1SA zou de steun ontkennen.) Met driekaartsteun en 13+ bied je eerst een nieuwe kleur en daarna manche in de hoge kleur.</p>

<h3>Antwoorden op 1♣ of 1♦</h3>
<p>Partner kan maar drie kaarten in de lage kleur hebben, en een fit in een hoge kleur is meer waard, dus zoek eerst naar een hoge kleur.</p>
<table>
<thead><tr><th>Antwoord</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Nieuwe kleur op 1-niveau</td><td>6+ punten, 4+ kaarten, forcing. Bied je langste kleur eerst; met twee vierkaarten bied je de goedkoopste (van onder naar boven).</td></tr>
<tr><td>1SA</td><td>6-10, evenwichtig, geen vierkaart hoge kleur</td></tr>
<tr><td>2SA</td><td>13-15, evenwichtig, geen vierkaart hoge kleur, mancheforcing</td></tr>
<tr><td>3SA</td><td>16-17, evenwichtig</td></tr>
<tr><td>Verhoging naar 2</td><td>6-10, 5+ klaveren of 4+ ruiten, geen vierkaart hoge kleur</td></tr>
<tr><td>Sprongverhoging naar 3</td><td>10-12, dezelfde steun, inviterend</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ punten, forcing</td></tr>
<tr><td>Sprong in een nieuwe kleur</td><td>19+ punten</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Partner opende 1♦: bied 1♥"></div>
<p>8 punten en een vierkaart hoge kleur: toon die op 1-niveau. Met 1SA zou je een 4-4-fit in harten kunnen mislopen.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Partner opende 1♣: bied 1SA"></div>
<p>8 punten, evenwichtig, geen vierkaart hoge kleur. Vier klaveren zijn niet genoeg om een mogelijke driekaart van partner te verhogen; 1SA beschrijft de hand.</p>
<p>Met 11 punten, vijf ruiten en geen vierkaart hoge kleur, ♠K5 ♥832 ♦KJ763 ♣A94, verhoog je 1♦ naar 3♦ (10-12). Met 11-12 evenwichtig zonder hoge kleur, bijvoorbeeld ♠KQ5 ♥J104 ♦A963 ♣J72 na 1♣, is er geen direct bod: antwoord 1♦ en bied daarna 2SA als invite voor de manche.</p>
<div class="warn">Spring na 1♣ of 1♦ niet naar 2SA met 11 of 12 punten. Die sprong toont 13-15 en dwingt partner tot de manche. Bied eerst een nieuwe kleur en inviteer in de volgende ronde met 2SA.</div>
<div class="tip">Een nieuwe kleur van de antwoorder is forcing voor één ronde. Je kunt dus met een bescheiden hand een kleur bieden en je kracht bij je volgende bod laten zien.</div>
`,
    keyPoints: [
      'Antwoord met 6+ punten; de hoge kleur van partner steunen heeft de hoogste prioriteit.',
      'Na 1♥/1♠: 2 in de hoge kleur = 6-10 met 3+ steun; 3 = 10-12 met 4+; 2SA = 13+ met 4+ (Jacoby); 4 = zwak met 5+.',
      'Een nieuwe kleur op 2-niveau vraagt 10+ (11+ voor de zekerheid) en is forcing; 2♥ na 1♠ vraagt vijf harten.',
      'Na 1♣/1♦: bied eerst een vierkaart hoge kleur op 1-niveau; 1SA = 6-10, 2SA = 13-15, 3SA = 16-17, allemaal evenwichtig zonder hoge kleur.',
      'Met 11-12 evenwichtig bied je eerst een nieuwe kleur en inviteer je daarna met 2SA.',
    ],
    quiz: [
      {
        q: 'Partner opent 1♥. Je hebt ♠K72 ♥Q84 ♦J953 ♣Q62 (8 punten). Wat antwoord je?',
        options: ['1SA', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Driekaartsteun voor een vijfkaart hoge kleur betekent een achtkaartfit; met 6-10 punten vertelt de enkele verhoging naar 2♥ dat meteen aan partner. 1♠ zou vier schoppen vragen.',
      },
      {
        q: 'Partner opent 1♠. Je hebt ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 punten). Wat antwoord je?',
        options: ['4♠', '3♠', '2SA', '2♦'],
        answer: 2,
        explain: '2SA (Jacoby) toont 13+ met 4+ troeven en is mancheforcing. 3♠ zou maar een inviterende verhoging zijn en 4♠ een zwakke, verdeelde verhoging; beide doen deze hand tekort.',
      },
      {
        q: 'Partner opent 1♦. Je hebt ♠AJ85 ♥K1062 ♦74 ♣953 (8 punten). Wat antwoord je?',
        options: ['1♠', '1♥', '1SA', '2♦'],
        answer: 1,
        explain: 'Met twee vierkaarten bied je van onder naar boven: eerst 1♥. Heeft partner vier schoppen, dan kan hij daarna 1♠ bieden, zodat geen van beide fits verloren gaat.',
      },
      {
        q: 'Partner opent 1♣. Je hebt ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 punten). Wat antwoord je?',
        options: ['1SA', '2SA', '3SA', '1♦'],
        answer: 1,
        explain: 'Evenwichtig, geen vierkaart hoge kleur, 13 punten: 2SA toont 13-15 en is mancheforcing. 1♦ zou vier ruiten beloven en 3SA toont 16-17.',
      },
      {
        q: 'Partner opent 1♠. Je hebt ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 punten). Wat antwoord je?',
        options: ['2♥', '2♣', '1SA', '3♣'],
        answer: 1,
        explain: 'Een antwoord van 2♥ op 1♠ belooft vijf harten. Bied je lange kleur, 2♣, dat forcing is; misschien krijg je later de kans om de harten te tonen. 3♣ zou een sprong in een nieuwe kleur zijn en 19+ tonen.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'De herbieding van de openaar',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Hoe de openaar met zijn tweede bod een minimale, gemiddelde of maximale hand laat zien en zijn verdeling beschrijft, inclusief reverses en sprongen in een nieuwe kleur.',
    body: `
<h3>Deel eerst je hand in</h3>
<p>Je opening dekte een groot bereik, 12-21. De herbieding maakt dat kleiner. Tel je punten opnieuw in het licht van het antwoord van partner (tel steunpunten mee als je een fit hebt gevonden) en deel de hand in een van drie groepen in:</p>
<table>
<thead><tr><th>Groep</th><th>Punten</th><th>Typische actie</th></tr></thead>
<tbody>
<tr><td>Minimum</td><td>12-15</td><td>Het goedkoopste beschrijvende bod</td></tr>
<tr><td>Gemiddeld</td><td>16-18</td><td>Een sprong, of een reverse met 17+</td></tr>
<tr><td>Maximum</td><td>19-21</td><td>Bied manche, of forceer met een sprong in een nieuwe kleur</td></tr>
</tbody>
</table>

<h3>Na een antwoord op 1-niveau</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>De antwoorder heeft 6+ punten en vier of meer schoppen. De mogelijkheden van de openaar:</p>
<table>
<thead><tr><th>Herbieding</th><th>Punten</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>Vierkaartsteun in schoppen</td></tr>
<tr><td>3♠</td><td>16-18</td><td>Vierkaartsteun, inviterend</td></tr>
<tr><td>4♠</td><td>19-21</td><td>Vierkaartsteun, om te spelen</td></tr>
<tr><td>1SA</td><td>12-14</td><td>Evenwichtig</td></tr>
<tr><td>2SA (sprong)</td><td>18-19</td><td>Evenwichtig, inviterend</td></tr>
<tr><td>2♦</td><td>12-15</td><td>Meestal zes ruiten</td></tr>
<tr><td>3♦ (sprong)</td><td>16-18</td><td>Een goede zeskaart</td></tr>
<tr><td>2♣ (nieuwe, lagere kleur)</td><td>12-18</td><td>Vier of meer klaveren, niet forcing</td></tr>
<tr><td>2♥ (reverse)</td><td>17+</td><td>Langere ruiten dan harten, forcing voor één ronde</td></tr>
<tr><td>3♣ (sprong in nieuwe kleur)</td><td>19+</td><td>Mancheforcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: herbied 1SA"></div>
<p>13 punten en evenwichtig: 1SA. Een verhoging naar 2♠ belooft vier schoppen, en partner heeft er misschien maar vier.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: herbied 3♠"></div>
<p>16 punten plus 1 voor elk van de twee doubletons (harten en klaveren) met vier troeven: 16 + 1 + 1 = 18 steunpunten, een gemiddelde hand. Spring naar 3♠ als invite voor de manche. Met een minimum (12-15) verhoog je naar 2♠; met 19+ bied je 4♠.</p>

<h3>Reverses</h3>
<p>Een <strong>reverse</strong> is een herbieding in een nieuwe kleur op 2-niveau die <em>hoger</em> is dan je eerste kleur, zoals 1♦ – 1♠ – 2♥ of 1♣ – 1♥ – 2♦. Om voorkeur te geven aan je eerste kleur moet partner nu naar 3-niveau, dus een reverse belooft extra kracht (17+) en is forcing voor één ronde. Een reverse laat ook zien dat je eerste kleur langer is dan je tweede.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: reverse 2♥"></div>
<p>17 punten, vijf ruiten en vier harten: 2♥ toont de verdeling en de extra kracht in één bod.</p>
<div class="warn">Met een minimum doe je geen reverse. Met ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 punten) herbied je na 1♦ – 1♠ gewoon 2♦. Een hartenfit mis je niet: met vier harten en vier schoppen had partner eerst 1♥ geantwoord.</div>

<h3>Sprongen in een nieuwe kleur en in de eigen kleur</h3>
<p>Een sprong in een nieuwe kleur (1♦ – 1♠ – 3♣) toont 19+ en is mancheforcing. Een sprongherbieding in je eigen kleur (1♥ – 1♠ – 3♥) toont 16-18 en een goede zeskaart; die is inviterend, niet forcing.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: spring naar 3♣"></div>
<p>20 punten: veel te sterk voor een niet-forcing 2♣ en buiten het bereik van 18-19 van een herbieding van 2SA. 3♣ is mancheforcing, terwijl je naar het beste contract zoekt.</p>

<h3>Na 1SA of een verhoging</h3>
<p>Na 1♠ – 1SA heeft de antwoorder 6-10 en meestal geen fit. Pas met een evenwichtig minimum; herhaal een zeskaart; toon een tweede kleur (een nieuwe kleur die lager is dan je eerste is niet forcing); of inviteer met een sprong als je 16-18 of meer hebt. Na 1♠ – 2♠ heeft de antwoorder 6-10 met steun: pas met een minimum, bied 3♠ als invite met een gemiddelde hand en bied 4♠ met een maximum. De verliezerstelling is hier een goede gids: met 6 verliezers inviteer je, met 5 bied je manche.</p>
<div class="tip">Een antwoord op 2-niveau (1♠ – 2♣) toont al 10+ en is forcing voor één ronde. De openaar kan dus een natuurlijke, beschrijvende herbieding doen en hoeft niet te springen alleen om de bieding open te houden.</div>
`,
    keyPoints: [
      'Deel de hand in: minimum 12-15, gemiddeld 16-18, maximum 19-21.',
      'Herbieding 1SA = 12-14 evenwichtig; sprong naar 2SA = 18-19 evenwichtig.',
      'Verhoog de hoge kleur van de antwoorder met vierkaartsteun: 2-niveau met een minimum, 3-niveau met een gemiddelde hand, manche met een maximum.',
      'Een reverse (hogere nieuwe kleur op 2-niveau) toont 17+, is forcing en laat zien dat de eerste kleur langer is.',
      'Een sprong in een nieuwe kleur door de openaar toont 19+ en is mancheforcing.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Je hebt ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 punten). Wat herbied je?',
        options: ['1SA', '2♦', '2SA', '2♠'],
        answer: 0,
        explain: 'De hand is evenwichtig met 12-14 punten, precies wat 1SA toont. 2♦ suggereert zes ruiten en 2♠ belooft vier schoppen.',
      },
      {
        q: '1♣ – 1♥. Je hebt ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 punten). Wat herbied je?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 2,
        explain: 'Met vierkaartsteun tel je steunpunten: 18 punten + 1 voor elke doubleton = 20, een maximum. Bied de manche: 4♥.',
      },
      {
        q: 'In welke van deze biedingen doet de openaar een reverse?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1SA – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Harten is hoger dan ruiten en 2♥ is op 2-niveau, dus partner moet naar 3♦ om voorkeur te geven aan de eerste kleur van de openaar. In de andere biedingen is de tweede kleur lager of wordt die op 1-niveau geboden.',
      },
      {
        q: '1♦ – 1♥. Je hebt ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 punten). Wat herbied je?',
        options: ['2♦', '3♦', '2SA', '1SA'],
        answer: 1,
        explain: 'Een gemiddelde hand met een goede zeskaart: de sprong naar 3♦ toont 16-18 en inviteert. 2♦ zou een minimum tonen, en 1SA of 2SA een evenwichtige hand.',
      },
      {
        q: '1♠ – 2♠. Je hebt ♠AQJ84 ♥K73 ♦A62 ♣95 (14 punten). Wat doe je?',
        options: ['Pas', '3♠', '4♠', '2SA'],
        answer: 0,
        explain: '14 punten + 1 voor de vijfde schoppen = 15, een minimum. De verliezerstelling is het ermee eens: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 verliezers, het aantal van een minimale opening. Tegenover een verhoging van 6-10 is manche onwaarschijnlijk, dus pas.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'SA-openingen en de antwoorden',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Antwoorden op 1SA en 2SA met Stayman, Jacoby-transfers, de transfer naar een lage kleur, invites en de kwantitatieve 4SA.',
    body: `
<h3>Waarom SA-openingen eenvoudig zijn</h3>
<p>1SA toont 15-17 punten en een evenwichtige hand (er mag een vijfkaart in zitten). Omdat de hand van de openaar zo nauwkeurig is beschreven, weet de antwoorder meestal meteen waar het paar thuishoort, en wordt hij de kapitein. Tel je punten op bij de 15-17 van partner: met samen 25 of meer wil je manche spelen.</p>

<h3>Antwoorden op 1SA</h3>
<table>
<thead><tr><th>Antwoord</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Pas</td><td>0-7 zonder lange hoge kleur</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ punten en een vierkaart hoge kleur</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ harten, elke sterkte. De openaar biedt 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ schoppen, elke sterkte. De openaar biedt 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer naar klaveren: de openaar biedt 3♣. Een zwakke hand met een lange lage kleur; pas op 3♣ of bied 3♦.</td></tr>
<tr><td>2SA</td><td>8-9, inviterend</td></tr>
<tr><td>3SA</td><td>10-15, om te spelen</td></tr>
<tr><td>4♣</td><td>Gerber: vraagt naar azen</td></tr>
<tr><td>4♦ / 4♥</td><td>Texas-transfer: 6+ harten / schoppen en manchekracht. De openaar biedt 4♥ / 4♠.</td></tr>
<tr><td>4SA</td><td>16-17, kwantitatief: invite voor 6SA</td></tr>
</tbody>
</table>

<h3>Stayman</h3>
<p>2♣ vraagt de openaar naar een vierkaart hoge kleur. De openaar antwoordt 2♦ (geen vierkaart hoge kleur), 2♥ (vier harten, misschien ook vier schoppen) of 2♠ (vier schoppen, geen vier harten). Daarna:</p>
<ul>
<li>Als er een fit is gevonden, verhoog je naar drie om te inviteren of naar vier om te spelen.</li>
<li>Zo niet, dan bied je 2SA met 8-9 of 3SA met 10-15.</li>
<li>Als de openaar harten toonde en jij schoppen hebt, bied je 2SA of 3SA. De openaar, die beide hoge kleuren kan hebben, corrigeert naar schoppen als hij er vier heeft.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Partner opende 1SA: bied 2♣"></div>
<p>10 punten en twee vierkaarten in de hoge kleuren. Na 2♦ bied je 3SA; na 2♥ bied je 4♥; na 2♠ bied je 4♠. Stayman vraagt 8+ punten, omdat je na een antwoord van 2♦ minstens 2SA moet kunnen bieden.</p>

<h3>Jacoby-transfers</h3>
<p>Met een vijfkaart of langer in een hoge kleur bied je een transfer: je biedt de kleur eronder en laat de openaar jouw kleur bieden. De sterke hand wordt leider en de uitkomst komt naar die hand toe. Transfers werken met elke sterkte, van niets tot slemkracht.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Partner opende 1SA: 2♥, dan pas"></div>
<p>3 punten. 2♠ speelt veel beter dan 1SA. Bied 2♥ als transfer en pas op 2♠ van de openaar.</p>
<p>Nadat de transfer is uitgevoerd, gaat de antwoorder verder:</p>
<table>
<thead><tr><th>Volgend bod</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Pas</td><td>0-7, afsluiten</td></tr>
<tr><td>2SA</td><td>8-9 met precies vijf kaarten in de hoge kleur (de openaar kiest)</td></tr>
<tr><td>3 in de hoge kleur</td><td>8-9 met zes of meer kaarten, inviterend</td></tr>
<tr><td>3SA</td><td>10-15 met precies vijf (de openaar kiest 3SA of 4 in de hoge kleur)</td></tr>
<tr><td>4 in de hoge kleur</td><td>10-15 met zes of meer, om te spelen (met Texas-transfers bied je in plaats daarvan meteen 4♦ of 4♥)</td></tr>
<tr><td>Nieuwe kleur</td><td>Natuurlijk en forcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Partner opende 1SA: 2♦, dan 3SA"></div>
<p>10 punten en vijf harten. Bied de transfer en daarna 3SA. Met drie of meer harten biedt de openaar 4♥; met een doubleton past hij.</p>
<p>Met vierkaartsteun en 17 punten geeft de openaar een <strong>superaccept</strong> door te springen: 1SA – 2♦ – 3♥. De antwoorder biedt dan met bijna alles manche, want de fit is minstens negen kaarten en de openaar zit aan de bovenkant van zijn bereik.</p>

<h3>Lange lage kleuren, invites en slempogingen</h3>
<p>Met een zwakke hand en zes of meer kaarten in een lage kleur bied je 2♠: de openaar moet 3♣ bieden, en jij past met klaveren of biedt 3♦ met ruiten. Met ♠52 ♥742 ♦J3 ♣Q108653 gaat het 1SA – 2♠ – 3♣ – pas.</p>
<p>2SA is een invite voor de manche met 8-9. De openaar past met 15, biedt 3SA met 17 en beslist op gevoel met 16 (accepteer met goede tienen en negens of een vijfkaart). 4SA is hier geen Blackwood: het toont 16-17 en vraagt de openaar om met een maximum 6SA te bieden. Met ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 punten) bied je 4SA: 16 + 15-17 = samen 31-33, dus slem is alleen goed als de openaar aan de bovenkant van zijn bereik zit.</p>

<h3>Antwoorden op 2SA</h3>
<p>De 2SA-opening toont 20-21. Dezelfde middelen werken één niveau hoger: 3♣ is Stayman, 3♦ en 3♥ zijn transfers, 4♦ en 4♥ zijn Texas-transfers, 3SA toont 4-10 punten en 4SA (11-12) is kwantitatief. Zelfs 4 punten zijn genoeg om naar de manche te gaan.</p>
<div class="tip">Met een vijfkaart hoge kleur en genoeg voor de manche bied je eerst een transfer en daarna 3SA. De openaar kent zijn eigen hand en weet dat jij vijf kaarten hebt, en maakt dus de uiteindelijke keuze tussen 3SA en vier in de hoge kleur.</div>
<div class="warn">Gebruik geen Stayman met een evenwichtige hand van 8+ zonder vierkaart hoge kleur. Dan moet je straks gokken; bied gewoon 2SA of 3SA.</div>
`,
    keyPoints: [
      '1SA = 15-17 evenwichtig; de antwoorder telt de punten op en bepaalt het contract.',
      '2♣ Stayman (8+, een vierkaart hoge kleur): antwoorden 2♦ geen, 2♥ harten (misschien ook schoppen), 2♠ alleen schoppen.',
      '2♦ en 2♥ zijn transfers naar harten en schoppen, met elke sterkte; 2♠ is een transfer naar klaveren voor een zwakke hand met een lange lage kleur.',
      '2SA = 8-9 inviterend, 3SA = 10-15, 4SA = 16-17 kwantitatief (geen Blackwood).',
      'Met vierkaartsteun en 17 geeft de openaar een superaccept door naar drie in de hoge kleur te springen.',
      'Na 2SA: 3♣ Stayman, 3♦/3♥ transfers, 4♦/4♥ Texas, 3SA met 4-10, 4SA kwantitatief.',
    ],
    quiz: [
      {
        q: 'Partner opent 1SA. Je hebt ♠J8752 ♥84 ♦932 ♣Q65 (3 punten). Wat is je plan?',
        options: ['Pas', '2♥ (transfer), dan pas op 2♠', 'Bied 2♠', 'Bied 2♣'],
        answer: 1,
        explain: 'Een zwakke hand met vijf schoppen speelt beter in 2♠ dan in 1SA, omdat de lange troeven slagen opleveren. Bied 2♥ als transfer en pas. 2♠ zou een transfer naar klaveren zijn, en 2♣ Stayman vraagt 8+.',
      },
      {
        q: '1SA – 2♣ – 2♥. Je hebt ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 punten). Wat nu?',
        options: ['3SA', '4♥', '3♥', '2SA'],
        answer: 1,
        explain: 'De openaar heeft vier harten, dus er is een 4-4-fit, en 11 + 15-17 is genoeg voor de manche. Bied 4♥; een 4-4-fit in een hoge kleur speelt meestal beter dan 3SA.',
      },
      {
        q: 'Je opende 1SA met ♠KQ75 ♥AJ83 ♦K4 ♣Q62. Partner biedt 2♣. Wat antwoord je?',
        options: ['2♥', '2♠', '2♦', '2SA'],
        answer: 0,
        explain: 'Met beide hoge kleuren antwoord je eerst 2♥. Heeft partner schoppen in plaats van harten, dan biedt hij 2SA of 3SA en corrigeer jij naar schoppen.',
      },
      {
        q: '1SA – 2♦ – 2♥ – 3SA. Je opende met drie harten. Wat doe je?',
        options: ['Pas, want partner koos voor 3SA', 'Bied 4♥: partner heeft vijf harten getoond, dus jullie hebben een achtkaartfit', 'Bied 4SA', 'Bied 3♥'],
        answer: 1,
        explain: 'Transfer en daarna 3SA toont precies vijf harten en manchekracht. Met driekaartsteun kiest de openaar 4♥; met een doubleton past hij op 3SA.',
      },
      {
        q: 'Partner opent 2SA. Je hebt ♠Q8642 ♥K7 ♦J73 ♣1052 (6 punten). Wat is je plan?',
        options: ['Bied 3♠', 'Bied 3♥ en na 3♠ 3SA', 'Bied 3SA', 'Pas'],
        answer: 1,
        explain: '20-21 tegenover 6 is genoeg voor de manche. Bied 3♥ als transfer en daarna 3SA om precies vijf schoppen te tonen; de openaar kiest 4♠ met driekaartsteun of past met twee.',
      },
    ],
  },

  {
    id: 'planning-the-play',
    title: 'Een speelplan maken',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Tel voordat je naar de eerste slag speelt je vaste slagen (in sans atout) of je verliezers (in een troefcontract) en maak een plan.',
    body: `
<h3>Stop en plan vóór de eerste slag</h3>
<p>Als de dummy op tafel komt, spelen de meeste beginners meteen een kaart naar de eerste slag. Sterke spelers nemen even de tijd. In de eerste slag wordt het contract vaak gewonnen of verloren, en je kunt die slag pas plannen als je het hele plaatje hebt bekeken. Gebruik elke keer dezelfde routine:</p>
<ol>
<li><strong>Tel.</strong> Tel in sans atout je vaste slagen: slagen die je kunt maken zonder de slag af te geven. Tel in een troefcontract je verliezers in de hand met de lange troeven.</li>
<li><strong>Vergelijk.</strong> Hoeveel extra slagen heb je nodig (sans atout), of van hoeveel verliezers moet je af (troefcontract)?</li>
<li><strong>Zoek de bronnen.</strong> Extra slagen komen uit het vrijspelen van lange kleuren, het wegdrijven van hoge kaarten, snitten en introeven in de hand met de korte troeven. Verliezers verdwijnen door ze in de dummy in te troeven, ze af te gooien op vaste slagen van de dummy, of door snitten.</li>
<li><strong>Zoek de gevaren.</strong> Hoe vaak moet je de slag afgeven? Welke tegenspeler is gevaarlijk? Heb je de entrees die je nodig hebt?</li>
<li><strong>Bepaal de speelvolgorde</strong>, te beginnen met de kaart uit de dummy en de hand die de eerste slag moet winnen.</li>
</ol>

<h3>Een voorbeeld in sans atout: tel je vaste slagen</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3SA door Zuid. West komt uit met ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Tel:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): zes vaste slagen. Je hebt er nog drie nodig.</p>
<p><strong>Bronnen:</strong> harten. Zodra de ♥A is weggedreven, leveren de KQJ10 van de dummy drie slagen op. Klaveren bieden niets: de tegenspelers hebben de K, Q, J en 10.</p>
<p><strong>Gevaar:</strong> de tegenspelers kunnen de ♥A tot de derde ronde ophouden. Dan is de laatste harten van de dummy een vaste slag, maar je hebt een entree nodig om die te bereiken. De enige entree van de dummy buiten harten is de ♠A.</p>
<p><strong>Plan:</strong> speel in de eerste slag klein uit de dummy en neem met de ♠K in je hand, zodat de ♠A als entree bewaard blijft. Speel daarna meteen harten. Wanneer de tegenspelers hun aas ook nemen, je hebt negen slagen: twee schoppen, drie harten, drie ruiten en een klaver. Neem je de eerste slag achteloos met de ♠A, dan blijft de vierde harten van de dummy onbereikbaar als een tegenspeler de ♥A tot de derde ronde ophoudt, en maak je maar acht slagen.</p>
<div class="tip">Drijf de hoge kaarten van de tegenstanders vroeg weg, zolang je nog in elke kleur een stop hebt. Incasseer je vaste slagen als laatste, niet als eerste.</div>

<h3>Een voorbeeld met troef: tel je verliezers</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ door Zuid. West komt uit met ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Tel de verliezers in de hand van Zuid:</strong> schoppen geen; harten één (de derde ronde); ruiten drie (de 7, de 3 en de 2); klaveren geen (de ♣A van de dummy dekt je singleton). Totaal: vier. Je mag er drie hebben.</p>
<p><strong>Bron:</strong> de dummy heeft maar twee ruiten. Na de ♦A en nog een ronde is de dummy renonce en kan hij je derde ruiten introeven met een kleine troef. Die troefslag is een extra slag, omdat hij gemaakt wordt door de hand met de <em>korte</em> troeven: de eigen troeven van Zuid zijn toch al vaste slagen.</p>
<p><strong>Gevaar:</strong> als je eerst drie keer troef trekt, heeft de dummy geen troef meer om in te troeven. Je moet minstens één troef in de dummy houden tot je hebt ingetroefd.</p>
<p><strong>Plan:</strong> neem de uitkomst met de ♥A van de dummy, speel een ruiten naar je aas en geef een ruiten af. Als de tegenspelers de slag nemen en troef terugspelen (hun beste verdediging), neem je die en troef je meteen een ruiten in de dummy. Trek daarna troef. Je verliest één harten en twee ruiten.</p>
<div class="warn">"Altijd eerst troef trekken" is een goede gewoonte met een grote uitzondering: als je de troeven van de dummy nodig hebt om in te troeven, doe dat dan voordat de troeven op zijn.</div>

<h3>Tellen is een gewoonte</h3>
<p>Tellen kost een paar seconden; niet tellen kost enorm veel. Als je vaste slagen in sans atout het doel al halen, incasseer ze dan en vermijd onnodige risico's. Kom je tekort, beslis dan <em>voordat</em> je een kaart aanraakt waar de extra slagen vandaan moeten komen, want de speelvolgorde en de keuze van de hand die de eerste slag wint, hangen daar vaak van af.</p>
`,
    keyPoints: [
      'Maak een plan voordat je naar de eerste slag speelt: tellen, vergelijken, bronnen zoeken, gevaren zoeken en dan de volgorde bepalen.',
      'Tel in sans atout je vaste slagen; tel in een troefcontract de verliezers in de hand met de lange troeven.',
      'Drijf de hoge kaarten van de tegenstanders vroeg weg, zolang je nog stops hebt.',
      'Introeven in de hand met de korte troeven (meestal de dummy) levert slagen op; houd de troeven van de dummy tot je hebt ingetroefd.',
      'Bescherm de entrees die je later nodig hebt.',
    ],
    quiz: [
      {
        q: 'Wat tel je in een SA-contract als eerste?',
        options: ['Je verliezers', 'Je vaste slagen', 'Je troeven', 'De punten van de tegenstanders'],
        answer: 1,
        explain: 'In sans atout kun je niet introeven, dus de natuurlijke maatstaf zijn de slagen die je kunt maken zonder de slag af te geven. Het tekort vertelt je hoeveel slagen uit lange kleuren of snitten moeten komen.',
      },
      {
        q: 'Welke troefslag levert een extra slag op?',
        options: ['Introeven in de hand met de lange troeven', 'Introeven in de hand met de korte troeven', 'Allebei evenveel', 'Geen van beide'],
        answer: 1,
        explain: 'Je lange troeven maken toch al slagen, dus door daarmee in te troeven gebruik je alleen een vaste slag. Introeven met de troeven van de korte hand (meestal die van de dummy) levert een slag op die die kleine troeven anders niet zouden maken.',
      },
      {
        q: 'Waarom neem je in het 3SA-spel hierboven de eerste slag met de ♠K in je hand en niet met de ♠A in de dummy?',
        options: ['Om de ♠A van de dummy als entree naar de harten te bewaren', 'Omdat de heer de hogere kaart is', 'Om de schoppenstop op te houden', 'Om de schoppenkleur te deblokkeren'],
        answer: 0,
        explain: 'Als de tegenspelers de ♥A tot de derde ronde ophouden, is de laatste harten van de dummy een vaste slag die je niet kunt bereiken, tenzij de dummy de ♠A nog heeft.',
      },
      {
        q: 'Wat gaat er in het 4♠-spel hierboven mis als de leider meteen drie keer troef trekt?',
        options: ['Niets, dat is het veiligste spel', 'De dummy heeft geen troef meer om de derde ruiten in te troeven', 'De tegenspelers kunnen een harten introeven', 'De leider verliest de controle over de klaveren'],
        answer: 1,
        explain: 'De dummy begon met maar drie troeven. Door drie keer troef te trekken zijn die allemaal op, en houdt de leider drie ruitenverliezers plus een harten over: één te veel.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'De uitkomst',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Hoe je de kleur kiest waarin je uitkomt en de juiste kaart in die kleur, tegen sans atout en tegen troefcontracten.',
    body: `
<h3>Twee beslissingen: de kleur en de kaart</h3>
<p>De uitkomst is de enige kaart die je speelt zonder de dummy te zien, dus het loont om goede gewoontes aan te houden. Kies eerst de kleur aan de hand van de bieding en je hand; kom dan uit met de afgesproken kaart in die kleur, zodat partner kan afleiden wat je hebt.</p>

<h3>De kleur kiezen tegen sans atout</h3>
<ul>
<li>Als partner een kleur heeft geboden, kom je daarin uit, tenzij je een heel goed alternatief hebt.</li>
<li>Kom anders uit in je langste en sterkste kleur. Sans atout is een race: de tegenspelers proberen lengteslagen vrij te spelen voordat de leider zijn eigen slagen kan incasseren.</li>
<li>Kies liever ongeboden kleuren. Vermijd kleuren die de tegenstanders hebben geboden.</li>
<li>Met een heel zwakke hand zonder entrees heeft een lange kleur die je nooit kunt incasseren misschien geen zin; een uitkomst in de waarschijnlijke lange kleur van partner (vaak een hoge kleur die de tegenstanders niet noemden) kan dan beter zijn.</li>
</ul>

<h3>De kleur kiezen tegen een troefcontract</h3>
<ul>
<li><strong>Goede uitkomsten:</strong> de hoogste van een reeks; de kleur van partner; een singleton (vooral als je de troefaas hebt of partner een entree kan hebben); de aas van AK.</li>
<li><strong>Kom met troef uit</strong> als de bieding erop wijst dat de dummy verliezers van de leider gaat introeven: de leider heeft twee kleuren getoond en de dummy gaf de voorkeur aan de tweede, of de dummy heeft een korte kleur getoond.</li>
<li><strong>Vermijd:</strong> onder een aas uitkomen (de leider kan een singleton heer maken, en jij maakt je aas misschien nooit); onder een heer uitkomen naar de AQ van de leider; uitkomen met een honneur uit een doubleton zoals Qx.</li>
</ul>
<div class="warn">Kom tegen een troefcontract nooit onder een aas uit. Moet je die kleur spelen, kom dan uit met de aas.</div>

<h3>Met welke kaart je uitkomt</h3>
<table>
<thead><tr><th>Kaarten</th><th>Tegen sans atout</th><th>Tegen een troefcontract</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (vierde van boven)</td><td>5, al is uitkomen onder een heer riskant</td></tr>
<tr><td>A 10 6 3</td><td>3 (vierde van boven)</td><td>Vermijden; als het moet, de A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (hoogste van niets)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (singleton)</td><td>zelden een goede keuze</td><td>7, vaak een goede uitkomst</td></tr>
</tbody>
</table>
<p>De regels achter de tabel: kom uit met de hoogste van een reeks (drie aaneengesloten kaarten, of twee aaneengesloten kaarten plus de op één na volgende, zoals KQ10); uit een binnenreeks zoals KJ10 of Q109 kom je uit met de hoogste van de aaneengesloten kaarten (de J of de 10); uit AK met de aas; uit een doubleton en uit drie kleine kaarten met de hoogste; uit een honneur met twee of drie kleine kaarten kom je laag uit (derde van boven uit drie, vierde van boven uit vier); en tegen sans atout kom je uit met de vierde van boven uit je lange kleur.</p>

<h3>Voorbeelden</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Jij komt uit tegen 1SA – 3SA"></div>
<p>Kom uit met ♠J, de hoogste van de binnenreeks KJ10. Schoppen is je lange kleur, en de boer vertelt partner ook dat je de 10 hebt, maar niet de Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Jij komt uit tegen 1♠ – 2♠ – 4♠"></div>
<p>Twee veilige keuzes: ♥A (de aas uit AK) en ♦Q (de hoogste van een reeks). Met ♥A win je de slag en zie je de dummy voordat je beslist hoe je verdergaat, terwijl het signaal van partner je vertelt of je harten moet doorspelen.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Oost: jij komt uit tegen 2♦"></div>
<p>Kom met troef uit. Noord heeft vijf of meer schoppen en vier of meer ruiten, en de voorkeur van Zuid voor ruiten wijst op een korte schoppen. Door jouw sterke schoppen kan de leider zijn schoppenverliezers alleen kwijtraken door ze in de dummy in te troeven; elke troefronde die jij speelt, kost de dummy een troefslag.</p>
<div class="tip">Vraag je na elke uitkomst af wat die partner vertelt. Met afgesproken uitkomsten kan de andere tegenspeler de kleur al vanaf de eerste slag tellen.</div>
`,
    keyPoints: [
      'Kies eerst de kleur: tegen sans atout de kleur van partner, anders je lange kleur; tegen een troefcontract reeksen, de kleur van partner, singletons of troef.',
      'Kom uit met de hoogste van een reeks; uit KJ10 de J, uit Q109 de 10; uit AK de A.',
      'Kom tegen sans atout uit met de vierde van boven uit je langste en sterkste kleur.',
      'De hoogste uit een doubleton en uit drie kleine kaarten; laag uit een honneur met twee of drie kleine kaarten.',
      'Kom tegen een troefcontract nooit onder een aas uit; kom met troef uit als de dummy waarschijnlijk gaat introeven.',
    ],
    quiz: [
      {
        q: 'Je komt uit tegen 3SA met ♠KQ1086 als lange kleur. Met welke kaart kom je uit?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 is een gebroken reeks, dus kom uit met de heer. Dat is veilig en begint de kleur vrij te spelen; met de vierde van boven (de 8) zou de leider goedkoop een slag kunnen maken met de J.',
      },
      {
        q: 'Welke van deze uitkomsten is tegen 4♥ de slechtste?',
        options: ['♦Q uit ♦QJ10', '♣2 uit ♣AJ62', 'Een singleton schoppen', '♣8 uit ♣852'],
        answer: 1,
        explain: 'Onder een aas uitkomen tegen een troefcontract is de klassieke verliezende uitkomst: de leider kan goedkoop een slag maken met de heer of de vrouw, en je aas kan later worden ingetroefd.',
      },
      {
        q: 'Partner gaf een volgbod van 1♠ en de tegenstanders kwamen in 3SA terecht. Je hebt ♠Q85. Met welke kaart kom je uit?',
        options: ['♠Q', '♠8', '♠5', 'Een andere kleur'],
        answer: 2,
        explain: 'Kom uit in de kleur van partner, en uit een honneur met twee kleine kaarten kom je laag uit. Met de vrouw verspil je die misschien als partner AJ heeft; bewaar je haar, dan kan jullie kant er later een honneur van de leider mee vangen.',
      },
      {
        q: 'Je besluit uit te komen uit ♦94. Met welke kaart?',
        options: ['♦9', '♦4', 'Maakt niet uit', 'Geen van beide: kom nooit uit met een doubleton'],
        answer: 0,
        explain: 'Kom uit met de hoogste van een doubleton. Als je later de 4 speelt, ziet partner het hoog-laag en weet hij dat je met twee kaarten begon.',
      },
      {
        q: 'Wanneer is een troefuitkomst het aantrekkelijkst?',
        options: ['Als je de troefaas hebt', 'Als de bieding erop wijst dat de dummy kort is in de bijkleur van de leider en gaat introeven', 'Als je een singleton in een bijkleur hebt', 'Altijd als de tegenstanders in een hoge kleur spelen'],
        answer: 1,
        explain: 'Troefuitkomsten beperken het aantal keren dat de dummy kan introeven. Ze werken het best als de leider een tweede kleur heeft getoond, de dummy voorkeur heeft gegeven, of bekend is dat de dummy kort is in een kleur waarin jij sterk bent.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'De wedstrijdtelling',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Hoe een spel bij wedstrijdbridge wordt geteld: slagwaarden, premies voor deelscore, manche en slem, overslagen, onderslagen en het effect van doubletten.',
    body: `
<h3>Elk spel staat op zichzelf</h3>
<p>Bij wedstrijdbridge wordt elk spel apart geteld. Een deelscore gaat niet mee naar het volgende spel, zoals bij rubberbridge. Op elk spel staat wie <strong>kwetsbaar</strong> is; kwetsbaar zijn verhoogt zowel de premies voor manche en slem als de straf voor down gaan.</p>

<h3>Stap 1: de slagwaarde</h3>
<p>Alleen geboden en gemaakte slagen tellen mee voor de slagwaarde:</p>
<table>
<thead><tr><th>Denominatie</th><th>Per geboden en gemaakte slag</th></tr></thead>
<tbody>
<tr><td>♣ of ♦</td><td>20</td></tr>
<tr><td>♥ of ♠</td><td>30</td></tr>
<tr><td>SA</td><td>40 voor de eerste slag, 30 voor elke volgende</td></tr>
</tbody>
</table>
<p>Gedoubleerde contracten krijgen tweemaal de slagwaarde, geredoubleerde contracten viermaal. 2♥ is dus 60 waard, maar 2♥ gedoubleerd 120.</p>

<h3>Stap 2: premies</h3>
<table>
<thead><tr><th>Premie</th><th>Niet kwetsbaar</th><th>Kwetsbaar</th></tr></thead>
<tbody>
<tr><td>Deelscore (slagwaarde onder 100)</td><td>50</td><td>50</td></tr>
<tr><td>Manche (slagwaarde 100 of meer)</td><td>300</td><td>500</td></tr>
<tr><td>Klein slem (6-niveau)</td><td>500 extra</td><td>750 extra</td></tr>
<tr><td>Groot slem (7-niveau)</td><td>1000 extra</td><td>1500 extra</td></tr>
<tr><td>Gedoubleerd contract gemaakt (doubletbonus, "insult")</td><td>50</td><td>50</td></tr>
<tr><td>Geredoubleerd contract gemaakt</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Slempremies komen bovenop de manchepremie. Voor de manche is een slagwaarde van 100 nodig: 3SA (40 + 30 + 30), 4♥ of 4♠ (120), 5♣ of 5♦ (100).</p>

<h3>Stap 3: overslagen</h3>
<p>Ongedoubleerde overslagen tellen hun normale slagwaarde (20, 30, of 30 in sans atout). Gedoubleerde overslagen leveren elk 100 op niet kwetsbaar en 200 kwetsbaar; geredoubleerd 200 en 400.</p>

<h3>Down gaan: onderslagen</h3>
<table>
<thead><tr><th>Down</th><th>Niet kw.</th><th>Niet kw. gedoubleerd</th><th>Kw.</th><th>Kw. gedoubleerd</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Gedoubleerd en niet kwetsbaar: 100 voor de eerste onderslag, 200 elk voor de tweede en de derde, daarna 300 per slag. Gedoubleerd en kwetsbaar: 200 voor de eerste, 300 voor elke volgende. Geredoubleerde onderslagen zijn het dubbele van de gedoubleerde bedragen.</p>

<h3>Scores om uit je hoofd te kennen</h3>
<table>
<thead><tr><th>Contract precies gemaakt</th><th>Niet kw.</th><th>Kw.</th></tr></thead>
<tbody>
<tr><td>1SA</td><td>90</td><td>90</td></tr>
<tr><td>2♥ of 2♠, 3♣ of 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2SA</td><td>120</td><td>120</td></tr>
<tr><td>3♥ of 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3SA</td><td>400</td><td>600</td></tr>
<tr><td>4♥ of 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ of 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ of 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6SA</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7SA</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ of 2♠ gedoubleerd</td><td>470</td><td>670</td></tr>
<tr><td>1SA gedoubleerd</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Rekenvoorbeeld: 4♠ met elf slagen, niet kwetsbaar. Slagwaarde 4 × 30 = 120, manchepremie 300, één overslag 30: totaal 450. Hetzelfde resultaat kwetsbaar: 120 + 500 + 30 = 650.</p>
<p>Rekenvoorbeeld: 3SA gedoubleerd met tien slagen, kwetsbaar. Slagwaarde (40 + 30 + 30) × 2 = 200, manchepremie 500, doubletbonus 50, één gedoubleerde overslag 200: totaal 950.</p>
<div class="warn">Een doublet kan van een deelscore een manche maken: 2♥ gedoubleerd heeft een slagwaarde van 120, dus maken levert 470 of 670 op in plaats van 110. Doubleer een laag contract niet voor straf, tenzij je verwacht het down te spelen.</div>
<div class="tip">Merk op dat 5♣ en 3SA evenveel opleveren, maar dat je voor 3SA twee slagen minder nodig hebt. Dat is een van de redenen waarom manches in sans atout en in de hoge kleuren de voorkeur krijgen boven manches in de lage kleuren.</div>
`,
    keyPoints: [
      'Slagwaarden: lage kleuren 20, hoge kleuren 30, sans atout 40 en daarna 30; gedoubleerd ×2, geredoubleerd ×4.',
      'Een manche (slagwaarde 100+) levert 300 op niet kwetsbaar of 500 kwetsbaar; een deelscore 50.',
      'Slempremies: klein 500/750, groot 1000/1500, bovenop de manchepremie.',
      'Onderslagen: 50/100 ongedoubleerd; gedoubleerd 100-300-500-800 niet kwetsbaar en 200-500-800-1100 kwetsbaar.',
      'Een gemaakt gedoubleerd contract levert 50 extra op (de doubletbonus), en gedoubleerde overslagen zijn elk 100 of 200 waard.',
    ],
    quiz: [
      {
        q: 'Je maakt precies 4♥, kwetsbaar. Hoeveel scoor je?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Slagwaarde 4 × 30 = 120, plus de kwetsbare manchepremie van 500: 620.',
      },
      {
        q: 'Je maakt tien slagen in 3SA, niet kwetsbaar. Hoeveel scoor je?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 voor het contract, 300 voor een niet-kwetsbare manche en 30 voor de overslag: 430.',
      },
      {
        q: 'Niet kwetsbaar ga je drie down gedoubleerd. Hoeveel scoren de tegenstanders?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'Niet kwetsbaar gedoubleerd: 100 voor de eerste onderslag en 200 elk voor de tweede en de derde: 100 + 200 + 200 = 500.',
      },
      {
        q: 'De tegenstanders maken 2♠ gedoubleerd, niet kwetsbaar. Hoeveel scoren ze?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Gedoubleerd is de slagwaarde 2 × 30 × 2 = 120, en dat is een manche: 120 + 300 manchepremie + 50 doubletbonus = 470.',
      },
      {
        q: 'Je maakt precies 6♠, niet kwetsbaar. Hoeveel scoor je?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Slagwaarde 6 × 30 = 180, manchepremie 300 en slempremie voor klein slem 500: 980. Kwetsbaar zou het 180 + 500 + 750 = 1430 zijn.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'Lange kleuren vrijspelen',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Hoe je van de kleine kaarten in een lange kleur vaste slagen maakt, en hoe je de entrees bewaart die je nodig hebt om ze te incasseren.',
    body: `
<h3>Waar extra slagen vandaan komen</h3>
<p>In de meeste SA-contracten komen de extra slagen die je nodig hebt uit lange kleuren. Zodra de tegenstanders geen kaarten meer in een kleur hebben, is elke kaart die jij er nog in hebt een vaste slag, zelfs een 2. Kleine kaarten tot vaste slagen maken heet een kleur <strong>vrijspelen</strong>.</p>

<h3>De rondes tellen</h3>
<p>Om te weten hoeveel slagen een kleur oplevert, kijk je hoe de kaarten van de tegenstanders waarschijnlijk zitten. Met A K 6 4 2 tegenover 7 5 3 heb je acht kaarten en de tegenstanders vijf. Zitten hun kaarten 3-2 (in 68% van de gevallen), dan zijn ze na drie rondes op: je wint met de A en de K, verliest één ronde, en de laatste twee kaarten zijn vaste slagen. Vier slagen. Zitten ze 4-1, dan heb je vier rondes nodig en levert de kleur maar drie slagen op.</p>
<table>
<thead><tr><th>Ontbrekende kaarten</th><th>Waarschijnlijkste verdeling</th><th>Kans</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (3-3 is maar 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Geef de slag die je moet verliezen vroeg af</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3SA door Zuid. West komt uit met ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Tel:</strong> ♠AK, ♥A, ♦AK, ♣AK: zeven vaste slagen. Je hebt er nog twee nodig, en de ruiten kunnen die leveren als ze 3-2 zitten.</p>
<p><strong>De valkuil:</strong> de dummy heeft geen entree buiten de ruiten. Speel je ♦A, ♦K en een derde ruiten, dan winnen de tegenspelers de derde ronde en zijn de twee lange ruiten van de dummy onbereikbaar. Je maakt zeven slagen.</p>
<p><strong>De oplossing:</strong> neem met ♠A en speel meteen een kleine ruiten uit beide handen: je <em>duikt</em> de eerste ronde. Neem de terugkomst van de tegenspelers, speel een ruiten naar de aas en incasseer de heer; als de kleur 3-2 zat, is hij nu op, en zit je nog in de dummy om de twee lange ruiten te incasseren. Negen slagen: twee schoppen, een harten, vier ruiten en twee klaveren.</p>
<p>Het duiken kost niets: je zou hoe dan ook een ruitenslag verliezen. Door te duiken verlies je die slag terwijl de dummy nog de A en K heeft om naar terug te keren.</p>
<div class="tip">Als je in een kleur een slag moet verliezen en de lange hand weinig entrees heeft, verlies die slag dan in de eerste ronde, niet in de laatste.</div>

<h3>Deblokkeren: eerst de hoge kaarten uit de korte hand</h3>
<p>Met ♣KQ3 tegenover ♣A8642 speel je eerst de heer en de vrouw en steek je daarna met de 3 over naar de aas. Incasseer je eerst de aas, dan blijven de K en Q alleen achter in één hand en blokkeert de kleur: zonder entree in een andere kleur kom je niet meer bij de lange kaarten. Dat geldt telkens als één hand kort is: incasseer eerst de honneurs van de korte hand.</p>

<h3>De hoge kaarten van de tegenstanders wegdrijven</h3>
<p>Sommige kleuren hebben helemaal geen probleem met kleine kaarten; daar moet alleen de aas van de tegenstanders uit. KQJ10 tegenover kleine kaarten levert drie slagen op zodra de aas weg is. Begin vroeg met zulke kleuren, zolang je in de andere kleuren nog stops hebt, zodat de tegenspelers niet eerst hun eigen lange kleur kunnen vrijspelen.</p>

<h3>Welke kleur speel je vrij?</h3>
<ul>
<li>Kies liever de kleur waarin je de minste slagen hoeft af te geven en die de beste kans heeft om goed te zitten.</li>
<li>Geef de slag liever af aan de tegenspeler die je geen kwaad kan doen (zie de lessen "Ophouden en entrees" en "Vermijdingsspel: de gevaarlijke tegenspeler van slag houden").</li>
<li>Controleer de entrees: een kleur die je kunt vrijspelen maar nooit kunt bereiken, is niets waard.</li>
<li>In een troefcontract speel je lange bijkleuren op dezelfde manier vrij, vaak door de kleine kaarten van die kleur in te troeven in de hand met de lange troeven, tot de rest goed is.</li>
</ul>
<div class="warn">Incasseer niet eerst al je vaste slagen "om te kijken wat er gebeurt". Elke vaste slag die je incasseert, maakt ook slagen vrij voor de tegenspelers en kost je eigen entrees en stops.</div>
`,
    keyPoints: [
      'Kleine kaarten worden vaste slagen zodra de tegenstanders geen kaarten meer in de kleur hebben.',
      'Tel de rondes: met vijf ontbrekende kaarten heb je bij een 3-2-verdeling (68%) drie rondes nodig.',
      'Duik de ronde die je moet verliezen, zolang de lange hand zijn hoge kaarten nog als entrees heeft.',
      'Deblokkeer door eerst de honneurs van de korte hand te incasseren.',
      'Begin vroeg met je lange kleur, voordat de tegenspelers die van hen vrijspelen.',
    ],
    quiz: [
      {
        q: 'Je hebt A K 6 4 2 tegenover 7 5 3. Als de vijf ontbrekende kaarten 3-2 zitten, hoeveel slagen kan de kleur dan opleveren?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Na drie rondes is een 3-2-verdeling op. Je wint twee van die rondes en verliest er één; de twee resterende kaarten in de lange hand zijn vaste slagen: 4 slagen.',
      },
      {
        q: 'Waarom duik je in het 3SA-spel hierboven de eerste ruitenronde?',
        options: ['Om te ontdekken wie de vrouw heeft', 'Om ♦A en ♦K als entrees naar de lange ruiten te bewaren', 'Om de schoppen op te houden', 'Omdat duiken altijd een extra slag oplevert'],
        answer: 1,
        explain: 'De dummy heeft geen andere entree. Als je eerst de onvermijdelijke ruitenslag afgeeft, kun je na de A en K de lange kaarten afspelen zonder dat je terug naar de dummy hoeft.',
      },
      {
        q: 'Je hebt ♣KQ3 in je hand en ♣A8642 in de dummy, zonder andere entree naar de dummy. Hoe speel je de klaveren?',
        options: ['Eerst de aas, dan heer en vrouw', 'Eerst heer en vrouw, dan een kleine klaver naar de aas', 'Speel de 2 uit de dummy', 'Het maakt niet uit'],
        answer: 1,
        explain: 'Incasseer eerst de honneurs van de korte hand. Na de K en Q kun je nog met de 3 naar de aas oversteken en, als de kleur 3-2 zat, de lange kaarten incasseren. Met de aas eerst blokkeren de K en Q de kleur.',
      },
      {
        q: 'De tegenstanders hebben zes kaarten in een kleur. Hoe vaak zitten die 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'Met een even aantal ontbrekende kaarten is een gelijke verdeling minder waarschijnlijk dan je zou denken: 3-3 is ongeveer 36%, terwijl 4-2 ongeveer 48% is.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Snitten',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Hoe je slagen wint met kaarten die niet de hoogste zijn door naar ze toe te spelen, en wanneer je snijdt in plaats van te toppen.',
    body: `
<h3>Het idee</h3>
<p>Een snit is een poging om een slag te winnen met een kaart die niet de hoogste is die nog buiten zit, door die kaart te spelen <em>nadat</em> de tegenstander met de hogere kaart heeft bijgespeeld. Dat doe je door <strong>naar</strong> de kaart toe te spelen waarvan je hoopt dat die wint.</p>
<p>Het eenvoudigste geval: de dummy (Noord) heeft ♠A Q en jij (Zuid) hebt twee kleine schoppen. Speel een kleine schoppen uit je hand. Speelt West laag, dan leg je de vrouw. Heeft West de heer, dan wint de vrouw; heeft Oost hem, dan verliest de vrouw. Hoe dan ook blijft de aas een vaste slag. Een enkele snit slaagt in de helft van de gevallen, maar het kost niets om hem te proberen als je de kleur toch moet spelen.</p>

<h3>Naar een honneur toe spelen</h3>
<p>Met K 5 in de dummy en 6 4 in je hand speel je vanuit je hand naar de heer. Heeft West de aas, dan maakt de heer een slag: neemt West met de aas, dan is de heer vrij; duikt West, dan wint de heer. Speel je in plaats daarvan de heer voor uit de dummy, dan kan die nooit winnen zolang de aas nog buiten zit.</p>
<div class="warn">Een honneur voorspelen is alleen goed als je het je kunt veroorloven dat die wordt afgedekt, dus als je de kaarten direct eronder hebt. Speel de vrouw voor uit Q J 10 tegenover A 3 2, maar niet uit Q 3 2 in je hand tegenover A 5 4 in de dummy: als de vrouw wordt afgedekt, heb je niets meer om hoog te maken. Speel in plaats daarvan klein uit de dummy naar de vrouw; die maakt een slag telkens als Oost de heer heeft.</div>

<h3>Herhaalde en dubbele snitten</h3>
<table>
<thead><tr><th>Combinatie</th><th>Speelwijze</th><th>Resultaat</th></tr></thead>
<tbody>
<tr><td>A Q tegenover 3 2</td><td>Speel naar A Q en snijd met de Q</td><td>2 slagen 50%</td></tr>
<tr><td>K 5 tegenover 6 4</td><td>Speel naar de K</td><td>1 slag 50%</td></tr>
<tr><td>A Q 10 tegenover 4 3 2</td><td>Snijd eerst met de 10, later met de Q</td><td>3 slagen 25%, minstens 2 slagen 75%</td></tr>
<tr><td>A J 10 tegenover 4 3 2</td><td>Snijd met de 10 (of de J); verliest die, snijd dan nog een keer</td><td>2 slagen 75% (mislukt alleen als K en Q allebei verkeerd zitten)</td></tr>
<tr><td>A K J tegenover 4 3 2</td><td>Snijd met de J</td><td>3 slagen ongeveer 50%</td></tr>
</tbody>
</table>
<p>Een dubbele snit slaagt als minstens één van de twee ontbrekende honneurs goed zit; elke honneur zit onafhankelijk van de andere bij West of bij Oost, dus de kans dat ze allebei verkeerd zitten is ½ × ½ = 25%.</p>

<h3>Snijden of toppen? "Met acht snijden, met negen toppen"</h3>
<p>Als je de vrouw mist en geen andere aanwijzingen hebt:</p>
<ul>
<li>Met <strong>acht</strong> kaarten (vijf ontbrekend) snijd je. De snit (nadat je eerst de aas hebt gespeeld, voor het geval de vrouw singleton zit) slaagt met A K J x x in ongeveer 40% van de gevallen (ongeveer 51% met A K J 10 x); spelen op een vallende vrouw slaagt maar in ongeveer 33%.</li>
<li>Met <strong>negen</strong> kaarten (vier ontbrekend) speel je de aas en de heer en hoop je dat de vrouw valt. Dat lukt in ongeveer 53% van de gevallen, de snit in ongeveer 51%.</li>
</ul>
<p>De regel beslist alleen bij twijfel. Informatie uit de bieding (een speler die opende of preëmptief bood, heeft de meeste hoge kaarten of de meeste lengte) of uit het eerste deel van het spel weegt zwaarder dan deze kleine verschillen.</p>

<h3>Een snit in de praktijk</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ door Zuid. West komt uit met ♥J."></div>
<p>Je moet de ♦A afgeven, dus het slem hangt ervan af dat je geen troefslag verliest. De ♠K ontbreekt, en met negen troeven snijd je erop: je kunt hem alleen opvangen als Oost hem heeft, omdat Oost vóór je A Q J 10 speelt (of als West een singleton heer heeft).</p>
<p>Neem de uitkomst met de ♥Q van de dummy, zodat je in de goede hand zit, en speel een kleine troef. Speelt Oost laag, leg dan de 10 (of de J). Wint die, dan moet je de snit misschien herhalen; ga dus met de ♣K terug naar de dummy en speel nog een troef. De entrees voor een herhaalde snit plannen hoort erbij: de dummy heeft twee snelle entrees (de ♥Q en de ♣K), en die moet je voor de troefkleur gebruiken in plaats van ze te verspillen.</p>
<div class="tip">De regel "met acht snijden, met negen toppen" gaat over de vrouw. Mis je de heer, dan snijd je daar met negen of tien kaarten nog steeds op; pas met elf kaarten is toppen iets beter (52%).</div>
`,
    keyPoints: [
      'Speel naar de kaart toe waarvan je hoopt dat die wint; een enkele snit is een kans van 50%.',
      'Speel voor een snit alleen een honneur voor als je de kaarten direct eronder hebt.',
      'Een dubbele snit (A Q 10, A J 10) levert in 75% van de gevallen minstens één extra slag op.',
      'Mis je de vrouw: met acht kaarten snijden, met negen toppen.',
      'Plan je entrees voor herhaalde snitten.',
    ],
    quiz: [
      {
        q: 'De dummy heeft ♥A Q en jij hebt ♥7 4. Hoe speel je de harten om te proberen twee slagen te maken?',
        options: ['Speel de aas en daarna de vrouw', 'Speel de vrouw voor uit de dummy', 'Speel een kleine harten uit je hand en leg de vrouw als West laag speelt', 'Speel de aas en hoop dat de heer valt'],
        answer: 2,
        explain: 'De vrouw kan alleen winnen als ze na de heer wordt gespeeld. Speel vanuit je hand, zodat West vóór de dummy moet bijspelen; heeft West de heer, dan wint de vrouw.',
      },
      {
        q: 'Met A Q 10 in de dummy en 4 3 2 in je hand: hoe vaak levert de dubbele snit je minstens twee slagen op?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'Je maakt minstens twee slagen, tenzij zowel de K als de J bij Oost zit. Elk van beide zit in de helft van de gevallen bij West, dus ze zitten maar in ¼ van de gevallen allebei verkeerd.',
      },
      {
        q: 'Je hebt A K J 5 2 tegenover 6 4 3 (acht kaarten) en mist de vrouw. Wat is zonder aanwijzingen uit de bieding het beste spel?',
        options: ['Speel de aas en de heer', 'Speel de aas en snijd daarna met de boer', 'Speel de boer voor', 'Duik een ronde'],
        answer: 1,
        explain: 'Met acht kaarten is de snit (ongeveer 40%, met eerst de aas voor het geval de vrouw singleton zit) beter dan toppen (ongeveer 33%).',
      },
      {
        q: 'Je hebt A K J 5 4 tegenover 7 6 3 2 (negen kaarten) en mist de vrouw. Wat is zonder aanwijzingen het beste spel?',
        options: ['Speel de aas en de heer', 'Snijd meteen met de boer', 'Speel de boer voor', 'Duik een ronde'],
        answer: 0,
        explain: '"Met negen toppen": met maar vier ontbrekende kaarten valt de vrouw onder de aas en de heer in ongeveer 53% van de gevallen, iets vaker dan de snit slaagt (ongeveer 51%).',
      },
      {
        q: 'De dummy heeft ♦K 7 3 en jij hebt ♦8 4 2. Hoe geef je jezelf de beste kans op een slag?',
        options: ['Speel de heer voor uit de dummy', 'Speel klein uit je hand naar de heer', 'Speel klein uit de dummy', 'Wacht tot de tegenspelers de kleur spelen'],
        answer: 1,
        explain: 'Naar de heer toe spelen levert een slag op telkens als West de aas heeft. De heer voorspelen verliest van de aas, waar die ook zit.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Tweede hand laag, derde hand hoog',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'De basisregels voor tegenspelers die als tweede en als derde bijspelen, wanneer je ervan afwijkt, en wanneer je honneur op honneur legt.',
    body: `
<h3>Tweede hand laag</h3>
<p>Als de leider een kleine kaart naar de dummy speelt (of vanuit de dummy naar zijn eigen hand), moet de tegenspeler die als tweede speelt meestal <strong>laag</strong> bijspelen. Partner speelt als laatste en kan de slag vaak goedkoop winnen, terwijl jouw hoge kaart bewaard blijft om later een honneur van de leider te vangen.</p>
<p>Voorbeeld: de dummy heeft ♠K J 5 en de leider speelt een kleine schoppen uit zijn hand daarnaartoe. Jij zit als tweede met ♠A 7 3. Leg je de aas, dan vang je alleen kleine kaarten en blijven de K en J van de dummy allebei over voor later. Speel je laag, dan moet de leider raden: legt hij de boer en heeft partner de vrouw, dan maakt jullie kant twee slagen; legt hij de heer, dan maakt je aas later toch een slag.</p>

<h3>Wanneer de tweede hand hoog speelt</h3>
<ul>
<li><strong>Om de slag te incasseren die het contract down zet</strong>, of een slag die je niet mag verliezen, bijvoorbeeld als de leider op het punt staat zijn verliezers af te gooien.</li>
<li><strong>Als er een honneur wordt voorgespeeld</strong>: dan is de vraag of je moet afdekken (zie hieronder).</li>
<li><strong>Om aaneengesloten honneurs te splitsen.</strong> Stel dat de dummy K 10 3 heeft, de leider A 6 2, en dat jij vóór de dummy zit met Q J 4. Speelt de leider klein en speel jij klein, dan snijdt de leider met de 10, incasseert daarna de A en de K, en vallen je Q en J allebei: geen slag voor jou. Leg in de eerste ronde de J (en de Q als de leider de volgende keer naar de dummy speelt), en je maakt zeker één slag.</li>
</ul>

<h3>Derde hand hoog</h3>
<p>Als partner een kleine kaart voorspeelt en de dummy laag bijspeelt, leg je je <strong>hoogste</strong> kaart, om te voorkomen dat de leider de slag goedkoop wint, of om een hoge kaart van de leider eruit te drijven en die van partner hoog te maken.</p>
<ul>
<li>Met aaneengesloten hoge kaarten speel je de <strong>laagste</strong> daarvan: uit K Q 5 de Q, uit Q J 4 de J. Partner kan dan afleiden waar de hogere kaart zit.</li>
<li>Speel niet hoger dan nodig. Heeft de dummy de 9 gespeeld en heb jij Q 10 2, dan is de 10 genoeg.</li>
<li><strong>Snijd tegen de dummy.</strong> Heeft de dummy K 7 3 en speelt die laag, terwijl jij A J 4 hebt, leg dan de J. De heer van de dummy zit gevangen onder je aas: heeft de leider de vrouw, dan wint hij deze slag, maar je aas zit nog steeds boven de K; heeft partner de vrouw, dan wint de J.</li>
</ul>

<h3>Honneur op honneur</h3>
<p>Als er een honneur wordt voorgespeeld en jij een hogere hebt, dwing je de leider door af te dekken om twee van zijn hoge kaarten te gebruiken om één van de jouwe te vangen. Daardoor kan een lagere kaart, zoals een 10 of 9, in jouw hand of die van partner hoog worden.</p>
<table>
<thead><tr><th>Hand</th><th>Ruiten</th></tr></thead>
<tbody>
<tr><td>Noord (dummy)</td><td>J 7 3</td></tr>
<tr><td>West (partner)</td><td>10 2</td></tr>
<tr><td>Oost (jij)</td><td>Q 9 4</td></tr>
<tr><td>Zuid (leider)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>De leider speelt ♦J voor uit de dummy. Speel je laag, dan wint de J, en daarna valt je vrouw onder de A en K: de leider verliest geen slag. Dek je af met de Q, dan neemt de leider met de A en incasseert hij de K, waarbij de 10 van partner valt, maar nu is jouw 9 hoger dan elke ruiten die de leider nog heeft. Door af te dekken heb je uit het niets een slag gemaakt.</p>

<h4>Wanneer je niet afdekt</h4>
<ul>
<li>Als de voorgespeelde honneur een van aaneengesloten honneurs is (de dummy heeft Q J 10 4 en speelt de Q voor): wacht en dek, als het al moet, de laatste daarvan af.</li>
<li>Als er duidelijk niets hoog te maken valt, bijvoorbeeld in de troefkleur als de leider een lange, sterke kleur heeft getoond.</li>
<li>Als de honneur uit de hand van de leider komt en afdekken de leider alleen zou helpen de kleur zonder verlies af te spelen: denk na over wat de leider heeft voordat je reageert.</li>
</ul>
<div class="tip">Of je moet afdekken, is een kwestie van promotie. Vraag je af: "Als ik afdek, welke kaart van ons kan dan hoog worden?" Is het antwoord geen enkele, dek dan niet af.</div>
<div class="warn">Ga niet eerst aarzelen om daarna laag te spelen: de pauze vertelt de leider dat jij de ontbrekende honneur hebt. Denk over deze situaties na zodra de dummy op tafel ligt, zodat je klaar bent als ze zich voordoen.</div>
`,
    keyPoints: [
      'Tweede hand laag: bewaar je hoge kaarten om honneurs van de leider te vangen; partner speelt als laatste.',
      'Wijk van de regel af om de slag te maken die het contract down zet, of om aaneengesloten honneurs te splitsen.',
      'Derde hand hoog, maar de laagste van aaneengesloten kaarten en niet hoger dan nodig.',
      'Snijd tegen de honneur van de dummy als je erachter zit.',
      'Leg honneur op honneur als dat een kaart voor jullie kant hoog kan maken; dek de eerste van aaneengesloten honneurs niet af.',
    ],
    quiz: [
      {
        q: 'De leider speelt een lage kaart uit zijn hand naar K J 5 in de dummy. Je hebt A 7 3 als tweede hand. Wat speel je normaal?',
        options: ['De aas', 'Een lage kaart', 'De 7, als signaal', 'Het maakt nooit uit'],
        answer: 1,
        explain: 'Tweede hand laag. Met de aas vang je alleen kleine kaarten en blijven de K en J van de dummy allebei leven. Door laag te spelen moet de leider raden, en partner kan de vrouw hebben.',
      },
      {
        q: 'Partner komt tegen 3SA uit met een lage kaart. De dummy heeft 7 5 2 en speelt laag. Je hebt K Q 8. Welke kaart speel je?',
        options: ['K', 'Q', '8', 'Een van beide honneurs'],
        answer: 1,
        explain: 'Derde hand hoog, de laagste van aaneengesloten kaarten: de Q. Drijft die de aas eruit, dan weet partner dat jij ook de K hebt.',
      },
      {
        q: 'Partner speelt laag voor. De dummy heeft K 7 3 en speelt laag. Je hebt A J 4. Welke kaart speel je?',
        options: ['A', 'J', '4', 'De K zit in de dummy, dus het maakt niet uit'],
        answer: 1,
        explain: 'Snijd tegen de dummy: de J wint als partner de Q heeft, en je aas blijft boven de heer van de dummy zitten. Met de aas zou je de heer van de dummy vrijspelen.',
      },
      {
        q: 'De dummy heeft ♠Q J 10 4 en de Q wordt voorgespeeld. Jij hebt ♠K 6 3 achter de dummy. Moet je afdekken?',
        options: ['Ja, dek altijd een honneur af', 'Nee, dek de eerste van aaneengesloten honneurs niet af', 'Alleen als partner een signaal gaf', 'Ja, met de 6'],
        answer: 1,
        explain: 'Dek je de Q af, dan neemt de leider met de aas en zijn de J en 10 vrij. Wacht: als de leider honneurs blijft voorspelen, dek dan de laatste af, want alleen dan kan afdekken iets hoog maken.',
      },
      {
        q: 'Waarom leg je honneur op honneur?',
        options: ['Om de slag te winnen', 'Om de leider twee honneurs te laten gebruiken voor één van de jouwe, zodat een lagere kaart van jullie hoog wordt', 'Om partner je kracht te laten zien', 'Om de leider te dwingen in te troeven'],
        answer: 1,
        explain: 'Met afdekken win je zelden de slag zelf. De waarde zit in de promotie: als er twee honneurs van de leider weg zijn, kan een lagere kaart zoals een 10 of 9 een vaste slag worden.',
      },
    ],
  },
];
