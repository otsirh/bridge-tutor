// Lessen over bieden tegen de 1SA en de preëmpts van de tegenstanders, en over
// wat je doet als zij onze opening doubleren.
// Opmaakregels: zie src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Bieden over hun 1SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wanneer je de sterke 1SA van de tegenstanders doubleert of er overheen biedt, wanneer je buiten blijft, en hoe partner reageert.',
    body: `
<h3>Een sterke, precieze opening</h3>
<p>Als een tegenstander 1SA opent, toont hij 15-17 punten en een evenwichtige hand. Dan blijven er hooguit 25 punten over voor de andere drie spelers, en de partner van de openaar weet bijna precies wat zijn kant heeft. Jullie hebben zelden een manche, dus je biedt om een van twee redenen: met een sterke hand om ze voor straf te doubleren, met een lange kleur om te strijden om de deelscore. Een bod op 2-niveau neemt ze bovendien Stayman en transfers af.</p>

<h3>Wat de bots spelen</h3>
<table>
<thead><tr><th>Bod over 1SA</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>Doublet</td><td>15+ punten, elke verdeling: voor straf. Partner past</td></tr>
<tr><td>2♣ / 2♦</td><td>Natuurlijk: 8-15 punten en een zes- of langere kaart</td></tr>
<tr><td>2♥ / 2♠</td><td>Natuurlijk: 8-15 punten en een zeskaart, of een goede vijfkaart (twee van de drie hoogste honneurs of drie van de vijf hoogste)</td></tr>
<tr><td>Pas</td><td>Al het andere</td></tr>
</tbody>
</table>
<p>De kleur die je biedt moet je langste zijn. Sprongen en 2SA worden niet gebruikt.</p>
<p>Wedstrijdspelers gebruiken hier vaak een conventie waarmee ze ook tweekleurenhanden kunnen tonen: Landy en Cappelletti gebruiken 2♣ of 2♦ voor beide hoge kleuren, en DONT gebruikt het doublet voor elke eenkleurenhand. Ze zijn de moeite waard zodra je een vaste partner hebt. De bots spelen de natuurlijke methode hierboven, en de tutor beoordeelt je biedingen daarnaar.</p>

<h3>Voorbeelden</h3>
<p>West heeft 1SA geopend en jij zit Noord, in de directe positie.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1SA – ?: bied 2♠"></div>
<p>10 punten en zes sterke schoppen: doe mee. Partner weet wat je hebt en kan met steun verhogen.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1SA – ?: bied 2♠"></div>
<p>Slechts vijf schoppen, maar K-Q-10-9 is een goede kleur, en een hoge kleur: een bod op 2-niveau waard.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1SA – ?: bied 2♦"></div>
<p>13 punten en zes ruiten. Een lage kleur vraagt zes kaarten.</p>

<h3>Het strafdoublet</h3>
<p>Een doublet van 1SA toont 15+ punten, evenveel als de openaar. Jullie hebben minstens de helft van de punten, de openaar moet vaak met een zwakke dummy spelen, en in de directe positie kom jij uit, met je goede hand. Partner past, wat hij ook heeft: in dit systeem is het doublet voor straf, en partner laat het staan.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1SA – ?: doublet"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1SA – ?: doublet"></div>
<p>De eerste hand is het klassieke strafdoublet: 17 punten en niets te bieden. De tweede doubleert ook: met 15+ punten doubleren de bots met elke verdeling, in plaats van 2♠ te bieden. De schoppen maken ook in de verdediging slagen, want jij komt ermee uit.</p>

<h3>Wanneer je buiten blijft</h3>
<ul>
<li><strong>Een evenwichtige hand met minder dan 15 punten.</strong> Ook 13 of 14 is niet genoeg om te doubleren, en er is niets te bieden.</li>
<li><strong>Een lage vijfkaart, of een zwakke hoge vijfkaart.</strong> Op 2-niveau kunnen de tegenstanders je doubleren, en een lage kleur vraagt zes kaarten.</li>
<li><strong>Beide hoge kleuren maar geen lange kleur.</strong> Voor deze handen bestaan conventies als Landy en Cappelletti; met natuurlijke methoden pas je.</li>
<li><strong>Minder dan 8 punten</strong>, zelfs met een lange kleur.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1SA – ?: pas"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1SA – ?: pas"></div>
<p>De eerste hand heeft 13 punten maar alleen een lage vijfkaart. De tweede heeft vijf schoppen, maar Q-8-6-5-2 is geen kleur om op 2-niveau te bieden tegenover een partner die misschien niets heeft.</p>
<div class="tip">Passen is vaak het beste bod. Een 1SA-openaar met een zwakke dummy gaat vaker down dan je denkt, en zolang je past kan niemand je doubleren.</div>

<h3>In de balanspositie</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Als 1SA door twee passen wordt gevolgd, is de partner van de openaar zwak, dus heeft jouw partner wat waarden. Leen een heer: de bots doubleren met <strong>12+ punten</strong> (nog steeds voor straf) en bieden een kleur met <strong>5-12 punten</strong>, met dezelfde eisen aan de kleur als in de directe positie.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1SA – pas – pas – ?: bied 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1SA – pas – pas – ?: doublet"></div>
<p>Met maar 6 punten zou de eerste hand in de directe positie passen, maar in de balanspositie is een goede hoge vijfkaart genoeg. De tweede, 14 punten en evenwichtig, doubleert: partner past en jullie verdedigen 1SA gedoubleerd.</p>

<h3>Het antwoord van partner</h3>
<p>Na het doublet van partner pas je: het is voor straf. Na een volgbod op 2-niveau in een hoge kleur reageren de bots zo:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Bod van de partner van de volgbieder</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>3♥ (verhoging)</td><td>Driekaartsteun en 6-12 punten (steunpunten tellen mee). De volgbieder biedt alleen manche met een maximum, ongeveer 15 punten</td></tr>
<tr><td>4♥</td><td>Steun en 13+ punten, of vijf troeven en een singleton</td></tr>
<tr><td>2♠ (nieuwe kleur)</td><td>Een goede vijf- of langere kaart en 8+ punten; niet forcing</td></tr>
<tr><td>2SA / 3SA</td><td>Geen fit: 12-14 punten, inviterend / 15+ punten</td></tr>
<tr><td>Pas</td><td>Al het andere, ook een misfit met een lange lage kleur</td></tr>
</tbody>
</table>
<p>De tegenstanders hebben geen eigen kleur om te cuebidden, dus is er geen cuebid-verhoging: de verhoging naar 3♥ dekt zowel de competitieve als de uitnodigende handen. Na een volgbod op 2-niveau in een lage kleur vraagt een verhoging vierkaartsteun.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="West opent 1SA; Noord volgt met 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Noord heeft 11 punten en zes goede harten: een natuurlijk 2♥. Zuid verhoogt met drie troeven en 7 punten naar 3♥. Met negen troeven samen is het 3-niveau veilig genoeg (de wet van het totaal aantal slagen), en de verhoging maakt het Oost-West, die meer dan de helft van de punten hebben, moeilijker om hun eigen deelscore te vinden. Noord heeft niets extra en past.</p>
<div class="warn">Bied niet over 1SA met een zwakke kleur alleen omdat je 12 of 13 punten hebt: zonder goede kleur zijn die punten meer waard in de verdediging.</div>
`,
    keyPoints: [
      'Over hun 1SA toont een doublet 15+ punten met elke verdeling en is het voor straf: partner past.',
      'Kleurbiedingen op 2-niveau zijn natuurlijk: 8-15 punten en een zeskaart, of een goede hoge vijfkaart.',
      'Blijf buiten met evenwichtige handen onder 15 punten, lage vijfkaarten en zwakke hoge vijfkaarten.',
      'Leen in de balanspositie een heer: doublet met 12+, een kleur met 5-12.',
      'Antwoord op een hoge kleur: verhoog naar drie met 6-12 en steun, manche met 13+.',
    ],
    quiz: [
      {
        q: 'Je rechtertegenstander opent 1SA (15-17). Je hebt ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 punten). Wat bied je?',
        options: ['Pas', 'Doublet', '2♦', '2SA'],
        answer: 1,
        explain: 'Met 15+ punten heb je evenveel als de openaar: doubleer voor straf. Partner past, en 1SA gedoubleerd zou down moeten gaan.',
      },
      {
        q: 'Je rechtertegenstander opent 1SA. Je hebt ♠A83 ♥K4 ♦KQ852 ♣J84 (13 punten). Wat bied je?',
        options: ['2♦', 'Doublet', 'Pas', '2SA'],
        answer: 2,
        explain: 'Een bod op 2-niveau in een lage kleur vraagt zes kaarten, en een doublet vraagt 15+ punten. Pas en verdedig.',
      },
      {
        q: 'Je rechtertegenstander opent 1SA. Je hebt ♠KQJ974 ♥83 ♦A52 ♣84 (10 punten). Wat bied je?',
        options: ['Pas', 'Doublet', '2♠', '3♠'],
        answer: 2,
        explain: 'Zes sterke schoppen en 8-15 punten: een natuurlijk 2♠. Een doublet zou 15+ punten tonen, en sprongen worden over 1SA niet gebruikt.',
      },
      {
        q: 'Je linkertegenstander opent 1SA, partner volgt met 2♥ en je rechtertegenstander past. Je hebt ♠Q852 ♥Q73 ♦K84 ♣962 (7 punten). Wat bied je?',
        options: ['Pas', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Driekaartsteun en 6-9 punten: verhoog naar 3♥. Met negen troeven is het 3-niveau veilig genoeg. 3♣ zou een klaverenkleur tonen, en 4♥ vraagt 13+.',
      },
      {
        q: '1SA links van je, dan pas, pas. Je hebt ♠KQ1095 ♥83 ♦952 ♣J84 (6 punten). Wat bied je?',
        options: ['Pas', 'Doublet', '2♠', '3♠'],
        answer: 2,
        explain: 'In de balanspositie bieden de bots een goede hoge vijfkaart met 5-12 punten: partner moet wat waarden hebben. Een doublet zou 12+ punten tonen en is voor straf.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Bieden over preëmpts',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Hoe je doubleert, volgt of sans atout biedt als de tegenstanders openen met een zwakke twee of een preëmpt op 3-niveau, en hoe partner reageert.',
    body: `
<h3>Het plan van de preëmptieve bieder</h3>
<p>Een zwakke twee of een preëmpt op 3-niveau neemt je de ruimte af die je nodig hebt om je beste contract te vinden. De preëmptieve bieder koos het niveau met de regel van 2-3-4: hij accepteert gedoubleerd twee down als hij kwetsbaar is tegen niet kwetsbaar, drie bij gelijke kwetsbaarheid en vier als hij niet kwetsbaar is tegen kwetsbaar, omdat dat ongeveer kost wat jullie manche zou opleveren. Vanaf jouw kant van de tafel vertelt de regel je twee dingen:</p>
<ul>
<li><strong>Reken niet op een grote straf.</strong> Zelfs gedoubleerd verliezen ze ongeveer wat jullie manche waard is. Heb je een manche, bied hem dan.</li>
<li><strong>Hun kwetsbaarheid vertelt je hoe zwak ze kunnen zijn.</strong> Niet kwetsbaar tegen kwetsbaar kan een preëmpt heel zwak zijn, dus heeft partner eerder waarden; kwetsbaar tegen niet kwetsbaar belooft hij meer.</li>
</ul>
<p>Hoe dan ook moet je meteen en op hoog niveau handelen, vaak zo dat partner op 3-niveau moet antwoorden. Je hebt dus echte waarden nodig. De eisen van de bots hieronder zijn bij elke kwetsbaarheid hetzelfde.</p>

<h3>Over een zwakke twee</h3>
<p>Je rechtertegenstander heeft 2♦, 2♥ of 2♠ geopend:</p>
<table>
<thead><tr><th>Bod</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>Doublet</td><td>Informatief: 13+ punten, hooguit twee kaarten in hun kleur en minstens drie in elke andere kleur (een doubleton in een ongeboden lage kleur mag met vier kaarten in elke ongeboden hoge kleur); of elke hand met 17+ punten</td></tr>
<tr><td>2SA</td><td>15-18 punten, evenwichtig, met een stop in hun kleur</td></tr>
<tr><td>Een kleur</td><td>13-17 punten en een goede vijf- of langere kaart (twee van de drie hoogste honneurs of drie van de vijf hoogste), je langste ongeboden kleur</td></tr>
<tr><td>Pas</td><td>Al het andere</td></tr>
</tbody>
</table>
<p>Met een goede zeskaart volg je in plaats van te doubleren. Vergelijk die 13 punten met de 8 die genoeg zijn voor een volgbod op 1-niveau: partner moet je doublet misschien zonder iets op 3-niveau beantwoorden, en je volgbod zit al op 2- of 3-niveau. Zwakke sprongvolgbiedingen en de Michaels-cuebid worden over een preëmpt niet gebruikt.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: doublet"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: bied 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: bied 2SA"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: pas"></div>
<p>De eerste hand is het ideale doublet: 13 punten, een singleton harten en steun voor elke andere kleur. De tweede heeft een goede zeskaart: bied die. De derde is evenwichtig, met 16 punten en de harten gestopt. De vierde heeft de perfecte verdeling maar slechts 10 punten: te weinig om partner naar 3-niveau te dwingen. Met lengte in hun kleur, zoals ♠K4 ♥AQ1093 ♦K83 ♣J106, pas je ook: een doublet zou partner vragen te bieden, en 2SA vraagt 15 punten.</p>
<div class="tip">In de balanspositie (2♥ – pas – pas – ?) vraagt een volgbod maar 10 punten, maar een doublet nog steeds 13.</div>

<h3>Over een preëmpt op 3-niveau</h3>
<table>
<thead><tr><th>Bod</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>Doublet</td><td>Informatief: 14+ punten en dezelfde verdeling als over een zwakke twee, of elke hand met 17+ punten</td></tr>
<tr><td>3SA</td><td>16-21 punten met een stop in hun kleur, om te spelen. Het kan een lange, doorlopende lage kleur zijn in plaats van een evenwichtige hand</td></tr>
<tr><td>Een kleur op 3-niveau</td><td>13-17 punten en een goede vijf- of langere kaart</td></tr>
<tr><td>Pas</td><td>Al het andere</td></tr>
</tbody>
</table>
<p>Elk niveau hoger vraagt het doublet iets meer. Over een preëmpt op 4-niveau vraagt het 15+ punten, en partner laat het meestal staan, tenzij hij een lange kleur en verdeling heeft.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: doublet"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: bied 3SA"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: bied 3♠"></div>
<p>De eerste hand heeft 14 punten en de juiste verdeling: doublet. Met de ♦K in plaats van de ♦A (13 punten) zouden de bots passen. De tweede biedt 3SA: de ruiten lopen, en de ♥K zou de harten moeten stoppen, want de uitkomst komt van Oost en West, die de lange harten heeft, speelt vóór jou. De derde biedt zijn goede zeskaart.</p>

<h3>Antwoorden op het doublet van partner</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>Het doublet van partner vraagt je te bieden, en dat moet je ook, hoe zwak je ook bent. Toon je kracht met het niveau:</p>
<table>
<thead><tr><th>Jouw hand</th><th>Bod</th></tr></thead>
<tbody>
<tr><td>0-8 punten</td><td>Je beste kleur op het laagste niveau, eerst een hoge vierkaart</td></tr>
<tr><td>9-11 punten</td><td>Een sprong in je beste kleur als de sprong nog op 3-niveau ligt (hier 3♠). Met vier kaarten in een ongeboden hoge kleur die je pas op 3-niveau zou kunnen bieden, in plaats daarvan de manche in die kleur (over 2♠: 4♥). Anders 2SA met 11 punten en een stop in hun kleur, of je beste kleur op het laagste niveau</td></tr>
<tr><td>10-11 punten en vijf of meer schoppen</td><td>4♠</td></tr>
<tr><td>12+ punten</td><td>3♥, de cuebid: manchforcing. Met 13-16, een evenwichtige of half-evenwichtige hand en een hartenstop in plaats daarvan 3SA</td></tr>
<tr><td>Vijf sterke harten (drie honneurs) en 8+ punten</td><td>Pas: het doublet wordt een strafdoublet</td></tr>
</tbody>
</table>
<p>Over een preëmpt op 3-niveau is er geen ruimte om te springen: met 9-11 punten en vier of meer kaarten in een ongeboden hoge kleur bied je de manche in die kleur; anders je beste kleur op het laagste niveau, 3SA met 13-16, een evenwichtige of half-evenwichtige hand en een stop, of de cuebid met 12+. De doubleerder past een antwoord op het laagste niveau met een minimum, en verhoogt alleen met extra waarden.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="West opent 2♥; Noord doubleert."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Zuid heeft 9 punten en vier schoppen: een sprong naar 3♠ waard, want een antwoord van 2♠ kan ook met niets gegeven worden. Noord, met 13 punten, vier troeven en een singleton harten (16 steunpunten voor schoppen), neemt de invitatie aan. Op een antwoord van 2♠ had Noord alleen met 3♠ geïnviteerd.</p>

<h3>Antwoorden op een sans-atoutvolgbod</h3>
<p>Na 2SA van partner over een zwakke twee (15-18): bied 3SA met 10+ punten; met een hoge zeskaart de manche met 9+ punten of drie in die kleur met 6-8 om te inviteren; met een zwakkere hand en een vijfkaart bied je die op 3-niveau om te spelen; anders pas je. Stayman en transfers worden hier niet gebruikt. Na 3SA van partner over een preëmpt op 3-niveau (16-21) passen de bots met de meeste handen: ze bieden vier in een hoge zeskaart met 9+ punten, en met 12+ punten zoeken ze slem. 4SA is een kwantitatieve invitatie met 12-14 punten, en 6SA bieden ze met 15+.</p>
<div class="warn">Doubleer een preëmpt niet voor straf omdat je een paar hoge kaarten in hun kleur hebt: het doublet van de bots is informatief. Met lengte in hun kleur pas je en wacht je op het doublet van partner; met lange, sterke troeven kun je dat doublet dan voor straf laten staan.</div>
`,
    keyPoints: [
      'Over een zwakke twee vragen een doublet (13+, kort in hun kleur) en een volgbod (13-17, goede kleur) echte waarden; 2SA toont 15-18 evenwichtig met een stop.',
      'Over een preëmpt op 3-niveau vraagt het doublet 14+; 3SA toont 16-21 met een stop, om te spelen.',
      'Met een goede zeskaart volg je; met 17+ punten en elke verdeling doubleer je eerst.',
      'Partner moet bieden: laagste niveau met 0-8, een sprong met 9-11 als die nog op 3-niveau ligt (manche in een hoge vierkaart die pas op 3-niveau past), de cuebid met 12+; passen alleen met sterke troeven.',
      'De preëmptieve bieder rekent op twee tot vier down gedoubleerd: heb je een manche, bied hem dan in plaats van op een grote straf te hopen.',
    ],
    quiz: [
      {
        q: 'Je rechtertegenstander opent 2♥. Je hebt ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 punten). Wat bied je?',
        options: ['Pas', 'Doublet', '2♠', '2SA'],
        answer: 1,
        explain: 'Kort in harten, steun voor elke andere kleur en 13 punten: een informatiedoublet. 2♠ zou een goede vijfkaart beloven.',
      },
      {
        q: 'Je rechtertegenstander opent 2♠. Je hebt ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 punten). Wat bied je?',
        options: ['Doublet', '2SA', '3SA', 'Pas'],
        answer: 1,
        explain: 'Evenwichtig, 15-18, met een schoppenstop: 2SA. Een doublet zou partner vragen een kleur te bieden, en je bent niet kort in schoppen.',
      },
      {
        q: 'Je rechtertegenstander opent 3♥. Je hebt ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 punten). Wat bied je?',
        options: ['Doublet', '4♦', '3SA', 'Pas'],
        answer: 2,
        explain: '3SA over een preëmpt op 3-niveau toont 16-21 met een stop en is om te spelen. Je ruiten lopen, en de ♥K zit goed achter de preëmptieve bieder.',
      },
      {
        q: 'Je linkertegenstander opent 2♥, partner doubleert en je rechtertegenstander past. Je hebt ♠K963 ♥874 ♦A52 ♣Q84 (9 punten). Wat bied je?',
        options: ['2♠', '3♠', '4♠', '2SA'],
        answer: 1,
        explain: '9-11 punten met vier schoppen: spring naar 3♠ om manche te inviteren. 2♠ kan ook met niets geboden worden, en 2SA zou een hartenstop beloven.',
      },
      {
        q: 'Je linkertegenstander opent 2♥, partner doubleert en je rechtertegenstander past. Je hebt ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 punten). Wat bied je?',
        options: ['2SA', '3♣', 'Pas', '3♦'],
        answer: 2,
        explain: 'Vijf sterke harten en 8+ punten: pas, en het informatiedoublet van partner wordt een strafdoublet. Je harten zitten achter de openaar en maken slagen.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Als zij ons doubleren',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wat de antwoorder doet na een informatiedoublet op de opening van partner (redoublet, Jordan 2SA, verhogingen, nieuwe kleuren, 1SA), en hoe je vlucht als de 1SA van partner wordt gedoubleerd.',
    body: `
<h3>De opening van partner wordt gedoubleerd</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Partner opent 1♥ en je rechtertegenstander geeft een informatiedoublet: openingskracht, kort in harten, steun voor de andere kleuren. Het doublet geeft je nieuwe manieren om je hand te beschrijven, en die heb je nodig: de partner van de doubleerder gaat zo bieden, misschien met een sprong, en de openaar moet meteen weten of jullie een fit hebben en wie de meeste kracht heeft.</p>

<h3>Wat de bots spelen</h3>
<p>Na 1♥ of 1♠ – doublet kiezen de bots het eerste van deze biedingen dat past:</p>
<table>
<thead><tr><th>Bod</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>2SA (Jordan)</td><td>Kunstmatig: vier of meer troeven en 10+ steunpunten, een inviterende verhoging of beter</td></tr>
<tr><td>Redoublet</td><td>10+ punten, meestal zonder fit (hooguit drie troeven)</td></tr>
<tr><td>Sprongverhoging (1♥ – X – 3♥)</td><td>Preëmptief: vier of meer troeven en minder dan 10 punten</td></tr>
<tr><td>Gewone verhoging (1♥ – X – 2♥)</td><td>Drie troeven en 6-10 steunpunten (met vier spring je of bied je 2SA)</td></tr>
<tr><td>1♠ over 1♥</td><td>Vier of meer schoppen en 6+ punten; forcing</td></tr>
<tr><td>1SA</td><td>6-9 punten en geen van de biedingen hierboven</td></tr>
<tr><td>Pas</td><td>Een zwakke hand</td></tr>
</tbody>
</table>
<p>Let op wat er ontbreekt: een nieuwe kleur op 2-niveau. Na het doublet bieden de bots die nooit. Met 10+ punten redoubleren ze, met minder bieden ze 1SA of passen ze.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2SA"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: redoublet"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1SA"></div>
<p>De eerste hand heeft vier troeven en 11 steunpunten: Jordan 2SA. De tweede heeft 10 punten en geen fit: redoublet. De derde springt met vijf troeven en 6 punten naar 3♥ om de tegenstanders ruimte af te nemen; zij hebben vast een eigen fit. De vierde verhoogt gewoon met drie troeven. De vijfde toont zijn schoppen op 1-niveau. De zesde heeft 8 punten en verder niets te zeggen: 1SA.</p>
<div class="tip">De preëmptieve sprongverhoging werkt het best meteen, voordat de partner van de doubleerder goedkoop kan bieden. Met vier troeven en een zwakke hand neem je ze de ruimte af.</div>

<h3>Na een opening in een lage kleur</h3>
<p>Na 1♣ of 1♦ – doublet is er geen Jordan 2SA: met 10+ punten redoubleer je. Een opening van 1♣ of 1♦ kan maar drie kaarten lang zijn, dus vragen de verhogingen meer troeven: vier voor de gewone verhoging, vijf voor de preëmptieve sprongverhoging. Met een hoge vierkaart en 6+ punten bied je die op 1-niveau, met allebei eerst harten.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>Na het redoublet</h3>
<p>Het redoublet zegt dat het spel van jullie kant is. De openaar past normaal en laat het probleem aan de tegenstanders: zij moeten een plek vinden om te spelen, en de partner van de doubleerder, die misschien niets heeft, biedt alleen met een vijfkaart. De openaar biedt meteen alleen met een minimum (hooguit 13 punten) en een zeskaart, die slecht verdedigt. Als de tegenstanders in een kleur belanden, biedt de redoubleerder de manche als hij de waarden ervoor heeft, ongeveer 12+ punten tegenover de opening. Met 10-11 punten en vier kaarten in hun kleur met twee van de drie hoogste honneurs doubleert de redoubleerder hen in plaats daarvan: na een redoublet is een doublet van jullie kant een strafdoublet.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AJ94 C:KJ1062" data-s="S:J1093 H:K6 D:Q53 C:AQ97" data-w="S:8742 H:109732 D:86 C:53" data-caption="Noord opent 1♥ en Oost doubleert."></div>
<div class="auction" data-calls="1H X XX P P 2C 3NT P P P" data-dealer="N"></div>
<p>Zuid heeft 12 punten en maar twee harten: redoublet. West heeft niets en geen vijfkaart, dus past hij; Noord past ook, en Oost moet een kleur op 2-niveau kiezen. Zuid heeft 12 punten tegenover een opening en twee stops in klaveren, en biedt 3SA, dat bij het beste spel negen slagen maakt.</p>

<h3>Jordan 2SA in actie</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Noord opent 1♥ en Oost doubleert."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Zuid heeft vier troeven en 12 steunpunten: Jordan 2SA, een inviterende verhoging of beter. Noord heeft met 14 punten en een vijfkaart meer dan een minimum en biedt de manche. Met een minimum zou Noord alleen 3♥ bieden.</p>

<h3>Als onze 1SA wordt gedoubleerd</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>Een doublet van de 1SA van partner is voor straf. De keuzes van de antwoorder:</p>
<table>
<thead><tr><th>Bod</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>Redoublet</td><td>8+ punten: met de 15-17 van partner hebben jullie de meeste kracht, en het zijn de tegenstanders die in de problemen zitten</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Om te spelen: 0-7 punten en vijf of meer kaarten in de kleur, je langste</td></tr>
<tr><td>Pas</td><td>Elke andere hand</td></tr>
</tbody>
</table>
<p>Na het doublet gelden Stayman en transfers niet meer: 2♣ toont klaveren en 2♦ toont ruiten. Met een zwakke hand kan 1SA gedoubleerd veel kosten, terwijl twee in je lange kleur veel beter speelt.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1SA – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1SA – X – ?: redoublet"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1SA – X – ?: pas"></div>
<p>De eerste hand vlucht naar zijn vijf ruiten. De tweede heeft 8 punten: redoublet. De derde heeft geen vijfkaart, dus past hij en laat het aan partner over. Na het redoublet past de openaar: de tegenstanders moeten een plek vinden om te spelen.</p>
<div class="warn">Bied na 1♥ – doublet met een zwakke hand geen nieuwe kleur op 2-niveau: dat hoort niet bij het systeem. Met 10+ punten redoubleer je eerst; met minder bied je 1SA of pas je.</div>
`,
    keyPoints: [
      'Na een informatiedoublet op 1♥ of 1♠ toont 2SA (Jordan) vier troeven en 10+ steunpunten; een redoublet toont 10+ punten, meestal zonder fit.',
      'De sprongverhoging is preëmptief (vier troeven voor een hoge kleur, vijf voor een lage, minder dan 10 punten); de gewone verhoging toont 6-10 met steun.',
      'Een hoge kleur op 1-niveau toont vier of meer kaarten en 6+ punten en is forcing; 1SA toont 6-9 zonder ander passend bod.',
      'Na het redoublet past de openaar meestal en laat hij de tegenstanders een contract zoeken; de redoubleerder biedt daarna de manche met manchewaarden, of doubleert hen met een sterke lengte in hun kleur.',
      'Als de 1SA van partner wordt gedoubleerd, redoubleer je met 8+; met een zwakke hand en een vijfkaart bied je die op 2-niveau (natuurlijk, zonder Stayman of transfers).',
    ],
    quiz: [
      {
        q: 'Partner opent 1♥ en je rechtertegenstander doubleert. Je hebt ♠K74 ♥Q962 ♦A1053 ♣J4 (10 punten). Wat bied je?',
        options: ['Redoublet', '3♥', '2SA', '2♥'],
        answer: 2,
        explain: 'Vier troeven en 11 steunpunten: Jordan 2SA toont meteen een inviterende verhoging of beter. Een redoublet zou meestal vier troeven ontkennen, en 3♥ zou preëmptief zijn.',
      },
      {
        q: 'Partner opent 1♥ en je rechtertegenstander doubleert. Je hebt ♠K74 ♥Q9862 ♦5 ♣J1043 (6 punten). Wat bied je?',
        options: ['2♥', '3♥', '4♥', 'Pas'],
        answer: 1,
        explain: 'Vijf troeven, een singleton en minder dan 10 punten: de preëmptieve sprongverhoging. Die neemt de partner van de doubleerder de ruimte af die hij nodig heeft.',
      },
      {
        q: 'Partner opent 1♥ en je rechtertegenstander doubleert. Je hebt ♠AQ74 ♥62 ♦KJ53 ♣984 (10 punten). Wat bied je?',
        options: ['1♠', 'Redoublet', '2♦', '1SA'],
        answer: 1,
        explain: '10+ punten zonder fit: redoublet. Het vertelt partner dat het spel van jullie kant is; de openaar past meestal en laat het aan de tegenstanders over om een contract te vinden.',
      },
      {
        q: 'Partner opent 1♦ en je rechtertegenstander doubleert. Je hebt ♠KJ74 ♥Q962 ♦53 ♣J43 (7 punten). Wat bied je?',
        options: ['1♥', '1♠', '1SA', 'Pas'],
        answer: 0,
        explain: 'Met vier kaarten in elke hoge kleur en 6+ punten bied je eerst harten, op 1-niveau. 1♥ is forcing, dus kun je de schoppen later nog tonen als het nodig is.',
      },
      {
        q: 'Partner opent 1SA en je rechtertegenstander doubleert. Je hebt ♠Q74 ♥62 ♦J9853 ♣932 (3 punten). Wat bied je?',
        options: ['Pas', '2♣', '2♦', 'Redoublet'],
        answer: 2,
        explain: 'Een zwakke hand met vijf ruiten: vlucht naar 2♦, dat na het doublet natuurlijk is en geen transfer. 2♣ zou klaveren tonen, en een redoublet 8+ punten.',
      },
    ],
  },
];
