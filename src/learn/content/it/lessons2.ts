// Lezioni, parte 2.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'La ridichiarazione del rispondente e la scelta della manche',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Come il rispondente usa la seconda dichiarazione per chiudere, invitare o forzare, e come scegliere tra una nobile, 3SA e cinque in un minore.',
    body: `
<h3>Il rispondente diventa il capitano</h3>
<p>Dopo la ridichiarazione dell’apertore di solito conosci la sua forza entro tre o quattro punti e parecchio della sua distribuzione. La tua seconda dichiarazione deve portare la coppia nel contratto giusto oppure fare un’ultima domanda. Ragiona in tre fasce:</p>
<table>
<thead><tr><th>Rispondente</th><th>Obiettivo</th><th>Dichiarazioni tipiche</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>Chiudere nel parziale migliore</td><td>Passo; preferenza per il primo colore dell’apertore; ripetere un colore sesto; 1SA</td></tr>
<tr><td>11-12</td><td>Invitare a manche</td><td>2SA; appoggio a livello di tre nel colore dell’apertore; ridichiarazione a salto di una buona sesta</td></tr>
<tr><td>13+</td><td>Assicurarsi la manche</td><td>Dichiarare direttamente la manche, o un nuovo colore (forzante) per trovare quella giusta</td></tr>
</tbody>
</table>
<p>Due dichiarazioni convenzionali aiutano il rispondente a chiedere invece di indovinare: il <strong>nuovo minore forzante</strong> dopo la ridichiarazione di 1SA dell’apertore, e il <strong>quarto colore forzante</strong> quando sono stati dichiarati tre colori. Hanno una lezione tutta loro.</p>

<h3>Esempi</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Rispondente: dichiara 2SA"></div>
<p>L’apertore ha mostrato una bilanciata da 12-14. Con 12 PO il totale è 24-26: invita con 2SA. L’apertore passa con 12 e dichiara 3SA con 14 (con 13 decide a giudizio). Con 13+ dichiareresti tu 3SA; con 10 o meno passeresti.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Rispondente: dichiara 3♥"></div>
<p>L’apertore ha un minimo con sei cuori, quindi Q3 basta per un fit di otto carte. 12 punti di fronte a 12-15: invita con 3♥. L’apertore dichiara 4♥ se è al massimo della sua fascia.</p>

<h4>La preferenza</h4>
<p>Quando l’apertore mostra due colori e tu non hai fit per nessuno dei due, scegli tra i due al livello più basso. Il primo colore dell’apertore è lungo almeno quanto il secondo, quindi a parità di lunghezza torna al primo. Dopo 1♥ – 1♠ – 2♣, con ♥Q43 e ♣97 dichiara 2♥: non è forza in più, solo un colore d’atout migliore. Con ♥4 e ♣J973 passa su 2♣.</p>

<h3>La scelta della manche</h3>
<ol>
<li><strong>Fit di otto carte in una nobile? Gioca nella nobile.</strong> Un fit 4-4 o 5-3 di solito rende almeno una presa più del senza atout, perché la mano corta in atout può tagliare. Anche con due mani bilanciate, di norma il contratto giusto è 4♥ o 4♠.</li>
<li><strong>Nessun fit nobile? Preferisci 3SA</strong>, purché tutti i colori non dichiarati siano fermati. 3SA richiede nove prese; cinque in un minore ne richiede undici per lo stesso punteggio (400 o 600).</li>
<li><strong>Cinque in un minore</strong> è per le mani con un grande fit nel minore e un colore che gli avversari possono incassare a senza atout, oppure con corte che producono prese di taglio.</li>
</ol>
<table>
<thead><tr><th>Contratto</th><th>Punti necessari in linea (circa)</th></tr></thead>
<tbody>
<tr><td>3SA, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Piccolo slam</td><td>33</td></tr>
<tr><td>Grande slam</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2SA – 3SA. Il giocante è Sud."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Nord-Sud hanno 27 PO e un fit di nove carte a quadri, ma nessun fit nobile e tutti i colori fermati. A 3SA hai otto prese sicure: due a picche, una a cuori e cinque a quadri. La nona arriva dai fiori una volta scacciato il ♣A (e magari la ♣Q). A 5♦ ti servono undici prese e hai una perdente a picche, almeno una a cuori e almeno una a fiori. 3SA è di gran lunga la manche migliore.</p>

<h3>I limiti dei «25 punti per la manche»</h3>
<ul>
<li><strong>Fit:</strong> con un fit di nove o dieci carte e delle corte, la manche può andare con 22-23 punti. Con un misfit possono non bastare 26.</li>
<li><strong>Duplicazione:</strong> gli onori di fronte a una corta sono sprecati. ♠KQJ di fronte a un singolo di picche rendono poco in un contratto a colore.</li>
<li><strong>Distribuzioni piatte:</strong> due mani 4-3-3-3 fanno meno prese; togli un punto.</li>
<li><strong>Fonti di prese:</strong> un colore lungo e solido compensa i punti che mancano. Sei quadri incassabili possono far mantenere 3SA con 23 PO.</li>
<li><strong>Fermi:</strong> 3SA con un colore completamente scoperto va sotto, qualunque sia il numero di punti.</li>
</ul>
<div class="tip">Con 13+ punti di fronte a un’apertura non fare mai una dichiarazione su cui il compagno possa passare sotto la manche. Se non sai dove giocare, dichiara un nuovo colore: il nuovo colore del rispondente è forzante.</div>
<div class="warn">Non continuare a dichiarare in un misfit senza speranza. Se il compagno continua a ripetere il suo colore e tu il tuo, il contratto giusto di solito è il più basso disponibile.</div>
`,
    keyPoints: [
      'Seconda dichiarazione del rispondente: 6-10 chiude, 11-12 invita, 13+ si assicura la manche.',
      'A parità di lunghezza, dai la preferenza al primo colore dell’apertore.',
      'Con un fit di otto carte in una nobile, di solito si gioca quattro nella nobile.',
      'Senza fit nobile, preferisci 3SA a cinque in un minore quando tutti i colori sono fermati.',
      'Circa 25 punti per 3SA o quattro in una nobile, 29 per cinque in un minore, 33 per il piccolo slam; correggi in base a fit e distribuzione.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1SA – ? Hai ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 PO).',
        options: ['Passo', '2SA', '3SA', '2♠'],
        answer: 1,
        explain: 'L’apertore ha 12-14, quindi insieme avete 24-26: invita con 2SA. L’apertore dichiarerà 3SA con un massimo.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Hai ♠KJ753 ♥Q43 ♦J86 ♣97 (7 PO).',
        options: ['Passo', '2♥', '2♠', '2SA'],
        answer: 1,
        explain: 'L’apertore ha almeno cinque cuori, quindi avete un fit di otto carte. 2♥ è una semplice preferenza e non mostra forza in più.',
      },
      {
        q: 'Avete 26 PO in linea, un fit 4-4 a picche e due mani bilanciate. Quale manche?',
        options: ['3SA', '4♠', '5♣', 'È come lanciare una moneta'],
        answer: 1,
        explain: 'Il fit 4-4 di solito rende una presa in più: una mano può tagliare mentre le atout dell’altra tolgono ancora quelle avversarie. Gioca 4♠.',
      },
      {
        q: 'Avete 27 PO, nessun fit nobile, un fit di nove carte a quadri e tutti i colori fermati. Quale manche?',
        options: ['5♦', '3SA', '4♦', '6♦'],
        answer: 1,
        explain: '3SA richiede nove prese, 5♦ undici, e valgono lo stesso. Con tutti i colori fermati, 3SA è la manche più probabile.',
      },
      {
        q: 'Perché la manche può fallire con 26 PO?',
        options: ['Non può: con 26 PO la manche si fa sempre', 'Per un misfit, per valori duplicati o per un colore non fermato', 'Perché 26 PO sono una mano da slam', 'Solo se le atout sono divise 4-1'],
        answer: 1,
        explain: 'I punti stimano la capacità di fare prese, ma le prese dipendono anche dal fit, dal fatto che gli onori lavorino e, a senza atout, dai fermi.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'Le aperture forti di 2♣ e 2SA',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Quando aprire 2♣ o 2SA, come risponde il compagno e come si incastrano le fasce delle mani bilanciate forti.',
    body: `
<h3>2♣: l’apertura più forte</h3>
<p>Il 2♣ è convenzionale e non dice nulla sui fiori. Mostra <strong>22+ PO</strong> oppure circa <strong>nove prese di gioco</strong> (con una nobile; con un minore di solito ne vuoi dieci, perché la manche nel minore richiede undici prese). È l’unica apertura forzante: il compagno deve rispondere anche senza niente.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Apri 2♣: nove prese di gioco"></div>
<p>Solo 20 PO, ma conta le prese: sette a picche e due a cuori, con chance per la decima. Aprendo 1♠ rischi che il compagno passi con una mano come ♠83 ♥J852 ♦Q964 ♣Q83 (5 PO), quando 4♠ è un ottimo contratto. Apri 2♣ e ridichiara 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Apri 2♣, poi ridichiara 2SA"></div>
<p>Bilanciata da 23 PO: 2♣ seguito da 2SA mostra 22-24.</p>

<h3>Rispondere a 2♣</h3>
<table>
<thead><tr><th>Risposta</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>D’attesa: la risposta normale con quasi tutte le mani, deboli o forti</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positiva: una buona quinta (due dei tre onori maggiori o tre dei cinque) e 8+ PO</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Il compagno ha aperto 2♣: dichiara 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Il compagno ha aperto 2♣: dichiara 2♥"></div>
<p>La risposta di 2♦ tiene bassa la licita così che la mano forte possa descriversi. Anche con una mano discreta, se non hai un buon colore dichiara 2♦ e mostra i tuoi valori più avanti.</p>

<h3>La ridichiarazione dell’apertore</h3>
<ul>
<li><strong>2SA</strong> = bilanciata 22-24. È l’unica ridichiarazione su cui il rispondente può passare, con una mano davvero senza valori. Il rispondente usa gli stessi metodi dell’apertura di 2SA: 3♣ Stayman, 3♦ e 3♥ transfer, 3SA per giocare.</li>
<li><strong>3SA</strong> = bilanciata 25-27.</li>
<li><strong>Un colore</strong> = naturale, almeno cinque carte, forzante: il rispondente deve dichiarare ancora. Appoggia se hai appoggio; dichiara un tuo buon colore; senza niente di utile fai la dichiarazione più economica.</li>
</ul>

<h3>L’apertura di 2SA</h3>
<p>2SA mostra <strong>20-21 PO, bilanciata</strong>. Non è forzante, ma il rispondente deve dichiarare manche anche con soli 4 punti.</p>
<table>
<thead><tr><th>Risposta a 2SA</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Passo</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer a cuori / picche</td></tr>
<tr><td>3SA</td><td>4-10, per giocare</td></tr>
<tr><td>4SA</td><td>11-12, quantitativo: l’apertore dichiara 6SA con un massimo</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Apri 2SA: 20 PO, bilanciata"></div>
<p>Di fronte a questa mano, un rispondente con ♠J10642 ♥Q85 ♦73 ♣962 fa il transfer con 3♥ e passa su 3♠: 23-24 in linea non bastano per la manche, ma con cinque atout 3♠ è più sicuro di 2SA.</p>

<h3>La scala delle bilanciate</h3>
<table>
<thead><tr><th>PO</th><th>Sequenza</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Uno a colore, poi 1SA</td></tr>
<tr><td>15-17</td><td>1SA</td></tr>
<tr><td>18-19</td><td>Uno a colore, poi salto a 2SA</td></tr>
<tr><td>20-21</td><td>2SA</td></tr>
<tr><td>22-24</td><td>2♣, poi 2SA</td></tr>
<tr><td>25-27</td><td>2♣, poi 3SA</td></tr>
</tbody>
</table>
<div class="tip">Di fronte a 2♣ ragiona in termini di prese e di controlli, non solo di punti. Un asso o un re valgono molto più di donne e fanti sparsi.</div>
<div class="warn">Non aprire 2♣ solo perché hai 20 PO. Con una bilanciata da 20-21 apri 2SA; con 19-21 e una normale mano sbilanciata apri uno a colore. Il compagno risponderà anche con soli 6 punti, e potrai saltare o fare un rovescio per mostrare la tua forza.</div>
`,
    keyPoints: [
      '2♣ = 22+ PO o circa nove prese di gioco; convenzionale e forzante.',
      'Rispondi 2♦ (d’attesa) con quasi tutte le mani; la risposta positiva richiede una buona quinta (due dei tre onori maggiori o tre dei cinque) e 8+ PO.',
      '2♣ – 2♦ – 2SA = bilanciata 22-24 e si può passare; qualsiasi ridichiarazione a colore dell’apertore è forzante.',
      'Apertura di 2SA = bilanciata 20-21; 3♣ Stayman, 3♦/3♥ transfer, 3SA con 4-10, 4SA con 11-12.',
      'Scala delle bilanciate: 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'Hai ♠AKQJ975 ♥AK4 ♦8 ♣K2. Che cosa apri?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Con nove prese di gioco vuoi arrivare a manche anche se il compagno ha pochissimo, quindi apri con il 2♣ forzante e poi dichiara picche. Su 1♠ tutti potrebbero passare; 2♠ sarebbe un due debole.',
      },
      {
        q: 'Il compagno apre 2♣. Hai ♠Q74 ♥J863 ♦952 ♣K84 (6 PO). Che cosa dichiari?',
        options: ['Passo', '2♦', '2♥', '2SA'],
        answer: 1,
        explain: 'Il 2♣ è forzante, quindi non puoi passare. Senza una buona quinta dichiara il 2♦ d’attesa e lascia che l’apertore descriva la sua mano.',
      },
      {
        q: 'Il compagno apre 2♣. Hai ♠52 ♥KQJ84 ♦A73 ♣964 (10 PO). Che cosa dichiari?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 1,
        explain: 'Una buona quinta (KQJ) con 8+ PO è una risposta positiva: 2♥. Dice subito all’apertore che lo slam è probabile.',
      },
      {
        q: 'Che cosa mostra 2♣ – 2♦ – 2SA?',
        options: ['Bilanciata 20-21', 'Bilanciata 22-24', 'Bilanciata 25-27', 'Un colore di fiori'],
        answer: 1,
        explain: 'Con 20-21 si apre direttamente 2SA. Passare prima per il 2♣ e poi dichiarare 2SA mostra 22-24; 2♣ e poi 3SA mostra 25-27.',
      },
      {
        q: 'Il compagno apre 2SA. Hai una bilanciata da 4 PO. Che cosa dichiari?',
        options: ['Passo', '3SA', '3♣', '4SA'],
        answer: 1,
        explain: '20-21 più 4 fa 24-25, abbastanza per giocarsi la manche. Su 2SA, 3SA copre 4-10 punti.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Due deboli e barrage',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Come aprire con un colore lungo e una mano debole per togliere spazio dichiarativo, e come risponde il compagno.',
    body: `
<h3>Perché il barrage?</h3>
<p>Quando hai un colore lungo e poco altro, probabilmente la maggior parte della forza è degli avversari. Aprendo a un livello alto togli loro lo spazio dichiarativo che serve per trovare il contratto migliore. Allo stesso tempo descrivi la tua mano con precisione, così il compagno sa esattamente che cosa fare.</p>

<h3>I requisiti</h3>
<table>
<thead><tr><th>Apertura</th><th>Colore</th><th>PO</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (due debole)</td><td>Sei carte</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Sette carte</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Otto carte (o sette con distribuzione in più)</td><td>5-10</td></tr>
</tbody>
</table>
<p>La maggior parte della forza deve stare nel colore lungo. Una buona guida per il due debole è avere due dei tre onori maggiori o tre dei cinque.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Apri 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Apri 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Apri 4♠"></div>
<p>Il 2♣ non è mai un due debole: è l’apertura forte convenzionale.</p>

<h3>Fino a che livello? La regola del 2-3-4</h3>
<p>Conta le tue prese di gioco: le prese che ti aspetti di fare con il tuo colore come atout se il compagno non ha niente di utile. KQJ9852 vale circa sei prese. Una guida tradizionale dice che devi essere a non più di:</p>
<ul>
<li><strong>due prese</strong> dal contratto quando sei in zona contro avversari in prima (zona sfavorevole),</li>
<li><strong>tre prese</strong> in parità di zona,</li>
<li><strong>quattro prese</strong> quando sei in prima contro avversari in zona (zona favorevole).</li>
</ul>
<p>L’idea è che anche se vieni contrato, la penalità non dovrebbe superare di molto il valore della manche che probabilmente gli avversari avrebbero fatto. Con sei prese di gioco, 3♣ (nove prese) va bene in parità di zona. I giocatori moderni fanno barrage più aggressivi in zona favorevole e più prudenti in zona sfavorevole.</p>

<h3>Quando non fare barrage</h3>
<ul>
<li>In quarta posizione il barrage non ha senso: con una mano debole passa e chiudi la smazzata. Un’apertura a livello di due o di tre in quarta posizione mostra una mano discreta che conta di mantenere il contratto.</li>
<li>Con una buona mano (11+ PO e un bel colore) apri invece a livello di uno.</li>
<li>In prima o seconda posizione fai attenzione con una quarta nobile laterale o con due assi fuori dal tuo colore: il compagno può avere una buona mano e potresti perdere un contratto migliore.</li>
</ul>

<h3>Rispondere a un due debole</h3>
<table>
<thead><tr><th>Risposta</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Appoggio (2♥ – 3♥)</td><td>Di sbarramento, non invitante: prolunga il barrage con appoggio terzo</td></tr>
<tr><td>Manche nel colore</td><td>Per giocare: per mantenerla, o come ulteriore barrage</td></tr>
<tr><td>2SA</td><td>Forzante: chiede all’apertore di descriversi</td></tr>
<tr><td>Nuovo colore</td><td>Naturale, cinque o più carte, forzante</td></tr>
<tr><td>3SA</td><td>Per giocare</td></tr>
</tbody>
</table>
<p><strong>Le risposte dell’apertore a 2SA:</strong> con un minimo (circa 5-7) ripeti il colore a livello di tre; con un massimo (circa 8-10) dichiara un colore in cui hai un asso o un re laterale (un «onore laterale»); con un colore solido (AKQxxx) dichiara 3SA.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Nord apre 2♠; Sud chiede con 2SA."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Nord ha 8 PO, un massimo, e mostra il ♥K. Sud, con 17 PO, ora sa che le picche gireranno con il ♠A e che i cuori sono ben tenuti, e dichiara la manche. Se Nord avesse mostrato un minimo ripetendo 3♠, Sud avrebbe passato.</p>

<h3>Rispondere a un barrage a livello di tre</h3>
<p>Conta le prese, non i punti. Il colore del compagno renderà circa sei prese; per la manche ne servono altre tre o quattro da te, di solito assi e re. Con appoggio e una mano debole, appoggia per alzare ancora di più il barrage. Ricorda che il compagno ha poca difesa: non contrare gli avversari per punirli contando sul suo barrage.</p>
<div class="tip">Di fronte al barrage del compagno i tuoi assi e re valgono oro, mentre donne e fanti valgono pochissimo, a meno che non siano nel colore del compagno.</div>
<div class="warn">L’appoggio a un due debole non è un tentativo di manche. Se hai una buona mano e vuoi saperne di più, dichiara 2SA.</div>
`,
    keyPoints: [
      'Due debole: sei carte, 5-10 PO, gran parte della forza nel colore; il 2♣ non è mai debole.',
      'Barrage a livello di tre: sette carte, 5-10; quattro in una nobile: otto carte (o sette con distribuzione).',
      'Regola del 2-3-4: due prese in zona sfavorevole, tre in parità, quattro in zona favorevole.',
      'Non fare barrage in quarta posizione.',
      'Gli appoggi ai barrage sono di sbarramento; 2SA su un due debole chiede l’onore laterale (con un minimo si ripete il colore).',
    ],
    quiz: [
      {
        q: 'Prima posizione, parità di zona. Hai ♠84 ♥KQ10973 ♦J52 ♣63. Che cosa apri?',
        options: ['Passo', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Sei buone carte di cuori e 6 PO: un due debole da manuale. Con sette cuori valuteresti 3♥; con 12+ PO apriresti 1♥.',
      },
      {
        q: 'Il compagno apre 2♠ e il giocatore successivo passa. Hai ♠Q73 ♥K842 ♦A65 ♣J94 (10 PO). Che cosa dichiari?',
        options: ['Passo', '3♠', '2SA', '4♠'],
        answer: 1,
        explain: 'Di fronte a 5-10 la manche è improbabile, ma con appoggio terzo la tua linea ha nove atout e gli avversari hanno un fit da qualche parte. Appoggia a 3♠ per rendere più difficile il loro ingresso in licita.',
      },
      {
        q: 'Hai aperto 2♥ con ♠K5 ♥AQ10984 ♦862 ♣73 (9 PO). Il compagno dichiara 2SA. Che cosa ridichiari?',
        options: ['3♥', '3♠', '3SA', '4♥'],
        answer: 1,
        explain: '9 PO sono un massimo, quindi mostra l’onore laterale, il ♠K, con 3♠. 3♥ mostrerebbe un minimo e 3SA un colore solido.',
      },
      {
        q: 'Secondo la regola del 2-3-4, a quante prese dal contratto puoi essere in zona favorevole?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'In zona favorevole quattro down contrato costa 800, non molto più dei 620 della loro manche in zona, e gli avversari, che a loro volta devono cercare una manche o uno slam, spesso non ti contrano nemmeno.',
      },
      {
        q: 'Il compagno apre 2♥. Che cosa mostra il tuo appoggio a 3♥?',
        options: ['Un invito a manche', 'Un appoggio di sbarramento, non invitante', 'Un appoggio forzante', 'Una mano senza cuori'],
        answer: 1,
        explain: 'Appoggiare un barrage prolunga lo sbarramento. Se vuoi che l’apertore descriva la mano, dichiara 2SA, la richiesta forzante.',
      },
    ],
  },
  {
    id: 'overcalls',
    title: 'Gli interventi',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quando intervenire dopo l’apertura avversaria, che cosa mostrano i vari interventi e come risponde il compagno.',
    body: `
<h3>Perché intervenire?</h3>
<p>Dopo l’apertura di un avversario, dichiarare un colore (un <strong>intervento</strong>) serve a tre cose: compete per il parziale, toglie spazio dichiarativo agli avversari e dice al compagno che cosa attaccare se la licita la vincono loro. Proprio per quest’ultimo motivo <strong>la qualità del colore conta più dei punti</strong>.</p>

<h3>Che cosa mostrano gli interventi</h3>
<table>
<thead><tr><th>Intervento</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>A colore a livello di uno (1♦ – 1♠)</td><td>8-16 PO, un buon colore di cinque o più carte</td></tr>
<tr><td>A colore a livello di due (1♠ – 2♦)</td><td>10-16 PO, un buon colore di cinque carte (di solito sei)</td></tr>
<tr><td>Intervento a salto debole (1♣ – 2♠)</td><td>Un colore sesto, 6-10 PO, come un due debole</td></tr>
<tr><td>1SA</td><td>15-18 PO, bilanciata, con il fermo nel colore d’apertura</td></tr>
</tbody>
</table>
<p>Con 17+ e una mano troppo forte per un intervento semplice, comincia con un contro informativo e dichiara il tuo colore dopo.</p>

<h3>Esempi (l’avversario di destra ha aperto)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="L’avversario di destra apre 1♦: dichiara 1♠"></div>
<p>10 PO con un colore forte che vorresti fosse attaccato dal compagno.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="L’avversario di destra apre 1♠: dichiara 2♦"></div>
<p>12 PO e una buona sesta: abbastanza solida per il livello di due.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="L’avversario di destra apre 1♣: dichiara 1SA"></div>
<p>17 PO, bilanciata, con i fiori ben fermati.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="L’avversario di destra apre 1♥: passa"></div>
<p>11 PO, ma le picche sono povere e i valori sparsi. Un intervento chiederebbe l’attacco a picche e potrebbe essere contrato per una grossa penalità. Passa.</p>

<h3>Zona e livello</h3>
<p>Il rischio di un intervento è il contro punitivo. A livello di uno il rischio è piccolo; a livello di due, soprattutto in zona, ti serve un buon colore che faccia prese anche se il resto della mano del compagno è povero. Un intervento a livello di due con una quinta dovrebbe essere vicino a un’apertura con un colore forte.</p>

<h3>Rispondere all’intervento del compagno</h3>
<table>
<thead><tr><th>Dichiarazione del compagno dell’interveniente</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Appoggio semplice</td><td>6-9 con tre o più atout</td></tr>
<tr><td>Surlicita nel colore d’apertura</td><td>Appoggio limite o più forte: 10+ con tre o più atout</td></tr>
<tr><td>Appoggio a salto</td><td>Di sbarramento: debole, con quattro o più atout</td></tr>
<tr><td>Nuovo colore</td><td>Naturale, un buon colore di cinque o più carte, non forzante</td></tr>
<tr><td>1SA</td><td>Circa 8-11 con il fermo nel colore d’apertura</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Sei Sud: dichiara 2♠"></div>
<p>8 PO e appoggio terzo: appoggia a 2♠. Appoggiare subito il compagno rende difficile agli avversari trovare il loro contratto migliore.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Sei Sud: dichiara 2♥"></div>
<p>12 PO e quattro atout. La surlicita a 2♥ mostra un appoggio limite o più forte; il compagno dichiara 2♠ con un intervento minimo, e tu inviterai con 3♠, o dichiarerai la manche se il compagno mostra di più.</p>
<div class="tip">Ricorda che la fascia dell’intervento è ampia (8-16). Non saltare a manche di fronte a un intervento solo perché hai una mano d’apertura: prima surlicita e lascia che il compagno si descriva.</div>
<div class="warn">Un intervento non è un’apertura. Non intervenire con un colore debole solo perché hai 12 punti, e non rinunciare a intervenire con un colore forte solo perché ne hai 9.</div>
`,
    keyPoints: [
      'Intervento a livello di uno: 8-16 PO, buon colore di 5+ carte. A livello di due: 10-16, buon colore di 5+ (di solito 6).',
      'Intervento a salto debole: colore sesto, 6-10; intervento di 1SA: bilanciata 15-18 con il fermo.',
      'La qualità del colore conta più dei punti, perché l’intervento indica anche l’attacco.',
      'Compagno dell’interveniente: appoggio semplice 6-9 con 3+ carte; surlicita = appoggio limite o più forte; l’appoggio a salto è di sbarramento.',
      'Con 17+, troppo forte per intervenire, prima contra e poi dichiara il tuo colore.',
    ],
    quiz: [
      {
        q: 'L’avversario di destra apre 1♦. Hai ♠KQJ74 ♥83 ♦952 ♣A63. Che cosa dichiari?',
        options: ['Passo', '1♠', '2♠', 'Contro'],
        answer: 1,
        explain: 'Una buona quinta con 10 PO è un solido intervento a livello di uno. 2♠ sarebbe un intervento a salto debole, e il contro suggerirebbe appoggio per cuori e fiori.',
      },
      {
        q: 'L’avversario di destra apre 1♥. Hai ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 PO). Che cosa dichiari?',
        options: ['1♠', 'Passo', '1SA', 'Contro'],
        answer: 1,
        explain: 'Le picche sono troppo deboli per chiedere l’attacco, la mano non è un 1SA da 15-18 e non ha la distribuzione per un contro. Passa.',
      },
      {
        q: 'L’avversario di destra apre 1♣. Hai ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 PO). Che cosa dichiari?',
        options: ['1♦', '1SA', 'Contro', '2SA'],
        answer: 1,
        explain: 'Bilanciata, 15-18, con il fermo a fiori: 1SA descrive la mano con una sola dichiarazione. Il compagno può usare le stesse risposte dell’apertura di 1SA.',
      },
      {
        q: 'L’avversario di sinistra ha aperto 1♥ e il compagno è intervenuto 1♠. Hai ♠K962 ♥83 ♦AQ74 ♣K105 (12 PO). Che cosa dichiari?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Con 10+ e appoggio surlicita il colore avversario per mostrare un appoggio limite o più forte. 3♠ sarebbe di sbarramento, e 4♠ potrebbe essere troppo alto di fronte a un intervento minimo.',
      },
      {
        q: 'L’avversario di destra apre 1♣. Hai ♠KJ10984 ♥73 ♦Q52 ♣43 (6 PO). Che cosa dichiari?',
        options: ['Passo', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Sei buone picche e 6-10 PO: un intervento a salto debole. Toglie agli avversari le dichiarazioni a livello di uno e suggerisce l’attacco a picche.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'Il contro informativo',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Come usare il contro per chiedere al compagno di scegliere un colore, e come rispondono il compagno e la linea che ha aperto.',
    body: `
<h3>Che cosa dice il contro informativo</h3>
<p>Il contro di un’apertura a colore a basso livello non è punitivo: chiede al compagno di dichiarare. Mostra <strong>12+ PO, corto nel colore d’apertura e appoggio (idealmente quattro carte) nei colori non dichiarati</strong>, soprattutto nella nobile non dichiarata. L’alternativa è una mano forte, 17+, di qualsiasi distribuzione, che dichiarerà ancora per mostrare che cosa ha davvero.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="L’avversario di destra apre 1♦: contro"></div>
<p>13 PO, un singolo a quadri e quattro carte in tutti gli altri colori: la distribuzione perfetta.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="L’avversario di destra apre 1♦: passo"></div>
<p>14 PO, ma quattro quadri e solo tre carte in ciascuna nobile. Se contri, il compagno dichiarerà cuori o picche con quattro carte, e giocherete un fit 4-3 dalla mano sbagliata. Passa.</p>

<h3>Rispondere al contro informativo</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>Ovest ha aperto 1♥, il compagno ha contrato, Est ha passato. Devi dichiarare, per quanto debole tu sia: passando trasformeresti il contro in un contro punitivo di 1♥. Preferisci una nobile, e mostra la forza con il livello:</p>
<table>
<thead><tr><th>Punti del rispondente</th><th>Azione</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Dichiara il tuo colore migliore al livello più economico</td></tr>
<tr><td>9-11</td><td>Salta nel tuo colore migliore (invitante)</td></tr>
<tr><td>12+</td><td>Surlicita il colore d’apertura (forzante), o dichiara manche</td></tr>
<tr><td>6-10, bilanciata</td><td>1SA, con il fermo nel colore d’apertura</td></tr>
<tr><td>Passo</td><td>Solo con atout lunghe e forti nel colore d’apertura (per punire)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – contro – passo: dichiara 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – contro – passo: dichiara 2♠"></div>
<p>Con 3 PO dichiara 1♠ senza paura: il compagno sa che puoi non avere niente. Con 10 PO salta a 2♠ per invitare a manche. Con ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 PO) dichiara tu 4♠, oppure surlicita 2♥ se non sai quale manche sia la migliore.</p>
<p>Se il compagno dell’apertore dichiara (1♥ – contro – 2♥), non sei più obbligato a dichiarare. Ora una dichiarazione mostra qualche valore, circa 6+, e il passo mostra una mano debole.</p>

<h3>La ridichiarazione di chi ha contrato</h3>
<p>La dichiarazione al livello più economico del compagno può essere fatta con niente, quindi chi ha contrato non deve dichiarare ancora con un minimo. Con 12-15 passa; con circa 16-18 appoggia di un livello; con 19+ salta. Se chi ha contrato dichiara un nuovo colore, mostra il tipo forte di contro (17+) con un colore lungo suo.</p>

<h3>La linea che ha aperto: il surcontro</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Quando l’apertura del compagno viene contrata, il <strong>surcontro</strong> mostra 10+ PO. Dice all’apertore che la forza è della vostra linea, e di solito significa che cerchi l’occasione per contrare gli avversari per punirli. Dopo un’apertura di nobile, <strong>2SA (Jordan)</strong> mostra appoggio di quattro o più carte e un appoggio limite o più forte (10+ punti di appoggio), quindi il surcontro di solito nega quattro atout. Con appoggio e una mano più debole appoggia invece il compagno: l’appoggio semplice mostra circa 6-10 punti, e l’appoggio a salto (1♥ – contro – 3♥) è un barrage, con quattro atout e meno di 10 PO. Con un nuovo colore e meno di 10 punti dichiaralo.</p>

<h3>Il contro sui barrage</h3>
<p>Anche il contro di un due debole o di un barrage a livello di tre è informativo: valori d’apertura, corto nel loro colore e pronto per qualsiasi colore dichiari il compagno. Il compagno può dover dichiarare a livello di tre con una mano debole, quindi chi contra deve avere una mano solida, non leggera.</p>
<div class="tip">Il contro informativo ideale è corto nel colore avversario e ha quattro carte in ciascuna nobile non dichiarata. Più sei corto nel loro colore, più puoi contrare leggero.</div>
<div class="warn">Non contrare con un colore lungo tuo e una mano media: intervieni. Un contro informativo seguito dal tuo colore mostra 17+ PO.</div>
`,
    keyPoints: [
      'Contro informativo: 12+ PO, corto nel loro colore, appoggio nei colori non dichiarati; oppure 17+ di qualsiasi distribuzione con l’intenzione di dichiarare ancora.',
      'Il compagno deve dichiarare: 0-8 al livello più economico, 9-11 salto, 12+ surlicita o manche; 1SA = 6-10 con il fermo.',
      'Passa sul contro solo con atout lunghe e forti nel loro colore.',
      'Chi ha contrato passa su una risposta minima con 12-15; appoggia con 16-18; salta con 19+.',
      'Il surcontro dopo un contro informativo mostra 10+ PO; su 1♥ o 1♠, 2SA (Jordan) mostra quattro atout e un appoggio limite o più, e l’appoggio a salto è un barrage.',
    ],
    quiz: [
      {
        q: 'L’avversario di destra apre 1♣. Hai ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 PO). Che cosa dichiari?',
        options: ['1♦', 'Contro', '1♠', 'Passo'],
        answer: 1,
        explain: 'Corto a fiori e quattro carte in ciascuno degli altri colori: un contro informativo ideale. Qualunque colore dichiari il compagno, hai appoggio.',
      },
      {
        q: '1♥ – contro – passo – ? Hai ♠Q8642 ♥753 ♦J4 ♣982 (3 PO).',
        options: ['Passo', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Devi dichiarare: passando lasceresti giocare 1♥ contrato, e gli avversari probabilmente lo farebbero con prese in più. Dichiara il tuo colore migliore al livello più economico.',
      },
      {
        q: '1♥ – contro – passo – ? Hai ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 PO).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 punti: salta nel tuo colore migliore per invitare a manche. 1♠ si può dichiarare anche senza niente, quindi sottovaluterebbe questa mano.',
      },
      {
        q: '1♠ – contro – passo – ? Hai ♠K104 ♥82 ♦Q963 ♣J752 (6 PO).',
        options: ['2♣', '2♦', '1SA', 'Passo'],
        answer: 2,
        explain: '1SA mostra 6-10 con il fermo a picche e ti permette di restare a livello di uno. Un minore a livello di due è un’alternativa possibile, ma 1SA descrive meglio questa mano bilanciata.',
      },
      {
        q: 'Il compagno apre 1♥ e l’avversario di destra contra. Che cosa mostra il tuo surcontro?',
        options: ['Un contro punitivo di 1♥', '10+ PO', 'Appoggio a cuori', 'Una mano debole'],
        answer: 1,
        explain: 'Il surcontro mostra 10+ PO e dice che la smazzata appartiene alla vostra linea. Con appoggio e meno punti appoggeresti invece il compagno.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'Il colpo in bianco e i rientri',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Come tagliare le comunicazioni dei difensori lisciando con il fermo, e come gestire i propri rientri.',
    body: `
<h3>Il colpo in bianco</h3>
<p>Contro i senza atout i difensori di solito attaccano il loro colore lungo. Se vinci il primo giro con il tuo unico fermo e poi cedi la mano al compagno del difensore, quel giocatore può rinviare il colore e le carte lunghe verranno incassate. Il <strong>colpo in bianco</strong> consiste nel rifiutare di vincere il primo giro (o i primi giri) del loro colore, così che il difensore che può andare in presa non abbia più carte di quel colore da rinviare.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3SA giocato da Sud. Ovest attacca con il ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conta:</strong> ♠A, ♥AK, ♣AKQ: sei vincenti sicure. Le quadri ne danno altre quattro una volta scacciato il ♦A. Devi cedere la mano una volta.</p>
<p><strong>Pericolo:</strong> le picche di Ovest. Se vinci la prima picca ed Est prende con il ♦A, Est rinvia picche e Ovest fa quattro prese a picche: uno sotto.</p>
<p><strong>Il colpo in bianco:</strong> sul ♠K gioca basso. Ovest continua con la ♠Q e tu vinci con l’asso. Est ha risposto due volte e non ha più picche. Ora scaccia il ♦A. Con questa distribuzione lo prende Est, che non ha picche da rinviare, e fai dieci prese. Se il ♦A fosse di Ovest andresti sotto, ma in quel caso non c’era comunque modo di mantenere il contratto: il colpo in bianco è una chance in più che non costa nulla.</p>

<h4>Quante volte lisciare: la regola del 7</h4>
<p>Sottrai da sette il numero di carte del colore che hai tra la tua mano e il morto. Il risultato è il numero di volte in cui lisciare. Qui hai sei picche in linea, quindi 7 − 6 = 1: liscia una volta e vinci il secondo giro. Questo presuppone una divisione 5-2; osserva le carte che cadono e correggi.</p>

<h4>Quando non fare il colpo in bianco</h4>
<ul>
<li>Quando il difensore che può andare in presa non ha comunque più carte del colore, oppure il colore non può essere incassato.</li>
<li>Quando lisciando permetti ai difensori di passare a un colore ancora più pericoloso.</li>
<li>Quando hai due fermi e il difensore pericoloso non può andare in presa due volte. Con A K x spesso puoi vincere la prima presa e avere ancora un fermo quando riprendono la mano.</li>
</ul>
<div class="tip">Il colpo di Bath: con A J x in mano, quando Ovest attacca con il re, gioca basso. Se Ovest continua nel colore, il tuo A J fa due prese; se Ovest cambia, il tuo A J tiene ancora il colore: Ovest non può più muoverlo senza regalarti una presa.</div>

<h3>Gestire i rientri</h3>
<p>Un rientro è una carta che ti permette di vincere una presa in una determinata mano. Molti contratti si perdono non per mancanza di vincenti, ma per mancanza di un modo per raggiungerle.</p>
<ul>
<li><strong>Conta i rientri prima della prima presa.</strong> Decidi quale mano dovrà essere in presa più avanti, e vinci la prima presa di conseguenza.</li>
<li><strong>Sblocca:</strong> gioca prima le carte alte della mano più corta. Con ♦Q3 in mano e ♦AKJ105 al morto (senza altri rientri al morto), incassa prima la Q, poi muovi il 3 verso il morto.</li>
<li><strong>Liscia</strong> il giro che devi cedere finché la mano lunga ha ancora le sue carte alte (vedi la lezione «Affrancare i colori lunghi»).</li>
<li><strong>Sorpassa</strong> per cambiare mano: con la ♥Q singola in mano di fronte a ♥AKJ104 e nessun altro rientro al morto, sorpassa la Q con il K e incassa il colore.</li>
<li><strong>Conserva il rientro tardivo:</strong> quando un colore va affrancato al morto, usa prima i rientri della tua mano e tieni quelli del morto per la fine.</li>
</ul>
<div class="warn">Non vincere una presa nella mano sbagliata «perché tanto non conta». Se non hai ancora capito in quale mano dovrai essere più avanti, è troppo presto per giocare alla presa.</div>
`,
    keyPoints: [
      'Liscia con il fermo così che il difensore che può andare in presa non abbia più carte del loro colore.',
      'Regola del 7: liscia 7 meno le carte del colore che hai in linea (una guida, che presuppone una divisione 5-2).',
      'Non lisciare quando un cambio di colore è più pericoloso o quando hai abbastanza fermi.',
      'Sblocca giocando prima gli onori della mano corta; sorpassa per cambiare mano.',
      'Pianifica i rientri prima della prima presa e vinci la prima presa nella mano giusta.',
    ],
    quiz: [
      {
        q: 'Tu e il morto avete sei carte nel colore che i difensori attaccano contro 3SA, e l’unico fermo è l’asso. Quante volte devi lisciare?',
        options: ['Mai', 'Una volta', 'Due volte', 'Tre volte'],
        answer: 1,
        explain: 'Regola del 7: 7 − 6 = 1. Se il colore è diviso 5-2, vincendo il secondo giro lasci il compagno del difensore lungo senza carte da rinviare.',
      },
      {
        q: 'Qual è lo scopo del colpo in bianco?',
        options: ['Fare una presa in più', 'Esaurire il compagno del difensore lungo così che non possa rinviare il colore', 'Scoprire chi ha gli onori mancanti', 'Risparmiare un rientro al morto'],
        answer: 1,
        explain: 'Se il difensore che va in presa non ha carte del colore lungo, le carte lunghe del compagno sono tagliate fuori e potrebbero non essere mai incassate.',
      },
      {
        q: 'Nella smazzata qui sopra, perché il colpo in bianco non serve se il ♦A è di Ovest?',
        options: ['Perché allora Ovest può incassare le picche rimaste', 'Perché le quadri si bloccherebbero', 'Perché Est potrebbe tagliare', 'Serve anche in quel caso'],
        answer: 0,
        explain: 'Il colpo in bianco esaurisce solo Est. Se Ovest, che ha le picche lunghe, va in presa con il ♦A, incassa le picche affrancate. Nessuna linea di gioco può impedirlo; il colpo in bianco vince ogni volta che il ♦A è di Est.',
      },
      {
        q: 'Hai ♦Q3 in mano e ♦AKJ105 al morto, che non ha altri rientri. Come giochi le quadri?',
        options: ['Prima il 3 per l’asso', 'Prima incasso la Q, poi muovo il 3 verso il morto', 'Muovo il fante dal morto', 'Liscio il primo giro'],
        answer: 1,
        explain: 'Gioca prima la carta alta della mano corta. Dopo la Q, il 3 ti porta al morto e lì incassi il resto del colore.',
      },
      {
        q: 'Ovest attacca con il ♣K contro 3SA e tu hai ♣AJ4 in mano. Che cos’è il colpo di Bath?',
        options: ['Vincere subito con l’asso', 'Giocare basso, così che una continuazione a fiori finisca nel tuo A J', 'Giocare il fante', 'Scartare dal morto'],
        answer: 1,
        explain: 'Lisciando inviti Ovest a continuare il colore verso il tuo A J, che ti dà due prese, e se Ovest cambia colore tieni ancora il colore.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'La gestione delle atout',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Quando battere subito atout, quando rimandare, come sfruttare i tagli nella mano corta e come mantenere il controllo del colore d’atout.',
    body: `
<h3>La regola: battere atout</h3>
<p>Quando giochi un contratto a colore, le atout dei difensori sono una minaccia per le tue vincenti: ogni vincente laterale che incassi potrebbe essere tagliata. Per questo il piano normale è <strong>battere atout presto</strong>, contando le atout avversarie man mano che cadono. Se ne hanno cinque e rispondono entrambi a due giri, ne resta fuori una; se un difensore non risponde, conosci la divisione esatta.</p>

<h3>Perché rimandare il battere atout</h3>
<ol>
<li><strong>Ti servono le atout del morto per tagliare.</strong> Tagliare le perdenti nella mano corta in atout crea prese in più. Se battere atout consumerebbe le atout del morto, fai prima i tagli (vedi la smazzata a 4♠ nella lezione «Il piano di gioco»).</li>
<li><strong>Devi scartare delle perdenti in fretta.</strong> Se i difensori hanno un onore d’atout e andranno in presa quando giochi atout, assicurati che non possano poi incassare abbastanza prese da batterti.</li>
<li><strong>Ti servono le atout come rientri</strong>, per esempio per raggiungere un colore laterale lungo o per ripetere delle impasse.</li>
<li><strong>Prevedi un doppio taglio</strong>, usando separatamente le atout delle due mani.</li>
</ol>

<h3>Scartare prima di battere atout</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ giocato da Sud. Ovest attacca con il ♦K."></div>
<p><strong>Conta le perdenti:</strong> il ♠A, due quadri una volta scacciato il ♦A alla prima presa, e il ♣A (il terzo giro di fiori si può tagliare al morto). Quattro perdenti.</p>
<p>Se giochi subito atout, il difensore che vince con il ♠A incassa due prese a quadri, e con il ♣A ancora da perdere vai sotto. Invece vinci con il ♦A e gioca subito ♥A, ♥K e ♥Q, scartando una carta di quadri dalla mano sulla terza carta di cuori. Solo dopo muovi atout. Perdi il ♠A, una quadri e il ♣A.</p>
<p>Il rischio è che qualcuno tagli la terza carta di cuori. Succede solo se i cuori sono divisi 5-2 o peggio <em>e</em> il difensore con il doubleton ha un’atout per tagliare: un rischio molto più piccolo della sconfitta sicura che ti aspetta battendo prima atout.</p>
<div class="tip">Chiediti: «Quando cedo la mano in atout, quante prese possono incassare i difensori?» Se sono troppe, liberati prima di una perdente.</div>

<h3>Il taglio: la mano corta guadagna, quella lunga no</h3>
<p>Con cinque atout in mano e tre al morto, le tue cinque atout faranno comunque cinque prese. Un taglio in mano ne consuma solo una. Un taglio al morto è una presa in più, perché le piccole atout del morto altrimenti non vincerebbero mai una presa. Pianifica i tagli nella mano <strong>corta</strong> in atout.</p>
<p>Tagliare nella mano lunga serve per altri motivi: per affrancare un colore lungo del morto tagliando le carte avversarie, o per accorciare le tue atout in vista di una messa in presa o di un colpo d’atout.</p>

<h3>Il doppio taglio</h3>
<p>Quando entrambe le mani hanno un colore corto, puoi tagliare le perdenti di una mano con le atout dell’altra, avanti e indietro, senza battere atout. Le regole del doppio taglio:</p>
<ul>
<li><strong>Incassa prima le vincenti laterali.</strong> Altrimenti durante il doppio taglio i difensori scarteranno in quei colori e più tardi taglieranno le tue vincenti.</li>
<li>Taglia alto quando è possibile un surtaglio, così i difensori non fanno presa a buon mercato con le loro piccole atout.</li>
<li>Conta: il doppio taglio deve produrre esattamente le prese che ti servono.</li>
</ul>

<h3>Mantenere il controllo</h3>
<p>Se i difensori continuano a giocare un colore che devi tagliare nella mano lunga, puoi ritrovarti con meno atout di un difensore: hai perso il <strong>controllo delle atout</strong>, e le atout rimaste a quel difensore fanno presa mentre il colore lungo del compagno viene incassato. Le difese contro l’accorciamento:</p>
<ul>
<li>Scarta una perdente invece di tagliare (cedi una presa che avresti perso comunque), così il successivo accorciamento arriva quando può tagliare il morto.</li>
<li>Togli presto le piccole atout avversarie, anche lasciando fuori la loro atout più alta, così il successivo accorciamento non ti costa il controllo.</li>
<li>Preferisci un contratto in cui sia la mano corta in atout a subire l’accorciamento.</li>
</ul>
<div class="warn">Non sprecare due tue atout per toglierne una loro quando la loro ultima atout è la più alta. È comunque una presa per loro: lascia che la facciano quando vogliono, e usa le tue atout per controllare il gioco.</div>
`,
    keyPoints: [
      'Di norma batti atout presto, contando le atout avversarie man mano che cadono.',
      'Rimanda quando ti servono le atout del morto per tagliare, devi scartare perdenti prima di cedere la mano o ti servono rientri in atout.',
      'I tagli nella mano corta in atout fanno guadagnare prese; quelli nella mano lunga di solito no.',
      'Prima di un doppio taglio incassa le vincenti laterali.',
      'Non spendere due atout per togliere l’atout più alta degli avversari.',
    ],
    quiz: [
      {
        q: 'Quando è sbagliato battere subito atout?',
        options: ['Mai: si batte sempre atout per prima cosa', 'Quando ti servono le atout del morto per tagliare le tue perdenti', 'Quando gli avversari hanno cinque atout', 'Quando hai nove atout'],
        answer: 1,
        explain: 'Battere atout consumerebbe sia le atout avversarie sia quelle del morto. Fai prima i tagli nella mano corta, poi togli le restanti.',
      },
      {
        q: 'Nella smazzata a 4♠ qui sopra, che cosa deve fare il giocante dopo aver vinto con il ♦A?',
        options: ['Muovere il ♠K', 'Incassare tre cuori, scartando una quadri', 'Muovere fiori verso la ♣Q', 'Lisciare una quadri'],
        answer: 1,
        explain: 'I difensori hanno il ♠A e due prese a quadri pronte. Scarta prima una quadri sulla terza carta di cuori, e solo dopo gioca atout.',
      },
      {
        q: 'Agli avversari resta un’atout: l’asso. Tu hai molte atout e vincenti. Che cosa fai di solito?',
        options: ['Giochi atout per far uscire subito l’asso', 'La lasci fuori e giochi i colori laterali: è comunque una loro presa', 'Tagli qualcosa al morto', 'Concedi il resto'],
        answer: 1,
        explain: 'Toglierla costa due tue atout (una per mano) per una presa che faranno comunque. Lascia che taglino con quella se vogliono; le tue atout restano in controllo.',
      },
      {
        q: 'Stai per iniziare un doppio taglio. Che cosa fai prima?',
        options: ['Batti due giri d’atout', 'Incassi le vincenti laterali', 'Tagli con le atout più basse', 'Cedi una presa'],
        answer: 1,
        explain: 'Durante il doppio taglio i difensori scartano. Se scartano in un colore laterale che non hai incassato, più tardi possono tagliare le tue vincenti.',
      },
      {
        q: 'Hai cinque atout in mano e tre al morto. Quale taglio crea una presa in più?',
        options: ['Tagliare in mano', 'Tagliare al morto', 'Entrambi', 'Nessuno dei due'],
        answer: 1,
        explain: 'Le tue cinque atout fanno cinque prese con o senza tagli. Le tre piccole atout del morto fanno presa solo tagliando.',
      },
    ],
  },
  {
    id: 'defensive-signals',
    title: 'I segnali difensivi',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Come i difensori usano l’altezza delle carte che giocano per mostrare gradimento, conto e preferenza di colore.',
    body: `
<h3>Parlare con le carte</h3>
<p>I difensori non vedono le mani l’uno dell’altro, ma possono scegliere legalmente <em>quale</em> carta giocare. Quando non cerchi di vincere la presa, la cartina che giochi trasmette un messaggio. I segnali standard sono di tre tipi; è la situazione a dire al compagno quale stai dando.</p>
<table>
<thead><tr><th>Segnale</th><th>Quando</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Gradimento</td><td>Il compagno muove un colore; il tuo primo scarto</td><td>Alta incoraggia, bassa scoraggia</td></tr>
<tr><td>Conto</td><td>Il giocante muove un colore laterale (niente conto in atout)</td><td>Alto-basso = numero pari, basso-alto = dispari</td></tr>
<tr><td>Preferenza di colore</td><td>Quando muovi un colore perché il compagno tagli</td><td>Una carta alta chiede il più alto degli altri colori, una bassa il più basso; una carta intermedia: nessuna preferenza</td></tr>
</tbody>
</table>

<h3>Il gradimento</h3>
<p>Contro 4♥ il compagno attacca con il ♠A (da AK) e il morto ha ♠8 6 4.</p>
<ul>
<li>Con ♠Q 9 3 gioca il 9: il colore ti piace, perché la tua donna vincerà il terzo giro.</li>
<li>Con ♠7 5 2 gioca il 2: a picche non hai niente, quindi il compagno deve pensare a un cambio.</li>
<li>Con il doubleton ♠9 3 gioca il 9 e poi il 3: l’alto-basso chiede al compagno di continuare, e taglierai il terzo giro.</li>
</ul>
<p>Gli scarti funzionano allo stesso modo: il primo scarto mostra il gradimento. Scartare il ♣9 dice «mi piacciono i fiori»; scartare il ♦2 dice «non voglio quadri». Scarta solo da un colore di cui puoi fare a meno. Se nel colore che vuoi non hai da scartare una cartina dal 6 in su, scarta piuttosto la carta più bassa di un colore che non vuoi.</p>

<h3>Il conto</h3>
<p>Quando il giocante muove un colore, mostra quante carte ne hai: alto-basso con un numero pari (due o quattro), prima la più bassa con un numero dispari (tre). Il conto permette al compagno di ricostruire la distribuzione del giocante e, soprattutto, gli dice quando prendere con l’asso.</p>
<table>
<thead><tr><th>Posizione</th><th>Quadri</th></tr></thead>
<tbody>
<tr><td>Nord (morto, senza rientri esterni)</td><td>K Q J 10 5</td></tr>
<tr><td>Est (tu)</td><td>A 7 3</td></tr>
<tr><td>Ovest e Sud</td><td>9 8 6 4 2 tra loro</td></tr>
</tbody>
</table>
<p>Il giocante muove quadri verso il morto. Vuoi prendere con l’asso al giro in cui il giocante gioca la sua <em>ultima</em> carta di quadri, tagliandolo fuori dal resto del colore del morto. Se il compagno comincia con il 9 (alta: numero pari, qui due), il giocante ne ha tre: liscia due volte e prendi al terzo giro. Se il compagno gioca prima il 4 (bassa: dispari, qui tre), il giocante ne ha due: prendi al secondo giro. Senza il conto del compagno tireresti a indovinare.</p>

<h3>La preferenza di colore</h3>
<p>A volte gradimento e conto non significano niente, e allora l’altezza della carta indica un altro colore. Il caso classico è il taglio. L’atout è picche e tu muovi cuori perché il compagno tagli. Gli altri colori sono quadri e fiori. Muovi una carta di cuori <strong>alta</strong> per chiedere il ritorno a quadri (il più alto dei due) e una <strong>bassa</strong> per chiedere fiori. Se hai il ♦A, muovi la tua carta di cuori più alta; il compagno taglia, rinvia quadri per il tuo asso e tu gli dai un secondo taglio.</p>
<p>Senza preferenze, muovi una carta intermedia. Alcune coppie usano la preferenza di colore anche quando rinviano il colore del compagno; qui i bot la usano solo quando danno un taglio.</p>

<h3>Buone abitudini</h3>
<ul>
<li>Sull’uscita del compagno segnala prima il gradimento; sull’uscita del giocante il conto; usa la preferenza di colore solo quando la situazione è chiara.</li>
<li>Non segnalare con una carta che più tardi potrebbe fare presa. Da Q J 10 9 7 può bastare il 7 per incoraggiare.</li>
<li>Segnala con un ritmo regolare: ragiona quando scende il morto, non a metà di una presa.</li>
<li>Non dare il conto quando può aiutare solo il giocante, per esempio quando il giocante deve indovinare come giocare un colore e il conto non servirebbe al compagno. Qui i bot danno sempre il conto quando il giocante muove un colore laterale, così puoi esercitarti a leggerlo.</li>
</ul>
<div class="warn">Un segnale è un’informazione, non un ordine. Il compagno la combina con ciò che vede al morto e nella propria mano, e può avere buoni motivi per fare altro.</div>
`,
    keyPoints: [
      'Gradimento sull’uscita del compagno e sul tuo primo scarto: alta incoraggia, bassa scoraggia.',
      'Conto quando il giocante muove un colore laterale: alto-basso mostra un numero pari, basso-alto un numero dispari.',
      'Usa il conto per sapere quando prendere con l’asso contro un colore lungo del morto senza rientri.',
      'Preferenza di colore: una carta alta chiede il più alto degli altri colori, una bassa il più basso; una carta intermedia non mostra preferenze.',
      'Non sprecare mai una carta che può fare presa solo per segnalare.',
    ],
    quiz: [
      {
        q: 'Il compagno attacca con il ♠A (da AK) contro 4♥. Il morto ha ♠8 6 4. Tu hai ♠Q 9 3. Quale carta giochi?',
        options: ['♠Q', '♠9', '♠3', 'Non ha importanza'],
        answer: 1,
        explain: 'Il 9 incoraggia. Il compagno continua con il re, e la tua donna vince il terzo giro. Giocando il 3 diresti al compagno che a picche non hai niente.',
      },
      {
        q: 'Il giocante muove un colore in cui hai 8 3. Quale carta giochi per prima per mostrare il conto?',
        options: ['L’8', 'Il 3', 'Una qualsiasi', 'Nessuna: il conto non si dà mai'],
        answer: 0,
        explain: 'L’alto-basso mostra un numero pari. Gioca l’8 ora e il 3 la volta successiva; il compagno saprà che avevi due carte (o quattro).',
      },
      {
        q: 'Il tuo primo scarto, con i segnali standard, è il ♣2. Che cosa dice?',
        options: ['Mi piacciono i fiori', 'Non voglio fiori', 'Ho due fiori', 'Gioca quadri'],
        answer: 1,
        explain: 'Il primo scarto mostra il gradimento. Una carta bassa scoraggia il colore scartato.',
      },
      {
        q: 'Il morto ha ♦K Q J 10 5 e nessun rientro esterno; tu hai ♦A 7 3. Il giocante muove quadri e il compagno gioca il 9 e poi il 4. Quando prendi con l’asso?',
        options: ['Al primo giro', 'Al secondo giro', 'Al terzo giro', 'Mai'],
        answer: 2,
        explain: 'L’alto-basso del compagno mostra un numero pari, due, quindi il giocante ne aveva tre. Prendi con l’asso al terzo giro, quando il giocante non ha più quadri per raggiungere il morto.',
      },
      {
        q: 'L’atout è picche. Muovi cuori perché il compagno tagli e vuoi il ritorno a quadri. Da ♥9 8 2, quale carta di cuori giochi?',
        options: ['♥9', '♥8', '♥2', 'Non ha importanza'],
        answer: 0,
        explain: 'È una situazione di preferenza di colore. Una carta alta chiede il più alto dei colori laterali rimasti (quadri invece di fiori).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'Il contro sputnik',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Come il rispondente usa il contro dopo un intervento per mostrare la nobile non dichiarata, e come il passo punitivo e il contro di riapertura lavorano insieme.',
    body: `
<h3>Il problema</h3>
<p>Il compagno apre 1♦ e l’avversario di destra interviene 1♠. Hai quattro cuori e 9 PO. 2♥ prometterebbe cinque cuori e 10+ punti, quindi non puoi dichiararlo, ma non vuoi perdere un possibile fit a cuori. La soluzione è il <strong>contro negativo</strong>, che in Italia si chiama <strong>sputnik</strong>: dopo l’apertura del compagno e un intervento fino a 2♠ compreso, il contro del rispondente è informativo e mostra la nobile (o le nobili) non dichiarata.</p>

<h3>Che cosa mostra il contro</h3>
<p>Forza: 6+ PO quando l’intervento è a livello di uno, 8+ quando è a livello di due. Distribuzione:</p>
<table>
<thead><tr><th>Licita</th><th>Il contro del rispondente mostra</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Entrambe le nobili (di solito quattro carte in ciascuna)</td></tr>
<tr><td>1♣ o 1♦ – (1♥) – X</td><td>Esattamente quattro picche (1♠ ne mostrerebbe cinque o più)</td></tr>
<tr><td>1♣ o 1♦ – (1♠) – X</td><td>Quattro o più cuori (2♥ ne mostrerebbe cinque e 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>I minori, o valori senza una dichiarazione chiara</td></tr>
<tr><td>1♥ – (2♣ o 2♦) – X</td><td>Quattro picche, 8+ PO</td></tr>
<tr><td>1♠ – (2♣ o 2♦) – X</td><td>Quattro o più cuori, 8+ PO</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: contro"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: contro"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: contro"></div>
<p>La prima mano mostra le sue quattro cuori. La seconda ha esattamente quattro picche e 7 PO: contro invece di 1♠. La terza mostra quattro picche e forza sufficiente per il livello di due.</p>

<h3>La ridichiarazione dell’apertore dopo lo sputnik</h3>
<ul>
<li>Con quattro carte nella nobile mostrata dal compagno, dichiarala: al livello più economico con un minimo, oppure a salto con valori in più (circa 16-18).</li>
<li>Altrimenti fai la tua ridichiarazione normale: ripeti un colore sesto, dichiara un secondo colore, o dichiara senza atout con il fermo nel colore dell’interveniente.</li>
<li>Con una tenuta lunga e forte nel colore dell’interveniente, puoi passare sul contro per punire.</li>
</ul>

<h3>Il passo punitivo e il contro di riapertura</h3>
<p>Poiché il contro del rispondente è informativo, il rispondente non può contrare per punire quando ha una tenuta forte nel colore dell’interveniente. Il rispondente invece <strong>passa</strong> e aspetta. Quando l’apertore è corto nel colore dell’intervento deve riaprire con un contro, che il rispondente trasforma in punitivo passando.</p>
<div class="hand" data-cards="S:K5 H:73 D:AJ84 C:KQ1093" data-label="1♥ – (2♣) – ?: passo"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Apertore (Nord): contro di riapertura"></div>
<p>Le ♣KQ1093 di Sud stanno sopra i fiori di Est, e 2♣ contrato probabilmente andrà sotto di parecchie prese. Nord, con un singolo a fiori, riapre con un contro perché il passo del compagno potrebbe nascondere proprio una mano di questo tipo. Con lunghezza nel colore dell’interveniente l’apertore deve essere più prudente nel riaprire: in quel caso è improbabile che il compagno stia aspettando per punire.</p>
<div class="tip">Dopo un intervento il nuovo colore del rispondente resta naturale e forzante, ma mostra cinque carte, dato che per mostrarne quattro c’era lo sputnik.</div>
<div class="warn">Lo sputnik non è un contro punitivo. Se vuoi punire l’intervento, passa e spera che il compagno riapra.</div>
`,
    keyPoints: [
      'Dopo l’apertura del compagno e l’intervento dell’avversario di destra (fino a 2♠), il contro del rispondente è informativo (sputnik).',
      'Mostra la nobile o le nobili non dichiarate: 6+ PO a livello di uno, 8+ a livello di due.',
      '1♣/1♦ – (1♥) – X mostra esattamente quattro picche; 1♠ ne mostrerebbe cinque.',
      'Con una tenuta lunga e forte nel colore dell’interveniente il rispondente passa; l’apertore riapre con un contro quando è corto in quel colore.',
      'L’apertore ridichiara in modo naturale, saltando nella nobile del compagno con valori in più.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Hai ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 PO).',
        options: ['2♥', 'Contro', '1SA', 'Passo'],
        answer: 1,
        explain: '2♥ prometterebbe cinque cuori e 10+ punti. Lo sputnik mostra quattro o più cuori con 6+ e tiene aperta la strada al fit a cuori.',
      },
      {
        q: '1♣ – (1♥) – ? Hai ♠KJ752 ♥84 ♦Q63 ♣J95 (7 PO).',
        options: ['Contro', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Dopo un intervento di 1♥ il contro mostra esattamente quattro picche, quindi con cinque picche dichiara 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Hai ♠K5 ♥73 ♦AJ84 ♣KQ1093 (13 PO).',
        options: ['Contro', 'Passo', '3SA', '2SA'],
        answer: 1,
        explain: 'Vorresti contrare per punire, ma il tuo contro sarebbe uno sputnik. Passa e aspettati che il compagno riapra con un contro se è corto a fiori; su quel contro passerai.',
      },
      {
        q: 'Hai aperto 1♥ con ♠A863 ♥AQJ74 ♦K52 ♣6. L’avversario di sinistra è intervenuto 2♣ e dopo due passo tocca di nuovo a te. Che cosa fai?',
        options: ['Passo', 'Contro', '2♥', '2♠'],
        answer: 1,
        explain: 'Con un singolo nel colore dell’interveniente riapri con un contro. Il compagno può aver passato con una forte tenuta a fiori, e passerà per punire; altrimenti dichiarerà il suo colore migliore.',
      },
      {
        q: 'Fino a quale livello d’intervento il contro del rispondente resta uno sputnik (informativo) in questo sistema?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Lo sputnik vale fino a 2♠. Oltre, per accordo il contro è spesso ancora informativo, ma questo sistema lo definisce fino a 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Riconoscere lo slam e il Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Come capire quando lo slam è possibile, e come usare il Blackwood per essere sicuri di non avere due assi mancanti.',
    body: `
<h3>Perché gli slam contano</h3>
<p>Un piccolo slam vale 500 punti in più in prima e 750 in zona; un grande slam 1000 o 1500. Dichiarare uno slam mantenibile che altri non dichiarano vale molto; dichiararne uno che va sotto costa più o meno altrettanto. Servono due cose: abbastanza <strong>prese</strong> (forza, fit e distribuzione) e abbastanza <strong>controlli</strong> (gli avversari non devono poter incassare due prese rapide).</p>

<h3>I segnali dello slam</h3>
<ul>
<li><strong>Forza complessiva:</strong> circa 33 punti per il piccolo slam e 37 per il grande, con mani bilanciate. Con un buon fit d’atout e distribuzione ne bastano meno.</li>
<li><strong>Il compagno mostra valori in più</strong> mentre anche tu hai una buona mano: un cambio di colore a salto, un rovescio, un 2♣ forte, un appoggio a salto sulla tua apertura, un appoggio con il 2SA Jacoby di fronte a una mano con extra.</li>
<li><strong>Un grande fit</strong> (nove o dieci atout) più una fonte di prese come un colore laterale lungo.</li>
<li><strong>Controlli:</strong> assi, re e corte nei colori laterali.</li>
</ul>

<h3>Il piano</h3>
<ol>
<li>Concorda un colore d’atout (o decidi per il senza atout).</li>
<li>Verifica che la forza complessiva sia sufficiente.</li>
<li>Controlla i controlli, di solito con il Blackwood.</li>
<li>Dichiara lo slam, o fermati a livello di cinque.</li>
</ol>

<h3>Il Blackwood</h3>
<p>Una volta concordato un colore, la dichiarazione di 4SA chiede al compagno quanti assi ha:</p>
<table>
<thead><tr><th>Risposta</th><th>Assi</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 o 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>La licita chiarisce sempre se 5♣ significa 0 o 4. Se mancano due assi, chiudi a cinque nel colore d’atout; il compagno deve passare. Se ne manca uno, dichiara il piccolo slam. Se non ne manca nessuno e ti interessa il grande slam, dichiara <strong>5SA</strong> per chiedere i re: 6♣ = 0 o 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. Il 5SA promette che la coppia ha tutti e quattro gli assi.</p>
<p>Chi dichiara il Blackwood è il capitano: chi risponde si limita a rispondere e poi accetta la decisione.</p>

<h3>La Roman Key Card Blackwood</h3>
<p>Oggi la maggior parte dei giocatori usa una versione perfezionata, la <strong>Roman Key Card Blackwood</strong>, ed è quella che i bot di questa app giocano di default. Conta cinque <strong>carte chiave</strong>, i quattro assi e il re d’atout, e dice anche qualcosa sulla donna d’atout:</p>
<table>
<thead><tr><th>Risposta</th><th>Carte chiave</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 o 4</td></tr>
<tr><td>5♦</td><td>0 o 3</td></tr>
<tr><td>5♥</td><td>2, senza la donna d’atout</td></tr>
<tr><td>5♠</td><td>2, con la donna d’atout</td></tr>
</tbody>
</table>
<p>Le decisioni funzionano allo stesso modo: con due carte chiave mancanti fermati a cinque, con una mancante dichiara il piccolo slam. La lezione «Roman Key Card Blackwood» la tratta per intero, compreso come chiedere la donna d’atout.</p>

<h3>Un esempio</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Nord apre 1♠ con 18 PO. Sud, con 15 PO e quattro picche, dichiara 2SA, l’appoggio Jacoby: forzante manche con appoggio. Il 3♠ di Nord è il modo standard per mostrare valori in più senza singoli né chicane. Ora Sud può contare circa 33 punti in linea e un fit di nove carte, quindi lo slam è probabile. 4SA chiede gli assi; 5♥ ne mostra due. Con il ♥A in mano, Sud sa che manca un solo asso e dichiara 6♠.</p>
<p>Con la Roman Key Card Blackwood, come giocano i bot, Nord risponde 5♦: tre carte chiave, il ♠A, il ♦A e il ♠K. Sud, che ha solo il ♥A, capisce che sono tre e non zero, quindi manca una carta chiave; Sud ha la ♠Q, e si arriva a 6♠ allo stesso modo.</p>
<p>Nel gioco l’unica perdente è il ♣A: il giocante batte atout, incassa i cuori e gioca ♦A, quadri per il re e la ♦Q del morto, scartando una carta di fiori di Nord.</p>

<h3>I limiti del Blackwood</h3>
<p>Il Blackwood conta gli assi; non ti dice <em>quali</em> assi, né se un colore laterale ha due perdenti rapide. Non usarlo:</p>
<ul>
<li>con una chicane (l’asso del compagno potrebbe essere nel colore della tua chicane, dove è sprecato);</li>
<li>con due cartine in un colore non dichiarato (il compagno potrebbe non avere né l’asso né il re di quel colore);</li>
<li>quando una risposta a livello di cinque potrebbe portarti oltre il tuo contratto sicuro, come succede spesso con atout fiori.</li>
</ul>
<p>In questi casi lo strumento giusto sono le cue bid di controllo; vedi la lezione «Controlli e cue bid: quando non usare il Blackwood».</p>
<div class="warn">4SA non è sempre Blackwood. Quando non è stato concordato nessun colore e l’ultima dichiarazione del compagno era un senza atout naturale (1SA – 4SA, 2SA – 4SA), 4SA è quantitativo: invita a 6SA. Per chiedere gli assi sul senza atout del compagno usa il Gerber, 4♣.</div>
`,
    keyPoints: [
      'Il piccolo slam richiede circa 33 punti in linea (il grande circa 37); fit e distribuzione possono ridurre la soglia.',
      'Prima stabilisci l’atout e la forza, poi controlla i controlli.',
      'Risposte del Blackwood semplice: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; poi 5SA chiede i re. I bot giocano la Roman Key Card Blackwood: 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 e la donna d’atout.',
      'Due assi mancanti: fermati a cinque nel colore concordato.',
      'Non usare il Blackwood con una chicane o con due perdenti rapide in un colore non dichiarato.',
    ],
    quiz: [
      {
        q: 'Il compagno dichiara 4SA (Blackwood semplice) e tu hai un asso. Che cosa rispondi?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ mostra 0 o 4, 5♦ uno, 5♥ due, 5♠ tre.',
      },
      {
        q: 'Dichiari 4SA e il compagno risponde 5♥ (due assi). Tu hai gli altri due assi. E ora?',
        options: ['Chiudo a cinque nel colore d’atout', 'Dichiaro il piccolo slam, o 5SA per chiedere i re se è possibile il grande', 'Passo su 5♥', 'Dichiaro 6SA qualunque sia il colore'],
        answer: 1,
        explain: 'Non manca nessun asso, quindi il piccolo slam è al sicuro da due assi rapidi. Se le mani possono fare tredici prese, 5SA chiede i re e dice al compagno che la coppia ha tutti gli assi.',
      },
      {
        q: 'L’accordo è a picche. Dichiari 4SA e il compagno risponde 5♦ (un asso). Tu hai un asso. Che cosa fai?',
        options: ['Dichiaro 6♠', 'Dichiaro 5♠', 'Dichiaro 5SA', 'Passo'],
        answer: 1,
        explain: 'Mancano due assi, quindi gli avversari potrebbero incassare subito due prese. Chiudi a 5♠; il compagno deve passare.',
      },
      {
        q: 'Due mani bilanciate con 33 PO in linea e nessun fit d’atout. Quale contratto?',
        options: ['3SA', '4SA', '6SA', '7SA'],
        answer: 2,
        explain: 'Circa 33 PO in linea danno buone probabilità di fare dodici prese a senza atout. Per il grande ne servirebbero 37.',
      },
      {
        q: 'Il compagno risponde 5♣ al tuo 4SA (Blackwood semplice). Che cosa mostra?',
        options: ['Fiori', 'Nessun asso o tutti e quattro', 'Un asso', 'Tre assi'],
        answer: 1,
        explain: '5♣ significa 0 o 4 assi. La licita o la tua mano chiariranno quale: se hai tu un asso, il compagno non può averne quattro.',
      },
    ],
  },
  {
    id: 'gerber-and-quantitative',
    title: 'Il Gerber e il 4SA quantitativo',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Come esplorare lo slam dopo un’apertura a senza atout: chiedere gli assi con il Gerber e invitare con il 4SA quantitativo.',
    body: `
<h3>Lo slam dopo un’apertura a senza atout</h3>
<p>Quando il compagno apre 1SA (15-17) o 2SA (20-21), conosci la sua forza entro due o tre punti, quindi spesso puoi sommare i punti e decidere da solo. Ti aiutano due strumenti:</p>
<ul>
<li><strong>4SA quantitativo:</strong> «compagno, dichiara 6SA se sei al massimo della tua fascia».</li>
<li><strong>4♣ Gerber:</strong> «compagno, quanti assi hai?»</li>
</ul>

<h3>Il 4SA quantitativo</h3>
<p>L’appoggio diretto di 1SA a 4SA non è Blackwood. Mostra 16-17 punti, quindi il totale è 31-34, al limite dei 33 necessari per lo slam. L’apertore passa con un minimo (15) e dichiara 6SA con un massimo (17); con 16 decide a giudizio, accettando con una buona quinta o buone carte intermedie.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Il compagno ha aperto 1SA: dichiara 4SA"></div>
<p>16 PO, bilanciata. Dichiara 4SA. Con 18-21 dichiareresti direttamente 6SA, perché anche un’apertura minima porta il totale a 33; con 22 o più dichiara 7SA, perché anche un minimo porta il totale a 37.</p>
<p>Su 2SA (20-21), 4SA mostra 11-12 e chiede all’apertore di dichiarare 6SA con un massimo.</p>
<table>
<thead><tr><th>Rispondente dopo</th><th>3SA</th><th>4SA (invito)</th><th>6SA</th><th>7SA</th></tr></thead>
<tbody>
<tr><td>1SA (15-17)</td><td>10-15</td><td>16-17</td><td>18-21</td><td>22+</td></tr>
<tr><td>2SA (20-21)</td><td>4-10</td><td>11-12</td><td>13-16</td><td>17+</td></tr>
</tbody>
</table>

<h3>Il Gerber</h3>
<p>Un salto a 4♣ direttamente sull’apertura di 1SA o 2SA del compagno (o su 2♣ – 2♦ – 2SA) chiede gli assi:</p>
<table>
<thead><tr><th>Risposta a 4♣</th><th>Assi</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 o 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4SA</td><td>3</td></tr>
</tbody>
</table>
<p>Dopo la risposta, 5♣ di chi ha chiesto domanda i re con lo stesso schema (5♦ = 0 o 4, 5♥ = 1, 5♠ = 2, 5SA = 3). Qualsiasi altra dichiarazione sceglie il contratto; 4SA di chi ha chiesto è una chiusura, e se la risposta del compagno era 4SA, chi ha chiesto può semplicemente passare.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Il compagno ha aperto 1SA: dichiara 4♣"></div>
<p>16 PO (31-33 in totale) e sei picche forti: la mano è ricca di prese, ma non hai assi. La domanda riguarda gli assi, quindi dichiara 4♣. Su 4♠ (due assi) passa e gioca 4♠. Su 4SA (tre assi) dichiara 6♠.</p>
<p>Con i transfer Texas c’è un’altra strada: 4♥, transfer a picche, e poi 4SA, Roman Key Card Blackwood, che conta anche il re e la donna di picche.</p>

<h3>Quale usare?</h3>
<ul>
<li>Usa il 4SA quantitativo quando la domanda è la <strong>forza</strong>: non sei sicuro che i punti in linea arrivino a 33.</li>
<li>Usa il Gerber quando la domanda sono gli <strong>assi</strong>: con una mano ricca di prese (sbilanciata), in cui la forza non è il problema. Con mani bilanciate e 33+ PO in linea non possono mancare due assi, quindi basta contare i punti.</li>
<li>Con un colore lungo di fronte a 1SA, fai prima il transfer (o dichiara in modo naturale) per fissare il colore, poi usa gli strumenti da slam. Quando hai un colore lungo e forte, contare le prese conta più che contare i punti.</li>
</ul>
<div class="tip">Conta fino a 33 per il piccolo slam a senza atout e fino a 37 per il grande. Con una fonte di prese, come un colore quinto o sesto solido, ne serve qualcuno in meno.</div>
<div class="warn">Non confondere 1SA – 4SA (quantitativo) con il Blackwood. Se vuoi sapere gli assi di fronte al senza atout del compagno, dichiara 4♣.</div>
`,
    keyPoints: [
      '1SA – 4SA = 16-17, quantitativo: l’apertore dichiara 6SA con un massimo.',
      '2SA – 4SA = 11-12, quantitativo.',
      'Gerber 4♣ su 1SA o 2SA: 4♦ 0/4, 4♥ 1, 4♠ 2, 4SA 3; poi 5♣ chiede i re.',
      'Usa il 4SA quantitativo quando la domanda è la forza, il Gerber quando sono gli assi.',
      'Gli slam a senza atout richiedono circa 33 punti (piccolo) o 37 (grande).',
    ],
    quiz: [
      {
        q: 'Il compagno apre 1SA e tu dichiari 4♣ (Gerber). Il compagno ha un asso. Che cosa risponde?',
        options: ['4♦', '4♥', '4♠', '4SA'],
        answer: 1,
        explain: 'Le risposte al Gerber salgono a gradini da 4♦: 4♦ = 0 o 4, 4♥ = 1, 4♠ = 2, 4SA = 3.',
      },
      {
        q: 'Che cosa significa 1SA – 4SA?',
        options: ['Blackwood', 'Un invito quantitativo a 6SA con 16-17', 'Una chiusura', 'Gerber'],
        answer: 1,
        explain: 'Non è stato concordato nessun colore e il compagno ha dichiarato senza atout naturale, quindi 4SA invita allo slam. L’apertore dichiara 6SA con un massimo e passa con un minimo.',
      },
      {
        q: 'Hai aperto 1SA con 17 PO. Il compagno appoggia a 4SA. Che cosa fai?',
        options: ['Passo', 'Dichiaro 5♥ per mostrare due assi', 'Dichiaro 6SA', 'Dichiaro 5SA'],
        answer: 2,
        explain: '17 è il massimo della fascia: 17 + 16-17 = 33-34. Accetta l’invito con 6SA.',
      },
      {
        q: 'Il compagno apre 2SA. Hai una bilanciata da 12 PO. Che cosa dichiari?',
        options: ['3SA', '4SA', '6SA', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Invita con 4SA (11-12); il compagno dichiara 6SA con 21.',
      },
      {
        q: '1SA – 4♣ – 4♠ (due assi). Tu non hai assi. Che cosa dichiari?',
        options: ['6SA', '4SA', '5♣', '7SA'],
        answer: 1,
        explain: 'Mancano due assi, quindi lo slam potrebbe perdere le prime due prese. 4SA dopo la risposta al Gerber è una chiusura.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'La regola dell’11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Come l’attacco di quarta migliore permette sia ai difensori sia al giocante di calcolare quante carte più alte ha ciascuna mano.',
    body: `
<h3>La regola</h3>
<p>Quando il compagno attacca con la sua <strong>quarta migliore</strong>, sottrai il suo valore da 11. Il risultato è il numero di carte più alte di quella attaccata che si trovano nelle <em>altre tre mani</em>: il morto, tu e il giocante. Vedi il morto e la tua mano, quindi puoi calcolare quante carte più alte ha il giocante.</p>

<h3>Perché funziona</h3>
<p>Per una carta di valore r ci sono 14 − r carte più alte (l’asso vale 14). Se l’attacco è di quarta migliore, chi attacca ne ha esattamente tre. Ne restano 14 − r − 3 = 11 − r per le altre tre mani.</p>

<h3>Un esempio in difesa</h3>
<table>
<thead><tr><th>Posizione</th><th>Quadri</th></tr></thead>
<tbody>
<tr><td>Nord (morto)</td><td>Q 10 4</td></tr>
<tr><td>Ovest (compagno, attacca con il 7)</td><td>A J 9 7 5</td></tr>
<tr><td>Est (tu)</td><td>K 8 2</td></tr>
<tr><td>Sud (giocante)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Contro 3SA il compagno attacca con il ♦7. 11 − 7 = 4 carte più alte del 7 nelle altre tre mani. Il morto ne ha due (Q, 10) e tu due (K, 8). Quindi il giocante non ne ha nessuna e non può battere il 7.</p>
<p>Quando il morto gioca basso, puoi giocare il 2 e lasciare che il 7 del compagno vinca la presa. Il compagno resta in presa e continua il colore attraverso Q 10 del morto verso il tuo K 8, e la difesa fa tutte le prese a quadri. Se invece giochi il K, Q 10 del morto faranno una presa quando il colore verrà continuato.</p>

<h3>Può usarla anche il giocante</h3>
<p>Supponi che Ovest attacchi con il ♠7 (quarta migliore) contro il tuo 3SA. Il morto ha ♠A 10 5 e tu hai ♠K 9 3. 11 − 7 = 4 carte più alte in Nord, Est e Sud; le vedi tutte e quattro (A, 10, K, 9). Est non ha picche più alte del 7. Quindi puoi giocare basso dal morto e vincere a buon mercato con il 9, conservando A e K come fermi.</p>

<h3>La carta più bassa mostra la lunghezza</h3>
<p>Se il compagno attacca con il 2 come quarta migliore, non può avere una quinta carta più bassa: ha esattamente quattro carte nel colore. Attaccare con il 3 quando il 2 è visibile altrove dice la stessa cosa. Questo ti aiuta a contare la mano del giocante.</p>

<h3>Quando la regola non funziona</h3>
<p>La regola dell’11 vale solo per i veri attacchi di quarta migliore. Non vale per gli attacchi da sequenza (il K da KQJ), per la più alta da cartine o da doubleton, né per gli attacchi nel colore del compagno da un onore con cartine. Se il calcolo dà un risultato impossibile (per esempio, il giocante dovrebbe avere un numero negativo di carte più alte), l’attacco non era di quarta migliore, e anche questo ti dice qualcosa.</p>
<div class="tip">Fai la sottrazione appena scende il morto, prima che giochi il terzo di mano. Così sai subito se devi giocare alto o puoi lasciare vincere la carta del compagno.</div>
<div class="warn">Non applicare la regola meccanicamente contro i contratti a colore quando il compagno potrebbe attaccare da un colore corto. Usala quando l’attacco è chiaramente una quarta migliore da un colore lungo, cosa che succede soprattutto contro i senza atout.</div>
`,
    keyPoints: [
      'Con un attacco di quarta migliore, 11 meno il valore della carta = carte più alte nelle altre tre mani.',
      'Sottrai quelle che vedi al morto e in mano tua per sapere quante ne ha il giocante.',
      'Il giocante può fare lo stesso calcolo sulle mani dei difensori.',
      'Un 2 di quarta migliore mostra esattamente quattro carte.',
      'La regola funziona solo con veri attacchi di quarta migliore.',
    ],
    quiz: [
      {
        q: 'Il compagno attacca con il 7, quarta migliore. Quante carte più alte del 7 hanno in tutto il morto, tu e il giocante?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Sopra il 7 ci sono sette carte (8, 9, 10, J, Q, K, A) e il compagno ne ha tre.',
      },
      {
        q: 'Il compagno attacca con il ♥6 (quarta migliore) contro 3SA. Il morto ha ♥K 9 3 e tu hai ♥A 10 4. Quante carte di cuori più alte del 6 ha il giocante?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. Il morto ne ha due più alte (K, 9) e tu due (A, 10), quindi il giocante ne ha una.',
      },
      {
        q: 'Il compagno attacca con il ♣2 contro 3SA, giocando attacchi di quarta migliore. Quante carte di fiori ha il compagno?',
        options: ['Tre', 'Esattamente quattro', 'Cinque o più', 'Impossibile dirlo'],
        answer: 1,
        explain: 'Il 2 è la carta più bassa, quindi non ce n’è nessuna sotto: come quarta migliore mostra esattamente quattro fiori.',
      },
      {
        q: 'Sei il giocante a 3SA. Ovest attacca con il ♠7 (quarta migliore). Il morto ha ♠A 10 5 e tu hai ♠K 9 3. Quante picche più alte del 7 ha Est?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 carte più alte in Nord, Est e Sud, e le vedi tutte e quattro (A, 10, K, 9). Est non ne ha, quindi puoi vincere a buon mercato con il 9.',
      },
      {
        q: 'Quando non si applica la regola dell’11?',
        options: ['Contro i senza atout', 'Quando l’attacco non è di quarta migliore, per esempio in testa di sequenza', 'Quando il morto ha un onore', 'Quando hai un singolo'],
        answer: 1,
        explain: 'Il calcolo si basa sul fatto che chi attacca abbia esattamente tre carte più alte. Gli attacchi in testa di sequenza, la più alta da cartine e simili fanno cadere questa premessa.',
      },
    ],
  },
];
