// Lessons, part 1.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'Como funciona o bridge',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'A distribuição, o leilão, o contrato e o carteio, da primeira voz à última vaza.',
    body: `
<h3>Quatro jogadores, duas duplas</h3>
<p>O bridge é um jogo de duplas. Norte e Sul jogam juntos contra Leste e Oeste, e os parceiros sentam frente a frente. O baralho inteiro, de 52 cartas, é distribuído, de modo que cada jogador recebe 13 cartas. Dentro de cada naipe, as cartas vão do ás (a mais alta), passando por K, Q, J, 10, 9 e assim por diante, até o 2. O objetivo é ganhar <strong>vazas</strong>: uma vaza é formada por uma carta de cada jogador, jogadas em sentido horário.</p>

<h3>Parte 1: o leilão</h3>
<p>Antes de qualquer carta ser jogada, há um leilão. O dador fala primeiro e o leilão segue em sentido horário. Na sua vez, cada jogador pode <strong>passar</strong>, fazer uma <strong>voz</strong> com nível e naipe, <strong>dobrar</strong> uma voz dos adversários ou <strong>redobrar</strong> um dobre dos adversários.</p>
<p>Uma voz tem um nível (de 1 a 7) e uma denominação (um naipe de trunfo ou sem trunfo). O nível é o número de vazas que você promete <em>acima de seis</em>: 1♠ promete 7 vazas com espadas como trunfo e 3ST promete 9 vazas sem naipe de trunfo. As seis primeiras vazas formam a <strong>base</strong>.</p>
<p>As denominações, da mais baixa para a mais alta, são: ♣, ♦, ♥, ♠, ST. Cada voz tem de ser mais alta que a anterior: ou num nível mais alto, ou no mesmo nível numa denominação de categoria superior. Depois de 1♥ você pode marcar 1♠ ou 1ST, mas para falar em paus precisa marcar pelo menos 2♣.</p>
<p>O leilão termina quando uma voz, um dobre ou um redobre é seguido de três passos consecutivos. A última voz é o <strong>contrato</strong>. Se os quatro jogadores passarem logo de início, as cartas são recolhidas e a mão não é jogada.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Norte abre 1♥, Sul apoia para 2♥ e Norte salta para 4♥. Todos passam, então o contrato é 4♥: Norte–Sul precisam fazer pelo menos 10 das 13 vazas com copas como trunfo.</p>

<h3>Níveis de contrato</h3>
<table>
<thead><tr><th>Nível</th><th>Vazas necessárias</th><th>Observações</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>parcial</td></tr>
<tr><td>2</td><td>8</td><td>parcial</td></tr>
<tr><td>3</td><td>9</td><td>3ST é game</td></tr>
<tr><td>4</td><td>10</td><td>4♥ e 4♠ são games</td></tr>
<tr><td>5</td><td>11</td><td>5♣ e 5♦ são games</td></tr>
<tr><td>6</td><td>12</td><td>pequeno slam</td></tr>
<tr><td>7</td><td>13</td><td>grand slam</td></tr>
</tbody>
</table>
<p>Games e slams rendem bônus grandes. Por isso boa parte do leilão gira em torno de uma pergunta: a nossa dupla tem força suficiente para game?</p>

<h3>Quem joga a mão?</h3>
<p>O <strong>declarante</strong> é o jogador da dupla que venceu o leilão que <em>primeiro</em> nomeou a denominação do contrato final. No leilão acima, Norte foi o primeiro a marcar copas, então Norte é o declarante, embora Sul também tenha marcado copas. O parceiro do declarante passa a ser o <strong>morto</strong>.</p>

<h3>Parte 2: o carteio</h3>
<ol>
<li>O jogador à esquerda do declarante faz a <strong>saída</strong>. Com Norte como declarante, quem sai é Leste.</li>
<li>Em seguida o morto expõe as suas 13 cartas na mesa, viradas para cima e separadas por naipe. O declarante joga as cartas das duas mãos; o morto não participa mais do jogo.</li>
<li>O jogo segue em sentido horário. Cada jogador é obrigado a <strong>servir</strong> (jogar uma carta do naipe que abriu a vaza), se puder.</li>
<li>Um jogador sem cartas do naipe jogado (que tem <strong>chicana</strong> nele) pode jogar um trunfo, o que se chama <strong>cortar</strong>, ou jogar qualquer outra carta, o que é um <strong>descarte</strong>.</li>
<li>A vaza é ganha pelo trunfo mais alto jogado nela ou, se ninguém jogou trunfo, pela carta mais alta do naipe que abriu a vaza. Quem ganha uma vaza joga a primeira carta da vaza seguinte.</li>
</ol>
<p>Exemplo: copas são trunfo e Leste sai com o ♠K. Sul joga o ♠4, Oeste o ♠9, e Norte, que não tem espadas, corta com o ♥2. Norte ganha a vaza, porque qualquer trunfo vence qualquer carta de outro naipe. Num contrato em sem trunfo não há trunfos, então a carta mais alta do naipe que abriu a vaza sempre ganha.</p>
<div class="tip">Um descarte nunca ganha uma vaza. Só uma carta do naipe jogado ou um trunfo podem ganhá-la.</div>

<h3>Cumprir ou derrubar o contrato</h3>
<p>Depois de jogadas as 13 vazas, a dupla do declarante marca pontos se fez pelo menos o número de vazas contratado; as vazas além disso são <strong>vazas a mais</strong>. Se o declarante ficar aquém, os defensores marcam uma multa por cada <strong>vaza abaixo</strong>. O dobre aumenta tanto o prêmio por cumprir o contrato quanto a multa por não cumpri-lo.</p>
<div class="warn">Deixar de servir quando podia é uma <strong>renúncia</strong>, punida com a transferência de vazas para a outra dupla. Antes de jogar uma carta de outro naipe, confira de novo se você realmente não tem nenhuma carta do naipe jogado.</div>
`,
    keyPoints: [
      'Quatro jogadores em duas duplas; cada jogador recebe 13 cartas.',
      'Uma voz no nível N promete 6 + N vazas; as denominações, em ordem, são ♣, ♦, ♥, ♠, ST.',
      'O leilão termina depois de três passos consecutivos; a última voz é o contrato.',
      'O declarante é o primeiro jogador da dupla vencedora a nomear a denominação final; o jogador à esquerda do declarante faz a saída.',
      'Você é obrigado a servir se puder; se não puder, pode cortar ou descartar.',
      'Games: 3ST, 4♥, 4♠, 5♣, 5♦. Slams: qualquer contrato no nível 6 ou 7.',
    ],
    quiz: [
      {
        q: 'O contrato final é 3ST. Quantas vazas o declarante precisa fazer?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Some seis (a base) ao nível: 3 + 6 = 9 vazas.',
      },
      {
        q: 'Norte abre 1♠, Leste passa, Sul marca 2♠ e todos passam. Quem é o declarante e quem faz a saída?',
        options: ['Sul declara, Oeste sai', 'Norte declara, Leste sai', 'Norte declara, Oeste sai', 'Sul declara, Leste sai'],
        answer: 1,
        explain: 'Norte foi o primeiro da dupla a marcar espadas, então Norte é o declarante. A saída é feita pelo jogador à esquerda do declarante, que é Leste.',
      },
      {
        q: 'Espadas são trunfo. Joga-se uma copa e você não tem copas. O que você pode fazer?',
        options: ['Você é obrigado a cortar com uma espada', 'Você pode cortar com uma espada ou descartar qualquer carta', 'Você é obrigado a descartar um pau ou um ouro', 'Você é obrigado a jogar a sua carta mais baixa'],
        answer: 1,
        explain: 'Só servir é obrigatório. Quando você não tem o naipe jogado, está livre para cortar ou descartar; cortar costuma ser o certo, mas nunca é obrigatório.',
      },
      {
        q: 'Seu adversário à direita abriu 1♥. Qual destas vozes é válida?',
        options: ['1♦', '1♣', '1ST', '1♥'],
        answer: 2,
        explain: 'Uma voz precisa superar a anterior. No nível de 1, só espadas e sem trunfo estão acima de copas, então 1♠ e 1ST são válidas; paus e ouros teriam de ser marcados no nível de 2.',
      },
      {
        q: 'Qual destes contratos é um game?',
        options: ['3♥', '4♦', '3ST', '2ST'],
        answer: 2,
        explain: 'O game exige 9 vazas em sem trunfo, 10 num naipe rico e 11 num naipe pobre. 3ST é game; 3♥ e 4♦ ficam um nível abaixo, e 2ST fica a uma vaza do game.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Avaliando a sua mão',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Como contar pontos de honra, comprimento e naipes curtos, e como a Regra dos 20, a Regra dos 15, as perdedoras e as vazas rápidas refinam a contagem.',
    body: `
<h3>Pontos de honra</h3>
<p>A medida padrão de força são os <strong>pontos de honra</strong> (PH): ás 4, rei 3, dama 2, valete 1. O baralho tem 40 PH, então a mão média tem 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 PH"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 PH. A mão é balanceada, então abre 1ST (15-17).</p>
<p>Metas úteis para o total somado da dupla: cerca de 25 para game em 3ST ou num naipe rico, 29 para game num naipe pobre, 33 para pequeno slam e 37 para grand slam. Os pontos são um guia, não uma garantia: a distribuição, o fit e a posição das honras também contam.</p>

<h3>Pontos de comprimento: valorizando os seus naipes</h3>
<p>Naipes longos produzem vazas extras depois que as cartas altas saem. Ao avaliar a mão para abrir ou remarcar, some 1 ponto por cada carta além da quarta em qualquer naipe: um naipe de 5 cartas soma 1, um de 6 cartas soma 2.</p>

<h3>Pontos de apoio: valorizando um fit</h3>
<p>Quando você sabe que tem fit no naipe do parceiro, os naipes curtos ganham valor, porque os seus trunfos podem cortar as vencedoras dos adversários. Ao apoiar o parceiro, conte os naipes curtos em vez do comprimento:</p>
<table>
<thead><tr><th>Naipe curto</th><th>Com 4+ trunfos</th><th>Com 3 trunfos</th></tr></thead>
<tbody>
<tr><td>Chicana</td><td>5</td><td>3</td></tr>
<tr><td>Singleton</td><td>3</td><td>2</td></tr>
<tr><td>Doubleton</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="O parceiro abriu 1♥"></div>
<p>Só 8 PH, mas com quatro trunfos e um singleton você soma 3 e chega a 11 pontos de apoio. É um apoio limite para 3♥ (10-12).</p>
<div class="warn">Naipes curtos só valem alguma coisa quando há fit. Sem fit, um singleton no naipe do parceiro é um ponto negativo, não positivo: é um aviso de misfit.</div>

<h3>Ajustando a contagem</h3>
<ul>
<li>Honras em naipes longos pesam mais do que honras em naipes curtos: ♠KQJ54 vai fazer vazas, ♠KQ talvez não.</li>
<li>Honras desprotegidas em naipes curtos valem menos: um K, Q ou J seco, ou uma Q ou um J em doubleton. Desconte um ponto.</li>
<li>4-3-3-3 é a distribuição menos útil; considere descontar um ponto.</li>
<li>A escala 4-3-2-1 subestima um pouco os ases e os dez, e superestima um pouco as damas e os valetes.</li>
</ul>

<h3>A Regra dos 20 e a Regra dos 15</h3>
<p>Em primeira, segunda ou terceira posição, abra uma mão de 10 ou 11 PH se os PH mais o número de cartas dos seus dois naipes mais longos somarem 20 ou mais.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Regra dos 20: abra 1♠"></div>
<p>10 PH + 5 + 5 = 20, então abra, e com dois naipes de 5 cartas abra o de categoria mais alta: 1♠. Compare com ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 PH + 4 + 3 = 18, então passe. As damas e os valetes espalhados e a distribuição plana fazem dela uma abertura ruim.</p>
<p>Em quarta posição, depois de três passos, use a Regra dos 15: abra se os PH mais o número de espadas somarem 15 ou mais. Se você passar, a mão é recolhida sem ser jogada, então só convém abrir quando a sua dupla tem boas chances de ganhar a disputa pelo parcial, e quem decide a maioria dessas disputas é o naipe de espadas.</p>

<h3>Contagem de Perdedoras</h3>
<p>Depois de encontrado um fit de 8+ cartas, a Contagem de Perdedoras (LTC) dá uma segunda opinião, baseada na distribuição. Olhe as três primeiras cartas de cada naipe e conte uma perdedora para cada ás, rei ou dama que falte entre elas:</p>
<table>
<thead><tr><th>Cartas</th><th>Perdedoras</th></tr></thead>
<tbody>
<tr><td>Chicana</td><td>0</td></tr>
<tr><td>A seco / outro singleton</td><td>0 / 1</td></tr>
<tr><td>AK / Ax ou Kx / Qx ou xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Some as suas perdedoras às do parceiro e subtraia o total de 24: o resultado é, aproximadamente, o número de vazas que a dupla fará com aquele naipe como trunfo. Uma abertura mínima tem cerca de 7 perdedoras.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="O parceiro abriu 1♠"></div>
<p>♠K87 = 2 perdedoras, ♥4 = 1, ♦A86 = 2, ♣853 = 3: 8 perdedoras. 24 − (7 + 8) = 9 vazas, então convide com 3♠. A contagem de pontos concorda: 7 PH + 3 pelo singleton = 10 pontos de apoio, um apoio limite.</p>

<h3>Vazas rápidas</h3>
<p>As vazas rápidas medem a força defensiva: as vazas que você espera fazer nas duas primeiras rodadas de um naipe. AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Uma abertura sólida ou um dobre informativo costuma ter cerca de 2 vazas rápidas. Mãos com poucas vazas rápidas e muita distribuição são melhores para jogar a mão do que para defender.</p>
`,
    keyPoints: [
      'PH: ás 4, rei 3, dama 2, valete 1; 40 no baralho, 10 numa mão média.',
      'Na sua própria mão, some um ponto por carta além da quarta; ao apoiar o parceiro, conte os naipes curtos (com quatro trunfos: chicana 5, singleton 3, doubleton 1).',
      'Regra dos 20 para aberturas leves em primeira, segunda ou terceira posição; Regra dos 15 (PH + espadas) em quarta posição.',
      'LTC: vazas ≈ 24 − perdedoras da dupla; uma abertura mínima tem cerca de 7 perdedoras.',
      'Cerca de 25 pontos somados para 3ST ou game num naipe rico, 29 para game num naipe pobre, 33 para pequeno slam.',
    ],
    quiz: [
      {
        q: 'Quantos PH há em ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 PH.',
      },
      {
        q: 'Primeira posição. Você tem 10 PH com cinco copas e cinco paus. O que você faz?',
        options: ['Passar: uma abertura exige 12 PH', 'Abrir 1♥: a Regra dos 20 está satisfeita', 'Abrir 1♣: com dois naipes de 5 cartas, abre-se o mais baixo', 'Abrir 2♥'],
        answer: 1,
        explain: '10 PH + 5 + 5 = 20, então a mão se qualifica pela Regra dos 20. Com dois naipes de 5 cartas você abre o de categoria mais alta, ou seja, 1♥ (os paus podem ser mostrados depois).',
      },
      {
        q: 'O parceiro abre 1♥. Você tem quatro copas e chicana em espadas. Quantos pontos de distribuição você soma?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Com quatro ou mais trunfos, uma chicana vale 5 pontos de apoio: cada espada que o parceiro tiver pode ser cortada na sua mão.',
      },
      {
        q: 'Sua mão tem 7 perdedoras e a do parceiro tem 8, com um fit de 8 trunfos. Quantas vazas a LTC prevê?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Supondo que o abridor tenha 7 perdedoras, um respondedor com 8 perdedoras deve convidar no nível de 3 em vez de marcar o game.',
      },
      {
        q: 'Quarta posição, depois de três passos: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 PH). O que você faz?',
        options: ['Passar: 11 PH não bastam', 'Abrir 1♣: 11 + 4 espadas = 15', 'Abrir 1♠', 'Abrir 1ST'],
        answer: 1,
        explain: 'A Regra dos 15 está satisfeita: 11 PH + 4 espadas = 15. Sem naipe rico de 5 cartas e com 3-3 nos pobres, você abre 1♣. 1♠ prometeria cinco espadas, e 1ST exige 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'A abertura do leilão',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Quais mãos abrir e qual abertura escolher: de 1 em naipe a 1ST, 2ST, 2♣ e barragens.',
    body: `
<h3>As aberturas num relance</h3>
<table>
<thead><tr><th>Abertura</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 PH, 3+ paus (o pobre mais longo; com 3-3 nos pobres, abra 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 PH, 3+ ouros (o pobre mais longo; com 4-4 nos pobres, abra 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 PH, 5+ cartas no naipe</td></tr>
<tr><td>1ST</td><td>15-17 PH, balanceada (pode ter um naipe de 5 cartas)</td></tr>
<tr><td>2♣</td><td>Forte e artificial: 22+ PH ou 9+ vazas de jogo</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Dois fraco: um naipe de 6 cartas e 5-10 PH</td></tr>
<tr><td>2ST</td><td>20-21 PH, balanceada</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Barragem: um naipe de 7 cartas e 5-10 PH</td></tr>
<tr><td>4♥ / 4♠</td><td>Barragem: um naipe de 8 cartas (ou de 7 com distribuição extra)</td></tr>
</tbody>
</table>

<h3>É uma mão de abertura?</h3>
<p>Com 12 PH ou mais, abra, exceto em quarta posição. Com 10-11 PH em primeira, segunda ou terceira posição, abra se a Regra dos 20 estiver satisfeita (PH + comprimento dos seus dois naipes mais longos ≥ 20). Em quarta posição, abra com 13 PH ou mais, e com 10-12 PH só se a Regra dos 15 estiver satisfeita (PH + número de espadas ≥ 15). Mãos com um naipe longo e menos pontos podem servir para um dois fraco ou uma barragem.</p>

<h3>Mãos balanceadas: os pontos decidem</h3>
<p>Uma mão balanceada não tem chicana nem singleton, e tem no máximo um doubleton: 4-3-3-3, 4-4-3-2 ou 5-3-3-2. Com uma mão balanceada, o seu plano é sempre mostrar a força em sem trunfo, logo de saída ou na sua próxima voz:</p>
<table>
<thead><tr><th>PH</th><th>Plano</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Abra 1 em naipe e remarque 1ST</td></tr>
<tr><td>15-17</td><td>Abra 1ST</td></tr>
<tr><td>18-19</td><td>Abra 1 em naipe e depois salte para 2ST</td></tr>
<tr><td>20-21</td><td>Abra 2ST</td></tr>
<tr><td>22-24</td><td>Abra 2♣ e depois remarque 2ST</td></tr>
<tr><td>25-27</td><td>Abra 2♣ e depois remarque 3ST</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Abra 1ST: 16 PH, balanceada"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Abra 1♦: 14 PH, plano de remarcar 1ST"></div>

<h3>Escolhendo o naipe</h3>
<ul>
<li>Com um naipe rico de 5 cartas ou mais, abra nele, mesmo com uma mão balanceada de 12-14.</li>
<li>Com dois naipes de 5 cartas (ou dois de 6), abra o de categoria mais alta.</li>
<li>Com um naipe de 6 cartas e outro de 5, abra o mais longo.</li>
<li>Sem naipe rico de 5 cartas, abra o pobre mais longo. Com 3-3 nos pobres, abra 1♣; com 4-4, abra 1♦.</li>
<li>Nunca se abre um naipe rico de quatro cartas. Com 4-4 nos ricos e nenhum naipe de 5 cartas, abra um pobre; o parceiro marcará um rico de 4 cartas, se tiver.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Abra 1♠: 12 PH, cinco espadas"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Abra 1♦: 4-4 nos pobres"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Abra 1♣: 3-3 nos pobres"></div>
<p>A última mão tem quatro espadas, mas para abrir um naipe rico são necessárias cinco cartas, e com três cartas em cada pobre a abertura é 1♣. Se o parceiro tiver quatro espadas, responderá 1♠ e o fit será encontrado.</p>

<h3>Aberturas fortes e fracas</h3>
<p>2ST mostra 20-21 balanceada; 2♣ é a única abertura forcing e cobre todas as mãos de 22+ PH ou de cerca de nove vazas de jogo. No outro extremo, os dois fracos e as barragens tiram espaço de leilão dos adversários quando você tem um naipe longo mas pouca defesa. Cada um desses temas tem a sua própria lição.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Abra 2ST: 21 PH, balanceada"></div>
<div class="tip">Planeje a remarcação antes de abrir. Com 12-14 balanceada você vai remarcar 1ST; com 18-19 balanceada vai saltar para 2ST; com dois naipes vai marcar o segundo. Se não houver nenhuma remarcação sensata, repense a abertura.</div>
<div class="warn">Nunca abra 1♥ ou 1♠ com apenas quatro cartas. O parceiro apoiará com três cartas, contando com um fit de pelo menos oito.</div>
`,
    keyPoints: [
      'Abra com 12+ PH; com 10-11, use a Regra dos 20 (primeira, segunda ou terceira posição). Em quarta posição, abra com 13+, ou com 10-12 se a Regra dos 15 estiver satisfeita.',
      '1♥/1♠ prometem cinco cartas; sem naipe rico de 5 cartas, abra o pobre mais longo (1♣ com 3-3, 1♦ com 4-4).',
      'Balanceada: com 12-14 abra um naipe e remarque 1ST; 15-17, 1ST; 18-19, salte para 2ST; 20-21, 2ST; 22+, 2♣.',
      'Dois naipes de 5 cartas: abra o mais alto; 6-5: abra o mais longo.',
      'Planeje a remarcação antes de abrir.',
    ],
    quiz: [
      {
        q: 'Você tem ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 PH). O que você abre?',
        options: ['1♥', '1♦', '1ST', '2♥'],
        answer: 0,
        explain: 'Com dois naipes de 5 cartas, abra o de categoria mais alta. Depois de 1♥ você pode marcar ouros em seguida, e o parceiro pode escolher entre os seus naipes sem subir o leilão.',
      },
      {
        q: 'Você tem ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 PH). O que você abre?',
        options: ['1♣', '1ST', '1♦', 'Passo'],
        answer: 0,
        explain: 'A mão é balanceada, mas tem só 14 PH, pouco para 1ST (15-17). Abra o pobre mais longo, 1♣, e remarque 1ST para mostrar 12-14 balanceada.',
      },
      {
        q: 'Você tem ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 PH). O que você abre?',
        options: ['1♦', '1ST', '2ST', '1♣'],
        answer: 1,
        explain: '16 PH com distribuição 3-3-4-3 é uma abertura de 1ST de manual. Uma só voz descreve a força e a distribuição.',
      },
      {
        q: 'Você tem ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 PH). O que você abre?',
        options: ['1♥', '1♣', '1♦', 'Passo'],
        answer: 1,
        explain: 'São necessárias cinco cartas para abrir um naipe rico, então 1♥ está fora de questão. Sem rico de 5 cartas, abra o pobre mais longo; com 3-3 nos pobres, isso é 1♣.',
      },
      {
        q: 'Você tem uma mão balanceada de 18 PH. Qual é o seu plano?',
        options: ['Abrir 1ST', 'Abrir 2ST', 'Abrir 1 em naipe e saltar para 2ST na próxima voz', 'Abrir 2♣'],
        answer: 2,
        explain: '18-19 balanceada é forte demais para 1ST (15-17) e fraca demais para 2ST (20-21). Abra 1 em naipe e salte para 2ST na sua próxima voz.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Respostas à abertura de 1 em naipe',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Como o respondedor apoia, marca um naipe novo ou marca sem trunfo depois que o parceiro abre 1 em naipe.',
    body: `
<h3>Princípios básicos</h3>
<p>A abertura do parceiro no nível de 1 mostra 12-21 PH, então com 6 pontos ou mais você deve responder: até uma mão fraca pode bastar para game diante de uma abertura forte. Com menos de 6 pontos, passe. A sua primeira tarefa é informar o parceiro sobre um fit; a segunda, mostrar a sua faixa de força.</p>

<h3>Respondendo a 1♥ ou 1♠</h3>
<p>O parceiro tem pelo menos cinco cartas, então três cartas de apoio já dão um fit de oito cartas. Apoiar o parceiro é a sua prioridade máxima.</p>
<table>
<thead><tr><th>Resposta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>2 no rico</td><td>6-10 pontos de apoio, apoio de 3+ cartas</td></tr>
<tr><td>3 no rico (salto)</td><td>Apoio limite: 10-12 pontos de apoio, apoio de 4+ cartas, convite</td></tr>
<tr><td>2ST</td><td>Jacoby: 13+ pontos, apoio de 4+ cartas, forcing de game</td></tr>
<tr><td>4 no rico</td><td>Fraca e distribucional: apoio de 5+ cartas, menos de 10 PH</td></tr>
<tr><td>Salto duplo em naipe novo</td><td>Splinter: apoio de 4+ cartas, singleton ou chicana nesse naipe, 13-16 pontos</td></tr>
<tr><td>1♠ sobre 1♥</td><td>6+ pontos, 4+ espadas, forcing</td></tr>
<tr><td>1ST</td><td>6-10, sem fit, não forcing (sobre 1♥, nega quatro espadas)</td></tr>
<tr><td>Naipe novo no nível de 2</td><td>10+ (11+ por segurança), 4+ cartas, 5+ para 2♥ sobre 1♠; forcing por uma volta</td></tr>
<tr><td>Salto em naipe novo</td><td>19+ pontos, forcing de game</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="O parceiro abriu 1♠: marque 2♠"></div>
<p>6 PH e apoio de três cartas: apoie para 2♠. Não marque 1ST nem procure as copas no nível de 2; uma resposta de 2♥ exige cinco copas e 10+ pontos.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="O parceiro abriu 1♠: marque 3♠"></div>
<p>7 PH mais 3 pelo singleton, com quatro trunfos = 10 pontos de apoio: um apoio limite. O parceiro passa com uma mínima e marca o game com mais.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="O parceiro abriu 1♠: marque 2ST"></div>
<p>14 PH com quatro trunfos: o Jacoby 2ST define espadas como trunfo e força o game, deixando espaço para explorar o slam.</p>
<p>Com um singleton e 13-16 pontos, um splinter descreve melhor a mão: sobre 1♠, ♠KQ74 ♥A853 ♦K962 ♣5 marca 4♣. Veja a lição “Apoios splinter e Drury reverso”.</p>
<p>Com 6 PH, cinco copas e um singleton, ♠4 ♥QJ852 ♦K9763 ♣82, salte para 4♥ sobre 1♥. Os adversários certamente têm um fit e muitos pontos, e você quer obrigá-los a adivinhar no nível de 5.</p>

<h4>Apoio de três cartas e 10-12 pontos</h4>
<p>O salto para três promete normalmente quatro trunfos. Com apenas três, marque primeiro um naipe novo e depois apoie o rico do parceiro: sobre 1♥, ♠A84 ♥K93 ♦KJ752 ♣64 marca 2♦ e depois 4♥ — 11 pontos e um fit diante de uma abertura costumam bastar para o game. (Só quando uma curta leva a 11–12 pontos uma mão sem PH suficientes para um dois sobre um você salta para 3♥ de imediato com três trunfos: 1ST negaria o apoio.) Com apoio de três cartas e 13+, marque primeiro um naipe novo e depois o game no rico.</p>

<h3>Respondendo a 1♣ ou 1♦</h3>
<p>O parceiro pode ter só três cartas no pobre, e um fit num naipe rico vale mais, então procure primeiro um rico.</p>
<table>
<thead><tr><th>Resposta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Naipe novo no nível de 1</td><td>6+ pontos, 4+ cartas, forcing. Marque primeiro o naipe mais longo; com dois naipes de 4 cartas, marque o mais barato (de baixo para cima).</td></tr>
<tr><td>1ST</td><td>6-10, balanceada, sem rico de 4 cartas</td></tr>
<tr><td>2ST</td><td>13-15, balanceada, sem rico de 4 cartas, forcing de game</td></tr>
<tr><td>3ST</td><td>16-17, balanceada</td></tr>
<tr><td>Apoio para 2</td><td>6-10, 5+ paus ou 4+ ouros, sem rico de 4 cartas</td></tr>
<tr><td>Apoio em salto para 3</td><td>10-12, o mesmo apoio, convite</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ pontos, forcing</td></tr>
<tr><td>Salto em naipe novo</td><td>19+ pontos</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="O parceiro abriu 1♦: marque 1♥"></div>
<p>8 PH e um rico de 4 cartas: mostre-o no nível de 1. Marcar 1ST poderia perder um fit 4-4 em copas.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="O parceiro abriu 1♣: marque 1ST"></div>
<p>8 PH, balanceada, sem rico de 4 cartas. Quatro paus não bastam para apoiar um naipe que pode ter só três cartas; 1ST descreve a mão.</p>
<p>Com 11 PH, cinco ouros e nenhum rico de 4 cartas, ♠K5 ♥832 ♦KJ763 ♣A94, apoie 1♦ para 3♦ (10-12). Com 11-12 balanceada e sem rico, por exemplo ♠KQ5 ♥J104 ♦A963 ♣J72 sobre 1♣, não há voz direta: responda 1♦ e marque 2ST em seguida para convidar ao game.</p>
<div class="warn">Não salte para 2ST sobre 1♣ ou 1♦ com 11 ou 12 pontos. Esse salto mostra 13-15 e obriga o parceiro a ir ao game. Marque primeiro um naipe novo e convide com 2ST na volta seguinte.</div>
<div class="tip">O naipe novo do respondedor é forcing por uma volta. Você pode marcar um naipe com uma mão modesta e ainda mostrar a sua força na próxima voz.</div>
`,
    keyPoints: [
      'Responda com 6+ pontos; apoiar o rico do parceiro é a prioridade máxima.',
      'Sobre 1♥/1♠: 2 no rico = 6-10 com apoio de 3+; 3 no rico = 10-12 com 4+; 2ST = 13+ com 4+ (Jacoby); 4 no rico = fraca com 5+.',
      'Um naipe novo no nível de 2 exige 10+ (11+ por segurança) e é forcing; 2♥ sobre 1♠ exige cinco copas.',
      'Sobre 1♣/1♦: marque primeiro um rico de 4 cartas no nível de 1; 1ST = 6-10, 2ST = 13-15, 3ST = 16-17, todas balanceadas e sem rico.',
      'Com 11-12 balanceada, marque primeiro um naipe novo e convide com 2ST em seguida.',
    ],
    quiz: [
      {
        q: 'O parceiro abre 1♥. Você tem ♠K72 ♥Q84 ♦J953 ♣Q62 (8 PH). O que você responde?',
        options: ['1ST', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Apoio de três cartas para um rico de 5 cartas significa fit de oito cartas; com 6-10 pontos, o apoio simples para 2♥ diz isso ao parceiro de imediato. 1♠ exigiria quatro espadas.',
      },
      {
        q: 'O parceiro abre 1♠. Você tem ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 PH). O que você responde?',
        options: ['4♠', '3♠', '2ST', '2♦'],
        answer: 2,
        explain: '2ST (Jacoby) mostra 13+ com 4+ trunfos e é forcing de game. 3♠ seria apenas um apoio limite e 4♠ é um apoio fraco e distribucional, então ambos subestimariam esta mão.',
      },
      {
        q: 'O parceiro abre 1♦. Você tem ♠AJ85 ♥K1062 ♦74 ♣953 (8 PH). O que você responde?',
        options: ['1♠', '1♥', '1ST', '2♦'],
        answer: 1,
        explain: 'Com dois naipes de 4 cartas, marque de baixo para cima: primeiro 1♥. Se o parceiro tiver quatro espadas, poderá marcar 1♠ em seguida, e nenhum fit se perde.',
      },
      {
        q: 'O parceiro abre 1♣. Você tem ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 PH). O que você responde?',
        options: ['1ST', '2ST', '3ST', '1♦'],
        answer: 1,
        explain: 'Balanceada, sem rico de 4 cartas, 13 PH: 2ST mostra 13-15 e é forcing de game. 1♦ prometeria quatro ouros, e 3ST mostra 16-17.',
      },
      {
        q: 'O parceiro abre 1♠. Você tem ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 PH). O que você responde?',
        options: ['2♥', '2♣', '1ST', '3♣'],
        answer: 1,
        explain: 'Uma resposta de 2♥ sobre 1♠ promete cinco copas. Marque o seu naipe longo, 2♣, que é forcing; talvez você tenha a chance de mostrar as copas depois. 3♣ seria um salto em naipe novo, mostrando 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'A remarcação do abridor',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Como o abridor usa a segunda voz para mostrar uma mão mínima, média ou máxima e descrever a distribuição, incluindo reverses e saltos em naipe novo.',
    body: `
<h3>Primeiro, classifique a sua mão</h3>
<p>A sua abertura cobria uma faixa ampla, 12-21. A remarcação a estreita. Conte de novo os seus pontos à luz da resposta do parceiro (some pontos de apoio se encontrou um fit) e enquadre a mão numa de três faixas:</p>
<table>
<thead><tr><th>Faixa</th><th>Pontos</th><th>Ação típica</th></tr></thead>
<tbody>
<tr><td>Mínima</td><td>12-15</td><td>A voz descritiva mais barata</td></tr>
<tr><td>Média</td><td>16-18</td><td>Um salto, ou um reverse com 17+</td></tr>
<tr><td>Máxima</td><td>19-21</td><td>Marcar o game, ou forçar com um salto em naipe novo</td></tr>
</tbody>
</table>

<h3>Depois de uma resposta no nível de 1</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>O respondedor tem 6+ pontos e quatro ou mais espadas. As opções do abridor:</p>
<table>
<thead><tr><th>Remarcação</th><th>Pontos</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>Apoio de 4 cartas em espadas</td></tr>
<tr><td>3♠</td><td>16-18</td><td>Apoio de 4 cartas, convite</td></tr>
<tr><td>4♠</td><td>19-21</td><td>Apoio de 4 cartas, para jogar</td></tr>
<tr><td>1ST</td><td>12-14</td><td>Balanceada</td></tr>
<tr><td>2ST (salto)</td><td>18-19</td><td>Balanceada, convite</td></tr>
<tr><td>2♦</td><td>12-15</td><td>Normalmente seis ouros</td></tr>
<tr><td>3♦ (salto)</td><td>16-18</td><td>Um bom naipe de 6 cartas</td></tr>
<tr><td>2♣ (naipe novo mais baixo)</td><td>12-18</td><td>Quatro ou mais paus, não forcing</td></tr>
<tr><td>2♥ (reverse)</td><td>17+</td><td>Mais ouros do que copas, forcing por uma volta</td></tr>
<tr><td>3♣ (salto em naipe novo)</td><td>19+</td><td>Forcing de game</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: remarque 1ST"></div>
<p>13 PH e balanceada: 1ST. Um apoio para 2♠ promete quatro espadas, e o parceiro pode ter só quatro.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: remarque 3♠"></div>
<p>16 PH mais 1 por cada um dos dois doubletons (copas e paus), com quatro trunfos: 16 + 1 + 1 = 18 pontos de apoio, uma mão média. Salte para 3♠ para convidar ao game. Com uma mínima (12-15), apoie para 2♠; com 19+, marque 4♠.</p>

<h3>Reverses</h3>
<p>Um <strong>reverse</strong> é uma remarcação em naipe novo no nível de 2 que é de categoria <em>mais alta</em> que o seu primeiro naipe, como 1♦ – 1♠ – 2♥ ou 1♣ – 1♥ – 2♦. Para dar preferência ao seu primeiro naipe, o parceiro agora precisa ir ao nível de 3, por isso o reverse promete força extra (17+) e é forcing por uma volta. Ele também mostra que o seu primeiro naipe é mais longo que o segundo.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: reverse com 2♥"></div>
<p>17 PH, cinco ouros e quatro copas: 2♥ mostra a distribuição e a força extra numa só voz.</p>
<div class="warn">Com uma mínima, não faça reverse. Com ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 PH), depois de 1♦ – 1♠, remarque 2♦. Você não vai perder um fit em copas: com quatro copas e quatro espadas, o parceiro teria respondido 1♥ primeiro.</div>

<h3>Saltos em naipe novo e remarcações em salto</h3>
<p>Um salto em naipe novo (1♦ – 1♠ – 3♣) mostra 19+ e é forcing de game. Uma remarcação em salto no seu próprio naipe (1♥ – 1♠ – 3♥) mostra 16-18 e um bom naipe de seis cartas; é um convite, não é forcing.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: salto em naipe novo, 3♣"></div>
<p>20 PH: forte demais para um 2♣ não forcing e fora da faixa de 18-19 de uma remarcação de 2ST. 3♣ força o game enquanto você procura o melhor contrato.</p>

<h3>Depois de 1ST ou de um apoio</h3>
<p>Depois de 1♠ – 1ST, o respondedor tem 6-10 e normalmente não tem fit. Passe com uma mínima balanceada; remarque um naipe de seis cartas; mostre um segundo naipe (um naipe novo mais baixo que o primeiro não é forcing); ou convide com um salto quando tiver 16-18 ou mais. Depois de 1♠ – 2♠, o respondedor tem 6-10 com apoio: passe com uma mínima, marque 3♠ para convidar com uma mão média e marque 4♠ com uma máxima. A Contagem de Perdedoras é um bom guia aqui: com 6 perdedoras convide, com 5 marque o game.</p>
<div class="tip">Uma resposta no nível de 2 (1♠ – 2♣) já mostra 10+ e é forcing por uma volta, então o abridor pode fazer uma remarcação natural e descritiva, sem precisar saltar só para manter o leilão vivo.</div>
`,
    keyPoints: [
      'Classifique a mão: mínima 12-15, média 16-18, máxima 19-21.',
      'Remarcação de 1ST = 12-14 balanceada; salto para 2ST = 18-19 balanceada.',
      'Apoie o rico do respondedor com quatro cartas: nível de 2 com mínima, nível de 3 com média, game com máxima.',
      'Um reverse (naipe novo mais alto no nível de 2) mostra 17+, é forcing e indica que o primeiro naipe é mais longo.',
      'Um salto em naipe novo do abridor mostra 19+ e é forcing de game.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Você tem ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 PH). Qual é a sua remarcação?',
        options: ['1ST', '2♦', '2ST', '2♠'],
        answer: 0,
        explain: 'A mão é balanceada, com 12-14 PH, exatamente o que 1ST mostra. 2♦ sugere seis ouros e 2♠ promete quatro espadas.',
      },
      {
        q: '1♣ – 1♥. Você tem ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 PH). Qual é a sua remarcação?',
        options: ['2♥', '3♥', '4♥', '2ST'],
        answer: 2,
        explain: 'Com apoio de quatro cartas, conte pontos de apoio: 18 PH + 1 por cada doubleton = 20, uma máxima. Marque o game: 4♥.',
      },
      {
        q: 'Em qual destes leilões o abridor faz um reverse?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1ST – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Copas são de categoria mais alta que ouros, e 2♥ está no nível de 2, então o parceiro precisa ir a 3♦ para preferir o primeiro naipe do abridor. Nos outros leilões o segundo naipe é mais baixo ou é marcado no nível de 1.',
      },
      {
        q: '1♦ – 1♥. Você tem ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 PH). Qual é a sua remarcação?',
        options: ['2♦', '3♦', '2ST', '1ST'],
        answer: 1,
        explain: 'Uma mão média com um bom naipe de seis cartas: o salto para 3♦ mostra 16-18 e convida. 2♦ mostraria uma mínima, e 1ST ou 2ST, uma mão balanceada.',
      },
      {
        q: '1♠ – 2♠. Você tem ♠AQJ84 ♥K73 ♦A62 ♣95 (14 PH). O que você faz?',
        options: ['Passo', '3♠', '4♠', '2ST'],
        answer: 0,
        explain: '14 PH + 1 pela quinta espada = 15, uma mínima. A LTC concorda: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 perdedoras, a conta de uma abertura mínima. Diante de um apoio de 6-10, o game é improvável, então passe.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'Aberturas e respostas em sem trunfo',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Respostas a 1ST e 2ST com Stayman, transfers Jacoby, o transfer para pobre, convites e o 4ST quantitativo.',
    body: `
<h3>Por que as aberturas em sem trunfo são fáceis</h3>
<p>1ST mostra 15-17 PH e uma mão balanceada (que pode ter um naipe de 5 cartas). Como a mão do abridor está tão bem definida, o respondedor geralmente sabe de imediato onde a dupla deve jogar e passa a ser o capitão. Some os seus pontos aos 15-17 do parceiro: com 25 ou mais no total, você quer game.</p>

<h3>Respostas a 1ST</h3>
<table>
<thead><tr><th>Resposta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Passo</td><td>0-7 sem rico longo</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ PH e um rico de 4 cartas</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ copas, qualquer força. O abridor marca 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ espadas, qualquer força. O abridor marca 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer para paus: o abridor marca 3♣. Mão fraca com um pobre longo; passe 3♣ ou marque 3♦.</td></tr>
<tr><td>2ST</td><td>8-9, convite</td></tr>
<tr><td>3ST</td><td>10-15, para jogar</td></tr>
<tr><td>4♣</td><td>Gerber: pergunta por ases</td></tr>
<tr><td>4♦ / 4♥</td><td>Transfer Texas: 6+ copas / espadas e força de game. O abridor marca 4♥ / 4♠.</td></tr>
<tr><td>4ST</td><td>16-17, quantitativo: convida a 6ST</td></tr>
</tbody>
</table>

<h3>Stayman</h3>
<p>2♣ pergunta ao abridor se ele tem um rico de 4 cartas. O abridor responde 2♦ (nenhum rico de 4 cartas), 2♥ (quatro copas, talvez também quatro espadas) ou 2♠ (quatro espadas, sem quatro copas). Depois:</p>
<ul>
<li>Se houver fit, apoie para três para convidar ou para quatro para jogar.</li>
<li>Se não houver, marque 2ST com 8-9 ou 3ST com 10-15.</li>
<li>Se o abridor mostrou copas e você tem espadas, marque 2ST ou 3ST. O abridor, que pode ter os dois ricos, corrige para espadas quando tiver quatro delas.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="O parceiro abriu 1ST: marque 2♣"></div>
<p>10 PH e dois ricos de 4 cartas. Sobre 2♦, marque 3ST; sobre 2♥, marque 4♥; sobre 2♠, marque 4♠. O Stayman exige 8+ PH porque, depois de uma resposta de 2♦, você precisa poder marcar pelo menos 2ST.</p>

<h3>Transfers Jacoby</h3>
<p>Com um naipe rico de 5 cartas ou mais, faça um transfer: marque o naipe logo abaixo dele e deixe o abridor marcar o seu naipe. A mão forte passa a ser a do declarante, e a saída tem de vir em direção a ela. Os transfers funcionam com qualquer força, de nada até valores de slam.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="O parceiro abriu 1ST: 2♥ e depois passo"></div>
<p>3 PH. 2♠ vai jogar muito melhor que 1ST. Faça o transfer com 2♥ e passe sobre o 2♠ do abridor.</p>
<p>Depois que o transfer é completado, o respondedor continua:</p>
<table>
<thead><tr><th>Voz seguinte</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Passo</td><td>0-7, sign-off</td></tr>
<tr><td>2ST</td><td>8-9 com exatamente cinco cartas no rico (o abridor escolhe)</td></tr>
<tr><td>3 no rico</td><td>8-9 com seis ou mais cartas, convite</td></tr>
<tr><td>3ST</td><td>10-15 com exatamente cinco (o abridor escolhe entre 3ST e 4 no rico)</td></tr>
<tr><td>4 no rico</td><td>10-15 com seis ou mais, para jogar (com transfers Texas, marque 4♦ ou 4♥ de imediato)</td></tr>
<tr><td>Naipe novo</td><td>Natural e forcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="O parceiro abriu 1ST: 2♦ e depois 3ST"></div>
<p>10 PH e cinco copas. Faça o transfer e depois marque 3ST. Com três ou mais copas o abridor marca 4♥; com doubleton, passa.</p>
<p>Com apoio de quatro cartas e 17 PH, o abridor faz um <strong>superaceite</strong>, saltando: 1ST – 2♦ – 3♥. O respondedor então marca o game com quase qualquer mão, porque o fit tem pelo menos nove cartas e o abridor está no topo da sua faixa.</p>

<h3>Pobres longos, convites e tentativas de slam</h3>
<p>Com uma mão fraca e seis ou mais cartas num pobre, marque 2♠: o abridor é obrigado a marcar 3♣, e você passa com paus ou marca 3♦ com ouros. Com ♠52 ♥742 ♦J3 ♣Q108653: 1ST – 2♠ – 3♣ – passo.</p>
<p>2ST convida ao game com 8-9. O abridor passa com 15, marca 3ST com 17 e usa o bom senso com 16 (aceita com bons dez e noves ou com um naipe de 5 cartas). Aqui 4ST não é Blackwood: mostra 16-17 e pede ao abridor que marque 6ST com uma máxima. Com ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 PH), marque 4ST: 16 + 15-17 = 31-33 no total, então o slam só é bom se o abridor estiver no topo da sua faixa.</p>

<h3>Respondendo a 2ST</h3>
<p>A abertura de 2ST mostra 20-21. As mesmas ferramentas valem um nível acima: 3♣ é Stayman, 3♦ e 3♥ são transfers, 4♦ e 4♥ são transfers Texas, 3ST mostra 4-10 pontos e 4ST (11-12) é quantitativo. Até 4 pontos bastam para ir ao game.</p>
<div class="tip">Com um rico de 5 cartas e força para game, faça primeiro o transfer e depois marque 3ST. O abridor, que conhece a própria mão e sabe que você tem cinco cartas, faz a escolha final entre 3ST e quatro no rico.</div>
<div class="warn">Não use Stayman com uma mão balanceada de 8+ sem rico de 4 cartas. Você acabaria tendo de adivinhar; simplesmente marque 2ST ou 3ST.</div>
`,
    keyPoints: [
      '1ST = 15-17 balanceada; o respondedor soma os pontos e define o contrato.',
      '2♣ Stayman (8+, um rico de 4 cartas): respostas 2♦ nenhum, 2♥ copas (talvez também espadas), 2♠ só espadas.',
      '2♦ e 2♥ são transfers para copas e espadas, com qualquer força; 2♠ é transfer para paus, para uma mão fraca com um pobre longo.',
      '2ST = 8-9 convite, 3ST = 10-15, 4ST = 16-17 quantitativo (não é Blackwood).',
      'Com apoio de quatro cartas e 17, o abridor faz superaceite do transfer saltando para três no rico.',
      'Sobre 2ST: 3♣ Stayman, 3♦/3♥ transfers, 4♦/4♥ Texas, 3ST com 4-10, 4ST quantitativo.',
    ],
    quiz: [
      {
        q: 'O parceiro abre 1ST. Você tem ♠J8752 ♥84 ♦932 ♣Q65 (3 PH). Qual é o seu plano?',
        options: ['Passar', '2♥ (transfer) e depois passar sobre 2♠', 'Marcar 2♠', 'Marcar 2♣'],
        answer: 1,
        explain: 'Uma mão fraca com cinco espadas joga melhor em 2♠ do que em 1ST, porque os trunfos longos produzem vazas. Faça o transfer com 2♥ e passe. 2♠ seria transfer para paus, e o Stayman com 2♣ exige 8+.',
      },
      {
        q: '1ST – 2♣ – 2♥. Você tem ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 PH). E agora?',
        options: ['3ST', '4♥', '3♥', '2ST'],
        answer: 1,
        explain: 'O abridor tem quatro copas, então há um fit 4-4, e 11 + 15-17 basta para game. Marque 4♥; um fit 4-4 num rico costuma jogar melhor que 3ST.',
      },
      {
        q: 'Você abriu 1ST com ♠KQ75 ♥AJ83 ♦K4 ♣Q62. O parceiro marca 2♣. Qual é a sua resposta?',
        options: ['2♥', '2♠', '2♦', '2ST'],
        answer: 0,
        explain: 'Com os dois ricos, responda primeiro 2♥. Se o parceiro tiver espadas em vez de copas, marcará 2ST ou 3ST e você corrigirá para espadas.',
      },
      {
        q: '1ST – 2♦ – 2♥ – 3ST. Você abriu com três copas. O que você faz?',
        options: ['Passar, porque o parceiro escolheu 3ST', 'Marcar 4♥: o parceiro mostrou cinco copas, então vocês têm um fit de oito cartas', 'Marcar 4ST', 'Marcar 3♥'],
        answer: 1,
        explain: 'Transfer seguido de 3ST mostra exatamente cinco copas e força de game. Com apoio de três cartas o abridor escolhe 4♥; com doubleton, passa sobre 3ST.',
      },
      {
        q: 'O parceiro abre 2ST. Você tem ♠Q8642 ♥K7 ♦J73 ♣1052 (6 PH). Qual é o seu plano?',
        options: ['Marcar 3♠', 'Marcar 3♥ e depois 3ST sobre 3♠', 'Marcar 3ST', 'Passar'],
        answer: 1,
        explain: '20-21 diante de 6 basta para game. Faça o transfer com 3♥ e depois marque 3ST para mostrar exatamente cinco espadas; o abridor escolhe 4♠ com apoio de três cartas ou passa com duas.',
      },
    ],
  },
  {
    id: 'planning-the-play',
    title: 'Planejando o carteio',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Antes de jogar para a primeira vaza, conte as suas vencedoras (em sem trunfo) ou as suas perdedoras (num contrato em naipe) e faça um plano.',
    body: `
<h3>Pare e planeje antes da primeira vaza</h3>
<p>Quando o morto desce, a maioria dos iniciantes joga logo uma carta na primeira vaza. Os bons jogadores fazem uma pausa. É muitas vezes na primeira vaza que o contrato se ganha ou se perde, e você não consegue planejá-la sem ver o quadro inteiro. Use sempre a mesma rotina:</p>
<ol>
<li><strong>Conte.</strong> Em sem trunfo, conte as suas vencedoras garantidas: as vazas que você pode fazer sem ceder a mão. Num contrato em naipe, conte as perdedoras da mão com os trunfos longos.</li>
<li><strong>Compare.</strong> Quantas vazas extras você precisa (sem trunfo), ou de quantas perdedoras precisa se livrar (naipe)?</li>
<li><strong>Encontre as fontes.</strong> As vazas extras vêm de firmar naipes longos, expulsar cartas altas, finesses e cortes na mão curta em trunfos. As perdedoras desaparecem cortadas no morto, descartadas nas vencedoras do morto ou com finesses.</li>
<li><strong>Procure os perigos.</strong> Quantas vezes você terá de ceder a mão? Qual adversário é perigoso? Você tem as entradas de que precisa?</li>
<li><strong>Decida a ordem das jogadas</strong>, começando por qual carta jogar do morto e qual mão deve ganhar a primeira vaza.</li>
</ol>

<h3>Um exemplo em sem trunfo: conte as vencedoras</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3ST por Sul. Oeste sai com a ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Conte:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): seis vencedoras garantidas. Faltam três.</p>
<p><strong>Fontes:</strong> copas. Depois que o ♥A for expulso, o KQJ10 do morto rende três vazas. Paus não oferecem nada: os defensores têm o K, a Q, o J e o 10.</p>
<p><strong>Perigo:</strong> os defensores podem segurar o ♥A até a terceira volta. Aí a última copa do morto é vencedora, mas você precisa de uma entrada para chegar a ela. A única entrada lateral do morto é o ♠A.</p>
<p><strong>Plano:</strong> jogue baixo do morto na primeira vaza e ganhe com o ♠K na mão, guardando o ♠A como entrada. Depois jogue copas imediatamente. Quando quer que os defensores tomem com o ás, você terá nove vazas: duas de espadas, três de copas, três de ouros e uma de paus. Se você ganhar a primeira vaza com o ♠A por descuido, um defensor que segure o ♥A até a terceira volta deixa a quarta copa do morto isolada, e você faz só oito vazas.</p>
<div class="tip">Expulse cedo as cartas altas dos adversários, enquanto você ainda tem paradas em todos os naipes. Bata as suas vencedoras garantidas por último, não primeiro.</div>

<h3>Um exemplo em naipe: conte as perdedoras</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ por Sul. Oeste sai com a ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Conte as perdedoras da mão de Sul:</strong> espadas, nenhuma; copas, uma (a terceira volta); ouros, três (o 7, o 3 e o 2); paus, nenhuma (o ♣A do morto cobre o seu singleton). Total: quatro. Você pode se permitir três.</p>
<p><strong>Fonte:</strong> o morto tem só dois ouros. Depois do ♦A e de mais uma volta, o morto fica em chicana e pode cortar o seu terceiro ouro com um trunfo pequeno. Esse corte é uma vaza extra porque é feito pela mão <em>curta</em> em trunfos: os trunfos de Sul já são vencedores de qualquer jeito.</p>
<p><strong>Perigo:</strong> se você tirar três voltas de trunfo primeiro, o morto fica sem trunfo para o corte. Você precisa manter pelo menos um trunfo no morto até fazer o corte.</p>
<p><strong>Plano:</strong> ganhe a saída com o ♥A do morto, jogue ouro para o seu ás e ceda uma vaza de ouros. Se os defensores ganharem e jogarem trunfo (a melhor defesa), ganhe e corte imediatamente um ouro no morto. Agora tire os trunfos. Você perde uma copa e dois ouros.</p>
<div class="warn">“Tire sempre os trunfos primeiro” é um bom hábito com uma grande exceção: quando você precisa dos trunfos do morto para cortar, faça os cortes antes que os trunfos acabem.</div>

<h3>Contar é um hábito</h3>
<p>Contar leva poucos segundos, e não contar custa muito caro. Em sem trunfo, se as suas vencedoras garantidas já alcançam o objetivo, faça-as e evite riscos desnecessários. Se faltam vazas, decida de onde virão as extras <em>antes</em> de tocar numa carta, porque a ordem das jogadas e a escolha da mão que ganha a primeira vaza muitas vezes dependem disso.</p>
`,
    keyPoints: [
      'Planeje antes de jogar para a primeira vaza: conte, compare, encontre as fontes, procure os perigos e depois decida a ordem.',
      'Em sem trunfo conte as vencedoras garantidas; num contrato em naipe conte as perdedoras da mão com os trunfos longos.',
      'Expulse cedo as cartas altas dos adversários, enquanto você ainda tem paradas.',
      'Cortes na mão curta em trunfos (em geral o morto) ganham vazas; guarde os trunfos do morto até fazer os cortes.',
      'Proteja as entradas de que você vai precisar depois.',
    ],
    quiz: [
      {
        q: 'O que você deve contar primeiro num contrato em sem trunfo?',
        options: ['As suas perdedoras', 'As suas vencedoras garantidas', 'Os seus trunfos', 'Os PH dos adversários'],
        answer: 1,
        explain: 'Em sem trunfo não há cortes, então a medida natural são as vazas que você faz sem perder a mão. O que faltar diz quantas vazas precisam vir de naipes longos ou de finesses.',
      },
      {
        q: 'Qual corte ganha uma vaza?',
        options: ['Um corte na mão com os trunfos longos', 'Um corte na mão com os trunfos curtos', 'Os dois, igualmente', 'Nenhum'],
        answer: 1,
        explain: 'Os seus trunfos longos fariam vazas de qualquer forma, então cortar com eles só gasta uma vencedora. Um corte com os trunfos da mão curta (em geral os do morto) ganha uma vaza que esses trunfos pequenos não fariam de outro jeito.',
      },
      {
        q: 'Na mão de 3ST acima, por que ganhar a primeira vaza com o ♠K da mão em vez do ♠A do morto?',
        options: ['Para guardar o ♠A do morto como entrada para as copas', 'Porque o rei é a carta mais alta', 'Para segurar a parada de espadas', 'Para desbloquear o naipe de espadas'],
        answer: 0,
        explain: 'Se os defensores segurarem o ♥A até a terceira volta, a última copa do morto será vencedora, mas inalcançável, a menos que o morto ainda tenha o ♠A.',
      },
      {
        q: 'Na mão de 4♠ acima, o que dá errado se o declarante tirar três voltas de trunfo de imediato?',
        options: ['Nada, é a jogada mais segura', 'O morto fica sem trunfo para cortar o terceiro ouro', 'Os defensores podem cortar uma copa', 'O declarante perde o controle de paus'],
        answer: 1,
        explain: 'O morto começou com só três trunfos. Três voltas de trunfo gastam todos, e o declarante fica com três perdedoras de ouros, mais uma de copas: uma a mais do que pode.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'A saída',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Como escolher o naipe de saída e a carta certa dentro dele, contra sem trunfo e contra contratos em naipe.',
    body: `
<h3>Duas decisões: o naipe e a carta</h3>
<p>A saída é a única carta que você joga sem ver o morto, por isso vale a pena seguir bons hábitos. Primeiro escolha o naipe a partir do leilão e da sua mão; depois saia com a carta convencional desse naipe, para que o parceiro consiga deduzir o que você tem.</p>

<h3>Escolhendo o naipe contra sem trunfo</h3>
<ul>
<li>Se o parceiro marcou um naipe, saia nele, a menos que tenha uma alternativa muito boa.</li>
<li>Senão, saia do seu naipe mais longo e mais forte. Sem trunfo é uma corrida: os defensores tentam firmar as suas cartas longas antes que o declarante bata as vazas dele.</li>
<li>Prefira naipes não marcados. Evite os naipes que os adversários marcaram.</li>
<li>Com uma mão muito fraca e sem entradas, um naipe longo que você nunca vai conseguir bater pode não servir de nada; sair no provável naipe longo do parceiro (muitas vezes um rico que os adversários não mencionaram) pode ser melhor.</li>
</ul>

<h3>Escolhendo o naipe contra um contrato em naipe</h3>
<ul>
<li><strong>Boas saídas:</strong> a mais alta de uma sequência; o naipe do parceiro; um singleton (sobretudo quando você tem o ás de trunfo ou o parceiro pode ter uma entrada); o ás de AK.</li>
<li><strong>Saia de trunfo</strong> quando o leilão sugere que o morto vai cortar as perdedoras do declarante: o declarante mostrou dois naipes e o morto preferiu o segundo, ou o morto mostrou um naipe curto.</li>
<li><strong>Evite:</strong> sair debaixo de um ás (o declarante pode fazer vaza com um rei seco, e você talvez nunca faça o seu ás); sair debaixo de um rei contra o AQ do declarante; sair de uma honra em doubleton, como Qx.</li>
</ul>
<div class="warn">Nunca saia debaixo de um ás contra um contrato em naipe. Se tiver de jogar esse naipe, saia com o ás.</div>

<h3>Com que carta sair</h3>
<table>
<thead><tr><th>Cartas</th><th>Contra sem trunfo</th><th>Contra naipe</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (quarta melhor)</td><td>5, embora sair de um rei seja arriscado</td></tr>
<tr><td>A 10 6 3</td><td>3 (quarta melhor)</td><td>Evite; se precisar, o A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (a mais alta de nada)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (singleton)</td><td>raramente</td><td>7, muitas vezes uma boa saída</td></tr>
</tbody>
</table>
<p>As regras por trás da tabela: saia com a mais alta de uma sequência (três cartas seguidas, ou duas seguidas mais a seguinte depois de um buraco, como em KQ10); de uma sequência interna como KJ10 ou Q109, saia com a mais alta das cartas seguidas (o J ou o 10); saia com o ás de AK; saia com a mais alta de um doubleton e com a mais alta de três cartas pequenas; de uma honra com duas ou três cartas pequenas, saia baixo (terceira melhor de três, quarta melhor de quatro); e contra sem trunfo saia com a quarta melhor do seu naipe longo.</p>

<h3>Exemplos</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Você sai contra 1ST – 3ST"></div>
<p>Saia com o ♠J, a mais alta da sequência interna KJ10. Espadas são o seu naipe longo, e a saída do J também diz ao parceiro que você tem o 10, mas não a Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Você sai contra 1♠ – 2♠ – 4♠"></div>
<p>Duas escolhas seguras: o ♥A (ás de AK) e a ♦Q (a mais alta de uma sequência). O ♥A ganha a vaza e deixa você ver o morto antes de decidir o que fazer, enquanto o sinal do parceiro diz se deve continuar em copas.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Leste: saída contra 2♦"></div>
<p>Saia de trunfo. Norte tem cinco ou mais espadas e quatro ou mais ouros, e a preferência de Sul por ouros sugere que ele é curto em espadas. Com as suas espadas fortes, as perdedoras de espadas do declarante só se salvam cortadas no morto; cada volta de trunfo que você joga tira um corte do morto.</p>
<div class="tip">Depois de cada saída, pergunte-se o que ela diz ao parceiro. As saídas convencionais permitem que o outro defensor conte o naipe desde a primeira vaza.</div>
`,
    keyPoints: [
      'Escolha primeiro o naipe: o do parceiro e depois o seu naipe longo contra sem trunfo; sequências, o naipe do parceiro, singletons ou trunfo contra naipe.',
      'Saia com a mais alta de uma sequência; de KJ10 saia com o J, de Q109 com o 10; com o A de AK.',
      'Contra sem trunfo, saia com a quarta melhor do seu naipe mais longo e mais forte.',
      'Saia com a mais alta de um doubleton e de três cartas pequenas; baixo de uma honra com duas ou três cartas pequenas.',
      'Nunca saia debaixo de um ás contra naipe; saia de trunfo quando o morto provavelmente vai cortar.',
    ],
    quiz: [
      {
        q: 'Você sai contra 3ST com ♠KQ1086 como naipe longo. Com que carta sai?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 é uma sequência quebrada, então saia com o rei. É seguro e começa a firmar o naipe; a quarta melhor (o 8) poderia dar ao declarante uma vaza barata com o J.',
      },
      {
        q: 'Contra 4♥, qual destas saídas é a pior?',
        options: ['♦Q de ♦QJ10', 'O ♣2 de ♣AJ62', 'Um singleton de espadas', 'O ♣8 de ♣852'],
        answer: 1,
        explain: 'Sair debaixo de um ás contra um contrato em naipe é a saída perdedora clássica: o declarante pode ganhar uma vaza barata com o rei ou a dama, e o seu ás pode ser cortado depois.',
      },
      {
        q: 'O parceiro interveio com 1♠ e os adversários chegaram a 3ST. Você tem ♠Q85. Com que carta sai?',
        options: ['♠Q', '♠8', '♠5', 'Outro naipe'],
        answer: 2,
        explain: 'Saia no naipe do parceiro e, de uma honra com duas cartas pequenas, saia baixo. Sair com a Q poderia desperdiçá-la se o parceiro tiver AJ; guardando-a, o seu lado pode depois capturar com ela uma honra do declarante.',
      },
      {
        q: 'Você decide sair de ♦94. Com que carta?',
        options: ['♦9', '♦4', 'Tanto faz', 'Nenhuma: nunca saia de doubleton'],
        answer: 0,
        explain: 'Saia com a mais alta do doubleton. Quando você jogar o 4 depois, o parceiro vê o alto-baixo e sabe que você tinha duas cartas.',
      },
      {
        q: 'Quando a saída de trunfo é mais atraente?',
        options: ['Quando você tem o ás de trunfo', 'Quando o leilão sugere que o morto é curto no naipe lateral do declarante e vai cortar', 'Quando você tem um singleton num naipe lateral', 'Sempre que os adversários jogam num rico'],
        answer: 1,
        explain: 'Saídas de trunfo reduzem os cortes que o morto pode fazer. São melhores quando o declarante mostrou um segundo naipe, o morto deu preferência, ou se sabe que o morto é curto num naipe em que você é forte.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'A pontuação no bridge duplicado',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Como uma mão é pontuada no duplicado: valor das vazas, bônus de parcial, game e slam, vazas a mais, vazas abaixo e o efeito dos dobres.',
    body: `
<h3>Cada mão vale por si</h3>
<p>No bridge duplicado cada mão é pontuada isoladamente. Não se carregam parciais de uma mão para outra como no bridge de rubber. Cada mão indica quem está <strong>vulnerável</strong>; estar vulnerável aumenta tanto os bônus de game e slam quanto as multas por cair.</p>

<h3>Passo 1: pontos de vaza</h3>
<p>Só as vazas contratadas e cumpridas contam para os pontos de vaza:</p>
<table>
<thead><tr><th>Denominação</th><th>Por vaza contratada e cumprida</th></tr></thead>
<tbody>
<tr><td>♣ ou ♦</td><td>20</td></tr>
<tr><td>♥ ou ♠</td><td>30</td></tr>
<tr><td>ST</td><td>40 pela primeira vaza, 30 por cada uma das seguintes</td></tr>
</tbody>
</table>
<p>Contratos dobrados valem o dobro dos pontos de vaza, e redobrados, o quádruplo. Assim, 2♥ vale 60, mas 2♥ dobrado vale 120.</p>

<h3>Passo 2: bônus</h3>
<table>
<thead><tr><th>Bônus</th><th>Não vulnerável</th><th>Vulnerável</th></tr></thead>
<tbody>
<tr><td>Parcial (pontos de vaza abaixo de 100)</td><td>50</td><td>50</td></tr>
<tr><td>Game (pontos de vaza 100 ou mais)</td><td>300</td><td>500</td></tr>
<tr><td>Pequeno slam (nível 6)</td><td>mais 500</td><td>mais 750</td></tr>
<tr><td>Grand slam (nível 7)</td><td>mais 1000</td><td>mais 1500</td></tr>
<tr><td>Cumprir um contrato dobrado (“insulto”)</td><td>50</td><td>50</td></tr>
<tr><td>Cumprir um contrato redobrado</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Os bônus de slam somam-se ao bônus de game. O game exige 100 pontos de vaza: 3ST (40 + 30 + 30), 4♥ ou 4♠ (120), 5♣ ou 5♦ (100).</p>

<h3>Passo 3: vazas a mais</h3>
<p>Vazas a mais sem dobre valem o valor normal da vaza (20, 30, ou 30 em sem trunfo). Vazas a mais dobradas valem 100 cada não vulnerável e 200 vulnerável; redobradas, 200 e 400.</p>

<h3>Caindo: vazas abaixo</h3>
<table>
<thead><tr><th>Abaixo</th><th>Não vul.</th><th>Não vul. dobrado</th><th>Vul.</th><th>Vul. dobrado</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Dobrado e não vulnerável: 100 pela primeira vaza abaixo, 200 cada pela segunda e pela terceira, 300 cada a partir daí. Dobrado e vulnerável: 200 pela primeira, 300 por cada uma das seguintes. Vazas abaixo redobradas valem o dobro das dobradas.</p>

<h3>Resultados que vale a pena saber de cor</h3>
<table>
<thead><tr><th>Contrato cumprido exato</th><th>Não vul.</th><th>Vul.</th></tr></thead>
<tbody>
<tr><td>1ST</td><td>90</td><td>90</td></tr>
<tr><td>2♥ ou 2♠, 3♣ ou 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2ST</td><td>120</td><td>120</td></tr>
<tr><td>3♥ ou 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3ST</td><td>400</td><td>600</td></tr>
<tr><td>4♥ ou 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ ou 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ ou 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6ST</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7ST</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ ou 2♠ dobrado</td><td>470</td><td>670</td></tr>
<tr><td>1ST dobrado</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Exemplo: 4♠ com onze vazas, não vulnerável. Pontos de vaza 4 × 30 = 120, bônus de game 300, uma vaza a mais 30: total 450. O mesmo resultado vulnerável: 120 + 500 + 30 = 650.</p>
<p>Exemplo: 3ST dobrado, com dez vazas, vulnerável. Pontos de vaza (40 + 30 + 30) × 2 = 200, bônus de game 500, insulto 50, uma vaza a mais dobrada 200: total 950.</p>
<div class="warn">Um dobre pode transformar um parcial em game: 2♥ dobrado tem 120 pontos de vaza, então cumpri-lo vale 470 ou 670 em vez de 110. Não dobre um contrato baixo para punir, a menos que espere derrubá-lo.</div>
<div class="tip">Repare que 5♣ e 3ST valem o mesmo, mas 3ST exige duas vazas a menos. É um dos motivos por que os games em sem trunfo e em naipe rico são preferidos aos games em naipe pobre.</div>
`,
    keyPoints: [
      'Valor das vazas: pobres 20, ricos 30, sem trunfo 40 e depois 30; dobrado ×2, redobrado ×4.',
      'O game (100+ pontos de vaza) dá 300 não vulnerável ou 500 vulnerável; um parcial dá 50.',
      'Bônus de slam: pequeno 500/750, grand 1000/1500, além do bônus de game.',
      'Vazas abaixo: 50/100 sem dobre; dobradas 100-300-500-800 não vulnerável e 200-500-800-1100 vulnerável.',
      'Cumprir um contrato dobrado acrescenta 50 de insulto, e cada vaza a mais dobrada vale 100 ou 200.',
    ],
    quiz: [
      {
        q: 'Você cumpre exatamente 4♥, vulnerável. Quanto marca?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Pontos de vaza 4 × 30 = 120, mais o bônus de game vulnerável de 500: 620.',
      },
      {
        q: 'Você faz dez vazas em 3ST, não vulnerável. Quanto marca?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 pelo contrato, 300 pelo game não vulnerável e 30 pela vaza a mais: 430.',
      },
      {
        q: 'Não vulnerável, você cai três dobrado. Quanto marcam os adversários?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'Não vulnerável e dobrado: 100 pela primeira vaza abaixo e 200 cada pela segunda e pela terceira: 100 + 200 + 200 = 500.',
      },
      {
        q: 'Os adversários cumprem 2♠ dobrado, não vulneráveis. Quanto marcam?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Dobrado, os pontos de vaza são 2 × 30 × 2 = 120, o que é um game: 120 + 300 de bônus de game + 50 de insulto = 470.',
      },
      {
        q: 'Você cumpre exatamente 6♠, não vulnerável. Quanto marca?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Pontos de vaza 6 × 30 = 180, bônus de game 300 e bônus de pequeno slam 500: 980. Vulnerável seriam 180 + 500 + 750 = 1430.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'Firmando naipes longos',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Como transformar as cartas pequenas de um naipe longo em vencedoras e como guardar as entradas necessárias para batê-las.',
    body: `
<h3>De onde vêm as vazas extras</h3>
<p>Na maioria dos contratos em sem trunfo, as vazas extras de que você precisa vêm dos naipes longos. Quando os adversários não têm mais cartas de um naipe, cada carta que lhe resta nele é vencedora, até um 2. Transformar cartas pequenas em vencedoras chama-se <strong>firmar</strong> o naipe.</p>

<h3>Contando as voltas</h3>
<p>Para saber quantas vazas um naipe vai render, pense em como as cartas dos adversários provavelmente se dividem. Com A K 6 4 2 diante de 7 5 3, você tem oito cartas e os adversários cinco. Se elas se dividirem 3-2 (68% das vezes), três voltas as esgotam: você ganha com o A e o K, perde uma volta, e as duas últimas cartas são vencedoras. Quatro vazas. Se a divisão for 4-1, você precisa de quatro voltas e o naipe rende só três vazas.</p>
<table>
<thead><tr><th>Cartas que faltam</th><th>Divisão mais provável</th><th>Chance</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (3-3 é só 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Perca cedo a vaza que tem de perder</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3ST por Sul. Oeste sai com a ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conte:</strong> ♠AK, ♥A, ♦AK, ♣AK: sete vencedoras garantidas. Faltam duas, e os ouros podem fornecê-las se se dividirem 3-2.</p>
<p><strong>A armadilha:</strong> o morto não tem entrada fora de ouros. Se você jogar o ♦A, o ♦K e um terceiro ouro, os defensores ganham a terceira volta e os dois ouros longos do morto ficam isolados. Você faz sete vazas.</p>
<p><strong>A solução:</strong> ganhe com o ♠A e jogue imediatamente um ouro pequeno das duas mãos, <em>cedendo</em> a primeira volta. Ganhe o retorno dos defensores, jogue ouro para o ás e bata o rei; se o naipe se dividiu 3-2, acabou, e você ainda está no morto para bater os dois ouros longos. Nove vazas: duas de espadas, uma de copas, quatro de ouros e duas de paus.</p>
<p>Ceder não custa nada: você ia perder uma vaza de ouros de qualquer jeito. Ceder só a perde enquanto o morto ainda tem o A e o K para voltar até ele.</p>
<div class="tip">Quando um naipe tem de perder uma vaza e a mão longa tem poucas entradas, perca essa vaza na primeira volta, não na última.</div>

<h3>Desbloqueio: primeiro as cartas altas da mão curta</h3>
<p>Com ♣KQ3 diante de ♣A8642, jogue primeiro o rei e a dama e depois passe para o ás com o 3. Se você bater o ás primeiro, o K e a Q ficam sozinhos numa mão e o naipe bloqueia: você não consegue voltar às cartas longas sem uma entrada lateral. A mesma ideia vale sempre que uma das mãos for curta: bata primeiro as honras da mão curta.</p>

<h3>Expulsando as cartas altas dos adversários</h3>
<p>Alguns naipes não têm problema nenhum de cartas pequenas; só precisam que o ás dos adversários seja expulso. KQJ10 diante de cartas pequenas rende três vazas depois que o ás sai. Comece esses naipes cedo, enquanto ainda tem paradas nos outros naipes, para que os defensores não firmem primeiro o naipe longo deles.</p>

<h3>Escolhendo o naipe a firmar</h3>
<ul>
<li>Prefira o naipe que exige menos vazas perdidas e a divisão mais provável.</li>
<li>Prefira ceder a mão ao adversário que não pode prejudicá-lo (veja as lições “Deixar passar e as entradas” e “Jogada de evitação: o adversário perigoso fora da mão”).</li>
<li>Confira as entradas: um naipe que você firma mas nunca alcança não vale nada.</li>
<li>Num contrato em naipe, os naipes laterais longos se firmam do mesmo modo, muitas vezes cortando as cartas pequenas na mão longa em trunfos até que as restantes sejam boas.</li>
</ul>
<div class="warn">Não bata todas as suas vencedoras garantidas primeiro “para ver o que acontece”. Cada vencedora que você bate também firma vencedoras para os defensores e destrói as suas próprias entradas e paradas.</div>
`,
    keyPoints: [
      'As cartas pequenas viram vencedoras quando os adversários não têm mais o naipe.',
      'Conte as voltas: com cinco cartas faltando, uma divisão 3-2 (68%) exige três voltas.',
      'Ceda a volta que tem de perder enquanto a mão longa ainda tem as cartas altas como entradas.',
      'Desbloqueie batendo primeiro as honras da mão curta.',
      'Comece o seu naipe longo cedo, antes que os defensores firmem o deles.',
    ],
    quiz: [
      {
        q: 'Você tem A K 6 4 2 diante de 7 5 3. Se as cinco cartas que faltam se dividirem 3-2, quantas vazas o naipe pode render?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Três voltas esgotam uma divisão 3-2. Você ganha duas dessas voltas e perde uma; as duas cartas restantes da mão longa são vencedoras: 4 vazas.',
      },
      {
        q: 'Na mão de 3ST acima, por que ceder a primeira volta de ouros?',
        options: ['Para descobrir quem tem a dama', 'Para guardar o ♦A e o ♦K como entradas para os ouros longos', 'Para segurar as espadas', 'Porque ceder sempre ganha uma vaza extra'],
        answer: 1,
        explain: 'O morto não tem entrada lateral. Perder primeiro a vaza inevitável de ouros significa que, depois do A e do K, as cartas longas podem ser corridas sem precisar voltar ao morto.',
      },
      {
        q: 'Você tem ♣KQ3 na mão e ♣A8642 no morto, sem outra entrada no morto. Como jogar os paus?',
        options: ['Primeiro o ás, depois o rei e a dama', 'Primeiro o rei e a dama, depois um pau pequeno para o ás', 'Jogar o 2 do morto', 'Tanto faz'],
        answer: 1,
        explain: 'Bata primeiro as honras da mão curta. Depois do K e da Q você ainda passa para o ás com o 3 e, se o naipe se dividiu 3-2, bate as cartas longas. Com o ás primeiro, o K e a Q bloqueiam o naipe.',
      },
      {
        q: 'Os adversários têm seis cartas num naipe. Com que frequência elas se dividem 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'Com um número par de cartas faltando, a divisão igual é menos provável do que se pensa: 3-3 é cerca de 36%, enquanto 4-2 é cerca de 48%.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Finesses',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Como ganhar vazas com cartas que não são as mais altas jogando em direção a elas, e quando fazer a finesse em vez de jogar pela queda.',
    body: `
<h3>A ideia</h3>
<p>Uma finesse é uma tentativa de ganhar uma vaza com uma carta que não é a mais alta em jogo, jogando-a <em>depois</em> do adversário que tem a carta mais alta. Para isso, você joga <strong>em direção</strong> à carta que espera que ganhe.</p>
<p>O caso mais simples: o morto (Norte) tem ♠A Q e você (Sul) tem duas espadas pequenas. Jogue uma espada pequena da mão. Se Oeste jogar baixo, jogue a dama. Se Oeste tiver o rei, a dama ganha; se Leste o tiver, a dama perde. De qualquer forma, o ás continua vencedor. Uma finesse simples funciona metade das vezes, mas tentá-la não custa nada quando você precisa jogar o naipe de qualquer jeito.</p>

<h3>Jogando em direção a uma honra</h3>
<p>Com K 5 no morto e 6 4 na mão, jogue da mão em direção ao rei. Se Oeste tiver o ás, o rei fará uma vaza: se Oeste jogar o ás, o rei fica firme; se Oeste ceder, o rei ganha. Se, em vez disso, você jogar o rei do morto, ele nunca ganhará enquanto o ás estiver fora.</p>
<div class="warn">Jogar uma honra só é certo quando você pode deixar que ela seja coberta, ou seja, quando tem as cartas logo abaixo dela. Jogue a dama de Q J 10 diante de A 3 2, mas não de Q 3 2 na mão diante de A 5 4 no morto: se a dama for coberta, você não tem nada para promover. Em vez disso, jogue baixo do morto em direção à dama, que fará uma vaza sempre que Leste tiver o rei.</div>

<h3>Finesses repetidas e finesses duplas</h3>
<table>
<thead><tr><th>Combinação</th><th>Como jogar</th><th>Resultado</th></tr></thead>
<tbody>
<tr><td>A Q diante de 3 2</td><td>Jogue em direção ao A Q e faça a finesse da Q</td><td>2 vazas 50%</td></tr>
<tr><td>K 5 diante de 6 4</td><td>Jogue em direção ao K</td><td>1 vaza 50%</td></tr>
<tr><td>A Q 10 diante de 4 3 2</td><td>Finesse do 10, depois da Q</td><td>3 vazas 25%, pelo menos 2 vazas 75%</td></tr>
<tr><td>A J 10 diante de 4 3 2</td><td>Finesse do 10 (ou do J); se perder, repita a finesse</td><td>2 vazas 75% (só falha se o K e a Q estiverem ambos mal colocados)</td></tr>
<tr><td>A K J diante de 4 3 2</td><td>Finesse do J</td><td>3 vazas cerca de 50%</td></tr>
</tbody>
</table>
<p>Uma finesse dupla dá certo quando pelo menos uma das duas honras que faltam está bem colocada; cada honra está com Oeste ou com Leste de forma independente, então a chance de as duas estarem mal colocadas é ½ × ½ = 25%.</p>

<h3>Finesse ou queda? “Com oito, finesse; com nove, queda”</h3>
<p>Quando falta a dama e você não tem outras pistas:</p>
<ul>
<li>Com <strong>oito</strong> cartas (cinco faltando), faça a finesse. A finesse (depois de bater primeiro o ás, caso a dama seja seca) funciona cerca de 40% das vezes com A K J x x (cerca de 51% com A K J 10 x); jogar pela queda da dama funciona só cerca de 33%.</li>
<li>Com <strong>nove</strong> cartas (quatro faltando), bata o ás e o rei e torça para a dama cair. Isso funciona cerca de 53% das vezes; a finesse, cerca de 51%.</li>
</ul>
<p>A regra serve só para desempatar. A informação do leilão (quem abriu ou fez barragem tem a maior parte das cartas altas ou do comprimento) ou do começo do carteio pesa mais do que essas pequenas diferenças.</p>

<h3>Uma finesse na prática</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ por Sul. Oeste sai com o ♥J."></div>
<p>Você tem de perder o ♦A, então o slam depende de não perder vaza de trunfo. Falta o ♠K, e com nove trunfos você faz a finesse: só consegue capturá-lo se Leste o tiver, porque Leste joga antes do seu A Q J 10 (ou se Oeste tiver o rei seco).</p>
<p>Ganhe a saída com a ♥Q do morto, para estar na mão certa, e jogue um trunfo pequeno. Se Leste jogar baixo, ponha o 10 (ou o J). Se ganhar, talvez você precise repetir a finesse, então volte ao morto com o ♣K e jogue outro trunfo. Planejar as entradas para uma finesse repetida faz parte do trabalho: o morto tem duas entradas rápidas (a ♥Q e o ♣K), e você deve usá-las para o naipe de trunfo em vez de desperdiçá-las.</p>
<div class="tip">A regra “com oito, finesse; com nove, queda” vale para a dama. Quando falta o rei, você ainda faz a finesse com nove ou dez cartas; só com onze cartas jogar pela queda é um pouco melhor (52%).</div>
`,
    keyPoints: [
      'Jogue em direção à carta que você espera que ganhe; uma finesse simples é uma chance de 50%.',
      'Só jogue uma honra para fazer finesse quando tiver as cartas logo abaixo dela.',
      'Uma finesse dupla (A Q 10, A J 10) ganha pelo menos uma vaza extra 75% das vezes.',
      'Faltando a dama: finesse com oito cartas, queda com nove (“com oito, finesse; com nove, queda”).',
      'Planeje as entradas para finesses repetidas.',
    ],
    quiz: [
      {
        q: 'O morto tem ♥A Q e você tem ♥7 4. Como jogar as copas para tentar duas vazas?',
        options: ['Bater o ás e depois jogar a dama', 'Jogar a dama do morto', 'Jogar uma copa pequena da mão e pôr a dama se Oeste jogar baixo', 'Bater o ás e torcer para o rei cair'],
        answer: 2,
        explain: 'A dama só pode ganhar se for jogada depois do rei. Jogue da mão para que Oeste tenha de jogar antes do morto; se Oeste tiver o rei, a dama ganha.',
      },
      {
        q: 'Com A Q 10 no morto e 4 3 2 na mão, com que frequência a finesse dupla lhe dá pelo menos duas vazas?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'Você faz pelo menos duas vazas, a menos que o K e o J estejam ambos com Leste. Cada um está com Oeste metade das vezes, então os dois só estão mal colocados ¼ das vezes.',
      },
      {
        q: 'Você tem A K J 5 2 diante de 6 4 3 (oito cartas) e falta a dama. Qual é a melhor jogada, sem pistas do leilão?',
        options: ['Bater o ás e o rei', 'Bater o ás e depois fazer a finesse do valete', 'Jogar o valete', 'Ceder uma volta'],
        answer: 1,
        explain: 'Com oito cartas, a finesse (cerca de 40%, batendo antes o ás caso a dama seja seca) é melhor que a queda (cerca de 33%).',
      },
      {
        q: 'Você tem A K J 5 4 diante de 7 6 3 2 (nove cartas) e falta a dama. Qual é a melhor jogada, sem pistas?',
        options: ['Bater o ás e o rei', 'Fazer a finesse do valete de imediato', 'Jogar o valete', 'Ceder uma volta'],
        answer: 0,
        explain: '“Com nove, queda”: com só quatro cartas faltando, a dama cai sob o ás e o rei cerca de 53% das vezes, um pouco mais do que a finesse funciona (cerca de 51%).',
      },
      {
        q: 'O morto tem ♦K 7 3 e você tem ♦8 4 2. Como se dar a melhor chance de fazer uma vaza?',
        options: ['Jogar o rei do morto', 'Jogar baixo da mão em direção ao rei', 'Jogar baixo do morto', 'Esperar que os defensores joguem o naipe'],
        answer: 1,
        explain: 'Jogar em direção ao rei ganha uma vaza sempre que Oeste tiver o ás. Jogar o rei perde para o ás, esteja onde estiver.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Segunda mão baixa, terceira mão alta',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'As regras básicas para o defensor que joga em segundo e em terceiro numa vaza, quando quebrá-las e quando cobrir honra com honra.',
    body: `
<h3>Segunda mão baixa</h3>
<p>Quando o declarante joga uma carta pequena em direção ao morto (ou do morto em direção à mão do declarante), o defensor que joga em segundo deve em geral jogar <strong>baixo</strong>. O parceiro joga por último na vaza e muitas vezes pode ganhá-la barato, enquanto a sua carta alta fica guardada para capturar depois uma honra do declarante.</p>
<p>Exemplo: o morto tem ♠K J 5 e o declarante joga da mão uma espada pequena em direção a ele. Você está em segundo com ♠A 7 3. Se jogar o ás, captura só cartas pequenas, e o K e o J do morto ficam ambos para depois. Se jogar baixo, o declarante precisa adivinhar: se ele jogar o valete e o parceiro tiver a dama, o seu lado faz duas vazas; se jogar o rei, o seu ás ainda faz vaza depois.</p>

<h3>Quando a segunda mão deve jogar alto</h3>
<ul>
<li><strong>Para bater a vaza que derruba o contrato</strong>, ou uma vaza que você não pode perder, por exemplo quando o declarante está prestes a descartar as perdedoras dele.</li>
<li><strong>Quando uma honra é jogada</strong>: aí a questão é se deve cobrir (veja abaixo).</li>
<li><strong>Para dividir honras em sequência.</strong> Suponha que o morto tem K 10 3, o declarante tem A 6 2 e você está antes do morto com Q J 4. Se o declarante jogar baixo e você também, ele faz a finesse do 10, depois bate o A e o K, e a sua Q e o seu J caem: nenhuma vaza para você. Jogue o J na primeira volta (e a Q quando o declarante jogar de novo em direção ao morto) e você terá com certeza uma vaza.</li>
</ul>

<h3>Terceira mão alta</h3>
<p>Quando o parceiro sai com uma carta pequena e o morto joga baixo, jogue a sua carta <strong>mais alta</strong> para impedir que o declarante ganhe a vaza barato, ou para expulsar a carta alta do declarante e promover a do parceiro.</p>
<ul>
<li>Com cartas altas em sequência, jogue a <strong>menor</strong> delas: de K Q 5 jogue a Q, de Q J 4 jogue o J. Assim o parceiro consegue saber onde está a carta mais alta.</li>
<li>Jogue só tão alto quanto for necessário. Se o morto jogou o 9 e você tem Q 10 2, o 10 basta.</li>
<li><strong>Finesse contra o morto.</strong> Se o morto tem K 7 3 e joga baixo, e você tem A J 4, jogue o J. O rei do morto está preso sob o seu ás: se o declarante tiver a dama, ganha esta vaza, mas o seu ás continua sobre o K; se o parceiro tiver a dama, o J ganha.</li>
</ul>

<h3>Cobrir honra com honra</h3>
<p>Quando uma honra é jogada e você tem uma mais alta, cobrir obriga o declarante a usar duas cartas altas para capturar uma sua. Isso pode promover uma carta mais baixa, como um 10 ou um 9, na sua mão ou na do parceiro.</p>
<table>
<thead><tr><th>Posição</th><th>Ouros</th></tr></thead>
<tbody>
<tr><td>Norte (morto)</td><td>J 7 3</td></tr>
<tr><td>Oeste (parceiro)</td><td>10 2</td></tr>
<tr><td>Leste (você)</td><td>Q 9 4</td></tr>
<tr><td>Sul (declarante)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>O declarante joga o ♦J do morto. Se você jogar baixo, o J ganha, e o A e o K derrubam depois a sua dama: o declarante não perde vaza. Se você cobrir com a Q, o declarante ganha com o A e bate o K, derrubando o 10 do parceiro, mas agora o seu 9 é mais alto que qualquer ouro que reste ao declarante. Cobrir criou uma vaza do nada.</p>

<h4>Quando não cobrir</h4>
<ul>
<li>Quando a honra jogada faz parte de honras em sequência (o morto tem Q J 10 4 e joga a Q): espere e cubra a última delas, se for o caso.</li>
<li>Quando claramente não há nada a promover, por exemplo no naipe de trunfo depois que o declarante mostrou um naipe longo e forte.</li>
<li>Quando a honra sai da mão do declarante e cobrir só o ajudaria a capturar o naipe: pense no que o declarante tem antes de reagir.</li>
</ul>
<div class="tip">Cobrir ou não é uma questão de promoção. Pergunte-se: “Se eu cobrir, qual carta nossa pode virar vencedora?” Se a resposta for nenhuma, não cubra.</div>
<div class="warn">Não hesite para depois jogar baixo: a pausa diz ao declarante que você tem a honra que falta. Pense nessas situações assim que o morto aparecer, para estar pronto quando elas surgirem.</div>
`,
    keyPoints: [
      'Segunda mão baixa: guarde as cartas altas para capturar as honras do declarante; o parceiro joga por último.',
      'Quebre a regra para fazer a vaza que derruba o contrato ou para dividir honras em sequência.',
      'Terceira mão alta, mas a menor de cartas em sequência e só tão alto quanto necessário.',
      'Faça finesse contra a honra do morto quando estiver depois dela.',
      'Cubra honra com honra quando isso puder promover uma carta do seu lado; não cubra a primeira de honras em sequência.',
    ],
    quiz: [
      {
        q: 'O declarante joga uma carta baixa da mão em direção ao K J 5 do morto. Você tem A 7 3 em segundo. O que costuma jogar?',
        options: ['O ás', 'Uma carta baixa', 'O 7, para sinalizar', 'Nunca faz diferença'],
        answer: 1,
        explain: 'Segunda mão baixa. Tomar com o ás captura só cartas pequenas e deixa vivos o K e o J do morto. Jogar baixo obriga o declarante a adivinhar, e o parceiro pode ter a dama.',
      },
      {
        q: 'O parceiro sai com uma carta baixa contra 3ST. O morto tem 7 5 2 e joga baixo. Você tem K Q 8. Que carta joga?',
        options: ['K', 'Q', '8', 'Qualquer das honras'],
        answer: 1,
        explain: 'Terceira mão alta, a menor das cartas em sequência: a Q. Se ela expulsar o ás, o parceiro sabe que você também tem o K.',
      },
      {
        q: 'O parceiro sai baixo. O morto tem K 7 3 e joga baixo. Você tem A J 4. Que carta joga?',
        options: ['A', 'J', '4', 'O K está no morto, então tanto faz'],
        answer: 1,
        explain: 'Finesse contra o morto: o J ganha se o parceiro tiver a Q, e o seu ás fica sobre o rei do morto. Jogar o ás firmaria o rei do morto.',
      },
      {
        q: 'O morto tem ♠Q J 10 4 e joga a Q. Você tem ♠K 6 3 depois do morto. Deve cobrir?',
        options: ['Sim, sempre cubra uma honra', 'Não, não cubra a primeira de honras em sequência', 'Só se o parceiro tiver sinalizado', 'Sim, com o 6'],
        answer: 1,
        explain: 'Cobrir a Q deixa o declarante ganhar com o ás, e aí o J e o 10 ficam bons. Espere: se o declarante continuar jogando honras, cubra a última, que é quando cobrir pode promover alguma coisa.',
      },
      {
        q: 'Por que cobrir honra com honra?',
        options: ['Para ganhar a vaza', 'Para obrigar o declarante a usar duas honras por uma sua, promovendo uma carta mais baixa do seu lado', 'Para mostrar força ao parceiro', 'Para obrigar o declarante a cortar'],
        answer: 1,
        explain: 'Cobrir raramente ganha a própria vaza. O valor está na promoção: depois que duas honras do declarante saem, uma carta mais baixa, como um 10 ou um 9, pode virar vencedora.',
      },
    ],
  },
];
