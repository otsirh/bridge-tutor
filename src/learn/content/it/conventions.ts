// Lezioni sulle convenzioni facoltative: Roman Key Card Blackwood, splinter e
// Drury, nuovo minore forzante e quarto colore forzante, transfer Texas.
// Every example auction is the one the bots bid with these hands.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Roman Key Card Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Il 4SA moderno: chiedere i quattro assi e il re d’atout, poi la donna d’atout e i re laterali, per dichiarare gli slam che si mantengono e fermarsi quando mancano due carte chiave.',
    body: `
<h3>Cinque carte chiave</h3>
<p>Il Blackwood semplice conta gli assi, ma il re e la donna d’atout contano altrettanto: uno slam a cui mancano un asso e il re d’atout è condannato quanto uno a cui mancano due assi. La <strong>Roman Key Card Blackwood</strong> (RKCB) tratta il re d’atout come un quinto asso. Una volta concordato un colore, 4SA chiede le <strong>cinque carte chiave</strong>: i quattro assi e il re d’atout. Le risposte dicono anche qualcosa sulla donna d’atout.</p>
<p>Il colore d’atout è quello concordato; se non è stato concordato nessun colore, è l’ultimo colore dichiarato in modo naturale dalla tua linea. I bot di questa app giocano la RKCB di default (nelle impostazioni del sistema puoi tornare al Blackwood semplice).</p>

<h3>Le risposte (1430)</h3>
<table>
<thead><tr><th>Risposta</th><th>Carte chiave</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 o 4</td></tr>
<tr><td>5♦</td><td>0 o 3</td></tr>
<tr><td>5♥</td><td>2, senza la donna d’atout</td></tr>
<tr><td>5♠</td><td>2, con la donna d’atout</td></tr>
</tbody>
</table>
<p>Il nome «1430» viene dalle prime due risposte: 5♣ mostra una o quattro, 5♦ zero o tre. Chi chiede riesce quasi sempre a capire quale delle due. Conta le tue carte chiave e ricorda che cosa ha mostrato il compagno: un compagno che ha aperto e fatto un appoggio forte non può avere zero carte chiave, perché fuori dalla tua mano non ci sono abbastanza altre carte alte per arrivare ai suoi punti.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Accordo a picche; il compagno dichiara 4SA: rispondi 5♥"></div>
<p>Due carte chiave, il ♥A e il ♠K, ma non la ♠Q: 5♥.</p>

<h3>Dopo la risposta</h3>
<ul>
<li><strong>Mancano due carte chiave</strong>, o una e la donna d’atout: chiudi a cinque nel colore d’atout. Il compagno deve passare.</li>
<li><strong>Ne manca una</strong> e la donna è tua: dichiara il piccolo slam.</li>
<li><strong>Non ne manca nessuna</strong>: dichiara il piccolo slam, o cerca il grande.</li>
</ul>
<p>Chi chiede è il capitano. Dopo la risposta del compagno decide lui, e il compagno passa sulla chiusura o sullo slam.</p>

<h3>La richiesta della donna</h3>
<p>Dopo 5♣ o 5♦ la donna d’atout è ancora sconosciuta. Se conta, chi chiede dichiara il <strong>gradino successivo</strong>, saltando il colore d’atout: 5♦ su 5♣, 5♥ su 5♦. Il compagno risponde:</p>
<ul>
<li>senza la donna: torna nel colore d’atout al livello più economico;</li>
<li>con la donna: dichiara 6 nel colore d’atout (o 5SA, quando 6 nel colore d’atout sarebbe la risposta «senza donna»).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Nord apre 2♣ e Sud mostra una buona quinta di picche."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Nord ha tutti e quattro gli assi, quindi il 5♣ di Sud mostra una carta chiave: il ♠K. Ci sono tutte le carte chiave, ma per quanto ne sa Nord la ♠Q no, quindi Nord la chiede con 5♦. Il 5♠ di Sud nega la donna, e Nord si accontenta di 6♠: un grande slam senza la donna d’atout richiederebbe una divisione fortunata.</p>

<h3>La richiesta dei re</h3>
<p>Quando la coppia ha tutte e cinque le carte chiave e la donna d’atout e il grande slam è possibile, chi chiede dichiara <strong>5SA</strong> per chiedere i re laterali (il re d’atout è già stato contato): 6♣ = nessuno, 6♦ = uno, 6♥ = due, 6♠ = tre. Il 5SA promette che non manca niente, quindi il compagno può dichiarare il grande slam se ha prese in più.</p>

<h3>Un esempio completo</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P P P" data-dealer="N"></div>
<p>Nord salta a 4♥ con appoggio quarto e 19+ punti. Sud ha 17 PO e una fonte di prese a quadri, quindi lo slam è probabile. 5♣ mostra una o quattro carte chiave. Sud ha solo il ♣A, e l’appoggio forte di Nord non si spiega senza assi, quindi sono quattro. Resta una sola domanda, la ♥Q, e 5♦ la pone. Nord ce l’ha e dichiara 6♥, e Sud passa: non manca niente, ma non c’è una tredicesima presa su cui contare.</p>
<div class="tip">Prima di dichiarare 4SA, assicurati che la risposta non possa portarti oltre il contratto che vuoi. Con atout fiori o quadri, una risposta di 5♥ o 5♠ non lascia modo di fermarsi a livello di cinque, quindi devi sapere che non possono mancare due carte chiave.</div>
<div class="warn">La RKCB richiede un colore d’atout concordato. Dopo un senza atout naturale del compagno, 4SA è quantitativo. Con una chicane la RKCB non può dirti se le carte chiave del compagno sono utili: fai invece una cue bid.</div>
`,
    keyPoints: [
      'La RKCB chiede cinque carte chiave: i quattro assi e il re d’atout.',
      'Risposte (1430): 5♣ 1 o 4, 5♦ 0 o 3, 5♥ 2 senza la donna d’atout, 5♠ 2 con la donna.',
      'Mancano due carte chiave (o una e la donna): fermati a cinque. Ne manca una: dichiara il piccolo slam.',
      'Dopo 5♣ o 5♦ il gradino successivo chiede la donna d’atout; senza la donna il compagno torna nel colore d’atout.',
      'Poi 5SA chiede i re laterali e promette tutte le carte chiave e la donna d’atout.',
    ],
    quiz: [
      {
        q: 'L’accordo è a cuori e il compagno dichiara 4SA (RKCB). Hai ♠A72 ♥K965 ♦Q84 ♣J53. Che cosa rispondi?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Due carte chiave, il ♠A e il ♥K, senza la ♥Q: 5♥.',
      },
      {
        q: 'Che cosa mostra la risposta di 5♦ alla RKCB?',
        options: ['Una carta chiave', 'Zero o tre carte chiave', 'Due carte chiave e la donna d’atout', 'Quadri'],
        answer: 1,
        explain: 'Con le risposte 1430, 5♣ è una o quattro, 5♦ zero o tre; chi chiede capisce quale dalla licita.',
      },
      {
        q: 'L’accordo è a picche. Hai chiesto con 4SA avendo due carte chiave e la ♠Q, e il compagno risponde 5♥ (due senza la donna). E ora?',
        options: ['Passo', '6♠: manca una carta chiave, ma la donna è mia', '5♠: mancano due carte chiave', '5SA'],
        answer: 1,
        explain: 'Due più due fa quattro carte chiave, quindi ne manca una, e la donna d’atout ce l’hai tu. Dichiara il piccolo slam.',
      },
      {
        q: 'L’accordo è a picche. Il 5♣ del compagno mostra una carta chiave e tu hai le altre quattro, ma non la ♠Q. Quale dichiarazione chiede la donna d’atout?',
        options: ['5♦', '5♥', '5♠', '5SA'],
        answer: 0,
        explain: 'La richiesta della donna è il gradino successivo alla risposta che non sia il colore d’atout: 5♦ su 5♣.',
      },
      {
        q: 'Tutte le carte chiave e la donna d’atout sono tue e stai pensando al grande slam. Che cosa chiede 5SA?',
        options: ['Di nuovo gli assi', 'Quanti re laterali ha il compagno', 'La donna d’atout', 'Niente: è per giocare'],
        answer: 1,
        explain: 'Dopo la RKCB, 5SA chiede i re laterali (il re d’atout è stato contato come carta chiave) e promette che non manca nessuna carta chiave.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Splinter e Reverse Drury',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Due appoggi alla nobile del compagno: lo splinter, che mostra valori di manche e una corta perché l’apertore possa valutare lo slam, e il Drury, che permette a una mano passata di mostrare in sicurezza un appoggio limite.',
    body: `
<h3>Gli appoggi splinter</h3>
<p>Lo <strong>splinter</strong> è un doppio salto in un nuovo colore dopo che il compagno ha aperto 1♥ o 1♠. Mostra quattro o più atout, valori di manche (circa 13-16 punti contando le corte) e un singolo o una chicane nel colore dichiarato. Non dice nient’altro su quel colore, quindi va allertato.</p>
<table>
<thead><tr><th>Apertura</th><th>Splinter</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Il compagno ha aperto 1♠: dichiara 4♥"></div>
<p>10 PO, quattro atout e un singolo a cuori: 10 + 3 per il singolo = 13 punti di appoggio. 4♥ dice tutto questo al compagno con una sola dichiarazione. Con una mano più forte comincia con il 2SA Jacoby; con 10-12 punti fai un appoggio limite.</p>

<h3>La decisione dell’apertore: i valori utili</h3>
<p>Di fronte a uno splinter l’apertore conta solo le carte alte che lavorano. Gli onori di fronte al singolo del compagno sono in gran parte sprecati: un re o una donna lì non faranno mai presa, perché il compagno taglia il colore. Conta ancora solo l’asso. Senza valori sprecati e con circa 16 o più punti utili, l’apertore cerca lo slam; altrimenti chiude a quattro nella nobile.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Nord ha 14 PO, ma il ♥K e il ♥J stanno di fronte al singolo di Sud. Senza di loro Nord ha circa 10 punti utili, quindi chiude. Le undici prese ci sono, le dodici no.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Qui Nord non ha niente a fiori, quindi tutti i suoi 15 PO lavorano, e i cuori si adattano bene. Nord fa la cue bid di 4♦, mostrando il controllo a quadri e interesse per lo slam. Sud collabora con 4♥ (il ♥A), e Nord chiede le carte chiave. Il 5♠ di Sud mostra due carte chiave e la donna d’atout, e Nord dichiara 6♠.</p>

<h3>Il Reverse Drury</h3>
<p>In terza o quarta posizione il compagno può aprire un po’ leggero. Se hai già passato e hai un appoggio limite (tre o più atout e 10-12 punti), un salto a tre nella nobile può portarti troppo in alto di fronte a un’apertura leggera. Il <strong>Reverse Drury</strong> risolve il problema: una mano passata dichiara <strong>2♣</strong> sull’1♥ o 1♠ del compagno per mostrare tre o più atout e 10-12 punti. È convenzionale e non dice nulla sul colore di fiori.</p>
<ul>
<li>L’apertore ridichiara <strong>due nella nobile</strong> con un’apertura minima o leggera: non c’è manche, e tu passi.</li>
<li>L’apertore dichiara la <strong>manche</strong> con un’apertura piena e valori in più.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Nord è il mazziere e ha passato; Sud ha aperto 1♠ in terza posizione."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>L’1♠ di Sud ha solo 11 PO. Sul Drury, 2♠ dice «niente manche», e la coppia si ferma al sicuro: nove prese sono il massimo.</p>
<div class="tip">Il Drury è solo per le mani passate, e deve essere concordato. In questa app è disattivato di default; attivalo nelle impostazioni del sistema per esercitarti.</div>
<div class="warn">Lo splinter promette quattro atout. Con tre sole fai un’altra dichiarazione: il compagno conterà sulla quarta atout per tagliare il colore corto.</div>
`,
    keyPoints: [
      'Lo splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) mostra quattro o più atout, valori di manche e un singolo o una chicane nel colore dichiarato.',
      'Di fronte a uno splinter conta solo i valori utili: gli onori di fronte alla corta sono sprecati, tranne l’asso.',
      'Con valori sprecati l’apertore chiude a manche; con valori utili fa una cue bid o chiede le carte chiave.',
      'Reverse Drury: il 2♣ di una mano passata su 1♥/1♠ mostra tre o più atout e 10-12 punti.',
      'Sul Drury, due nella nobile è un minimo; la manche mostra valori in più.',
    ],
    quiz: [
      {
        q: 'Il compagno apre 1♠. Hai ♠KQ74 ♥A853 ♦K962 ♣5 (12 PO). Che cosa dichiari?',
        options: ['2SA', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Quattro atout, un singolo a fiori e 12 + 3 = 15 punti di appoggio: lo splinter 4♣ descrive la mano con una sola dichiarazione.',
      },
      {
        q: 'Il compagno apre 1♥ e tu dichiari 3♠. Che cosa hai mostrato?',
        options: ['Picche lunghe', 'Quattro o più cuori, valori di manche e un singolo o una chicane a picche', 'Una mano debole con le picche', 'Il fermo a picche'],
        answer: 1,
        explain: 'Su 1♥, 3♠ è un doppio salto in un nuovo colore: uno splinter.',
      },
      {
        q: 'Hai aperto 1♠ con ♠AK1063 ♥KQ5 ♦Q84 ♣K7 e il compagno ha fatto lo splinter con 4♥. Che cosa fai?',
        options: ['Dichiaro 4♠: il ♥K e la ♥Q sono sprecati', 'Dichiaro 4SA', 'Cue bid di 5♣', 'Dichiaro 6♠'],
        answer: 0,
        explain: 'Cinque dei tuoi 17 PO stanno di fronte alla corta a cuori del compagno e non faranno prese. Con circa 12 punti utili, chiudi.',
      },
      {
        q: 'Chi può usare il Reverse Drury?',
        options: ['Qualsiasi rispondente con appoggio', 'Una mano passata con tre o più atout e 10-12 punti, dopo l’apertura di 1♥ o 1♠ del compagno', 'Una mano passata con i fiori lunghi', 'L’apertore con una mano forte'],
        answer: 1,
        explain: 'Il Drury è un appoggio limite della mano passata che tiene bassa la licita di fronte a un’apertura in terza o quarta posizione forse leggera.',
      },
      {
        q: 'Il compagno, mano passata, dichiara 2♣ (Drury) sul tuo 1♥ in terza posizione. Hai un’apertura leggera da 11 punti. Che cosa ridichiari?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 0,
        explain: 'Due nella nobile dice che hai un minimo e che non c’è manche; il compagno passa.',
      },
    ],
  },
  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Nuovo minore forzante e quarto colore forzante',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Due dichiarazioni convenzionali che permettono al rispondente di chiedere invece di indovinare: il nuovo minore forzante dopo la ridichiarazione di 1SA dell’apertore, e il quarto colore forzante quando sono stati dichiarati tre colori.',
    body: `
<h3>Perché il rispondente deve chiedere</h3>
<p>Dopo 1♦ – 1♠ – 1SA, il rispondente con cinque picche e valori di manche vorrebbe sapere se l’apertore ha tre picche. 3♠ sarebbe solo invitante; 4♠ potrebbe finire in un fit 5-2; 3SA potrebbe perdere un fit 5-3. Le dichiarazioni naturali non possono fare la domanda, quindi la fa una dichiarazione convenzionale.</p>

<h3>Il nuovo minore forzante</h3>
<p>Dopo la ridichiarazione di 1SA dell’apertore, la dichiarazione dell’<strong>altro minore</strong> a livello di due da parte del rispondente (1♣ – 1♥ – 1SA – 2♦, oppure 1♦ – 1♠ – 1SA – 2♣) è convenzionale e forzante per un giro. Mostra 11 o più punti e chiede informazioni sulla nobile del rispondente. Il rispondente ne ha esattamente cinque carte oppure, dopo 1♠, quattro picche e quattro cuori; con sei carte il rispondente ripete semplicemente la nobile o dichiara manche.</p>
<table>
<thead><tr><th>Risposta dell’apertore</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>2 nella nobile del rispondente</td><td>Appoggio terzo, minimo (12-13)</td></tr>
<tr><td>3 nella nobile del rispondente</td><td>Appoggio terzo, massimo (14)</td></tr>
<tr><td>2♥ o 3♥ (dopo 1♠)</td><td>Quattro cuori, minimo o massimo</td></tr>
<tr><td>2SA o 3SA</td><td>Né l’uno né l’altro, minimo o massimo</td></tr>
</tbody>
</table>
<p>Poi il rispondente sceglie il contratto: manche con 13 o più (o di fronte a un massimo), invito con 11-12 di fronte a un minimo, e senza atout senza fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Sud ha 14 PO e cinque picche. 2♣ chiede; il 2♠ di Nord mostra appoggio terzo, e Sud dichiara la manche a picche, dove il valore di taglio porta a undici prese.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Con 11 PO e cinque cuori (♠5 ♥AQJ62 ♦A32 ♣9743), Sud chiede con 2♣ e, di fronte a un minimo con tre cuori, invita con 3♥. Nord ha un minimo e passa.</p>

<h3>Il quarto colore forzante</h3>
<p>Quando sono stati dichiarati tre colori in modo naturale, la dichiarazione del <strong>quarto colore</strong> da parte del rispondente è convenzionale e forzante manche. Il rispondente ha valori di manche ma nessuna dichiarazione chiara: spesso un colore quinto in cerca di appoggio terzo, oppure una mano che potrebbe giocare 3SA se solo il quarto colore fosse fermato.</p>
<p>L’apertore descrive meglio la mano, in quest’ordine:</p>
<ol>
<li>Appoggio terzo nel colore del rispondente: appoggialo.</li>
<li>Un fermo nel quarto colore: dichiara senza atout.</li>
<li>Lunghezza in più: ripeti un secondo colore quinto, o il primo colore.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Sud ha 14 PO e cinque buone cuori. 2♣, il quarto colore, chiede a Nord di descriversi. Nord non ha appoggio terzo a cuori ma ha il fermo a fiori, quindi dichiara 2SA, e Sud appoggia a 3SA.</p>
<div class="tip">Con una mano bilanciata da manche e il quarto colore fermato, dichiara semplicemente 3SA. Il quarto colore forzante serve alle mani che hanno bisogno di una risposta.</div>
<div class="warn">Entrambe le dichiarazioni sono convenzionali: non dicono nulla sul minore o sul quarto colore. Allertale, e non passarci mai sopra.</div>
`,
    keyPoints: [
      'Nuovo minore forzante: 1m – 1M – 1SA – due nell’altro minore chiede l’appoggio terzo (o quattro cuori dopo 1♠), con 11+ punti.',
      'L’apertore mostra l’appoggio o i quattro cuori a livello di due con un minimo e a livello di tre con un massimo; 2SA o 3SA non mostrano né l’uno né l’altro.',
      'Quarto colore forzante: la dichiarazione del quarto colore da parte del rispondente è convenzionale e forzante manche.',
      'L’apertore risponde prima con l’appoggio nel colore del rispondente, poi con il senza atout se ha il fermo, poi con la lunghezza in più.',
      'Con una mano bilanciata e il fermo nel quarto colore, dichiara direttamente 3SA.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1SA – ? Hai ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 PO). Che cosa dichiari?',
        options: ['2♠', '3♠', '2♦', '3SA'],
        answer: 2,
        explain: '2♦, nuovo minore forzante, chiede se l’apertore ha tre picche (o quattro cuori). Poi potrai scegliere tra picche e senza atout.',
      },
      {
        q: '1♦ – 1♥ – 1SA – 2♣. Hai aperto con ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 PO). Che cosa rispondi?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 2,
        explain: 'Appoggio terzo a cuori con un massimo per la ridichiarazione di 1SA: salta a 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Che cosa mostra 2♦?',
        options: ['Quadri lunghe', 'Una forzante manche convenzionale che chiede all’apertore di descrivere la mano', 'Una mano debole', 'Appoggio a picche'],
        answer: 1,
        explain: 'Le quadri sono il quarto colore. Il rispondente ha valori di manche e sta chiedendo, non mostrando le quadri.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Hai aperto con ♠AQ74 ♥J5 ♦K103 ♣KJ96. Che cosa dichiari?',
        options: ['2♥', '2SA', '3♣', '2♠'],
        answer: 1,
        explain: 'Niente appoggio terzo a cuori, ma ♦K10x ferma le quadri: dichiara senza atout.',
      },
      {
        q: 'Dopo 1♦ – 1♠ – 1SA, quale mano deve usare il nuovo minore forzante?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Cinque picche e 12 PO: chiedi l’appoggio terzo. La prima mano è troppo debole, la terza deve ripetere 2♠, e l’ultima, con quattro picche e 12 PO, dichiara 3SA.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'I transfer Texas',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Come dichiarare la manche in una nobile sesta di fronte a 1SA o 2SA in modo che la giochi la mano forte, e come proseguire verso lo slam.',
    body: `
<h3>Transfer a livello di quattro</h3>
<p>Di fronte all’1SA del compagno, una mano con una nobile sesta e abbastanza per la manche vuole giocare quattro nella nobile, e vuole che il giocante sia l’apertore a senza atout, così che l’attacco arrivi verso la mano forte. I <strong>transfer Texas</strong> lo fanno con una sola dichiarazione:</p>
<table>
<thead><tr><th>Dichiarazione</th><th>Significato</th><th>L’apertore dichiara</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Sei o più cuori, valori di manche</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Sei o più picche, valori di manche</td><td>4♠</td></tr>
</tbody>
</table>
<p>L’apertore deve completare il transfer. Il rispondente passa se non ha interesse per lo slam.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Sud ha 10 PO e sei picche: abbastanza per la manche ma non per lo slam. 4♥ è il transfer, Nord dichiara 4♠ e Sud passa. Il giocante è Nord, quindi l’attacco arriva verso i re di Nord invece che attraverso di essi.</p>

<h3>Texas o Jacoby?</h3>
<table>
<thead><tr><th>Mano del rispondente</th><th>Piano</th></tr></thead>
<tbody>
<tr><td>0-7, cinque o più carte</td><td>Transfer Jacoby, poi passo</td></tr>
<tr><td>8-9, sei carte</td><td>Transfer Jacoby, poi appoggio a tre</td></tr>
<tr><td>Valori di manche, esattamente cinque carte</td><td>Transfer Jacoby, poi 3SA: sceglie l’apertore</td></tr>
<tr><td>Valori di manche, sei o più carte</td><td>Texas: 4♦ o 4♥</td></tr>
<tr><td>Interesse per lo slam, sei o più carte</td><td>Texas, poi 4SA (Roman Key Card Blackwood)</td></tr>
</tbody>
</table>

<h3>Proseguire verso lo slam</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Sud ha 15 PO e una sesta di cuori forte di fronte a 15-17: lo slam è probabile. Il Texas fissa i cuori come atout, e 4SA chiede le carte chiave. Il 5♥ di Nord ne mostra due, il ♥A e il ♦A, senza la donna. Sud ha il ♥K, il ♣A e la ♥Q, quindi manca una sola carta chiave, e Sud dichiara 6♥.</p>

<h3>Dopo 2SA</h3>
<p>Le stesse dichiarazioni funzionano sull’apertura di 2SA (20-21), dove per la manche bastano anche 4 punti:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">Il Texas rende giocante la mano forte e risparmia spazio per la licita di slam: dopo il transfer, 4SA è Roman Key Card Blackwood nella nobile.</div>
<div class="warn">4♣ su 1SA o 2SA è Gerber, non Texas. E l’apertore non deve mai passare su 4♦ o 4♥: il transfer va completato.</div>
`,
    keyPoints: [
      'Texas: 1SA (o 2SA) – 4♦ mostra sei o più cuori, 4♥ sei o più picche, con valori di manche.',
      'L’apertore completa sempre il transfer, così il giocante è l’apertore a senza atout.',
      'Il rispondente passa senza interesse per lo slam; con interesse, Texas e poi 4SA chiede le carte chiave.',
      'Con esattamente cinque carte e valori di manche, usa invece il transfer Jacoby e poi 3SA.',
      'Le mani invitanti fanno il transfer a livello di due e appoggiano a tre.',
    ],
    quiz: [
      {
        q: 'Il compagno apre 1SA. Hai ♠KQ10965 ♥A4 ♦K73 ♣85 (12 PO). Che cosa dichiari?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Sei picche e valori di manche: 4♥ è un transfer Texas, e il compagno dichiara 4♠.',
      },
      {
        q: '1SA – 4♦. Che cosa dichiara l’apertore?',
        options: ['Passo', '4♥', '4SA', '5♦'],
        answer: 1,
        explain: '4♦ mostra sei o più cuori; l’apertore completa il transfer con 4♥.',
      },
      {
        q: 'Il compagno apre 1SA. Hai ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 PO, cinque cuori). Qual è il tuo piano?',
        options: ['4♦ (Texas)', '2♦, poi 3SA', '2♦, poi 4♥', '3SA'],
        answer: 1,
        explain: 'Con esattamente cinque cuori fai il transfer e dichiara 3SA: l’apertore sceglie 4♥ con appoggio terzo e passa con due carte.',
      },
      {
        q: '1SA – 4♥ – 4♠ – 4SA. Che cos’è 4SA?',
        options: ['Quantitativo', 'Roman Key Card Blackwood a picche', 'Per giocare', 'Gerber'],
        answer: 1,
        explain: 'Il transfer Texas ha fissato le picche come atout, quindi 4SA chiede le carte chiave.',
      },
      {
        q: 'Il compagno apre 2SA. Hai ♠64 ♥Q97543 ♦AJ9 ♣87 (7 PO). Che cosa dichiari?',
        options: ['3♦', '4♦', '3♥', 'Passo'],
        answer: 1,
        explain: 'Sei cuori e abbastanza per la manche di fronte a 20-21: Texas 4♦, e il compagno gioca 4♥.',
      },
    ],
  },
];
