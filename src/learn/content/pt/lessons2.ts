// Lessons, part 2.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'A remarcação do respondedor e a escolha do game',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Como o respondedor usa a segunda voz para parar, convidar ou forçar, e como escolher entre um rico, 3ST e cinco num naipe pobre.',
    body: `
<h3>O respondedor vira o capitão</h3>
<p>Depois da remarcação do abridor, você em geral conhece a força dele com margem de três ou quatro pontos e bastante coisa sobre a distribuição. A sua segunda voz deve levar a dupla ao contrato certo ou fazer mais uma pergunta. Pense em três faixas:</p>
<table>
<thead><tr><th>Respondedor</th><th>Objetivo</th><th>Vozes típicas</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>Parar no melhor parcial</td><td>Passar; preferência para o primeiro naipe do abridor; remarcar um naipe de seis cartas; 1ST</td></tr>
<tr><td>11-12</td><td>Convidar a game</td><td>2ST; apoiar o naipe do abridor no nível 3; remarcar em salto um bom naipe de seis cartas</td></tr>
<tr><td>13+</td><td>Garantir o game</td><td>Marcar o game direto, ou marcar um naipe novo (forcing) para achar o game certo</td></tr>
</tbody>
</table>
<p>Duas vozes artificiais ajudam o respondedor a perguntar em vez de adivinhar: o <strong>novo menor forcing</strong>, depois da remarcação de 1ST do abridor, e o <strong>quarto naipe forcing</strong>, quando três naipes já foram marcados. Elas têm uma lição própria.</p>

<h3>Exemplos</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Respondedor: marque 2ST"></div>
<p>O abridor mostrou 12-14 balanceada. Com 12 PH o total é 24-26: convide com 2ST. O abridor passa com 12 e marca 3ST com 14 (com 13, decide pelo critério dele). Com 13+ você mesmo marcaria 3ST; com 10 ou menos, passaria.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Respondedor: marque 3♥"></div>
<p>O abridor tem um mínimo com seis copas, então Q3 é apoio suficiente para um fit de oito cartas. 12 pontos diante de 12-15: convide com 3♥. O abridor marca 4♥ no topo da faixa.</p>

<h4>Preferência</h4>
<p>Quando o abridor mostra dois naipes e você não tem fit em nenhum, escolha entre eles da forma mais barata. O primeiro naipe do abridor é pelo menos tão longo quanto o segundo, então, com o mesmo comprimento, volte ao primeiro. Depois de 1♥ – 1♠ – 2♣, com ♥Q43 e ♣97 marque 2♥: não é força extra, só um naipe de trunfo melhor. Com ♥4 e ♣J973, passe sobre 2♣.</p>

<h3>Escolhendo o game</h3>
<ol>
<li><strong>Fit de oito cartas num rico? Jogue no rico.</strong> Um fit 4-4 ou 5-3 costuma render pelo menos uma vaza a mais que sem trunfo, porque a mão curta em trunfos pode cortar. Mesmo com duas mãos balanceadas, 4♥ ou 4♠ é normalmente o certo.</li>
<li><strong>Sem fit num rico? Prefira 3ST</strong>, desde que todos os naipes não marcados estejam parados. 3ST exige nove vazas; cinco num naipe pobre exige onze para o mesmo resultado (400 ou 600).</li>
<li><strong>Cinco num naipe pobre</strong> é para mãos com um grande fit no pobre e um naipe que os adversários podem correr em sem trunfo, ou com naipes curtos que geram vazas de corte.</li>
</ol>
<table>
<thead><tr><th>Contrato</th><th>Pontos necessários juntos (aproximado)</th></tr></thead>
<tbody>
<tr><td>3ST, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Pequeno slam</td><td>33</td></tr>
<tr><td>Grand slam</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2ST – 3ST. Sul é o declarante."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Norte–Sul têm 27 PH e um fit de nove cartas em ouros, mas nenhum fit num rico, e todos os naipes estão parados. Em 3ST você tem oito vazas firmes: duas de espadas, uma de copas e cinco de ouros. A nona vem de paus depois de expulsar o ♣A (e talvez a ♣Q). Em 5♦ você precisa de onze vazas e tem uma perdedora de espadas, pelo menos uma de copas e pelo menos uma de paus. 3ST é de longe o melhor game.</p>

<h3>Os limites dos “25 pontos para game”</h3>
<ul>
<li><strong>Fit:</strong> com um fit de nove ou dez cartas e naipes curtos, o game pode sair com 22-23 pontos. Com um misfit, 26 podem não bastar.</li>
<li><strong>Duplicação:</strong> honras diante de um naipe curto são desperdiçadas. ♠KQJ diante de um singleton de espadas contribui pouco num contrato em naipe.</li>
<li><strong>Distribuições planas:</strong> duas mãos 4-3-3-3 rendem menos vazas; desconte um ponto.</li>
<li><strong>Fontes de vazas:</strong> um naipe longo e sólido compensa pontos que faltam. Seis ouros correndo podem fazer 3ST com 23 PH.</li>
<li><strong>Paradas:</strong> 3ST com um naipe totalmente aberto cai, não importa quantos pontos haja.</li>
</ul>
<div class="tip">Com 13+ pontos diante de uma abertura, nunca faça uma voz em que o parceiro possa passar abaixo do game. Se não tiver certeza de onde jogar, marque um naipe novo: naipe novo do respondedor é forcing.</div>
<div class="warn">Não continue marcando num misfit sem esperança. Se o parceiro repete o naipe dele e você repete o seu, o contrato certo costuma ser o mais baixo disponível.</div>
`,
    keyPoints: [
      'Segunda voz do respondedor: 6-10 para, 11-12 convida, 13+ garante o game.',
      'Com o mesmo comprimento, dê preferência ao primeiro naipe do abridor.',
      'Um fit de oito cartas num rico costuma pertencer a quatro no rico.',
      'Sem fit num rico, prefira 3ST a cinco num pobre quando todos os naipes estão parados.',
      'Cerca de 25 pontos para 3ST ou quatro num rico, 29 para cinco num pobre, 33 para pequeno slam; ajuste pelo fit e pela distribuição.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1ST – ? Você tem ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 PH).',
        options: ['Passo', '2ST', '3ST', '2♠'],
        answer: 1,
        explain: 'O abridor tem 12-14, então vocês têm 24-26 juntos: convide com 2ST. O abridor marca 3ST com máximo.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Você tem ♠KJ753 ♥Q43 ♦J86 ♣97 (7 PH).',
        options: ['Passo', '2♥', '2♠', '2ST'],
        answer: 1,
        explain: 'O abridor tem pelo menos cinco copas, então vocês têm um fit de oito cartas. 2♥ é preferência simples e não mostra força extra.',
      },
      {
        q: 'Vocês têm 26 PH juntos, um fit 4-4 em espadas e duas mãos balanceadas. Qual game?',
        options: ['3ST', '4♠', '5♣', 'Tanto faz'],
        answer: 1,
        explain: 'O fit 4-4 costuma render uma vaza extra: uma mão pode cortar enquanto os trunfos da outra ainda tiram os trunfos dos adversários. Jogue 4♠.',
      },
      {
        q: 'Vocês têm 27 PH, nenhum fit num rico, um fit de nove cartas em ouros e todos os naipes parados. Qual game?',
        options: ['5♦', '3ST', '4♦', '6♦'],
        answer: 1,
        explain: '3ST exige nove vazas, 5♦ onze, e os dois valem o mesmo. Com todos os naipes parados, 3ST é o game de melhor porcentagem.',
      },
      {
        q: 'Por que o game pode cair com 26 PH?',
        options: ['Não pode: 26 PH sempre fazem game', 'Por causa de misfits, valores duplicados ou um naipe sem parada', 'Porque 26 PH é mão de slam', 'Só se os trunfos se dividirem 4-1'],
        answer: 1,
        explain: 'Os pontos estimam o poder de fazer vazas, mas as vazas também dependem do fit, de as honras estarem trabalhando e das paradas em sem trunfo.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'As aberturas fortes de 2♣ e 2ST',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Quando abrir 2♣ ou 2ST, como o respondedor responde e como se encaixam as faixas das mãos balanceadas fortes.',
    body: `
<h3>2♣: a grande</h3>
<p>2♣ é artificial e não diz nada sobre paus. Mostra ou <strong>22+ PH</strong> ou cerca de <strong>nove vazas de jogo</strong> (com um naipe rico; com um pobre, em geral você quer dez, já que o game no pobre exige onze). É a única abertura forcing: o parceiro tem de responder mesmo sem nada.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Abra 2♣: nove vazas de jogo"></div>
<p>Só 20 PH, mas conte as vazas: sete de espadas e duas de copas, com chances de uma décima. Abrir 1♠ arrisca um passo do parceiro com uma mão como ♠83 ♥J852 ♦Q964 ♣Q83 (5 PH), quando 4♠ é um excelente contrato. Abra 2♣ e remarque 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Abra 2♣ e remarque 2ST"></div>
<p>23 PH balanceada: 2♣ seguido de 2ST mostra 22-24.</p>

<h3>Respondendo a 2♣</h3>
<table>
<thead><tr><th>Resposta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>Espera: a resposta normal com a maioria das mãos, fracas ou fortes</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positiva: um bom naipe de cinco cartas (duas das três honras mais altas ou três das cinco mais altas) e 8+ PH</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="O parceiro abriu 2♣: marque 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="O parceiro abriu 2♣: marque 2♥"></div>
<p>A resposta de 2♦ mantém o leilão baixo para que a mão forte possa se descrever. Mesmo com uma mão razoável, se não tiver um bom naipe, marque 2♦ e mostre os seus valores depois.</p>

<h3>A remarcação do abridor</h3>
<ul>
<li><strong>2ST</strong> = 22-24 balanceada. É a única remarcação em que o respondedor pode passar, com uma mão realmente sem valor. O respondedor usa os mesmos métodos que sobre uma abertura de 2ST: 3♣ Stayman, 3♦ e 3♥ transfers, 3ST para jogar.</li>
<li><strong>3ST</strong> = 25-27 balanceada.</li>
<li><strong>Um naipe</strong> = natural, pelo menos cinco cartas, e forcing: o respondedor tem de marcar de novo. Apoie com apoio; marque um bom naipe próprio; sem nada útil, faça a voz mais barata.</li>
</ul>

<h3>A abertura de 2ST</h3>
<p>2ST mostra <strong>20-21 PH, balanceada</strong>. Não é forcing, mas o respondedor deve marcar o game com apenas 4 pontos.</p>
<table>
<thead><tr><th>Resposta a 2ST</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Passo</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer para copas / espadas</td></tr>
<tr><td>3ST</td><td>4-10, para jogar</td></tr>
<tr><td>4ST</td><td>11-12, quantitativo: o abridor marca 6ST com máximo</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Abra 2ST: 20 PH, balanceada"></div>
<p>Diante dela, um respondedor com ♠J10642 ♥Q85 ♦73 ♣962 faz o transfer com 3♥ e passa sobre 3♠: 23-24 juntos não bastam para game, mas cinco trunfos tornam 3♠ mais seguro que 2ST.</p>

<h3>A escada das mãos balanceadas</h3>
<table>
<thead><tr><th>PH</th><th>Sequência</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>1 em naipe, depois 1ST</td></tr>
<tr><td>15-17</td><td>1ST</td></tr>
<tr><td>18-19</td><td>1 em naipe, depois salto a 2ST</td></tr>
<tr><td>20-21</td><td>2ST</td></tr>
<tr><td>22-24</td><td>2♣, depois 2ST</td></tr>
<tr><td>25-27</td><td>2♣, depois 3ST</td></tr>
</tbody>
</table>
<div class="tip">Diante de 2♣, pense em vazas e controles, não só em pontos. Um ás ou um rei vale muito mais que damas e valetes espalhados.</div>
<div class="warn">Não abra 2♣ só porque tem 20 PH. Com 20-21 balanceada abra 2ST; com 19-21 e uma mão desbalanceada comum, abra 1 em naipe. O parceiro responde com apenas 6 pontos, e você pode saltar ou fazer um reverse para mostrar a sua força.</div>
`,
    keyPoints: [
      '2♣ = 22+ PH ou cerca de nove vazas de jogo; artificial e forcing.',
      'Responda 2♦ (espera) com a maioria das mãos; a positiva exige um bom naipe de cinco cartas (duas das três honras mais altas ou três das cinco mais altas) e 8+ PH.',
      '2♣ – 2♦ – 2ST = 22-24 balanceada e pode ser passado; qualquer remarcação em naipe do abridor é forcing.',
      'Abertura de 2ST = 20-21 balanceada; 3♣ Stayman, 3♦/3♥ transfers, 3ST com 4-10, 4ST com 11-12.',
      'Escada das balanceadas: 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'Você tem ♠AKQJ975 ♥AK4 ♦8 ♣K2. O que abre?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Com nove vazas de jogo você quer chegar ao game mesmo que o parceiro tenha muito pouco, então abra o 2♣ forcing e marque espadas em seguida. 1♠ poderia ficar passado; 2♠ seria um dois fraco.',
      },
      {
        q: 'O parceiro abre 2♣. Você tem ♠Q74 ♥J863 ♦952 ♣K84 (6 PH). O que marca?',
        options: ['Passo', '2♦', '2♥', '2ST'],
        answer: 1,
        explain: '2♣ é forcing, então você não pode passar. Sem um bom naipe de cinco cartas, marque o 2♦ de espera e deixe o abridor descrever a mão.',
      },
      {
        q: 'O parceiro abre 2♣. Você tem ♠52 ♥KQJ84 ♦A73 ♣964 (10 PH). O que marca?',
        options: ['2♦', '2♥', '3♥', '2ST'],
        answer: 1,
        explain: 'Um bom naipe de cinco cartas (KQJ) com 8+ PH é uma resposta positiva: 2♥. Diz ao abridor desde já que o slam é provável.',
      },
      {
        q: 'O que mostra 2♣ – 2♦ – 2ST?',
        options: ['20-21 balanceada', '22-24 balanceada', '25-27 balanceada', 'Um naipe de paus'],
        answer: 1,
        explain: 'Com 20-21 você abre 2ST direto. Passar primeiro por 2♣ e depois marcar 2ST mostra 22-24; 2♣ e depois 3ST mostra 25-27.',
      },
      {
        q: 'O parceiro abre 2ST. Você tem uma mão balanceada com 4 PH. O que marca?',
        options: ['Passo', '3ST', '3♣', '4ST'],
        answer: 1,
        explain: '20-21 mais 4 dá 24-25, o bastante para tentar o game. Sobre 2ST, 3ST cobre 4-10 pontos.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Dois fracos e barragens',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Como abrir com um naipe longo e mão fraca para tirar espaço de leilão, e como o parceiro responde.',
    body: `
<h3>Por que fazer barragem?</h3>
<p>Quando você tem um naipe longo e pouco mais, os adversários provavelmente têm a maior parte da força. Abrir num nível alto tira o espaço de leilão de que eles precisam para achar o melhor contrato. Ao mesmo tempo, descreve a sua mão com precisão, e o parceiro sabe exatamente o que fazer.</p>

<h3>Os requisitos</h3>
<table>
<thead><tr><th>Abertura</th><th>Naipe</th><th>PH</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (dois fraco)</td><td>Seis cartas</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Sete cartas</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Oito cartas (ou sete com distribuição extra)</td><td>5-10</td></tr>
</tbody>
</table>
<p>A maior parte da sua força deve estar no naipe longo. Um bom guia para o dois fraco é ter duas das três honras mais altas ou três das cinco mais altas.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Abra 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Abra 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Abra 4♠"></div>
<p>2♣ nunca é um dois fraco: é a abertura forte e artificial.</p>

<h3>Até que altura? A Regra do 2-3-4</h3>
<p>Conte as suas vazas de jogo: as vazas que você espera fazer com o seu naipe como trunfo se o parceiro não tiver nada útil. KQJ9852 vale cerca de seis vazas. Um guia tradicional diz que você deve estar a no máximo:</p>
<ul>
<li><strong>duas vazas</strong> do contrato quando vulnerável contra não vulneráveis (desfavorável),</li>
<li><strong>três vazas</strong> com vulnerabilidade igual,</li>
<li><strong>quatro vazas</strong> quando não vulnerável contra vulneráveis (favorável).</li>
</ul>
<p>A ideia é que, mesmo dobrado, a multa não passe muito do valor do game que os adversários provavelmente fariam. Com seis vazas de jogo, 3♣ (nove vazas) está bem com vulnerabilidade igual. Os jogadores modernos fazem barragens mais agressivas com vulnerabilidade favorável e mais cuidadosas com a desfavorável.</p>

<h3>Quando não fazer barragem</h3>
<ul>
<li>Em quarta posição, a barragem não faz sentido: com mão fraca, simplesmente passe e a mão não é jogada. Uma abertura nos níveis 2 ou 3 em quarta posição mostra uma mão razoável que espera cumprir o contrato.</li>
<li>Com uma boa mão (11+ PH e um belo naipe), abra no nível 1.</li>
<li>Em primeira ou segunda posição, cuidado com um rico de quatro cartas ao lado ou com dois ases fora do seu naipe: o parceiro pode ter uma boa mão e vocês podem perder um contrato melhor.</li>
</ul>

<h3>Respondendo a um dois fraco</h3>
<table>
<thead><tr><th>Resposta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Apoio (2♥ – 3♥)</td><td>De barragem, não é convite: estende a barragem com apoio de três cartas</td></tr>
<tr><td>Game no naipe</td><td>Para jogar: para cumprir ou como nova barragem</td></tr>
<tr><td>2ST</td><td>Forcing: pede ao abridor que se descreva</td></tr>
<tr><td>Naipe novo</td><td>Natural, cinco ou mais cartas, forcing</td></tr>
<tr><td>3ST</td><td>Para jogar</td></tr>
</tbody>
</table>
<p><strong>As respostas do abridor a 2ST:</strong> com mínimo (cerca de 5-7), remarque três no naipe; com máximo (cerca de 8-10), marque um naipe em que tenha um ás ou rei lateral (uma “honra lateral”); com um naipe sólido (AKQxxx), marque 3ST.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Norte abre 2♠; Sul pergunta com 2ST."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Norte tem 8 PH, um máximo, e mostra o ♥K. Sul, com 17 PH, sabe agora que as espadas vão correr com o ♠A e que as copas estão bem protegidas, e marca o game. Se Norte tivesse mostrado mínimo remarcando 3♠, Sul teria passado.</p>

<h3>Respondendo a uma barragem no nível 3</h3>
<p>Conte vazas, não pontos. O naipe do parceiro vai render cerca de seis vazas; o game precisa de três ou quatro suas, em geral ases e reis. Com apoio e mão fraca, apoie para levar a barragem ainda mais alto. Lembre-se de que o parceiro tem pouca defesa: não dobre os adversários para punir contando com a barragem dele.</p>
<div class="tip">Diante da barragem do parceiro, os seus ases e reis valem ouro e as suas damas e valetes valem muito pouco, a menos que estejam no naipe do parceiro.</div>
<div class="warn">Apoiar um dois fraco não é tentativa de game. Se você tem uma boa mão e quer saber mais, marque 2ST.</div>
`,
    keyPoints: [
      'Dois fraco: seis cartas, 5-10 PH, a maior parte da força no naipe; 2♣ nunca é fraco.',
      'Barragem no nível 3: sete cartas, 5-10; quatro num rico: oito cartas (ou sete com distribuição).',
      'Regra do 2-3-4: a duas vazas com vulnerabilidade desfavorável, três com igual, quatro com favorável.',
      'Não faça barragem em quarta posição.',
      'Apoios a barragens são de barragem; 2ST sobre dois fraco pede a honra lateral (com mínimo, remarque o naipe).',
    ],
    quiz: [
      {
        q: 'Primeira posição, vulnerabilidade igual. Você tem ♠84 ♥KQ10973 ♦J52 ♣63. O que abre?',
        options: ['Passo', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Seis boas copas e 6 PH são um dois fraco de manual. Com sete copas você pensaria em 3♥; com 12+ PH, abriria 1♥.',
      },
      {
        q: 'O parceiro abre 2♠ e o próximo jogador passa. Você tem ♠Q73 ♥K842 ♦A65 ♣J94 (10 PH). O que marca?',
        options: ['Passo', '3♠', '2ST', '4♠'],
        answer: 1,
        explain: 'O game é improvável diante de 5-10, mas com apoio de três cartas o seu lado tem nove trunfos e os adversários têm um fit em algum lugar. Apoie para 3♠ para dificultar a entrada deles.',
      },
      {
        q: 'Você abriu 2♥ com ♠K5 ♥AQ10984 ♦862 ♣73 (9 PH). O parceiro marca 2ST. O que você remarca?',
        options: ['3♥', '3♠', '3ST', '4♥'],
        answer: 1,
        explain: '9 PH é máximo, então mostre a sua honra lateral, o ♠K, com 3♠. 3♥ mostraria mínimo e 3ST um naipe sólido.',
      },
      {
        q: 'Pela Regra do 2-3-4, a quantas vazas do contrato você pode estar com vulnerabilidade favorável?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'Com vulnerabilidade favorável, quatro abaixo dobrado custam 800, não muito acima dos 620 que vale o game vulnerável deles, e adversários que também procuram game ou slam muitas vezes nem chegam a dobrar.',
      },
      {
        q: 'O parceiro abre 2♥. O que mostra o seu apoio para 3♥?',
        options: ['Um convite a game', 'Um apoio de barragem, não é convite', 'Um apoio forcing', 'Uma mão sem copas'],
        answer: 1,
        explain: 'Apoiar uma barragem continua a barragem. Se você quer que o abridor descreva a mão, marque 2ST, a pergunta forcing.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Intervenções',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quando intervir depois que os adversários abrem, o que mostram as diferentes intervenções e como o parceiro responde.',
    body: `
<h3>Por que intervir?</h3>
<p>Depois que um adversário abre, marcar um naipe (uma <strong>intervenção</strong>) cumpre três funções: disputa o parcial, tira espaço de leilão dos adversários e diz ao parceiro de onde sair se eles ganharem o leilão. Por causa da última função, <strong>a qualidade do naipe importa mais que os pontos</strong>.</p>

<h3>O que as intervenções mostram</h3>
<table>
<thead><tr><th>Intervenção</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Naipe no nível 1 (1♦ – 1♠)</td><td>8-16 PH, um bom naipe de cinco ou mais cartas</td></tr>
<tr><td>Naipe no nível 2 (1♠ – 2♦)</td><td>10-16 PH, um bom naipe de cinco cartas (em geral seis)</td></tr>
<tr><td>Intervenção fraca em salto (1♣ – 2♠)</td><td>Um naipe de seis cartas, 6-10 PH, como um dois fraco</td></tr>
<tr><td>1ST</td><td>15-18 PH, balanceada, com parada no naipe do abridor</td></tr>
</tbody>
</table>
<p>Com 17+ e uma mão forte demais para uma intervenção simples, comece com um dobre informativo e marque o seu naipe depois.</p>

<h3>Exemplos (o adversário à direita abriu)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="O adversário à direita abre 1♦: marque 1♠"></div>
<p>10 PH com um naipe forte em que você gostaria que o parceiro saísse.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="O adversário à direita abre 1♠: marque 2♦"></div>
<p>12 PH e um bom naipe de seis cartas: sólido o bastante para o nível 2.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="O adversário à direita abre 1♣: marque 1ST"></div>
<p>17 PH, balanceada, com os paus bem parados.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="O adversário à direita abre 1♥: passe"></div>
<p>11 PH, mas as espadas são fracas e os valores estão espalhados. Uma intervenção pediria saída de espadas e poderia ser dobrada com uma multa grande. Passe.</p>

<h3>Vulnerabilidade e nível</h3>
<p>O risco de uma intervenção é um dobre punitivo. No nível 1 esse risco é pequeno; no nível 2, sobretudo vulnerável, você precisa de um bom naipe que faça vazas mesmo que o resto da mão do parceiro seja fraco. Uma intervenção no nível 2 com naipe de cinco cartas deve estar perto de uma abertura, com um naipe forte.</p>

<h3>Respondendo à intervenção do parceiro</h3>
<table>
<thead><tr><th>Voz do parceiro do interventor</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Apoio simples</td><td>6-9 com três ou mais trunfos</td></tr>
<tr><td>Cue-bid no naipe do abridor</td><td>Apoio limite ou melhor: 10+ com três ou mais trunfos</td></tr>
<tr><td>Apoio em salto</td><td>De barragem: fraco, com quatro ou mais trunfos</td></tr>
<tr><td>Naipe novo</td><td>Natural, um bom naipe de cinco ou mais cartas, não forcing</td></tr>
<tr><td>1ST</td><td>Cerca de 8-11 com parada no naipe do abridor</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Você é Sul: marque 2♠"></div>
<p>8 PH e apoio de três cartas: apoie para 2♠. Apoiar o parceiro logo dificulta que os adversários achem o melhor contrato.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Você é Sul: marque 2♥"></div>
<p>12 PH e quatro trunfos. O cue-bid de 2♥ mostra apoio limite ou melhor; o parceiro marca 2♠ com uma intervenção mínima, e você convida com 3♠, ou marca o game se o parceiro mostrar mais.</p>
<div class="tip">Lembre-se de que a faixa da intervenção é ampla (8-16). Não salte ao game diante de uma intervenção só porque tem mão de abertura: faça primeiro o cue-bid e deixe o parceiro se descrever.</div>
<div class="warn">Intervenção não é abertura. Não intervenha num naipe fraco só porque tem 12 pontos; e não deixe de intervir num naipe forte só porque tem apenas 9.</div>
`,
    keyPoints: [
      'Intervenção no nível 1: 8-16 PH, bom naipe de 5+. No nível 2: 10-16, bom naipe de 5+ (em geral 6).',
      'Intervenção fraca em salto: naipe de seis cartas, 6-10; intervenção de 1ST: 15-18 balanceada com parada.',
      'A qualidade do naipe importa mais que os pontos, porque a intervenção também indica a saída.',
      'Parceiro do interventor: apoio simples 6-9 com 3+ cartas; cue-bid = apoio limite ou melhor; apoio em salto é de barragem.',
      'Com 17+, forte demais para intervir, dobre primeiro e marque o seu naipe depois.',
    ],
    quiz: [
      {
        q: 'O adversário à direita abre 1♦. Você tem ♠KQJ74 ♥83 ♦952 ♣A63. O que marca?',
        options: ['Passo', '1♠', '2♠', 'Dobre'],
        answer: 1,
        explain: 'Um bom naipe de cinco cartas com 10 PH é uma intervenção sólida no nível 1. 2♠ seria uma intervenção fraca em salto, e um dobre sugeriria apoio em copas e paus.',
      },
      {
        q: 'O adversário à direita abre 1♥. Você tem ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 PH). O que marca?',
        options: ['1♠', 'Passo', '1ST', 'Dobre'],
        answer: 1,
        explain: 'As espadas são fracas demais para pedir saída, a mão não é um sem trunfo de 15-18 e falta distribuição para dobrar. Passe.',
      },
      {
        q: 'O adversário à direita abre 1♣. Você tem ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 PH). O que marca?',
        options: ['1♦', '1ST', 'Dobre', '2ST'],
        answer: 1,
        explain: 'Balanceada, 15-18, com parada em paus: 1ST descreve a mão numa só voz. O parceiro pode usar as mesmas respostas que sobre uma abertura de 1ST.',
      },
      {
        q: 'O adversário à esquerda abriu 1♥ e o parceiro interveio com 1♠. Você tem ♠K962 ♥83 ♦AQ74 ♣K105 (12 PH). O que marca?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Com 10+ e apoio, faça cue-bid no naipe dos adversários para mostrar apoio limite ou melhor. 3♠ seria de barragem, e 4♠ poderia ser alto demais diante de uma intervenção mínima.',
      },
      {
        q: 'O adversário à direita abre 1♣. Você tem ♠KJ10984 ♥73 ♦Q52 ♣43 (6 PH). O que marca?',
        options: ['Passo', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Seis boas espadas e 6-10 PH são uma intervenção fraca em salto. Tira dos adversários as vozes no nível 1 e sugere a saída de espadas.',
      },
    ],
  },
  {
    id: 'takeout-doubles',
    title: 'Dobres informativos',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Como usar o dobre para pedir ao parceiro que escolha um naipe, e como respondem o parceiro e o lado que abriu.',
    body: `
<h3>O que diz o dobre informativo</h3>
<p>Um dobre de uma abertura em naipe num nível baixo não é punitivo: pede ao parceiro que marque. Mostra <strong>12+ PH, naipe curto no naipe aberto e apoio (de preferência quatro cartas) para os naipes não marcados</strong>, sobretudo para o rico não marcado. A alternativa é uma mão forte, 17+, de qualquer distribuição, que vai marcar de novo para mostrar o que realmente tem.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="O adversário à direita abre 1♦: dobre"></div>
<p>13 PH, singleton de ouros e quatro cartas em cada um dos outros naipes: a distribuição perfeita.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="O adversário à direita abre 1♦: passe"></div>
<p>14 PH, mas quatro ouros e só três cartas em cada rico. Se você dobrar, o parceiro marca copas ou espadas com quatro cartas, e vocês vão jogar um fit 4-3 com a mão errada. Passe.</p>

<h3>Respondendo ao dobre informativo</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>Oeste abriu 1♥, o parceiro dobrou e Leste passou. Você tem de marcar, por mais fraco que esteja: passar transformaria o dobre num dobre punitivo de 1♥. Prefira um rico e mostre a força pelo nível:</p>
<table>
<thead><tr><th>Pontos de quem responde</th><th>Ação</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Marque o seu melhor naipe no nível mais barato</td></tr>
<tr><td>9-11</td><td>Salte no seu melhor naipe (convite)</td></tr>
<tr><td>12+</td><td>Cue-bid no naipe do abridor (forcing), ou marque o game</td></tr>
<tr><td>6-10, balanceada</td><td>1ST, com parada no naipe do abridor</td></tr>
<tr><td>Passo</td><td>Só com trunfos longos e fortes no naipe do abridor (para punir)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – dobre – passo: marque 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – dobre – passo: marque 2♠"></div>
<p>Com 3 PH, marque 1♠ sem medo: o parceiro sabe que você pode não ter nada. Com 10 PH, salte para 2♠ para convidar a game. Com ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 PH), marque você mesmo 4♠, ou faça cue-bid de 2♥ se não tiver certeza de qual game é melhor.</p>
<p>Se o parceiro do abridor marcar (1♥ – dobre – 2♥), você já não é obrigado a falar. Agora uma voz mostra alguns valores, cerca de 6+, e um passo mostra uma mão fraca.</p>

<h3>A remarcação de quem dobrou</h3>
<p>A resposta no nível mais barato pode ser feita sem nada, então quem dobrou não deve marcar de novo com mínimo. Com 12-15, passe; com cerca de 16-18, apoie um nível; com 19+, salte. Se quem dobrou marcar um naipe novo, isso mostra o dobre do tipo forte (17+) com um naipe longo próprio.</p>

<h3>O lado que abriu: o redobre</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Quando a abertura do parceiro é dobrada, um <strong>redobre</strong> mostra 10+ PH. Diz ao abridor que a força está do seu lado e em geral significa que você procura uma chance de dobrar os adversários para punir. Depois de uma abertura num rico, <strong>2ST (Jordan)</strong> mostra apoio de quatro ou mais cartas e um apoio limite ou mais forte (10+ pontos de apoio), por isso o redobre em geral nega quatro trunfos. Com apoio e uma mão mais fraca, apoie o parceiro: o apoio simples mostra cerca de 6-10 pontos, e o apoio em salto (1♥ – dobre – 3♥) é de barragem, com quatro trunfos e menos de 10 PH. Com um naipe novo e menos de 10, marque-o.</p>

<h3>Dobres de barragens</h3>
<p>Um dobre de um dois fraco ou de uma barragem no nível 3 também é informativo: valores de abertura, curto no naipe deles e pronto para qualquer naipe que o parceiro marcar. O parceiro pode ter de marcar no nível 3 com mão fraca, então quem dobra deve ter uma mão sólida, não leve.</p>
<div class="tip">O dobre informativo ideal é curto no naipe do adversário e tem quatro cartas em cada rico não marcado. Quanto mais curto você for no naipe deles, mais leve pode dobrar.</div>
<div class="warn">Não dobre com um naipe longo próprio e uma mão média: intervenha. Um dobre informativo seguido do seu próprio naipe mostra 17+ PH.</div>
`,
    keyPoints: [
      'Dobre informativo: 12+ PH, curto no naipe deles, apoio para os naipes não marcados; ou 17+ de qualquer distribuição, planejando marcar de novo.',
      'Quem responde tem de marcar: 0-8 no nível mais barato, 9-11 em salto, 12+ cue-bid ou game; 1ST = 6-10 com parada.',
      'Passe o dobre só com trunfos longos e fortes no naipe deles.',
      'Quem dobrou passa uma resposta mínima com 12-15; apoia com 16-18; salta com 19+.',
      'O redobre depois de um dobre informativo mostra 10+ PH; sobre 1♥ ou 1♠, 2ST (Jordan) mostra quatro trunfos e um apoio limite ou mais, e o apoio em salto é de barragem.',
    ],
    quiz: [
      {
        q: 'O adversário à direita abre 1♣. Você tem ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 PH). O que marca?',
        options: ['1♦', 'Dobre', '1♠', 'Passo'],
        answer: 1,
        explain: 'Paus curtos e quatro cartas em cada um dos outros naipes: um dobre informativo ideal. Qualquer que seja o naipe do parceiro, você tem apoio.',
      },
      {
        q: '1♥ – dobre – passo – ? Você tem ♠Q8642 ♥753 ♦J4 ♣982 (3 PH).',
        options: ['Passo', '1♠', '1ST', '2♠'],
        answer: 1,
        explain: 'Você tem de marcar: passar deixaria 1♥ dobrado para punir, e os adversários provavelmente cumpririam com vazas a mais. Marque o seu melhor naipe no nível mais barato.',
      },
      {
        q: '1♥ – dobre – passo – ? Você tem ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 PH).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 pontos: salte no seu melhor naipe para convidar a game. 1♠ poderia ser marcado sem nada, então subvalorizaria esta mão.',
      },
      {
        q: '1♠ – dobre – passo – ? Você tem ♠K104 ♥82 ♦Q963 ♣J752 (6 PH).',
        options: ['2♣', '2♦', '1ST', 'Passo'],
        answer: 2,
        explain: '1ST mostra 6-10 com parada em espadas e permite ficar no nível 1. Marcar um pobre no nível 2 é uma alternativa possível, mas 1ST descreve melhor esta mão balanceada.',
      },
      {
        q: 'O parceiro abre 1♥ e o adversário à direita dobra. O que mostra o seu redobre?',
        options: ['Um dobre punitivo de 1♥', '10+ PH', 'Apoio de copas', 'Uma mão fraca'],
        answer: 1,
        explain: 'O redobre mostra 10+ PH e diz que a mão pertence ao seu lado. Com apoio e menos pontos, você apoiaria.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'Deixar passar e as entradas',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Como cortar as comunicações dos defensores deixando passar com a sua parada, e como administrar as suas próprias entradas.',
    body: `
<h3>Deixar passar (hold-up)</h3>
<p>Contra sem trunfo, os defensores em geral atacam o naipe longo deles. Se você ganhar a primeira volta com a sua única parada e depois perder a mão para o parceiro do defensor, esse jogador pode devolver o naipe e as cartas longas vão correr. <strong>Deixar passar</strong> (o hold-up) significa recusar a primeira volta (ou voltas) do naipe deles, para que o defensor que pode ganhar a mão não tenha mais carta desse naipe para devolver.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3ST por Sul. Oeste sai com o ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conte:</strong> ♠A, ♥AK, ♣AKQ: seis vencedoras garantidas. Os ouros dão mais quatro depois que o ♦A for expulso. Você tem de perder a mão uma vez.</p>
<p><strong>Perigo:</strong> as espadas de Oeste. Se você ganhar a primeira espada e Leste tomar o ♦A, Leste devolve espada e Oeste faz quatro vazas de espadas: uma abaixo.</p>
<p><strong>Deixar passar:</strong> jogue baixo sobre o ♠K. Oeste continua com a ♠Q e você ganha com o ás. Leste serviu duas vezes e não tem mais espadas. Agora expulse o ♦A. Com as cartas como estão, Leste ganha, não tem espada para devolver, e você faz dez vazas. Se Oeste tivesse o ♦A, você cairia, mas nesse caso nunca houve como cumprir: deixar passar é uma chance extra de graça.</p>

<h4>Quantas vezes deixar passar: a Regra do 7</h4>
<p>Subtraia de sete o número de cartas que você e o morto têm no naipe. O resultado é o número de vezes que deve deixar passar. Aqui vocês têm seis espadas entre as duas mãos, então 7 − 6 = 1: ceda uma vez e ganhe a segunda volta. Isso supõe que o naipe se divida 5-2; observe as cartas que caem e ajuste.</p>

<h4>Quando não deixar passar</h4>
<ul>
<li>Quando o defensor que pode ganhar a mão já não tem cartas do naipe, ou o naipe não pode ser corrido.</li>
<li>Quando deixar passar permite que os defensores troquem para um naipe ainda mais perigoso.</li>
<li>Quando você tem duas paradas e o defensor perigoso não consegue ganhar a mão duas vezes. Com A K x, muitas vezes você pode ganhar a primeira vaza e ainda ter uma parada quando eles recuperarem a mão.</li>
</ul>
<div class="tip">O golpe de Bath: com A J x na sua mão, quando Oeste sai com o rei, jogue baixo. Se Oeste continuar o naipe, o seu A J faz duas vazas; se Oeste trocar, o seu A J continua protegendo o naipe: Oeste não pode jogá-lo de novo sem lhe dar uma vaza.</div>

<h3>Administrando as entradas</h3>
<p>Uma entrada é uma carta que permite ganhar uma vaza numa determinada mão. Muitos contratos se perdem não por falta de vencedoras, mas por falta de um jeito de chegar até elas.</p>
<ul>
<li><strong>Conte as entradas antes da primeira vaza.</strong> Decida qual mão precisará estar com a mão mais tarde e ganhe a primeira vaza de acordo.</li>
<li><strong>Desbloqueie:</strong> jogue primeiro as cartas altas da mão mais curta. Com ♦Q3 na mão e ♦AKJ105 no morto (sem outras entradas no morto), bata primeiro a Q e depois jogue o 3 para o morto.</li>
<li><strong>Ceda</strong> a volta que tem de perder enquanto a mão longa ainda tem as cartas altas (veja a lição “Firmando naipes longos”).</li>
<li><strong>Passe por cima</strong> para trocar de mão: com a ♥Q seca na mão diante de ♥AKJ104 e nenhuma outra entrada no morto, cubra a Q com o K e corra o naipe.</li>
<li><strong>Guarde a entrada final:</strong> quando um naipe tem de ser firmado no morto, use primeiro as entradas da sua mão e guarde as do morto para o fim.</li>
</ul>
<div class="warn">Não ganhe uma vaza na mão errada “porque tanto faz”. Se você ainda não descobriu em que mão vai precisar estar depois, é cedo demais para jogar para a vaza.</div>
`,
    keyPoints: [
      'Deixe passar com a sua parada para que o defensor que pode ganhar a mão não tenha mais carta do naipe deles.',
      'Regra do 7: deixe passar 7 menos as cartas que vocês têm juntos no naipe (um guia, supondo divisão 5-2).',
      'Não deixe passar quando uma troca de naipe for mais perigosa ou quando você tiver paradas suficientes.',
      'Desbloqueie jogando primeiro as honras da mão curta; passe por cima para trocar de mão.',
      'Planeje as entradas antes da primeira vaza e ganhe a primeira vaza na mão certa.',
    ],
    quiz: [
      {
        q: 'Você e o morto têm seis cartas no naipe que os defensores atacam contra 3ST, com só o ás como parada. Quantas vezes deve deixar passar?',
        options: ['Nunca', 'Uma vez', 'Duas vezes', 'Três vezes'],
        answer: 1,
        explain: 'Regra do 7: 7 − 6 = 1. Se o naipe for 5-2, ganhar a segunda volta deixa o parceiro de quem tem o naipe longo sem carta para devolver.',
      },
      {
        q: 'Qual é o objetivo de deixar passar?',
        options: ['Fazer uma vaza a mais', 'Esgotar o naipe do parceiro de quem tem o naipe longo, para que ele não possa devolvê-lo', 'Descobrir quem tem as honras que faltam', 'Poupar uma entrada no morto'],
        answer: 1,
        explain: 'Se o defensor que ganha a mão não tiver carta do naipe longo, as cartas longas do parceiro dele ficam isoladas e talvez nunca sejam batidas.',
      },
      {
        q: 'Na mão acima, por que deixar passar não adianta se Oeste tiver o ♦A?',
        options: ['Porque Oeste pode então bater as espadas restantes', 'Porque os ouros bloqueariam', 'Porque Leste poderia cortar', 'Adianta também nesse caso'],
        answer: 0,
        explain: 'Deixar passar só esgota Leste. Se Oeste, a mão com as espadas longas, ganhar a mão com o ♦A, as espadas firmes são batidas. Nenhuma linha impede isso; deixar passar ganha sempre que Leste tiver o ♦A.',
      },
      {
        q: 'Você tem ♦Q3 na mão e ♦AKJ105 no morto, que não tem outra entrada. Como jogar os ouros?',
        options: ['Jogar o 3 para o ás primeiro', 'Bater a Q primeiro e depois jogar o 3 para o morto', 'Jogar o valete do morto', 'Ceder a primeira volta'],
        answer: 1,
        explain: 'Jogue primeiro a carta alta da mão curta. Depois da Q, o 3 leva você ao morto e você corre o resto do naipe lá.',
      },
      {
        q: 'Oeste sai com o ♣K contra 3ST e você tem ♣AJ4 na mão. O que é o golpe de Bath?',
        options: ['Ganhar com o ás de imediato', 'Jogar baixo, para que a continuação em paus caia no seu A J', 'Jogar o valete', 'Descartar do morto'],
        answer: 1,
        explain: 'Cedendo, você convida Oeste a continuar o naipe contra o seu A J, o que lhe dá duas vazas; se Oeste trocar, você continua com o naipe protegido.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'O manejo dos trunfos',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Quando tirar os trunfos de imediato, quando adiar, como usar os cortes na mão curta e como manter o controle do naipe de trunfo.',
    body: `
<h3>O padrão: tirar os trunfos</h3>
<p>Quando você é o declarante num contrato em naipe, os trunfos dos defensores ameaçam as suas vencedoras: cada vencedora lateral que você bate pode ser cortada. Por isso o plano normal é <strong>tirar os trunfos cedo</strong>, contando os trunfos dos adversários à medida que caem. Se eles têm cinco trunfos e os dois servem em duas voltas, ainda falta um; se um defensor não serve, você sabe a divisão exata.</p>

<h3>Motivos para adiar a tirada de trunfos</h3>
<ol>
<li><strong>Você precisa dos trunfos do morto para cortar.</strong> Cortar perdedoras na mão curta em trunfos cria vazas extras. Se tirar os trunfos gastaria os trunfos do morto, faça primeiro os cortes (veja a mão de 4♠ da lição “Planejando o carteio”).</li>
<li><strong>Você precisa descartar perdedoras depressa.</strong> Se os defensores têm uma honra de trunfo e vão ganhar a mão quando você jogar trunfo, garanta que eles não possam então bater vazas suficientes para derrubá-lo.</li>
<li><strong>Você precisa dos trunfos como entradas</strong>, por exemplo para chegar a um naipe lateral longo ou para repetir finesses.</li>
<li><strong>Você planeja um corte cruzado</strong>, usando os trunfos das duas mãos separadamente.</li>
</ol>

<h3>Descartando antes de tirar os trunfos</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ por Sul. Oeste sai com o ♦K."></div>
<p><strong>Conte as perdedoras:</strong> o ♠A, dois ouros depois que o ♦A sai na primeira vaza, e o ♣A (a terceira volta de paus pode ser cortada no morto). Quatro perdedoras.</p>
<p>Se você jogar trunfo agora, o defensor que ganhar com o ♠A bate duas vazas de ouros e, com o ♣A ainda por vir, você cai. Em vez disso, ganhe com o ♦A e jogue imediatamente o ♥A, o ♥K e a ♥Q, descartando um ouro da mão na terceira copa. Só então jogue trunfo. Você perde o ♠A, um ouro e o ♣A.</p>
<p>O risco é que alguém corte a terceira copa. Isso só acontece se as copas se dividirem 5-2 ou pior <em>e</em> o defensor com o doubleton tiver um trunfo para cortar, um risco muito menor que a queda certa de tirar os trunfos primeiro.</p>
<div class="tip">Pergunte-se: “Quando eu perder a mão no trunfo, quantas vazas os defensores podem bater?” Se a resposta for demais, livre-se antes de uma perdedora.</div>

<h3>Cortar: a mão curta ganha, a longa não</h3>
<p>Com cinco trunfos na mão e três no morto, os seus cinco trunfos vão fazer cinco vazas de qualquer jeito. Um corte na sua mão só gasta um deles. Um corte no morto é uma vaza extra, porque os trunfos pequenos do morto nunca fariam vaza de outra forma. Planeje os cortes na mão <strong>curta</strong> em trunfos.</p>
<p>Cortar na mão longa é útil por outros motivos: para firmar um naipe longo no morto cortando as cartas dos adversários, ou para encurtar os seus trunfos para uma jogada de entrega ou um golpe de trunfo.</p>

<h3>O corte cruzado</h3>
<p>Quando as duas mãos têm um naipe curto, você pode cortar as perdedoras de uma mão com os trunfos da outra, de um lado para o outro, sem tirar os trunfos. Regras para o corte cruzado:</p>
<ul>
<li><strong>Bata primeiro as suas vencedoras laterais.</strong> Senão os defensores descartam desses naipes durante o corte cruzado e depois cortam as suas vencedoras.</li>
<li>Corte alto quando um sobrecorte for possível, para que os defensores não façam barato os trunfos pequenos deles.</li>
<li>Conte: o corte cruzado deve render exatamente as vazas de que você precisa.</li>
</ul>

<h3>Mantendo o controle</h3>
<p>Se os defensores continuarem jogando um naipe que você tem de cortar na mão longa, você pode acabar com menos trunfos que um defensor: perdeu o <strong>controle do trunfo</strong>, e os trunfos restantes desse defensor fazem vazas enquanto o naipe longo do parceiro dele corre. Defesas contra o forçamento:</p>
<ul>
<li>Descarte uma perdedora em vez de cortar (perca uma vaza que você ia perder de qualquer jeito), para que o próximo forçamento chegue quando o morto puder cortar.</li>
<li>Tire cedo os trunfos pequenos dos adversários, mesmo deixando de fora o trunfo mais alto deles, para que o próximo forçamento não lhe custe o controle.</li>
<li>Prefira um contrato em que a mão curta em trunfos possa receber o forçamento.</li>
</ul>
<div class="warn">Não gaste dois trunfos seus para tirar um deles quando o último trunfo deles é o mais alto. É uma vaza deles de qualquer forma; deixe que a façam quando quiserem e use os seus trunfos para controlar o carteio.</div>
`,
    keyPoints: [
      'Em geral tire os trunfos cedo, contando os trunfos dos adversários à medida que caem.',
      'Adie quando precisar dos trunfos do morto para cortes, tiver de descartar perdedoras antes de perder a mão, ou precisar de entradas no trunfo.',
      'Cortes na mão curta em trunfos ganham vazas; cortes na mão longa em geral não.',
      'Antes de um corte cruzado, bata as suas vencedoras laterais.',
      'Não gaste dois trunfos para tirar o trunfo mais alto dos adversários.',
    ],
    quiz: [
      {
        q: 'Quando é errado tirar os trunfos de imediato?',
        options: ['Nunca: tire sempre os trunfos primeiro', 'Quando você precisa dos trunfos do morto para cortar as suas perdedoras', 'Quando os adversários têm cinco trunfos', 'Quando você tem nove trunfos'],
        answer: 1,
        explain: 'Tirar os trunfos gastaria os trunfos do morto junto com os dos adversários. Faça primeiro os cortes na mão curta e depois tire o resto.',
      },
      {
        q: 'Na mão de 4♠ acima, o que o declarante deve fazer depois de ganhar com o ♦A?',
        options: ['Jogar o ♠K', 'Bater três copas, descartando um ouro', 'Jogar paus em direção à ♣Q', 'Ceder um ouro'],
        answer: 1,
        explain: 'Os defensores têm o ♠A e duas vazas de ouros prontas. Descarte primeiro um ouro na terceira copa, e só então jogue trunfo.',
      },
      {
        q: 'Os adversários têm um trunfo restante: o ás. Você tem trunfos e vencedoras de sobra. O que costuma fazer?',
        options: ['Jogar trunfo para expulsar o ás de imediato', 'Deixá-lo e jogar os seus naipes laterais; é vaza deles de qualquer forma', 'Cortar algo no morto', 'Ceder o resto'],
        answer: 1,
        explain: 'Tirá-lo custa dois trunfos seus (um de cada mão) por uma vaza que eles sempre farão. Deixe que cortem com ele se quiserem; os seus trunfos continuam no controle.',
      },
      {
        q: 'Você está prestes a fazer um corte cruzado. O que deve fazer primeiro?',
        options: ['Tirar duas voltas de trunfo', 'Bater as suas vencedoras laterais', 'Cortar com os seus trunfos mais baixos', 'Perder uma vaza'],
        answer: 1,
        explain: 'Durante o corte cruzado os defensores descartam. Se descartarem de um naipe lateral que você ainda não bateu, depois podem cortar as suas vencedoras.',
      },
      {
        q: 'Você tem cinco trunfos na mão e três no morto. Qual corte cria uma vaza extra?',
        options: ['Cortar na sua mão', 'Cortar no morto', 'Os dois', 'Nenhum'],
        answer: 1,
        explain: 'Os seus cinco trunfos fazem cinco vazas com ou sem cortes. Os três trunfos pequenos do morto só fazem vazas cortando.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'Sinais na defesa',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Como os defensores usam o tamanho das cartas que jogam para mostrar atitude, contagem e preferência de naipe.',
    body: `
<h3>Conversando com as cartas</h3>
<p>Os defensores não veem a mão um do outro, mas podem legitimamente escolher <em>qual</em> carta jogar. Quando você não está tentando ganhar a vaza, a carta pequena que joga transmite uma mensagem. Os sinais padrão são de três tipos; a situação diz ao parceiro qual deles você está dando.</p>
<table>
<thead><tr><th>Sinal</th><th>Quando</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Atitude</td><td>O parceiro joga um naipe; o seu primeiro descarte</td><td>Alta encoraja, baixa desencoraja</td></tr>
<tr><td>Contagem</td><td>O declarante joga um naipe lateral (sem contagem no trunfo)</td><td>Alto-baixo = número par, baixo-alto = ímpar</td></tr>
<tr><td>Preferência de naipe</td><td>Quando você joga um naipe para o parceiro cortar</td><td>Carta alta pede o mais alto dos outros naipes, baixa o mais baixo; carta intermediária — sem preferência</td></tr>
</tbody>
</table>

<h3>Atitude</h3>
<p>Contra 4♥, o parceiro sai com o ♠A (de AK) e o morto tem ♠8 6 4.</p>
<ul>
<li>Com ♠Q 9 3, jogue o 9: você gosta de espadas, porque a sua dama vai ganhar a terceira volta.</li>
<li>Com ♠7 5 2, jogue o 2: você não tem nada em espadas, então o parceiro deve pensar numa troca.</li>
<li>Com doubleton ♠9 3, jogue o 9 e depois o 3: o alto-baixo pede ao parceiro que continue, e você corta a terceira volta.</li>
</ul>
<p>Os descartes funcionam do mesmo modo: o primeiro descarte mostra atitude. Descartar o ♣9 diz “gosto de paus”; descartar o ♦2 diz “não quero ouros”. Só descarte de um naipe que você pode dispensar. Se não tiver uma carta pequena de 6 ou mais para dispensar no naipe que quer, descarte a sua menor carta de um naipe que não quer.</p>

<h3>Contagem</h3>
<p>Quando o declarante joga um naipe, mostre quantas cartas você tem nele: alto-baixo com número par (duas ou quatro), a menor primeiro com número ímpar (três). A contagem permite ao parceiro deduzir a distribuição do declarante e, sobretudo, diz quando tomar com o ás.</p>
<table>
<thead><tr><th>Posição</th><th>Ouros</th></tr></thead>
<tbody>
<tr><td>Norte (morto, sem entrada lateral)</td><td>K Q J 10 5</td></tr>
<tr><td>Leste (você)</td><td>A 7 3</td></tr>
<tr><td>Oeste e Sul</td><td>9 8 6 4 2 entre os dois</td></tr>
</tbody>
</table>
<p>O declarante joga ouros em direção ao morto. Você quer ganhar com o ás na volta em que o declarante joga o <em>último</em> ouro dele, cortando-o do resto do naipe do morto. Se o parceiro começar com o 9 (alta: número par, aqui dois), o declarante tem três: ceda duas vezes e tome a terceira volta. Se o parceiro jogar primeiro o 4 (baixa: ímpar, aqui três), o declarante tem dois: tome a segunda volta. Sem a contagem do parceiro, você estaria adivinhando.</p>

<h3>Preferência de naipe</h3>
<p>Às vezes atitude e contagem não significam nada, e então o tamanho da carta aponta para outro naipe. O caso clássico é o corte. Espadas são trunfo e você joga uma copa para o parceiro cortar. Os outros naipes são ouros e paus. Jogue uma copa <strong>alta</strong> para pedir a volta em ouros (o mais alto dos dois) e uma copa <strong>baixa</strong> para pedir paus. Se você tem o ♦A, jogue a sua copa mais alta; o parceiro corta, devolve ouro para o seu ás e você lhe dá um segundo corte.</p>
<p>Sem preferência, jogue uma carta intermediária. Algumas duplas também usam a preferência de naipe ao devolver o naipe do parceiro; os robôs aqui só a usam ao dar um corte.</p>

<h3>Bons hábitos</h3>
<ul>
<li>Na saída do parceiro, sinalize primeiro atitude; quando o declarante joga, contagem; use a preferência de naipe só quando a situação estiver clara.</li>
<li>Não sinalize com uma carta que poderia fazer vaza depois. De Q J 10 9 7, o 7 pode bastar para encorajar.</li>
<li>Sinalize num ritmo uniforme: pense quando o morto descer, não no meio de uma vaza.</li>
<li>Não dê contagem quando ela só puder ajudar o declarante, por exemplo quando ele está adivinhando como jogar um naipe e a contagem não serviria ao parceiro. Os robôs aqui sempre dão contagem quando o declarante joga um naipe lateral, para que você possa treinar a leitura.</li>
</ul>
<div class="warn">Um sinal é informação, não uma ordem. O parceiro o combina com o que vê no morto e na própria mão, e pode ter bons motivos para fazer outra coisa.</div>
`,
    keyPoints: [
      'Atitude na saída do parceiro e no seu primeiro descarte: alta encoraja, baixa desencoraja.',
      'Contagem quando o declarante joga um naipe lateral: alto-baixo mostra número par, baixo-alto ímpar.',
      'Use a contagem para saber quando tomar com o ás contra um naipe longo no morto sem entradas.',
      'Preferência de naipe: carta alta pede o mais alto dos outros naipes, carta baixa o mais baixo; carta intermediária mostra que não há preferência.',
      'Nunca desperdice uma possível vencedora só para sinalizar.',
    ],
    quiz: [
      {
        q: 'O parceiro sai com o ♠A (de AK) contra 4♥. O morto tem ♠8 6 4. Você tem ♠Q 9 3. Que carta joga?',
        options: ['♠Q', '♠9', '♠3', 'Tanto faz'],
        answer: 1,
        explain: 'O 9 encoraja. O parceiro continua com o rei, e a sua dama faz a terceira volta. Jogar o 3 diria ao parceiro que você não tem nada em espadas.',
      },
      {
        q: 'O declarante joga um naipe em que você tem 8 3. Que carta deve jogar primeiro para mostrar a contagem?',
        options: ['O 8', 'O 3', 'Qualquer uma', 'Nenhuma: nunca dê contagem'],
        answer: 0,
        explain: 'O alto-baixo mostra número par. Jogue o 8 agora e o 3 na próxima vez; o parceiro saberá que você tinha duas (ou quatro).',
      },
      {
        q: 'O seu primeiro descarte, com sinais padrão, é o ♣2. O que ele diz?',
        options: ['Gosto de paus', 'Não quero paus', 'Tenho dois paus', 'Jogue ouros'],
        answer: 1,
        explain: 'O primeiro descarte mostra atitude. Uma carta baixa desencoraja o naipe descartado.',
      },
      {
        q: 'O morto tem ♦K Q J 10 5 e nenhuma entrada lateral; você tem ♦A 7 3. O declarante joga ouros e o parceiro joga o 9 e depois o 4. Quando você deve tomar com o ás?',
        options: ['Na primeira volta', 'Na segunda volta', 'Na terceira volta', 'Nunca'],
        answer: 2,
        explain: 'O alto-baixo do parceiro mostra número par, dois, então o declarante tinha três. Tome com o ás na terceira volta, quando o declarante não tiver mais ouro para chegar ao morto.',
      },
      {
        q: 'Espadas são trunfo. Você joga uma copa para o parceiro cortar e quer a volta em ouros. De ♥9 8 2, que copa joga?',
        options: ['♥9', '♥8', '♥2', 'Tanto faz'],
        answer: 0,
        explain: 'É uma situação de preferência de naipe. Uma carta alta pede o mais alto dos naipes laterais restantes (ouros em vez de paus).',
      },
    ],
  },
  {
    id: 'negative-doubles',
    title: 'Dobres negativos',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Como o respondedor usa o dobre depois de uma intervenção para mostrar o rico não marcado, e como o passo punitivo e o dobre de reabertura funcionam juntos.',
    body: `
<h3>O problema</h3>
<p>O parceiro abre 1♦ e o adversário à direita intervém com 1♠. Você tem quatro copas e 9 PH. Uma voz de 2♥ prometeria cinco copas e 10+ pontos, então você não pode marcá-la, mas também não quer perder um possível fit em copas. A resposta é o <strong>dobre negativo</strong>: depois da abertura do parceiro e de uma intervenção até 2♠ inclusive, o dobre do respondedor é informativo e mostra o(s) rico(s) não marcado(s).</p>

<h3>O que o dobre mostra</h3>
<p>Força: 6+ PH quando a intervenção é no nível 1, 8+ quando é no nível 2. Distribuição:</p>
<table>
<thead><tr><th>Leilão</th><th>O dobre do respondedor mostra</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Os dois ricos (em geral quatro de cada)</td></tr>
<tr><td>1♣ ou 1♦ – (1♥) – X</td><td>Exatamente quatro espadas (1♠ mostraria cinco ou mais)</td></tr>
<tr><td>1♣ ou 1♦ – (1♠) – X</td><td>Quatro ou mais copas (2♥ mostraria cinco e 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>Os pobres, ou valores sem uma voz clara</td></tr>
<tr><td>1♥ – (2♣ ou 2♦) – X</td><td>Quatro espadas, 8+ PH</td></tr>
<tr><td>1♠ – (2♣ ou 2♦) – X</td><td>Quatro ou mais copas, 8+ PH</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: dobre"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: dobre"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: dobre"></div>
<p>A primeira mão mostra as suas quatro copas. A segunda tem exatamente quatro espadas e 7 PH: dobre em vez de 1♠. A terceira mostra quatro espadas e força suficiente para o nível 2.</p>

<h3>A remarcação do abridor depois de um dobre negativo</h3>
<ul>
<li>Com quatro cartas no rico que o parceiro mostrou, marque-o: no nível mais barato com mínimo, ou em salto com valores extras (cerca de 16-18).</li>
<li>Senão, faça a sua remarcação normal: remarque um naipe de seis cartas, marque um segundo naipe ou marque sem trunfo com parada no naipe do interventor.</li>
<li>Com um naipe longo e forte no naipe do interventor, você pode passar o dobre para punir.</li>
</ul>

<h3>O passo punitivo e o dobre de reabertura</h3>
<p>Como o dobre do respondedor é informativo, ele não pode dobrar para punir quando tem cartas fortes no naipe do interventor. Em vez disso, o respondedor <strong>passa</strong> e espera. Quando o abridor é curto no naipe da intervenção, deve reabrir com um dobre, que o respondedor transforma em punitivo passando.</p>
<div class="hand" data-cards="S:K5 H:73 D:Q984 C:KQ1093" data-label="1♥ – (2♣) – ?: passe"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Abridor (Norte): dobre de reabertura"></div>
<p>O ♣KQ1093 de Sul está depois dos paus de Leste, e 2♣ dobrado provavelmente vai cair várias vazas. Norte, com singleton de paus, reabre com um dobre porque o passo do parceiro pode ser exatamente esse tipo de mão. Com comprimento no naipe do interventor, o abridor deve ter mais cuidado ao reabrir: aí é improvável que o parceiro esteja esperando para punir.</p>
<div class="tip">Depois de uma intervenção, um naipe novo do respondedor continua natural e forcing, mas mostra cinco cartas, já que havia um dobre negativo disponível para mostrar quatro.</div>
<div class="warn">O dobre negativo não é punitivo. Se você quer punir a intervenção, passe e torça para o parceiro reabrir.</div>
`,
    keyPoints: [
      'Depois que o parceiro abre e o adversário à direita intervém (até 2♠), o dobre do respondedor é informativo.',
      'Mostra o(s) rico(s) não marcado(s): 6+ PH no nível 1, 8+ no nível 2.',
      '1♣/1♦ – (1♥) – X mostra exatamente quatro espadas; 1♠ mostraria cinco.',
      'Com comprimento forte no naipe do interventor, o respondedor passa; o abridor reabre com dobre quando é curto nesse naipe.',
      'O abridor remarca naturalmente, saltando no rico do parceiro com valores extras.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Você tem ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 PH).',
        options: ['2♥', 'Dobre', '1ST', 'Passo'],
        answer: 1,
        explain: '2♥ prometeria cinco copas e 10+ pontos. O dobre negativo mostra quatro ou mais copas com 6+ e mantém o fit em copas à vista.',
      },
      {
        q: '1♣ – (1♥) – ? Você tem ♠KJ752 ♥84 ♦Q63 ♣J95 (7 PH).',
        options: ['Dobre', '1♠', '1ST', '2♠'],
        answer: 1,
        explain: 'Depois de uma intervenção de 1♥, o dobre mostra exatamente quatro espadas; com cinco espadas, marque 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Você tem ♠K5 ♥73 ♦Q984 ♣KQ1093 (10 PH).',
        options: ['Dobre', 'Passo', '3ST', '2ST'],
        answer: 1,
        explain: 'Você adoraria dobrar para punir, mas o seu dobre seria negativo. Passe e espere que o parceiro reabra com um dobre quando for curto em paus; você vai passar esse dobre.',
      },
      {
        q: 'Você abriu 1♥ com ♠A863 ♥AQJ74 ♦K52 ♣6. O adversário à esquerda interveio com 2♣ e houve passo, passo até você. O que faz?',
        options: ['Passo', 'Dobre', '2♥', '2♠'],
        answer: 1,
        explain: 'Com singleton no naipe do interventor, reabra com um dobre. O parceiro pode ter passado com paus fortes e vai passar para punir; senão, marca o melhor naipe dele.',
      },
      {
        q: 'Até que nível de intervenção o dobre do respondedor continua negativo (informativo) neste sistema?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Os dobres negativos valem até 2♠. Acima disso, muitas duplas também combinam o dobre como informativo, mas este sistema o define até 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Reconhecendo o slam e o Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Como perceber quando o slam é possível e como usar o Blackwood para garantir que não faltam dois ases.',
    body: `
<h3>Por que os slams importam</h3>
<p>Um pequeno slam dá 500 pontos extras não vulnerável e 750 vulnerável; um grand slam, 1000 ou 1500. Marcar um slam cumprível que os outros não marcam vale muito; marcar um que cai custa mais ou menos o mesmo. Você precisa de duas coisas: <strong>vazas</strong> suficientes (força, fit e distribuição) e <strong>controles</strong> suficientes (os adversários não podem bater duas vazas rápidas).</p>

<h3>Sinais de slam</h3>
<ul>
<li><strong>Força combinada:</strong> cerca de 33 pontos para um pequeno slam e 37 para um grand, com mãos balanceadas. Com um bom fit de trunfo e distribuição, menos basta.</li>
<li><strong>O parceiro mostra valores extras</strong> enquanto você também tem uma boa mão: um salto em naipe novo, um reverse, um 2♣ forte, um apoio em salto à sua abertura, um apoio Jacoby 2ST diante de extras.</li>
<li><strong>Um grande fit</strong> (nove ou dez trunfos) mais uma fonte de vazas, como um naipe lateral longo.</li>
<li><strong>Controles:</strong> ases, reis e naipes curtos nos naipes laterais.</li>
</ul>

<h3>O plano</h3>
<ol>
<li>Combine o naipe de trunfo (ou decida por sem trunfo).</li>
<li>Confirme que a força combinada basta.</li>
<li>Verifique os controles, em geral com o Blackwood.</li>
<li>Marque o slam, ou pare no nível 5.</li>
</ol>

<h3>Blackwood</h3>
<p>Depois de combinado um naipe, a voz de 4ST pergunta ao parceiro quantos ases ele tem:</p>
<table>
<thead><tr><th>Resposta</th><th>Ases</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 ou 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>O leilão sempre deixa claro se 5♣ significa 0 ou 4. Se faltam dois ases, pare em cinco no seu naipe de trunfo; o parceiro tem de passar. Se falta um, marque o pequeno slam. Se não falta nenhum e você tem interesse no grand slam, marque <strong>5ST</strong> para perguntar pelos reis: 6♣ = 0 ou 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5ST promete que a dupla tem os quatro ases.</p>
<p>Quem marca o Blackwood é o capitão: quem responde só responde e depois aceita a decisão.</p>

<h3>Blackwood de cartas-chave</h3>
<p>Hoje a maioria dos jogadores usa um refinamento, o <strong>Blackwood de cartas-chave</strong> (RKCB), e é o que os robôs deste app jogam por padrão. Ele conta cinco <strong>cartas-chave</strong>, os quatro ases e o rei de trunfo, e também informa sobre a dama de trunfo:</p>
<table>
<thead><tr><th>Resposta</th><th>Cartas-chave</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 ou 4</td></tr>
<tr><td>5♦</td><td>0 ou 3</td></tr>
<tr><td>5♥</td><td>2, sem a dama de trunfo</td></tr>
<tr><td>5♠</td><td>2, com a dama de trunfo</td></tr>
</tbody>
</table>
<p>As decisões funcionam do mesmo modo: faltando duas cartas-chave, pare no nível 5; faltando uma, marque o pequeno slam. A lição “Blackwood de cartas-chave (RKCB)” trata dele por completo, incluindo como perguntar pela dama de trunfo.</p>

<h3>Um exemplo</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Norte abre 1♠ com 18 PH. Sul, com 15 PH e quatro espadas, marca 2ST, o apoio Jacoby: forcing de game com apoio. O 3♠ de Norte é o modo padrão de mostrar valores extras sem singleton nem chicana. Sul agora conta uns 33 pontos juntos e um fit de nove cartas, então o slam é provável. 4ST pergunta pelos ases; 5♥ mostra dois. Com o ♥A na mão, Sul sabe que falta só um ás e marca 6♠.</p>
<p>Com o Blackwood de cartas-chave, como jogam os robôs, Norte responde 5♦: três cartas-chave, o ♠A, o ♦A e o ♠K. Sul, que só tem o ♥A, percebe que são três e não nenhuma, então falta uma carta-chave; Sul tem a ♠Q, e chega-se a 6♠ do mesmo jeito.</p>
<p>No carteio, o ♣A é a única perdedora: o declarante tira os trunfos, bate as copas e joga o ♦A, ouro para o rei e a ♦Q do morto, descartando um dos paus de Norte.</p>

<h3>Os limites do Blackwood</h3>
<p>O Blackwood conta ases; não diz <em>quais</em> ases, nem se um naipe lateral tem duas perdedoras rápidas. Não o use:</p>
<ul>
<li>com uma chicana (o ás do parceiro pode estar no naipe da sua chicana, onde é desperdiçado);</li>
<li>com duas cartas pequenas num naipe não marcado (o parceiro pode não ter nem o ás nem o rei desse naipe);</li>
<li>quando uma resposta no nível 5 pode levá-lo além do contrato seguro, como acontece muitas vezes com paus como trunfo.</li>
</ul>
<p>Nesses casos, a ferramenta são os cue-bids de controle; veja a lição “Controles e cue-bids: quando não usar o Blackwood”.</p>
<div class="warn">4ST nem sempre é Blackwood. Quando nenhum naipe foi combinado e a última voz do parceiro foi um sem trunfo natural (1ST – 4ST, 2ST – 4ST), 4ST é quantitativo: convida a 6ST. Para perguntar por ases sobre o sem trunfo do parceiro, use o Gerber 4♣.</div>
`,
    keyPoints: [
      'O pequeno slam exige cerca de 33 pontos juntos (o grand, cerca de 37); fit e distribuição podem reduzir isso.',
      'Defina primeiro o trunfo e a força, depois verifique os controles.',
      'Respostas ao Blackwood simples: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; depois 5ST pergunta pelos reis. Os robôs jogam o Blackwood de cartas-chave: 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 e a dama de trunfo.',
      'Faltando dois ases: pare em cinco no naipe combinado.',
      'Não use o Blackwood com uma chicana ou com duas perdedoras rápidas num naipe não marcado.',
    ],
    quiz: [
      {
        q: 'O parceiro marca 4ST (Blackwood simples) e você tem um ás. O que responde?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ mostra 0 ou 4, 5♦ um, 5♥ dois, 5♠ três.',
      },
      {
        q: 'Você marca 4ST e o parceiro responde 5♥ (dois ases). Você tem os outros dois ases. E agora?',
        options: ['Parar em cinco no naipe de trunfo', 'Marcar o pequeno slam, ou 5ST para perguntar pelos reis se um grand for possível', 'Passar sobre 5♥', 'Marcar 6ST, seja qual for o naipe'],
        answer: 1,
        explain: 'Não falta nenhum ás, então o pequeno slam está a salvo de dois ases rápidos. Se as mãos puderem render treze vazas, 5ST pergunta pelos reis e diz ao parceiro que todos os ases estão com vocês.',
      },
      {
        q: 'Espadas estão combinadas. Você marca 4ST e o parceiro responde 5♦ (um ás). Você tem um ás. O que faz?',
        options: ['Marcar 6♠', 'Marcar 5♠', 'Marcar 5ST', 'Passar'],
        answer: 1,
        explain: 'Faltam dois ases, então os adversários poderiam bater duas vazas de saída. Pare em 5♠; o parceiro tem de passar.',
      },
      {
        q: 'Duas mãos balanceadas com 33 PH juntas e nenhum fit de trunfo. Qual contrato?',
        options: ['3ST', '4ST', '6ST', '7ST'],
        answer: 2,
        explain: 'Cerca de 33 PH juntos dão boas chances de doze vazas em sem trunfo. Para um grand seriam necessários 37.',
      },
      {
        q: 'O parceiro responde 5♣ ao seu 4ST (Blackwood simples). O que isso mostra?',
        options: ['Paus', 'Nenhum ás ou os quatro', 'Um ás', 'Três ases'],
        answer: 1,
        explain: '5♣ é 0 ou 4 ases. O leilão ou a sua própria mão vão esclarecer qual: se você mesmo tem um ás, o parceiro não pode ter quatro.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Gerber e o 4ST quantitativo',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Como explorar o slam depois de uma abertura em sem trunfo: perguntar pelos ases com o Gerber e convidar com o 4ST quantitativo.',
    body: `
<h3>Slam depois de uma abertura em sem trunfo</h3>
<p>Quando o parceiro abre 1ST (15-17) ou 2ST (20-21), você conhece a força dele com margem de dois ou três pontos, então muitas vezes pode somar os pontos e decidir sozinho. Duas ferramentas ajudam:</p>
<ul>
<li><strong>4ST quantitativo:</strong> “parceiro, marque 6ST se estiver no topo da sua faixa”.</li>
<li><strong>4♣ Gerber:</strong> “parceiro, quantos ases você tem?”</li>
</ul>

<h3>O 4ST quantitativo</h3>
<p>Um apoio direto de 1ST para 4ST não é Blackwood. Mostra 16-17 pontos, então o total é 31-34, no limite dos 33 necessários para o slam. O abridor passa com mínimo (15) e marca 6ST com máximo (17); com 16, decide pelo critério dele, aceitando com um bom naipe de cinco cartas ou boas cartas intermediárias.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="O parceiro abriu 1ST: marque 4ST"></div>
<p>16 PH, balanceada. Marque 4ST. Com 18-21 você marcaria 6ST direto, já que até um abridor mínimo dá 33; com 22 ou mais, marque 7ST, já que até um mínimo dá 37.</p>
<p>Sobre 2ST (20-21), 4ST mostra 11-12 e pede ao abridor que marque 6ST com máximo.</p>
<table>
<thead><tr><th>Respondedor depois de</th><th>3ST</th><th>4ST (convite)</th><th>6ST</th><th>7ST</th></tr></thead>
<tbody>
<tr><td>1ST (15-17)</td><td>10-15</td><td>16-17</td><td>18-21</td><td>22+</td></tr>
<tr><td>2ST (20-21)</td><td>4-10</td><td>11-12</td><td>13-16</td><td>17+</td></tr>
</tbody>
</table>

<h3>Gerber</h3>
<p>Um salto a 4♣ diretamente sobre a abertura de 1ST ou 2ST do parceiro (ou sobre 2♣ – 2♦ – 2ST) pergunta pelos ases:</p>
<table>
<thead><tr><th>Resposta a 4♣</th><th>Ases</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 ou 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4ST</td><td>3</td></tr>
</tbody>
</table>
<p>Depois da resposta, 5♣ de quem perguntou pede os reis no mesmo esquema (5♦ = 0 ou 4, 5♥ = 1, 5♠ = 2, 5ST = 3). Qualquer outra voz decide o contrato; um 4ST de quem perguntou é sign-off, e se a resposta do parceiro foi 4ST, quem perguntou pode simplesmente passar.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="O parceiro abriu 1ST: marque 4♣"></div>
<p>16 PH (31-33 no total) e seis espadas fortes: a mão é rica em vazas, mas você não tem nenhum ás. A pergunta é sobre ases, então marque 4♣. Sobre 4♠ (dois ases), passe e jogue 4♠. Sobre 4ST (três ases), marque 6♠.</p>
<p>Com os transfers Texas há outro caminho: 4♥, transfer para espadas, e depois 4ST, Blackwood de cartas-chave, que também conta o rei e a dama de espadas.</p>

<h3>Qual usar?</h3>
<ul>
<li>Use o 4ST quantitativo quando a dúvida é a <strong>força</strong>: você não tem certeza de que os pontos juntos chegam a 33.</li>
<li>Use o Gerber quando a dúvida são os <strong>ases</strong>: com uma mão rica em vazas (desbalanceada), em que a força não é o problema. Com mãos balanceadas e 33+ PH juntos, não podem faltar dois ases, então basta contar os pontos.</li>
<li>Com um naipe longo diante de 1ST, faça primeiro o transfer (ou marque naturalmente) para definir o naipe, depois use as ferramentas de slam. Contar vazas importa mais que contar pontos quando você tem um naipe longo e forte.</li>
</ul>
<div class="tip">Conte até 33 para um pequeno slam em sem trunfo e até 37 para um grand. Com uma fonte de vazas, como um naipe sólido de cinco ou seis cartas, você precisa de um pouco menos.</div>
<div class="warn">Não confunda 1ST – 4ST (quantitativo) com o Blackwood. Se você quer saber dos ases diante do sem trunfo do parceiro, marque 4♣.</div>
`,
    keyPoints: [
      '1ST – 4ST = 16-17, quantitativo: o abridor marca 6ST com máximo.',
      '2ST – 4ST = 11-12, quantitativo.',
      'Gerber 4♣ sobre 1ST ou 2ST: 4♦ 0/4, 4♥ 1, 4♠ 2, 4ST 3; depois 5♣ pergunta pelos reis.',
      'Use o 4ST quantitativo quando a dúvida é a força, o Gerber quando são os ases.',
      'Slams em sem trunfo exigem cerca de 33 pontos (pequeno) ou 37 (grand).',
    ],
    quiz: [
      {
        q: 'O parceiro abre 1ST e você marca 4♣ (Gerber). O parceiro tem um ás. Qual é a resposta?',
        options: ['4♦', '4♥', '4♠', '4ST'],
        answer: 1,
        explain: 'As respostas ao Gerber sobem por degraus a partir de 4♦: 4♦ = 0 ou 4, 4♥ = 1, 4♠ = 2, 4ST = 3.',
      },
      {
        q: 'O que significa 1ST – 4ST?',
        options: ['Blackwood', 'Um convite quantitativo a 6ST com 16-17', 'Um sign-off', 'Gerber'],
        answer: 1,
        explain: 'Nenhum naipe foi combinado e o parceiro marcou sem trunfo natural, então 4ST convida ao slam. O abridor marca 6ST com máximo e passa com mínimo.',
      },
      {
        q: 'Você abriu 1ST com 17 PH. O parceiro apoia para 4ST. O que faz?',
        options: ['Passar', 'Marcar 5♥ para mostrar dois ases', 'Marcar 6ST', 'Marcar 5ST'],
        answer: 2,
        explain: '17 é o topo da faixa: 17 + 16-17 = 33-34. Aceite o convite com 6ST.',
      },
      {
        q: 'O parceiro abre 2ST. Você tem uma mão balanceada com 12 PH. O que marca?',
        options: ['3ST', '4ST', '6ST', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Convide com 4ST (11-12); o parceiro marca 6ST com 21.',
      },
      {
        q: '1ST – 4♣ – 4♠ (dois ases). Você não tem nenhum ás. O que marca?',
        options: ['6ST', '4ST', '5♣', '7ST'],
        answer: 1,
        explain: 'Faltam dois ases, então o slam poderia perder as duas primeiras vazas. 4ST depois da resposta ao Gerber é sign-off.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'A Regra do 11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Como uma saída de quarta melhor permite que os defensores e o declarante deduzam quantas cartas mais altas cada mão tem.',
    body: `
<h3>A regra</h3>
<p>Quando o parceiro sai com a <strong>quarta melhor</strong>, subtraia de 11 o valor da carta. O resultado é o número de cartas mais altas que a carta jogada que estão nas <em>outras três mãos</em>: o morto, você e o declarante. Como você vê o morto e a sua própria mão, consegue deduzir quantas cartas mais altas o declarante tem.</p>

<h3>Por que funciona</h3>
<p>Para uma carta de valor r, há 14 − r cartas acima dela (o ás conta como 14). Se a saída é de quarta melhor, quem saiu tem exatamente três delas. Sobram 14 − r − 3 = 11 − r para as outras três mãos.</p>

<h3>Um exemplo na defesa</h3>
<table>
<thead><tr><th>Posição</th><th>Ouros</th></tr></thead>
<tbody>
<tr><td>Norte (morto)</td><td>Q 10 4</td></tr>
<tr><td>Oeste (parceiro, sai com o 7)</td><td>A J 9 7 5</td></tr>
<tr><td>Leste (você)</td><td>K 8 2</td></tr>
<tr><td>Sul (declarante)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Contra 3ST, o parceiro sai com o ♦7. 11 − 7 = 4 cartas mais altas que o 7 nas outras três mãos. O morto tem duas (Q, 10) e você tem duas (K, 8). Então o declarante não tem nenhuma e não pode superar o 7.</p>
<p>Quando o morto jogar baixo, você pode jogar o 2 e deixar o 7 do parceiro ganhar a vaza. O parceiro continua com a mão e segue no naipe através do Q 10 do morto até o seu K 8, e a defesa faz todas as vazas de ouros. Se você jogar o K, o Q 10 do morto fará uma vaza quando o naipe continuar.</p>

<h3>O declarante também pode usá-la</h3>
<p>Suponha que Oeste saia com o ♠7 (quarta melhor) contra o seu 3ST. O morto tem ♠A 10 5 e você tem ♠K 9 3. 11 − 7 = 4 cartas mais altas em Norte, Leste e Sul; você vê as quatro (A, 10, K, 9). Leste não tem espada mais alta que o 7. Então você pode jogar baixo do morto e ganhar barato com o 9, guardando o A e o K como paradas.</p>

<h3>A carta mais baixa mostra o comprimento</h3>
<p>Se o parceiro sai com o 2 como quarta melhor, não pode ter uma quinta carta mais baixa: tem exatamente quatro cartas no naipe. Sair com o 3 quando o 2 está visível em outro lugar diz o mesmo. Isso ajuda você a contar a mão do declarante.</p>

<h3>Quando a regra falha</h3>
<p>A Regra do 11 só vale para saídas genuínas de quarta melhor. Não vale para saídas de sequências (o K de KQJ), para a mais alta de nada ou de doubleton, nem para saídas no naipe do parceiro de uma honra com cartas pequenas. Se a conta der um resultado impossível (por exemplo, o declarante precisaria ter um número negativo de cartas mais altas), a saída não era de quarta melhor, e isso também lhe diz alguma coisa.</p>
<div class="tip">Faça a subtração assim que o morto descer, antes de a terceira mão jogar. Assim você sabe na hora se precisa jogar alto ou se pode deixar a carta do parceiro ganhar.</div>
<div class="warn">Não aplique a regra mecanicamente contra contratos em naipe quando o parceiro pode estar saindo de um naipe curto. Use-a quando a saída for claramente a quarta melhor de um naipe longo, o que é mais comum contra sem trunfo.</div>
`,
    keyPoints: [
      'Numa saída de quarta melhor, 11 menos o valor da carta = cartas mais altas nas outras três mãos.',
      'Subtraia o que você vê no morto e na sua mão para saber quantas o declarante tem.',
      'O declarante pode aplicar a mesma conta às mãos dos defensores.',
      'Um 2 de quarta melhor mostra exatamente quatro cartas.',
      'A regra só funciona com saídas genuínas de quarta melhor.',
    ],
    quiz: [
      {
        q: 'O parceiro sai com o 7, quarta melhor. Quantas cartas mais altas que o 7 têm o morto, você e o declarante juntos?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Há sete cartas acima do 7 (8, 9, 10, J, Q, K, A) e o parceiro tem três delas.',
      },
      {
        q: 'O parceiro sai com o ♥6 (quarta melhor) contra 3ST. O morto tem ♥K 9 3 e você tem ♥A 10 4. Quantas copas mais altas que o 6 o declarante tem?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. O morto tem duas mais altas (K, 9) e você tem duas (A, 10), então o declarante tem uma.',
      },
      {
        q: 'O parceiro sai com o ♣2 contra 3ST, jogando saídas de quarta melhor. Quantos paus o parceiro tem?',
        options: ['Três', 'Exatamente quatro', 'Cinco ou mais', 'Impossível saber'],
        answer: 1,
        explain: 'O 2 é a carta mais baixa, então não há carta abaixo dela: como quarta melhor, mostra exatamente quatro paus.',
      },
      {
        q: 'Você é o declarante em 3ST. Oeste sai com o ♠7 (quarta melhor). O morto tem ♠A 10 5 e você tem ♠K 9 3. Quantas espadas mais altas que o 7 Leste tem?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 cartas mais altas em Norte, Leste e Sul, e você vê as quatro (A, 10, K, 9). Leste não tem nenhuma, então você pode ganhar barato com o 9.',
      },
      {
        q: 'Quando a Regra do 11 não se aplica?',
        options: ['Contra sem trunfo', 'Quando a saída não é de quarta melhor, por exemplo a mais alta de uma sequência', 'Quando o morto tem uma honra', 'Quando você tem um singleton'],
        answer: 1,
        explain: 'A conta depende de quem saiu ter exatamente três cartas mais altas. Saídas de sequência, a mais alta de nada e saídas parecidas quebram essa premissa.',
      },
    ],
  },
];
