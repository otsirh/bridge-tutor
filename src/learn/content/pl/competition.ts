// Lekcje o licytacji przeciwko otwarciu 1BA i otwarciom blokującym
// przeciwników oraz o tym, co robić, gdy przeciwnik kontruje nasze otwarcie.
// Zasady znaczników: zob. src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Licytacja po ich 1BA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Kiedy kontrować lub wchodzić po silnym 1BA przeciwników, kiedy nie wchodzić do licytacji i jak odpowiada partner.',
    body: `
<h3>Silne, precyzyjne otwarcie</h3>
<p>Gdy przeciwnik otwiera 1BA, pokazuje 15-17 PC i rękę zrównoważoną. Dla trzech pozostałych graczy zostaje najwyżej 25 PC, a partner otwierającego wie prawie dokładnie, co ma jego strona. Wasza strona rzadko ma dograną, więc licytujesz z jednego z dwóch powodów: z silną ręką, żeby skontrować ich karnie; z długim kolorem, żeby walczyć o częściówkę. Odzywka na wysokości dwóch odbiera im przy okazji Staymana i transfery.</p>

<h3>Co grają boty</h3>
<table>
<thead><tr><th>Odzywka po 1BA</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>Kontra</td><td>15+ PC, dowolny układ: karna. Partner pasuje</td></tr>
<tr><td>2♣ / 2♦</td><td>Naturalna: 8-15 PC i kolor sześciokartowy lub dłuższy</td></tr>
<tr><td>2♥ / 2♠</td><td>Naturalna: 8-15 PC i kolor sześciokartowy albo dobry pięciokartowy (dwa z trzech najwyższych honorów lub trzy z pięciu)</td></tr>
<tr><td>Pas</td><td>Wszystko inne</td></tr>
</tbody>
</table>
<p>Licytowany kolor musi być twoim najdłuższym. Skoki i 2BA nie są używane.</p>
<p>Gracze turniejowi używają tu często konwencji, która pozwala pokazać także dwukolorówki: Landy i Cappelletti pokazują oba starsze odzywką 2♣ lub 2♦, a w DONT kontra pokazuje dowolną jednokolorówkę. Warto się ich nauczyć, gdy będziesz mieć stałego partnera. Boty grają naturalną metodę opisaną wyżej i według niej tutor ocenia twoje odzywki.</p>

<h3>Przykłady</h3>
<p>Zachód otworzył 1BA, a ty jesteś Północą, na pozycji bezpośredniej.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1BA – ?: licytuj 2♠"></div>
<p>10 PC i sześć mocnych pików: walcz o kontrakt. Partner wie, co masz, i z poparciem może podnieść.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1BA – ?: licytuj 2♠"></div>
<p>Tylko pięć pików, ale K-Q-10-9 to dobry kolor, i to starszy: wart odzywki na wysokości dwóch.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1BA – ?: licytuj 2♦"></div>
<p>13 PC i sześć kar. Kolor młodszy wymaga sześciu kart.</p>

<h3>Kontra karna</h3>
<p>Kontra 1BA pokazuje 15+ PC, tyle co otwierający. Wasza strona ma co najmniej połowę punktów, otwierający często będzie grał ze słabym dziadkiem, a na pozycji bezpośredniej to ty wistujesz, z dobrą ręką. Partner pasuje, cokolwiek ma: w tym systemie kontra jest karna i partner ją zostawia.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1BA – ?: kontra"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1BA – ?: kontra"></div>
<p>Pierwsza ręka to klasyczna kontra karna: 17 PC i nic do zalicytowania. Druga też kontruje: z 15+ PC boty kontrują przy każdym układzie, zamiast licytować 2♠. Piki wezmą lewy także w obronie, bo to ty je zawistujesz.</p>

<h3>Kiedy nie wchodzić</h3>
<ul>
<li><strong>Ręka zrównoważona z mniej niż 15 PC.</strong> Nawet 13 czy 14 nie wystarczy do kontry, a licytować nie ma czego.</li>
<li><strong>Pięciokartowy kolor młodszy albo słaby pięciokartowy starszy.</strong> Na wysokości dwóch przeciwnicy mogą cię skontrować, a kolor młodszy wymaga sześciu kart.</li>
<li><strong>Oba starsze, ale bez długiego koloru.</strong> Dla takich rąk istnieją konwencje jak Landy czy Cappelletti; przy metodach naturalnych pasuj.</li>
<li><strong>Mniej niż 8 PC</strong>, nawet z długim kolorem.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1BA – ?: pas"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1BA – ?: pas"></div>
<p>Pierwsza ręka ma 13 PC, ale tylko pięciokartowy kolor młodszy. Druga ma pięć pików, ale Q-8-6-5-2 to nie kolor do licytowania na wysokości dwóch przy partnerze, który może nie mieć nic.</p>
<div class="tip">Pas bywa najlepszą odzywką. Rozgrywający 1BA ze słabym dziadkiem pada częściej, niż się wydaje, a dopóki pasujesz, nikt cię nie skontruje.</div>

<h3>Na pozycji wznawiającej</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Gdy po 1BA następują dwa pasy, partner otwierającego jest słaby, więc twój partner ma jakieś wartości. Pożycz króla: boty kontrują z <strong>12+ PC</strong> (nadal karnie) i licytują kolor z <strong>5-12 PC</strong>, przy tych samych wymaganiach co do koloru co na pozycji bezpośredniej.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1BA – pas – pas – ?: licytuj 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1BA – pas – pas – ?: kontra"></div>
<p>Mając tylko 6 PC, pierwsza ręka spasowałaby na pozycji bezpośredniej, ale na pozycji wznawiającej wystarczy dobry pięciokartowy starszy. Druga, 14 PC i ręka zrównoważona, kontruje: partner pasuje, a wy bronicie 1BA z kontrą.</p>

<h3>Odpowiedź partnera</h3>
<p>Po kontrze partnera pasuj: jest karna. Po wejściu w kolor starszy na wysokości dwóch boty odpowiadają tak:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Odzywka partnera wchodzącego</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>3♥ (podniesienie)</td><td>Trzykartowe poparcie i 6-12 punktów (liczą się punkty w poparciu). Wchodzący licytuje dograną tylko z maksimum, około 15 PC</td></tr>
<tr><td>4♥</td><td>Poparcie i 13+ punktów albo pięć atutów i singiel</td></tr>
<tr><td>2♠ (nowy kolor)</td><td>Dobry kolor pięciokartowy lub dłuższy i 8+ PC; nieforsujące</td></tr>
<tr><td>2BA / 3BA</td><td>Bez fitu: 12-14 PC, inwitujące / 15+ PC</td></tr>
<tr><td>Pas</td><td>Wszystko inne, także misfit z długim kolorem młodszym</td></tr>
</tbody>
</table>
<p>Przeciwnicy nie mają własnego koloru do cue bidu, więc nie ma podniesienia przez cue bid: podniesienie do 3♥ obejmuje zarówno ręce rywalizacyjne, jak i inwitujące. Po wejściu w kolor młodszy na wysokości dwóch podniesienie wymaga czterokartowego poparcia.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="Zachód otwiera 1BA; Północ wchodzi 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Północ ma 11 PC i sześć dobrych kierów: naturalne 2♥. Południe z trzema atutami i 7 punktami podnosi do 3♥. Z dziewięcioma wspólnymi atutami wysokość trzech jest dość bezpieczna (prawo totalnej liczby lew), a podniesienie utrudnia parze Wschód-Zachód, która ma ponad połowę punktów, znalezienie własnej częściówki. Północ nie ma nic ekstra i pasuje.</p>
<div class="warn">Nie wchodź po 1BA słabym kolorem tylko dlatego, że masz 12 czy 13 punktów: bez dobrego koloru te punkty są więcej warte w obronie.</div>
`,
    keyPoints: [
      'Po ich 1BA kontra pokazuje 15+ PC przy dowolnym układzie i jest karna: partner pasuje.',
      'Odzywki kolorowe na wysokości dwóch są naturalne: 8-15 PC i kolor sześciokartowy albo dobry pięciokartowy starszy.',
      'Nie wchodź z ręką zrównoważoną poniżej 15 PC, z pięciokartowym młodszym ani ze słabym pięciokartowym starszym.',
      'Na pozycji wznawiającej pożycz króla: kontra z 12+, kolor z 5-12.',
      'Odpowiedź na kolor starszy: podniesienie do trzech z 6-12 i poparciem, dograna z 13+.',
    ],
    quiz: [
      {
        q: 'Prawy przeciwnik otwiera 1BA (15-17). Masz ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 PC). Co licytujesz?',
        options: ['Pas', 'Kontra', '2♦', '2BA'],
        answer: 1,
        explain: 'Z 15+ PC masz tyle co otwierający: kontruj karnie. Partner spasuje, a 1BA z kontrą powinno paść.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1BA. Masz ♠A83 ♥K4 ♦KQ852 ♣J84 (13 PC). Co licytujesz?',
        options: ['2♦', 'Kontra', 'Pas', '2BA'],
        answer: 2,
        explain: 'Odzywka w kolor młodszy na wysokości dwóch wymaga sześciu kart, a kontra 15+ PC. Pasuj i broń.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1BA. Masz ♠KQJ974 ♥83 ♦A52 ♣84 (10 PC). Co licytujesz?',
        options: ['Pas', 'Kontra', '2♠', '3♠'],
        answer: 2,
        explain: 'Sześć mocnych pików i 8-15 PC: naturalne 2♠. Kontra pokazywałaby 15+ PC, a skoki po 1BA nie są używane.',
      },
      {
        q: 'Lewy przeciwnik otwiera 1BA, partner wchodzi 2♥, a prawy przeciwnik pasuje. Masz ♠Q852 ♥Q73 ♦K84 ♣962 (7 PC). Co licytujesz?',
        options: ['Pas', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Trzykartowe poparcie i 6-9 punktów: podnieś do 3♥. Z dziewięcioma atutami wysokość trzech jest dość bezpieczna. 3♣ pokazywałoby trefle, a 4♥ wymaga 13+.',
      },
      {
        q: '1BA po twojej lewej, potem pas, pas. Masz ♠KQ1095 ♥83 ♦952 ♣J84 (6 PC). Co licytujesz?',
        options: ['Pas', 'Kontra', '2♠', '3♠'],
        answer: 2,
        explain: 'Na pozycji wznawiającej boty licytują dobry pięciokartowy starszy z 5-12 PC: partner musi mieć jakieś wartości. Kontra pokazywałaby 12+ PC i jest karna.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Licytacja po otwarciach blokujących',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Jak kontrować, wchodzić lub licytować bez atu, gdy przeciwnicy otwierają słabym dwa albo blokiem na wysokości trzech, i jak odpowiada partner.',
    body: `
<h3>Plan blokującego</h3>
<p>Słabe dwa albo blok na wysokości trzech odbiera ci miejsce potrzebne do znalezienia najlepszego kontraktu. Blokujący wybrał wysokość według reguły 2-3-4: godzi się na dwie wpadki z kontrą, gdy jest po partii, a wy przed partią, na trzy przy równych założeniach i na cztery, gdy jest przed partią, a wy po partii, bo kosztuje to mniej więcej tyle, ile dałaby wam dograna. Z waszej strony stołu reguła mówi dwie rzeczy:</p>
<ul>
<li><strong>Nie licz na wysoką karę.</strong> Nawet z kontrą tracą mniej więcej tyle, ile jest warta wasza dograna. Jeśli macie dograną, licytuj ją.</li>
<li><strong>Ich założenia mówią, jak słabi mogą być.</strong> Przed partią przeciwko wam po partii blok może być bardzo słaby, więc partner częściej ma wartości; po partii przeciwko wam przed partią obiecuje więcej.</li>
</ul>
<p>Tak czy inaczej musisz działać od razu i wysoko, często zmuszając partnera do odpowiedzi na wysokości trzech. Potrzebujesz więc prawdziwych wartości. Poniższe wymagania botów są takie same przy każdych założeniach.</p>

<h3>Po słabym dwa</h3>
<p>Prawy przeciwnik otworzył 2♦, 2♥ lub 2♠:</p>
<table>
<thead><tr><th>Odzywka</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>Kontra</td><td>Wywołująca: 13+ PC, najwyżej dwie karty w ich kolorze i co najmniej trzy w każdym innym (dubel w niezalicytowanym młodszym jest dozwolony z czterema kartami w każdym niezalicytowanym starszym); albo dowolna ręka z 17+ PC</td></tr>
<tr><td>2BA</td><td>15-18 PC, ręka zrównoważona z zatrzymaniem w ich kolorze</td></tr>
<tr><td>Kolor</td><td>13-17 PC i dobry kolor pięciokartowy lub dłuższy (dwa z trzech najwyższych honorów lub trzy z pięciu), twój najdłuższy niezalicytowany kolor</td></tr>
<tr><td>Pas</td><td>Wszystko inne</td></tr>
</tbody>
</table>
<p>Z dobrym kolorem sześciokartowym wchodź, zamiast kontrować. Porównaj te 13 PC z 8, które wystarczają do wejścia na wysokości jednego: partner może musieć odpowiedzieć na twoją kontrę na wysokości trzech bez niczego, a twoje wejście jest już na wysokości dwóch lub trzech. Słabe wejścia skokiem i cue bid Michaelsa nie są używane po otwarciu blokującym.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: kontra"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: licytuj 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: licytuj 2BA"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: pas"></div>
<p>Pierwsza ręka to idealna kontra: 13 PC, singiel kier i poparcie w każdym innym kolorze. Druga ma dobry sześciokartowy kolor: zalicytuj go. Trzecia jest zrównoważona, z 16 PC i zatrzymanymi kierami. Czwarta ma idealny układ, ale tylko 10 PC: za mało, żeby wypychać partnera na wysokość trzech. Z długością w ich kolorze, na przykład ♠K4 ♥AQ1093 ♦K83 ♣J106, też pasuj: kontra prosiłaby partnera o licytację, a 2BA wymaga 15 PC.</p>
<div class="tip">Na pozycji wznawiającej (2♥ – pas – pas – ?) wejście wymaga tylko 10 PC, ale kontra nadal 13.</div>

<h3>Po bloku na wysokości trzech</h3>
<table>
<thead><tr><th>Odzywka</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>Kontra</td><td>Wywołująca: 14+ PC i ten sam układ co po słabym dwa albo dowolna ręka z 17+ PC</td></tr>
<tr><td>3BA</td><td>16-21 PC z zatrzymaniem w ich kolorze, do gry. Może to być długi, biegnący kolor młodszy zamiast ręki zrównoważonej</td></tr>
<tr><td>Kolor na wysokości trzech</td><td>13-17 PC i dobry kolor pięciokartowy lub dłuższy</td></tr>
<tr><td>Pas</td><td>Wszystko inne</td></tr>
</tbody>
</table>
<p>Z każdą wysokością wyżej kontra wymaga trochę więcej. Po bloku na wysokości czterech wymaga 15+ PC, a partner zwykle ją zostawia, chyba że ma długi kolor i układ.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: kontra"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: licytuj 3BA"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: licytuj 3♠"></div>
<p>Pierwsza ręka ma 14 PC i właściwy układ: kontra. Z ♦K zamiast ♦A (13 PC) boty by spasowały. Druga licytuje 3BA: kara przebiegną, a ♥K powinien zatrzymać kiery, bo wist wychodzi od Wschodu, a Zachód, który ma długie kiery, gra przed tobą. Trzecia licytuje swój dobry sześciokartowy kolor.</p>

<h3>Odpowiedź na kontrę partnera</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>Kontra partnera prosi cię o licytację i musisz licytować, choćby z najsłabszą ręką. Siłę pokazuj wysokością:</p>
<table>
<thead><tr><th>Twoja ręka</th><th>Odzywka</th></tr></thead>
<tbody>
<tr><td>0-8 PC</td><td>Najlepszy kolor najtaniej, jak się da, najpierw czterokartowy starszy</td></tr>
<tr><td>9-11 PC</td><td>Skok w najlepszy kolor, jeśli skok jest jeszcze na wysokości trzech (tu 3♠). Z czterema kartami w niezalicytowanym starszym, który mógłbyś zalicytować dopiero na wysokości trzech, zamiast tego dograna w tym kolorze (po 2♠: 4♥). W przeciwnym razie 2BA z 11 PC i zatrzymaniem w ich kolorze albo najlepszy kolor najtaniej</td></tr>
<tr><td>10-11 PC i pięć lub więcej pików</td><td>4♠</td></tr>
<tr><td>12+ PC</td><td>3♥, cue bid: forsujący do dograny. Z 13-16, ręką zrównoważoną lub półzrównoważoną i zatrzymaniem kierowym zamiast tego 3BA</td></tr>
<tr><td>Pięć mocnych kierów (trzy honory) i 8+ PC</td><td>Pas: kontra staje się karna</td></tr>
</tbody>
</table>
<p>Po bloku na wysokości trzech nie ma miejsca na skok: z 9-11 PC i czterema lub więcej kartami w niezalicytowanym starszym licytuj w nim dograną; w przeciwnym razie najlepszy kolor najtaniej, 3BA z 13-16, ręką zrównoważoną lub półzrównoważoną i zatrzymaniem albo cue bid z 12+. Kontrujący pasuje na odpowiedź na najniższej wysokości z minimum i podnosi ją tylko z dodatkowymi wartościami.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="Zachód otwiera 2♥; Północ kontruje."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Południe ma 9 PC i cztery piki: wystarczy na skok do 3♠, bo odpowiedź 2♠ mogłaby paść bez niczego. Północ z 13 PC, czterema atutami i singlem kier (16 punktów w poparciu pików) przyjmuje inwit. Po odpowiedzi 2♠ Północ tylko zainwitowałaby 3♠.</p>

<h3>Odpowiedź na wejście bez atu</h3>
<p>Po 2BA partnera nad słabym dwa (15-18): licytuj 3BA z 10+ PC; z sześciokartowym starszym dograną z 9+ PC albo trzy w tym kolorze z 6-8 jako inwit; ze słabszą ręką i kolorem pięciokartowym zalicytuj go na wysokości trzech do gry; w przeciwnym razie pasuj. Stayman i transfery nie są tu używane. Po 3BA partnera nad blokiem na wysokości trzech (16-21) boty pasują z większością rąk: licytują cztery w sześciokartowym starszym z 9+ PC, a z 12+ PC szukają szlemika. 4BA to ilościowy inwit z 12-14 PC, a 6BA licytują z 15+.</p>
<div class="warn">Nie kontruj bloku karnie tylko dlatego, że masz kilka wysokich kart w ich kolorze: kontra botów jest wywołująca. Z długością w ich kolorze pasuj i czekaj na kontrę partnera; z długimi, mocnymi atutami możesz potem tę kontrę zostawić jako karną.</div>
`,
    keyPoints: [
      'Po słabym dwa kontra (13+, krótkość w ich kolorze) i wejście (13-17, dobry kolor) wymagają prawdziwych wartości; 2BA pokazuje 15-18 w ręce zrównoważonej z zatrzymaniem.',
      'Po bloku na wysokości trzech kontra wymaga 14+; 3BA pokazuje 16-21 z zatrzymaniem, do gry.',
      'Z dobrym kolorem sześciokartowym wchodź; z 17+ PC przy dowolnym układzie najpierw kontruj.',
      'Partner musi licytować: najtaniej z 0-8, skokiem z 9-11, jeśli skok jest jeszcze na wysokości trzech (dograna w czterokartowym starszym, który mieści się dopiero na wysokości trzech), cue bid z 12+; pas tylko z mocnymi atutami.',
      'Blokujący liczy się z dwiema do czterech wpadek z kontrą: jeśli macie dograną, licytuj ją, zamiast liczyć na wysoką karę.',
    ],
    quiz: [
      {
        q: 'Prawy przeciwnik otwiera 2♥. Masz ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 PC). Co licytujesz?',
        options: ['Pas', 'Kontra', '2♠', '2BA'],
        answer: 1,
        explain: 'Krótkie kiery, poparcie w każdym innym kolorze i 13 PC: kontra wywołująca. 2♠ obiecywałoby dobry kolor pięciokartowy.',
      },
      {
        q: 'Prawy przeciwnik otwiera 2♠. Masz ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 PC). Co licytujesz?',
        options: ['Kontra', '2BA', '3BA', 'Pas'],
        answer: 1,
        explain: 'Ręka zrównoważona, 15-18, z zatrzymaniem pikowym: 2BA. Kontra prosiłaby partnera o zalicytowanie koloru, a ty nie masz krótkości w pikach.',
      },
      {
        q: 'Prawy przeciwnik otwiera 3♥. Masz ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 PC). Co licytujesz?',
        options: ['Kontra', '4♦', '3BA', 'Pas'],
        answer: 2,
        explain: '3BA po bloku na wysokości trzech pokazuje 16-21 z zatrzymaniem i jest do gry. Twoje kara przebiegną, a ♥K jest dobrze ustawiony za blokującym.',
      },
      {
        q: 'Lewy przeciwnik otwiera 2♥, partner kontruje, a prawy przeciwnik pasuje. Masz ♠K963 ♥874 ♦A52 ♣Q84 (9 PC). Co licytujesz?',
        options: ['2♠', '3♠', '4♠', '2BA'],
        answer: 1,
        explain: '9-11 PC z czterema pikami: skocz do 3♠, inwitując dograną. 2♠ mogłoby paść bez niczego, a 2BA obiecywałoby zatrzymanie kierowe.',
      },
      {
        q: 'Lewy przeciwnik otwiera 2♥, partner kontruje, a prawy przeciwnik pasuje. Masz ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 PC). Co licytujesz?',
        options: ['2BA', '3♣', 'Pas', '3♦'],
        answer: 2,
        explain: 'Pięć mocnych kierów i 8+ PC: pasuj, a kontra wywołująca partnera staje się karna. Twoje kiery siedzą za otwierającym i wezmą lewy.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Gdy kontrują nasze otwarcie',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Co robi odpowiadający po kontrze wywołującej otwarcia partnera (rekontra, 2BA Jordana, podniesienia, nowe kolory, 1BA) i jak uciec, gdy 1BA partnera zostaje skontrowane.',
    body: `
<h3>Otwarcie partnera zostaje skontrowane</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Partner otwiera 1♥, a prawy przeciwnik daje kontrę wywołującą: siła otwarcia, krótkie kiery, poparcie w pozostałych kolorach. Kontra daje ci nowe sposoby opisania ręki i są ci one potrzebne: partner kontrującego zaraz zalicytuje, może skokiem, a otwierający musi od razu wiedzieć, czy wasza strona ma fit i kto ma przewagę siły.</p>

<h3>Co grają boty</h3>
<p>Po 1♥ lub 1♠ – kontra boty wybierają pierwszą z tych odzywek, która pasuje:</p>
<table>
<thead><tr><th>Odzywka</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>2BA (Jordan)</td><td>Sztuczna: cztery lub więcej atutów i 10+ punktów w poparciu, podniesienie inwitujące lub silniejsze</td></tr>
<tr><td>Rekontra</td><td>10+ PC, zwykle bez fitu (najwyżej trzy atuty)</td></tr>
<tr><td>Podniesienie skokiem (1♥ – X – 3♥)</td><td>Blokujące: cztery lub więcej atutów i mniej niż 10 PC</td></tr>
<tr><td>Zwykłe podniesienie (1♥ – X – 2♥)</td><td>Trzy atuty i 6-10 punktów w poparciu (z czterema skocz albo licytuj 2BA)</td></tr>
<tr><td>1♠ po 1♥</td><td>Cztery lub więcej pików i 6+ PC; forsujące</td></tr>
<tr><td>1BA</td><td>6-9 PC i żadna z powyższych odzywek</td></tr>
<tr><td>Pas</td><td>Słaba ręka</td></tr>
</tbody>
</table>
<p>Zwróć uwagę, czego brakuje: nowego koloru na wysokości dwóch. Po kontrze boty nigdy go nie licytują. Z 10+ PC dają rekontrę, a z mniejszą siłą licytują 1BA albo pasują.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2BA"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: rekontra"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1BA"></div>
<p>Pierwsza ręka ma cztery atuty i 11 punktów w poparciu: 2BA Jordana. Druga ma 10 PC i nie ma fitu: rekontra. Trzecia z pięcioma atutami i 6 PC skacze do 3♥, odbierając przeciwnikom miejsce; oni na pewno mają własny fit. Czwarta podnosi zwyczajnie z trzema atutami. Piąta pokazuje piki na wysokości jednego. Szósta ma 8 PC i nic innego do powiedzenia: 1BA.</p>
<div class="tip">Blokujące podniesienie skokiem działa najlepiej od razu, zanim partner kontrującego zdąży tanio zalicytować. Z czterema atutami i słabą ręką odbierz im miejsce.</div>

<h3>Po otwarciu w kolor młodszy</h3>
<p>Po 1♣ lub 1♦ – kontra nie ma 2BA Jordana: z 10+ PC daj rekontrę. Otwarcie 1♣ lub 1♦ może być tylko trzykartowe, więc podniesienia wymagają więcej atutów: czterech do zwykłego podniesienia, pięciu do blokującego podniesienia skokiem. Z czterokartowym starszym i 6+ PC zalicytuj go na wysokości jednego, z oboma najpierw kiery.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>Po rekontrze</h3>
<p>Rekontra mówi, że rozdanie należy do waszej strony. Otwierający zwykle pasuje i zostawia problem przeciwnikom: muszą znaleźć miejsce do gry, a partner kontrującego, który może nie mieć nic, licytuje tylko z kolorem pięciokartowym. Otwierający licytuje od razu tylko z minimum (najwyżej 13 PC) i kolorem sześciokartowym, który słabo się broni. Gdy przeciwnicy wylądują w jakimś kolorze, rekontrujący licytuje dograną, jeśli ma na nią wartości, mniej więcej 12+ PC przy otwarciu partnera. Z 10-11 PC i czterema kartami w ich kolorze z dwoma z trzech najwyższych honorów rekontrujący zamiast tego ich kontruje: po rekontrze kontra waszej strony jest karna.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AJ94 C:KJ1062" data-s="S:J1093 H:K6 D:Q53 C:AQ97" data-w="S:8742 H:109732 D:86 C:53" data-caption="Północ otwiera 1♥, a Wschód kontruje."></div>
<div class="auction" data-calls="1H X XX P P 2C 3NT P P P" data-dealer="N"></div>
<p>Południe ma 12 PC i tylko dwa kiery: rekontra. Zachód nie ma nic ani koloru pięciokartowego, więc pasuje; Północ też pasuje, a Wschód musi wybrać kolor na wysokości dwóch. Południe z 12 PC przy otwarciu partnera i podwójnym zatrzymaniem treflowym licytuje 3BA, które przy najlepszej grze bierze dziewięć lew.</p>

<h3>2BA Jordana w akcji</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Północ otwiera 1♥, a Wschód kontruje."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Południe ma cztery atuty i 12 punktów w poparciu: 2BA Jordana, podniesienie inwitujące lub silniejsze. Północ z 14 PC i kolorem pięciokartowym ma więcej niż minimum i licytuje dograną. Z minimum Północ zalicytowałaby tylko 3♥.</p>

<h3>Gdy nasze 1BA zostaje skontrowane</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>Kontra 1BA partnera jest karna. Możliwości odpowiadającego:</p>
<table>
<thead><tr><th>Odzywka</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>Rekontra</td><td>8+ PC: razem z 15-17 partnera wasza strona ma przewagę siły i to przeciwnicy mają kłopot</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Do gry: 0-7 PC i pięć lub więcej kart w kolorze, twoim najdłuższym</td></tr>
<tr><td>Pas</td><td>Każda inna ręka</td></tr>
</tbody>
</table>
<p>Po kontrze Stayman i transfery przestają obowiązywać: 2♣ pokazuje trefle, a 2♦ kara. Ze słabą ręką 1BA z kontrą może dużo kosztować, a dwa w twoim długim kolorze grają się dużo lepiej.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1BA – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1BA – X – ?: rekontra"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1BA – X – ?: pas"></div>
<p>Pierwsza ręka ucieka w swoje pięć kar. Druga ma 8 PC: rekontra. Trzecia nie ma koloru pięciokartowego, więc pasuje i zostawia partnerowi radzenie sobie. Po rekontrze otwierający pasuje: przeciwnicy muszą znaleźć miejsce do gry.</p>
<div class="warn">Po 1♥ – kontra nie licytuj ze słabą ręką nowego koloru na wysokości dwóch: to nie należy do systemu. Z 10+ PC najpierw daj rekontrę; z mniejszą siłą licytuj 1BA albo pasuj.</div>
`,
    keyPoints: [
      'Po kontrze wywołującej 1♥ lub 1♠ 2BA (Jordan) pokazuje cztery atuty i 10+ punktów w poparciu; rekontra pokazuje 10+ PC, zwykle bez fitu.',
      'Podniesienie skokiem jest blokujące (cztery atuty w starszym, pięć w młodszym, mniej niż 10 PC); zwykłe podniesienie pokazuje 6-10 z poparciem.',
      'Kolor starszy na wysokości jednego pokazuje cztery lub więcej kart i 6+ PC i jest forsujący; 1BA pokazuje 6-9 bez innej odpowiedniej odzywki.',
      'Po rekontrze otwierający zwykle pasuje i pozwala przeciwnikom szukać kontraktu; rekontrujący licytuje potem dograną z wartościami na nią albo kontruje ich, mając silne honory w ich kolorze.',
      'Gdy 1BA partnera zostaje skontrowane, daj rekontrę z 8+; ze słabą ręką i kolorem pięciokartowym zalicytuj go na wysokości dwóch (naturalnie, bez Staymana i transferów).',
    ],
    quiz: [
      {
        q: 'Partner otwiera 1♥, a prawy przeciwnik kontruje. Masz ♠K74 ♥Q962 ♦A1053 ♣J4 (10 PC). Co licytujesz?',
        options: ['Rekontra', '3♥', '2BA', '2♥'],
        answer: 2,
        explain: 'Cztery atuty i 11 punktów w poparciu: 2BA Jordana od razu pokazuje podniesienie inwitujące lub silniejsze. Rekontra zwykle zaprzeczałaby czterem atutom, a 3♥ byłoby blokujące.',
      },
      {
        q: 'Partner otwiera 1♥, a prawy przeciwnik kontruje. Masz ♠K74 ♥Q9862 ♦5 ♣J1043 (6 PC). Co licytujesz?',
        options: ['2♥', '3♥', '4♥', 'Pas'],
        answer: 1,
        explain: 'Pięć atutów, singiel i mniej niż 10 PC: blokujące podniesienie skokiem. Odbiera partnerowi kontrującego miejsce, którego potrzebuje.',
      },
      {
        q: 'Partner otwiera 1♥, a prawy przeciwnik kontruje. Masz ♠AQ74 ♥62 ♦KJ53 ♣984 (10 PC). Co licytujesz?',
        options: ['1♠', 'Rekontra', '2♦', '1BA'],
        answer: 1,
        explain: '10+ PC bez fitu: rekontra. Mówi partnerowi, że rozdanie należy do waszej strony; otwierający zwykle spasuje i zostawi przeciwnikom szukanie kontraktu.',
      },
      {
        q: 'Partner otwiera 1♦, a prawy przeciwnik kontruje. Masz ♠KJ74 ♥Q962 ♦53 ♣J43 (7 PC). Co licytujesz?',
        options: ['1♥', '1♠', '1BA', 'Pas'],
        answer: 0,
        explain: 'Z czterema kartami w każdym starszym i 6+ PC najpierw licytuj kiery, na wysokości jednego. 1♥ jest forsujące, więc w razie potrzeby pokażesz piki później.',
      },
      {
        q: 'Partner otwiera 1BA, a prawy przeciwnik kontruje. Masz ♠Q74 ♥62 ♦J9853 ♣932 (3 PC). Co licytujesz?',
        options: ['Pas', '2♣', '2♦', 'Rekontra'],
        answer: 2,
        explain: 'Słaba ręka z pięcioma karami: uciekaj na 2♦, które po kontrze jest naturalne, a nie transferem. 2♣ pokazywałoby trefle, a rekontra 8+ PC.',
      },
    ],
  },
];
