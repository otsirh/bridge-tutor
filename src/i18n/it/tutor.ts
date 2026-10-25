// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.

import type { Text } from '../en';

import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

const suits = (s: number) => core.suits[s];
/** "1 presa", "2 prese". */
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
/** The article a card takes, read by its Italian name: l’asso, il re, la donna, il fante, l’otto, il dieci. */
const article = (rank: number) => (rank === 14 || rank === 8 ? 'l’' : rank === 12 ? 'la ' : 'il ');
/** "il ♠K", "l’♠A", "la ♥Q". */
const the = (card: Card) => `${article(rankOf(card))}${cardName(card)}`;
/** The same at the start of a sentence: "Il ♠K", "L’♠A". */
const The = (card: Card) => {
  const s = the(card);
  return s[0].toUpperCase() + s.slice(1);
};
/** "del 7", "dell’8". */
const ofRank = (rank: number) => `${rank === 14 || rank === 8 ? 'dell’' : rank === 12 ? 'della ' : 'del '}${rankLabel(rank)}`;
/** Leading toward the honours in the other hand. */
const TOWARD = { aq: 'l’A-Q', king: 'il re', queen: 'la donna', honours: 'gli onori' };
const HONOUR: Record<number, string> = { 14: 'l’asso', 13: 'il re', 12: 'la donna' };
/** Length of a suit as Italian players name it: "una quarta", "una quinta". */
const LENGTH: Record<number, string> = { 3: 'Tre carte', 4: 'Una quarta', 5: 'Una quinta', 6: 'Una sesta', 7: 'Una settima', 8: 'Un’ottava' };
const shortHolding = (n: number) => (n === 1 ? 'Un singolo' : n === 2 ? 'Un doubleton' : `Un colore di ${n} carte`);
/** "2 o 4", "1, 3 o 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}` : String(xs[0]);
};
const highLow = (h: string | null) => (h === 'high' ? 'alta' : 'bassa');
/** How a signal card looks from across the table: "Alto-basso (♣8, poi ♣3)", "♣7 sembra una carta alta (…)". */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Alto-basso' : 'Basso-alto'} (${cardName(card)}, poi ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} è sempre una carta bassa`
      : l.sure
        ? `${cardName(card)} è una carta ${highLow(l.height)} (tutte le cartine più ${l.height === 'high' ? 'alte' : 'basse'} sono già note)`
        : `${cardName(card)} sembra una carta ${highLow(l.height)} (alcune cartine più ${l.height === 'high' ? 'basse' : 'alte'} sono ancora fuori)`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'Attacco',
      notStandard: (holding: string, rank: number, why: string) => `Da ${holding} la carta standard è ${article(rank)}${rankLabel(rank)}: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Battere atout',
      text: 'Giocando atout togli le atout ai difensori, così non possono tagliare le tue vincenti. Battile presto, a meno che le atout del morto non servano per tagliare.',
    },
    trumpsDrawn: {
      title: 'Atout già battute',
      text: 'I difensori non hanno più atout, quindi giocare atout non toglie più niente: l’atout fa la presa in una delle tue mani — utile come rientro — e ogni atout che incassi costringe entrambi i difensori a scartare.',
    },
    unblock: {
      title: 'Sblocco',
      text: 'Incassa prima la carta alta della mano corta, così la mano lunga resta in presa e può incassare il resto del colore.',
    },
    cash: {
      title: 'Incassare una vincente',
      declarer: (card: Card) => `${The(card)} è la carta più alta rimasta a ${suits(suitOf(card))}: fa la presa, a meno che qualcuno non tagli.`,
      defender: 'Incassa la tua presa sicura prima che il giocante possa scartare le perdenti sul colore lungo del morto.',
    },
    crossToOtherHand: {
      title: 'Passare nell’altra mano',
      text: 'Muovendo una cartina verso una vincente dell’altra mano la usi come rientro, così puoi giocare da lì la carta successiva.',
    },
    leadTowardHonours: {
      title: 'Giocare verso gli onori',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Muovi una cartina verso ${TOWARD[toward]}: così il difensore alla tua sinistra deve giocare prima che tu scelga la carta dell’altra mano. È la base dell’impasse.`,
    },
    develop: {
      title: 'Affrancare un colore',
      text: 'Cedendo adesso una presa in questo colore affranchi le carte che restano, finché controlli ancora gli altri colori.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Uscita in atout',
      text: 'Giocare atout riduce i tagli del giocante al morto: funziona bene quando il morto è corto in un colore laterale.',
    },
    lookForRuff: {
      title: 'Cercare un taglio',
      text: 'Con un colore corto speri che il compagno vada in presa e ti dia un taglio.',
    },
    returnPartner: {
      title: 'Ritornare nel colore del compagno',
      text: 'Il compagno ha scelto questo colore: ritornarci prosegue il suo piano — affrancare le sue carte lunghe o dargli un taglio — invece di aprire un colore nuovo al giocante.',
    },
    continueSuit: {
      title: 'Continuare nel tuo colore',
      text: 'Hai già giocato questo colore: rigiocarlo continua il lavoro sulle prese che la tua linea sta affrancando lì, invece di aprire un colore nuovo al giocante.',
    },
    switchSuits: {
      title: 'Cambio di colore',
      text: 'Gioca attraverso la forza del giocante o verso la debolezza del morto: il colore va mosso dal difensore che gioca prima della mano forte.',
    },

    // not following suit
    overruff: {
      title: 'Surtaglio',
      text: 'Tagliando più alto dell’atout già giocata vinci la presa.',
    },
    underruff: {
      title: 'Sottotagliare',
      text: (forced: boolean) =>
        forced
          ? 'In presa c’è già un’atout più alta, quindi la tua non può vincere — ma ti restano solo atout e devi giocarne una.'
          : 'In presa c’è già un’atout più alta, quindi la tua non può vincere: sottotagliare spreca un’atout. Scarta piuttosto una perdente di un colore laterale, a meno che tu non debba tenere tutte le carte laterali.',
    },
    ruffPartnersWinner: {
      title: 'Tagliare la vincente del compagno',
      text: 'Di solito è uno spreco: la presa era già del compagno.',
    },
    ruff: {
      title: 'Taglio',
      defender: 'Non hai più carte del colore giocato, quindi tagliando fai la presa.',
      short: 'Questa mano non ha più atout dell’altra, quindi il taglio è una presa in più: le atout dell’altra mano fanno comunque le loro prese.',
      forced: 'Non hai più carte del colore giocato dai difensori, quindi taglia per fare la presa. Un taglio nella mano lunga in atout non porta prese in più e accorcia le tue atout: se i difensori possono continuare a farti tagliare, rischi di perdere il controllo.',
      long: 'Tagliare nella mano con più atout consuma un’atout che farebbe comunque una presa, quindi da solo non guadagna nulla: serve quando affranca il resto del colore o ti porta in presa in questa mano.',
    },
    discard: {
      title: 'Scarto',
      defender: 'Scarta da un colore che non ti serve e conserva la lunghezza nei colori in cui devi guardarti dalle carte lunghe del giocante o del morto.',
      declarer: 'Scarta una perdente da un colore che non può fare prese e tieni le carte che possono ancora servire.',
    },

    // defenders' signals
    countSignal: {
      title: 'Segnale di conto',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Il giocante sta muovendo questo colore e il compagno si aspetta il conto: con ${n} carte di ${suits(suit)} (numero ${n % 2 ? 'dispari' : 'pari'}) la carta standard è ${the(best)}${n % 2 ? '' : ', poi una più bassa (alto-basso)'}. ${The(card)} mostrerebbe un numero ${n % 2 ? 'pari' : 'dispari'}.`
          : n % 2
            ? `Il giocante sta muovendo questo colore, quindi dai il conto: con ${n} carte di ${suits(suit)} (numero dispari) gioca la più bassa, ${the(card)}. Così il compagno capisce quante carte ha il giocante e quando prendere con l’asso.`
            : `Il giocante sta muovendo questo colore, quindi dai il conto: con ${n} carte di ${suits(suit)} (numero pari) gioca alto-basso, ${the(card)} adesso e una carta più bassa al giro successivo. Così il compagno capisce quante carte ha il giocante e quando prendere con l’asso.`,
    },
    attitudeSignal: {
      title: 'Segnale di gradimento',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Il compagno ha giocato questo colore e aspetta il tuo gradimento: il colore ${reason ? 'ti piace' : 'non ti piace'}, quindi la carta standard è ${the(best)}. ${The(card)} dice il contrario.`
          : reason === 'honour'
            ? `Il compagno ha giocato questo colore: dai il gradimento. Hai ${HONOUR[honour]}, quindi incoraggia con la cartina più alta che puoi permetterti, ${the(card)}, e il compagno continuerà.`
            : reason === 'ruff'
              ? `Il compagno ha giocato questo colore: dai il gradimento. Con un doubleton comincia dalla carta più alta (${cardName(card)}): l’alto-basso chiede al compagno di continuare, e al terzo giro tagli.`
              : `Il compagno ha giocato questo colore: dai il gradimento. Qui non c’è niente che valga la pena continuare, quindi scoraggia con la carta più bassa, ${the(card)}; il compagno cercherà un cambio.`,
    },
    discardSignal: {
      title: 'Scarto (gradimento)',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Vorresti che il compagno giocasse ${suits(suit)}, ma non hai una cartina di ${suits(suit)} abbastanza alta da essere letta come incoraggiante: scarta piuttosto una cartina bassa da un colore che non vuoi.`
          : want
            ? right
              ? `Uno scarto alto incoraggia: ${the(card)} chiede al compagno di giocare ${suits(suit)}, dove hai forza.`
              : `Vorresti che il compagno giocasse ${suits(suit)}, ma ${the(card)} è la tua carta più bassa e scoraggia; una carta alta (${cardName(best)}) incoraggerebbe, oppure scarta basso da un colore che non vuoi.`
            : right
              ? `Uno scarto basso scoraggia: ${the(card)} dice al compagno di non giocare ${suits(suit)}.`
              : `Uno scarto alto chiede al compagno di giocare ${suits(suit)}, che non vuoi: scarta piuttosto la carta più bassa (${cardName(best)}).`,
    },
    preferenceSignal: {
      title: 'Segnale di preferenza di colore',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Il compagno taglierà e leggerà la tua carta come preferenza di colore: senza preferenze, gioca una carta intermedia come ${the(best)}.`
            : `Il compagno taglierà e leggerà la tua carta come preferenza di colore: vuoi il ritorno a ${suits(want === 'high' ? sides[1] : sides[0])}, quindi gioca ${the(best)}.`
          : want === 'middle'
            ? 'Il compagno taglierà, e la tua carta dice anche quale colore rinviare: senza preferenze, gioca una carta intermedia, né alta né bassa.'
            : `Il compagno taglierà, e la tua carta dice anche quale colore rinviare: una carta ${highLow(want)} chiede il ritorno a ${suits(want === 'high' ? sides[1] : sides[0])} (il ${want === 'high' ? 'più alto' : 'più basso'} degli altri due colori laterali), dove hai l’asso.`,
    },

    // second hand
    coverHonour: {
      title: 'Coprire onore con onore',
      text: 'Coprendo costringi il giocante a spendere due carte alte per una sola presa, e questo può promuovere una carta più bassa in mano tua o del compagno.',
      declarer: 'Coprendo costringi i difensori a spendere due carte alte per una sola presa, e questo può promuovere una carta più bassa della tua linea.',
    },
    secondHandLow: {
      title: 'Secondo di mano basso',
      text: 'Il tuo compagno gioca dopo di te e dopo il compagno di chi ha mosso il colore: giocando basso conservi la carta alta per catturare più tardi qualcosa di più grosso.',
    },
    sureTrick: {
      title: 'Fare una presa sicura',
      text: (card: Card) => `${The(card)} è la carta più alta rimasta nel colore.`,
      safe: (card: Card) => `${The(card)} fa la presa, a meno che qualcuno non tagli: il difensore che deve ancora giocare non può avere una carta più alta nel colore.`,
    },
    finesse: {
      title: 'Fare l’impasse',
      text: (card: Card) => `${The(card)} vince solo se le carte più alte che ti mancano nel colore sono in mano al difensore che ha già giocato: è l’impasse. Se il difensore che deve ancora giocare ne ha una, batte la tua carta.`,
    },
    splitHonours: {
      title: 'Dividere gli onori',
      text: 'Giocando uno degli onori in sequenza impedisci al giocante di vincere a buon mercato con una carta più bassa.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'La presa è del compagno',
      third: 'La carta del compagno sta già vincendo, quindi gioca basso (o segnala).',
      fourth: 'Non superare il compagno: gioca la carta più bassa.',
      declarer: 'La carta della tua linea sta vincendo: gioca basso e conserva le carte alte.',
    },
    overtake: {
      title: 'Superare il compagno',
      text: 'La carta della tua linea stava già vincendo: superarla spende una seconda carta alta nella stessa presa, quindi fallo solo per sbloccare il colore o per andare in presa in questa mano.',
    },
    thirdHandHighEquals: {
      title: 'Terzo di mano alto, la più bassa delle equivalenti',
      text: 'Tra carte in sequenza gioca la più bassa: così il compagno può dedurre dove si trova quella più alta.',
      wrong: (card: Card, cheapest: Card) => `${The(cheapest)} vale quanto ${the(card)}: tra carte in sequenza gioca la più bassa, così il compagno può dedurre dove si trova quella più alta.`,
    },
    thirdHandHigh: {
      title: 'Terzo di mano alto',
      text: 'Se la carta del compagno non sta vincendo, gioca alto per fare la presa o per far cadere una carta importante.',
    },
    cantWin: {
      title: 'La presa non si può vincere',
      third: 'Gioca la carta più bassa (o dai il gradimento, se il colore l’ha mosso il compagno).',
      fourth: 'Gioca la carta più bassa del colore.',
    },
    duck: {
      title: 'Lisciare',
      text: 'Potresti vincere questa presa ma la lasci passare: lisciando conservi la carta alta per un giro successivo — per tenere un fermo, conservare un rientro o mantenere le comunicazioni nel colore.',
    },
    winCheaply: {
      title: 'Vincere al minor costo',
      text: 'Giochi per ultimo: vinci con la carta più piccola che basta.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts
  plan: {
    allWinners: 'tutte vincenti',
    topTricks: (n: number) => count(n, 'presa sicura', 'prese sicure'),
    noTopTricks: 'nessuna presa sicura',
    cardsOut: (n: number) => `${n} carte`,

    ntEnough: (total: number, need: number) =>
      `Hai ${total} prese sicure e te ne servono ${need}: incassale senza bloccare i colori (prima le carte alte della mano corta).`,
    ntShort: (total: number, need: number) =>
      `Hai ${count(total, 'presa sicura', 'prese sicure')} e te ne servono ${need}: ${need - total === 1 ? 'trova quella che manca' : `trova le ${need - total} che mancano`} prima che i difensori affranchino il loro colore.`,
    losersOk: (losers: number, allowed: number) =>
      `Circa ${count(losers, 'perdente', 'perdenti')} e te ne puoi permettere ${allowed}: batti atout e incassa le tue prese, a meno che non serva subito un taglio o uno scarto.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Circa ${losers} perdenti, ma te ne puoi permettere solo ${allowed}: devi liberartene di ${losers - allowed} (tagliandole, scartandole su vincenti in più o con un’impasse).`,

    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Affranca il colore di ${suits(suit)}: con ${total} carte in linea (${missing} fuori, ${odds}), le lunghe a ${SUIT_SYMBOLS[suit]} possono rendere circa ${count(extra, 'presa', 'prese')} in più.`,
    finesseAQ: (suit: number, holding: string) =>
      `Impasse a ${suits(suit)}: muovi verso l’A-Q (${holding}) e, se il re non compare, gioca la donna: circa il 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `A ${suits(suit)} muovi verso il re (${holding}): fa presa se l’asso è alla tua sinistra, circa il 50%.`,
    doubleFinesse: (suit: number) =>
      `Doppia impasse a ${suits(suit)} (A-J-10): fai l’impasse due volte; realizzi due prese nel 76% dei casi.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Scaccia l’asso di ${suits(suit)}: poi K-Q${withJack ? '-J' : ''} ti ${withJack ? 'daranno almeno 2 prese' : 'darà almeno 1 presa'}.`,
    ntDevelopEarly: 'A senza atout affranca presto le prese che ti mancano, finché controlli ancora i colori, e conta quante volte puoi permetterti di cedere la mano.',
    ruffInShortHand: (inDummy: boolean, list: { suit: number; len: number }[]) =>
      `Taglia le perdenti ${inDummy ? 'al morto' : 'in mano'}, la mano corta in atout: ${list.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'chicane'})`).join(', ')}. Un taglio nella mano corta è una presa in più; un taglio nella mano lunga in atout no.`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Scarti: ${inDummy ? 'al morto' : 'in mano'} hai ${count(extra, 'vincente', 'vincenti')} in più a ${SUIT_SYMBOLS[suit]}: ${extra === 1 ? 'usala' : 'usale'} per scartare le perdenti a ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')} dell’altra mano (di solito dopo aver battuto atout).`,
    trumpsOut: (n: number, odds: string) =>
      `Atout avversarie: ${n} (${odds}). ${n === 1 ? 'Toglila' : 'Toglile'} presto, a meno che le atout del morto non servano per tagliare o tu non debba prima affrancare un colore laterale.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts
  leads: {
    card: {
      singleton: 'Un singolo: attaccalo.',
      ak: 'L’asso da asso-re: resti in presa e vedi il morto prima di decidere come continuare.',
      doubleton: 'La più alta del doubleton: prima la carta alta, poi la bassa (l’alto-basso mostra il doubleton e può procurarti un taglio).',
      sequence: (holding: string) => `Testa di sequenza (${holding}): promette la carta immediatamente sotto e nega quella sopra.`,
      interior: (holding: string, rank: number) => `Sequenza interna (${holding}): attacca con la più alta delle carte in sequenza, ${article(rank)}${rankLabel(rank)}.`,
      touching: (holding: string) => `La più alta degli onori in sequenza (${holding}).`,
      nothing: 'La più alta da tre cartine: dice al compagno che nel colore non hai onori.',
      small: 'Da quattro o più cartine attacca con la seconda più alta, così il compagno non ti attribuisce un onore.',
      partnerLow: 'Una cartina da onore terzo nel colore del compagno (la terza migliore).',
      fourth: (holding: string) => `Quarta migliore dal colore più lungo e più forte (${holding}). Il compagno può applicare la regola dell’11.`,
      third: (holding: string) => `Terza migliore da un onore con due cartine (${holding}): tieni l’onore per catturarne uno del giocante.`,
    },
    suit: {
      partnerBid: (suit: number) => `Il compagno ha dichiarato ${suits(suit)}: attaccare nel suo colore raramente è sbagliato e di solito è la scelta migliore.`,
      supported: (suit: number) => `Hai mostrato ${suits(suit)} e il compagno ti ha appoggiato: il colore della tua linea è un attacco naturale.`,
      theyBid: (suit: number) => `Gli avversari hanno dichiarato ${suits(suit)}: attaccare nel loro colore di solito aiuta il giocante.`,
      slamRisky: 'Contro uno slam, attaccare sotto un onore senza carte in sequenza regala spesso al giocante una presa che altrimenti non farebbe.',
      slamSafe: 'Contro uno slam, scegli un attacco sicuro: da cartine non regali nulla, e una presa regalata di solito è il contratto.',
      ntLong: (suit: number, n: number) =>
        `Contro i senza atout attacca nel colore più lungo e più forte (${n} carte di ${suits(suit)}): speri di affrancare le carte lunghe.`,
      ntSequence: 'Una sequenza solida è sicura e costruisce prese.',
      ntShort: (n: number) => `${shortHolding(n)}: non è l’attacco ideale contro i senza atout.`,
      trump: 'Attacco in atout: sicuro e passivo, e riduce i tagli del morto.',
      singleton: 'Un singolo: speri che il compagno vada presto in presa e ti dia un taglio.',
      aceAway: 'Contro un contratto a colore non attaccare mai sotto l’asso; e anche attaccare con l’asso stesso aiuta di rado.',
      sequence: (suit: number) => `Testa di sequenza a ${suits(suit)}: sicuro, e può affrancare prese.`,
      plain: (suit: number, n: number) =>
        n === 1 ? `Un singolo a ${suits(suit)}.` : n === 2 ? `Un doubleton a ${suits(suit)}.` : `${LENGTH[n] ?? `${n} carte`} di ${suits(suit)}.`,
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts
  signals: {
    leadBy: {
      you: (card: Card) => `Il tuo attacco: ${cardName(card)}`,
      partner: (card: Card) => `L’attacco del compagno: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `L’attacco di ${core.seats[seat]}: ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'L’asso: di solito da asso-re (contro i senza atout può anche chiedere al compagno di sbloccare).'
          : 'L’asso: di solito da asso-re, oppure un asso singolo o secondo.',
      king: (vsNT: boolean) =>
        vsNT ? 'Il re: testa di sequenza, K-Q (o A-K). Nega l’asso, salvo che venga da A-K.' : 'Il re: testa di sequenza, K-Q. Nega l’asso.',
      queen: 'La donna: testa di sequenza (Q-J…), nega il re.',
      jack: 'Il fante: testa di J-10…, oppure da una sequenza interna come K-J-10. Nega la donna.',
      ten: 'Il 10: testa di 10-9…, oppure da una sequenza interna (Q-10-9, K-10-9).',
      nine: 'Il 9: la più alta da un colore corto o senza valori, oppure da 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Una cartina di ${suits(suit)}: probabilmente quarta migliore da un colore lungo con un onore. Applica la regola dell’11.`
          : `Una cartina di ${suits(suit)}: di solito terza o quarta migliore da un onore, oppure un singolo.`,
    },
    ruleOf11: {
      title: 'Regola dell’11',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Regola dell’11: 11 − ${rankLabel(rank)} = ${above} carte più alte ${ofRank(rank)} nelle altre tre mani. Ne vedi ${seen} (al morto e in mano tua), quindi il giocante ne ha ${declarer}.`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${cardName(card)} ${who === null ? 'del compagno' : `di ${core.seats[who]}`}: conto`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} può essere una carta alta o bassa: aspetta la prossima carta di ${suits(suit)} per leggere il conto.`
            : `${looks(card, look)}: ${look.sure ? '' : 'probabilmente '}un numero ${look.height === 'high' ? 'pari' : 'dispari'} di carte di ${suits(suit)}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' A volte i difensori giocano una falsa carta: prendilo come un indizio.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `${cardName(card)} del compagno sul tuo attacco: gradimento`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} può essere una carta alta o bassa: non è ancora chiaro se il colore piace al compagno.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'il colore piace al compagno, continualo.' : 'probabilmente il colore piace al compagno.') : `${look.sure ? '' : 'probabilmente '}il colore non piace al compagno: pensa a un cambio.`}`,
      },
      discard: {
        title: (card: Card) => `Il compagno ha scartato ${cardName(card)}`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} può essere una carta alta o bassa: non è ancora chiaro se il compagno vuole che tu giochi ${suits(suit)}.`
            : `${looks(card, look)}: il compagno ${look.sure ? '' : 'probabilmente '}${look.height === 'high' ? 'vuole' : 'non vuole'} che tu giochi ${suits(suit)}.`,
      },
      preference: {
        title: (card: Card) => `Il compagno gioca ${cardName(card)} per farti tagliare: preferenza di colore`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} non è chiaramente né alta né bassa: forse il compagno non ha preferenze, quindi rinvia il colore che ti conviene di più.`
            : `${looks(card, look)}: il compagno ${look.sure ? '' : 'probabilmente '}chiede il ritorno a ${suits(look.height === 'high' ? sides[1] : sides[0])}, il ${look.height === 'high' ? 'più alto' : 'più basso'} degli altri due colori laterali.`,
      },
    },
    badge: {
      count: (even: boolean) => `Conto: ${even ? 'pari' : 'dispari'}`,
      attitude: (encourage: boolean) => `Gradimento: ${encourage ? 'incoraggia' : 'scoraggia'}`,
      discard: (encourage: boolean, suit: number) => `Scarto: ${encourage ? 'incoraggia' : 'scoraggia'} ${SUIT_SYMBOLS[suit]}`,
      preference: (suit: number | null) => `Preferenza di colore: ${suit === null ? 'nessuna' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts
  eval: {
    hcp: 'PO',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Punti totali',
    totalNote: (lengthPts: number) => `PO + ${lengthPts} di lunghezza`,
    shape: 'Distribuzione',
    balanced: 'bilanciata',
    semiBalanced: 'semibilanciata',
    unbalanced: 'sbilanciata',
    losers: 'Perdenti',
    losersNote: 'Conteggio delle perdenti',
    quickTricks: 'Prese rapide',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Colore più lungo',
    controls: (n: number) => count(n, 'controllo', 'controlli'),
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts
  par: {
    contract: (contract: string, declarer: number) =>
      `${contract} giocato da ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
