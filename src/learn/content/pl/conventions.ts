// Lessons on the optional conventions (Polish): Roman Key Card Blackwood,
// splinters and Drury, new minor forcing and fourth suit forcing, Texas
// transfers. Every example auction is the one the bots bid with these hands.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Roman Key Card Blackwood (RKCB)',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Nowoczesne 4BA: pytanie o cztery asy i króla atutowego, potem o damę atutową i boczne króle, tak żeby licytować szlemiki, które wychodzą, i zatrzymywać się, gdy brakuje dwóch wartości kluczowych.',
    body: `
<h3>Pięć wartości kluczowych</h3>
<p>Zwykły Blackwood liczy asy, ale król i dama atutowa są równie ważne: szlemik bez asa i króla atutowego jest tak samo skazany jak szlemik bez dwóch asów. <strong>Roman Key Card Blackwood</strong> (RKCB) traktuje króla atutowego jak piątego asa. Po uzgodnieniu koloru 4BA pyta o <strong>pięć wartości kluczowych</strong>: cztery asy i króla atutowego. Odpowiedzi mówią też o damie atutowej.</p>
<p>Kolorem atutowym jest kolor uzgodniony; jeśli żadnego nie uzgodniono — ostatni kolor zalicytowany naturalnie przez twoją stronę. Boty w tej aplikacji domyślnie grają RKCB (w ustawieniach systemu możesz wrócić do zwykłego Blackwooda).</p>

<h3>Odpowiedzi (1430)</h3>
<table>
<thead><tr><th>Odpowiedź</th><th>Wartości kluczowe</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 lub 4</td></tr>
<tr><td>5♦</td><td>0 lub 3</td></tr>
<tr><td>5♥</td><td>2, bez damy atutowej</td></tr>
<tr><td>5♠</td><td>2, z damą atutową</td></tr>
</tbody>
</table>
<p>Nazwa „1430” pochodzi od dwóch pierwszych odpowiedzi: 5♣ pokazuje jedną lub cztery, 5♦ zero lub trzy. Pytający prawie zawsze wie, o którą możliwość chodzi. Policz własne wartości kluczowe i pamiętaj, co pokazał partner: partner, który otworzył i silnie podniósł, nie może mieć zera wartości kluczowych, bo poza twoją ręką nie ma dość innych wysokich kart, żeby złożyć jego punkty.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Uzgodnione piki; partner licytuje 4BA: odpowiedz 5♥"></div>
<p>Dwie wartości kluczowe, ♥A i ♠K, ale bez ♠Q: 5♥.</p>

<h3>Po odpowiedzi</h3>
<ul>
<li><strong>Brakuje dwóch wartości kluczowych</strong> albo jednej i damy atutowej: zamknij licytację na pięciu w kolor atutowy. Partner musi spasować.</li>
<li><strong>Brakuje jednej</strong>, a dama jest twoja: licytuj szlemika.</li>
<li><strong>Nie brakuje żadnej</strong>: licytuj szlemika albo szukaj szlema.</li>
</ul>
<p>Pytający jest kapitanem. Gdy partner odpowie, decyduje pytający, a partner pasuje na zamknięcie albo na szlemika.</p>

<h3>Pytanie o damę atutową</h3>
<p>Po 5♣ lub 5♦ dama atutowa jest wciąż nieznana. Jeśli ma znaczenie, pytający licytuje <strong>następny stopień</strong>, pomijając kolor atutowy: 5♦ nad 5♣, 5♥ nad 5♦. Partner odpowiada:</p>
<ul>
<li>bez damy: wraca do koloru atutowego najtaniej, jak się da;</li>
<li>z damą: licytuje sześć w kolor atutowy (albo 5BA, gdy sześć w atu byłoby odpowiedzią „bez damy”).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Północ otwiera 2♣, a Południe pokazuje dobry pięciokartowy kolor pikowy."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Północ ma wszystkie cztery asy, więc 5♣ Południa pokazuje jedną wartość kluczową: ♠K. Są wszystkie wartości kluczowe, ale ♠Q — z tego, co wie Północ — nie ma, więc Północ pyta przez 5♦. 5♠ Południa zaprzecza damie i Północ poprzestaje na 6♠: szlem bez damy atutowej wymagałby szczęśliwego podziału.</p>

<h3>Pytanie o króle</h3>
<p>Gdy para ma wszystkie pięć wartości kluczowych i damę atutową, a szlem jest możliwy, pytający licytuje <strong>5BA</strong>, pytając o boczne króle (król atutowy został już policzony): 6♣ = żadnego, 6♦ = jeden, 6♥ = dwa, 6♠ = trzy. 5BA obiecuje, że niczego nie brakuje, więc partner z dodatkowymi lewami może zalicytować szlema.</p>

<h3>Pełny przykład</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P P P" data-dealer="N"></div>
<p>Północ skacze do 4♥ z czterokartowym poparciem i 19+ punktami. Południe ma 17 PC i źródło lew w karach, więc szlemik jest prawdopodobny. 5♣ pokazuje jedną lub cztery wartości kluczowe. Południe ma tylko ♣A, a silnego podniesienia Północy nie da się złożyć bez asów, więc są to cztery. Zostaje jedno pytanie, o ♥Q, i zadaje je 5♦. Północ ją ma i licytuje 6♥, a Południe pasuje: niczego nie brakuje, ale nie ma trzynastej lewy, na którą można liczyć.</p>
<div class="tip">Zanim zalicytujesz 4BA, upewnij się, że odpowiedź nie wyniesie cię ponad kontrakt, który chcesz grać. Przy treflach lub karach w atu odpowiedź 5♥ lub 5♠ nie pozwala zatrzymać się na wysokości pięciu, więc musisz wiedzieć, że nie może brakować dwóch wartości kluczowych.</div>
<div class="warn">RKCB wymaga uzgodnionego koloru atutowego. Po naturalnym bez atu partnera 4BA jest ilościowe. Z renonsem RKCB nie powie ci, czy wartości kluczowe partnera są przydatne: zamiast tego daj cue bid.</div>
`,
    keyPoints: [
      'RKCB pyta o pięć wartości kluczowych: cztery asy i króla atutowego.',
      'Odpowiedzi (1430): 5♣ 1 lub 4, 5♦ 0 lub 3, 5♥ 2 bez damy atutowej, 5♠ 2 z damą.',
      'Brakuje dwóch wartości kluczowych (albo jednej i damy): zatrzymaj się na pięciu. Brakuje jednej: licytuj szlemika.',
      'Po 5♣ lub 5♦ następny stopień pyta o damę atutową; bez niej partner wraca do koloru atutowego.',
      'Potem 5BA pyta o boczne króle i obiecuje wszystkie wartości kluczowe oraz damę atutową.',
    ],
    quiz: [
      {
        q: 'Uzgodniono kiery, a partner licytuje 4BA (RKCB). Masz ♠A72 ♥K965 ♦Q84 ♣J53. Co odpowiadasz?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Dwie wartości kluczowe, ♠A i ♥K, bez ♥Q: 5♥.',
      },
      {
        q: 'Co pokazuje odpowiedź 5♦ na RKCB?',
        options: ['Jedną wartość kluczową', 'Zero lub trzy wartości kluczowe', 'Dwie wartości kluczowe i damę atutową', 'Kara'],
        answer: 1,
        explain: 'W odpowiedziach 1430 5♣ to jedna lub cztery, 5♦ zero lub trzy; pytający wnioskuje z licytacji, o którą możliwość chodzi.',
      },
      {
        q: 'Uzgodniono piki. Pytasz przez 4BA, mając dwie wartości kluczowe i ♠Q, a partner odpowiada 5♥ (dwie bez damy). Co teraz?',
        options: ['Pas', '6♠: brakuje jednej wartości kluczowej, ale dama jest twoja', '5♠: brakuje dwóch wartości kluczowych', '5BA'],
        answer: 1,
        explain: 'Dwie plus dwie to cztery wartości kluczowe, więc brakuje jednej, a damę atutową masz w ręce. Licytuj szlemika.',
      },
      {
        q: 'Uzgodniono piki. 5♣ partnera pokazuje jedną wartość kluczową, a ty masz pozostałe cztery, ale bez ♠Q. Która odzywka pyta o damę atutową?',
        options: ['5♦', '5♥', '5♠', '5BA'],
        answer: 0,
        explain: 'Pytanie o damę to następny stopień nad odpowiedzią, który nie jest kolorem atutowym: 5♦ nad 5♣.',
      },
      {
        q: 'Masz wszystkie wartości kluczowe i damę atutową i myślisz o szlemie. O co pyta 5BA?',
        options: ['Znowu o asy', 'Ile bocznych królów ma partner', 'O damę atutową', 'O nic: to do gry'],
        answer: 1,
        explain: 'Po RKCB 5BA pyta o boczne króle (król atutowy został policzony jako wartość kluczowa) i obiecuje, że nie brakuje żadnej wartości kluczowej.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Splintery i odwrócone Drury',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Dwa podniesienia koloru starszego partnera: splinter, który pokazuje siłę na dograną i krótkość, żeby otwierający mógł ocenić szanse na szlemika, oraz Drury, które pozwala ręce po pasie bezpiecznie pokazać podniesienie inwitujące.',
    body: `
<h3>Splintery</h3>
<p><strong>Splinter</strong> to podwójny skok w nowy kolor po otwarciu partnera 1♥ lub 1♠. Pokazuje co najmniej cztery atuty, siłę na dograną (około 13-16 punktów licząc krótkości) i singla lub renons w licytowanym kolorze. Nic więcej nie mówi o tym kolorze, więc się go alertuje.</p>
<table>
<thead><tr><th>Otwarcie</th><th>Splintery</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Partner otworzył 1♠: licytuj 4♥"></div>
<p>10 PC, cztery atuty i singiel kier: 10 + 3 za singla = 13 punktów w poparciu. 4♥ mówi to wszystko partnerowi jedną odzywką. Z silniejszą ręką zacznij od Jacoby 2BA; z 10-12 punktami daj podniesienie inwitujące.</p>

<h3>Decyzja otwierającego: pracujące wartości</h3>
<p>Naprzeciw splintera otwierający liczy tylko wysokie karty, które pracują. Honory naprzeciw singla partnera są w większości zmarnowane: król czy dama w tym kolorze nigdy nie weźmie lewy, bo partner przebija ten kolor. Liczy się tylko as. Bez zmarnowanych wartości i z około 16 lub więcej pracującymi punktami otwierający szuka szlemika; w przeciwnym razie zamyka licytację na czterech w kolor starszy.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Północ ma 14 PC, ale ♥K i ♥J są naprzeciw singla Południa. Bez nich Północ ma około 10 pracujących punktów, więc zamyka licytację. Jedenaście lew jest, dwunastu nie ma.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Tutaj Północ nie ma nic w treflach, więc wszystkie 15 PC pracuje, a kiery dobrze pasują. Północ daje cue bid 4♦, pokazując kontrolę karową i zainteresowanie szlemem. Południe współpracuje odzywką 4♥ (♥A), a Północ pyta o wartości kluczowe. 5♠ Południa pokazuje dwie wartości kluczowe i damę atutową, więc Północ licytuje 6♠.</p>

<h3>Odwrócone Drury</h3>
<p>Na trzeciej lub czwartej ręce partner może otworzyć trochę lżej. Jeśli jesteś już po pasie i masz podniesienie inwitujące (co najmniej trzy atuty i 10-12 punktów), skok na trzy w kolor starszy może was wynieść za wysoko naprzeciw lekkiego otwarcia. <strong>Odwrócone Drury</strong> rozwiązuje ten problem: ręka po pasie licytuje <strong>2♣</strong> po otwarciu partnera 1♥ lub 1♠, pokazując co najmniej trzy atuty i 10-12 punktów. To odzywka sztuczna, nic nie mówi o treflach.</p>
<ul>
<li>Otwierający licytuje <strong>dwa w kolor starszy</strong> z minimum lub lekkim otwarciem: dograny nie ma, a ty pasujesz.</li>
<li>Otwierający licytuje <strong>dograną</strong> z pełnym otwarciem i nadwyżką.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Północ rozdawała i spasowała; Południe otworzyło 1♠ na trzeciej ręce."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>Otwarcie 1♠ Południa ma tylko 11 PC. Na Drury 2♠ mówi „dograny nie ma” i para bezpiecznie się zatrzymuje: dziewięć lew to maksimum.</p>
<div class="tip">Drury jest tylko dla rąk po pasie i musi być uzgodnione. W tej aplikacji jest domyślnie wyłączone; włącz je w ustawieniach systemu, żeby je przećwiczyć.</div>
<div class="warn">Splinter obiecuje cztery atuty. Z trzema wybierz inną odzywkę: partner będzie liczył na czwarty atut do przebicia krótkiego koloru.</div>
`,
    keyPoints: [
      'Splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) pokazuje co najmniej cztery atuty, siłę na dograną oraz singla lub renons w licytowanym kolorze.',
      'Naprzeciw splintera licz tylko pracujące wartości: honory naprzeciw krótkości są zmarnowane, z wyjątkiem asa.',
      'Ze zmarnowanymi wartościami otwierający zamyka licytację dograną; z pracującymi daje cue bid albo pyta o wartości kluczowe.',
      'Odwrócone Drury: 2♣ ręki po pasie po 1♥/1♠ pokazuje co najmniej trzy atuty i 10-12 punktów.',
      'Na Drury dwa w kolor starszy to minimum; dograna pokazuje nadwyżkę.',
    ],
    quiz: [
      {
        q: 'Partner otwiera 1♠. Masz ♠KQ74 ♥A853 ♦K962 ♣5 (12 PC). Co licytujesz?',
        options: ['2BA', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Cztery atuty, singiel trefl i 12 + 3 = 15 punktów w poparciu: splinter 4♣ opisuje rękę jedną odzywką.',
      },
      {
        q: 'Partner otwiera 1♥, a ty licytujesz 3♠. Co to pokazuje?',
        options: ['Długie piki', 'Co najmniej cztery kiery, siłę na dograną oraz singla lub renons w pikach', 'Słabą rękę z pikami', 'Zatrzymanie pikowe'],
        answer: 1,
        explain: 'Po 1♥ odzywka 3♠ to podwójny skok w nowy kolor: splinter.',
      },
      {
        q: 'Otwierasz 1♠ z ♠AK1063 ♥KQ5 ♦Q84 ♣K7, a partner daje splinter 4♥. Co robisz?',
        options: ['Licytuję 4♠: moje ♥K i ♥Q są zmarnowane', 'Licytuję 4BA', 'Daję cue bid 5♣', 'Licytuję 6♠'],
        answer: 0,
        explain: 'Pięć z twoich 17 PC jest naprzeciw krótkości kierowej partnera i nie weźmie lew. Z około 12 pracującymi punktami zamknij licytację.',
      },
      {
        q: 'Kto może użyć odwróconego Drury?',
        options: ['Każdy odpowiadający z poparciem', 'Ręka po pasie z co najmniej trzema atutami i 10-12 punktami, po otwarciu partnera 1♥ lub 1♠', 'Ręka po pasie z długimi treflami', 'Otwierający z silną ręką'],
        answer: 1,
        explain: 'Drury to podniesienie inwitujące ręki po pasie, które utrzymuje licytację nisko naprzeciw możliwie lekkiego otwarcia z trzeciej lub czwartej ręki.',
      },
      {
        q: 'Partner, ręka po pasie, licytuje 2♣ (Drury) po twoim otwarciu 1♥ z trzeciej ręki. Masz lekkie 11 PC. Jaki jest twój rebid?',
        options: ['2♥', '3♥', '4♥', '2BA'],
        answer: 0,
        explain: 'Dwa w kolor starszy mówią, że masz minimum i dograny nie ma; partner pasuje.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Nowy młodszy forsujący i czwarty kolor forsujący',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Dwie sztuczne odzywki, które pozwalają odpowiadającemu pytać zamiast zgadywać: nowy młodszy forsujący po rebidzie 1BA otwierającego i czwarty kolor forsujący, gdy zalicytowano już trzy kolory.',
    body: `
<h3>Dlaczego odpowiadający musi pytać</h3>
<p>Po 1♦ – 1♠ – 1BA odpowiadający z pięcioma pikami i siłą na dograną chciałby wiedzieć, czy otwierający ma trzy piki. 3♠ byłoby tylko inwitem; 4♠ może trafić na fit 5-2; 3BA może przegapić fit 5-3. Naturalne odzywki nie pozwalają zadać tego pytania, więc robi to odzywka sztuczna.</p>

<h3>Nowy młodszy forsujący</h3>
<p>Po rebidzie 1BA otwierającego odzywka odpowiadającego w <strong>drugi kolor młodszy</strong> na wysokości dwóch (1♣ – 1♥ – 1BA – 2♦ albo 1♦ – 1♠ – 1BA – 2♣) jest sztuczna i forsująca na jedno okrążenie. Pokazuje 11 lub więcej punktów i pyta o kolor starszy odpowiadającego. Odpowiadający ma w nim dokładnie pięć kart albo, po 1♠, cztery piki i cztery kiery; z szóstką po prostu powtarza kolor starszy albo licytuje dograną.</p>
<table>
<thead><tr><th>Odpowiedź otwierającego</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>2 w kolor starszy odpowiadającego</td><td>Trzykartowe poparcie, minimum (12-13)</td></tr>
<tr><td>3 w kolor starszy odpowiadającego</td><td>Trzykartowe poparcie, maksimum (14)</td></tr>
<tr><td>2♥ lub 3♥ (po 1♠)</td><td>Cztery kiery, minimum lub maksimum</td></tr>
<tr><td>2BA lub 3BA</td><td>Ani jedno, ani drugie, minimum lub maksimum</td></tr>
</tbody>
</table>
<p>Potem odpowiadający ustala kontrakt: dograna z 13 lub więcej punktami (albo naprzeciw maksimum), inwit z 11-12 naprzeciw minimum, a bez fitu bez atu.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Południe ma 14 PC i pięć pików. 2♣ pyta; 2♠ Północy pokazuje trzykartowe poparcie, a Południe licytuje dograną w piki, gdzie dzięki przebitkom jest jedenaście lew.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Z 11 PC i pięcioma kierami (♠5 ♥AQJ62 ♦A32 ♣9743) Południe pyta przez 2♣, a naprzeciw minimum z trzema kierami inwituje przez 3♥. Północ ma minimum i pasuje.</p>

<h3>Czwarty kolor forsujący</h3>
<p>Gdy zalicytowano naturalnie trzy kolory, odzywka odpowiadającego w <strong>czwarty kolor</strong> jest sztuczna i forsuje do dograny. Odpowiadający ma siłę na dograną, ale nie ma jasnej odzywki: często pięciokartowy kolor szukający trzykartowego poparcia albo rękę, która mogłaby grać 3BA, gdyby tylko czwarty kolor był zatrzymany.</p>
<p>Otwierający dalej opisuje rękę, w tej kolejności:</p>
<ol>
<li>Trzykartowe poparcie w kolorze odpowiadającego: podnieś go.</li>
<li>Zatrzymanie w czwartym kolorze: licytuj bez atu.</li>
<li>Dodatkowa długość: powtórz pięciokartowy drugi kolor albo pierwszy kolor.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Południe ma 14 PC i pięć dobrych kierów. 2♣, czwarty kolor, prosi Północ o opis ręki. Północ nie ma trzykartowego poparcia kierowego, ale ma zatrzymane trefle, więc licytuje 2BA, a Południe podnosi do 3BA.</p>
<div class="tip">Z ręką zrównoważoną z siłą na dograną i zatrzymaniem w czwartym kolorze po prostu licytuj 3BA. Czwarty kolor forsujący jest dla rąk, które potrzebują odpowiedzi.</div>
<div class="warn">Obie odzywki są sztuczne: nic nie mówią o kolorze młodszym ani o czwartym kolorze. Alertuj je i nigdy na nie nie pasuj.</div>
`,
    keyPoints: [
      'Nowy młodszy forsujący: 1m – 1M – 1BA – dwa w drugi młodszy pyta o trzykartowe poparcie (albo cztery kiery po 1♠), z 11+ punktami.',
      'Otwierający pokazuje poparcie lub cztery kiery na wysokości dwóch z minimum i na wysokości trzech z maksimum; 2BA lub 3BA zaprzecza obu.',
      'Czwarty kolor forsujący: odzywka odpowiadającego w czwarty kolor jest sztuczna i forsuje do dograny.',
      'Otwierający odpowiada najpierw poparciem w kolorze odpowiadającego, potem bez atu z zatrzymaniem, potem dodatkową długością.',
      'Z ręką zrównoważoną i zatrzymaniem w czwartym kolorze licytuj od razu 3BA.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1BA – ? Masz ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 PC). Co licytujesz?',
        options: ['2♠', '3♠', '2♦', '3BA'],
        answer: 2,
        explain: '2♦, nowy młodszy forsujący, pyta, czy otwierający ma trzy piki (albo cztery kiery). Potem możesz wybrać między pikami a bez atu.',
      },
      {
        q: '1♦ – 1♥ – 1BA – 2♣. Twoja ręka otwierającego: ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 PC). Co odpowiadasz?',
        options: ['2♦', '2♥', '3♥', '2BA'],
        answer: 2,
        explain: 'Trzykartowe poparcie kierowe i maksimum dla rebidu 1BA: skocz na 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Co pokazuje 2♦?',
        options: ['Długie kara', 'Sztuczną odzywkę forsującą do dograny, która prosi otwierającego o opis ręki', 'Słabą rękę', 'Poparcie w pikach'],
        answer: 1,
        explain: 'Kara to czwarty kolor. Odpowiadający ma siłę na dograną i pyta, a nie pokazuje kara.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Twoja ręka otwierającego: ♠AQ74 ♥J5 ♦K103 ♣KJ96. Co licytujesz?',
        options: ['2♥', '2BA', '3♣', '2♠'],
        answer: 1,
        explain: 'Brak trzykartowego poparcia kierowego, ale ♦K10x zatrzymuje kara: licytuj bez atu.',
      },
      {
        q: 'Po 1♦ – 1♠ – 1BA która ręka powinna użyć nowego młodszego forsującego?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Pięć pików i 12 PC: zapytaj o trzykartowe poparcie. Pierwsza ręka jest za słaba, trzecia powinna powtórzyć 2♠, a ostatnia, z czterema pikami i 12 PC, licytuje 3BA.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Transfery Texas',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Jak zalicytować dograną w sześciokartowym kolorze starszym naprzeciw 1BA lub 2BA, żeby rozgrywała ją silna ręka, i jak iść dalej w stronę szlemika.',
    body: `
<h3>Transfery na wysokości czterech</h3>
<p>Naprzeciw 1BA partnera ręka z sześciokartowym kolorem starszym i siłą na dograną chce grać cztery w ten kolor i chce, żeby rozgrywał otwierający w bez atu, tak by wist szedł do silnej ręki. <strong>Transfery Texas</strong> robią to jedną odzywką:</p>
<table>
<thead><tr><th>Odzywka</th><th>Znaczenie</th><th>Otwierający licytuje</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Co najmniej sześć kierów, siła na dograną</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Co najmniej sześć pików, siła na dograną</td><td>4♠</td></tr>
</tbody>
</table>
<p>Otwierający musi przyjąć transfer. Bez zainteresowania szlemem odpowiadający pasuje.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Południe ma 10 PC i sześć pików: dość na dograną, ale nie na szlemika. 4♥ to transfer, Północ licytuje 4♠, a Południe pasuje. Rozgrywa Północ, więc wist idzie do królów Północy, a nie przez nie.</p>

<h3>Texas czy Jacoby?</h3>
<table>
<thead><tr><th>Ręka odpowiadającego</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>0-7, co najmniej pięć kart</td><td>Transfer Jacoby’ego, potem pas</td></tr>
<tr><td>8-9, sześć kart</td><td>Transfer Jacoby’ego, potem podniesienie do trzech</td></tr>
<tr><td>Siła na dograną, dokładnie pięć kart</td><td>Transfer Jacoby’ego, potem 3BA: wybiera otwierający</td></tr>
<tr><td>Siła na dograną, co najmniej sześć kart</td><td>Texas: 4♦ lub 4♥</td></tr>
<tr><td>Zainteresowanie szlemem, co najmniej sześć kart</td><td>Texas, potem 4BA (Roman Key Card Blackwood)</td></tr>
</tbody>
</table>

<h3>W stronę szlemika</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Południe ma 15 PC i mocny sześciokartowy kolor kierowy naprzeciw 15-17: szlemik jest prawdopodobny. Texas ustala kiery jako atuty, a 4BA pyta o wartości kluczowe. 5♥ Północy pokazuje dwie, ♥A i ♦A, bez damy. Południe ma ♥K, ♣A i ♥Q, więc brakuje tylko jednej wartości kluczowej i Południe licytuje 6♥.</p>

<h3>Po 2BA</h3>
<p>Te same odzywki działają po otwarciu 2BA (20-21), gdzie nawet 4 punkty wystarczą na dograną:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">Texas sprawia, że rozgrywa silna ręka, i oszczędza miejsce na licytację szlemową: po transferze 4BA to Roman Key Card Blackwood w kolorze starszym.</div>
<div class="warn">4♣ po 1BA lub 2BA to Gerber, nie Texas. A otwierający nigdy nie może spasować na 4♦ ani 4♥: transfer trzeba przyjąć.</div>
`,
    keyPoints: [
      'Texas: 1BA (lub 2BA) – 4♦ pokazuje co najmniej sześć kierów, 4♥ co najmniej sześć pików, z siłą na dograną.',
      'Otwierający zawsze przyjmuje transfer, więc rozgrywa otwierający w bez atu.',
      'Bez zainteresowania szlemem odpowiadający pasuje; z zainteresowaniem Texas, a potem 4BA pyta o wartości kluczowe.',
      'Z dokładnie pięcioma kartami i siłą na dograną użyj raczej transferu Jacoby’ego, a potem 3BA.',
      'Ręce inwitujące dają transfer na wysokości dwóch i podnoszą do trzech.',
    ],
    quiz: [
      {
        q: 'Partner otwiera 1BA. Masz ♠KQ10965 ♥A4 ♦K73 ♣85 (12 PC). Co licytujesz?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Sześć pików i siła na dograną: 4♥ to transfer Texas, a partner licytuje 4♠.',
      },
      {
        q: '1BA – 4♦. Co licytuje otwierający?',
        options: ['Pas', '4♥', '4BA', '5♦'],
        answer: 1,
        explain: '4♦ pokazuje co najmniej sześć kierów; otwierający przyjmuje transfer, licytując 4♥.',
      },
      {
        q: 'Partner otwiera 1BA. Masz ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 PC, pięć kierów). Jaki jest twój plan?',
        options: ['4♦ (Texas)', '2♦, potem 3BA', '2♦, potem 4♥', '3BA'],
        answer: 1,
        explain: 'Z dokładnie pięcioma kierami daj transfer i licytuj 3BA: otwierający z trzykartowym poparciem wybierze 4♥, z dwiema kartami spasuje.',
      },
      {
        q: '1BA – 4♥ – 4♠ – 4BA. Czym jest 4BA?',
        options: ['Ilościowe', 'Roman Key Card Blackwood w pikach', 'Do gry', 'Gerber'],
        answer: 1,
        explain: 'Transfer Texas ustalił piki jako atuty, więc 4BA pyta o wartości kluczowe.',
      },
      {
        q: 'Partner otwiera 2BA. Masz ♠64 ♥Q97543 ♦AJ9 ♣87 (7 PC). Co licytujesz?',
        options: ['3♦', '4♦', '3♥', 'Pas'],
        answer: 1,
        explain: 'Sześć kierów i dość na dograną naprzeciw 20-21: Texas 4♦, a partner zagra 4♥.',
      },
    ],
  },
];
