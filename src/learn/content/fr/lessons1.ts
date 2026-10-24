// Leçons, partie 1.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'Comment se joue le bridge',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'La donne, les enchères, le contrat et le jeu de la carte, de la première enchère à la dernière levée.',
    body: `
<h3>Quatre joueurs, deux camps</h3>
<p>Le bridge est un jeu de partenaires. Nord et Sud jouent ensemble contre Est et Ouest, et les partenaires sont assis face à face. Les 52 cartes sont toutes distribuées : chaque joueur reçoit donc 13 cartes. Dans chaque couleur, les cartes se classent de l’As (la plus forte) au 2, en passant par K, Q, J, 10, 9 et ainsi de suite. Le but est de gagner des <strong>levées</strong> : une levée, c’est une carte de chaque joueur, jouées dans le sens des aiguilles d’une montre.</p>

<h3>Première partie : les enchères</h3>
<p>Avant de jouer la moindre carte, on enchérit. Le donneur parle le premier, puis les enchères tournent dans le sens des aiguilles d’une montre. À son tour, chaque joueur peut <strong>passer</strong>, faire une <strong>enchère</strong>, <strong>contrer</strong> une enchère adverse ou <strong>surcontrer</strong> un contre adverse.</p>
<p>Une enchère comporte un palier (de 1 à 7) et une dénomination (une couleur d’atout, ou sans-atout). Le palier indique le nombre de levées promises <em>au-delà de six</em> : 1♠ promet 7 levées avec pique comme atout, et 3SA promet 9 levées sans atout. Les six premières levées ne sont pas comptées dans l’enchère : ce sont les <strong>levées de base</strong>.</p>
<p>Les dénominations se classent ainsi, de la plus basse à la plus haute : ♣, ♦, ♥, ♠, SA. Chaque enchère doit être plus forte que la précédente : soit à un palier plus élevé, soit au même palier dans une dénomination plus chère. Après 1♥, vous pouvez dire 1♠ ou 1SA, mais pour parler des trèfles vous devez dire au moins 2♣.</p>
<p>Les enchères s’arrêtent quand une enchère, un contre ou un surcontre est suivi de trois passes consécutifs. La dernière enchère devient le <strong>contrat</strong>. Si les quatre joueurs passent d’entrée, la donne est annulée.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Nord ouvre de 1♥, Sud soutient à 2♥ et Nord saute à 4♥. Tout le monde passe ensuite : le contrat est 4♥, et Nord–Sud doivent faire au moins 10 des 13 levées avec cœur comme atout.</p>

<h3>Les paliers du contrat</h3>
<table>
<thead><tr><th>Palier</th><th>Levées à faire</th><th>Remarques</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>partielle</td></tr>
<tr><td>2</td><td>8</td><td>partielle</td></tr>
<tr><td>3</td><td>9</td><td>3SA est une manche</td></tr>
<tr><td>4</td><td>10</td><td>4♥ et 4♠ sont des manches</td></tr>
<tr><td>5</td><td>11</td><td>5♣ et 5♦ sont des manches</td></tr>
<tr><td>6</td><td>12</td><td>petit chelem</td></tr>
<tr><td>7</td><td>13</td><td>grand chelem</td></tr>
</tbody>
</table>
<p>Les manches et les chelems rapportent de grosses primes. C’est pourquoi l’essentiel des enchères tourne autour d’une question : notre camp a-t-il assez de force pour la manche ?</p>

<h3>Qui joue le contrat ?</h3>
<p>Le <strong>déclarant</strong> est le joueur du camp qui a remporté les enchères et qui a nommé <em>le premier</em> la dénomination du contrat final. Dans la séquence ci-dessus, Nord a nommé les cœurs en premier : Nord est donc déclarant, même si Sud a lui aussi dit cœur. Le partenaire du déclarant devient le <strong>mort</strong>.</p>

<h3>Deuxième partie : le jeu de la carte</h3>
<ol>
<li>Le joueur assis à gauche du déclarant fait l’<strong>entame</strong>. Si Nord est déclarant, c’est Est qui entame.</li>
<li>Le mort étale alors ses 13 cartes face visible sur la table, rangées par couleur. Le déclarant joue les cartes des deux mains ; le mort ne participe plus au jeu.</li>
<li>Le jeu tourne dans le sens des aiguilles d’une montre. Chaque joueur doit <strong>fournir</strong> (jouer une carte de la couleur demandée) s’il le peut.</li>
<li>Un joueur qui n’a plus de carte dans la couleur demandée (il a une <strong>chicane</strong>) peut jouer un atout, c’est-à-dire <strong>couper</strong>, ou jeter n’importe quelle autre carte : c’est une <strong>défausse</strong>.</li>
<li>La levée revient au plus gros atout joué ou, si personne n’a coupé, à la plus haute carte de la couleur demandée. Le gagnant d’une levée joue en premier à la levée suivante.</li>
</ol>
<p>Exemple : l’atout est cœur et Est entame du ♠K. Sud fournit le ♠4, Ouest le ♠9, et Nord, qui n’a plus de pique, coupe du ♥2. Nord gagne la levée, car n’importe quel atout bat n’importe quelle carte d’une autre couleur. À sans-atout, il n’y a pas d’atout : la plus haute carte de la couleur demandée gagne toujours.</p>
<div class="tip">Une défausse ne peut jamais gagner de levée. Seule une carte de la couleur demandée, ou un atout, peut la remporter.</div>

<h3>Réussir ou faire chuter le contrat</h3>
<p>Une fois les 13 levées jouées, le camp du déclarant marque des points s’il a fait au moins le nombre de levées annoncé ; les levées en plus sont des <strong>levées de mieux</strong>. Si le déclarant n’y arrive pas, les défenseurs marquent une pénalité pour chaque <strong>levée de chute</strong>. Le contre augmente à la fois la récompense en cas de réussite et la pénalité en cas d’échec.</p>
<div class="warn">Ne pas fournir alors que vous le pouviez est une <strong>renonce</strong>, sanctionnée par un transfert de levées au camp adverse. Avant de jouer une carte d’une autre couleur, vérifiez bien que vous n’avez plus aucune carte de la couleur demandée.</div>
`,
    keyPoints: [
      'Quatre joueurs répartis en deux camps ; chaque joueur a 13 cartes.',
      'Une enchère au palier N promet 6 + N levées ; les dénominations se classent ♣, ♦, ♥, ♠, SA.',
      'Les enchères s’arrêtent après trois passes consécutifs ; la dernière enchère est le contrat.',
      'Le déclarant est le premier joueur du camp gagnant à avoir nommé la dénomination finale ; son adversaire de gauche entame.',
      'Vous devez fournir si vous le pouvez ; sinon, vous pouvez couper ou défausser.',
      'Manches : 3SA, 4♥, 4♠, 5♣, 5♦. Chelems : tout contrat au palier de 6 ou 7.',
    ],
    quiz: [
      {
        q: 'Le contrat final est 3SA. Combien de levées le déclarant doit-il faire ?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Ajoutez six (les levées de base) au palier : 3 + 6 = 9 levées.',
      },
      {
        q: 'Nord ouvre de 1♠, Est passe, Sud dit 2♠ et tout le monde passe. Qui est déclarant, et qui entame ?',
        options: ['Sud joue, Ouest entame', 'Nord joue, Est entame', 'Nord joue, Ouest entame', 'Sud joue, Est entame'],
        answer: 1,
        explain: 'Nord est le premier joueur de son camp à avoir nommé les piques : il est déclarant. L’entame revient au joueur assis à gauche du déclarant, c’est-à-dire Est.',
      },
      {
        q: 'L’atout est pique. On joue cœur et vous n’avez plus de cœur. Que pouvez-vous faire ?',
        options: ['Vous devez couper avec un pique', 'Vous pouvez couper avec un pique ou défausser n’importe quelle carte', 'Vous devez défausser un trèfle ou un carreau', 'Vous devez jouer votre plus petite carte'],
        answer: 1,
        explain: 'Seule l’obligation de fournir existe. Quand vous n’avez plus de cartes dans la couleur demandée, vous êtes libre de couper ou de défausser ; couper est souvent juste, mais jamais obligatoire.',
      },
      {
        q: 'Votre adversaire de droite a ouvert de 1♥. Laquelle de ces enchères est valable ?',
        options: ['1♦', '1♣', '1SA', '1♥'],
        answer: 2,
        explain: 'Une enchère doit être plus forte que la précédente. Au palier de 1, seuls pique et sans-atout sont plus chers que cœur : 1♠ et 1SA sont donc possibles ; trèfle et carreau devraient se dire au palier de 2.',
      },
      {
        q: 'Lequel de ces contrats est une manche ?',
        options: ['3♥', '4♦', '3SA', '2SA'],
        answer: 2,
        explain: 'La manche exige 9 levées à sans-atout, 10 en majeure et 11 en mineure. 3SA est une manche ; 3♥ et 4♦ sont un palier en dessous, et 2SA est à une levée de la manche.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Évaluer sa main',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Comment compter les points d’honneur, de longueur et de distribution, et comment la règle des 20, la règle des 15, les perdantes et les levées rapides affinent l’évaluation.',
    body: `
<h3>Les points d’honneur</h3>
<p>La mesure classique de la force d’une main est le compte des <strong>points d’honneur</strong> (H) : As 4, Roi 3, Dame 2, Valet 1. Il y a 40 H dans le jeu, donc 10 dans une main moyenne.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 H"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4 : 17 H. La main est régulière, elle s’ouvre donc de 1SA (15-17).</p>
<p>Repères utiles pour le total de la paire : environ 25 points pour la manche à 3SA ou en majeure, 29 pour la manche en mineure, 33 pour un petit chelem et 37 pour un grand chelem. Les points sont un guide, pas une garantie : la distribution, le fit et la place des honneurs comptent tout autant.</p>

<h3>Les points de longueur : valoriser vos propres couleurs</h3>
<p>Les longues couleurs rapportent des levées supplémentaires une fois les gros honneurs tombés. Quand vous évaluez votre main pour ouvrir ou redemander, ajoutez 1 point par carte au-delà de la quatrième dans chaque couleur : une couleur cinquième ajoute 1 point, une couleur sixième 2 points. Vous obtenez ainsi vos points <strong>HL</strong> (honneurs + longueur).</p>

<h3>Les points de soutien : valoriser un fit</h3>
<p>Dès que vous savez avoir un fit dans la couleur du partenaire, vos couleurs courtes prennent de la valeur, car vos atouts pourront couper les levées maîtresses adverses. Quand vous soutenez votre partenaire, comptez les courtes au lieu des longueurs (points <strong>HD</strong>) :</p>
<table>
<thead><tr><th>Courte</th><th>Avec 4+ atouts</th><th>Avec 3 atouts</th></tr></thead>
<tbody>
<tr><td>Chicane</td><td>5</td><td>3</td></tr>
<tr><td>Singleton</td><td>3</td><td>2</td></tr>
<tr><td>Doubleton</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Le partenaire a ouvert de 1♥"></div>
<p>Seulement 8 H, mais avec quatre atouts et un singleton vous ajoutez 3 points, soit 11 points de soutien. C’est un soutien limite à 3♥ (10-12).</p>
<div class="warn">Une courte ne vaut quelque chose que si vous avez un fit. Sans fit, un singleton dans la couleur du partenaire est un handicap, pas un atout : il annonce un misfit.</div>

<h3>Ajuster l’évaluation</h3>
<ul>
<li>Les honneurs dans les longues couleurs valent plus que les honneurs dans les courtes : ♠KQJ54 fera des levées, ♠KQ pas forcément.</li>
<li>Les honneurs secs ou mal accompagnés valent moins : un Roi, une Dame ou un Valet singleton, une Dame ou un Valet second. Retirez un point.</li>
<li>La distribution 4-3-3-3 est la moins utile ; vous pouvez retirer un point.</li>
<li>L’échelle 4-3-2-1 sous-estime un peu les As et les 10, et surestime un peu les Dames et les Valets.</li>
</ul>

<h3>La règle des 20 et la règle des 15</h3>
<p>En 1re, 2e ou 3e position, ouvrez une main de 10 ou 11 H si le total des H et du nombre de cartes de vos deux plus longues couleurs atteint 20 ou plus.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Règle des 20 : ouvrez de 1♠"></div>
<p>10 H + 5 + 5 = 20 : vous ouvrez, et avec deux couleurs cinquièmes vous ouvrez de la plus chère, 1♠. Comparez avec ♠QJ5 ♥K92 ♦QJ84 ♣Q73 : 11 H + 4 + 3 = 18, donc passe. Les Dames et Valets dispersés et la distribution plate en font une mauvaise ouverture.</p>
<p>En 4e position, après trois passes, appliquez la règle des 15 : ouvrez si le total des H et du nombre de piques atteint 15 ou plus. Si vous passez, la donne est annulée ; vous ne voulez donc ouvrir que si votre camp a de bonnes chances de gagner la bataille de la partielle, et c’est la couleur de pique qui tranche le plus souvent ces batailles.</p>

<h3>La méthode des perdantes</h3>
<p>Une fois un fit de 8 cartes ou plus trouvé, la méthode des perdantes (LTC) donne un second avis fondé sur la distribution. Regardez les trois premières cartes de chaque couleur et comptez une perdante pour chaque As, Roi ou Dame manquant parmi elles :</p>
<table>
<thead><tr><th>Teneur</th><th>Perdantes</th></tr></thead>
<tbody>
<tr><td>Chicane</td><td>0</td></tr>
<tr><td>As sec / autre singleton</td><td>0 / 1</td></tr>
<tr><td>AK / Ax ou Kx / Qx ou xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Ajoutez vos perdantes à celles du partenaire et retranchez le total de 24 : le résultat donne à peu près le nombre de levées que la paire fera avec cette couleur comme atout. Une ouverture minimum compte environ 7 perdantes.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Le partenaire a ouvert de 1♠"></div>
<p>♠K87 = 2 perdantes, ♥4 = 1, ♦A86 = 2, ♣853 = 3 : 8 perdantes. 24 − (7 + 8) = 9 levées : proposez la manche par 3♠. Le compte des points va dans le même sens : 7 H + 3 pour le singleton = 10 points de soutien, un soutien limite.</p>

<h3>Les levées rapides</h3>
<p>Les levées rapides mesurent la force défensive, c’est-à-dire les levées attendues dans les deux premiers tours d’une couleur : AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Une ouverture ou un contre d’appel sérieux comporte en général environ 2 levées rapides. Les mains pauvres en levées rapides et très distribuées sont meilleures pour jouer le contrat que pour défendre.</p>
`,
    keyPoints: [
      'H : As 4, Roi 3, Dame 2, Valet 1 ; 40 dans le jeu, 10 dans une main moyenne.',
      'Pour votre propre main, ajoutez un point par carte au-delà de la quatrième ; pour soutenir le partenaire, comptez plutôt les courtes (chicane 5, singleton 3, doubleton 1 avec quatre atouts).',
      'Règle des 20 pour les ouvertures légères en 1re, 2e ou 3e position ; règle des 15 (H + piques) en 4e position.',
      'LTC : levées ≈ 24 − total des perdantes, et une ouverture minimum compte environ 7 perdantes.',
      'Environ 25 points à deux pour 3SA ou la manche en majeure, 29 pour la manche en mineure, 33 pour un petit chelem.',
    ],
    quiz: [
      {
        q: 'Combien de H dans ♠AQ4 ♥KJ62 ♦J953 ♣K7 ?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3 : 14 H.',
      },
      {
        q: 'En 1re position, vous avez 10 H avec cinq cœurs et cinq trèfles. Que faites-vous ?',
        options: ['Passe : une ouverture demande 12 H', 'J’ouvre de 1♥ : la règle des 20 est respectée', 'J’ouvre de 1♣ : avec deux couleurs cinquièmes, on ouvre de la moins chère', 'J’ouvre de 2♥'],
        answer: 1,
        explain: '10 H + 5 + 5 = 20 : la main remplit la règle des 20. Avec deux couleurs cinquièmes, vous ouvrez de la plus chère, donc 1♥ (vous montrerez les trèfles ensuite).',
      },
      {
        q: 'Votre partenaire ouvre de 1♥. Vous avez quatre cœurs et une chicane à pique. Combien de points de distribution ajoutez-vous ?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Avec quatre atouts ou plus, une chicane vaut 5 points de soutien : chaque pique de votre partenaire pourra être coupé dans votre main.',
      },
      {
        q: 'Votre main compte 7 perdantes et celle de votre partenaire 8, avec un fit de huit cartes. Combien de levées la méthode des perdantes prévoit-elle ?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Comme l’ouvreur est censé avoir 7 perdantes, un répondant à 8 perdantes doit proposer la manche au palier de 3 plutôt que la demander.',
      },
      {
        q: 'En 4e position après trois passes : ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 H). Que faites-vous ?',
        options: ['Passe : 11 H ne suffisent pas', 'J’ouvre de 1♣ : 11 + 4 piques = 15', 'J’ouvre de 1♠', 'J’ouvre de 1SA'],
        answer: 1,
        explain: 'La règle des 15 est respectée : 11 H + 4 piques = 15. Sans majeure cinquième et avec 3-3 en mineures, vous ouvrez de 1♣. 1♠ promettrait cinq piques, et 1SA demande 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'L’ouverture',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Quelles mains ouvrir et quelle ouverture choisir, de l’ouverture de 1 à la couleur à 1SA, 2SA, 2♣ et aux barrages.',
    body: `
<h3>Les ouvertures en un coup d’œil</h3>
<table>
<thead><tr><th>Ouverture</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 H, 3+ trèfles (la mineure la plus longue ; avec 3-3 en mineures, ouvrez de 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 H, 3+ carreaux (la mineure la plus longue ; avec 4-4 en mineures, ouvrez de 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 H, 5+ cartes dans la couleur</td></tr>
<tr><td>1SA</td><td>15-17 H, main régulière (une couleur cinquième est possible)</td></tr>
<tr><td>2♣</td><td>Fort et artificiel : 22+ H ou 9+ levées de jeu</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Deux faible : une couleur sixième et 5-10 H</td></tr>
<tr><td>2SA</td><td>20-21 H, main régulière</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Barrage : une couleur septième et 5-10 H</td></tr>
<tr><td>4♥ / 4♠</td><td>Barrage : une couleur huitième (ou septième avec une distribution marquée)</td></tr>
</tbody>
</table>

<h3>Est-ce une main d’ouverture ?</h3>
<p>Avec 12 H ou plus, ouvrez, sauf en 4e position. Avec 10-11 H en 1re, 2e ou 3e position, ouvrez si la règle des 20 est respectée (H + longueurs de vos deux plus longues couleurs ≥ 20). En 4e position, ouvrez avec 13 H ou plus, et avec 10-12 H seulement si la règle des 15 est respectée (H + nombre de piques ≥ 15). Les mains avec une longue couleur et moins de points se prêtent plutôt à un deux faible ou à un barrage.</p>

<h3>Mains régulières : les points décident</h3>
<p>Une main régulière n’a ni chicane, ni singleton, et au plus un doubleton : 4-3-3-3, 4-4-3-2 ou 5-3-3-2. Avec une main régulière, votre plan est toujours de montrer votre force à sans-atout, tout de suite ou à votre tour suivant :</p>
<table>
<thead><tr><th>H</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Ouvrir de 1 à la couleur, redemander 1SA</td></tr>
<tr><td>15-17</td><td>Ouvrir de 1SA</td></tr>
<tr><td>18-19</td><td>Ouvrir de 1 à la couleur, puis sauter à 2SA</td></tr>
<tr><td>20-21</td><td>Ouvrir de 2SA</td></tr>
<tr><td>22-24</td><td>Ouvrir de 2♣, puis redemander 2SA</td></tr>
<tr><td>25-27</td><td>Ouvrir de 2♣, puis redemander 3SA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Ouvrez de 1SA : 16 H, main régulière"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Ouvrez de 1♦ : 14 H, redemande prévue à 1SA"></div>

<h3>Choisir la couleur</h3>
<ul>
<li>Avec une majeure cinquième ou plus longue, ouvrez-la, même avec une main régulière de 12-14.</li>
<li>Avec deux couleurs cinquièmes (ou deux couleurs sixièmes), ouvrez de la plus chère.</li>
<li>Avec une couleur sixième et une couleur cinquième, ouvrez de la plus longue.</li>
<li>Sans majeure cinquième, ouvrez de la mineure la plus longue. Avec 3-3 en mineures, ouvrez de 1♣ ; avec 4-4, de 1♦.</li>
<li>On n’ouvre jamais d’une majeure quatrième. Avec 4-4 en majeures et sans couleur cinquième, ouvrez d’une mineure ; votre partenaire nommera sa majeure quatrième s’il en a une.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Ouvrez de 1♠ : 12 H, cinq piques"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Ouvrez de 1♦ : 4-4 en mineures"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Ouvrez de 1♣ : 3-3 en mineures"></div>
<p>La dernière main a quatre piques, mais il faut cinq cartes pour ouvrir d’une majeure ; avec trois cartes dans chaque mineure, l’ouverture est 1♣. Si votre partenaire a quatre piques, il répondra 1♠ et le fit sera trouvé.</p>

<h3>Ouvertures fortes et ouvertures faibles</h3>
<p>2SA montre 20-21 H, main régulière ; 2♣ est la seule ouverture forcing et couvre toutes les mains de 22 H ou plus, ou d’environ neuf levées de jeu. À l’autre bout de l’échelle, les deux faibles et les barrages privent les adversaires d’espace quand vous avez une longue couleur mais peu de défense. Chacune de ces ouvertures a sa propre leçon.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Ouvrez de 2SA : 21 H, main régulière"></div>
<div class="tip">Prévoyez votre redemande avant d’ouvrir. Avec 12-14 régulier, vous redemanderez 1SA ; avec 18-19 régulier, vous sauterez à 2SA ; avec deux couleurs, vous nommerez la seconde. Si aucune redemande raisonnable n’existe, reconsidérez votre ouverture.</div>
<div class="warn">N’ouvrez jamais de 1♥ ou 1♠ avec quatre cartes seulement. Votre partenaire soutiendra avec trois cartes, en comptant sur un fit d’au moins huit cartes.</div>
`,
    keyPoints: [
      'Ouvrez avec 12+ H ; avec 10-11, appliquez la règle des 20 (1re, 2e ou 3e position). En 4e position, ouvrez avec 13+, ou avec 10-12 si la règle des 15 est respectée.',
      '1♥/1♠ promettent cinq cartes ; sans majeure cinquième, ouvrez de la mineure la plus longue (1♣ avec 3-3, 1♦ avec 4-4).',
      'Main régulière : 12-14, ouvrez à la couleur et redemandez 1SA ; 15-17, 1SA ; 18-19, sautez à 2SA ; 20-21, 2SA ; 22+, 2♣.',
      'Deux couleurs cinquièmes : ouvrez de la plus chère ; 6-5 : ouvrez de la plus longue.',
      'Prévoyez votre redemande avant d’ouvrir.',
    ],
    quiz: [
      {
        q: 'Vous avez ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 H). Quelle est votre ouverture ?',
        options: ['1♥', '1♦', '1SA', '2♥'],
        answer: 0,
        explain: 'Avec deux couleurs cinquièmes, ouvrez de la plus chère. Après 1♥, vous pourrez nommer les carreaux, et votre partenaire choisira entre vos couleurs à moindre coût.',
      },
      {
        q: 'Vous avez ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 H). Quelle est votre ouverture ?',
        options: ['1♣', '1SA', '1♦', 'Passe'],
        answer: 0,
        explain: 'La main est régulière mais ne compte que 14 H, trop peu pour 1SA (15-17). Ouvrez de la mineure la plus longue, 1♣, et redemandez 1SA pour montrer 12-14 régulier.',
      },
      {
        q: 'Vous avez ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 H). Quelle est votre ouverture ?',
        options: ['1♦', '1SA', '2SA', '1♣'],
        answer: 1,
        explain: '16 H avec une distribution 3-3-4-3 : c’est l’ouverture de 1SA type. Une seule enchère décrit à la fois votre force et votre distribution.',
      },
      {
        q: 'Vous avez ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 H). Quelle est votre ouverture ?',
        options: ['1♥', '1♣', '1♦', 'Passe'],
        answer: 1,
        explain: 'Il faut cinq cartes pour ouvrir d’une majeure : 1♥ est exclu. Sans majeure cinquième, ouvrez de la mineure la plus longue ; avec 3-3 en mineures, c’est 1♣.',
      },
      {
        q: 'Vous avez une main régulière de 18 H. Quel est votre plan ?',
        options: ['Ouvrir de 1SA', 'Ouvrir de 2SA', 'Ouvrir de 1 à la couleur et sauter à 2SA ensuite', 'Ouvrir de 2♣'],
        answer: 2,
        explain: '18-19 régulier, c’est trop fort pour 1SA (15-17) et trop faible pour 2SA (20-21). Ouvrez de 1 à la couleur et sautez à 2SA à votre tour suivant.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Répondre à une ouverture de 1 à la couleur',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Comment le répondant soutient, nomme une couleur nouvelle ou dit sans-atout après une ouverture de 1 à la couleur.',
    body: `
<h3>Les grands principes</h3>
<p>L’ouverture de 1 à la couleur montre 12-21 H : avec 6 points ou plus, vous devez répondre, car même une main faible peut suffire pour la manche face à un ouvreur fort. Avec moins de 6 points, passez. Votre premier devoir est de parler de votre fit ; le second, de situer votre force.</p>

<h3>Répondre à 1♥ ou 1♠</h3>
<p>Votre partenaire a au moins cinq cartes : trois cartes de soutien vous donnent déjà un fit de huit cartes. Soutenir le partenaire est votre priorité absolue.</p>
<table>
<thead><tr><th>Réponse</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>2 dans la majeure</td><td>6-10 points HD, soutien de 3+ cartes</td></tr>
<tr><td>3 dans la majeure (saut)</td><td>Soutien limite : 10-12 points HD, soutien de 4+ cartes, proposition</td></tr>
<tr><td>2SA</td><td>Jacoby : 13+ points, soutien de 4+ cartes, forcing de manche</td></tr>
<tr><td>4 dans la majeure</td><td>Faible et distribué : soutien de 5+ cartes, moins de 10 H</td></tr>
<tr><td>Double saut dans une couleur nouvelle</td><td>Splinter : soutien de 4+ cartes, singleton ou chicane dans cette couleur, 13-16 points</td></tr>
<tr><td>1♠ sur 1♥</td><td>6+ points, 4+ piques, forcing</td></tr>
<tr><td>1SA</td><td>6-10, pas de fit, non forcing (sur 1♥, nie quatre piques)</td></tr>
<tr><td>Couleur nouvelle au palier de 2</td><td>10+ (11+ par prudence), 4+ cartes, 5+ pour 2♥ sur 1♠ ; forcing un tour</td></tr>
<tr><td>Changement de couleur à saut</td><td>19+ points, forcing de manche</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Le partenaire a ouvert de 1♠ : dites 2♠"></div>
<p>6 H et trois cartes de soutien : soutenez à 2♠. Ne dites pas 1SA et ne cherchez pas les cœurs au palier de 2 ; une réponse de 2♥ exige cinq cœurs et 10+ points.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Le partenaire a ouvert de 1♠ : dites 3♠"></div>
<p>7 H plus 3 pour le singleton avec quatre atouts = 10 points HD : un soutien limite. Votre partenaire passe avec un minimum et demande la manche avec plus.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Le partenaire a ouvert de 1♠ : dites 2SA"></div>
<p>14 H avec quatre atouts : le 2SA Jacoby fixe l’atout pique et force la manche, en laissant de la place pour explorer le chelem.</p>
<p>Avec un singleton et 13-16 points, un splinter décrit mieux la main : sur 1♠, ♠KQ74 ♥A853 ♦K962 ♣5 dit 4♣. Voir la leçon « Les splinters et le Drury inversé ».</p>
<p>Avec 6 H, cinq cœurs et un singleton, ♠4 ♥QJ852 ♦K9763 ♣82, sautez à 4♥ sur 1♥. Les adversaires ont sûrement un fit et beaucoup de points, et vous voulez les obliger à deviner au palier de 5.</p>

<h4>Soutien de trois cartes et 10-12 points</h4>
<p>Le saut à 3 promet quatre atouts. Avec trois seulement, nommez d’abord une couleur nouvelle, puis soutenez la majeure du partenaire au palier de 3 (proposition) : sur 1♥, ♠A84 ♥K93 ♦KJ752 ♣64 dit 2♦, puis 3♥. Avec trois cartes de soutien et 13+, nommez d’abord une couleur nouvelle, puis demandez la manche dans la majeure.</p>

<h3>Répondre à 1♣ ou 1♦</h3>
<p>Votre partenaire n’a peut-être que trois cartes dans sa mineure, et un fit majeur vaut davantage : cherchez d’abord une majeure.</p>
<table>
<thead><tr><th>Réponse</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Couleur nouvelle au palier de 1</td><td>6+ points, 4+ cartes, forcing. Nommez d’abord la couleur la plus longue ; avec deux couleurs quatrièmes, la moins chère d’abord (en remontant).</td></tr>
<tr><td>1SA</td><td>6-10, main régulière, pas de majeure quatrième</td></tr>
<tr><td>2SA</td><td>13-15, main régulière, pas de majeure quatrième, forcing de manche</td></tr>
<tr><td>3SA</td><td>16-17, main régulière</td></tr>
<tr><td>Soutien à 2</td><td>6-10, 5+ trèfles ou 4+ carreaux, pas de majeure quatrième</td></tr>
<tr><td>Soutien à saut à 3</td><td>10-12, même soutien, proposition</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ points, forcing</td></tr>
<tr><td>Changement de couleur à saut</td><td>19+ points</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Le partenaire a ouvert de 1♦ : dites 1♥"></div>
<p>8 H et une majeure quatrième : montrez-la au palier de 1. Dire 1SA risquerait de perdre un fit 4-4 à cœur.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Le partenaire a ouvert de 1♣ : dites 1SA"></div>
<p>8 H, main régulière, pas de majeure quatrième. Quatre trèfles ne suffisent pas pour soutenir une couleur qui n’est peut-être que troisième ; 1SA décrit la main.</p>
<p>Avec 11 H, cinq carreaux et pas de majeure quatrième, ♠K5 ♥832 ♦KJ763 ♣A94, soutenez 1♦ à 3♦ (10-12). Avec 11-12 régulier sans majeure, par exemple ♠KQ5 ♥J104 ♦A963 ♣J72 sur 1♣, il n’y a pas d’enchère directe : répondez 1♦ et dites 2SA ensuite pour proposer la manche.</p>
<div class="warn">Ne sautez pas à 2SA sur 1♣ ou 1♦ avec 11 ou 12 points. Ce saut montre 13-15 et force votre partenaire à la manche. Nommez d’abord une couleur nouvelle et proposez par 2SA au tour suivant.</div>
<div class="tip">La couleur nouvelle du répondant est forcing un tour. Vous pouvez nommer une couleur avec une main modeste et préciser votre force au tour suivant.</div>
`,
    keyPoints: [
      'Répondez avec 6+ points ; soutenir la majeure du partenaire est la priorité absolue.',
      'Sur 1♥/1♠ : 2M = 6-10 avec 3+ atouts ; 3M = 10-12 avec 4+ ; 2SA = 13+ avec 4+ (Jacoby) ; 4M = faible avec 5+.',
      'Une couleur nouvelle au palier de 2 demande 10+ (11+ par prudence) et est forcing ; 2♥ sur 1♠ exige cinq cœurs.',
      'Sur 1♣/1♦ : nommez d’abord une majeure quatrième au palier de 1 ; 1SA = 6-10, 2SA = 13-15, 3SA = 16-17, toujours régulier et sans majeure.',
      'Avec 11-12 régulier, nommez d’abord une couleur nouvelle, puis proposez par 2SA.',
    ],
    quiz: [
      {
        q: 'Votre partenaire ouvre de 1♥. Vous avez ♠K72 ♥Q84 ♦J953 ♣Q62 (8 H). Que répondez-vous ?',
        options: ['1SA', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Trois cartes de soutien dans une majeure cinquième font un fit de huit cartes ; avec 6-10 points, le soutien simple à 2♥ l’annonce tout de suite. 1♠ exigerait quatre piques.',
      },
      {
        q: 'Votre partenaire ouvre de 1♠. Vous avez ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 H). Que répondez-vous ?',
        options: ['4♠', '3♠', '2SA', '2♦'],
        answer: 2,
        explain: '2SA (Jacoby) montre 13+ avec 4+ atouts et force la manche. 3♠ ne serait qu’un soutien limite et 4♠ un soutien faible et distribué : les deux sous-évalueraient la main.',
      },
      {
        q: 'Votre partenaire ouvre de 1♦. Vous avez ♠AJ85 ♥K1062 ♦74 ♣953 (8 H). Que répondez-vous ?',
        options: ['1♠', '1♥', '1SA', '2♦'],
        answer: 1,
        explain: 'Avec deux couleurs quatrièmes, nommez-les en remontant : 1♥ d’abord. Si votre partenaire a quatre piques, il pourra dire 1♠ ensuite : aucun fit n’est perdu.',
      },
      {
        q: 'Votre partenaire ouvre de 1♣. Vous avez ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 H). Que répondez-vous ?',
        options: ['1SA', '2SA', '3SA', '1♦'],
        answer: 1,
        explain: 'Main régulière, pas de majeure quatrième, 13 H : 2SA montre 13-15 et force la manche. 1♦ promettrait quatre carreaux et 3SA montre 16-17.',
      },
      {
        q: 'Votre partenaire ouvre de 1♠. Vous avez ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 H). Que répondez-vous ?',
        options: ['2♥', '2♣', '1SA', '3♣'],
        answer: 1,
        explain: 'Une réponse de 2♥ sur 1♠ promet cinq cœurs. Nommez votre longue couleur, 2♣, qui est forcing ; vous aurez peut-être l’occasion de montrer les cœurs ensuite. 3♣ serait un changement de couleur à saut montrant 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'La redemande de l’ouvreur',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Comment l’ouvreur utilise sa deuxième enchère pour montrer une main minimum, moyenne ou maximum et décrire sa distribution, reverses et changements de couleur à saut compris.',
    body: `
<h3>Classez d’abord votre main</h3>
<p>Votre ouverture couvrait une large zone, 12-21. La redemande la précise. Recomptez vos points à la lumière de la réponse du partenaire (ajoutez les points de soutien si vous avez trouvé un fit) et placez la main dans l’une des trois zones :</p>
<table>
<thead><tr><th>Zone</th><th>Points</th><th>Action type</th></tr></thead>
<tbody>
<tr><td>Minimum</td><td>12-15</td><td>L’enchère descriptive la plus économique</td></tr>
<tr><td>Moyenne</td><td>16-18</td><td>Un saut, ou un reverse avec 17+</td></tr>
<tr><td>Maximum</td><td>19-21</td><td>Demander la manche, ou forcer par un changement de couleur à saut</td></tr>
</tbody>
</table>

<h3>Après une réponse au palier de 1</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>Le répondant a 6+ points et quatre piques ou plus. Les choix de l’ouvreur :</p>
<table>
<thead><tr><th>Redemande</th><th>Points</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>Soutien de 4 cartes à pique</td></tr>
<tr><td>3♠</td><td>16-18</td><td>Soutien de 4 cartes, proposition</td></tr>
<tr><td>4♠</td><td>19-21</td><td>Soutien de 4 cartes, pour jouer</td></tr>
<tr><td>1SA</td><td>12-14</td><td>Main régulière</td></tr>
<tr><td>2SA (saut)</td><td>18-19</td><td>Main régulière, proposition</td></tr>
<tr><td>2♦</td><td>12-15</td><td>En général six carreaux</td></tr>
<tr><td>3♦ (saut)</td><td>16-18</td><td>Une belle couleur sixième</td></tr>
<tr><td>2♣ (couleur nouvelle moins chère)</td><td>12-18</td><td>Quatre trèfles ou plus, non forcing</td></tr>
<tr><td>2♥ (reverse)</td><td>17+</td><td>Plus de carreaux que de cœurs, forcing un tour</td></tr>
<tr><td>3♣ (changement de couleur à saut)</td><td>19+</td><td>Forcing de manche</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠ : redemandez 1SA"></div>
<p>13 H et main régulière : 1SA. Un soutien à 2♠ promet quatre piques, et votre partenaire n’en a peut-être que quatre.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠ : redemandez 3♠"></div>
<p>16 H plus 1 pour chacun des deux doubletons (cœur et trèfle) avec quatre atouts : 16 + 1 + 1 = 18 points de soutien, une main moyenne. Sautez à 3♠ pour proposer la manche. Avec un minimum (12-15), soutenez à 2♠ ; avec 19+, dites 4♠.</p>

<h3>Les reverses</h3>
<p>Un <strong>reverse</strong> est une redemande dans une couleur nouvelle, au palier de 2, <em>plus chère</em> que votre première couleur, comme 1♦ – 1♠ – 2♥ ou 1♣ – 1♥ – 2♦. Pour donner la préférence à votre première couleur, votre partenaire doit maintenant monter au palier de 3 : un reverse promet donc des valeurs supplémentaires (17+) et il est forcing un tour. Il montre aussi que votre première couleur est plus longue que la seconde.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠ : reverse à 2♥"></div>
<p>17 H, cinq carreaux et quatre cœurs : 2♥ montre la distribution et les valeurs supplémentaires en une seule enchère.</p>
<div class="warn">Avec un minimum, ne faites pas de reverse. Avec ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 H) après 1♦ – 1♠, redemandez 2♦. Vous ne raterez pas de fit à cœur : avec quatre cœurs et quatre piques, votre partenaire aurait répondu 1♥ d’abord.</div>

<h3>Changements de couleur à saut et redemandes à saut</h3>
<p>Un saut dans une couleur nouvelle (1♦ – 1♠ – 3♣) montre 19+ et force la manche. Une redemande à saut dans votre couleur (1♥ – 1♠ – 3♥) montre 16-18 et une belle couleur sixième ; c’est une proposition, pas un forcing.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠ : saut à 3♣"></div>
<p>20 H : bien trop fort pour un 2♣ non forcing, et en dehors de la zone 18-19 d’une redemande à 2SA. 3♣ force la manche pendant que vous cherchez le meilleur contrat.</p>

<h3>Après 1SA ou un soutien</h3>
<p>Après 1♠ – 1SA, le répondant a 6-10 et en général pas de fit. Passez avec un minimum régulier ; répétez une couleur sixième ; montrez une deuxième couleur (une couleur nouvelle moins chère que la première n’est pas forcing) ; ou proposez la manche par un saut avec 16-18 ou plus. Après 1♠ – 2♠, le répondant a 6-10 avec du soutien : passez avec un minimum, dites 3♠ pour proposer la manche avec une main moyenne, et 4♠ avec un maximum. La méthode des perdantes est ici un bon guide : avec 6 perdantes, proposez ; avec 5, demandez la manche.</p>
<div class="tip">Une réponse au palier de 2 (1♠ – 2♣) montre déjà 10+ et est forcing un tour : l’ouvreur peut faire une redemande naturelle et descriptive, sans avoir besoin de sauter pour maintenir les enchères.</div>
`,
    keyPoints: [
      'Classez la main : minimum 12-15, moyenne 16-18, maximum 19-21.',
      'Redemande de 1SA = 12-14 régulier ; saut à 2SA = 18-19 régulier.',
      'Soutenez la majeure du répondant avec quatre cartes : au palier de 2 avec un minimum, de 3 avec une main moyenne, la manche avec un maximum.',
      'Un reverse (couleur nouvelle plus chère au palier de 2) montre 17+, est forcing et indique que la première couleur est plus longue.',
      'Un changement de couleur à saut de l’ouvreur montre 19+ et force la manche.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Vous avez ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 H). Quelle est votre redemande ?',
        options: ['1SA', '2♦', '2SA', '2♠'],
        answer: 0,
        explain: 'La main est régulière avec 12-14 H : c’est exactement ce que montre 1SA. 2♦ suggère six carreaux et 2♠ promet quatre piques.',
      },
      {
        q: '1♣ – 1♥. Vous avez ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 H). Quelle est votre redemande ?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 2,
        explain: 'Avec quatre cartes de soutien, comptez les points de soutien : 18 H + 1 par doubleton = 20, un maximum. Demandez la manche : 4♥.',
      },
      {
        q: 'Laquelle de ces séquences contient un reverse de l’ouvreur ?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1SA – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Cœur est plus cher que carreau, et 2♥ se situe au palier de 2 : pour préférer la première couleur de l’ouvreur, le partenaire doit dire 3♦. Dans les autres séquences, la deuxième couleur est moins chère ou nommée au palier de 1.',
      },
      {
        q: '1♦ – 1♥. Vous avez ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 H). Quelle est votre redemande ?',
        options: ['2♦', '3♦', '2SA', '1SA'],
        answer: 1,
        explain: 'Une main moyenne avec une belle couleur sixième : le saut à 3♦ montre 16-18 et propose la manche. 2♦ montrerait un minimum, 1SA ou 2SA une main régulière.',
      },
      {
        q: '1♠ – 2♠. Vous avez ♠AQJ84 ♥K73 ♦A62 ♣95 (14 H). Que faites-vous ?',
        options: ['Passe', '3♠', '4♠', '2SA'],
        answer: 0,
        explain: '14 H + 1 pour le cinquième pique = 15, un minimum. La méthode des perdantes le confirme : ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 perdantes, le compte d’une ouverture minimum. Face à un soutien de 6-10, la manche est peu probable : passez.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'Les ouvertures à sans-atout et leurs réponses',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Répondre à 1SA et 2SA avec le Stayman, les Texas Jacoby, le Texas mineur, les propositions et le 4SA quantitatif.',
    body: `
<h3>Pourquoi les ouvertures à sans-atout sont simples</h3>
<p>1SA montre 15-17 H et une main régulière (une couleur cinquième est possible). Comme la main de l’ouvreur est très bien définie, le répondant sait en général tout de suite où la paire doit jouer : il devient le capitaine. Ajoutez vos points aux 15-17 du partenaire : avec 25 ou plus à deux, vous voulez la manche.</p>

<h3>Les réponses à 1SA</h3>
<table>
<thead><tr><th>Réponse</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Passe</td><td>0-7 sans longue majeure</td></tr>
<tr><td>2♣</td><td>Stayman : 8+ H et une majeure quatrième</td></tr>
<tr><td>2♦</td><td>Texas : 5+ cœurs, quelle que soit la force. L’ouvreur dit 2♥.</td></tr>
<tr><td>2♥</td><td>Texas : 5+ piques, quelle que soit la force. L’ouvreur dit 2♠.</td></tr>
<tr><td>2♠</td><td>Texas trèfle : l’ouvreur dit 3♣. Une main faible avec une longue mineure ; passez sur 3♣ ou dites 3♦.</td></tr>
<tr><td>2SA</td><td>8-9, proposition</td></tr>
<tr><td>3SA</td><td>10-15, pour jouer</td></tr>
<tr><td>4♣</td><td>Gerber : demande les As</td></tr>
<tr><td>4♦ / 4♥</td><td>Texas au palier de 4 : 6+ cœurs / piques et valeurs de manche. L’ouvreur dit 4♥ / 4♠.</td></tr>
<tr><td>4SA</td><td>16-17, quantitatif : propose 6SA</td></tr>
</tbody>
</table>

<h3>Le Stayman</h3>
<p>2♣ demande à l’ouvreur s’il a une majeure quatrième. L’ouvreur répond 2♦ (pas de majeure quatrième), 2♥ (quatre cœurs, peut-être aussi quatre piques) ou 2♠ (quatre piques, pas quatre cœurs). Ensuite :</p>
<ul>
<li>Si un fit est trouvé, soutenez à 3 pour proposer la manche ou à 4 pour la jouer.</li>
<li>Sinon, dites 2SA avec 8-9 ou 3SA avec 10-15.</li>
<li>Si l’ouvreur a montré les cœurs et que vous avez les piques, dites 2SA ou 3SA. L’ouvreur, qui peut avoir les deux majeures, corrige à pique s’il en a quatre.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Le partenaire a ouvert de 1SA : dites 2♣"></div>
<p>10 H et deux majeures quatrièmes. Sur 2♦, dites 3SA ; sur 2♥, dites 4♥ ; sur 2♠, dites 4♠. Le Stayman demande 8+ H, car après une réponse de 2♦ vous devez pouvoir dire au moins 2SA.</p>

<h3>Les Texas Jacoby</h3>
<p>Avec une majeure cinquième ou plus longue, faites un Texas : nommez la couleur juste en dessous et laissez l’ouvreur dire la vôtre. La main forte devient déclarante et l’entame vient vers elle. Les Texas s’emploient avec n’importe quelle force, de rien du tout jusqu’aux valeurs de chelem.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Le partenaire a ouvert de 1SA : 2♥, puis passe"></div>
<p>3 H. 2♠ jouera bien mieux que 1SA. Faites le Texas par 2♥ et passez sur le 2♠ de l’ouvreur.</p>
<p>Une fois le Texas accepté, le répondant continue :</p>
<table>
<thead><tr><th>Enchère suivante</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Passe</td><td>0-7, arrêt</td></tr>
<tr><td>2SA</td><td>8-9 avec exactement cinq cartes dans la majeure (l’ouvreur choisit)</td></tr>
<tr><td>3 dans la majeure</td><td>8-9 avec six cartes ou plus, proposition</td></tr>
<tr><td>3SA</td><td>10-15 avec exactement cinq cartes (l’ouvreur choisit entre 3SA et 4 dans la majeure)</td></tr>
<tr><td>4 dans la majeure</td><td>10-15 avec six cartes ou plus, pour jouer (avec les Texas au palier de 4, dites plutôt 4♦ ou 4♥ d’emblée)</td></tr>
<tr><td>Couleur nouvelle</td><td>Naturelle et forcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Le partenaire a ouvert de 1SA : 2♦, puis 3SA"></div>
<p>10 H et cinq cœurs. Faites le Texas, puis dites 3SA. Avec trois cœurs ou plus, l’ouvreur dit 4♥ ; avec un doubleton, il passe.</p>
<p>Avec quatre cartes de soutien et 17 H, l’ouvreur fait une <strong>super-acceptation</strong> en sautant : 1SA – 2♦ – 3♥. Le répondant demande alors la manche avec presque n’importe quoi, car le fit compte au moins neuf cartes et l’ouvreur est au maximum de sa zone.</p>

<h3>Longues mineures, propositions et essais de chelem</h3>
<p>Avec une main faible et six cartes ou plus dans une mineure, dites 2♠ : l’ouvreur doit dire 3♣, et vous passez avec les trèfles ou dites 3♦ avec les carreaux. Avec ♠52 ♥742 ♦J3 ♣Q108653 : 1SA – 2♠ – 3♣ – passe.</p>
<p>2SA propose la manche avec 8-9. L’ouvreur passe avec 15, dit 3SA avec 17 et juge avec 16 (il accepte avec de bons 10 et 9 ou une couleur cinquième). Ici, 4SA n’est pas un Blackwood : il montre 16-17 et demande à l’ouvreur de dire 6SA avec un maximum. Avec ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 H), dites 4SA : 16 + 15-17 = 31-33 à deux, le chelem n’est donc bon que si l’ouvreur est au maximum de sa zone.</p>

<h3>Répondre à 2SA</h3>
<p>L’ouverture de 2SA montre 20-21. Les mêmes outils s’appliquent un palier plus haut : 3♣ est le Stayman, 3♦ et 3♥ sont des Texas, 4♦ et 4♥ des Texas au palier de 4, 3SA montre 4-10 points et 4SA (11-12) est quantitatif. Même 4 points suffisent pour demander la manche.</p>
<div class="tip">Avec une majeure cinquième et assez pour la manche, faites d’abord le Texas, puis dites 3SA. L’ouvreur, qui connaît sa propre main et sait que vous avez cinq cartes, fait le choix final entre 3SA et la manche en majeure.</div>
<div class="warn">N’employez pas le Stayman avec une main régulière de 8+ sans majeure quatrième. Vous finiriez par deviner ; dites simplement 2SA ou 3SA.</div>
`,
    keyPoints: [
      '1SA = 15-17 régulier ; le répondant additionne les points et fixe le contrat.',
      '2♣ Stayman (8+, une majeure quatrième) : réponses 2♦ aucune, 2♥ cœurs (peut-être aussi piques), 2♠ piques seulement.',
      '2♦ et 2♥ sont des Texas vers cœur et pique, quelle que soit la force ; 2♠ est un Texas trèfle pour une main faible avec une longue mineure.',
      '2SA = 8-9 proposition, 3SA = 10-15, 4SA = 16-17 quantitatif (pas un Blackwood).',
      'L’ouvreur super-accepte un Texas avec quatre cartes de soutien et 17 en sautant à 3 dans la majeure.',
      'Sur 2SA : 3♣ Stayman, 3♦/3♥ Texas, 4♦/4♥ Texas au palier de 4, 3SA avec 4-10, 4SA quantitatif.',
    ],
    quiz: [
      {
        q: 'Votre partenaire ouvre de 1SA. Vous avez ♠J8752 ♥84 ♦932 ♣Q65 (3 H). Quel est votre plan ?',
        options: ['Passe', '2♥ (Texas), puis passe sur 2♠', 'Dire 2♠', 'Dire 2♣'],
        answer: 1,
        explain: 'Une main faible avec cinq piques joue mieux à 2♠ qu’à 1SA, car les longs atouts rapportent des levées. Faites le Texas par 2♥ et passez. 2♠ serait un Texas trèfle, et le Stayman demande 8+.',
      },
      {
        q: '1SA – 2♣ – 2♥. Vous avez ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 H). Et maintenant ?',
        options: ['3SA', '4♥', '3♥', '2SA'],
        answer: 1,
        explain: 'L’ouvreur a quatre cœurs : il y a un fit 4-4, et 11 + 15-17 suffisent pour la manche. Dites 4♥ ; un fit 4-4 en majeure joue en général mieux que 3SA.',
      },
      {
        q: 'Vous avez ouvert de 1SA avec ♠KQ75 ♥AJ83 ♦K4 ♣Q62. Votre partenaire dit 2♣. Que répondez-vous ?',
        options: ['2♥', '2♠', '2♦', '2SA'],
        answer: 0,
        explain: 'Avec les deux majeures, répondez d’abord 2♥. Si votre partenaire a les piques plutôt que les cœurs, il dira 2SA ou 3SA et vous corrigerez à pique.',
      },
      {
        q: '1SA – 2♦ – 2♥ – 3SA. Vous avez ouvert avec trois cœurs. Que faites-vous ?',
        options: ['Passe, puisque le partenaire a choisi 3SA', 'Je dis 4♥ : le partenaire a montré cinq cœurs, nous avons donc un fit de huit cartes', 'Je dis 4SA', 'Je dis 3♥'],
        answer: 1,
        explain: 'Le Texas suivi de 3SA montre exactement cinq cœurs et les valeurs de manche. Avec trois cartes de soutien, l’ouvreur choisit 4♥ ; avec un doubleton, il passe sur 3SA.',
      },
      {
        q: 'Votre partenaire ouvre de 2SA. Vous avez ♠Q8642 ♥K7 ♦J73 ♣1052 (6 H). Quel est votre plan ?',
        options: ['Dire 3♠', 'Dire 3♥, puis 3SA sur 3♠', 'Dire 3SA', 'Passe'],
        answer: 1,
        explain: '20-21 face à 6 suffisent pour la manche. Faites le Texas par 3♥, puis dites 3SA pour montrer exactement cinq piques ; l’ouvreur choisit 4♠ avec trois cartes de soutien ou passe avec deux.',
      },
    ],
  },

  {
    id: 'planning-the-play',
    title: 'Le plan de jeu',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Avant de jouer à la première levée, comptez vos levées sûres (à sans-atout) ou vos perdantes (à l’atout) et faites un plan.',
    body: `
<h3>Arrêtez-vous et faites un plan avant la première levée</h3>
<p>Quand le mort s’étale, la plupart des débutants jouent tout de suite une carte à la première levée. Les bons joueurs prennent le temps de réfléchir. C’est souvent à la première levée que le contrat se gagne ou se perd, et vous ne pouvez pas la jouer correctement sans avoir une vue d’ensemble. Suivez toujours la même démarche :</p>
<ol>
<li><strong>Comptez.</strong> À sans-atout, comptez vos levées sûres : celles que vous pouvez faire sans rendre la main. À l’atout, comptez vos perdantes dans la main longue à l’atout.</li>
<li><strong>Comparez.</strong> Combien de levées supplémentaires vous faut-il (sans-atout), ou de combien de perdantes devez-vous vous débarrasser (atout) ?</li>
<li><strong>Trouvez les sources.</strong> Les levées supplémentaires viennent de l’affranchissement des longues couleurs, de l’élimination des gros honneurs adverses, des impasses et des coupes dans la main courte à l’atout. Les perdantes disparaissent en les coupant au mort, en les défaussant sur les levées maîtresses du mort, ou grâce aux impasses.</li>
<li><strong>Repérez les dangers.</strong> Combien de fois devrez-vous rendre la main ? Quel adversaire est dangereux ? Avez-vous les remontées nécessaires ?</li>
<li><strong>Décidez de l’ordre du jeu</strong>, à commencer par la carte à jouer du mort et la main qui doit prendre la première levée.</li>
</ol>

<h3>Un exemple à sans-atout : comptez les levées sûres</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3SA joué par Sud. Ouest entame de la ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Comptez :</strong> ♠AK (2), ♦AKQ (3), ♣A (1) : six levées sûres. Il vous en faut trois de plus.</p>
<p><strong>Sources :</strong> les cœurs. Une fois l’♥A chassé, les KQJ10 du mort fourniront trois levées. Les trèfles n’offrent rien : les défenseurs détiennent le K, la Q, le J et le 10.</p>
<p><strong>Danger :</strong> les défenseurs peuvent garder l’♥A jusqu’au troisième tour. Le dernier cœur du mort sera alors maître, mais il vous faudra une remontée pour l’atteindre. La seule remontée extérieure du mort est l’♠A.</p>
<p><strong>Plan :</strong> fournissez petit du mort à la première levée et prenez du ♠K en main, en gardant l’♠A comme remontée. Puis jouez cœur immédiatement. Quel que soit le moment où les défenseurs prennent leur As, vous avez neuf levées : deux piques, trois cœurs, trois carreaux et un trèfle. Si vous prenez distraitement la première levée de l’♠A, un défenseur qui garde l’♥A jusqu’au troisième tour laisse le quatrième cœur du mort sans remontée, et vous ne faites que huit levées.</p>
<div class="tip">Chassez tôt les gros honneurs adverses, tant que vous avez encore des arrêts dans toutes les couleurs. Encaissez vos levées sûres en dernier, pas en premier.</div>

<h3>Un exemple à l’atout : comptez les perdantes</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ joué par Sud. Ouest entame de la ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Comptez les perdantes de la main de Sud :</strong> aucune à pique ; une à cœur (le troisième tour) ; trois à carreau (le 7, le 3 et le 2) ; aucune à trèfle (l’♣A du mort couvre votre singleton). Total : quatre. Vous pouvez vous en permettre trois.</p>
<p><strong>Source :</strong> le mort n’a que deux carreaux. Après l’♦A et un autre tour, le mort est chicane et peut couper votre troisième carreau avec un petit atout. Cette coupe est une levée de plus parce qu’elle est faite par la main <em>courte</em> à l’atout : les atouts de Sud sont de toute façon maîtres.</p>
<p><strong>Danger :</strong> si vous tirez d’abord trois tours d’atout, le mort n’a plus d’atout pour couper. Vous devez garder au moins un atout au mort jusqu’à ce que la coupe soit faite.</p>
<p><strong>Plan :</strong> prenez l’entame de l’♥A du mort, jouez carreau vers votre As et concédez un carreau. Si les défenseurs prennent et rejouent atout (leur meilleure défense), prenez et coupez aussitôt un carreau au mort. Tirez alors les atouts. Vous perdez un cœur et deux carreaux.</p>
<div class="warn">« Toujours tirer les atouts d’abord » est une bonne habitude, avec une grosse exception : quand vous avez besoin des atouts du mort pour couper, faites les coupes avant que les atouts aient disparu.</div>

<h3>Compter, c’est une habitude</h3>
<p>Compter prend quelques secondes, et ne pas compter coûte très cher. À sans-atout, si vos levées sûres atteignent déjà l’objectif, encaissez-les et évitez les risques inutiles. S’il vous en manque, décidez d’où viendront les levées supplémentaires <em>avant</em> de toucher une carte, car l’ordre du jeu et le choix de la main qui prend la première levée en dépendent souvent.</p>
`,
    keyPoints: [
      'Faites un plan avant de jouer à la première levée : comptez, comparez, trouvez les sources, repérez les dangers, puis décidez de l’ordre.',
      'À sans-atout, comptez les levées sûres ; à l’atout, comptez les perdantes de la main longue à l’atout.',
      'Chassez tôt les gros honneurs adverses, tant que vous avez encore des arrêts.',
      'Les coupes dans la main courte à l’atout (en général le mort) rapportent des levées ; gardez les atouts du mort jusqu’à ce que les coupes soient faites.',
      'Préservez les remontées dont vous aurez besoin plus tard.',
    ],
    quiz: [
      {
        q: 'Que faut-il compter d’abord dans un contrat à sans-atout ?',
        options: ['Vos perdantes', 'Vos levées sûres', 'Vos atouts', 'Les H adverses'],
        answer: 1,
        explain: 'À sans-atout, il n’y a pas de coupes : la mesure naturelle, ce sont les levées que vous pouvez faire sans rendre la main. Ce qui manque vous dit combien de levées doivent venir des longues couleurs ou des impasses.',
      },
      {
        q: 'Quelle coupe rapporte une levée ?',
        options: ['Une coupe dans la main longue à l’atout', 'Une coupe dans la main courte à l’atout', 'Les deux autant', 'Aucune'],
        answer: 1,
        explain: 'Vos longs atouts feraient de toute façon des levées : couper avec eux ne fait que consommer une levée maîtresse. Une coupe avec les atouts de la main courte (en général le mort) gagne une levée que ces petits atouts ne pourraient pas faire autrement.',
      },
      {
        q: 'Dans la donne à 3SA ci-dessus, pourquoi prendre la première levée du ♠K en main plutôt que de l’♠A au mort ?',
        options: ['Pour garder l’♠A du mort comme remontée vers les cœurs', 'Parce que le Roi est la plus haute carte', 'Pour laisser passer avec l’arrêt à pique', 'Pour débloquer la couleur de pique'],
        answer: 0,
        explain: 'Si les défenseurs gardent l’♥A jusqu’au troisième tour, le dernier cœur du mort est maître mais inaccessible, à moins que le mort ait encore l’♠A.',
      },
      {
        q: 'Dans la donne à 4♠ ci-dessus, que se passe-t-il si le déclarant tire immédiatement trois tours d’atout ?',
        options: ['Rien, c’est le jeu le plus sûr', 'Le mort n’a plus d’atout pour couper le troisième carreau', 'Les défenseurs peuvent couper un cœur', 'Le déclarant perd le contrôle des trèfles'],
        answer: 1,
        explain: 'Le mort n’avait que trois atouts. Trois tours d’atout les épuisent tous, et le déclarant reste avec trois perdantes à carreau plus un cœur : une de trop.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'L’entame',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Comment choisir la couleur d’entame et la bonne carte dans cette couleur, contre sans-atout et contre un contrat à la couleur.',
    body: `
<h3>Deux décisions : la couleur et la carte</h3>
<p>L’entame est la seule carte que vous jouez sans voir le mort : de bonnes habitudes y sont payantes. Choisissez d’abord la couleur d’après les enchères et votre main ; entamez ensuite la carte conventionnelle de cette couleur, pour que votre partenaire puisse reconstituer votre jeu.</p>

<h3>Choisir la couleur contre sans-atout</h3>
<ul>
<li>Si votre partenaire a nommé une couleur, entamez-la, sauf si vous avez une très bonne alternative.</li>
<li>Sinon, entamez votre couleur la plus longue et la plus solide. Le sans-atout est une course : les défenseurs cherchent à affranchir leurs longues avant que le déclarant n’encaisse ses propres levées.</li>
<li>Préférez les couleurs non nommées. Évitez les couleurs annoncées par les adversaires.</li>
<li>Avec une main très faible et sans remontée, une longue couleur que vous ne pourrez jamais encaisser ne sert peut-être à rien ; mieux vaut parfois entamer dans la longueur probable du partenaire (souvent une majeure que les adversaires n’ont pas citée).</li>
</ul>

<h3>Choisir la couleur contre un contrat à la couleur</h3>
<ul>
<li><strong>Bonnes entames :</strong> la tête d’une séquence ; la couleur du partenaire ; un singleton (surtout quand vous avez l’As d’atout ou que votre partenaire peut avoir une reprise de main) ; l’As d’As-Roi.</li>
<li><strong>Entamez atout</strong> quand les enchères laissent penser que le mort coupera les perdantes du déclarant : le déclarant a montré deux couleurs et le mort a préféré la seconde, ou le mort a montré une courte.</li>
<li><strong>À éviter :</strong> entamer sous un As (le déclarant peut faire un Roi sec, et vous risquez de ne jamais faire votre As) ; entamer sous un Roi devant l’AQ du déclarant ; entamer un honneur second comme Qx.</li>
</ul>
<div class="warn">N’entamez jamais sous un As contre un contrat à la couleur. Si vous devez entamer dans cette couleur, entamez l’As.</div>

<h3>Quelle carte entamer</h3>
<table>
<thead><tr><th>Teneur</th><th>Contre sans-atout</th><th>Contre une couleur</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (4e meilleure)</td><td>5, mais entamer sous un Roi est risqué</td></tr>
<tr><td>A 10 6 3</td><td>3 (4e meilleure)</td><td>À éviter ; si vous y êtes obligé, l’A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (la plus haute de trois petites)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (singleton)</td><td>rarement entamé</td><td>7, souvent une bonne entame</td></tr>
</tbody>
</table>
<p>Les règles derrière ce tableau : entamez la tête d’une séquence (trois cartes touchantes, ou deux touchantes plus la suivante à un cran près, comme KQ10) ; avec une séquence intérieure comme KJ10 ou Q109, entamez la plus haute des cartes touchantes (le J ou le 10) ; entamez l’As d’As-Roi ; entamez la plus haute d’un doubleton et la plus haute de trois petites cartes ; d’un honneur accompagné de deux ou trois petites cartes, entamez petit (3e meilleure avec trois cartes, 4e meilleure avec quatre) ; et contre sans-atout, entamez la 4e meilleure de votre longue couleur.</p>

<h3>Exemples</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Vous entamez contre 1SA – 3SA"></div>
<p>Entamez le ♠J, la tête de la séquence intérieure KJ10. Pique est votre longue couleur, et l’entame du J indique en plus à votre partenaire que vous avez le 10 mais pas la Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Vous entamez contre 1♠ – 2♠ – 4♠"></div>
<p>Deux choix sûrs : l’♥A (l’As d’As-Roi) et la ♦Q (tête de séquence). L’♥A fait la levée et vous permet de voir le mort avant de décider de la suite, tandis que le signal de votre partenaire vous dira s’il faut continuer cœur.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Est : vous entamez contre 2♦"></div>
<p>Entamez atout. Nord a cinq piques ou plus et quatre carreaux ou plus, et la préférence de Sud pour les carreaux suggère une courte à pique. Avec vos piques solides, le déclarant ne peut sauver ses perdantes à pique qu’en les coupant au mort ; chaque tour d’atout que vous jouez supprime une coupe du mort.</p>
<div class="tip">Après chaque entame, demandez-vous ce qu’elle dit à votre partenaire. Les entames conventionnelles permettent à l’autre défenseur de compter la couleur dès la première levée.</div>
`,
    keyPoints: [
      'Choisissez d’abord la couleur : celle du partenaire, puis votre longue couleur contre sans-atout ; séquences, couleur du partenaire, singletons ou atout contre une couleur.',
      'Entamez la tête d’une séquence ; avec KJ10, le J ; avec Q109, le 10 ; l’A d’As-Roi.',
      'Contre sans-atout, entamez la 4e meilleure de votre couleur la plus longue et la plus solide.',
      'Entamez la plus haute d’un doubleton et de trois petites cartes ; petit d’un honneur accompagné de deux ou trois petites cartes.',
      'N’entamez jamais sous un As contre un contrat à la couleur ; entamez atout quand le mort risque de couper.',
    ],
    quiz: [
      {
        q: 'Vous entamez contre 3SA avec ♠KQ1086 comme longue couleur. Quelle carte entamez-vous ?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 est une séquence brisée : entamez le Roi. C’est sûr et cela commence à affranchir la couleur ; la 4e meilleure (le 8) pourrait offrir au déclarant une levée à bon compte avec le J.',
      },
      {
        q: 'Contre 4♥, laquelle de ces entames est la pire ?',
        options: ['La ♦Q de ♦QJ10', 'Le ♣2 de ♣AJ62', 'Un pique singleton', 'Le ♣8 de ♣852'],
        answer: 1,
        explain: 'Entamer sous un As contre un contrat à la couleur est l’entame perdante classique : le déclarant peut faire une levée à bon compte avec le Roi ou la Dame, et votre As risque d’être coupé plus tard.',
      },
      {
        q: 'Votre partenaire est intervenu à 1♠ et les adversaires ont atteint 3SA. Vous avez ♠Q85. Quelle carte entamez-vous ?',
        options: ['♠Q', '♠8', '♠5', 'Une autre couleur'],
        answer: 2,
        explain: 'Entamez dans la couleur du partenaire, et d’un honneur accompagné de deux petites cartes, entamez petit. Entamer la Q pourrait la gaspiller si votre partenaire a l’AJ ; en la gardant, votre camp pourra plus tard capturer avec elle un honneur du déclarant.',
      },
      {
        q: 'Vous décidez d’entamer de ♦94. Quelle carte ?',
        options: ['♦9', '♦4', 'Peu importe', 'Aucune : on n’entame jamais un doubleton'],
        answer: 0,
        explain: 'Entamez la plus haute d’un doubleton. Quand vous jouerez ensuite le 4, votre partenaire verra la grande-petite et saura que vous aviez deux cartes.',
      },
      {
        q: 'Quand l’entame atout est-elle la plus intéressante ?',
        options: ['Quand vous avez l’As d’atout', 'Quand les enchères suggèrent que le mort est court dans la couleur annexe du déclarant et va couper', 'Quand vous avez un singleton dans une couleur annexe', 'Chaque fois que les adversaires jouent en majeure'],
        answer: 1,
        explain: 'L’entame atout réduit les coupes que le mort peut faire. Elle est idéale quand le déclarant a montré une deuxième couleur, que le mort a donné la préférence, ou que le mort est connu court dans une couleur où vous êtes fort.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'La marque en duplicate',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Comment une donne est marquée en duplicate : valeur des levées, primes de partielle, de manche et de chelem, levées de mieux, levées de chute et effet des contres.',
    body: `
<h3>Chaque donne est indépendante</h3>
<p>En duplicate, chaque donne est marquée séparément. Il n’y a pas de report des partielles d’une donne à l’autre comme en partie libre. Chaque étui indique qui est <strong>vulnérable</strong> ; être vulnérable augmente à la fois les primes de manche et de chelem et les pénalités en cas de chute.</p>

<h3>Étape 1 : la valeur des levées</h3>
<p>Seules les levées demandées et réussies comptent dans la valeur des levées :</p>
<table>
<thead><tr><th>Dénomination</th><th>Par levée demandée et réussie</th></tr></thead>
<tbody>
<tr><td>♣ ou ♦</td><td>20</td></tr>
<tr><td>♥ ou ♠</td><td>30</td></tr>
<tr><td>SA</td><td>40 pour la première levée, 30 pour chacune des suivantes</td></tr>
</tbody>
</table>
<p>Les contrats contrés valent deux fois la valeur des levées, les contrats surcontrés quatre fois. Ainsi, 2♥ vaut 60, mais 2♥ contré vaut 120.</p>

<h3>Étape 2 : les primes</h3>
<table>
<thead><tr><th>Prime</th><th>Non vulnérable</th><th>Vulnérable</th></tr></thead>
<tbody>
<tr><td>Partielle (valeur des levées inférieure à 100)</td><td>50</td><td>50</td></tr>
<tr><td>Manche (valeur des levées de 100 ou plus)</td><td>300</td><td>500</td></tr>
<tr><td>Petit chelem (palier de 6)</td><td>500 en plus</td><td>750 en plus</td></tr>
<tr><td>Grand chelem (palier de 7)</td><td>1000 en plus</td><td>1500 en plus</td></tr>
<tr><td>Contrat contré réussi</td><td>50</td><td>50</td></tr>
<tr><td>Contrat surcontré réussi</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Les primes de chelem s’ajoutent à la prime de manche. La manche exige une valeur des levées de 100 : 3SA (40 + 30 + 30), 4♥ ou 4♠ (120), 5♣ ou 5♦ (100).</p>

<h3>Étape 3 : les levées de mieux</h3>
<p>Les levées de mieux non contrées valent leur valeur normale (20, 30, ou 30 à sans-atout). Contrées, elles valent 100 chacune non vulnérable et 200 vulnérable ; surcontrées, 200 et 400.</p>

<h3>La chute : les levées de chute</h3>
<table>
<thead><tr><th>Chute</th><th>Non vuln.</th><th>Non vuln. contré</th><th>Vuln.</th><th>Vuln. contré</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Contré et non vulnérable : 100 pour la première levée de chute, 200 pour chacune des deuxième et troisième, 300 pour chacune des suivantes. Contré et vulnérable : 200 pour la première, 300 pour chacune des suivantes. Les chutes surcontrées valent le double des chutes contrées.</p>

<h3>Les marques à connaître par cœur</h3>
<table>
<thead><tr><th>Contrat juste fait</th><th>Non vuln.</th><th>Vuln.</th></tr></thead>
<tbody>
<tr><td>1SA</td><td>90</td><td>90</td></tr>
<tr><td>2♥ ou 2♠, 3♣ ou 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2SA</td><td>120</td><td>120</td></tr>
<tr><td>3♥ ou 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3SA</td><td>400</td><td>600</td></tr>
<tr><td>4♥ ou 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ ou 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ ou 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6SA</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7SA</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ ou 2♠ contré</td><td>470</td><td>670</td></tr>
<tr><td>1SA contré</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Exemple : 4♠ avec onze levées, non vulnérable. Valeur des levées 4 × 30 = 120, prime de manche 300, une levée de mieux 30 : total 450. Le même résultat vulnérable : 120 + 500 + 30 = 650.</p>
<p>Exemple : 3SA contré avec dix levées, vulnérable. Valeur des levées (40 + 30 + 30) × 2 = 200, prime de manche 500, prime de contrat contré 50, une levée de mieux contrée 200 : total 950.</p>
<div class="warn">Un contre peut transformer une partielle en manche : 2♥ contré a une valeur des levées de 120, et sa réussite rapporte donc 470 ou 670 au lieu de 110. Ne contrez pas un contrat bas pour punir si vous ne comptez pas le faire chuter.</div>
<div class="tip">Remarquez que 5♣ et 3SA marquent autant, mais que 3SA demande deux levées de moins. C’est l’une des raisons pour lesquelles on préfère les manches à sans-atout et en majeure aux manches en mineure.</div>
`,
    keyPoints: [
      'Valeur des levées : mineures 20, majeures 30, sans-atout 40 puis 30 ; contré ×2, surcontré ×4.',
      'La manche (valeur des levées de 100+) rapporte 300 non vulnérable ou 500 vulnérable ; une partielle rapporte 50.',
      'Primes de chelem : petit 500/750, grand 1000/1500, en plus de la prime de manche.',
      'Levées de chute : 50/100 sans contre ; contrées 100-300-500-800 non vulnérable et 200-500-800-1100 vulnérable.',
      'Réussir un contrat contré ajoute une prime de 50, et les levées de mieux contrées valent 100 ou 200 chacune.',
    ],
    quiz: [
      {
        q: 'Vous réussissez 4♥ tout juste, vulnérable. Combien marquez-vous ?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Valeur des levées 4 × 30 = 120, plus la prime de manche vulnérable de 500 : 620.',
      },
      {
        q: 'Vous faites dix levées à 3SA, non vulnérable. Combien marquez-vous ?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 pour le contrat, 300 pour une manche non vulnérable et 30 pour la levée de mieux : 430.',
      },
      {
        q: 'Non vulnérable, vous chutez de trois levées, contré. Combien marquent les adversaires ?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'Non vulnérable contré : 100 pour la première levée de chute et 200 pour chacune des deuxième et troisième : 100 + 200 + 200 = 500.',
      },
      {
        q: 'Les adversaires réussissent 2♠ contré, non vulnérables. Combien marquent-ils ?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Contrée, la valeur des levées est de 2 × 30 × 2 = 120, ce qui fait une manche : 120 + 300 de prime de manche + 50 de prime de contre = 470.',
      },
      {
        q: 'Vous réussissez 6♠ tout juste, non vulnérable. Combien marquez-vous ?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Valeur des levées 6 × 30 = 180, prime de manche 300 et prime de petit chelem 500 : 980. Vulnérable, ce serait 180 + 500 + 750 = 1430.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'L’affranchissement des longues',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Comment transformer les petites cartes d’une longue couleur en levées, et comment garder les remontées nécessaires pour les encaisser.',
    body: `
<h3>D’où viennent les levées supplémentaires</h3>
<p>Dans la plupart des contrats à sans-atout, les levées supplémentaires dont vous avez besoin viennent des longues couleurs. Une fois que les adversaires n’ont plus de cartes dans une couleur, chaque carte qui vous reste dans cette couleur est maîtresse, même un 2. Transformer de petites cartes en levées s’appelle <strong>affranchir</strong> la couleur.</p>

<h3>Compter les tours</h3>
<p>Pour savoir combien de levées une couleur rapportera, pensez à la répartition probable des cartes adverses. Avec A K 6 4 2 face à 7 5 3, vous avez huit cartes et les adversaires cinq. Si leurs cartes sont réparties 3-2 (68 % des cas), trois tours les épuisent : vous gagnez l’A et le K, vous perdez un tour, et les deux dernières cartes sont maîtresses. Quatre levées. Si elles sont réparties 4-1, il faut quatre tours et la couleur ne rapporte que trois levées.</p>
<table>
<thead><tr><th>Cartes manquantes</th><th>Répartition la plus probable</th><th>Probabilité</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68 %</td></tr>
<tr><td>6</td><td>4-2 (3-3 seulement 36 %)</td><td>48 %</td></tr>
<tr><td>7</td><td>4-3</td><td>62 %</td></tr>
</tbody>
</table>

<h3>Perdez tôt la levée que vous devez perdre</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3SA joué par Sud. Ouest entame de la ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Comptez :</strong> ♠AK, ♥A, ♦AK, ♣AK : sept levées sûres. Il en faut deux de plus, et les carreaux peuvent les fournir s’ils sont répartis 3-2.</p>
<p><strong>Le piège :</strong> le mort n’a aucune remontée en dehors des carreaux. Si vous jouez l’♦A, le ♦K et un troisième carreau, les défenseurs prennent le troisième tour et les deux longs carreaux du mort restent bloqués. Vous faites sept levées.</p>
<p><strong>La solution :</strong> prenez de l’♠A et jouez immédiatement un petit carreau des deux mains, en <em>laissant passer</em> le premier tour. Prenez le retour des défenseurs, jouez carreau vers l’As et encaissez le Roi ; si la couleur était répartie 3-2, elle est maintenant purgée, et vous êtes toujours au mort pour encaisser les deux longs carreaux. Neuf levées : deux piques, un cœur, quatre carreaux et deux trèfles.</p>
<p>Ce coup à blanc ne coûte rien : vous deviez de toute façon perdre une levée à carreau. Vous la perdez simplement pendant que le mort a encore l’A et le K pour y revenir.</p>
<div class="tip">Quand une couleur doit perdre une levée et que la main longue a peu de remontées, perdez cette levée au premier tour, pas au dernier.</div>

<h3>Le déblocage : d’abord les honneurs de la main courte</h3>
<p>Avec ♣KQ3 face à ♣A8642, jouez d’abord le Roi et la Dame, puis passez à l’As avec le 3. Si vous encaissez l’As en premier, le K et la Q restent seuls dans une main et la couleur se bloque : vous ne pouvez plus rejoindre les longues sans une remontée extérieure. Le principe est le même dès qu’une main est courte : encaissez d’abord les honneurs de la main courte.</p>

<h3>Chasser les gros honneurs adverses</h3>
<p>Certaines couleurs ne posent aucun problème de petites cartes : il suffit d’en chasser l’As adverse. KQJ10 face à de petites cartes rapporte trois levées une fois l’As parti. Attaquez ces couleurs tôt, tant que vous avez encore des arrêts dans les autres, pour que les défenseurs ne puissent pas affranchir leur propre longue couleur avant vous.</p>

<h3>Choisir la couleur à affranchir</h3>
<ul>
<li>Préférez la couleur qui oblige à perdre le moins de levées et dont la répartition nécessaire est la plus probable.</li>
<li>Préférez rendre la main à l’adversaire qui ne peut pas vous nuire (voir les leçons « Le laisser-passer et les communications » et « Le jeu d’évitement : tenir l’adversaire dangereux à l’écart de la main »).</li>
<li>Vérifiez les remontées : une couleur que vous pouvez affranchir mais jamais atteindre ne vaut rien.</li>
<li>À l’atout, les longues couleurs annexes s’affranchissent de la même façon, souvent en coupant les petites cartes dans la main longue à l’atout jusqu’à ce que les dernières soient maîtresses.</li>
</ul>
<div class="warn">N’encaissez pas toutes vos levées sûres d’abord « pour voir ». Chaque levée encaissée affranchit aussi des levées pour les défenseurs et détruit vos propres remontées et vos arrêts.</div>
`,
    keyPoints: [
      'Les petites cartes deviennent maîtresses une fois que les adversaires n’ont plus de cartes dans la couleur.',
      'Comptez les tours : avec cinq cartes manquantes, une répartition 3-2 (68 %) demande trois tours.',
      'Laissez passer le tour que vous devez perdre tant que la main longue a encore ses gros honneurs comme remontées.',
      'Débloquez en encaissant d’abord les honneurs de la main courte.',
      'Attaquez tôt votre longue couleur, avant que les défenseurs n’affranchissent la leur.',
    ],
    quiz: [
      {
        q: 'Vous avez A K 6 4 2 face à 7 5 3. Si les cinq cartes manquantes sont réparties 3-2, combien de levées la couleur peut-elle rapporter ?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Trois tours épuisent une répartition 3-2. Vous gagnez deux de ces tours et en perdez un ; les deux cartes restantes de la main longue sont maîtresses : 4 levées.',
      },
      {
        q: 'Dans la donne à 3SA ci-dessus, pourquoi laisser passer le premier tour de carreau ?',
        options: ['Pour savoir qui a la Dame', 'Pour garder l’♦A et le ♦K comme remontées vers les longs carreaux', 'Pour laisser passer à pique', 'Parce que laisser passer rapporte toujours une levée de plus'],
        answer: 1,
        explain: 'Le mort n’a pas de remontée extérieure. En perdant d’abord la levée inévitable à carreau, vous pouvez, après l’A et le K, dérouler les longues sans avoir à revenir au mort.',
      },
      {
        q: 'Vous avez ♣KQ3 en main et ♣A8642 au mort, sans autre remontée au mort. Comment jouer les trèfles ?',
        options: ['L’As d’abord, puis le Roi et la Dame', 'Le Roi et la Dame d’abord, puis un petit trèfle vers l’As', 'Jouer le 2 du mort', 'Peu importe'],
        answer: 1,
        explain: 'Encaissez d’abord les honneurs de la main courte. Après le K et la Q, vous pouvez encore passer à l’As avec le 3 et, si la couleur est répartie 3-2, encaisser les longues. L’As en premier laisse le K et la Q bloquer la couleur.',
      },
      {
        q: 'Les adversaires ont six cartes dans une couleur. Dans quelle proportion sont-elles réparties 3-3 ?',
        options: ['36 %', '48 %', '50 %', '68 %'],
        answer: 0,
        explain: 'Avec un nombre pair de cartes manquantes, la répartition égale est moins probable qu’on ne le croit : 3-3 vaut environ 36 %, alors que 4-2 vaut environ 48 %.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Les impasses',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Comment faire des levées avec des cartes qui ne sont pas les plus hautes en jouant vers elles, et quand faire l’impasse plutôt que de jouer en tête.',
    body: `
<h3>Le principe</h3>
<p>Une impasse consiste à essayer de faire une levée avec une carte qui n’est pas la plus haute en jeu, en la jouant <em>après</em> l’adversaire qui détient la carte supérieure. Pour cela, vous jouez <strong>vers</strong> la carte que vous espérez voir gagner.</p>
<p>Le cas le plus simple : le mort (Nord) a ♠A Q et vous (Sud) avez deux petits piques. Jouez un petit pique de votre main. Si Ouest fournit petit, mettez la Dame. Si Ouest a le Roi, la Dame fait la levée ; si c’est Est qui l’a, la Dame perd. Dans les deux cas, l’As reste maître. Une impasse simple réussit une fois sur deux, mais elle ne coûte rien quand vous devez de toute façon jouer la couleur.</p>

<h3>Jouer vers un honneur</h3>
<p>Avec K 5 au mort et 6 4 en main, jouez de votre main vers le Roi. Si Ouest a l’As, le Roi fera une levée : si Ouest prend de l’As, le Roi est affranchi ; s’il laisse passer, le Roi fait la levée. Si au contraire vous jouez le Roi du mort, il ne peut jamais gagner tant que l’As est dehors.</p>
<div class="warn">Jouer un honneur n’est juste que si vous pouvez vous permettre qu’il soit couvert, c’est-à-dire si vous avez les cartes juste en dessous. Jouez la Dame de Q J 10 face à A 3 2, mais pas de Q 3 2 en main face à A 5 4 au mort : si la Dame est couverte, vous n’avez plus rien à promouvoir. Jouez plutôt petit du mort vers la Dame, qui fera une levée chaque fois qu’Est aura le Roi.</div>

<h3>Impasses répétées et doubles impasses</h3>
<table>
<thead><tr><th>Combinaison</th><th>Maniement</th><th>Résultat</th></tr></thead>
<tbody>
<tr><td>A Q face à 3 2</td><td>Jouer vers A Q et faire l’impasse à la Q</td><td>2 levées 50 %</td></tr>
<tr><td>K 5 face à 6 4</td><td>Jouer vers le K</td><td>1 levée 50 %</td></tr>
<tr><td>A Q 10 face à 4 3 2</td><td>Impasse au 10, puis plus tard à la Q</td><td>3 levées 25 %, au moins 2 levées 75 %</td></tr>
<tr><td>A J 10 face à 4 3 2</td><td>Impasse au 10 (ou au J) ; si elle échoue, refaire l’impasse</td><td>2 levées 75 % (échoue seulement si K et Q sont mal placés)</td></tr>
<tr><td>A K J face à 4 3 2</td><td>Impasse au J</td><td>3 levées environ 50 %</td></tr>
</tbody>
</table>
<p>Une double impasse réussit dès qu’au moins un des deux honneurs manquants est bien placé ; chaque honneur se trouve indépendamment en Ouest ou en Est, donc la probabilité que les deux soient mal placés est de ½ × ½ = 25 %.</p>

<h3>Impasse ou jeu en tête ? « Huit l’impasse, neuf en tête »</h3>
<p>Quand il vous manque la Dame et que vous n’avez aucun autre indice :</p>
<ul>
<li>Avec <strong>huit</strong> cartes (cinq manquantes), faites l’impasse. L’impasse (après avoir encaissé l’As au cas où la Dame serait sèche) réussit environ 40 % du temps avec A K J x x (environ 51 % avec A K J 10 x) ; jouer pour la chute de la Dame ne réussit qu’environ 33 % du temps.</li>
<li>Avec <strong>neuf</strong> cartes (quatre manquantes), encaissez l’As et le Roi en espérant faire tomber la Dame. Cela réussit environ 53 % du temps, l’impasse environ 51 %.</li>
</ul>
<p>Cette règle ne sert qu’à départager. Les informations tirées des enchères (un joueur qui a ouvert ou barré détient l’essentiel des honneurs ou de la longueur) ou du début du jeu l’emportent sur ces petits écarts.</p>

<h3>Une impasse en pratique</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ joué par Sud. Ouest entame du ♥J."></div>
<p>Vous devez perdre l’♦A : le chelem dépend donc de ne pas perdre de levée d’atout. Il vous manque le ♠K, et avec neuf atouts vous faites l’impasse : vous ne pouvez le capturer que s’il est en Est, car Est joue avant votre A Q J 10 (ou si Ouest a le Roi sec).</p>
<p>Prenez l’entame de la ♥Q du mort, pour être dans la bonne main, et jouez un petit atout. Si Est fournit petit, mettez le 10 (ou le J). S’il fait la levée, vous devrez peut-être répéter l’impasse : revenez au mort par le ♣K et rejouez atout. Prévoir les remontées d’une impasse répétée fait partie du travail : le mort a deux remontées rapides (la ♥Q et le ♣K), et vous devez les réserver à la couleur d’atout plutôt que les gaspiller.</p>
<div class="tip">La règle « huit l’impasse, neuf en tête » concerne la Dame. Quand il vous manque le Roi, vous faites encore l’impasse avec neuf ou dix cartes ; ce n’est qu’avec onze cartes que le jeu en tête devient légèrement meilleur (52 %).</div>
`,
    keyPoints: [
      'Jouez vers la carte que vous espérez voir gagner ; une impasse simple, c’est une chance sur deux.',
      'Ne jouez un honneur en impasse que si vous avez les cartes juste en dessous.',
      'Une double impasse (A Q 10, A J 10) rapporte au moins une levée de plus dans 75 % des cas.',
      'Il manque la Dame : impasse avec huit cartes, jeu en tête avec neuf (« huit l’impasse, neuf en tête »).',
      'Prévoyez vos remontées pour les impasses répétées.',
    ],
    quiz: [
      {
        q: 'Le mort a ♥A Q et vous avez ♥7 4. Comment jouer les cœurs pour tenter de faire deux levées ?',
        options: ['Encaisser l’As, puis jouer la Dame', 'Jouer la Dame du mort', 'Jouer un petit cœur de la main et mettre la Dame si Ouest fournit petit', 'Jouer l’As en espérant faire tomber le Roi'],
        answer: 2,
        explain: 'La Dame ne peut gagner que si elle est jouée après le Roi. Jouez de votre main pour qu’Ouest doive fournir avant le mort ; si Ouest a le Roi, la Dame fait la levée.',
      },
      {
        q: 'Avec A Q 10 au mort et 4 3 2 en main, quelle est la probabilité que la double impasse vous donne au moins deux levées ?',
        options: ['25 %', '50 %', '75 %', '90 %'],
        answer: 2,
        explain: 'Vous faites au moins deux levées, sauf si le K et le J sont tous les deux en Est. Chacun est en Ouest une fois sur deux : les deux ne sont mal placés qu’une fois sur quatre.',
      },
      {
        q: 'Vous avez A K J 5 2 face à 6 4 3 (huit cartes) et il vous manque la Dame. Quel est le meilleur maniement, sans indice des enchères ?',
        options: ['Encaisser l’As et le Roi', 'Encaisser l’As, puis faire l’impasse au Valet', 'Jouer le Valet', 'Laisser passer un tour'],
        answer: 1,
        explain: 'Avec huit cartes, l’impasse (environ 40 %, en encaissant d’abord l’As au cas où la Dame serait sèche) vaut mieux que le jeu en tête (environ 33 %).',
      },
      {
        q: 'Vous avez A K J 5 4 face à 7 6 3 2 (neuf cartes) et il vous manque la Dame. Quel est le meilleur maniement, sans indice ?',
        options: ['Encaisser l’As et le Roi', 'Faire tout de suite l’impasse au Valet', 'Jouer le Valet', 'Laisser passer un tour'],
        answer: 0,
        explain: '« Neuf en tête » : avec seulement quatre cartes manquantes, la Dame tombe sous l’As et le Roi environ 53 % du temps, un peu plus souvent que l’impasse ne réussit (environ 51 %).',
      },
      {
        q: 'Le mort a ♦K 7 3 et vous avez ♦8 4 2. Comment vous donner la meilleure chance de faire une levée ?',
        options: ['Jouer le Roi du mort', 'Jouer petit de la main vers le Roi', 'Jouer petit du mort', 'Attendre que les défenseurs attaquent la couleur'],
        answer: 1,
        explain: 'Jouer vers le Roi fait une levée chaque fois qu’Ouest a l’As. Jouer le Roi perd contre l’As, où qu’il soit.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Petite en deuxième, grosse en troisième',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Les règles de base du défenseur qui joue en deuxième ou en troisième position, quand y déroger, et quand couvrir un honneur par un honneur.',
    body: `
<h3>Petite carte en deuxième position</h3>
<p>Quand le déclarant joue une petite carte vers le mort (ou du mort vers sa main), le défenseur qui joue en deuxième doit en général fournir <strong>petit</strong>. Votre partenaire joue en dernier et peut souvent prendre la levée à bon compte, tandis que vous gardez votre gros honneur pour capturer plus tard un honneur du déclarant.</p>
<p>Exemple : le mort a ♠K J 5 et le déclarant joue un petit pique de sa main vers lui. Vous êtes en deuxième position avec ♠A 7 3. Si vous mettez l’As, vous ne capturez que des petites cartes, et le K et le J du mort restent tous les deux en réserve. Si vous fournissez petit, le déclarant doit deviner : s’il met le Valet et que votre partenaire a la Dame, votre camp fait deux levées ; s’il met le Roi, votre As fera quand même sa levée plus tard.</p>

<h3>Quand jouer haut en deuxième position</h3>
<ul>
<li><strong>Pour encaisser la levée de chute</strong> ou une levée que vous ne pouvez pas vous permettre de perdre, par exemple quand le déclarant s’apprête à défausser ses perdantes.</li>
<li><strong>Quand un honneur est joué</strong> : la question est alors de savoir s’il faut couvrir (voir plus bas).</li>
<li><strong>Pour fournir un honneur d’une séquence.</strong> Supposons que le mort ait K 10 3, le déclarant A 6 2, et que vous soyez devant le mort avec Q J 4. Si le déclarant joue petit et que vous fournissez petit, il fait l’impasse au 10, puis encaisse l’A et le K, et votre Q et votre J tombent : aucune levée pour vous. Mettez le J au premier tour (et la Q quand le déclarant rejoue vers le mort) et vous êtes sûr de faire une levée.</li>
</ul>

<h3>Grosse carte en troisième position</h3>
<p>Quand votre partenaire entame d’une petite carte et que le mort fournit petit, jouez votre carte la <strong>plus haute</strong> pour empêcher le déclarant de faire la levée à bon compte, ou pour faire sortir son gros honneur et promouvoir ceux de votre partenaire.</p>
<ul>
<li>Avec des honneurs touchants, jouez le <strong>plus petit</strong> : de K Q 5, la Q ; de Q J 4, le J. Votre partenaire pourra ainsi savoir où se trouve la carte supérieure.</li>
<li>Ne jouez que la carte nécessaire. Si le mort a fourni le 9 et que vous avez Q 10 2, le 10 suffit.</li>
<li><strong>Faites l’impasse contre le mort.</strong> Si le mort a K 7 3 et fournit petit, et que vous avez A J 4, mettez le J. Le Roi du mort est pris sous votre As : si le déclarant a la Dame, il fait cette levée, mais votre As reste placé derrière le K ; si votre partenaire a la Dame, le J fait la levée.</li>
</ul>

<h3>Couvrir un honneur par un honneur</h3>
<p>Quand un honneur est joué et que vous en avez un plus fort, couvrir oblige le déclarant à utiliser deux de ses gros honneurs pour capturer l’un des vôtres. Cela peut promouvoir une carte plus petite, comme un 10 ou un 9, dans votre main ou celle de votre partenaire.</p>
<table>
<thead><tr><th>Position</th><th>Carreaux</th></tr></thead>
<tbody>
<tr><td>Nord (mort)</td><td>J 7 3</td></tr>
<tr><td>Ouest (partenaire)</td><td>10 2</td></tr>
<tr><td>Est (vous)</td><td>Q 9 4</td></tr>
<tr><td>Sud (déclarant)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>Le déclarant joue le ♦J du mort. Si vous fournissez petit, le J fait la levée, puis l’A et le K font tomber votre Dame : le déclarant ne perd aucune levée. Si vous couvrez de la Q, le déclarant prend de l’A et encaisse le K, ce qui fait tomber le 10 de votre partenaire, mais votre 9 est désormais plus fort que tous les carreaux qui restent au déclarant. Couvrir a créé une levée à partir de rien.</p>

<h4>Quand ne pas couvrir</h4>
<ul>
<li>Quand l’honneur joué fait partie d’une séquence (le mort a Q J 10 4 et joue la Q) : attendez, et couvrez le dernier d’entre eux, s’il y a lieu.</li>
<li>Quand il n’y a manifestement rien à promouvoir, par exemple dans la couleur d’atout quand le déclarant a montré une couleur longue et solide.</li>
<li>Quand l’honneur part de la main du déclarant et que couvrir ne ferait que l’aider à capturer la couleur : réfléchissez à ce qu’il détient avant de réagir.</li>
</ul>
<div class="tip">Couvrir ou non est une question de promotion. Demandez-vous : « Si je couvre, quelle carte de notre camp peut devenir maîtresse ? » Si la réponse est aucune, ne couvrez pas.</div>
<div class="warn">N’hésitez pas pour finalement fournir petit : la pause apprend au déclarant que vous détenez l’honneur manquant. Réfléchissez à ces situations dès que le mort apparaît, pour être prêt le moment venu.</div>
`,
    keyPoints: [
      'Petite carte en deuxième : gardez vos gros honneurs pour capturer ceux du déclarant ; votre partenaire joue en dernier.',
      'Dérogez à la règle pour prendre la levée de chute ou pour fournir un honneur d’une séquence.',
      'Grosse carte en troisième, mais la plus petite des cartes touchantes, et seulement aussi haut que nécessaire.',
      'Faites l’impasse contre l’honneur du mort quand vous êtes placé derrière lui.',
      'Couvrez un honneur par un honneur quand cela peut promouvoir une carte de votre camp ; ne couvrez pas le premier d’une séquence.',
    ],
    quiz: [
      {
        q: 'Le déclarant joue une petite carte de sa main vers K J 5 au mort. Vous avez A 7 3 en deuxième position. Que jouez-vous normalement ?',
        options: ['L’As', 'Une petite carte', 'Le 7, pour signaler', 'Cela n’a jamais d’importance'],
        answer: 1,
        explain: 'Petite carte en deuxième position. Prendre de l’As ne capture que des petites cartes et laisse vivants le K et le J du mort. En fournissant petit, vous obligez le déclarant à deviner, et votre partenaire a peut-être la Dame.',
      },
      {
        q: 'Votre partenaire entame petit contre 3SA. Le mort a 7 5 2 et fournit petit. Vous avez K Q 8. Quelle carte jouez-vous ?',
        options: ['K', 'Q', '8', 'L’un ou l’autre honneur'],
        answer: 1,
        explain: 'Grosse carte en troisième, la plus petite des cartes touchantes : la Q. Si elle fait sortir l’As, votre partenaire sait que vous avez aussi le K.',
      },
      {
        q: 'Votre partenaire entame petit. Le mort a K 7 3 et fournit petit. Vous avez A J 4. Quelle carte jouez-vous ?',
        options: ['A', 'J', '4', 'Le K est au mort, donc peu importe'],
        answer: 1,
        explain: 'Faites l’impasse contre le mort : le J fait la levée si votre partenaire a la Q, et votre As reste placé derrière le Roi du mort. Mettre l’As affranchirait le Roi du mort.',
      },
      {
        q: 'Le mort a ♠Q J 10 4 et joue la Q. Vous avez ♠K 6 3 derrière le mort. Devez-vous couvrir ?',
        options: ['Oui, il faut toujours couvrir un honneur', 'Non, on ne couvre pas le premier d’une séquence', 'Seulement si votre partenaire a signalé', 'Oui, avec le 6'],
        answer: 1,
        explain: 'Couvrir la Q permet au déclarant de prendre de l’As, et le J et le 10 sont alors maîtres. Attendez : si le déclarant continue de jouer des honneurs, couvrez le dernier, c’est là que couvrir peut promouvoir quelque chose.',
      },
      {
        q: 'Pourquoi couvrir un honneur par un honneur ?',
        options: ['Pour gagner la levée', 'Pour obliger le déclarant à utiliser deux honneurs pour un des vôtres, et promouvoir une carte plus petite de votre camp', 'Pour montrer votre force au partenaire', 'Pour obliger le déclarant à couper'],
        answer: 1,
        explain: 'Couvrir fait rarement gagner la levée elle-même. Son intérêt, c’est la promotion : une fois deux honneurs du déclarant partis, une carte plus petite comme un 10 ou un 9 peut devenir maîtresse.',
      },
    ],
  },
];
