// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Same layout as src/i18n/en/tutor.ts (see the notes there on parameters).
// Suits are written in the plural ("em copas", "naipe de paus").

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

/** "1 vaza", "2 vazas". */
const plural = (n: number, word: string) => (n === 1 ? word : `${word}s`);
/** A rank with its article: "o K", "a Q", "o 10" (only the queen is feminine). */
const theRank = (rank: number) => `${rank === 12 ? 'a' : 'o'} ${rankLabel(rank)}`;
/** Leading toward the honours in the other hand ("em direção ao rei"). */
const TOWARD = { aq: 'ao A-Q', king: 'ao rei', queen: 'à dama', honours: 'às honras' };
const HONOUR: Record<number, string> = { 14: 'o ás', 13: 'o rei', 12: 'a dama' };
/** "2 ou 4", "1, 3 ou 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}` : String(xs[0]);
};
/** How a signal card looks from across the table. */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Alto-baixo' : 'Baixo-alto'} (${cardName(card)}, depois ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} é sempre baixa`
      : l.sure
        ? `${cardName(card)} é ${l.height === 'high' ? 'alta' : 'baixa'} (todas as cartas pequenas ${l.height === 'high' ? 'mais altas' : 'mais baixas'} já estão localizadas)`
        : `${cardName(card)} parece ${l.height === 'high' ? 'alta' : 'baixa'} (ainda há cartas pequenas ${l.height === 'high' ? 'mais baixas' : 'mais altas'} por aparecer)`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'Saída',
      notStandard: (holding: string, rank: number, why: string) => `De ${holding}, a carta padrão é ${theRank(rank)}: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Tirar os trunfos',
      text: 'Jogar trunfo tira os trunfos dos defensores, para que eles não cortem as suas vencedoras. Tire-os cedo, a menos que precise dos trunfos do morto para cortes.',
    },
    trumpsDrawn: {
      title: 'Trunfos já tirados',
      text: 'Os defensores não têm mais trunfos, então jogar trunfo já não tira nada: o trunfo ganha a vaza numa das suas mãos — útil como entrada — e cada trunfo que você bate obriga os dois defensores a descartar.',
    },
    unblock: {
      title: 'Desbloqueio',
      text: 'Bata primeiro a carta alta da mão curta, para que a mão longa continue ganhando as vazas e possa correr o resto do naipe.',
    },
    cash: {
      title: 'Bater uma vencedora',
      declarer: (card: Card) => `${cardName(card)} é a carta mais alta que resta em ${core.suits[suitOf(card)]}: ganha a vaza, a menos que alguém corte.`,
      defender: 'Faça a sua vaza garantida antes que o declarante descarte perdedoras no naipe longo do morto.',
    },
    crossToOtherHand: {
      title: 'Passar para a outra mão',
      text: 'Jogar uma carta baixa para uma vencedora da outra mão usa essa vencedora como entrada, para que você possa jogar de lá em seguida.',
    },
    leadTowardHonours: {
      title: 'Jogar em direção às honras',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Jogue baixo em direção ${TOWARD[toward]}, para que o defensor à sua esquerda tenha de jogar antes de você escolher a carta da outra mão — é a base da finesse.`,
    },
    develop: {
      title: 'Firmar um naipe',
      text: 'Perder agora uma vaza neste naipe firma as cartas restantes como vencedoras enquanto você ainda controla os outros naipes.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Jogar trunfo',
      text: 'Jogar trunfo reduz os cortes do declarante no morto — é forte quando o morto é curto num naipe lateral.',
    },
    lookForRuff: {
      title: 'Procurar um corte',
      text: 'Jogar um naipe curto é esperar que o parceiro ganhe a mão e lhe dê um corte.',
    },
    returnPartner: {
      title: 'Voltar no naipe do parceiro',
      text: 'O parceiro escolheu este naipe: voltar nele continua o plano do parceiro — firmar as cartas longas dele ou lhe dar um corte — em vez de abrir um naipe novo para o declarante.',
    },
    continueSuit: {
      title: 'Continuar no seu naipe',
      text: 'Você já jogou este naipe antes: jogá-lo de novo continua o trabalho nas vazas que o seu lado está firmando ali, em vez de abrir um naipe novo para o declarante.',
    },
    switchSuits: {
      title: 'Trocar de naipe',
      text: 'Jogue através da força do declarante, ou em direção à fraqueza do morto: o defensor que joga antes da mão forte é quem deve jogar esse naipe.',
    },

    // not following suit
    overruff: {
      title: 'Sobrecortar',
      text: 'Cortar mais alto que o trunfo já jogado ganha a vaza.',
    },
    underruff: {
      title: 'Subcortar',
      text: (forced: boolean) =>
        forced
          ? 'Já há um trunfo mais alto na vaza, então o seu não pode ganhar — mas só lhe restam trunfos, e você precisa jogar um.'
          : 'Já há um trunfo mais alto na vaza, então o seu não pode ganhar: subcortar gasta um trunfo à toa. Descarte uma perdedora de um naipe lateral, a menos que precise guardar todas as cartas laterais.',
    },
    ruffPartnersWinner: {
      title: 'Cortar a vencedora do parceiro',
      text: 'Em geral é desperdício: o parceiro já estava ganhando esta vaza.',
    },
    ruff: {
      title: 'Cortar',
      defender: 'Você não tem mais o naipe jogado, então um corte ganha a vaza.',
      short: 'Esta mão não tem mais trunfos que a outra, então o corte é uma vaza extra: os trunfos da outra mão continuam fazendo as próprias vazas.',
      forced: 'Você não tem mais o naipe que os defensores jogaram, então corte para ganhar a vaza. Um corte na mão longa em trunfos não dá vaza extra e encurta os seus trunfos: se os defensores puderem continuar forçando você a cortar, você pode perder o controle.',
      long: 'Cortar na mão com mais trunfos gasta um trunfo que faria uma vaza de qualquer jeito, então sozinho não ganha nada — ajuda quando firma o resto do naipe ou deixa você nesta mão.',
    },
    discard: {
      title: 'Descarte',
      defender: 'Descarte de um naipe de que você não precisa e guarde comprimento nos naipes em que tem de vigiar as cartas longas do declarante ou do morto.',
      declarer: 'Descarte uma perdedora de um naipe que não pode fazer vazas, guardando as cartas que ainda podem ser necessárias.',
    },

    // defenders' signals
    countSignal: {
      title: 'Sinal de contagem',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `O declarante está jogando este naipe e o parceiro espera a contagem: com ${n} ${core.suits[suit]} (número ${n % 2 ? 'ímpar' : 'par'}), a carta padrão é ${cardName(best)}${n % 2 ? '' : ', depois uma mais baixa (alto-baixo)'}. ${cardName(card)} mostraria número ${n % 2 ? 'par' : 'ímpar'}.`
          : n % 2
            ? `O declarante está jogando este naipe, então mostre a sua contagem: com ${n} ${core.suits[suit]} (número ímpar), jogue a sua menor carta, ${cardName(card)}. Assim o parceiro sabe quantas cartas o declarante tem e quando tomar com o ás.`
            : `O declarante está jogando este naipe, então mostre a sua contagem: com ${n} ${core.suits[suit]} (número par), jogue alto-baixo — ${cardName(card)} agora e uma carta mais baixa na próxima vez. Assim o parceiro sabe quantas cartas o declarante tem e quando tomar com o ás.`,
    },
    attitudeSignal: {
      title: 'Sinal de atitude',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `O parceiro jogou este naipe e espera a sua atitude: você ${reason ? 'gosta' : 'não gosta'} do naipe, então a carta padrão é ${cardName(best)}. ${cardName(card)} diz o contrário.`
          : reason === 'honour'
            ? `O parceiro jogou este naipe: dê atitude. Você tem ${HONOUR[honour]}, então encoraje com a carta pequena mais alta que puder dispensar, ${cardName(card)}, e o parceiro vai continuar.`
            : reason === 'ruff'
              ? `O parceiro jogou este naipe: dê atitude. Com doubleton, comece pela carta mais alta (${cardName(card)}): o alto-baixo pede ao parceiro que continue, e você corta a terceira volta.`
              : `O parceiro jogou este naipe: dê atitude. Nada aqui vale a continuação, então desencoraje com a sua menor carta, ${cardName(card)}; o parceiro vai procurar uma troca.`,
    },
    discardSignal: {
      title: 'Descarte (atitude)',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Você gostaria que o parceiro jogasse ${core.suits[suit]}, mas nenhuma carta do naipe que você pode dispensar é alta o bastante para ser lida como encorajadora; em vez disso, descarte baixo de um naipe que você não quer.`
          : want
            ? right
              ? `Um descarte alto encoraja: ${cardName(card)} pede ao parceiro que jogue ${core.suits[suit]}, onde você tem força.`
              : `Você gostaria que o parceiro jogasse ${core.suits[suit]}, mas ${cardName(card)} é a sua menor carta e desencoraja; uma alta (${cardName(best)}) encorajaria — ou descarte baixo de um naipe que você não quer.`
            : right
              ? `Um descarte baixo desencoraja: ${cardName(card)} diz ao parceiro que não jogue ${core.suits[suit]}.`
              : `Um descarte alto pede ao parceiro que jogue ${core.suits[suit]}, o que você não quer; descarte a sua menor carta (${cardName(best)}) em vez disso.`,
    },
    preferenceSignal: {
      title: 'Sinal de preferência de naipe',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `O parceiro vai cortar esta carta e lê-la como preferência de naipe; sem preferência, jogue uma carta intermediária, como ${cardName(best)}.`
            : `O parceiro vai cortar esta carta e lê-la como preferência de naipe: você quer a volta em ${core.suits[want === 'high' ? sides[1] : sides[0]]}, então jogue ${cardName(best)}.`
          : want === 'middle'
            ? 'O parceiro vai cortar esta carta, e ela também diz qual naipe devolver: sem preferência, jogue uma carta intermediária — nem alta nem baixa.'
            : `O parceiro vai cortar esta carta, e ela também diz qual naipe devolver: uma carta ${want === 'high' ? 'alta' : 'baixa'} pede ${core.suits[want === 'high' ? sides[1] : sides[0]]} (o ${want === 'high' ? 'mais alto' : 'mais baixo'} dos outros dois naipes laterais), onde você tem o ás.`,
    },

    // second hand
    coverHonour: {
      title: 'Cobrir honra com honra',
      text: 'Cobrir obriga o declarante a gastar duas cartas altas para ganhar uma vaza, o que pode promover uma carta menor na sua mão ou na do parceiro.',
      declarer: 'Cobrir obriga os defensores a gastar duas cartas altas para ganhar uma vaza, o que pode promover uma carta menor do seu lado.',
    },
    secondHandLow: {
      title: 'Segunda mão baixa',
      text: 'O parceiro joga depois de você e do parceiro de quem abriu a vaza, então jogar baixo guarda a sua carta alta para capturar algo maior depois.',
    },
    sureTrick: {
      title: 'Fazer uma vaza garantida',
      text: (card: Card) => `${cardName(card)} é a carta mais alta que resta no naipe.`,
      safe: (card: Card) => `${cardName(card)} ganha a vaza, a menos que alguém corte: o defensor que ainda vai jogar não pode ter carta mais alta no naipe.`,
    },
    finesse: {
      title: 'Fazer a finesse',
      text: (card: Card) => `${cardName(card)} só ganha se as cartas mais altas do naipe que lhe faltam estiverem com o defensor que já jogou — é a finesse. Se o defensor que ainda vai jogar tiver uma, ela supera a sua carta.`,
    },
    splitHonours: {
      title: 'Dividir as honras',
      text: 'Jogar uma de duas honras em sequência impede que o declarante ganhe barato com uma carta mais baixa.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'O parceiro está ganhando',
      third: 'A carta do parceiro já está ganhando, então jogue baixo (ou sinalize).',
      fourth: 'Não passe por cima: jogue a sua menor carta.',
      declarer: 'A carta do seu lado está ganhando por enquanto: jogue baixo e guarde as suas cartas altas.',
    },
    overtake: {
      title: 'Passar por cima',
      text: 'A carta do seu lado já estava ganhando: passar por cima gasta uma segunda carta alta na mesma vaza, então faça isso só para desbloquear o naipe ou para ganhar a vaza nesta mão.',
    },
    thirdHandHighEquals: {
      title: 'Terceira mão alta — a menor das equivalentes',
      text: 'Jogue a mais barata de cartas em sequência: assim o parceiro consegue deduzir onde está a mais alta.',
      wrong: (card: Card, cheapest: Card) => `${cardName(cheapest)} faz o mesmo trabalho que ${cardName(card)}: jogue a mais barata de cartas em sequência, assim o parceiro consegue deduzir onde está a mais alta.`,
    },
    thirdHandHigh: {
      title: 'Terceira mão alta',
      text: 'Como a carta do parceiro não está ganhando, jogue alto para ganhar a vaza ou forçar uma carta grande.',
    },
    cantWin: {
      title: 'Não dá para ganhar a vaza',
      third: 'Jogue a sua menor carta (ou dê atitude, se o parceiro jogou o naipe).',
      fourth: 'Jogue a sua menor carta do naipe.',
    },
    duck: {
      title: 'Deixar passar',
      text: 'Você poderia ganhar esta vaza, mas a deixa passar: assim guarda a sua carta alta para uma rodada posterior — para segurar um controle, manter uma entrada ou preservar as comunicações no naipe.',
    },
    winCheaply: {
      title: 'Ganhar barato',
      text: 'Você é o último a jogar: ganhe com a menor carta que resolve.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts
  plan: {
    // sure tricks in one suit
    allWinners: 'todas vencedoras',
    topTricks: (n: number) => `${n} ${plural(n, 'vaza')} ${plural(n, 'firme')}`,
    noTopTricks: 'nenhuma vaza firme',
    cardsOut: (n: number) => `${n} cartas`,

    // summary, notrump
    ntEnough: (total: number, need: number) =>
      `Você tem ${total} vazas firmes e precisa de ${need}: faça as suas vazas — e não bloqueie nenhum naipe (bata primeiro as cartas altas da mão curta).`,
    ntShort: (total: number, need: number) =>
      `Você tem ${total} ${plural(total, 'vaza')} ${plural(total, 'firme')} e precisa de ${need}: encontre mais ${need - total} antes que os defensores firmem o naipe deles.`,
    // summary, suit contracts
    losersOk: (losers: number, allowed: number) =>
      losers === 0
        ? 'Não há perdedoras com que se preocupar: tire os trunfos e faça as suas vazas, a menos que precise de um corte ou de um descarte logo de início.'
        : `Cerca de ${losers} ${plural(losers, 'perdedora')}, e você pode se permitir ${allowed}: tire os trunfos e faça as suas vazas, a menos que precise de um corte ou de um descarte logo de início.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Cerca de ${losers} perdedoras, mas você só pode se permitir ${allowed}: precisa se livrar de ${losers - allowed} (cortando-as, descartando-as em vencedoras extras ou com uma finesse).`,

    // ideas
    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Firme o naipe de ${core.suits[suit]}: com ${total} cartas entre as duas mãos (${missing} com os adversários, ${odds}), as cartas longas de ${SUIT_SYMBOLS[suit]} podem render cerca de ${extra} ${plural(extra, 'vaza')} ${extra === 1 ? 'extra' : 'extras'}.`,
    finesseAQ: (suit: number, holding: string) =>
      `Finesse em ${core.suits[suit]}: jogue em direção ao A-Q (${holding}) e jogue a dama se o rei não aparecer — cerca de 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `Em ${core.suits[suit]}, jogue em direção ao rei (${holding}): ele faz vaza se o ás estiver à sua esquerda — cerca de 50%.`,
    doubleFinesse: (suit: number) =>
      `Finesse dupla em ${core.suits[suit]} (A-J-10): faça a finesse duas vezes; você faz duas vazas em 76% dos casos.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Force o ás de ${core.suits[suit]}: depois K-Q${withJack ? '-J' : ''} lhe ${withJack ? 'darão 2+ vazas' : 'darão 1+ vaza'}.`,
    ntDevelopEarly: 'Em sem trunfo, firme as vazas extras cedo, enquanto ainda controla os naipes — e conte quantas vezes você pode se permitir perder a mão.',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Corte perdedoras ${inDummy ? 'no morto' : 'na sua mão'}, a mão curta em trunfos: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'chicana'})`).join(', ')}. Um corte na mão curta é uma vaza extra; um corte na mão longa em trunfos, não.`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Descartes: ${inDummy ? 'o morto tem' : 'a sua mão tem'} ${extra} ${plural(extra, 'vencedora')} ${extra === 1 ? 'extra' : 'extras'} em ${SUIT_SYMBOLS[suit]} — descarte ${extra === 1 ? 'nela' : 'nelas'} perdedoras de ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')} da outra mão (em geral depois de tirar os trunfos).`,
    trumpsOut: (n: number, odds: string) =>
      `Trunfos: ${n} ainda com os adversários (${odds}). Tire-${n === 1 ? 'o' : 'os'} cedo, a menos que precise dos trunfos do morto para cortes ou tenha de firmar primeiro um naipe lateral.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts
  leads: {
    card: {
      singleton: 'Um singleton: saia com ele.',
      ak: 'Ás de ás-rei: você continua com a mão e vê o morto antes de decidir o que fazer.',
      doubleton: 'A mais alta do doubleton: primeiro a carta alta, depois a baixa (o alto-baixo mostra doubleton e pode lhe render um corte).',
      sequence: (holding: string) => `A mais alta da sequência (${holding}): promete a carta logo abaixo e nega a de cima.`,
      interior: (holding: string, rank: number) => `Sequência interna (${holding}): saia com a mais alta das cartas em sequência, ${theRank(rank)}.`,
      touching: (holding: string) => `A mais alta das honras em sequência (${holding}).`,
      nothing: 'A mais alta de nada, de três cartas pequenas: diz ao parceiro que você não tem honra aqui.',
      small: 'Com quatro ou mais cartas pequenas, saia com a segunda mais alta, para que o parceiro não lhe atribua uma honra.',
      partnerLow: 'Baixa de honra e mais duas no naipe do parceiro (terceira melhor).',
      fourth: (holding: string) => `Quarta melhor do seu naipe mais longo e mais forte (${holding}). O parceiro pode usar a Regra do 11.`,
      third: (holding: string) => `Terceira melhor de uma honra com duas cartas pequenas (${holding}): guarde a honra para capturar uma do declarante.`,
    },
    suit: {
      partnerBid: (suit: number) => `O parceiro marcou ${core.suits[suit]}: sair no naipe do parceiro raramente é errado e em geral é o melhor.`,
      supported: (suit: number) => `Você mostrou ${core.suits[suit]} e o parceiro apoiou: o naipe do seu lado é uma saída natural.`,
      theyBid: (suit: number) => `Os adversários marcaram ${core.suits[suit]} — sair no naipe deles em geral ajuda o declarante.`,
      slamRisky: 'Contra um slam, sair debaixo de uma honra sem cartas em sequência costuma dar ao declarante uma vaza que ele não faria de outro jeito.',
      slamSafe: 'Contra um slam, faça uma saída segura: de cartas baixas você não entrega nada, e uma vaza entregue costuma ser o contrato.',
      // against notrump
      ntLong: (suit: number, n: number) =>
        `Contra sem trunfo, saia do seu naipe mais longo e mais forte (${n} ${core.suits[suit]}): você espera firmar vencedoras com as cartas longas.`,
      ntSequence: 'Uma sequência sólida é segura e cria vazas.',
      ntShort: (n: number) => `${n === 1 ? 'Um singleton' : `Um naipe de ${n} cartas`}: não é a saída ideal contra sem trunfo.`,
      // against a suit contract
      trump: 'Uma saída de trunfo: segura e passiva, e reduz os cortes do morto.',
      singleton: 'Um singleton: você espera que o parceiro ganhe uma vaza cedo e lhe dê um corte.',
      aceAway: 'Nunca saia debaixo de um ás contra um contrato em naipe — e sair com o próprio ás raramente ajuda.',
      sequence: (suit: number) => `A mais alta de uma sequência em ${core.suits[suit]}: segura, e pode firmar vazas.`,
      plain: (suit: number, n: number) => (n === 1 ? `Um singleton de ${core.suits[suit]}.` : `Um naipe de ${core.suits[suit]} com ${n} cartas.`),
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts
  signals: {
    leadBy: {
      you: (card: Card) => `Sua saída: ${cardName(card)}`,
      partner: (card: Card) => `Saída do parceiro: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `Saída de ${core.seats[seat]}: ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'O ás: em geral de ás-rei (contra sem trunfo, também pode pedir ao parceiro que desbloqueie).'
          : 'O ás: em geral de ás-rei, ou um ás singleton ou doubleton.',
      king: (vsNT: boolean) =>
        vsNT ? 'O rei: a mais alta de uma sequência — K-Q (ou A-K). Nega o ás, a menos que venha de A-K.' : 'O rei: a mais alta de uma sequência — K-Q. Nega o ás.',
      queen: 'A dama: a mais alta de uma sequência (Q-J…), nega o rei.',
      jack: 'O valete: a mais alta de J-10…, ou de uma sequência interna como K-J-10. Nega a dama.',
      ten: 'O dez: a mais alta de 10-9…, ou de uma sequência interna (Q-10-9, K-10-9).',
      nine: 'O nove: a mais alta de um naipe curto ou sem valor, ou de 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Uma carta baixa de ${core.suits[suit]}: provavelmente quarta melhor de um naipe longo com honra. Use a Regra do 11.`
          : `Uma carta baixa de ${core.suits[suit]}: em geral terceira ou quarta melhor de uma honra — ou um singleton.`,
    },
    ruleOf11: {
      title: 'Regra do 11',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Regra do 11: 11 − ${rankLabel(rank)} = ${above} cartas mais altas que ${theRank(rank)} nas outras três mãos. Você vê ${seen} (no morto e na sua mão), então o declarante tem ${declarer}.`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${cardName(card)} ${who === null ? 'do parceiro' : `de ${core.seats[who]}`}: contagem`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} pode ser alta ou baixa: espere a próxima carta de ${core.suits[suit]} para ler a contagem.`
            : `${looks(card, look)}: ${look.sure ? '' : 'provavelmente '}número ${look.height === 'high' ? 'par' : 'ímpar'} de ${core.suits[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Os defensores às vezes jogam cartas falsas, então trate isso como uma pista.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `${cardName(card)} do parceiro no seu naipe: atitude`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} pode ser alta ou baixa: ainda não está claro se o parceiro gosta do naipe.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'o parceiro gosta do naipe — continue.' : 'o parceiro provavelmente gosta do naipe.') : `o parceiro ${look.sure ? '' : 'provavelmente '}não gosta do naipe — pense numa troca.`}`,
      },
      discard: {
        title: (card: Card) => `O parceiro descartou ${cardName(card)}`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} pode ser alta ou baixa: ainda não está claro se o parceiro quer que você jogue ${core.suits[suit]}.`
            : `${looks(card, look)}: o parceiro ${look.sure ? '' : 'provavelmente '}${look.height === 'high' ? 'quer' : 'não quer'} que você jogue ${core.suits[suit]}.`,
      },
      preference: {
        title: (card: Card) => `O parceiro joga ${cardName(card)} para você cortar: preferência de naipe`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} não é claramente alta nem baixa: o parceiro pode não ter preferência — devolva o naipe que for melhor para você.`
            : `${looks(card, look)}: o parceiro ${look.sure ? '' : 'provavelmente '}pede a volta em ${core.suits[look.height === 'high' ? sides[1] : sides[0]]}, o ${look.height === 'high' ? 'mais alto' : 'mais baixo'} dos outros dois naipes laterais.`,
      },
    },
    badge: {
      count: (even: boolean) => `Contagem: ${even ? 'par' : 'ímpar'}`,
      attitude: (encourage: boolean) => `Atitude: ${encourage ? 'encoraja' : 'desencoraja'}`,
      discard: (encourage: boolean, suit: number) => `Descarte: ${encourage ? 'encoraja' : 'desencoraja'} ${SUIT_SYMBOLS[suit]}`,
      preference: (suit: number | null) => `Preferência de naipe: ${suit === null ? 'nenhuma' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts
  eval: {
    hcp: 'PH',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Pontos totais',
    totalNote: (lengthPts: number) => `PH + ${lengthPts} pelo comprimento`,
    shape: 'Distribuição',
    balanced: 'balanceada',
    semiBalanced: 'semibalanceada',
    unbalanced: 'desbalanceada',
    losers: 'Perdedoras',
    losersNote: 'Contagem de Perdedoras (LTC)',
    quickTricks: 'Vazas rápidas',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Mais longo',
    controls: (n: number) => `${n} ${plural(n, 'controle')}`,
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts
  par: {
    contract: (contract: string, declarer: number) =>
      `${contract} por ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
