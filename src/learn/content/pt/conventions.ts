// Lessons on the optional conventions: Roman Key Card Blackwood, splinters and
// Drury, new minor forcing and fourth suit forcing, Texas transfers.
// Every example auction is the one the bots bid with these hands.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Blackwood de cartas-chave (RKCB)',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'O 4ST moderno: perguntar pelos quatro ases e pelo rei de trunfo, depois pela dama de trunfo e pelos reis laterais, para marcar os slams que cumprem e parar quando faltam duas cartas-chave.',
    body: `
<h3>Cinco cartas-chave</h3>
<p>O Blackwood simples conta ases, mas o rei e a dama de trunfo importam do mesmo jeito: um slam a que faltam um ás e o rei de trunfo está tão condenado quanto um a que faltam dois ases. O <strong>Blackwood de cartas-chave</strong> (RKCB, Roman Key Card Blackwood) trata o rei de trunfo como um quinto ás. Depois de combinado um naipe, 4ST pergunta pelas <strong>cinco cartas-chave</strong>: os quatro ases e o rei de trunfo. As respostas também informam sobre a dama de trunfo.</p>
<p>O naipe de trunfo é o naipe combinado; se nenhum naipe foi combinado, é o último naipe que o seu lado marcou naturalmente. Os robôs deste app jogam o RKCB por padrão (você pode voltar ao Blackwood simples nas configurações do sistema).</p>

<h3>As respostas (1430)</h3>
<table>
<thead><tr><th>Resposta</th><th>Cartas-chave</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 ou 4</td></tr>
<tr><td>5♦</td><td>0 ou 3</td></tr>
<tr><td>5♥</td><td>2, sem a dama de trunfo</td></tr>
<tr><td>5♠</td><td>2, com a dama de trunfo</td></tr>
</tbody>
</table>
<p>O nome “1430” vem das duas primeiras respostas: 5♣ mostra uma ou quatro, 5♦ zero ou três. Quem pergunta quase sempre consegue saber qual. Conte as suas próprias cartas-chave e lembre-se do que o parceiro mostrou: um parceiro que abriu e fez um apoio forte não pode ter zero cartas-chave, porque não há outras cartas altas suficientes fora da sua mão para completar os pontos.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Espadas combinadas; o parceiro marca 4ST: responda 5♥"></div>
<p>Duas cartas-chave, o ♥A e o ♠K, mas não a ♠Q: 5♥.</p>

<h3>Depois da resposta</h3>
<ul>
<li><strong>Faltam duas cartas-chave</strong>, ou uma e a dama de trunfo: pare em cinco no naipe de trunfo. O parceiro tem de passar.</li>
<li><strong>Falta uma</strong> e a dama é sua: marque o pequeno slam.</li>
<li><strong>Não falta nenhuma</strong>: marque o pequeno slam, ou procure o grand.</li>
</ul>
<p>Quem pergunta é o capitão. Depois que o parceiro responde, quem perguntou decide, e o parceiro passa sobre o sign-off ou sobre o slam.</p>

<h3>A pergunta da dama</h3>
<p>Depois de 5♣ ou 5♦, a dama de trunfo continua desconhecida. Se ela importar, quem perguntou marca o <strong>degrau seguinte</strong>, pulando o naipe de trunfo: 5♦ sobre 5♣, 5♥ sobre 5♦. O parceiro responde:</p>
<ul>
<li>sem a dama: volta ao naipe de trunfo no nível mais barato;</li>
<li>com a dama: marca seis no naipe de trunfo (ou 5ST, quando seis no trunfo seria a resposta “sem dama”).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Norte abre 2♣ e Sul mostra um bom naipe de cinco espadas."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Norte tem os quatro ases, então o 5♣ de Sul mostra uma carta-chave: o ♠K. Todas as cartas-chave estão presentes, mas a ♠Q não, pelo que Norte sabe, então Norte pergunta com 5♦. O 5♠ de Sul nega a dama, e Norte se contenta com 6♠: um grand slam sem a dama de trunfo dependeria de uma divisão de sorte.</p>

<h3>Perguntando pelos reis</h3>
<p>Quando as cinco cartas-chave e a dama de trunfo estão com vocês e um grand slam é possível, quem perguntou marca <strong>5ST</strong> para perguntar pelos reis laterais (o rei de trunfo já foi contado): 6♣ = nenhum, 6♦ = um, 6♥ = dois, 6♠ = três. 5ST promete que não falta nada, então o parceiro pode marcar o grand slam com vazas extras.</p>

<h3>Um exemplo completo</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P 7H P P P" data-dealer="N"></div>
<p>Norte salta para 4♥ com apoio de quatro cartas e 19+ pontos. Sul tem 17 PH e uma fonte de vazas em ouros, então o slam é provável. 5♣ mostra uma ou quatro cartas-chave. Sul tem só o ♣A, e o apoio forte de Norte não se completa sem ases, então são quatro. Resta uma pergunta, a ♥Q, e 5♦ a faz. Norte tem a dama e marca 6♥. Agora Sul pode contar treze vazas: quatro de copas, cinco de ouros (o ♦A de Norte com os ♦KQJ10 de Sul) e o ás e o rei de espadas e de paus. Sul marca 7♥ e Norte passa.</p>
<div class="tip">Antes de marcar 4ST, garanta que a resposta não pode levá-lo além do contrato que você quer. Com paus ou ouros como trunfo, uma resposta de 5♥ ou 5♠ não deixa como parar no nível 5, então você precisa saber que não podem faltar duas cartas-chave.</div>
<div class="warn">O RKCB precisa de um naipe de trunfo combinado. Depois de uma voz natural de sem trunfo do parceiro, 4ST é quantitativo. Com uma chicana, o RKCB não diz se as cartas-chave do parceiro são úteis: faça um cue-bid.</div>
`,
    keyPoints: [
      'O RKCB pergunta pelas cinco cartas-chave: os quatro ases e o rei de trunfo.',
      'Respostas (1430): 5♣ 1 ou 4, 5♦ 0 ou 3, 5♥ 2 sem a dama de trunfo, 5♠ 2 com ela.',
      'Faltando duas cartas-chave (ou uma e a dama): pare no nível 5. Faltando uma: marque o pequeno slam.',
      'Depois de 5♣ ou 5♦, o degrau seguinte pergunta pela dama de trunfo; sem ela, o parceiro volta ao naipe de trunfo.',
      'Depois, 5ST pergunta pelos reis laterais e promete todas as cartas-chave e a dama de trunfo.',
    ],
    quiz: [
      {
        q: 'Copas estão combinadas e o parceiro marca 4ST (RKCB). Você tem ♠A72 ♥K965 ♦Q84 ♣J53. O que responde?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Duas cartas-chave, o ♠A e o ♥K, sem a ♥Q: 5♥.',
      },
      {
        q: 'O que mostra uma resposta de 5♦ ao RKCB?',
        options: ['Uma carta-chave', 'Zero ou três cartas-chave', 'Duas cartas-chave e a dama de trunfo', 'Ouros'],
        answer: 1,
        explain: 'Nas respostas 1430, 5♣ é uma ou quatro, 5♦ zero ou três; quem pergunta deduz qual pelo leilão.',
      },
      {
        q: 'Espadas estão combinadas. Você perguntou com 4ST tendo duas cartas-chave e a ♠Q, e o parceiro responde 5♥ (duas sem a dama). E agora?',
        options: ['Passar', '6♠: falta uma carta-chave, mas a dama é sua', '5♠: faltam duas cartas-chave', '5ST'],
        answer: 1,
        explain: 'Duas mais duas são quatro cartas-chave, então falta uma, e você mesmo tem a dama de trunfo. Marque o pequeno slam.',
      },
      {
        q: 'Espadas estão combinadas. O 5♣ do parceiro mostra uma carta-chave e você tem as outras quatro, mas não a ♠Q. Qual voz pergunta pela dama de trunfo?',
        options: ['5♦', '5♥', '5♠', '5ST'],
        answer: 0,
        explain: 'A pergunta da dama é o degrau seguinte acima da resposta que não seja o naipe de trunfo: 5♦ sobre 5♣.',
      },
      {
        q: 'Todas as cartas-chave e a dama de trunfo são suas e você pensa num grand slam. O que 5ST pergunta?',
        options: ['Pelos ases de novo', 'Quantos reis laterais o parceiro tem', 'Pela dama de trunfo', 'Nada: é para jogar'],
        answer: 1,
        explain: 'Depois do RKCB, 5ST pergunta pelos reis laterais (o rei de trunfo foi contado como carta-chave) e promete que não falta nenhuma carta-chave.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Apoios splinter e Drury reverso',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Dois apoios ao rico do parceiro: o splinter, que mostra valores de game e um naipe curto para que o abridor avalie o slam, e o Drury, que permite a uma mão que já passou mostrar um apoio limite com segurança.',
    body: `
<h3>Apoios splinter</h3>
<p>Um <strong>splinter</strong> é um salto duplo em naipe novo depois que o parceiro abre 1♥ ou 1♠. Mostra quatro ou mais trunfos, valores de game (cerca de 13-16 pontos contando o naipe curto) e singleton ou chicana no naipe marcado. Não diz mais nada sobre esse naipe, por isso é alertado.</p>
<table>
<thead><tr><th>Abertura</th><th>Splinters</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="O parceiro abriu 1♠: marque 4♥"></div>
<p>10 PH, quatro trunfos e singleton de copas: 10 + 3 pelo singleton = 13 pontos de apoio. 4♥ diz tudo isso ao parceiro numa só voz. Com uma mão mais forte, comece com Jacoby 2ST; com 10-12 pontos, faça um apoio limite.</p>

<h3>A decisão do abridor: valores úteis</h3>
<p>Diante de um splinter, o abridor conta só as cartas altas que trabalham. Honras diante do singleton do parceiro são em grande parte desperdiçadas: um rei ou uma dama ali nunca vai fazer vaza, porque o parceiro corta o naipe. Só o ás continua contando. Sem valores desperdiçados e com cerca de 16 ou mais pontos úteis, o abridor procura o slam; senão, para em quatro no rico.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Norte tem 14 PH, mas o ♥K e o ♥J estão diante do singleton de Sul. Sem eles, Norte tem cerca de 10 pontos úteis, então para. Há onze vazas, não doze.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Aqui Norte não tem nada em paus, então os 15 PH trabalham todos, e as copas se encaixam bem. Norte faz cue-bid de 4♦, mostrando controle em ouros e interesse em slam. Sul coopera com 4♥ (o ♥A), e Norte pergunta pelas cartas-chave. O 5♠ de Sul mostra duas cartas-chave e a dama de trunfo, e Norte marca 6♠.</p>

<h3>Drury reverso</h3>
<p>Em terceira ou quarta posição, o parceiro pode abrir um pouco leve. Se você já passou e tem um apoio limite (três ou mais trunfos e 10-12 pontos), um salto a três no rico pode levá-los alto demais diante de uma abertura leve. O <strong>Drury reverso</strong> resolve isso: uma mão que já passou marca <strong>2♣</strong> sobre o 1♥ ou 1♠ do parceiro para mostrar três ou mais trunfos e 10-12 pontos. É artificial e não diz nada sobre paus.</p>
<ul>
<li>O abridor remarca <strong>dois no rico</strong> com uma abertura mínima ou leve: não há game, e você passa.</li>
<li>O abridor marca o <strong>game</strong> com uma abertura completa e valores extras.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Norte deu as cartas e passou; Sul abriu 1♠ em terceira posição."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>O 1♠ de Sul tem só 11 PH. Sobre o Drury, 2♠ diz “não há game”, e a dupla para com segurança: nove vazas são o limite.</p>
<div class="tip">O Drury é só para mãos que já passaram, e precisa ser combinado. Neste app ele vem desligado por padrão; ligue-o nas configurações do sistema para treiná-lo.</div>
<div class="warn">Um splinter promete quatro trunfos. Com só três, faça outra voz: o parceiro vai contar com o quarto trunfo para cortar o naipe curto.</div>
`,
    keyPoints: [
      'Um splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) mostra quatro ou mais trunfos, valores de game e singleton ou chicana no naipe marcado.',
      'Diante de um splinter, conte só os valores úteis: honras diante do naipe curto são desperdiçadas, exceto o ás.',
      'Com valores desperdiçados, o abridor para no game; com valores úteis, faz cue-bid ou pergunta pelas cartas-chave.',
      'Drury reverso: o 2♣ de uma mão que já passou sobre 1♥/1♠ mostra três ou mais trunfos e 10-12 pontos.',
      'Sobre o Drury, dois no rico é mínimo; o game mostra valores extras.',
    ],
    quiz: [
      {
        q: 'O parceiro abre 1♠. Você tem ♠KQ74 ♥A853 ♦K962 ♣5 (12 PH). O que marca?',
        options: ['2ST', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Quatro trunfos, singleton de paus e 12 + 3 = 15 pontos de apoio: o splinter 4♣ descreve a mão numa só voz.',
      },
      {
        q: 'O parceiro abre 1♥ e você marca 3♠. O que mostrou?',
        options: ['Espadas longas', 'Quatro ou mais copas, valores de game e singleton ou chicana em espadas', 'Uma mão fraca com espadas', 'Uma parada em espadas'],
        answer: 1,
        explain: 'Sobre 1♥, 3♠ é um salto duplo em naipe novo: um splinter.',
      },
      {
        q: 'Você abriu 1♠ com ♠AK1063 ♥KQ5 ♦Q84 ♣K7 e o parceiro fez splinter com 4♥. O que faz?',
        options: ['Marcar 4♠: o seu ♥K e a sua ♥Q estão desperdiçados', 'Marcar 4ST', 'Fazer cue-bid de 5♣', 'Marcar 6♠'],
        answer: 0,
        explain: 'Cinco dos seus 17 PH estão diante do naipe curto do parceiro em copas e não vão fazer vazas. Com cerca de 12 pontos úteis, pare.',
      },
      {
        q: 'Quem pode usar o Drury reverso?',
        options: ['Qualquer respondedor com apoio', 'Uma mão que já passou, com três ou mais trunfos e 10-12 pontos, depois que o parceiro abre 1♥ ou 1♠', 'Uma mão que já passou, com paus longos', 'O abridor com uma mão forte'],
        answer: 1,
        explain: 'O Drury é um apoio limite de mão que já passou, que mantém o leilão baixo diante de uma abertura possivelmente leve em terceira ou quarta posição.',
      },
      {
        q: 'O parceiro, que já passou, marca 2♣ (Drury) sobre o seu 1♥ em terceira posição. Você tem uns 11 pontos leves. O que remarca?',
        options: ['2♥', '3♥', '4♥', '2ST'],
        answer: 0,
        explain: 'Dois no rico diz que você tem mínimo e não há game; o parceiro passa.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Novo menor forcing e quarto naipe forcing',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Duas vozes artificiais que permitem ao respondedor perguntar em vez de adivinhar: o novo menor forcing depois da remarcação de 1ST do abridor, e o quarto naipe forcing quando três naipes já foram marcados.',
    body: `
<h3>Por que o respondedor precisa perguntar</h3>
<p>Depois de 1♦ – 1♠ – 1ST, um respondedor com cinco espadas e valores de game gostaria de saber se o abridor tem três espadas. 3♠ seria só convite; 4♠ poderia cair num fit 5-2; 3ST poderia perder um fit 5-3. As vozes naturais não conseguem fazer a pergunta, então uma voz artificial a faz.</p>

<h3>Novo menor forcing</h3>
<p>Depois da remarcação de 1ST do abridor, a voz do respondedor no <strong>outro naipe pobre</strong> no nível 2 (1♣ – 1♥ – 1ST – 2♦, ou 1♦ – 1♠ – 1ST – 2♣) é artificial e forcing por uma volta. Mostra 11 ou mais pontos e pergunta sobre o rico do respondedor. O respondedor tem exatamente cinco cartas nele (depois de 1♠, talvez também quatro copas; com quatro cartas em cada rico teria respondido 1♥); com seis, o respondedor simplesmente remarca o rico ou marca o game.</p>
<table>
<thead><tr><th>Resposta do abridor</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>2 no rico do respondedor</td><td>Apoio de três cartas, mínimo (12-13)</td></tr>
<tr><td>3 no rico do respondedor</td><td>Apoio de três cartas, máximo (14)</td></tr>
<tr><td>2♥ ou 3♥ (depois de 1♠)</td><td>Quatro copas, mínimo ou máximo</td></tr>
<tr><td>2ST ou 3ST</td><td>Nenhuma das duas coisas, mínimo ou máximo</td></tr>
</tbody>
</table>
<p>O respondedor então decide o contrato: game com 13 ou mais (ou diante de um máximo), convite com 11-12 diante de um mínimo, e sem trunfo sem fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Sul tem 14 PH e cinco espadas. 2♣ pergunta; o 2♠ de Norte mostra apoio de três cartas, e Sul marca o game em espadas, onde o valor dos cortes rende onze vazas.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Com 11 PH e cinco copas (♠5 ♥AQJ62 ♦A32 ♣9743), Sul pergunta com 2♣ e, diante de um mínimo com três copas, convida com 3♥. Norte tem mínimo e passa.</p>

<h3>Quarto naipe forcing</h3>
<p>Quando três naipes foram marcados naturalmente, a voz do respondedor no <strong>quarto naipe</strong> é artificial e forcing de game. O respondedor tem valores de game, mas nenhuma voz clara: muitas vezes um naipe de cinco cartas à procura de apoio de três, ou uma mão que poderia jogar 3ST se ao menos o quarto naipe estivesse parado.</p>
<p>O abridor descreve mais a mão, nesta ordem:</p>
<ol>
<li>Apoio de três cartas para o naipe do respondedor: apoie.</li>
<li>Parada no quarto naipe: marque sem trunfo.</li>
<li>Comprimento extra: remarque um segundo naipe de cinco cartas, ou o primeiro naipe.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Sul tem 14 PH e cinco boas copas. 2♣, o quarto naipe, pede a Norte que se descreva. Norte não tem apoio de três cartas em copas, mas tem os paus parados, então marca 2ST, e Sul sobe para 3ST.</p>
<div class="tip">Com uma mão balanceada de game, o quarto naipe parado e nenhum rico de cinco cartas para verificar, simplesmente marque 3ST. O quarto naipe forcing é para mãos que precisam de uma resposta.</div>
<div class="warn">As duas vozes são artificiais: não dizem nada sobre o naipe pobre nem sobre o quarto naipe. Alerte-as, e nunca passe sobre elas.</div>
`,
    keyPoints: [
      'Novo menor forcing: 1m – 1M – 1ST – dois no outro pobre pergunta por apoio de três cartas (ou quatro copas depois de 1♠), com 11+ pontos.',
      'O abridor mostra apoio ou quatro copas no nível 2 com mínimo e no nível 3 com máximo; 2ST ou 3ST nega as duas coisas.',
      'Quarto naipe forcing: a voz do respondedor no quarto naipe é artificial e forcing de game.',
      'O abridor responde primeiro com apoio para o naipe do respondedor, depois sem trunfo com parada, depois comprimento extra.',
      'Com uma mão balanceada, parada no quarto naipe e nenhum rico de cinco cartas para verificar, marque 3ST direto.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1ST – ? Você tem ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 PH). O que marca?',
        options: ['2♠', '3♠', '2♦', '3ST'],
        answer: 2,
        explain: '2♦, novo menor forcing, pergunta se o abridor tem três espadas (ou quatro copas). Depois você pode escolher entre espadas e sem trunfo.',
      },
      {
        q: '1♦ – 1♥ – 1ST – 2♣. Você abriu com ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 PH). O que responde?',
        options: ['2♦', '2♥', '3♥', '2ST'],
        answer: 2,
        explain: 'Apoio de três cartas em copas com máximo para a remarcação de 1ST: salte para 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. O que 2♦ mostra?',
        options: ['Ouros longos', 'Uma voz artificial forcing de game que pede ao abridor que descreva a mão', 'Uma mão fraca', 'Apoio em espadas'],
        answer: 1,
        explain: 'Ouros é o quarto naipe. O respondedor tem valores de game e está perguntando, não mostrando ouros.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Você abriu com ♠AQ74 ♥J5 ♦K103 ♣KJ96. O que marca?',
        options: ['2♥', '2ST', '3♣', '2♠'],
        answer: 1,
        explain: 'Sem apoio de três cartas em copas, mas o ♦K10x para os ouros: marque sem trunfo.',
      },
      {
        q: 'Depois de 1♦ – 1♠ – 1ST, qual mão deve usar o novo menor forcing?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Cinco espadas e 12 PH: pergunte por apoio de três cartas. A primeira mão é fraca demais, a terceira deve remarcar 2♠, e a última, com quatro espadas e 12 PH, marca 3ST.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Transfers Texas',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Como marcar game num rico de seis cartas diante de 1ST ou 2ST de modo que a mão forte o jogue, e como seguir rumo ao slam.',
    body: `
<h3>Transfers no nível 4</h3>
<p>Diante do 1ST do parceiro, uma mão com um rico de seis cartas e força para game quer jogar quatro no rico, e quer que o abridor de sem trunfo seja o declarante, para que a saída venha em direção à mão forte. Os <strong>transfers Texas</strong> fazem isso numa só voz:</p>
<table>
<thead><tr><th>Voz</th><th>Significado</th><th>O abridor marca</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Seis ou mais copas, valores de game</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Seis ou mais espadas, valores de game</td><td>4♠</td></tr>
</tbody>
</table>
<p>O abridor tem de completar o transfer. O respondedor passa se não tiver interesse em slam.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Sul tem 10 PH e seis espadas: o bastante para game, mas não para slam. 4♥ é o transfer, Norte marca 4♠ e Sul passa. Norte é o declarante, então a saída vem em direção aos reis de Norte, e não através deles.</p>

<h3>Texas ou Jacoby?</h3>
<table>
<thead><tr><th>Mão do respondedor</th><th>Plano</th></tr></thead>
<tbody>
<tr><td>0-7, cinco ou mais cartas</td><td>Transfer Jacoby, depois passo</td></tr>
<tr><td>8-9, seis cartas</td><td>Transfer Jacoby, depois apoio a três</td></tr>
<tr><td>Valores de game, exatamente cinco cartas</td><td>Transfer Jacoby, depois 3ST: o abridor escolhe</td></tr>
<tr><td>Valores de game, seis ou mais cartas</td><td>Texas: 4♦ ou 4♥</td></tr>
<tr><td>Interesse em slam, seis ou mais cartas</td><td>Texas, depois 4ST (Blackwood de cartas-chave)</td></tr>
</tbody>
</table>

<h3>Seguindo rumo ao slam</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Sul tem 15 PH e um forte naipe de seis copas diante de 15-17: o slam é provável. O Texas define copas como trunfo, e 4ST pergunta pelas cartas-chave. O 5♥ de Norte mostra duas, o ♥A e o ♦A, sem a dama. Sul tem o ♥K, o ♣A e a ♥Q, então falta só uma carta-chave, e Sul marca 6♥.</p>

<h3>Depois de 2ST</h3>
<p>As mesmas vozes funcionam sobre uma abertura de 2ST (20-21), em que até 4 pontos bastam para game:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">O Texas faz da mão forte o declarante e poupa espaço para o leilão de slam: depois do transfer, 4ST é o Blackwood de cartas-chave para o rico.</div>
<div class="warn">4♣ sobre 1ST ou 2ST é Gerber, não Texas. E o abridor nunca deve passar sobre 4♦ ou 4♥: o transfer tem de ser completado.</div>
`,
    keyPoints: [
      'Texas: 1ST (ou 2ST) – 4♦ mostra seis ou mais copas, 4♥ seis ou mais espadas, com valores de game.',
      'O abridor sempre completa o transfer, então o abridor de sem trunfo é o declarante.',
      'O respondedor passa sem interesse em slam; com interesse, Texas e depois 4ST pergunta pelas cartas-chave.',
      'Com exatamente cinco cartas e valores de game, use em vez disso um transfer Jacoby e depois 3ST.',
      'Mãos de convite fazem o transfer no nível 2 e apoiam a três.',
    ],
    quiz: [
      {
        q: 'O parceiro abre 1ST. Você tem ♠KQ10965 ♥A4 ♦K73 ♣85 (12 PH). O que marca?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Seis espadas e valores de game: 4♥ é um transfer Texas, e o parceiro marca 4♠.',
      },
      {
        q: '1ST – 4♦. O que o abridor marca?',
        options: ['Passo', '4♥', '4ST', '5♦'],
        answer: 1,
        explain: '4♦ mostra seis ou mais copas; o abridor completa o transfer com 4♥.',
      },
      {
        q: 'O parceiro abre 1ST. Você tem ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 PH, cinco copas). Qual é o seu plano?',
        options: ['4♦ (Texas)', '2♦, depois 3ST', '2♦, depois 4♥', '3ST'],
        answer: 1,
        explain: 'Com exatamente cinco copas, faça o transfer e marque 3ST: o abridor escolhe 4♥ com apoio de três cartas e passa com duas.',
      },
      {
        q: '1ST – 4♥ – 4♠ – 4ST. O que é 4ST?',
        options: ['Quantitativo', 'Blackwood de cartas-chave para espadas', 'Para jogar', 'Gerber'],
        answer: 1,
        explain: 'O transfer Texas definiu espadas como trunfo, então 4ST pergunta pelas cartas-chave.',
      },
      {
        q: 'O parceiro abre 2ST. Você tem ♠64 ♥Q97543 ♦AJ9 ♣87 (7 PH). O que marca?',
        options: ['3♦', '4♦', '3♥', 'Passo'],
        answer: 1,
        explain: 'Seis copas e o bastante para game diante de 20-21: Texas 4♦, e o parceiro joga 4♥.',
      },
    ],
  },
];
