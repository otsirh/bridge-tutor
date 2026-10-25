// Lessons, part 3.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels en de Unusual 2SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Hoe je na een opening van de tegenstanders met één bod een tweekleurenhand toont, en hoe partner de kleur kiest.',
    body: `
<h3>Twee kleuren in één bod</h3>
<p>Met twee vijfkaarten wil je ze allebei snel tonen; de bieding kan al op 4-niveau zijn voordat je een tweede kans krijgt. Twee conventionele volgbiedingen doen dat, en elk belooft minstens <strong>vijf kaarten in elk van twee kleuren</strong>.</p>
<table>
<thead><tr><th>Zij openen</th><th>Jij biedt</th><th>Toont</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ en ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ en ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ en een lage kleur</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ en een lage kleur</td></tr>
<tr><td>1♣</td><td>2SA (Unusual)</td><td>♦ en ♥</td></tr>
<tr><td>1♦</td><td>2SA (Unusual)</td><td>♣ en ♥</td></tr>
<tr><td>1♥ of 1♠</td><td>2SA (Unusual)</td><td>♣ en ♦</td></tr>
</tbody>
</table>
<p>Michaels is een cuebid in de kleur van de openaar. Na een lage kleur toont het beide hoge kleuren; na een hoge kleur toont het de andere hoge kleur en een niet nader genoemde lage kleur. De Unusual 2SA toont de <strong>twee laagste ongeboden kleuren</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="Rechts opent 1♦: bied 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="Rechts opent 1♠: bied 2SA"></div>

<h3>Hoe sterk?</h3>
<p>Het bereik is groot. Meestal is de hand bescheiden (ruwweg 8-12 punten) met goede kleuren, en is het doel om mee te bieden, een offerbod te vinden of de uitkomst aan te geven. Met een sterke hand (ongeveer 16+) begin je ook met het tweekleurenbod en bied je daarna opnieuw om de extra kracht te tonen. Met een hand daartussenin geven veel spelers liever een volgbod in de hoogste kleur en bieden ze de andere later.</p>
<p>De kwaliteit van de kleuren is belangrijk, vooral kwetsbaar: de honneurs moeten in je lange kleuren zitten, niet in de korte.</p>

<h3>Reageren</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Jij bent Zuid: bied 2♥"></div>
<ul>
<li><strong>Kies een kleur</strong> op het laagste niveau: de kleur waarin je de meeste kaarten hebt. Hier vier harten tegenover twee schoppen: 2♥. Met evenveel kaarten in een hoge en een lage kleur kies je de hoge kleur, die meer oplevert.</li>
<li><strong>Spring</strong> met een goede fit en bruikbare punten: kort in de kleur van de tegenstanders, en azen en heren in de kleuren van partner.</li>
<li><strong>Bied manche</strong> als de fit groot is en je honneurs meewerken. Een tienkaartfit tegenover een 5-5-hand maakt vaak de manche met weinig punten.</li>
<li><strong>Na een Michaels met een hoge en een lage kleur</strong> (1♥ – 2♥) bied je de hoge kleur van partner als je die goed vindt, of bied je 2SA om naar de lage kleur te vragen als je een goede fit in de lage kleuren hebt en geen fit in de hoge kleur.</li>
<li><strong>Na de Unusual 2SA</strong> bied je 3♣ of 3♦ (welke van de twee het langst is), of spring je met een fit naar de manche.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – pas: bied 2SA"></div>
<p>Partner heeft vijf schoppen en vijf kaarten in een lage kleur. Met een singleton schoppen maar vier kaarten in elke lage kleur bied je 2SA: partner noemt zijn lage kleur en jij past, met een negenkaartfit, welke kleur het ook is.</p>

<h3>De informatie gebruiken in het tegenspel</h3>
<p>Als de tegenstanders het contract krijgen, is de tweekleurenhand van partner een geschenk voor het tegenspel: je kent minstens tien kaarten van partner. Tel daarmee de hand van de leider, en kom uit (of stap over) in de kleur waarin partner kan introeven of slagen kan maken.</p>
<div class="warn">Gebruik Michaels of de Unusual 2SA niet met een 5-4-hand. Partner kiest een kleur in de verwachting dat je er vijf hebt, en dan speel je gedoubleerd in een zevenkaartfit.</div>
<div class="tip">Bij gunstige kwetsbaarheid kan een tweekleurenbod, gevolgd door een flinke sprong van partner in jouw kleur, het contract stelen of een goedkoop offerbod opleveren. Partner moet met elke grote fit verhogen: de wet van het totaal aantal slagen beloont bieden met verdeling.</div>
`,
    keyPoints: [
      'Michaels: een cuebid in de lage kleur van de openaar (zoals 1♦ – 2♦) toont beide hoge kleuren; een cuebid in zijn hoge kleur (zoals 1♥ – 2♥) toont de andere hoge kleur en een lage kleur; 5-5 of beter.',
      'De Unusual 2SA toont de twee laagste ongeboden kleuren, 5-5 of beter.',
      'Meestal is de hand bescheiden; met een sterke hand bied je daarna opnieuw.',
      'Partner kiest de kleur waarin hij de meeste kaarten heeft, en springt of biedt manche met een grote fit.',
      'Na een cuebid in een hoge kleur (zoals 1♥ – 2♥) vraagt 2SA van partner naar de lage kleur.',
    ],
    quiz: [
      {
        q: 'Je rechtertegenstander opent 1♣. Welk bod toont vijf schoppen en vijf harten?',
        options: ['Doublet', '2♣', '2SA', '1♥'],
        answer: 1,
        explain: 'Een cuebid na een opening in een lage kleur (Michaels) toont beide hoge kleuren. 2SA na 1♣ toont de twee laagste ongeboden kleuren: ruiten en harten.',
      },
      {
        q: 'Je rechtertegenstander opent 1♥ en jij biedt 2SA. Wat heb je getoond?',
        options: ['15-18 evenwichtig', 'Klaveren en ruiten', 'Schoppen en een lage kleur', 'Schoppen en klaveren'],
        answer: 1,
        explain: 'De Unusual 2SA toont de twee laagste ongeboden kleuren. Na 1♥ zijn dat klaveren en ruiten.',
      },
      {
        q: 'Je linkertegenstander opent 1♦, partner biedt 2♦ (Michaels), je rechtertegenstander past. Je hebt ♠J4 ♥Q852 ♦K73 ♣J1064. Wat bied je?',
        options: ['2♠', '2♥', '2SA', 'Pas'],
        answer: 1,
        explain: 'Partner heeft minstens vijf kaarten in elke hoge kleur. Jij hebt vier harten en twee schoppen, dus harten is de betere fit: bied die op het laagste niveau.',
      },
      {
        q: 'Je rechtertegenstander opent 1♠ en jij biedt 2♠. Wat toont dat?',
        options: ['Schoppen', 'Harten en een lage kleur', 'Beide lage kleuren', 'Een sterke evenwichtige hand'],
        answer: 1,
        explain: 'Een cuebid na een opening in een hoge kleur toont de andere hoge kleur plus een lage kleur, minstens 5-5. Partner kan 2SA bieden om te horen welke lage kleur het is.',
      },
      {
        q: 'Je rechtertegenstander opent 1♣ en jij biedt 2SA. Wat toont dat?',
        options: ['Klaveren en ruiten', 'Ruiten en harten', 'Beide hoge kleuren', 'Harten en schoppen'],
        answer: 1,
        explain: 'Na 1♣ zijn de ongeboden kleuren ruiten, harten en schoppen; de twee laagste daarvan zijn ruiten en harten.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'Tegenspel tegen troefcontracten',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Hoe je kiest tussen actief en passief tegenspel, troefslagen haalt, op het juiste moment troef speelt en de leider forceert.',
    body: `
<h3>Waar de slagen van de tegenspelers vandaan komen</h3>
<p>Tegen een troefcontract maken de tegenspelers slagen met hoge kaarten, door in te troeven en met hun eigen troeven. De leider probeert intussen van zijn verliezers af te komen door ze in de dummy in te troeven of ze af te gooien op vaste slagen van de dummy. Goed tegenspel begint met een eenvoudige vraag als de dummy op tafel komt: <strong>hoe gaat de leider het contract maken, en waar komen onze slagen vandaan?</strong></p>

<h3>Actief of passief?</h3>
<p><strong>Speel actief</strong> (incasseer of maak snel slagen vrij, ook met enig risico) als de dummy een lange, sterke kleur heeft waarop de leider kan afgooien. Slagen die je nu niet neemt, verdwijnen.</p>
<p><strong>Speel passief</strong> (speel veilige kaarten die niets weggeven) als de dummy vlak is, de leider nergens op kan afgooien en hij zijn verliezers toch moet afgeven. Nieuwe kleuren aansnijden geeft de leider dan vaak een slag die hij zelf niet had kunnen maken.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Zuid speelt 4♠ na 1♠ – 2♥ – 2♠ – 4♠. Partner komt uit met ♣Q; de dummy neemt met de aas en speelt ♥K."></div>
<p>Jij neemt met de ♥A. Denk nu na: de harten van de dummy zijn vrij, en zodra de leider troef heeft getrokken, gooit hij zijn ruitenverliezers daarop af. De enige hoop is <em>nu</em> ruitenslagen te maken. Stap over op ♦J, door de hand van de leider heen: heeft partner de ♦A en de leider de ♦Q, dan kunnen jullie drie ruitenslagen maken. Een passieve klaver terug laat de leider troef trekken en de ruiten afgooien.</p>

<h3>Troefslagen halen</h3>
<ul>
<li>Een singleton-uitkomst werkt het best als je troefcontrole hebt (zoals de troefaas) of als partner een entree kan hebben: je komt aan slag, bereikt partner en troeft opnieuw in.</li>
<li>Als je partner laat introeven, gebruik dan een voorkeurssignaal om te laten zien waar je entree zit.</li>
<li>Tel de troeven van de leider: het heeft geen zin te spelen op een troefslag als partner geen troeven meer kan hebben.</li>
</ul>

<h3>Wanneer je troef speelt</h3>
<ul>
<li>Als de dummy kort is in een bijkleur waarin jullie sterk zijn en de leider daar verliezers wil introeven.</li>
<li>Als de leider twee kleuren heeft getoond en de dummy voorkeur gaf aan de tweede: de dummy gaat de eerste introeven.</li>
<li>Als partner jouw informatiedoublet voor straf laat staan: hij heeft lange, sterke troeven en wil dat die getrokken worden.</li>
<li>Niet als de leider lange vaste slagen in een bijkleur te incasseren heeft, of als een troefuitkomst de leider kan helpen de troefhonneurs van partner op te vangen.</li>
</ul>

<h3>Forcerend tegenspel</h3>
<p>Heb je vier troeven, of zijn de troeven van de leider kort, laat de leider dan steeds opnieuw introeven door je lange kleur te spelen. Elke keer dat hij introeft, worden de troeven van de leider korter; uiteindelijk heb jij misschien meer troeven dan de leider, en verliest hij de controle. Forcerend tegenspel werkt het best als de troeven van de leider in de lange hand zitten en de dummy de forcering niet kan opvangen.</p>

<h3>Troefpromotie</h3>
<p>Schoppen is troef. De leider heeft ♠A K 10 9 8 7, jij (West) hebt ♠Q 6 en partner heeft ♠J 3. Als niemand iets doet, incasseert de leider de aas en de heer en valt je vrouw. Maar stel dat je een bijkleur speelt waarin zowel partner als de leider renonce is. Partner troeft in met ♠J, de leider moet overtroeven met de aas of de heer, en nu zit je ♠Q 6 tegenover nog maar één tophonneur: de vrouw maakt een slag. Deze troefpromotie heet een <strong>uppercut</strong>. Zie je zo’n promotie, dan moet partner zo hoog mogelijk introeven.</p>
<div class="tip">Tel je slagen. Zie je de slag die het contract down zet, neem die dan; zie je dat de leider genoeg slagen heeft, zoek dan naar een troefslag of een troefpromotie die er een kan opleveren.</div>
<div class="warn">Incasseer geen vaste slagen in een kleur waarin de leider renonce is en de dummy introeft: daarmee help je alleen de leider. En speel geen kleur waarin zowel de leider als de dummy renonce is: dan kan de leider in de ene hand introeven en uit de andere hand een verliezer afgooien.</div>
`,
    keyPoints: [
      'Vraag je af hoe de leider het contract gaat maken en waar jullie slagen vandaan komen.',
      'Speel actief als de dummy een lange kleur heeft om op af te gooien; passief als de dummy vlak is.',
      'Een singleton-uitkomst werkt het best met troefcontrole of een entree in de hand van partner.',
      'Speel troef als de dummy gaat introeven, of als partner je informatiedoublet heeft laten staan.',
      'Forceer de leider met vier troeven; laat de leider nooit in de ene hand introeven terwijl hij uit de andere afgooit.',
    ],
    quiz: [
      {
        q: 'De dummy heeft een lange, sterke bijkleur waarop de leider kan afgooien. Welk soort tegenspel is meestal goed?',
        options: ['Passief: wachten tot de leider een fout maakt', 'Actief: snel je slagen nemen of vrijspelen', 'Bij elke gelegenheid troef spelen', 'De leider laten introeven en afgooien'],
        answer: 1,
        explain: 'Zodra de troeven getrokken zijn, gooit de leider zijn verliezers af op de kleur van de dummy. Slagen die de tegenspelers niet snel nemen, verdwijnen.',
      },
      {
        q: 'De dummy is een vlakke 4-3-3-3 zonder lange kleur, en de leider moet zijn verliezers in de bijkleuren hoe dan ook afgeven. Welk soort tegenspel is meestal goed?',
        options: ['Passief: geen nieuwe kleuren aansnijden', 'Actief: elke slag een nieuwe kleur spelen', 'Onder je azen uitkomen', 'Meteen al je vaste slagen incasseren'],
        answer: 0,
        explain: 'Zonder mogelijkheid om af te gooien verdwijnen de verliezers van de leider niet. Wie nieuwe kleuren aansnijdt, loopt het risico de leider een slag te geven die hij zelf niet had kunnen maken.',
      },
      {
        q: 'Je hebt vier troeven tegen 4♥ van de leider. Welk plan is vaak het beste?',
        options: ['Troef spelen', 'De leider laten introeven door je lange kleur te spelen', 'Uitkomen met een singleton', 'In elke kleur uit honneurs uitkomen'],
        answer: 1,
        explain: 'Elke keer dat de leider introeft, worden zijn troeven korter. Met zelf vier troeven kun je na twee of drie forceringen meer troeven hebben dan de leider, en verliest hij de controle.',
      },
      {
        q: 'Je gaf een informatiedoublet op 1♦ en partner liet het staan voor straf. Waarmee kom je uit?',
        options: ['Je beste hoge kleur', 'Troef', 'Een singleton klaver', 'De kleur die partner graag wil'],
        answer: 1,
        explain: 'De pas van partner toont lange, sterke ruiten. Een troefuitkomst voorkomt dat de leider kleine troeven maakt door in te troeven, en de ruiten van partner maken de slagen.',
      },
      {
        q: 'Wanneer is een singleton-uitkomst tegen een troefcontract het aantrekkelijkst?',
        options: ['Als je de troefaas hebt of partner waarschijnlijk een entree heeft', 'Als je vier troeven hebt', 'Als bekend is dat de dummy kort is in die kleur', 'Altijd'],
        answer: 0,
        explain: 'Je moet partner na de troefslag aan slag kunnen brengen, of zelf weer aan slag komen voordat de troeven getrokken zijn. Troefcontrole en entrees bij partner maken dat mogelijk.',
      },
    ],
  },

  {
    id: 'defending-against-notrump',
    title: 'Tegenspel tegen sans atout',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Hoe de tegenspelers de race tegen sans atout winnen: deblokkeren, de juiste kaart terugspelen, contact houden, de entrees van de leider aanvallen en goed afgooien.',
    body: `
<h3>Een race om slagen</h3>
<p>Tegen sans atout houdt niets een lange kleur tegen zodra die vrij is. Beide partijen racen: de leider om genoeg slagen vrij te spelen, de tegenspelers om als eersten hun lange kleur vrij te spelen en te incasseren. De meeste problemen van de tegenspelers zijn problemen van <strong>verbinding</strong>: de lange kleur zit in de ene hand en de entrees vaak in de andere. Goed tegenspel houdt de kleur tussen de twee tegenspelers in beweging en verbreekt de verbindingen van de leider.</p>

<h3>Derde hand: hoog, en uit de weg van partner</h3>
<p>De derde hand speelt hoog (zie de les "Tweede hand laag, derde hand hoog"). Tegen sans atout komt er een tweede plicht bij: de kleur van partner niet <strong>blokkeren</strong>. Met een honneur tweede in de lange kleur van partner ruim je die honneur vroeg op, ook als je daarvoor de kaart van partner moet overnemen.</p>
<table>
<thead><tr><th>Hand</th><th>Harten</th></tr></thead>
<tbody>
<tr><td>Noord (dummy)</td><td>6 5 2</td></tr>
<tr><td>West (partner, komt uit met de K)</td><td>K Q 10 9 7</td></tr>
<tr><td>Oost (jij)</td><td>A 3</td></tr>
<tr><td>Zuid (leider)</td><td>J 8 4</td></tr>
</tbody>
</table>
<p>Speel je de 3, dan duikt de leider. Partner speelt door met de vrouw en jouw aas moet de tweede ronde nemen: je hebt geen harten meer om terug te spelen, de boer van de leider stopt de kleur nog steeds, en partner heeft nog twee entrees nodig om de harten vrij te spelen en te incasseren. <strong>Neem</strong> de heer daarom <strong>over</strong> met de aas en speel de 3 terug. De boer van de leider zit in de val en de tegenspelers maken de eerste vijf hartenslagen.</p>
<ul>
<li>Deblokkeer als de uitkomst van partner een sterke kleur toont (de top van een reeks als K Q 10 of Q J 10) en je een honneur tweede hebt: speel de honneur vroeg, zodat je laatste kaart een kleintje is.</li>
<li>Met drie kaarten met een honneur (A x x, K x x) speel je hoog en houd je een kleintje om terug te spelen: je blokkeert niets.</li>
</ul>

<h3>De kleur van partner terugspelen</h3>
<p>Als je een slag maakt en de kleur van partner terugspeelt, vertelt de gekozen kaart hoeveel kaarten je nog hebt, en dus hoeveel de leider er heeft.</p>
<table>
<thead><tr><th>Je had</th><th>Je neemt met</th><th>Terug</th><th>De regel</th></tr></thead>
<tbody>
<tr><td>A 9 3</td><td>A</td><td>9</td><td>Nog twee kaarten: speel de hoogste terug</td></tr>
<tr><td>A 8 5 2</td><td>A</td><td>2</td><td>Nog drie of meer: speel je oorspronkelijke vierde van boven terug</td></tr>
<tr><td>K 10 6 4 2</td><td>K</td><td>4</td><td>Je oorspronkelijke vierde van boven, niet je laagste kaart</td></tr>
</tbody>
</table>
<p>Een hoge kaart zegt "ik heb er hooguit nog één"; een lage zegt "ik heb er nog minstens twee". Partner kan dan uitrekenen of de leider nog een stop heeft en of hij nu moet nemen of duiken. De hoogste van twee kaarten terugspelen voorkomt ook dat je de kleur blokkeert: houd je de 9, dan wint die misschien de derde ronde terwijl juist partner aan slag moet zijn.</p>

<h3>Duiken om contact te houden</h3>
<p>De tegenspeler met de lange kleur moet soms vroeg een slag afgeven, zolang partner nog een kaart van de kleur heeft om terug te spelen.</p>
<div class="deal" data-n="S:109 H:A64 D:KQJ105 C:K83" data-e="S:752 H:1072 D:A83 C:10964" data-s="S:QJ4 H:KQ5 D:742 C:AQJ2" data-w="S:AK863 H:J983 D:96 C:75" data-caption="3SA door Zuid na 1SA – 3SA. West komt uit met ♠A en Oost speelt ♠2 bij."></div>
<p>De 2 van Oost ontkent een schoppenhonneur, dus de leider heeft ♠Q J. West telt: Zuid heeft 15-17 punten, de dummy 13 en West 8, dus Oost heeft er hooguit 4. De leider maakt zijn contract door de ♦A eruit te spelen, dus de enige hoop van de tegenspelers is dat Oost die heeft.</p>
<p>Incasseert West de ♠K en speelt hij een derde schoppen, dan neemt de leider met zijn laatste honneur en heeft Oost, die met drie schoppen begon, er geen meer. Oost neemt de ♦A maar kan West niet bereiken, wiens twee lange schoppen nooit een slag maken: de leider maakt tien slagen. West speelt in plaats daarvan in de tweede slag een <strong>kleine schoppen</strong>. De leider neemt, maar Oost houdt een schoppen over. Als Oost de ♦A neemt, speelt hij die terug, en West incasseert de ♠K en de laatste twee schoppens: één down.</p>
<p>Een kleine schoppen bij de uitkomst had hetzelfde bereikt. Het principe: is je kleur lang en heb je geen entree ernaast, geef dan de slag die je moet afgeven af <em>zolang partner nog een kaart van de kleur heeft</em>.</p>

<h3>De entrees van de leider aanvallen</h3>
<p>Ook de leider heeft verbindingsproblemen, en de tegenspelers kunnen die groter maken.</p>
<ul>
<li><strong>Houd je aas op</strong> als de dummy een lange kleur heeft en geen entree ernaast, en neem pas als de leider de laatste kaart van de kleur uit zijn hand speelt. Het lengtesignaal van partner vertelt je wanneer (zie de les "Signalen in het tegenspel").</li>
<li><strong>Speel de entree van de dummy eruit</strong> voordat de lange kleur vrij is, ook als dat een slag kost.</li>
</ul>
<div class="hand" data-cards="S:A42 H:765 D:KQJ109 C:83" data-label="Dummy, tegen 3SA"></div>
<p>Je zit Oost met ♠K 7 3 en ♦A 6 2, en de leider heeft twee ruitens. Alleen de ♦A ophouden is niet genoeg: de leider zou met de ♠A naar de vrije ruitens teruggaan. Dus als je een slag maakt voordat er ruiten is gespeeld, speel je de <strong>♠K</strong>. Neemt de leider met de aas, dan heeft de dummy geen entree meer: je houdt de ♦A op tot de tweede ronde en de ruitens van de dummy zijn dood. Duikt de leider, dan heeft je heer een slag gemaakt en kun je nog een schoppen spelen. Zo een honneur opofferen om een entree weg te halen heet de <strong>Merrimac-coup</strong>. Hij is zeldzaam, maar de vraag erachter niet: welke entree van de leider is het belangrijkst?</p>

<h3>Afgooien</h3>
<p>Als de leider een lange kleur afdraait, moeten de tegenspelers afgooien, en één verkeerde afgooier kan hem het contract geven.</p>
<ul>
<li><strong>Houd de lengte van de dummy.</strong> Met ♣Q 10 8 3 achter ♣K J 7 4 van de dummy houd je alle vier klaveren: gooi je er een af, dan kan de laatste klaver van de dummy een vaste slag worden. De kaarten van de dummy liggen open, dus deze regel is het makkelijkst te volgen.</li>
<li><strong>Houd de lengte van de leider.</strong> Tel zijn kleuren uit het bieden en het spel, en bewaar een stop in elke kleur waarin alleen jij zijn lange kaart kunt tegenhouden.</li>
<li><strong>Verdeel het werk.</strong> Een kleur heeft maar één bewaker nodig. Laat partner de kleur bewaken die hij kan bewaken (lengtesignalen helpen daarbij) en houd zelf de andere.</li>
<li><strong>Geef een signaal met je eerste afgooier:</strong> een hoge kaart vraagt om de kleur, een lage zegt dat je hem niet wilt. Gooi af uit een kleur die je kunt missen; gooi nooit een kaart weg die je nodig hebt, alleen om te signaleren.</li>
<li><strong>Bewaar de vaste slagen van je vrijgespeelde kleur</strong> zolang jij of partner nog aan slag kan komen om ze te incasseren.</li>
</ul>
<div class="tip">Tel de slagen van de leider voordat je afgooit. Heeft hij acht slagen en heeft hij een negende nodig, dan moet je juist de kleur bewaren die hem die zou kunnen geven.</div>
<div class="warn">Plan je afgooiers vroeg. Aarzelen en dan een honneur blank zetten vertelt de leider precies waar die zit.</div>
`,
    keyPoints: [
      'Tegen sans atout beslist de verbinding de race: houd de lange kleur tussen de twee tegenspelers in beweging.',
      'Deblokkeren: met een honneur tweede in de sterke kleur van partner speel je de honneur vroeg, desnoods door over te nemen.',
      'Speel van twee overgebleven kaarten de hoogste terug; met drie of meer je oorspronkelijke vierde van boven.',
      'De tegenspeler met de lange kleur en zonder entree duikt een ronde zolang partner nog een kaart heeft om terug te spelen.',
      'Val de entrees van de leider aan; houd bij het afgooien de lengte van de dummy en bewaak de lange kaarten van de leider.',
    ],
    quiz: [
      {
        q: 'Tegen 3SA komt partner uit met ♥K (van K Q 10 9 7). De dummy heeft ♥6 5 2 en jij hebt ♥A 3. Wat speel je?',
        options: ['De 3, zodat de heer van partner de slag maakt', 'De aas, en dan de 3 terug', 'De aas, en dan een andere kleur', 'Het maakt niet uit'],
        answer: 1,
        explain: 'Neem over en speel de 3 terug. Speel je klein, dan duikt de leider en moet je aas de tweede ronde nemen zonder dat je nog een harten kunt terugspelen, terwijl de boer van de leider de kleur blijft stoppen.',
      },
      {
        q: 'Je neemt de schoppenuitkomst van partner tegen 3SA met de aas van ♠A 9 3. Welke schoppen speel je terug?',
        options: ['De 9', 'De 3', 'Maakt niet uit', 'Ik speel geen schoppen terug'],
        answer: 0,
        explain: 'Met nog twee kaarten speel je de hoogste terug. Partner ziet de 9 en weet dat je hooguit nog één schoppen hebt.',
      },
      {
        q: 'Je neemt met de aas van ♦A 8 5 2. Welke ruiten speel je terug?',
        options: ['De 8', 'De 5', 'De 2', 'Geen: ik stap over'],
        answer: 2,
        explain: 'Met nog drie of meer kaarten speel je je oorspronkelijke vierde van boven terug, hier de 2. De lage kaart vertelt partner dat je nog minstens twee ruitens hebt.',
      },
      {
        q: 'Waarom moet West in het 3SA-spel hierboven in de tweede slag een kleine schoppen spelen?',
        options: ['Om te weten te komen wie de ♠Q heeft', 'Zodat Oost een schoppen overhoudt om terug te spelen als hij de ♦A neemt', 'Omdat de ♠K getroefd zou kunnen worden', 'Om de leider de entrees van de dummy te laten opmaken'],
        answer: 1,
        explain: 'Oost had drie schoppens. Incasseert West de heer en speelt hij een derde schoppen, dan heeft Oost er geen meer als hij aan slag komt. Nu duiken houdt het contact tussen de twee handen.',
      },
      {
        q: 'De leider draait een lange kleur af. De dummy heeft ♣K J 7 4 en jij hebt ♣Q 10 8 3 erachter. Wat houd je?',
        options: ['Alle vier klaveren', 'Alleen de Q en de 10', 'Alleen de vrouw', 'Dat hangt af van de eerste afgooier van partner'],
        answer: 0,
        explain: 'Houd de lengte van de dummy. Zodra je een klaver afgooit, kan de vierde klaver van de dummy een vaste slag worden.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Kleurverdelingen en kansen combineren',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'De kansen op de verschillende verdelingen van een kleur vooraf, hoe je kansen combineert, en de basisideeën van vrije plaatsen en beperkte keuze.',
    body: `
<h3>Hoe de kaarten van de tegenstanders zitten</h3>
<p>Voordat er kaarten zijn gespeeld, hangt de kans op elke verdeling alleen af van het aantal kaarten dat de tegenspelers in de kleur hebben:</p>
<table>
<thead><tr><th>Ontbrekend</th><th>Verdeling</th><th>Kans</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1,5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0,5%</td></tr>
</tbody>
</table>
<p>Een handige regel: een <strong>oneven</strong> aantal ontbrekende kaarten zit meestal zo gelijk mogelijk verdeeld (3-2, 4-3), maar een <strong>even</strong> aantal meestal niet (4-2 is waarschijnlijker dan 3-3, en 3-1 waarschijnlijker dan 2-2).</p>
<p>Nog twee getallen om te kennen: een snit is 50%; als één van twee snitten moet lukken, is dat 75%, als beide moeten lukken 25%.</p>

<h3>Kansen combineren</h3>
<p>Vaak kan een contract op meer dan één manier worden gemaakt. De kunst is de kansen te proberen in een volgorde waarin je de tweede nog kunt gebruiken als de eerste mislukt.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3SA door Zuid. West komt uit met ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Tel:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: acht slagen. De negende kan komen van een 3-3-verdeling in klaveren (36%), waardoor de ♣2 van de dummy een vaste slag wordt, of van de schoppensnit (50%), die slaagt als Oost de ♠K heeft.</p>
<p><strong>Het gevaar:</strong> zodra je ♥A weg is, zijn de harten van West vrijgespeeld. Neem je de schoppensnit en verliest die van West, dan incasseert West genoeg harten om je down te spelen, en kom je nooit aan de klaveren toe.</p>
<p><strong>De juiste volgorde:</strong> test eerst de klaveren. ♣A, K en Q incasseren kost niets: bekennen beide tegenspelers drie keer, dan is de ♣2 je negende slag en heb je de snit helemaal niet nodig. Zitten de klaveren niet 3-3, dan eindig je in de dummy en kun je nog steeds een schoppen naar je A Q spelen. Je kans is 36% + (64% × 50%) = 68%, in plaats van 50% voor alleen de snit.</p>
<div class="tip">Probeer eerst de kans waarbij je de slag niet afgeeft. Bewaar de snit, waarmee je de slag misschien aan de gevaarlijke tegenspeler afgeeft, voor het laatst.</div>

<h3>Vrije plaatsen</h3>
<p>Zodra het spel begonnen is, veranderen de kansen. Is bekend dat West vijf harten heeft en Oost maar één, dan heeft West voor de overige onbekende kaarten nog 8 plaatsen en Oost 12. Een bepaalde ontbrekende kaart, zoals de ♠K, zit dan 12 van de 20 keer bij Oost, oftewel 60%, in plaats van 50%. De hand met meer vrije plaatsen heeft meer kans op elke willekeurige kaart. Daarom is het tellen van de hand zo belangrijk.</p>

<h3>Beperkte keuze</h3>
<p>Je hebt A K 10 7 5 tegenover 6 4 3 2, en je mist Q, J, 9 en 8. Je incasseert de aas en Oost laat de vrouw vallen. In de volgende ronde speelt West klein bij. Leg je de heer (in de hoop dat Oost met Q J begon) of snijd je met de 10 (in de hoop dat Oost de vrouw singleton had)?</p>
<p>Snijden. Met een singleton vrouw had Oost geen keus; met Q J had Oost net zo goed de boer kunnen spelen. Een singleton vrouw is dus ongeveer twee keer zo waarschijnlijk als precies Q J: de snit slaagt in ongeveer 65% van de gevallen. Dit principe van de <strong>beperkte keuze</strong> geldt telkens als een tegenstander een van twee gelijkwaardige honneurs speelt.</p>

<h3>Vuistregels voor de vrouw</h3>
<ul>
<li>Acht kaarten zonder de vrouw: snijden (ongeveer 40% met A K J x x en ongeveer 51% met A K J 10 x, tegen ongeveer 33% voor toppen).</li>
<li>Negen kaarten zonder de vrouw: toppen (ongeveer 53% tegen ongeveer 51% voor de snit).</li>
<li>Informatie uit de bieding (wie opende, wie preëmptief bood, wie lengte toonde) is meer waard dan deze kleine verschillen.</li>
</ul>
<div class="warn">Deze percentages zijn alleen een uitgangspunt. Een tegenspeler die in de bieding lange kleuren heeft getoond, heeft minder kans op lengte in de kleur die jij speelt.</div>
`,
    keyPoints: [
      'Vijf ontbrekend: 3-2 68%. Zes ontbrekend: 4-2 48%, 3-3 36%. Vier ontbrekend: 3-1 50%, 2-2 41%, 4-0 10%.',
      'Een oneven aantal ontbrekende kaarten zit meestal gelijk verdeeld; een even aantal meestal niet.',
      'Combineer kansen: test eerst wat de slag niet kost; bewaar de snit naar de gevaarlijke hand voor het laatst.',
      'Vrije plaatsen: de hand met meer onbekende kaarten heeft meer kans op elke willekeurige kaart.',
      'Beperkte keuze: laat een tegenstander een van twee gelijkwaardige honneurs vallen, speel hem dan voor de singleton.',
    ],
    quiz: [
      {
        q: 'De tegenstanders hebben zes kaarten in een kleur. Wat is de waarschijnlijkste verdeling?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: '4-2 komt in ongeveer 48% van de gevallen voor, tegen 36% voor 3-3. Met een even aantal ontbrekende kaarten is een gelijke verdeling de uitzondering, niet de regel.',
      },
      {
        q: 'De tegenstanders hebben vijf kaarten in een kleur. Hoe vaak zitten ze 3-2?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'Ongeveer 68%. 4-1 is ongeveer 28% en 5-0 ongeveer 4%.',
      },
      {
        q: 'Je kunt een 3-3-verdeling proberen (36%) en, als die mislukt, een snit nemen (50%). Wat is de gecombineerde kans?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: '36% plus de helft van de overige 64%: 36 + 32 = 68%.',
      },
      {
        q: 'Waarom incasseer je in het 3SA-spel hierboven de klaveren voordat je de schoppensnit neemt?',
        options: ['Om de hand te tellen', 'Klaveren testen kost de slag niet, terwijl een verloren snit West de harten laat incasseren', 'Omdat de snit later meer kans heeft', 'Om de klaveren te deblokkeren'],
        answer: 1,
        explain: 'Verliest de snit, dan speelt West de harten af en kom je nooit aan de klaveren toe. Als je eerst de klaveren incasseert, blijven beide kansen bestaan.',
      },
      {
        q: 'Je hebt A K 10 7 5 tegenover 6 4 3 2. Op de aas laat Oost de vrouw vallen. In de volgende ronde speelt West klein. Wat is het beste?',
        options: ['De heer leggen', 'Snijden met de 10', 'Het is precies 50-50', 'Vanuit de andere hand spelen'],
        answer: 1,
        explain: 'Beperkte keuze: met Q J had Oost beide honneurs kunnen spelen, maar met een singleton vrouw had hij geen keus. De singleton is de waarschijnlijkere situatie, dus de snit slaagt in ongeveer 65% van de gevallen.',
      },
    ],
  },

  {
    id: 'ruffing-finesse-and-loser-on-loser',
    title: 'De troefsnit, verliezer op verliezer en een kleur vrijtroeven',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Drie manieren waarop de leider met troeven slagen maakt: de troefsnit, een verliezer op een verliezer afgooien en een bijkleur vrijtroeven.',
    body: `
<h3>De troefsnit</h3>
<p>Een gewone snit speel je <em>naar</em> een vork toe. Een <strong>troefsnit</strong> speelt een honneur <em>door</em> de tegenspeler heen die de ontbrekende hogere kaart kan hebben, met een renonce en een troef erachter klaar. Legt die tegenspeler op, dan troef je in en zijn je overige honneurs vaste slagen; legt hij niet op, dan gooi je een verliezer af.</p>
<p>Met ♦K Q J 10 in de dummy en geen ruiten in je hand speel je de ♦K. Legt Oost de aas op, dan troef je in en zijn Q J 10 vrij. Speelt Oost klein, dan gooi je een verliezer af: houdt de heer, dan heb je een slag gewonnen, en neemt West met de aas, dan heb je alleen een verliezer tegen een andere geruild. Hoe dan ook leveren de overige honneurs afgooiers op.</p>

<h4>Welke snit?</h4>
<p>Met A Q J 10 tegenover een singleton heb je de keus. De gewone snit (spelen naar A Q) lukt als <strong>West</strong> de heer heeft; de troefsnit (eerst de aas, dan de vrouw) lukt als <strong>Oost</strong> hem heeft. Op zichzelf zijn ze even goed, dus laat de rest van het spel beslissen: het bieden kan de heer plaatsen, en vaak is de ene tegenspeler gevaarlijk en de andere niet. Kies de snit die, als hij mislukt, verliest aan de ongevaarlijke tegenspeler.</p>
<div class="deal" data-n="S:J103 H:AQJ102 D:762 C:84" data-e="S:62 H:K743 D:J84 C:9653" data-s="S:AKQ984 H:6 D:K53 C:A72" data-w="S:75 H:985 D:AQ109 C:KQJ10" data-caption="4♠ door Zuid. West komt uit met ♣K."></div>
<p>Oost is de gevaarlijke tegenspeler: een ruiten van Oost, door je ♦K heen, kan de tegenspelers drie ruitenslagen opleveren. West is ongevaarlijk: een ruiten van West komt naar je heer toe.</p>
<ul>
<li><strong>De gewone snit</strong>, harten naar de vrouw, verliest aan de heer van Oost. Oost stapt over op ♦J en je gaat twee down.</li>
<li><strong>De troefsnit:</strong> harten naar de aas, dan de ♥Q. Legt Oost op, troef dan in, en de overige harten van de dummy nemen je ruitens voor hun rekening; speelt Oost klein, gooi dan een ruiten af. Zoals de kaarten zitten maak je twaalf slagen.</li>
</ul>
<p>En als West de ♥K had gehad? Dan mislukt de troefsnit, maar aan West, die geen ruiten door je heer kan spelen, en je hebt al een ruiten op de ♥Q afgegooid: je maakt toch tien slagen. De troefsnit maakt het contract, wie de heer ook heeft.</p>

<h3>Verliezer op verliezer</h3>
<p>Soms is het beste antwoord op een slag die je toch verliest niet introeven, maar er een verliezer uit een andere kleur op afgooien. Het aantal slagen blijft gelijk, want de ene verliezer vervangt de andere, maar je houdt je troeven, je controle of je entrees.</p>
<div class="deal" data-n="S:542 H:9862 D:764 C:A83" data-e="S:J3 H:107 D:J532 C:K9642" data-s="S:AK10987 H:43 D:AKQ C:75" data-w="S:Q6 H:AKQJ5 D:1098 C:QJ10" data-caption="4♠ door Zuid. West incasseert ♥A en ♥K, Oost speelt hoog-laag, en West speelt door met ♥Q."></div>
<p>Oost troeft de derde harten in met ♠J. Troef je over, dan zit ♠Q 6 van West boven je enige overgebleven tophonneur en wordt de vrouw gepromoveerd: je verliest twee harten, een troef en een klaver, één down. Gooi in plaats daarvan je verliezende klaver af. De boer van Oost maakt de slag, maar je troeven blijven heel: aas en heer vangen de vrouw van West, en de klaververliezer is al weg. Tien slagen.</p>
<p>Andere veelvoorkomende toepassingen:</p>
<ul>
<li><strong>Controle houden:</strong> als de tegenspelers een kleur spelen die je in je lange hand zou moeten introeven, houd je met het afgooien van een verliezer je troeflengte (zie de les "Troefbehandeling").</li>
<li><strong>Een kleur vrijspelen:</strong> met ♦Q J 10 9 in de dummy, geen ruiten in je hand en zonder aas en heer speel je de vrouw en daarna de boer, en gooi je elke keer een verliezer af. Je geeft twee slagen af die je toch al kwijt was, en de 10 en de 9 zijn nu vaste slagen.</li>
<li><strong>Een ingooi:</strong> de tegenspeler die een verliezer-op-verliezer-slag wint, moet misschien in je vork spelen of je introeven en afgooien geven (zie de les "Kennismaking met squeeze en ingooi").</li>
</ul>

<h3>Een kleur vrijtroeven</h3>
<p>Een lange bijkleur in de dummy kun je <strong>vrijtroeven</strong>: troef de kleintjes ervan in je hand in tot de tegenspelers er geen meer hebben, en de rest van de kleur levert afgooiers op. Elke introever vraagt een entree terug naar de dummy, en aan het eind heb je er nog een nodig om de lange kaarten te incasseren, dus tel de entrees voordat je begint.</p>
<table>
<thead><tr><th>Dummy</th><th>Jouw hand</th><th>Verdeling</th><th>Nodige introevers</th><th>Lange kaarten</th></tr></thead>
<tbody>
<tr><td>A K 6 5 4 2</td><td>3</td><td>3-3</td><td>1</td><td>3</td></tr>
<tr><td>A K 6 5 4 2</td><td>3</td><td>4-2</td><td>2</td><td>2</td></tr>
<tr><td>A 6 5 4 3</td><td>7</td><td>4-3</td><td>3</td><td>1</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K85 H:A6543 D:K52 C:64" data-e="S:6 H:K98 D:876 C:QJ10987" data-s="S:AQJ10932 H:7 D:A43 C:A5" data-w="S:74 H:QJ102 D:QJ109 C:K32" data-caption="6♠ door Zuid. West komt uit met ♦Q."></div>
<p>Je hebt elf vaste slagen: zeven schoppens, de ♥A, ♦A K en de ♣A. De twaalfde moet uit de harten van de dummy komen, die bij een 4-3-verdeling drie introevers nodig hebben, dus je hebt na de ♥A drie entrees naar de dummy nodig: de ♠8, de ♠K en de ♦K.</p>
<ol>
<li>Neem de ♦Q met de <strong>aas</strong>, zodat de ♦K van de dummy als entree blijft.</li>
<li>Speel harten naar de aas en troef een harten in met ♠9.</li>
<li>Speel ♠2 naar de 8 van de dummy en troef nog een harten in met ♠10.</li>
<li>Speel ♠3 naar de heer en troef een derde harten in met ♠J. Nu hebben de tegenspelers geen harten en geen troef meer.</li>
<li>Ga met de ♦K naar de dummy en incasseer de vijfde harten, waarop je je verliezende klaver afgooit. Je verliest alleen een ruiten.</li>
</ol>
<p>Neem je de eerste slag met de heer van de dummy, of trek je eerst twee rondes troef, dan kom je een entree tekort: het slem gaat down.</p>
<div class="tip">Plan de entrees voordat je de kleur aanraakt: één voor elke introever, plus één om de lange kaarten te incasseren. De troeven van de dummy zijn vaak de entrees, dus speel je kleine troeven daarheen en troef in met je hoge.</div>
<div class="warn">Troef hoog in zodra een tegenspeler door de kleur heen kan zijn en kan overtroeven.</div>
`,
    keyPoints: [
      'Een troefsnit speelt een honneur door de tegenspeler heen die de ontbrekende kaart kan hebben: legt hij op, dan troef je in; zo niet, dan gooi je een verliezer af.',
      'Met A Q J 10 tegenover een singleton kies je tussen de gewone snit en de troefsnit door je af te vragen aan welke tegenspeler je de slag mag afgeven.',
      'Verliezer op verliezer: gooi een verliezer af in plaats van in te troeven als introeven een troefslag, de controle of een entree zou kosten.',
      'Om een kleur vrij te troeven heb je een entree nodig voor elke introever, plus één om de lange kaarten te incasseren.',
      'Gebruik de troeven van de dummy als entrees; trek geen troef voordat je ze hebt gebruikt.',
    ],
    quiz: [
      {
        q: 'De dummy heeft ♦K Q J 10 en jij hebt geen ruiten. Je speelt de ♦K en Oost speelt klein. Wat doe je?',
        options: ['Introeven', 'Een verliezer afgooien', 'Een vaste slag afgooien', 'Liever een andere kleur spelen'],
        answer: 1,
        explain: 'Dat is de troefsnit. Houdt de heer, dan heb je een slag gewonnen; neemt West met de aas, dan heb je alleen een verliezer tegen een andere geruild, en Q J 10 zijn vaste slagen.',
      },
      {
        q: 'Je hebt ♥A Q J 10 in de dummy tegenover een singleton. Wanneer lukt de troefsnit (eerst de aas, dan de vrouw)?',
        options: ['Als West de heer heeft', 'Als Oost de heer heeft', 'Altijd als harten 3-3 zit', 'Altijd'],
        answer: 1,
        explain: 'De vrouw wordt door Oost heen gespeeld: Oost legt op en jij troeft in, of Oost duikt en de vrouw houdt. De gewone snit, naar A Q toe, is de snit die lukt als West de heer heeft.',
      },
      {
        q: 'Waarom is in het 4♠-spel hierboven de troefsnit beter dan de gewone snit?',
        options: ['Hij lukt vaker', 'Als hij mislukt, verliest hij aan West, die je ♦K niet kan aanvallen', 'Hij spaart een entree', 'Hij trekt tegelijk troef'],
        answer: 1,
        explain: 'Elke snit lukt de helft van de keren, maar de gewone verliest aan Oost, die een ruiten door je heer kan spelen. Mislukt de troefsnit, dan zit West aan slag en heb je al een ruiten afgegooid.',
      },
      {
        q: 'In het verliezer-op-verliezer-spel troeft Oost de derde harten in met ♠J. Wat doe je?',
        options: ['Overtroeven met de aas', 'Overtroeven met de heer', 'Je verliezende klaver afgooien', 'Een ruiten afgooien'],
        answer: 2,
        explain: 'Overtroeven promoveert ♠Q 6 van West tot een slag. De klaver afgooien, die toch een verliezer was, laat je troeven heel, en aas en heer vangen daarna de vrouw.',
      },
      {
        q: 'De dummy heeft ♥A 6 5 4 3 en jij een singleton. De harten van de tegenspelers zitten 4-3. Hoe vaak moet je introeven voordat de laatste harten van de dummy een vaste slag is?',
        options: ['Eén keer', 'Twee keer', 'Drie keer', 'Vier keer'],
        answer: 2,
        explain: 'Na de aas hebben de tegenspelers nog vijf harten, waarvan drie in één hand. Je moet drie rondes introeven en hebt na elke introever een entree naar de dummy nodig.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'Balanceren',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wanneer en hoe je de bieding in de balanspositie heropent, en waarom je daar met minder kunt bieden.',
    body: `
<h3>De balanspositie</h3>
<p>Je zit in de <strong>balanspositie</strong> als jouw pas de bieding zou beëindigen. Bijvoorbeeld: West opent 1♥, partner past, Oost past, en jij bent aan de beurt. De tegenstanders zijn laag gestopt, en dat vertelt je iets: Oost heeft minder dan 6 punten, en West is meestal niet erg sterk. De ontbrekende kracht moet ergens zitten, en veel daarvan zit bij partner. Partner kan met een goede hand gepast hebben omdat er gewoon geen geschikt bod was, bijvoorbeeld met lengte in harten.</p>

<h3>Leen een heer</h3>
<p>In de balanspositie mag je dus met ongeveer <strong>3 punten minder</strong> bieden dan in de directe positie, alsof je een heer van partner hebt geleend. Partner moet die heer dan wel teruggeven en niet bieden alsof je een volwaardig bod hebt gedaan.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Balanceren na 1♥ – pas – pas</th><th>Betekenis (ongeveer)</th></tr></thead>
<tbody>
<tr><td>Volgbod in een kleur</td><td>Ongeveer 5-13 punten en een redelijke kleur</td></tr>
<tr><td>Doublet</td><td>Ongeveer 9+ punten, kort in harten, steun voor de andere kleuren (of een sterke hand)</td></tr>
<tr><td>1SA</td><td>Ongeveer 11-14 punten, evenwichtig, met een hartenstop</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – pas – pas – ?: doublet"></div>
<p>10 punten en kort in harten: te licht voor een direct doublet, maar een normaal doublet in de balanspositie.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – pas – pas – ?: 1SA"></div>
<p>13 punten, evenwichtig, met de ruiten gestopt: 1SA in de balanspositie, dat ruwweg 11-14 toont in plaats van de 15-18 van een direct volgbod van 1SA.</p>

<h3>Als zij een fit hebben gevonden</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Balanceer met een doublet"></div>
<p>De tegenstanders hebben een schoppenfit gevonden en zijn op 2-niveau gestopt, dus ze hebben maar ongeveer de helft van de punten. Als zij acht of negen schoppen hebben, hebben jullie hoogstwaarschijnlijk ook een fit. Ze op 2-niveau laten spelen terwijl jullie een fit hebben, is meestal verliesgevend. Doubleer informatief en nodig partner uit zijn beste kleur op 3-niveau te bieden.</p>

<h3>Wanneer je niet balanceert</h3>
<ul>
<li><strong>Als je lang bent in hun kleur.</strong> Dan is partner er kort in, en met punten zou hij meestal gedoubleerd hebben. Misschien zitten ze in een slecht contract; laat ze dat spelen.</li>
<li><strong>Als ze geen fit hebben en het moeilijk hebben.</strong> Heeft de openaar een tweede kleur geboden en heeft de antwoorder met tegenzin voorkeur gegeven, dan gaan ze misschien down: red ze niet.</li>
<li><strong>Na 1SA – pas – pas</strong> balanceer je alleen met een goede kleur of verdeling. De partner van de openaar kan tot 7 punten hebben, en de kracht is gelijkmatiger verdeeld.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – pas – pas – ?: pas"></div>
<p>11 punten, maar vijf harten: de kleur van de openaar. Partner heeft waarschijnlijk hoogstens een of twee harten en doubleerde niet, dus hij is zwak. 1♥ gaat waarschijnlijk down; pas.</p>
<div class="tip">Als partner balanceert, denk er dan aan dat hij al een deel van jouw punten heeft meegeteld. Bied één niveau voorzichtiger dan je zou doen tegenover een bod in de directe positie.</div>
<div class="warn">Straf partner niet omdat hij de bieding heropent. Heb je een goede hand en heropent partner met een doublet, bedenk dan of het misschien een licht balanceerbod is voordat je naar de manche springt.</div>
`,
    keyPoints: [
      'In de balanspositie mag je met ongeveer 3 punten minder bieden dan in de directe positie ("leen een heer").',
      'Na 1♥ – pas – pas: een kleur met ongeveer 5-13, een doublet met ongeveer 9+, 1SA met ongeveer 11-14.',
      'Laat de tegenstanders niet op 2-niveau spelen als ze een fit hebben gevonden; bied mee.',
      'Wees voorzichtig met balanceren als je lang bent in hun kleur.',
      'Als partner balanceert, geef je de heer terug: bied als antwoord niet te veel.',
    ],
    quiz: [
      {
        q: '1♥ – pas – pas – ? Je hebt ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 punten).',
        options: ['Pas', 'Doublet', '1♠', '1SA'],
        answer: 1,
        explain: 'Kort in harten en steun voor de andere kleuren. 10 punten is licht voor een direct doublet, maar prima in de balanspositie.',
      },
      {
        q: '1♦ – pas – pas – ? Je hebt ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 punten).',
        options: ['Pas', 'Doublet', '1SA', '2SA'],
        answer: 2,
        explain: '1SA in de balanspositie toont ongeveer 11-14 met een stop. Dit is precies zo’n hand.',
      },
      {
        q: '1♥ – pas – pas – ? Je hebt ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 punten).',
        options: ['Pas', 'Doublet', '1SA', '2♦'],
        answer: 0,
        explain: 'Met vijf kaarten in de kleur van de openaar is partner kort in harten, en met punten zou hij gedoubleerd hebben. 1♥ kan best down gaan; pas.',
      },
      {
        q: 'Waarom mag je in de balanspositie met minder punten bieden dan in de directe positie?',
        options: ['Omdat de tegenstanders zwak zijn, moet partner wat punten hebben', 'Omdat de regels dat toestaan', 'Omdat je kwetsbaar bent', 'Omdat de tegenstanders niet kunnen doubleren'],
        answer: 0,
        explain: 'Als de tegenstanders laag stoppen, is de overige kracht verdeeld tussen jou en partner. Partner kan met een redelijke hand gepast hebben bij gebrek aan een goed bod.',
      },
      {
        q: 'De tegenstanders bieden 1♠ – 2♠ en passen. Wat is in de balanspositie het algemene principe?',
        options: ['Altijd passen: zij hebben een fit', 'Meebieden: als zij een fit op 2-niveau hebben, hebben jullie er waarschijnlijk ook een', 'Alleen bieden met 12+ punten', 'Doubleren voor straf'],
        answer: 1,
        explain: 'Als zij acht of negen troeven hebben, hebben jullie waarschijnlijk zelf ook een fit. Ze op 2-niveau laten spelen is meestal slechter dan meebieden tot 3-niveau.',
      },
    ],
  },

  {
    id: 'law-of-total-tricks',
    title: 'De wet van het totaal aantal slagen',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Hoe het aantal troeven van beide kanten je helpt bij competitieve beslissingen in de strijd om de deelscore.',
    body: `
<h3>De wet</h3>
<p>Het <strong>totaal aantal slagen</strong> in een spel is het aantal slagen dat Noord-Zuid in hun beste troefkleur kunnen maken plus het aantal dat Oost-West in die van hen kunnen maken. De wet van het totaal aantal slagen (Law of Total Tricks) zegt dat dit totaal ongeveer gelijk is aan het <strong>totaal aantal troeven</strong>: de lengte van de langste fit van Noord-Zuid plus de lengte van de langste fit van Oost-West.</p>
<p>Hebben jullie negen schoppen en zij acht harten, dan zijn er in totaal ongeveer 17 slagen: als zij in harten negen slagen kunnen maken, kunnen jullie er in schoppen ongeveer acht maken, enzovoort.</p>

<h3>De praktische regel</h3>
<p>In een competitieve bieding bied je mee tot het niveau dat gelijk is aan het aantal troeven van jullie kant:</p>
<table>
<thead><tr><th>Troeven van jullie kant</th><th>Meebieden tot</th></tr></thead>
<tbody>
<tr><td>8</td><td>2-niveau (8 slagen)</td></tr>
<tr><td>9</td><td>3-niveau (9 slagen)</td></tr>
<tr><td>10</td><td>4-niveau (10 slagen)</td></tr>
</tbody>
</table>
<p>De logica: met negen troeven zit je op 3-niveau "veilig", want ook als je down gaat, kunnen de tegenstanders waarschijnlijk zelf iets maken. Met maar acht is bieden op 3-niveau riskant als zij er ook acht hebben, want dan is het totaal maar 16.</p>

<h3>Een voorbeeld</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Openaar: bied 3♠"></div>
<p>De verhoging van partner toont drie troeven. Met zes schoppen hebben jullie er negen: bied mee tot 3♠. Kunnen zij 3♥ maken, dan suggereert het totaal van ongeveer 17 slagen dat jullie in schoppen acht of negen slagen maken, dus 3♠ is hoe dan ook een goed resultaat.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Openaar: pas"></div>
<p>Met vijf schoppen hebben jullie er acht. Hebben beide kanten acht troeven (16 in totaal) en maken zij negen slagen in harten, dan maken jullie er in schoppen maar zeven: 3♠ zou twee down gaan. Pas en speel tegen; je punten buiten de schoppen kunnen 3♥ heel goed down spelen.</p>

<h3>Bijstellingen</h3>
<p>De wet is een benadering. Verwacht <strong>meer</strong> slagen in totaal dan troeven met:</p>
<ul>
<li>een dubbele fit (een tweede fit in een bijkleur),</li>
<li>korte kleuren in de kleuren van de tegenstanders, gecombineerd met lange troeven,</li>
<li>honneurs geconcentreerd in je eigen lange kleuren.</li>
</ul>
<p>Verwacht <strong>minder</strong> slagen in totaal met:</p>
<ul>
<li>vrouwen en boeren in de kleuren van de tegenstanders (goed in de verdediging, zwak als je zelf speelt),</li>
<li>een vlakke verdeling (4-3-3-3) in een van beide handen,</li>
<li>zwakke troeven.</li>
</ul>

<h3>Principes voor de strijd om de deelscore</h3>
<ul>
<li>Laat de tegenstanders niet op 2-niveau spelen als jullie een achtkaartfit hebben en zij ook.</li>
<li>Met negen troeven bied je mee tot 3-niveau; verhoog preëmptief als je extra troeven hebt, vooral bij gunstige kwetsbaarheid.</li>
<li>Bied met maar acht troeven niet drie over drie, tenzij je extra verdeling hebt: speel dan liever tegen.</li>
<li>Eén down ongedoubleerd (−50 of −100) is beter dan ze een deelscore laten maken (−110 of −140).</li>
</ul>
<div class="tip">Als partner een volgbod geeft en jij vierkaartsteun en een zwakke hand hebt, denk dan aan de wet: met negen of tien troeven samen verhoog je tot het niveau dat daarbij past, zodat je het de tegenstanders moeilijker maakt.</div>
<div class="warn">Gebruik de wet niet om met zwakke handen manches en slems te bieden. Het is een richtlijn voor competitieve beslissingen over de deelscore, als beide kanten bieden.</div>
`,
    keyPoints: [
      'Totaal aantal slagen (de beste contracten van beide kanten) ≈ totaal aantal troeven (de langste fits van beide kanten).',
      'Bied mee tot het niveau dat gelijk is aan het aantal troeven van jullie kant: 8 → 2-niveau, 9 → 3-niveau, 10 → 4-niveau.',
      'Met elk acht troeven is drie over drie meestal fout: speel tegen.',
      'Stel naar boven bij voor dubbele fits en korte kleuren; naar beneden voor losse honneurs in hun kleuren en vlakke verdelingen.',
      'Een kleine ongedoubleerde min is beter dan ze een deelscore laten maken.',
    ],
    quiz: [
      {
        q: 'Jullie hebben negen troeven in een competitieve bieding om de deelscore. Tot welk niveau raadt de wet aan mee te bieden?',
        options: ['2-niveau', '3-niveau', '4-niveau', '5-niveau'],
        answer: 1,
        explain: 'Bied tot het niveau dat gelijk is aan je troeven: negen troeven, negen slagen, 3-niveau.',
      },
      {
        q: 'Beide kanten hebben een achtkaartfit. De tegenstanders bieden 3♥ over jouw 2♠. Wat raadt de wet aan?',
        options: ['Bied 3♠', 'Speel tegen: met 16 slagen in totaal maken jullie er maar zeven als zij er negen maken', 'Bied 4♠', 'Doubleer voor straf, ongeacht je hand'],
        answer: 1,
        explain: 'Met in totaal 16 troeven komen de slagen samen uit op ongeveer 16. Maakt 3♥, dan gaat 3♠ twee down; zou 3♠ maken, dan gaat 3♥ down. Tegenspelen is hoe dan ook minstens zo goed.',
      },
      {
        q: 'Welk kenmerk wijst op meer slagen in totaal dan het aantal troeven?',
        options: ['Vrouwen en boeren in de kleur van de tegenstanders', 'Een 4-3-3-3-verdeling', 'Een dubbele fit met een korte kleur in de kleur van de tegenstanders', 'Zwakke troeven'],
        answer: 2,
        explain: 'Een tweede fit en korte kleuren laten beide kanten in hun eigen contract meer slagen maken dan het aantal troeven alleen doet vermoeden.',
      },
      {
        q: 'Je opende 1♠ met zes schoppen en een minimum. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Pas', '3♠', '4♠', 'Doublet'],
        answer: 1,
        explain: 'Partner heeft drie schoppen, dus jullie hebben er negen. Meebieden tot 3♠ is precies wat de wet aanraadt.',
      },
      {
        q: 'Welke bijstelling is negatief en wijst op minder slagen in totaal?',
        options: ['Een korte kleur in de kleur van de tegenstanders', 'Vrouwen en boeren in de kleuren van de tegenstanders', 'Een tienkaartfit', 'Een tweede fit'],
        answer: 1,
        explain: 'Losse honneurs in de kleuren van de tegenstanders maken slagen in de verdediging, maar zijn weinig waard als je zelf speelt, dus beide kanten maken als leider meestal minder slagen.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Kwetsbaarheid, IMP’s, matchpunten en par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Hoe de kwetsbaarheid en de manier van tellen je beslissingen in de bieding en in het spel veranderen.',
    body: `
<h3>Kwetsbaarheid</h3>
<p>Bij elk spel staat wie kwetsbaar is. Vanuit jullie kant gezien zijn er vier combinaties, die meestal zo worden omschreven:</p>
<ul>
<li><strong>Gunstig:</strong> jullie niet kwetsbaar, zij wel. Bied gerust preëmptief en offer; jullie onderslagen zijn goedkoop en hun manches zijn duur.</li>
<li><strong>Gelijk:</strong> beide kanten niet kwetsbaar, of beide kwetsbaar.</li>
<li><strong>Ongunstig:</strong> jullie kwetsbaar, zij niet. Wees voorzichtig: down gaan kost 100 per slag ongedoubleerd en 200-300 gedoubleerd, terwijl hun manches minder waard zijn.</li>
</ul>
<p>Kwetsbaarheid verandert ook je manchebeslissingen: een kwetsbare manche levert 500 extra op in plaats van 300, dus kwetsbare manches zijn het waard om met minder kracht te bieden, vooral bij IMP’s.</p>

<h3>Viertallen: IMP’s</h3>
<p>Bij een viertallenwedstrijd worden dezelfde spellen aan beide tafels gespeeld, en het verschil in score wordt omgezet in IMP’s (International Match Points):</p>
<table>
<thead><tr><th>Verschil</th><th>IMP’s</th><th>Verschil</th><th>IMP’s</th></tr></thead>
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
<p>Verschillen van 0-10 leveren 0 op; 3500-3990 levert 23 op en 4000+ levert 24 op. De schaal stijgt langzaam, dus grote verschillen komen van manches en slems, en overslagen doen er nauwelijks toe. Dat geeft de IMP-strategie:</p>
<ul>
<li><strong>Bied manches agressief.</strong> Niet kwetsbaar levert 4♠ bieden 6 IMP’s op als het gemaakt wordt (+420 tegen +170) en kost het er 5 als het down gaat (−50 tegen +140): de moeite waard bij een kans van ongeveer 45%. Kwetsbaar: 10 winst (+620 tegen +170), 6 verlies (−100 tegen +140): de moeite waard bij ongeveer 37%.</li>
<li><strong>Klein slem</strong> is de moeite waard bij ongeveer 50%; <strong>groot slem</strong> alleen bij ruim boven de 50% (het omslagpunt ligt rond 56-57%, en in de praktijk wil je bijna zekerheid).</li>
<li><strong>Veiligheid voorop in het spel</strong>: geef een overslag op om het contract te beschermen.</li>
</ul>

<h3>Parenwedstrijden: matchpunten</h3>
<p>Bij een parenwedstrijd wordt je score op elk spel vergeleken met die van alle andere paren die in dezelfde richting speelden, en krijg je een punt (bij sommige telwijzen twee) voor elk paar dat je verslaat. De <em>grootte</em> van het verschil doet er niet toe, alleen hoeveel paren je verslaat. Dat verandert de prioriteiten:</p>
<ul>
<li>Overslagen tellen: +450 verslaat +420 net zo zeker als +620 +170 verslaat.</li>
<li>Denominaties die meer opleveren, tellen: 3SA met tien slagen (+430) verslaat 4♠ met tien slagen (+420). Met twee evenwichtige handen en een 4-4-fit in een hoge kleur wordt daarom soms voor 3SA gekozen.</li>
<li>Om deelscores wordt hard gevochten: +110 tegen +90 is in matchpunten een groot verschil, en de tegenstanders een niveau hoger drijven zodat ze down gaan, is vaak de winnende actie.</li>
<li>Een deelscore doubleren voor +200 kan iedereen verslaan die +110 of +140 scoorde, maar als ze het gedoubleerd maken, krijg je een nul.</li>
<li>Veiligheidsspelen die een overslag kosten, zijn alleen goed als het contract zelf echt in gevaar is.</li>
</ul>

<h3>Par</h3>
<p>Het <strong>par</strong>-resultaat is wat er gebeurt als beide kanten perfect bieden, met kennis van alle vier de handen. Als Oost-West bijvoorbeeld kwetsbaar 4♠ kunnen maken (620) en Noord-Zuid niet kwetsbaar acht slagen in ruiten kunnen maken, dan is par 5♦ gedoubleerd, drie down, door Noord-Zuid: −500 is voor hen beter dan −620. Echte resultaten worden met par vergeleken om te zien welke kant er beter van werd, en nadenken over par traint een goed oordeel in de biedstrijd.</p>
<div class="tip">Let voor elk spel op de kwetsbaarheid. Vraag je af: "Hoeveel is hun manche waard, en hoeveel kan ik me veroorloven te verliezen?"</div>
<div class="warn">Neem bij IMP’s geen onnodige risico’s voor overslagen, en speel bij matchpunten geen veiligheidsspelen die overslagen kosten als het contract niet in gevaar is. Het juiste spel kan van de telling afhangen.</div>
`,
    keyPoints: [
      'Gunstige kwetsbaarheid (jullie niet kwetsbaar, zij wel) is het moment voor preëmpts en offerbiedingen; ongunstige kwetsbaarheid is het moment om voorzichtig te zijn.',
      'IMP’s: bied niet-kwetsbare manches bij ongeveer 45%, kwetsbare manches bij ongeveer 37%, klein slem bij 50%.',
      'IMP’s: overslagen doen er weinig toe; bescherm het contract.',
      'Matchpunten: elk paar dat je verslaat telt, dus overslagen en denominaties die meer opleveren doen ertoe.',
      'Par is het resultaat van perfect bieden door beide kanten, inclusief offerbiedingen.',
    ],
    quiz: [
      {
        q: 'Wat betekent "ongunstige kwetsbaarheid"?',
        options: ['Beide kanten kwetsbaar', 'Jullie kwetsbaar, zij niet', 'Jullie niet kwetsbaar, zij wel', 'Geen van beide kanten kwetsbaar'],
        answer: 1,
        explain: 'Ongunstig betekent dat jullie onderslagen duur zijn en hun manches relatief goedkoop: het slechtste moment om te offeren of wild preëmptief te bieden.',
      },
      {
        q: 'Hoe vaak moet een kwetsbare manche bij IMP’s ongeveer gemaakt worden om de moeite van het bieden waard te zijn?',
        options: ['Ongeveer 37%', 'Ongeveer 50%', 'Ongeveer 60%', 'Ongeveer 75%'],
        answer: 0,
        explain: 'Je wint 10 IMP’s (+620 tegen +170) als hij gemaakt wordt en verliest er 6 (−100 tegen +140) als hij down gaat, dus het omslagpunt ligt rond 6/16 = 37,5%.',
      },
      {
        q: 'Waarom doet +430 tegen +420 er bij matchpunten toe?',
        options: ['Dat doet het niet: het verschil is klein', 'Elk paar dat je verslaat telt, hoe klein het verschil ook is', 'Vanwege de IMP-schaal', 'Omdat sans atout een premie oplevert'],
        answer: 1,
        explain: 'Bij parenwedstrijden telt alleen de rangorde. Met tien punten versla je een paar net zo zeker als met duizend.',
      },
      {
        q: 'Hoeveel IMP’s is een verschil van 250 punten?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 is 6 IMP’s. Bijvoorbeeld +420 tegen +170 als het ene team een niet-kwetsbare manche biedt en het andere in een deelscore blijft steken.',
      },
      {
        q: 'De tegenstanders kunnen kwetsbaar 4♠ maken (620). Jullie zijn niet kwetsbaar en verwachten in 5♦ gedoubleerd drie down te gaan. Wat levert dat op?',
        options: ['Een verlies van 800', 'Een verlies van 500, en dat is beter dan −620', 'Een verlies van 300', 'Winst'],
        answer: 1,
        explain: 'Niet kwetsbaar is drie down gedoubleerd 100 + 200 + 200 = 500. Dat is 120 minder dan hun manche, dus het offerbod levert winst op als 4♠ echt gemaakt wordt.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Veiligheidsspelen',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Hoe je een beetje opgeeft, meestal een overslag, om het contract te beschermen tegen een slechte verdeling.',
    body: `
<h3>Een verzekering voor je contract</h3>
<p>Een <strong>veiligheidsspel</strong> is een manier om een kleur (of de hele hand) te spelen die je beschermt tegen een slechte verdeling, meestal ten koste van een kleine kans op een extra slag. Je koopt een verzekering: je geeft bij de goede liggingen een beetje op om een ramp bij de slechte te voorkomen. De eerste vraag is daarom altijd: <em>hoeveel slagen heb ik nodig uit deze kleur?</em> Het beste spel voor vier slagen is vaak anders dan het beste spel voor vijf.</p>

<h3>Houd aan beide kanten een vork</h3>
<p>Je hebt A Q 9 6 5 in de dummy tegenover K 10 4 3 in je hand, je mist J 8 7 2, en je hebt vijf slagen nodig. Meestal werkt elke verstandige speelwijze; het gevaar is dat alle vier de ontbrekende kaarten in één hand zitten.</p>
<ul>
<li><strong>Incasseer eerst de aas.</strong> Bekent West niet, dan heeft Oost J 8 7, vóór je K 10, dus speel je twee keer vanuit de dummy en snijd je. Bekent Oost niet, dan heeft West J 8 7, vóór de Q 9 van de dummy, dus speel je twee keer vanuit je hand en snijd je. Vijf slagen, welke tegenspeler de lengte ook heeft.</li>
<li>Eerst de heer incasseren is een fout: bekent West daarna niet, dan zit J 8 7 van Oost achter de overgebleven A Q 9 van de dummy, kan jouw 10 4 3 de boer niet vangen, en maakt Oost zeker een slag.</li>
</ul>
<p>De algemene regel: als je op één na alle tophonneurs hebt, incasseer dan eerst de honneur waarna je in <em>beide</em> handen nog een snijpositie overhoudt.</p>

<h3>Een overslag opgeven om het contract zeker te stellen</h3>
<p>Je hebt A K 10 5 4 in de dummy tegenover 8 7 6, en je hebt vier slagen nodig; je mag er één verliezen. Het natuurlijke spel, aas, heer en nog een keer, levert maar in ongeveer 73% van de gevallen vier slagen op: het mislukt bij een 5-0-verdeling en bij de meeste 4-1-verdelingen.</p>
<p>Beter: incasseer de aas, speel dan naar de dummy en leg de 10 als West laag speelt. Neemt Oost met een honneur, dan zat de kleur meestal 3-2 en zijn de heer en de lange kaarten goed; wint de 10, dan heb je de lengte van West opgevangen. Zo maak je in ongeveer 82% van de gevallen vier slagen: naast elke 3-2-verdeling vang je ook alle 4-1-verdelingen op waarin West de lengte heeft. De prijs is een iets kleinere kans op vijf slagen, en die doet er alleen toe als je ze nodig hebt.</p>

<h3>Duiken voor de veiligheid</h3>
<p>De dummy heeft A K 7 6 5 4 en maar één entree daarbuiten; jij hebt 3 2 en hebt vier slagen nodig. Speel je aas, heer en een derde ronde, dan houd je bij een 4-1-verdeling twee verliezers in de kleur en kun je de lange kaarten niet meer bereiken. Duik daarom de eerste ronde helemaal. Later kun je naar de aas en de heer spelen en, als de kleur 4-1 zat, nog een ronde afgeven en de entree daarbuiten gebruiken om de laatste twee te incasseren. Vier slagen tegen elke 3-2- of 4-1-verdeling: 96%.</p>

<h3>Veiligheid voor de hele hand</h3>
<p>Veiligheid gaat niet alleen over losse kleuren. Stel dat je in 3SA negen slagen kunt tellen en dat een snit een tiende zou kunnen opleveren, maar dat de tegenspeler die de slag wint als de snit verliest, vier slagen in zijn lange kleur kan incasseren. Neem die snit dan niet. Bij viertallen is een overslag hoogstens 1 IMP waard en het contract veel meer. Vraag je ook, voordat je in één kleur een risico neemt, af of een andere kleur de slagen zonder enig risico kan leveren.</p>
<div class="tip">Vraag je af voordat je een sleutelkleur aanraakt: "Wat is de slechtste verdeling waar ik nog tegen kan, en welke speelwijze kan daar tegen?"</div>

<h3>Veiligheidsspelen en de telling</h3>
<ul>
<li><strong>Viertallen (IMP’s):</strong> speel bijna elk veiligheidsspel dat het contract beschermt. Een overslag levert heel weinig op; een mislukte manche kost veel.</li>
<li><strong>Parenwedstrijden (matchpunten):</strong> overslagen tellen, omdat iedereen in hetzelfde contract met jou concurreert. Speel alleen een veiligheidsspel als het contract echt in gevaar is, of als je vermoedt dat jij in een beter contract zit dan de rest van de zaal.</li>
</ul>
<div class="warn">Een veiligheidsspel dat je speelt terwijl het niet nodig was, of dat je tegen het verkeerde gevaar beschermt, is gewoon een verloren slag. Tel eerst je slagen; beslis dan of je een verzekering nodig hebt, en welke.</div>
`,
    keyPoints: [
      'Bepaal eerst hoeveel slagen je uit de kleur nodig hebt; het beste spel hangt daarvan af.',
      'Met A Q 9 x x tegenover K 10 x x incasseer je eerst de aas, zodat je tegen beide tegenspelers kunt snijden.',
      'Met A K 10 x x tegenover x x x en vier benodigde slagen incasseer je de aas en snijd je daarna met de 10.',
      'Duik een vroege ronde als de entrees schaars zijn en je één verliezer kunt veroorloven.',
      'Speel bij IMP’s ruim veiligheidsspelen; bij matchpunten alleen als het contract in gevaar is.',
    ],
    quiz: [
      {
        q: 'Je hebt A Q 9 6 5 tegenover K 10 4 3 en hebt vijf slagen nodig. Welke kaart incasseer je eerst?',
        options: ['De aas', 'De heer', 'De vrouw', 'Het maakt niet uit'],
        answer: 0,
        explain: 'Na de aas houd je K 10 achter Oost en Q 9 achter West, dus kun je een 4-0-verdeling opvangen, welke tegenspeler de vier kaarten ook heeft.',
      },
      {
        q: 'Je hebt A K 10 5 4 tegenover 8 7 6 en hebt maar vier slagen nodig. Wat is het veiligheidsspel?',
        options: ['Aas en heer incasseren en dan een derde ronde spelen', 'De aas incasseren, daarna naar de dummy spelen en snijden met de 10 als West laag speelt', 'De 10 voorspelen uit de dummy', 'De eerste twee rondes duiken'],
        answer: 1,
        explain: 'Dit beschermt je tegen Q J 9 x bij West en levert bij alle normale verdelingen nog steeds vier slagen op: ongeveer 82%, tegen ongeveer 73% als je de hoge kaarten incasseert.',
      },
      {
        q: 'De dummy heeft A K 7 6 5 4 en één entree daarbuiten; jij hebt 3 2. Je hebt vier slagen uit de kleur nodig. Wat doe je?',
        options: ['Aas, heer en dan een derde ronde', 'De eerste ronde duiken', 'De 3 spelen en snijden met de 7', 'De aas incasseren en er het beste van hopen'],
        answer: 1,
        explain: 'Door de eerste ronde te duiken bewaar je de hoge kaarten van de dummy als entrees. Je maakt dan vier slagen tegen zowel 3-2- als 4-1-verdelingen, in ongeveer 96% van de gevallen.',
      },
      {
        q: 'Bij IMP’s tel je in 3SA negen slagen. Een snit kan een tiende opleveren, maar als die verliest, kunnen de tegenspelers een kleur afspelen. Wat doe je?',
        options: ['De snit nemen voor de overslag', 'Je negen slagen nemen', 'Eerst een slag duiken', 'Op een squeeze spelen'],
        answer: 1,
        explain: 'De overslag is bij IMP’s bijna niets waard, terwijl down gaan een manche kost. Stel het contract veilig.',
      },
      {
        q: 'Waarom worden veiligheidsspelen bij matchpunten minder vaak gespeeld?',
        options: ['Omdat ze daar verboden zijn', 'Omdat je met een overslag de andere paren in hetzelfde contract kunt verslaan', 'Omdat manches minder opleveren', 'Omdat tegenspelers zwakker zijn'],
        answer: 1,
        explain: 'Bij parenwedstrijden verslaat +450 +420 net zo zeker als +420 −50 verslaat. Een overslag opgeven kost matchpunten telkens als het contract nooit echt in gevaar was.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Vermijdingsspel: de gevaarlijke tegenspeler van slag houden',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Hoe je het spel zo inricht dat je een slag die je moet verliezen, verliest aan de tegenspeler die je geen kwaad kan doen.',
    body: `
<h3>De gevaarlijke en de ongevaarlijke hand</h3>
<p>Vaak kan maar één tegenspeler je kwaad doen. In sans atout is dat degene met vrijgespeelde slagen in zijn lange kleur. In een troefcontract kan het degene zijn die door een heer heen kan spelen, of die zijn partner kan laten introeven. Stel de <strong>gevaarlijke hand</strong> vroeg vast, en plan om slagen die je moet verliezen af te geven aan de <strong>ongevaarlijke hand</strong>. Dat is vermijdingsspel.</p>

<h3>Een volledig voorbeeld</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3SA door Zuid. West komt uit met ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Tel:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: acht vaste slagen. De klaveren leveren de extra slagen op, maar misschien moet je er één afgeven aan de ♣Q.</p>
<p><strong>Stap 1, ophouden.</strong> De twee handen hebben samen zes schoppen, dus volgens de regel van 7 houd je één keer op. Duik de ♠K en neem de tweede schoppen. Oost begon met twee schoppen, dus Oost heeft er nu geen meer: <strong>Oost is de ongevaarlijke hand, West de gevaarlijke.</strong></p>
<p><strong>Stap 2, kies de snit.</strong> In de klaveren kun je twee kanten op snijden: je kunt tegen beide tegenspelers op de vrouw snijden. Speel de ♣K uit je hand, speel dan een kleine klaver naar de dummy en snijd met de 10 als West klein speelt. Heeft West de vrouw, dan slaagt de snit. Heeft Oost haar, zoals hier, dan neemt Oost de slag, maar heeft hij geen schoppen om terug te spelen. Je neemt de overstap en maakt tien slagen: een schoppen, twee harten, drie ruiten en vier klaveren.</p>
<p>De andere kant op snijden (de ♣J door Oost heen naar je heer spelen) zou bij deze ligging toevallig ook werken, maar het zou verliezen telkens als West de vrouw had, en dan zou West de schoppen incasseren. De vermijdingslijn wint, waar de vrouw ook zit.</p>
<p>En de hartensnit, naar de A J spelen? Die zou ook aan West verliezen als West de ♥Q had. Kies liever de kleur waarin de verloren snit naar de ongevaarlijke hand gaat.</p>
<div class="tip">Vraag je bij een snit die twee kanten op kan eerst af: "Als deze snit verliest, maakt het dan uit wie de slag wint?" Zo ja, snijd dan naar de ongevaarlijke hand, en ga pas gokken als beide tegenspelers even gevaarlijk zijn.</div>

<h3>Andere vermijdingstechnieken</h3>
<ul>
<li><strong>Duik naar de ongevaarlijke hand.</strong> Als je in een kleur een slag moet afgeven, zorg dan dat de ongevaarlijke tegenspeler die wint: speel vanuit de hand waardoor jij laag kunt spelen terwijl de gevaarlijke hand niet goedkoop kan winnen.</li>
<li><strong>Bescherm een heer.</strong> Met K x in je hand en de gevaarlijke hand rechts van je is een kaart door je heer heen fataal, dus houd de gevaarlijke hand van slag.</li>
<li><strong>Speel naar honneurs toe</strong>, zodat de partner van de gevaarlijke hand moet winnen en niet de gevaarlijke hand zelf.</li>
<li><strong>In troefcontracten</strong> kan het gevaar een troefslag zijn: als bekend is dat een tegenspeler kort is in een kleur, houd dan zijn partner van slag, zodat die hem niet kan laten introeven.</li>
</ul>
<div class="warn">Vermijdingsspel werkt alleen als je weet welke tegenspeler gevaarlijk is. Let op de uitkomst, de bieding en de kaarten die in de eerste slagen vallen, en bepaal wie de lange kleur heeft voordat je aan je sleutelkleur begint.</div>
`,
    keyPoints: [
      'Stel vast wie de gevaarlijke hand is (vaak de tegenspeler met vrijgespeelde slagen) en wie de ongevaarlijke.',
      'Moet je een slag verliezen, verlies die dan aan de ongevaarlijke hand.',
      'Combineer ophouden met vermijden: maak de partner van de speler met de lange kleur ongevaarlijk en snijd dan naar die hand.',
      'Kies bij een snit die twee kanten op kan de richting waarin je alleen aan de ongevaarlijke hand verliest.',
      'Kies liever een slagenbron waarbij de verliezende optie naar de ongevaarlijke hand gaat.',
    ],
    quiz: [
      {
        q: 'Welke tegenspeler is in sans atout meestal de gevaarlijke hand?',
        options: ['Degene met de meeste punten', 'Degene met vrijgespeelde slagen in zijn lange kleur', 'Degene links van je', 'Altijd degene die uitkwam'],
        answer: 1,
        explain: 'De gevaarlijke hand is degene die genoeg slagen kan incasseren om je down te spelen zodra hij aan slag komt, normaal gesproken de tegenspeler met de lange, vrijgespeelde kleur.',
      },
      {
        q: 'Waarom duik je in het spel hierboven de eerste schoppen?',
        options: ['Om een extra schoppenslag te maken', 'Om de schoppen van Oost op te maken, zodat Oost de ongevaarlijke hand wordt', 'Om je schoppenlengte te verbergen', 'Om een entree naar de dummy te maken'],
        answer: 1,
        explain: 'Oost had twee schoppen. Nadat je de tweede ronde hebt genomen, heeft Oost er geen meer en kan hij je aan slag geen kwaad doen.',
      },
      {
        q: 'Welke kant op neem je in het spel hierboven de klaversnit?',
        options: ['Snijd tegen West op de vrouw, zodat een verloren snit naar Oost gaat', 'Snijd tegen Oost op de vrouw', 'Speel op toppen', 'Gooi een munt op'],
        answer: 0,
        explain: 'Naar de dummy spelen en snijden met de 10 wint als West de vrouw heeft, en verliest alleen aan Oost, die geen schoppen heeft. Het contract is hoe dan ook veilig.',
      },
      {
        q: 'Waarom probeer je voor de negende slag niet de hartensnit (naar de A J spelen)?',
        options: ['Die zou verliezen als West, de gevaarlijke hand, de ♥Q had', 'Die kan niet winnen', 'Daarvoor heb je twee entrees nodig', 'De harten zijn geblokkeerd'],
        answer: 0,
        explain: 'Naar de A J spelen snijdt tegen Oost, maar verliest aan de vrouw van West, en West zou dan de schoppen incasseren. De klaversnit verliest alleen aan de ongevaarlijke hand.',
      },
      {
        q: 'Je hebt K x in je hand en de gevaarlijke hand zit rechts van je. Wat is het risico?',
        options: ['Geen', 'Een kaart van de gevaarlijke hand door je heer heen kan die vangen', 'Je heer wordt ingetroefd', 'Je blokkeert misschien de kleur'],
        answer: 1,
        explain: 'Komt de tegenspeler rechts van je aan slag, dan zit de aas van zijn partner boven je heer. Houd die tegenspeler van slag, of zorg dat de andere tegenspeler elke slag wint die je moet verliezen.',
      },
    ],
  },

  {
    id: 'dummy-reversal-and-trump-coup',
    title: 'De omgekeerde dummy en de troefcoup',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Twee speeltechnieken die met opzet in de lange troefhand introeven: de troeven van de dummy laten de troeven van de tegenspelers trekken, en je eigen troeven inkorten om te snijden als de dummy geen troef meer heeft om te spelen.',
    body: `
<h3>Introeven in de lange hand</h3>
<p>De les "Troefbehandeling" legt uit dat introevers in de korte troefhand slagen opleveren en introevers in de lange hand meestal niet. Twee technieken draaien die regel om. Bij de <strong>omgekeerde dummy</strong> troef je zo vaak in je hand in dat de troeven van de dummy het troeftrekken overnemen. Bij de <strong>troefcoup</strong> troef je in om je troeven in te korten, zodat je een troefhonneur van een tegenspeler kunt vangen zonder troef te spelen.</p>

<h3>De omgekeerde dummy</h3>
<p>Met vijf troeven in je hand en drie in de dummy maak je normaal vijf troefslagen. Troef drie keer in je hand in en trek daarna troef met de drie van de dummy, en je maakt er zes: drie introevers plus drie troefrondes vanuit de dummy. De dummy is de hoofdhand geworden, en je introevers zijn nu introevers in de korte hand.</p>
<div class="deal" data-n="S:KQJ H:A654 D:853 C:K42" data-e="S:532 H:10872 D:964 C:973" data-s="S:A10987 H:3 D:A72 C:AQJ10" data-w="S:64 H:KQJ9 D:KQJ10 C:865" data-caption="6♠ door Zuid. West komt uit met ♦K."></div>
<p><strong>Tellen:</strong> vijf schoppens, de ♥A, de ♦A en vier klaveren maken elf slagen. De dummy kan niets introeven, want hij heeft evenveel ruitens en klaveren als jij, en je twee ruitenverliezers kunnen nergens heen.</p>
<p><strong>Keer de dummy om:</strong> troef de drie kleine harten van de dummy in je hand in en laat ♠K Q J troef trekken. De entrees naar de dummy zijn de ♥A, de ♠K, de ♠Q en de ♣K.</p>
<ol>
<li>Neem met de ♦A en speel harten naar de aas.</li>
<li>Troef een harten in en speel een kleine schoppen naar de heer.</li>
<li>Troef een harten in en speel schoppen naar de vrouw.</li>
<li>Troef de laatste harten in met de ♠A en ga met klaveren naar de heer naar de dummy.</li>
<li>Trek de laatste troef met de ♠J, gooi daarbij een ruiten af, en maak de rest van de klaveren.</li>
</ol>
<p>Zes troefslagen (drie introevers en drie rondes vanuit de dummy), de ♥A, de ♦A en vier klaveren maken twaalf. Het plan vraagt een 3-2-verdeling van de troeven, zodat de drie troeven van de dummy ze kunnen trekken, en het heeft elke entree nodig. Daarom verslaat alleen een troefuitkomst 6♠: die haalt een troefronde weg voordat het introeven is begonnen, en de leider komt een entree tekort.</p>
<div class="tip">De test voor de omgekeerde dummy: tel de introevers die je in je hand kunt maken op bij de troeflengte van de dummy. Is het totaal groter dan je eigen troeflengte, en zijn de troeven van de dummy sterk genoeg om die van de tegenspelers te trekken, dan levert het omkeren een slag op.</div>

<h3>De troefcoup</h3>
<p>Soms heeft een tegenspeler een troefhonneur achter je vork, zoals ♠K x achter je ♠A Q, en heeft de dummy geen troef meer om erdoorheen te spelen. Je kunt niet snijden door zelf troef te spelen. Maar als de dummy aan het eind van het spel uitkomt, wanneer de tegenspeler alleen nog troeven heeft, moet die er een <em>vóór</em> jou spelen, en de snit lukt zonder troef in de dummy. Dat is een <strong>troefcoup</strong>. Om hem te laten werken moet je eerst je troeven inkorten door in te troeven, tot je er niet meer hebt dan de tegenspeler.</p>
<div class="deal" data-n="S:54 H:AK76 D:AKQJ C:765" data-e="S:K876 H:QJ9 D:10985 C:32" data-s="S:AQJ1093 H:54 D:7632 C:4" data-w="S:2 H:10832 D:4 C:AKQJ1098" data-caption="6♠ door Zuid. West incasseert ♣A en stapt over op ♥10."></div>
<p>Je mag niets meer verliezen. Neem met de ♥A en speel schoppen: Oost speelt klein en je 9 houdt. Ga met de ♦A naar de dummy en herhaal de snit: de 10 houdt en West gooit af. Oost had vier troeven en heeft nog ♠K 8 achter je ♠A Q J 3, en de dummy heeft geen schoppen meer. Incasseer je nu de aas, dan maakt de heer van Oost een slag: één down.</p>
<p>Kort in plaats daarvan je troeven in. Je hebt er vier tegen twee van Oost, dus je moet twee keer introeven:</p>
<ol>
<li>Ga met de ♦K naar de dummy, incasseer de ♥K en troef een klaver in met ♠3.</li>
<li>Ga met de ♦Q naar de dummy en troef een harten in met ♠J. Nu heb je ♠A Q, evenveel troeven als Oost.</li>
<li>Ga met de ♦J naar de dummy; Oost bekent. In de twaalfde slag komt de dummy uit.</li>
</ol>
<p>Troef één klaver en één harten in, niet twee klaveren: zo moet Oost elke keer bekennen en krijgt hij nooit een vrije afgooier. Kreeg hij er een, dan zou hij een ruiten afgooien en later een vaste ruitenslag van de dummy introeven.</p>
<div class="deal" data-n="S:- H:6 D:- C:6" data-e="S:K8 H:- D:- C:-" data-s="S:AQ H:- D:- C:-" data-w="S:- H:- D:- C:KQ" data-caption="De laatste twee slagen. Schoppen is troef en de dummy komt uit."></div>
<p>Oost heeft alleen troeven en moet er een vóór jou spelen: de ♠8, en je neemt met de vrouw, of de ♠K, en je neemt met de aas. Twaalf slagen.</p>
<h4>Wat een troefcoup nodig heeft</h4>
<ul>
<li><strong>Niet meer troeven dan de tegenspeler</strong> aan het eind: kort de jouwe in door in te troeven, desnoods door vaste slagen van de dummy in te troeven (dat heet een <em>grand coup</em>).</li>
<li><strong>Entrees naar de dummy</strong> voor elke troefsnit, elke introever en de laatste uitkomst.</li>
<li><strong>De juiste timing:</strong> op het moment van de coup mag de tegenspeler alleen nog troeven hebben. Door zijn hand te tellen weet je wanneer het zover is.</li>
</ul>
<div class="warn">Kort je troeven alleen in als je weet dat het moet. Hadden de troeven 3-3 gezeten, dan was de heer onder de aas gevallen en zou introeven in je hand alleen troeven verspillen. Hier vertelde het afgooien van West in de tweede ronde je dat Oost er vier had.</div>
`,
    keyPoints: [
      'Bij de omgekeerde dummy troef je zo vaak in de lange troefhand in dat de troeven van de dummy die van de tegenspelers trekken.',
      'Het levert op als de introevers in je hand plus de troeflengte van de dummy je eigen troeflengte overtreffen; je hebt goede troeven in de dummy en entrees nodig.',
      'Een troefcoup vangt een troefhonneur van een tegenspeler zonder troef te spelen: de dummy komt uit en de tegenspeler moet eerst spelen.',
      'Kort vóór een troefcoup je troeven in door in te troeven, tot je er niet meer hebt dan de tegenspeler.',
      'Tel eerst de troeven van de tegenspeler; een coup is alleen nodig bij een slechte verdeling.',
    ],
    quiz: [
      {
        q: 'Wat is een omgekeerde dummy?',
        options: ['De verliezers van de dummy in de dummy introeven', 'In je eigen lange troefhand zo vaak introeven dat de troeven van de dummy die van de tegenspelers trekken', 'De dummy het spel laten spelen', 'Overstappen op sans atout'],
        answer: 1,
        explain: 'De rollen van de handen worden omgedraaid: jouw troeven dienen om in te troeven, en de kortere maar sterke troeven van de dummy trekken die van de tegenspelers.',
      },
      {
        q: 'Je hebt vijf troeven en de dummy drie sterke. Hoeveel introevers in je hand heb je nodig om met een omgekeerde dummy een slag te winnen?',
        options: ['Eén', 'Twee', 'Drie', 'Vijf'],
        answer: 2,
        explain: 'Drie introevers plus drie troefrondes vanuit de dummy maken zes troefslagen, één meer dan je eigen vijf.',
      },
      {
        q: 'Welke uitkomst verslaat 6♠ in het spel met de omgekeerde dummy hierboven?',
        options: ['De ♦K', 'Een harten', 'Een troef', 'Een klaver'],
        answer: 2,
        explain: 'Een troefuitkomst haalt een troefronde weg voordat de leider kan beginnen met introeven, en daarna komt hij een entree tekort om het omkeren af te maken.',
      },
      {
        q: 'Wat moet je doen vóór een troefcoup?',
        options: ['Alle troeven van de tegenspelers trekken', 'Je troeven inkorten door in te troeven, tot je er niet meer hebt dan de tegenspeler', 'Een troef in de dummy bewaren', 'Je troefvork spelen'],
        answer: 1,
        explain: 'Aan het eind moet de tegenspeler alleen nog troeven hebben en mag jij er niet meer hebben dan hij, zodat de uitkomst vanuit de dummy hem dwingt vóór jou te spelen.',
      },
      {
        q: 'Waarom maakt de heer van Oost in de eindpositie van de troefcoup hierboven geen slag?',
        options: ['Oost moet vóór jou een troef spelen, en jij speelt erboven', 'De heer was al gespeeld', 'West heeft de heer', 'Oost wordt in harten gesqueezed'],
        answer: 0,
        explain: 'De dummy komt uit en Oost heeft alleen nog ♠K 8. Wat Oost ook speelt, jij neemt met de kaart er direct boven.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Tellen in het tegenspel',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Hoe tegenspelers de punten, de verdeling en de slagen van de leider tellen om het juiste tegenspel te vinden.',
    body: `
<h3>Drie dingen om te tellen</h3>
<p>Sterke tegenspelers lijken door de ruggen van de kaarten heen te kijken. Hun geheim is tellen. Uit de bieding en de eerste slagen leiden ze drie dingen af:</p>
<ol>
<li><strong>Punten:</strong> hoeveel punten de leider en partner hebben.</li>
<li><strong>Verdeling:</strong> hoeveel kaarten de leider in elke kleur heeft.</li>
<li><strong>Slagen:</strong> hoeveel slagen de leider kan maken, en hoeveel de tegenspelers nodig hebben.</li>
</ol>

<h3>Punten tellen</h3>
<p>Begin bij de bieding. Een 1SA-openaar heeft 15-17, een zwakke twee 5-10, een inviterende verhoging 10-12. Als de dummy op tafel komt, tel je de punten daarvan op bij die van jou en trek je het totaal af van 40.</p>
<p>Voorbeeld: Zuid opent 1SA en Noord verhoogt naar 3SA. De dummy heeft 10 punten en jij hebt er 9. Partner heeft 40 − 10 − 9 − (15 tot 17) = 4 tot 6 punten. Heeft partner al de ♠K getoond door er een slag mee te winnen, dan heeft hij hoogstens nog 3 punten, dus kan hij geen andere aas hebben. Elke andere ontbrekende aas zit dus bij de leider, en het heeft geen zin te hopen dat partner aan slag komt om zijn lange kleur te incasseren.</p>
<p>Dezelfde telling werkt ook andersom. Als de leider, die 15-17 heeft getoond, al met ♠AQ, ♥AK en ♦K (16) is verschenen, kan hij niet ook de ♣A hebben (dan zou hij 20 hebben). Partner heeft die, en je kunt veilig klaveren spelen door de K van de dummy heen.</p>

<h3>De verdeling tellen</h3>
<p>Elke hand heeft 13 kaarten. Gebruik eerst de bieding: een 1♥-openaar heeft vijf of meer harten; 1♠ gevolgd door 2♥ toont minstens vijf schoppen en vier harten; een 1SA-openaar heeft geen singleton. Voeg daar de lengtesignalen van partner aan toe, en het moment waarop een speler niet meer bekent.</p>
<table>
<thead><tr><th>Bron</th><th>Wat je te weten komt</th></tr></thead>
<tbody>
<tr><td>De opening en herbieding van de leider</td><td>Lengte in de geboden kleuren; evenwichtig of niet</td></tr>
<tr><td>De dummy</td><td>13 kaarten die je kunt zien</td></tr>
<tr><td>De lengtesignalen van partner</td><td>De lengte van partner in de kleuren van de leider, en dus ook die van de leider</td></tr>
<tr><td>Een speler die niet meer bekent</td><td>Zijn precieze lengte in die kleur</td></tr>
</tbody>
</table>
<p>Voorbeeld: de leider opende 1♠ en herbood 2♥, dus de leider heeft minstens 5-4 in de hoge kleuren. Het lengtesignaal van partner laat zien dat de leider twee ruiten heeft. Dat zijn elf kaarten, dus de leider heeft hoogstens twee klaveren, en als de bieding op 5-4-2-2 wijst, heeft hij er precies twee. Speelt de leider nu een klaver naar K Q x x in de dummy en heb jij de aas, dan weet je of je door te duiken de leider kunt afsnijden van de rest van de kleur.</p>
<div class="tip">Tel de hand zo vroeg mogelijk, het liefst in de derde slag. Houd de vier kleurlengtes in je hoofd bij (bijvoorbeeld "5-4-2-2") en werk ze bij telkens als een kaart je iets vertelt.</div>

<h3>Slagen tellen</h3>
<p>Vraag je af: "Hoeveel slagen kan de leider maken zodra hij aan slag is?" Halen die het contract al, dan moet je je slagen nu nemen: overstappen, incasseren of meteen de slag nemen die het contract down zet. Komt de leider slagen tekort, speel dan passief en laat hem die slagen zelf verliezen.</p>
<p>Voorbeeld: tegen 4♠ heeft de dummy ♣A K Q J 5, en uit de bieding en het eerste deel van het spel blijkt dat de leider een sterke schoppenkleur en de ♥A heeft. Zodra de troeven getrokken zijn, telt de leider vijf schoppen, vijf klaveren en de ♥A: elf slagen. Hebben jullie slagen in harten of ruiten, dan moeten die meteen genomen worden, zelfs met het risico dat je onder een heer uit speelt.</p>
<p>Omgekeerd kan de leider na een bieding 1SA – 3SA met een vlakke dummy zonder lange kleur misschien maar zeven of acht slagen hebben. Dan moeten de tegenspelers geen nieuwe kleuren aansnijden en afwachten: de leider zal slagen moeten weggeven.</p>

<h3>Alles samen</h3>
<p>Tellen is geen eenmalige berekening maar een gewoonte. Vraag je bij elke slag af wat de gespeelde kaart je over de vier handen vertelt. Naarmate het beeld duidelijker wordt, ligt het juiste tegenspel vaak voor de hand, en als dat niet zo is, vertelt de telling je in elk geval welke liggingen je nodig hebt om het contract down te spelen. Speel op die liggingen.</p>
<div class="warn">Tel niet alleen de slagen van je eigen kant. De vraag is altijd of de leider het contract kan maken, en hoe jullie dat kunnen voorkomen.</div>
`,
    keyPoints: [
      'Tel de punten: uit de bieding, de dummy en je eigen hand leid je de punten van partner af.',
      'Tel de verdeling: bieding, dummy, lengtesignalen van partner en spelers die niet meer bekennen tellen samen op tot 13.',
      'Tel de slagen van de leider: heeft hij er genoeg, neem dan nu je slagen; zo niet, speel dan passief.',
      'Als de leider een bereik heeft getoond, beperken de honneurs die hij al heeft laten zien wat hij verder nog kan hebben.',
      'Ga uit van de ligging waarbij het contract down kan, en speel daarnaar tegen.',
    ],
    quiz: [
      {
        q: 'Zuid opende 1SA (15-17) en Noord verhoogde naar 3SA. De dummy heeft 10 punten en jij hebt er 9. Hoeveel punten heeft partner?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 voor de leider en partner samen. De leider heeft 15-17, dus partner heeft 4-6.',
      },
      {
        q: 'De leider opende 1SA (15-17) en heeft al ♠AQ, ♥AK en ♦K laten zien. Wie heeft de ♣A?',
        options: ['De leider', 'Partner', 'Dat valt niet te zeggen', 'De dummy'],
        answer: 1,
        explain: 'De leider heeft 16 punten getoond. Met de ♣A zou hij op 20 komen, buiten zijn bereik, dus partner moet hem hebben.',
      },
      {
        q: 'De leider opende 1♠ en herbood 2♥. Het lengtesignaal van partner laat zien dat de leider twee ruiten heeft. Hoeveel klaveren kan de leider hoogstens hebben?',
        options: ['Eén', 'Twee', 'Drie', 'Vier'],
        answer: 1,
        explain: 'Minstens vijf schoppen en vier harten plus twee ruiten is elf, dus de leider heeft hoogstens twee klaveren.',
      },
      {
        q: 'Tegen 4♠ tel je elf slagen voor de leider zodra hij weer aan slag komt. Wat moeten de tegenspelers doen?',
        options: ['Passief tegenspelen', 'Hun slagen meteen nemen of vrijspelen', 'Troef spelen', 'Wachten tot de leider een fout maakt'],
        answer: 1,
        explain: 'Als de leider de benodigde slagen heeft, laat passief tegenspel hem die gewoon maken. Jullie enige kans is je slagen nu te nemen.',
      },
      {
        q: 'Tegen 3SA is de dummy vlak en lijkt de leider maar zeven of acht slagen te hebben. Welk soort tegenspel is meestal het beste?',
        options: ['Passief: geen nieuwe kleuren aansnijden', 'Elke kleur om de beurt aanvallen', 'Al je azen meteen incasseren', 'Onder je heren uitkomen'],
        answer: 0,
        explain: 'De leider komt slagen tekort. Wie nieuwe kleuren aansnijdt, kan hem er een geven; met veilige kaarten moet de leider zijn slagen zelf vinden.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Strafdoubletten en offerbiedingen',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Wanneer je de tegenstanders voor straf doubleert, en wanneer je doorbiedt naar een contract dat waarschijnlijk down gaat, omdat dat minder kost dan hun contract.',
    body: `
<h3>Strafdoubletten</h3>
<p>Veel doubletten op laag niveau zijn informatief, dus strafdoubletten komen voort uit een paar duidelijke situaties:</p>
<ul>
<li><strong>Na een negatief doublet:</strong> de antwoorder past met een sterke kaart in de kleur van de volgbieder, en de openaar heropent met een doublet waarop de antwoorder past (zie de les "Negatieve doubletten").</li>
<li><strong>Nadat jullie kant heeft geredoubleerd</strong> (1♥ – X – XX) hebben jullie getoond dat jullie de meeste kracht hebben, en zijn doubletten van de vluchtbiedingen van de tegenstanders voor straf.</li>
<li><strong>Als de tegenstanders zich hebben overboden</strong> naar een manche of een hoge deelscore met een misfit of in een competitieve bieding, en jij troefslagen hebt.</li>
<li><strong>Als je je hand al hebt beschreven</strong> en partner punten heeft: een doublet van een van jullie zegt dan "dit spelen we down".</li>
</ul>
<h4>Richtlijnen</h4>
<ul>
<li>Troefslagen zijn de beste reden om te doubleren. Hoge kaarten in bijkleuren kunnen worden ingetroefd of gesneden.</li>
<li>Doubleer een vrijwillig geboden manche niet alleen op hoge kaarten. De tegenstanders weten wat ze missen, en jouw doublet vertelt de leider waar de honneurs zitten.</li>
<li>Denk na over wat er gebeurt als het gemaakt wordt. 2♥ gedoubleerd en gemaakt levert 470 of 670 op: van een deelscore is een manche gemaakt.</li>
<li>Denk na over waar ze heen kunnen vluchten. 1♠ doubleren als ze makkelijk naar een betere fit kunnen ontsnappen, levert weinig op.</li>
</ul>

<h3>Wat kost gedoubleerd down gaan?</h3>
<table>
<thead><tr><th>Down</th><th>Niet kw. gedoubleerd</th><th>Kw. gedoubleerd</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Offerbiedingen</h3>
<p>Een <strong>offerbod</strong> is een contract waarvan je verwacht dat het down gaat, omdat de straf minder kost dan wat het contract van de tegenstanders zou opleveren. Vergelijk de getallen: hoeveel down kunnen jullie je gedoubleerd permitteren?</p>
<table>
<thead><tr><th>Hun manche</th><th>Waarde</th><th>Jullie niet kwetsbaar</th><th>Jullie kwetsbaar</th></tr></thead>
<tbody>
<tr><td>Niet kwetsbaar</td><td>420</td><td>2 down (300)</td><td>1 down (200)</td></tr>
<tr><td>Kwetsbaar</td><td>620</td><td>3 down (500)</td><td>2 down (500)</td></tr>
</tbody>
</table>
<p>Offerbiedingen zijn dus het goedkoopst bij <strong>gunstige kwetsbaarheid</strong>: jullie niet kwetsbaar, zij wel.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Gunstige kwetsbaarheid: bied 5♥"></div>
<p>Partner gaf een volgbod van 2♥ en Oost sprong naar 4♠. Je hebt vijfkaartsteun in harten, een singleton schoppen en weinig verdediging: 4♠ wordt vrijwel zeker gemaakt en levert 620 op. 5♥ gedoubleerd gaat waarschijnlijk twee of drie down: 300 of 500. Bied nu 5♥, voordat de tegenstanders meer informatie kunnen uitwisselen.</p>

<h3>Wanneer je niet offert</h3>
<ul>
<li><strong>Als hun contract down kan gaan.</strong> Een offerbod tegen een contract dat down zou zijn gegaan, is een <em>fantoomoffer</em>: je maakt van een plusscore een minscore. Heb je verdedigende slagen, speel dan tegen.</li>
<li><strong>Als het te veel kost.</strong> Kwetsbaar tegen niet kwetsbaar is er bijna nooit een winstgevend offerbod tegen een manche.</li>
<li><strong>Als je je hand al hebt beschreven en partner beter in staat is om te beslissen</strong>: de speler met de meeste informatie neemt de beslissing. Ga niet in tegen het besluit van partner om tegen te spelen. Heeft partner een forcing pas gegeven, volg dan de afspraken van jullie paar.</li>
<li><strong>Als de tegenstanders misschien doorbieden.</strong> Laat je ze met rust, dan bieden ze misschien door naar een contract op 5-niveau dat down gaat; een offerbod kan ze daarentegen een slem in drijven dat wel gemaakt wordt.</li>
</ul>
<div class="tip">"Het 5-niveau is voor de tegenstanders": als zij vijf bieden over jullie manche op 4-niveau, is tegenspelen (vaak met een doublet) meestal goed. Zes bieden om te offeren levert zelden iets op.</div>
<div class="warn">Beslis vroeg. Een offerbod dat je snel doet, voordat de tegenstanders informatie hebben uitgewisseld, is veel effectiever dan een offerbod nadat ze precies hebben ontdekt waar ze thuishoren.</div>
`,
    keyPoints: [
      'Strafdoubletten werken het best met troefslagen, nadat jullie kant heeft getoond dat jullie de meeste kracht hebben.',
      'Doubleer vrijwillig geboden manches niet alleen op hoge kaarten in de bijkleuren, en pas op dat je een deelscore niet tot manche doubleert.',
      'Een offerbod loont als de straf kleiner is dan de waarde van hun contract.',
      'Tegen een kwetsbare manche (620) kun je niet kwetsbaar drie down gedoubleerd gaan (500); tegen een niet-kwetsbare manche (420) twee down (300).',
      'Vermijd fantoomoffers: heb je verdedigende slagen, speel dan tegen.',
    ],
    quiz: [
      {
        q: 'Beide kanten zijn niet kwetsbaar. De tegenstanders kunnen 4♠ maken (420). Hoeveel slagen down gedoubleerd kun je je in een offerbod permitteren?',
        options: ['Eén', 'Twee', 'Drie', 'Vier'],
        answer: 1,
        explain: 'Twee down gedoubleerd niet kwetsbaar is 300, minder dan 420. Drie down is 500, meer dan hun manche.',
      },
      {
        q: 'Bij gunstige kwetsbaarheid kunnen de tegenstanders kwetsbaar 4♠ maken (620). Hoeveel down gedoubleerd kun je je permitteren?',
        options: ['Twee', 'Drie', 'Vier', 'Vijf'],
        answer: 1,
        explain: 'Drie down gedoubleerd niet kwetsbaar kost 500, minder dan 620. Vier down kost 800.',
      },
      {
        q: 'Wat is een fantoomoffer?',
        options: ['Een offerbod dat precies de waarde van hun manche kost', 'Een offerbod tegen een contract dat down zou zijn gegaan', 'Een offerbod op 6-niveau', 'Een offerbod dat de tegenstanders niet doubleren'],
        answer: 1,
        explain: 'Als hun contract down ging, maakt jouw offerbod van een plus een min. Verdedigende kracht is een reden om niet te offeren.',
      },
      {
        q: 'De tegenstanders bieden zonder tussenbieding 1♥ – 3♥ – 4♥. Je hebt 12 punten, maar alleen kleine harten. Moet je doubleren?',
        options: ['Ja: je hebt een openingshand', 'Nee: hoge kaarten buiten de troefkleur rechtvaardigen zelden een doublet van een vrijwillig geboden manche', 'Ja, om om een uitkomst te vragen', 'Alleen als je kwetsbaar bent'],
        answer: 1,
        explain: 'Ze rekenen erop dat ze hoge kaarten missen. Je doublet levert weinig op als ze één down gaan, kost veel als ze het maken, en helpt de leider de ontbrekende honneurs te plaatsen.',
      },
      {
        q: 'Waarom kan het duur zijn om een deelscore op laag niveau te doubleren?',
        options: ['Dat is het nooit', 'Omdat de gedoubleerde slagwaarde de manche kan halen als het gemaakt wordt: 2♥ gedoubleerd levert 470 of 670 op', 'Omdat de tegenstanders een premie krijgen als ze gedoubleerd worden', 'Omdat je met troef moet uitkomen'],
        answer: 1,
        explain: 'Gedoubleerd heeft 2♥ een slagwaarde van 120, en dat telt als een manche. Verwacht een deelscore down te spelen voordat je die doubleert.',
      },
    ],
  },

  {
    id: 'leads-against-slams-and-doubles',
    title: 'Uitkomsten tegen slemmen en gedoubleerde contracten',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Hoe je de uitkomst kiest tegen slemmen, tegen gedoubleerde contracten en offerbiedingen, en hoe partner met een doublet om een uitkomst kan vragen.',
    body: `
<h3>Tegen sans-atoutslemmen: niets weggeven</h3>
<p>Als de tegenstanders 6SA of 7SA bieden, hebben ze samen ongeveer 33 punten of meer, en jullie hebben heel weinig. Je hebt zelden tijd om een lange kleur vrij te spelen, dus je taak is de leider geen slag te geven. Kies de veiligste uitkomst die je kunt vinden: de top van een reeks, of een kleur zonder honneur. Kom niet uit onder een heer of een vrouw: tegen een slem is dat vaak de twaalfde slag.</p>
<div class="hand" data-cards="S:K1074 H:Q963 D:872 C:J3" data-label="Aan uitkomst tegen 1SA – 6SA"></div>
<p>Kom uit met ♦8, de hoogste van drie kleintjes. Een schoppen of een harten kan de leider een slag geven met honneurs die je niet ziet; de ruiten geeft niets weg, en je ♠K en je ♥Q kunnen nog een slag maken als de leider ze moet vinden.</p>

<h3>Tegen kleurslemmen: aanvallen of afwachten?</h3>
<p>Tegen zes in een kleur stel je dezelfde vraag als tegen elk troefcontract (zie de les "Tegenspel tegen troefcontracten"), maar je hebt twee slagen nodig en maar één uitkomst.</p>
<ul>
<li><strong>Val aan</strong> als het bieden een lange bijkleur laat zien waarop de leider kan afgooien. Kom uit onder een heer (of een vrouw) in een ongeboden kleur, in de hoop dat partner de aas of de vrouw heeft, om een slag vrij te spelen voordat de afgooiers komen.</li>
<li><strong>Speel passief</strong> als de tegenstanders op kracht lijken te hebben geboden, met evenwichtige handen en zonder lange bijkleur. De leider moet dan zelf twaalf slagen vinden, en een veilige uitkomst, vaak een troef, geeft niets weg.</li>
<li><strong>Een singleton</strong> is de moeite waard als partner een aas kan hebben: hij neemt en geeft je een introever.</li>
</ul>
<div class="hand" data-cards="S:K852 H:74 D:9643 C:Q93" data-label="Aan uitkomst tegen 6♥; de dummy heeft een lange, sterke klaverkleur laten zien"></div>
<p>Kom uit met ♠2. Zodra er troef getrokken is, gooit de leider verliezers af op de klaveren van de dummy, dus de tegenspelers moeten hun slagen eerder vrijspelen. Een schoppen onder de heer vindt partner misschien met de aas of de vrouw en maakt op tijd een slag vrij. Een ruiten zou veilig zijn, maar te traag.</p>
<h4>Uitkomen met een aas</h4>
<p>Kom tegen een kleurslem uit met een aas zonder heer als de dummy een lange bijkleur heeft laten zien, zodat de kleur van je aas in afgooiers kan verdwijnen, of als je een goede kans hebt op een tweede slag, zoals een troefslag of een heer achter de kleur van de leider. Houd hem anders: de aas maakt later ook zijn slag, terwijl ermee uitkomen de heer en de vrouw van de leider kan vrijspelen. Tegen 6SA is een aas een vaste slag, dus er is geen haast om hem te spelen.</p>
<p>Tegen een groot slem kies je de veiligste uitkomst die je hebt, vaak een troef: de leider heeft elke slag nodig, dus elke slag die je weggeeft is fataal.</p>

<h3>Uitkomstdoubletten</h3>
<p>Als een tegenstander een kunstmatig bod doet, heeft een doublet van de volgende speler meestal niets met straf te maken: het vraagt partner om die kleur uit te komen.</p>
<table>
<thead><tr><th>Partner doubleert</th><th>Betekenis</th></tr></thead>
<tbody>
<tr><td>Stayman: 1SA – 2♣</td><td>Kom klaveren uit: partner heeft een goede klaverkleur</td></tr>
<tr><td>Een transfer: 1SA – 2♦</td><td>Kom ruiten uit</td></tr>
<tr><td>Een cuebid of controlebod, zoals 4♣ op weg naar een hartenslem</td><td>Kom klaveren uit</td></tr>
<tr><td>Een antwoord op Blackwood, zoals 5♦</td><td>Kom ruiten uit</td></tr>
</tbody>
</table>
<p>Ook het ontbreken van een doublet zegt iets: had partner een cuebid van 4♦ kunnen doubleren en deed hij dat niet, dan wil hij waarschijnlijk geen ruitenuitkomst.</p>
<div class="auction" data-calls="1NT P 2C X 2H P 4H P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:Q1084 H:75 D:K963 C:842" data-label="West: aan uitkomst tegen 4♥"></div>
<p>Zonder het doublet kwam je misschien uit met schoppen of ruiten, allebei onder een honneur. Het doublet van Oost op Stayman vroeg om klaveren, dus kom uit met ♣8, de hoogste van drie kleintjes. Oost heeft een goede klaverkleur, en jij hoeft je andere kleuren niet aan te snijden.</p>

<h3>Uitkomsten tegen gedoubleerde contracten</h3>
<table>
<thead><tr><th>Situatie</th><th>Uitkomst</th></tr></thead>
<tbody>
<tr><td>Partner doubleert 3SA nadat hij een kleur heeft geboden</td><td>De kleur van partner</td></tr>
<tr><td>Partner doubleert 3SA; jij hebt een kleur geboden en partner niet</td><td>Jouw kleur</td></tr>
<tr><td>Partner doubleert 3SA; geen van jullie heeft geboden</td><td>De eerstgeboden kleur van de dummy</td></tr>
<tr><td>Partner doubleert een slem</td><td>Een ongewone uitkomst (zie hieronder)</td></tr>
<tr><td>Jullie hebben hun offerbod gedoubleerd</td><td>Meestal een troef</td></tr>
<tr><td>Partner past je informatiedoublet voor straf</td><td>Een troef</td></tr>
</tbody>
</table>
<p>Waarom een troef tegen een offerbod? De offerende partij heeft weinig hoge kaarten en hoopt haar slagen met introeven te maken; jullie hebben de hoge kaarten, en die maken hun slagen toch wel. Elke troefronde haalt introevers weg. Deze betekenissen zijn gangbare afspraken: zorg dat je partner ze ook speelt.</p>

<h3>Het Lightner-doublet</h3>
<p>Een vrijwillig geboden slem voor straf doubleren levert weinig op. 6♠ één down levert gedoubleerd 50 of 100 meer op dan ongedoubleerd, maar als het slem gemaakt wordt kost het doublet 230, veel meer als ze redoubleren, en het waarschuwt de leider voor een slechte verdeling. Daarom vraagt, volgens een conventie die naar Theodore Lightner is genoemd, een doublet van een slem door de speler die <em>niet</em> aan uitkomst is om een <strong>ongewone uitkomst</strong>:</p>
<ul>
<li>geen troef, en geen ongeboden kleur, want die zou je toch al uitkomen;</li>
<li>meestal de eerste bijkleur die de dummy heeft geboden, vaak omdat partner daarin renonce is;</li>
<li>heeft partner een kleur geboden, dan zegt het doublet bovendien: kom niet in mijn kleur uit.</li>
</ul>
<div class="auction" data-calls="1S P 2H P 3S P 4NT P 5H P 6S X P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:73 H:84 D:QJ109 C:K8652" data-label="West: aan uitkomst na het doublet van Oost"></div>
<p>Je normale uitkomst zou ♦Q zijn. Het doublet van Oost vraagt om iets ongewoons: de eerstgeboden kleur van de dummy, harten. Kom uit met ♥8. Oost is waarschijnlijk renonce in harten en troeft in, en dan hebben de tegenspelers nog maar één slag nodig.</p>
<div class="warn">Geef geen uitkomstdoublet alleen omdat je hoge kaarten in de kleur hebt. Doubleer als je die uitkomst echt wilt, en bedenk dat de tegenstanders het doublet ook kunnen gebruiken: ze kunnen redoubleren, of het contract gewoon vermijden.</div>
`,
    keyPoints: [
      'Kom tegen 6SA en 7SA veilig uit: niet onder honneurs.',
      'Val tegen een kleurslem aan (vaak onder een heer) als de dummy een lange kleur voor afgooiers heeft; speel anders passief.',
      'Kom tegen een slem uit met een aas als die in afgooiers kan verdwijnen of als je op een tweede slag hoopt; houd hem anders.',
      'Een doublet van een kunstmatig bod zoals Stayman, een transfer of een cuebid vraagt om een uitkomst in die kleur.',
      'Een Lightner-doublet van een slem vraagt om een ongewone uitkomst, meestal de eerste bijkleur van de dummy; kom tegen een gedoubleerd offerbod troef uit.',
    ],
    quiz: [
      {
        q: 'Je zit aan uitkomst tegen 1SA – 6SA met ♠K 10 7 4 ♥Q 9 6 3 ♦8 7 2 ♣J 3. Waarmee kom je uit?',
        options: ['♠4', '♥3', '♦8', '♣J'],
        answer: 2,
        explain: 'Kom tegen een sans-atoutslem veilig uit. De ♦8 geeft niets weg; uitkomen onder de heer, de vrouw of de boer kan de leider de twaalfde slag geven.',
      },
      {
        q: 'De tegenstanders bieden 6♥ nadat de dummy een lange, sterke klaverkleur heeft laten zien. Welk soort uitkomst is meestal goed?',
        options: ['Passief: een troef', 'Aanvallend: onder een heer in een ongeboden kleur, om een slag vrij te spelen voordat de leider kan afgooien', 'Een klaver, om de dummy af te snijden', 'Altijd een aas'],
        answer: 1,
        explain: 'Zodra er troef getrokken is, verdwijnen de verliezers van de leider op de klaveren van de dummy. De tegenspelers moeten hun slagen eerder opbouwen.',
      },
      {
        q: 'De tegenstanders bieden 1SA – 2♣ (Stayman) en partner doubleert. Waar vraagt het doublet om?',
        options: ['Om straf in 2♣', 'Om een klaveruitkomst', 'Om een hoge kleur te bieden', 'Het toont een sterke evenwichtige hand'],
        answer: 1,
        explain: '2♣ is kunstmatig, dus het doublet is een uitkomstdoublet: partner heeft een goede klaverkleur en wil dat je die uitkomt.',
      },
      {
        q: 'Partner geeft een Lightner-doublet op 6♠. De dummy heeft harten geboden, en jij hebt twee harten en ♦Q J 10 9. Waarmee kom je uit?',
        options: ['Met ♦Q', 'Met een harten', 'Met een troef', 'Met een klaver'],
        answer: 1,
        explain: 'Het doublet vraagt om een ongewone uitkomst, meestal de eerste bijkleur van de dummy. Partner is waarschijnlijk renonce in harten.',
      },
      {
        q: 'Je hebt het 5♦-offerbod van de tegenstanders gedoubleerd. Wat is meestal de beste uitkomst?',
        options: ['Een troef', 'Je langste kleur', 'Een aas, om de dummy te zien', 'Een singleton'],
        answer: 0,
        explain: 'De offerende partij heeft weinig hoge kaarten en maakt haar slagen met introeven. Troefuitkomsten halen die introevers weg, en jullie hoge kaarten maken hun slagen toch wel.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Controles en cuebids: wanneer je geen Blackwood gebruikt',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Waarom azen tellen niet genoeg is voor slem, en hoe je met controlebiedingen ontdekt of elke kleur gedekt is.',
    body: `
<h3>Controles</h3>
<p>Om een slem te maken heb je genoeg slagen nodig, en je moet ook voorkomen dat de tegenstanders twee slagen maken voordat jij op gang komt. Een kleur is <strong>gecontroleerd</strong> als de tegenstanders er niet meteen twee slagen in kunnen incasseren:</p>
<ul>
<li><strong>Eerste-ronde-controle:</strong> de aas of een renonce (in een troefcontract).</li>
<li><strong>Tweede-ronde-controle:</strong> de heer of een singleton.</li>
</ul>
<p>Voor klein slem heb je in elke bijkleur minstens een tweede-ronde-controle nodig en in totaal niet meer dan één verliezer in de eerste ronde. Voor groot slem heb je overal een eerste-ronde-controle nodig en helemaal geen verliezers.</p>
<p>Sommige spelers tellen controles met A = 2 en K = 1 (12 in het spel). Handen met veel azen en heren maken slems die met 33 punten aan vrouwen en boeren niet te maken zijn.</p>

<h3>Waar Blackwood tekortschiet</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Noord opent 1♥ en Zuid verhoogt met Jacoby 2SA."></div>
<p>Noord heeft 16 punten en Zuid 13, met een negenkaartfit in harten: een slempoging is redelijk. Gebruikt Zuid Blackwood, dan toont Noord twee azen, Zuid heeft de derde, en Zuid biedt 6♥. De tegenspelers incasseren ♦A en ♦K. Blackwood vertelde dat er drie azen waren, maar kon Zuid niet vertellen dat geen van beide handen de ruiten controleert.</p>
<p>Gebruik geen Blackwood als:</p>
<ul>
<li>je twee kleine kaarten (of meer) hebt in een kleur die niemand heeft geboden, en je niet weet of partner die controleert;</li>
<li>je een renonce hebt: de aas van partner in je renoncekleur is verspild, maar Blackwood telt hem wel mee;</li>
<li>het antwoord je te hoog kan brengen, bijvoorbeeld met klaveren als troef, waar je na een antwoord van 5♥ niet meer in 5♣ kunt stoppen.</li>
</ul>

<h3>Cuebids (controlebiedingen)</h3>
<p>Zodra er in een forcing bieding een troefkleur is afgesproken, is een bod in een nieuwe kleur op 4-niveau geen eigen kleur: het toont een <strong>controle</strong> in die kleur en interesse in slem. Partner antwoordt door op zijn beurt zijn goedkoopste controle te tonen, of sluit af in de troefkleur. In de gangbare moderne stijl toont een cuebid een eerste- of tweede-ronde-controle (aas, heer, renonce of singleton), en bied je de goedkoopste eerst, dus <strong>een kleur overslaan ontkent daarin een controle</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Na Jacoby 2SA toont 3SA van Noord een gemiddelde hand (15-17) zonder korte kleur, de standaardherbieding na Jacoby. Zuid biedt 4♣: een klavercontrole en interesse in slem. Noord heeft geen ruitencontrole, dus in plaats van zijn schoppencontrole te tonen sluit Noord af in 4♥ en slaat hij 4♦ over: dat ontkent een ruitencontrole. Zuid heeft ook geen ruitencontrole en past dus. Beide handen hebben hun werk gedaan, en het paar stopt veilig in de manche.</p>
<p>Had Noord de ♦K gehad in plaats van de ♠K, dan had Noord na 4♣ een cuebid van 4♦ gegeven. Dan zou elke kleur gecontroleerd zijn, kon Zuid doorgaan richting slem, en was Blackwood aan het eind veilig om de azen te controleren.</p>
<p>De bots bieden zo zodra er in een mancheforcing bieding een hoge kleur is afgesproken, na een Jacoby-verhoging van 2SA of een splinter. Ze gebruiken een controlebod ook als slempoging in een natuurlijke bieding: als partner net een hoge kleur heeft geboden die ze naar de manche kunnen verhogen, en slem waarschijnlijk is als partner iets meer heeft dan getoond, bevestigt een nieuwe kleur op 4-niveau (een kleur die hun kant nog niet heeft geboden) de hoge kleur van partner en toont die een controle. Hun cuebids tonen eerste- of tweede-ronde-controles, de goedkoopste eerst, onder de manche in de afgesproken hoge kleur.</p>

<h3>De middelen combineren</h3>
<ol>
<li>Spreek in een forcing bieding een troefkleur af.</li>
<li>Geef cuebids om zeker te weten dat elke bijkleur gecontroleerd is.</li>
<li>Als alle kleuren gedekt zijn, gebruik je Blackwood (de bots spelen Roman Key Card Blackwood) om zeker te weten dat je geen twee azen mist, of een aas en de troefheer.</li>
<li>Bied het slem, of sluit af.</li>
</ol>
<div class="tip">Vraag je af voordat je 4SA biedt: "Als partner het juiste aantal azen toont, weet ik dan wat ik moet bieden?" Is het antwoord nee, geef dan in plaats daarvan een cuebid.</div>
<div class="warn">Zorg dat jullie het als paar eens zijn over cuebids voordat je ze probeert. Een cuebid die partner als een natuurlijke kleur leest, kan in een heel vreemd contract eindigen.</div>
`,
    keyPoints: [
      'Voor een slem moet elke bijkleur gecontroleerd zijn: een aas of renonce (eerste ronde), of een heer of singleton (tweede ronde).',
      'Blackwood telt azen, maar kan je niet vertellen welke, of dat een bijkleur twee snelle verliezers heeft.',
      'Gebruik geen Blackwood met een renonce, met twee kleine kaarten in een ongeboden kleur, of als het antwoord je te hoog kan brengen.',
      'Cuebids tonen controles, de goedkoopste eerst; een kleur overslaan ontkent daarin een controle.',
      'Geef eerst cuebids om elke kleur te controleren, en gebruik daarna Blackwood om de azen te controleren.',
    ],
    quiz: [
      {
        q: 'Welke kaarten geven in een troefcontract een tweede-ronde-controle in een kleur?',
        options: ['Aas of renonce', 'Heer of singleton', 'Vrouw of doubleton', 'Twee willekeurige honneurs'],
        answer: 1,
        explain: 'Met de heer of een singleton kunnen de tegenstanders in de kleur hoogstens één snelle slag maken. De aas of een renonce is een eerste-ronde-controle.',
      },
      {
        q: 'Waarom leidt Blackwood in het spel hierboven tot een slecht slem?',
        options: ['Omdat er twee azen ontbreken', 'Omdat geen van beide handen de ruiten controleert, en dat kan Blackwood niet laten zien', 'Omdat de harten slecht zitten', 'Omdat Noord te weinig punten heeft'],
        answer: 1,
        explain: 'Er ontbreekt maar één aas, maar dat is de ♦A, en de ♦K ontbreekt ook. De tegenspelers incasseren meteen twee ruitenslagen.',
      },
      {
        q: 'Harten is in een forcing bieding afgesproken. Partner geeft een cuebid van 4♣ en jij biedt 4♥, met 4♦ overgeslagen. Wat heb je partner verteld?',
        options: ['Ik heb een ruitencontrole', 'Ik heb geen ruitencontrole', 'Ik heb de ♠A', 'Ik wil in ruiten spelen'],
        answer: 1,
        explain: 'Cuebids worden van goedkoop naar duur gegeven. Door 4♦ over te slaan ontken je een ruitencontrole, dus partner weet dat hij moet stoppen, tenzij hij zelf de ruiten controleert.',
      },
      {
        q: 'Je hebt een renonce klaveren en wilt een slem in schoppen onderzoeken. Waarom is Blackwood een slechte keuze?',
        options: ['Omdat een renonce als aas telt', 'Omdat de ♣A van partner verspild zou zijn, terwijl Blackwood hem wel meetelt', 'Omdat 4SA kwantitatief zou zijn', 'Omdat je 37 punten nodig hebt'],
        answer: 1,
        explain: 'Blackwood vertelt je hoeveel azen partner heeft, niet welke. De aas tegenover je renonce draagt niets bij.',
      },
      {
        q: 'Wat is een verstandige volgorde van middelen voor een slem in een kleur?',
        options: ['Eerst Blackwood, dan cuebids', 'Troefkleur afspreken, cuebids voor de controles, dan Blackwood', 'Direct slem bieden met 33 punten', 'Gerber, dan Blackwood'],
        answer: 1,
        explain: 'Cuebids laten zien of elke kleur gedekt is; daarna zorgt Blackwood ervoor dat het paar geen twee azen mist.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Kennismaking met squeeze en ingooi',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Twee gevorderde technieken die uit het niets een slag maken, door een tegenspeler te dwingen een bewaker af te gooien of naar je sterke kaarten toe te spelen.',
    body: `
<h3>Als snitten en verdelingen niet genoeg zijn</h3>
<p>Sommige slagen kun je niet met kracht of met een snit winnen. Je wint ze omdat een tegenspeler <em>gedwongen</em> wordt ze op te geven: omdat hij een kaart moet afgooien die hij nodig heeft (een <strong>squeeze</strong>), of omdat hij moet voorspelen terwijl elke kaart een slag kost (een <strong>ingooi</strong>). Beide gebeuren meestal aan het eind van het spel, en beide vragen zorgvuldig tellen.</p>

<h3>De eenvoudige squeeze</h3>
<p>Een squeeze werkt als één tegenspeler als enige twee kleuren bewaakt. Als jij je laatste vaste slag in een derde kleur speelt, moet die tegenspeler een van zijn bewakers afgooien, en de kleur die hij opgeeft, levert jou een extra slag op.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Sans atout. Zuid speelt voor en heeft alle drie de slagen nodig."></div>
<p>West bewaakt de harten (de K Q tegenover de A J van de dummy) en de ruiten (de Q tegenover jouw J). Zuid speelt ♠A voor, de <strong>squeezekaart</strong>, en West moet vóór de dummy afgooien:</p>
<ul>
<li>Gooit West ♦Q af, dan is jouw ♦J een vaste slag.</li>
<li>Gooit West een harten af, dan gooit de dummy ♣3 af; je speelt ♥2 naar de aas, waarbij de overgebleven honneur van West valt, en ♥J van de dummy wint de laatste slag.</li>
</ul>
<p>Zonder de squeeze had je maar twee slagen gehad.</p>
<h4>Wat een squeeze nodig heeft</h4>
<ul>
<li><strong>Dreigingen:</strong> kaarten die vaste slagen worden als de tegenspeler zijn bewaker loslaat (hier ♥J van de dummy en jouw ♦J).</li>
<li><strong>Eén tegenspeler die beide kleuren moet bewaken.</strong> Kan zijn partner een van de kleuren bewaken, dan is er geen squeeze.</li>
<li><strong>Entrees</strong> om na het afgooien bij de dreigingen te komen (hier de ♥A, met een harten in je hand om daar te komen).</li>
<li><strong>De juiste telling:</strong> als de squeezekaart wordt gespeeld, moet je op één na alle resterende slagen kunnen winnen. De slagen die je moet afgeven <em>vroeg</em> afgeven, zodat dat klopt, heet <strong>de telling corrigeren</strong>. Een typisch teken: je ziet dat een squeeze mogelijk is, maar je hebt twee verliezers; duik dan vroeg een slag, zodat er nog maar één overblijft.</li>
</ul>
<div class="tip">Je hoeft de squeeze niet altijd van tevoren te zien. Als je een lange kleur helemaal afspeelt en je dreigingskaarten bewaart, krijgen de tegenspelers veel kansen om verkeerd af te gooien, en soms kunnen ze het gewoon niet vermijden.</div>

<h3>De ingooi</h3>
<p>Bij een ingooi breng je een tegenspeler aan slag op een moment dat elke kaart die hij voorspeelt jou een slag oplevert: hij moet naar je vork spelen, of je laten introeven terwijl je uit de andere hand afgooit.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Sans atout. Zuid speelt voor; Oost heeft de ♣K."></div>
<p>Speel je een klaver en snijd je met de vrouw, dan neemt Oost met de heer en incasseert hij de ♥A: je maakt één slag. Speel in plaats daarvan ♥6. Oost neemt met de aas en heeft dan alleen nog klaveren, dus moet hij onder zijn heer uit naar de A Q van de dummy spelen, en jij maakt twee slagen.</p>
<h4>Eliminatie en ingooi in een troefcontract</h4>
<p>In een troefcontract heet hetzelfde idee een eliminatie. Trek troef, maar houd in elke hand minstens één troef over. <strong>Elimineer</strong> de bijkleuren waarin de tegenspeler veilig van slag zou kunnen komen, door ze af te spelen of uit te troeven. Gooi de tegenspeler daarna in met de kleur die je hebt overgehouden. De tegenspeler moet dan naar je vork spelen of een kleur spelen waarin je in beide handen renonce bent, zodat je in de ene hand kunt introeven en uit de andere een verliezer kunt afgooien.</p>
<p>Met een eliminatie maak je van een snit van 50% vaak een zekerheid: met A J x tegenover K 10 x en de vrouw ontbrekend hoef je nooit te raden als een tegenspeler de kleur voor jou moet openen.</p>
<div class="warn">Een ingooi mislukt als de tegenspeler nog een veilige kaart heeft om te spelen. Controleer voor de ingooi of elke kleur waarmee de tegenspeler van slag zou kunnen komen, uit zijn hand of uit allebei jouw handen is geëlimineerd.</div>
`,
    keyPoints: [
      'Een squeeze dwingt een tegenspeler die twee kleuren bewaakt een van de bewakers af te gooien.',
      'Een squeeze vraagt dreigingen, één overbelaste tegenspeler, entrees en een gecorrigeerde telling (op één na alle resterende slagen).',
      'Bij een ingooi breng je een tegenspeler aan slag als elke kaart die hij speelt zijn kant een slag kost.',
      'Eliminatie en ingooi: trek troef (houd er in beide handen een paar over), elimineer de bijkleuren en gooi de tegenspeler dan in.',
      'Als je een lange kleur afspeelt en je dreigingen bewaart, geef je de tegenspelers de kans om fout te gaan.',
    ],
    quiz: [
      {
        q: 'Wat is de essentiële voorwaarde voor een eenvoudige squeeze?',
        options: ['Beide tegenspelers zijn renonce in een kleur', 'Eén tegenspeler bewaakt in zijn eentje twee kleuren', 'Jij hebt alle azen', 'De troeven zitten 3-2'],
        answer: 1,
        explain: 'Als één tegenspeler in twee kleuren bewakers moet houden, kan hij ze niet allebei bewaren als hij moet afgooien. Kan zijn partner een van de twee bewaken, dan is er geen squeeze.',
      },
      {
        q: 'Wat betekent "de telling corrigeren"?',
        options: ['De punten van de tegenstanders tellen', 'De slagen die je moet afgeven vroeg afgeven, zodat je, als de squeezekaart wordt gespeeld, op één na alle resterende slagen kunt winnen', 'De laatste troef trekken', 'Je eigen vaste slagen twee keer tellen'],
        answer: 1,
        explain: 'Voor een squeeze moet de tegenspeler door zijn overbodige kaarten heen zijn. Heb je nog twee verliezers, dan heeft de tegenspeler nog een kaart over om af te gooien; door vroeg een slag te duiken neem je die weg.',
      },
      {
        q: 'Wat gebeurt er in de squeezepositie hierboven als West ♦Q afgooit?',
        options: ['De ♦J van Zuid wordt een vaste slag', 'De ♥J van de dummy wordt een vaste slag', 'Oost wint een ruitenslag', 'Er verandert niets'],
        answer: 0,
        explain: 'West was de enige bewaker tegen de ♦J. Zodra de vrouw weg is, is jouw boer de hoogste ruiten die er nog is.',
      },
      {
        q: 'Waarom moet Oost je in de ingooipositie hierboven een slag geven?',
        options: ['Oost moet harten bekennen', 'Na de ♥A te hebben genomen heeft Oost alleen nog klaveren en moet hij onder de K uit naar de A Q spelen', 'Oost wordt gesqueezed', 'Oost moet introeven'],
        answer: 1,
        explain: 'Ingegooid met de ♥A heeft Oost geen veilige uitweg. Met elke klaver die Oost speelt, wint de vrouw van de dummy, en daarna valt de heer onder de aas.',
      },
      {
        q: 'Wat moet je bij eliminatie en ingooi in een troefcontract bewaren voordat je een tegenspeler ingooit?',
        options: ['Een troef in elk van je handen', 'Al je azen', 'Een entree naar de partner van de tegenspeler', 'Een verliezende troef'],
        answer: 0,
        explain: 'Met troeven in beide handen laat een tegenspeler die een kleur speelt waarin jij renonce bent, je introeven en tegelijk afgooien. Dan blijft er voor hem alleen nog een kaart naar je vork over.',
      },
    ],
  },
];
