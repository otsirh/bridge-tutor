// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Same layout as src/i18n/en/tutor.ts (see the notes there on parameters).
// German suit words do not change in the plural („drei Pik“); before a noun
// they form a compound with a hyphen („Pik-Karte“, „Pik-Ass“).

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

/** "1 Stich", "2 Stiche". */
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
/** "Ein Double", "Eine 3er-Länge" (a singleton is handled separately). */
const lengthOf = (n: number) => (n === 2 ? 'Ein Double' : `Eine ${n}er-Länge`);
/** Leading toward the honours in the other hand. */
const TOWARD = { aq: 'zu A-Q', king: 'zum König', queen: 'zur Dame', honours: 'zu den Figuren' };
/** In the accusative: „Sie halten den König“. */
const HONOUR: Record<number, string> = { 14: 'das Ass', 13: 'den König', 12: 'die Dame' };
/** "2 oder 4", "1, 3 oder 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} oder ${xs[xs.length - 1]}` : String(xs[0]);
};
const highLow = (h: 'high' | 'low') => (h === 'high' ? 'hoch' : 'tief');
/** How a signal card looks from across the table. */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Hoch-tief' : 'Tief-hoch'} (${cardName(card)}, dann ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} ist immer tief`
      : l.sure
        ? `${cardName(card)} ist ${highLow(l.height ?? 'low')} (alle ${l.height === 'high' ? 'höheren' : 'niedrigeren'} kleinen Karten sind bekannt)`
        : `${cardName(card)} wirkt ${highLow(l.height ?? 'low')} (einige ${l.height === 'high' ? 'niedrigere' : 'höhere'} kleine Karten sind noch nicht gefallen)`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'Ausspiel',
      notStandard: (holding: string, rank: number, why: string) => `Aus ${holding} ist ${rankLabel(rank)} die Standardkarte: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Trumpf ziehen',
      text: 'Wenn Sie Trumpf spielen, verlieren die Gegenspieler ihre Trümpfe und können Ihre Gewinner nicht mehr schnappen. Ziehen Sie früh Trumpf, außer Sie brauchen die Trümpfe des Dummys zum Schnappen.',
    },
    unblock: {
      title: 'Deblockieren',
      text: 'Spielen Sie die hohe Karte zuerst aus der kurzen Hand, damit die lange Hand am Spiel bleibt und den Rest der Farbe abziehen kann.',
    },
    cash: {
      title: 'Gewinner abziehen',
      declarer: (card: Card) => `${cardName(card)} ist die höchste ${core.suits[suitOf(card)]}-Karte im Spiel und gewinnt den Stich, wenn niemand schnappt.`,
      defender: 'Ziehen Sie Ihren sicheren Stich ab, bevor der Alleinspieler Verlierer auf die lange Farbe des Dummys abwerfen kann.',
    },
    crossToOtherHand: {
      title: 'Übergang zur anderen Hand',
      text: 'Spielen Sie klein zu einem Gewinner in der anderen Hand: Er dient als Übergang, und Sie können als Nächstes von dort ausspielen.',
    },
    leadTowardHonours: {
      title: 'Zu den Figuren spielen',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Spielen Sie klein ${TOWARD[toward]}: So muss der Gegner zu Ihrer Linken vor Ihnen eine Karte spielen, bevor Sie die Karte aus der anderen Hand wählen – das Grundprinzip des Schnitts.`,
    },
    develop: {
      title: 'Eine Farbe hochspielen',
      text: 'Geben Sie in dieser Farbe jetzt einen Stich ab, werden die restlichen Karten zu Gewinnern, solange Sie die anderen Farben noch kontrollieren.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Trumpfausspiel',
      text: 'Ein Trumpfausspiel verringert die Schnapper des Alleinspielers am Tisch – stark, wenn der Dummy in einer Nebenfarbe kurz ist.',
    },
    lookForRuff: {
      title: 'Auf einen Schnapper spielen',
      text: 'Mit dem Ausspiel einer kurzen Farbe hoffen Sie, dass Partner ans Spiel kommt und Ihnen einen Schnapper gibt.',
    },
    switchSuits: {
      title: 'Farbwechsel',
      text: 'Durch die Stärke des Alleinspielers oder in die Schwäche des Dummys: Der Gegenspieler vor der starken Hand sollte diese Farbe spielen.',
    },

    // not following suit
    overruff: {
      title: 'Überschnappen',
      text: 'Wer höher schnappt als der bereits gespielte Trumpf, gewinnt den Stich.',
    },
    ruffPartnersWinner: {
      title: 'Partners Stich geschnappt',
      text: 'Meist Verschwendung: Die Karte des Partners hielt den Stich bereits.',
    },
    ruff: {
      title: 'Schnappen',
      declarer: 'Ein Schnapper in der Hand mit weniger Trümpfen bringt einen zusätzlichen Stich; ein Schnapper in der langen Trumpfhand verbraucht nur einen Trumpf, der ohnehin einen Stich gemacht hätte.',
      defender: 'Sie haben keine Karte der ausgespielten Farbe mehr, also gewinnt ein Schnapper den Stich.',
    },
    discard: {
      title: 'Abwurf',
      defender: 'Werfen Sie von einer Farbe ab, die Sie nicht brauchen, und behalten Sie Länge in den Farben, in denen Sie gegen lange Karten des Alleinspielers oder des Dummys halten müssen.',
      declarer: 'Werfen Sie einen Verlierer aus einer Farbe ab, die keine Stiche bringen kann, und behalten Sie die Karten, die Sie vielleicht noch brauchen.',
    },

    // defenders' signals
    countSignal: {
      title: 'Längenmarkierung',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Der Alleinspieler spielt diese Farbe, und Partner erwartet eine Längenmarkierung: Mit ${n} ${core.suits[suit]} (einer ${n % 2 ? 'ungeraden' : 'geraden'} Anzahl) ist die Standardkarte ${cardName(best)}${n % 2 ? '' : ', danach eine niedrigere (hoch-tief)'}. ${cardName(card)} würde eine ${n % 2 ? 'gerade' : 'ungerade'} Anzahl zeigen.`
          : n % 2
            ? `Der Alleinspieler spielt diese Farbe, also zeigen Sie Ihre Länge: Mit ${n} ${core.suits[suit]} (einer ungeraden Anzahl) spielen Sie Ihre niedrigste Karte, ${cardName(card)}. So erkennt Partner, wie viele Karten der Alleinspieler hat und wann er das Ass nehmen soll.`
            : `Der Alleinspieler spielt diese Farbe, also zeigen Sie Ihre Länge: Mit ${n} ${core.suits[suit]} (einer geraden Anzahl) markieren Sie hoch-tief – jetzt ${cardName(card)}, beim nächsten Mal eine niedrigere Karte. So erkennt Partner, wie viele Karten der Alleinspieler hat und wann er das Ass nehmen soll.`,
    },
    attitudeSignal: {
      title: 'Ermutigungsmarkierung',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Partner hat diese Farbe ausgespielt und erwartet von Ihnen eine Ermutigungsmarkierung: Sie ${reason ? 'möchten' : 'möchten nicht'}, dass er die Farbe fortsetzt, also ist die Standardkarte ${cardName(best)}. ${cardName(card)} sagt das Gegenteil.`
          : reason === 'honour'
            ? `Partner hat diese Farbe ausgespielt: Zeigen Sie, ob Sie sie mögen. Sie halten ${HONOUR[honour]}, also ermutigen Sie mit der höchsten kleinen Karte, die Sie entbehren können, ${cardName(card)}, und Partner spielt die Farbe weiter.`
            : reason === 'ruff'
              ? `Partner hat diese Farbe ausgespielt: Zeigen Sie, ob Sie sie mögen. Mit einem Double beginnen Sie mit der höheren Karte (${cardName(card)}): Hoch-tief bittet Partner weiterzuspielen, und Sie schnappen die dritte Runde.`
              : `Partner hat diese Farbe ausgespielt: Zeigen Sie, ob Sie sie mögen. Hier lohnt sich das Weiterspielen nicht, also entmutigen Sie mit Ihrer niedrigsten Karte, ${cardName(card)}; Partner wird einen Wechsel suchen.`,
    },
    discardSignal: {
      title: 'Abwurf (Ermutigung)',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Sie möchten, dass Partner ${core.suits[suit]} spielt, aber keine ${core.suits[suit]}-Karte, die Sie entbehren können, ist hoch genug, um als ermutigend zu gelten; werfen Sie stattdessen klein von einer Farbe ab, die Sie nicht wollen.`
          : want
            ? right
              ? `Ein hoher Abwurf ermutigt: ${cardName(card)} bittet Partner, ${core.suits[suit]} zu spielen, wo Sie Stärke haben.`
              : `Sie möchten, dass Partner ${core.suits[suit]} spielt, aber ${cardName(card)} ist Ihre niedrigste Karte und entmutigt; eine hohe (${cardName(best)}) würde ermutigen – oder werfen Sie klein von einer Farbe ab, die Sie nicht wollen.`
            : right
              ? `Ein niedriger Abwurf entmutigt: ${cardName(card)} sagt Partner, kein ${core.suits[suit]} zu spielen.`
              : `Ein hoher Abwurf bittet Partner, ${core.suits[suit]} zu spielen, und das wollen Sie nicht; werfen Sie stattdessen Ihre niedrigste Karte ab (${cardName(best)}).`,
    },
    preferenceSignal: {
      title: 'Farbpräferenz',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Partner wird schnappen und Ihre Karte als Farbpräferenz lesen; ohne Präferenz spielen Sie eine mittlere Karte wie ${cardName(best)}.`
            : `Partner wird schnappen und Ihre Karte als Farbpräferenz lesen: Sie möchten ${core.suits[want === 'high' ? sides[1] : sides[0]]} zurück, also spielen Sie ${cardName(best)}.`
          : want === 'middle'
            ? 'Partner wird schnappen, und Ihre Karte sagt zugleich, welche Farbe er zurückspielen soll: Ohne Präferenz spielen Sie eine mittlere Karte – weder hoch noch tief.'
            : `Partner wird schnappen, und Ihre Karte sagt zugleich, welche Farbe er zurückspielen soll: Eine ${want === 'high' ? 'hohe' : 'niedrige'} Karte verlangt ${core.suits[want === 'high' ? sides[1] : sides[0]]} (die ${want === 'high' ? 'höhere' : 'niedrigere'} der beiden anderen Nebenfarben), wo Sie das Ass halten.`,
    },

    // second hand
    coverHonour: {
      title: 'Figur auf Figur',
      text: 'Wenn Sie decken, muss der Alleinspieler zwei hohe Karten für einen Stich ausgeben, und eine niedrigere Karte bei Ihnen oder Partner kann zum Gewinner werden.',
    },
    secondHandLow: {
      title: 'Zweite Hand tief',
      text: 'Partner spielt nach Ihnen und nach dem Partner des Ausspielenden; spielen Sie also klein und heben Sie Ihre hohe Karte auf, um später etwas Größeres zu fangen.',
    },
    sureTrick: {
      title: 'Sicherer Stich',
      text: (card: Card) => `${cardName(card)} ist die höchste verbliebene Karte der Farbe.`,
    },
    splitHonours: {
      title: 'Figur einsetzen',
      text: 'Mit einer von zwei benachbarten Figuren verhindern Sie, dass der Alleinspieler billig mit einer niedrigeren Karte gewinnt.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'Partner hält den Stich',
      third: 'Die Karte des Partners hält den Stich bereits, also spielen Sie klein (oder markieren).',
      fourth: 'Nicht übernehmen: Spielen Sie Ihre niedrigste Karte.',
    },
    thirdHandHighEquals: {
      title: 'Dritte Hand hoch – die niedrigste gleichwertige',
      text: 'Spielen Sie die billigere von benachbarten Karten: So kann Partner erschließen, wo die höhere sitzt.',
    },
    thirdHandHigh: {
      title: 'Dritte Hand hoch',
      text: 'Hält das Ausspiel des Partners den Stich nicht, spielen Sie hoch, um den Stich zu gewinnen oder eine hohe Karte herauszuzwingen.',
    },
    cantWin: {
      title: 'Stich nicht zu gewinnen',
      third: 'Spielen Sie Ihre niedrigste Karte (oder zeigen Sie Ermutigung, wenn Partner die Farbe ausgespielt hat).',
      fourth: 'Spielen Sie Ihre niedrigste Karte der Farbe.',
    },
    winCheaply: {
      title: 'Billig gewinnen',
      text: 'Sie spielen als Letzter: Gewinnen Sie mit der kleinsten Karte, die reicht.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts
  plan: {
    allWinners: 'alles Gewinner',
    topTricks: (n: number) => count(n, 'Topstich', 'Topstiche'),
    noTopTricks: 'keine Topstiche',
    cardsOut: (n: number) => `${n} Karten`,

    ntEnough: (total: number, need: number) =>
      `Sie haben ${total} Topstiche und brauchen ${need}: Holen Sie Ihre Stiche – und blockieren Sie keine Farbe (die hohen Karten zuerst aus der kurzen Hand).`,
    ntShort: (total: number, need: number) =>
      `Sie haben ${count(total, 'Topstich', 'Topstiche')} und brauchen ${need}: Finden Sie ${need - total} weitere, bevor die Gegenspieler ihre Farbe hochspielen.`,
    losersOk: (losers: number, allowed: number) =>
      `Etwa ${losers} Verlierer, und Sie können sich ${allowed} leisten: Ziehen Sie Trumpf und holen Sie Ihre Stiche, außer ein früher Schnapper oder Abwurf ist nötig.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Etwa ${losers} Verlierer, aber Sie können sich nur ${allowed} leisten: Sie müssen ${losers - allowed} loswerden (schnappen, auf zusätzliche Gewinner abwerfen oder schneiden).`,

    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Spielen Sie ${core.suits[suit]} hoch: Mit ${total} Karten zusammen (${missing} beim Gegner, ${odds}) kann die Länge in ${SUIT_SYMBOLS[suit]} etwa ${extra === 1 ? '1 zusätzlichen Stich' : `${extra} zusätzliche Stiche`} bringen.`,
    finesseAQ: (suit: number, holding: string) =>
      `Schnitt in ${core.suits[suit]}: Spielen Sie zu A-Q (${holding}) und legen Sie die Dame, wenn der König nicht erscheint – etwa 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `Spielen Sie in ${core.suits[suit]} zum König (${holding}): Er macht einen Stich, wenn das Ass links von Ihnen sitzt – etwa 50%.`,
    doubleFinesse: (suit: number) =>
      `Doppelschnitt in ${core.suits[suit]} (A-J-10): Schneiden Sie zweimal; in 76% der Fälle machen Sie zwei Stiche.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Treiben Sie das ${core.suits[suit]}-Ass heraus: K-Q${withJack ? '-J' : ''} bringt Ihnen dann ${withJack ? '2+ Stiche' : '1+ Stich'}.`,
    ntDevelopEarly: 'Im SA-Kontrakt spielen Sie zusätzliche Stiche früh hoch, solange Sie die Farben noch kontrollieren – und zählen Sie, wie oft Sie das Spiel abgeben dürfen.',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Schnappen Sie Verlierer ${inDummy ? 'am Tisch' : 'in Ihrer Hand'}, der kurzen Trumpfhand: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'Chicane'})`).join(', ')}. Ein Schnapper in der kurzen Hand ist ein zusätzlicher Stich, einer in der langen Trumpfhand nicht.`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Abwürfe: ${inDummy ? 'Der Dummy' : 'Ihre Hand'} hat ${extra === 1 ? '1 zusätzlichen' : `${extra} zusätzliche`} ${SUIT_SYMBOLS[suit]}-Gewinner – werfen Sie darauf ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')}-Verlierer der anderen Hand ab (meist nach dem Trumpfziehen).`,
    trumpsOut: (n: number, odds: string) =>
      n === 1
        ? `Trumpf: Einer ist noch draußen (${odds}). Ziehen Sie ihn früh, außer Sie brauchen die Trümpfe des Dummys zum Schnappen oder müssen zuerst eine Nebenfarbe hochspielen.`
        : `Trumpf: ${n} sind noch draußen (${odds}). Ziehen Sie sie früh, außer Sie brauchen die Trümpfe des Dummys zum Schnappen oder müssen zuerst eine Nebenfarbe hochspielen.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts — the part of a suit reason before the first colon or
  // full stop is also shown alone as a short label.
  leads: {
    card: {
      singleton: 'Ein Single: Spielen Sie es aus.',
      ak: 'Ass aus Ass-König: Sie bleiben am Spiel und sehen den Dummy, bevor Sie weiter entscheiden.',
      doubleton: 'Hoch aus einem Double: erst die hohe, dann die niedrige Karte (hoch-tief zeigt ein Double und kann Ihnen einen Schnapper bringen).',
      sequence: (holding: string) => `Oberste Karte einer Sequenz (${holding}): verspricht die Karte darunter und verneint die darüber.`,
      interior: (holding: string, rank: number) => `Innere Sequenz (${holding}): Spielen Sie die oberste der benachbarten Karten aus, ${rankLabel(rank)}.`,
      touching: (holding: string) => `Oberste von benachbarten Figuren (${holding}).`,
      nothing: 'Die höchste von drei kleinen Karten („Top of Nothing“): Sie sagt Partner, dass Sie hier keine Figur haben.',
      small: 'Aus vier oder mehr kleinen Karten spielen Sie die zweithöchste aus, damit Partner bei Ihnen keine Figur vermutet.',
      partnerLow: 'Klein aus einer Figur mit zwei weiteren Karten in der Farbe des Partners (die dritthöchste).',
      fourth: (holding: string) => `Die vierthöchste Karte Ihrer längsten und stärksten Farbe (${holding}). Partner kann die Elferregel anwenden.`,
      third: (holding: string) => `Die dritthöchste aus einer Figur mit zwei kleinen Karten (${holding}): Behalten Sie die Figur, um damit eine des Alleinspielers zu fangen.`,
    },
    suit: {
      partnerBid: (suit: number) => `Partner hat ${core.suits[suit]} gereizt: Die Farbe des Partners auszuspielen ist selten falsch und meist am besten.`,
      theyBid: (suit: number) => `Die Gegner haben ${core.suits[suit]} gereizt – ihre Farbe auszuspielen hilft meist dem Alleinspieler.`,
      ntLong: (suit: number, n: number) =>
        `Gegen SA spielen Sie Ihre längste und stärkste Farbe aus (${n} ${core.suits[suit]}): Sie hoffen, Längenstiche hochzuspielen.`,
      ntSequence: 'Eine geschlossene Sequenz ist sicher und baut Stiche auf.',
      ntShort: (n: number) => `${n === 1 ? 'Ein Single' : lengthOf(n)}: kein ideales Ausspiel gegen SA.`,
      trump: 'Ein Trumpfausspiel: sicher und passiv, und es verringert die Schnapper am Tisch.',
      singleton: 'Ein Single: Sie hoffen, dass Partner früh einen Stich gewinnt und Ihnen einen Schnapper gibt.',
      aceAway: 'Spielen Sie gegen einen Farbkontrakt nie unter einem Ass aus – und das Ass selbst auszuspielen hilft selten.',
      sequence: (suit: number) => `Oberste Karte einer Sequenz in ${core.suits[suit]}: sicher, und sie kann Stiche aufbauen.`,
      plain: (suit: number, n: number) => (n === 1 ? `Ein Single in ${core.suits[suit]}.` : `${lengthOf(n)} in ${core.suits[suit]}.`),
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts
  signals: {
    leadBy: {
      you: (card: Card) => `Ihr Ausspiel: ${cardName(card)}`,
      partner: (card: Card) => `Ausspiel des Partners: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `Ausspiel von ${core.seats[seat]}: ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'Das Ass: meist aus Ass-König (gegen SA kann es Partner auch zum Deblockieren auffordern).'
          : 'Das Ass: meist aus Ass-König, oder ein blankes Ass bzw. Ass-Double.',
      king: (vsNT: boolean) =>
        vsNT ? 'Der König: oberste Karte einer Sequenz – K-Q (oder A-K). Er verneint das Ass, außer aus A-K.' : 'Der König: oberste Karte einer Sequenz – K-Q. Er verneint das Ass.',
      queen: 'Die Dame: oberste Karte einer Sequenz (Q-J…), verneint den König.',
      jack: 'Der Bube: oberste Karte von J-10… oder aus einer inneren Sequenz wie K-J-10. Verneint die Dame.',
      ten: 'Die Zehn: oberste Karte von 10-9… oder aus einer inneren Sequenz (Q-10-9, K-10-9).',
      nine: 'Die Neun: oberste Karte einer kurzen oder wertlosen Farbe oder aus 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Eine kleine ${core.suits[suit]}-Karte: wahrscheinlich die vierthöchste aus einer Länge mit Figur. Wenden Sie die Elferregel an.`
          : `Eine kleine ${core.suits[suit]}-Karte: meist die dritt- oder vierthöchste aus einer Figur – oder ein Single.`,
    },
    ruleOf11: {
      title: 'Elferregel',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Elferregel: 11 − ${rankLabel(rank)} = ${above} Karten höher als die ${rankLabel(rank)} in den anderen drei Händen. Sie sehen ${seen} davon (Dummy und Ihre Hand), also hat der Alleinspieler ${declarer}.`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${cardName(card)} von ${who === null ? 'Partner' : core.seats[who]}: Länge`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} kann hoch oder tief sein: Warten Sie auf die nächste ${core.suits[suit]}-Karte, um die Länge abzulesen.`
            : `${looks(card, look)}: ${look.sure ? '' : 'wahrscheinlich '}eine ${look.height === 'high' ? 'gerade' : 'ungerade'} Anzahl ${core.suits[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Gegenspieler spielen manchmal Falschkarten – nehmen Sie es als Hinweis.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `${cardName(card)} von Partner auf Ihr Ausspiel: Ermutigung`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} kann hoch oder tief sein: Noch ist nicht klar, ob Partner die Farbe mag.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'Partner mag die Farbe – spielen Sie sie weiter.' : 'Partner mag die Farbe wahrscheinlich.') : `Partner mag die Farbe ${look.sure ? '' : 'wahrscheinlich '}nicht – denken Sie über einen Wechsel nach.`}`,
      },
      discard: {
        title: (card: Card) => `Partner hat ${cardName(card)} abgeworfen`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} kann hoch oder tief sein: Noch ist nicht klar, ob Partner ${core.suits[suit]} möchte.`
            : `${looks(card, look)}: Partner möchte ${look.sure ? '' : 'wahrscheinlich '}${look.height === 'high' ? '' : 'kein '}${core.suits[suit]}.`,
      },
      preference: {
        title: (card: Card) => `Partner spielt ${cardName(card)} zum Schnappen aus: Farbpräferenz`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} ist weder klar hoch noch klar tief: Partner hat vielleicht keine Präferenz – spielen Sie zurück, was Ihnen am besten passt.`
            : `${looks(card, look)}: Partner möchte ${look.sure ? '' : 'wahrscheinlich '}${core.suits[look.height === 'high' ? sides[1] : sides[0]]} zurück, die ${look.height === 'high' ? 'höhere' : 'niedrigere'} der beiden anderen Nebenfarben.`,
      },
    },
    badge: {
      count: (even: boolean) => `Länge: ${even ? 'gerade' : 'ungerade'}`,
      attitude: (encourage: boolean) => `Signal: ${encourage ? 'ermutigend' : 'entmutigend'}`,
      discard: (encourage: boolean, suit: number) => `Abwurf: ${SUIT_SYMBOLS[suit]} ${encourage ? 'ermutigend' : 'entmutigend'}`,
      preference: (suit: number | null) => `Farbpräferenz: ${suit === null ? 'keine' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts
  eval: {
    hcp: 'FP',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Gesamtpunkte',
    totalNote: (lengthPts: number) => `FP + ${lengthPts} für Länge`,
    shape: 'Verteilung',
    balanced: 'ausgeglichen',
    semiBalanced: 'halbausgeglichen',
    unbalanced: 'unausgeglichen',
    losers: 'Verlierer',
    losersNote: 'Verliererzählung (LTC)',
    quickTricks: 'Schnelle Stiche',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Längste Farbe',
    controls: (n: number) => count(n, 'Kontrolle', 'Kontrollen'),
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts
  par: {
    contract: (contract: string, declarer: number) =>
      `${contract} von ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
