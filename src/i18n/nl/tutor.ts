// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Same layout as src/i18n/en/tutor.ts (see the notes there on parameters).
// core.suits is the plural ("vijf harten"), core.suitSingular the form for one
// card ("een kleine klaver", "de hoogste ruiten").

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

/** "1 slag", "2 slagen". */
const slagen = (n: number) => (n === 1 ? 'slag' : 'slagen');
/** "een vierkaart" etc.; 1 and 2 cards are a singleton and a doubleton. */
const LENGTH_WORDS: Record<number, string> = { 3: 'driekaart', 4: 'vierkaart', 5: 'vijfkaart', 6: 'zeskaart', 7: 'zevenkaart', 8: 'achtkaart' };
const holdingWord = (n: number) => (n === 1 ? 'singleton' : n === 2 ? 'doubleton' : (LENGTH_WORDS[n] ?? `${n}-kaart`));
/** Leading toward the honours in the other hand: "naar de heer". */
const TOWARD = { aq: 'A-Q', king: 'heer', queen: 'vrouw', honours: 'honneurs' };
const HONOUR: Record<number, string> = { 14: 'aas', 13: 'heer', 12: 'vrouw' };
/** "2 of 4", "1, 3 of 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} of ${xs[xs.length - 1]}` : String(xs[0]);
};
const highLow = (h: 'high' | 'low') => (h === 'high' ? 'hoog' : 'laag');
/** How a signal card looks from across the table: "Hoog-laag (♣8, daarna ♣3)", "♣7 lijkt hoog (…)". */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Hoog-laag' : 'Laag-hoog'} (${cardName(card)}, daarna ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} is altijd laag`
      : l.sure
        ? `${cardName(card)} is ${highLow(l.height!)} (alle ${l.height === 'high' ? 'hogere' : 'lagere'} kleine kaarten zijn bekend)`
        : `${cardName(card)} lijkt ${highLow(l.height!)} (er zitten nog ${l.height === 'high' ? 'lagere' : 'hogere'} kleine kaarten buiten)`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'Uitkomst',
      notStandard: (holding: string, rank: number, why: string) => `Uit ${holding} is de standaardkaart de ${rankLabel(rank)}: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'Troef trekken',
      text: 'Door troef te spelen haal je de troeven van de tegenspelers weg, zodat ze je vaste slagen niet kunnen introeven. Trek ze vroeg, tenzij je de troeven van de dummy nodig hebt om in te troeven.',
    },
    trumpsDrawn: {
      title: 'Troeven al getrokken',
      text: 'De tegenspelers hebben geen troeven meer, dus deze troef trekt niets: hij wint de slag in een van je handen — handig als entree — en elke troef die je incasseert dwingt beide tegenspelers af te gooien.',
    },
    unblock: {
      title: 'Deblokkeren',
      text: 'Speel eerst de hoge kaart uit de korte hand, zodat de lange hand aan slag blijft en de rest van de kleur kan afspelen.',
    },
    cash: {
      title: 'Een vaste slag incasseren',
      declarer: (card: Card) => `${cardName(card)} is de hoogste ${core.suitSingular[suitOf(card)]} die nog in het spel is: die wint de slag, tenzij iemand introeft.`,
      defender: 'Pak je vaste slag voordat de leider verliezers kan afgooien op de lange kleur van de dummy.',
    },
    crossToOtherHand: {
      title: 'Oversteken naar de andere hand',
      text: 'Door klein te spelen naar een vaste slag in de andere hand gebruik je die als entree, zodat je daarna vanuit die hand kunt voorspelen.',
    },
    leadTowardHonours: {
      title: 'Naar honneurs toe spelen',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Speel klein naar de ${TOWARD[toward]}, zodat de tegenspeler links van je moet bijspelen voordat jij je kaart uit de andere hand kiest — de basis van de snit.`,
    },
    develop: {
      title: 'Een kleur vrijspelen',
      text: 'Door nu een slag in deze kleur af te geven, speel je de overige kaarten vrij terwijl je de andere kleuren nog in handen hebt.',
    },

    // defenders on lead
    trumpLead: {
      title: 'Troef spelen',
      text: 'Troef spelen beperkt het aantal keren dat de leider in de dummy kan introeven — sterk als de dummy kort is in een bijkleur.',
    },
    lookForRuff: {
      title: 'Op zoek naar een troefslag',
      text: 'Met een korte kleur hoop je dat partner aan slag komt en jou laat introeven.',
    },
    returnPartner: {
      title: 'De kleur van partner terugspelen',
      text: 'Partner koos deze kleur: door hem terug te spelen zet je het plan van partner voort — de lange kaarten van partner vrijspelen of partner laten introeven — in plaats van een nieuwe kleur voor de leider te openen.',
    },
    continueSuit: {
      title: 'Je eigen kleur doorspelen',
      text: 'Je speelde deze kleur al eerder: door hem opnieuw te spelen werk je verder aan de slagen die jullie daar vrijspelen, in plaats van een nieuwe kleur voor de leider te openen.',
    },
    switchSuits: {
      title: 'Van kleur wisselen',
      text: 'Speel door de kracht van de leider heen of naar de zwakte van de dummy toe: de tegenspeler vóór de sterke hand hoort die kleur te spelen.',
    },

    // not following suit
    overruff: {
      title: 'Overtroeven',
      text: 'Met een hogere troef dan die al gespeeld is, win je de slag.',
    },
    underruff: {
      title: 'Ondertroeven',
      text: (forced: boolean) =>
        forced
          ? 'Er ligt al een hogere troef in de slag, dus de jouwe kan niet winnen — maar je hebt alleen nog troeven en moet er een bijspelen.'
          : 'Er ligt al een hogere troef in de slag, dus de jouwe kan niet winnen: ondertroeven verspilt een troef. Gooi liever een verliezer uit een bijkleur af, tenzij je elke kaart in de bijkleuren moet houden.',
    },
    ruffPartnersWinner: {
      title: 'De slag van partner introeven',
      text: 'Meestal verspilling: partner had deze slag al.',
    },
    ruff: {
      title: 'Introeven',
      defender: 'Je hebt niets meer in de gespeelde kleur, dus met introeven win je de slag.',
      short: 'Deze hand heeft niet meer troeven dan de andere, dus introeven levert een extra slag op: de troeven van de andere hand maken nog steeds hun eigen slagen.',
      forced: 'Je hebt niets meer in de kleur die de tegenspelers voorspeelden, dus troef in om de slag te winnen. Introeven in de lange troefhand levert geen extra slag op en maakt je troeven korter: als de tegenspelers je steeds weer kunnen laten introeven, kun je de controle verliezen.',
      long: 'Introeven in de hand met de meeste troeven kost een troef die toch een slag zou maken, dus op zich levert het niets op — het helpt als je er de rest van de kleur mee vrijspeelt of zo in deze hand aan slag komt.',
    },
    discard: {
      title: 'Afgooien',
      defender: 'Gooi af uit een kleur die je niet nodig hebt, en houd lengte in kleuren waarin je de lange kaarten van de leider of de dummy moet bewaken.',
      declarer: 'Gooi een verliezer af uit een kleur die geen slagen kan maken, en houd de kaarten die je nog nodig kunt hebben.',
    },

    // defenders' signals
    countSignal: {
      title: 'Lengtesignaal',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `De leider speelt deze kleur en partner verwacht een lengtesignaal: met ${n} ${core.suits[suit]} (een ${n % 2 ? 'oneven' : 'even'} aantal) is de standaardkaart ${cardName(best)}${n % 2 ? '' : ', daarna een lagere (hoog-laag)'}. ${cardName(card)} zou een ${n % 2 ? 'even' : 'oneven'} aantal tonen.`
          : n % 2
            ? `De leider speelt deze kleur, dus laat je lengte zien: met ${n} ${core.suits[suit]} (een oneven aantal) speel je je laagste kaart, ${cardName(card)}. Partner kan dan zien hoeveel kaarten de leider heeft en wanneer de aas genomen moet worden.`
            : `De leider speelt deze kleur, dus laat je lengte zien: met ${n} ${core.suits[suit]} (een even aantal) speel je hoog-laag — nu ${cardName(card)}, de volgende keer een lagere kaart. Partner kan dan zien hoeveel kaarten de leider heeft en wanneer de aas genomen moet worden.`,
    },
    attitudeSignal: {
      title: 'Attitudesignaal',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Partner speelde deze kleur voor en verwacht een attitudesignaal: je wilt ${reason ? 'dat partner doorspeelt' : 'niet dat partner doorspeelt'}, dus de standaardkaart is ${cardName(best)}. ${cardName(card)} zegt het tegenovergestelde.`
          : reason === 'honour'
            ? `Partner speelde deze kleur voor: geef attitude. Je hebt de ${HONOUR[honour]}, dus moedig aan met de hoogste kleine kaart die je kunt missen, ${cardName(card)}, en partner speelt door.`
            : reason === 'ruff'
              ? `Partner speelde deze kleur voor: geef attitude. Met een doubleton begin je met de hoogste kaart (${cardName(card)}): hoog-laag vraagt partner door te spelen, en jij troeft de derde ronde in.`
              : `Partner speelde deze kleur voor: geef attitude. Hier is niets wat doorspelen waard is, dus ontmoedig met je laagste kaart, ${cardName(card)}; partner gaat dan op zoek naar een andere kleur.`,
    },
    discardSignal: {
      title: 'Afgooisignaal (attitude)',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Je zou graag ${core.suits[suit]} terugkrijgen, maar geen ${core.suitSingular[suit]} die je kunt missen is hoog genoeg om als aanmoedigend gelezen te worden; gooi in plaats daarvan laag af uit een kleur die je niet wilt.`
          : want
            ? right
              ? `Hoog afgooien moedigt aan: ${cardName(card)} vraagt partner om ${core.suits[suit]} te spelen, waar jij kracht hebt.`
              : `Je zou graag ${core.suits[suit]} terugkrijgen, maar ${cardName(card)} is je laagste en ontmoedigt; een hoge kaart (${cardName(best)}) zou aanmoedigen — of gooi laag af uit een kleur die je niet wilt.`
            : right
              ? `Laag afgooien ontmoedigt: ${cardName(card)} vertelt partner geen ${core.suits[suit]} te spelen.`
              : `Hoog afgooien vraagt partner om ${core.suits[suit]} te spelen, en dat wil je niet; gooi in plaats daarvan je laagste af (${cardName(best)}).`,
    },
    preferenceSignal: {
      title: 'Voorkeurssignaal',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Partner gaat dit introeven en leest je kaart als voorkeurssignaal; zonder voorkeur speel je een middelste kaart, zoals ${cardName(best)}.`
            : `Partner gaat dit introeven en leest je kaart als voorkeurssignaal: je wilt ${core.suits[want === 'high' ? sides[1] : sides[0]]} terug, dus speel ${cardName(best)}.`
          : want === 'middle'
            ? 'Partner gaat dit introeven, en je kaart vertelt ook welke kleur partner moet terugspelen: zonder voorkeur speel je een middelste kaart — niet hoog en niet laag.'
            : `Partner gaat dit introeven, en je kaart vertelt ook welke kleur partner moet terugspelen: een ${want === 'high' ? 'hoge' : 'lage'} kaart vraagt om ${core.suits[want === 'high' ? sides[1] : sides[0]]} (de ${want === 'high' ? 'hoogste' : 'laagste'} van de twee andere bijkleuren), waar jij de aas hebt.`,
    },

    // second hand
    coverHonour: {
      title: 'Honneur op honneur',
      text: 'Door af te dekken moet de leider twee hoge kaarten gebruiken om één slag te winnen, waardoor een lagere kaart bij jou of je partner hoog kan worden.',
      declarer: 'Door af te dekken moeten de tegenspelers twee hoge kaarten gebruiken om één slag te winnen, waardoor een lagere kaart aan jouw kant hoog kan worden.',
    },
    secondHandLow: {
      title: 'Tweede hand laag',
      text: 'Partner speelt na jou en na de partner van de voorspeler; door laag te spelen bewaar je je hoge kaart om later iets groters te vangen.',
    },
    sureTrick: {
      title: 'Een vaste slag winnen',
      text: (card: Card) => `${cardName(card)} is de hoogste kaart die in deze kleur nog over is.`,
      safe: (card: Card) => `${cardName(card)} wint de slag, tenzij iemand introeft: de tegenspeler die nog moet spelen kan geen hogere kaart in de kleur hebben.`,
    },
    finesse: {
      title: 'Snijden',
      text: (card: Card) => `${cardName(card)} wint alleen als de hogere kaarten in de kleur die je mist bij de tegenspeler zitten die al heeft gespeeld — de snit. Heeft de tegenspeler die nog moet spelen er een, dan wint die van je kaart.`,
    },
    splitHonours: {
      title: 'Honneurs splitsen',
      text: 'Door een van je aaneengesloten honneurs te spelen voorkom je dat de leider goedkoop wint met een lagere kaart.',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'Partner wint de slag',
      third: 'De kaart van partner wint al, dus speel laag (of geef een signaal).',
      fourth: 'Neem niet over: speel je laagste kaart.',
      declarer: 'De kaart van jouw kant wint tot nu toe: speel laag en bewaar je hoge kaarten.',
    },
    overtake: {
      title: 'Overnemen',
      text: 'De kaart van jouw kant won al: overnemen kost een tweede hoge kaart in dezelfde slag, dus doe het alleen om de kleur te deblokkeren of om in deze hand aan slag te komen.',
    },
    thirdHandHighEquals: {
      title: 'Derde hand hoog — de laagste van gelijke kaarten',
      text: 'Speel de laagste van je aaneengesloten kaarten: dan kan partner afleiden waar de hogere zit.',
      wrong: (card: Card, cheapest: Card) => `${cardName(cheapest)} doet hetzelfde werk als ${cardName(card)}: speel de laagste van je aaneengesloten kaarten, dan kan partner afleiden waar de hogere zit.`,
    },
    thirdHandHigh: {
      title: 'Derde hand hoog',
      text: 'De kaart die partner voorspeelde wint niet, dus speel hoog om de slag te winnen of een hoge kaart eruit te drijven.',
    },
    cantWin: {
      title: 'Je kunt de slag niet winnen',
      third: 'Speel je laagste kaart (of geef attitude als partner de kleur voorspeelde).',
      fourth: 'Speel je laagste kaart in de kleur.',
    },
    duck: {
      title: 'Duiken',
      text: 'Je kunt deze slag winnen maar laat hem lopen: door te duiken bewaar je je hoge kaart voor een latere ronde — om een stopper achter te houden, een entree te bewaren of de verbinding in de kleur te houden.',
    },
    winCheaply: {
      title: 'Goedkoop winnen',
      text: 'Jij speelt als laatste: win met de laagste kaart die volstaat.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts
  plan: {
    // sure tricks in one suit
    allWinners: 'allemaal vaste slagen',
    topTricks: (n: number) => `${n} vaste ${slagen(n)}`,
    noTopTricks: 'geen vaste slagen',
    cardsOut: (n: number) => `${n} kaarten`,

    // summary, notrump
    ntEnough: (total: number, need: number) =>
      `Je hebt ${total} vaste slagen en hebt er ${need} nodig: incasseer je slagen — en blokkeer geen kleur (speel eerst de hoge kaarten uit de korte hand).`,
    ntShort: (total: number, need: number) =>
      `Je hebt ${total} vaste ${slagen(total)} en hebt er ${need} nodig: vind er nog ${need - total} voordat de tegenspelers hun kleur vrijspelen.`,
    // summary, suit contracts
    losersOk: (losers: number, allowed: number) =>
      losers === 0
        ? 'Geen verliezers om je zorgen over te maken: trek troef en incasseer je slagen, tenzij je eerst moet introeven of afgooien.'
        : `Ongeveer ${losers} ${losers === 1 ? 'verliezer' : 'verliezers'}, en je mag er ${allowed} hebben: trek troef en incasseer je slagen, tenzij je eerst moet introeven of afgooien.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Ongeveer ${losers} verliezers, maar je mag er maar ${allowed} hebben: je moet er ${losers - allowed} kwijt (door ze in te troeven, ze af te gooien op extra slagen of met een snit).`,

    // ideas
    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Speel de ${core.suits[suit]} vrij: met ${total} kaarten samen (${missing} bij de tegenstanders, ${odds}) kan de ${SUIT_SYMBOLS[suit]}-lengte ongeveer ${extra} extra ${slagen(extra)} opleveren.`,
    finesseAQ: (suit: number, holding: string) =>
      `Snit in ${core.suits[suit]}: speel naar A-Q (${holding}) en leg de vrouw als de heer niet verschijnt — ongeveer 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `Speel in ${core.suits[suit]} naar de heer (${holding}): die maakt een slag als de aas links van je zit — ongeveer 50%.`,
    doubleFinesse: (suit: number) =>
      `Dubbele snit in ${core.suits[suit]} (A-J-10): snijd twee keer; in 76% van de gevallen maak je twee slagen.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Drijf de ${core.suitSingular[suit]}aas eruit: K-Q${withJack ? '-J' : ''} levert je daarna ${withJack ? '2+ slagen' : '1+ slag'} op.`,
    ntDevelopEarly: 'Speel in sans atout je extra slagen vroeg vrij, zolang je de kleuren nog in handen hebt — en tel hoe vaak je de slag kunt afgeven.',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Troef verliezers in ${inDummy ? 'de dummy' : 'je eigen hand'}, de korte troefhand: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'renonce'})`).join(', ')}. Introeven in de korte hand levert een extra slag op; introeven in de lange troefhand niet.`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Afgooien: ${inDummy ? 'de dummy' : 'je eigen hand'} heeft ${extra} extra ${extra === 1 ? 'vrije slag' : 'vrije slagen'} in ${SUIT_SYMBOLS[suit]} — gooi daar ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')}-verliezers uit de andere hand op af (meestal nadat je troef hebt getrokken).`,
    trumpsOut: (n: number, odds: string) =>
      `Troef: er ${n === 1 ? 'zit nog 1 troef' : `zitten nog ${n} troeven`} buiten (${odds}). Trek ${n === 1 ? 'hem' : 'ze'} vroeg, tenzij je de troeven van de dummy nodig hebt om in te troeven of eerst een bijkleur moet vrijspelen.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts
  leads: {
    card: {
      singleton: 'Een singleton: kom ermee uit.',
      ak: 'De aas van aas-heer: je blijft aan slag en ziet de dummy voordat je beslist hoe je verdergaat.',
      doubleton: 'De hoogste van een doubleton: eerst de hoge kaart, dan de lage (hoog-laag toont een doubleton en kan je een troefslag opleveren).',
      sequence: (holding: string) => `De hoogste van een reeks (${holding}): belooft de kaart eronder en ontkent de kaart erboven.`,
      interior: (holding: string, rank: number) => `Binnenreeks (${holding}): kom uit met de hoogste van de aaneengesloten kaarten, de ${rankLabel(rank)}.`,
      touching: (holding: string) => `De hoogste van aaneengesloten honneurs (${holding}).`,
      nothing: 'De hoogste van niets uit drie kleine kaarten: vertelt partner dat je hier geen honneur hebt.',
      small: 'Met vier of meer kleine kaarten kom je uit met de tweede van boven, zodat partner je geen honneur toedicht.',
      partnerLow: 'Laag uit een honneur met nog twee kaarten in de kleur van partner (derde van boven).',
      fourth: (holding: string) => `Vierde van boven uit je langste en sterkste kleur (${holding}). Partner kan de regel van 11 gebruiken.`,
      third: (holding: string) => `Derde van boven uit een honneur met twee kleine kaarten (${holding}): bewaar de honneur om er een van de leider mee te vangen.`,
    },
    suit: {
      partnerBid: (suit: number) => `Partner heeft ${core.suits[suit]} geboden: uitkomen in de kleur van partner is zelden fout en meestal het best.`,
      supported: (suit: number) => `Je liet ${core.suits[suit]} zien en partner steunde ze: de kleur van jullie kant is een natuurlijke uitkomst.`,
      theyBid: (suit: number) => `De tegenstanders hebben ${core.suits[suit]} geboden — uitkomen in hun kleur helpt meestal de leider.`,
      slamRisky: 'Tegen een slem geeft uitkomen onder een honneur zonder aansluitende kaarten de leider vaak een slag die hij anders niet zou maken.',
      slamSafe: 'Tegen een slem kom je veilig uit: vanuit kleine kaarten geef je niets weg, en één weggegeven slag is meestal het contract.',
      // against notrump
      ntLong: (suit: number, n: number) =>
        `Kom tegen sans atout uit in je langste en sterkste kleur (${n} ${core.suits[suit]}): je hoopt lengteslagen vrij te spelen.`,
      ntSequence: 'Een gesloten reeks is veilig en maakt slagen vrij.',
      ntShort: (n: number) => `Een ${holdingWord(n)}: niet de ideale uitkomst tegen sans atout.`,
      // against a suit contract
      trump: 'Een troefuitkomst: veilig en passief, en het beperkt het introeven in de dummy.',
      singleton: 'Een singleton: je hoopt dat partner vroeg een slag wint en jou laat introeven.',
      aceAway: 'Kom tegen een troefcontract nooit onder een aas uit — en uitkomen met de aas zelf helpt zelden.',
      sequence: (suit: number) => `De hoogste van een reeks in ${core.suits[suit]}: veilig, en het kan slagen vrijspelen.`,
      plain: (suit: number, n: number) => `Een ${holdingWord(n)} ${core.suits[suit]}.`,
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts
  signals: {
    leadBy: {
      you: (card: Card) => `Jouw uitkomst: ${cardName(card)}`,
      partner: (card: Card) => `Uitkomst van partner: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `Uitkomst van ${core.seats[seat]}: ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'De aas: meestal van aas-heer (tegen sans atout kan hij partner ook vragen te deblokkeren).'
          : 'De aas: meestal van aas-heer, of een singleton of doubleton aas.',
      king: (vsNT: boolean) =>
        vsNT ? 'De heer: de hoogste van een reeks — K-Q (of A-K). Ontkent de aas, behalve uit A-K.' : 'De heer: de hoogste van een reeks — K-Q. Ontkent de aas.',
      queen: 'De vrouw: de hoogste van een reeks (Q-J…), ontkent de heer.',
      jack: 'De boer: de hoogste van J-10…, of uit een binnenreeks zoals K-J-10. Ontkent de vrouw.',
      ten: 'De tien: de hoogste van 10-9…, of uit een binnenreeks (Q-10-9, K-10-9).',
      nine: 'De negen: de hoogste van een korte of waardeloze kleur, of uit 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Een kleine ${core.suitSingular[suit]}: waarschijnlijk vierde van boven uit lengte met een honneur. Gebruik de regel van 11.`
          : `Een kleine ${core.suitSingular[suit]}: meestal derde of vierde van boven uit een honneur — of een singleton.`,
    },
    ruleOf11: {
      title: 'Regel van 11',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Regel van 11: 11 − ${rankLabel(rank)} = ${above} kaarten hoger dan de ${rankLabel(rank)} in de andere drie handen. Je ziet er ${seen} (in de dummy en je eigen hand), dus de leider heeft er ${declarer}.`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${cardName(card)} van ${who === null ? 'partner' : core.seats[who]}: lengtesignaal`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} kan hoog of laag zijn: wacht op de volgende kaart in ${core.suits[suit]} om de lengte af te lezen.`
            : `${looks(card, look)}: ${look.sure ? '' : 'waarschijnlijk '}een ${look.height === 'high' ? 'even' : 'oneven'} aantal ${core.suits[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Tegenspelers geven soms een valse kaart, dus zie het als een aanwijzing.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `Partner speelt ${cardName(card)} bij op jouw kaart: attitude`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} kan hoog of laag zijn: nog niet duidelijk of partner de kleur wil.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'partner wil de kleur — speel door.' : 'partner wil de kleur waarschijnlijk.') : `partner wil de kleur ${look.sure ? '' : 'waarschijnlijk '}niet — denk aan een andere kleur.`}`,
      },
      discard: {
        title: (card: Card) => `Partner gooide ${cardName(card)} af`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} kan hoog of laag zijn: nog niet duidelijk of partner wil dat je ${core.suits[suit]} speelt.`
            : `${looks(card, look)}: partner wil ${look.sure ? '' : 'waarschijnlijk '}${look.height === 'high' ? '' : 'niet '}dat je ${core.suits[suit]} speelt.`,
      },
      preference: {
        title: (card: Card) => `Partner speelt ${cardName(card)} voor zodat jij kunt introeven: voorkeurssignaal`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} is niet duidelijk hoog of laag: partner heeft misschien geen voorkeur — speel terug wat jou het best uitkomt.`
            : `${looks(card, look)}: partner vraagt ${look.sure ? '' : 'waarschijnlijk '}om ${core.suits[look.height === 'high' ? sides[1] : sides[0]]} terug, de ${look.height === 'high' ? 'hoogste' : 'laagste'} van de twee andere bijkleuren.`,
      },
    },
    badge: {
      count: (even: boolean) => `Lengte: ${even ? 'even' : 'oneven'}`,
      attitude: (encourage: boolean) => `Attitude: ${encourage ? 'aanmoedigend' : 'ontmoedigend'}`,
      discard: (encourage: boolean, suit: number) => `Afgooisignaal: ${encourage ? 'aanmoedigend' : 'ontmoedigend'} ${SUIT_SYMBOLS[suit]}`,
      preference: (suit: number | null) => `Voorkeur: ${suit === null ? 'geen' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts
  eval: {
    hcp: 'Punten',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Totaal',
    totalNote: (lengthPts: number) => `punten + ${lengthPts} voor lengte`,
    shape: 'Verdeling',
    balanced: 'evenwichtig',
    semiBalanced: 'semi-evenwichtig',
    unbalanced: 'onevenwichtig',
    losers: 'Verliezers',
    losersNote: 'verliezerstelling (LTC)',
    quickTricks: 'Snelle slagen',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Langste',
    controls: (n: number) => `${n} ${n === 1 ? 'controle' : 'controles'}`,
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts
  par: {
    contract: (contract: string, declarer: number) =>
      `${contract} door ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
