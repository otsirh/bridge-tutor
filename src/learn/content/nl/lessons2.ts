// Lessons, part 2.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'Het tweede bod van de antwoorder en de keuze van de manche',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Hoe de antwoorder met zijn tweede bod afsluit, inviteert of forceert, en hoe je kiest tussen een hoge kleur, 3SA en vijf in een lage kleur.',
    body: `
<h3>De antwoorder wordt de kapitein</h3>
<p>Na de herbieding van de openaar ken je zijn kracht meestal tot op drie of vier punten nauwkeurig en weet je al veel over zijn verdeling. Met je tweede bod moet je het paar in het juiste contract brengen of nog één vraag stellen. Denk in drie groepen:</p>
<table>
<thead><tr><th>Antwoorder</th><th>Doel</th><th>Typische biedingen</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>Afsluiten in de beste deelscore</td><td>Pas; voorkeur voor de eerste kleur van de openaar; een zeskaart herhalen; 1SA</td></tr>
<tr><td>11-12</td><td>Inviteren voor de manche</td><td>2SA; de kleur van de openaar naar 3-niveau verhogen; een sprong in een goede eigen zeskaart</td></tr>
<tr><td>13+</td><td>De manche zeker stellen</td><td>Direct manche bieden, of een nieuwe kleur (forcing) om de juiste manche te vinden</td></tr>
</tbody>
</table>
<p>Twee kunstmatige biedingen helpen de antwoorder om te vragen in plaats van te gokken: <strong>nieuwe minor forcing</strong> na een herbieding van 1SA, en <strong>vierde kleur forcing</strong> als er drie kleuren zijn geboden. Daar is een aparte les over.</p>

<h3>Voorbeelden</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Antwoorder: bied 2SA"></div>
<p>De openaar heeft 12-14 evenwichtig getoond. Met 12 punten is het totaal 24-26: inviteer met 2SA. De openaar past met 12 en biedt 3SA met 14 (met 13 beslist hij op gevoel). Met 13+ zou je zelf 3SA bieden; met 10 of minder zou je passen.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Antwoorder: bied 3♥"></div>
<p>De openaar heeft een minimum met zes harten, dus Q3 is genoeg steun voor een achtkaartfit. 12 punten tegenover 12-15: inviteer met 3♥. De openaar biedt 4♥ als hij aan de bovenkant van zijn bereik zit.</p>

<h4>Voorkeur geven</h4>
<p>Als de openaar twee kleuren toont en jij voor geen van beide een fit hebt, kies je goedkoop tussen de twee. De eerste kleur van de openaar is minstens zo lang als zijn tweede, dus met evenveel kaarten ga je terug naar de eerste. Na 1♥ – 1♠ – 2♣ bied je met ♥Q43 en ♣97 2♥: dat toont geen extra kracht, alleen een betere troefkleur. Met ♥4 en ♣J973 pas je op 2♣.</p>

<h3>De manche kiezen</h3>
<ol>
<li><strong>Een achtkaartfit in een hoge kleur? Speel in de hoge kleur.</strong> Een 4-4- of 5-3-fit levert meestal minstens één slag meer op dan sans atout, omdat de hand met de korte troeven kan introeven. Zelfs met twee evenwichtige handen is 4♥ of 4♠ normaal gesproken het juiste contract.</li>
<li><strong>Geen fit in een hoge kleur? Kies liever 3SA</strong>, mits elke ongeboden kleur gestopt is. Voor 3SA heb je negen slagen nodig; voor vijf in een lage kleur elf, voor dezelfde score (400 of 600).</li>
<li><strong>Vijf in een lage kleur</strong> is voor handen met een grote fit in een lage kleur en een kleur die de tegenstanders in sans atout kunnen afspelen, of met korte kleuren die troefslagen opleveren.</li>
</ol>
<table>
<thead><tr><th>Contract</th><th>Benodigde punten samen (ongeveer)</th></tr></thead>
<tbody>
<tr><td>3SA, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Klein slem</td><td>33</td></tr>
<tr><td>Groot slem</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2SA – 3SA. Zuid is leider."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Noord-Zuid hebben 27 punten en een negenkaartfit in ruiten, maar geen fit in een hoge kleur, en elke kleur is gestopt. In 3SA heb je acht vaste slagen: twee schoppen, een harten en vijf ruiten. De negende komt uit de klaveren zodra de ♣A (en misschien de ♣Q) is weggedreven. In 5♦ heb je elf slagen nodig en heb je een schoppenverliezer, minstens één hartenverliezer en minstens één klaververliezer. 3SA is veruit de betere manche.</p>

<h3>De grenzen van "25 punten voor de manche"</h3>
<ul>
<li><strong>Fit:</strong> met een negen- of tienkaartfit en korte kleuren kan de manche al met 22-23 punten gemaakt worden. Bij een misfit is 26 misschien niet genoeg.</li>
<li><strong>Duplicatie:</strong> honneurs tegenover een korte kleur zijn verspild. ♠KQJ tegenover een singleton schoppen draagt in een troefcontract weinig bij.</li>
<li><strong>Vlakke verdelingen:</strong> twee handen met 4-3-3-3 leveren minder slagen op; trek er een punt af.</li>
<li><strong>Slagenbronnen:</strong> een lange, dichte kleur maakt ontbrekende punten goed. Met zes doorlopende ruiten kun je 3SA maken met 23 punten.</li>
<li><strong>Stops:</strong> 3SA met een kleur die helemaal open ligt, gaat down, hoeveel punten je ook hebt.</li>
</ul>
<div class="tip">Met 13+ punten tegenover een opening doe je nooit een bod waarop partner onder de manche kan passen. Weet je niet waar je moet spelen, bied dan een nieuwe kleur: een nieuwe kleur van de antwoorder is forcing.</div>
<div class="warn">Blijf niet doorbieden met een hopeloze misfit. Als partner steeds zijn kleur herhaalt en jij steeds de jouwe, is het juiste contract meestal het laagste dat nog mogelijk is.</div>
`,
    keyPoints: [
      'Tweede bod van de antwoorder: met 6-10 afsluiten, met 11-12 inviteren, met 13+ de manche zeker stellen.',
      'Met evenveel kaarten geef je voorkeur aan de eerste kleur van de openaar.',
      'Met een achtkaartfit in een hoge kleur speel je meestal vier in die hoge kleur.',
      'Zonder fit in een hoge kleur kies je liever 3SA dan vijf in een lage kleur als alle kleuren gestopt zijn.',
      'Ongeveer 25 punten voor 3SA of vier in een hoge kleur, 29 voor vijf in een lage kleur, 33 voor klein slem; stel bij voor fit en verdeling.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1SA – ? Je hebt ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 punten).',
        options: ['Pas', '2SA', '3SA', '2♠'],
        answer: 1,
        explain: 'De openaar heeft 12-14, dus jullie hebben samen 24-26: inviteer met 2SA. Met een maximum biedt de openaar 3SA.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Je hebt ♠KJ753 ♥Q43 ♦J86 ♣97 (7 punten).',
        options: ['Pas', '2♥', '2♠', '2SA'],
        answer: 1,
        explain: 'De openaar heeft minstens vijf harten, dus jullie hebben een achtkaartfit. 2♥ is gewoon voorkeur geven en toont geen extra kracht.',
      },
      {
        q: 'Jullie hebben samen 26 punten, een 4-4-fit in schoppen en twee evenwichtige handen. Welke manche?',
        options: ['3SA', '4♠', '5♣', 'Dat is kruis of munt'],
        answer: 1,
        explain: 'De 4-4-fit levert meestal een extra slag op: de ene hand kan introeven terwijl de troeven van de andere de troeven van de tegenstanders trekken. Speel 4♠.',
      },
      {
        q: 'Jullie hebben 27 punten, geen fit in een hoge kleur, een negenkaartfit in ruiten en alle kleuren gestopt. Welke manche?',
        options: ['5♦', '3SA', '4♦', '6♦'],
        answer: 1,
        explain: 'Voor 3SA heb je negen slagen nodig, voor 5♦ elf, en ze leveren hetzelfde op. Met alle kleuren gestopt is 3SA de manche met de beste kans.',
      },
      {
        q: 'Waarom kan de manche met 26 punten mislukken?',
        options: ['Dat kan niet: met 26 punten maak je altijd de manche', 'Door misfits, gedupliceerde waarden of een niet-gestopte kleur', 'Omdat 26 punten een slemhand is', 'Alleen als de troeven 4-1 zitten'],
        answer: 1,
        explain: 'Punten schatten de slagenkracht, maar het aantal slagen hangt ook af van de fit, van de vraag of de honneurs meewerken, en in sans atout van de stops.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'De sterke openingen 2♣ en 2SA',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Wanneer je 2♣ of 2SA opent, hoe de antwoorder reageert, en hoe de sterke evenwichtige bereiken in elkaar passen.',
    body: `
<h3>2♣: de grote opening</h3>
<p>2♣ is kunstmatig en zegt niets over klaveren. Het toont <strong>22+ punten</strong> of ongeveer <strong>negen speelslagen</strong> (met een hoge kleur; met een lage kleur wil je er meestal tien, omdat een manche in een lage kleur elf slagen vraagt). Het is de enige forcing opening: partner moet antwoorden, ook met niets.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Open 2♣: negen speelslagen"></div>
<p>Maar 20 punten, maar tel de slagen: zeven schoppen en twee harten, met kansen op een tiende. Open je 1♠, dan loop je het risico dat partner past met een hand als ♠83 ♥J852 ♦Q964 ♣Q83 (5 punten), terwijl 4♠ een uitstekend contract is. Open 2♣ en herbied 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Open 2♣ en herbied 2SA"></div>
<p>23 punten evenwichtig: 2♣ gevolgd door 2SA toont 22-24.</p>

<h3>Antwoorden op 2♣</h3>
<table>
<thead><tr><th>Antwoord</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>Wachtbod: het normale antwoord met de meeste handen, zwak of sterk</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positief: een goede vijfkaart (twee van de drie hoogste honneurs of drie van de vijf hoogste) en 8+ punten</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Partner opende 2♣: bied 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Partner opende 2♣: bied 2♥"></div>
<p>Het antwoord 2♦ houdt de bieding laag, zodat de sterke hand zichzelf kan beschrijven. Zelfs met een redelijke hand bied je zonder goede kleur 2♦ en toon je je punten later.</p>

<h3>De herbieding van de openaar</h3>
<ul>
<li><strong>2SA</strong> = 22-24 evenwichtig. Dit is de enige herbieding waarop de antwoorder mag passen, met een echt waardeloze hand. De antwoorder gebruikt dezelfde methoden als na een 2SA-opening: 3♣ Stayman, 3♦ en 3♥ transfers, 3SA om te spelen.</li>
<li><strong>3SA</strong> = 25-27 evenwichtig.</li>
<li><strong>Een kleur</strong> = natuurlijk, minstens vijf kaarten, en forcing: de antwoorder moet opnieuw bieden. Verhoog met steun; bied een goede eigen kleur; doe met niets bruikbaars het goedkoopste bod.</li>
</ul>

<h3>De 2SA-opening</h3>
<p>2SA toont <strong>20-21 punten, evenwichtig</strong>. Het is niet forcing, maar de antwoorder moet al met 4 punten manche bieden.</p>
<table>
<thead><tr><th>Antwoord op 2SA</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Pas</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer naar harten / schoppen</td></tr>
<tr><td>3SA</td><td>4-10, om te spelen</td></tr>
<tr><td>4SA</td><td>11-12, kwantitatief: de openaar biedt 6SA met een maximum</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Open 2SA: 20 punten, evenwichtig"></div>
<p>Tegenover deze hand biedt een antwoorder met ♠J10642 ♥Q85 ♦73 ♣962 3♥ als transfer en past hij op 3♠: samen 23-24 is niet genoeg voor de manche, maar met vijf troeven is 3♠ veiliger dan 2SA.</p>

<h3>De evenwichtige ladder</h3>
<table>
<thead><tr><th>Punten</th><th>Volgorde</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Eén in een kleur, daarna 1SA</td></tr>
<tr><td>15-17</td><td>1SA</td></tr>
<tr><td>18-19</td><td>Eén in een kleur, daarna een sprong naar 2SA</td></tr>
<tr><td>20-21</td><td>2SA</td></tr>
<tr><td>22-24</td><td>2♣, daarna 2SA</td></tr>
<tr><td>25-27</td><td>2♣, daarna 3SA</td></tr>
</tbody>
</table>
<div class="tip">Denk tegenover 2♣ in slagen en controles, niet alleen in punten. Een aas of heer is veel meer waard dan verspreide vrouwen en boeren.</div>
<div class="warn">Open niet 2♣ alleen omdat je 20 punten hebt. Met 20-21 evenwichtig open je 2SA; met 19-21 en een gewone onevenwichtige hand open je één in een kleur. Partner antwoordt al met 6 punten, en jij kunt springen of een reverse bieden om je kracht te tonen.</div>
`,
    keyPoints: [
      '2♣ = 22+ punten of ongeveer negen speelslagen; kunstmatig en forcing.',
      'Antwoord met de meeste handen 2♦ (wachtbod); een positief antwoord vraagt een goede vijfkaart (twee van de drie hoogste honneurs of drie van de vijf hoogste) en 8+ punten.',
      '2♣ – 2♦ – 2SA = 22-24 evenwichtig en mag worden gepast; elke herbieding in een kleur door de openaar is forcing.',
      '2SA-opening = 20-21 evenwichtig; 3♣ Stayman, 3♦/3♥ transfers, 3SA met 4-10, 4SA met 11-12.',
      'Evenwichtige ladder: 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'Je hebt ♠AKQJ975 ♥AK4 ♦8 ♣K2. Wat open je?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Met negen speelslagen wil je de manche halen, ook als partner heel weinig heeft, dus open je met de forcing 2♣ en bied je daarna schoppen. Op 1♠ kan iedereen passen; 2♠ zou een zwakke twee zijn.',
      },
      {
        q: 'Partner opent 2♣. Je hebt ♠Q74 ♥J863 ♦952 ♣K84 (6 punten). Wat bied je?',
        options: ['Pas', '2♦', '2♥', '2SA'],
        answer: 1,
        explain: '2♣ is forcing, dus je mag niet passen. Zonder goede vijfkaart bied je het wachtbod 2♦ en laat je de openaar zijn hand beschrijven.',
      },
      {
        q: 'Partner opent 2♣. Je hebt ♠52 ♥KQJ84 ♦A73 ♣964 (10 punten). Wat bied je?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 1,
        explain: 'Een goede vijfkaart (KQJ) met 8+ punten is een positief antwoord: 2♥. Dat vertelt de openaar meteen dat slem waarschijnlijk is.',
      },
      {
        q: 'Wat toont 2♣ – 2♦ – 2SA?',
        options: ['20-21 evenwichtig', '22-24 evenwichtig', '25-27 evenwichtig', 'Een klaverkleur'],
        answer: 1,
        explain: 'Met 20-21 open je direct 2SA. Eerst 2♣ en daarna 2SA toont 22-24; 2♣ en daarna 3SA toont 25-27.',
      },
      {
        q: 'Partner opent 2SA. Je hebt een evenwichtige hand met 4 punten. Wat bied je?',
        options: ['Pas', '3SA', '3♣', '4SA'],
        answer: 1,
        explain: '20-21 plus 4 geeft 24-25, genoeg om een kans op de manche te hebben. Na 2SA dekt 3SA 4-10 punten.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Zwakke twee-openingen en preëmpts',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Hoe je met een lange kleur en een zwakke hand opent om de tegenstanders biedruimte te ontnemen, en hoe partner daarop reageert.',
    body: `
<h3>Waarom preëmptief bieden?</h3>
<p>Als je een lange kleur hebt en verder weinig, hebben de tegenstanders waarschijnlijk het grootste deel van de kracht. Door hoog te openen ontneem je ze de biedruimte die ze nodig hebben om hun beste contract te vinden. Tegelijk beschrijf je je hand precies, zodat partner weet wat hij moet doen.</p>

<h3>De eisen</h3>
<table>
<thead><tr><th>Opening</th><th>Kleur</th><th>Punten</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (zwakke twee)</td><td>Zes kaarten</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Zeven kaarten</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Acht kaarten (of zeven met extra verdeling)</td><td>5-10</td></tr>
</tbody>
</table>
<p>Het grootste deel van je kracht hoort in de lange kleur te zitten. Een goede richtlijn voor een zwakke twee is twee van de drie hoogste honneurs of drie van de vijf hoogste.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Open 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Open 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Open 4♠"></div>
<p>2♣ is nooit een zwakke twee: dat is de sterke, kunstmatige opening.</p>

<h3>Hoe hoog? De regel van 2-3-4</h3>
<p>Tel je speelslagen: de slagen die je met jouw kleur als troef verwacht te maken als partner niets bruikbaars heeft. KQJ9852 is ongeveer zes slagen. Een traditionele richtlijn is dat je niet meer tekort mag komen dan:</p>
<ul>
<li><strong>twee slagen</strong> als je kwetsbaar bent tegen niet-kwetsbare tegenstanders (ongunstig),</li>
<li><strong>drie slagen</strong> bij gelijke kwetsbaarheid,</li>
<li><strong>vier slagen</strong> als je niet kwetsbaar bent tegen kwetsbare tegenstanders (gunstig).</li>
</ul>
<p>Het idee is dat de straf, zelfs als je gedoubleerd wordt, niet veel hoger mag zijn dan de waarde van de manche die de tegenstanders waarschijnlijk zouden maken. Met zes speelslagen is 3♣ (negen slagen) bij gelijke kwetsbaarheid prima. Moderne spelers bieden bij gunstige kwetsbaarheid agressiever preëmptief en bij ongunstige kwetsbaarheid voorzichtiger.</p>

<h3>Wanneer je niet preëmptief biedt</h3>
<ul>
<li>In vierde hand heeft een preëmpt geen zin: met een zwakke hand pas je het spel gewoon rond. Een opening op 2- of 3-niveau in vierde hand toont een redelijke hand die verwacht het contract te maken.</li>
<li>Met een goede hand (11+ punten en een mooie kleur) open je liever op 1-niveau.</li>
<li>In eerste of tweede hand moet je oppassen met een vierkaart hoge kleur ernaast of met twee azen buiten je kleur: partner kan een goede hand hebben, en dan mis je misschien een beter contract.</li>
</ul>

<h3>Antwoorden op een zwakke twee</h3>
<table>
<thead><tr><th>Antwoord</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Verhoging (2♥ – 3♥)</td><td>Preëmptief, niet inviterend: met driekaartsteun de barrage verlengen</td></tr>
<tr><td>Manche in de kleur</td><td>Om te spelen: om te maken, of als verdere preëmpt</td></tr>
<tr><td>2SA</td><td>Forcing: vraagt de openaar zijn hand te beschrijven</td></tr>
<tr><td>Nieuwe kleur</td><td>Natuurlijk, vijf of meer kaarten, forcing</td></tr>
<tr><td>3SA</td><td>Om te spelen</td></tr>
</tbody>
</table>
<p><strong>De antwoorden van de openaar op 2SA:</strong> met een minimum (ongeveer 5-7) herhaal je je kleur op 3-niveau; met een maximum (ongeveer 8-10) bied je een kleur waarin je een aas of heer hebt (een "feature"); met een dichte kleur (AKQxxx) bied je 3SA.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Noord opent 2♠; Zuid vraagt met 2SA."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Noord heeft 8 punten, een maximum, en toont de ♥K. Zuid weet met 17 punten nu dat de schoppen met de ♠A zullen doorlopen en dat de harten goed gedekt zijn, en biedt de manche. Had Noord met 3♠ een minimum getoond, dan had Zuid gepast.</p>

<h3>Antwoorden op een preëmpt op 3-niveau</h3>
<p>Tel slagen, geen punten. De kleur van partner levert ongeveer zes slagen op; voor de manche moeten er drie of vier van jou komen, meestal azen en heren. Met steun en een zwakke hand verhoog je om de barrage nog hoger te maken. Denk eraan dat partner weinig verdediging heeft: doubleer de tegenstanders niet voor straf in het vertrouwen op de preëmpt van partner.</p>
<div class="tip">Tegenover een preëmpt van partner zijn je azen en heren goud waard en zijn je vrouwen en boeren heel weinig waard, tenzij ze in de kleur van partner zitten.</div>
<div class="warn">Een verhoging van een zwakke twee is geen manchepoging. Heb je een goede hand en wil je meer weten, bied dan 2SA.</div>
`,
    keyPoints: [
      'Zwakke twee: zes kaarten, 5-10 punten, de meeste kracht in de kleur; 2♣ is nooit zwak.',
      'Preëmpt op 3-niveau: zeven kaarten, 5-10; vier in een hoge kleur: acht kaarten (of zeven met verdeling).',
      'Regel van 2-3-4: hoogstens twee slagen tekort bij ongunstige, drie bij gelijke en vier bij gunstige kwetsbaarheid.',
      'Bied in vierde hand niet preëmptief.',
      'Verhogingen van een preëmpt zijn preëmptief; 2SA na een zwakke twee vraagt naar een feature (met een minimum herhaal je de kleur).',
    ],
    quiz: [
      {
        q: 'Eerste hand, gelijke kwetsbaarheid. Je hebt ♠84 ♥KQ10973 ♦J52 ♣63. Wat open je?',
        options: ['Pas', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Zes goede harten en 6 punten is een zwakke twee uit het boekje. Met zeven harten zou je 3♥ overwegen; met 12+ punten zou je 1♥ openen.',
      },
      {
        q: 'Partner opent 2♠ en de volgende speler past. Je hebt ♠Q73 ♥K842 ♦A65 ♣J94 (10 punten). Wat bied je?',
        options: ['Pas', '3♠', '2SA', '4♠'],
        answer: 1,
        explain: 'Tegenover 5-10 is manche onwaarschijnlijk, maar met driekaartsteun hebben jullie negen troeven en hebben de tegenstanders ergens een fit. Verhoog naar 3♠ om het ze moeilijker te maken om mee te bieden.',
      },
      {
        q: 'Je opende 2♥ met ♠K5 ♥AQ10984 ♦862 ♣73 (9 punten). Partner biedt 2SA. Wat herbied je?',
        options: ['3♥', '3♠', '3SA', '4♥'],
        answer: 1,
        explain: '9 punten is een maximum, dus toon je feature ernaast, de ♠K, met 3♠. 3♥ zou een minimum tonen en 3SA een dichte kleur.',
      },
      {
        q: 'Hoeveel slagen mag je volgens de regel van 2-3-4 bij gunstige kwetsbaarheid tekortkomen?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'Bij gunstige kwetsbaarheid kost vier down gedoubleerd 800, niet veel meer dan de 620 die hun kwetsbare manche waard is, en tegenstanders die zelf nog naar een manche of slem zoeken, doubleren je vaak helemaal niet.',
      },
      {
        q: 'Partner opent 2♥. Wat toont jouw verhoging naar 3♥?',
        options: ['Een invite voor de manche', 'Een preëmptieve verhoging, niet inviterend', 'Een forcing verhoging', 'Een hand zonder harten'],
        answer: 1,
        explain: 'Een preëmpt verhogen zet de barrage voort. Wil je dat de openaar zijn hand beschrijft, bied dan 2SA, de forcing vraag.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Volgbiedingen',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wanneer je na een opening van de tegenstanders een volgbod geeft, wat de verschillende volgbiedingen tonen en hoe partner daarop reageert.',
    body: `
<h3>Waarom een volgbod?</h3>
<p>Nadat een tegenstander heeft geopend, doet een bod in een kleur (een <strong>volgbod</strong>) drie dingen: het strijdt mee om de deelscore, het ontneemt de tegenstanders biedruimte, en het vertelt partner waarin hij moet uitkomen als zij het contract krijgen. Vanwege dat laatste is <strong>de kwaliteit van de kleur belangrijker dan de punten</strong>.</p>

<h3>Wat de volgbiedingen tonen</h3>
<table>
<thead><tr><th>Volgbod</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>Op 1-niveau (1♦ – 1♠)</td><td>8-16 punten, een goede vijfkaart of langer</td></tr>
<tr><td>Op 2-niveau (1♠ – 2♦)</td><td>10-16 punten, een goede vijfkaart (meestal een zeskaart)</td></tr>
<tr><td>Zwak sprongvolgbod (1♣ – 2♠)</td><td>Een zeskaart, 6-10 punten, zoals een zwakke twee</td></tr>
<tr><td>1SA</td><td>15-18 punten, evenwichtig, met een stop in de kleur van de openaar</td></tr>
</tbody>
</table>
<p>Met 17+ en een hand die te sterk is voor een gewoon volgbod, begin je met een informatiedoublet en bied je daarna je kleur.</p>

<h3>Voorbeelden (je rechtertegenstander heeft geopend)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="Rechts opent 1♦: bied 1♠"></div>
<p>10 punten met een sterke kleur waarin je partner graag zou laten uitkomen.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="Rechts opent 1♠: bied 2♦"></div>
<p>12 punten en een goede zeskaart: degelijk genoeg voor 2-niveau.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="Rechts opent 1♣: bied 1SA"></div>
<p>17 punten, evenwichtig, met de klaveren goed gestopt.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="Rechts opent 1♥: pas"></div>
<p>11 punten, maar de schoppen zijn slecht en de punten zitten verspreid. Een volgbod zou om een schoppenuitkomst vragen en kan duur gedoubleerd worden. Pas.</p>

<h3>Kwetsbaarheid en niveau</h3>
<p>Het risico van een volgbod is een strafdoublet. Op 1-niveau is dat risico klein; op 2-niveau, vooral kwetsbaar, heb je een goede kleur nodig die ook slagen maakt als de rest van de hand van partner slecht is. Een volgbod op 2-niveau met een vijfkaart moet bijna een opening zijn, met een sterke kleur.</p>

<h3>Reageren op het volgbod van partner</h3>
<table>
<thead><tr><th>Bod van de partner van de volgbieder</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Enkele verhoging</td><td>6-9 met drie of meer troeven</td></tr>
<tr><td>Cuebid in de kleur van de openaar</td><td>Een inviterende verhoging of beter: 10+ met drie of meer troeven</td></tr>
<tr><td>Sprongverhoging</td><td>Preëmptief: zwak, met vier of meer troeven</td></tr>
<tr><td>Nieuwe kleur</td><td>Natuurlijk, een goede vijfkaart of langer, niet forcing</td></tr>
<tr><td>1SA</td><td>Ongeveer 8-11 met een stop in de kleur van de openaar</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Jij bent Zuid: bied 2♠"></div>
<p>8 punten en driekaartsteun: verhoog naar 2♠. Door partner meteen te steunen maak je het de tegenstanders moeilijk om hun beste contract te vinden.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Jij bent Zuid: bied 2♥"></div>
<p>12 punten en vier troeven. De cuebid 2♥ toont een inviterende verhoging of beter; partner biedt 2♠ met een minimaal volgbod, en dan inviteer jij met 3♠, of bied je manche als partner meer toont.</p>
<div class="tip">Denk eraan dat het bereik van een volgbod groot is (8-16). Spring tegenover een volgbod niet naar de manche alleen omdat je een openingshand hebt: geef eerst een cuebid en laat partner zijn hand beschrijven.</div>
<div class="warn">Een volgbod is geen opening. Geef geen volgbod met een zwakke kleur alleen omdat je 12 punten hebt; en laat een volgbod met een sterke kleur niet liggen alleen omdat je er maar 9 hebt.</div>
`,
    keyPoints: [
      'Volgbod op 1-niveau: 8-16 punten, een goede kleur van 5+. Op 2-niveau: 10-16, een goede kleur van 5+ (meestal 6).',
      'Zwak sprongvolgbod: zeskaart, 6-10; volgbod van 1SA: 15-18 evenwichtig met een stop.',
      'De kwaliteit van de kleur is belangrijker dan de punten, omdat het volgbod ook de uitkomst bepaalt.',
      'Partner van de volgbieder: enkele verhoging 6-9 met 3+ steun; cuebid = inviterende verhoging of beter; sprongverhoging is preëmptief.',
      'Met 17+, te sterk voor een volgbod, doubleer je eerst en bied je daarna je kleur.',
    ],
    quiz: [
      {
        q: 'Je rechtertegenstander opent 1♦. Je hebt ♠KQJ74 ♥83 ♦952 ♣A63. Wat bied je?',
        options: ['Pas', '1♠', '2♠', 'Doublet'],
        answer: 1,
        explain: 'Een goede vijfkaart met 10 punten is een degelijk volgbod op 1-niveau. 2♠ zou een zwak sprongvolgbod zijn, en een doublet zou steun voor harten en klaveren suggereren.',
      },
      {
        q: 'Je rechtertegenstander opent 1♥. Je hebt ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 punten). Wat bied je?',
        options: ['1♠', 'Pas', '1SA', 'Doublet'],
        answer: 1,
        explain: 'De schoppenkleur is te zwak om om een uitkomst te vragen, de hand is geen SA-hand van 15-18, en je mist de verdeling voor een doublet. Pas.',
      },
      {
        q: 'Je rechtertegenstander opent 1♣. Je hebt ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 punten). Wat bied je?',
        options: ['1♦', '1SA', 'Doublet', '2SA'],
        answer: 1,
        explain: 'Evenwichtig, 15-18, met een klaverstop: 1SA beschrijft de hand in één bod. Partner kan dezelfde antwoorden gebruiken als na een 1SA-opening.',
      },
      {
        q: 'Je linkertegenstander opende 1♥ en partner gaf een volgbod van 1♠. Je hebt ♠K962 ♥83 ♦AQ74 ♣K105 (12 punten). Wat bied je?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Met 10+ en steun geef je een cuebid in de kleur van de tegenstanders om een inviterende verhoging of beter te tonen. 3♠ zou preëmptief zijn, en 4♠ kan te hoog zijn tegenover een minimaal volgbod.',
      },
      {
        q: 'Je rechtertegenstander opent 1♣. Je hebt ♠KJ10984 ♥73 ♦Q52 ♣43 (6 punten). Wat bied je?',
        options: ['Pas', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Zes goede schoppen en 6-10 punten is een zwak sprongvolgbod. Het ontneemt de tegenstanders hun biedingen op 1-niveau en suggereert een schoppenuitkomst.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'Informatiedoubletten',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Hoe je met een doublet partner vraagt een kleur te kiezen, en hoe partner en de openende kant daarop reageren.',
    body: `
<h3>Wat een informatiedoublet zegt</h3>
<p>Een doublet van een openingsbod in een kleur op laag niveau is niet voor straf: het vraagt partner te bieden. Het toont <strong>12+ punten, kort in de geopende kleur en steun (bij voorkeur vier kaarten) voor de ongeboden kleuren</strong>, vooral voor de ongeboden hoge kleur. Het alternatief is een sterke hand, 17+, met een willekeurige verdeling, die opnieuw biedt om te laten zien wat hij echt heeft.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="Rechts opent 1♦: doublet"></div>
<p>13 punten, een singleton ruiten en vier kaarten in elke andere kleur: de perfecte verdeling.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="Rechts opent 1♦: pas"></div>
<p>14 punten, maar vier ruiten en maar drie kaarten in elke hoge kleur. Doubleer je, dan biedt partner met vier kaarten harten of schoppen, en speel je een 4-3-fit met de verkeerde hand. Pas.</p>

<h3>Reageren op een informatiedoublet</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>West opende 1♥, partner doubleerde, Oost paste. Je moet bieden, hoe zwak je ook bent: een pas zou van het doublet een strafdoublet op 1♥ maken. Kies bij voorkeur een hoge kleur, en toon je kracht met het niveau:</p>
<table>
<thead><tr><th>Jouw punten</th><th>Actie</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Bied je beste kleur op het laagste niveau</td></tr>
<tr><td>9-11</td><td>Spring in je beste kleur (inviterend)</td></tr>
<tr><td>12+</td><td>Cuebid in de kleur van de openaar (forcing), of bied manche</td></tr>
<tr><td>6-10, evenwichtig</td><td>1SA, met een stop in de kleur van de openaar</td></tr>
<tr><td>Pas</td><td>Alleen met lange, sterke troeven in de kleur van de openaar (voor straf)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – doublet – pas: bied 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – doublet – pas: bied 2♠"></div>
<p>Met 3 punten bied je zonder angst 1♠: partner weet dat je niets kunt hebben. Met 10 punten spring je naar 2♠ als invite voor de manche. Met ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 punten) heb je manchekracht, maar maar vier schoppen: geef een cuebid van 2♥, forcing, en kies de manche na het antwoord van partner. Met vijf schoppen en 10-11 punten bied je zelf 4♠.</p>
<p>Als de partner van de openaar biedt (1♥ – doublet – 2♥), ben je niet meer verplicht te bieden. Een bod toont dan wat punten, ongeveer 6+, en een pas toont een zwakke hand.</p>

<h3>De herbieding van de doubleerder</h3>
<p>Een bod op het laagste niveau kan partner ook met niets doen, dus met een minimum mag de doubleerder niet opnieuw bieden. Met 12-15 pas je; met ongeveer 16-18 verhoog je één niveau; met 19+ spring je. Biedt de doubleerder een nieuwe kleur, dan toont dat het sterke type doublet (17+) met een eigen lange kleur.</p>

<h3>De openende kant: redoublet</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Als de opening van partner wordt gedoubleerd, toont een <strong>redoublet</strong> 10+ punten. Het vertelt de openaar dat jullie kant de meeste kracht heeft, en het betekent meestal dat je een kans zoekt om de tegenstanders voor straf te doubleren. Na een opening in een hoge kleur toont <strong>2SA (Jordan)</strong> vierkaartsteun of meer en een inviterende verhoging of beter (10+ steunpunten), dus een redoublet ontkent meestal vier troeven. Met steun en een zwakkere hand verhoog je in plaats daarvan partner: een gewone verhoging toont ongeveer 6-10 punten, en een sprongverhoging (1♥ – doublet – 3♥) is preëmptief, met vier troeven en minder dan 10 punten. Met een nieuwe kleur en minder dan 10 bied je die kleur.</p>

<h3>Doubletten van preëmpts</h3>
<p>Een doublet van een zwakke twee of een preëmpt op 3-niveau is ook informatief: openingskracht, kort in hun kleur, en klaar voor elke kleur die partner biedt. Partner moet misschien met een zwakke hand op 3-niveau bieden, dus de doubleerder moet een degelijke hand hebben, geen lichte.</p>
<div class="tip">Het ideale informatiedoublet is kort in de kleur van de tegenstander en heeft vier kaarten in elke ongeboden hoge kleur. Hoe korter je in hun kleur bent, hoe lichter je kunt doubleren.</div>
<div class="warn">Doubleer niet met een eigen lange kleur en een middelmatige hand: geef dan een volgbod. Een informatiedoublet gevolgd door je eigen kleur toont 17+ punten.</div>
`,
    keyPoints: [
      'Informatiedoublet: 12+ punten, kort in hun kleur, steun voor de ongeboden kleuren; of 17+ met elke verdeling, met het plan opnieuw te bieden.',
      'De partner van de doubleerder moet bieden: 0-8 zo laag mogelijk, 9-11 springen, 12+ cuebid of manche; 1SA = 6-10 met een stop.',
      'Pas het doublet alleen met lange, sterke troeven in hun kleur.',
      'De doubleerder past op een minimaal antwoord met 12-15, verhoogt met 16-18 en springt met 19+.',
      'Een redoublet na een informatiedoublet toont 10+ punten; na 1♥ of 1♠ toont 2SA (Jordan) vier troeven en een inviterende verhoging of beter, en een sprongverhoging is preëmptief.',
    ],
    quiz: [
      {
        q: 'Je rechtertegenstander opent 1♣. Je hebt ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 punten). Wat bied je?',
        options: ['1♦', 'Doublet', '1♠', 'Pas'],
        answer: 1,
        explain: 'Kort in klaveren en vier kaarten in elke andere kleur: een ideaal informatiedoublet. Wat partner ook biedt, jij hebt steun.',
      },
      {
        q: '1♥ – doublet – pas – ? Je hebt ♠Q8642 ♥753 ♦J4 ♣982 (3 punten).',
        options: ['Pas', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Je moet bieden: als je past, blijft 1♥ gedoubleerd voor straf staan en maken de tegenstanders het waarschijnlijk met overslagen. Bied je beste kleur op het laagste niveau.',
      },
      {
        q: '1♥ – doublet – pas – ? Je hebt ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 punten).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 punten: spring in je beste kleur als invite voor de manche. 1♠ kun je ook met niets bieden, dus dat doet deze hand tekort.',
      },
      {
        q: '1♠ – doublet – pas – ? Je hebt ♠K104 ♥82 ♦Q963 ♣J752 (6 punten).',
        options: ['2♣', '2♦', '1SA', 'Pas'],
        answer: 2,
        explain: '1SA toont 6-10 met een schoppenstop, en zo blijf je op 1-niveau. Een lage kleur op 2-niveau bieden kan ook, maar 1SA beschrijft deze evenwichtige hand het best.',
      },
      {
        q: 'Partner opent 1♥ en je rechtertegenstander doubleert. Wat toont jouw redoublet?',
        options: ['Een strafdoublet op 1♥', '10+ punten', 'Hartensteun', 'Een zwakke hand'],
        answer: 1,
        explain: 'Een redoublet toont 10+ punten en zegt dat het spel van jullie kant is. Met steun en minder punten zou je in plaats daarvan verhogen.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'Ophouden en entrees',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Hoe je de verbinding tussen de tegenspelers verbreekt door een stop op te houden, en hoe je met je eigen entrees omgaat.',
    body: `
<h3>Ophouden</h3>
<p>Tegen sans atout vallen de tegenspelers meestal aan in hun lange kleur. Als je de eerste ronde wint met je enige stop en daarna de slag afgeeft aan de partner van die tegenspeler, kan die de kleur terugspelen en lopen de lange kaarten door. <strong>Ophouden</strong> (de hold-up) betekent dat je weigert de eerste ronde (of rondes) van hun kleur te winnen, zodat de tegenspeler die misschien aan slag komt, geen kaart van die kleur meer heeft om terug te spelen.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3SA door Zuid. West komt uit met ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Tel:</strong> ♠A, ♥AK, ♣AKQ: zes vaste slagen. De ruiten leveren er nog vier op zodra de ♦A is weggedreven. Je moet de slag één keer afgeven.</p>
<p><strong>Gevaar:</strong> de schoppen van West. Neem je de eerste schoppen en neemt Oost de ♦A, dan speelt Oost schoppen terug en maakt West vier schoppenslagen: één down.</p>
<p><strong>Ophouden:</strong> speel klein op de ♠K. West speelt door met de ♠Q en jij neemt met de aas. Oost heeft twee keer bekend en heeft geen schoppen meer. Drijf nu de ♦A eruit. Zoals de kaarten zitten, neemt Oost die, heeft hij geen schoppen om terug te spelen, en maak jij tien slagen. Had West de ♦A gehad, dan was je down gegaan, maar dan was het contract hoe dan ook niet te maken geweest: ophouden is een gratis extra kans.</p>

<h4>Hoe vaak ophouden: de regel van 7</h4>
<p>Trek het aantal kaarten dat jij en de dummy samen in de kleur hebben af van zeven. De uitkomst is het aantal keren dat je ophoudt. Hier hebben de twee handen samen zes schoppen, dus 7 − 6 = 1: duik één keer en neem de tweede ronde. Dat gaat uit van een 5-2-verdeling; let op de kaarten die vallen en pas je spel aan.</p>

<h4>Wanneer je niet ophoudt</h4>
<ul>
<li>Als de tegenspeler die aan slag kan komen toch al geen kaarten meer in de kleur heeft, of als de kleur niet kan doorlopen.</li>
<li>Als ophouden de tegenspelers de kans geeft om over te stappen naar een kleur die nog gevaarlijker is.</li>
<li>Als je twee stops hebt en de gevaarlijke tegenspeler niet twee keer aan slag kan komen. Met A K x kun je vaak de eerste slag nemen en heb je nog steeds een stop als zij weer aan slag komen.</li>
</ul>
<div class="tip">De Bath coup: met A J x in je hand speel je laag als West met de heer uitkomt. Speelt West de kleur door, dan maken je A J twee slagen; stapt West over, dan beschermen je A J de kleur nog steeds: West kan die kleur niet opnieuw spelen zonder jou een slag te geven.</div>

<h3>Omgaan met entrees</h3>
<p>Een entree is een kaart waarmee je een slag wint in een bepaalde hand. Veel contracten gaan niet verloren door een gebrek aan slagen, maar doordat je ze niet kunt bereiken.</p>
<ul>
<li><strong>Tel je entrees vóór de eerste slag.</strong> Bepaal welke hand later aan slag moet zijn, en win de eerste slag in de juiste hand.</li>
<li><strong>Deblokkeer:</strong> speel eerst de hoge kaarten uit de kortste hand. Met ♦Q3 in je hand en ♦AKJ105 in de dummy (zonder andere entrees naar de dummy) incasseer je eerst de Q en speel je daarna de 3 naar de dummy.</li>
<li><strong>Duik</strong> de ronde die je moet verliezen, zolang de lange hand zijn hoge kaarten nog heeft (zie de les "Lange kleuren vrijspelen").</li>
<li><strong>Neem over</strong> om van hand te wisselen: met een singleton ♥Q in je hand tegenover ♥AKJ104 en geen andere entree naar de dummy neem je de Q over met de K en speel je de kleur af.</li>
<li><strong>Bewaar de late entree:</strong> als er een kleur in de dummy moet worden vrijgespeeld, gebruik je eerst de entrees van je eigen hand en bewaar je die van de dummy tot het eind.</li>
</ul>
<div class="warn">Win een slag niet in de verkeerde hand "omdat het toch niet uitmaakt". Als je nog niet hebt uitgedacht in welke hand je later moet zitten, is het te vroeg om naar de slag te spelen.</div>
`,
    keyPoints: [
      'Houd je stop op, zodat de tegenspeler die aan slag kan komen geen kaart van hun kleur meer heeft.',
      'Regel van 7: houd 7 min het aantal kaarten dat jullie samen in de kleur hebben op (een richtlijn, uitgaande van een 5-2-verdeling).',
      'Houd niet op als een overstap gevaarlijker is of als je genoeg stops hebt.',
      'Deblokkeer door eerst de honneurs van de korte hand te spelen; neem over om van hand te wisselen.',
      'Plan je entrees vóór de eerste slag en win de eerste slag in de juiste hand.',
    ],
    quiz: [
      {
        q: 'Jij en de dummy hebben samen zes kaarten in de kleur waarin de tegenspelers tegen 3SA uitkomen, met alleen de aas als stop. Hoe vaak moet je ophouden?',
        options: ['Nooit', 'Eén keer', 'Twee keer', 'Drie keer'],
        answer: 1,
        explain: 'Regel van 7: 7 − 6 = 1. Zit de kleur 5-2, dan heeft de partner van de speler met de lange kleur geen kaart meer om terug te spelen als je de tweede ronde neemt.',
      },
      {
        q: 'Wat is het doel van ophouden?',
        options: ['Een overslag maken', 'De partner van de speler met de lange kleur uitputten, zodat die de kleur niet kan terugspelen', 'Ontdekken wie de ontbrekende honneurs heeft', 'Een entree naar de dummy bewaren'],
        answer: 1,
        explain: 'Als de tegenspeler die aan slag komt geen kaart van de lange kleur heeft, zijn de lange kaarten in de hand van zijn partner afgesneden en worden ze misschien nooit geïncasseerd.',
      },
      {
        q: 'Waarom helpt ophouden in het spel hierboven niet als West de ♦A heeft?',
        options: ['Omdat West dan de resterende schoppen kan incasseren', 'Omdat de ruiten dan blokkeren', 'Omdat Oost dan kan introeven', 'Het helpt in dat geval ook'],
        answer: 0,
        explain: 'Ophouden put alleen Oost uit. Komt West, de hand met de lange schoppen, aan slag met de ♦A, dan worden de vrijgespeelde schoppen geïncasseerd. Geen enkele speelwijze kan dat voorkomen; ophouden wint telkens als Oost de ♦A heeft.',
      },
      {
        q: 'Je hebt ♦Q3 in je hand en ♦AKJ105 in de dummy, die geen andere entree heeft. Hoe speel je de ruiten?',
        options: ['Speel eerst de 3 naar de aas', 'Incasseer eerst de Q en speel daarna de 3 naar de dummy', 'Speel de boer voor uit de dummy', 'Duik de eerste ronde'],
        answer: 1,
        explain: 'Speel eerst de hoge kaart uit de korte hand. Na de Q brengt de 3 je naar de dummy en kun je daar de rest van de kleur afspelen.',
      },
      {
        q: 'West komt tegen 3SA uit met ♣K en jij hebt ♣AJ4 in je hand. Wat is de Bath coup?',
        options: ['Meteen met de aas nemen', 'Laag spelen, zodat West bij het doorspelen van klaveren in je A J speelt', 'De boer spelen', 'Afgooien uit de dummy'],
        answer: 1,
        explain: 'Door te duiken nodig je West uit de kleur door te spelen naar je A J, wat je twee slagen oplevert, en als West overstapt, heb je de kleur nog steeds onder controle.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'Troefbehandeling',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Wanneer je meteen troef trekt, wanneer je dat uitstelt, hoe je introeft in de korte hand en hoe je de controle over de troefkleur houdt.',
    body: `
<h3>Het uitgangspunt: troef trekken</h3>
<p>Ben je leider in een troefcontract, dan vormen de troeven van de tegenspelers een bedreiging voor je vaste slagen: elke vaste slag in een bijkleur die je incasseert, kan worden ingetroefd. Het normale plan is dus <strong>vroeg troef te trekken</strong> en de troeven van de tegenstanders te tellen terwijl ze vallen. Hebben ze vijf troeven en bekennen ze allebei twee rondes, dan zit er nog één buiten; bekent een tegenspeler niet meer, dan weet je precies hoe ze zaten.</p>

<h3>Redenen om het troeftrekken uit te stellen</h3>
<ol>
<li><strong>Je hebt de troeven van de dummy nodig om in te troeven.</strong> Verliezers introeven in de hand met de korte troeven levert extra slagen op. Zouden de troeven van de dummy opgaan aan het troeftrekken, troef dan eerst in (zie het 4♠-spel in de les "Een speelplan maken").</li>
<li><strong>Je moet snel verliezers afgooien.</strong> Als de tegenspelers een troefhonneur hebben en aan slag komen zodra je troef speelt, zorg dan dat ze daarna niet genoeg slagen kunnen incasseren om je down te spelen.</li>
<li><strong>Je hebt troeven nodig als entrees</strong>, bijvoorbeeld om een lange bijkleur te bereiken of om herhaald te snijden.</li>
<li><strong>Je wilt een kruistroef spelen</strong>, waarbij je de troeven van beide handen afzonderlijk gebruikt.</li>
</ol>

<h3>Afgooien voordat je troef trekt</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ door Zuid. West komt uit met ♦K."></div>
<p><strong>Tel de verliezers:</strong> de ♠A, twee ruiten nadat de ♦A in de eerste slag is weggedreven, en de ♣A (de derde klaverronde kan in de dummy worden ingetroefd). Vier verliezers.</p>
<p>Speel je nu troef, dan incasseert de tegenspeler die met de ♠A neemt twee ruitenslagen, en met de ♣A nog te gaan ben je down. Neem in plaats daarvan met de ♦A en speel meteen ♥A, ♥K en ♥Q, waarbij je op de derde harten een ruiten uit je hand afgooit. Speel pas daarna troef. Je verliest de ♠A, één ruiten en de ♣A.</p>
<p>Het risico is dat iemand de derde harten introeft. Dat gebeurt alleen als de harten 5-2 of slechter zitten <em>en</em> de tegenspeler met de doubleton een troef heeft om mee in te troeven: een veel kleiner risico dan de zekere nederlaag als je eerst troef trekt.</p>
<div class="tip">Vraag je af: "Als ik in troef de slag afgeef, hoeveel slagen kunnen de tegenspelers dan incasseren?" Zijn dat er te veel, werk dan eerst een verliezer weg.</div>

<h3>Introeven: de korte hand wint, de lange niet</h3>
<p>Met vijf troeven in je hand en drie in de dummy maken je vijf troeven sowieso vijf slagen. Introeven in je hand gebruikt er alleen één van. Introeven in de dummy is een extra slag, omdat de kleine troeven van de dummy anders nooit een slag zouden maken. Plan je troefslagen in de hand met de <strong>korte</strong> troeven.</p>
<p>Introeven in de lange hand is om andere redenen nuttig: om een lange kleur in de dummy vrij te spelen door de kaarten van de tegenstanders eruit te troeven, of om je troeven in te korten voor een ingooi of een troefcoup.</p>

<h3>De kruistroef</h3>
<p>Als beide handen een korte kleur hebben, kun je de verliezers van de ene hand introeven met de troeven van de andere, heen en weer, zonder ooit troef te trekken. Regels voor een kruistroef:</p>
<ul>
<li><strong>Incasseer eerst je vaste slagen in de bijkleuren.</strong> Anders gooien de tegenspelers tijdens de kruistroef in die kleuren af en troeven ze later je vaste slagen in.</li>
<li>Troef hoog in als overtroeven mogelijk is, zodat de tegenspelers hun kleine troeven niet goedkoop kunnen maken.</li>
<li>Tel: de kruistroef moet precies de slagen opleveren die je nodig hebt.</li>
</ul>

<h3>De controle houden</h3>
<p>Als de tegenspelers steeds een kleur spelen die jij in je lange hand moet introeven, kun je uiteindelijk minder troeven hebben dan een tegenspeler: je bent de <strong>troefcontrole</strong> kwijt, en de overgebleven troeven van die tegenspeler maken slagen terwijl de lange kleur van zijn partner doorloopt. Verdedigingen tegen dit forceren:</p>
<ul>
<li>Gooi een verliezer af in plaats van in te troeven (geef een slag af die je toch al zou verliezen), zodat de volgende forcering komt als de dummy kan introeven.</li>
<li>Trek vroeg de kleine troeven van de tegenstanders, ook als je hun hoogste troef laat zitten, zodat de volgende forcering je de controle niet kost.</li>
<li>Kies liever een contract waarin de hand met de korte troeven de forcering kan opvangen.</li>
</ul>
<div class="warn">Verspil geen twee van je troeven om één van de hunne te trekken als hun laatste troef de hoogste is. Die slag is toch voor hen; laat ze die nemen wanneer ze willen, en gebruik je troeven om het spel in de hand te houden.</div>
`,
    keyPoints: [
      'Trek normaal gesproken vroeg troef en tel de troeven van de tegenstanders terwijl ze vallen.',
      'Stel het uit als je de troeven van de dummy nodig hebt om in te troeven, eerst verliezers moet afgooien voordat je de slag afgeeft, of troeven als entree nodig hebt.',
      'Introeven in de hand met de korte troeven levert slagen op; introeven in de lange hand meestal niet.',
      'Incasseer vóór een kruistroef je vaste slagen in de bijkleuren.',
      'Gebruik geen twee troeven om de hoogste troef van de tegenstanders te trekken.',
    ],
    quiz: [
      {
        q: 'Wanneer is het verkeerd om meteen troef te trekken?',
        options: ['Nooit: trek altijd eerst troef', 'Als je de troeven van de dummy nodig hebt om je verliezers in te troeven', 'Als de tegenstanders vijf troeven hebben', 'Als je negen troeven hebt'],
        answer: 1,
        explain: 'Bij het troeftrekken gaan de troeven van de dummy net zo goed op als die van de tegenstanders. Troef eerst in de korte hand in en trek daarna de rest.',
      },
      {
        q: 'Wat moet de leider in het 4♠-spel hierboven doen nadat hij met de ♦A heeft genomen?',
        options: ['♠K voorspelen', 'Drie keer harten incasseren en een ruiten afgooien', 'Een klaver naar de ♣Q spelen', 'Een ruiten duiken'],
        answer: 1,
        explain: 'De tegenspelers hebben de ♠A en twee ruitenslagen klaarliggen. Gooi eerst een ruiten af op de derde harten en speel pas daarna troef.',
      },
      {
        q: 'De tegenstanders hebben nog één troef: de aas. Jij hebt troeven en vaste slagen genoeg. Wat doe je meestal?',
        options: ['Troef spelen om de aas er meteen uit te drijven', 'Hem laten zitten en je bijkleuren spelen; die slag is toch voor hen', 'Iets in de dummy introeven', 'De rest afgeven'],
        answer: 1,
        explain: 'Hem trekken kost je twee troeven (één uit elke hand) voor een slag die zij altijd maken. Laat ze ermee introeven als ze willen; jouw troeven houden de controle.',
      },
      {
        q: 'Je staat op het punt een kruistroef te spelen. Wat doe je eerst?',
        options: ['Twee rondes troef trekken', 'Je vaste slagen in de bijkleuren incasseren', 'Introeven met je laagste troeven', 'Een slag afgeven'],
        answer: 1,
        explain: 'Tijdens een kruistroef gooien de tegenspelers af. Gooien ze af in een bijkleur die jij nog niet hebt geïncasseerd, dan kunnen ze later je vaste slagen introeven.',
      },
      {
        q: 'Je hebt vijf troeven in je hand en drie in de dummy. Welke troefslag levert een extra slag op?',
        options: ['Introeven in je hand', 'Introeven in de dummy', 'Allebei', 'Geen van beide'],
        answer: 1,
        explain: 'Je vijf troeven maken vijf slagen, met of zonder introeven. De drie kleine troeven van de dummy maken alleen slagen door in te troeven.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'Signalen in het tegenspel',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Hoe tegenspelers met de hoogte van de gespeelde kaarten hun attitude, lengte en voorkeur laten zien.',
    body: `
<h3>Praten met je kaarten</h3>
<p>Tegenspelers zien elkaars handen niet, maar ze mogen wel kiezen <em>welke</em> kaart ze spelen. Als je niet probeert de slag te winnen, stuurt de kleine kaart die je speelt een boodschap. Er zijn drie soorten standaardsignalen; de situatie vertelt partner welke je geeft.</p>
<table>
<thead><tr><th>Signaal</th><th>Wanneer</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Attitude</td><td>Partner speelt een kleur voor; de eerste keer dat je afgooit</td><td>Hoog moedigt aan, laag ontmoedigt</td></tr>
<tr><td>Lengte</td><td>De leider speelt een bijkleur (geen lengtesignaal in troef)</td><td>Hoog-laag = even aantal, laag-hoog = oneven</td></tr>
<tr><td>Voorkeur</td><td>Als je een kleur voorspeelt die partner kan introeven</td><td>Een hoge kaart vraagt om de hoogste van de andere kleuren, een lage om de laagste; een middelste kaart: geen voorkeur</td></tr>
</tbody>
</table>

<h3>Attitude</h3>
<p>Tegen 4♥ komt partner uit met ♠A (uit AK) en de dummy heeft ♠8 6 4.</p>
<ul>
<li>Met ♠Q 9 3 speel je de 9: je wilt schoppen, want je vrouw wint de derde ronde.</li>
<li>Met ♠7 5 2 speel je de 2: je hebt niets in schoppen, dus partner moet aan een andere kleur denken.</li>
<li>Met een doubleton ♠9 3 speel je de 9 en daarna de 3: het hoog-laag vraagt partner door te spelen, en jij troeft de derde ronde in.</li>
</ul>
<p>Afgooien werkt op dezelfde manier: de eerste kaart die je afgooit, toont attitude. Gooi je ♣9 af, dan zeg je "ik wil klaveren"; gooi je ♦2 af, dan zeg je "ik wil geen ruiten". Gooi alleen af uit een kleur die je kunt missen. Heb je in de kleur die je wilt geen kleine kaart van 6 of hoger over, gooi dan in plaats daarvan je laagste kaart af uit een kleur die je niet wilt.</p>

<h3>Lengte</h3>
<p>Als de leider een kleur speelt, laat je zien hoeveel kaarten je erin hebt: hoog-laag met een even aantal (twee of vier), de laagste eerst met een oneven aantal (drie). Met lengtesignalen kan partner de verdeling van de leider uitrekenen, en vooral weet partner dan wanneer hij een aas moet nemen.</p>
<table>
<thead><tr><th>Hand</th><th>Ruiten</th></tr></thead>
<tbody>
<tr><td>Noord (dummy, geen andere entree)</td><td>K Q J 10 5</td></tr>
<tr><td>Oost (jij)</td><td>A 7 3</td></tr>
<tr><td>West en Zuid</td><td>9 8 6 4 2 samen</td></tr>
</tbody>
</table>
<p>De leider speelt ruiten naar de dummy. Je wilt je aas nemen in de ronde waarin de leider zijn <em>laatste</em> ruiten speelt, zodat hij is afgesneden van de rest van de kleur in de dummy. Begint partner met de 9 (hoog: een even aantal, hier twee), dan heeft de leider er drie: duik twee keer en neem de derde ronde. Speelt partner eerst de 4 (laag: oneven, hier drie), dan heeft de leider er twee: neem de tweede ronde. Zonder het lengtesignaal van partner zou je moeten raden.</p>

<h3>Voorkeur</h3>
<p>Soms zeggen attitude en lengte niets, en dan wijst de hoogte van de kaart naar een andere kleur. Het klassieke geval is een troefslag. Schoppen is troef en jij speelt een harten voor die partner kan introeven. De andere kleuren zijn ruiten en klaveren. Speel een <strong>hoge</strong> harten om een ruiten terug te vragen (de hoogste van de twee) en een <strong>lage</strong> harten om een klaver terug te vragen. Heb je de ♦A, speel dan je hoogste harten; partner troeft in, speelt ruiten terug naar je aas, en jij laat partner nog een keer introeven.</p>
<p>Zonder voorkeur speel je een middelste kaart. Sommige paren gebruiken voorkeurssignalen ook bij het terugspelen van de kleur van partner; de bots hier gebruiken ze alleen als ze partner laten introeven.</p>

<h3>Goede gewoontes</h3>
<ul>
<li>Geef op de kaart van partner eerst attitude, op de kaart van de leider lengte; gebruik voorkeurssignalen alleen als de situatie duidelijk is.</li>
<li>Signaleer niet met een kaart die later een slag kan maken. Uit Q J 10 9 7 kan de 7 al genoeg zijn om aan te moedigen.</li>
<li>Signaleer in een gelijkmatig tempo: denk na als de dummy op tafel komt, niet midden in een slag.</li>
<li>Geef geen lengtesignaal als dat alleen de leider helpt, bijvoorbeeld als de leider moet raden hoe hij een kleur speelt en de lengte partner niets oplevert. De bots hier geven altijd een lengtesignaal als de leider een bijkleur speelt, zodat je kunt oefenen met het lezen ervan.</li>
</ul>
<div class="warn">Een signaal is informatie, geen bevel. Partner combineert het met wat hij in de dummy en in zijn eigen hand ziet, en kan goede redenen hebben om iets anders te doen.</div>
`,
    keyPoints: [
      'Attitude op de kaart van partner en bij je eerste afgooi: hoog moedigt aan, laag ontmoedigt.',
      'Lengte als de leider een bijkleur speelt: hoog-laag toont een even aantal, laag-hoog een oneven aantal.',
      'Gebruik het lengtesignaal om te weten wanneer je je aas neemt tegen een lange kleur in een dummy zonder entrees.',
      'Voorkeur: een hoge kaart vraagt om de hoogste andere kleur, een lage om de laagste; een middelste kaart toont geen voorkeur.',
      'Verspil nooit een kaart die een slag kan maken alleen om te signaleren.',
    ],
    quiz: [
      {
        q: 'Partner komt tegen 4♥ uit met ♠A (uit AK). De dummy heeft ♠8 6 4. Jij hebt ♠Q 9 3. Welke kaart speel je?',
        options: ['♠Q', '♠9', '♠3', 'Het maakt niet uit'],
        answer: 1,
        explain: 'De 9 moedigt aan. Partner speelt door met de heer, en jouw vrouw neemt de derde ronde. Met de 3 zou je partner vertellen dat je niets in schoppen hebt.',
      },
      {
        q: 'De leider speelt een kleur waarin jij 8 3 hebt. Welke kaart speel je eerst om je lengte te laten zien?',
        options: ['De 8', 'De 3', 'Maakt niet uit', 'Geen van beide: geef nooit een lengtesignaal'],
        answer: 0,
        explain: 'Hoog-laag toont een even aantal. Speel nu de 8 en de volgende keer de 3; partner weet dan dat je met twee (of vier) kaarten begon.',
      },
      {
        q: 'Met standaardsignalen gooi je als eerste ♣2 af. Wat zegt die kaart?',
        options: ['Ik wil klaveren', 'Ik wil geen klaveren', 'Ik heb twee klaveren', 'Speel een ruiten'],
        answer: 1,
        explain: 'De eerste afgooi toont attitude. Een lage kaart ontmoedigt de afgegooide kleur.',
      },
      {
        q: 'De dummy heeft ♦K Q J 10 5 en geen andere entree; jij hebt ♦A 7 3. De leider speelt ruiten en partner speelt eerst de 9 en dan de 4. Wanneer neem je je aas?',
        options: ['In de eerste ronde', 'In de tweede ronde', 'In de derde ronde', 'Nooit'],
        answer: 2,
        explain: 'Het hoog-laag van partner toont een even aantal, twee, dus de leider begon met drie. Neem de aas in de derde ronde, als de leider geen ruiten meer heeft om de dummy te bereiken.',
      },
      {
        q: 'Schoppen is troef. Je speelt een harten voor die partner kan introeven en je wilt een ruiten terug. Welke harten speel je uit ♥9 8 2?',
        options: ['♥9', '♥8', '♥2', 'Het maakt niet uit'],
        answer: 0,
        explain: 'Dit is een voorkeurssituatie. Een hoge kaart vraagt om de hoogste van de overgebleven bijkleuren (ruiten in plaats van klaveren).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'Negatieve doubletten',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Hoe de antwoorder na een volgbod met een doublet de ongeboden hoge kleur toont, en hoe de strafpas en het heropeningsdoublet samenwerken.',
    body: `
<h3>Het probleem</h3>
<p>Partner opent 1♦ en je rechtertegenstander komt tussen met 1♠. Jij hebt vier harten en 9 punten. Een bod van 2♥ zou vijf harten en 10+ punten beloven, dus dat kun je niet bieden, maar je wilt een mogelijke hartenfit niet mislopen. De oplossing is het <strong>negatief doublet</strong>: na een opening van partner en een volgbod tot en met 2♠ is een doublet van de antwoorder informatief en toont het de ongeboden hoge kleur(en).</p>

<h3>Wat het doublet toont</h3>
<p>Kracht: 6+ punten als het volgbod op 1-niveau is, 8+ als het op 2-niveau is. Verdeling:</p>
<table>
<thead><tr><th>Bieding</th><th>Het doublet van de antwoorder toont</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Beide hoge kleuren (meestal vier van elk)</td></tr>
<tr><td>1♣ of 1♦ – (1♥) – X</td><td>Precies vier schoppen (1♠ zou er vijf of meer tonen)</td></tr>
<tr><td>1♣ of 1♦ – (1♠) – X</td><td>Vier of meer harten (2♥ zou er vijf tonen, met 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>De lage kleuren, of punten zonder duidelijk bod</td></tr>
<tr><td>1♥ – (2♣ of 2♦) – X</td><td>Vier schoppen, 8+ punten</td></tr>
<tr><td>1♠ – (2♣ of 2♦) – X</td><td>Vier of meer harten, 8+ punten</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: doublet"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: doublet"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: doublet"></div>
<p>De eerste hand toont zo zijn vier harten. De tweede heeft precies vier schoppen en 7 punten: doubleer in plaats van 1♠ te bieden. De derde toont vier schoppen en genoeg kracht voor 2-niveau.</p>

<h3>De herbieding van de openaar na een negatief doublet</h3>
<ul>
<li>Met vier kaarten in de hoge kleur die partner toonde, bied je die: op het laagste niveau met een minimum, of met een sprong met extra kracht (ongeveer 16-18).</li>
<li>Doe anders je normale herbieding: herhaal een zeskaart, bied een tweede kleur, of bied sans atout met een stop in de kleur van de volgbieder.</li>
<li>Met een lange, sterke kaart in de kleur van de volgbieder mag je het doublet laten staan voor straf.</li>
</ul>

<h3>De strafpas en het heropeningsdoublet</h3>
<p>Omdat het doublet van de antwoorder informatief is, kan de antwoorder niet voor straf doubleren met een sterke kaart in de kleur van de volgbieder. In plaats daarvan <strong>past</strong> de antwoorder en wacht hij af. Is de openaar kort in de kleur van de volgbieder, dan moet hij heropenen met een doublet, dat de antwoorder door te passen omzet in een strafdoublet.</p>
<div class="hand" data-cards="S:K5 H:73 D:Q984 C:KQ1093" data-label="1♥ – (2♣) – ?: pas"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Openaar (Noord): heropeningsdoublet"></div>
<p>De ♣KQ1093 van Zuid zitten achter de klaveren van Oost, en 2♣ gedoubleerd gaat waarschijnlijk een aantal slagen down. Noord heropent met zijn singleton klaver met een doublet, omdat de pas van partner precies zo’n hand kan zijn. Met lengte in de kleur van de volgbieder moet de openaar voorzichtiger zijn met heropenen: dan is het onwaarschijnlijk dat partner zit te wachten om te straffen.</p>
<div class="tip">Na een volgbod is een nieuwe kleur van de antwoorder nog steeds natuurlijk en forcing, maar die toont vijf kaarten, want met vier had je een negatief doublet kunnen geven.</div>
<div class="warn">Een negatief doublet is geen strafdoublet. Wil je het volgbod straffen, pas dan en hoop dat partner heropent.</div>
`,
    keyPoints: [
      'Als partner opent en je rechtertegenstander een volgbod geeft (tot en met 2♠), is het doublet van de antwoorder informatief.',
      'Het toont de ongeboden hoge kleur(en): 6+ punten op 1-niveau, 8+ op 2-niveau.',
      '1♣/1♦ – (1♥) – X toont precies vier schoppen; 1♠ zou er vijf tonen.',
      'Met sterke lengte in de kleur van de volgbieder past de antwoorder; de openaar heropent met een doublet als hij kort is in die kleur.',
      'De openaar herbiedt natuurlijk en springt met extra kracht in de hoge kleur van partner.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Je hebt ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 punten).',
        options: ['2♥', 'Doublet', '1SA', 'Pas'],
        answer: 1,
        explain: '2♥ zou vijf harten en 10+ punten beloven. Het negatief doublet toont vier of meer harten met 6+ en houdt de hartenfit in beeld.',
      },
      {
        q: '1♣ – (1♥) – ? Je hebt ♠KJ752 ♥84 ♦Q63 ♣J95 (7 punten).',
        options: ['Doublet', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Na een volgbod van 1♥ toont het doublet precies vier schoppen, dus met vijf schoppen bied je 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Je hebt ♠K5 ♥73 ♦Q984 ♣KQ1093 (10 punten).',
        options: ['Doublet', 'Pas', '3SA', '2SA'],
        answer: 1,
        explain: 'Je zou graag voor straf doubleren, maar jouw doublet zou negatief zijn. Pas en reken erop dat partner met een doublet heropent als hij kort is in klaveren; daarop pas je.',
      },
      {
        q: 'Je opende 1♥ met ♠A863 ♥AQJ74 ♦K52 ♣6. Je linkertegenstander kwam tussen met 2♣, waarna er twee keer werd gepast. Wat doe je?',
        options: ['Pas', 'Doublet', '2♥', '2♠'],
        answer: 1,
        explain: 'Met een singleton in de kleur van de volgbieder heropen je met een doublet. Partner kan gepast hebben met sterke klaveren en past dan voor straf; anders biedt hij zijn beste kleur.',
      },
      {
        q: 'Tot en met welk niveau van het volgbod is het doublet van de antwoorder in dit systeem negatief (informatief)?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Negatieve doubletten gelden tot en met 2♠. Daarboven wordt een doublet vaak ook informatief gebruikt als je dat afspreekt, maar dit systeem legt de grens bij 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Slem herkennen en Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Hoe je herkent dat slem mogelijk is, en hoe je met Blackwood voorkomt dat je slem biedt terwijl er twee azen ontbreken.',
    body: `
<h3>Waarom slems ertoe doen</h3>
<p>Klein slem levert niet kwetsbaar 500 extra punten op en kwetsbaar 750; groot slem 1000 of 1500. Een slem bieden dat anderen laten liggen, is veel waard; een slem bieden dat down gaat, kost ongeveer evenveel. Je hebt twee dingen nodig: genoeg <strong>slagen</strong> (kracht, fit en verdeling) en genoeg <strong>controles</strong> (de tegenstanders mogen niet meteen twee slagen kunnen incasseren).</p>

<h3>Tekenen van slem</h3>
<ul>
<li><strong>Gezamenlijke kracht:</strong> ongeveer 33 punten voor klein slem en 37 voor groot slem, met evenwichtige handen. Met een goede troeffit en verdeling kan het met minder.</li>
<li><strong>Partner toont extra kracht</strong> terwijl jij ook een goede hand hebt: een sprong in een nieuwe kleur, een reverse, een sterke 2♣, een sprongverhoging tegenover jouw opening, een Jacoby 2SA tegenover extra kracht.</li>
<li><strong>Een grote fit</strong> (negen of tien troeven) plus een slagenbron, zoals een lange bijkleur.</li>
<li><strong>Controles:</strong> azen, heren en korte kleuren in de bijkleuren.</li>
</ul>

<h3>Het plan</h3>
<ol>
<li>Spreek een troefkleur af (of besluit tot sans atout).</li>
<li>Stel vast dat de gezamenlijke kracht genoeg is.</li>
<li>Controleer de controles, meestal met Blackwood.</li>
<li>Bied het slem, of stop op 5-niveau.</li>
</ol>

<h3>Blackwood</h3>
<p>Zodra er een kleur is afgesproken, vraagt een bod van 4SA partner hoeveel azen hij heeft:</p>
<table>
<thead><tr><th>Antwoord</th><th>Azen</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 of 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>Uit de bieding blijkt altijd of 5♣ 0 of 4 betekent. Ontbreken er twee azen, sluit dan af in vijf in je troefkleur; partner moet passen. Ontbreekt er één, bied dan klein slem. Ontbreekt er geen en ben je geïnteresseerd in groot slem, bied dan <strong>5SA</strong> om naar heren te vragen: 6♣ = 0 of 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5SA belooft dat het paar alle vier de azen heeft.</p>
<p>Wie Blackwood vraagt, is de kapitein: de antwoorder geeft alleen antwoord en legt zich daarna neer bij de beslissing.</p>

<h3>Roman Key Card Blackwood</h3>
<p>De meeste spelers gebruiken tegenwoordig een verfijning, <strong>Roman Key Card Blackwood</strong>, en dat is wat de bots in deze app standaard spelen. Het telt vijf <strong>sleutelkaarten</strong>, de vier azen en de troefheer, en vertelt je ook iets over de troefvrouw:</p>
<table>
<thead><tr><th>Antwoord</th><th>Sleutelkaarten</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 of 4</td></tr>
<tr><td>5♦</td><td>0 of 3</td></tr>
<tr><td>5♥</td><td>2, zonder de troefvrouw</td></tr>
<tr><td>5♠</td><td>2, met de troefvrouw</td></tr>
</tbody>
</table>
<p>De beslissingen werken op dezelfde manier: met twee ontbrekende sleutelkaarten stop je op vijf, met één ontbrekende bied je klein slem. De les "Roman Key Card Blackwood" behandelt het uitgebreid, ook hoe je naar de troefvrouw vraagt.</p>

<h3>Een voorbeeld</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Noord opent 1♠ met 18 punten. Zuid biedt met 15 punten en vier schoppen 2SA, de Jacoby-verhoging: mancheforcing met steun. 3♠ van Noord is de standaardmanier om extra kracht te tonen zonder singleton of renonce. Zuid telt nu samen ongeveer 33 punten en een negenkaartfit, dus slem is waarschijnlijk. 4SA vraagt naar azen; 5♥ toont er twee. Met de ♥A in zijn hand weet Zuid dat er maar één aas ontbreekt, en hij biedt 6♠.</p>
<p>Met Roman Key Card Blackwood, zoals de bots spelen, antwoordt Noord 5♦: drie sleutelkaarten, de ♠A, de ♦A en de ♠K. Zuid, die alleen de ♥A heeft, kan zien dat het er drie zijn en niet nul, dus er ontbreekt één sleutelkaart; Zuid heeft de ♠Q, en ook zo wordt 6♠ bereikt.</p>
<p>In het spel is de ♣A de enige verliezer: de leider trekt troef, incasseert de harten en speelt ♦A, een ruiten naar de heer en de ♦Q van de dummy, waarop hij een van de klaveren van Noord afgooit.</p>

<h3>De grenzen van Blackwood</h3>
<p>Blackwood telt azen; het vertelt je niet <em>welke</em> azen, en ook niet of een bijkleur twee snelle verliezers heeft. Gebruik het niet:</p>
<ul>
<li>met een renonce (de aas van partner kan in je renoncekleur zitten, waar hij verspild is);</li>
<li>met twee kleine kaarten in een ongeboden kleur (partner heeft misschien aas noch heer in die kleur);</li>
<li>als een antwoord op 5-niveau je voorbij je veilige contract kan brengen, wat met klaveren als troef vaak gebeurt.</li>
</ul>
<p>In die gevallen zijn controlebiedingen het juiste middel; zie de les "Controles en cuebids: wanneer je geen Blackwood gebruikt".</p>
<div class="warn">4SA is niet altijd Blackwood. Als er geen kleur is afgesproken en het laatste bod van partner een natuurlijk SA-bod was (1SA – 4SA, 2SA – 4SA), is 4SA kwantitatief: een invite voor 6SA. Wil je na een SA-bod van partner naar azen vragen, gebruik dan Gerber: 4♣.</div>
`,
    keyPoints: [
      'Voor klein slem heb je samen ongeveer 33 punten nodig (voor groot slem ongeveer 37); fit en verdeling kunnen dat verlagen.',
      'Leg eerst de troefkleur en de kracht vast en controleer daarna de controles.',
      'Antwoorden op gewone Blackwood: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; 5SA vraagt daarna naar heren. De bots spelen Roman Key Card Blackwood: 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 plus de troefvrouw.',
      'Ontbreken er twee azen: stop op vijf in de afgesproken kleur.',
      'Gebruik geen Blackwood met een renonce of met twee snelle verliezers in een ongeboden kleur.',
    ],
    quiz: [
      {
        q: 'Partner biedt 4SA (gewone Blackwood) en jij hebt één aas. Wat antwoord je?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ toont 0 of 4, 5♦ één, 5♥ twee, 5♠ drie.',
      },
      {
        q: 'Je biedt 4SA en partner antwoordt 5♥ (twee azen). Jij hebt de andere twee azen. Wat nu?',
        options: ['Afsluiten op vijf in de troefkleur', 'Klein slem bieden, of 5SA om naar heren te vragen als groot slem mogelijk is', 'Passen op 5♥', '6SA bieden, wat de kleur ook is'],
        answer: 1,
        explain: 'Er ontbreekt geen aas, dus klein slem is veilig voor twee snelle azen. Als de handen misschien dertien slagen opleveren, vraagt 5SA naar heren en vertelt het partner dat alle azen aanwezig zijn.',
      },
      {
        q: 'Schoppen is afgesproken. Je biedt 4SA en partner antwoordt 5♦ (één aas). Jij hebt één aas. Wat doe je?',
        options: ['Bied 6♠', 'Bied 5♠', 'Bied 5SA', 'Pas'],
        answer: 1,
        explain: 'Er ontbreken twee azen, dus de tegenstanders kunnen meteen twee slagen incasseren. Sluit af in 5♠; partner moet passen.',
      },
      {
        q: 'Twee evenwichtige handen met samen 33 punten en geen troeffit. Welk contract?',
        options: ['3SA', '4SA', '6SA', '7SA'],
        answer: 2,
        explain: 'Met samen ongeveer 33 punten heb je een goede kans op twaalf slagen in sans atout. Voor groot slem zou je 37 nodig hebben.',
      },
      {
        q: 'Partner antwoordt 5♣ op jouw 4SA (gewone Blackwood). Wat toont dat?',
        options: ['Klaveren', 'Geen azen of alle vier', 'Eén aas', 'Drie azen'],
        answer: 1,
        explain: '5♣ is 0 of 4 azen. De bieding of je eigen hand maakt duidelijk welke van de twee: heb je zelf een aas, dan kan partner er geen vier hebben.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Gerber en de kwantitatieve 4SA',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Hoe je na een SA-opening naar slem zoekt: naar azen vragen met Gerber en inviteren met een kwantitatieve 4SA.',
    body: `
<h3>Slem na een SA-opening</h3>
<p>Als partner 1SA (15-17) of 2SA (20-21) opent, ken je zijn kracht tot op twee of drie punten, dus kun je vaak de punten optellen en zelf beslissen. Twee middelen helpen daarbij:</p>
<ul>
<li><strong>4SA, kwantitatief:</strong> "partner, bied 6SA als je aan de bovenkant van je bereik zit".</li>
<li><strong>4♣, Gerber:</strong> "partner, hoeveel azen heb je?"</li>
</ul>

<h3>De kwantitatieve 4SA</h3>
<p>Een directe verhoging van 1SA naar 4SA is geen Blackwood. Die toont 16-17 punten, dus het totaal is 31-34, net rond de 33 die je voor slem nodig hebt. De openaar past met een minimum (15) en biedt 6SA met een maximum (17); met 16 beslist de openaar op gevoel en accepteert hij met een goede vijfkaart of goede tussenkaarten.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Partner opende 1SA: bied 4SA"></div>
<p>16 punten, evenwichtig. Bied 4SA. Met 18-21 zou je direct 6SA bieden, omdat het totaal dan zelfs tegenover een minimale openaar 33 is; met 22 of meer bied je 7SA, omdat het totaal dan zelfs tegenover een minimum 37 is.</p>
<p>Na 2SA (20-21) toont 4SA 11-12 en vraagt het de openaar om met een maximum 6SA te bieden.</p>
<table>
<thead><tr><th>Antwoorder na</th><th>3SA</th><th>4SA (invite)</th><th>6SA</th><th>7SA</th></tr></thead>
<tbody>
<tr><td>1SA (15-17)</td><td>10-15</td><td>16-17</td><td>18-21</td><td>22+</td></tr>
<tr><td>2SA (20-21)</td><td>4-10</td><td>11-12</td><td>13-16</td><td>17+</td></tr>
</tbody>
</table>

<h3>Gerber</h3>
<p>Een sprong naar 4♣ direct na een 1SA- of 2SA-opening van partner (of na 2♣ – 2♦ – 2SA) vraagt naar azen:</p>
<table>
<thead><tr><th>Antwoord op 4♣</th><th>Azen</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 of 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4SA</td><td>3</td></tr>
</tbody>
</table>
<p>Na het antwoord vraagt 5♣ van de vrager op dezelfde manier naar heren (5♦ = 0 of 4, 5♥ = 1, 5♠ = 2, 5SA = 3). Elk ander bod bepaalt het contract; een bod van 4SA door de vrager is afsluitend, en als partner 4SA antwoordde, kan de vrager gewoon passen.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Partner opende 1SA: bied 4♥ (Texas)"></div>
<p>16 punten (samen 31-33) en zes sterke schoppen: de hand zit vol slagen, maar je hebt geen azen, dus de vraag is hoeveel azen er zijn. De bots spelen standaard Texas-transfers: bied 4♥, partner voltooit de transfer met 4♠, en je 4SA is dan Roman Key Card Blackwood, dat ook de heer en de vrouw van schoppen meetelt. Zonder Texas bied je 4♣, Gerber: na 4♠ (twee azen) pas je en speel je 4♠; na 4SA (drie azen) bied je 6♠.</p>

<h3>Welke gebruik je?</h3>
<ul>
<li>Gebruik de kwantitatieve 4SA als de vraag de <strong>kracht</strong> is: je weet niet zeker of de punten samen 33 halen.</li>
<li>Gebruik Gerber als de vraag de <strong>azen</strong> zijn: met een hand vol slagen (onevenwichtig), waarbij de kracht het probleem niet is. Met evenwichtige handen en samen 33+ punten kunnen er geen twee azen ontbreken, dus dan tel je gewoon punten.</li>
<li>Met een lange kleur tegenover 1SA bied je eerst een transfer (of bied je natuurlijk) om de kleur vast te leggen, en gebruik je daarna de slemmiddelen. Met een lange, sterke kleur is slagen tellen belangrijker dan punten tellen.</li>
</ul>
<div class="tip">Tel tot 33 voor klein slem in sans atout en tot 37 voor groot slem. Met een slagenbron, zoals een dichte vijf- of zeskaart, heb je iets minder nodig.</div>
<div class="warn">Verwar 1SA – 4SA (kwantitatief) niet met Blackwood. Wil je tegenover een SA-opening van partner iets over azen weten, bied dan 4♣.</div>
`,
    keyPoints: [
      '1SA – 4SA = 16-17, kwantitatief: de openaar biedt 6SA met een maximum.',
      '2SA – 4SA = 11-12, kwantitatief.',
      'Gerber 4♣ na 1SA of 2SA: 4♦ 0/4, 4♥ 1, 4♠ 2, 4SA 3; 5♣ vraagt daarna naar heren.',
      'Gebruik de kwantitatieve 4SA als de vraag de kracht is, Gerber als het om azen gaat.',
      'Slems in sans atout vragen ongeveer 33 punten (klein) of 37 (groot).',
    ],
    quiz: [
      {
        q: 'Partner opent 1SA en jij biedt 4♣ (Gerber). Partner heeft één aas. Wat is het antwoord?',
        options: ['4♦', '4♥', '4♠', '4SA'],
        answer: 1,
        explain: 'De antwoorden op Gerber gaan in stappen vanaf 4♦: 4♦ = 0 of 4, 4♥ = 1, 4♠ = 2, 4SA = 3.',
      },
      {
        q: 'Wat betekent 1SA – 4SA?',
        options: ['Blackwood', 'Een kwantitatieve invite voor 6SA met 16-17', 'Afsluiten', 'Gerber'],
        answer: 1,
        explain: 'Er is geen kleur afgesproken en partner bood natuurlijk sans atout, dus 4SA is een sleminvite. De openaar biedt 6SA met een maximum en past met een minimum.',
      },
      {
        q: 'Je opende 1SA met 17 punten. Partner verhoogt naar 4SA. Wat doe je?',
        options: ['Pas', 'Bied 5♥ om twee azen te tonen', 'Bied 6SA', 'Bied 5SA'],
        answer: 2,
        explain: '17 is de bovenkant van het bereik: 17 + 16-17 = 33-34. Accepteer de invite met 6SA.',
      },
      {
        q: 'Partner opent 2SA. Je hebt een evenwichtige hand met 12 punten. Wat bied je?',
        options: ['3SA', '4SA', '6SA', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Inviteer met 4SA (11-12); partner biedt 6SA met 21.',
      },
      {
        q: '1SA – 4♣ – 4♠ (twee azen). Je hebt geen azen. Wat bied je?',
        options: ['6SA', '4SA', '5♣', '7SA'],
        answer: 1,
        explain: 'Er ontbreken twee azen, dus in slem kun je de eerste twee slagen verliezen. 4SA na het antwoord op Gerber is afsluitend.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'De regel van 11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Hoe een uitkomst met de vierde van boven zowel de tegenspelers als de leider laat uitrekenen hoeveel hogere kaarten elke hand heeft.',
    body: `
<h3>De regel</h3>
<p>Als partner uitkomt met zijn <strong>vierde van boven</strong>, trek je de waarde van die kaart af van 11. De uitkomst is het aantal kaarten hoger dan de uitgekomen kaart in de <em>andere drie handen</em>: de dummy, jij en de leider. De dummy en je eigen hand kun je zien, dus kun je uitrekenen hoeveel hogere kaarten de leider heeft.</p>

<h3>Waarom het werkt</h3>
<p>Boven een kaart met waarde r staan 14 − r kaarten (de aas telt als 14). Is de uitkomst de vierde van boven, dan heeft de uitkomende speler er precies drie van. Dan blijven er 14 − r − 3 = 11 − r over voor de andere drie handen.</p>

<h3>Een voorbeeld in het tegenspel</h3>
<table>
<thead><tr><th>Hand</th><th>Ruiten</th></tr></thead>
<tbody>
<tr><td>Noord (dummy)</td><td>Q 10 4</td></tr>
<tr><td>West (partner, komt uit met de 7)</td><td>A J 9 7 5</td></tr>
<tr><td>Oost (jij)</td><td>K 8 2</td></tr>
<tr><td>Zuid (leider)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Tegen 3SA komt partner uit met ♦7. 11 − 7 = 4 kaarten hoger dan de 7 in de andere drie handen. De dummy heeft er twee (Q, 10) en jij hebt er twee (K, 8). De leider heeft er dus geen en kan de 7 niet overnemen.</p>
<p>Speelt de dummy laag, dan kun jij de 2 spelen en de 7 van partner de slag laten winnen. Partner blijft aan slag en speelt de kleur door, door de Q 10 van de dummy heen naar jouw K 8, en de tegenspelers maken alle ruitenslagen. Speel je in plaats daarvan de K, dan maken de Q 10 van de dummy een slag als de kleur wordt doorgespeeld.</p>

<h3>Ook de leider kan de regel gebruiken</h3>
<p>Stel dat West tegen jouw 3SA uitkomt met ♠7 (vierde van boven). De dummy heeft ♠A 10 5 en jij hebt ♠K 9 3. 11 − 7 = 4 hogere kaarten bij Noord, Oost en Zuid; je ziet ze alle vier (A, 10, K, 9). Oost heeft dus geen schoppen hoger dan de 7. Je kunt laag spelen uit de dummy en goedkoop winnen met de 9, terwijl de A en K als stops bewaard blijven.</p>

<h3>De laagste kaart toont de lengte</h3>
<p>Komt partner uit met de 2 als vierde van boven, dan kan hij geen vijfde kaart hebben die lager is: hij heeft precies vier kaarten in de kleur. Een uitkomst met de 3 terwijl je de 2 elders ziet, vertelt hetzelfde. Dat helpt je om de hand van de leider te tellen.</p>

<h3>Wanneer de regel niet werkt</h3>
<p>De regel van 11 geldt alleen voor echte uitkomsten met de vierde van boven. Hij geldt niet voor uitkomsten uit een reeks (de K uit KQJ), voor de hoogste van niets of een doubleton, en ook niet voor uitkomsten in de kleur van partner uit een honneur met kleine kaarten. Geeft de rekensom een onmogelijke uitkomst (de leider zou bijvoorbeeld een negatief aantal hogere kaarten moeten hebben), dan was de uitkomst niet de vierde van boven, en ook dat vertelt je iets.</p>
<div class="tip">Maak de aftreksom zodra de dummy op tafel komt, voordat de derde hand bijspeelt. Dan weet je meteen of je hoog moet spelen of de kaart van partner kunt laten winnen.</div>
<div class="warn">Pas de regel tegen troefcontracten niet mechanisch toe als partner misschien uit een korte kleur uitkomt. Gebruik hem als de uitkomst duidelijk de vierde van boven uit lengte is, en dat is meestal tegen sans atout.</div>
`,
    keyPoints: [
      'Bij een uitkomst met de vierde van boven is 11 min de waarde van de kaart = het aantal hogere kaarten in de andere drie handen.',
      'Trek af wat je in de dummy en in je eigen hand ziet om te weten hoeveel de leider er heeft.',
      'De leider kan dezelfde rekensom maken voor de handen van de tegenspelers.',
      'Een 2 als vierde van boven toont precies vier kaarten.',
      'De regel werkt alleen bij echte uitkomsten met de vierde van boven.',
    ],
    quiz: [
      {
        q: 'Partner komt uit met de 7, vierde van boven. Hoeveel kaarten hoger dan de 7 hebben de dummy, jij en de leider samen?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Er zijn zeven kaarten hoger dan de 7 (8, 9, 10, J, Q, K, A) en partner heeft er drie van.',
      },
      {
        q: 'Partner komt tegen 3SA uit met ♥6 (vierde van boven). De dummy heeft ♥K 9 3 en jij hebt ♥A 10 4. Hoeveel harten hoger dan de 6 heeft de leider?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. De dummy heeft er twee (K, 9) en jij hebt er twee (A, 10), dus de leider heeft er één.',
      },
      {
        q: 'Partner komt tegen 3SA uit met ♣2; jullie spelen vierde van boven. Hoeveel klaveren heeft partner?',
        options: ['Drie', 'Precies vier', 'Vijf of meer', 'Niet te zeggen'],
        answer: 1,
        explain: 'De 2 is de laagste kaart, dus er zit geen kaart onder: als vierde van boven toont hij precies vier klaveren.',
      },
      {
        q: 'Je bent leider in 3SA. West komt uit met ♠7 (vierde van boven). De dummy heeft ♠A 10 5 en jij hebt ♠K 9 3. Hoeveel schoppen hoger dan de 7 heeft Oost?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 hogere kaarten bij Noord, Oost en Zuid, en je ziet ze alle vier (A, 10, K, 9). Oost heeft er geen, dus je kunt goedkoop winnen met de 9.',
      },
      {
        q: 'Wanneer geldt de regel van 11 niet?',
        options: ['Tegen sans atout', 'Als de uitkomst niet de vierde van boven is, bijvoorbeeld de hoogste van een reeks', 'Als de dummy een honneur heeft', 'Als je een singleton hebt'],
        answer: 1,
        explain: 'De rekensom gaat ervan uit dat de uitkomende speler precies drie hogere kaarten heeft. Uitkomsten uit een reeks, de hoogste van niets en vergelijkbare uitkomsten voldoen daar niet aan.',
      },
    ],
  },
];
