// Lessons, part 2 (Polish).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'Druga odzywka odpowiadającego i wybór dograny',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Jak odpowiadający drugą odzywką zamyka licytację, inwituje albo forsuje i jak wybrać między kolorem starszym, 3BA a pięcioma w młodszym.',
    body: `
<h3>Odpowiadający zostaje kapitanem</h3>
<p>Po rebidzie otwierającego zwykle znasz jego siłę z dokładnością do trzech, czterech punktów i sporo wiesz o jego układzie. Twoja druga odzywka powinna doprowadzić parę do właściwego kontraktu albo zadać jeszcze jedno pytanie. Myśl w trzech przedziałach:</p>
<table>
<thead><tr><th>Odpowiadający</th><th>Cel</th><th>Typowe odzywki</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>Zamknąć licytację w najlepszej częściówce</td><td>Pas; preferencja na pierwszy kolor otwierającego; powtórzenie sześciokartowego koloru; 1BA</td></tr>
<tr><td>11-12</td><td>Inwitować dograną</td><td>2BA; podniesienie koloru otwierającego na wysokość trzech; rebid skokiem w dobry sześciokartowy kolor</td></tr>
<tr><td>13+</td><td>Zapewnić dograną</td><td>Od razu dograna albo nowy kolor (forsujący), żeby znaleźć właściwą</td></tr>
</tbody>
</table>
<p>Dwie sztuczne odzywki pozwalają odpowiadającemu pytać zamiast zgadywać: <strong>nowy młodszy forsujący</strong> po rebidzie 1BA otwierającego i <strong>czwarty kolor forsujący</strong>, gdy zalicytowano już trzy kolory. Mają osobną lekcję.</p>

<h3>Przykłady</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Odpowiadający: licytuj 2BA"></div>
<p>Otwierający pokazał 12-14 w ręce zrównoważonej. Z 12 PC razem macie 24-26: inwituj przez 2BA. Otwierający z 12 pasuje, a z 14 licytuje 3BA (z 13 decyduje według oceny ręki). Z 13+ od razu licytujesz 3BA, z 10 lub mniej pasujesz.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Odpowiadający: licytuj 3♥"></div>
<p>Otwierający ma minimum z sześcioma kierami, więc Q3 wystarcza do ośmiokartowego fitu. 12 punktów naprzeciw 12-15: inwituj przez 3♥. Otwierający z górą przedziału licytuje 4♥.</p>

<h4>Preferencja</h4>
<p>Gdy otwierający pokazał dwa kolory, a ty nie masz fitu w żadnym, wybierz między nimi tanio. Pierwszy kolor otwierającego jest co najmniej tak długi jak drugi, więc przy równej długości wracaj do pierwszego. Po 1♥ – 1♠ – 2♣ z ♥Q43 i ♣97 licytuj 2♥: to nie jest dodatkowa siła, tylko lepszy kolor atutowy. Z ♥4 i ♣J973 pasuj na 2♣.</p>

<h3>Wybór dograny</h3>
<ol>
<li><strong>Ośmiokartowy fit w starszym? Graj w starszym.</strong> Fit 4-4 lub 5-3 zwykle daje co najmniej jedną lewę więcej niż bez atu, bo ręka z krótszymi atutami może przebijać. Nawet z dwiema rękami zrównoważonymi 4♥ lub 4♠ to zwykle dobry wybór.</li>
<li><strong>Nie ma fitu w starszym? Wybierz 3BA</strong>, o ile każdy niezalicytowany kolor jest zatrzymany. 3BA wymaga dziewięciu lew, a pięć w młodszym jedenastu za ten sam zapis (400 lub 600).</li>
<li><strong>Pięć w młodszym</strong> graj z dużym fitem w młodszym i kolorem, który przeciwnicy odegraliby przeciw bez atu, albo z krótkością, która daje lewy z przebitek.</li>
</ol>
<table>
<thead><tr><th>Kontrakt</th><th>Potrzebne punkty łącznie (w przybliżeniu)</th></tr></thead>
<tbody>
<tr><td>3BA, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Szlemik</td><td>33</td></tr>
<tr><td>Szlem</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2BA – 3BA. Rozgrywa Południe."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>N/S mają 27 PC i dziewięciokartowy fit karowy, ale nie mają fitu w starszym, a każdy kolor jest zatrzymany. W 3BA masz osiem pewnych lew: dwie w pikach, jedną w kierach i pięć w karach. Dziewiątą dadzą trefle po wybiciu ♣A (i być może ♣Q). W 5♦ potrzebujesz jedenastu lew, a masz przegrywającą w pikach, co najmniej jedną w kierach i co najmniej jedną w treflach. 3BA to znacznie lepsza dograna.</p>

<h3>Granice reguły „25 punktów na dograną”</h3>
<ul>
<li><strong>Fit:</strong> z dziewięcio- lub dziesięciokartowym fitem i krótkością dograna może wyjść z 22-23 punktami. Przy misficie nawet 26 może nie wystarczyć.</li>
<li><strong>Dublowanie wartości:</strong> honory naprzeciw krótkości są zmarnowane. ♠KQJ naprzeciw singla pik niewiele dają w kontrakcie kolorowym.</li>
<li><strong>Płaskie układy:</strong> dwie ręce 4-3-3-3 biorą mniej lew; odejmij punkt.</li>
<li><strong>Źródła lew:</strong> długi, solidny kolor rekompensuje brakujące punkty. Sześć ciągnących się kar może dać 3BA z 23 PC.</li>
<li><strong>Zatrzymania:</strong> 3BA z kolorem zupełnie niezatrzymanym przegrywa bez względu na punkty.</li>
</ul>
<div class="tip">Z 13+ punktami naprzeciw otwarcia nigdy nie licytuj niczego, co partner może spasować poniżej dograny. Jeśli nie wiesz, gdzie grać, zalicytuj nowy kolor: nowy kolor odpowiadającego jest forsujący.</div>
<div class="warn">Nie ciągnij licytacji przy beznadziejnym misficie. Jeśli partner wciąż powtarza swój kolor, a ty swój, właściwy kontrakt to zwykle najniższy dostępny.</div>
`,
    keyPoints: [
      'Druga odzywka odpowiadającego: 6-10 zamknij, 11-12 inwituj, 13+ zapewnij dograną.',
      'Przy równej długości dawaj preferencję na pierwszy kolor otwierającego.',
      'Z ośmiokartowym fitem w starszym zwykle graj cztery w ten kolor.',
      'Bez fitu w starszym, gdy wszystkie kolory są zatrzymane, wybieraj 3BA zamiast pięciu w młodszym.',
      'Około 25 punktów na 3BA lub cztery w starszym, 29 na pięć w młodszym, 33 na szlemika; koryguj według fitu i układu.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1BA – ? Masz ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 PC).',
        options: ['Pas', '2BA', '3BA', '2♠'],
        answer: 1,
        explain: 'Otwierający ma 12-14, więc razem macie 24-26: inwituj przez 2BA. Z maksimum otwierający zalicytuje 3BA.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Masz ♠KJ753 ♥Q43 ♦J86 ♣97 (7 PC).',
        options: ['Pas', '2♥', '2♠', '2BA'],
        answer: 1,
        explain: 'Otwierający ma co najmniej pięć kierów, więc macie ośmiokartowy fit. 2♥ to zwykła preferencja i nie pokazuje dodatkowej siły.',
      },
      {
        q: 'Macie razem 26 PC, fit pikowy 4-4 i dwie ręce zrównoważone. Która dograna?',
        options: ['3BA', '4♠', '5♣', 'To rzut monetą'],
        answer: 1,
        explain: 'Fit 4-4 zwykle daje dodatkową lewę: jedna ręka może przebijać, a atuty drugiej nadal ściągną atuty przeciwników. Graj 4♠.',
      },
      {
        q: 'Macie 27 PC, nie macie fitu w starszym, macie dziewięciokartowy fit karowy, a wszystkie kolory są zatrzymane. Która dograna?',
        options: ['5♦', '3BA', '4♦', '6♦'],
        answer: 1,
        explain: '3BA wymaga dziewięciu lew, 5♦ jedenastu, a zapis jest taki sam. Przy zatrzymanych wszystkich kolorach 3BA to dograna z największymi szansami.',
      },
      {
        q: 'Dlaczego dograna może przegrać z 26 PC?',
        options: ['Nie może: 26 PC zawsze daje dograną', 'Z powodu misfitu, zdublowanych wartości albo niezatrzymanego koloru', 'Bo 26 PC to ręka na szlemika', 'Tylko gdy atuty dzielą się 4-1'],
        answer: 1,
        explain: 'Punkty szacują siłę lewową, ale lewy zależą też od fitu, od tego, czy honory pracują, i od zatrzymań w bez atu.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'Silne otwarcia 2♣ i 2BA',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Kiedy otworzyć 2♣ lub 2BA, jak odpowiada partner i jak układają się przedziały silnych rąk zrównoważonych.',
    body: `
<h3>2♣: największe otwarcie</h3>
<p>2♣ jest sztuczne i nic nie mówi o treflach. Pokazuje albo <strong>22+ PC</strong>, albo około <strong>dziewięciu lew w ręce</strong> (z kolorem starszym; z młodszym zwykle chcesz dziesięciu, bo dograna w młodszym wymaga jedenastu). To jedyne otwarcie forsujące: partner musi odpowiedzieć nawet bez niczego.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Otwórz 2♣: dziewięć lew w ręce"></div>
<p>Tylko 20 PC, ale policz lewy: siedem w pikach i dwie w kierach, z szansą na dziesiątą. Po otwarciu 1♠ partner może spasować z ręką taką jak ♠83 ♥J852 ♦Q964 ♣Q83 (5 PC), a 4♠ to świetny kontrakt. Otwórz 2♣ i potem zalicytuj 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Otwórz 2♣, potem rebid 2BA"></div>
<p>23 PC w ręce zrównoważonej: 2♣, a potem 2BA pokazuje 22-24.</p>

<h3>Odpowiedzi na 2♣</h3>
<table>
<thead><tr><th>Odpowiedź</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>Wyczekująca: zwykła odpowiedź z większością rąk, słabych i silnych</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Pozytywna: dobry pięciokartowy kolor (dwa z trzech najwyższych honorów albo trzy z pięciu) i 8+ PC</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Partner otworzył 2♣: licytuj 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Partner otworzył 2♣: licytuj 2♥"></div>
<p>Odpowiedź 2♦ utrzymuje licytację nisko, żeby silna ręka mogła się opisać. Nawet z przyzwoitą ręką, jeśli nie masz dobrego koloru, licytuj 2♦, a siłę pokażesz później.</p>

<h3>Rebid otwierającego</h3>
<ul>
<li><strong>2BA</strong> = 22-24 w ręce zrównoważonej. To jedyny rebid, który odpowiadający może spasować — z naprawdę bezwartościową ręką. Odpowiadający stosuje te same konwencje co po otwarciu 2BA: 3♣ Stayman, 3♦ i 3♥ transfery, 3BA do gry.</li>
<li><strong>3BA</strong> = 25-27 w ręce zrównoważonej.</li>
<li><strong>Kolor</strong> = naturalny, co najmniej pięć kart, forsujący: odpowiadający musi licytować dalej. Z poparciem podnieś; z dobrym własnym kolorem zalicytuj go; bez niczego przydatnego daj najtańszą odzywkę.</li>
</ul>

<h3>Otwarcie 2BA</h3>
<p>2BA pokazuje <strong>20-21 PC w ręce zrównoważonej</strong>. Nie jest forsujące, ale odpowiadający powinien licytować dograną już z 4 punktami.</p>
<table>
<thead><tr><th>Odpowiedź na 2BA</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Pas</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer na kiery / piki</td></tr>
<tr><td>3BA</td><td>4-10, do gry</td></tr>
<tr><td>4BA</td><td>11-12, ilościowe: otwierający z maksimum licytuje 6BA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Otwórz 2BA: 20 PC, ręka zrównoważona"></div>
<p>Naprzeciw takiej ręki odpowiadający z ♠J10642 ♥Q85 ♦73 ♣962 licytuje transfer 3♥ i pasuje na 3♠: 23-24 punkty razem to za mało na dograną, ale z pięcioma atutami 3♠ jest bezpieczniejsze niż 2BA.</p>

<h3>Drabinka rąk zrównoważonych</h3>
<table>
<thead><tr><th>PC</th><th>Sekwencja</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Jeden w kolor, potem 1BA</td></tr>
<tr><td>15-17</td><td>1BA</td></tr>
<tr><td>18-19</td><td>Jeden w kolor, potem skok na 2BA</td></tr>
<tr><td>20-21</td><td>2BA</td></tr>
<tr><td>22-24</td><td>2♣, potem 2BA</td></tr>
<tr><td>25-27</td><td>2♣, potem 3BA</td></tr>
</tbody>
</table>
<div class="tip">Naprzeciw 2♣ myśl o lewach i kontrolach, a nie tylko o punktach. As lub król są warte znacznie więcej niż rozrzucone damy i walety.</div>
<div class="warn">Nie otwieraj 2♣ tylko dlatego, że masz 20 PC. Z 20-21 w ręce zrównoważonej otwórz 2BA; z 19-21 i zwykłą ręką niezrównoważoną otwórz jeden w kolor. Partner odpowie już z 6 punktami, a ty siłę pokażesz skokiem albo rewersem.</div>
`,
    keyPoints: [
      '2♣ = 22+ PC albo około dziewięciu lew w ręce; sztuczne i forsujące.',
      'Z większością rąk odpowiadaj 2♦ (wyczekujące); odpowiedź pozytywna wymaga dobrego pięciokartowego koloru (dwa z trzech najwyższych honorów albo trzy z pięciu) i 8+ PC.',
      '2♣ – 2♦ – 2BA = 22-24 w ręce zrównoważonej i można to spasować; każdy rebid w kolor jest forsujący.',
      'Otwarcie 2BA = 20-21 w ręce zrównoważonej; 3♣ Stayman, 3♦/3♥ transfery, 3BA z 4-10, 4BA z 11-12.',
      'Drabinka rąk zrównoważonych: 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'Masz ♠AKQJ975 ♥AK4 ♦8 ♣K2. Czym otwierasz?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Z dziewięcioma lewami w ręce chcesz dojść do dograny nawet wtedy, gdy partner ma bardzo mało, więc otwórz forsującym 2♣, a potem licytuj piki. 1♠ może zostać spasowane, a 2♠ byłoby słabym dwa.',
      },
      {
        q: 'Partner otwiera 2♣. Masz ♠Q74 ♥J863 ♦952 ♣K84 (6 PC). Co licytujesz?',
        options: ['Pas', '2♦', '2♥', '2BA'],
        answer: 1,
        explain: '2♣ jest forsujące, więc nie możesz pasować. Bez dobrego pięciokartowego koloru licytuj wyczekujące 2♦ i pozwól otwierającemu opisać rękę.',
      },
      {
        q: 'Partner otwiera 2♣. Masz ♠52 ♥KQJ84 ♦A73 ♣964 (10 PC). Co licytujesz?',
        options: ['2♦', '2♥', '3♥', '2BA'],
        answer: 1,
        explain: 'Dobry pięciokartowy kolor (KQJ) i 8+ PC to odpowiedź pozytywna: 2♥. Od razu mówi otwierającemu, że szlemik jest prawdopodobny.',
      },
      {
        q: 'Co pokazuje sekwencja 2♣ – 2♦ – 2BA?',
        options: ['20-21 w ręce zrównoważonej', '22-24 w ręce zrównoważonej', '25-27 w ręce zrównoważonej', 'Kolor treflowy'],
        answer: 1,
        explain: 'Z 20-21 otwierasz od razu 2BA. Przejście przez 2♣ i potem 2BA pokazuje 22-24; 2♣, a potem 3BA pokazuje 25-27.',
      },
      {
        q: 'Partner otwiera 2BA. Masz rękę zrównoważoną z 4 PC. Co licytujesz?',
        options: ['Pas', '3BA', '3♣', '4BA'],
        answer: 1,
        explain: '20-21 plus 4 daje 24-25, dość, żeby grać dograną. Po 2BA odzywka 3BA obejmuje 4-10 punktów.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Słabe dwa i otwarcia blokujące',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Jak otwierać z długim kolorem i słabą ręką, żeby odebrać przeciwnikom przestrzeń licytacyjną, i jak odpowiada partner.',
    body: `
<h3>Po co blokować?</h3>
<p>Gdy masz długi kolor i niewiele poza nim, większość siły mają zapewne przeciwnicy. Otwarcie na wysokim poziomie odbiera im przestrzeń licytacyjną potrzebną do znalezienia najlepszego kontraktu. Jednocześnie dokładnie opisuje twoją rękę, więc partner wie, co robić.</p>

<h3>Wymagania</h3>
<table>
<thead><tr><th>Otwarcie</th><th>Kolor</th><th>PC</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (słabe dwa)</td><td>Sześć kart</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Siedem kart</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Osiem kart (albo siedem przy dodatkowym układzie)</td><td>5-10</td></tr>
</tbody>
</table>
<p>Większość siły powinna być w długim kolorze. Dobra wskazówka dla słabego dwa: dwa z trzech najwyższych honorów albo trzy z pięciu.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Otwórz 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Otwórz 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Otwórz 4♠"></div>
<p>2♣ nigdy nie jest słabym dwa: to silne, sztuczne otwarcie.</p>

<h3>Jak wysoko? Reguła 2-3-4</h3>
<p>Policz lewy w ręce: tyle lew, ile spodziewasz się wziąć ze swoim kolorem w atu, jeśli partner nie ma nic przydatnego. KQJ9852 to około sześciu lew. Tradycyjna wskazówka mówi, że do kontraktu może ci brakować najwyżej:</p>
<ul>
<li><strong>dwóch lew</strong>, gdy jesteś po partii, a przeciwnicy przed (niekorzystne założenia),</li>
<li><strong>trzech lew</strong> przy równych założeniach,</li>
<li><strong>czterech lew</strong>, gdy jesteś przed partią, a przeciwnicy po (korzystne założenia).</li>
</ul>
<p>Chodzi o to, żeby nawet po kontrze kara nie przekroczyła mniej więcej wartości dograny, którą przeciwnicy zapewne by ugrali. Z sześcioma lewami w ręce 3♣ (dziewięć lew) jest w porządku przy równych założeniach. Współcześni gracze blokują agresywniej przy korzystnych założeniach i ostrożniej przy niekorzystnych.</p>

<h3>Kiedy nie blokować</h3>
<ul>
<li>Na czwartej ręce blok nie ma sensu: ze słabą ręką po prostu spasuj i zakończ rozdanie. Otwarcie na wysokości dwóch lub trzech na czwartej ręce pokazuje przyzwoitą rękę, która liczy na ugranie kontraktu.</li>
<li>Z dobrą ręką (11+ PC i ładny kolor) otwórz raczej na wysokości jednego.</li>
<li>Na pierwszej lub drugiej ręce uważaj z boczną czwórką w starszym albo z dwoma asami poza swoim kolorem: partner może mieć dobrą rękę i możecie przegapić lepszy kontrakt.</li>
</ul>

<h3>Odpowiedzi na słabe dwa</h3>
<table>
<thead><tr><th>Odpowiedź</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Podniesienie (2♥ – 3♥)</td><td>Blokujące, nie inwitujące: z trzykartowym poparciem przedłużasz blok</td></tr>
<tr><td>Dograna w kolorze</td><td>Do gry: albo żeby ugrać, albo jako dalszy blok</td></tr>
<tr><td>2BA</td><td>Forsujące: prosi otwierającego o opis ręki</td></tr>
<tr><td>Nowy kolor</td><td>Naturalny, co najmniej pięć kart, forsujący</td></tr>
<tr><td>3BA</td><td>Do gry</td></tr>
</tbody>
</table>
<p><strong>Odpowiedzi otwierającego na 2BA:</strong> z minimum (około 5-7) powtórz kolor na wysokości trzech; z maksimum (około 8-10) zalicytuj kolor, w którym masz bocznego asa lub króla („boczną figurę”); z solidnym kolorem (AKQxxx) licytuj 3BA.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Północ otwiera 2♠; Południe pyta przez 2BA."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Północ ma 8 PC, czyli maksimum, i pokazuje ♥K. Południe z 17 PC wie teraz, że piki z ♠A będą ciągnąć, a kiery są dobrze zatrzymane, więc licytuje dograną. Gdyby Północ pokazała minimum przez 3♠, Południe by spasowało.</p>

<h3>Odpowiedzi na blok na wysokości trzech</h3>
<p>Licz lewy, a nie punkty. Kolor partnera da około sześciu lew; do dograny potrzeba od ciebie trzech lub czterech kolejnych, zwykle asów i królów. Z poparciem i słabą ręką podnieś, żeby blok był jeszcze wyższy. Pamiętaj, że partner ma niewiele obrony: nie kontruj przeciwników karnie, licząc na jego blok.</p>
<div class="tip">Naprzeciw bloku partnera twoje asy i króle są na wagę złota, a damy i walety są warte bardzo mało, chyba że są w kolorze partnera.</div>
<div class="warn">Podniesienie słabego dwa nie jest próbą dograny. Jeśli masz dobrą rękę i chcesz wiedzieć więcej, licytuj 2BA.</div>
`,
    keyPoints: [
      'Słabe dwa: sześć kart, 5-10 PC, większość siły w kolorze; 2♣ nigdy nie jest słabe.',
      'Blok na wysokości trzech: siedem kart, 5-10; cztery w starszy: osiem kart (albo siedem z układem).',
      'Reguła 2-3-4: brakuje najwyżej dwóch lew przy niekorzystnych, trzech przy równych i czterech przy korzystnych założeniach.',
      'Nie blokuj na czwartej ręce.',
      'Podniesienia bloku są blokujące; 2BA po słabym dwa pyta o boczną figurę (z minimum powtórz kolor).',
    ],
    quiz: [
      {
        q: 'Pierwsza ręka, równe założenia. Masz ♠84 ♥KQ10973 ♦J52 ♣63. Czym otwierasz?',
        options: ['Pas', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Sześć dobrych kierów i 6 PC to podręcznikowe słabe dwa. Z siedmioma kierami można rozważyć 3♥, a z 12+ PC otwiera się 1♥.',
      },
      {
        q: 'Partner otwiera 2♠, następny gracz pasuje. Masz ♠Q73 ♥K842 ♦A65 ♣J94 (10 PC). Co licytujesz?',
        options: ['Pas', '3♠', '2BA', '4♠'],
        answer: 1,
        explain: 'Naprzeciw 5-10 dograna jest mało prawdopodobna, ale z trzykartowym poparciem twoja strona ma dziewięć atutów, a przeciwnicy gdzieś mają fit. Podnieś do 3♠, żeby utrudnić im wejście.',
      },
      {
        q: 'Otwierasz 2♥ z ♠K5 ♥AQ10984 ♦862 ♣73 (9 PC). Partner licytuje 2BA. Jaki jest twój rebid?',
        options: ['3♥', '3♠', '3BA', '4♥'],
        answer: 1,
        explain: '9 PC to maksimum, więc pokaż boczną figurę, ♠K, licytując 3♠. 3♥ pokazałoby minimum, a 3BA solidny kolor.',
      },
      {
        q: 'Według reguły 2-3-4, ilu lew może ci brakować do kontraktu przy korzystnych założeniach?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'Przy korzystnych założeniach bez czterech z kontrą kosztuje 800, niewiele więcej niż 620 za dograną przeciwników po partii, a przeciwnicy, którzy sami szukają dograny lub szlemika, często w ogóle cię nie skontrują.',
      },
      {
        q: 'Partner otwiera 2♥. Co pokazuje twoje podniesienie do 3♥?',
        options: ['Inwit do dograny', 'Podniesienie blokujące, nie inwitujące', 'Podniesienie forsujące', 'Rękę bez kierów'],
        answer: 1,
        explain: 'Podniesienie bloku przedłuża blok. Jeśli chcesz, żeby otwierający opisał rękę, licytuj forsujące pytanie 2BA.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Wejścia',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Kiedy wchodzić do licytacji po otwarciu przeciwników, co pokazują różne wejścia i jak licytuje partner wchodzącego.',
    body: `
<h3>Po co wchodzić?</h3>
<p>Gdy przeciwnik otworzył, odzywka w kolor (<strong>wejście</strong>) spełnia trzy zadania: walczy o częściówkę, odbiera przeciwnikom przestrzeń licytacyjną i mówi partnerowi, co wistować, jeśli to przeciwnicy wygrają licytację. Z powodu tego ostatniego zadania <strong>jakość koloru liczy się bardziej niż punkty</strong>.</p>

<h3>Co pokazują wejścia</h3>
<table>
<thead><tr><th>Wejście</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>Kolor na wysokości jednego (1♦ – 1♠)</td><td>8-16 PC, dobry kolor co najmniej pięciokartowy</td></tr>
<tr><td>Kolor na wysokości dwóch (1♠ – 2♦)</td><td>10-16 PC, dobry kolor pięciokartowy (zwykle sześciokartowy)</td></tr>
<tr><td>Słabe wejście skokiem (1♣ – 2♠)</td><td>Sześciokartowy kolor, 6-10 PC, jak słabe dwa</td></tr>
<tr><td>1BA</td><td>15-18 PC, ręka zrównoważona z zatrzymaniem w kolorze otwarcia</td></tr>
</tbody>
</table>
<p>Z 17+ i ręką za silną na zwykłe wejście zacznij od kontry wywołującej, a swój kolor zalicytuj później.</p>

<h3>Przykłady (otworzył prawy przeciwnik)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="Prawy przeciwnik otwiera 1♦: licytuj 1♠"></div>
<p>10 PC i mocny kolor, w który chcesz wistu partnera.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="Prawy przeciwnik otwiera 1♠: licytuj 2♦"></div>
<p>12 PC i dobra szóstka: dość solidnie na wysokość dwóch.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="Prawy przeciwnik otwiera 1♣: licytuj 1BA"></div>
<p>17 PC, ręka zrównoważona, trefle dobrze zatrzymane.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="Prawy przeciwnik otwiera 1♥: pas"></div>
<p>11 PC, ale piki są słabe, a siła rozrzucona. Wejście prosiłoby o wist w piki i mogłoby zostać skontrowane z dużą karą. Pas.</p>

<h3>Założenia i wysokość</h3>
<p>Ryzykiem wejścia jest kontra karna. Na wysokości jednego to ryzyko jest małe; na wysokości dwóch, zwłaszcza po partii, potrzebujesz dobrego koloru, który weźmie lewy nawet wtedy, gdy reszta ręki partnera jest słaba. Wejście na wysokości dwóch z pięciokartowym kolorem powinno być bliskie otwarciu z mocnym kolorem.</p>

<h3>Odpowiedzi na wejście partnera</h3>
<table>
<thead><tr><th>Odzywka partnera wchodzącego</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Pojedyncze podniesienie</td><td>6-9 z co najmniej trzema atutami</td></tr>
<tr><td>Cue bid w kolor otwarcia</td><td>Podniesienie inwitujące lub silniejsze: 10+ z co najmniej trzema atutami</td></tr>
<tr><td>Podniesienie skokiem</td><td>Blokujące: słaba ręka z co najmniej czterema atutami</td></tr>
<tr><td>Nowy kolor</td><td>Naturalny, dobry kolor co najmniej pięciokartowy, nieforsujący</td></tr>
<tr><td>1BA</td><td>Około 8-11 z zatrzymaniem w kolorze otwarcia</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Grasz na Południu: licytuj 2♠"></div>
<p>8 PC i trzykartowe poparcie: podnieś do 2♠. Natychmiastowe poparcie partnera utrudnia przeciwnikom znalezienie najlepszego kontraktu.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Grasz na Południu: licytuj 2♥"></div>
<p>12 PC i cztery atuty. Cue bid 2♥ pokazuje podniesienie inwitujące lub silniejsze; z minimalnym wejściem partner zalicytuje 2♠, a ty zainwitujesz przez 3♠ albo zalicytujesz dograną, jeśli partner pokaże więcej.</p>
<div class="tip">Pamiętaj, że przedział wejścia jest szeroki (8-16). Nie skacz do dograny naprzeciw wejścia tylko dlatego, że masz siłę otwarcia: najpierw daj cue bid i pozwól partnerowi się opisać.</div>
<div class="warn">Wejście to nie otwarcie. Nie wchodź słabym kolorem tylko dlatego, że masz 12 punktów; i nie rezygnuj z wejścia mocnym kolorem tylko dlatego, że masz 9.</div>
`,
    keyPoints: [
      'Wejście na wysokości jednego: 8-16 PC, dobry kolor 5+. Na wysokości dwóch: 10-16, dobry kolor 5+ (zwykle 6).',
      'Słabe wejście skokiem: kolor sześciokartowy, 6-10; wejście 1BA: 15-18 w ręce zrównoważonej z zatrzymaniem.',
      'Jakość koloru liczy się bardziej niż punkty, bo wejście wskazuje też wist.',
      'Partner wchodzącego: pojedyncze podniesienie 6-9 z poparciem 3+; cue bid = podniesienie inwitujące lub silniejsze; podniesienie skokiem jest blokujące.',
      'Z 17+, za silną ręką na wejście, najpierw skontruj, a potem zalicytuj swój kolor.',
    ],
    quiz: [
      {
        q: 'Prawy przeciwnik otwiera 1♦. Masz ♠KQJ74 ♥83 ♦952 ♣A63. Co licytujesz?',
        options: ['Pas', '1♠', '2♠', 'Kontra'],
        answer: 1,
        explain: 'Dobra piątka z 10 PC to solidne wejście na wysokości jednego. 2♠ byłoby słabym wejściem skokiem, a kontra sugerowałaby poparcie w kierach i treflach.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1♥. Masz ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 PC). Co licytujesz?',
        options: ['1♠', 'Pas', '1BA', 'Kontra'],
        answer: 1,
        explain: 'Piki są za słabe, żeby prosić o wist, ręka nie ma siły 15-18 na bez atu, a do kontry brakuje układu. Pas.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1♣. Masz ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 PC). Co licytujesz?',
        options: ['1♦', '1BA', 'Kontra', '2BA'],
        answer: 1,
        explain: 'Ręka zrównoważona, 15-18, z zatrzymaniem treflowym: 1BA opisuje ją jedną odzywką. Partner może używać tych samych odpowiedzi co po otwarciu 1BA.',
      },
      {
        q: 'Lewy przeciwnik otworzył 1♥, a partner wszedł 1♠. Masz ♠K962 ♥83 ♦AQ74 ♣K105 (12 PC). Co licytujesz?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Z 10+ i poparciem daj cue bid w kolor przeciwników, pokazując podniesienie inwitujące lub silniejsze. 3♠ byłoby blokujące, a 4♠ może być za wysoko naprzeciw minimalnego wejścia.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1♣. Masz ♠KJ10984 ♥73 ♦Q52 ♣43 (6 PC). Co licytujesz?',
        options: ['Pas', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Sześć dobrych pików i 6-10 PC to słabe wejście skokiem. Odbiera przeciwnikom odzywki na wysokości jednego i sugeruje wist w piki.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'Kontra wywołująca',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Jak kontrą poprosić partnera o wybór koloru i jak odpowiadają partner oraz strona otwierająca.',
    body: `
<h3>Co mówi kontra wywołująca</h3>
<p>Kontra otwarcia w kolor na niskiej wysokości nie jest karna: prosi partnera o licytację. Pokazuje <strong>12+ PC, krótkość w kolorze otwarcia i poparcie (najlepiej czterokartowe) w niezalicytowanych kolorach</strong>, zwłaszcza w niezalicytowanym starszym. Drugi typ to silna ręka, 17+, o dowolnym układzie, która zalicytuje jeszcze raz, żeby pokazać, co naprawdę ma.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="Prawy przeciwnik otwiera 1♦: kontra"></div>
<p>13 PC, singiel karo i po cztery karty w każdym innym kolorze: idealny układ.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="Prawy przeciwnik otwiera 1♦: pas"></div>
<p>14 PC, ale cztery kara i tylko po trzy karty w starszych. Po twojej kontrze partner z czwórką zalicytuje kiery albo piki i zagracie fit 4-3 ze złej ręki. Pas.</p>

<h3>Odpowiedzi na kontrę wywołującą</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>Zachód otworzył 1♥, partner skontrował, Wschód spasował. Musisz licytować, choćby z najsłabszą ręką: pas zamieniłby kontrę na karną kontrę 1♥. Wybieraj kolor starszy, a siłę pokazuj wysokością:</p>
<table>
<thead><tr><th>Punkty partnera kontrującego</th><th>Akcja</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Najlepszy kolor najtaniej, jak się da</td></tr>
<tr><td>9-11</td><td>Skok w najlepszy kolor (inwitujący)</td></tr>
<tr><td>12+</td><td>Cue bid w kolor otwarcia (forsujący) albo dograna</td></tr>
<tr><td>6-10, ręka zrównoważona</td><td>1BA z zatrzymaniem w kolorze otwarcia</td></tr>
<tr><td>Pas</td><td>Tylko z długimi, mocnymi atutami w kolorze otwarcia (na karną)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – kontra – pas: licytuj 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – kontra – pas: licytuj 2♠"></div>
<p>Z 3 PC licytuj 1♠ bez obaw: partner wie, że możesz nie mieć nic. Z 10 PC skocz na 2♠, inwitując dograną. Z ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 PC) zalicytuj od razu 4♠ albo daj cue bid 2♥, jeśli nie wiesz, która dograna jest najlepsza.</p>
<p>Jeśli partner otwierającego zalicytuje (1♥ – kontra – 2♥), nie musisz już licytować. Teraz odzywka pokazuje pewną siłę, około 6+, a pas słabą rękę.</p>

<h3>Rebid kontrującego</h3>
<p>Najtańszą odzywkę partner mógł dać bez niczego, więc kontrujący z minimum nie powinien licytować dalej. Z 12-15 pasuj; z około 16-18 podnieś o jedną wysokość; z 19+ skocz. Jeśli kontrujący licytuje nowy kolor, pokazuje silny typ kontry (17+) z własnym długim kolorem.</p>

<h3>Strona otwierająca: rekontra</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Gdy otwarcie partnera zostało skontrowane, <strong>rekontra</strong> pokazuje 10+ PC. Mówi otwierającemu, że wasza strona ma przewagę siły, i zwykle oznacza, że szukasz okazji do karnej kontry przeciwników. Po otwarciu w kolorze starszym <strong>2BA (Jordan)</strong> pokazuje co najmniej czterokartowe poparcie i podniesienie inwitujące lub silniejsze (10+ punktów w poparciu), więc rekontra zwykle zaprzecza czterem atutom. Z poparciem i słabszą ręką raczej podnieś kolor partnera: zwykłe podniesienie pokazuje około 6-10 punktów, a podniesienie skokiem (1♥ – kontra – 3♥) jest blokujące, z czterema atutami i mniej niż 10 PC. Z nowym kolorem i mniej niż 10 PC zalicytuj go.</p>

<h3>Kontra otwarć blokujących</h3>
<p>Kontra słabego dwa lub bloku na wysokości trzech też jest wywołująca: siła otwarcia, krótkość w kolorze przeciwników i gotowość na każdy kolor partnera. Partner może musieć licytować na wysokości trzech ze słabą ręką, więc kontra powinna być solidna, a nie lekka.</p>
<div class="tip">Idealna kontra wywołująca ma krótkość w kolorze przeciwnika i po cztery karty w każdym niezalicytowanym starszym. Im krótszy masz ich kolor, tym lżej możesz kontrować.</div>
<div class="warn">Nie kontruj z własnym długim kolorem i średnią ręką: wejdź raczej kolorem. Kontra wywołująca, a potem własny kolor pokazuje 17+ PC.</div>
`,
    keyPoints: [
      'Kontra wywołująca: 12+ PC, krótkość w kolorze przeciwników, poparcie w niezalicytowanych kolorach; albo 17+ o dowolnym układzie z zamiarem dalszej licytacji.',
      'Partner kontrującego musi licytować: 0-8 najtaniej, 9-11 skok, 12+ cue bid lub dograna; 1BA = 6-10 z zatrzymaniem.',
      'Pasuj na kontrę tylko z długimi, mocnymi atutami w kolorze przeciwników.',
      'Kontrujący z 12-15 pasuje na minimalną odpowiedź, z 16-18 podnosi, z 19+ skacze.',
      'Rekontra po kontrze wywołującej pokazuje 10+ PC; po 1♥ lub 1♠ 2BA (Jordan) pokazuje cztery atuty i podniesienie inwitujące lub silniejsze, a podniesienie skokiem jest blokujące.',
    ],
    quiz: [
      {
        q: 'Prawy przeciwnik otwiera 1♣. Masz ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 PC). Co licytujesz?',
        options: ['1♦', 'Kontra', '1♠', 'Pas'],
        answer: 1,
        explain: 'Krótkie trefle i po cztery karty w każdym innym kolorze: idealna kontra wywołująca. Cokolwiek zalicytuje partner, masz poparcie.',
      },
      {
        q: '1♥ – kontra – pas – ? Masz ♠Q8642 ♥753 ♦J4 ♣982 (3 PC).',
        options: ['Pas', '1♠', '1BA', '2♠'],
        answer: 1,
        explain: 'Musisz licytować: pas zostawiłby 1♥ z karną kontrą, a przeciwnicy zapewne ugraliby to z nadróbkami. Licytuj najlepszy kolor najtaniej, jak się da.',
      },
      {
        q: '1♥ – kontra – pas – ? Masz ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 PC).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 punktów: skocz w najlepszy kolor, inwitując dograną. 1♠ mogłoby być zalicytowane bez niczego, więc nie doceniłoby tej ręki.',
      },
      {
        q: '1♠ – kontra – pas – ? Masz ♠K104 ♥82 ♦Q963 ♣J752 (6 PC).',
        options: ['2♣', '2♦', '1BA', 'Pas'],
        answer: 2,
        explain: '1BA pokazuje 6-10 z zatrzymaniem pikowym i pozwala zostać na wysokości jednego. Młodszy na wysokości dwóch to możliwa alternatywa, ale 1BA najlepiej opisuje tę zrównoważoną rękę.',
      },
      {
        q: 'Partner otwiera 1♥, a prawy przeciwnik kontruje. Co pokazuje twoja rekontra?',
        options: ['Karną kontrę 1♥', '10+ PC', 'Poparcie kierowe', 'Słabą rękę'],
        answer: 1,
        explain: 'Rekontra pokazuje 10+ PC i mówi, że rozdanie należy do waszej strony. Z poparciem i mniejszą siłą lepiej podnieść kolor partnera.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'Przepuszczanie i dojścia',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Jak przepuszczeniem przeciąć komunikację obrońców i jak gospodarować własnymi dojściami.',
    body: `
<h3>Przepuszczenie</h3>
<p>Przeciw bez atu obrońcy zwykle atakują swój długi kolor. Jeśli weźmiesz pierwszą rundę jedynym zatrzymaniem, a potem oddasz rękę partnerowi wistującego, ten zagra z powrotem w ten kolor i długie karty przejdą. <strong>Przepuszczenie</strong> to odmowa wzięcia pierwszej rundy (lub kilku rund) ich koloru, tak by obrońca, który może dojść do ręki, nie miał już karty w tym kolorze.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3BA gra Południe. Zachód wistuje ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Liczenie:</strong> ♠A, ♥AK, ♣AKQ: sześć pewnych lew. Kara dadzą cztery kolejne po wybiciu ♦A. Raz musisz oddać rękę.</p>
<p><strong>Zagrożenie:</strong> piki Zachodu. Jeśli weźmiesz pierwszą lewę pikową, a Wschód weźmie ♦A, Wschód zagra pika i Zachód weźmie cztery lewy pikowe: bez jednej.</p>
<p><strong>Przepuszczenie:</strong> na ♠K dołóż blotkę. Zachód kontynuuje ♠Q, a ty bierzesz asem. Wschód dołożył dwa razy i nie ma już pików. Teraz wybij ♦A. Przy tym układzie bierze go Wschód, nie ma pika do zagrania i ugrywasz dziesięć lew. Gdyby ♦A miał Zachód, kontrakt by przegrał, ale wtedy i tak nie dało się go ugrać: przepuszczenie to darmowa dodatkowa szansa.</p>

<h4>Ile razy przepuścić: reguła 7</h4>
<p>Od siedmiu odejmij liczbę kart, które razem z dziadkiem masz w tym kolorze. Wynik to liczba przepuszczeń. Tutaj macie w obu rękach sześć pików, więc 7 − 6 = 1: przepuść raz i weź drugą rundę. To zakłada podział 5-2; obserwuj spadające karty i koryguj plan.</p>

<h4>Kiedy nie przepuszczać</h4>
<ul>
<li>Gdy obrońca, który może dojść do ręki, i tak nie ma już kart w tym kolorze albo koloru nie da się odegrać.</li>
<li>Gdy przepuszczenie pozwala obrońcom zmienić kolor na jeszcze groźniejszy.</li>
<li>Gdy masz dwa zatrzymania, a groźny obrońca nie może dojść do ręki dwa razy. Z A K x często możesz wziąć pierwszą lewę i nadal mieć zatrzymanie, gdy obrońcy odzyskają rękę.</li>
</ul>
<div class="tip">Zagranie Bath (Bath coup): gdy masz w ręce A J x, a Zachód wistuje królem, dołóż blotkę. Jeśli Zachód kontynuuje kolor, twoje A J wezmą dwie lewy; jeśli zmieni kolor, A J nadal pilnują koloru: Zachód nie może znów w niego zagrać, nie oddając ci lewy.</div>

<h3>Gospodarka dojściami</h3>
<p>Dojście to karta, która pozwala wziąć lewę w określonej ręce. Wiele kontraktów przegrywa się nie z braku lew, lecz z braku drogi do nich.</p>
<ul>
<li><strong>Policz dojścia przed pierwszą lewą.</strong> Zdecyduj, która ręka będzie później potrzebowała wejścia, i odpowiednio weź pierwszą lewę.</li>
<li><strong>Odblokuj:</strong> najpierw zagraj wysokie karty z krótszej ręki. Z ♦Q3 w ręce i ♦AKJ105 u dziadka (bez innych dojść do stołu) najpierw ściągnij damę, potem zagraj trójkę do stołu.</li>
<li><strong>Przepuść</strong> rundę, którą i tak musisz oddać, póki długa ręka ma jeszcze wysokie karty (zob. lekcję „Wyrabianie długich kolorów”).</li>
<li><strong>Przebij własną kartę wyższą</strong>, żeby zmienić rękę: z singlową ♥Q w ręce naprzeciw ♥AKJ104 i bez innego dojścia do stołu przebij damę królem i odegraj kolor.</li>
<li><strong>Zachowaj późne dojście:</strong> gdy kolor trzeba wyrobić u dziadka, najpierw zużyj dojścia do swojej ręki, a dojścia do stołu zostaw na koniec.</li>
</ul>
<div class="warn">Nie bierz lewy w niewłaściwej ręce „bo to bez znaczenia”. Jeśli nie wiesz jeszcze, która ręka będzie później potrzebowała wejścia, za wcześnie na zagranie do tej lewy.</div>
`,
    keyPoints: [
      'Przepuszczaj zatrzymanie, aby obrońca, który może dojść do ręki, nie miał już karty w ich kolorze.',
      'Reguła 7: przepuść 7 minus liczba waszych kart w kolorze (wskazówka przy założeniu podziału 5-2).',
      'Nie przepuszczaj, gdy zmiana koloru jest groźniejsza albo gdy masz dość zatrzymań.',
      'Odblokowuj, grając najpierw honory z krótszej ręki; przebijaj własną kartę, żeby zmienić rękę.',
      'Zaplanuj dojścia przed pierwszą lewą i weź ją we właściwej ręce.',
    ],
    quiz: [
      {
        q: 'Razem z dziadkiem masz sześć kart w kolorze, w który obrońcy wistują przeciw 3BA, a jedynym zatrzymaniem jest as. Ile razy przepuścić?',
        options: ['Ani razu', 'Raz', 'Dwa razy', 'Trzy razy'],
        answer: 1,
        explain: 'Reguła 7: 7 − 6 = 1. Przy podziale 5-2 wzięcie drugiej rundy zostawia partnera posiadacza długiego koloru bez karty do zagrania.',
      },
      {
        q: 'Jaki jest cel przepuszczenia?',
        options: ['Zrobić nadróbkę', 'Wyczerpać kolor u partnera posiadacza długiego koloru, żeby nie mógł w niego wrócić', 'Ustalić, kto ma brakujące honory', 'Zachować dojście do stołu'],
        answer: 1,
        explain: 'Jeśli obrońca, który dochodzi do ręki, nie ma karty w długim kolorze, długie karty jego partnera są odcięte i mogą nigdy nie zostać odegrane.',
      },
      {
        q: 'Dlaczego w powyższym rozdaniu przepuszczenie nie pomaga, gdy ♦A ma Zachód?',
        options: ['Bo Zachód może wtedy odegrać pozostałe piki', 'Bo kara się zablokują', 'Bo Wschód mógłby przebić', 'W tym przypadku też pomaga'],
        answer: 0,
        explain: 'Przepuszczenie wyczerpuje piki tylko u Wschodu. Jeśli Zachód, posiadacz długich pików, dojdzie do ręki asem karo, odegra wyrobione piki. Żadna rozgrywka tego nie powstrzyma; przepuszczenie wygrywa zawsze, gdy ♦A ma Wschód.',
      },
      {
        q: 'Masz ♦Q3 w ręce i ♦AKJ105 u dziadka, który nie ma innego dojścia. Jak rozgrywać kara?',
        options: ['Najpierw trójka do asa', 'Najpierw ściągnij damę, potem trójka do stołu', 'Walet ze stołu', 'Przepuść pierwszą rundę'],
        answer: 1,
        explain: 'Najpierw zagraj wysoką kartę z krótszej ręki. Po damie trójka przenosi cię do stołu i możesz tam odegrać resztę koloru.',
      },
      {
        q: 'Zachód wistuje ♣K przeciw 3BA, a ty masz w ręce ♣AJ4. Na czym polega zagranie Bath?',
        options: ['Od razu weź asem', 'Dołóż blotkę, żeby kontynuacja w trefle trafiła w twoje A J', 'Zagraj waleta', 'Zrzuć kartę ze stołu'],
        answer: 1,
        explain: 'Przepuszczając, zachęcasz Zachód do kontynuacji koloru w twoje A J, co daje ci dwie lewy, a jeśli Zachód zmieni kolor, nadal masz zatrzymanie.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'Gospodarka atutami',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Kiedy ściągać atuty od razu, kiedy z tym poczekać, jak wykorzystać przebitki w krótkiej ręce i jak zachować kontrolę nad kolorem atutowym.',
    body: `
<h3>Zasada domyślna: ściągnij atuty</h3>
<p>Gdy rozgrywasz kontrakt kolorowy, atuty obrońców zagrażają twoim lewom: każdą lewę w kolorze bocznym mogą przebić. Dlatego zwykły plan to <strong>wcześnie ściągnąć atuty</strong>, licząc spadające atuty przeciwników. Jeśli mają pięć atutów i obaj dołożą do dwóch rund, jeden jeszcze został; jeśli jeden z obrońców nie dołoży, znasz dokładny podział.</p>

<h3>Powody, by odłożyć ściąganie atutów</h3>
<ol>
<li><strong>Potrzebujesz atutów dziadka do przebitek.</strong> Przebijanie przegrywających w ręce z krótszymi atutami tworzy dodatkowe lewy. Jeśli ściąganie atutów zużyłoby atuty dziadka, najpierw zrób przebitki (zob. rozdanie z 4♠ w lekcji „Plan rozgrywki”).</li>
<li><strong>Musisz szybko pozbyć się przegrywających.</strong> Jeśli obrońcy mają honor atutowy i dojdą do ręki, gdy zagrasz atu, upewnij się, że nie odegrają wtedy dość lew, by cię obłożyć.</li>
<li><strong>Potrzebujesz atutów jako dojść</strong>, na przykład do długiego koloru bocznego albo do powtarzania impasów.</li>
<li><strong>Planujesz grę na krzyżowe przebitki</strong>, używając atutów obu rąk osobno.</li>
</ol>

<h3>Zrzutka przed ściągnięciem atutów</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ gra Południe. Zachód wistuje ♦K."></div>
<p><strong>Policz przegrywające:</strong> ♠A, dwie w karach po wybiciu ♦A w pierwszej lewie i ♣A (trzecią rundę trefli można przebić u dziadka). Cztery przegrywające.</p>
<p>Jeśli teraz zagrasz atu, obrońca, który weźmie ♠A, odegra dwie lewy karowe, a ♣A jest jeszcze przed nimi — kontrakt pada. Zamiast tego weź ♦A i od razu zagraj ♥A, ♥K i ♥Q, zrzucając z ręki karo na trzeciego kiera. Dopiero potem graj atu. Oddajesz ♠A, jedno karo i ♣A.</p>
<p>Ryzyko polega na tym, że ktoś przebije trzeciego kiera. Stanie się tak tylko wtedy, gdy kiery dzielą się 5-2 lub gorzej <em>i</em> obrońca z dublem ma atut do przebicia — to ryzyko o wiele mniejsze niż pewna porażka przy ściąganiu atutów od razu.</p>
<div class="tip">Zapytaj siebie: „Gdy oddam rękę w atutach, ile lew obrońcy mogą odegrać?” Jeśli za dużo, najpierw pozbądź się przegrywającej.</div>

<h3>Przebitki: krótka ręka zyskuje, długa nie</h3>
<p>Z pięcioma atutami w ręce i trzema u dziadka twoje pięć atutów i tak weźmie pięć lew. Przebitka w twojej ręce zużywa tylko jeden z nich. Przebitka u dziadka to dodatkowa lewa, bo małe atuty dziadka inaczej nigdy nie wzięłyby lewy. Planuj przebitki w ręce z <strong>krótszymi</strong> atutami.</p>
<p>Przebitki w długiej ręce przydają się z innych powodów: żeby wyrobić długi kolor u dziadka, przebijając karty przeciwników, albo żeby skrócić atuty przed wpustką lub impasem atutowym (trump coup).</p>

<h3>Krzyżowe przebitki</h3>
<p>Gdy obie ręce mają krótki kolor, możesz przebijać przegrywające jednej ręki atutami drugiej, na przemian, w ogóle nie ściągając atutów. Zasady gry na krzyżowe przebitki:</p>
<ul>
<li><strong>Najpierw ściągnij lewy w kolorach bocznych.</strong> Inaczej obrońcy zrzucą karty z tych kolorów podczas krzyżowych przebitek i później przebiją twoje lewy.</li>
<li>Przebijaj wysoko, gdy grozi nadbitka, żeby obrońcy nie wzięli tanio lew małymi atutami.</li>
<li>Licz: krzyżowe przebitki powinny dać dokładnie tyle lew, ile potrzebujesz.</li>
</ul>

<h3>Utrzymanie kontroli</h3>
<p>Jeśli obrońcy wciąż grają kolor, który musisz przebijać w długiej ręce, możesz skończyć z mniejszą liczbą atutów niż jeden z obrońców: tracisz <strong>kontrolę atutową</strong>, a pozostałe atuty tego obrońcy biorą lewy, podczas gdy długi kolor jego partnera przechodzi. Obrona przed takim forsowaniem:</p>
<ul>
<li>Zamiast przebijać, zrzuć przegrywającą (oddaj lewę, którą i tak trzeba było oddać), aby następne forsowanie przyszło wtedy, gdy przebić może dziadek.</li>
<li>Wcześnie ściągnij małe atuty przeciwników, nawet zostawiając na zewnątrz ich najwyższy atut, żeby następne forsowanie nie kosztowało cię kontroli.</li>
<li>Wybieraj kontrakt, w którym forsowanie może przyjąć ręka z krótszymi atutami.</li>
</ul>
<div class="warn">Nie wydawaj dwóch swoich atutów, żeby ściągnąć jeden ich, gdy ich ostatni atut jest najwyższy. To i tak ich lewa; niech wezmą ją, kiedy zechcą, a ty użyj swoich atutów do kontrolowania rozgrywki.</div>
`,
    keyPoints: [
      'Zwykle ściągaj atuty wcześnie, licząc spadające atuty przeciwników.',
      'Odłóż to, gdy potrzebujesz atutów dziadka do przebitek, musisz zrzucić przegrywające przed oddaniem ręki albo potrzebujesz dojść atutowych.',
      'Przebitki w ręce z krótszymi atutami dają lewy; przebitki w długiej ręce zwykle nie.',
      'Przed krzyżowymi przebitkami ściągnij lewy w kolorach bocznych.',
      'Nie wydawaj dwóch atutów, żeby ściągnąć najwyższy atut przeciwników.',
    ],
    quiz: [
      {
        q: 'Kiedy błędem jest natychmiastowe ściąganie atutów?',
        options: ['Nigdy: zawsze najpierw ściągaj atuty', 'Gdy potrzebujesz atutów dziadka do przebicia swoich przegrywających', 'Gdy przeciwnicy mają pięć atutów', 'Gdy masz dziewięć atutów'],
        answer: 1,
        explain: 'Ściąganie atutów zużyłoby zarówno atuty przeciwników, jak i dziadka. Najpierw zrób przebitki w krótkiej ręce, potem ściągnij resztę.',
      },
      {
        q: 'Co w powyższym rozdaniu z 4♠ powinien zrobić rozgrywający po wzięciu ♦A?',
        options: ['Zagrać ♠K', 'Ściągnąć trzy kiery, zrzucając karo', 'Zagrać trefla w kierunku ♣Q', 'Przepuścić karo'],
        answer: 1,
        explain: 'Obrońcy mają ♠A i dwie gotowe lewy karowe. Najpierw zrzuć karo na trzeciego kiera, dopiero potem graj atu.',
      },
      {
        q: 'Przeciwnikom został jeden atut: as. Masz mnóstwo atutów i lew. Co zwykle należy zrobić?',
        options: ['Grać atu, żeby od razu wybić asa', 'Zostawić go i grać kolory boczne; to i tak ich lewa', 'Przebić coś u dziadka', 'Oddać resztę'],
        answer: 1,
        explain: 'Ściągnięcie go kosztuje dwa twoje atuty (po jednym z każdej ręki) za lewę, którą i tak wezmą. Niech przebiją nim, jeśli chcą; twoje atuty zachowują kontrolę.',
      },
      {
        q: 'Zaczynasz grę na krzyżowe przebitki. Co zrobić najpierw?',
        options: ['Ściągnąć dwie rundy atutów', 'Ściągnąć lewy w kolorach bocznych', 'Przebijać najniższymi atutami', 'Oddać lewę'],
        answer: 1,
        explain: 'Podczas krzyżowych przebitek obrońcy zrzucają karty. Jeśli zrzucą kolor boczny, w którym nie ściągnięto jeszcze lew, później przebiją twoje lewy.',
      },
      {
        q: 'Masz pięć atutów w ręce i trzy u dziadka. Która przebitka daje dodatkową lewę?',
        options: ['Przebitka w twojej ręce', 'Przebitka u dziadka', 'Obie', 'Żadna'],
        answer: 1,
        explain: 'Twoje pięć atutów weźmie pięć lew z przebitkami czy bez. Trzy małe atuty dziadka biorą lewy tylko przez przebitki.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'Sygnały w obronie',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Jak obrońcy wysokością zagrywanych kart pokazują zachętę, ilość i preferencję koloru.',
    body: `
<h3>Rozmowa kartami</h3>
<p>Obrońcy nie widzą swoich rąk, ale mogą zgodnie z przepisami wybierać, <em>którą</em> kartę zagrać. Gdy nie próbujesz wziąć lewy, zagrana blotka niesie informację. Standardowe sygnały są trzech rodzajów; sytuacja mówi partnerowi, który z nich dajesz.</p>
<table>
<thead><tr><th>Sygnał</th><th>Kiedy</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Zachęcający/zniechęcający</td><td>Partner wychodzi w kolor; twoja pierwsza zrzutka</td><td>Wysoka zachęca, niska zniechęca</td></tr>
<tr><td>Ilościowy</td><td>Rozgrywający gra kolor boczny (w atutach nie ma sygnału ilościowego)</td><td>Najpierw wyższa, potem niższa = parzysta liczba, najpierw niższa = nieparzysta</td></tr>
<tr><td>Preferencyjny</td><td>Gdy wychodzisz w kolor do przebitki partnera</td><td>Wysoka karta prosi o wyższy z pozostałych kolorów, niska o niższy; średnia karta — brak preferencji</td></tr>
</tbody>
</table>

<h3>Zachęta i zniechęta</h3>
<p>Przeciw 4♥ partner wychodzi ♠A (z AK), a dziadek ma ♠8 6 4.</p>
<ul>
<li>Z ♠Q 9 3 zagraj dziewiątkę: chcesz pików, bo twoja dama weźmie trzecią rundę.</li>
<li>Z ♠7 5 2 zagraj dwójkę: nie masz nic w pikach, więc partner powinien rozważyć zmianę koloru.</li>
<li>Z dublem ♠9 3 zagraj dziewiątkę, a potem trójkę: najpierw wyższa, potem niższa prosi partnera o kontynuację, a trzecią rundę przebijesz.</li>
</ul>
<p>Zrzutki działają tak samo: pierwsza zrzutka to sygnał zachęcający lub zniechęcający. Zrzucenie ♣9 mówi „chcę trefli”, zrzucenie ♦2 — „nie chcę kar”. Zrzucaj tylko z koloru, z którego możesz coś oddać. Jeśli w kolorze, którego chcesz, nie masz zbędnej blotki od szóstki w górę, zrzuć raczej najniższą kartę z koloru, którego nie chcesz.</p>

<h3>Ilość</h3>
<p>Gdy rozgrywający gra kolor, pokaż, ile masz w nim kart: z parzystą liczbą (dwie lub cztery) najpierw wyższa, potem niższa, z nieparzystą (trzy) najpierw najniższa. Sygnał ilościowy pozwala partnerowi odtworzyć układ rozgrywającego, a przede wszystkim mówi mu, kiedy wziąć asa.</p>
<table>
<thead><tr><th>Pozycja</th><th>Kara</th></tr></thead>
<tbody>
<tr><td>Północ (dziadek, bez bocznego dojścia)</td><td>K Q J 10 5</td></tr>
<tr><td>Wschód (ty)</td><td>A 7 3</td></tr>
<tr><td>Zachód i Południe</td><td>razem 9 8 6 4 2</td></tr>
</tbody>
</table>
<p>Rozgrywający gra kara w kierunku stołu. Chcesz wziąć asa w tej rundzie, w której rozgrywający zagra swoje <em>ostatnie</em> karo, odcinając go od reszty koloru dziadka. Jeśli partner zacznie od dziewiątki (wysoka: parzysta liczba, tu dwie), rozgrywający ma trzy: przepuść dwa razy i weź trzecią rundę. Jeśli partner najpierw zagra czwórkę (niska: nieparzysta, tu trzy), rozgrywający ma dwie: weź drugą rundę. Bez sygnału ilościowego partnera pozostaje zgadywanie.</p>

<h3>Preferencja koloru</h3>
<p>Czasem zachęta i ilość nic nie znaczą, a wtedy wysokość karty wskazuje inny kolor. Klasyczny przypadek to przebitka. Atutami są piki, a ty wychodzisz w kiera do przebitki partnera. Pozostałe kolory to kara i trefle. Zagraj <strong>wysokiego</strong> kiera, żeby poprosić o powrót w karo (wyższy z dwóch kolorów), a <strong>niskiego</strong> kiera, żeby poprosić o trefla. Jeśli masz ♦A, zagraj najwyższego kiera; partner przebija, wraca w karo do twojego asa, a ty dajesz mu drugą przebitkę.</p>
<p>Bez preferencji zagraj kartę średnią. Niektóre pary stosują sygnał preferencyjny także przy powrocie w kolor partnera; boty w tej aplikacji używają go tylko przy dawaniu przebitki.</p>

<h3>Dobre nawyki</h3>
<ul>
<li>Na wist partnera sygnalizuj najpierw zachętę lub zniechętę; na wyjście rozgrywającego — ilość; preferencji używaj tylko w jasnej sytuacji.</li>
<li>Nie sygnalizuj kartą, która może później wziąć lewę. Z Q J 10 9 7 siódemka może wystarczyć jako zachęta.</li>
<li>Sygnalizuj w równym tempie: myśl, gdy dziadek się wykłada, a nie w środku lewy.</li>
<li>Nie pokazuj ilości, gdy może to pomóc tylko rozgrywającemu, na przykład gdy rozgrywający zgaduje, jak grać kolor, a ilość nic nie da partnerowi. Boty w tej aplikacji zawsze pokazują ilość, gdy rozgrywający gra kolor boczny, więc możesz ćwiczyć jej odczytywanie.</li>
</ul>
<div class="warn">Sygnał to informacja, nie rozkaz. Partner łączy go z tym, co widzi u dziadka i we własnej ręce, i może mieć dobre powody, żeby zrobić coś innego.</div>
`,
    keyPoints: [
      'Na wist partnera i przy pierwszej zrzutce sygnał zachęcający/zniechęcający: wysoka zachęca, niska zniechęca.',
      'Gdy rozgrywający gra kolor boczny, sygnał ilościowy: najpierw wyższa pokazuje parzystą liczbę, najpierw niższa nieparzystą.',
      'Dzięki ilości wiesz, kiedy wziąć asa przeciw długiemu kolorowi dziadka bez dojść.',
      'Sygnał preferencyjny: wysoka karta prosi o wyższy z pozostałych kolorów, niska o niższy; średnia oznacza brak preferencji.',
      'Nigdy nie marnuj karty, która może wziąć lewę, tylko po to, by dać sygnał.',
    ],
    quiz: [
      {
        q: 'Partner wychodzi ♠A (z AK) przeciw 4♥. Dziadek ma ♠8 6 4. Masz ♠Q 9 3. Którą kartę zagrywasz?',
        options: ['♠Q', '♠9', '♠3', 'To bez znaczenia'],
        answer: 1,
        explain: 'Dziewiątka zachęca. Partner kontynuuje królem, a twoja dama bierze trzecią rundę. Trójka powiedziałaby partnerowi, że nie masz nic w pikach.',
      },
      {
        q: 'Rozgrywający gra kolor, w którym masz 8 3. Którą kartę zagrać najpierw, żeby pokazać ilość?',
        options: ['Ósemkę', 'Trójkę', 'Obojętnie', 'Żadną: nigdy nie pokazuj ilości'],
        answer: 0,
        explain: 'Najpierw wyższa, potem niższa pokazuje parzystą liczbę. Zagraj teraz ósemkę, a następnym razem trójkę; partner odczyta, że w tym kolorze były u ciebie dwie (albo cztery) karty.',
      },
      {
        q: 'Przy standardowych sygnałach twoją pierwszą zrzutką jest ♣2. Co mówi?',
        options: ['Chcę trefli', 'Nie chcę trefli', 'Mam dwa trefle', 'Zagraj karo'],
        answer: 1,
        explain: 'Pierwsza zrzutka to sygnał zachęcający lub zniechęcający. Niska karta zniechęca do koloru, z którego ją zrzucono.',
      },
      {
        q: 'Dziadek ma ♦K Q J 10 5 i nie ma bocznego dojścia; ty masz ♦A 7 3. Rozgrywający gra kara, a partner dokłada dziewiątkę, potem czwórkę. Kiedy wziąć asa?',
        options: ['W pierwszej rundzie', 'W drugiej rundzie', 'W trzeciej rundzie', 'Nigdy'],
        answer: 2,
        explain: 'Najpierw wyższa, potem niższa u partnera pokazuje parzystą liczbę, dwie, więc rozgrywający miał trzy. Weź asa w trzeciej rundzie, gdy rozgrywający nie ma już kara, żeby dojść do stołu.',
      },
      {
        q: 'Atutami są piki. Wychodzisz w kiera do przebitki partnera i chcesz powrotu w karo. Z ♥9 8 2 którego kiera zagrywasz?',
        options: ['♥9', '♥8', '♥2', 'To bez znaczenia'],
        answer: 0,
        explain: 'To sytuacja na sygnał preferencyjny. Wysoka karta prosi o wyższy z pozostałych kolorów bocznych (kara zamiast trefli).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'Kontra negatywna',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Jak odpowiadający kontrą po wejściu pokazuje niezalicytowany kolor starszy i jak współdziałają pas karny i kontra wznawiająca.',
    body: `
<h3>Problem</h3>
<p>Partner otwiera 1♦, a prawy przeciwnik wchodzi 1♠. Masz cztery kiery i 9 PC. Odzywka 2♥ obiecywałaby pięć kierów i 10+ punktów, więc nie możesz jej użyć, a nie chcesz stracić możliwego fitu kierowego. Rozwiązaniem jest <strong>kontra negatywna</strong>: po otwarciu partnera i wejściu do 2♠ włącznie kontra odpowiadającego jest wywołująca i pokazuje niezalicytowany kolor starszy (lub oba).</p>

<h3>Co pokazuje kontra</h3>
<p>Siła: 6+ PC, gdy wejście było na wysokości jednego, 8+, gdy na wysokości dwóch. Układ:</p>
<table>
<thead><tr><th>Licytacja</th><th>Kontra odpowiadającego pokazuje</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Oba starsze (zwykle po cztery karty)</td></tr>
<tr><td>1♣ lub 1♦ – (1♥) – X</td><td>Dokładnie cztery piki (1♠ pokazałoby pięć lub więcej)</td></tr>
<tr><td>1♣ lub 1♦ – (1♠) – X</td><td>Co najmniej cztery kiery (2♥ pokazałoby pięć i 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>Młodsze albo siłę bez jasnej odzywki</td></tr>
<tr><td>1♥ – (2♣ lub 2♦) – X</td><td>Cztery piki, 8+ PC</td></tr>
<tr><td>1♠ – (2♣ lub 2♦) – X</td><td>Co najmniej cztery kiery, 8+ PC</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: kontra"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: kontra"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: kontra"></div>
<p>Pierwsza ręka pokazuje swoje cztery kiery. Druga ma dokładnie cztery piki i 7 PC: kontra zamiast 1♠. Trzecia pokazuje cztery piki i siłę wystarczającą na wysokość dwóch.</p>

<h3>Rebid otwierającego po kontrze negatywnej</h3>
<ul>
<li>Z czterema kartami w kolorze starszym pokazanym przez partnera zalicytuj go: najtaniej z minimum albo skokiem z nadwyżką (około 16-18).</li>
<li>W przeciwnym razie daj zwykły rebid: powtórz sześciokartowy kolor, zalicytuj drugi kolor albo bez atu z zatrzymaniem w kolorze wejścia.</li>
<li>Z długim, mocnym kolorem wchodzącego możesz spasować na kontrę i zamienić ją na karną.</li>
</ul>

<h3>Pas karny i kontra wznawiająca</h3>
<p>Ponieważ kontra odpowiadającego jest wywołująca, nie może on kontrować karnie z mocnym kolorem wchodzącego. Zamiast tego odpowiadający <strong>pasuje</strong> i czeka. Gdy otwierający jest krótki w kolorze wejścia, powinien wznowić licytację kontrą, którą odpowiadający pasem zamienia na karną.</p>
<div class="hand" data-cards="S:K5 H:73 D:Q984 C:KQ1093" data-label="1♥ – (2♣) – ?: pas"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Otwierający (Północ): kontra wznawiająca"></div>
<p>♣KQ1093 Południa siedzą za treflami Wschodu i 2♣ z kontrą zapewne przegra kilka lew. Północ z singlem trefl wznawia licytację kontrą, bo pas partnera może oznaczać właśnie taką rękę. Z długością w kolorze wejścia otwierający powinien ostrożniej wznawiać: wtedy jest mało prawdopodobne, że partner czeka na karną kontrę.</p>
<div class="tip">Po wejściu nowy kolor odpowiadającego nadal jest naturalny i forsujący, ale pokazuje piątkę, bo czwórkę można było pokazać kontrą negatywną.</div>
<div class="warn">Kontra negatywna to nie kontra karna. Jeśli chcesz ukarać wejście, spasuj i licz na to, że partner wznowi licytację.</div>
`,
    keyPoints: [
      'Po otwarciu partnera i wejściu prawego przeciwnika (do 2♠) kontra odpowiadającego jest wywołująca.',
      'Pokazuje niezalicytowany kolor starszy (lub oba): 6+ PC na wysokości jednego, 8+ na wysokości dwóch.',
      '1♣/1♦ – (1♥) – X pokazuje dokładnie cztery piki; 1♠ pokazałoby pięć.',
      'Z mocną długością w kolorze wejścia odpowiadający pasuje; otwierający z krótkością w tym kolorze wznawia licytację kontrą.',
      'Otwierający licytuje naturalnie, z nadwyżką skacze w kolor starszy partnera.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Masz ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 PC).',
        options: ['2♥', 'Kontra', '1BA', 'Pas'],
        answer: 1,
        explain: '2♥ obiecywałoby pięć kierów i 10+ punktów. Kontra negatywna pokazuje co najmniej cztery kiery z 6+ i nie gubi fitu kierowego.',
      },
      {
        q: '1♣ – (1♥) – ? Masz ♠KJ752 ♥84 ♦Q63 ♣J95 (7 PC).',
        options: ['Kontra', '1♠', '1BA', '2♠'],
        answer: 1,
        explain: 'Po wejściu 1♥ kontra pokazuje dokładnie cztery piki, więc z pięcioma pikami licytuj 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Masz ♠K5 ♥73 ♦Q984 ♣KQ1093 (10 PC).',
        options: ['Kontra', 'Pas', '3BA', '2BA'],
        answer: 1,
        explain: 'Kusi kontra karna, ale twoja kontra byłaby negatywna. Spasuj i oczekuj, że partner z krótkimi treflami wznowi licytację kontrą; na nią spasujesz.',
      },
      {
        q: 'Otwierasz 1♥ z ♠A863 ♥AQJ74 ♦K52 ♣6. Lewy przeciwnik wchodzi 2♣, potem pas, pas do ciebie. Co robisz?',
        options: ['Pas', 'Kontra', '2♥', '2♠'],
        answer: 1,
        explain: 'Z singlem w kolorze wejścia wznów licytację kontrą. Partner mógł spasować z mocnymi treflami i teraz spasuje na karną; w przeciwnym razie zalicytuje swój najlepszy kolor.',
      },
      {
        q: 'Do jakiej wysokości wejścia kontra odpowiadającego pozostaje w tym systemie kontrą negatywną (wywołującą)?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Kontra negatywna obowiązuje do 2♠ włącznie. Powyżej kontra też często bywa wywołująca z umowy, ale ten system definiuje ją do 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Rozpoznawanie szlemów i Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Jak rozpoznać, że szlemik jest możliwy, i jak Blackwoodem upewnić się, że nie brakuje dwóch asów.',
    body: `
<h3>Dlaczego szlemy są ważne</h3>
<p>Szlemik daje 500 punktów premii przed partią i 750 po partii; szlem 1000 lub 1500. Wylicytowanie realnego szlemika, którego inni nie znajdą, jest warte bardzo dużo; wylicytowanie takiego, który przegra, kosztuje mniej więcej tyle samo. Potrzebujesz dwóch rzeczy: dość <strong>lew</strong> (siła, fit i układ) i dość <strong>kontroli</strong> (przeciwnicy nie mogą odegrać dwóch szybkich lew).</p>

<h3>Oznaki szlemika</h3>
<ul>
<li><strong>Łączna siła:</strong> około 33 punktów na szlemika i 37 na szlema przy rękach zrównoważonych. Z dobrym fitem atutowym i układem wystarczy mniej.</li>
<li><strong>Partner pokazuje nadwyżkę</strong>, a ty też masz dobrą rękę: skok w nowy kolor, rewers, silne 2♣, podniesienie skokiem naprzeciw twojego otwarcia, Jacoby 2BA naprzeciw nadwyżki.</li>
<li><strong>Duży fit</strong> (dziewięć lub dziesięć atutów) plus źródło lew, np. długi kolor boczny.</li>
<li><strong>Kontrole:</strong> asy, króle i krótkości w kolorach bocznych.</li>
</ul>

<h3>Plan</h3>
<ol>
<li>Uzgodnij kolor atutowy (albo zdecyduj się na bez atu).</li>
<li>Ustal, że łączna siła wystarcza.</li>
<li>Sprawdź kontrole, zwykle Blackwoodem.</li>
<li>Zalicytuj szlemika albo zatrzymaj się na wysokości pięciu.</li>
</ol>

<h3>Blackwood</h3>
<p>Po uzgodnieniu koloru odzywka 4BA pyta partnera, ile ma asów:</p>
<table>
<thead><tr><th>Odpowiedź</th><th>Asy</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 lub 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>Z licytacji zawsze wynika, czy 5♣ oznacza 0, czy 4. Jeśli brakuje dwóch asów, zamknij licytację na pięciu w kolor atutowy; partner musi spasować. Jeśli brakuje jednego, licytuj szlemika. Jeśli nie brakuje żadnego, a interesuje cię wielki szlem, zalicytuj <strong>5BA</strong>, pytając o króle: 6♣ = 0 lub 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5BA obiecuje, że para ma wszystkie cztery asy.</p>
<p>Pytający Blackwoodem jest kapitanem: odpowiadający tylko odpowiada, a potem akceptuje jego decyzję.</p>

<h3>Roman Key Card Blackwood</h3>
<p>Większość graczy używa dziś udoskonalonej wersji, <strong>Roman Key Card Blackwood</strong>, i tak domyślnie grają boty w tej aplikacji. Liczy ona pięć <strong>wartości kluczowych</strong> — cztery asy i króla atutowego — i mówi też o damie atutowej:</p>
<table>
<thead><tr><th>Odpowiedź</th><th>Wartości kluczowe</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 lub 4</td></tr>
<tr><td>5♦</td><td>0 lub 3</td></tr>
<tr><td>5♥</td><td>2, bez damy atutowej</td></tr>
<tr><td>5♠</td><td>2, z damą atutową</td></tr>
</tbody>
</table>
<p>Decyzje podejmuje się tak samo: gdy brakuje dwóch wartości kluczowych, zatrzymaj się na wysokości pięciu, gdy brakuje jednej — licytuj szlemika. Lekcja „Roman Key Card Blackwood (RKCB)” omawia to w całości, łącznie z pytaniem o damę atutową.</p>

<h3>Przykład</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Północ otwiera 1♠ z 18 PC. Południe z 15 PC i czterema pikami licytuje 2BA, czyli Jacoby 2BA: podniesienie forsujące do dograny. 3♠ Północy to standardowy sposób pokazania nadwyżki bez singla i renonsu. Południe może teraz policzyć razem około 33 punktów i dziewięciokartowy fit, więc szlemik jest prawdopodobny. 4BA pyta o asy; 5♥ pokazuje dwa. Mając ♥A, Południe wie, że brakuje tylko jednego asa, i licytuje 6♠.</p>
<p>W Roman Key Card Blackwood, którym grają boty, Północ odpowiada 5♦: trzy wartości kluczowe, ♠A, ♦A i ♠K. Południe, mając tylko ♥A, wie, że to trzy, a nie zero, więc brakuje jednej wartości kluczowej; Południe ma ♠Q i tak samo dochodzi do 6♠.</p>
<p>W rozgrywce jedyną przegrywającą jest ♣A: rozgrywający ściąga atuty, odgrywa kiery i gra ♦A, karo do króla i ♦Q dziadka, zrzucając jednego trefla Północy.</p>

<h3>Granice Blackwooda</h3>
<p>Blackwood liczy asy; nie mówi, <em>które</em> to asy ani czy w kolorze bocznym nie ma dwóch szybkich przegrywających. Nie używaj go:</p>
<ul>
<li>z renonsem (as partnera może być w twoim renonsie, gdzie jest zmarnowany);</li>
<li>z dwiema blotkami w niezalicytowanym kolorze (partner może nie mieć w nim ani asa, ani króla);</li>
<li>gdy odpowiedź na wysokości pięciu może wynieść cię ponad bezpieczny kontrakt, co często zdarza się przy treflach w atu.</li>
</ul>
<p>W takich przypadkach narzędziem są cue bidy kontrolne; zob. lekcję „Kontrole i cue bidy: kiedy nie używać Blackwooda”.</p>
<div class="warn">4BA nie zawsze jest Blackwoodem. Gdy nie uzgodniono koloru, a ostatnia odzywka partnera była naturalnym bez atu (1BA – 4BA, 2BA – 4BA), 4BA jest ilościowe: inwituje 6BA. Żeby zapytać o asy po bez atu partnera, użyj Gerbera 4♣.</div>
`,
    keyPoints: [
      'Szlemik wymaga około 33 punktów łącznie (szlem około 37); fit i układ mogą to obniżyć.',
      'Najpierw ustal atut i siłę, potem sprawdź kontrole.',
      'Odpowiedzi na zwykły Blackwood: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; potem 5BA pyta o króle. Boty grają Roman Key Card Blackwood: 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 i dama atutowa.',
      'Brakuje dwóch asów: zatrzymaj się na pięciu w uzgodniony kolor.',
      'Nie używaj Blackwooda z renonsem ani z dwiema szybkimi przegrywającymi w niezalicytowanym kolorze.',
    ],
    quiz: [
      {
        q: 'Partner licytuje 4BA (zwykły Blackwood), a ty masz jednego asa. Co odpowiadasz?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ pokazuje 0 lub 4, 5♦ jednego, 5♥ dwa, 5♠ trzy.',
      },
      {
        q: 'Licytujesz 4BA, a partner odpowiada 5♥ (dwa asy). Masz pozostałe dwa asy. Co teraz?',
        options: ['Zamknąć licytację na pięciu w kolor atutowy', 'Zalicytować szlemika albo 5BA z pytaniem o króle, jeśli szlem jest możliwy', 'Spasować na 5♥', 'Zalicytować 6BA bez względu na kolor'],
        answer: 1,
        explain: 'Nie brakuje żadnego asa, więc szlemikowi nie grożą dwa szybkie asy. Jeśli ręce mogą wziąć trzynaście lew, 5BA pyta o króle i mówi partnerowi, że wszystkie asy są w parze.',
      },
      {
        q: 'Uzgodniono piki. Licytujesz 4BA, a partner odpowiada 5♦ (jeden as). Masz jednego asa. Co robisz?',
        options: ['Licytujesz 6♠', 'Licytujesz 5♠', 'Licytujesz 5BA', 'Pasujesz'],
        answer: 1,
        explain: 'Brakuje dwóch asów, więc przeciwnicy mogą od razu odegrać dwie lewy. Zamknij licytację na 5♠; partner musi spasować.',
      },
      {
        q: 'Dwie ręce zrównoważone, razem 33 PC, bez fitu atutowego. Jaki kontrakt?',
        options: ['3BA', '4BA', '6BA', '7BA'],
        answer: 2,
        explain: 'Około 33 PC łącznie daje dobre szanse na dwanaście lew w bez atu. Na szlema potrzeba 37.',
      },
      {
        q: 'Partner odpowiada 5♣ na twoje 4BA (zwykły Blackwood). Co to pokazuje?',
        options: ['Trefle', 'Brak asów albo wszystkie cztery', 'Jednego asa', 'Trzy asy'],
        answer: 1,
        explain: '5♣ to 0 lub 4 asy. Z licytacji albo z twojej ręki wynika, która to możliwość: jeśli masz asa, partner nie może mieć czterech.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Gerber i ilościowe 4BA',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Jak szukać szlemika po otwarciu w bez atu: pytanie o asy Gerberem i inwit ilościowym 4BA.',
    body: `
<h3>Szlemik po otwarciu w bez atu</h3>
<p>Gdy partner otwiera 1BA (15-17) lub 2BA (20-21), znasz jego siłę z dokładnością do dwóch, trzech punktów, więc często możesz zsumować punkty i zdecydować samodzielnie. Pomagają dwa narzędzia:</p>
<ul>
<li><strong>4BA, ilościowe:</strong> „partnerze, licytuj 6BA, jeśli masz górę przedziału”.</li>
<li><strong>4♣, Gerber:</strong> „partnerze, ile masz asów?”</li>
</ul>

<h3>Ilościowe 4BA</h3>
<p>Bezpośrednie podniesienie 1BA do 4BA to nie Blackwood. Pokazuje 16-17 punktów, więc razem jest 31-34, na granicy 33 potrzebnych do szlemika. Otwierający z minimum (15) pasuje, a z maksimum (17) licytuje 6BA; z 16 decyduje według oceny ręki, przyjmując inwit z dobrym kolorem pięciokartowym albo dobrymi kartami pośrednimi.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Partner otworzył 1BA: licytuj 4BA"></div>
<p>16 PC, ręka zrównoważona. Licytuj 4BA. Z 18-21 licytuje się od razu 6BA, bo nawet minimalne otwarcie daje razem 33; z 22 lub więcej licytuje się 7BA, bo nawet minimum daje razem 37.</p>
<p>Po 2BA (20-21) odzywka 4BA pokazuje 11-12 i prosi otwierającego o 6BA z maksimum.</p>
<table>
<thead><tr><th>Odpowiadający po</th><th>3BA</th><th>4BA (inwit)</th><th>6BA</th><th>7BA</th></tr></thead>
<tbody>
<tr><td>1BA (15-17)</td><td>10-15</td><td>16-17</td><td>18-21</td><td>22+</td></tr>
<tr><td>2BA (20-21)</td><td>4-10</td><td>11-12</td><td>13-16</td><td>17+</td></tr>
</tbody>
</table>

<h3>Gerber</h3>
<p>Skok na 4♣ bezpośrednio po otwarciu partnera 1BA lub 2BA (albo po 2♣ – 2♦ – 2BA) pyta o asy:</p>
<table>
<thead><tr><th>Odpowiedź na 4♣</th><th>Asy</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 lub 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4BA</td><td>3</td></tr>
</tbody>
</table>
<p>Po odpowiedzi 5♣ pytającego pyta o króle według tego samego schematu (5♦ = 0 lub 4, 5♥ = 1, 5♠ = 2, 5BA = 3). Każda inna odzywka ustala kontrakt; 4BA pytającego jest zamknięciem, a jeśli partner odpowiedział 4BA, pytający może po prostu spasować.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Partner otworzył 1BA: licytuj 4♥ (Texas)"></div>
<p>16 PC (razem 31-33) i sześć mocnych pików: ręka jest bogata w lewy, ale nie masz asów, więc pytanie dotyczy asów. Boty domyślnie grają transfery Texas: licytuj 4♥, partner kończy transfer odzywką 4♠, a twoje 4BA jest wtedy Roman Key Card Blackwood, który liczy też króla i damę pik. Bez Texasu licytuj 4♣, Gerber: po 4♠ (dwa asy) spasuj i graj 4♠; po 4BA (trzy asy) licytuj 6♠.</p>

<h3>Czego użyć?</h3>
<ul>
<li>Ilościowego 4BA używaj, gdy pytanie dotyczy <strong>siły</strong>: nie masz pewności, czy łączne punkty sięgają 33.</li>
<li>Gerbera używaj, gdy pytanie dotyczy <strong>asów</strong>: z ręką bogatą w lewy (niezrównoważoną), gdy siła nie jest problemem. Przy rękach zrównoważonych i 33+ PC łącznie nie może brakować dwóch asów, więc po prostu liczysz punkty.</li>
<li>Z długim kolorem naprzeciw 1BA najpierw daj transfer (albo licytuj naturalnie), żeby ustalić kolor, a dopiero potem sięgnij po narzędzia szlemowe. Przy długim, mocnym kolorze liczenie lew jest ważniejsze niż liczenie punktów.</li>
</ul>
<div class="tip">Licz do 33 na szlemika w bez atu i do 37 na szlema. Ze źródłem lew, np. solidną piątką lub szóstką, potrzeba trochę mniej.</div>
<div class="warn">Nie myl 1BA – 4BA (ilościowe) z Blackwoodem. Jeśli chcesz wiedzieć o asach naprzeciw bez atu partnera, licytuj 4♣.</div>
`,
    keyPoints: [
      '1BA – 4BA = 16-17, ilościowe: otwierający z maksimum licytuje 6BA.',
      '2BA – 4BA = 11-12, ilościowe.',
      'Gerber 4♣ po 1BA lub 2BA: 4♦ 0/4, 4♥ 1, 4♠ 2, 4BA 3; potem 5♣ pyta o króle.',
      'Ilościowego 4BA używaj, gdy pytanie dotyczy siły, Gerbera, gdy dotyczy asów.',
      'Szlemy w bez atu wymagają około 33 punktów (szlemik) lub 37 (szlem).',
    ],
    quiz: [
      {
        q: 'Partner otwiera 1BA, a ty licytujesz 4♣ (Gerber). Partner ma jednego asa. Jaka jest odpowiedź?',
        options: ['4♦', '4♥', '4♠', '4BA'],
        answer: 1,
        explain: 'Odpowiedzi na Gerbera idą stopniami od 4♦: 4♦ = 0 lub 4, 4♥ = 1, 4♠ = 2, 4BA = 3.',
      },
      {
        q: 'Co oznacza 1BA – 4BA?',
        options: ['Blackwood', 'Ilościowy inwit do 6BA z 16-17', 'Zamknięcie', 'Gerber'],
        answer: 1,
        explain: 'Nie uzgodniono koloru, a partner zalicytował naturalnie bez atu, więc 4BA inwituje szlemika. Otwierający z maksimum licytuje 6BA, z minimum pasuje.',
      },
      {
        q: 'Otwierasz 1BA z 17 PC. Partner podnosi do 4BA. Co robisz?',
        options: ['Pas', '5♥, pokazując dwa asy', '6BA', '5BA'],
        answer: 2,
        explain: '17 to góra przedziału: 17 + 16-17 = 33-34. Przyjmij inwit, licytując 6BA.',
      },
      {
        q: 'Partner otwiera 2BA. Masz rękę zrównoważoną z 12 PC. Co licytujesz?',
        options: ['3BA', '4BA', '6BA', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Inwituj przez 4BA (11-12); z 21 partner zalicytuje 6BA.',
      },
      {
        q: '1BA – 4♣ – 4♠ (dwa asy). Nie masz asów. Co licytujesz?',
        options: ['6BA', '4BA', '5♣', '7BA'],
        answer: 1,
        explain: 'Brakuje dwóch asów, więc szlemik mógłby przegrać dwie pierwsze lewy. 4BA po odpowiedzi na Gerbera jest zamknięciem.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'Reguła 11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Jak wist czwartą od góry pozwala obu obrońcom i rozgrywającemu ustalić, ile wyższych kart ma każda ręka.',
    body: `
<h3>Reguła</h3>
<p>Gdy partner wistuje <strong>czwartą od góry</strong>, odejmij jej wysokość od 11. Wynik to liczba kart wyższych od wistowej, które mają <em>pozostałe trzy ręce</em>: dziadek, ty i rozgrywający. Widzisz dziadka i swoją rękę, więc możesz obliczyć, ile wyższych kart ma rozgrywający.</p>

<h3>Dlaczego to działa</h3>
<p>Nad kartą o wysokości r jest 14 − r wyższych kart (as liczy się jako 14). Jeśli wist jest czwartą od góry, wistujący ma dokładnie trzy z nich. Na pozostałe trzy ręce zostaje 14 − r − 3 = 11 − r.</p>

<h3>Przykład w obronie</h3>
<table>
<thead><tr><th>Pozycja</th><th>Kara</th></tr></thead>
<tbody>
<tr><td>Północ (dziadek)</td><td>Q 10 4</td></tr>
<tr><td>Zachód (partner, wistuje siódemką)</td><td>A J 9 7 5</td></tr>
<tr><td>Wschód (ty)</td><td>K 8 2</td></tr>
<tr><td>Południe (rozgrywający)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Przeciw 3BA partner wistuje ♦7. 11 − 7 = 4 karty wyższe od siódemki w pozostałych trzech rękach. Dziadek ma dwie (Q, 10) i ty masz dwie (K, 8). Rozgrywający nie ma więc żadnej i nie może pobić siódemki.</p>
<p>Gdy dziadek dołoży blotkę, możesz dołożyć dwójkę i pozwolić siódemce partnera wziąć lewę. Partner zostaje w ręce i kontynuuje kolor przez Q 10 dziadka do twoich K 8, a obrona bierze wszystkie lewy karowe. Jeśli zamiast tego zagrasz króla, Q 10 dziadka wezmą lewę przy kontynuacji koloru.</p>

<h3>Rozgrywający też może z niej korzystać</h3>
<p>Załóżmy, że Zachód wistuje ♠7 (czwarta od góry) przeciw twojemu 3BA. Dziadek ma ♠A 10 5, a ty ♠K 9 3. 11 − 7 = 4 wyższe karty u Północy, Wschodu i Południa; widzisz wszystkie cztery (A, 10, K, 9). Wschód nie ma pika wyższego od siódemki. Możesz więc dołożyć blotkę ze stołu i tanio wziąć lewę dziewiątką, zachowując asa i króla jako zatrzymania.</p>

<h3>Najniższa karta pokazuje długość</h3>
<p>Jeśli partner wistuje dwójką jako czwartą od góry, nie może mieć piątej, niższej karty: ma w kolorze dokładnie cztery karty. Wist trójką, gdy dwójka jest widoczna gdzie indziej, mówi to samo. To pomaga policzyć rękę rozgrywającego.</p>

<h3>Kiedy reguła zawodzi</h3>
<p>Reguła 11 dotyczy tylko prawdziwych wistów czwartą od góry. Nie stosuje się jej do wistów z sekwensu (król z KQJ), do wistu najwyższą z blotek ani z dubla, ani do wistu w kolor partnera z honoru z blotkami. Jeśli rachunek daje wynik niemożliwy (np. rozgrywający musiałby mieć ujemną liczbę wyższych kart), wist nie był czwartą od góry — i to też coś mówi.</p>
<div class="tip">Odejmuj od razu, gdy dziadek się wyłoży, zanim zagra trzecia ręka. Wtedy od razu wiesz, czy musisz zagrać wysoko, czy możesz pozwolić karcie partnera wziąć lewę.</div>
<div class="warn">Nie stosuj reguły mechanicznie przeciw kontraktom kolorowym, gdy partner może wistować z krótkiego koloru. Używaj jej, gdy wist jest wyraźnie czwartą od góry z długości, co najczęściej zdarza się przeciw bez atu.</div>
`,
    keyPoints: [
      'Przy wiście czwartą od góry 11 minus wysokość karty = liczba wyższych kart w pozostałych trzech rękach.',
      'Odejmij to, co widzisz u dziadka i w swojej ręce, a dowiesz się, ile ma rozgrywający.',
      'Rozgrywający może zastosować ten sam rachunek do rąk obrońców.',
      'Dwójka jako czwarta od góry pokazuje dokładnie cztery karty.',
      'Reguła działa tylko przy prawdziwych wistach czwartą od góry.',
    ],
    quiz: [
      {
        q: 'Partner wistuje siódemką, czwartą od góry. Ile kart wyższych od siódemki mają razem dziadek, ty i rozgrywający?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Nad siódemką jest siedem kart (8, 9, 10, J, Q, K, A), a partner ma trzy z nich.',
      },
      {
        q: 'Partner wistuje ♥6 (czwarta od góry) przeciw 3BA. Dziadek ma ♥K 9 3, a ty ♥A 10 4. Ile kierów wyższych od szóstki ma rozgrywający?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. Dziadek ma dwie wyższe (K, 9), ty dwie (A, 10), więc rozgrywający ma jedną.',
      },
      {
        q: 'Partner wistuje ♣2 przeciw 3BA, a gracie wisty czwartą od góry. Ile trefli ma partner?',
        options: ['Trzy', 'Dokładnie cztery', 'Pięć lub więcej', 'Nie da się powiedzieć'],
        answer: 1,
        explain: 'Dwójka jest najniższą kartą, więc pod nią nie ma żadnej: jako czwarta od góry pokazuje dokładnie cztery trefle.',
      },
      {
        q: 'Rozgrywasz 3BA. Zachód wistuje ♠7 (czwarta od góry). Dziadek ma ♠A 10 5, a ty ♠K 9 3. Ile pików wyższych od siódemki ma Wschód?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 wyższe karty u Północy, Wschodu i Południa, a widzisz wszystkie cztery (A, 10, K, 9). Wschód nie ma żadnej, więc możesz tanio wziąć lewę dziewiątką.',
      },
      {
        q: 'Kiedy reguły 11 nie stosuje się?',
        options: ['Przeciw bez atu', 'Gdy wist nie jest czwartą od góry, np. najwyższą z sekwensu', 'Gdy dziadek ma honor', 'Gdy masz singla'],
        answer: 1,
        explain: 'Rachunek opiera się na tym, że wistujący ma dokładnie trzy wyższe karty. Wisty z sekwensu, najwyższą z blotek i podobne łamią to założenie.',
      },
    ],
  },
];
