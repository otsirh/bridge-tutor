// Lezioni, parte 1.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'Come funziona il bridge',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'La distribuzione delle carte, la licita, il contratto e il gioco, dalla prima dichiarazione all’ultima presa.',
    body: `
<h3>Quattro giocatori, due coppie</h3>
<p>Il bridge è un gioco di coppia. Nord e Sud giocano insieme contro Est e Ovest, e i compagni siedono uno di fronte all’altro. Si distribuisce l’intero mazzo di 52 carte, quindi ogni giocatore riceve 13 carte. All’interno di un colore le carte vanno dall’asso (la più alta) a K, Q, J, 10, 9 e così via fino al 2. Lo scopo è vincere <strong>prese</strong>: una presa è formata da una carta per ciascun giocatore, giocate in senso orario.</p>

<h3>Prima fase: la licita</h3>
<p>Prima che si giochi una carta c’è la licita. Il mazziere dichiara per primo e la licita prosegue in senso orario. A ogni turno un giocatore può <strong>passare</strong>, fare una <strong>dichiarazione</strong>, <strong>contrare</strong> una dichiarazione avversaria o <strong>surcontrare</strong> un contro avversario.</p>
<p>Una dichiarazione ha un livello (da 1 a 7) e una denominazione (un colore d’atout, oppure senza atout). Il livello è il numero di prese che prometti <em>oltre le prime sei</em>: 1♠ promette 7 prese con atout picche e 3SA promette 9 prese senza atout. Le prime sei prese si chiamano il <strong>libro</strong>.</p>
<p>Le denominazioni, dalla più bassa alla più alta, sono: ♣, ♦, ♥, ♠, SA. Ogni dichiarazione deve superare la precedente: o a un livello più alto, o allo stesso livello in una denominazione di rango superiore. Dopo 1♥ puoi dichiarare 1♠ o 1SA, ma per nominare i fiori devi dichiarare almeno 2♣.</p>
<p>La licita termina quando una dichiarazione, un contro o un surcontro è seguito da tre passo consecutivi. L’ultima dichiarazione è il <strong>contratto</strong>. Se all’inizio passano tutti e quattro i giocatori, le carte si ridistribuiscono.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Nord apre 1♥, Sud appoggia a 2♥ e Nord salta a 4♥. Poi passano tutti, quindi il contratto è 4♥: Nord-Sud devono fare almeno 10 delle 13 prese con atout cuori.</p>

<h3>I livelli del contratto</h3>
<table>
<thead><tr><th>Livello</th><th>Prese necessarie</th><th>Note</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>parziale</td></tr>
<tr><td>2</td><td>8</td><td>parziale</td></tr>
<tr><td>3</td><td>9</td><td>3SA è una manche</td></tr>
<tr><td>4</td><td>10</td><td>4♥ e 4♠ sono manche</td></tr>
<tr><td>5</td><td>11</td><td>5♣ e 5♦ sono manche</td></tr>
<tr><td>6</td><td>12</td><td>piccolo slam</td></tr>
<tr><td>7</td><td>13</td><td>grande slam</td></tr>
</tbody>
</table>
<p>Manche e slam valgono grossi premi. Per questo gran parte della licita ruota attorno a una sola domanda: la nostra linea ha abbastanza forza per la manche?</p>

<h3>Chi gioca la mano?</h3>
<p>Il <strong>giocante</strong> è il giocatore della linea che ha vinto la licita che ha nominato <em>per primo</em> la denominazione del contratto finale. Nella licita qui sopra Nord ha dichiarato per primo i cuori, quindi il giocante è Nord, anche se anche Sud ha dichiarato cuori. Il compagno del giocante diventa il <strong>morto</strong>.</p>

<h3>Seconda fase: il gioco</h3>
<ol>
<li>Il giocatore alla sinistra del giocante fa l’<strong>attacco</strong>. Se il giocante è Nord, attacca Est.</li>
<li>Il morto stende allora sul tavolo tutte le sue 13 carte scoperte, divise per colore. Il giocante gioca le carte di entrambe le mani; il morto non partecipa più al gioco.</li>
<li>Il gioco prosegue in senso orario. Ogni giocatore deve <strong>rispondere al colore</strong> (giocare una carta del colore uscito), se può.</li>
<li>Un giocatore che non ha carte del colore uscito (ha una <strong>chicane</strong>) può giocare un’atout, cioè <strong>tagliare</strong>, oppure gettare una carta qualsiasi di un altro colore, cioè <strong>scartare</strong>.</li>
<li>La presa la vince l’atout più alta giocata oppure, se non è stata giocata nessuna atout, la carta più alta del colore uscito. Chi vince una presa gioca per primo nella successiva.</li>
</ol>
<p>Esempio: l’atout è cuori ed Est attacca con il ♠K. Sud gioca il ♠4, Ovest il ♠9 e Nord, che non ha picche, taglia con il ♥2. Vince la presa Nord, perché qualsiasi atout batte qualsiasi carta di un altro colore. In un contratto a senza atout non ci sono atout, quindi vince sempre la carta più alta del colore uscito.</p>
<div class="tip">Uno scarto non può mai vincere una presa. Possono vincerla solo una carta del colore uscito o un’atout.</div>

<h3>Mantenere o battere il contratto</h3>
<p>Quando sono state giocate tutte le 13 prese, la linea del giocante segna punti se ha fatto almeno il numero di prese promesso nel contratto; le prese in più si chiamano <strong>surlevée</strong>. Se il giocante non ci arriva, i difensori segnano una penalità per ogni <strong>presa di caduta</strong>. Il contro aumenta sia il premio per il contratto mantenuto sia la penalità se va sotto.</p>
<div class="warn">Non rispondere al colore quando potresti è una <strong>renonce</strong>, punita con il trasferimento di prese all’altra linea. Prima di giocare una carta di un altro colore, controlla ancora di non avere davvero carte del colore uscito.</div>
`,
    keyPoints: [
      'Quattro giocatori divisi in due coppie; ogni giocatore ha 13 carte.',
      'Una dichiarazione a livello N promette 6 + N prese; le denominazioni in ordine sono ♣, ♦, ♥, ♠, SA.',
      'La licita termina dopo tre passo consecutivi; l’ultima dichiarazione è il contratto.',
      'Il giocante è il primo giocatore della linea vincente ad aver nominato la denominazione finale; attacca il giocatore alla sua sinistra.',
      'Devi rispondere al colore se puoi; se non puoi, puoi tagliare o scartare.',
      'Manche: 3SA, 4♥, 4♠, 5♣, 5♦. Slam: qualsiasi contratto a livello 6 o 7.',
    ],
    quiz: [
      {
        q: 'Il contratto finale è 3SA. Quante prese servono al giocante?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Aggiungi sei (il libro) al livello: 3 + 6 = 9 prese.',
      },
      {
        q: 'Nord apre 1♠, Est passa, Sud dichiara 2♠ e poi passano tutti. Chi è il giocante, e chi attacca?',
        options: ['Gioca Sud, attacca Ovest', 'Gioca Nord, attacca Est', 'Gioca Nord, attacca Ovest', 'Gioca Sud, attacca Est'],
        answer: 1,
        explain: 'Nord è stato il primo della sua linea a nominare le picche, quindi il giocante è Nord. L’attacco spetta al giocatore alla sinistra del giocante, cioè Est.',
      },
      {
        q: 'L’atout è picche. Viene giocato cuori e tu non hai cuori. Che cosa puoi fare?',
        options: ['Devi tagliare con una picca', 'Puoi tagliare con una picca o scartare una carta qualsiasi', 'Devi scartare una carta di fiori o di quadri', 'Devi giocare la carta più bassa'],
        answer: 1,
        explain: 'L’unico obbligo è rispondere al colore. Quando sei in chicane nel colore uscito sei libero di tagliare o di scartare; tagliare spesso è giusto, ma non è mai obbligatorio.',
      },
      {
        q: 'L’avversario alla tua destra ha aperto 1♥. Quale di queste dichiarazioni è regolare?',
        options: ['1♦', '1♣', '1SA', '1♥'],
        answer: 2,
        explain: 'Una dichiarazione deve superare la precedente. A livello di uno solo picche e senza atout stanno sopra i cuori, quindi 1♠ e 1SA sono regolari; fiori e quadri andrebbero dichiarati a livello di due.',
      },
      {
        q: 'Quale di questi contratti è una manche?',
        options: ['3♥', '4♦', '3SA', '2SA'],
        answer: 2,
        explain: 'La manche richiede 9 prese a senza atout, 10 in una nobile e 11 in un minore. 3SA lo è; 3♥ e 4♦ sono un livello sotto, e a 2SA manca una presa per la manche.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Valutare la mano',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Come contare i punti onori, la lunghezza e le corte, e come la regola del 20, la regola del 15, le perdenti e le prese rapide affinano la valutazione.',
    body: `
<h3>Punti onori</h3>
<p>La misura standard della forza sono i <strong>punti onori</strong> (PO): asso 4, re 3, donna 2, fante 1. Nel mazzo ci sono 40 PO, quindi una mano media ne ha 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 PO"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 PO. La mano è bilanciata, quindi si apre 1SA (15-17).</p>
<p>Obiettivi utili per il totale della coppia: circa 25 per la manche a 3SA o in una nobile, 29 per la manche in un minore, 33 per il piccolo slam e 37 per il grande slam. I punti sono una guida, non una garanzia: contano anche la distribuzione, il fit e la posizione degli onori.</p>

<h3>Punti di lunghezza: valutare i propri colori</h3>
<p>I colori lunghi producono prese in più una volta uscite le carte alte. Quando valuti la mano per aprire o per ridichiarare, aggiungi 1 punto per ogni carta oltre la quarta in qualsiasi colore: un colore quinto aggiunge 1, un colore sesto 2.</p>

<h3>Punti di appoggio: valutare un fit</h3>
<p>Quando sai di avere un fit nel colore del compagno, i colori corti acquistano valore perché con le tue atout puoi tagliare le vincenti degli avversari. Quando appoggi il compagno, conta le corte invece della lunghezza:</p>
<table>
<thead><tr><th>Corta</th><th>Con 4+ atout</th><th>Con 3 atout</th></tr></thead>
<tbody>
<tr><td>Chicane</td><td>5</td><td>3</td></tr>
<tr><td>Singolo</td><td>3</td><td>2</td></tr>
<tr><td>Doubleton</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Il compagno ha aperto 1♥"></div>
<p>Solo 8 PO, ma con quattro atout e un singolo aggiungi 3, per 11 punti di appoggio. È un appoggio limite a 3♥ (10-12).</p>
<div class="warn">La corta vale qualcosa solo quando hai un fit. Senza fit, un singolo nel colore del compagno è un difetto, non un pregio: segnala un misfit.</div>

<h3>Correggere la valutazione</h3>
<ul>
<li>Gli onori nei colori lunghi pesano più di quelli nei colori corti: ♠KQJ54 farà prese, ♠KQ forse no.</li>
<li>Gli onori non accompagnati nei colori corti valgono meno: un K, una Q o un J singoli, oppure una Q o un J secondi. Togli un punto.</li>
<li>La 4-3-3-3 è la distribuzione meno utile; valuta se togliere un punto.</li>
<li>La scala 4-3-2-1 sottovaluta un po’ assi e dieci e sopravvaluta un po’ donne e fanti.</li>
</ul>

<h3>La regola del 20 e la regola del 15</h3>
<p>In prima, seconda o terza posizione apri una mano da 10 o 11 PO se i PO più il numero di carte dei tuoi due colori più lunghi fanno 20 o più.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Regola del 20: apri 1♠"></div>
<p>10 PO + 5 + 5 = 20, quindi apri, e con due colori quinti apri nel più alto: 1♠. Confronta ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 PO + 4 + 3 = 18, quindi passa. Donne e fanti sparsi e una distribuzione piatta ne fanno una cattiva apertura.</p>
<p>In quarta posizione, dopo tre passo, apri con 13 o più PO; con 10-12 PO usa la regola del 15: apri solo se i PO più il numero di picche fanno 15 o più. Se passi la smazzata si chiude, quindi conviene aprire solo quando la tua linea ha buone probabilità di vincere la lotta per il parziale, e quelle lotte le decide quasi sempre il colore di picche.</p>

<h3>Il conteggio delle perdenti</h3>
<p>Una volta trovato un fit di 8+ carte, il conteggio delle perdenti (LTC, Losing Trick Count) dà un secondo parere basato sulla distribuzione. Guarda le prime tre carte di ogni colore e conta una perdente per ogni asso, re o donna che manca tra quelle:</p>
<table>
<thead><tr><th>Carte</th><th>Perdenti</th></tr></thead>
<tbody>
<tr><td>Chicane</td><td>0</td></tr>
<tr><td>A singolo / altro singolo</td><td>0 / 1</td></tr>
<tr><td>AK / Ax o Kx / Qx o xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Somma le tue perdenti a quelle del compagno e sottrai il totale da 24: il risultato è più o meno il numero di prese che la coppia farà con quel colore come atout. Un’apertura minima ha circa 7 perdenti.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Il compagno ha aperto 1♠"></div>
<p>♠K87 = 2 perdenti, ♥4 = 1, ♦A86 = 2, ♣853 = 3: 8 perdenti. 24 − (7 + 8) = 9 prese, quindi invita con 3♠. Il conteggio dei punti è d’accordo: 7 PO + 3 per il singolo = 10 punti di appoggio, un appoggio limite.</p>

<h3>Prese rapide</h3>
<p>Le prese rapide misurano la forza difensiva, cioè le prese che ti aspetti nei primi due giri di un colore: AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Un’apertura solida o un contro informativo hanno di solito circa 2 prese rapide. Le mani con poche prese rapide e molta distribuzione sono più adatte a giocare il contratto che a difendere.</p>
`,
    keyPoints: [
      'PO: asso 4, re 3, donna 2, fante 1; 40 nel mazzo, 10 in una mano media.',
      'Per la tua mano aggiungi un punto per ogni carta oltre la quarta; quando appoggi il compagno conta invece le corte (chicane 5, singolo 3, doubleton 1 con quattro atout).',
      'Regola del 20 per le aperture leggere in prima, seconda o terza posizione; regola del 15 (PO + picche) in quarta.',
      'LTC: prese ≈ 24 − perdenti della coppia, e un’apertura minima ha circa 7 perdenti.',
      'Circa 25 punti in linea per 3SA o la manche nobile, 29 per la manche nel minore, 33 per il piccolo slam.',
    ],
    quiz: [
      {
        q: 'Quanti PO ci sono in ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 PO.',
      },
      {
        q: 'Prima posizione. Hai 10 PO con cinque cuori e cinque fiori. Che cosa fai?',
        options: ['Passo: per aprire servono 12 PO', 'Apro 1♥: la regola del 20 è rispettata', 'Apro 1♣: con due colori quinti si apre nel più basso', 'Apro 2♥'],
        answer: 1,
        explain: '10 PO + 5 + 5 = 20, quindi la mano rispetta la regola del 20. Con due colori quinti si apre nel più alto, quindi 1♥ (i fiori li mostrerai dopo).',
      },
      {
        q: 'Il compagno apre 1♥. Hai quattro cuori e una chicane a picche. Quanti punti di corta aggiungi?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Con quattro o più atout una chicane vale 5 punti di appoggio: ogni picca del compagno può essere tagliata nella tua mano.',
      },
      {
        q: 'Hai una mano da 7 perdenti e il compagno ne ha 8, con un fit di 8 carte. Quante prese prevede il LTC?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Dato che si presume che l’apertore abbia 7 perdenti, un rispondente con 8 perdenti deve invitare a livello di tre invece di dichiarare manche.',
      },
      {
        q: 'Quarta posizione dopo tre passo: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 PO). Che cosa fai?',
        options: ['Passo: 11 PO non bastano', 'Apro 1♣: 11 + 4 picche = 15', 'Apro 1♠', 'Apro 1SA'],
        answer: 1,
        explain: 'La regola del 15 è rispettata: 11 PO + 4 picche = 15. Senza nobile quinta e con 3-3 nei minori apri 1♣. 1♠ prometterebbe cinque picche e 1SA richiede 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'Le aperture',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Quali mani aprire e quale apertura scegliere, da uno a colore a 1SA, 2SA, 2♣ e barrage.',
    body: `
<h3>Le aperture in sintesi</h3>
<table>
<thead><tr><th>Apertura</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 PO, 3+ fiori (il minore più lungo; con 3-3 nei minori apri 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 PO, 3+ quadri (il minore più lungo; con 4-4 nei minori apri 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 PO, 5+ carte nel colore</td></tr>
<tr><td>1SA</td><td>15-17 PO, bilanciata (può contenere un colore quinto)</td></tr>
<tr><td>2♣</td><td>Forte e convenzionale: 22+ PO o 9+ prese di gioco</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Due debole: un colore sesto e 5-10 PO</td></tr>
<tr><td>2SA</td><td>20-21 PO, bilanciata</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Barrage: un colore settimo e 5-10 PO</td></tr>
<tr><td>4♥ / 4♠</td><td>Barrage: un colore ottavo (o settimo con distribuzione in più)</td></tr>
</tbody>
</table>

<h3>È una mano d’apertura?</h3>
<p>Con 12 o più PO apri, tranne in quarta posizione. Con 10-11 PO in prima, seconda o terza posizione apri se è rispettata la regola del 20 (PO + lunghezze dei due colori più lunghi ≥ 20). In quarta posizione apri con 13 o più PO, e con 10-12 PO solo se è rispettata la regola del 15 (PO + numero di picche ≥ 15). Le mani con un colore lungo e meno punti possono essere adatte invece a un due debole o a un barrage.</p>

<h3>Mani bilanciate: decidono i punti</h3>
<p>Una mano bilanciata non ha chicane né singoli e ha al massimo un doubleton: 4-3-3-3, 4-4-3-2 o 5-3-3-2. Con una mano bilanciata il tuo piano è sempre mostrare la forza a senza atout, subito o al turno successivo:</p>
<table>
<thead><tr><th>PO</th><th>Piano</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Apri uno a colore, ridichiara 1SA</td></tr>
<tr><td>15-17</td><td>Apri 1SA</td></tr>
<tr><td>18-19</td><td>Apri uno a colore, poi salta a 2SA</td></tr>
<tr><td>20-21</td><td>Apri 2SA</td></tr>
<tr><td>22-24</td><td>Apri 2♣, poi ridichiara 2SA</td></tr>
<tr><td>25-27</td><td>Apri 2♣, poi ridichiara 3SA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Apri 1SA: 16 PO, bilanciata"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Apri 1♦: 14 PO, poi ridichiari 1SA"></div>

<h3>La scelta del colore</h3>
<ul>
<li>Con una nobile quinta o più lunga aprila, anche con una bilanciata da 12-14.</li>
<li>Con due colori quinti (o due colori sesti) apri nel più alto.</li>
<li>Con un colore sesto e uno quinto apri nel più lungo.</li>
<li>Senza nobile quinta apri nel minore più lungo. Con 3-3 nei minori apri 1♣; con 4-4 apri 1♦.</li>
<li>Le nobili quarte non si aprono mai. Con 4-4 nelle nobili e nessun colore quinto apri un minore; il compagno dichiarerà una nobile quarta se ce l’ha.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Apri 1♠: 12 PO, cinque picche"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Apri 1♦: 4-4 nei minori"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Apri 1♣: 3-3 nei minori"></div>
<p>L’ultima mano ha quattro picche, ma per aprire una nobile servono cinque carte, e con tre carte in ciascun minore l’apertura è 1♣. Se il compagno ha quattro picche risponderà 1♠ e il fit sarà trovato.</p>

<h3>Aperture forti e deboli</h3>
<p>2SA mostra una bilanciata da 20-21; 2♣ è l’unica apertura forzante e comprende tutte le mani da 22+ PO o da circa nove prese di gioco. All’altro estremo, i due deboli e i barrage tolgono spazio dichiarativo agli avversari quando hai un colore lungo ma poca difesa. Ognuna ha la sua lezione.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Apri 2SA: 21 PO, bilanciata"></div>
<div class="tip">Pianifica la ridichiarazione prima di aprire. Con una bilanciata da 12-14 ridichiarerai 1SA; con una bilanciata da 18-19 salterai a 2SA; con due colori dichiarerai il secondo. Se non esiste una ridichiarazione sensata, ripensa all’apertura.</div>
<div class="warn">Non aprire mai 1♥ o 1♠ con sole quattro carte. Il compagno appoggerà con tre carte, contando su un fit di almeno otto carte.</div>
`,
    keyPoints: [
      'Apri con 12+ PO; con 10-11 usa la regola del 20 (prima, seconda o terza posizione). In quarta posizione apri con 13+, o con 10-12 se è rispettata la regola del 15.',
      '1♥/1♠ promettono cinque carte; senza nobile quinta apri nel minore più lungo (1♣ con 3-3, 1♦ con 4-4).',
      'Bilanciate: 12-14 apri a colore e ridichiari 1SA; 15-17 1SA; 18-19 salti a 2SA; 20-21 2SA; 22+ 2♣.',
      'Due colori quinti: apri nel più alto; 6-5: apri nel più lungo.',
      'Pianifica la ridichiarazione prima di aprire.',
    ],
    quiz: [
      {
        q: 'Hai ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 PO). Che cosa apri?',
        options: ['1♥', '1♦', '1SA', '2♥'],
        answer: 0,
        explain: 'Con due colori quinti apri nel più alto. Dopo 1♥ potrai dichiarare quadri, e il compagno potrà scegliere tra i tuoi colori a basso livello.',
      },
      {
        q: 'Hai ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 PO). Che cosa apri?',
        options: ['1♣', '1SA', '1♦', 'Passo'],
        answer: 0,
        explain: 'La mano è bilanciata ma ha solo 14 PO, troppo pochi per 1SA (15-17). Apri nel minore più lungo, 1♣, e ridichiara 1SA per mostrare una bilanciata da 12-14.',
      },
      {
        q: 'Hai ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 PO). Che cosa apri?',
        options: ['1♦', '1SA', '2SA', '1♣'],
        answer: 1,
        explain: '16 PO con distribuzione 3-3-4-3 è un’apertura di 1SA da manuale. Una sola dichiarazione descrive sia la forza sia la distribuzione.',
      },
      {
        q: 'Hai ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 PO). Che cosa apri?',
        options: ['1♥', '1♣', '1♦', 'Passo'],
        answer: 1,
        explain: 'Per aprire una nobile servono cinque carte, quindi 1♥ è escluso. Senza nobile quinta apri nel minore più lungo; con 3-3 nei minori è 1♣.',
      },
      {
        q: 'Hai una bilanciata da 18 PO. Qual è il tuo piano?',
        options: ['Apro 1SA', 'Apro 2SA', 'Apro uno a colore e al giro successivo salto a 2SA', 'Apro 2♣'],
        answer: 2,
        explain: 'Una bilanciata da 18-19 è troppo forte per 1SA (15-17) e troppo debole per 2SA (20-21). Apri uno a colore e al turno successivo salta a 2SA.',
      },
    ],
  },
  {
    id: 'responding-to-one-of-a-suit',
    title: 'Rispondere all’apertura di uno a colore',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Come il rispondente appoggia, dichiara un nuovo colore o dichiara senza atout dopo che il compagno ha aperto di uno a colore.',
    body: `
<h3>I principi</h3>
<p>L’apertura a livello di uno del compagno mostra 12-21 PO, quindi con 6 o più punti devi rispondere: anche una mano debole può bastare per la manche di fronte a un’apertura forte. Con meno di 6 punti passa. Il tuo primo compito è informare il compagno sul fit; il secondo è mostrare la tua fascia di forza.</p>

<h3>Rispondere a 1♥ o 1♠</h3>
<p>Il compagno ha almeno cinque carte, quindi con tre carte di appoggio hai già un fit di otto carte. Appoggiare il compagno è la tua priorità assoluta.</p>
<table>
<thead><tr><th>Risposta</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>2 nella nobile</td><td>6-10 punti di appoggio, appoggio di 3+ carte</td></tr>
<tr><td>3 nella nobile (salto)</td><td>Appoggio limite: 10-12 punti di appoggio, 4+ carte, invitante</td></tr>
<tr><td>2SA</td><td>Jacoby: 13+ punti, 4+ carte di appoggio, forzante manche</td></tr>
<tr><td>4 nella nobile</td><td>Debole e distribuita: 5+ carte di appoggio, meno di 10 PO</td></tr>
<tr><td>Doppio salto in un nuovo colore</td><td>Splinter: 4+ carte di appoggio, singolo o chicane in quel colore, 13-16 punti</td></tr>
<tr><td>1♠ su 1♥</td><td>6+ punti, 4+ picche, forzante</td></tr>
<tr><td>1SA</td><td>6-10, senza fit, non forzante (su 1♥ nega quattro picche)</td></tr>
<tr><td>Nuovo colore a livello 2</td><td>10+ (11+ per sicurezza), 4+ carte, 5+ per 2♥ su 1♠; forzante per un giro</td></tr>
<tr><td>Cambio di colore a salto</td><td>19+ punti, forzante manche</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Il compagno ha aperto 1♠: dichiara 2♠"></div>
<p>6 PO e appoggio terzo: appoggia a 2♠. Non dichiarare 1SA e non cercare i cuori a livello di due: la risposta di 2♥ richiede cinque cuori e 10+ punti.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Il compagno ha aperto 1♠: dichiara 3♠"></div>
<p>7 PO più 3 per il singolo con quattro atout = 10 punti di appoggio: un appoggio limite. Il compagno passa con un minimo e dichiara manche con qualcosa in più.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Il compagno ha aperto 1♠: dichiara 2SA"></div>
<p>14 PO con quattro atout: il 2SA Jacoby fissa le picche come atout e forza la manche, lasciando spazio per esplorare lo slam.</p>
<p>Con un singolo e 13-16 punti lo splinter descrive meglio la mano: su 1♠, con ♠KQ74 ♥A853 ♦K962 ♣5 si dichiara 4♣. Vedi la lezione sugli appoggi splinter.</p>
<p>Con 6 PO, cinque cuori e un singolo, ♠4 ♥QJ852 ♦K9763 ♣82, su 1♥ salta a 4♥. Gli avversari hanno sicuramente un fit e molti punti, e tu vuoi costringerli a indovinare a livello di cinque.</p>

<h4>Appoggio terzo e 10-12 punti</h4>
<p>Il salto a tre promette di norma quattro atout. Con tre sole carte dichiara prima un nuovo colore e poi appoggia la nobile del compagno: su 1♥, con ♠A84 ♥K93 ♦KJ752 ♣64 si dichiara 2♦ e poi 4♥: 11 punti e un fit di fronte a un’apertura bastano di solito per la manche. (Solo quando una corta porta a 11–12 punti una mano con troppo pochi PO per un due su uno si salta subito a 3♥ con tre atout: 1SA negherebbe l’appoggio.) Con appoggio terzo e 13+ dichiara prima un nuovo colore e poi la manche nella nobile.</p>

<h3>Rispondere a 1♣ o 1♦</h3>
<p>Il compagno può avere solo tre carte nel minore, e un fit nobile vale di più, quindi cerca prima una nobile.</p>
<table>
<thead><tr><th>Risposta</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Nuovo colore a livello 1</td><td>6+ punti, 4+ carte, forzante. Dichiara prima il colore più lungo; con due quarte dichiara la più economica (in ordine crescente).</td></tr>
<tr><td>1SA</td><td>6-10, bilanciata, nessuna quarta nobile</td></tr>
<tr><td>2SA</td><td>13-15, bilanciata, nessuna quarta nobile, forzante manche</td></tr>
<tr><td>3SA</td><td>16-17, bilanciata</td></tr>
<tr><td>Appoggio a 2</td><td>6-10, 5+ fiori o 4+ quadri, nessuna quarta nobile</td></tr>
<tr><td>Appoggio a salto a 3</td><td>10-12, lo stesso appoggio, invitante</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ punti, forzante</td></tr>
<tr><td>Cambio di colore a salto</td><td>19+ punti</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Il compagno ha aperto 1♦: dichiara 1♥"></div>
<p>8 PO e una nobile quarta: mostrala a livello di uno. Dichiarando 1SA potresti perdere un fit 4-4 a cuori.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Il compagno ha aperto 1♣: dichiara 1SA"></div>
<p>8 PO, bilanciata, nessuna quarta nobile. Quattro fiori non bastano per appoggiare un colore che può essere di sole tre carte; 1SA descrive la mano.</p>
<p>Con 11 PO, cinque quadri e nessuna quarta nobile, ♠K5 ♥832 ♦KJ763 ♣A94, appoggia 1♦ a 3♦ (10-12). Con una bilanciata da 11-12 senza nobili, per esempio ♠KQ5 ♥J104 ♦A963 ♣J72 su 1♣, non esiste una dichiarazione diretta: rispondi 1♦ e poi dichiara 2SA per invitare a manche.</p>
<div class="warn">Non saltare a 2SA su 1♣ o 1♦ con 11 o 12 punti. Quel salto mostra 13-15 e obbliga il compagno alla manche. Dichiara prima un nuovo colore e invita con 2SA al giro successivo.</div>
<div class="tip">Il nuovo colore del rispondente è forzante per un giro. Puoi dichiarare un colore anche con una mano modesta e mostrare la tua forza al turno successivo.</div>
`,
    keyPoints: [
      'Rispondi con 6+ punti; appoggiare la nobile del compagno è la priorità assoluta.',
      'Su 1♥/1♠: 2 nella nobile = 6-10 con 3+ carte; 3 = 10-12 con 4+; 2SA = 13+ con 4+ (Jacoby); 4 = debole con 5+.',
      'Un nuovo colore a livello di due richiede 10+ (11+ per sicurezza) ed è forzante; 2♥ su 1♠ richiede cinque cuori.',
      'Su 1♣/1♦: dichiara prima una nobile quarta a livello di uno; 1SA = 6-10, 2SA = 13-15, 3SA = 16-17, tutte bilanciate senza nobili.',
      'Con una bilanciata da 11-12 dichiara prima un nuovo colore e poi invita con 2SA.',
    ],
    quiz: [
      {
        q: 'Il compagno apre 1♥. Hai ♠K72 ♥Q84 ♦J953 ♣Q62 (8 PO). Che cosa rispondi?',
        options: ['1SA', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Tre carte di appoggio per una nobile quinta significano un fit di otto carte; con 6-10 punti l’appoggio semplice a 2♥ lo dice subito al compagno. 1♠ richiederebbe quattro picche.',
      },
      {
        q: 'Il compagno apre 1♠. Hai ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 PO). Che cosa rispondi?',
        options: ['4♠', '3♠', '2SA', '2♦'],
        answer: 2,
        explain: '2SA (Jacoby) mostra 13+ con 4+ atout e forza la manche. 3♠ sarebbe solo un appoggio limite e 4♠ un appoggio debole e distribuito: entrambi sottovaluterebbero questa mano.',
      },
      {
        q: 'Il compagno apre 1♦. Hai ♠AJ85 ♥K1062 ♦74 ♣953 (8 PO). Che cosa rispondi?',
        options: ['1♠', '1♥', '1SA', '2♦'],
        answer: 1,
        explain: 'Con due quarte dichiara in ordine crescente: prima 1♥. Se il compagno ha quattro picche può dichiarare 1♠, così nessuno dei due fit va perso.',
      },
      {
        q: 'Il compagno apre 1♣. Hai ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 PO). Che cosa rispondi?',
        options: ['1SA', '2SA', '3SA', '1♦'],
        answer: 1,
        explain: 'Bilanciata, nessuna quarta nobile, 13 PO: 2SA mostra 13-15 e forza la manche. 1♦ prometterebbe quattro quadri e 3SA mostra 16-17.',
      },
      {
        q: 'Il compagno apre 1♠. Hai ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 PO). Che cosa rispondi?',
        options: ['2♥', '2♣', '1SA', '3♣'],
        answer: 1,
        explain: 'La risposta di 2♥ su 1♠ promette cinque cuori. Dichiara il tuo colore lungo, 2♣, che è forzante; potresti avere l’occasione di mostrare i cuori più avanti. 3♣ sarebbe un cambio di colore a salto da 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'La ridichiarazione dell’apertore',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Come l’apertore usa la seconda dichiarazione per mostrare una mano minima, media o massima e per descrivere la distribuzione, compresi rovesci e cambi di colore a salto.',
    body: `
<h3>Prima classifica la mano</h3>
<p>La tua apertura copriva una fascia ampia, 12-21. La ridichiarazione la restringe. Riconta i punti alla luce della risposta del compagno (aggiungi i punti di appoggio se hai trovato un fit) e colloca la mano in una di tre fasce:</p>
<table>
<thead><tr><th>Fascia</th><th>Punti</th><th>Azione tipica</th></tr></thead>
<tbody>
<tr><td>Minimo</td><td>12-15</td><td>La dichiarazione descrittiva più economica</td></tr>
<tr><td>Medio</td><td>16-18</td><td>Un salto, o un rovescio con 17+</td></tr>
<tr><td>Massimo</td><td>19-21</td><td>Dichiara manche, o forza con un cambio di colore a salto</td></tr>
</tbody>
</table>

<h3>Dopo una risposta a livello di uno</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>Il rispondente ha 6+ punti e quattro o più picche. Le scelte dell’apertore:</p>
<table>
<thead><tr><th>Ridichiarazione</th><th>Punti</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>Appoggio quarto a picche</td></tr>
<tr><td>3♠</td><td>16-18</td><td>Appoggio quarto, invitante</td></tr>
<tr><td>4♠</td><td>19-21</td><td>Appoggio quarto, per giocare</td></tr>
<tr><td>1SA</td><td>12-14</td><td>Bilanciata</td></tr>
<tr><td>2SA (salto)</td><td>18-19</td><td>Bilanciata, invitante</td></tr>
<tr><td>2♦</td><td>12-15</td><td>Di solito sei quadri</td></tr>
<tr><td>3♦ (salto)</td><td>16-18</td><td>Una buona sesta</td></tr>
<tr><td>2♣ (nuovo colore più basso)</td><td>12-18</td><td>Quattro o più fiori, non forzante</td></tr>
<tr><td>2♥ (rovescio)</td><td>17+</td><td>Quadri più lunghi dei cuori, forzante per un giro</td></tr>
<tr><td>3♣ (cambio di colore a salto)</td><td>19+</td><td>Forzante manche</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: ridichiara 1SA"></div>
<p>13 PO e bilanciata: 1SA. L’appoggio a 2♠ promette quattro picche, e il compagno potrebbe averne solo quattro.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: ridichiara 3♠"></div>
<p>16 PO più 1 per ciascuno dei due doubleton (cuori e fiori) con quattro atout: 16 + 1 + 1 = 18 punti di appoggio, una mano media. Salta a 3♠ per invitare a manche. Con un minimo (12-15) appoggia a 2♠; con 19+ dichiara 4♠.</p>

<h3>Il rovescio</h3>
<p>Il <strong>rovescio</strong> è una ridichiarazione in un nuovo colore a livello di due, di rango <em>superiore</em> al tuo primo colore, come 1♦ – 1♠ – 2♥ o 1♣ – 1♥ – 2♦. Per dare la preferenza al tuo primo colore il compagno ora deve salire a livello di tre, quindi il rovescio promette forza in più (17+) ed è forzante per un giro. Mostra anche che il primo colore è più lungo del secondo.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: rovescio a 2♥"></div>
<p>17 PO, cinque quadri e quattro cuori: 2♥ mostra in una sola dichiarazione la distribuzione e i valori in più.</p>
<div class="warn">Con un minimo non fare il rovescio. Con ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 PO), dopo 1♦ – 1♠ ridichiara 2♦. Non perderai un fit a cuori: con quattro cuori e quattro picche il compagno avrebbe risposto prima 1♥.</div>

<h3>Cambi di colore a salto e ridichiarazioni a salto</h3>
<p>Un salto in un nuovo colore (1♦ – 1♠ – 3♣) mostra 19+ e forza la manche. Una ridichiarazione a salto nel proprio colore (1♥ – 1♠ – 3♥) mostra 16-18 e una buona sesta; è invitante, non forzante.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: cambio di colore a salto, 3♣"></div>
<p>20 PO: troppo forte per un 2♣ non forzante e fuori dalla fascia 18-19 della ridichiarazione di 2SA. 3♣ forza la manche mentre cerchi il contratto migliore.</p>

<h3>Dopo 1SA o un appoggio</h3>
<p>Dopo 1♠ – 1SA il rispondente ha 6-10 e di solito niente fit. Passa con un minimo bilanciato; ripeti un colore sesto; mostra un secondo colore (un nuovo colore più basso del primo non è forzante); oppure invita con un salto quando hai 16-18 o più. Dopo 1♠ – 2♠ il rispondente ha 6-10 con appoggio: passa con un minimo, dichiara 3♠ per invitare con una mano media e dichiara 4♠ con un massimo. Qui il conteggio delle perdenti è una buona guida: con 6 perdenti invita, con 5 dichiara manche.</p>
<div class="tip">Una risposta a livello di due (1♠ – 2♣) mostra già 10+ ed è forzante per un giro, quindi l’apertore può fare una ridichiarazione naturale e descrittiva, senza bisogno di saltare solo per tenere aperta la licita.</div>
`,
    keyPoints: [
      'Classifica la mano: minimo 12-15, medio 16-18, massimo 19-21.',
      'Ridichiarazione di 1SA = bilanciata 12-14; salto a 2SA = bilanciata 18-19.',
      'Appoggia la nobile del rispondente con appoggio quarto: a livello di due con un minimo, di tre con una mano media, a manche con un massimo.',
      'Il rovescio (nuovo colore di rango superiore a livello di due) mostra 17+, è forzante e indica che il primo colore è più lungo.',
      'Il cambio di colore a salto dell’apertore mostra 19+ e forza la manche.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Hai ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 PO). Qual è la tua ridichiarazione?',
        options: ['1SA', '2♦', '2SA', '2♠'],
        answer: 0,
        explain: 'La mano è bilanciata con 12-14 PO, esattamente ciò che mostra 1SA. 2♦ suggerisce sei quadri e 2♠ promette quattro picche.',
      },
      {
        q: '1♣ – 1♥. Hai ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 PO). Qual è la tua ridichiarazione?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 2,
        explain: 'Con appoggio quarto conta i punti di appoggio: 18 PO + 1 per ciascun doubleton = 20, un massimo. Dichiara la manche: 4♥.',
      },
      {
        q: 'In quale di queste licite l’apertore fa un rovescio?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1SA – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'I cuori stanno sopra i quadri e 2♥ è a livello di due, quindi per preferire il primo colore dell’apertore il compagno deve dichiarare 3♦. Nelle altre licite il secondo colore è di rango inferiore oppure è dichiarato a livello di uno.',
      },
      {
        q: '1♦ – 1♥. Hai ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 PO). Qual è la tua ridichiarazione?',
        options: ['2♦', '3♦', '2SA', '1SA'],
        answer: 1,
        explain: 'Una mano media con una buona sesta: il salto a 3♦ mostra 16-18 e invita. 2♦ mostrerebbe un minimo, 1SA o 2SA una mano bilanciata.',
      },
      {
        q: '1♠ – 2♠. Hai ♠AQJ84 ♥K73 ♦A62 ♣95 (14 PO). Che cosa fai?',
        options: ['Passo', '3♠', '4♠', '2SA'],
        answer: 0,
        explain: '14 PO + 1 per la quinta picca = 15, un minimo. Il LTC è d’accordo: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 perdenti, il numero di un’apertura minima. Di fronte a un appoggio da 6-10 la manche è improbabile, quindi passa.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'Aperture e risposte a senza atout',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Le risposte a 1SA e 2SA con Stayman, transfer Jacoby, transfer per i minori, inviti e 4SA quantitativo.',
    body: `
<h3>Perché le aperture a senza atout sono facili</h3>
<p>1SA mostra 15-17 PO e una mano bilanciata (può contenere un colore quinto). Poiché la mano dell’apertore è così ben definita, di solito il rispondente sa subito dove deve arrivare la coppia e diventa il capitano. Somma i tuoi punti ai 15-17 del compagno: con 25 o più in linea vuoi la manche.</p>

<h3>Le risposte a 1SA</h3>
<table>
<thead><tr><th>Risposta</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Passo</td><td>0-7 senza nobile lunga</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ PO e una nobile quarta</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ cuori, forza qualsiasi. L’apertore dichiara 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ picche, forza qualsiasi. L’apertore dichiara 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer a fiori: l’apertore dichiara 3♣. Una mano debole con un minore lungo; passa su 3♣ o dichiara 3♦.</td></tr>
<tr><td>2SA</td><td>8-9, invitante</td></tr>
<tr><td>3SA</td><td>10-15, per giocare</td></tr>
<tr><td>4♣</td><td>Gerber: chiede gli assi</td></tr>
<tr><td>4♦ / 4♥</td><td>Transfer Texas: 6+ cuori / picche e valori di manche. L’apertore dichiara 4♥ / 4♠.</td></tr>
<tr><td>4SA</td><td>16-17, quantitativo: invita a 6SA</td></tr>
</tbody>
</table>

<h3>La Stayman</h3>
<p>2♣ chiede all’apertore una nobile quarta. L’apertore risponde 2♦ (nessuna nobile quarta), 2♥ (quattro cuori, eventualmente anche quattro picche) o 2♠ (quattro picche, non quattro cuori). Poi:</p>
<ul>
<li>Se c’è un fit, appoggia a tre per invitare o a quattro per giocare.</li>
<li>Se non c’è, dichiara 2SA con 8-9 o 3SA con 10-15.</li>
<li>Se l’apertore ha mostrato i cuori e tu hai le picche, dichiara 2SA o 3SA. L’apertore, che può avere entrambe le nobili, corregge a picche se ne ha quattro.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Il compagno ha aperto 1SA: dichiara 2♣"></div>
<p>10 PO e due nobili quarte. Su 2♦ dichiara 3SA; su 2♥ dichiara 4♥; su 2♠ dichiara 4♠. La Stayman richiede 8+ PO perché dopo la risposta di 2♦ devi poter dichiarare almeno 2SA.</p>

<h3>I transfer Jacoby</h3>
<p>Con una nobile quinta o più lunga fai il transfer: dichiara il colore sotto e lascia che sia l’apertore a dichiarare il tuo. Il giocante diventa la mano forte e l’attacco arriva verso di lei. I transfer si usano con qualsiasi forza, da zero punti a valori da slam.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Il compagno ha aperto 1SA: 2♥, poi passo"></div>
<p>3 PO. 2♠ renderà molto più di 1SA. Fai il transfer con 2♥ e passa sul 2♠ dell’apertore.</p>
<p>Completato il transfer, il rispondente prosegue così:</p>
<table>
<thead><tr><th>Dichiarazione successiva</th><th>Significato</th></tr></thead>
<tbody>
<tr><td>Passo</td><td>0-7, chiusura</td></tr>
<tr><td>2SA</td><td>8-9 con esattamente cinque carte nella nobile (sceglie l’apertore)</td></tr>
<tr><td>3 nella nobile</td><td>8-9 con sei o più carte, invitante</td></tr>
<tr><td>3SA</td><td>10-15 con esattamente cinque carte (l’apertore sceglie tra 3SA e 4 nella nobile)</td></tr>
<tr><td>4 nella nobile</td><td>10-15 con sei o più carte, per giocare (con i transfer Texas, dichiara invece subito 4♦ o 4♥)</td></tr>
<tr><td>Nuovo colore</td><td>Naturale e forzante</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Il compagno ha aperto 1SA: 2♦, poi 3SA"></div>
<p>10 PO e cinque cuori. Fai il transfer, poi dichiara 3SA. Con tre o più cuori l’apertore dichiara 4♥; con un doubleton passa.</p>
<p>Con appoggio quarto e 17 PO l’apertore fa la <strong>superaccettazione</strong> saltando: 1SA – 2♦ – 3♥. A quel punto il rispondente dichiara manche con quasi tutto, perché il fit è di almeno nove carte e l’apertore è al massimo della sua fascia.</p>

<h3>Minori lunghi, inviti e tentativi di slam</h3>
<p>Con una mano debole e sei o più carte in un minore dichiara 2♠: l’apertore deve dichiarare 3♣, e tu passi se il tuo colore è fiori o dichiari 3♦ se è quadri. Con ♠52 ♥742 ♦J3 ♣Q108653: 1SA – 2♠ – 3♣ – passo.</p>
<p>2SA invita a manche con 8-9. L’apertore passa con 15, dichiara 3SA con 17 e decide a giudizio con 16 (accetta con buoni dieci e nove o con un colore quinto). Qui 4SA non è Blackwood: mostra 16-17 e chiede all’apertore di dichiarare 6SA con un massimo. Con ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 PO) dichiara 4SA: 16 + 15-17 = 31-33 in linea, quindi lo slam è buono solo se l’apertore è al massimo della sua fascia.</p>

<h3>Rispondere a 2SA</h3>
<p>L’apertura di 2SA mostra 20-21. Gli stessi strumenti si usano un livello più in alto: 3♣ è Stayman, 3♦ e 3♥ sono transfer, 4♦ e 4♥ sono transfer Texas, 3SA mostra 4-10 punti e 4SA (11-12) è quantitativo. Bastano anche 4 punti per dichiarare la manche.</p>
<div class="tip">Con una nobile quinta e abbastanza per la manche, fai prima il transfer e poi dichiara 3SA. L’apertore, che conosce la propria mano e sa che hai cinque carte, fa la scelta finale tra 3SA e quattro nella nobile.</div>
<div class="warn">Non usare la Stayman con una bilanciata da 8+ senza nobili quarte. Finiresti per tirare a indovinare: dichiara semplicemente 2SA o 3SA.</div>
`,
    keyPoints: [
      '1SA = bilanciata 15-17; il rispondente somma i punti e sceglie il contratto.',
      '2♣ Stayman (8+, una nobile quarta): risposte 2♦ nessuna, 2♥ cuori (forse anche picche), 2♠ solo picche.',
      '2♦ e 2♥ sono transfer a cuori e a picche con qualsiasi forza; 2♠ è un transfer a fiori per una mano debole con un minore lungo.',
      '2SA = 8-9 invitante, 3SA = 10-15, 4SA = 16-17 quantitativo (non Blackwood).',
      'Con appoggio quarto e 17 l’apertore superaccetta il transfer saltando a tre nella nobile.',
      'Su 2SA: 3♣ Stayman, 3♦/3♥ transfer, 4♦/4♥ Texas, 3SA con 4-10, 4SA quantitativo.',
    ],
    quiz: [
      {
        q: 'Il compagno apre 1SA. Hai ♠J8752 ♥84 ♦932 ♣Q65 (3 PO). Qual è il tuo piano?',
        options: ['Passo', '2♥ (transfer), poi passo su 2♠', 'Dichiaro 2♠', 'Dichiaro 2♣'],
        answer: 1,
        explain: 'Una mano debole con cinque picche rende di più a 2♠ che a 1SA, perché le atout lunghe producono prese. Fai il transfer con 2♥ e passa. 2♠ sarebbe un transfer a fiori, e la Stayman con 2♣ richiede 8+.',
      },
      {
        q: '1SA – 2♣ – 2♥. Hai ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 PO). E ora?',
        options: ['3SA', '4♥', '3♥', '2SA'],
        answer: 1,
        explain: 'L’apertore ha quattro cuori, quindi c’è un fit 4-4, e 11 + 15-17 basta per la manche. Dichiara 4♥: un fit 4-4 in una nobile di solito rende più di 3SA.',
      },
      {
        q: 'Hai aperto 1SA con ♠KQ75 ♥AJ83 ♦K4 ♣Q62. Il compagno dichiara 2♣. Che cosa rispondi?',
        options: ['2♥', '2♠', '2♦', '2SA'],
        answer: 0,
        explain: 'Con entrambe le nobili rispondi prima 2♥. Se il compagno ha le picche invece dei cuori, dichiarerà 2SA o 3SA e tu correggerai a picche.',
      },
      {
        q: '1SA – 2♦ – 2♥ – 3SA. Hai aperto con tre cuori. Che cosa fai?',
        options: ['Passo, perché il compagno ha scelto 3SA', 'Dichiaro 4♥: il compagno ha mostrato cinque cuori, quindi c’è un fit di otto carte', 'Dichiaro 4SA', 'Dichiaro 3♥'],
        answer: 1,
        explain: 'Transfer e poi 3SA mostra esattamente cinque cuori e valori di manche. Con appoggio terzo l’apertore sceglie 4♥; con un doubleton passa su 3SA.',
      },
      {
        q: 'Il compagno apre 2SA. Hai ♠Q8642 ♥K7 ♦J73 ♣1052 (6 PO). Qual è il tuo piano?',
        options: ['Dichiaro 3♠', 'Dichiaro 3♥, poi 3SA su 3♠', 'Dichiaro 3SA', 'Passo'],
        answer: 1,
        explain: '20-21 di fronte a 6 basta per la manche. Fai il transfer con 3♥, poi dichiara 3SA per mostrare esattamente cinque picche; l’apertore sceglie 4♠ con appoggio terzo o passa con due carte.',
      },
    ],
  },
  {
    id: 'planning-the-play',
    title: 'Il piano di gioco',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Prima di giocare alla prima presa conta le vincenti (a senza atout) o le perdenti (in un contratto a colore) e fai un piano.',
    body: `
<h3>Fermati e pianifica prima della prima presa</h3>
<p>Quando scende il morto, quasi tutti i principianti giocano subito una carta alla prima presa. I giocatori forti si fermano. Spesso è proprio alla prima presa che il contratto si vince o si perde, e non puoi pianificarla finché non hai visto il quadro completo. Segui ogni volta la stessa procedura:</p>
<ol>
<li><strong>Conta.</strong> A senza atout conta le vincenti sicure: le prese che puoi fare senza cedere la mano. In un contratto a colore conta le perdenti nella mano con le atout lunghe.</li>
<li><strong>Confronta.</strong> Quante prese in più ti servono (senza atout), o di quante perdenti devi liberarti (colore)?</li>
<li><strong>Trova le fonti.</strong> Le prese in più vengono dall’affrancamento dei colori lunghi, dallo scacciare le carte alte avversarie, dalle impasse e dai tagli nella mano corta in atout. Le perdenti spariscono tagliandole al morto, scartandole sulle vincenti del morto o con le impasse.</li>
<li><strong>Cerca i pericoli.</strong> Quante volte devi cedere la mano? Quale avversario è pericoloso? Hai i rientri che ti servono?</li>
<li><strong>Decidi l’ordine di gioco</strong>, a cominciare dalla carta da giocare dal morto e da quale mano deve vincere la prima presa.</li>
</ol>

<h3>Un esempio a senza atout: conta le vincenti</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3SA giocato da Sud. Ovest attacca con la ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Conta:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): sei vincenti sicure. Te ne servono altre tre.</p>
<p><strong>Fonti:</strong> i cuori. Una volta scacciato il ♥A, KQJ10 del morto forniscono tre prese. I fiori non danno nulla: K, Q, J e 10 sono dei difensori.</p>
<p><strong>Pericolo:</strong> i difensori possono lisciare il ♥A fino al terzo giro. A quel punto l’ultima carta di cuori del morto è una vincente, ma ti serve un rientro per raggiungerla. L’unico rientro esterno del morto è il ♠A.</p>
<p><strong>Piano:</strong> alla prima presa gioca basso dal morto e vinci con il ♠K in mano, conservando il ♠A come rientro. Poi muovi subito cuori. Quando i difensori prendono con l’asso, hai nove prese: due a picche, tre a cuori, tre a quadri e una a fiori. Se vinci distrattamente la prima presa con il ♠A, il difensore che liscia il ♥A fino al terzo giro lascia isolata la quarta carta di cuori del morto, e fai solo otto prese.</p>
<div class="tip">Scaccia presto le carte alte degli avversari, finché hai ancora i fermi in tutti i colori. Le vincenti sicure si incassano per ultime, non per prime.</div>

<h3>Un esempio a colore: conta le perdenti</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ giocato da Sud. Ovest attacca con la ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Conta le perdenti nella mano di Sud:</strong> picche nessuna; cuori una (il terzo giro); quadri tre (il 7, il 3 e il 2); fiori nessuna (il ♣A del morto copre il tuo singolo). Totale: quattro. Te ne puoi permettere tre.</p>
<p><strong>Fonte:</strong> il morto ha solo due quadri. Dopo il ♦A e un altro giro il morto è in chicane e può tagliare la tua terza carta di quadri con una piccola atout. Quel taglio è una presa in più perché lo fa la mano <em>corta</em> in atout: le atout di Sud sono comunque vincenti.</p>
<p><strong>Pericolo:</strong> se batti prima tre giri d’atout, al morto non resta nessuna atout per il taglio. Devi lasciare almeno un’atout al morto finché il taglio non è stato fatto.</p>
<p><strong>Piano:</strong> vinci l’attacco con il ♥A del morto, gioca quadri per il tuo asso e cedi una presa a quadri. Se i difensori prendono e giocano atout (la loro difesa migliore), vinci e taglia subito una carta di quadri al morto. Ora batti atout. Perdi una presa a cuori e due a quadri.</p>
<div class="warn">«Batti sempre atout per prima cosa» è una buona abitudine con una grossa eccezione: quando ti servono le atout del morto per tagliare, fai i tagli prima che le atout siano finite.</div>

<h3>Contare è un’abitudine</h3>
<p>Contare richiede pochi secondi, e non farlo costa moltissimo. A senza atout, se le vincenti sicure bastano già, incassale ed evita rischi inutili. Se non bastano, decidi da dove verranno le prese in più <em>prima</em> di toccare una carta, perché spesso da questo dipendono l’ordine di gioco e la scelta della mano con cui vincere la prima presa.</p>
`,
    keyPoints: [
      'Pianifica prima di giocare alla prima presa: conta, confronta, trova le fonti, cerca i pericoli, poi decidi l’ordine.',
      'A senza atout conta le vincenti sicure; in un contratto a colore conta le perdenti nella mano lunga in atout.',
      'Scaccia presto le carte alte degli avversari, finché hai ancora i fermi.',
      'I tagli nella mano corta in atout (di solito il morto) fanno guadagnare prese; conserva le atout del morto finché non hai fatto i tagli.',
      'Proteggi i rientri che ti serviranno più avanti.',
    ],
    quiz: [
      {
        q: 'Che cosa devi contare per prima cosa in un contratto a senza atout?',
        options: ['Le perdenti', 'Le vincenti sicure', 'Le atout', 'I PO degli avversari'],
        answer: 1,
        explain: 'A senza atout non ci sono tagli, quindi la misura naturale sono le prese che puoi fare senza cedere la mano. Quelle che mancano ti dicono quante prese devono venire dai colori lunghi o dalle impasse.',
      },
      {
        q: 'Quale taglio fa guadagnare una presa?',
        options: ['Un taglio nella mano con le atout lunghe', 'Un taglio nella mano con le atout corte', 'Entrambi allo stesso modo', 'Nessuno dei due'],
        answer: 1,
        explain: 'Le atout lunghe farebbero comunque presa, quindi tagliare con quelle consuma solo una vincente. Un taglio con le atout della mano corta (di solito il morto) fa una presa che quelle piccole atout altrimenti non farebbero.',
      },
      {
        q: 'Nella smazzata a 3SA qui sopra, perché vincere la prima presa con il ♠K in mano invece che con il ♠A del morto?',
        options: ['Per conservare il ♠A del morto come rientro per i cuori', 'Perché il re è la carta più alta', 'Per lisciare il fermo a picche', 'Per sbloccare il colore di picche'],
        answer: 0,
        explain: 'Se i difensori lisciano il ♥A fino al terzo giro, l’ultima carta di cuori del morto è una vincente irraggiungibile, a meno che al morto non resti il ♠A.',
      },
      {
        q: 'Nella smazzata a 4♠ qui sopra, che cosa va storto se il giocante batte subito tre giri d’atout?',
        options: ['Niente, è la giocata più sicura', 'Al morto non resta un’atout per tagliare la terza carta di quadri', 'I difensori possono tagliare una carta di cuori', 'Il giocante perde il controllo dei fiori'],
        answer: 1,
        explain: 'Il morto aveva solo tre atout. Battendo tre giri le consuma tutte, e al giocante restano tre perdenti a quadri più una a cuori: una di troppo.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'L’attacco',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Come scegliere il colore d’attacco e la carta giusta in quel colore, contro i senza atout e contro i contratti a colore.',
    body: `
<h3>Due decisioni: il colore e la carta</h3>
<p>L’attacco è l’unica carta che giochi senza vedere il morto, quindi conviene seguire buone abitudini. Prima scegli il colore in base alla licita e alla tua mano; poi attacca con la carta convenzionale in quel colore, così il compagno può capire che cosa hai.</p>

<h3>La scelta del colore contro i senza atout</h3>
<ul>
<li>Se il compagno ha dichiarato un colore, attacca in quello, a meno che tu non abbia un’alternativa molto buona.</li>
<li>Altrimenti attacca nel tuo colore più lungo e più forte. Il senza atout è una corsa: i difensori cercano di affrancare le carte lunghe prima che il giocante possa incassare le sue prese.</li>
<li>Preferisci i colori non dichiarati. Evita i colori dichiarati dagli avversari.</li>
<li>Con una mano molto debole e senza rientri, un colore lungo che non potrai mai incassare può essere inutile; può essere meglio attaccare nel probabile colore lungo del compagno (spesso una nobile che gli avversari non hanno nominato).</li>
</ul>

<h3>La scelta del colore contro un contratto a colore</h3>
<ul>
<li><strong>Buoni attacchi:</strong> la testa di una sequenza; il colore del compagno; un singolo (soprattutto quando hai l’asso d’atout o il compagno può avere un rientro); l’asso da AK.</li>
<li><strong>Attacca in atout</strong> quando la licita fa pensare che il morto taglierà le perdenti del giocante: il giocante ha mostrato due colori e il morto ha preferito il secondo, oppure il morto ha mostrato una corta.</li>
<li><strong>Evita:</strong> di attaccare sotto un asso (il giocante può fare presa con un re singolo e tu potresti non incassare mai l’asso); di attaccare sotto un re verso l’AQ del giocante; di attaccare con un onore secondo come Qx.</li>
</ul>
<div class="warn">Contro un contratto a colore non attaccare mai sotto l’asso. Se devi proprio giocare quel colore, attacca con l’asso.</div>

<h3>Con quale carta attaccare</h3>
<table>
<thead><tr><th>Carte</th><th>Contro i senza atout</th><th>Contro un colore</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (quarta migliore)</td><td>5, anche se attaccare sotto un re è rischioso</td></tr>
<tr><td>A 10 6 3</td><td>3 (quarta migliore)</td><td>Da evitare; se proprio devi, l’A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (la più alta da tre cartine)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (singolo)</td><td>raramente</td><td>7, spesso un buon attacco</td></tr>
</tbody>
</table>
<p>Le regole dietro la tabella: attacca in testa di sequenza (tre carte contigue, oppure due contigue più quella subito dopo la successiva, come in KQ10); da una sequenza interna come KJ10 o Q109 attacca con la più alta delle carte contigue (il J o il 10); attacca con l’asso da AK; attacca con la più alta di un doubleton e con la più alta di tre cartine; da un onore con due o tre cartine attacca basso (terza migliore da tre carte, quarta migliore da quattro); e contro i senza atout attacca di quarta migliore dal colore lungo.</p>

<h3>Esempi</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Attacchi contro 1SA – 3SA"></div>
<p>Attacca con il ♠J, la più alta della sequenza interna KJ10. Le picche sono il tuo colore lungo, e l’attacco con il J dice anche al compagno che hai il 10 ma non la Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Attacchi contro 1♠ – 2♠ – 4♠"></div>
<p>Due scelte sicure: il ♥A (asso da AK) e la ♦Q (testa di sequenza). Il ♥A vince la presa e ti fa vedere il morto prima di decidere come proseguire, mentre il segnale del compagno ti dice se continuare a cuori.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Est: attacchi contro 2♦"></div>
<p>Attacca in atout. Nord ha cinque o più picche e quattro o più quadri, e la preferenza di Sud per le quadri fa pensare a una corta a picche. Con le tue picche forti, il giocante può salvare le perdenti a picche solo tagliandole al morto; ogni giro d’atout che giochi toglie un taglio al morto.</p>
<div class="tip">Dopo ogni attacco chiediti che cosa dice al compagno. Gli attacchi convenzionali permettono all’altro difensore di contare il colore fin dalla prima presa.</div>
`,
    keyPoints: [
      'Prima scegli il colore: quello del compagno, poi il tuo colore lungo contro i senza atout; sequenze, colore del compagno, singoli o atout contro un colore.',
      'Attacca in testa di sequenza; da KJ10 con il J, da Q109 con il 10; con l’A da AK.',
      'Contro i senza atout attacca di quarta migliore dal colore più lungo e più forte.',
      'Attacca con la più alta di un doubleton e di tre cartine; con una cartina da un onore con due o tre cartine.',
      'Contro un colore non attaccare mai sotto l’asso; attacca in atout quando il morto probabilmente taglierà.',
    ],
    quiz: [
      {
        q: 'Attacchi contro 3SA e il tuo colore lungo è ♠KQ1086. Con quale carta attacchi?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 è una sequenza spezzata, quindi attacca con il re. È sicuro e comincia ad affrancare il colore; la quarta migliore (l’8) potrebbe regalare al giocante una presa a buon mercato con il J.',
      },
      {
        q: 'Contro 4♥, quale di questi attacchi è il peggiore?',
        options: ['La ♦Q da ♦QJ10', 'Il ♣2 da ♣AJ62', 'Un singolo a picche', 'L’♣8 da ♣852'],
        answer: 1,
        explain: 'Attaccare sotto l’asso contro un contratto a colore è il classico attacco perdente: il giocante può fare una presa economica con il re o la donna, e il tuo asso potrebbe poi venire tagliato.',
      },
      {
        q: 'Il compagno è intervenuto a 1♠ e gli avversari sono arrivati a 3SA. Hai ♠Q85. Con quale carta attacchi?',
        options: ['♠Q', '♠8', '♠5', 'Un altro colore'],
        answer: 2,
        explain: 'Attacca nel colore del compagno, e da un onore con due cartine attacca basso. Attaccando con la Q potresti sprecarla se il compagno ha AJ, mentre se la conservi la tua linea potrà più tardi catturare con essa un onore del giocante.',
      },
      {
        q: 'Decidi di attaccare da ♦94. Con quale carta?',
        options: ['♦9', '♦4', 'Una qualsiasi, non conta', 'Nessuna: non si attacca mai da un doubleton'],
        answer: 0,
        explain: 'Attacca con la più alta del doubleton. Quando più tardi giocherai il 4, il compagno vedrà l’alto-basso e saprà che avevi due carte.',
      },
      {
        q: 'Quando è più interessante attaccare in atout?',
        options: ['Quando hai l’asso d’atout', 'Quando la licita fa pensare che il morto sia corto nel colore laterale del giocante e taglierà', 'Quando hai un singolo in un colore laterale', 'Ogni volta che gli avversari giocano in una nobile'],
        answer: 1,
        explain: 'L’attacco in atout riduce i tagli che il morto può fare. Rende di più quando il giocante ha mostrato un secondo colore, il morto ha dato la preferenza, oppure si sa che il morto è corto in un colore in cui sei forte.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'Il punteggio nel bridge duplicato',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Come si calcola il punteggio di una smazzata nel duplicato: valore delle prese, premi per parziale, manche e slam, prese in più, prese di caduta ed effetto del contro.',
    body: `
<h3>Ogni smazzata fa storia a sé</h3>
<p>Nel bridge duplicato ogni smazzata si conta da sola. Non si portano i parziali da una smazzata all’altra come nella partita libera (rubber). Ogni board indica chi è <strong>in zona</strong>; essere in zona aumenta sia i premi per manche e slam sia le penalità per le cadute.</p>

<h3>Primo passo: il valore delle prese</h3>
<p>Al valore delle prese contano solo le prese dichiarate e realizzate:</p>
<table>
<thead><tr><th>Denominazione</th><th>Per presa dichiarata e realizzata</th></tr></thead>
<tbody>
<tr><td>♣ o ♦</td><td>20</td></tr>
<tr><td>♥ o ♠</td><td>30</td></tr>
<tr><td>SA</td><td>40 per la prima presa, 30 per ciascuna delle successive</td></tr>
</tbody>
</table>
<p>I contratti contrati valgono il doppio, quelli surcontrati il quadruplo. Quindi 2♥ vale 60, ma 2♥ contrato vale 120.</p>

<h3>Secondo passo: i premi</h3>
<table>
<thead><tr><th>Premio</th><th>In prima</th><th>In zona</th></tr></thead>
<tbody>
<tr><td>Parziale (valore delle prese sotto 100)</td><td>50</td><td>50</td></tr>
<tr><td>Manche (valore delle prese 100 o più)</td><td>300</td><td>500</td></tr>
<tr><td>Piccolo slam (livello 6)</td><td>500 in più</td><td>750 in più</td></tr>
<tr><td>Grande slam (livello 7)</td><td>1000 in più</td><td>1500 in più</td></tr>
<tr><td>Contratto contrato mantenuto («insulto»)</td><td>50</td><td>50</td></tr>
<tr><td>Contratto surcontrato mantenuto</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>I premi per lo slam si aggiungono a quello per la manche. La manche richiede un valore delle prese di 100: 3SA (40 + 30 + 30), 4♥ o 4♠ (120), 5♣ o 5♦ (100).</p>

<h3>Terzo passo: le prese in più</h3>
<p>Le prese in più senza contro valgono il normale valore della presa (20, 30, o 30 a senza atout). Contrate valgono 100 ciascuna in prima e 200 in zona; surcontrate, 200 e 400.</p>

<h3>Andare sotto: le prese di caduta</h3>
<table>
<thead><tr><th>Sotto di</th><th>In prima</th><th>In prima contrato</th><th>In zona</th><th>In zona contrato</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Contrato e in prima: 100 per la prima presa di caduta, 200 ciascuna per la seconda e la terza, 300 ciascuna dalla quarta in poi. Contrato e in zona: 200 per la prima, 300 per ciascuna delle successive. Le cadute surcontrate valgono il doppio di quelle contrate.</p>

<h3>Punteggi da sapere a memoria</h3>
<table>
<thead><tr><th>Contratto mantenuto esatto</th><th>In prima</th><th>In zona</th></tr></thead>
<tbody>
<tr><td>1SA</td><td>90</td><td>90</td></tr>
<tr><td>2♥ o 2♠, 3♣ o 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2SA</td><td>120</td><td>120</td></tr>
<tr><td>3♥ o 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3SA</td><td>400</td><td>600</td></tr>
<tr><td>4♥ o 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ o 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ o 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6SA</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7SA</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ o 2♠ contrati</td><td>470</td><td>670</td></tr>
<tr><td>1SA contrato</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Esempio: 4♠ con undici prese, in prima. Valore delle prese 4 × 30 = 120, premio di manche 300, una presa in più 30: totale 450. Lo stesso risultato in zona: 120 + 500 + 30 = 650.</p>
<p>Esempio: 3SA contrato con dieci prese, in zona. Valore delle prese (40 + 30 + 30) × 2 = 200, premio di manche 500, insulto 50, una presa in più contrata 200: totale 950.</p>
<div class="warn">Un contro può trasformare un parziale in una manche: 2♥ contrato ha un valore delle prese di 120, quindi se viene mantenuto vale 470 o 670 invece di 110. Non contrare per punire un contratto basso se non ti aspetti di batterlo.</div>
<div class="tip">Nota che 5♣ e 3SA valgono lo stesso, ma a 3SA servono due prese in meno. È uno dei motivi per cui le manche a senza atout e nelle nobili si preferiscono a quelle nei minori.</div>
`,
    keyPoints: [
      'Valore delle prese: minori 20, nobili 30, senza atout 40 e poi 30; contrato ×2, surcontrato ×4.',
      'La manche (valore delle prese 100+) vale 300 in prima o 500 in zona; un parziale vale 50.',
      'Premi per lo slam: piccolo 500/750, grande 1000/1500, oltre al premio di manche.',
      'Prese di caduta: 50/100 senza contro; contrate 100-300-500-800 in prima e 200-500-800-1100 in zona.',
      'Mantenere un contratto contrato aggiunge 50 di insulto, e le prese in più contrate valgono 100 o 200 ciascuna.',
    ],
    quiz: [
      {
        q: 'Mantieni 4♥ esatto, in zona. Quanto segni?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Valore delle prese 4 × 30 = 120, più il premio di manche in zona di 500: 620.',
      },
      {
        q: 'Fai dieci prese a 3SA, in prima. Quanto segni?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 per il contratto, 300 per la manche in prima e 30 per la presa in più: 430.',
      },
      {
        q: 'In prima, vai sotto di tre contrato. Quanto segnano gli avversari?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'In prima e contrato: 100 per la prima presa di caduta e 200 ciascuna per la seconda e la terza: 100 + 200 + 200 = 500.',
      },
      {
        q: 'Gli avversari mantengono 2♠ contrato, in prima. Quanto segnano?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Con il contro il valore delle prese è 2 × 30 × 2 = 120, che è una manche: 120 + 300 di premio di manche + 50 di insulto = 470.',
      },
      {
        q: 'Mantieni 6♠ esatto, in prima. Quanto segni?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Valore delle prese 6 × 30 = 180, premio di manche 300 e premio di piccolo slam 500: 980. In zona sarebbe 180 + 500 + 750 = 1430.',
      },
    ],
  },
  {
    id: 'establishing-long-suits',
    title: 'Affrancare i colori lunghi',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Come trasformare le cartine di un colore lungo in vincenti, e come conservare i rientri che servono per incassarle.',
    body: `
<h3>Da dove vengono le prese in più</h3>
<p>Nella maggior parte dei contratti a senza atout le prese in più che ti servono vengono dai colori lunghi. Quando gli avversari hanno esaurito un colore, ogni carta che ti resta in quel colore è una vincente, anche un 2. Trasformare le cartine in vincenti si chiama <strong>affrancare</strong> il colore.</p>

<h3>Contare i giri</h3>
<p>Per sapere quante prese renderà un colore, pensa a come sono probabilmente divise le carte avversarie. Con A K 6 4 2 di fronte a 7 5 3 hai otto carte e gli avversari cinque. Se sono divise 3-2 (68% dei casi), tre giri le esauriscono: vinci con A e K, cedi un giro, e le ultime due carte sono vincenti. Quattro prese. Se sono divise 4-1 servono quattro giri e il colore rende solo tre prese.</p>
<table>
<thead><tr><th>Carte mancanti</th><th>Divisione più probabile</th><th>Probabilità</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (la 3-3 è solo il 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Cedi presto la presa che devi cedere</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3SA giocato da Sud. Ovest attacca con la ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conta:</strong> ♠AK, ♥A, ♦AK, ♣AK: sette vincenti sicure. Ne servono altre due, e le quadri possono darle se sono divise 3-2.</p>
<p><strong>La trappola:</strong> il morto non ha rientri fuori dalle quadri. Se giochi ♦A, ♦K e una terza carta di quadri, i difensori vincono il terzo giro e le due quadri lunghe del morto restano isolate. Fai sette prese.</p>
<p><strong>La soluzione:</strong> vinci con il ♠A e gioca subito una cartina di quadri da entrambe le mani, <em>lisciando</em> il primo giro. Vinci il ritorno dei difensori, gioca quadri per l’asso e incassa il re; se il colore era diviso 3-2 è ormai esaurito, e sei ancora al morto per incassare le due quadri lunghe. Nove prese: due a picche, una a cuori, quattro a quadri e due a fiori.</p>
<p>Il liscio non costa nulla: una presa a quadri l’avresti persa comunque. Lisciando la perdi quando il morto ha ancora A e K per tornarci.</p>
<div class="tip">Quando un colore deve cedere una presa e la mano lunga ha pochi rientri, cedi quella presa al primo giro, non all’ultimo.</div>

<h3>Lo sblocco: prima le carte alte della mano corta</h3>
<p>Con ♣KQ3 di fronte a ♣A8642 gioca prima il re e la donna, poi passa all’asso con il 3. Se incassi prima l’asso, K e Q restano da soli in una mano e il colore si blocca: non puoi tornare alle carte lunghe senza un rientro esterno. Lo stesso principio vale ogni volta che una mano è corta: incassa prima gli onori della mano corta.</p>

<h3>Scacciare le carte alte avversarie</h3>
<p>Alcuni colori non hanno alcun problema di cartine: serve solo scacciare l’asso avversario. KQJ10 di fronte a cartine rende tre prese una volta uscito l’asso. Muovi questi colori presto, finché hai ancora i fermi negli altri, così i difensori non possono affrancare prima il loro colore lungo.</p>

<h3>Quale colore affrancare</h3>
<ul>
<li>Preferisci il colore che richiede di cedere meno prese e ha la divisione più probabile.</li>
<li>Preferisci cedere la mano all’avversario che non può farti male (vedi le lezioni «Il colpo in bianco e i rientri» e «L’evitamento: tenere fuori presa l’avversario pericoloso»).</li>
<li>Controlla i rientri: un colore che puoi affrancare ma non raggiungere non vale niente.</li>
<li>In un contratto a colore i colori laterali lunghi si affrancano allo stesso modo, spesso tagliando le cartine nella mano lunga in atout finché le restanti non sono buone.</li>
</ul>
<div class="warn">Non incassare tutte le vincenti sicure per prime «per vedere che cosa succede». Ogni vincente che incassi affranca anche vincenti per i difensori e distrugge i tuoi rientri e i tuoi fermi.</div>
`,
    keyPoints: [
      'Le cartine diventano vincenti quando gli avversari hanno esaurito il colore.',
      'Conta i giri: con cinque carte mancanti una divisione 3-2 (68%) richiede tre giri.',
      'Liscia il giro che devi cedere finché la mano lunga ha ancora le carte alte come rientri.',
      'Sblocca incassando prima gli onori della mano corta.',
      'Muovi presto il tuo colore lungo, prima che i difensori affranchino il loro.',
    ],
    quiz: [
      {
        q: 'Hai A K 6 4 2 di fronte a 7 5 3. Se le cinque carte mancanti sono divise 3-2, quante prese può rendere il colore?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Tre giri esauriscono una divisione 3-2. Ne vinci due e ne perdi uno; le due carte che restano nella mano lunga sono vincenti: 4 prese.',
      },
      {
        q: 'Nella smazzata a 3SA qui sopra, perché lisciare il primo giro di quadri?',
        options: ['Per scoprire chi ha la donna', 'Per conservare ♦A e ♦K come rientri per le quadri lunghe', 'Per lisciare le picche', 'Perché lisciare fa sempre guadagnare una presa'],
        answer: 1,
        explain: 'Il morto non ha rientri esterni. Cedendo subito l’inevitabile presa a quadri, dopo A e K le carte lunghe si possono incassare senza bisogno di tornare al morto.',
      },
      {
        q: 'Hai ♣KQ3 in mano e ♣A8642 al morto, senza altri rientri al morto. Come giochi i fiori?',
        options: ['Prima l’asso, poi re e donna', 'Prima re e donna, poi una cartina per l’asso', 'Muovo il 2 dal morto', 'Non ha importanza'],
        answer: 1,
        explain: 'Incassa prima gli onori della mano corta. Dopo K e Q puoi ancora passare all’asso con il 3 e, se il colore era diviso 3-2, incassare le carte lunghe. Giocando prima l’asso, K e Q bloccano il colore.',
      },
      {
        q: 'Gli avversari hanno sei carte in un colore. Quanto spesso sono divise 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'Con un numero pari di carte mancanti, la divisione pari è meno probabile di quanto si pensi: la 3-3 è circa il 36%, mentre la 4-2 è circa il 48%.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'L’impasse',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Come vincere prese con carte che non sono le più alte muovendo verso di esse, e quando fare l’impasse invece di giocare in battuta.',
    body: `
<h3>L’idea</h3>
<p>L’impasse è un tentativo di vincere una presa con una carta che non è la più alta in gioco, giocandola <em>dopo</em> l’avversario che ha la carta più alta. Per farlo muovi <strong>verso</strong> la carta che speri faccia presa.</p>
<p>Il caso più semplice: il morto (Nord) ha ♠A Q e tu (Sud) hai due cartine di picche. Muovi una cartina di picche dalla tua mano. Se Ovest gioca basso, metti la donna. Se il re è in Ovest la donna vince; se è in Est la donna perde. In entrambi i casi l’asso resta una vincente. Un’impasse semplice riesce metà delle volte, ma tentarla non costa nulla quando devi comunque muovere quel colore.</p>

<h3>Muovere verso un onore</h3>
<p>Con K 5 al morto e 6 4 in mano, muovi dalla tua mano verso il re. Se l’asso è in Ovest, il re farà presa: se Ovest gioca l’asso, il re è affrancato; se Ovest liscia, il re vince. Se invece muovi il re dal morto, non potrà mai vincere finché l’asso è fuori.</p>
<div class="warn">Muovere un onore è giusto solo se puoi permetterti che venga coperto, cioè se hai le carte immediatamente sotto. Muovi la donna da Q J 10 di fronte ad A 3 2, ma non da Q 3 2 in mano di fronte ad A 5 4 al morto: se la donna viene coperta non ti resta niente da promuovere. Muovi invece una cartina dal morto verso la donna, che farà presa ogni volta che il re è in Est.</div>

<h3>Impasse ripetute e doppie impasse</h3>
<table>
<thead><tr><th>Combinazione</th><th>Come giocarla</th><th>Risultato</th></tr></thead>
<tbody>
<tr><td>A Q di fronte a 3 2</td><td>Muovi verso A Q e fai l’impasse alla Q</td><td>2 prese 50%</td></tr>
<tr><td>K 5 di fronte a 6 4</td><td>Muovi verso il K</td><td>1 presa 50%</td></tr>
<tr><td>A Q 10 di fronte a 4 3 2</td><td>Impasse al 10, poi più tardi alla Q</td><td>3 prese 25%, almeno 2 prese 75%</td></tr>
<tr><td>A J 10 di fronte a 4 3 2</td><td>Impasse al 10 (o al J); se perde, ripeti l’impasse</td><td>2 prese 75% (fallisce solo se K e Q sono entrambi mal piazzati)</td></tr>
<tr><td>A K J di fronte a 4 3 2</td><td>Impasse al J</td><td>3 prese circa 50%</td></tr>
</tbody>
</table>
<p>Una doppia impasse riesce quando almeno uno dei due onori mancanti è ben piazzato; ogni onore si trova in Ovest o in Est indipendentemente dall’altro, quindi la probabilità che siano sbagliati entrambi è ½ × ½ = 25%.</p>

<h3>Impasse o battuta? «Otto impasse, nove battuta»</h3>
<p>Quando ti manca la donna e non hai altri indizi:</p>
<ul>
<li>Con <strong>otto</strong> carte (cinque mancanti) fai l’impasse. L’impasse (dopo aver incassato l’asso nel caso la donna sia singola) riesce circa il 40% delle volte con A K J x x (circa il 51% con A K J 10 x); giocare per la caduta della donna riesce solo il 33% circa.</li>
<li>Con <strong>nove</strong> carte (quattro mancanti) incassa asso e re e spera che la donna cada. Riesce circa il 53% delle volte, l’impasse circa il 51%.</li>
</ul>
<p>La regola serve solo quando non c’è altro. Le informazioni della licita (chi ha aperto o fatto un barrage ha la maggior parte delle carte alte o della lunghezza) o delle prime prese contano più di queste piccole differenze.</p>

<h3>Un’impasse in pratica</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ giocato da Sud. Ovest attacca con il ♥J."></div>
<p>Devi perdere il ♦A, quindi lo slam dipende dal non perdere prese in atout. Manca il ♠K, e con nove atout fai l’impasse: puoi catturarlo solo se ce l’ha Est, perché Est gioca prima del tuo A Q J 10 (oppure se Ovest ha il re singolo).</p>
<p>Vinci l’attacco con la ♥Q del morto, così sei nella mano giusta, e muovi una piccola atout. Se Est gioca basso, metti il 10 (o il J). Se vince, potresti dover ripetere l’impasse, quindi torna al morto con il ♣K e muovi un’altra atout. Pianificare i rientri per un’impasse ripetuta fa parte del lavoro: il morto ha due rientri rapidi (la ♥Q e il ♣K) e devi usarli per il colore d’atout invece di sprecarli.</p>
<div class="tip">La regola «otto impasse, nove battuta» riguarda la donna. Quando ti manca il re fai l’impasse anche con nove o dieci carte; solo con undici carte giocare in battuta è leggermente meglio (52%).</div>
`,
    keyPoints: [
      'Muovi verso la carta che speri faccia presa; un’impasse semplice ha il 50% di probabilità.',
      'Muovi un onore per fare l’impasse solo se hai le carte immediatamente sotto.',
      'Una doppia impasse (A Q 10, A J 10) fa guadagnare almeno una presa il 75% delle volte.',
      'Se manca la donna: impasse con otto carte, battuta con nove («otto impasse, nove battuta»).',
      'Pianifica i rientri per le impasse ripetute.',
    ],
    quiz: [
      {
        q: 'Il morto ha ♥A Q e tu hai ♥7 4. Come giochi i cuori per tentare di fare due prese?',
        options: ['Incasso l’asso, poi muovo la donna', 'Muovo la donna dal morto', 'Muovo una cartina di cuori dalla mano e metto la donna se Ovest gioca basso', 'Gioco l’asso sperando che cada il re'],
        answer: 2,
        explain: 'La donna può vincere solo se viene giocata dopo il re. Muovi dalla tua mano, così Ovest deve giocare prima del morto; se Ovest ha il re, la donna vince.',
      },
      {
        q: 'Con A Q 10 al morto e 4 3 2 in mano, quanto spesso la doppia impasse ti darà almeno due prese?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'Fai almeno due prese a meno che K e J non siano entrambi in Est. Ciascuno è in Ovest metà delle volte, quindi sono sbagliati entrambi solo ¼ delle volte.',
      },
      {
        q: 'Hai A K J 5 2 di fronte a 6 4 3 (otto carte) e ti manca la donna. Qual è la giocata migliore, senza indizi dalla licita?',
        options: ['Incasso asso e re', 'Incasso l’asso, poi impasse al fante', 'Muovo il fante', 'Liscio un giro'],
        answer: 1,
        explain: 'Con otto carte l’impasse (circa 40%, incassando prima l’asso nel caso la donna sia singola) è migliore della battuta (circa 33%).',
      },
      {
        q: 'Hai A K J 5 4 di fronte a 7 6 3 2 (nove carte) e ti manca la donna. Qual è la giocata migliore, senza indizi?',
        options: ['Incasso asso e re', 'Impasse subito al fante', 'Muovo il fante', 'Liscio un giro'],
        answer: 0,
        explain: '«Nove battuta»: con sole quattro carte mancanti la donna cade sotto asso e re circa il 53% delle volte, un po’ più spesso di quanto riesca l’impasse (circa 51%).',
      },
      {
        q: 'Il morto ha ♦K 7 3 e tu hai ♦8 4 2. Come ti dai la migliore probabilità di fare una presa?',
        options: ['Muovo il re dal morto', 'Muovo una cartina dalla mano verso il re', 'Muovo una cartina dal morto', 'Aspetto che siano i difensori a muovere il colore'],
        answer: 1,
        explain: 'Muovendo verso il re fai presa ogni volta che l’asso è in Ovest. Muovendo il re lo perdi sull’asso ovunque esso sia.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Secondo di mano basso, terzo di mano alto',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Le regole di base per il difensore che gioca secondo o terzo in una presa, quando infrangerle e quando coprire onore con onore.',
    body: `
<h3>Secondo di mano basso</h3>
<p>Quando il giocante muove una cartina verso il morto (o dal morto verso la propria mano), il difensore che gioca secondo di solito deve giocare <strong>basso</strong>. Il compagno gioca per ultimo nella presa e spesso può vincerla a buon mercato, mentre la tua carta alta resta disponibile per catturare più tardi un onore del giocante.</p>
<p>Esempio: il morto ha ♠K J 5 e il giocante muove una cartina di picche dalla mano verso il morto. Tu sei secondo con ♠A 7 3. Se giochi l’asso catturi solo cartine, e K e J del morto restano entrambi per dopo. Se giochi basso, il giocante deve indovinare: se mette il fante e il compagno ha la donna, la tua linea fa due prese; se mette il re, il tuo asso fa comunque presa più tardi.</p>

<h3>Quando il secondo di mano deve giocare alto</h3>
<ul>
<li><strong>Per incassare la presa che batte il contratto</strong> o una presa che non puoi permetterti di perdere, per esempio quando il giocante sta per scartare le sue perdenti.</li>
<li><strong>Quando viene mosso un onore</strong>: allora la domanda è se coprire (vedi sotto).</li>
<li><strong>Per dividere gli onori in sequenza.</strong> Supponi che il morto abbia K 10 3, il giocante A 6 2 e tu sia davanti al morto con Q J 4. Se il giocante muove basso e tu giochi basso, il giocante fa l’impasse al 10, poi incassa A e K e cadono sia la tua Q sia il tuo J: nessuna presa per te. Gioca il J al primo giro (e la Q quando il giocante muove di nuovo verso il morto) e farai sicuramente una presa.</li>
</ul>

<h3>Terzo di mano alto</h3>
<p>Quando il compagno muove una cartina e il morto gioca basso, gioca la tua carta <strong>più alta</strong> per impedire al giocante di vincere la presa a buon mercato, o per far uscire una carta alta del giocante e promuovere quelle del compagno.</p>
<ul>
<li>Con carte alte in sequenza gioca la <strong>più bassa</strong>: da K Q 5 gioca la Q, da Q J 4 il J. Così il compagno può capire dove si trova la carta più alta.</li>
<li>Gioca solo alto quanto basta. Se il morto ha giocato il 9 e tu hai Q 10 2, basta il 10.</li>
<li><strong>Fai l’impasse contro il morto.</strong> Se il morto ha K 7 3 e gioca basso, e tu hai A J 4, gioca il J. Il re del morto è intrappolato sotto il tuo asso: se la donna è del giocante, vince questa presa ma il tuo asso resta sopra il K; se la donna è del compagno, il J vince.</li>
</ul>

<h3>Coprire onore con onore</h3>
<p>Quando viene mosso un onore e tu ne hai uno più alto, coprendo costringi il giocante a usare due delle sue carte alte per catturarne una tua. Questo può promuovere una carta più bassa, come un 10 o un 9, in mano tua o del compagno.</p>
<table>
<thead><tr><th>Posizione</th><th>Quadri</th></tr></thead>
<tbody>
<tr><td>Nord (morto)</td><td>J 7 3</td></tr>
<tr><td>Ovest (compagno)</td><td>10 2</td></tr>
<tr><td>Est (tu)</td><td>Q 9 4</td></tr>
<tr><td>Sud (giocante)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>Il giocante muove il ♦J dal morto. Se giochi basso il J vince, e poi A e K fanno cadere la tua donna: il giocante non perde nessuna presa. Se copri con la Q, il giocante vince con l’A e incassa il K facendo cadere il 10 del compagno, ma ora il tuo 9 è più alto di qualsiasi carta di quadri rimasta al giocante. Coprendo hai creato una presa dal nulla.</p>

<h4>Quando non coprire</h4>
<ul>
<li>Quando l’onore mosso fa parte di una sequenza (il morto ha Q J 10 4 e muove la Q): aspetta e copri l’ultimo, se proprio devi.</li>
<li>Quando chiaramente non c’è niente da promuovere, per esempio nel colore d’atout quando il giocante ha mostrato un colore lungo e forte.</li>
<li>Quando l’onore viene mosso dalla mano del giocante e coprire servirebbe solo ad aiutarlo a catturare il colore: prima di reagire pensa a che cosa ha il giocante.</li>
</ul>
<div class="tip">Coprire o no è una questione di promozione. Chiediti: «Se copro, quale nostra carta può diventare vincente?» Se la risposta è nessuna, non coprire.</div>
<div class="warn">Non esitare per poi giocare basso: la pausa dice al giocante che hai l’onore mancante. Pensa a queste situazioni appena scende il morto, così sarai pronto quando si presentano.</div>
`,
    keyPoints: [
      'Secondo di mano basso: conserva le carte alte per catturare gli onori del giocante; il compagno gioca per ultimo.',
      'Infrangi la regola per incassare la presa che batte il contratto o per dividere gli onori in sequenza.',
      'Terzo di mano alto, ma con la più bassa delle carte in sequenza e solo alto quanto basta.',
      'Fai l’impasse contro l’onore del morto quando sei seduto dopo di lui.',
      'Copri onore con onore quando può promuovere una carta della tua linea; non coprire il primo di una sequenza di onori.',
    ],
    quiz: [
      {
        q: 'Il giocante muove una cartina dalla mano verso K J 5 del morto. Tu sei secondo con A 7 3. Che cosa giochi normalmente?',
        options: ['L’asso', 'Una cartina', 'Il 7, per segnalare', 'Non ha mai importanza'],
        answer: 1,
        explain: 'Secondo di mano basso. Prendendo con l’asso catturi solo cartine e lasci vivi sia il K sia il J del morto. Giocando basso costringi il giocante a indovinare, e il compagno può avere la donna.',
      },
      {
        q: 'Il compagno attacca con una cartina contro 3SA. Il morto ha 7 5 2 e gioca basso. Tu hai K Q 8. Quale carta giochi?',
        options: ['K', 'Q', '8', 'Uno qualsiasi dei due onori'],
        answer: 1,
        explain: 'Terzo di mano alto, la più bassa delle carte in sequenza: la Q. Se fa uscire l’asso, il compagno sa che hai anche il K.',
      },
      {
        q: 'Il compagno muove una cartina. Il morto ha K 7 3 e gioca basso. Tu hai A J 4. Quale carta giochi?',
        options: ['A', 'J', '4', 'Il K è al morto, quindi non conta'],
        answer: 1,
        explain: 'Impasse contro il morto: il J vince se il compagno ha la Q, e il tuo asso resta sopra il re del morto. Giocando l’asso affrancheresti il re del morto.',
      },
      {
        q: 'Il morto ha ♠Q J 10 4 e viene mossa la Q. Tu hai ♠K 6 3 dopo il morto. Devi coprire?',
        options: ['Sì, si copre sempre un onore', 'No, non si copre il primo di una sequenza di onori', 'Solo se il compagno ha segnalato', 'Sì, con il 6'],
        answer: 1,
        explain: 'Coprendo la Q lasci vincere il giocante con l’asso, e poi J e 10 sono buoni. Aspetta: se il giocante continua a muovere onori, copri l’ultimo, ed è allora che coprire può promuovere qualcosa.',
      },
      {
        q: 'Perché si copre onore con onore?',
        options: ['Per vincere la presa', 'Per costringere il giocante a usare due onori per uno tuo, promuovendo una carta più bassa della tua linea', 'Per mostrare la tua forza al compagno', 'Per costringere il giocante a tagliare'],
        answer: 1,
        explain: 'Coprendo raramente si vince la presa stessa. Il valore sta nella promozione: dopo che sono usciti due onori del giocante, una carta più bassa come un 10 o un 9 può diventare vincente.',
      },
    ],
  },
];
