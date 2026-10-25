// Lezioni sulla competizione contro l’1SA e i barrage degli avversari, e su
// che cosa fare quando contrano la nostra apertura.
// Regole di markup: vedi src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Competere sul loro 1SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quando contrare o intervenire sull’1SA forte degli avversari, quando restare fuori e come risponde il compagno.',
    body: `
<h3>Un’apertura forte e precisa</h3>
<p>Quando un avversario apre 1SA mostra 15-17 PO e una mano bilanciata. Agli altri tre giocatori restano al massimo 25 PO, e il compagno dell’apertore sa quasi esattamente che cosa ha la sua linea. La tua linea ha raramente una manche, quindi dichiari per uno di due motivi: con una mano forte, per contrarli e punirli; con un colore lungo, per contendere il parziale. Una dichiarazione a livello di due toglie loro anche Stayman e transfer.</p>

<h3>Che cosa giocano i bot</h3>
<table>
<thead><tr><th>Dichiarazione su 1SA</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Contro</td><td>15+ PO, qualsiasi distribuzione: punitivo. Il compagno passa</td></tr>
<tr><td>2♣ / 2♦</td><td>Naturale: 8-15 PO e un colore di sei o più carte</td></tr>
<tr><td>2♥ / 2♠</td><td>Naturale: 8-15 PO e un colore di sei carte, o un buon colore di cinque (due dei tre onori maggiori o tre dei cinque onori)</td></tr>
<tr><td>Passo</td><td>Tutto il resto</td></tr>
</tbody>
</table>
<p>Il colore che dichiari deve essere il più lungo. I salti e il 2SA non si usano.</p>
<p>I giocatori di torneo usano spesso qui una convenzione che permette di mostrare anche mani bicolori: Landy e Cappelletti usano 2♣ o 2♦ per mostrare le due nobili, e il DONT usa il contro per qualsiasi monocolore. Vale la pena impararle quando avrai un compagno fisso. I bot usano il metodo naturale qui sopra, e il tutor giudica le tue dichiarazioni in base a esso.</p>

<h3>Esempi</h3>
<p>Ovest ha aperto 1SA e tu sei Nord, in posizione diretta.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1SA – ?: dichiara 2♠"></div>
<p>10 PO e sei picche solide: competi. Il compagno sa che cosa hai e può appoggiare con l’appoggio.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1SA – ?: dichiara 2♠"></div>
<p>Solo cinque picche, ma K-Q-10-9 è un buon colore, e per di più nobile: vale una dichiarazione a livello di due.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1SA – ?: dichiara 2♦"></div>
<p>13 PO e sei quadri. Un minore richiede sei carte.</p>

<h3>Il contro punitivo</h3>
<p>Il contro di 1SA mostra 15+ PO, quanto l’apertore. La tua linea ha almeno metà del mazzo, l’apertore dovrà spesso giocare con un morto debole, e in posizione diretta attacchi tu, con la tua mano buona. Il compagno passa, qualunque cosa abbia: in questo sistema il contro è punitivo, e il compagno lo lascia.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1SA – ?: contro"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1SA – ?: contro"></div>
<p>La prima mano è il classico contro punitivo: 17 PO e niente da dichiarare. Anche la seconda contra: con 15+ PO i bot contrano con qualsiasi distribuzione, invece di dichiarare 2♠. Le picche faranno prese anche in difesa, perché sarai tu ad attaccarle.</p>

<h3>Quando restare fuori</h3>
<ul>
<li><strong>Una mano bilanciata con meno di 15 PO.</strong> Nemmeno 13 o 14 bastano per contrare, e non c’è niente da dichiarare.</li>
<li><strong>Un minore di cinque carte, o una nobile di cinque povera.</strong> A livello di due gli avversari possono contrarti, e un minore richiede sei carte.</li>
<li><strong>Le due nobili ma nessun colore lungo.</strong> Per queste mani esistono convenzioni come Landy o Cappelletti; con metodi naturali, passa.</li>
<li><strong>Meno di 8 PO</strong>, anche con un colore lungo.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1SA – ?: passo"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1SA – ?: passo"></div>
<p>La prima mano ha 13 PO ma solo un minore di cinque. La seconda ha cinque picche, ma Q-8-6-5-2 non è un colore da dichiarare a livello di due davanti a un compagno che può non avere niente.</p>
<div class="tip">Passare è spesso la dichiarazione migliore. Un apertore di 1SA con un morto debole va sotto più spesso di quanto si pensi, e finché passi nessuno può contrarti.</div>

<h3>In posizione di riapertura</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Quando 1SA è seguito da due passo, il compagno dell’apertore è debole, quindi il tuo compagno ha qualche valore. Prendi in prestito un re: i bot contrano con <strong>12+ PO</strong> (sempre punitivo) e dichiarano un colore con <strong>5-12 PO</strong>, con gli stessi requisiti di colore della posizione diretta.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1SA – passo – passo – ?: dichiara 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1SA – passo – passo – ?: contro"></div>
<p>Con soli 6 PO la prima mano passerebbe in posizione diretta, ma in riapertura basta una buona nobile di cinque. La seconda, 14 PO e bilanciata, contra: il compagno passa e difendete 1SA contrato.</p>

<h3>La risposta del compagno</h3>
<p>Dopo il contro del compagno, passa: è punitivo. Dopo un intervento a livello di due in una nobile, i bot rispondono così:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Dichiarazione del compagno dell’interveniente</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>3♥ (appoggio)</td><td>Appoggio di tre carte e 6-12 punti (contano i punti di appoggio). L’interveniente dichiara manche solo con un massimo, circa 15 PO</td></tr>
<tr><td>4♥</td><td>Appoggio e 13+ punti, o cinque atout e un singolo</td></tr>
<tr><td>2♠ (nuovo colore)</td><td>Un buon colore di cinque o più carte e 8+ PO; non forzante</td></tr>
<tr><td>2SA / 3SA</td><td>Senza fit: 12-14 PO, invitante / 15+ PO</td></tr>
<tr><td>Passo</td><td>Tutto il resto, compreso un misfit con un minore lungo</td></tr>
</tbody>
</table>
<p>Gli avversari non hanno un colore proprio da surlicitare, quindi non c’è un appoggio in surlicita: l’appoggio a 3♥ comprende sia le mani competitive sia quelle invitanti. Dopo un intervento a livello di due in un minore, l’appoggio richiede quattro carte.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="Ovest apre 1SA; Nord interviene 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Nord ha 11 PO e sei buone cuori: un 2♥ naturale. Sud, con tre atout e 7 punti, appoggia a 3♥. Con nove atout in due il livello di tre è abbastanza sicuro (la legge delle prese totali), e l’appoggio rende più difficile a Est-Ovest, che hanno più di metà dei punti, trovare il loro parziale. Nord non ha niente in più e passa.</p>
<div class="warn">Non intervenire su 1SA con un colore povero solo perché hai 12 o 13 punti: senza un buon colore, quei punti valgono di più in difesa.</div>
`,
    keyPoints: [
      'Sul loro 1SA il contro mostra 15+ PO con qualsiasi distribuzione ed è punitivo: il compagno passa.',
      'Le dichiarazioni a colore a livello di due sono naturali: 8-15 PO e un colore di sei, o una buona nobile di cinque.',
      'Resta fuori con mani bilanciate sotto i 15 PO, minori di cinque e nobili di cinque povere.',
      'In posizione di riapertura prendi in prestito un re: contro con 12+, un colore con 5-12.',
      'Risposta a una nobile: appoggio a tre con 6-12 e appoggio, manche con 13+.',
    ],
    quiz: [
      {
        q: 'L’avversario di destra apre 1SA (15-17). Hai ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 PO). Che cosa dichiari?',
        options: ['Passo', 'Contro', '2♦', '2SA'],
        answer: 1,
        explain: 'Con 15+ PO hai quanto l’apertore: contra per punire. Il compagno passerà, e 1SA contrato dovrebbe andare sotto.',
      },
      {
        q: 'L’avversario di destra apre 1SA. Hai ♠A83 ♥K4 ♦KQ852 ♣J84 (13 PO). Che cosa dichiari?',
        options: ['2♦', 'Contro', 'Passo', '2SA'],
        answer: 2,
        explain: 'Una dichiarazione a livello di due in un minore richiede sei carte, e un contro richiede 15+ PO. Passa e difendi.',
      },
      {
        q: 'L’avversario di destra apre 1SA. Hai ♠KQJ974 ♥83 ♦A52 ♣84 (10 PO). Che cosa dichiari?',
        options: ['Passo', 'Contro', '2♠', '3♠'],
        answer: 2,
        explain: 'Sei picche solide e 8-15 PO: un 2♠ naturale. Un contro mostrerebbe 15+ PO, e i salti non si usano su 1SA.',
      },
      {
        q: 'L’avversario di sinistra apre 1SA, il compagno interviene 2♥ e l’avversario di destra passa. Hai ♠Q852 ♥Q73 ♦K84 ♣962 (7 PO). Che cosa dichiari?',
        options: ['Passo', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Appoggio di tre carte e 6-12 punti: appoggia a 3♥. Con nove atout il livello di tre è abbastanza sicuro. 3♣ mostrerebbe un colore di fiori, e 4♥ richiede 13+.',
      },
      {
        q: '1SA alla tua sinistra, poi passo, passo. Hai ♠KQ1095 ♥83 ♦952 ♣J84 (6 PO). Che cosa dichiari?',
        options: ['Passo', 'Contro', '2♠', '3♠'],
        answer: 2,
        explain: 'In posizione di riapertura i bot dichiarano una buona nobile di cinque con 5-12 PO: il compagno deve avere qualche valore. Un contro mostrerebbe 12+ PO ed è punitivo.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Competere sui barrage',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Come contrare, intervenire o dichiarare a senza atout quando gli avversari aprono con un due debole o un barrage a livello di tre, e come risponde il compagno.',
    body: `
<h3>Il piano di chi fa barrage</h3>
<p>Un due debole o un barrage a livello di tre ti toglie lo spazio che ti serve per trovare il contratto migliore. Chi fa barrage ha scelto il livello con la regola del 2-3-4: accetta di andare sotto di due prese contrato quando è in zona contro avversari in prima, di tre a zona pari e di quattro quando è in prima contro avversari in zona, perché costa più o meno quanto la manche che faresti. Vista dalla tua parte del tavolo, la regola ti dice due cose:</p>
<ul>
<li><strong>Non contare su una grossa penalità.</strong> Anche contrati perdono più o meno quanto vale la tua manche. Se hai la manche, dichiarala.</li>
<li><strong>La loro zona ti dice quanto possono essere deboli.</strong> In prima contro avversari in zona un barrage può essere molto debole, quindi è più probabile che il compagno abbia valori; in zona contro avversari in prima promette di più.</li>
</ul>
<p>In ogni caso devi agire subito e a un livello alto, spesso costringendo il compagno a rispondere a livello di tre. Ti servono quindi valori veri. I requisiti dei bot qui sotto sono gli stessi in qualsiasi zona.</p>

<h3>Su un due debole</h3>
<p>L’avversario di destra ha aperto 2♦, 2♥ o 2♠:</p>
<table>
<thead><tr><th>Dichiarazione</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Contro</td><td>Informativo: 13+ PO, al massimo due carte nel loro colore e almeno tre in ciascuno degli altri (è ammesso un doubleton in un minore non dichiarato con quattro carte in ogni nobile non dichiarata); oppure qualsiasi mano con 17+ PO</td></tr>
<tr><td>2SA</td><td>15-18 PO, bilanciata, con il fermo nel loro colore</td></tr>
<tr><td>Un colore</td><td>13-17 PO e un buon colore di cinque o più carte (due dei tre onori maggiori o tre dei cinque onori), il tuo colore non dichiarato più lungo</td></tr>
<tr><td>Passo</td><td>Tutto il resto</td></tr>
</tbody>
</table>
<p>Con un buon colore di sei, intervieni invece di contrare. Confronta i 13 PO con gli 8 che bastano per un intervento a livello di uno: il compagno può dover rispondere al tuo contro a livello di tre senza niente, e il tuo intervento è già a livello di due o di tre. Gli interventi a salto deboli e la surlicita Michaels non si usano su un barrage.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: contro"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: dichiara 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: dichiara 2SA"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: passo"></div>
<p>La prima mano è il contro ideale: 13 PO, un singolo a cuori e appoggio per tutti gli altri colori. La seconda ha un buon colore di sei: dichiaralo. La terza è bilanciata, con 16 PO e le cuori fermate. La quarta ha la distribuzione perfetta ma solo 10 PO: troppo poco per spingere il compagno a livello di tre. Con lunghezza nel loro colore, come ♠K4 ♥AQ1093 ♦K83 ♣J106, passa anche tu: un contro chiederebbe al compagno di dichiarare, e il 2SA richiede 15 PO.</p>
<div class="tip">In posizione di riapertura (2♥ – passo – passo – ?) un intervento richiede solo 10 PO, ma un contro ne richiede sempre 13.</div>

<h3>Su un barrage a livello di tre</h3>
<table>
<thead><tr><th>Dichiarazione</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Contro</td><td>Informativo: 14+ PO e la stessa distribuzione che su un due debole, oppure qualsiasi mano con 17+ PO</td></tr>
<tr><td>3SA</td><td>16-21 PO con il fermo nel loro colore, per giocarlo. Può essere un minore lungo e solido invece di una mano bilanciata</td></tr>
<tr><td>Un colore a livello di tre</td><td>13-17 PO e un buon colore di cinque o più carte</td></tr>
<tr><td>Passo</td><td>Tutto il resto</td></tr>
</tbody>
</table>
<p>A ogni livello in più il contro richiede un po’ di più. Su un barrage a livello di quattro richiede 15+ PO, e il compagno di solito lo lascia, a meno che abbia un colore lungo e distribuzione.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: contro"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: dichiara 3SA"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: dichiara 3♠"></div>
<p>La prima mano ha 14 PO e la distribuzione giusta: contro. Con il ♦K al posto del ♦A (13 PO), i bot passerebbero. La seconda dichiara 3SA: le quadri sono affrancate, e il ♥K dovrebbe fermare le cuori, perché l’attacco parte da Ovest ed Est, che ha le cuori lunghe, gioca prima di te. La terza dichiara il suo buon colore di sei.</p>

<h3>Rispondere al contro del compagno</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>Il contro del compagno ti chiede di dichiarare, e devi farlo, per quanto debole tu sia. Mostra la forza con il livello:</p>
<table>
<thead><tr><th>La tua mano</th><th>Dichiarazione</th></tr></thead>
<tbody>
<tr><td>0-8 PO</td><td>Il tuo colore migliore al livello più economico, prima una nobile di quattro</td></tr>
<tr><td>9-11 PO</td><td>Un salto nel tuo colore migliore se il salto resta a livello di tre (qui 3♠). Con quattro carte in una nobile non dichiarata che potresti dichiarare solo a livello di tre, invece la manche in quella nobile (su 2♠, 4♥). Altrimenti 2SA con 11 PO e il fermo nel loro colore, o il tuo colore migliore al livello più economico</td></tr>
<tr><td>10-11 PO e cinque o più picche</td><td>4♠</td></tr>
<tr><td>12+ PO</td><td>3♥, la surlicita: forzante a manche. Con 13-16, una mano bilanciata o semibilanciata e il fermo a cuori, invece 3SA</td></tr>
<tr><td>Cinque cuori solide (tre onori) e 8+ PO</td><td>Passo: il contro diventa punitivo</td></tr>
</tbody>
</table>
<p>Su un barrage a livello di tre non c’è spazio per saltare: con 9-11 PO e quattro o più carte in una nobile non dichiarata, dichiara la manche in quella nobile; altrimenti il tuo colore migliore al livello più economico, 3SA con 13-16, una mano bilanciata o semibilanciata e il fermo, o la surlicita con 12+. Chi ha contrato passa una risposta al livello più economico con un minimo, e la appoggia solo con valori in più.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="Ovest apre 2♥; Nord contra."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Sud ha 9 PO e quattro picche: vale un salto a 3♠, perché una risposta di 2♠ potrebbe essere fatta con niente. Nord, con 13 PO, quattro atout e un singolo a cuori (16 punti di appoggio a picche), accetta l’invito. Su una risposta di 2♠ Nord avrebbe solo invitato con 3♠.</p>

<h3>Rispondere a un intervento a senza atout</h3>
<p>Dopo il 2SA del compagno su un due debole (15-18): dichiara 3SA con 10+ PO; con una nobile di sei, la manche con 9+ PO o tre in quel colore con 6-8 per invitare; con una mano più debole e un colore di cinque, dichiaralo a livello di tre per giocarlo; altrimenti passa. Stayman e transfer non si usano qui. Dopo il 3SA del compagno su un barrage a livello di tre (16-21), i bot passano con quasi tutte le mani: dichiarano quattro in una nobile di sei con 9+ PO, e con 12+ PO cercano lo slam. 4SA è un invito quantitativo con 12-14 PO, e 6SA si dichiara con 15+.</p>
<div class="warn">Non contrare un barrage per punire perché hai qualche carta alta nel loro colore: il contro dei bot è informativo. Con lunghezza nel loro colore, passa e aspetta il contro del compagno; con atout lunghe e solide potrai poi lasciare quel contro per punire.</div>
`,
    keyPoints: [
      'Su un due debole il contro (13+, corto nel loro colore) e l’intervento (13-17, buon colore) richiedono valori veri; 2SA mostra 15-18 bilanciata con il fermo.',
      'Su un barrage a livello di tre il contro richiede 14+; 3SA mostra 16-21 con il fermo, per giocarlo.',
      'Con un buon colore di sei intervieni; con 17+ PO di qualsiasi distribuzione, contra prima.',
      'Il compagno deve dichiarare: livello più economico con 0-8, un salto con 9-11 se resta a livello di tre (manche in una nobile di quattro che trova posto solo a livello di tre), la surlicita con 12+; passa solo con atout solide.',
      'Chi fa barrage si aspetta di andare sotto da due a quattro prese contrato: se hai la manche, dichiarala invece di sperare in una grossa penalità.',
    ],
    quiz: [
      {
        q: 'L’avversario di destra apre 2♥. Hai ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 PO). Che cosa dichiari?',
        options: ['Passo', 'Contro', '2♠', '2SA'],
        answer: 1,
        explain: 'Corto a cuori, appoggio per tutti gli altri colori e 13 PO: un contro informativo. 2♠ prometterebbe un buon colore di cinque.',
      },
      {
        q: 'L’avversario di destra apre 2♠. Hai ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 PO). Che cosa dichiari?',
        options: ['Contro', '2SA', '3SA', 'Passo'],
        answer: 1,
        explain: 'Bilanciata, 15-18, con il fermo a picche: 2SA. Un contro chiederebbe al compagno di dichiarare un colore, e non sei corto a picche.',
      },
      {
        q: 'L’avversario di destra apre 3♥. Hai ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 PO). Che cosa dichiari?',
        options: ['Contro', '4♦', '3SA', 'Passo'],
        answer: 2,
        explain: '3SA su un barrage a livello di tre mostra 16-21 con il fermo ed è per giocare. Le tue quadri sono affrancate, e il ♥K è ben piazzato dietro a chi ha fatto barrage.',
      },
      {
        q: 'L’avversario di sinistra apre 2♥, il compagno contra e l’avversario di destra passa. Hai ♠K963 ♥874 ♦A52 ♣Q84 (9 PO). Che cosa dichiari?',
        options: ['2♠', '3♠', '4♠', '2SA'],
        answer: 1,
        explain: '9-11 PO con quattro picche: salta a 3♠ per invitare a manche. 2♠ potrebbe essere dichiarato con niente, e 2SA prometterebbe il fermo a cuori.',
      },
      {
        q: 'L’avversario di sinistra apre 2♥, il compagno contra e l’avversario di destra passa. Hai ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 PO). Che cosa dichiari?',
        options: ['2SA', '3♣', 'Passo', '3♦'],
        answer: 2,
        explain: 'Cinque cuori solide e 8+ PO: passa, e il contro informativo del compagno diventa punitivo. Le tue cuori, piazzate dietro all’apertore, faranno prese.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Quando ci contrano',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Che cosa fa il rispondente dopo un contro informativo sull’apertura del compagno (surcontro, 2SA Jordan, appoggi, nuovi colori, 1SA), e come scappare quando l’1SA del compagno viene contrato.',
    body: `
<h3>L’apertura del compagno viene contrata</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Il compagno apre 1♥ e l’avversario di destra fa un contro informativo: valori d’apertura, corto a cuori, appoggio negli altri colori. Il contro ti dà nuovi modi di descrivere la tua mano, e ne hai bisogno: il compagno di chi ha contrato sta per dichiarare, forse con un salto, e l’apertore deve sapere subito se la vostra linea ha un fit e chi ha la maggior parte della forza.</p>

<h3>Che cosa giocano i bot</h3>
<p>Dopo 1♥ o 1♠ – contro, i bot scelgono la prima di queste dichiarazioni che va bene:</p>
<table>
<thead><tr><th>Dichiarazione</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>2SA (Jordan)</td><td>Artificiale: quattro o più atout e 10+ punti di appoggio, un appoggio limite o più forte</td></tr>
<tr><td>Surcontro</td><td>10+ PO, di solito senza fit (al massimo tre atout)</td></tr>
<tr><td>Appoggio a salto (1♥ – X – 3♥)</td><td>Barrage: quattro o più atout e meno di 10 PO</td></tr>
<tr><td>Appoggio semplice (1♥ – X – 2♥)</td><td>Tre atout e 6-10 punti di appoggio (con quattro, salta o dichiara 2SA)</td></tr>
<tr><td>1♠ su 1♥</td><td>Quattro o più picche e 6+ PO; forzante</td></tr>
<tr><td>1SA</td><td>6-9 PO e nessuna delle dichiarazioni sopra</td></tr>
<tr><td>Passo</td><td>Una mano debole</td></tr>
</tbody>
</table>
<p>Nota che cosa manca: un nuovo colore a livello di due. Dopo il contro i bot non lo dichiarano mai. Con 10+ PO surcontrano, e con meno dichiarano 1SA o passano.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2SA"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: surcontro"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1SA"></div>
<p>La prima mano ha quattro atout e 11 punti di appoggio: 2SA Jordan. La seconda ha 10 PO e nessun fit: surcontro. La terza, con cinque atout e 6 PO, salta a 3♥ per togliere spazio agli avversari; hanno di sicuro un fit loro. La quarta fa un appoggio semplice con tre atout. La quinta mostra le sue picche a livello di uno. La sesta ha 8 PO e nient’altro da dire: 1SA.</p>
<div class="tip">L’appoggio a salto di barrage funziona meglio subito, prima che il compagno di chi ha contrato possa dichiarare a buon mercato. Con quattro atout e una mano debole, togli loro lo spazio.</div>

<h3>Dopo un’apertura di minore</h3>
<p>Dopo 1♣ o 1♦ – contro non c’è il 2SA Jordan: con 10+ PO, surcontra. Un’apertura di 1♣ o 1♦ può avere solo tre carte, quindi gli appoggi richiedono più atout: quattro per l’appoggio semplice, cinque per l’appoggio a salto di barrage. Con una nobile di quattro e 6+ PO, dichiarala a livello di uno, prima le cuori se le hai entrambe.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>Dopo il surcontro</h3>
<p>Il surcontro dice che la mano è della vostra linea. L’apertore di solito passa e lascia il problema agli avversari: devono trovare dove giocare, e il compagno di chi ha contrato, che può non avere niente, dichiara solo con un colore di cinque. L’apertore dichiara subito solo con un minimo (al massimo 13 PO) e un colore di sei, che difende male. Quando gli avversari finiscono in un colore, chi ha surcontrato dichiara la manche se ne ha i valori, circa 12+ PO di fronte all’apertura. Con 10-11 PO e quattro carte nel loro colore con due dei tre onori maggiori, chi ha surcontrato li contra invece: dopo un surcontro, un contro della vostra linea è punitivo.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AJ94 C:KJ1062" data-s="S:J1093 H:K6 D:Q53 C:AQ97" data-w="S:8742 H:109732 D:86 C:53" data-caption="Nord apre 1♥ ed Est contra."></div>
<div class="auction" data-calls="1H X XX P P 2C 3NT P P P" data-dealer="N"></div>
<p>Sud ha 12 PO e solo due cuori: surcontro. Ovest non ha niente né un colore di cinque, quindi passa; passa anche Nord, ed Est deve scegliere un colore a livello di due. Sud, con 12 PO di fronte a un’apertura e due fermi a fiori, dichiara 3SA, che con il gioco migliore realizza nove prese.</p>

<h3>Il 2SA Jordan in azione</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Nord apre 1♥ ed Est contra."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Sud ha quattro atout e 12 punti di appoggio: 2SA Jordan, un appoggio limite o più forte. Nord, con 14 PO e un colore di cinque, ha più di un minimo e dichiara manche. Con un minimo Nord dichiarerebbe solo 3♥.</p>

<h3>Quando il nostro 1SA viene contrato</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>Il contro dell’1SA del compagno è punitivo. Le scelte del rispondente:</p>
<table>
<thead><tr><th>Dichiarazione</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Surcontro</td><td>8+ PO: con i 15-17 del compagno la vostra linea ha la maggior parte della forza, e sono gli avversari a essere nei guai</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Per giocare: 0-7 PO e cinque o più carte nel colore, il più lungo</td></tr>
<tr><td>Passo</td><td>Qualsiasi altra mano</td></tr>
</tbody>
</table>
<p>Dopo il contro Stayman e transfer non valgono più: 2♣ mostra le fiori e 2♦ le quadri. Con una mano debole 1SA contrato può costare molto, mentre due nel tuo colore lungo si gioca molto meglio.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1SA – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1SA – X – ?: surcontro"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1SA – X – ?: passo"></div>
<p>La prima mano scappa nelle sue cinque quadri. La seconda ha 8 PO: surcontro. La terza non ha un colore di cinque, quindi passa e lascia che il compagno se la cavi. Dopo il surcontro l’apertore passa: gli avversari devono trovare dove giocare.</p>
<div class="warn">Dopo 1♥ – contro, non dichiarare un nuovo colore a livello di due con una mano debole: non fa parte del sistema. Con 10+ PO surcontra prima; con meno, dichiara 1SA o passa.</div>
`,
    keyPoints: [
      'Dopo un contro informativo su 1♥ o 1♠, 2SA (Jordan) mostra quattro atout e 10+ punti di appoggio; il surcontro mostra 10+ PO, di solito senza fit.',
      'L’appoggio a salto è un barrage (quattro atout per una nobile, cinque per un minore, meno di 10 PO); l’appoggio semplice mostra 6-10 con appoggio.',
      'Una nobile a livello di uno mostra quattro o più carte e 6+ PO ed è forzante; 1SA mostra 6-9 senza un’altra dichiarazione adatta.',
      'Dopo il surcontro l’apertore di solito passa e lascia che gli avversari cerchino un contratto; chi ha surcontrato dichiara poi la manche con valori di manche, oppure li contra con una tenuta forte nel loro colore.',
      'Quando l’1SA del compagno viene contrato, surcontra con 8+; con una mano debole e un colore di cinque, dichiaralo a livello di due (naturale, senza Stayman né transfer).',
    ],
    quiz: [
      {
        q: 'Il compagno apre 1♥ e l’avversario di destra contra. Hai ♠K74 ♥Q962 ♦A1053 ♣J4 (10 PO). Che cosa dichiari?',
        options: ['Surcontro', '3♥', '2SA', '2♥'],
        answer: 2,
        explain: 'Quattro atout e 11 punti di appoggio: il 2SA Jordan mostra subito un appoggio limite o più forte. Un surcontro di solito negherebbe quattro atout, e 3♥ sarebbe un barrage.',
      },
      {
        q: 'Il compagno apre 1♥ e l’avversario di destra contra. Hai ♠K74 ♥Q9862 ♦5 ♣J1043 (6 PO). Che cosa dichiari?',
        options: ['2♥', '3♥', '4♥', 'Passo'],
        answer: 1,
        explain: 'Cinque atout, un singolo e meno di 10 PO: l’appoggio a salto di barrage. Toglie al compagno di chi ha contrato lo spazio che gli serve.',
      },
      {
        q: 'Il compagno apre 1♥ e l’avversario di destra contra. Hai ♠AQ74 ♥62 ♦KJ53 ♣984 (10 PO). Che cosa dichiari?',
        options: ['1♠', 'Surcontro', '2♦', '1SA'],
        answer: 1,
        explain: '10+ PO senza fit: surcontro. Dice al compagno che la mano è della vostra linea; l’apertore di solito passerà e lascerà agli avversari il compito di trovare un contratto.',
      },
      {
        q: 'Il compagno apre 1♦ e l’avversario di destra contra. Hai ♠KJ74 ♥Q962 ♦53 ♣J43 (7 PO). Che cosa dichiari?',
        options: ['1♥', '1♠', '1SA', 'Passo'],
        answer: 0,
        explain: 'Con quattro carte in ogni nobile e 6+ PO, dichiara prima le cuori, a livello di uno. 1♥ è forzante, quindi potrai mostrare le picche più tardi se serve.',
      },
      {
        q: 'Il compagno apre 1SA e l’avversario di destra contra. Hai ♠Q74 ♥62 ♦J9853 ♣932 (3 PO). Che cosa dichiari?',
        options: ['Passo', '2♣', '2♦', 'Surcontro'],
        answer: 2,
        explain: 'Una mano debole con cinque quadri: scappa a 2♦, che dopo il contro è naturale, non un transfer. 2♣ mostrerebbe le fiori, e un surcontro 8+ PO.',
      },
    ],
  },
];
