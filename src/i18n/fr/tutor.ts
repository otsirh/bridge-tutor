// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Same layout as src/i18n/en/tutor.ts (see the notes there on parameters).
// French puts the suit after "à" in the singular ("l’impasse à cœur", "un
// retour à pique"); cards take the article of their rank ("le ♠K", "la ♥Q").

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';
import { Le, de, le, nPl, pl } from './grammar';

/** "le ♠K", "la ♥Q", "l’♠A" */
const cn = (c: Card) => le(cardName(c));
/** "Le ♠K" */
const Cn = (c: Card) => Le(cardName(c));
/** A rank with its article: "l’A", "le K", "la Q", "le 10". */
const lr = (rank: number) => (rank === 14 ? 'l’A' : rank === 12 ? 'la Q' : `le ${rankLabel(rank)}`);
/** "à cœur" */
const a = (s: number) => `à ${core.suitSingular[s]}`;
/** "À cœur" */
const A = (s: number) => `À ${core.suitSingular[s]}`;
/** Jouer vers les honneurs de l’autre main. */
const TOWARD = { aq: 'A-Q', king: 'le Roi', queen: 'la Dame', honours: 'les honneurs' };
const HONOUR: Record<number, string> = { 14: 'l’As', 13: 'le Roi', 12: 'la Dame' };
/** "2 ou 4", "1, 3 ou 5" (les trois plus courtes). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}` : String(xs[0]);
};
const highLow = (h: Height | null) => (h === 'high' ? 'haute' : 'basse');
/** Comment la carte du signal se lit de l’autre côté de la table. */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Grande-petite' : 'Petite-grande'} (${cardName(card)}, puis ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${Cn(card)} est toujours une petite carte`
      : l.sure
        ? `${Cn(card)} est une carte ${highLow(l.height)} (toutes les cartes ${l.height === 'high' ? 'plus hautes' : 'plus basses'} sont connues)`
        : `${Cn(card)} est sans doute une carte ${highLow(l.height)} (certaines cartes ${l.height === 'high' ? 'plus basses' : 'plus hautes'} ne sont pas encore apparues)`;
/** Ni haute ni basse avec certitude. */
const unclear = (card: Card) => `${Cn(card)} peut être une carte haute comme une carte basse`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'Entame',
      notStandard: (holding: string, rank: number, why: string) => `Avec ${holding}, la carte normale est ${lr(rank)} : ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Tirer les atouts',
      text: 'Jouer atout enlève leurs atouts aux défenseurs, qui ne pourront plus couper vos levées maîtresses. Tirez-les tôt, sauf si vous avez besoin des atouts du mort pour couper.',
    },
    unblock: {
      title: 'Déblocage',
      text: 'Encaissez d’abord l’honneur de la main courte : vous finirez ainsi dans la main longue et pourrez dérouler le reste de la couleur.',
    },
    cash: {
      title: 'Encaisser une levée',
      declarer: (card: Card) => `${Cn(card)} est la plus haute carte restante ${a(suitOf(card))} : la levée est à vous, sauf si quelqu’un coupe.`,
      defender: 'Prenez votre levée sûre avant que le déclarant ne puisse défausser ses perdantes sur la longue du mort.',
    },
    crossToOtherHand: {
      title: 'Passer dans l’autre main',
      text: 'En jouant petit vers une carte maîtresse de l’autre main, vous vous en servez comme remontée : vous pourrez ensuite jouer de cette main-là.',
    },
    leadTowardHonours: {
      title: 'Jouer vers les honneurs',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Jouez petit vers ${TOWARD[toward]} : le défenseur de gauche doit fournir avant que vous choisissiez la carte de l’autre main — c’est le principe de l’impasse.`,
    },
    develop: {
      title: 'Affranchir une couleur',
      text: 'En concédant maintenant une levée dans cette couleur, vous affranchissez les cartes restantes pendant que vous contrôlez encore les autres couleurs.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Jouer atout',
      text: 'Jouer atout réduit les coupes du déclarant au mort — c’est efficace quand le mort est court dans une couleur annexe.',
    },
    lookForRuff: {
      title: 'Chercher une coupe',
      text: 'Vous jouez une couleur courte en espérant que votre partenaire prenne la main et vous donne une coupe.',
    },
    switchSuits: {
      title: 'Contre-attaque',
      text: 'Jouez à travers la force du déclarant, ou vers la faiblesse du mort : c’est le défenseur placé devant la main forte qui doit attaquer cette couleur.',
    },

    // not following suit
    overruff: {
      title: 'Surcoupe',
      text: 'Couper plus haut que l’atout déjà joué fait la levée.',
    },
    ruffPartnersWinner: {
      title: 'Couper la levée du partenaire',
      text: 'En général du gaspillage : votre partenaire faisait déjà cette levée.',
    },
    ruff: {
      title: 'Coupe',
      declarer: 'Couper dans la main courte à l’atout rapporte une levée ; couper dans la main longue ne fait que consommer un atout qui aurait fait sa levée de toute façon.',
      defender: 'Vous n’avez plus de cartes dans la couleur jouée : votre coupe prend la levée.',
    },
    discard: {
      title: 'Défausse',
      defender: 'Défaussez dans une couleur inutile, et gardez votre longueur là où vous devez surveiller les longues du déclarant ou du mort.',
      declarer: 'Défaussez une perdante dans une couleur qui ne peut pas faire de levée, en gardant les cartes qui peuvent encore servir.',
    },

    // defenders' signals
    countSignal: {
      title: 'Signal de parité',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Le déclarant joue cette couleur et votre partenaire attend votre parité : avec ${n} ${core.suits[suit]} (un nombre ${n % 2 ? 'impair' : 'pair'}), la carte normale est ${cn(best)}${n % 2 ? '' : ', puis une plus petite (grande-petite)'}. ${Cn(card)} montrerait un nombre ${n % 2 ? 'pair' : 'impair'}.`
          : n % 2
            ? `Le déclarant joue cette couleur : donnez votre parité. Avec ${n} ${core.suits[suit]} (un nombre impair), fournissez votre plus petite carte, ${cn(card)}. Votre partenaire saura combien de cartes a le déclarant et à quel moment prendre de l’As.`
            : `Le déclarant joue cette couleur : donnez votre parité. Avec ${n} ${core.suits[suit]} (un nombre pair), jouez grande-petite : ${cn(card)} maintenant, une plus petite ensuite. Votre partenaire saura combien de cartes a le déclarant et à quel moment prendre de l’As.`,
    },
    attitudeSignal: {
      title: 'Appel ou refus',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Votre partenaire a joué cette couleur et attend un appel ou un refus : vous ${reason ? 'aimez' : 'n’aimez pas'} la couleur, la carte normale est donc ${cn(best)}. ${Cn(card)} dit le contraire.`
          : reason === 'honour'
            ? `Votre partenaire a joué cette couleur : appelez ou refusez. Vous avez ${HONOUR[honour]}, donc appelez avec la plus haute carte dont vous pouvez vous passer, ${cn(card)} : votre partenaire continuera.`
            : reason === 'ruff'
              ? `Votre partenaire a joué cette couleur : appelez ou refusez. Avec un doubleton, commencez par la plus haute (${cardName(card)}) : grande-petite demande à votre partenaire de continuer, et vous couperez le troisième tour.`
              : `Votre partenaire a joué cette couleur : appelez ou refusez. Rien ici ne mérite d’être continué, alors refusez avec votre plus petite carte, ${cn(card)} ; votre partenaire cherchera une contre-attaque.`,
    },
    discardSignal: {
      title: 'Défausse d’appel ou de refus',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Vous aimeriez que votre partenaire joue ${core.suitSingular[suit]}, mais aucune carte ${a(suit)} dont vous pouvez vous passer n’est assez haute pour être lue comme un appel ; défaussez plutôt une petite carte dans une couleur dont vous ne voulez pas.`
          : want
            ? right
              ? `Une grosse défausse appelle : ${cn(card)} demande à votre partenaire de jouer ${core.suitSingular[suit]}, où vous avez des valeurs.`
              : `Vous aimeriez que votre partenaire joue ${core.suitSingular[suit]}, mais ${cn(card)} est votre plus petite carte et signifie un refus ; une grosse carte (${cardName(best)}) appellerait — sinon, défaussez petit dans une couleur dont vous ne voulez pas.`
            : right
              ? `Une petite défausse refuse : ${cn(card)} dit à votre partenaire de ne pas jouer ${core.suitSingular[suit]}.`
              : `Une grosse défausse demande à votre partenaire de jouer ${core.suitSingular[suit]}, ce que vous ne voulez pas ; défaussez plutôt votre plus petite carte (${cardName(best)}).`,
    },
    preferenceSignal: {
      title: 'Appel préférentiel',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Votre partenaire va couper et lira votre carte comme un appel préférentiel ; sans préférence, jouez une carte moyenne, par exemple ${cn(best)}.`
            : `Votre partenaire va couper et lira votre carte comme un appel préférentiel : vous voulez un retour ${a(want === 'high' ? sides[1] : sides[0])}, alors jouez ${cn(best)}.`
          : want === 'middle'
            ? 'Votre partenaire va couper, et votre carte lui indique aussi quelle couleur rejouer : sans préférence, jouez une carte moyenne, ni haute ni basse.'
            : `Votre partenaire va couper, et votre carte lui indique aussi quelle couleur rejouer : une carte ${highLow(want)} demande un retour ${a(want === 'high' ? sides[1] : sides[0])} (la ${want === 'high' ? 'plus chère' : 'moins chère'} des deux autres couleurs annexes), où vous avez l’As.`,
    },

    // second hand
    coverHonour: {
      title: 'Couvrir un honneur par un honneur',
      text: 'En couvrant, vous obligez le déclarant à dépenser deux gros honneurs pour une seule levée, ce qui peut promouvoir une carte plus petite chez vous ou chez votre partenaire.',
    },
    secondHandLow: {
      title: 'Petite carte en deuxième position',
      text: 'Votre partenaire jouera après vous et après le partenaire de celui qui a attaqué : en fournissant petit, vous gardez votre gros honneur pour capturer plus gros ensuite.',
    },
    sureTrick: {
      title: 'Prendre une levée sûre',
      text: (card: Card) => `${Cn(card)} est la plus haute carte restante dans la couleur.`,
    },
    splitHonours: {
      title: 'Fournir un honneur',
      text: 'En jouant l’un de vos honneurs touchants, vous empêchez le déclarant de faire la levée à bon compte avec une carte plus petite.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'Votre partenaire tient la levée',
      third: 'La carte de votre partenaire fait déjà la levée : fournissez petit (ou donnez un signal).',
      fourth: 'Ne surprenez pas sa carte : fournissez votre plus petite carte.',
    },
    thirdHandHighEquals: {
      title: 'Grosse carte en troisième — la plus petite des équivalentes',
      text: 'Jouez la plus petite de vos cartes touchantes : votre partenaire pourra ainsi deviner où se trouve la plus haute.',
    },
    thirdHandHigh: {
      title: 'Grosse carte en troisième',
      text: 'La carte de votre partenaire ne fait pas la levée : jouez haut pour la prendre ou pour faire tomber un gros honneur.',
    },
    cantWin: {
      title: 'Impossible de prendre la levée',
      third: 'Fournissez votre plus petite carte (ou donnez un signal d’appel ou de refus si votre partenaire a joué la couleur).',
      fourth: 'Fournissez votre plus petite carte dans la couleur.',
    },
    winCheaply: {
      title: 'Prendre au plus juste',
      text: 'Vous jouez en dernier : prenez avec la plus petite carte qui suffit.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts
  plan: {
    // sure tricks in one suit
    allWinners: 'toutes maîtresses',
    topTricks: (n: number) => nPl(n, 'levée de tête', 'levées de tête'),
    noTopTricks: 'aucune levée de tête',
    cardsOut: (n: number) => `${n} cartes`,

    // summary, notrump
    ntEnough: (total: number, need: number) =>
      `Vous avez ${total} levées de tête et il vous en faut ${need} : encaissez-les — sans bloquer de couleur (jouez d’abord les honneurs de la main courte).`,
    ntShort: (total: number, need: number) =>
      `Vous avez ${nPl(total, 'levée de tête', 'levées de tête')} et il vous en faut ${need} : trouvez-en ${need - total} de plus avant que les défenseurs n’affranchissent leur couleur.`,
    // summary, suit contracts
    losersOk: (losers: number, allowed: number) =>
      `Environ ${nPl(losers, 'perdante', 'perdantes')}, et vous pouvez vous en permettre ${allowed} : tirez les atouts et encaissez vos levées, sauf si une coupe ou une défausse rapide s’impose.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Environ ${losers} perdantes, mais vous ne pouvez vous en permettre que ${allowed} : il faut vous débarrasser de ${losers - allowed} (en coupant, en défaussant sur des levées supplémentaires ou grâce à une impasse).`,

    // ideas
    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Affranchir les ${core.suits[suit]} : avec ${total} cartes à vous deux (${missing} dehors, ${odds}), vos longues à ${SUIT_SYMBOLS[suit]} peuvent rapporter environ ${nPl(extra, 'levée supplémentaire', 'levées supplémentaires')}.`,
    finesseAQ: (suit: number, holding: string) =>
      `Impasse ${a(suit)} : jouez vers A-Q (${holding}) et mettez la Dame si le Roi n’apparaît pas — environ 50 %.`,
    leadTowardKing: (suit: number, holding: string) =>
      `${A(suit)}, jouez vers le Roi (${holding}) : il fera une levée si l’As est à votre gauche — environ 50 %.`,
    doubleFinesse: (suit: number) =>
      `Double impasse ${a(suit)} (A-J-10) : faites deux fois l’impasse ; vous ferez deux levées dans 76 % des cas.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Chassez l’As de ${core.suitSingular[suit]} : K-Q${withJack ? '-J' : ''} vous ${withJack ? 'donneront ensuite au moins 2 levées' : 'donneront ensuite au moins 1 levée'}.`,
    ntDevelopEarly: 'À sans-atout, affranchissez vos levées supplémentaires tôt, tant que vous contrôlez encore les couleurs — et comptez combien de fois vous pouvez vous permettre de rendre la main.',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Coupez des perdantes ${inDummy ? 'au mort' : 'dans votre main'}, la main courte à l’atout : ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'chicane'})`).join(', ')}. Une coupe dans la main courte rapporte une levée de plus ; une coupe dans la main longue, non.`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Défausses : ${inDummy ? 'le mort a' : 'vous avez'} ${nPl(extra, 'gagnante supplémentaire', 'gagnantes supplémentaires')} à ${SUIT_SYMBOLS[suit]} — défaussez dessus des perdantes ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')} de l’autre main (en général après avoir tiré les atouts).`,
    trumpsOut: (n: number, odds: string) =>
      `Atouts : ${n} ${pl(n, 'reste dehors', 'restent dehors')} (${odds}). Tirez-${pl(n, 'le', 'les')} tôt, sauf si vous avez besoin des atouts du mort pour couper ou devez d’abord affranchir une couleur annexe.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts — the suit reasons start with a short sentence ending
  // in a full stop: the tutor panel shows that first sentence on its own.
  leads: {
    card: {
      singleton: 'Un singleton : entamez-le.',
      ak: 'L’As, d’As-Roi : vous gardez la main et voyez le mort avant de décider de la suite.',
      doubleton: 'La plus haute d’un doubleton : la grosse carte d’abord, puis la petite (grande-petite montre un doubleton et peut vous valoir une coupe).',
      sequence: (holding: string) => `Tête de séquence (${holding}) : promet la carte juste en dessous et nie celle du dessus.`,
      interior: (holding: string, rank: number) => `Séquence intérieure (${holding}) : entamez la plus haute des cartes touchantes, ${lr(rank)}.`,
      touching: (holding: string) => `Le plus haut des honneurs touchants (${holding}).`,
      nothing: 'La plus haute de trois petites cartes : vous indiquez à votre partenaire que vous n’avez pas d’honneur dans la couleur.',
      small: 'Avec quatre petites cartes ou plus, entamez la deuxième plus haute, pour que votre partenaire ne vous attribue pas d’honneur.',
      partnerLow: 'Petite carte d’un honneur troisième dans la couleur du partenaire (3e meilleure).',
      fourth: (holding: string) => `4e meilleure de votre couleur la plus longue et la plus solide (${holding}). Votre partenaire peut appliquer la règle des 11.`,
      third: (holding: string) => `3e meilleure d’un honneur troisième (${holding}) : vous gardez l’honneur pour capturer un honneur du déclarant.`,
    },
    suit: {
      partnerBid: (suit: number) => `Votre partenaire a annoncé les ${core.suits[suit]}. Entamer dans sa couleur est rarement une erreur, et c’est souvent le meilleur choix.`,
      theyBid: (suit: number) => `Les adversaires ont annoncé les ${core.suits[suit]}. Entamer dans leur couleur aide en général le déclarant.`,
      // against notrump
      ntLong: (suit: number, n: number) =>
        `Contre un sans-atout, entamez dans votre couleur la plus longue et la plus solide (${n} ${core.suits[suit]}). Vous espérez affranchir des longues.`,
      ntSequence: 'Une séquence solide est sûre et développe des levées.',
      ntShort: (n: number) => `${n === 1 ? 'Un singleton' : `Une couleur de ${n} cartes`}. Ce n’est pas l’entame idéale contre un sans-atout.`,
      // against a suit contract
      trump: 'Entame atout. Sûre et passive, elle réduit les coupes du mort.',
      singleton: 'Un singleton. Vous espérez que votre partenaire prenne la main tôt et vous donne une coupe.',
      aceAway: 'Contre un contrat à l’atout, n’entamez jamais sous un As. Et entamer l’As lui-même aide rarement.',
      sequence: (suit: number) => `Tête de séquence ${a(suit)}. Sûre, elle peut aussi développer des levées.`,
      plain: (suit: number, n: number) => (n === 1 ? `Un singleton ${a(suit)}.` : `${n} cartes ${a(suit)}.`),
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts
  signals: {
    leadBy: {
      you: (card: Card) => `Votre entame : ${cardName(card)}`,
      partner: (card: Card) => `Entame de votre partenaire : ${cardName(card)}`,
      seat: (seat: number, card: Card) => `Entame ${de(core.seats[seat])} : ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'L’As : en général d’As-Roi (contre un sans-atout, il peut aussi demander au partenaire de débloquer).'
          : 'L’As : en général d’As-Roi, ou un As sec ou second.',
      king: (vsNT: boolean) =>
        vsNT ? 'Le Roi : tête de séquence — K-Q (ou A-K). Il nie l’As, sauf s’il vient d’A-K.' : 'Le Roi : tête de séquence — K-Q. Il nie l’As.',
      queen: 'La Dame : tête de séquence (Q-J…) ; elle nie le Roi.',
      jack: 'Le Valet : tête de J-10…, ou d’une séquence intérieure comme K-J-10. Il nie la Dame.',
      ten: 'Le 10 : tête de 10-9…, ou d’une séquence intérieure (Q-10-9, K-10-9).',
      nine: 'Le 9 : la plus haute d’une couleur courte ou sans valeur, ou de 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Une petite carte ${a(suit)} : sans doute la 4e meilleure d’une longueur avec un honneur. Appliquez la règle des 11.`
          : `Une petite carte ${a(suit)} : en général la 3e ou la 4e meilleure sous un honneur — ou un singleton.`,
    },
    ruleOf11: {
      title: 'Règle des 11',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Règle des 11 : 11 − ${rankLabel(rank)} = ${above} cartes plus hautes que ${lr(rank)} dans les trois autres mains. Vous en voyez ${seen} (au mort et dans votre main) : le déclarant en a donc ${declarer}.`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${Cn(card)} ${who === null ? 'du partenaire' : de(core.seats[who])} : parité`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${unclear(card)} : attendez la prochaine carte ${a(suit)} pour lire la parité.`
            : `${looks(card, look)} : ${look.sure ? '' : 'probablement '}un nombre ${look.height === 'high' ? 'pair' : 'impair'} de ${core.suits[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Les défenseurs jouent parfois une fausse carte : prenez-le comme un indice.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `${Cn(card)} du partenaire sur votre entame : appel ou refus`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${unclear(card)} : on ne sait pas encore si votre partenaire aime la couleur.`
            : `${looks(card, look)} : ${look.height === 'high' ? (look.sure ? 'votre partenaire aime la couleur — continuez-la.' : 'votre partenaire aime probablement la couleur.') : `votre partenaire n’aime ${look.sure ? '' : 'probablement '}pas la couleur — pensez à contre-attaquer.`}`,
      },
      discard: {
        title: (card: Card) => `Votre partenaire a défaussé ${cn(card)}`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${unclear(card)} : on ne sait pas encore si votre partenaire veut que vous jouiez ${core.suitSingular[suit]}.`
            : `${looks(card, look)} : votre partenaire ${look.height === 'high' ? 'veut' : 'ne veut'} ${look.sure ? '' : 'probablement '}${look.height === 'high' ? '' : 'pas '}que vous jouiez ${core.suitSingular[suit]}.`,
      },
      preference: {
        title: (card: Card) => `Votre partenaire joue ${cn(card)} pour que vous coupiez : appel préférentiel`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${Cn(card)} n’est ni une carte nettement haute ni une carte nettement basse : votre partenaire n’a peut-être pas de préférence — rejouez la couleur qui vous arrange le mieux.`
            : `${looks(card, look)} : votre partenaire demande ${look.sure ? '' : 'probablement '}un retour ${a(look.height === 'high' ? sides[1] : sides[0])}, la ${look.height === 'high' ? 'plus chère' : 'moins chère'} des deux autres couleurs annexes.`,
      },
    },
    badge: {
      count: (even: boolean) => `Parité : ${even ? 'paire' : 'impaire'}`,
      attitude: (encourage: boolean) => (encourage ? 'Appel' : 'Refus'),
      discard: (encourage: boolean, suit: number) => `Défausse : ${encourage ? 'appel' : 'refus'} ${SUIT_SYMBOLS[suit]}`,
      preference: (suit: number | null) => `Appel préférentiel : ${suit === null ? 'aucun' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts
  eval: {
    hcp: 'Points H',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Points HL',
    totalNote: (lengthPts: number) => `H + ${lengthPts} de longueur`,
    shape: 'Distribution',
    balanced: 'régulière',
    semiBalanced: 'semi-régulière',
    unbalanced: 'irrégulière',
    losers: 'Perdantes',
    losersNote: 'méthode des perdantes (LTC)',
    quickTricks: 'Levées rapides',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Plus longue',
    controls: (n: number) => nPl(n, 'contrôle', 'contrôles'),
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts
  par: {
    contract: (contract: string, declarer: number) =>
      `${contract} par ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
