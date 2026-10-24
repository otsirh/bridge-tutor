// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Same layout as src/i18n/en/tutor.ts (see the notes there on parameters).
// Suits arrive as indexes; "picas" is feminine, the other suits masculine, so
// sentences that need an article or an adjective name the cards ("las cartas
// de picas") or use `theSuit`.

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

/** "2 bazas", "1 baza". */
const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);
/** "3 corazones", "1 pica". */
const nSuit = (n: number, suit: number) => `${n} ${n === 1 ? core.suitSingular[suit] : core.suits[suit]}`;
/** "los corazones", "las picas". */
const theSuit = (suit: number) => `${suit === 3 ? 'las' : 'los'} ${core.suits[suit]}`;
/** Playing toward the honours in the other hand. */
const TOWARD = { aq: 'el A-Q', king: 'el Rey', queen: 'la Dama', honours: 'los honores' };
const HONOUR: Record<number, string> = { 14: 'el As', 13: 'el Rey', 12: 'la Dama' };
/** "2 o 4", "1, 3 o 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}` : String(xs[0]);
};
const highLow = (h: Height | null) => (h === 'high' ? 'alta' : 'baja');
/** How a signal card looks from across the table: "Alta-baja (♣8, luego ♣3)", "♣7 parece alta (…)". */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Alta-baja' : 'Baja-alta'} (${cardName(card)}, luego ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} siempre es baja`
      : l.sure
        ? `${cardName(card)} es ${highLow(l.height)} (todas las cartas pequeñas ${l.height === 'high' ? 'más altas' : 'más bajas'} están localizadas)`
        : `${cardName(card)} parece ${highLow(l.height)} (aún faltan por salir algunas cartas pequeñas ${l.height === 'high' ? 'más bajas' : 'más altas'})`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts — the principle behind a card: a short title (the
  // review also shows it alone) and one or two sentences of explanation.
  principles: {
    openingLead: {
      title: 'Salida',
      /** The card led is not the book card from this holding; `why` explains the book card. */
      notStandard: (holding: string, rank: number, why: string) => `Con ${holding} la carta estándar es ${rankLabel(rank)}: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Destriunfar',
      text: 'Jugar triunfo quita los triunfos a los defensores para que no puedan fallar tus ganadoras. Destriunfa pronto, salvo que necesites los triunfos del muerto para fallar.',
    },
    unblock: {
      title: 'Desbloqueo',
      text: 'Cobra primero la carta alta de la mano corta: así terminas en la mano larga y puedes cobrar el resto del palo.',
    },
    cash: {
      title: 'Cobrar una ganadora',
      declarer: (card: Card) => `${cardName(card)} es la carta más alta que queda en ${core.suits[suitOf(card)]}: gana la baza salvo que alguien falle.`,
      defender: 'Cobra tu baza segura antes de que el declarante pueda descartar perdedoras sobre el palo largo del muerto.',
    },
    crossToOtherHand: {
      title: 'Pasar a la otra mano',
      text: 'Jugar una carta pequeña hacia una ganadora de la otra mano la usa como entrada, para poder jugar desde allí a continuación.',
    },
    leadTowardHonours: {
      title: 'Jugar hacia los honores',
      /** What the other hand holds: A-Q, the king, the queen, or several honours. */
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Juega pequeño hacia ${TOWARD[toward]}: así el defensor de tu izquierda tiene que jugar antes de que elijas la carta de la otra mano. Es la base del impasse.`,
    },
    develop: {
      title: 'Afirmar un palo',
      text: 'Ceder ahora una baza en este palo afirma las cartas restantes como ganadoras mientras todavía controlas los demás palos.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Salida de triunfo',
      text: 'Salir de triunfo reduce los fallos del declarante en el muerto; es muy eficaz cuando el muerto es corto en un palo lateral.',
    },
    lookForRuff: {
      title: 'Buscar un fallo',
      text: 'Al salir de un palo corto esperas que tu compañero tome la mano y te dé un fallo.',
    },
    switchSuits: {
      title: 'Cambiar de palo',
      text: 'Juega a través de la fuerza del declarante o hacia la debilidad del muerto: ese palo lo debe jugar el defensor que está delante de la mano fuerte.',
    },

    // not following suit
    overruff: {
      title: 'Sobrefallo',
      text: 'Fallar con un triunfo más alto que el ya jugado gana la baza.',
    },
    ruffPartnersWinner: {
      title: 'Fallar la ganadora del compañero',
      text: 'Normalmente es un desperdicio: tu compañero ya estaba ganando esta baza.',
    },
    ruff: {
      title: 'Fallo',
      declarer: 'Fallar en la mano con menos triunfos gana una baza; fallar en la mano larga en triunfos solo gasta un triunfo que harías de todos modos.',
      defender: 'No te quedan cartas del palo jugado, así que un fallo gana la baza.',
    },
    discard: {
      title: 'Descarte',
      defender: 'Descártate de un palo que no necesites y conserva la longitud en los palos en los que debes vigilar las cartas largas del declarante o del muerto.',
      declarer: 'Descarta una perdedora de un palo que no puede hacer bazas y conserva las cartas que todavía puedas necesitar.',
    },

    // defenders' signals: `right` = the card says what this hand should say; `best` = the card that would
    countSignal: {
      title: 'Señal de cuenta',
      /** `n` cards in the suit before playing. */
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `El declarante está jugando este palo y tu compañero espera tu cuenta: con ${nSuit(n, suit)} (un número ${n % 2 ? 'impar' : 'par'}) la carta estándar es ${cardName(best)}${n % 2 ? '' : ' y luego una más baja (alta-baja)'}. ${cardName(card)} mostraría un número ${n % 2 ? 'par' : 'impar'}.`
          : n % 2
            ? `El declarante está jugando este palo, así que da tu cuenta: con ${nSuit(n, suit)} (un número impar) juega tu carta más baja, ${cardName(card)}. Así tu compañero puede saber cuántas tiene el declarante y cuándo tomar con el As.`
            : `El declarante está jugando este palo, así que da tu cuenta: con ${nSuit(n, suit)} (un número par) juega alta-baja: ${cardName(card)} ahora y una carta más baja la próxima vez. Así tu compañero puede saber cuántas tiene el declarante y cuándo tomar con el As.`,
    },
    attitudeSignal: {
      title: 'Señal de actitud',
      /** Why you like partner's suit (an honour — the highest you hold is `honour` — or a doubleton to ruff), or null. */
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Tu compañero ha salido en este palo y espera tu actitud: ${reason ? 'te gusta' : 'no te gusta'}, así que la carta estándar es ${cardName(best)}. ${cardName(card)} dice lo contrario.`
          : reason === 'honour'
            ? `Tu compañero ha salido en este palo: da tu actitud. Tienes ${HONOUR[honour]}, así que anima con la carta pequeña más alta de la que puedas prescindir, ${cardName(card)}, y tu compañero continuará.`
            : reason === 'ruff'
              ? `Tu compañero ha salido en este palo: da tu actitud. Con doubleton, empieza por la carta más alta (${cardName(card)}): alta-baja le pide que continúe, y fallarás la tercera vuelta.`
              : `Tu compañero ha salido en este palo: da tu actitud. Aquí no hay nada que merezca la pena continuar, así que desanima con tu carta más baja, ${cardName(card)}; tu compañero buscará un cambio.`,
    },
    discardSignal: {
      title: 'Descarte (actitud)',
      /** `want`: you would like this suit led; `clear`: you have a spot card high enough to say so. */
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Te gustaría que tu compañero jugara ${core.suits[suit]}, pero no tienes en ese palo ninguna carta prescindible lo bastante alta para que se lea como positiva; descártate mejor con una carta baja de un palo que no quieras.`
          : want
            ? right
              ? `Un descarte alto anima: ${cardName(card)} le pide a tu compañero que juegue ${core.suits[suit]}, donde tienes fuerza.`
              : `Te gustaría que tu compañero jugara ${core.suits[suit]}, pero ${cardName(card)} es tu carta más baja y desanima; una alta (${cardName(best)}) animaría. O bien descártate con una baja de un palo que no quieras.`
            : right
              ? `Un descarte bajo desanima: ${cardName(card)} le dice a tu compañero que no juegue ${core.suits[suit]}.`
              : `Un descarte alto le pide a tu compañero que juegue ${core.suits[suit]}, y no lo quieres; descártate mejor con tu carta más baja (${cardName(best)}).`,
    },
    preferenceSignal: {
      title: 'Señal de preferencia de palo',
      /** Leading for partner to ruff; `sides` = the other two side suits, lower first; `want` high = the higher one. */
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Tu compañero va a fallar esta carta y la leerá como preferencia de palo; si no tienes preferencia, juega una carta intermedia, como ${cardName(best)}.`
            : `Tu compañero va a fallar esta carta y la leerá como preferencia de palo: quieres que te devuelva ${core.suits[want === 'high' ? sides[1] : sides[0]]}, así que juega ${cardName(best)}.`
          : want === 'middle'
            ? 'Tu compañero va a fallar esta carta, y tu carta también le dice qué palo devolver: sin preferencia, juega una carta intermedia, ni alta ni baja.'
            : `Tu compañero va a fallar esta carta, y tu carta también le dice qué palo devolver: una carta ${highLow(want)} pide ${core.suits[want === 'high' ? sides[1] : sides[0]]} (el ${want === 'high' ? 'más alto' : 'más bajo'} de los otros dos palos laterales), donde tienes el As.`,
    },

    // second hand
    coverHonour: {
      title: 'Cubrir honor con honor',
      text: 'Cubrir obliga al declarante a gastar dos cartas altas para ganar una sola baza, y puede promocionar una carta más baja tuya o de tu compañero.',
    },
    secondHandLow: {
      title: 'Segunda mano baja',
      text: 'Tu compañero juega después de ti y del compañero del que ha salido, así que jugar bajo conserva tu carta alta para capturar algo más grande después.',
    },
    sureTrick: {
      title: 'Ganar una baza segura',
      text: (card: Card) => `${cardName(card)} es la carta más alta que queda en el palo.`,
    },
    splitHonours: {
      title: 'Partir los honores',
      text: 'Jugar uno de tus honores seguidos impide que el declarante gane barato con una carta más baja.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'Tu compañero va ganando',
      third: 'La carta de tu compañero ya gana la baza, así que juega bajo (o haz una señal).',
      fourth: 'No le superes: juega tu carta más baja.',
    },
    thirdHandHighEquals: {
      title: 'Tercera mano alta: la más baja de las equivalentes',
      text: 'Juega la más barata de tus cartas seguidas: así tu compañero puede deducir dónde está la más alta.',
    },
    thirdHandHigh: {
      title: 'Tercera mano alta',
      text: 'Si la salida de tu compañero no gana la baza, juega alto para ganarla o para hacer caer una carta grande.',
    },
    cantWin: {
      title: 'No puedes ganar la baza',
      third: 'Juega tu carta más baja (o da tu actitud si tu compañero ha salido en este palo).',
      fourth: 'Juega tu carta más baja del palo.',
    },
    winCheaply: {
      title: 'Gana barato',
      text: 'Juegas el último: gana con la carta más pequeña que baste.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts — declarer's plan once dummy is down: count winners
  // (notrump) or losers (suit contracts) and where extra tricks can come from.
  plan: {
    // sure tricks in one suit
    allWinners: 'todas ganadoras',
    topTricks: (n: number) => `${n} ${plural(n, 'baza firme', 'bazas firmes')}`,
    noTopTricks: 'ninguna baza firme',
    /** Opponents' cards in a suit when there are too many for the split table. */
    cardsOut: (n: number) => `${n} cartas`,

    // summary, notrump
    ntEnough: (total: number, need: number) =>
      `Tienes ${total} bazas firmes y necesitas ${need}: cobra tus bazas, sin bloquear ningún palo (juega primero las cartas altas de la mano corta).`,
    ntShort: (total: number, need: number) =>
      `Tienes ${total} ${plural(total, 'baza firme', 'bazas firmes')} y necesitas ${need}: busca ${need - total} más antes de que los defensores afirmen su palo.`,
    // summary, suit contracts
    losersOk: (losers: number, allowed: number) =>
      `Alrededor de ${losers} ${plural(losers, 'perdedora', 'perdedoras')} y puedes permitirte ${allowed}: destriunfa y cobra tus bazas, salvo que haga falta fallar o descartar algo antes.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Alrededor de ${losers} perdedoras, pero solo puedes permitirte ${allowed}: tienes que deshacerte de ${losers - allowed} (fallándolas, descartándolas sobre ganadoras sobrantes o con un impasse).`,

    // ideas
    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Afirma ${theSuit(suit)}: con ${total} cartas entre las dos manos (${missing} fuera, ${odds}), las cartas largas de ${SUIT_SYMBOLS[suit]} pueden dar alrededor de ${extra} ${plural(extra, 'baza extra', 'bazas extra')}.`,
    finesseAQ: (suit: number, holding: string) =>
      `Impasse en ${core.suits[suit]}: juega hacia el A-Q (${holding}) y pon la Dama si no aparece el Rey; alrededor del 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `En ${core.suits[suit]}, juega hacia el Rey (${holding}): hace baza si el As está a tu izquierda; alrededor del 50%.`,
    doubleFinesse: (suit: number) =>
      `Doble impasse en ${core.suits[suit]} (A-J-10): haz el impasse dos veces; harás dos bazas el 76% de las veces.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Expulsa el As de ${core.suits[suit]}: después, K-Q${withJack ? '-J' : ''} te ${withJack ? 'darán 2 bazas o más' : 'darán al menos 1 baza'}.`,
    ntDevelopEarly: 'A sin triunfo, afirma pronto las bazas que te faltan, mientras todavía controlas los palos, y cuenta cuántas veces puedes permitirte ceder la mano.',
    /** Suits to ruff in the short trump hand, with that hand's length in each (0 = void). */
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Falla perdedoras en ${inDummy ? 'el muerto' : 'tu mano'}, la mano corta en triunfos: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'fallo'})`).join(', ')}. Un fallo en la mano corta es una baza extra; un fallo en la mano larga en triunfos, no.`,
    /** Extra winners in `suit` to throw losers in `loserSuits` on. */
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Descartes: ${inDummy ? 'el muerto tiene' : 'tu mano tiene'} ${extra} ${plural(extra, 'ganadora sobrante', 'ganadoras sobrantes')} de ${SUIT_SYMBOLS[suit]}; descarta sobre ${extra === 1 ? 'ella' : 'ellas'} perdedoras de ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')} de la otra mano (normalmente después de destriunfar).`,
    trumpsOut: (n: number, odds: string) =>
      `Triunfos: ${n === 1 ? 'queda 1 fuera' : `quedan ${n} fuera`} (${odds}). ${n === 1 ? 'Sácalo' : 'Sácalos'} pronto, salvo que necesites los triunfos del muerto para fallar o tengas que afirmar antes un palo lateral.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts — opening leads by the book
  leads: {
    /** Why this card from the suit. */
    card: {
      singleton: 'Un semifallo: sal con él.',
      ak: 'El As desde As-Rey: sigues en la mano y ves el muerto antes de decidir cómo continuar.',
      doubleton: 'La más alta de un doubleton: primero la carta alta y luego la baja (alta-baja muestra doubleton y puede darte un fallo).',
      sequence: (holding: string) => `Cabeza de secuencia (${holding}): promete la carta inmediatamente inferior y niega la superior.`,
      interior: (holding: string, rank: number) => `Secuencia interior (${holding}): sal con la más alta de las cartas seguidas, ${rankLabel(rank)}.`,
      touching: (holding: string) => `La más alta de los honores seguidos (${holding}).`,
      nothing: 'La más alta de nada con tres cartas pequeñas: le dice a tu compañero que no tienes honor en el palo.',
      small: 'Con cuatro o más cartas pequeñas, sal con la segunda más alta para que tu compañero no te atribuya un honor.',
      partnerLow: 'Pequeña desde un honor y dos cartas más en el palo de tu compañero (tercera mejor).',
      fourth: (holding: string) => `Cuarta mejor de tu palo más largo y más fuerte (${holding}). Tu compañero puede aplicar la regla del 11.`,
      third: (holding: string) => `Tercera mejor desde un honor con dos cartas pequeñas (${holding}): conservas el honor para capturar uno del declarante.`,
    },
    /** Why this suit. */
    suit: {
      partnerBid: (suit: number) => `Tu compañero ha declarado ${core.suits[suit]}: salir en el palo del compañero rara vez es un error y suele ser lo mejor.`,
      theyBid: (suit: number) => `Los rivales han declarado ${core.suits[suit]}: salir en su palo suele ayudar al declarante.`,
      // against notrump
      ntLong: (suit: number, n: number) =>
        `Contra sin triunfo, sal en tu palo más largo y más fuerte (${nSuit(n, suit)}): esperas afirmar cartas largas ganadoras.`,
      ntSequence: 'Una secuencia sólida es segura y crea bazas.',
      ntShort: (n: number) => `${n === 1 ? 'Un semifallo' : `Un palo de ${n} cartas`}: no es la salida ideal contra sin triunfo.`,
      // against a suit contract
      trump: 'Salida de triunfo: segura y pasiva, y reduce los fallos del muerto.',
      singleton: 'Un semifallo: esperas que tu compañero gane pronto una baza y te dé un fallo.',
      aceAway: 'Contra un contrato a palo nunca salgas por debajo de un As; y salir con el propio As rara vez ayuda.',
      sequence: (suit: number) => `Cabeza de secuencia en ${core.suits[suit]}: es segura y puede afirmar bazas.`,
      plain: (suit: number, n: number) =>
        n === 1 ? `Un semifallo de ${core.suitSingular[suit]}.` : `${n} cartas de ${core.suits[suit]}.`,
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts — what the opening lead and partner's signals tell you
  signals: {
    /** Heading over the meaning of the opening lead. */
    leadBy: {
      you: (card: Card) => `Tu salida: ${cardName(card)}`,
      partner: (card: Card) => `La salida de tu compañero: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `La salida de ${core.seats[seat]}: ${cardName(card)}`,
    },
    /** What the card led usually shows, by rank. */
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'El As: normalmente desde As-Rey (contra sin triunfo también puede pedir al compañero que desbloquee).'
          : 'El As: normalmente desde As-Rey, o un As semifallo o doubleton.',
      king: (vsNT: boolean) =>
        vsNT ? 'El Rey: cabeza de secuencia, K-Q (o A-K). Niega el As, salvo que sea desde A-K.' : 'El Rey: cabeza de secuencia, K-Q. Niega el As.',
      queen: 'La Dama: cabeza de secuencia (Q-J…); niega el Rey.',
      jack: 'El Valet: cabeza de J-10…, o de una secuencia interior como K-J-10. Niega la Dama.',
      ten: 'El 10: cabeza de 10-9…, o de una secuencia interior (Q-10-9, K-10-9).',
      nine: 'El 9: la más alta de un palo corto o sin valores, o de 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Una carta pequeña de ${core.suits[suit]}: probablemente cuarta mejor de un palo largo con un honor. Aplica la regla del 11.`
          : `Una carta pequeña de ${core.suits[suit]}: normalmente tercera o cuarta mejor desde un honor, o un semifallo.`,
    },
    ruleOf11: {
      title: 'Regla del 11',
      /** 11 − rank led = cards above it in the other three hands; `declarer` of them are declarer's. */
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Regla del 11: 11 − ${rankLabel(rank)} = ${above} cartas más altas que el ${rankLabel(rank)} en las otras tres manos. Ves ${seen} (en el muerto y en tu mano), así que el declarante tiene ${declarer}.`,
    },
    /** Partner's signals (and, for declarer, the defenders' count): `look` says how high the card looks and how sure that is. */
    read: {
      count: {
        /** `who`: a seat, or null for partner. */
        title: (who: number | null, card: Card) => `${cardName(card)} de ${who === null ? 'tu compañero' : core.seats[who]}: cuenta`,
        /** `lengths`: the lengths that fit; `declarer`: read from declarer's seat. */
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} puede ser alta o baja: espera a la siguiente carta de ${core.suits[suit]} para leer la cuenta.`
            : `${looks(card, look)}: ${look.sure ? '' : 'probablemente '}un número ${look.height === 'high' ? 'par' : 'impar'} de ${core.suits[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Los defensores a veces juegan cartas falsas, así que tómalo como un indicio.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `${cardName(card)} de tu compañero sobre tu salida: actitud`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} puede ser alta o baja: aún no está claro si a tu compañero le gusta el palo.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'a tu compañero le gusta el palo; continúalo.' : 'probablemente a tu compañero le gusta el palo.') : `${look.sure ? '' : 'probablemente '}a tu compañero no le gusta el palo; piensa en un cambio.`}`,
      },
      discard: {
        title: (card: Card) => `Descarte de tu compañero: ${cardName(card)}`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} puede ser alta o baja: aún no está claro si tu compañero quiere que juegues ${core.suits[suit]}.`
            : `${looks(card, look)}: tu compañero ${look.sure ? '' : 'probablemente '}${look.height === 'high' ? 'quiere' : 'no quiere'} que juegues ${core.suits[suit]}.`,
      },
      preference: {
        title: (card: Card) => `Tu compañero juega ${cardName(card)} para que falles: preferencia de palo`,
        /** `sides`: the other two side suits, lower first. */
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} no es claramente alta ni baja: puede que tu compañero no tenga preferencia; devuelve el palo que más te convenga.`
            : `${looks(card, look)}: tu compañero ${look.sure ? '' : 'probablemente '}te pide que devuelvas ${core.suits[look.height === 'high' ? sides[1] : sides[0]]}, el ${look.height === 'high' ? 'más alto' : 'más bajo'} de los otros dos palos laterales.`,
      },
    },
    /** Short labels for a signal a bot gave, e.g. a badge on its card. */
    badge: {
      count: (even: boolean) => `Cuenta: ${even ? 'par' : 'impar'}`,
      attitude: (encourage: boolean) => `Actitud: ${encourage ? 'positiva' : 'negativa'}`,
      discard: (encourage: boolean, suit: number) => `Descarte: ${encourage ? 'positivo' : 'negativo'} en ${SUIT_SYMBOLS[suit]}`,
      /** The suit asked for, or null for no preference. */
      preference: (suit: number | null) => `Preferencia de palo: ${suit === null ? 'ninguna' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts — the hand-evaluation table: label, value, note
  eval: {
    hcp: 'PH',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Puntos totales',
    totalNote: (lengthPts: number) => `PH + ${lengthPts} por longitud`,
    shape: 'Distribución',
    balanced: 'equilibrada',
    semiBalanced: 'semiequilibrada',
    unbalanced: 'desequilibrada',
    losers: 'Perdedoras',
    losersNote: 'Cómputo de perdedoras (LTC)',
    quickTricks: 'Bazas rápidas',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Palo más largo',
    controls: (n: number) => `${n} ${plural(n, 'control', 'controles')}`,
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts — the par contract in the review
  par: {
    /** "4♠X por N/S (N)": the contract, the side, and the seat that declares it. */
    contract: (contract: string, declarer: number) =>
      `${contract} por ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
