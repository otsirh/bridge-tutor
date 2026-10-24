// Leçons, partie 2.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'La redemande du répondant et le choix de la manche',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Comment le répondant utilise sa deuxième enchère pour conclure, proposer ou forcer, et comment choisir entre une majeure, 3SA et cinq en mineure.',
    body: `
<h3>Le répondant devient le capitaine</h3>
<p>Après la redemande de l’ouvreur, vous connaissez en général sa force à trois ou quatre points près, et pas mal de choses sur sa distribution. Votre deuxième enchère doit placer la paire dans le bon contrat ou poser une question de plus. Raisonnez en trois zones :</p>
<table>
<thead><tr><th>Répondant</th><th>Objectif</th><th>Enchères types</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>S’arrêter dans la meilleure partielle</td><td>Passe ; préférence pour la première couleur de l’ouvreur ; répétition d’une couleur sixième ; 1SA</td></tr>
<tr><td>11-12</td><td>Proposer la manche</td><td>2SA ; soutien à 3 dans la couleur de l’ouvreur ; redemande à saut d’une belle couleur sixième</td></tr>
<tr><td>13+</td><td>S’assurer de la manche</td><td>Demander directement la manche, ou nommer une couleur nouvelle (forcing) pour trouver la bonne</td></tr>
</tbody>
</table>
<p>Deux enchères artificielles permettent au répondant de demander au lieu de deviner : la <strong>nouvelle mineure forcing</strong> après une redemande de 1SA de l’ouvreur, et la <strong>quatrième couleur forcing</strong> quand trois couleurs ont été nommées. Elles ont leur propre leçon.</p>

<h3>Exemples</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Répondant : dites 2SA"></div>
<p>L’ouvreur a montré 12-14 régulier. Avec 12 H, le total est de 24-26 : proposez la manche par 2SA. L’ouvreur passe avec 12 et dit 3SA avec 14 (avec 13, il juge). Avec 13+, vous diriez vous-même 3SA ; avec 10 ou moins, vous passeriez.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Répondant : dites 3♥"></div>
<p>L’ouvreur a un minimum avec six cœurs : Q3 suffit donc pour un fit de huit cartes. 12 points face à 12-15 : proposez la manche par 3♥. L’ouvreur dit 4♥ s’il est dans le haut de sa zone.</p>

<h4>La préférence</h4>
<p>Quand l’ouvreur montre deux couleurs et que vous n’avez de fit dans aucune, choisissez entre elles au plus bas. La première couleur de l’ouvreur est au moins aussi longue que la seconde : à longueur égale, revenez à la première. Après 1♥ – 1♠ – 2♣, avec ♥Q43 et ♣97, dites 2♥ : ce n’est pas une marque de force, simplement un meilleur atout. Avec ♥4 et ♣J973, passez sur 2♣.</p>

<h3>Choisir la manche</h3>
<ol>
<li><strong>Fit de huit cartes en majeure ? Jouez en majeure.</strong> Un fit 4-4 ou 5-3 rapporte en général au moins une levée de plus que le sans-atout, car la main courte à l’atout peut couper. Même avec deux mains régulières, 4♥ ou 4♠ est normalement le bon contrat.</li>
<li><strong>Pas de fit majeur ? Préférez 3SA</strong>, à condition que toutes les couleurs non nommées soient arrêtées. 3SA demande neuf levées ; cinq en mineure en demande onze pour la même marque (400 ou 600).</li>
<li><strong>Cinq en mineure</strong> convient aux mains avec un grand fit mineur et une couleur que les adversaires pourraient dérouler à sans-atout, ou avec une courte qui permet des coupes.</li>
</ol>
<table>
<thead><tr><th>Contrat</th><th>Points nécessaires à deux (environ)</th></tr></thead>
<tbody>
<tr><td>3SA, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Petit chelem</td><td>33</td></tr>
<tr><td>Grand chelem</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2SA – 3SA. Sud est déclarant."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Nord–Sud ont 27 H et un fit de neuf cartes à carreau, mais pas de fit majeur, et toutes les couleurs sont arrêtées. À 3SA, vous comptez neuf levées presque tout de suite : deux piques, un cœur, cinq carreaux et un trèfle une fois l’♣A (et peut-être la ♣Q) chassé. À 5♦, il vous faut onze levées et vous avez une perdante à pique, au moins une perdante à cœur et au moins une perdante à trèfle. 3SA est de loin la meilleure manche.</p>

<h3>Les limites des « 25 points pour la manche »</h3>
<ul>
<li><strong>Le fit :</strong> avec un fit de neuf ou dix cartes et une courte, la manche peut gagner avec 22-23 points. Avec un misfit, 26 peuvent ne pas suffire.</li>
<li><strong>Les doublons :</strong> les honneurs face à une courte sont perdus. ♠KQJ face à un singleton pique apporte peu dans un contrat à la couleur.</li>
<li><strong>Les distributions plates :</strong> deux mains 4-3-3-3 produisent moins de levées ; retirez un point.</li>
<li><strong>Les sources de levées :</strong> une longue couleur solide compense des points manquants. Six carreaux maîtres peuvent faire gagner 3SA avec 23 H.</li>
<li><strong>Les arrêts :</strong> 3SA avec une couleur totalement ouverte chute, quels que soient les points.</li>
</ul>
<div class="tip">Avec 13+ points face à une ouverture, ne faites jamais une enchère que votre partenaire peut passer en dessous de la manche. Si vous ne savez pas où jouer, nommez une couleur nouvelle : la couleur nouvelle du répondant est forcing.</div>
<div class="warn">Ne vous acharnez pas sur un misfit sans espoir. Si votre partenaire répète sa couleur et que vous répétez la vôtre, le bon contrat est en général le plus bas possible.</div>
`,
    keyPoints: [
      'Deuxième enchère du répondant : 6-10, s’arrêter ; 11-12, proposer ; 13+, s’assurer de la manche.',
      'À longueur égale, donnez la préférence à la première couleur de l’ouvreur.',
      'Un fit de huit cartes en majeure se joue en général à la manche dans la majeure.',
      'Sans fit majeur, préférez 3SA à cinq en mineure quand toutes les couleurs sont arrêtées.',
      'Environ 25 points pour 3SA ou la manche en majeure, 29 pour cinq en mineure, 33 pour un petit chelem ; ajustez selon le fit et la distribution.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1SA – ? Vous avez ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 H).',
        options: ['Passe', '2SA', '3SA', '2♠'],
        answer: 1,
        explain: 'L’ouvreur a 12-14 : vous avez donc 24-26 à deux. Proposez la manche par 2SA ; l’ouvreur dira 3SA avec un maximum.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Vous avez ♠KJ753 ♥Q43 ♦J86 ♣97 (7 H).',
        options: ['Passe', '2♥', '2♠', '2SA'],
        answer: 1,
        explain: 'L’ouvreur a au moins cinq cœurs : vous avez un fit de huit cartes. 2♥ est une simple préférence et ne montre aucune force supplémentaire.',
      },
      {
        q: 'Vous avez 26 H à deux, un fit 4-4 à pique et deux mains régulières. Quelle manche ?',
        options: ['3SA', '4♠', '5♣', 'C’est à pile ou face'],
        answer: 1,
        explain: 'Le fit 4-4 rapporte en général une levée de plus : une main peut couper pendant que les atouts de l’autre tirent ceux des adversaires. Jouez 4♠.',
      },
      {
        q: 'Vous avez 27 H, pas de fit majeur, un fit de neuf cartes à carreau, et toutes les couleurs sont arrêtées. Quelle manche ?',
        options: ['5♦', '3SA', '4♦', '6♦'],
        answer: 1,
        explain: '3SA demande neuf levées, 5♦ onze, et les deux marquent autant. Avec toutes les couleurs arrêtées, 3SA est la manche la plus probable.',
      },
      {
        q: 'Pourquoi la manche peut-elle chuter avec 26 H ?',
        options: ['C’est impossible : 26 H gagnent toujours la manche', 'À cause des misfits, des valeurs en double emploi ou d’une couleur non arrêtée', 'Parce que 26 H, c’est une main de chelem', 'Seulement si les atouts sont répartis 4-1'],
        answer: 1,
        explain: 'Les points donnent une estimation du potentiel de levées, mais les levées dépendent aussi du fit, de l’utilité des honneurs et des arrêts à sans-atout.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'Les ouvertures fortes de 2♣ et 2SA',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Quand ouvrir de 2♣ ou de 2SA, comment le répondant réagit, et comment s’articulent les zones des mains régulières fortes.',
    body: `
<h3>2♣ : la grosse ouverture</h3>
<p>2♣ est artificiel et ne dit rien sur les trèfles. Il montre soit <strong>22 H ou plus</strong>, soit environ <strong>neuf levées de jeu</strong> (avec une majeure ; avec une mineure, il en faut plutôt dix, puisque la manche en mineure demande onze levées). C’est la seule ouverture forcing : le partenaire doit répondre, même avec rien.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Ouvrez de 2♣ : neuf levées de jeu"></div>
<p>Seulement 20 H, mais comptez les levées : sept piques et deux cœurs, avec des chances pour une dixième. Ouvrir de 1♠, c’est risquer que votre partenaire passe avec une main comme ♠83 ♥J852 ♦Q964 ♣Q83 (5 H), alors que 4♠ est un excellent contrat. Ouvrez de 2♣ et redemandez 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Ouvrez de 2♣, puis redemandez 2SA"></div>
<p>23 H, main régulière : 2♣ suivi de 2SA montre 22-24.</p>

<h3>Répondre à 2♣</h3>
<table>
<thead><tr><th>Réponse</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>Attente : la réponse normale avec la plupart des mains, faibles ou fortes</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positive : une belle couleur cinquième (deux des trois gros honneurs) et 8+ H</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Le partenaire a ouvert de 2♣ : dites 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Le partenaire a ouvert de 2♣ : dites 2♥"></div>
<p>La réponse de 2♦ garde les enchères basses pour que la main forte puisse se décrire. Même avec une main correcte, si vous n’avez pas de belle couleur, dites 2♦ et montrez vos valeurs plus tard.</p>

<h3>La redemande de l’ouvreur</h3>
<ul>
<li><strong>2SA</strong> = 22-24 régulier. C’est la seule redemande que le répondant peut passer, avec une main vraiment nulle. Le répondant utilise les mêmes outils que sur une ouverture de 2SA : 3♣ Stayman, 3♦ et 3♥ Texas, 3SA pour jouer.</li>
<li><strong>3SA</strong> = 25-27 régulier.</li>
<li><strong>Une couleur</strong> = naturelle, au moins cinq cartes, et forcing : le répondant doit reparler. Soutenez avec du soutien ; nommez une belle couleur à vous ; sans rien d’utile, faites l’enchère la plus économique.</li>
</ul>

<h3>L’ouverture de 2SA</h3>
<p>2SA montre <strong>20-21 H, main régulière</strong>. Elle n’est pas forcing, mais le répondant doit demander la manche avec 4 points seulement.</p>
<table>
<thead><tr><th>Réponse à 2SA</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Passe</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Texas cœur / pique</td></tr>
<tr><td>3SA</td><td>4-10, pour jouer</td></tr>
<tr><td>4SA</td><td>11-12, quantitatif : l’ouvreur dit 6SA avec un maximum</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Ouvrez de 2SA : 20 H, main régulière"></div>
<p>En face, un répondant avec ♠J10642 ♥Q85 ♦73 ♣962 fait le Texas par 3♥ et passe sur 3♠ : 23-24 à deux ne suffisent pas pour la manche, mais cinq atouts rendent 3♠ plus sûr que 2SA.</p>

<h3>L’échelle des mains régulières</h3>
<table>
<thead><tr><th>H</th><th>Séquence</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>1 à la couleur, puis 1SA</td></tr>
<tr><td>15-17</td><td>1SA</td></tr>
<tr><td>18-19</td><td>1 à la couleur, puis saut à 2SA</td></tr>
<tr><td>20-21</td><td>2SA</td></tr>
<tr><td>22-24</td><td>2♣, puis 2SA</td></tr>
<tr><td>25-27</td><td>2♣, puis 3SA</td></tr>
</tbody>
</table>
<div class="tip">Face à 2♣, raisonnez en levées et en contrôles, pas seulement en points. Un As ou un Roi vaut bien plus que des Dames et des Valets dispersés.</div>
<div class="warn">N’ouvrez pas de 2♣ simplement parce que vous avez 20 H. Avec 20-21 régulier, ouvrez de 2SA ; avec 19-21 et une main irrégulière ordinaire, ouvrez de 1 à la couleur. Votre partenaire répondra avec 6 points seulement, et vous pourrez sauter ou faire un reverse pour montrer votre force.</div>
`,
    keyPoints: [
      '2♣ = 22+ H ou environ neuf levées de jeu ; artificiel et forcing.',
      'Répondez 2♦ (attente) avec la plupart des mains ; une réponse positive exige une belle couleur cinquième et 8+ H.',
      '2♣ – 2♦ – 2SA = 22-24 régulier et peut être passé ; toute redemande à la couleur de l’ouvreur est forcing.',
      'Ouverture de 2SA = 20-21 régulier ; 3♣ Stayman, 3♦/3♥ Texas, 3SA avec 4-10, 4SA avec 11-12.',
      'Échelle des mains régulières : 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'Vous avez ♠AKQJ975 ♥AK4 ♦8 ♣K2. Quelle est votre ouverture ?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Avec neuf levées de jeu, vous voulez atteindre la manche même si votre partenaire a très peu : ouvrez du 2♣ forcing et nommez les piques ensuite. 1♠ risquerait d’être passé ; 2♠ serait un deux faible.',
      },
      {
        q: 'Votre partenaire ouvre de 2♣. Vous avez ♠Q74 ♥J863 ♦952 ♣K84 (6 H). Que dites-vous ?',
        options: ['Passe', '2♦', '2♥', '2SA'],
        answer: 1,
        explain: '2♣ est forcing : vous ne pouvez pas passer. Sans belle couleur cinquième, dites le 2♦ d’attente et laissez l’ouvreur décrire sa main.',
      },
      {
        q: 'Votre partenaire ouvre de 2♣. Vous avez ♠52 ♥KQJ84 ♦A73 ♣964 (10 H). Que dites-vous ?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 1,
        explain: 'Une belle couleur cinquième (KQJ) avec 8+ H, c’est une réponse positive : 2♥. Elle annonce tout de suite à l’ouvreur que le chelem est probable.',
      },
      {
        q: 'Que montre la séquence 2♣ – 2♦ – 2SA ?',
        options: ['20-21 régulier', '22-24 régulier', '25-27 régulier', 'Une couleur de trèfle'],
        answer: 1,
        explain: 'Avec 20-21, vous ouvrez directement de 2SA. Passer d’abord par 2♣ puis dire 2SA montre 22-24 ; 2♣ puis 3SA montre 25-27.',
      },
      {
        q: 'Votre partenaire ouvre de 2SA. Vous avez une main régulière de 4 H. Que dites-vous ?',
        options: ['Passe', '3SA', '3♣', '4SA'],
        answer: 1,
        explain: '20-21 plus 4 donnent 24-25, assez pour jouer la manche. Sur 2SA, 3SA couvre 4-10 points.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Les deux faibles et les barrages',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Comment ouvrir avec une longue couleur et une main faible pour prendre de l’espace aux adversaires, et comment le partenaire répond.',
    body: `
<h3>Pourquoi barrer ?</h3>
<p>Quand vous avez une longue couleur et pas grand-chose d’autre, les adversaires détiennent probablement l’essentiel de la force. Ouvrir à un palier élevé leur retire l’espace d’enchères dont ils ont besoin pour trouver leur meilleur contrat. En même temps, l’ouverture décrit précisément votre main : votre partenaire sait exactement quoi faire.</p>

<h3>Les conditions</h3>
<table>
<thead><tr><th>Ouverture</th><th>Couleur</th><th>H</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (deux faible)</td><td>Six cartes</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Sept cartes</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Huit cartes (ou sept avec une distribution marquée)</td><td>5-10</td></tr>
</tbody>
</table>
<p>L’essentiel de votre force doit se trouver dans la longue couleur. Un bon repère pour un deux faible : deux des trois gros honneurs ou trois des cinq honneurs.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Ouvrez de 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Ouvrez de 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Ouvrez de 4♠"></div>
<p>2♣ n’est jamais un deux faible : c’est l’ouverture forte et artificielle.</p>

<h3>Jusqu’où ? La règle des 2-3-4</h3>
<p>Comptez vos levées de jeu : celles que vous comptez faire avec votre couleur comme atout si votre partenaire n’a rien d’utile. KQJ9852, c’est environ six levées. Selon un repère classique, vous devez être à :</p>
<ul>
<li><strong>deux levées</strong> de votre contrat, vulnérable contre non vulnérables (vulnérabilité défavorable),</li>
<li><strong>trois levées</strong> à vulnérabilité égale,</li>
<li><strong>quatre levées</strong>, non vulnérable contre vulnérables (vulnérabilité favorable).</li>
</ul>
<p>L’idée est que, même contré, la pénalité ne doit pas dépasser à peu près la valeur de la manche que les adversaires auraient probablement réussie. Avec six levées de jeu, 3♣ (neuf levées) convient à vulnérabilité égale. Les joueurs modernes barrent plus agressivement à vulnérabilité favorable et plus prudemment à vulnérabilité défavorable.</p>

<h3>Quand ne pas barrer</h3>
<ul>
<li>En 4e position, un barrage n’a pas de sens : avec une main faible, passez simplement et la donne est annulée. Une ouverture au palier de 2 ou de 3 en 4e position montre une main correcte qui compte réussir le contrat.</li>
<li>Avec une bonne main (11+ H et une belle couleur), ouvrez plutôt au palier de 1.</li>
<li>En 1re ou 2e position, méfiez-vous avec une majeure quatrième à côté ou avec deux As en dehors de votre couleur : votre partenaire a peut-être une bonne main et vous risquez de rater un meilleur contrat.</li>
</ul>

<h3>Répondre à un deux faible</h3>
<table>
<thead><tr><th>Réponse</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Soutien (2♥ – 3♥)</td><td>Barrage, pas proposition : prolonger le barrage avec trois cartes de soutien</td></tr>
<tr><td>Manche dans la couleur</td><td>Pour jouer : soit pour la gagner, soit pour barrer encore plus</td></tr>
<tr><td>2SA</td><td>Forcing : demande à l’ouvreur de se décrire</td></tr>
<tr><td>Couleur nouvelle</td><td>Naturelle, cinq cartes ou plus, forcing</td></tr>
<tr><td>3SA</td><td>Pour jouer</td></tr>
</tbody>
</table>
<p><strong>Réponses de l’ouvreur à 2SA :</strong> avec un minimum (environ 5-7), redemandez 3 dans votre couleur ; avec un maximum (environ 8-10), nommez une couleur où vous avez un As ou un Roi extérieur ; avec une couleur solide (AKQxxx), dites 3SA.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Nord ouvre de 2♠ ; Sud interroge par 2SA."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Nord a 8 H, un maximum, et montre le ♥K. Sud, avec 17 H, sait maintenant que les piques vont se dérouler avec l’♠A et que les cœurs sont bien tenus : il demande la manche. Si Nord avait montré un minimum en redemandant 3♠, Sud aurait passé.</p>

<h3>Répondre à un barrage au palier de 3</h3>
<p>Comptez les levées, pas les points. La couleur du partenaire fournira environ six levées ; pour la manche, il en faut trois ou quatre de votre part, en général des As et des Rois. Avec du soutien et une main faible, soutenez pour barrer encore plus haut. Souvenez-vous que votre partenaire a peu de défense : ne contrez pas les adversaires pour punir en comptant sur son barrage.</p>
<div class="tip">Face au barrage du partenaire, vos As et vos Rois valent de l’or, et vos Dames et vos Valets presque rien, sauf s’ils sont dans sa couleur.</div>
<div class="warn">Le soutien d’un deux faible n’est pas un essai de manche. Si vous avez une bonne main et voulez en savoir plus, dites 2SA.</div>
`,
    keyPoints: [
      'Deux faible : six cartes, 5-10 H, l’essentiel de la force dans la couleur ; 2♣ n’est jamais faible.',
      'Barrage au palier de 3 : sept cartes, 5-10 ; quatre en majeure : huit cartes (ou sept avec de la distribution).',
      'Règle des 2-3-4 : deux levées de marge à vulnérabilité défavorable, trois à vulnérabilité égale, quatre à vulnérabilité favorable.',
      'Ne barrez pas en 4e position.',
      'Les soutiens de barrage sont des barrages ; 2SA sur un deux faible demande un honneur extérieur (minimum : répéter la couleur).',
    ],
    quiz: [
      {
        q: 'En 1re position, à vulnérabilité égale, vous avez ♠84 ♥KQ10973 ♦J52 ♣63. Quelle est votre ouverture ?',
        options: ['Passe', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Six beaux cœurs et 6 H : c’est le deux faible type. Avec sept cœurs, vous envisageriez 3♥ ; avec 12+ H, vous ouvririez de 1♥.',
      },
      {
        q: 'Votre partenaire ouvre de 2♠ et le joueur suivant passe. Vous avez ♠Q73 ♥K842 ♦A65 ♣J94 (10 H). Que dites-vous ?',
        options: ['Passe', '3♠', '2SA', '4♠'],
        answer: 1,
        explain: 'La manche est peu probable face à 5-10, mais avec trois cartes de soutien votre camp a neuf atouts, et les adversaires ont un fit quelque part. Soutenez à 3♠ pour leur compliquer l’entrée dans les enchères.',
      },
      {
        q: 'Vous avez ouvert de 2♥ avec ♠K5 ♥AQ10984 ♦862 ♣73 (9 H). Votre partenaire dit 2SA. Quelle est votre redemande ?',
        options: ['3♥', '3♠', '3SA', '4♥'],
        answer: 1,
        explain: '9 H, c’est un maximum : montrez votre honneur extérieur, le ♠K, par 3♠. 3♥ montrerait un minimum et 3SA une couleur solide.',
      },
      {
        q: 'Selon la règle des 2-3-4, à combien de levées de votre contrat pouvez-vous être à vulnérabilité favorable ?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'À vulnérabilité favorable, quatre de chute contré coûtent 800, guère plus que les 620 de leur manche vulnérable, et des adversaires qui cherchent eux aussi une manche ou un chelem oublient souvent de vous contrer.',
      },
      {
        q: 'Votre partenaire ouvre de 2♥. Que montre votre soutien à 3♥ ?',
        options: ['Une proposition de manche', 'Un soutien de barrage, pas une proposition', 'Un soutien forcing', 'Une main sans cœur'],
        answer: 1,
        explain: 'Soutenir un barrage prolonge le barrage. Si vous voulez que l’ouvreur décrive sa main, dites 2SA, l’enchère interrogative forcing.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Les interventions',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quand intervenir après une ouverture adverse, ce que montrent les différentes interventions, et comment le partenaire y répond.',
    body: `
<h3>Pourquoi intervenir ?</h3>
<p>Après une ouverture adverse, nommer une couleur (une <strong>intervention</strong>) remplit trois rôles : disputer la partielle, prendre de l’espace aux adversaires, et indiquer à votre partenaire quoi entamer s’ils remportent les enchères. À cause de ce dernier rôle, <strong>la qualité de la couleur compte davantage que les points</strong>.</p>

<h3>Ce que montrent les interventions</h3>
<table>
<thead><tr><th>Intervention</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>Couleur au palier de 1 (1♦ – 1♠)</td><td>8-16 H, une belle couleur cinquième ou plus</td></tr>
<tr><td>Couleur au palier de 2 (1♠ – 2♦)</td><td>10-16 H, une belle couleur cinquième (le plus souvent sixième)</td></tr>
<tr><td>Intervention à saut faible (1♣ – 2♠)</td><td>Une couleur sixième, 6-10 H, comme un deux faible</td></tr>
<tr><td>1SA</td><td>15-18 H, main régulière, avec un arrêt dans la couleur d’ouverture</td></tr>
</tbody>
</table>
<p>Avec 17+ et une main trop forte pour une simple intervention, commencez par un contre d’appel et nommez votre couleur ensuite.</p>

<h3>Exemples (votre adversaire de droite a ouvert)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="1♦ à votre droite : dites 1♠"></div>
<p>10 H avec une couleur solide que vous aimeriez voir entamer par votre partenaire.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="1♠ à votre droite : dites 2♦"></div>
<p>12 H et une belle couleur sixième : assez solide pour le palier de 2.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="1♣ à votre droite : dites 1SA"></div>
<p>17 H, main régulière, avec les trèfles bien arrêtés.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="1♥ à votre droite : passez"></div>
<p>11 H, mais les piques sont pauvres et les valeurs dispersées. Une intervention demanderait l’entame à pique et pourrait être contrée pour une grosse pénalité. Passez.</p>

<h3>Vulnérabilité et palier</h3>
<p>Le risque d’une intervention, c’est le contre punitif. Au palier de 1, ce risque est faible ; au palier de 2, surtout vulnérable, il vous faut une belle couleur qui fera des levées même si le reste de la main du partenaire est pauvre. Une intervention au palier de 2 avec une couleur cinquième doit ressembler à une ouverture avec une couleur solide.</p>

<h3>Répondre à l’intervention du partenaire</h3>
<table>
<thead><tr><th>Enchère du partenaire de l’intervenant</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Soutien simple</td><td>6-9 avec trois atouts ou plus</td></tr>
<tr><td>Cue-bid dans la couleur d’ouverture</td><td>Un soutien limite ou mieux : 10+ avec trois atouts ou plus</td></tr>
<tr><td>Soutien à saut</td><td>Barrage : main faible avec quatre atouts ou plus</td></tr>
<tr><td>Couleur nouvelle</td><td>Naturelle, une belle couleur cinquième ou plus, non forcing</td></tr>
<tr><td>1SA</td><td>Environ 8-11 avec un arrêt dans la couleur d’ouverture</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Vous êtes Sud : dites 2♠"></div>
<p>8 H et trois cartes de soutien : soutenez à 2♠. Soutenir tout de suite votre partenaire complique la tâche des adversaires pour trouver leur meilleur contrat.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Vous êtes Sud : dites 2♥"></div>
<p>12 H et quatre atouts. Le cue-bid à 2♥ montre un soutien limite ou mieux ; votre partenaire dit 2♠ avec une intervention minimum, et vous proposerez par 3♠, ou demanderez la manche s’il montre davantage.</p>
<div class="tip">N’oubliez pas que la zone de l’intervention est large (8-16). Ne sautez pas à la manche face à une intervention simplement parce que vous avez une main d’ouverture : faites d’abord un cue-bid et laissez votre partenaire se décrire.</div>
<div class="warn">Une intervention n’est pas une ouverture. N’intervenez pas dans une couleur faible simplement parce que vous avez 12 points ; et ne renoncez pas à intervenir avec une couleur solide simplement parce que vous n’avez que 9 points.</div>
`,
    keyPoints: [
      'Intervention au palier de 1 : 8-16 H, belle couleur de 5+ cartes. Au palier de 2 : 10-16, belle couleur de 5+ (le plus souvent 6).',
      'Intervention à saut faible : couleur sixième, 6-10 ; intervention à 1SA : 15-18 régulier avec un arrêt.',
      'La qualité de la couleur compte plus que les points, car l’intervention indique aussi l’entame.',
      'Partenaire de l’intervenant : soutien simple 6-9 avec 3+ atouts ; cue-bid = soutien limite ou mieux ; le soutien à saut est un barrage.',
      'Avec 17+, trop fort pour intervenir, contrez d’abord et nommez votre couleur ensuite.',
    ],
    quiz: [
      {
        q: 'Votre adversaire de droite ouvre de 1♦. Vous avez ♠KQJ74 ♥83 ♦952 ♣A63. Que dites-vous ?',
        options: ['Passe', '1♠', '2♠', 'Contre'],
        answer: 1,
        explain: 'Une belle couleur cinquième avec 10 H, c’est une intervention saine au palier de 1. 2♠ serait une intervention à saut faible, et un contre suggérerait du soutien à cœur et à trèfle.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1♥. Vous avez ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 H). Que dites-vous ?',
        options: ['1♠', 'Passe', '1SA', 'Contre'],
        answer: 1,
        explain: 'La couleur de pique est trop faible pour demander l’entame, la main n’est pas un sans-atout de 15-18, et vous n’avez pas la distribution d’un contre. Passez.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1♣. Vous avez ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 H). Que dites-vous ?',
        options: ['1♦', '1SA', 'Contre', '2SA'],
        answer: 1,
        explain: 'Main régulière, 15-18, avec un arrêt à trèfle : 1SA décrit la main en une seule enchère. Votre partenaire peut employer les mêmes réponses que sur une ouverture de 1SA.',
      },
      {
        q: 'Votre adversaire de gauche a ouvert de 1♥ et votre partenaire est intervenu à 1♠. Vous avez ♠K962 ♥83 ♦AQ74 ♣K105 (12 H). Que dites-vous ?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Avec 10+ et du soutien, faites un cue-bid dans la couleur adverse pour montrer un soutien limite ou mieux. 3♠ serait un barrage, et 4♠ pourrait être trop haut face à une intervention minimum.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1♣. Vous avez ♠KJ10984 ♥73 ♦Q52 ♣43 (6 H). Que dites-vous ?',
        options: ['Passe', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Six beaux piques et 6-10 H : c’est une intervention à saut faible. Elle enlève aux adversaires leurs enchères au palier de 1 et suggère l’entame à pique.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'Le contre d’appel',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Comment utiliser le contre pour demander au partenaire de choisir une couleur, et comment répondent le partenaire et le camp de l’ouvreur.',
    body: `
<h3>Ce que dit le contre d’appel</h3>
<p>Le contre d’une ouverture à la couleur à bas palier n’est pas punitif : il demande au partenaire de parler. Il montre <strong>12+ H, une courte dans la couleur d’ouverture et du soutien (idéalement quatre cartes) dans les couleurs non nommées</strong>, surtout dans la majeure non nommée. L’autre possibilité est une main forte, 17+, de n’importe quelle distribution, qui reparlera pour montrer ce qu’elle a vraiment.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="1♦ à votre droite : contrez"></div>
<p>13 H, un singleton carreau et quatre cartes dans chacune des autres couleurs : la distribution idéale.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="1♦ à votre droite : passez"></div>
<p>14 H, mais quatre carreaux et seulement trois cartes dans chaque majeure. Si vous contrez, votre partenaire nommera cœur ou pique avec quatre cartes, et vous jouerez un fit 4-3 avec la mauvaise main. Passez.</p>

<h3>Répondre au contre d’appel</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>Ouest a ouvert de 1♥, votre partenaire a contré, Est a passé. Vous devez parler, même très faible : passer transformerait le contre en contre punitif de 1♥. Préférez une majeure, et montrez votre force par le palier :</p>
<table>
<thead><tr><th>Points du répondant</th><th>Action</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Nommez votre meilleure couleur au palier le plus bas</td></tr>
<tr><td>9-11</td><td>Sautez dans votre meilleure couleur (proposition)</td></tr>
<tr><td>12+</td><td>Cue-bid dans la couleur d’ouverture (forcing), ou demandez la manche</td></tr>
<tr><td>6-10, main régulière</td><td>1SA, avec un arrêt dans la couleur d’ouverture</td></tr>
<tr><td>Passe</td><td>Seulement avec des atouts longs et solides dans la couleur d’ouverture (pour punir)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – contre – passe : dites 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – contre – passe : dites 2♠"></div>
<p>Avec 3 H, dites 1♠ sans crainte : votre partenaire sait que vous pouvez n’avoir rien. Avec 10 H, sautez à 2♠ pour proposer la manche. Avec ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 H), dites vous-même 4♠, ou faites un cue-bid à 2♥ si vous ne savez pas quelle manche est la meilleure.</p>
<p>Si le partenaire de l’ouvreur parle (1♥ – contre – 2♥), vous n’êtes plus obligé de parler. Une enchère montre alors quelques valeurs, environ 6+, et un passe montre une main faible.</p>

<h3>La redemande du contreur</h3>
<p>La réponse au palier le plus bas peut être faite avec rien : le contreur ne doit donc pas reparler avec un minimum. Avec 12-15, passez ; avec environ 16-18, soutenez d’un palier ; avec 19+, sautez. Si le contreur nomme une couleur nouvelle, il montre le contre fort (17+) avec une longue couleur personnelle.</p>

<h3>Le camp de l’ouvreur : le surcontre</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Quand l’ouverture de votre partenaire est contrée, un <strong>surcontre</strong> montre 10+ H. Il indique à l’ouvreur que votre camp a la majorité des points, et il signifie en général que vous cherchez une occasion de contrer les adversaires pour punir. Avec un fit et une main plus faible, soutenez plutôt votre partenaire ; avec une couleur nouvelle et moins de 10, nommez-la.</p>

<h3>Le contre des barrages</h3>
<p>Le contre d’un deux faible ou d’un barrage au palier de 3 est aussi d’appel : valeurs d’ouverture, courte dans leur couleur, et prêt pour n’importe quelle couleur que nommera le partenaire. Celui-ci devra peut-être parler au palier de 3 avec une main faible : le contreur doit donc être solide, pas léger.</p>
<div class="tip">Le contre d’appel idéal est court dans la couleur adverse et a quatre cartes dans chaque majeure non nommée. Plus vous êtes court dans leur couleur, plus vous pouvez contrer léger.</div>
<div class="warn">Ne contrez pas avec une longue couleur personnelle et une main moyenne : intervenez plutôt. Un contre d’appel suivi de votre propre couleur montre 17+ H.</div>
`,
    keyPoints: [
      'Contre d’appel : 12+ H, court dans leur couleur, soutien dans les couleurs non nommées ; ou 17+ de n’importe quelle distribution qui reparlera.',
      'Le partenaire doit parler : 0-8 au plus bas, 9-11 à saut, 12+ cue-bid ou manche ; 1SA = 6-10 avec un arrêt.',
      'Ne passez sur le contre qu’avec des atouts longs et solides dans leur couleur.',
      'Le contreur passe sur une réponse minimum avec 12-15 ; soutient avec 16-18 ; saute avec 19+.',
      'Le surcontre après un contre d’appel montre 10+ H.',
    ],
    quiz: [
      {
        q: 'Votre adversaire de droite ouvre de 1♣. Vous avez ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 H). Que dites-vous ?',
        options: ['1♦', 'Contre', '1♠', 'Passe'],
        answer: 1,
        explain: 'Une courte à trèfle et quatre cartes dans chacune des autres couleurs : le contre d’appel idéal. Quelle que soit la couleur choisie par votre partenaire, vous avez du soutien.',
      },
      {
        q: '1♥ – contre – passe – ? Vous avez ♠Q8642 ♥753 ♦J4 ♣982 (3 H).',
        options: ['Passe', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Vous devez parler : passer laisserait jouer 1♥ contré, et les adversaires le gagneraient probablement avec des levées de mieux. Nommez votre meilleure couleur au palier le plus bas.',
      },
      {
        q: '1♥ – contre – passe – ? Vous avez ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 H).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 points : sautez dans votre meilleure couleur pour proposer la manche. 1♠ pourrait être dit avec rien et sous-évaluerait cette main.',
      },
      {
        q: '1♠ – contre – passe – ? Vous avez ♠K104 ♥82 ♦Q963 ♣J752 (6 H).',
        options: ['2♣', '2♦', '1SA', 'Passe'],
        answer: 2,
        explain: '1SA montre 6-10 avec un arrêt à pique, et vous permet de rester au palier de 1. Nommer une mineure au palier de 2 est possible, mais 1SA décrit le mieux cette main régulière.',
      },
      {
        q: 'Votre partenaire ouvre de 1♥ et votre adversaire de droite contre. Que montre votre surcontre ?',
        options: ['Un contre punitif de 1♥', '10+ H', 'Du soutien à cœur', 'Une main faible'],
        answer: 1,
        explain: 'Le surcontre montre 10+ H et dit que la donne appartient à votre camp. Avec du soutien et moins de points, vous soutiendriez plutôt.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'Le laisser-passer et les communications',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Comment couper les communications des défenseurs en retenant votre arrêt, et comment gérer vos propres remontées.',
    body: `
<h3>Le laisser-passer</h3>
<p>Contre sans-atout, les défenseurs attaquent en général leur longue couleur. Si vous prenez le premier tour avec votre seul arrêt et rendez ensuite la main au partenaire de l’entameur, celui-ci peut rejouer la couleur et les longues se déroulent. <strong>Laisser passer</strong> (le hold-up), c’est refuser de prendre le premier tour (ou les premiers tours) de leur couleur, pour que le défenseur susceptible de reprendre la main n’ait plus de carte de cette couleur à rejouer.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3SA joué par Sud. Ouest entame du ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Comptez :</strong> ♠A, ♥AK, ♣AKQ : six levées sûres. Les carreaux en fournissent quatre de plus une fois l’♦A chassé. Vous devez rendre la main une fois.</p>
<p><strong>Danger :</strong> les piques d’Ouest. Si vous prenez le premier pique et qu’Est prend l’♦A, Est rejoue pique et Ouest fait quatre levées à pique : une de chute.</p>
<p><strong>Le laisser-passer :</strong> fournissez petit sur le ♠K. Ouest continue de la ♠Q et vous prenez de l’As. Est a fourni deux fois et n’a plus de pique. Chassez maintenant l’♦A. Avec cette répartition, Est le prend, n’a plus de pique à rejouer, et vous faites dix levées. Si Ouest avait l’♦A, vous chuteriez, mais il n’existait alors aucun moyen de gagner : le laisser-passer est une chance supplémentaire gratuite.</p>

<h4>Combien de fois laisser passer : la règle des 7</h4>
<p>Retranchez de sept le nombre de cartes que vous avez, avec le mort, dans la couleur. Le résultat indique combien de fois laisser passer. Ici, vous avez six piques à vous deux : 7 − 6 = 1, laissez passer une fois et prenez au deuxième tour. Cela suppose une répartition 5-2 ; surveillez les cartes qui tombent et ajustez.</p>

<h4>Quand ne pas laisser passer</h4>
<ul>
<li>Quand le défenseur qui peut reprendre la main n’a de toute façon plus de cartes dans la couleur, ou que la couleur ne peut pas être déroulée.</li>
<li>Quand laisser passer permet aux défenseurs de contre-attaquer dans une couleur encore plus dangereuse.</li>
<li>Quand vous avez deux arrêts et que le défenseur dangereux ne peut pas reprendre la main deux fois. Avec A K x, vous pouvez souvent prendre la première levée et garder un arrêt quand ils reprendront la main.</li>
</ul>
<div class="tip">Le coup de Bath : avec A J x en main, quand Ouest entame du Roi, fournissez petit. Si Ouest continue la couleur, votre A J font deux levées ; s’il contre-attaque, votre A J tiennent toujours la couleur : Ouest ne peut plus la rejouer sans vous donner une levée.</div>

<h3>Gérer les remontées</h3>
<p>Une remontée est une carte qui vous permet de faire une levée dans une main donnée. Beaucoup de contrats chutent non par manque de levées, mais faute de moyen de les atteindre.</p>
<ul>
<li><strong>Comptez les remontées avant la première levée.</strong> Décidez quelle main devra avoir la main plus tard, et prenez la première levée en conséquence.</li>
<li><strong>Débloquez :</strong> jouez d’abord les honneurs de la main courte. Avec ♦Q3 en main et ♦AKJ105 au mort (sans autre remontée au mort), encaissez d’abord la Q, puis jouez le 3 vers le mort.</li>
<li><strong>Laissez passer</strong> le tour que vous devez perdre tant que la main longue a encore ses gros honneurs (voir la leçon « L’affranchissement des longues »).</li>
<li><strong>Surprenez</strong> pour changer de main : avec la ♥Q sèche en main face à ♥AKJ104 et sans autre remontée au mort, surprenez la Q avec le K et déroulez la couleur.</li>
<li><strong>Gardez la remontée tardive :</strong> quand une couleur doit être affranchie au mort, utilisez d’abord les remontées de votre main et réservez celles du mort pour la fin.</li>
</ul>
<div class="warn">Ne prenez pas une levée dans la mauvaise main « parce que ça n’a pas d’importance ». Tant que vous n’avez pas déterminé dans quelle main vous devrez être plus tard, il est trop tôt pour jouer à la levée.</div>
`,
    keyPoints: [
      'Retenez votre arrêt pour que le défenseur qui peut reprendre la main n’ait plus de carte de leur couleur.',
      'Règle des 7 : laissez passer 7 moins le nombre de cartes de la couleur à vous deux (un repère, en supposant une répartition 5-2).',
      'Ne laissez pas passer quand une contre-attaque est plus dangereuse ou que vous avez assez d’arrêts.',
      'Débloquez en jouant d’abord les honneurs de la main courte ; surprenez pour changer de main.',
      'Prévoyez vos remontées avant la première levée et prenez-la dans la bonne main.',
    ],
    quiz: [
      {
        q: 'Avec le mort, vous avez six cartes dans la couleur entamée par les défenseurs contre 3SA, avec l’As pour seul arrêt. Combien de fois devez-vous laisser passer ?',
        options: ['Jamais', 'Une fois', 'Deux fois', 'Trois fois'],
        answer: 1,
        explain: 'Règle des 7 : 7 − 6 = 1. Si la couleur est répartie 5-2, prendre au deuxième tour laisse le partenaire du joueur long sans carte à rejouer.',
      },
      {
        q: 'Quel est le but du laisser-passer ?',
        options: ['Faire une levée de mieux', 'Épuiser le partenaire du joueur long pour qu’il ne puisse pas rejouer la couleur', 'Savoir qui détient les honneurs manquants', 'Économiser une remontée au mort'],
        answer: 1,
        explain: 'Si le défenseur qui reprend la main n’a plus de carte de la longue couleur, les longues de son partenaire sont coupées et risquent de ne jamais être encaissées.',
      },
      {
        q: 'Dans la donne ci-dessus, pourquoi le laisser-passer n’aide-t-il pas si Ouest a l’♦A ?',
        options: ['Parce qu’Ouest peut alors encaisser les piques restants', 'Parce que les carreaux seraient bloqués', 'Parce qu’Est pourrait couper', 'Il aide aussi dans ce cas'],
        answer: 0,
        explain: 'Le laisser-passer n’épuise qu’Est. Si Ouest, le joueur long à pique, reprend la main avec l’♦A, il encaisse ses piques affranchis. Aucun plan ne peut l’empêcher ; le laisser-passer gagne chaque fois qu’Est a l’♦A.',
      },
      {
        q: 'Vous avez ♦Q3 en main et ♦AKJ105 au mort, qui n’a pas d’autre remontée. Comment jouer les carreaux ?',
        options: ['Jouer d’abord le 3 vers l’As', 'Encaisser d’abord la Q, puis jouer le 3 vers le mort', 'Jouer le Valet du mort', 'Laisser passer le premier tour'],
        answer: 1,
        explain: 'Jouez d’abord l’honneur de la main courte. Après la Q, le 3 vous emmène au mort et vous pouvez y dérouler le reste de la couleur.',
      },
      {
        q: 'Ouest entame du ♣K contre 3SA et vous avez ♣AJ4 en main. Qu’est-ce que le coup de Bath ?',
        options: ['Prendre de l’As tout de suite', 'Fournir petit, pour qu’une continuation à trèfle vienne dans votre A J', 'Jouer le Valet', 'Défausser du mort'],
        answer: 1,
        explain: 'En laissant passer, vous incitez Ouest à continuer la couleur dans votre A J, ce qui vous donne deux levées, et s’il contre-attaque vous tenez toujours la couleur.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'Le maniement des atouts',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Quand tirer les atouts tout de suite, quand attendre, comment utiliser les coupes dans la main courte et comment garder le contrôle de la couleur d’atout.',
    body: `
<h3>Par défaut : tirer les atouts</h3>
<p>Quand vous jouez un contrat à la couleur, les atouts des défenseurs menacent vos levées maîtresses : chaque levée encaissée dans une couleur annexe peut être coupée. Le plan normal consiste donc à <strong>tirer les atouts tôt</strong>, en comptant les atouts adverses au fur et à mesure qu’ils tombent. S’ils ont cinq atouts et fournissent tous les deux à deux tours, il en reste un dehors ; si un défenseur défausse, vous connaissez la répartition exacte.</p>

<h3>Les raisons de retarder la prise des atouts</h3>
<ol>
<li><strong>Vous avez besoin des atouts du mort pour couper.</strong> Couper des perdantes dans la main courte à l’atout crée des levées supplémentaires. Si tirer les atouts épuisait ceux du mort, faites d’abord les coupes (voir la donne à 4♠ de la leçon « Le plan de jeu »).</li>
<li><strong>Vous devez défausser des perdantes rapidement.</strong> Si les défenseurs ont un honneur d’atout et prendront la main quand vous jouerez atout, assurez-vous qu’ils ne pourront pas alors encaisser assez de levées pour vous faire chuter.</li>
<li><strong>Vous avez besoin des atouts comme remontées</strong>, par exemple pour atteindre une longue couleur annexe ou faire des impasses répétées.</li>
<li><strong>Vous prévoyez une double coupe</strong>, en utilisant séparément les atouts des deux mains.</li>
</ol>

<h3>Défausser avant de tirer les atouts</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ joué par Sud. Ouest entame du ♦K."></div>
<p><strong>Comptez les perdantes :</strong> l’♠A, deux carreaux une fois l’♦A chassé dès la première levée, et l’♣A (le troisième tour de trèfle peut être coupé au mort). Quatre perdantes.</p>
<p>Si vous jouez atout maintenant, le défenseur qui prend de l’♠A encaisse deux levées à carreau, et avec l’♣A encore à venir vous chutez. Prenez plutôt de l’♦A et jouez immédiatement l’♥A, le ♥K et la ♥Q, en défaussant un carreau de votre main sur le troisième cœur. Alors seulement, jouez atout. Vous perdez l’♠A, un carreau et l’♣A.</p>
<p>Le risque, c’est que quelqu’un coupe le troisième cœur. Cela n’arrive que si les cœurs sont répartis 5-2 ou pire <em>et</em> que le défenseur au doubleton a un atout pour couper : un risque bien moindre que la chute certaine en tirant d’abord les atouts.</p>
<div class="tip">Demandez-vous : « Quand je rendrai la main à l’atout, combien de levées les défenseurs pourront-ils encaisser ? » Si la réponse est « trop », débarrassez-vous d’abord d’une perdante.</div>

<h3>Couper : la main courte gagne, pas la main longue</h3>
<p>Avec cinq atouts en main et trois au mort, vos cinq atouts feront de toute façon cinq levées. Une coupe dans votre main ne fait qu’en consommer un. Une coupe au mort est une levée de plus, car les petits atouts du mort ne feraient sinon jamais de levée. Prévoyez vos coupes dans la main <strong>courte</strong> à l’atout.</p>
<p>Couper dans la main longue sert à d’autres fins : affranchir une longue couleur du mort en coupant les cartes adverses, ou raccourcir vos atouts en vue d’une mise en main ou d’un coup d’atout.</p>

<h3>La double coupe</h3>
<p>Quand les deux mains ont une couleur courte, vous pouvez couper les perdantes d’une main avec les atouts de l’autre, et ainsi de suite, sans jamais tirer les atouts. Les règles de la double coupe :</p>
<ul>
<li><strong>Encaissez d’abord vos levées maîtresses dans les couleurs annexes.</strong> Sinon, les défenseurs défausseront dans ces couleurs pendant la double coupe et couperont ensuite vos levées maîtresses.</li>
<li>Coupez haut quand une surcoupe est possible, pour que les défenseurs ne fassent pas leurs petits atouts à bon compte.</li>
<li>Comptez : la double coupe doit rapporter exactement les levées dont vous avez besoin.</li>
</ul>

<h3>Garder le contrôle</h3>
<p>Si les défenseurs rejouent sans cesse une couleur que vous devez couper dans la main longue, vous risquez de vous retrouver avec moins d’atouts qu’un défenseur : vous avez perdu le <strong>contrôle des atouts</strong>, et les atouts restants de ce défenseur font des levées pendant que la longue couleur de son partenaire se déroule. Les parades contre ce jeu en force :</p>
<ul>
<li>Défaussez une perdante au lieu de couper (vous perdez une levée que vous deviez perdre de toute façon), pour que le jeu en force suivant arrive quand le mort peut couper.</li>
<li>Tirez tôt les petits atouts adverses, même en laissant dehors leur atout maître, pour que le jeu en force suivant ne vous coûte pas le contrôle.</li>
<li>Préférez un contrat où la main courte à l’atout peut absorber le jeu en force.</li>
</ul>
<div class="warn">Ne gaspillez pas deux de vos atouts pour en tirer un des leurs quand leur dernier atout est maître. C’est de toute façon une levée pour eux ; laissez-les la prendre quand ils le veulent, et servez-vous de vos atouts pour contrôler le jeu.</div>
`,
    keyPoints: [
      'En général, tirez les atouts tôt, en comptant les atouts adverses au fur et à mesure.',
      'Attendez quand vous avez besoin des atouts du mort pour couper, que vous devez défausser des perdantes avant de rendre la main, ou que vous avez besoin de remontées à l’atout.',
      'Les coupes dans la main courte à l’atout rapportent des levées ; celles dans la main longue, en général non.',
      'Avant une double coupe, encaissez vos levées maîtresses dans les couleurs annexes.',
      'Ne dépensez pas deux atouts pour tirer l’atout maître adverse.',
    ],
    quiz: [
      {
        q: 'Quand est-ce une erreur de tirer les atouts immédiatement ?',
        options: ['Jamais : il faut toujours tirer les atouts d’abord', 'Quand vous avez besoin des atouts du mort pour couper vos perdantes', 'Quand les adversaires ont cinq atouts', 'Quand vous avez neuf atouts'],
        answer: 1,
        explain: 'Tirer les atouts consommerait ceux du mort en même temps que ceux des adversaires. Faites d’abord les coupes dans la main courte, puis tirez le reste.',
      },
      {
        q: 'Dans la donne à 4♠ ci-dessus, que doit faire le déclarant après avoir pris de l’♦A ?',
        options: ['Jouer le ♠K', 'Encaisser trois cœurs en défaussant un carreau', 'Jouer trèfle vers la ♣Q', 'Laisser passer un carreau'],
        answer: 1,
        explain: 'Les défenseurs ont l’♠A et deux levées à carreau toutes prêtes. Défaussez d’abord un carreau sur le troisième cœur, et seulement ensuite jouez atout.',
      },
      {
        q: 'Il reste un atout aux adversaires : l’As. Vous avez beaucoup d’atouts et de levées maîtresses. Que faut-il faire en général ?',
        options: ['Jouer atout pour chasser l’As tout de suite', 'Le laisser et jouer vos couleurs annexes ; c’est de toute façon leur levée', 'Couper quelque chose au mort', 'Concéder le reste'],
        answer: 1,
        explain: 'Le tirer vous coûte deux atouts (un de chaque main) pour une levée qu’ils feront de toute façon. Laissez-les couper avec s’ils le veulent ; vos atouts gardent le contrôle.',
      },
      {
        q: 'Vous vous apprêtez à faire une double coupe. Que faut-il faire d’abord ?',
        options: ['Tirer deux tours d’atout', 'Encaisser vos levées maîtresses dans les couleurs annexes', 'Couper avec vos plus petits atouts', 'Concéder une levée'],
        answer: 1,
        explain: 'Pendant une double coupe, les défenseurs défaussent. S’ils défaussent une couleur annexe que vous n’avez pas encaissée, ils pourront ensuite couper vos levées maîtresses.',
      },
      {
        q: 'Vous avez cinq atouts en main et trois au mort. Quelle coupe crée une levée supplémentaire ?',
        options: ['Couper dans votre main', 'Couper au mort', 'Les deux', 'Aucune'],
        answer: 1,
        explain: 'Vos cinq atouts font cinq levées, avec ou sans coupes. Les trois petits atouts du mort ne font des levées qu’en coupant.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'La signalisation en flanc',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Comment les défenseurs utilisent la hauteur des cartes qu’ils fournissent pour montrer appel ou refus, parité et préférence.',
    body: `
<h3>Parler avec ses cartes</h3>
<p>Les défenseurs ne voient pas la main de leur partenaire, mais ils ont le droit de choisir <em>quelle</em> carte jouer. Quand vous ne cherchez pas à prendre la levée, la petite carte que vous fournissez envoie un message. La signalisation standard comporte trois types de signaux ; c’est la situation qui indique au partenaire lequel vous donnez.</p>
<table>
<thead><tr><th>Signal</th><th>Quand</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Appel ou refus</td><td>Le partenaire joue une couleur ; votre première défausse</td><td>Une carte haute appelle, une carte basse refuse</td></tr>
<tr><td>Parité</td><td>Le déclarant joue une couleur annexe (pas de parité à l’atout)</td><td>Grande-petite = nombre pair, petite-grande = impair</td></tr>
<tr><td>Appel préférentiel</td><td>Quand vous jouez une couleur pour faire couper votre partenaire</td><td>Une carte haute demande la plus chère des autres couleurs, une basse la moins chère ; une carte moyenne : pas de préférence</td></tr>
</tbody>
</table>

<h3>Appel ou refus</h3>
<p>Contre 4♥, votre partenaire entame de l’♠A (d’As-Roi) et le mort a ♠8 6 4.</p>
<ul>
<li>Avec ♠Q 9 3, fournissez le 9 : vous aimez les piques, car votre Dame fera le troisième tour.</li>
<li>Avec ♠7 5 2, fournissez le 2 : vous n’avez rien à pique, votre partenaire doit envisager une contre-attaque.</li>
<li>Avec le doubleton ♠9 3, fournissez le 9 puis le 3 : la grande-petite demande à votre partenaire de continuer, et vous couperez le troisième tour.</li>
</ul>
<p>Les défausses fonctionnent de la même façon : la première défausse est un appel ou un refus. Défausser le ♣9 dit « j’aime les trèfles » ; défausser le ♦2 dit « je ne veux pas de carreau ». Ne défaussez que dans une couleur dont vous pouvez vous passer. Si vous n’avez pas de carte de 6 ou plus à sacrifier dans la couleur que vous voulez, défaussez plutôt votre plus petite carte dans une couleur dont vous ne voulez pas.</p>

<h3>La parité</h3>
<p>Quand le déclarant joue une couleur, indiquez combien de cartes vous y avez : grande-petite avec un nombre pair (deux ou quatre), la plus petite d’abord avec un nombre impair (trois). La parité permet au partenaire de reconstituer la distribution du déclarant et, surtout, lui dit quand prendre de son As.</p>
<table>
<thead><tr><th>Position</th><th>Carreaux</th></tr></thead>
<tbody>
<tr><td>Nord (mort, sans remontée extérieure)</td><td>K Q J 10 5</td></tr>
<tr><td>Est (vous)</td><td>A 7 3</td></tr>
<tr><td>Ouest et Sud</td><td>9 8 6 4 2 à eux deux</td></tr>
</tbody>
</table>
<p>Le déclarant joue carreau vers le mort. Vous voulez prendre de l’As au tour où le déclarant joue son <em>dernier</em> carreau, pour le couper du reste de la couleur du mort. Si votre partenaire commence par le 9 (carte haute : nombre pair, ici deux), le déclarant en a trois : laissez passer deux fois et prenez au troisième tour. Si votre partenaire fournit d’abord le 4 (carte basse : impair, ici trois), le déclarant en a deux : prenez au deuxième tour. Sans la parité du partenaire, vous joueriez au hasard.</p>

<h3>L’appel préférentiel</h3>
<p>Parfois, ni l’appel ni la parité n’ont de sens : la hauteur de la carte désigne alors une autre couleur. Le cas classique est la coupe. L’atout est pique et vous jouez cœur pour faire couper votre partenaire. Les autres couleurs sont carreau et trèfle. Jouez un cœur <strong>haut</strong> pour demander un retour à carreau (la plus chère des deux) et un cœur <strong>bas</strong> pour demander trèfle. Si vous avez l’♦A, jouez votre plus haut cœur ; votre partenaire coupe, rejoue carreau vers votre As, et vous lui donnez une deuxième coupe.</p>
<p>Sans préférence, jouez une carte moyenne. Certaines paires utilisent aussi l’appel préférentiel en rejouant la couleur du partenaire ; ici, les robots ne l’utilisent que pour donner une coupe.</p>

<h3>Les bonnes habitudes</h3>
<ul>
<li>Sur l’entame du partenaire, signalez d’abord appel ou refus ; quand le déclarant joue, donnez la parité ; n’utilisez l’appel préférentiel que lorsque la situation est claire.</li>
<li>Ne signalez pas avec une carte qui pourrait faire une levée plus tard. De Q J 10 9 7, le 7 peut suffire à appeler.</li>
<li>Signalez sans changer de rythme : réfléchissez quand le mort s’étale, pas au milieu d’une levée.</li>
<li>Ne donnez pas la parité quand elle ne peut aider que le déclarant, par exemple quand il hésite sur le maniement d’une couleur et que la parité ne servirait à rien à votre partenaire. Ici, les robots donnent toujours la parité quand le déclarant joue une couleur annexe, pour que vous puissiez vous entraîner à la lire.</li>
</ul>
<div class="warn">Un signal est une information, pas un ordre. Votre partenaire le combine avec ce qu’il voit au mort et dans sa propre main, et il peut avoir de bonnes raisons de faire autre chose.</div>
`,
    keyPoints: [
      'Appel ou refus sur l’entame du partenaire et sur votre première défausse : une carte haute appelle, une carte basse refuse.',
      'Parité quand le déclarant joue une couleur annexe : grande-petite montre un nombre pair, petite-grande un nombre impair.',
      'Servez-vous de la parité pour savoir quand prendre de l’As contre une longue couleur du mort sans remontée.',
      'Appel préférentiel : une carte haute demande la plus chère des autres couleurs, une carte basse la moins chère ; une carte moyenne ne montre pas de préférence.',
      'Ne gaspillez jamais une carte qui peut faire une levée simplement pour signaler.',
    ],
    quiz: [
      {
        q: 'Votre partenaire entame de l’♠A (d’As-Roi) contre 4♥. Le mort a ♠8 6 4. Vous avez ♠Q 9 3. Quelle carte fournissez-vous ?',
        options: ['♠Q', '♠9', '♠3', 'Peu importe'],
        answer: 1,
        explain: 'Le 9 appelle. Votre partenaire continue du Roi, et votre Dame fait le troisième tour. Fournir le 3 dirait à votre partenaire que vous n’avez rien à pique.',
      },
      {
        q: 'Le déclarant joue une couleur où vous avez 8 3. Quelle carte fournir d’abord pour donner votre parité ?',
        options: ['Le 8', 'Le 3', 'L’une ou l’autre', 'Aucune : on ne donne jamais la parité'],
        answer: 0,
        explain: 'La grande-petite montre un nombre pair. Fournissez le 8 maintenant et le 3 ensuite ; votre partenaire saura que vous aviez deux cartes (ou quatre).',
      },
      {
        q: 'En signalisation standard, votre première défausse est le ♣2. Que dit-elle ?',
        options: ['J’aime les trèfles', 'Je ne veux pas de trèfle', 'J’ai deux trèfles', 'Jouez carreau'],
        answer: 1,
        explain: 'La première défausse est un appel ou un refus. Une petite carte refuse la couleur défaussée.',
      },
      {
        q: 'Le mort a ♦K Q J 10 5 sans remontée extérieure ; vous avez ♦A 7 3. Le déclarant joue carreau et votre partenaire fournit le 9 puis le 4. Quand devez-vous prendre de l’As ?',
        options: ['Au premier tour', 'Au deuxième tour', 'Au troisième tour', 'Jamais'],
        answer: 2,
        explain: 'La grande-petite de votre partenaire montre un nombre pair, deux : le déclarant avait donc trois cartes. Prenez de l’As au troisième tour, quand le déclarant n’a plus de carreau pour rejoindre le mort.',
      },
      {
        q: 'L’atout est pique. Vous jouez cœur pour faire couper votre partenaire et vous voulez un retour à carreau. Avec ♥9 8 2, quel cœur jouez-vous ?',
        options: ['♥9', '♥8', '♥2', 'Peu importe'],
        answer: 0,
        explain: 'C’est une situation d’appel préférentiel. Une carte haute demande la plus chère des couleurs annexes restantes (carreau plutôt que trèfle).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'Le contre Spoutnik',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Comment le répondant utilise le contre après une intervention pour montrer la majeure non nommée, et comment la transformation et le contre de réveil fonctionnent ensemble.',
    body: `
<h3>Le problème</h3>
<p>Votre partenaire ouvre de 1♦ et votre adversaire de droite intervient à 1♠. Vous avez quatre cœurs et 9 H. 2♥ promettrait cinq cœurs et 10+ points : vous ne pouvez donc pas le dire, mais vous ne voulez pas perdre un éventuel fit à cœur. La réponse est le <strong>contre Spoutnik</strong> (ou contre négatif) : après l’ouverture du partenaire et une intervention jusqu’à 2♠ inclus, le contre du répondant est d’appel et montre la ou les majeures non nommées.</p>

<h3>Ce que montre le contre</h3>
<p>Force : 6+ H quand l’intervention est au palier de 1, 8+ quand elle est au palier de 2. Distribution :</p>
<table>
<thead><tr><th>Séquence</th><th>Le contre du répondant montre</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Les deux majeures (en général quatre cartes dans chacune)</td></tr>
<tr><td>1♣ ou 1♦ – (1♥) – X</td><td>Exactement quatre piques (1♠ en montrerait cinq ou plus)</td></tr>
<tr><td>1♣ ou 1♦ – (1♠) – X</td><td>Quatre cœurs ou plus (2♥ en montrerait cinq et 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>Les mineures, ou des valeurs sans enchère évidente</td></tr>
<tr><td>1♥ – (2♣ ou 2♦) – X</td><td>Quatre piques, 8+ H</td></tr>
<tr><td>1♠ – (2♣ ou 2♦) – X</td><td>Quatre cœurs ou plus, 8+ H</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ? : contrez"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ? : contrez"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ? : contrez"></div>
<p>La première main montre ses quatre cœurs. La deuxième a exactement quatre piques et 7 H : contrez plutôt que de dire 1♠. La troisième montre quatre piques et assez de force pour le palier de 2.</p>

<h3>La redemande de l’ouvreur après un contre Spoutnik</h3>
<ul>
<li>Avec quatre cartes dans la majeure montrée par votre partenaire, nommez-la : au palier le plus bas avec un minimum, ou à saut avec des valeurs supplémentaires (environ 16-18).</li>
<li>Sinon, faites votre redemande normale : répétez une couleur sixième, nommez une deuxième couleur, ou dites sans-atout avec un arrêt dans la couleur de l’intervenant.</li>
<li>Avec une teneur longue et solide dans la couleur de l’intervenant, vous pouvez passer pour transformer le contre en contre punitif.</li>
</ul>

<h3>La transformation et le contre de réveil</h3>
<p>Comme le contre du répondant est d’appel, le répondant ne peut pas contrer pour punir avec une teneur solide dans la couleur de l’intervenant. Il <strong>passe</strong> donc et attend. Quand l’ouvreur est court dans la couleur de l’intervention, il doit réveiller par un contre, que le répondant transforme en passant.</p>
<div class="hand" data-cards="S:K5 H:73 D:AJ84 C:KQ1093" data-label="1♥ – (2♣) – ? : passez"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="L’ouvreur (Nord) : contre de réveil"></div>
<p>Les ♣KQ1093 de Sud sont placés derrière les trèfles d’Est, et 2♣ contré va probablement chuter de plusieurs levées. Nord, avec un singleton trèfle, réveille par un contre, car le passe de son partenaire peut correspondre exactement à ce type de main. Avec de la longueur dans la couleur de l’intervenant, l’ouvreur doit être plus prudent avant de réveiller : son partenaire a alors peu de chances d’attendre pour punir.</p>
<div class="tip">Après une intervention, la couleur nouvelle du répondant reste naturelle et forcing, mais elle montre cinq cartes, puisqu’un contre Spoutnik était disponible pour en montrer quatre.</div>
<div class="warn">Un contre Spoutnik n’est pas un contre punitif. Si vous voulez punir l’intervention, passez et espérez que votre partenaire réveille.</div>
`,
    keyPoints: [
      'Après l’ouverture du partenaire et une intervention de l’adversaire de droite (jusqu’à 2♠), le contre du répondant est d’appel.',
      'Il montre la ou les majeures non nommées : 6+ H au palier de 1, 8+ au palier de 2.',
      '1♣/1♦ – (1♥) – X montre exactement quatre piques ; 1♠ en montrerait cinq.',
      'Avec une longueur solide dans la couleur de l’intervenant, le répondant passe ; l’ouvreur réveille par un contre quand il est court dans cette couleur.',
      'L’ouvreur redemande naturellement, en sautant dans la majeure du partenaire avec des valeurs supplémentaires.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Vous avez ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 H).',
        options: ['2♥', 'Contre', '1SA', 'Passe'],
        answer: 1,
        explain: '2♥ promettrait cinq cœurs et 10+ points. Le contre Spoutnik montre quatre cœurs ou plus avec 6+ et garde le fit à cœur en vue.',
      },
      {
        q: '1♣ – (1♥) – ? Vous avez ♠KJ752 ♥84 ♦Q63 ♣J95 (7 H).',
        options: ['Contre', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Après une intervention à 1♥, le contre montre exactement quatre piques : avec cinq piques, dites 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Vous avez ♠K5 ♥73 ♦AJ84 ♣KQ1093 (13 H).',
        options: ['Contre', 'Passe', '3SA', '2SA'],
        answer: 1,
        explain: 'Vous aimeriez contrer pour punir, mais votre contre serait un Spoutnik. Passez et attendez que votre partenaire réveille par un contre s’il est court à trèfle ; vous passerez alors.',
      },
      {
        q: 'Vous avez ouvert de 1♥ avec ♠A863 ♥AQJ74 ♦K52 ♣6. Votre adversaire de gauche est intervenu à 2♣, suivi de deux passes. Que faites-vous ?',
        options: ['Passe', 'Contre', '2♥', '2♠'],
        answer: 1,
        explain: 'Avec un singleton dans la couleur de l’intervenant, réveillez par un contre. Votre partenaire a peut-être passé avec une forte teneur à trèfle et passera pour punir ; sinon, il nommera sa meilleure couleur.',
      },
      {
        q: 'Jusqu’à quel palier d’intervention le contre du répondant reste-t-il un contre Spoutnik (d’appel) dans ce système ?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Le contre Spoutnik s’applique jusqu’à 2♠. Au-delà, le contre est encore souvent d’appel par accord, mais ce système le définit jusqu’à 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Reconnaître le chelem et le Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Comment savoir si le chelem est possible, et comment utiliser le Blackwood pour vérifier qu’il ne manque pas deux As.',
    body: `
<h3>Pourquoi les chelems comptent</h3>
<p>Un petit chelem rapporte 500 points de plus non vulnérable et 750 vulnérable ; un grand chelem 1000 ou 1500. Demander un chelem réalisable que les autres ratent rapporte gros ; en demander un qui chute coûte à peu près autant. Il vous faut deux choses : assez de <strong>levées</strong> (force, fit et distribution) et assez de <strong>contrôles</strong> (les adversaires ne doivent pas pouvoir encaisser deux levées rapides).</p>

<h3>Les signes du chelem</h3>
<ul>
<li><strong>La force combinée :</strong> environ 33 points pour un petit chelem et 37 pour un grand, avec des mains régulières. Avec un bon fit et de la distribution, il en faut moins.</li>
<li><strong>Le partenaire montre des valeurs supplémentaires</strong> alors que vous avez vous aussi une bonne main : un changement de couleur à saut, un reverse, un 2♣ fort, un soutien à saut face à votre ouverture, un 2SA Jacoby face à une main forte.</li>
<li><strong>Un grand fit</strong> (neuf ou dix atouts) plus une source de levées, comme une longue couleur annexe.</li>
<li><strong>Les contrôles :</strong> As, Rois et courtes dans les couleurs annexes.</li>
</ul>

<h3>Le plan</h3>
<ol>
<li>Fixer l’atout (ou choisir le sans-atout).</li>
<li>Vérifier que la force combinée est suffisante.</li>
<li>Vérifier les contrôles, en général avec le Blackwood.</li>
<li>Demander le chelem, ou s’arrêter au palier de 5.</li>
</ol>

<h3>Le Blackwood</h3>
<p>Une fois l’atout fixé, une enchère de 4SA demande au partenaire combien d’As il a :</p>
<table>
<thead><tr><th>Réponse</th><th>As</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 ou 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>Les enchères permettent toujours de savoir si 5♣ veut dire 0 ou 4. S’il manque deux As, arrêtez-vous à cinq dans votre couleur d’atout ; votre partenaire doit passer. S’il en manque un, demandez le petit chelem. S’il n’en manque aucun et que le grand chelem vous intéresse, dites <strong>5SA</strong> pour demander les Rois : 6♣ = 0 ou 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5SA promet que la paire détient les quatre As.</p>
<p>Celui qui pose la question du Blackwood est le capitaine : le partenaire se contente de répondre, puis accepte la décision.</p>

<h3>Le Blackwood à 5 clés</h3>
<p>La plupart des joueurs utilisent aujourd’hui une version améliorée, le <strong>Blackwood à 5 clés</strong>, et c’est celle que jouent par défaut les robots de cette application. Elle compte cinq <strong>clés</strong>, les quatre As et le Roi d’atout, et renseigne aussi sur la Dame d’atout :</p>
<table>
<thead><tr><th>Réponse</th><th>Clés</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 ou 4</td></tr>
<tr><td>5♦</td><td>0 ou 3</td></tr>
<tr><td>5♥</td><td>2, sans la Dame d’atout</td></tr>
<tr><td>5♠</td><td>2, avec la Dame d’atout</td></tr>
</tbody>
</table>
<p>Les décisions se prennent de la même façon : s’il manque deux clés, arrêtez-vous à cinq ; s’il en manque une, demandez le petit chelem. La leçon « Le Blackwood à 5 clés » le présente en détail, y compris la demande de la Dame d’atout.</p>

<h3>Un exemple</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Nord ouvre de 1♠ avec 18 H. Sud, avec 15 H et quatre piques, dit 2SA, le soutien Jacoby : forcing de manche avec du soutien. Le 3♠ de Nord est la façon standard de montrer des valeurs supplémentaires sans singleton ni chicane. Sud compte maintenant environ 33 points à deux et un fit de neuf cartes : le chelem est probable. 4SA demande les As ; 5♥ en montre deux. Avec l’♥A en main, Sud sait qu’il ne manque qu’un As et dit 6♠.</p>
<p>Avec le Blackwood à 5 clés, comme le jouent les robots, Nord répond 5♦ : trois clés, l’♠A, l’♦A et le ♠K. Sud, qui n’a que l’♥A, sait qu’il s’agit de trois et non de zéro : il manque donc une clé ; Sud a la ♠Q, et l’on atteint 6♠ de la même façon.</p>
<p>Au jeu, l’♣A est la seule perdante : le déclarant tire les atouts, encaisse les cœurs, puis joue l’♦A, carreau vers le Roi et la ♦Q du mort, en défaussant un des trèfles de Nord.</p>

<h3>Les limites du Blackwood</h3>
<p>Le Blackwood compte les As ; il ne dit pas <em>quels</em> As, ni si une couleur annexe comporte deux perdantes rapides. Ne l’employez pas :</p>
<ul>
<li>avec une chicane (l’As du partenaire peut se trouver dans votre chicane, où il est perdu) ;</li>
<li>avec deux petites cartes dans une couleur non nommée (votre partenaire n’a peut-être ni l’As ni le Roi de cette couleur) ;</li>
<li>quand une réponse au palier de 5 risque de vous faire dépasser votre contrat de sécurité, comme c’est souvent le cas avec trèfle comme atout.</li>
</ul>
<p>Dans ces cas, ce sont les cue-bids de contrôle qu’il faut utiliser ; voir la leçon « Contrôles et cue-bids : quand ne pas utiliser le Blackwood ».</p>
<div class="warn">4SA n’est pas toujours un Blackwood. Quand aucune couleur n’a été fixée et que la dernière enchère du partenaire était un sans-atout naturel (1SA – 4SA, 2SA – 4SA), 4SA est quantitatif : il propose 6SA. Pour demander les As sur le sans-atout du partenaire, utilisez le Gerber 4♣.</div>
`,
    keyPoints: [
      'Le petit chelem demande environ 33 points à deux (le grand environ 37) ; le fit et la distribution peuvent abaisser ce seuil.',
      'Fixez d’abord l’atout et la force, puis vérifiez les contrôles.',
      'Réponses au Blackwood simple : 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3 ; 5SA demande ensuite les Rois. Les robots jouent le Blackwood à 5 clés : 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 et la Dame d’atout.',
      'Il manque deux As : arrêtez-vous à cinq dans la couleur fixée.',
      'N’employez pas le Blackwood avec une chicane, ni avec deux perdantes rapides dans une couleur non nommée.',
    ],
    quiz: [
      {
        q: 'Votre partenaire dit 4SA (Blackwood simple) et vous avez un As. Que répondez-vous ?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ montre 0 ou 4, 5♦ un, 5♥ deux, 5♠ trois.',
      },
      {
        q: 'Vous dites 4SA et votre partenaire répond 5♥ (deux As). Vous avez les deux autres As. Et maintenant ?',
        options: ['S’arrêter à cinq dans la couleur d’atout', 'Demander le petit chelem, ou 5SA pour les Rois si le grand chelem est possible', 'Passer sur 5♥', 'Dire 6SA quelle que soit la couleur'],
        answer: 1,
        explain: 'Il ne manque aucun As : le petit chelem ne risque pas deux As de chute. Si les mains peuvent produire treize levées, 5SA demande les Rois et annonce au partenaire que tous les As sont là.',
      },
      {
        q: 'L’atout pique est fixé. Vous dites 4SA et votre partenaire répond 5♦ (un As). Vous avez un As. Que faites-vous ?',
        options: ['Je dis 6♠', 'Je dis 5♠', 'Je dis 5SA', 'Passe'],
        answer: 1,
        explain: 'Il manque deux As : les adversaires pourraient encaisser deux levées tout de suite. Arrêtez-vous à 5♠ ; votre partenaire doit passer.',
      },
      {
        q: 'Deux mains régulières totalisent 33 H, sans fit. Quel contrat ?',
        options: ['3SA', '4SA', '6SA', '7SA'],
        answer: 2,
        explain: 'Environ 33 H à deux donnent de bonnes chances de faire douze levées à sans-atout. Il en faudrait 37 pour un grand chelem.',
      },
      {
        q: 'Votre partenaire répond 5♣ à votre 4SA (Blackwood simple). Que montre-t-il ?',
        options: ['Des trèfles', 'Aucun As ou les quatre', 'Un As', 'Trois As'],
        answer: 1,
        explain: '5♣ montre 0 ou 4 As. Les enchères ou votre propre main lèveront le doute : si vous avez vous-même un As, votre partenaire ne peut pas en avoir quatre.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Le Gerber et le 4SA quantitatif',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Comment explorer le chelem après une ouverture à sans-atout : demander les As avec le Gerber et proposer avec un 4SA quantitatif.',
    body: `
<h3>Le chelem après une ouverture à sans-atout</h3>
<p>Quand votre partenaire ouvre de 1SA (15-17) ou de 2SA (20-21), vous connaissez sa force à deux ou trois points près : vous pouvez souvent additionner les points et décider seul. Deux outils vous aident :</p>
<ul>
<li><strong>4SA quantitatif :</strong> « partenaire, dis 6SA si tu es dans le haut de ta zone ».</li>
<li><strong>4♣ Gerber :</strong> « partenaire, combien as-tu d’As ? »</li>
</ul>

<h3>Le 4SA quantitatif</h3>
<p>Le soutien direct de 1SA à 4SA n’est pas un Blackwood. Il montre 16-17 points : le total est donc de 31-34, à la limite des 33 nécessaires pour le chelem. L’ouvreur passe avec un minimum (15) et dit 6SA avec un maximum (17) ; avec 16, il juge, en acceptant avec une belle couleur cinquième ou de bonnes cartes intermédiaires.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Le partenaire a ouvert de 1SA : dites 4SA"></div>
<p>16 H, main régulière. Dites 4SA. Avec 18-19, vous diriez directement 6SA, puisque même un ouvreur minimum donne 33.</p>
<p>Sur 2SA (20-21), 4SA montre 11-12 et demande à l’ouvreur de dire 6SA avec un maximum.</p>
<table>
<thead><tr><th>Répondant après</th><th>3SA</th><th>4SA (proposition)</th><th>6SA</th></tr></thead>
<tbody>
<tr><td>1SA (15-17)</td><td>10-15</td><td>16-17</td><td>18-19</td></tr>
<tr><td>2SA (20-21)</td><td>4-10</td><td>11-12</td><td>13-14</td></tr>
</tbody>
</table>

<h3>Le Gerber</h3>
<p>Un saut à 4♣ directement sur l’ouverture de 1SA ou de 2SA du partenaire (ou sur 2♣ – 2♦ – 2SA) demande les As :</p>
<table>
<thead><tr><th>Réponse à 4♣</th><th>As</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 ou 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4SA</td><td>3</td></tr>
</tbody>
</table>
<p>Après la réponse, 5♣ de la part de celui qui interroge demande les Rois selon le même schéma (5♦ = 0 ou 4, 5♥ = 1, 5♠ = 2, 5SA = 3). Toute autre enchère fixe le contrat ; un 4SA de celui qui interroge est un arrêt, et si la réponse du partenaire était 4SA, il peut simplement passer.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Le partenaire a ouvert de 1SA : dites 4♣"></div>
<p>16 H (31-33 au total) et six piques solides : la main est riche en levées, mais vous n’avez aucun As. La question porte sur les As : dites 4♣. Sur 4♠ (deux As), passez et jouez 4♠. Sur 4SA (trois As), dites 6♠.</p>
<p>Avec les Texas au palier de 4, il existe un autre chemin : 4♥, Texas pique, puis 4SA, Blackwood à 5 clés, qui compte aussi le Roi et la Dame de pique.</p>

<h3>Lequel utiliser ?</h3>
<ul>
<li>Utilisez le 4SA quantitatif quand la question porte sur la <strong>force</strong> : vous n’êtes pas sûr que les points combinés atteignent 33.</li>
<li>Utilisez le Gerber quand la question porte sur les <strong>As</strong> : avec une main riche en levées (irrégulière), où la force n’est pas le problème. Avec des mains régulières et 33+ H à deux, il ne peut pas manquer deux As : comptez simplement les points.</li>
<li>Avec une longue couleur face à 1SA, faites d’abord un Texas (ou enchérissez naturellement) pour fixer la couleur, puis utilisez les outils de chelem. Compter les levées importe plus que compter les points quand vous avez une longue couleur solide.</li>
</ul>
<div class="tip">Comptez jusqu’à 33 pour un petit chelem à sans-atout et jusqu’à 37 pour un grand. Avec une source de levées, comme une couleur cinquième ou sixième solide, il en faut un peu moins.</div>
<div class="warn">Ne confondez pas 1SA – 4SA (quantitatif) avec le Blackwood. Si vous voulez connaître les As face au sans-atout du partenaire, dites 4♣.</div>
`,
    keyPoints: [
      '1SA – 4SA = 16-17, quantitatif : l’ouvreur dit 6SA avec un maximum.',
      '2SA – 4SA = 11-12, quantitatif.',
      'Gerber 4♣ sur 1SA ou 2SA : 4♦ 0/4, 4♥ 1, 4♠ 2, 4SA 3 ; 5♣ demande ensuite les Rois.',
      'Utilisez le 4SA quantitatif quand la question porte sur la force, le Gerber quand elle porte sur les As.',
      'Les chelems à sans-atout demandent environ 33 points (petit) ou 37 (grand).',
    ],
    quiz: [
      {
        q: 'Votre partenaire ouvre de 1SA et vous dites 4♣ (Gerber). Votre partenaire a un As. Quelle est sa réponse ?',
        options: ['4♦', '4♥', '4♠', '4SA'],
        answer: 1,
        explain: 'Les réponses au Gerber montent par paliers à partir de 4♦ : 4♦ = 0 ou 4, 4♥ = 1, 4♠ = 2, 4SA = 3.',
      },
      {
        q: 'Que signifie 1SA – 4SA ?',
        options: ['Blackwood', 'Une proposition quantitative de 6SA avec 16-17', 'Un arrêt', 'Gerber'],
        answer: 1,
        explain: 'Aucune couleur n’a été fixée et le partenaire a dit sans-atout naturellement : 4SA propose le chelem. L’ouvreur dit 6SA avec un maximum et passe avec un minimum.',
      },
      {
        q: 'Vous avez ouvert de 1SA avec 17 H. Votre partenaire soutient à 4SA. Que faites-vous ?',
        options: ['Passe', 'Je dis 5♥ pour montrer deux As', 'Je dis 6SA', 'Je dis 5SA'],
        answer: 2,
        explain: '17, c’est le haut de la zone : 17 + 16-17 = 33-34. Acceptez la proposition par 6SA.',
      },
      {
        q: 'Votre partenaire ouvre de 2SA. Vous avez une main régulière de 12 H. Que dites-vous ?',
        options: ['3SA', '4SA', '6SA', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Proposez par 4SA (11-12) ; votre partenaire dira 6SA avec 21.',
      },
      {
        q: '1SA – 4♣ – 4♠ (deux As). Vous n’avez aucun As. Que dites-vous ?',
        options: ['6SA', '4SA', '5♣', '7SA'],
        answer: 1,
        explain: 'Il manque deux As : le chelem pourrait perdre les deux premières levées. 4SA après la réponse au Gerber est un arrêt.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'La règle des 11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Comment une entame en 4e meilleure permet aux défenseurs comme au déclarant de savoir combien de cartes supérieures détient chaque main.',
    body: `
<h3>La règle</h3>
<p>Quand votre partenaire entame de sa <strong>4e meilleure</strong>, retranchez sa valeur de 11. Le résultat est le nombre de cartes plus hautes que la carte entamée détenues par les <em>trois autres mains</em> : le mort, vous et le déclarant. Comme vous voyez le mort et votre propre main, vous pouvez en déduire combien de cartes supérieures a le déclarant.</p>

<h3>Pourquoi ça marche</h3>
<p>Pour une carte de valeur r, il existe 14 − r cartes plus hautes (l’As compte pour 14). Si l’entame est la 4e meilleure, l’entameur en détient exactement trois. Il en reste donc 14 − r − 3 = 11 − r pour les trois autres mains.</p>

<h3>Un exemple en défense</h3>
<table>
<thead><tr><th>Position</th><th>Carreaux</th></tr></thead>
<tbody>
<tr><td>Nord (mort)</td><td>Q 10 4</td></tr>
<tr><td>Ouest (partenaire, entame du 7)</td><td>A J 9 7 5</td></tr>
<tr><td>Est (vous)</td><td>K 8 2</td></tr>
<tr><td>Sud (déclarant)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Contre 3SA, votre partenaire entame du ♦7. 11 − 7 = 4 cartes plus hautes que le 7 dans les trois autres mains. Le mort en a deux (Q, 10) et vous deux (K, 8). Le déclarant n’en a donc aucune et ne peut pas battre le 7.</p>
<p>Quand le mort fournit petit, vous pouvez fournir le 2 et laisser le 7 de votre partenaire faire la levée. Votre partenaire garde la main et continue la couleur à travers la Q 10 du mort vers votre K 8, et la défense fait toutes les levées à carreau. Si vous mettez le K, la Q 10 du mort fera une levée quand la couleur sera continuée.</p>

<h3>Le déclarant peut aussi s’en servir</h3>
<p>Supposons qu’Ouest entame du ♠7 (4e meilleure) contre votre 3SA. Le mort a ♠A 10 5 et vous avez ♠K 9 3. 11 − 7 = 4 cartes plus hautes en Nord, Est et Sud ; vous les voyez toutes les quatre (A, 10, K, 9). Est n’a donc aucun pique plus haut que le 7. Vous pouvez fournir petit du mort et prendre à bon compte avec le 9, en gardant l’A et le K comme arrêts.</p>

<h3>La plus petite carte montre la longueur</h3>
<p>Si votre partenaire entame du 2 en 4e meilleure, il ne peut pas avoir une cinquième carte plus petite : il a exactement quatre cartes dans la couleur. L’entame du 3 alors que le 2 est visible ailleurs dit la même chose. Cela vous aide à compter la main du déclarant.</p>

<h3>Quand la règle ne s’applique pas</h3>
<p>La règle des 11 ne vaut que pour une vraie entame en 4e meilleure. Elle ne s’applique pas aux entames de séquence (le K de KQJ), aux entames de la plus haute de petites cartes ou d’un doubleton, ni aux entames dans la couleur du partenaire d’un honneur accompagné de petites cartes. Si le calcul donne un résultat impossible (par exemple, si le déclarant devait avoir un nombre négatif de cartes supérieures), l’entame n’était pas une 4e meilleure, et cela aussi vous renseigne.</p>
<div class="tip">Faites la soustraction dès que le mort s’étale, avant de jouer en troisième position. Vous saurez immédiatement s’il faut fournir haut ou si vous pouvez laisser la carte de votre partenaire faire la levée.</div>
<div class="warn">N’appliquez pas la règle mécaniquement contre un contrat à la couleur quand votre partenaire peut entamer d’une couleur courte. Servez-vous-en quand l’entame est clairement une 4e meilleure d’une longueur, ce qui arrive le plus souvent contre sans-atout.</div>
`,
    keyPoints: [
      'Avec une entame en 4e meilleure, 11 moins la valeur de la carte = cartes plus hautes dans les trois autres mains.',
      'Retranchez ce que vous voyez au mort et dans votre main pour savoir combien en a le déclarant.',
      'Le déclarant peut faire le même calcul sur les mains des défenseurs.',
      'Un 2 entamé en 4e meilleure montre exactement quatre cartes.',
      'La règle ne fonctionne qu’avec une vraie 4e meilleure.',
    ],
    quiz: [
      {
        q: 'Votre partenaire entame du 7, 4e meilleure. Combien de cartes plus hautes que le 7 le mort, vous et le déclarant détenez-vous ensemble ?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Il y a sept cartes au-dessus du 7 (8, 9, 10, J, Q, K, A), et votre partenaire en détient trois.',
      },
      {
        q: 'Votre partenaire entame du ♥6 (4e meilleure) contre 3SA. Le mort a ♥K 9 3 et vous avez ♥A 10 4. Combien de cœurs plus hauts que le 6 le déclarant détient-il ?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. Le mort en a deux plus hautes (K, 9) et vous deux (A, 10) : le déclarant en a une.',
      },
      {
        q: 'Votre partenaire entame du ♣2 contre 3SA, en 4e meilleure. Combien de trèfles a-t-il ?',
        options: ['Trois', 'Exactement quatre', 'Cinq ou plus', 'Impossible à dire'],
        answer: 1,
        explain: 'Le 2 est la plus petite carte : il n’y en a aucune en dessous. En 4e meilleure, il montre exactement quatre trèfles.',
      },
      {
        q: 'Vous jouez 3SA. Ouest entame du ♠7 (4e meilleure). Le mort a ♠A 10 5 et vous avez ♠K 9 3. Combien de piques plus hauts que le 7 Est détient-il ?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 cartes plus hautes en Nord, Est et Sud, et vous les voyez toutes les quatre (A, 10, K, 9). Est n’en a aucune : vous pouvez prendre à bon compte avec le 9.',
      },
      {
        q: 'Quand la règle des 11 ne s’applique-t-elle pas ?',
        options: ['Contre sans-atout', 'Quand l’entame n’est pas une 4e meilleure, par exemple une tête de séquence', 'Quand le mort a un honneur', 'Quand vous avez un singleton'],
        answer: 1,
        explain: 'Le calcul repose sur le fait que l’entameur détient exactement trois cartes plus hautes. Les entames de séquence, de la plus haute de petites cartes et autres entames du même genre ne respectent pas cette hypothèse.',
      },
    ],
  },
];
