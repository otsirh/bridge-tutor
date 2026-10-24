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
    summary: 'De moderne 4SA: vragen naar de vier azen en de troefheer, daarna naar de troefvrouw en de heren buiten troef, zodat je de slems biedt die gemaakt worden en stopt als er twee sleutelkaarten ontbreken.',
    body: `
<h3>Vijf sleutelkaarten</h3>
<p>Gewone Blackwood telt azen, maar de heer en de vrouw van troef zijn net zo belangrijk: een slem zonder een aas en de troefheer is net zo kansloos als een slem zonder twee azen. <strong>Roman Key Card Blackwood</strong> (RKCB) behandelt de troefheer als een vijfde aas. Zodra er een kleur is afgesproken, vraagt 4SA naar de <strong>vijf sleutelkaarten</strong> (key cards): de vier azen en de troefheer. De antwoorden vertellen je ook iets over de troefvrouw.</p>
<p>De troefkleur is de afgesproken kleur; als er geen kleur is afgesproken, is het de laatste kleur die jullie kant natuurlijk heeft geboden. De bots in deze app spelen standaard RKCB (in de systeeminstellingen kun je terugschakelen naar gewone Blackwood).</p>

<h3>De antwoorden (1430)</h3>
<table>
<thead><tr><th>Antwoord</th><th>Sleutelkaarten</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 of 4</td></tr>
<tr><td>5♦</td><td>0 of 3</td></tr>
<tr><td>5♥</td><td>2, zonder de troefvrouw</td></tr>
<tr><td>5♠</td><td>2, met de troefvrouw</td></tr>
</tbody>
</table>
<p>De naam "1430" komt van de eerste twee antwoorden: 5♣ toont één of vier, 5♦ nul of drie. De vrager kan bijna altijd zien welke van de twee het is. Tel je eigen sleutelkaarten, en denk aan wat partner heeft getoond: een partner die opende en sterk verhoogde, kan geen nul sleutelkaarten hebben, want buiten jouw hand zijn er niet genoeg andere hoge kaarten om aan die punten te komen.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Schoppen afgesproken; partner biedt 4SA: antwoord 5♥"></div>
<p>Twee sleutelkaarten, de ♥A en de ♠K, maar niet de ♠Q: 5♥.</p>

<h3>Na het antwoord</h3>
<ul>
<li><strong>Twee sleutelkaarten ontbreken</strong>, of één en de troefvrouw: sluit af in vijf in de troefkleur. Partner moet passen.</li>
<li><strong>Eén ontbreekt</strong> en de vrouw is van jullie: bied klein slem.</li>
<li><strong>Geen enkele ontbreekt</strong>: bied klein slem, of zoek naar groot slem.</li>
</ul>
<p>De vrager is de kapitein. Zodra partner heeft geantwoord, beslist de vrager, en partner past op het afsluitende bod of op het slem.</p>

<h3>De vraag naar de troefvrouw</h3>
<p>Na 5♣ of 5♦ is de troefvrouw nog onbekend. Doet die ertoe, dan biedt de vrager de <strong>volgende stap</strong>, met de troefkleur overgeslagen: 5♦ na 5♣, 5♥ na 5♦. Partner antwoordt:</p>
<ul>
<li>zonder de vrouw: terug naar de troefkleur op het laagste niveau;</li>
<li>met de vrouw: zes in de troefkleur (of 5SA, als zes in de troefkleur het antwoord "geen vrouw" zou zijn).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Noord opent 2♣ en Zuid toont een goede vijfkaart schoppen."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Noord heeft alle vier de azen, dus 5♣ van Zuid toont één sleutelkaart: de ♠K. Alle sleutelkaarten zijn aanwezig, maar voor zover Noord weet de ♠Q niet, dus Noord vraagt met 5♦. 5♠ van Zuid ontkent de vrouw, en Noord houdt het bij 6♠: een groot slem zonder de troefvrouw zou een gelukkige verdeling nodig hebben.</p>

<h3>Naar heren vragen</h3>
<p>Als alle vijf de sleutelkaarten en de troefvrouw aanwezig zijn en groot slem mogelijk is, biedt de vrager <strong>5SA</strong> om naar de heren buiten troef te vragen (de troefheer is al meegeteld): 6♣ = geen, 6♦ = één, 6♥ = twee, 6♠ = drie. 5SA belooft dat er niets ontbreekt, dus partner mag met extra slagen groot slem bieden.</p>

<h3>Een volledig voorbeeld</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P P P" data-dealer="N"></div>
<p>Noord springt met vierkaartsteun en 19+ punten naar 4♥. Zuid heeft 17 punten en een slagenbron in de ruiten, dus slem is waarschijnlijk. 5♣ toont één of vier sleutelkaarten. Zuid heeft alleen de ♣A, en de sterke verhoging van Noord is zonder azen niet mogelijk, dus het zijn er vier. Er blijft één vraag over, de ♥Q, en die stelt 5♦. Noord heeft haar en biedt 6♥, en Zuid past: er ontbreekt niets, maar er is geen dertiende slag waarop je kunt rekenen.</p>
<div class="tip">Zorg er voordat je 4SA biedt voor dat het antwoord je niet voorbij het gewenste contract kan brengen. Met klaveren of ruiten als troef heb je na een antwoord van 5♥ of 5♠ geen manier meer om op 5-niveau te stoppen, dus je moet weten dat er geen twee sleutelkaarten kunnen ontbreken.</div>
<div class="warn">RKCB vraagt een afgesproken troefkleur. Na een natuurlijk SA-bod van partner is 4SA kwantitatief. Met een renonce kan RKCB je niet vertellen of de sleutelkaarten van partner bruikbaar zijn: geef dan een cuebid.</div>
`,
    keyPoints: [
      'RKCB vraagt naar vijf sleutelkaarten: de vier azen en de troefheer.',
      'Antwoorden (1430): 5♣ 1 of 4, 5♦ 0 of 3, 5♥ 2 zonder de troefvrouw, 5♠ 2 met de troefvrouw.',
      'Ontbreken er twee sleutelkaarten (of één en de vrouw): stop op vijf. Ontbreekt er één: bied klein slem.',
      'Na 5♣ of 5♦ vraagt de volgende stap naar de troefvrouw; zonder vrouw gaat partner terug naar de troefkleur.',
      '5SA vraagt daarna naar de heren buiten troef en belooft alle sleutelkaarten en de troefvrouw.',
    ],
    quiz: [
      {
        q: 'Harten is afgesproken en partner biedt 4SA (RKCB). Je hebt ♠A72 ♥K965 ♦Q84 ♣J53. Wat antwoord je?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Twee sleutelkaarten, de ♠A en de ♥K, zonder de ♥Q: 5♥.',
      },
      {
        q: 'Wat toont een antwoord van 5♦ op RKCB?',
        options: ['Eén sleutelkaart', 'Nul of drie sleutelkaarten', 'Twee sleutelkaarten en de troefvrouw', 'Ruiten'],
        answer: 1,
        explain: 'Bij de 1430-antwoorden is 5♣ één of vier, 5♦ nul of drie; de vrager leidt uit de bieding af welke van de twee het is.',
      },
      {
        q: 'Schoppen is afgesproken. Je vroeg met 4SA met twee sleutelkaarten en de ♠Q, en partner antwoordt 5♥ (twee zonder de vrouw). Wat nu?',
        options: ['Pas', '6♠: er ontbreekt één sleutelkaart, maar de vrouw heb je zelf', '5♠: er ontbreken twee sleutelkaarten', '5SA'],
        answer: 1,
        explain: 'Twee plus twee is vier sleutelkaarten, dus er ontbreekt er één, en de troefvrouw heb je zelf. Bied klein slem.',
      },
      {
        q: 'Schoppen is afgesproken. Het antwoord 5♣ van partner toont één sleutelkaart en jij hebt de andere vier, maar niet de ♠Q. Met welk bod vraag je naar de troefvrouw?',
        options: ['5♦', '5♥', '5♠', '5SA'],
        answer: 0,
        explain: 'De vraag naar de vrouw is de volgende stap boven het antwoord die niet de troefkleur is: 5♦ na 5♣.',
      },
      {
        q: 'Alle sleutelkaarten en de troefvrouw zijn van jullie en je denkt aan groot slem. Waar vraagt 5SA naar?',
        options: ['Opnieuw naar azen', 'Hoeveel heren buiten troef partner heeft', 'Naar de troefvrouw', 'Nergens naar: het is om te spelen'],
        answer: 1,
        explain: 'Na RKCB vraagt 5SA naar de heren buiten troef (de troefheer is als sleutelkaart meegeteld) en belooft het dat er geen sleutelkaart ontbreekt.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Splinters en Reverse Drury',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Twee verhogingen van de hoge kleur van partner: de splinter, die manchekracht en een korte kleur toont zodat de openaar de slemkansen kan beoordelen, en Drury, waarmee een gepaste hand veilig een inviterende verhoging kan tonen.',
    body: `
<h3>Splinters</h3>
<p>Een <strong>splinter</strong> is een dubbele sprong in een nieuwe kleur nadat partner 1♥ of 1♠ heeft geopend. Het toont vier of meer troeven, manchekracht (ongeveer 13-16 punten, de korte kleur meegeteld) en een singleton of renonce in de geboden kleur. Het zegt verder niets over die kleur, dus het wordt gealerteerd.</p>
<table>
<thead><tr><th>Opening</th><th>Splinters</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Partner opende 1♠: bied 4♥"></div>
<p>10 punten, vier troeven en een singleton harten: 10 + 3 voor de singleton = 13 steunpunten. Met 4♥ vertel je partner dit allemaal in één bod. Met een sterkere hand begin je met Jacoby 2SA; met 10-12 punten geef je een inviterende verhoging.</p>

<h3>De beslissing van de openaar: bruikbare punten</h3>
<p>Tegenover een splinter telt de openaar alleen de hoge kaarten die meewerken. Honneurs tegenover de singleton van partner zijn grotendeels verspild: een heer of vrouw daar maakt nooit een slag, omdat partner de kleur introeft. Alleen de aas telt nog. Zonder verspilde punten en met ongeveer 16 of meer bruikbare punten zoekt de openaar naar slem; anders sluit hij af op vier in de hoge kleur.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Noord heeft 14 punten, maar de ♥K en ♥J zitten tegenover de singleton van Zuid. Zonder die kaarten heeft Noord ongeveer 10 bruikbare punten, dus Noord sluit af. Elf slagen zijn er, twaalf niet.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Hier heeft Noord niets in klaveren, dus alle 15 punten werken mee, en de harten passen goed. Noord geeft een cuebid van 4♦, met een ruitencontrole en slem-interesse. Zuid werkt mee met 4♥ (de ♥A), en Noord vraagt naar sleutelkaarten. 5♠ van Zuid toont twee sleutelkaarten en de troefvrouw, en Noord biedt 6♠.</p>

<h3>Reverse Drury</h3>
<p>In derde of vierde hand opent partner soms wat licht. Heb je al gepast en heb je een inviterende verhoging (drie of meer troeven en 10-12 punten), dan kan een sprong naar drie in de hoge kleur je tegenover een lichte opening te hoog brengen. <strong>Reverse Drury</strong> lost dat op: een gepaste hand biedt <strong>2♣</strong> na de 1♥- of 1♠-opening van partner om drie of meer troeven en 10-12 punten te tonen. Het is kunstmatig en zegt niets over klaveren.</p>
<ul>
<li>De openaar herbiedt <strong>twee in de hoge kleur</strong> met een minimale of lichte opening: er zit geen manche in, en jij past.</li>
<li>De openaar biedt <strong>manche</strong> met een volwaardige opening en extra kracht.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Noord gaf en paste; Zuid opende in derde hand 1♠."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>De 1♠ van Zuid heeft maar 11 punten. Na Drury zegt 2♠ "geen manche", en het paar stopt veilig: negen slagen is het maximum.</p>
<div class="tip">Drury is alleen voor gepaste handen, en je moet het afspreken. In deze app staat het standaard uit; zet het aan in de systeeminstellingen om ermee te oefenen.</div>
<div class="warn">Een splinter belooft vier troeven. Met maar drie doe je een ander bod: partner rekent op de vierde troef om de korte kleur in te troeven.</div>
`,
    keyPoints: [
      'Een splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) toont vier of meer troeven, manchekracht en een singleton of renonce in de geboden kleur.',
      'Tel tegenover een splinter alleen bruikbare punten: honneurs tegenover de korte kleur zijn verspild, behalve de aas.',
      'Met verspilde punten sluit de openaar af in de manche; met bruikbare punten geeft hij een cuebid of vraagt hij naar sleutelkaarten.',
      'Reverse Drury: 2♣ van een gepaste hand na 1♥/1♠ toont drie of meer troeven en 10-12 punten.',
      'Na Drury is twee in de hoge kleur een minimum; manche toont extra kracht.',
    ],
    quiz: [
      {
        q: 'Partner opent 1♠. Je hebt ♠KQ74 ♥A853 ♦K962 ♣5 (12 punten). Wat bied je?',
        options: ['2SA', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Vier troeven, een singleton klaver en 12 + 3 = 15 steunpunten: de splinter 4♣ beschrijft de hand in één bod.',
      },
      {
        q: 'Partner opent 1♥ en jij biedt 3♠. Wat heb je getoond?',
        options: ['Lange schoppen', 'Vier of meer harten, manchekracht en een singleton of renonce in schoppen', 'Een zwakke hand met schoppen', 'Een schoppenstop'],
        answer: 1,
        explain: 'Na 1♥ is 3♠ een dubbele sprong in een nieuwe kleur: een splinter.',
      },
      {
        q: 'Je opende 1♠ met ♠AK1063 ♥KQ5 ♦Q84 ♣K7 en partner gaf een splinter van 4♥. Wat doe je?',
        options: ['Bied 4♠: je ♥K en ♥Q zijn verspild', 'Bied 4SA', 'Geef een cuebid van 5♣', 'Bied 6♠'],
        answer: 0,
        explain: 'Vijf van je 17 punten zitten tegenover de korte harten van partner en maken geen slagen. Met ongeveer 12 bruikbare punten sluit je af.',
      },
      {
        q: 'Wie mag Reverse Drury gebruiken?',
        options: ['Elke antwoorder met steun', 'Een gepaste hand met drie of meer troeven en 10-12 punten, nadat partner 1♥ of 1♠ heeft geopend', 'Een gepaste hand met lange klaveren', 'De openaar met een sterke hand'],
        answer: 1,
        explain: 'Drury is een inviterende verhoging voor een gepaste hand, die de bieding laag houdt tegenover een mogelijk lichte opening in derde of vierde hand.',
      },
      {
        q: 'Partner, een gepaste hand, biedt 2♣ (Drury) na jouw 1♥ in derde hand. Je hebt een lichte opening met 11 punten. Wat herbied je?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 0,
        explain: 'Twee in de hoge kleur zegt dat je een minimum hebt en dat er geen manche in zit; partner past.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Nieuwe minor forcing en vierde kleur forcing',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Twee kunstmatige biedingen waarmee de antwoorder kan vragen in plaats van te gokken: nieuwe minor forcing na een herbieding van 1SA, en vierde kleur forcing als er drie kleuren zijn geboden.',
    body: `
<h3>Waarom de antwoorder moet vragen</h3>
<p>Na 1♦ – 1♠ – 1SA wil een antwoorder met vijf schoppen en manchekracht weten of de openaar drie schoppen heeft. 3♠ zou alleen inviteren; met 4♠ kom je misschien in een 5-2-fit terecht; met 3SA mis je misschien een 5-3-fit. Met natuurlijke biedingen kun je die vraag niet stellen, dus doe je het met een kunstmatig bod.</p>

<h3>Nieuwe minor forcing</h3>
<p>Na een herbieding van 1SA door de openaar is een bod van de antwoorder in <strong>de andere lage kleur</strong> op 2-niveau (1♣ – 1♥ – 1SA – 2♦, of 1♦ – 1♠ – 1SA – 2♣) kunstmatig en forcing voor één ronde. Het toont 11 of meer punten en vraagt naar de hoge kleur van de antwoorder. De antwoorder heeft daarin precies vijf kaarten of, na 1♠, vier schoppen en vier harten; met zes herhaalt de antwoorder gewoon zijn hoge kleur of biedt hij manche.</p>
<table>
<thead><tr><th>Antwoord van de openaar</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>2 in de hoge kleur van de antwoorder</td><td>Driekaartsteun, minimum (12-13)</td></tr>
<tr><td>3 in de hoge kleur van de antwoorder</td><td>Driekaartsteun, maximum (14)</td></tr>
<tr><td>2♥ of 3♥ (na 1♠)</td><td>Vier harten, minimum of maximum</td></tr>
<tr><td>2SA of 3SA</td><td>Geen van beide, minimum of maximum</td></tr>
</tbody>
</table>
<p>Daarna bepaalt de antwoorder het contract: manche met 13 of meer (of tegenover een maximum), een invite met 11-12 tegenover een minimum, en sans atout zonder fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Zuid heeft 14 punten en vijf schoppen. 2♣ vraagt; 2♠ van Noord toont driekaartsteun, en Zuid biedt de schoppenmanche, waarin de troefslagen elf slagen opleveren.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Met 11 punten en vijf harten (♠5 ♥AQJ62 ♦A32 ♣9743) vraagt Zuid met 2♣ en inviteert hij tegenover een minimum met drie harten met 3♥. Noord heeft een minimum en past.</p>

<h3>Vierde kleur forcing</h3>
<p>Als er drie kleuren natuurlijk zijn geboden, is een bod van de antwoorder in de <strong>vierde kleur</strong> kunstmatig en mancheforcing. De antwoorder heeft manchekracht maar geen duidelijk bod: vaak een vijfkaart die driekaartsteun zoekt, of een hand die 3SA zou kunnen spelen als de vierde kleur maar gestopt was.</p>
<p>De openaar beschrijft zijn hand verder, in deze volgorde:</p>
<ol>
<li>Driekaartsteun voor de kleur van de antwoorder: verhoog die.</li>
<li>Een stop in de vierde kleur: bied sans atout.</li>
<li>Extra lengte: herhaal een vijfkaart in de tweede kleur, of de eerste kleur.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Zuid heeft 14 punten en vijf goede harten. 2♣, de vierde kleur, vraagt Noord zijn hand te beschrijven. Noord heeft geen driekaartsteun in harten, maar wel een klaverstop, en biedt dus 2SA, waarna Zuid naar 3SA verhoogt.</p>
<div class="tip">Met een evenwichtige manchehand, een stop in de vierde kleur en geen vijfkaart in een hoge kleur waarvoor je nog een fit zoekt, bied je gewoon 3SA. Vierde kleur forcing is voor handen die een antwoord nodig hebben.</div>
<div class="warn">Beide biedingen zijn kunstmatig: ze zeggen niets over de lage kleur of de vierde kleur. Alerteer ze, en pas er nooit op.</div>
`,
    keyPoints: [
      'Nieuwe minor forcing: na bijvoorbeeld 1♦ – 1♠ – 1SA vraagt twee in de andere lage kleur met 11+ punten naar driekaartsteun (of na 1♠ naar vier harten).',
      'De openaar toont steun of vier harten op 2-niveau met een minimum en op 3-niveau met een maximum; 2SA of 3SA toont geen van beide.',
      'Vierde kleur forcing: een bod van de antwoorder in de vierde kleur is kunstmatig en mancheforcing.',
      'De openaar antwoordt eerst met steun voor de kleur van de antwoorder, dan met sans atout als hij een stop heeft, dan met extra lengte.',
      'Met een evenwichtige hand, een stop in de vierde kleur en geen vijfkaart in een hoge kleur waarvoor je een fit zoekt, bied je direct 3SA.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1SA – ? Je hebt ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 punten). Wat bied je?',
        options: ['2♠', '3♠', '2♦', '3SA'],
        answer: 2,
        explain: '2♦, nieuwe minor forcing, vraagt of de openaar drie schoppen (of vier harten) heeft. Daarna kun je kiezen tussen schoppen en sans atout.',
      },
      {
        q: '1♦ – 1♥ – 1SA – 2♣. Je opende met ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 punten). Wat antwoord je?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 2,
        explain: 'Driekaartsteun in harten met een maximum voor de herbieding van 1SA: spring naar 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Wat toont 2♦?',
        options: ['Lange ruiten', 'Een kunstmatig mancheforcing bod dat de openaar vraagt zijn hand te beschrijven', 'Een zwakke hand', 'Steun voor schoppen'],
        answer: 1,
        explain: 'Ruiten is de vierde kleur. De antwoorder heeft manchekracht en stelt een vraag; hij toont geen ruiten.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Je opende met ♠AQ74 ♥J5 ♦K103 ♣KJ96. Wat bied je?',
        options: ['2♥', '2SA', '3♣', '2♠'],
        answer: 1,
        explain: 'Geen driekaartsteun in harten, maar met ♦K10x heb je een ruitenstop: bied sans atout.',
      },
      {
        q: 'Welke hand moet na 1♦ – 1♠ – 1SA nieuwe minor forcing gebruiken?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Vijf schoppen en 12 punten: vraag naar driekaartsteun. De eerste hand is te zwak, de derde herbiedt 2♠, en de laatste, met vier schoppen en 12 punten, biedt 3SA.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Texas-transfers',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Hoe je tegenover 1SA of 2SA manche biedt in een zeskaart hoge kleur, zodat de sterke hand die speelt, en hoe je verdergaat richting slem.',
    body: `
<h3>Transfers op 4-niveau</h3>
<p>Tegenover een 1SA-opening van partner wil een hand met een zeskaart hoge kleur en genoeg voor de manche vier in die hoge kleur spelen, en wil hij dat de SA-openaar leider wordt, zodat de uitkomst naar de sterke hand toe komt. <strong>Texas-transfers</strong> regelen dat in één bod:</p>
<table>
<thead><tr><th>Bod</th><th>Betekenis</th><th>De openaar biedt</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Zes of meer harten, manchekracht</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Zes of meer schoppen, manchekracht</td><td>4♠</td></tr>
</tbody>
</table>
<p>De openaar moet de transfer uitvoeren. Zonder slem-interesse past de antwoorder.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Zuid heeft 10 punten en zes schoppen: genoeg voor de manche, maar niet voor slem. 4♥ is een transfer, Noord biedt 4♠ en Zuid past. Noord is leider, dus de uitkomst komt naar de heren van Noord toe in plaats van er doorheen.</p>

<h3>Texas of Jacoby?</h3>
<table>
<thead><tr><th>Hand van de antwoorder</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>0-7, vijf of meer kaarten</td><td>Jacoby-transfer, dan pas</td></tr>
<tr><td>8-9, zes kaarten</td><td>Jacoby-transfer, dan naar drie verhogen</td></tr>
<tr><td>Manchekracht, precies vijf kaarten</td><td>Jacoby-transfer, dan 3SA: de openaar kiest</td></tr>
<tr><td>Manchekracht, zes of meer kaarten</td><td>Texas: 4♦ of 4♥</td></tr>
<tr><td>Slem-interesse, zes of meer kaarten</td><td>Texas, dan 4SA (Roman Key Card Blackwood)</td></tr>
</tbody>
</table>

<h3>Doorgaan naar slem</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Zuid heeft 15 punten en een sterke zeskaart harten tegenover 15-17: slem is waarschijnlijk. Texas legt harten vast als troef, en 4SA vraagt naar sleutelkaarten. 5♥ van Noord toont er twee, de ♥A en de ♦A, zonder de vrouw. Zuid heeft de ♥K, de ♣A en de ♥Q, dus er ontbreekt maar één sleutelkaart, en Zuid biedt 6♥.</p>

<h3>Na 2SA</h3>
<p>Dezelfde biedingen werken na een 2SA-opening (20-21), waar zelfs 4 punten genoeg zijn voor de manche:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">Met Texas wordt de sterke hand leider en houd je ruimte over om naar slem te bieden: na de transfer is 4SA Roman Key Card Blackwood voor de hoge kleur.</div>
<div class="warn">4♣ na 1SA of 2SA is Gerber, geen Texas. En de openaar mag nooit passen op 4♦ of 4♥: de transfer moet worden uitgevoerd.</div>
`,
    keyPoints: [
      'Texas: 1SA (of 2SA) – 4♦ toont zes of meer harten, 4♥ zes of meer schoppen, met manchekracht.',
      'De openaar voert de transfer altijd uit, zodat de SA-openaar leider wordt.',
      'Zonder slem-interesse past de antwoorder; met interesse vraagt hij na Texas met 4SA naar sleutelkaarten.',
      'Met precies vijf kaarten en manchekracht gebruik je in plaats daarvan een Jacoby-transfer en daarna 3SA.',
      'Met inviterende handen bied je een transfer op 2-niveau en verhoog je daarna naar drie.',
    ],
    quiz: [
      {
        q: 'Partner opent 1SA. Je hebt ♠KQ10965 ♥A4 ♦K73 ♣85 (12 punten). Wat bied je?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Zes schoppen en manchekracht: 4♥ is een Texas-transfer, en partner biedt 4♠.',
      },
      {
        q: '1SA – 4♦. Wat biedt de openaar?',
        options: ['Pas', '4♥', '4SA', '5♦'],
        answer: 1,
        explain: '4♦ toont zes of meer harten; de openaar voert de transfer uit met 4♥.',
      },
      {
        q: 'Partner opent 1SA. Je hebt ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 punten, vijf harten). Wat is je plan?',
        options: ['4♦ (Texas)', '2♦, dan 3SA', '2♦, dan 4♥', '3SA'],
        answer: 1,
        explain: 'Met precies vijf harten bied je een transfer en daarna 3SA: de openaar kiest 4♥ met driekaartsteun en past met twee.',
      },
      {
        q: '1SA – 4♥ – 4♠ – 4SA. Wat is 4SA?',
        options: ['Kwantitatief', 'Roman Key Card Blackwood voor schoppen', 'Om te spelen', 'Gerber'],
        answer: 1,
        explain: 'De Texas-transfer heeft schoppen als troef vastgelegd, dus 4SA vraagt naar sleutelkaarten.',
      },
      {
        q: 'Partner opent 2SA. Je hebt ♠64 ♥Q97543 ♦AJ9 ♣87 (7 punten). Wat bied je?',
        options: ['3♦', '4♦', '3♥', 'Pas'],
        answer: 1,
        explain: 'Zes harten en genoeg voor de manche tegenover 20-21: Texas 4♦, en partner speelt 4♥.',
      },
    ],
  },
];
