// Lezioni, parte 3.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels e 2SA Unusual',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Come mostrare una bicolore con una sola dichiarazione dopo l’apertura avversaria, e come il compagno sceglie il colore.',
    body: `
<h3>Due colori con una dichiarazione</h3>
<p>Con due colori quinti vuoi mostrarli entrambi in fretta; la licita potrebbe essere a livello di quattro prima che tu abbia una seconda occasione. Ci sono due interventi convenzionali che lo fanno, e ciascuno promette almeno <strong>cinque carte in ciascuno di due colori</strong>.</p>
<table>
<thead><tr><th>Loro aprono</th><th>Tu dichiari</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ e ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ e ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ e un minore</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ e un minore</td></tr>
<tr><td>1♣</td><td>2SA (Unusual)</td><td>♦ e ♥</td></tr>
<tr><td>1♦</td><td>2SA (Unusual)</td><td>♣ e ♥</td></tr>
<tr><td>1♥ o 1♠</td><td>2SA (Unusual)</td><td>♣ e ♦</td></tr>
</tbody>
</table>
<p>La Michaels è una surlicita nel colore d’apertura. Su un minore mostra le due nobili; su una nobile mostra l’altra nobile e un minore non specificato. Il 2SA Unusual mostra i <strong>due colori più bassi non dichiarati</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="L’avversario di destra apre 1♦: dichiara 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="L’avversario di destra apre 1♠: dichiara 2SA"></div>

<h3>Quanto forte?</h3>
<p>La fascia è ampia. Il più delle volte la mano è modesta (circa 8-12 PO) con buoni colori, e lo scopo è competere, trovare un sacrificio o indicare l’attacco. Con una mano forte (circa 16+) cominci comunque con la dichiarazione bicolore e poi dichiari ancora per mostrare la forza in più. Con una mano intermedia molti giocatori preferiscono intervenire nel colore più alto e dichiarare l’altro più tardi.</p>
<p>La qualità dei colori conta, soprattutto in zona: gli onori devono stare nei colori lunghi, non in quelli corti.</p>

<h3>La risposta del compagno</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Sei Sud: dichiara 2♥"></div>
<ul>
<li><strong>Scegli un colore</strong> al livello più economico, quello in cui hai più carte. Qui quattro cuori contro due picche: 2♥. A parità di lunghezza tra una nobile e un minore preferisci la nobile, che vale di più.</li>
<li><strong>Salta</strong> con un buon fit e valori utili: corte nel colore avversario, assi e re nei colori del compagno.</li>
<li><strong>Vai a manche</strong> quando il fit è grande e i tuoi onori lavorano. Un fit di dieci carte di fronte a una 5-5 spesso fa la manche con pochi punti.</li>
<li><strong>Dopo una Michaels nobile-minore</strong> (1♥ – 2♥), dichiara la nobile del compagno se ti piace, oppure 2SA per chiedere il minore quando hai un buon fit nei minori e nessun fit nella nobile.</li>
<li><strong>Dopo il 2SA Unusual</strong>, dichiara 3♣ o 3♦ (il più lungo dei due), oppure salta a manche con un fit.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – passo: dichiara 2SA"></div>
<p>Il compagno ha cinque picche e cinque carte in un minore. Con un singolo a picche ma quattro carte in ciascun minore, dichiara 2SA: il compagno nomina il suo minore e tu passi, con un fit di nove carte qualunque esso sia.</p>

<h3>Usare l’informazione in difesa</h3>
<p>Se la licita la vincono gli avversari, la bicolore del compagno è un regalo per la difesa: conosci almeno dieci delle sue carte. Ricostruisci da lì la mano del giocante, e attacca o cambia nel colore in cui il compagno può tagliare o fare prese.</p>
<div class="warn">Non usare la Michaels o il 2SA Unusual con una 5-4. Il compagno sceglierà un colore contando su cinque carte, e giocherete un fit di sette carte contrato.</div>
<div class="tip">In zona favorevole, una dichiarazione bicolore seguita da un grosso salto del compagno nel tuo colore può rubare la licita o trovare un sacrificio a buon mercato. Il compagno deve appoggiare con qualsiasi grande fit: la Legge delle prese totali favorisce chi dichiara con la distribuzione.</div>
`,
    keyPoints: [
      'Michaels: la surlicita nel minore d’apertura (1m – 2m) mostra le due nobili; la surlicita nella nobile d’apertura (1M – 2M) mostra l’altra nobile e un minore; 5-5 o più.',
      'Il 2SA Unusual mostra i due colori più bassi non dichiarati, 5-5 o più.',
      'Quasi sempre la mano è modesta; con una mano forte si dichiara ancora dopo.',
      'Il compagno sceglie il colore in cui ha più carte, e salta o dichiara manche con un grande fit.',
      'Dopo 1M – 2M, il 2SA del compagno chiede il minore.',
    ],
    quiz: [
      {
        q: 'L’avversario di destra apre 1♣. Quale dichiarazione mostra cinque picche e cinque cuori?',
        options: ['Contro', '2♣', '2SA', '1♥'],
        answer: 1,
        explain: 'La surlicita su un’apertura in un minore (Michaels) mostra le due nobili. 2SA su 1♣ mostra i due colori più bassi non dichiarati, quadri e cuori.',
      },
      {
        q: 'L’avversario di destra apre 1♥ e tu dichiari 2SA. Che cosa hai mostrato?',
        options: ['Bilanciata 15-18', 'Fiori e quadri', 'Picche e un minore', 'Picche e fiori'],
        answer: 1,
        explain: 'Il 2SA Unusual mostra i due colori più bassi non dichiarati. Su 1♥ sono fiori e quadri.',
      },
      {
        q: 'L’avversario di sinistra apre 1♦, il compagno dichiara 2♦ (Michaels), l’avversario di destra passa. Hai ♠J4 ♥Q852 ♦K73 ♣J1064. Che cosa dichiari?',
        options: ['2♠', '2♥', '2SA', 'Passo'],
        answer: 1,
        explain: 'Il compagno ha almeno cinque carte in ciascuna nobile. Tu hai quattro cuori e due picche, quindi i cuori sono il fit migliore: dichiarali al livello più economico.',
      },
      {
        q: 'L’avversario di destra apre 1♠ e tu dichiari 2♠. Che cosa mostra?',
        options: ['Picche', 'Cuori e un minore', 'I due minori', 'Una mano bilanciata forte'],
        answer: 1,
        explain: 'La surlicita su un’apertura in una nobile mostra l’altra nobile più un minore, almeno 5-5. Il compagno può dichiarare 2SA per sapere quale minore.',
      },
      {
        q: 'L’avversario di destra apre 1♣ e tu dichiari 2SA. Che cosa mostra?',
        options: ['Fiori e quadri', 'Quadri e cuori', 'Le due nobili', 'Cuori e picche'],
        answer: 1,
        explain: 'Su 1♣ i colori non dichiarati sono quadri, cuori e picche; i due più bassi sono quadri e cuori.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'La difesa contro i contratti a colore',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Come scegliere tra difesa attiva e passiva, fare tagli, giocare atout al momento giusto e accorciare il giocante.',
    body: `
<h3>Da dove vengono le prese della difesa</h3>
<p>Contro un contratto a colore la difesa fa prese con le carte alte, con i tagli e con le proprie atout. Il giocante intanto cerca di liberarsi delle perdenti tagliandole al morto o scartandole sulle vincenti del morto. Una buona difesa comincia, quando scende il morto, con una domanda semplice: <strong>come manterrà il contratto il giocante, e da dove verranno le nostre prese?</strong></p>

<h3>Attiva o passiva?</h3>
<p><strong>Difendi in modo attivo</strong> (incassa o affranca prese in fretta, anche con qualche rischio) quando il morto ha un colore lungo e forte che fornirà scarti. Le prese che non fai adesso spariranno.</p>
<p><strong>Difendi in modo passivo</strong> (gioca carte sicure che non regalano niente) quando il morto è piatto, non offre scarti e il giocante dovrà comunque perdere quelle perdenti. In quel caso aprire nuovi colori spesso regala al giocante una presa che da solo non farebbe.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Sud gioca 4♠ dopo 1♠ – 2♥ – 2♠ – 4♠. Il compagno attacca con la ♣Q; il morto vince con l’asso e muove il ♥K."></div>
<p>Vinci con il ♥A. Ora pensa: i cuori del morto sono affrancati, e appena il giocante avrà battuto atout ci scarterà sopra le perdenti a quadri. L’unica speranza è fare le prese a quadri <em>adesso</em>. Cambia con il ♦J, attraverso la mano del giocante: se il compagno ha il ♦A e il giocante la ♦Q, puoi fare tre prese a quadri. Un ritorno passivo a fiori lascerebbe al giocante il tempo di battere atout e scartare le quadri.</p>

<h3>Ottenere tagli</h3>
<ul>
<li>L’attacco con un singolo rende di più quando hai il controllo delle atout (per esempio l’asso d’atout) o il compagno può avere un rientro: vai in presa, raggiungi il compagno e tagli di nuovo.</li>
<li>Quando dai un taglio al compagno, usa un segnale di preferenza di colore per indicare dov’è il tuo rientro.</li>
<li>Conta le atout del giocante: è inutile giocare per un taglio quando il compagno non può più avere atout.</li>
</ul>

<h3>Quando giocare atout</h3>
<ul>
<li>Quando il morto è corto in un colore laterale in cui la tua linea è forte, e il giocante cercherà di tagliarvi le perdenti.</li>
<li>Quando il giocante ha mostrato due colori e il morto ha dato la preferenza al secondo: il morto taglierà il primo.</li>
<li>Quando il compagno trasforma il tuo contro informativo in punitivo passando: ha atout lunghe e forti e vuole che vengano tolte.</li>
<li>Non quando il giocante ha lunghe vincenti laterali da incassare, o quando un’uscita in atout potrebbe aiutarlo a catturare gli onori d’atout del compagno.</li>
</ul>

<h3>La difesa di accorciamento</h3>
<p>Se hai quattro atout, o le atout del giocante sono corte, costringi il giocante a tagliare più volte giocando il tuo colore lungo. Ogni taglio accorcia le atout del giocante; alla fine potresti avere più atout di lui, e il giocante perde il controllo. La difesa di accorciamento funziona meglio quando le atout del giocante sono nella mano lunga e il morto non può assorbire l’accorciamento.</p>

<h3>La promozione d’atout</h3>
<p>L’atout è picche. Il giocante ha ♠A K 10 9 8 7, tu (Ovest) hai ♠Q 6 e il compagno ♠J 3. Se lo lasci fare, il giocante incassa asso e re e la tua donna cade. Ma supponi di muovere un colore laterale in cui sia il compagno sia il giocante sono in chicane. Il compagno taglia con il ♠J, il giocante deve surtagliare con l’asso o il re, e ora la tua ♠Q 6 si trova di fronte a un solo onore maggiore: la donna farà presa. Questa promozione d’atout si chiama <strong>uppercut</strong>. Quando vedi una promozione di questo tipo, il compagno deve tagliare il più alto possibile.</p>
<div class="tip">Conta le prese. Se vedi la presa che batte il contratto, incassala; se vedi che il giocante ne ha abbastanza, cerca un taglio o una promozione d’atout che possa crearne una.</div>
<div class="warn">Non incassare vincenti in un colore in cui il giocante è in chicane e il morto taglia: aiuti solo il giocante. E non concedere un «taglio e scarto» (muovere un colore in cui sono in chicane sia il giocante sia il morto), che permette al giocante di tagliare in una mano e scartare una perdente dall’altra.</div>
`,
    keyPoints: [
      'Chiediti come il giocante manterrà il contratto e da dove verranno le tue prese.',
      'Difendi in modo attivo quando il morto ha un colore lungo per gli scarti; passivo quando il morto è piatto.',
      'L’attacco con un singolo rende di più con il controllo delle atout o un rientro nella mano del compagno.',
      'Gioca atout quando il morto taglierà, o quando il compagno ha passato sul tuo contro informativo.',
      'Con quattro atout accorcia il giocante; non concedere mai un taglio e scarto.',
    ],
    quiz: [
      {
        q: 'Il morto ha un colore laterale lungo e forte che fornirà scarti. Che tipo di difesa è di solito giusta?',
        options: ['Passiva: aspettare che il giocante sbagli', 'Attiva: fare o affrancare in fretta le proprie prese', 'Giocare atout a ogni occasione', 'Concedere al giocante un taglio e scarto'],
        answer: 1,
        explain: 'Una volta battute le atout, il giocante scarterà le sue perdenti sul colore del morto. Le prese che la difesa non fa subito svaniranno.',
      },
      {
        q: 'Il morto è una 4-3-3-3 piatta senza colori lunghi e il giocante deve comunque perdere le sue perdenti laterali. Che tipo di difesa è di solito giusta?',
        options: ['Passiva: evitare di aprire nuovi colori', 'Attiva: cambiare colore a ogni presa', 'Attaccare sotto gli assi', 'Incassare subito tutte le vincenti'],
        answer: 0,
        explain: 'Senza una fonte di scarti, le perdenti del giocante non spariranno. Aprire nuovi colori rischia di regalargli una presa che da solo non farebbe.',
      },
      {
        q: 'Hai quattro atout contro il 4♥ del giocante. Quale piano difensivo è spesso il migliore?',
        options: ['Giocare atout', 'Costringere il giocante a tagliare giocando il tuo colore lungo', 'Attaccare con un singolo', 'Attaccare dagli onori in ogni colore'],
        answer: 1,
        explain: 'Ogni taglio accorcia le atout del giocante. Con quattro atout, due o tre accorciamenti possono lasciarti con più atout del giocante, che perde il controllo.',
      },
      {
        q: 'Hai contrato 1♦ per informazione e il compagno ha passato per punire. Con che cosa attacchi?',
        options: ['La tua nobile migliore', 'Atout', 'Un singolo a fiori', 'Il colore che il compagno preferirebbe'],
        answer: 1,
        explain: 'Il passo del compagno mostra quadri lunghe e forti. L’attacco in atout impedisce al giocante di fare prese tagliando con le piccole atout, e le quadri del compagno faranno le prese.',
      },
      {
        q: 'Quando è più interessante attaccare con un singolo contro un contratto a colore?',
        options: ['Quando hai l’asso d’atout o il compagno ha probabilmente un rientro', 'Quando hai quattro atout', 'Quando si sa che il morto è corto in quel colore', 'Sempre'],
        answer: 0,
        explain: 'Dopo il taglio devi riportare in presa il compagno, o riprendere tu la mano prima che le atout vengano tolte. Il controllo delle atout e i rientri del compagno lo rendono possibile.',
      },
    ],
  },

  {
    id: 'defending-against-notrump',
    title: 'La difesa contro i contratti a senza',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Come la difesa vince la corsa contro i contratti a senza: sbloccare, restituire la carta giusta, restare in comunicazione, attaccare i rientri del giocante e scartare bene.',
    body: `
<h3>Una corsa alle prese</h3>
<p>A senza atout niente ferma un colore lungo una volta affrancato. Le due linee fanno una corsa: il giocante per affrancare abbastanza prese, la difesa per affrancare e incassare per prima il suo colore lungo. Quasi tutti i problemi della difesa sono problemi di <strong>comunicazione</strong>: il colore lungo è in una mano e i rientri spesso nell’altra. Una buona difesa fa circolare il colore fra i due difensori e taglia le comunicazioni del giocante.</p>

<h3>Terzo di mano: alto, e fuori dai piedi del compagno</h3>
<p>Il terzo di mano gioca alto (vedi la lezione «Secondo di mano basso, terzo di mano alto»). A senza c’è un secondo dovere: non <strong>bloccare</strong> il colore del compagno. Con un onore secondo nel colore lungo del compagno, togliti di mezzo presto quell’onore, anche se per farlo devi sormontare la carta del compagno.</p>
<table>
<thead><tr><th>Posizione</th><th>Cuori</th></tr></thead>
<tbody>
<tr><td>Nord (morto)</td><td>6 5 2</td></tr>
<tr><td>Ovest (compagno, attacca con il K)</td><td>K Q 10 9 7</td></tr>
<tr><td>Est (tu)</td><td>A 3</td></tr>
<tr><td>Sud (giocante)</td><td>J 8 4</td></tr>
</tbody>
</table>
<p>Se giochi il 3, il giocante liscia. Il compagno continua con la donna e il tuo asso deve vincere il secondo giro: non ti resta cuori da restituire, il fante del giocante ferma ancora il colore e il compagno ha bisogno di altri due rientri per affrancare e incassare i cuori. Invece <strong>sormonta</strong> il re con l’asso e restituisci il 3. Il fante del giocante è in trappola e la difesa fa le prime cinque prese a cuori.</p>
<ul>
<li>Sblocca quando l’attacco del compagno mostra un colore forte (la testa di una sequenza come K Q 10 o Q J 10) e hai un onore secondo: gioca l’onore presto, così la tua ultima carta è una cartina.</li>
<li>Con tre carte capeggiate da un onore (A x x, K x x), gioca alto e tieni una cartina da restituire: non blocchi niente.</li>
</ul>

<h3>Restituire il colore del compagno</h3>
<p>Quando vinci una presa e torni nel colore del compagno, la carta che scegli gli dice quante te ne restano, e quindi quante ne ha il giocante.</p>
<table>
<thead><tr><th>Avevi</th><th>Vinci con</th><th>Restituisci</th><th>La regola</th></tr></thead>
<tbody>
<tr><td>A 9 3</td><td>A</td><td>9</td><td>Ti restano due carte: restituisci la più alta</td></tr>
<tr><td>A 8 5 2</td><td>A</td><td>2</td><td>Te ne restano tre o più: restituisci la tua quarta migliore originale</td></tr>
<tr><td>K 10 6 4 2</td><td>K</td><td>4</td><td>La tua quarta migliore originale, non la carta più bassa</td></tr>
</tbody>
</table>
<p>Una carta alta dice «me ne resta al massimo una»; una bassa dice «me ne restano almeno due». Il compagno può così capire se il giocante ha ancora un fermo e se deve vincere subito o lisciare. Restituire la più alta di due carte evita anche di bloccare il colore: se tieni il 9, potrebbe vincere il terzo giro quando chi deve essere in presa è il compagno.</p>

<h3>Lisciare per restare in contatto</h3>
<p>Il difensore con il colore lungo a volte deve cedere presto una presa, finché il compagno ha ancora una carta del colore da restituire.</p>
<div class="deal" data-n="S:109 H:A64 D:KQJ105 C:K83" data-e="S:752 H:1072 D:A83 C:10964" data-s="S:QJ4 H:KQ5 D:742 C:AQJ2" data-w="S:AK863 H:J983 D:96 C:75" data-caption="3SA giocato da Sud dopo 1SA – 3SA. Ovest attacca con il ♠A ed Est gioca il ♠2."></div>
<p>Il 2 di Est nega un onore a picche, quindi il giocante ha la ♠Q J. Ovest conta: Sud ha 15-17 PO, il morto 13 e Ovest 8, quindi Est ne ha al massimo 4. Il giocante manterrà il contratto scacciando il ♦A, perciò l’unica speranza della difesa è che ce l’abbia Est.</p>
<p>Se Ovest incassa il ♠K e gioca una terza picche, il giocante vince con l’ultimo onore ed Est, che aveva tre picche, non ne ha più. Est prende il ♦A ma non può raggiungere Ovest, le cui due picche lunghe non faranno mai presa: il giocante fa dieci prese. Ovest gioca invece una <strong>picche piccola</strong> alla seconda presa. Il giocante vince, ma Est conserva una picche. Quando Est prende il ♦A la restituisce, e Ovest incassa il ♠K e le ultime due picche: un down.</p>
<p>Una picche piccola già all’attacco avrebbe ottenuto lo stesso risultato. Il principio: quando il tuo colore è lungo e non hai rientri esterni, cedi la presa che devi perdere <em>finché il compagno ha ancora una carta del colore</em>.</p>

<h3>Attaccare i rientri del giocante</h3>
<p>Anche il giocante ha problemi di comunicazione, e la difesa può peggiorarli.</p>
<ul>
<li><strong>Trattieni l’asso</strong> quando il morto ha un colore lungo e nessun rientro esterno, e prendilo quando il giocante gioca dalla mano l’ultima carta del colore. Il segnale di conto del compagno ti dice quando (vedi la lezione «I segnali difensivi»).</li>
<li><strong>Scaccia il rientro del morto</strong> prima che il colore lungo sia affrancato, anche se costa una presa.</li>
</ul>
<div class="hand" data-cards="S:A42 H:765 D:KQJ109 C:83" data-label="Il morto, contro 3SA"></div>
<p>Sei Est con ♠K 7 3 e ♦A 6 2, e il giocante ha due quadri. Trattenere il ♦A da solo non basta: il giocante tornerebbe con il ♠A sulle quadri affrancate. Quindi, quando vinci una presa prima che si sia giocato quadri, muovi il <strong>♠K</strong>. Se il giocante prende con l’asso, il morto non ha più rientri: trattieni il ♦A fino al secondo giro e le quadri del morto sono morte. Se il giocante liscia, il tuo re ha fatto presa e puoi giocare un’altra picche. Sacrificare così un onore per eliminare un rientro si chiama <strong>colpo di Merrimac</strong>. È raro, ma la domanda da cui nasce non lo è: quale rientro del giocante conta di più?</p>

<h3>Gli scarti</h3>
<p>Quando il giocante batte un colore lungo, i difensori devono scartare, e un solo scarto sbagliato può regalargli il contratto.</p>
<ul>
<li><strong>Tieni la lunghezza del morto.</strong> Con ♣Q 10 8 3 dietro il ♣K J 7 4 del morto, tieni tutte e quattro le fiori: se ne scarti una, l’ultima fiori del morto può diventare vincente. Le carte del morto sono in vista, quindi questa è la regola più facile da seguire.</li>
<li><strong>Tieni la lunghezza del giocante.</strong> Conta i suoi colori dalla licita e dal gioco, e tieni una guardia in ogni colore in cui solo tu puoi fermare la sua carta lunga.</li>
<li><strong>Dividetevi il lavoro.</strong> A un colore basta una guardia. Lascia al compagno il colore che lui può guardare (i segnali di conto aiutano) e tieni tu l’altro.</li>
<li><strong>Segnala con il primo scarto:</strong> una carta alta chiede il colore, una bassa dice che non lo vuoi. Scarta da un colore di cui puoi fare a meno; non buttare mai una carta che ti serve solo per segnalare.</li>
<li><strong>Tieni le vincenti del tuo colore affrancato</strong> finché tu o il compagno potete ancora andare in presa per incassarle.</li>
</ul>
<div class="tip">Conta le prese del giocante prima di scartare. Se ha otto prese e gliene serve una nona, il colore che potrebbe dargliela è quello che devi tenere.</div>
<div class="warn">Pianifica gli scarti per tempo. Esitare e poi lasciare secco un onore dice al giocante esattamente dov’è.</div>
`,
    keyPoints: [
      'A senza, la comunicazione decide la corsa: fai circolare il colore lungo fra i due difensori.',
      'Sblocca: con un onore secondo nel colore forte del compagno, gioca l’onore presto, sormontando se serve.',
      'Restituisci la più alta di due carte rimaste; con tre o più, la tua quarta migliore originale.',
      'Il difensore con il colore lungo e senza rientri liscia un giro finché il compagno ha ancora una carta da restituire.',
      'Attacca i rientri del giocante; negli scarti tieni la lunghezza del morto e guarda le carte lunghe del giocante.',
    ],
    quiz: [
      {
        q: 'Contro 3SA il compagno attacca con il ♥K (da K Q 10 9 7). Il morto ha ♥6 5 2 e tu ♥A 3. Che cosa giochi?',
        options: ['Il 3, lasciando vincere il re del compagno', 'L’asso, poi restituisci il 3', 'L’asso, poi cambi colore', 'È indifferente'],
        answer: 1,
        explain: 'Sormonta e restituisci il 3. Se giochi piccolo, il giocante liscia e il tuo asso deve vincere il secondo giro senza cuori da restituire, mentre il fante del giocante ferma ancora il colore.',
      },
      {
        q: 'Vinci l’attacco a picche del compagno contro 3SA con l’asso da ♠A 9 3. Quale picche restituisci?',
        options: ['Il 9', 'Il 3', 'Una qualsiasi', 'Non torno a picche'],
        answer: 0,
        explain: 'Con due carte rimaste restituisci la più alta. Il compagno vede il 9 e sa che ti resta al massimo una picche.',
      },
      {
        q: 'Vinci con l’asso da ♦A 8 5 2. Quale quadri restituisci?',
        options: ['L’8', 'Il 5', 'Il 2', 'Nessuna: cambio colore'],
        answer: 2,
        explain: 'Con tre o più carte rimaste restituisci la tua quarta migliore originale, qui il 2. La carta bassa dice al compagno che hai ancora almeno due quadri.',
      },
      {
        q: 'Nella smazzata di 3SA qui sopra, perché Ovest deve giocare una picche piccola alla seconda presa?',
        options: ['Per scoprire chi ha la ♠Q', 'Perché Est conservi una picche da restituire quando prende il ♦A', 'Perché il ♠K potrebbe essere tagliato', 'Per costringere il giocante a usare i rientri del morto'],
        answer: 1,
        explain: 'Est aveva tre picche. Se Ovest incassa il re e gioca una terza picche, Est non ne ha più quando va in presa. Lisciare adesso mantiene il contatto fra le due mani.',
      },
      {
        q: 'Il giocante batte un colore lungo. Il morto ha ♣K J 7 4 e tu ♣Q 10 8 3 dietro. Che cosa tieni?',
        options: ['Tutte e quattro le fiori', 'Solo la Q e il 10', 'Solo la donna', 'Dipende dal primo scarto del compagno'],
        answer: 0,
        explain: 'Tieni la lunghezza del morto. Appena scarti una fiori, la quarta fiori del morto può diventare vincente.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Divisioni dei colori e combinazione delle chance',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Le probabilità a priori delle divisioni, come combinare le chance e le idee di base dei posti liberi e della scelta ristretta.',
    body: `
<h3>Come si dividono le carte avversarie</h3>
<p>Prima che venga giocata qualsiasi carta, la probabilità di ogni divisione dipende solo da quante carte del colore hanno i difensori:</p>
<table>
<thead><tr><th>Mancanti</th><th>Divisione</th><th>Probabilità</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1,5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0,5%</td></tr>
</tbody>
</table>
<p>Una regola utile: un numero <strong>dispari</strong> di carte mancanti tende a dividersi nel modo più equilibrato possibile (3-2, 4-3), un numero <strong>pari</strong> invece no (la 4-2 è più probabile della 3-3, e la 3-1 più probabile della 2-2).</p>
<p>Altri due numeri da sapere: un’impasse vale il 50%; avere bisogno di una su due impasse vale il 75%, averne bisogno di entrambe il 25%.</p>

<h3>Combinare le chance</h3>
<p>Spesso un contratto si può mantenere in più di un modo. L’abilità sta nel provare le chance in un ordine che ti permetta di usare la seconda se la prima fallisce.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3SA giocato da Sud. Ovest attacca con il ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conta:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: otto prese. La nona può venire da una divisione 3-3 dei fiori (36%), che rende vincente il ♣2 del morto, oppure dall’impasse a picche (50%), che riesce quando il ♠K è in Est.</p>
<p><strong>Il pericolo:</strong> uscito il tuo ♥A, i cuori di Ovest sono affrancati. Se fai l’impasse a picche e perde con Ovest, Ovest incassa abbastanza cuori per batterti e non arrivi mai a provare i fiori.</p>
<p><strong>L’ordine giusto:</strong> prova prima i fiori. Incassare ♣A, K e Q non costa nulla: se entrambi i difensori rispondono tre volte, il ♣2 è la tua nona presa e l’impasse non ti serve affatto. Se i fiori non sono divisi, finisci al morto e puoi ancora muovere picche verso il tuo A Q. La tua probabilità è 36% + (64% × 50%) = 68%, invece del 50% della sola impasse.</p>
<div class="tip">Prova prima la chance che non ti fa cedere la mano. Lascia per ultima l’impasse, che potrebbe dare la mano all’avversario pericoloso.</div>

<h3>I posti liberi</h3>
<p>Una volta iniziato il gioco, i numeri a priori cambiano. Se si sa che Ovest ha cinque cuori ed Est uno solo, delle carte ancora sconosciute Ovest ha 8 posti liberi ed Est 12. Una qualsiasi carta mancante, come il ♠K, ora è in Est 12 volte su 20, cioè il 60%, invece del 50%. La mano con più posti liberi ha più probabilità di avere una determinata carta. Ecco perché contare la mano è così importante.</p>

<h3>La scelta ristretta</h3>
<p>Hai A K 10 7 5 di fronte a 6 4 3 2, e ti mancano Q, J, 9 e 8. Incassi l’asso ed Est fa cadere la donna. Al giro successivo Ovest risponde basso. Devi giocare il re (sperando che Est avesse Q J) o fare l’impasse al 10 (sperando che Est avesse la donna secca)?</p>
<p>Fai l’impasse. Con la donna singola Est non aveva scelta; con Q J avrebbe potuto giocare indifferentemente il fante. Quindi la donna singola è circa due volte più probabile di Q J in particolare: l’impasse riesce circa il 65% delle volte. Questo principio della <strong>scelta ristretta</strong> si applica ogni volta che un avversario gioca uno di due onori equivalenti.</p>

<h3>Regole pratiche per la donna</h3>
<ul>
<li>Otto carte senza la donna: impasse (circa il 40% con A K J x x e circa il 51% con A K J 10 x, contro circa il 33% della battuta).</li>
<li>Nove carte senza la donna: gioca in battuta (circa il 53% contro circa il 51% dell’impasse).</li>
<li>Le informazioni della licita (chi ha aperto, chi ha fatto un barrage, chi ha mostrato lunghezza) valgono più di questi piccoli margini.</li>
</ul>
<div class="warn">Queste percentuali sono solo un punto di partenza. Un difensore che in licita ha mostrato colori lunghi ha meno probabilità di avere lunghezza nel colore che stai giocando.</div>
`,
    keyPoints: [
      'Cinque mancanti: 3-2 68%. Sei mancanti: 4-2 48%, 3-3 36%. Quattro mancanti: 3-1 50%, 2-2 41%, 4-0 10%.',
      'Un numero dispari di carte mancanti tende a dividersi in modo equilibrato; un numero pari no.',
      'Combina le chance: prova prima ciò che non fa cedere la mano; lascia per ultima l’impasse verso la mano pericolosa.',
      'Posti liberi: la mano con più carte sconosciute ha più probabilità di avere una determinata carta.',
      'Scelta ristretta: quando un avversario fa cadere uno di due onori equivalenti, gioca per il suo singolo.',
    ],
    quiz: [
      {
        q: 'Gli avversari hanno sei carte in un colore. Qual è la divisione più probabile?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: 'La 4-2 si presenta circa il 48% delle volte, contro il 36% della 3-3. Con un numero pari di carte mancanti, la divisione pari è l’eccezione, non la regola.',
      },
      {
        q: 'Gli avversari hanno cinque carte in un colore. Quanto spesso sono divise 3-2?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'Circa il 68%. La 4-1 è circa il 28% e la 5-0 circa il 4%.',
      },
      {
        q: 'Puoi tentare una divisione 3-3 (36%) e, se fallisce, fare un’impasse (50%). Qual è la probabilità combinata?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: '36% più metà del 64% restante: 36 + 32 = 68%.',
      },
      {
        q: 'Nella smazzata a 3SA qui sopra, perché incassare i fiori prima di fare l’impasse a picche?',
        options: ['Per avere il conto della mano', 'Provare i fiori non fa cedere la mano, mentre un’impasse perdente permette a Ovest di incassare i cuori', 'Perché l’impasse ha più probabilità di riuscire dopo', 'Per sbloccare i fiori'],
        answer: 1,
        explain: 'Se l’impasse perde, Ovest incassa i cuori e non arrivi mai a provare i fiori. Incassando prima i fiori tieni vive entrambe le chance.',
      },
      {
        q: 'Hai A K 10 7 5 di fronte a 6 4 3 2. Sull’asso Est fa cadere la donna. Al giro successivo Ovest gioca basso. Qual è la giocata migliore?',
        options: ['Giocare il re', 'Fare l’impasse al 10', 'È esattamente 50 e 50', 'Muovere dall’altra mano'],
        answer: 1,
        explain: 'Scelta ristretta: da Q J Est avrebbe potuto giocare l’uno o l’altro onore, ma con la donna singola non aveva scelta. Il singolo è la distribuzione più probabile, quindi l’impasse riesce circa il 65% delle volte.',
      },
    ],
  },

  {
    id: 'ruffing-finesse-and-loser-on-loser',
    title: 'L’impasse di taglio, perdente su perdente e l’affrancamento di taglio',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Tre modi in cui il giocante crea prese con le atout: l’impasse di taglio, lo scarto di una perdente su una perdente e l’affrancamento di un colore laterale tagliando.',
    body: `
<h3>L’impasse di taglio</h3>
<p>Un’impasse normale si gioca <em>verso</em> una forchetta. Un’<strong>impasse di taglio</strong> muove un onore <em>attraverso</em> il difensore che può avere la carta più alta mancante, con una chicane e un’atout pronte dietro. Se quel difensore copre, tagli e i tuoi onori rimasti sono vincenti; se no, scarti una perdente.</p>
<p>Con ♦K Q J 10 al morto e nessuna quadri in mano, muovi il ♦K. Se Est copre con l’asso, taglialo, e Q J 10 sono affrancate. Se Est gioca piccolo, scarta una perdente: se il re fa presa hai risparmiato una presa, e se Ovest lo prende con l’asso hai solo scambiato una perdente con un’altra. In ogni caso gli onori rimasti ti danno scarti.</p>

<h4>Quale impasse?</h4>
<p>Con A Q J 10 contro un singolo puoi scegliere. L’impasse normale (giocare verso A Q) riesce quando il re è in <strong>Ovest</strong>; l’impasse di taglio (asso, poi donna) riesce quando è in <strong>Est</strong>. Da sole si equivalgono, quindi lascia decidere il resto della mano: la licita può indicare dov’è il re e spesso un difensore è pericoloso e l’altro no. Scegli l’impasse che, se fallisce, perde a favore del difensore innocuo.</p>
<div class="deal" data-n="S:J103 H:AQJ102 D:762 C:84" data-e="S:62 H:K743 D:J84 C:9653" data-s="S:AKQ984 H:6 D:K53 C:A72" data-w="S:75 H:985 D:AQ109 C:KQJ10" data-caption="4♠ giocato da Sud. Ovest attacca con il ♣K."></div>
<p>Est è il difensore pericoloso: una quadri giocata da Est, attraverso il tuo ♦K, potrebbe dare alla difesa tre prese a quadri. Ovest è innocuo: una quadri giocata da Ovest arriva verso il tuo re.</p>
<ul>
<li><strong>L’impasse normale</strong>, cuori verso la donna, perde contro il re di Est. Est cambia con il ♦J e vai due down.</li>
<li><strong>L’impasse di taglio:</strong> cuori verso l’asso, poi la ♥Q. Se Est copre, taglia, e le cuori rimaste del morto sistemano le tue quadri; se Est gioca piccolo, scarta una quadri. Con le carte come sono, fai dodici prese.</li>
</ul>
<p>E se Ovest avesse avuto il ♥K? Allora l’impasse di taglio perde, ma a favore di Ovest, che non può giocare quadri attraverso il tuo re, e tu hai già scartato una quadri sulla ♥Q: fai comunque dieci prese. L’impasse di taglio mantiene il contratto chiunque abbia il re.</p>

<h3>Perdente su perdente</h3>
<p>A volte la risposta migliore a una presa che perderai comunque non è tagliarla, ma scartarci sopra una perdente di un altro colore. Il numero di prese non cambia, perché una perdente ne sostituisce un’altra, ma conservi le atout, il controllo o i rientri.</p>
<div class="deal" data-n="S:542 H:9862 D:764 C:A83" data-e="S:J3 H:107 D:J532 C:K9642" data-s="S:AK10987 H:43 D:AKQ C:75" data-w="S:Q6 H:AKQJ5 D:1098 C:QJ10" data-caption="4♠ giocato da Sud. Ovest incassa ♥A e ♥K, mentre Est gioca alto-basso, e continua con la ♥Q."></div>
<p>Est taglia la terza cuori con il ♠J. Se surtagli, la ♠Q 6 di Ovest si trova sopra il tuo unico onore alto rimasto e la donna viene promossa: perdi due cuori, un’atout e una fiori, un down. Scarta invece la tua fiori perdente. Il fante di Est vince la presa, ma le tue atout restano intatte: asso e re catturano la donna di Ovest, e la perdente a fiori se n’è già andata. Dieci prese.</p>
<p>Altri usi comuni:</p>
<ul>
<li><strong>Conservare il controllo:</strong> quando la difesa gioca un colore che dovresti tagliare nella mano lunga, scartare una perdente conserva la tua lunghezza in atout (vedi la lezione «La gestione delle atout»).</li>
<li><strong>Affrancare un colore:</strong> con ♦Q J 10 9 al morto, nessuna quadri in mano e senza asso e re, gioca la donna e poi il fante, scartando ogni volta una perdente. Cedi due prese che avresti perso comunque, e il 10 e il 9 ora sono vincenti.</li>
<li><strong>Una messa in presa:</strong> il difensore che vince una presa di perdente su perdente può essere costretto a giocare nella tua forchetta o a darti taglio e scarto (vedi la lezione «Introduzione a compressioni e messe in presa»).</li>
</ul>

<h3>Affrancare un colore tagliando</h3>
<p>Un colore laterale lungo al morto si può <strong>affrancare di taglio</strong>: tagli le sue cartine in mano finché la difesa non ne ha più, e il resto del colore fornisce scarti. Ogni taglio richiede un rientro al morto, e alla fine te ne serve un altro per incassare le carte lunghe, quindi conta i rientri prima di cominciare.</p>
<table>
<thead><tr><th>Morto</th><th>La tua mano</th><th>Divisione</th><th>Tagli necessari</th><th>Carte lunghe</th></tr></thead>
<tbody>
<tr><td>A K 6 5 4 2</td><td>3</td><td>3-3</td><td>1</td><td>3</td></tr>
<tr><td>A K 6 5 4 2</td><td>3</td><td>4-2</td><td>2</td><td>2</td></tr>
<tr><td>A 6 5 4 3</td><td>7</td><td>4-3</td><td>3</td><td>1</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K85 H:A6543 D:K52 C:64" data-e="S:6 H:K98 D:876 C:QJ10987" data-s="S:AQJ10932 H:7 D:A43 C:A5" data-w="S:74 H:QJ102 D:QJ109 C:K32" data-caption="6♠ giocato da Sud. Ovest attacca con la ♦Q."></div>
<p>Hai undici prese sicure: sette picche, il ♥A, ♦A K e il ♣A. La dodicesima deve venire dalle cuori del morto, che richiedono tre tagli se sono divise 4-3, quindi ti servono tre rientri al morto dopo il ♥A: l’♠8, il ♠K e il ♦K.</p>
<ol>
<li>Vinci la ♦Q con l’<strong>asso</strong>, per conservare il ♦K del morto come rientro.</li>
<li>Gioca cuori verso l’asso e taglia una cuori con il ♠9.</li>
<li>Gioca il ♠2 verso l’8 del morto e taglia un’altra cuori con il ♠10.</li>
<li>Gioca il ♠3 verso il re e taglia una terza cuori con il ♠J. Ora la difesa non ha più né cuori né atout.</li>
<li>Entra al morto con il ♦K e incassa la quinta cuori, scartando la tua fiori perdente. Perdi solo una quadri.</li>
</ol>
<p>Se batti due giri di atout prima di cominciare, ti manca un rientro: lo slam va sotto.</p>
<div class="tip">Pianifica i rientri prima di toccare il colore: uno per ogni taglio, più uno per incassare le carte lunghe. Le atout del morto sono spesso i rientri: gioca verso di esse le tue atout piccole e taglia con quelle alte.</div>
<div class="warn">Taglia alto ogni volta che un difensore potrebbe non avere più il colore e surtagliare.</div>
`,
    keyPoints: [
      'L’impasse di taglio muove un onore attraverso il difensore che può avere la carta mancante: se copre, tagli; se no, scarti una perdente.',
      'Con A Q J 10 contro un singolo, scegli fra impasse normale e impasse di taglio chiedendoti a quale difensore puoi permetterti di cedere la presa.',
      'Perdente su perdente: scarta una perdente invece di tagliare quando il taglio ti costerebbe una presa in atout, il controllo o un rientro.',
      'Per affrancare un colore di taglio ti serve un rientro per ogni taglio, più uno per incassare le carte lunghe.',
      'Usa le atout del morto come rientri; non battere atout prima di averle usate.',
    ],
    quiz: [
      {
        q: 'Il morto ha ♦K Q J 10 e tu non hai quadri. Muovi il ♦K ed Est gioca piccolo. Che cosa fai?',
        options: ['Taglio', 'Scarto una perdente', 'Scarto una vincente', 'Meglio giocare un altro colore'],
        answer: 1,
        explain: 'È l’impasse di taglio. Se il re fa presa hai risparmiato una presa; se Ovest lo prende con l’asso hai solo scambiato una perdente con un’altra, e Q J 10 sono vincenti.',
      },
      {
        q: 'Hai ♥A Q J 10 al morto contro un singolo. Quando riesce l’impasse di taglio (asso, poi donna)?',
        options: ['Quando il re è in Ovest', 'Quando il re è in Est', 'Ogni volta che le cuori sono 3-3', 'Sempre'],
        answer: 1,
        explain: 'La donna viene mossa attraverso Est: Est copre e tagli, oppure Est liscia e la donna fa presa. L’impasse normale, verso A Q, è quella che riesce quando il re è in Ovest.',
      },
      {
        q: 'Nella smazzata di 4♠ qui sopra, perché l’impasse di taglio è migliore dell’impasse normale?',
        options: ['Riesce più spesso', 'Se fallisce, perde a favore di Ovest, che non può attaccare il tuo ♦K', 'Risparmia un rientro', 'Batte atout nello stesso tempo'],
        answer: 1,
        explain: 'Ogni impasse riesce metà delle volte, ma quella normale perde a favore di Est, che può giocare quadri attraverso il tuo re. Se l’impasse di taglio fallisce, è in presa Ovest e tu hai già scartato una quadri.',
      },
      {
        q: 'Nella smazzata di perdente su perdente, Est taglia la terza cuori con il ♠J. Che cosa fai?',
        options: ['Surtaglio con l’asso', 'Surtaglio con il re', 'Scarto la fiori perdente', 'Scarto una quadri'],
        answer: 2,
        explain: 'Surtagliare promuove la ♠Q 6 di Ovest a una presa. Scartare la fiori, che era comunque perdente, lascia intatte le tue atout, e asso e re catturano poi la donna.',
      },
      {
        q: 'Il morto ha ♥A 6 5 4 3 e tu un singolo. Le cuori della difesa sono divise 4-3. Quante volte devi tagliare prima che l’ultima cuori del morto sia vincente?',
        options: ['Una', 'Due', 'Tre', 'Quattro'],
        answer: 2,
        explain: 'Dopo l’asso la difesa ha ancora cinque cuori, tre in una mano. Devi tagliare tre giri e ti serve un rientro al morto dopo ogni taglio.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'La riapertura',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quando e come riaprire la licita in posizione di riapertura, e perché lì puoi dichiarare con meno.',
    body: `
<h3>La posizione di riapertura</h3>
<p>Sei in <strong>posizione di riapertura</strong> quando il tuo passo chiuderebbe la licita. Per esempio, Ovest apre 1♥, il compagno passa, Est passa, e tocca a te. Gli avversari si sono fermati a un livello basso, e questo ti dice qualcosa: Est ha meno di 6 punti, e di solito Ovest non è molto forte. La forza mancante deve pur essere da qualche parte, e buona parte è nella mano del compagno. Il compagno può aver passato con una buona mano semplicemente perché non aveva una dichiarazione adatta, per esempio con lunghezza a cuori.</p>

<h3>Prendi in prestito un re</h3>
<p>Quindi in posizione di riapertura puoi agire con circa <strong>3 PO in meno</strong> di quelli che ti servirebbero in posizione diretta, come se avessi preso in prestito un re dal compagno. Il compagno deve poi ricordarsi di restituire il re e non dichiarare come se la tua azione fosse a pieno valore.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Azione di riapertura dopo 1♥ – passo – passo</th><th>Significato approssimativo</th></tr></thead>
<tbody>
<tr><td>Intervento a colore</td><td>Circa 5-13 PO e un colore ragionevole</td></tr>
<tr><td>Contro</td><td>Circa 9+ PO, corto a cuori, appoggio negli altri colori (o una mano forte)</td></tr>
<tr><td>1SA</td><td>Circa 11-14 PO, bilanciata, con il fermo a cuori</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – P – P – ?: contro"></div>
<p>10 PO e cuori corti: troppo leggero per un contro diretto, ma un normale contro di riapertura.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – P – P – ?: 1SA"></div>
<p>13 PO, bilanciata, con le quadri fermate: un 1SA in riapertura, che mostra circa 11-14 invece dei 15-18 di un intervento diretto di 1SA.</p>

<h3>Quando hanno trovato un fit</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Riapri con un contro"></div>
<p>Gli avversari hanno trovato un fit a picche e si sono fermati a livello di due, quindi hanno solo circa metà della forza in punti onori. Se hanno otto o nove picche, molto probabilmente anche la tua linea ha un fit. Lasciarli giocare un contratto a livello di due quando hai un fit di solito è una politica perdente. Contra per informazione, invitando il compagno a dichiarare il suo colore migliore a livello di tre.</p>

<h3>Quando non riaprire</h3>
<ul>
<li><strong>Quando sei lungo nel loro colore.</strong> Allora il compagno è corto, e con dei valori di solito avrebbe contrato. Possono essere in un cattivo contratto; lasciaglielo giocare.</li>
<li><strong>Quando non hanno fit e sono in difficoltà.</strong> Se l’apertore ha ridichiarato un secondo colore e il rispondente ha dato una preferenza riluttante, possono andare sotto: non salvarli.</li>
<li><strong>Dopo 1SA – passo – passo</strong> riapri solo con un buon colore o con distribuzione. Il compagno dell’apertore può avere fino a 7 punti, e la forza è divisa in modo più uniforme.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – P – P – ?: passo"></div>
<p>11 PO, ma cinque cuori, cioè il colore dell’apertore. Il compagno ha probabilmente al massimo una o due carte di cuori e non ha contrato, quindi è debole. 1♥ probabilmente andrà sotto; passa.</p>
<div class="tip">Quando il compagno riapre, ricorda che ha già contato una parte dei tuoi valori. Dichiara con un livello di prudenza in più rispetto a quando agisce in posizione diretta.</div>
<div class="warn">Non punire il compagno per aver riaperto la licita. Se hai una buona mano e il compagno riapre con un contro, chiediti se sta facendo una riapertura leggera prima di saltare a manche.</div>
`,
    keyPoints: [
      'In posizione di riapertura puoi agire con circa 3 PO in meno che in posizione diretta («prendi in prestito un re»).',
      'Dopo 1♥ – P – P: un colore con circa 5-13, il contro con circa 9+, 1SA con circa 11-14.',
      'Non lasciare che gli avversari giochino a livello di due quando hanno trovato un fit: competi.',
      'Fai attenzione a riaprire quando sei lungo nel loro colore.',
      'Quando il compagno riapre, restituisci il re: non dichiarare troppo nella risposta.',
    ],
    quiz: [
      {
        q: '1♥ – P – P – ? Hai ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 PO).',
        options: ['Passo', 'Contro', '1♠', '1SA'],
        answer: 1,
        explain: 'Cuori corti e appoggio negli altri colori. 10 PO sono pochi per un contro diretto, ma vanno bene in posizione di riapertura.',
      },
      {
        q: '1♦ – P – P – ? Hai ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 PO).',
        options: ['Passo', 'Contro', '1SA', '2SA'],
        answer: 2,
        explain: 'Un 1SA in riapertura mostra circa 11-14 con il fermo. È esattamente questa mano.',
      },
      {
        q: '1♥ – P – P – ? Hai ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 PO).',
        options: ['Passo', 'Contro', '1SA', '2♦'],
        answer: 0,
        explain: 'Con cinque carte nel colore dell’apertore, il compagno è corto a cuori e con dei valori avrebbe contrato. 1♥ può benissimo andare sotto; passa.',
      },
      {
        q: 'Perché puoi riaprire con meno punti di quelli che ti servirebbero in posizione diretta?',
        options: ['Perché gli avversari sono deboli, quindi il compagno deve avere qualche valore', 'Perché le regole lo permettono', 'Perché sei in zona', 'Perché gli avversari non possono contrare'],
        answer: 0,
        explain: 'Se gli avversari si fermano a un livello basso, la forza restante è divisa tra te e il compagno. Il compagno può aver passato con una mano discreta per mancanza di una buona dichiarazione.',
      },
      {
        q: 'Gli avversari dichiarano 1♠ – 2♠ e passano. In posizione di riapertura, qual è il principio generale?',
        options: ['Passare sempre: hanno un fit', 'Competere: quando hanno un fit a livello di due, probabilmente ce l’ha anche la tua linea', 'Dichiarare solo con 12+ PO', 'Contrare per punire'],
        answer: 1,
        explain: 'Se hanno otto o nove atout, probabilmente avete anche voi un fit. Lasciarli giocare a livello di due di solito è peggio che competere fino al livello di tre.',
      },
    ],
  },
  {
    id: 'law-of-total-tricks',
    title: 'La Legge delle prese totali',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Come il numero di atout delle due linee guida le decisioni competitive nella lotta per il parziale.',
    body: `
<h3>La Legge</h3>
<p>Il <strong>numero totale di prese</strong> di una smazzata è definito come le prese che Nord-Sud possono fare nel loro colore d’atout migliore più quelle che Est-Ovest possono fare nel loro. La Legge delle prese totali dice che questo totale è circa uguale al <strong>numero totale di atout</strong>: la lunghezza del fit più lungo di Nord-Sud più quella del fit più lungo di Est-Ovest.</p>
<p>Se voi avete nove picche e loro otto cuori, le prese totali sono circa 17: se loro possono fare nove prese a cuori, voi ne potete fare circa otto a picche, e così via.</p>

<h3>La regola pratica</h3>
<p>In una licita competitiva dichiara fino al livello corrispondente al numero di atout della tua linea:</p>
<table>
<thead><tr><th>Atout della tua linea</th><th>Competi fino a</th></tr></thead>
<tbody>
<tr><td>8</td><td>Livello 2 (8 prese)</td></tr>
<tr><td>9</td><td>Livello 3 (9 prese)</td></tr>
<tr><td>10</td><td>Livello 4 (10 prese)</td></tr>
</tbody>
</table>
<p>La logica: con nove atout sei «al sicuro» a livello di tre, perché anche se vai sotto, probabilmente gli avversari avrebbero mantenuto qualcosa. Con sole otto, dichiarare a livello di tre è rischioso quando anche loro ne hanno otto, perché il totale è appena 16.</p>

<h3>Un esempio</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Apertore: dichiara 3♠"></div>
<p>L’appoggio del compagno mostra tre atout. Con sei picche la tua linea ne ha nove: competi fino a 3♠. Se loro possono mantenere 3♥, il totale di circa 17 prese fa pensare che a picche ne farete otto o nove, quindi 3♠ è un buon risultato in ogni caso.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Apertore: passo"></div>
<p>Con cinque picche la tua linea ne ha otto. Se entrambe le linee hanno otto atout (16 in totale) e loro fanno nove prese a cuori, voi a picche ne fate solo sette: 3♠ andrebbe due down. Passa e difendi; i tuoi valori fuori dalle picche possono benissimo battere 3♥.</p>

<h3>Le correzioni</h3>
<p>La Legge è un’approssimazione. Aspettati <strong>più</strong> prese totali che atout con:</p>
<ul>
<li>un doppio fit (un secondo fit in un colore laterale),</li>
<li>corte nei colori avversari unite ad atout lunghe,</li>
<li>onori concentrati nei tuoi colori lunghi.</li>
</ul>
<p>Aspettati <strong>meno</strong> prese totali con:</p>
<ul>
<li>donne e fanti nei colori avversari (buoni in difesa, scarsi in attacco),</li>
<li>distribuzione piatta (4-3-3-3) in una delle due mani,</li>
<li>atout di cattiva qualità.</li>
</ul>

<h3>I principi della lotta per il parziale</h3>
<ul>
<li>Non lasciare giocare gli avversari a livello di due quando la tua linea ha un fit di otto carte e ce l’hanno anche loro.</li>
<li>Con nove atout competi fino a livello di tre; fai appoggi di sbarramento quando hai atout in più, soprattutto in zona favorevole.</li>
<li>Non dichiarare tre su tre con sole otto atout se non hai distribuzione in più: difendi.</li>
<li>Andare uno down senza contro (−50 o −100) è meglio che lasciargli mantenere un parziale (−110 o −140).</li>
</ul>
<div class="tip">Quando il compagno interviene e tu hai appoggio quarto e una mano debole, pensa alla Legge: nove o dieci atout in linea significano che devi appoggiare fino al livello corrispondente, rendendo la vita più difficile agli avversari.</div>
<div class="warn">Non usare la Legge per dichiarare manche e slam con mani deboli. È una guida per le decisioni competitive sul parziale, quando dichiarano entrambe le linee.</div>
`,
    keyPoints: [
      'Prese totali (i contratti migliori delle due linee) ≈ atout totali (i fit più lunghi delle due linee).',
      'Competi fino al livello pari al numero di atout della tua linea: 8 → livello di due, 9 → tre, 10 → quattro.',
      'Con otto atout per parte, tre su tre di solito è sbagliato: difendi.',
      'Correggi verso l’alto per doppi fit e corte; verso il basso per onori minori nei loro colori e distribuzioni piatte.',
      'Un piccolo passivo senza contro è meglio che lasciargli mantenere un parziale.',
    ],
    quiz: [
      {
        q: 'In una lotta per il parziale la tua linea ha nove atout. Fino a quale livello la Legge suggerisce di competere?',
        options: ['Livello 2', 'Livello 3', 'Livello 4', 'Livello 5'],
        answer: 1,
        explain: 'Dichiara fino al livello pari alle tue atout: nove atout, nove prese, livello di tre.',
      },
      {
        q: 'Ogni linea ha un fit di otto carte. Gli avversari dichiarano 3♥ sul tuo 2♠. Che cosa suggerisce la Legge?',
        options: ['Dichiarare 3♠', 'Difendere: con 16 prese totali, se loro ne fanno nove voi ne fate solo sette', 'Dichiarare 4♠', 'Contrare per punire qualunque sia la tua mano'],
        answer: 1,
        explain: 'Con 16 atout totali le prese sommano circa 16. Se 3♥ viene mantenuto, 3♠ va due down; se 3♠ si mantenesse, 3♥ andrebbe sotto. In ogni caso difendere è almeno altrettanto buono.',
      },
      {
        q: 'Quale caratteristica fa pensare a più prese totali del numero di atout?',
        options: ['Donne e fanti nel colore avversario', 'Una distribuzione 4-3-3-3', 'Un doppio fit con corte nel colore avversario', 'Atout deboli'],
        answer: 2,
        explain: 'Un secondo fit e le corte permettono a entrambe le linee di fare nei propri contratti più prese di quante ne indichi il solo conteggio delle atout.',
      },
      {
        q: 'Hai aperto 1♠ con sei picche e un minimo. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Passo', '3♠', '4♠', 'Contro'],
        answer: 1,
        explain: 'Il compagno ha tre picche, quindi la tua linea ne ha nove. Competere fino a 3♠ è ciò che raccomanda la Legge.',
      },
      {
        q: 'Quale è una correzione negativa, che fa pensare a meno prese totali?',
        options: ['Corte nel colore avversario', 'Donne e fanti nei colori avversari', 'Un fit di dieci carte', 'Un secondo fit'],
        answer: 1,
        explain: 'Gli onori minori nei colori avversari fanno prese in difesa ma servono poco quando giochi il contratto, quindi entrambe le linee tendono a fare meno prese come giocanti.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Zona, IMP, match point e par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Come la zona e la forma di punteggio cambiano le decisioni in licita e nel gioco.',
    body: `
<h3>La zona</h3>
<p>Ogni smazzata indica chi è in zona. Dal punto di vista della tua linea ci sono quattro combinazioni, che di solito si descrivono così:</p>
<ul>
<li><strong>Zona favorevole:</strong> voi in prima, loro in zona. Fai barrage e sacrifici senza paura; le tue prese di caduta costano poco e le loro manche valgono molto.</li>
<li><strong>Parità di zona:</strong> entrambe le linee in prima, o entrambe in zona.</li>
<li><strong>Zona sfavorevole:</strong> voi in zona, loro in prima. Attenzione: andare sotto costa 100 a presa senza contro e 200-300 contrati, mentre le loro manche valgono meno.</li>
</ul>
<p>La zona cambia anche le decisioni di manche: una manche in zona vale 500 in più invece di 300, quindi le manche in zona vanno dichiarate anche con valori più scarsi, soprattutto a IMP.</p>

<h3>Le squadre: gli IMP</h3>
<p>In un incontro a squadre le stesse smazzate si giocano su entrambi i tavoli, e la differenza di punteggio si converte in International Match Point (IMP):</p>
<table>
<thead><tr><th>Differenza</th><th>IMP</th><th>Differenza</th><th>IMP</th></tr></thead>
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
<p>Le differenze di 0-10 valgono 0; 3500-3990 valgono 23 e 4000+ valgono 24. La scala cresce lentamente, quindi i grossi scarti vengono da manche e slam, e le prese in più contano pochissimo. Da qui la strategia a IMP:</p>
<ul>
<li><strong>Dichiara le manche in modo aggressivo.</strong> In prima, dichiarare 4♠ fa guadagnare 6 IMP quando va (+420 contro +170) e ne fa perdere 5 quando va sotto (−50 contro +140): conviene dichiararla se riesce circa nel 45% dei casi. In zona: guadagni 10 (+620 contro +170), perdi 6 (−100 contro +140): conviene con circa il 37%.</li>
<li>I <strong>piccoli slam</strong> conviene dichiararli con circa il 50%; i <strong>grandi slam</strong> solo con molto più del 50% (il pareggio è intorno al 56-57%, e in pratica si vuole quasi la certezza).</li>
<li><strong>Nel gioco prima la sicurezza</strong>: rinuncia a una presa in più per proteggere il contratto.</li>
</ul>

<h3>Le coppie: i match point</h3>
<p>In un torneo a coppie il tuo punteggio su ogni smazzata viene confrontato con quello di tutte le altre coppie che hanno giocato nella tua linea, e guadagni un punto (due, in alcuni sistemi di calcolo) per ciascuna che batti. L’<em>entità</em> della differenza non conta, conta solo quante coppie batti. Questo cambia le priorità:</p>
<ul>
<li>Le prese in più contano: +450 batte +420 con la stessa sicurezza con cui +620 batte +170.</li>
<li>Le denominazioni che valgono di più contano: 3SA con dieci prese (+430) batte 4♠ con dieci prese (+420). Con due mani bilanciate e un fit 4-4 in una nobile, a volte si sceglie 3SA proprio per questo.</li>
<li>I parziali si combattono duramente: +110 contro +90 è una grossa differenza a match point, e spingere gli avversari un livello più su perché vadano sotto è spesso l’azione vincente.</li>
<li>Contrare un parziale per +200 può battere tutti quelli che hanno segnato +110 o +140, ma se lo mantengono contrato prendi lo zero.</li>
<li>Le giocate di sicurezza che costano una presa in più sono giuste solo quando il contratto stesso è davvero in pericolo.</li>
</ul>

<h3>Il par</h3>
<p>Il risultato di <strong>par</strong> è ciò che succede quando entrambe le linee dichiarano alla perfezione, conoscendo tutte e quattro le mani. Per esempio, se Est-Ovest, in zona, possono mantenere 4♠ (620) e Nord-Sud, in prima, possono fare otto prese a quadri, il par è 5♦ contrato tre down giocato da Nord-Sud: −500 per loro è meglio di −620. I risultati reali si confrontano con il par per vedere quale linea ha guadagnato, e ragionare sul par allena un buon giudizio competitivo.</p>
<div class="tip">Prima di ogni smazzata guarda la zona. Chiediti: «Quanto vale la loro manche, e quanto posso permettermi di perdere?»</div>
<div class="warn">A IMP non correre rischi inutili per le prese in più, e a match point non fare giocate di sicurezza che costano prese in più quando il contratto non è in pericolo. La giocata giusta può dipendere dalla forma di punteggio.</div>
`,
    keyPoints: [
      'La zona favorevole (voi in prima, loro in zona) è il momento per barrage e sacrifici; la sfavorevole è il momento della prudenza.',
      'A IMP: dichiara le manche in prima con circa il 45%, quelle in zona con circa il 37%, i piccoli slam con il 50%.',
      'A IMP le prese in più contano poco: proteggi il contratto.',
      'A match point conta ogni coppia che batti, quindi contano le prese in più e le denominazioni che valgono di più.',
      'Il par è il risultato di una licita perfetta di entrambe le linee, sacrifici compresi.',
    ],
    quiz: [
      {
        q: 'Che cosa significa «zona sfavorevole»?',
        options: ['Entrambe le linee in zona', 'Voi in zona, loro in prima', 'Voi in prima, loro in zona', 'Nessuna linea in zona'],
        answer: 1,
        explain: 'Sfavorevole significa che le tue prese di caduta costano care e le loro manche valgono relativamente poco: il momento peggiore per sacrifici o barrage spericolati.',
      },
      {
        q: 'A IMP, più o meno con quale frequenza deve riuscire una manche in zona perché valga la pena dichiararla?',
        options: ['Circa il 37%', 'Circa il 50%', 'Circa il 60%', 'Circa il 75%'],
        answer: 0,
        explain: 'Guadagni 10 IMP (+620 contro +170) quando riesce e ne perdi 6 (−100 contro +140) quando fallisce, quindi il pareggio è circa 6/16 = 37,5%.',
      },
      {
        q: 'A match point, perché conta +430 contro +420?',
        options: ['Non conta: la differenza è minima', 'Conta ogni coppia che superi, per quanto piccolo sia il margine', 'Per la scala degli IMP', 'Perché il senza atout dà un premio'],
        answer: 1,
        explain: 'A coppie conta solo la classifica. Dieci punti battono una coppia con la stessa sicurezza di mille.',
      },
      {
        q: 'A IMP, quanti IMP vale una differenza di 250 punti?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 valgono 6 IMP. Per esempio, +420 contro +170 quando una squadra dichiara una manche in prima e l’altra si ferma a un parziale.',
      },
      {
        q: 'Gli avversari, in zona, possono mantenere 4♠ (620). Tu sei in prima e ti aspetti di andare tre down a 5♦ contrato. Quanto vale?',
        options: ['Una perdita di 800', 'Una perdita di 500, che è meglio di −620', 'Una perdita di 300', 'Un guadagno'],
        answer: 1,
        explain: 'In prima, tre down contrato fa 100 + 200 + 200 = 500. Sono 120 meno della loro manche, quindi il sacrificio guadagna se 4♠ si mantiene davvero.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Le giocate di sicurezza',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Come rinunciare a poco, di solito una presa in più, per proteggere il contratto da una cattiva divisione.',
    body: `
<h3>Un’assicurazione per il contratto</h3>
<p>Una <strong>giocata di sicurezza</strong> è un modo di trattare un colore (o l’intera mano) che protegge da una cattiva divisione, di solito al prezzo di una piccola probabilità di una presa in più. Compri un’assicurazione: rinunci a qualcosa nelle distribuzioni buone per evitare il disastro in quelle cattive. La prima domanda quindi è sempre: <em>quante prese mi servono da questo colore?</em> La giocata migliore per quattro prese è spesso diversa da quella per cinque.</p>

<h3>Conservare una forchetta da entrambe le parti</h3>
<p>Hai A Q 9 6 5 al morto di fronte a K 10 4 3 in mano, ti mancano J 8 7 2 e ti servono cinque prese. Quasi sempre qualsiasi giocata sensata funziona; il pericolo è che le quattro carte mancanti siano tutte in una mano.</p>
<ul>
<li><strong>Incassa prima l’asso.</strong> Se Ovest non risponde, Est ha J 8 7 davanti al tuo K 10, quindi muovi due volte dal morto e fai l’impasse. Se non risponde Est, Ovest ha J 8 7 davanti a Q 9 del morto, quindi muovi due volte dalla mano e fai l’impasse. Cinque prese, qualunque difensore abbia la lunghezza.</li>
<li>Incassare prima il re è un errore: se poi Ovest non risponde, J 8 7 di Est stanno dietro ad A Q 9 rimasti al morto, il tuo 10 4 3 non può catturare il fante ed Est fa per forza una presa.</li>
</ul>
<p>La regola generale: quando hai tutti gli onori maggiori tranne uno, incassa prima l’onore che lascia una posizione d’impasse in <em>entrambe</em> le mani.</p>

<h3>Rinunciare a una presa in più per assicurarsi il contratto</h3>
<p>Hai A K 10 5 4 al morto di fronte a 8 7 6 e ti servono quattro prese; puoi permetterti di perderne una. La giocata naturale, asso, re e un terzo giro, fa quattro prese solo circa il 73% delle volte: fallisce con le divisioni 5-0 e con la maggior parte delle 4-1.</p>
<p>Meglio: incassa l’asso, poi muovi verso il morto e, se Ovest gioca basso, metti il 10. Se Est vince con un onore, il colore di solito era diviso 3-2 e il re e le carte lunghe sono buoni; se il 10 vince, hai catturato la lunghezza di Ovest. Così fai quattro prese circa l’82% delle volte: oltre a tutte le divisioni 3-2, copri tutte le 4-1 in cui la lunghezza è in Ovest. Il prezzo è una probabilità un po’ più bassa di fare cinque prese, che conta solo se ti servono.</p>

<h3>Lisciare per sicurezza</h3>
<p>Il morto ha A K 7 6 5 4 e un solo rientro esterno; tu hai 3 2 e ti servono quattro prese. Se giochi asso, re e un terzo giro, una divisione 4-1 ti lascia due perdenti nel colore e nessun modo di tornare alle carte lunghe. Invece liscia completamente il primo giro. Più tardi puoi giocare per asso e re e, se il colore era 4-1, cedere un altro giro e usare il rientro esterno per incassare le ultime due. Quattro prese contro qualsiasi divisione 3-2 o 4-1: 96%.</p>

<h3>La sicurezza dell’intera mano</h3>
<p>La sicurezza non riguarda solo i singoli colori. Supponi che a 3SA tu possa contare nove prese, e che un’impasse potrebbe darti la decima, ma se perde il difensore che prende può incassare quattro prese nel suo colore lungo. Non farla. A squadre una presa in più vale al massimo 1 IMP e il contratto vale molto di più. Allo stesso modo, prima di correre un rischio in un colore, chiediti se un altro colore potrebbe fornire le prese senza alcun rischio.</p>
<div class="tip">Prima di toccare un colore chiave, chiediti: «Qual è la peggiore divisione che posso affrontare, e quale giocata la affronta?»</div>

<h3>Le giocate di sicurezza e la forma di punteggio</h3>
<ul>
<li><strong>Squadre (IMP):</strong> fai quasi tutte le giocate di sicurezza che proteggono il contratto. Una presa in più fa guadagnare pochissimo; una manche fallita fa perdere molto.</li>
<li><strong>Coppie (match point):</strong> le prese in più contano, perché tutti gli altri nello stesso contratto sono in competizione con te. Fai una giocata di sicurezza solo quando il contratto è davvero in pericolo, o quando sospetti di essere in un contratto migliore di quello del resto della sala.</li>
</ul>
<div class="warn">Una giocata di sicurezza fatta quando non serviva, o che protegge dal pericolo sbagliato, è solo una presa persa. Prima conta le prese; poi decidi se ti serve un’assicurazione e di che tipo.</div>
`,
    keyPoints: [
      'Prima decidi quante prese ti servono dal colore; la giocata migliore dipende da questo.',
      'Con A Q 9 x x di fronte a K 10 x x incassa prima l’asso, così conservi un’impasse contro entrambi i difensori.',
      'Con A K 10 x x di fronte a x x x e quattro prese necessarie, incassa l’asso e poi fai l’impasse al 10.',
      'Liscia un giro iniziale quando i rientri scarseggiano e puoi permetterti una perdente.',
      'A IMP fai liberamente le giocate di sicurezza; a match point solo quando il contratto è a rischio.',
    ],
    quiz: [
      {
        q: 'Hai A Q 9 6 5 di fronte a K 10 4 3 e ti servono cinque prese. Quale carta incassi per prima?',
        options: ['L’asso', 'Il re', 'La donna', 'Non ha importanza'],
        answer: 0,
        explain: 'Dopo l’asso conservi K 10 dietro a Est e Q 9 dietro a Ovest, quindi puoi catturare una divisione 4-0 qualunque difensore abbia le quattro carte.',
      },
      {
        q: 'Hai A K 10 5 4 di fronte a 8 7 6 e ti servono solo quattro prese. Qual è la giocata di sicurezza?',
        options: ['Incasso asso e re, poi gioco un terzo giro', 'Incasso l’asso, poi muovo verso il morto e faccio l’impasse al 10 se Ovest gioca basso', 'Muovo il 10 dal morto', 'Liscio i primi due giri'],
        answer: 1,
        explain: 'Così ti proteggi da Q J 9 x in Ovest e fai comunque quattro prese con tutte le divisioni normali: circa l’82%, contro circa il 73% incassando le carte alte.',
      },
      {
        q: 'Il morto ha A K 7 6 5 4 e un rientro esterno; tu hai 3 2. Ti servono quattro prese dal colore. Che cosa fai?',
        options: ['Asso, re, poi un terzo giro', 'Liscio il primo giro', 'Muovo il 3 e faccio l’impasse al 7', 'Incasso l’asso e spero'],
        answer: 1,
        explain: 'Lisciando il primo giro conservi le carte alte del morto come rientri. Poi fai quattro prese sia con la 3-2 sia con la 4-1, circa il 96% delle volte.',
      },
      {
        q: 'A IMP conti nove prese a 3SA. Un’impasse potrebbe darti la decima, ma se perde la difesa può incassare un colore. Che cosa fai?',
        options: ['Faccio l’impasse per la presa in più', 'Incasso le mie nove prese', 'Prima liscio una presa', 'Gioco per uno squeeze'],
        answer: 1,
        explain: 'A IMP la presa in più non vale quasi niente, mentre andare sotto costa una manche. Metti al sicuro il contratto.',
      },
      {
        q: 'Perché a match point le giocate di sicurezza si fanno meno spesso?',
        options: ['Perché lì sono vietate', 'Perché una presa in più può battere le altre coppie nello stesso contratto', 'Perché le manche valgono meno', 'Perché i difensori sono più deboli'],
        answer: 1,
        explain: 'A coppie +450 batte +420 con la stessa sicurezza con cui +420 batte −50. Rinunciare a una presa in più costa match point ogni volta che il contratto non era davvero in pericolo.',
      },
    ],
  },
  {
    id: 'avoidance-play',
    title: 'L’evitamento: tenere fuori presa l’avversario pericoloso',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Come organizzare il gioco in modo che, se devi cedere una presa, la ceda al difensore che non può farti male.',
    body: `
<h3>Mano pericolosa e mano innocua</h3>
<p>Spesso solo un difensore può farti male. A senza atout è quello che ha vincenti affrancate nel suo colore lungo. In un contratto a colore può essere quello che può muovere attraverso un tuo re, o che può dare un taglio al compagno. Individua presto la <strong>mano pericolosa</strong> e pianifica di cedere le prese che devi cedere alla <strong>mano innocua</strong>. È il gioco d’evitamento.</p>

<h3>Un esempio completo</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3SA giocato da Sud. Ovest attacca con il ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conta:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: otto vincenti immediate. Le prese che mancano verranno dai fiori, ma potresti doverne cedere una alla ♣Q.</p>
<p><strong>Primo passo, il colpo in bianco.</strong> Hai sei picche in linea, quindi per la regola del 7 lisci una volta. Liscia il ♠K e vinci la seconda picca. Est aveva due picche, quindi ora non ne ha più: <strong>Est è la mano innocua, Ovest la mano pericolosa.</strong></p>
<p><strong>Secondo passo, scegli l’impasse.</strong> Nei fiori puoi scegliere da che parte fare l’impasse alla donna. Gioca il ♣K dalla mano, poi muovi una cartina di fiori verso il morto e, quando Ovest gioca basso, fai l’impasse al 10. Se la donna è di Ovest, l’impasse riesce. Se è di Est, come qui, Est prende ma non ha picche da rinviare. Vinci il cambio e fai dieci prese: una a picche, due a cuori, tre a quadri e quattro a fiori.</p>
<p>Fare l’impasse dall’altra parte (muovendo il ♣J attraverso Est verso il tuo re) con questa distribuzione funzionerebbe, ma perderebbe ogni volta che la donna fosse di Ovest, e Ovest incasserebbe le picche. La linea d’evitamento vince ovunque sia la donna.</p>
<p>E l’impasse a cuori, muovendo verso l’A J? Anche quella perderebbe con Ovest se Ovest avesse la ♥Q. Preferisci il colore in cui l’impasse perdente va verso la mano innocua.</p>
<div class="tip">Con un’impasse che si può fare da entrambe le parti, chiediti prima: «Se questa impasse perde, conta chi prende?» Se conta, fai l’impasse verso la mano innocua, e affidati all’intuito solo quando i due difensori sono ugualmente pericolosi.</div>

<h3>Altre tecniche d’evitamento</h3>
<ul>
<li><strong>Lisciare verso la mano innocua.</strong> Quando un colore deve cedere una presa, fai in modo che la vinca il difensore innocuo: muovi dalla mano che ti permette di giocare basso mentre la mano pericolosa non può vincere a buon mercato.</li>
<li><strong>Proteggere un re.</strong> Con K x in mano e la mano pericolosa alla tua destra, un’uscita attraverso il tuo re è fatale, quindi tieni fuori presa la mano pericolosa.</li>
<li><strong>Giocare verso gli onori</strong> in modo che a prendere sia il compagno della mano pericolosa, e non la mano pericolosa.</li>
<li><strong>Nei contratti a colore</strong> il pericolo può essere un taglio: se si sa che un difensore è corto in un colore, tieni fuori presa il suo compagno, così il taglio non può essere dato.</li>
</ul>
<div class="warn">L’evitamento funziona solo se sai quale difensore è pericoloso. Osserva l’attacco, la licita e le carte giocate alle prime prese, e individua chi ha il colore lungo prima di muovere il tuo colore chiave.</div>
`,
    keyPoints: [
      'Individua la mano pericolosa (spesso il difensore con vincenti affrancate) e la mano innocua.',
      'Se devi cedere una presa, cedila alla mano innocua.',
      'Combina il colpo in bianco con l’evitamento: rendi innocuo il compagno del difensore lungo, poi fai l’impasse verso di lui.',
      'Con un’impasse che si può fare da entrambe le parti, scegli la direzione che perde solo verso la mano innocua.',
      'Preferisci una fonte di prese in cui l’opzione perdente va verso la mano innocua.',
    ],
    quiz: [
      {
        q: 'A senza atout, quale difensore è di solito la mano pericolosa?',
        options: ['Quello con più PO', 'Quello con vincenti affrancate nel suo colore lungo', 'Quello alla tua sinistra', 'Quello che ha attaccato, sempre'],
        answer: 1,
        explain: 'La mano pericolosa è quella che, una volta in presa, può incassare abbastanza prese da batterti: di norma il difensore con il colore lungo affrancato.',
      },
      {
        q: 'Nella smazzata qui sopra, perché lisciare la prima picca?',
        options: ['Per fare una presa in più a picche', 'Per esaurire le picche di Est, così che Est diventi la mano innocua', 'Per nascondere la tua lunghezza a picche', 'Per creare un rientro al morto'],
        answer: 1,
        explain: 'Est aveva due picche. Dopo che hai vinto il secondo giro non ne ha più, quindi in presa non può farti male.',
      },
      {
        q: 'Nella smazzata qui sopra, da che parte devi fare l’impasse a fiori?',
        options: ['Impasse alla donna in Ovest, così un’impasse perdente va verso Est', 'Impasse alla donna in Est', 'Giocare in battuta', 'Lanciare una moneta'],
        answer: 0,
        explain: 'Muovendo verso il morto e facendo l’impasse al 10 vinci se la donna è di Ovest, e perdi solo verso Est, che non ha picche. Il contratto è al sicuro in entrambi i casi.',
      },
      {
        q: 'Perché non tentare l’impasse a cuori (muovendo verso l’A J) per la nona presa?',
        options: ['Perderebbe se Ovest, la mano pericolosa, avesse la ♥Q', 'Non può riuscire', 'Richiede due rientri', 'I cuori sono bloccati'],
        answer: 0,
        explain: 'Muovendo verso l’A J fai l’impasse contro Est ma perdi con la donna di Ovest, che poi incasserebbe le picche. L’impasse a fiori perde solo verso la mano innocua.',
      },
      {
        q: 'Hai K x in mano e la mano pericolosa è alla tua destra. Qual è il rischio?',
        options: ['Nessuno', 'Un’uscita della mano pericolosa attraverso il tuo re potrebbe intrappolarlo', 'Il tuo re verrà tagliato', 'Potresti bloccare il colore'],
        answer: 1,
        explain: 'Se il difensore alla tua destra va in presa, l’asso del suo compagno sta sopra il tuo re. Tieni fuori presa quel difensore, o fai in modo che sia l’altro a vincere le prese che devi cedere.',
      },
    ],
  },

  {
    id: 'dummy-reversal-and-trump-coup',
    title: 'Il morto rovesciato e il colpo d’atout',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Due giocate che tagliano di proposito nella mano lunga in atout: far battere le atout avversarie da quelle del morto, e accorciare le proprie atout per fare l’impasse quando il morto non ha più atout da muovere.',
    body: `
<h3>Tagliare nella mano lunga</h3>
<p>La lezione «La gestione delle atout» spiega che i tagli nella mano corta in atout guadagnano prese e i tagli nella mano lunga di solito no. Due tecniche capovolgono questa regola. Nel <strong>morto rovesciato</strong> tagli così tante volte in mano che sono le atout del morto a occuparsi di battere atout. Nel <strong>colpo d’atout</strong> tagli per accorciare le tue atout, così da catturare un onore d’atout di un difensore senza muovere atout.</p>

<h3>Il morto rovesciato</h3>
<p>Con cinque atout in mano e tre al morto fai di solito cinque prese in atout. Taglia tre volte in mano e poi batti atout con le tre del morto, e ne fai sei: tre tagli più tre giri d’atout dal morto. Il morto è diventato la mano principale, e i tuoi tagli sono ora tagli nella mano corta.</p>
<div class="deal" data-n="S:KQJ H:A654 D:853 C:K42" data-e="S:532 H:10872 D:964 C:973" data-s="S:A10987 H:3 D:A72 C:AQJ10" data-w="S:64 H:KQJ9 D:KQJ10 C:865" data-caption="6♠ giocato da Sud. Ovest attacca con il ♦K."></div>
<p><strong>Conta:</strong> cinque picche, il ♥A, il ♦A e quattro fiori fanno undici prese. Il morto non può tagliare niente, perché ha tante quadri e fiori quante te, e le tue due perdenti a quadri non hanno dove andare.</p>
<p><strong>Rovescia il morto:</strong> taglia in mano le tre cuori piccole del morto e lascia che ♠K Q J battano atout. I rientri al morto sono il ♥A, il ♠K, la ♠Q e il ♣K.</p>
<ol>
<li>Vinci con il ♦A e gioca cuori verso l’asso.</li>
<li>Taglia una cuori e gioca una picche piccola verso il re.</li>
<li>Taglia una cuori e gioca picche verso la donna.</li>
<li>Taglia l’ultima cuori con il ♠A ed entra al morto con fiori verso il re.</li>
<li>Batti l’ultima atout con il ♠J, scartando una quadri, e fai il resto delle fiori.</li>
</ol>
<p>Sei prese in atout (tre tagli e tre giri dal morto), il ♥A, il ♦A e quattro fiori fanno dodici. Il piano richiede atout divise 3-2, perché le tre atout del morto bastino a batterle, e ha bisogno di ogni rientro. Per questo solo un attacco in atout batte 6♠: toglie un giro d’atout prima che cominci la serie di tagli, e al giocante manca un rientro.</p>
<div class="tip">La prova del morto rovesciato: somma alla lunghezza in atout del morto i tagli che puoi fare in mano. Se il totale supera la tua lunghezza in atout, e le atout del morto sono abbastanza forti da battere quelle della difesa, rovesciare il morto guadagna una presa.</div>

<h3>Il colpo d’atout</h3>
<p>A volte un difensore ha un onore d’atout dietro la tua forchetta, come ♠K x dietro il tuo ♠A Q, e il morto non ha più atout da muovere attraverso. Non puoi fare l’impasse giocando atout tu stesso. Ma se alla fine della mano gioca il morto, quando il difensore ha solo atout, il difensore deve giocarne una <em>prima</em> di te, e l’impasse riesce senza atout al morto. È il <strong>colpo d’atout</strong>. Perché funzioni, devi prima accorciare le tue atout tagliando, finché non ne hai più del difensore.</p>
<div class="deal" data-n="S:54 H:AK76 D:AKQJ C:765" data-e="S:K876 H:QJ9 D:10985 C:32" data-s="S:AQJ1093 H:54 D:7632 C:4" data-w="S:2 H:10832 D:4 C:AKQJ1098" data-caption="6♠ giocato da Sud. Ovest incassa il ♣A e cambia con il ♥10."></div>
<p>Non puoi perdere più niente. Vinci con il ♥A e muovi picche: Est gioca piccolo e il tuo 9 fa presa. Entra al morto con il ♦A e ripeti l’impasse: il 10 fa presa e Ovest scarta. Est aveva quattro atout e ha ancora ♠K 8 dietro il tuo ♠A Q J 3, e il morto non ha più picche. Se incassi ora l’asso, il re di Est fa presa: un down.</p>
<p>Invece accorcia le tue atout. Ne hai quattro contro le due di Est, quindi devi tagliare due volte:</p>
<ol>
<li>Entra al morto con il ♦K, incassa il ♥K e taglia una fiori con il ♠3.</li>
<li>Entra al morto con la ♦Q e taglia una cuori con il ♠J. Ora hai ♠A Q, tante atout quante Est.</li>
<li>Entra al morto con il ♦J; Est risponde. Alla dodicesima presa gioca il morto.</li>
</ol>
<p>Taglia una fiori e una cuori, non due fiori: così Est deve rispondere ogni volta e non ottiene mai uno scarto libero. Se l’ottenesse, scarterebbe una quadri e più tardi taglierebbe una delle vincenti a quadri del morto.</p>
<div class="deal" data-n="S:- H:6 D:- C:6" data-e="S:K8 H:- D:- C:-" data-s="S:AQ H:- D:- C:-" data-w="S:- H:- D:- C:KQ" data-caption="Le ultime due prese. Atout picche e gioca il morto."></div>
<p>Est ha solo atout e deve giocarne una prima di te: l’♠8, e vinci con la donna, oppure il ♠K, e vinci con l’asso. Dodici prese.</p>
<h4>Che cosa serve per un colpo d’atout</h4>
<ul>
<li><strong>Non avere più atout del difensore</strong> alla fine: accorcia le tue tagliando, se serve anche tagliando vincenti del morto (si chiama <em>grand coup</em>).</li>
<li><strong>Rientri al morto</strong> per ogni impasse in atout, ogni taglio e l’ultima uscita.</li>
<li><strong>Il momento giusto:</strong> quando arriva il colpo, al difensore devono essere rimaste solo atout. Contare la sua mano ti dice quando.</li>
</ul>
<div class="warn">Accorcia le tue atout solo quando sai che serve. Se le atout fossero state 3-3, l’asso avrebbe fatto cadere il re, e tagliare in mano avrebbe solo sprecato atout. Qui lo scarto di Ovest al secondo giro ti ha detto che Est ne aveva quattro.</div>
`,
    keyPoints: [
      'Nel morto rovesciato tagli così spesso nella mano lunga in atout che le atout del morto battono quelle della difesa.',
      'Guadagna quando i tagli in mano più la lunghezza in atout del morto superano la tua lunghezza in atout; servono buone atout al morto e rientri.',
      'Il colpo d’atout cattura un onore d’atout di un difensore senza muovere atout: gioca il morto e il difensore deve giocare per primo.',
      'Prima di un colpo d’atout accorcia le tue atout tagliando, finché non ne hai più del difensore.',
      'Conta prima le atout del difensore; il colpo serve solo quando la divisione è cattiva.',
    ],
    quiz: [
      {
        q: 'Che cos’è il morto rovesciato?',
        options: ['Tagliare al morto le perdenti del morto', 'Tagliare nella tua mano lunga in atout abbastanza volte da far battere le atout della difesa da quelle del morto', 'Lasciar giocare la mano al morto', 'Passare al senza atout'],
        answer: 1,
        explain: 'I ruoli delle mani si invertono: le tue atout servono per tagliare, e quelle del morto, più corte ma forti, battono le atout della difesa.',
      },
      {
        q: 'Hai cinque atout e il morto tre forti. Quanti tagli in mano ti servono perché il morto rovesciato guadagni una presa?',
        options: ['Uno', 'Due', 'Tre', 'Cinque'],
        answer: 2,
        explain: 'Tre tagli più tre giri d’atout dal morto fanno sei prese in atout, una più delle tue cinque.',
      },
      {
        q: 'Nella smazzata del morto rovesciato qui sopra, quale attacco batte 6♠?',
        options: ['Il ♦K', 'Una cuori', 'Un’atout', 'Una fiori'],
        answer: 2,
        explain: 'Un attacco in atout toglie un giro d’atout prima che il giocante possa cominciare a tagliare, e poi gli manca un rientro per completare il rovesciamento.',
      },
      {
        q: 'Che cosa devi fare prima di un colpo d’atout?',
        options: ['Battere tutte le atout della difesa', 'Accorciare le tue atout tagliando finché non ne hai più del difensore', 'Tenere un’atout al morto', 'Muovere la tua forchetta in atout'],
        answer: 1,
        explain: 'Alla fine il difensore deve avere solo atout e tu non più atout di lui, così che l’uscita dal morto lo costringa a giocare prima di te.',
      },
      {
        q: 'Nel finale del colpo d’atout qui sopra, perché il re di Est non fa presa?',
        options: ['Est deve giocare un’atout prima di te, e tu giochi sopra', 'Il re era già stato giocato', 'Il re è in Ovest', 'Est è in compressione a cuori'],
        answer: 0,
        explain: 'Gioca il morto e a Est restano solo ♠K 8. Qualunque carta giochi, vinci con quella immediatamente superiore.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Contare in difesa',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Come i difensori contano i punti, la distribuzione e le prese del giocante per trovare la difesa giusta.',
    body: `
<h3>Tre cose da contare</h3>
<p>I difensori forti sembrano vedere attraverso il dorso delle carte. Il loro segreto è contare. Dalla licita e dalle prime prese ricavano tre cose:</p>
<ol>
<li><strong>Punti:</strong> quanti PO hanno il giocante e il compagno.</li>
<li><strong>Distribuzione:</strong> quante carte ha il giocante in ogni colore.</li>
<li><strong>Prese:</strong> quante prese può fare il giocante e quante ne servono alla difesa.</li>
</ol>

<h3>Contare i punti</h3>
<p>Comincia dalla licita. Un’apertura di 1SA ha 15-17, un due debole 5-10, un appoggio limite 10-12. Quando scende il morto, somma i suoi PO ai tuoi e sottrai da 40.</p>
<p>Esempio: Sud apre 1SA e Nord appoggia a 3SA. Il morto ha 10 PO e tu 9. Il compagno ha 40 − 10 − 9 − (da 15 a 17) = da 4 a 6 PO. Se il compagno ha già mostrato il ♠K vincendo una presa con esso, ha al massimo altri 3 PO, quindi non può avere un altro asso. Qualsiasi altro asso mancante è quindi del giocante, ed è inutile sperare che il compagno vada in presa per incassare il suo colore lungo.</p>
<p>Lo stesso conto funziona al contrario. Se il giocante, che ha mostrato 15-17, ha già esibito ♠AQ, ♥AK e ♦K (16), non può avere anche il ♣A (arriverebbe a 20). Ce l’ha il compagno, e puoi muovere fiori con tranquillità attraverso il K del morto.</p>

<h3>Contare la distribuzione</h3>
<p>Ogni mano ha 13 carte. Usa prima la licita: un’apertura di 1♥ ha cinque o più cuori; 1♠ seguito da 2♥ mostra almeno cinque picche e quattro cuori; un’apertura di 1SA non ha singoli. Aggiungi i segnali di conto del compagno e il momento in cui un giocatore non risponde.</p>
<table>
<thead><tr><th>Fonte</th><th>Che cosa ricavi</th></tr></thead>
<tbody>
<tr><td>Apertura e ridichiarazione del giocante</td><td>La lunghezza nei colori dichiarati; mano bilanciata o no</td></tr>
<tr><td>Il morto</td><td>13 carte che puoi vedere</td></tr>
<tr><td>I segnali di conto del compagno</td><td>La lunghezza del compagno nei colori del giocante, quindi anche quella del giocante</td></tr>
<tr><td>Un giocatore che non risponde</td><td>La sua lunghezza esatta in quel colore</td></tr>
</tbody>
</table>
<p>Esempio: il giocante ha aperto 1♠ e ridichiarato 2♥, quindi ha almeno 5-4 nelle nobili. Il conto del compagno mostra che il giocante ha due quadri. Fanno undici carte, quindi il giocante ha al massimo due fiori, e se la licita fa pensare a una 5-4-2-2 ne ha esattamente due. Se ora il giocante muove fiori verso K Q x x del morto e tu hai l’asso, sai se lisciando puoi tagliarlo fuori dal resto del colore.</p>
<div class="tip">Conta la mano il prima possibile, idealmente entro la terza presa. Tieni a mente le quattro lunghezze (per esempio «5-4-2-2») e aggiornale ogni volta che una carta ti dice qualcosa.</div>

<h3>Contare le prese</h3>
<p>Chiediti: «Quante prese può fare il giocante quando va in presa?» Se bastano già per il contratto, devi fare subito le tue prese: cambia colore, incassa, o fai subito la presa che batte il contratto. Se al giocante mancano prese, difendi in modo passivo e lascia che sia lui a perderle.</p>
<p>Esempio: contro 4♠ il morto ha ♣A K Q J 5, e la licita e le prime prese mostrano che il giocante ha un colore di picche forte e il ♥A. Battute le atout, il giocante può contare cinque picche, cinque fiori e il ♥A: undici prese. Se hai prese a cuori o a quadri, devi farle subito, anche a costo di muovere sotto un re.</p>
<p>Al contrario, contro una licita 1SA – 3SA con un morto piatto e senza colori lunghi, il giocante può avere solo sette o otto prese. Allora la difesa deve evitare di aprire nuovi colori e aspettare: il giocante dovrà cedere prese.</p>

<h3>Mettere tutto insieme</h3>
<p>Contare non è un calcolo isolato, ma un’abitudine. A ogni presa chiediti che cosa ti dice la carta giocata sulle quattro mani. Man mano che il quadro si chiarisce, la difesa giusta spesso diventa ovvia, e quando non lo è, il conto ti dice almeno quali distribuzioni servono perché il contratto cada. Gioca per quelle distribuzioni.</p>
<div class="warn">Non contare solo le prese della tua linea. La domanda è sempre se il giocante può mantenere il contratto, e come la tua linea può impedirlo.</div>
`,
    keyPoints: [
      'Conta i punti: dalla licita, dal morto e dalla tua mano ricava i PO del compagno.',
      'Conta la distribuzione: licita, morto, segnali di conto del compagno e mancate risposte devono fare 13.',
      'Conta le prese del giocante: se ne ha abbastanza, fai subito le tue prese; se no, difendi in modo passivo.',
      'Quando il giocante ha mostrato una fascia di punti, gli onori già giocati limitano ciò che può ancora avere.',
      'Presumi la distribuzione che permette di battere il contratto e difendi di conseguenza.',
    ],
    quiz: [
      {
        q: 'Sud ha aperto 1SA (15-17) e Nord ha appoggiato a 3SA. Il morto ha 10 PO e tu 9. Quanti PO ha il compagno?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 tra giocante e compagno. Il giocante ne ha 15-17, quindi il compagno ne ha 4-6.',
      },
      {
        q: 'Il giocante ha aperto 1SA (15-17) e ha già mostrato ♠AQ, ♥AK e ♦K. Chi ha il ♣A?',
        options: ['Il giocante', 'Il compagno', 'Non si può sapere', 'Il morto'],
        answer: 1,
        explain: 'Il giocante ha mostrato 16 PO. Con il ♣A arriverebbe a 20, fuori dalla sua fascia, quindi deve averlo il compagno.',
      },
      {
        q: 'Il giocante ha aperto 1♠ e ridichiarato 2♥. Il conto del compagno mostra che il giocante ha due quadri. Quante carte di fiori può avere al massimo il giocante?',
        options: ['Una', 'Due', 'Tre', 'Quattro'],
        answer: 1,
        explain: 'Almeno cinque picche e quattro cuori più due quadri fanno undici, quindi il giocante ha al massimo due fiori.',
      },
      {
        q: 'Contro 4♠ conti undici prese per il giocante quando tornerà in presa. Che cosa deve fare la difesa?',
        options: ['Difendere in modo passivo', 'Fare o affrancare subito le proprie prese', 'Giocare atout', 'Aspettare che il giocante sbagli'],
        answer: 1,
        explain: 'Se il giocante ha le prese che gli servono, una difesa passiva gli lascia solo il tempo di farle. La tua unica chance è fare subito le tue prese.',
      },
      {
        q: 'Contro 3SA il morto è piatto e il giocante sembra avere solo sette o otto prese. Che tipo di difesa è di solito migliore?',
        options: ['Passiva: evitare di aprire nuovi colori', 'Attaccare a turno tutti i colori', 'Incassare subito tutti gli assi', 'Muovere sotto i propri re'],
        answer: 0,
        explain: 'Al giocante mancano prese. Aprire nuovi colori rischia di regalargliene una; con uscite sicure lo costringi a trovarle da solo.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Contro punitivi e sacrifici',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Quando contrare gli avversari per punirli, e quando proseguire fino a un contratto che ti aspetti di perdere perché costa meno del loro.',
    body: `
<h3>I contro punitivi</h3>
<p>Molti contro a basso livello sono informativi, quindi i contro punitivi nascono da poche situazioni chiare:</p>
<ul>
<li><strong>Dopo una sequenza di contro sputnik:</strong> il rispondente passa con una tenuta forte nel colore dell’interveniente, e l’apertore riapre con un contro su cui il rispondente passa (vedi la lezione «Il contro sputnik»).</li>
<li><strong>Dopo che la tua linea ha surcontrato</strong> (1♥ – X – XX), hai mostrato che la forza è vostra, e i contro sulle dichiarazioni di fuga degli avversari sono punitivi.</li>
<li><strong>Quando gli avversari si sono spinti</strong> a una manche o a un parziale alto in un misfit o in una licita competitiva, e tu hai prese in atout.</li>
<li><strong>Quando hai già descritto la tua mano</strong> e il compagno ha valori: allora il contro di uno di voi dice «possiamo batterlo».</li>
</ul>
<h4>Linee guida</h4>
<ul>
<li>Le prese in atout sono il motivo migliore per contrare. Le carte alte nei colori laterali possono essere tagliate o prese in impasse.</li>
<li>Non contrare una manche dichiarata liberamente solo con carte alte. Gli avversari sanno che cosa manca loro, e il tuo contro dice al giocante dove sono gli onori.</li>
<li>Pensa a che cosa succede se il contratto viene mantenuto. 2♥ contrato mantenuto vale 470 o 670: un parziale è diventato una manche.</li>
<li>Pensa a dove possono scappare. Contrare 1♠ quando hanno una facile fuga verso un fit migliore rende poco.</li>
</ul>

<h3>Quanto costa una caduta contrata?</h3>
<table>
<thead><tr><th>Sotto di</th><th>In prima contrato</th><th>In zona contrato</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>I sacrifici</h3>
<p>Un <strong>sacrificio</strong> è un contratto in cui ti aspetti di andare sotto, perché la penalità costerà meno di quanto varrebbe il contratto degli avversari. Confronta i numeri:</p>
<table>
<thead><tr><th>La loro manche</th><th>Vale</th><th>Puoi permetterti (contrato), in prima</th><th>Puoi permetterti (contrato), in zona</th></tr></thead>
<tbody>
<tr><td>In prima</td><td>420</td><td>2 down (300)</td><td>1 down (200)</td></tr>
<tr><td>In zona</td><td>620</td><td>3 down (500)</td><td>2 down (500)</td></tr>
</tbody>
</table>
<p>Quindi i sacrifici costano meno in <strong>zona favorevole</strong>: voi in prima, loro in zona.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Zona favorevole: dichiara 5♥"></div>
<p>Il compagno è intervenuto 2♥ ed Est è saltato a 4♠. Hai appoggio quinto a cuori, un singolo a picche e poca difesa: 4♠ verrà quasi certamente mantenuto, per 620. 5♥ contrato andrà probabilmente due o tre down: 300 o 500. Dichiara subito 5♥, prima che gli avversari possano scambiarsi altre informazioni.</p>

<h3>Quando non sacrificarsi</h3>
<ul>
<li><strong>Quando il loro contratto può cadere.</strong> Un sacrificio contro un contratto che sarebbe andato sotto è un <em>falso sacrificio</em>: trasformi un punteggio positivo in uno negativo. Se hai prese in difesa, difendi.</li>
<li><strong>Quando il costo è troppo alto.</strong> In zona contro prima non c’è quasi mai una difesa conveniente contro una manche.</li>
<li><strong>Quando hai già descritto la tua mano e il compagno è in una posizione migliore per decidere</strong>: decide il giocatore che ha più informazioni. Non scavalcare la decisione del compagno di difendere. Se il compagno ha fatto un passo forzante, segui gli accordi della coppia.</li>
<li><strong>Quando gli avversari potrebbero proseguire.</strong> Lasciati in pace, potrebbero salire a un contratto a livello di cinque che va sotto; un sacrificio, invece, può spingerli in uno slam che si mantiene.</li>
</ul>
<div class="tip">«Il livello di cinque è degli avversari»: quando dichiarano cinque sopra la tua manche a livello di quattro, difendere (spesso contrando) di solito è giusto. Dichiarare sei per sacrificarsi raramente conviene.</div>
<div class="warn">Decidi presto. Un sacrificio dichiarato subito, prima che gli avversari si siano scambiati informazioni, è molto più efficace di uno fatto dopo che hanno capito esattamente dove devono arrivare.</div>
`,
    keyPoints: [
      'I contro punitivi rendono di più con prese in atout, dopo che la tua linea ha mostrato di avere la forza.',
      'Non contrare manche dichiarate liberamente con le sole carte alte laterali, e attenzione a contrare un parziale trasformandolo in manche.',
      'Un sacrificio conviene quando la penalità è inferiore al valore del loro contratto.',
      'Contro una manche in zona (620), in prima puoi andare tre down contrato (500); contro una manche in prima (420), due down (300).',
      'Evita i falsi sacrifici: se hai prese in difesa, difendi.',
    ],
    quiz: [
      {
        q: 'Entrambe le linee sono in prima. Gli avversari possono mantenere 4♠ (420). Di quante prese puoi permetterti di andare sotto contrato in un sacrificio?',
        options: ['Una', 'Due', 'Tre', 'Quattro'],
        answer: 1,
        explain: 'Due down contrato in prima fa 300, meno di 420. Tre down fa 500, più della loro manche.',
      },
      {
        q: 'In zona favorevole gli avversari possono mantenere 4♠ in zona (620). Di quante prese puoi permetterti di andare sotto contrato?',
        options: ['Due', 'Tre', 'Quattro', 'Cinque'],
        answer: 1,
        explain: 'Tre down contrato in prima costa 500, meno di 620. Quattro down costa 800.',
      },
      {
        q: 'Che cos’è un falso sacrificio?',
        options: ['Un sacrificio che costa esattamente il valore della loro manche', 'Un sacrificio contro un contratto che sarebbe andato sotto', 'Un sacrificio a livello di sei', 'Un sacrificio che gli avversari non contrano'],
        answer: 1,
        explain: 'Se il loro contratto andava sotto, il tuo sacrificio trasforma un più in un meno. I valori difensivi sono un motivo per non sacrificarsi.',
      },
      {
        q: 'Gli avversari dichiarano 1♥ – 3♥ – 4♥ senza interferenze. Hai 12 PO ma solo cartine a cuori. Devi contrare?',
        options: ['Sì: hai una mano d’apertura', 'No: le carte alte fuori dalle atout raramente giustificano il contro di una manche dichiarata liberamente', 'Sì, per chiedere un attacco', 'Solo se sei in zona'],
        answer: 1,
        explain: 'Sanno di non avere tutte le carte alte. Il tuo contro guadagna poco se vanno uno down, costa molto se mantengono, e aiuta il giocante a localizzare gli onori mancanti.',
      },
      {
        q: 'Perché contrare un parziale a basso livello può costare caro?',
        options: ['Non costa mai caro', 'Perché se viene mantenuto, il valore delle prese contrato può arrivare alla manche: 2♥ contrato vale 470 o 670', 'Perché gli avversari ricevono un premio per essere contrati', 'Perché devi attaccare in atout'],
        answer: 1,
        explain: 'Con il contro, 2♥ ha un valore delle prese di 120, che vale come manche. Contra un parziale solo se ti aspetti di batterlo.',
      },
    ],
  },
  {
    id: 'leads-against-slams-and-doubles',
    title: 'Gli attacchi contro gli slam e i contratti contrati',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Come scegliere l’attacco contro uno slam, contro un contratto contrato o un sacrificio, e come il compagno può chiederti un attacco con un contro.',
    body: `
<h3>Contro gli slam a senza: non regalare niente</h3>
<p>Quando gli avversari dichiarano 6SA o 7SA hanno in linea circa 33 PO o più, e la tua linea ha pochissimo. Raramente avrai il tempo di affrancare un colore lungo, quindi il tuo compito è non regalare prese al giocante. Fai l’attacco più sicuro possibile: la testa di una sequenza o un colore senza onori. Non attaccare sotto un re o una donna: contro uno slam, spesso è la dodicesima presa.</p>
<div class="hand" data-cards="S:K1074 H:Q963 D:872 C:J3" data-label="In attacco contro 1SA – 6SA"></div>
<p>Attacca con l’♦8, la più alta da tre cartine. Una picche o una cuori potrebbero dare una presa al giocante con onori che non vedi; la quadri non regala niente, e il tuo ♠K e la tua ♥Q possono ancora fare presa se il giocante deve trovarli.</p>

<h3>Contro gli slam a colore: attaccare o aspettare?</h3>
<p>Contro sei a colore ti fai la stessa domanda che contro qualsiasi contratto a colore (vedi la lezione «La difesa contro i contratti a colore»), ma ti servono due prese e hai un solo attacco. L’attacco sicuro è la regola, ed è quella che segue il tutor nei suoi consigli d’attacco; l’attacco aggressivo è l’eccezione, per le licite che mostrano da dove verranno gli scarti del giocante.</p>
<ul>
<li><strong>Attacca in modo aggressivo</strong> quando la licita mostra un colore laterale lungo che fornirà scarti. Attacca sotto un re (o una donna) in un colore non dichiarato, sperando che il compagno abbia l’asso o la donna, per affrancare una presa prima che arrivino gli scarti.</li>
<li><strong>Sii passivo</strong> quando gli avversari sembrano aver dichiarato sulla forza, con mani bilanciate e senza colore laterale lungo. Il giocante deve allora trovare da solo dodici prese, e un attacco sicuro, spesso in atout, non regala niente.</li>
<li><strong>Un singolo</strong> vale la pena quando il compagno può avere un asso: vince e ti dà un taglio.</li>
</ul>
<div class="hand" data-cards="S:K852 H:74 D:9643 C:Q93" data-label="In attacco contro 6♥; il morto ha mostrato un colore di fiori lungo e forte"></div>
<p>Attacca con il ♠2. Dopo aver battuto atout, il giocante scarterà perdenti sulle fiori del morto, quindi la difesa deve affrancare prima le sue prese. Una picche sotto il re può trovare il compagno con l’asso o la donna e costruire una presa in tempo. Una quadri sarebbe sicura, ma troppo lenta.</p>
<h4>Attaccare con un asso</h4>
<p>Attacca con un asso senza il re contro uno slam a colore quando il morto ha mostrato un colore laterale lungo, così che il colore del tuo asso potrebbe sparire negli scarti, o quando hai buone possibilità di una seconda presa, come una presa in atout o un re piazzato dietro il colore del giocante. Altrimenti tienilo: l’asso farà la sua presa anche dopo, mentre attaccarci può affrancare il re e la donna del giocante. Contro 6SA un asso è una presa sicura, quindi non c’è fretta di giocarlo.</p>
<p>Contro un grande slam fai l’attacco più sicuro che hai, spesso in atout: il giocante ha bisogno di tutte le prese, e qualsiasi presa regali è fatale.</p>

<h3>I contri d’attacco</h3>
<p>Quando un avversario fa una dichiarazione artificiale, il contro del giocatore successivo di solito non ha niente di punitivo: chiede al compagno di attaccare in quel colore.</p>
<table>
<thead><tr><th>Il compagno contra</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>La Stayman: 1SA – 2♣</td><td>Attacca a fiori: il compagno ha un buon colore di fiori</td></tr>
<tr><td>Un transfer: 1SA – 2♦</td><td>Attacca a quadri</td></tr>
<tr><td>Una surlicita o dichiarazione di controllo, come 4♣ verso uno slam a cuori</td><td>Attacca a fiori</td></tr>
<tr><td>Una risposta alla Blackwood, come 5♦</td><td>Attacca a quadri</td></tr>
</tbody>
</table>
<p>Anche l’assenza del contro informa: se il compagno poteva contrare una surlicita di 4♦ e non l’ha fatto, probabilmente non vuole l’attacco a quadri.</p>
<div class="auction" data-calls="1NT P 2C X 2H P 4H P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:Q1084 H:75 D:K963 C:842" data-label="Ovest: in attacco contro 4♥"></div>
<p>Senza il contro forse attaccheresti a picche o a quadri, in entrambi i casi sotto un onore. Il contro di Est sulla Stayman ha chiesto fiori, quindi attacca con l’♣8, la più alta da tre cartine. Est ha un buon colore di fiori e tu non devi aprire gli altri colori.</p>

<h3>Gli attacchi contro i contratti contrati</h3>
<table>
<thead><tr><th>Situazione</th><th>Attacco</th></tr></thead>
<tbody>
<tr><td>Il compagno contra 3SA dopo aver dichiarato un colore</td><td>Il colore del compagno</td></tr>
<tr><td>Il compagno contra 3SA; tu hai dichiarato un colore e lui no</td><td>Il tuo colore</td></tr>
<tr><td>Il compagno contra 3SA; nessuno di voi due ha dichiarato</td><td>Il primo colore dichiarato dal morto</td></tr>
<tr><td>Il compagno contra uno slam</td><td>Un attacco insolito (vedi sotto)</td></tr>
<tr><td>La tua linea ha contrato il loro sacrificio</td><td>Di solito atout</td></tr>
<tr><td>Il compagno passa il tuo contro informativo per punire</td><td>Atout</td></tr>
</tbody>
</table>
<p>Perché atout contro un sacrificio? La linea che si sacrifica ha poche carte alte e spera di fare le sue prese tagliando; la tua linea ha le carte alte, che faranno comunque le loro prese. Ogni giro d’atout toglie dei tagli. Questi significati sono accordi diffusi: assicurati che il compagno li condivida.</p>

<h3>Il contro Lightner</h3>
<p>Contrare per punizione uno slam dichiarato liberamente rende poco. 6♠ un down vale 50 o 100 in più contrato che non contrato, ma se viene mantenuto il contro costa 230, molto di più se surcontrano, e avverte il giocante di una cattiva divisione. Perciò, secondo una convenzione che prende il nome da Theodore Lightner, il contro di uno slam da parte del giocatore che <em>non</em> è in attacco chiede un <strong>attacco insolito</strong>:</p>
<ul>
<li>non in atout, e non in un colore non dichiarato, perché è quello che attaccheresti comunque;</li>
<li>di solito il primo colore laterale dichiarato dal morto, spesso perché il compagno vi ha chicane;</li>
<li>se il compagno ha dichiarato un colore, il contro dice anche: non attaccare nel mio colore.</li>
</ul>
<div class="auction" data-calls="1S P 2H P 3S P 4NT P 5H P 6S X P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:73 H:84 D:QJ109 C:K8652" data-label="Ovest: in attacco dopo il contro di Est"></div>
<p>Il tuo attacco normale sarebbe la ♦Q. Il contro di Est chiede qualcosa di insolito: il primo colore dichiarato dal morto, cuori. Attacca con l’♥8. Est ha probabilmente chicane a cuori e taglierà, e poi alla difesa basterà un’altra presa.</p>
<div class="warn">Non fare un contro d’attacco solo perché hai carte alte nel colore. Contra quando vuoi davvero quell’attacco, e ricorda che anche gli avversari possono sfruttare il contro: possono surcontrare, o semplicemente evitare il contratto.</div>
`,
    keyPoints: [
      'Contro 6SA e 7SA attacca sicuro: non attaccare sotto un onore.',
      'Contro uno slam a colore attacca in modo aggressivo (spesso sotto un re) quando il morto ha un colore lungo per gli scarti; altrimenti sii passivo.',
      'Attacca con un asso contro uno slam quando potrebbe sparire negli scarti o speri in una seconda presa; altrimenti tienilo.',
      'Il contro di una dichiarazione artificiale come la Stayman, un transfer o una surlicita chiede l’attacco in quel colore.',
      'Il contro Lightner di uno slam chiede un attacco insolito, di solito il primo colore laterale del morto; contro un sacrificio contrato, attacca in atout.',
    ],
    quiz: [
      {
        q: 'Sei in attacco contro 1SA – 6SA con ♠K 10 7 4 ♥Q 9 6 3 ♦8 7 2 ♣J 3. Che cosa attacchi?',
        options: ['♠4', '♥3', '♦8', '♣J'],
        answer: 2,
        explain: 'Contro uno slam a senza attacca sicuro. L’♦8 non regala niente; attaccare sotto il re, la donna o il fante può dare al giocante la dodicesima presa.',
      },
      {
        q: 'Gli avversari dichiarano 6♥ dopo che il morto ha mostrato un colore di fiori lungo e forte. Che tipo di attacco è di solito giusto?',
        options: ['Passivo: in atout', 'Aggressivo: sotto un re in un colore non dichiarato, per affrancare una presa prima che il giocante possa scartare', 'Una fiori, per tagliare fuori il morto', 'Sempre un asso'],
        answer: 1,
        explain: 'Dopo aver battuto atout, le perdenti del giocante se ne andranno sulle fiori del morto. La difesa deve costruire prima le sue prese.',
      },
      {
        q: 'Gli avversari dichiarano 1SA – 2♣ (Stayman) e il compagno contra. Che cosa chiede il contro?',
        options: ['Di punire 2♣', 'L’attacco a fiori', 'Di dichiarare un nobile', 'Mostra una mano bilanciata forte'],
        answer: 1,
        explain: 'Il 2♣ è artificiale, quindi il contro è d’attacco: il compagno ha un buon colore di fiori e vuole che lo attacchi.',
      },
      {
        q: 'Il compagno fa un contro Lightner su 6♠. Il morto ha dichiarato cuori e tu hai due cuori e ♦Q J 10 9. Che cosa attacchi?',
        options: ['La ♦Q', 'Una cuori', 'Un’atout', 'Una fiori'],
        answer: 1,
        explain: 'Il contro chiede un attacco insolito, di solito il primo colore laterale del morto. Il compagno ha probabilmente chicane a cuori.',
      },
      {
        q: 'Hai contrato il sacrificio a 5♦ degli avversari. Qual è di solito l’attacco migliore?',
        options: ['Atout', 'Il tuo colore più lungo', 'Un asso, per vedere il morto', 'Un singolo'],
        answer: 0,
        explain: 'La linea che si sacrifica ha poche carte alte e fa le sue prese tagliando. Gli attacchi in atout tolgono quei tagli, e le tue carte alte faranno comunque le loro prese.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Controlli e cue bid: quando non usare il Blackwood',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Perché contare gli assi non basta per lo slam, e come le cue bid di controllo scoprono se ogni colore è coperto.',
    body: `
<h3>I controlli</h3>
<p>Per mantenere uno slam ti servono abbastanza prese, e devi anche impedire agli avversari di fare due prese prima che tu parta. Un colore è <strong>controllato</strong> se gli avversari non possono incassarvi due prese rapide:</p>
<ul>
<li><strong>Controllo di primo giro:</strong> l’asso o una chicane (in un contratto a colore).</li>
<li><strong>Controllo di secondo giro:</strong> il re o un singolo.</li>
</ul>
<p>Per un piccolo slam ti serve almeno il controllo di secondo giro in ogni colore laterale e non più di una perdente di primo giro in totale. Per un grande slam ti serve il controllo di primo giro ovunque e nessuna perdente.</p>
<p>Alcuni giocatori contano i controlli con A = 2 e K = 1 (12 nel mazzo). Le mani ricche di assi e re fanno slam che 33 punti fatti di donne e fanti non fanno.</p>

<h3>Dove il Blackwood fallisce</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Nord apre 1♥ e Sud appoggia con il 2SA Jacoby."></div>
<p>Nord ha 16 PO e Sud 13, con un fit di nove carte a cuori: un tentativo di slam è ragionevole. Se Sud usa il Blackwood, Nord mostra due assi, Sud ha il terzo, e Sud dichiara 6♥. La difesa incassa ♦A e ♦K. Il Blackwood ha detto che c’erano tre assi, ma non poteva dire a Sud che nessuna delle due mani controlla le quadri.</p>
<p>Non usare il Blackwood quando:</p>
<ul>
<li>hai due cartine (o più) in un colore che nessuno ha dichiarato, e non sai se il compagno lo controlla;</li>
<li>hai una chicane: l’asso del compagno nel colore della tua chicane è sprecato, ma il Blackwood lo conta;</li>
<li>la risposta potrebbe portarti troppo in alto, per esempio con atout fiori, dove una risposta di 5♥ non ti lascia modo di fermarti a 5♣.</li>
</ul>

<h3>Le cue bid (dichiarazioni di controllo)</h3>
<p>Una volta concordato un colore d’atout in una licita forzante, la dichiarazione di un nuovo colore a livello di quattro non mostra un colore: mostra un <strong>controllo</strong> in quel colore e interesse per lo slam. Il compagno risponde mostrando a sua volta il suo controllo più economico, oppure chiude nel colore d’atout. Nello stile moderno più diffuso una cue bid mostra un controllo di primo o di secondo giro (asso, re, chicane o singolo), e si dichiara prima il più economico, quindi <strong>saltare un colore nega il controllo in quel colore</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Dopo il 2SA Jacoby, il 3SA di Nord mostra una mano media (15-17) senza corte, la ridichiarazione standard sulla Jacoby. Sud dichiara 4♣: controllo a fiori e interesse per lo slam. Nord non ha il controllo a quadri, quindi invece di mostrare quello a picche chiude a 4♥, saltando il 4♦: così nega il controllo a quadri. Anche Sud non ha il controllo a quadri, quindi passa. Entrambe le mani hanno fatto il loro dovere, e la coppia si ferma al sicuro a manche.</p>
<p>Se Nord avesse avuto il ♦K invece del ♠K, su 4♣ avrebbe fatto la cue bid di 4♦. A quel punto ogni colore sarebbe stato controllato, Sud avrebbe potuto proseguire verso lo slam, e alla fine il Blackwood sarebbe stato sicuro per controllare gli assi.</p>
<p>I bot dichiarano così una volta concordata una nobile in una licita forzante manche, dopo un appoggio con il 2SA Jacoby o uno splinter. Usano una cue bid anche come tentativo di slam in una licita naturale: quando il compagno ha appena dichiarato una nobile che potrebbero appoggiare a manche, e lo slam è probabile se il compagno ha un po’ più di quanto mostrato, un nuovo colore a livello di quattro (non dichiarato dalla loro linea) appoggia la nobile del compagno e mostra un controllo. Le loro cue bid mostrano controlli di primo o secondo giro, prima il più economico, sotto la manche nella nobile concordata.</p>

<h3>Combinare gli strumenti</h3>
<ol>
<li>Concorda l’atout in una licita forzante.</li>
<li>Fai le cue bid per assicurarti che ogni colore laterale sia controllato.</li>
<li>Quando tutti i colori sono coperti, usa il Blackwood (i bot giocano la Roman Key Card Blackwood) per assicurarti che non manchino due assi, o un asso e il re d’atout.</li>
<li>Dichiara lo slam, o chiudi.</li>
</ol>
<div class="tip">Prima di dichiarare 4SA chiediti: «Se il compagno mostra il numero giusto di assi, saprò che cosa dichiarare?» Se la risposta è no, fai invece una cue bid.</div>
<div class="warn">Assicurati che la coppia sia d’accordo sulle cue bid prima di usarle. Una cue bid che il compagno legge come un colore naturale può finire in un contratto molto strano.</div>
`,
    keyPoints: [
      'Uno slam richiede che ogni colore laterale sia controllato: asso o chicane (primo giro), oppure re o singolo (secondo giro).',
      'Il Blackwood conta gli assi ma non può dirti quali, né se un colore laterale ha due perdenti rapide.',
      'Non usare il Blackwood con una chicane, con due cartine in un colore non dichiarato o quando la risposta può portarti troppo in alto.',
      'Le cue bid mostrano i controlli, prima il più economico; saltare un colore nega il controllo in quel colore.',
      'Prima le cue bid per controllare ogni colore, poi il Blackwood per controllare gli assi.',
    ],
    quiz: [
      {
        q: 'Quali carte danno il controllo di secondo giro di un colore in un contratto ad atout?',
        options: ['Asso o chicane', 'Re o singolo', 'Donna o doubleton', 'Due onori qualsiasi'],
        answer: 1,
        explain: 'Con il re o un singolo gli avversari possono fare al massimo una presa rapida nel colore. L’asso o una chicane sono il controllo di primo giro.',
      },
      {
        q: 'Nella smazzata qui sopra, perché il Blackwood porta a un cattivo slam?',
        options: ['Perché mancano due assi', 'Perché nessuna delle due mani controlla le quadri, cosa che il Blackwood non può rivelare', 'Perché i cuori sono divisi male', 'Perché Nord ha troppo pochi punti'],
        answer: 1,
        explain: 'Manca un solo asso, ma è il ♦A, e manca anche il ♦K. Gli avversari incassano subito due prese a quadri.',
      },
      {
        q: 'L’accordo è a cuori in una licita forzante. Il compagno fa la cue bid di 4♣ e tu dichiari 4♥, saltando il 4♦. Che cosa hai detto al compagno?',
        options: ['Ho il controllo a quadri', 'Non ho il controllo a quadri', 'Ho il ♠A', 'Voglio giocare a quadri'],
        answer: 1,
        explain: 'Le cue bid si fanno partendo dalla più economica. Saltando il 4♦ neghi il controllo a quadri, quindi il compagno sa che deve fermarsi a meno che non controlli lui le quadri.',
      },
      {
        q: 'Hai una chicane a fiori e vuoi esplorare uno slam a picche. Perché il Blackwood è una cattiva scelta?',
        options: ['Perché le chicane contano come assi', 'Perché il ♣A del compagno sarebbe sprecato, eppure il Blackwood lo conterebbe', 'Perché 4SA sarebbe quantitativo', 'Perché servono 37 punti'],
        answer: 1,
        explain: 'Il Blackwood ti dice quanti assi ha il compagno, non quali. L’asso di fronte alla tua chicane non porta nulla.',
      },
      {
        q: 'Qual è un ordine sensato degli strumenti per uno slam a colore?',
        options: ['Prima il Blackwood, poi le cue bid', 'Concordare l’atout, fare le cue bid sui controlli, poi il Blackwood', 'Dichiarare direttamente lo slam con 33 punti', 'Gerber, poi Blackwood'],
        answer: 1,
        explain: 'Le cue bid rivelano se ogni colore è coperto; poi il Blackwood assicura che alla coppia non manchino due assi.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Introduzione a compressioni e messe in presa',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Due tecniche avanzate che creano una presa dal nulla costringendo un difensore a scartare una guardia o a giocare verso la tua forza.',
    body: `
<h3>Quando impasse e divisioni non bastano</h3>
<p>Alcune prese non si vincono con la forza né con un’impasse. Si vincono perché un difensore è <em>costretto</em> a cederle, o perché deve scartare una carta che gli serve (una <strong>compressione</strong>, o squeeze), o perché deve giocare per primo quando ogni uscita costa una presa (una <strong>messa in presa</strong>). Di solito succedono entrambe alla fine della mano, ed entrambe richiedono un conto accurato.</p>

<h3>La compressione semplice</h3>
<p>Una compressione funziona quando un solo difensore protegge due colori. Quando giochi la tua ultima vincente in un terzo colore, quel difensore deve scartare una delle guardie, e il colore abbandonato ti dà una presa in più.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Senza atout. Muove Sud; a Sud servono tutte e tre le prese."></div>
<p>Ovest protegge i cuori (K Q contro A J del morto) e le quadri (la Q contro il tuo J). Sud gioca il ♠A, la <strong>carta di compressione</strong>, e Ovest deve scartare prima del morto:</p>
<ul>
<li>Se Ovest scarta la ♦Q, il tuo ♦J è vincente.</li>
<li>Se Ovest scarta una carta di cuori, il morto scarta il ♣3; giochi il ♥2 per l’asso, facendo cadere l’onore rimasto a Ovest, e il ♥J del morto vince l’ultima presa.</li>
</ul>
<p>Senza la compressione avresti fatto solo due prese.</p>
<h4>Che cosa serve per una compressione</h4>
<ul>
<li><strong>Minacce:</strong> carte che diventano vincenti se il difensore abbandona la guardia (qui il ♥J del morto e il tuo ♦J).</li>
<li><strong>Un solo difensore impegnato in entrambi i colori.</strong> Se il compagno potesse proteggere uno dei colori, non ci sarebbe compressione.</li>
<li><strong>Rientri</strong> per raggiungere le minacce dopo lo scarto (qui il ♥A, con una carta di cuori in mano per arrivarci).</li>
<li><strong>Il conto giusto:</strong> quando giochi la carta di compressione devi poter vincere tutte le prese restanti meno una. Cedere <em>presto</em> le prese che devi cedere, perché questo sia vero, si chiama <strong>rettificare il conto</strong>. Un segnale tipico: vedi che una compressione è possibile ma hai due perdenti; liscia presto una presa, così ne resta una sola.</li>
</ul>
<div class="tip">Non serve sempre vedere la compressione in anticipo. Incassare fino in fondo un colore lungo, tenendo le carte di minaccia, dà ai difensori molte occasioni di scartare male, e a volte semplicemente non possono evitarlo.</div>

<h3>La messa in presa</h3>
<p>La messa in presa mette in presa un difensore nel momento in cui qualsiasi carta giochi ti regala una presa: deve muovere verso la tua forchetta, o concederti un taglio e scarto.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Senza atout. Muove Sud; il ♣K è di Est."></div>
<p>Se muovi fiori e fai l’impasse alla donna, Est vince con il re e incassa il ♥A: fai una presa. Invece gioca il ♥6. Est vince con l’asso e ora gli restano solo fiori, quindi deve muovere sotto il re verso A Q del morto, e fai due prese.</p>
<h4>Eliminazione e messa in presa in un contratto a colore</h4>
<p>In un contratto ad atout la stessa idea si chiama eliminazione. Batti atout ma conservane almeno una in ciascuna mano. <strong>Elimina</strong> i colori laterali in cui il difensore potrebbe uscire senza danni, incassandoli o tagliandoli. Poi metti in presa il difensore con il colore che ti è rimasto. A quel punto il difensore deve muovere verso la tua forchetta oppure giocare un colore in cui sei in chicane in entrambe le mani, che ti permette di tagliare in una mano e scartare una perdente dall’altra.</p>
<p>Le eliminazioni spesso trasformano un’impasse al 50% in una certezza: con A J x di fronte a K 10 x e la donna mancante, non devi mai indovinare se è un difensore a dover aprire il colore per te.</p>
<div class="warn">Una messa in presa fallisce se il difensore ha ancora una carta d’uscita sicura. Prima di metterlo in presa, controlla che ogni colore in cui potrebbe uscire sia stato eliminato dalla sua mano o da entrambe le tue.</div>
`,
    keyPoints: [
      'Una compressione costringe un difensore che protegge due colori a scartare una delle guardie.',
      'Una compressione richiede minacce, un solo difensore impegnato, rientri e il conto rettificato (tutte le prese restanti meno una).',
      'Una messa in presa dà la mano a un difensore quando ogni sua uscita costa una presa alla sua linea.',
      'Eliminazione e messa in presa: batti atout (conservandone in entrambe le mani), elimina i colori laterali, poi metti in presa il difensore.',
      'Incassare un colore lungo tenendo le minacce dà ai difensori l’occasione di sbagliare.',
    ],
    quiz: [
      {
        q: 'Qual è la condizione essenziale per una compressione semplice?',
        options: ['Entrambi i difensori sono in chicane in un colore', 'Un solo difensore protegge due colori', 'Hai tutti gli assi', 'Le atout sono divise 3-2'],
        answer: 1,
        explain: 'Se un difensore deve tenere le guardie in due colori, non può conservarle entrambe quando è costretto a scartare. Se il compagno può proteggerne uno, non c’è compressione.',
      },
      {
        q: 'Che cosa significa «rettificare il conto»?',
        options: ['Contare i punti degli avversari', 'Cedere presto le prese che devi cedere, così che quando giochi la carta di compressione puoi vincere tutte le prese restanti meno una', 'Togliere l’ultima atout', 'Contare due volte le proprie vincenti'],
        answer: 1,
        explain: 'Una compressione richiede che il difensore resti senza carte di scarto. Se hai ancora due perdenti, il difensore ha una carta libera da scartare; lisciando presto una presa gliela togli.',
      },
      {
        q: 'Nel finale di compressione qui sopra, che cosa succede se Ovest scarta la ♦Q?',
        options: ['Il ♦J di Sud diventa vincente', 'Il ♥J del morto diventa vincente', 'Est vince una presa a quadri', 'Non cambia nulla'],
        answer: 0,
        explain: 'Ovest era l’unica guardia contro il ♦J. Uscita la donna, il tuo fante è la carta di quadri più alta rimasta.',
      },
      {
        q: 'Nel finale di messa in presa qui sopra, perché Est deve regalarti una presa?',
        options: ['Est deve rispondere a cuori', 'Dopo aver vinto con il ♥A, a Est restano solo fiori e deve muovere dal K verso A Q', 'Est è compresso', 'Est deve tagliare'],
        answer: 1,
        explain: 'Messo in presa con il ♥A, Est non ha uscite sicure. Qualsiasi carta di fiori giochi Est, la donna del morto vince, e poi l’asso fa cadere il re.',
      },
      {
        q: 'In un’eliminazione con messa in presa in un contratto a colore, che cosa devi conservare prima di mettere in presa un difensore?',
        options: ['Un’atout in ciascuna delle tue mani', 'Tutti gli assi', 'Un rientro per il compagno del difensore', 'Un’atout perdente'],
        answer: 0,
        explain: 'Con atout in entrambe le mani, un difensore che muove un colore in cui sei in chicane ti concede un taglio e scarto. Così al difensore restano solo uscite verso la tua forchetta.',
      },
    ],
  },
];
