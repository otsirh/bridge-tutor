// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';
import { Le, de, le, nPl } from './grammar';

const decisions = (n: number) => nPl(n, 'décision', 'décisions');

export const practice: Text['practice'] = {
  title: 'Entraînement',
  close: 'Fermer',
  tabs: { today: 'Aujourd’hui', review: 'Révisions', problems: 'Problèmes', skills: 'Compétences', topics: 'Thèmes', history: 'Historique' },

  skills: {
    'bid.opening': { name: 'L’ouverture', desc: 'Faut-il ouvrir, et quelle ouverture décrit votre main : un à la couleur, 1SA, 2♣, deux faibles et barrages.' },
    'bid.response': { name: 'Les réponses', desc: 'Vos enchères après l’ouverture du partenaire : soutiens, couleurs nouvelles, réponses à sans-atout et choix de la manche.' },
    'bid.rebid': { name: 'La redemande de l’ouvreur', desc: 'Votre deuxième enchère après avoir ouvert : montrer votre force et votre distribution pour que le partenaire puisse fixer le contrat.' },
    'bid.notrump': { name: 'Les séquences à sans-atout', desc: 'Les ouvertures de 1SA et 2SA et leurs réponses : Stayman, Texas, propositions.' },
    'bid.competitive': { name: 'Enchères compétitives', desc: 'Quand les adversaires enchérissent aussi : interventions, contres d’appel et Spoutnik, bicolores, réveil, bataille de la partielle.' },
    'bid.slam': { name: 'Enchères de chelem', desc: 'Sentir le chelem, demander les As et s’arrêter à temps.' },
    'play.lead': { name: 'L’entame', desc: 'Choisir la couleur et la carte d’entame avant de voir le mort.' },
    'play.declarer': { name: 'Jeu du déclarant', desc: 'Compter et faire un plan, impasses, affranchissement des couleurs, maniement des atouts, communications.' },
    'play.defense': { name: 'Jeu en flanc', desc: 'Deuxième et troisième position, signalisation, contre-attaques, compter la main du déclarant.' },
  },

  themes: {
    'openings': { name: 'L’ouverture', desc: 'Vous êtes le premier à pouvoir ouvrir.' },
    'responses': { name: 'Répondre au partenaire', desc: 'Votre partenaire ouvre et les adversaires se taisent : trouvez votre réponse.' },
    'rebids': { name: 'La redemande de l’ouvreur', desc: 'Vous ouvrez, votre partenaire répond : décrivez votre main.' },
    'notrump': { name: 'Les séquences à sans-atout', desc: 'Votre camp ouvre de 1SA ou de 2SA.' },
    'stayman-transfers': { name: 'Stayman et Texas', desc: 'Votre partenaire ouvre de 1SA ou de 2SA et vous avez une majeure : Stayman ou Texas.' },
    'major-raises': { name: 'Soutenir la majeure du partenaire', desc: 'Votre partenaire ouvre de 1♥ ou 1♠ et vous avez du soutien : soutien simple, limite, 2SA Jacoby ou manche.' },
    'strong-2c': { name: 'Le 2♣ fort', desc: 'Votre camp a une très grosse main qui ouvre de 2♣.' },
    'preempts': { name: 'Deux faibles et barrages', desc: 'Votre camp ouvre avec une longue couleur et une main faible.' },
    'competitive': { name: 'La lutte pour le contrat', desc: 'Les deux camps enchérissent : décidez quand surenchérir, contrer ou défendre.' },
    'overcalls': { name: 'Les interventions', desc: 'Les adversaires ouvrent et vous avez une couleur à montrer.' },
    'takeout-doubles': { name: 'Le contre d’appel', desc: 'Contrez d’appel, ou répondez au contre d’appel du partenaire.' },
    'negative-doubles': { name: 'Le contre Spoutnik', desc: 'Votre partenaire ouvre, l’adversaire intervient, et vous montrez la majeure non nommée par un contre.' },
    'two-suiters': { name: 'Michaels et 2SA Unusual', desc: 'Votre camp montre un bicolore en une seule enchère.' },
    'balancing': { name: 'Le réveil', desc: 'Les adversaires s’arrêtent bas et c’est à vous de parler en position de réveil.' },
    'partscore-battle': { name: 'La bataille de la partielle', desc: 'Les deux camps ont un fit et se battent aux paliers de 2 et de 3 (loi des levées totales).' },
    'slam': { name: 'Les chelems', desc: 'Votre camp a assez de force pour chercher le chelem.' },
    'declarer': { name: 'Jeu du déclarant', desc: 'Votre camp joue le contrat : comptez, faites un plan, puis jouez.' },
    'nt-games': { name: '3SA au déclarant', desc: 'Jouez 3SA : comptez vos levées de tête, affranchissez les longues, laissez passer, surveillez vos communications.' },
    'suit-games': { name: 'Manches à la couleur au déclarant', desc: 'Jouez une manche à la couleur : comptez les perdantes, coupez, tirez les atouts au bon moment.' },
    'leads': { name: 'L’entame', desc: 'Est joue le contrat : c’est vous qui entamez.' },
    'defense': { name: 'Jeu en flanc', desc: 'Les adversaires jouent le contrat et vous défendez avec votre partenaire.' },
    'defense-nt': { name: 'Le flanc contre sans-atout', desc: 'Votre partenaire entame contre un sans-atout : jeu en troisième position et règle des 11.' },
    'defense-suit': { name: 'Le flanc contre un contrat à la couleur', desc: 'Défendez contre un contrat à l’atout : encaissez, coupez ou restez passif.' },
  },

  dealing: (topic: string) => (topic ? `Distribution d’une donne pour : ${topic}…` : 'Distribution…'),
  notEnough: 'pas encore assez de décisions',
  you: 'Vous',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'personne n’est vulnérable';
    if (v === 'Both') return 'tout le monde est vulnérable';
    return v === ours ? 'vous êtes vulnérable, pas eux' : 'ils sont vulnérables, pas vous';
  },

  // header and table
  topicChip: (topic: string) => `Thème : ${topic}`,
  // importing a deal
  importTitle: 'Jouer une donne venue d’ailleurs',
  importText: 'Collez un fichier PBN, une donne BBO (LIN ou lien handviewer), une donne comme « N:AKQ2.K73.J52.Q8 … », ou un code ou un lien de partage de Bridge Tutor.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  code de partage',
  importBtnPlay: 'Jouer cette donne',
  importError: (code: string) => {
    if (code === 'empty') return 'Collez d’abord une donne.';
    if (code === 'share') return 'Ceci ne ressemble pas à une donne : vérifiez que le texte ou le lien a été copié en entier.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'La donne est incomplète ou contient deux fois la même carte.';
    return 'Impossible de lire la donne.';
  },
  historyTitle: 'Vos donnes',
  // lessons
  practiseLesson: 'S’entraîner à la table',
  practiseLessonText: 'Des donnes où ce thème se présente, jouées avec le moniteur.',
  lessonDone: 'Réussie',
  quizScore: (right: number, total: number) => `Du premier coup : ${right} sur ${total}`,
  quizRetry: 'Refaire le quiz',
  practicedCount: (n: number) => nPl(n, 'donne jouée', 'donnes jouées'),

  // Today
  tileStreak: 'Jours d’affilée',
  tileStreakNote: (n: number) => (n ? 'continuez ainsi' : 'jouez une donne aujourd’hui pour commencer'),
  tileDue: 'À réviser',
  tileDueNote: (total: number) => `${decisions(total)} en attente de révision`,
  tileBoards: 'Donnes jouées',
  tileBoardsNote: (date: string) => `la dernière le ${date}`,
  tileBoardsNone: 'jouez votre première donne',
  tileBidding: 'Précision aux enchères',
  tileBiddingNote: (right: number, total: number) => `${right} enchères sur ${total} conformes au système`,
  nextSteps: 'Que faire ensuite',
  stepReviewTitle: (n: number) => (n < 2 ? 'Révisez la décision que vous avez manquée' : `Révisez les ${n} décisions que vous avez manquées`),
  stepReviewText: 'Vos propres erreurs reviennent jusqu’à ce que vous trouviez la bonne réponse, à quelques jours d’intervalle à chaque fois : c’est le moyen le plus rapide de ne plus les répéter.',
  startReview: 'Commencer la révision',
  stepWeakTitle: (skill: string) => `À travailler : ${skill}`,
  stepWeakNew: 'Vous avez encore pris peu de décisions de ce type. Jouez quelques donnes distribuées pour ce thème.',
  stepWeakText: (pct: string, n: number) =>
    `${pct} de bonnes réponses sur vos ${decisions(n)} les plus récentes : c’est votre point faible. Jouez des donnes distribuées pour ce thème, et lisez la leçon si ce n’est pas déjà fait.`,
  practiseAtTable: 'S’entraîner à la table',
  readLesson: (title: string) => `Lire : ${title}`,
  stepCourseTitle: (title: string) => `Poursuivre le cours : ${title}`,
  stepCourseText: (i: number, total: number) => `Leçon ${i} sur ${total}. Une leçon est validée quand vous réussissez 80 % de son quiz du premier coup.`,
  openLesson: 'Ouvrir la leçon',
  stepProblemsTitle: 'Trouvez le bon coup',
  stepProblemsText: 'Des problèmes tirés de vraies donnes où une carte est nettement la meilleure : jeu du déclarant, flanc et entame.',
  openProblems: 'Résoudre des problèmes',
  howItWorks: 'Chaque donne terminée est enregistrée avec son analyse. Les enchères qui diffèrent du système et les cartes nettement moins bonnes avec les informations dont vous disposiez (pas seulement après coup) rejoignent vos révisions.',

  // Review
  reviewEmptyTitle: 'Aucune erreur à réviser pour l’instant',
  reviewEmptyText: 'Jouez quelques donnes : les enchères qui diffèrent du système et les cartes qui vous ont coûté cher avec les informations dont vous disposiez apparaîtront ici.',
  reviewDoneTitle: 'Tout est à jour',
  reviewDoneText: (total: number, next: string) =>
    `${nPl(total, 'décision est programmée', 'décisions sont programmées')} pour plus tard (prochaine révision le ${next}).`,
  sessionScore: (right: number, done: number) => `Cette séance : ${right}/${done} bonnes réponses`,
  itemFrom: (date: string, board: number) => `donne ${board}, ${date}`,
  freshDeal: 'Nouvelle donne, même idée',
  itemFromDrill: (date: string) => `exercice d’enchères, ${date}`,
  itemFromProblem: (date: string) => `problème, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'nouvelle' : `étape ${box} sur ${last}`),
  dueLeft: (n: number) => `${n} à faire`,
  next: 'Suivant',
  nextIn: (days: number) =>
    days === 0 ? 'Encore une fois plus tard aujourd’hui.' : days === 1 ? 'Prochaine révision demain.' : `Prochaine révision dans ${days} jours.`,
  again: 'Elle reviendra jusqu’à ce que vous trouviez la bonne réponse.',
  showBoard: 'Voir la donne complète',
  simulating: 'Simulation de cette carte sur des donnes compatibles avec ce que vous savez…',
  bidPrompt: 'À vous de parler.',
  youAre: (seat: string, vul: string) => `Vous êtes ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Exact : ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `Le système dit ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Votre ${call} serait compris comme : ${name} — ${desc}`,
  atTableYouBid: (call: string) => `À la table, vous avez dit ${call}.`,
  cardPrompt: 'Votre carte.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) =>
    `${contract} joué par ${declarer} ; vous jouez la carte ${de(seat)} à la levée ${trick}.`,
  dummyLabel: (seat: string) => `Mort (${seat})`,
  trickSoFar: 'Cette levée :',
  yourHand: (seat: string) => `Votre main (${seat})`,
  cardRight: 'Exact : c’est la carte qui a obtenu le meilleur résultat.',
  cardWrong: (cards: string) => `La meilleure : ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `Sur ${n} donnes compatibles avec les enchères et le jeu, ${le(best)} a rapporté en moyenne ${bt} levées à votre camp (${declaring ? 'contrat gagné' : 'contrat chuté'} dans ${bs} des cas) ; ${le(yours)}, votre carte à la table, ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `Sur ${n} donnes compatibles avec les enchères et le jeu, ${le(best)} a rapporté en moyenne ${bt} levées à votre camp (${declaring ? 'contrat gagné' : 'contrat chuté'} dans ${bs} des cas) ; ${le(yours)}, votre réponse au problème, ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${Le(card)} a rapporté en moyenne ${t} levées (${s}) sur ${n} nouvelles donnes.`,

  // Problems
  problems: {
    intro: 'Des positions tirées de vraies donnes où la simulation montre qu’une carte est nettement la meilleure : trouvez-la. Chaque donne est enchérie par le système et jouée par les robots jusqu’à votre décision.',
    filterLabel: 'Type de problème',
    filters: { mixed: 'Mélangés', declarer: 'Jeu du déclarant', defense: 'Jeu en flanc', lead: 'Entames' },
    kinds: { declarer: 'Jeu du déclarant', defense: 'Jeu en flanc', lead: 'Entame' },
    session: (right: number, done: number) => `Cette séance : ${right}/${done} bonnes réponses`,
    kindScore: (kind: string, right: number, done: number) => `${kind} : ${right}/${done}`,
    allTime: (right: number, done: number) => `Au total : ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Prêts : ${declarer} déclarant · ${defense} flanc · ${lead} entame`,
    boardLine: (board: number, vul: string) => `Donne ${board}, ${vul}.`,

    // waiting for the first problem
    preparing: 'Préparation d’un problème…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Distribution d’une donne à jouer au déclarant…' : kind === 'defense' ? 'Distribution d’une donne à défendre…' : 'Distribution d’une donne où vous avez une entame à faire…',
    stagePlaying: (trick: number) => `Les robots jouent la levée ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Test de votre décision à la levée ${trick} : ${done} donnes sur ${total}…` : 'Vérification de la donne…',
    tried: (n: number) => `${nPl(n, 'donne essayée', 'donnes essayées')} jusqu’ici.`,
    waitNote: 'Seules les positions dont la réponse est nette sont retenues : il faut parfois plusieurs donnes. Les problèmes se préparent en arrière-plan tant que cet onglet est ouvert, et jusqu’à 6 de chaque type sont gardés pour la prochaine fois.',
    leadNote: 'Les problèmes d’entame nets sont rares : en préparer un peut prendre une minute ou deux.',

    // the question
    qDeclarer: (contract: string, seat: string) => `Vous jouez ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} joue ${contract} ; vous défendez en ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} joue ${contract}, et c’est à vous d’entamer.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Vous avez entamé ${le(card)}.` : who === 'partner' ? `Votre partenaire (${seat}) a entamé ${le(card)}.` : `${seat} a entamé ${le(card)}.`,
    tally: (trick: number, won: number, lost: number) =>
      `Levée ${trick} : jusqu’ici, votre camp a ${nPl(won, 'levée', 'levées')}, les adversaires ${lost}.`,
    askLead: 'Quelle carte entamez-vous ?',
    askPlan: (fromDummy: boolean) => `Faites votre plan : quelle carte jouez-vous ${fromDummy ? 'du mort' : 'de votre main'} ?`,
    askDeclarer: (fromDummy: boolean) => `Quelle carte jouez-vous maintenant ${fromDummy ? 'du mort' : 'de votre main'} ?`,
    askDefence: 'Quelle carte jouez-vous ?',

    // the answer
    right: (cards: string) => `Exact ! La meilleure : ${cards}.`,
    wrong: (cards: string) => `Pas cette fois. La meilleure : ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `Sur ${n} donnes compatibles avec les enchères et le jeu jusqu’ici, ${le(best)} a rapporté en moyenne ${t} levées à votre camp et ${declaring ? 'a gagné le contrat' : 'a fait chuter le contrat'} dans ${s} des cas.`,
    yourLine: (card: string, t: string, s: string) => `Votre carte, ${card} : ${t} levées, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `La meilleure des autres, ${card} : ${t} levées, ${s}.`,
    colCard: 'Carte',
    colTricks: 'Levées',
    colMakes: 'Réussite',
    colSets: 'Chute',
    addedToReview: 'Ajouté à vos révisions : cette position reviendra jusqu’à ce que vous trouviez la bonne réponse.',
    whyThisSuit: 'Pourquoi cette couleur :',
    next: 'Problème suivant',
    skip: 'Passer',
    showDeal: 'Voir la donne complète',
    hideDeal: 'Masquer la donne',
    playFromStart: 'Jouer cette donne depuis le début',
    declarerTag: 'déclarant',
    dummyTag: 'mort',
  },

  // Skills
  skillsIntro: 'Votre précision sur vos décisions les plus récentes dans chaque domaine. Aux enchères, on compte les enchères conformes au système ; au jeu, les cartes qui n’étaient pas nettement moins bonnes que la meilleure, avec les informations dont vous disposiez.',
  decisions,
  practise: 'S’entraîner',

  // Topics
  topicsIntro: 'Choisissez un thème : les donnes suivantes seront distribuées pour qu’il se présente — à la table, avec le moniteur, l’analyse et tout le reste comme d’habitude.',
  nowPractising: 'Thème en cours :',
  stopTopic: 'Revenir aux donnes ordinaires',
  dealAnother: 'Une autre donne',

  // History
  review: 'Analyse',
  replay: 'Rejouer',
  historyCols: ['Date', 'Donne', 'Contrat', 'Résultat', 'Score NS', 'IMP / par', 'Enchères', 'Erreurs de carte · levées perdues'],
  historyEmpty: 'Aucune donne pour l’instant. Chaque donne terminée est conservée ici avec son analyse.',
  historyNote: 'Erreurs de carte : les cartes nettement moins bonnes avec les informations dont vous disposiez. Levées perdues : ce que vos cartes ont coûté par rapport à un jeu parfait de tous (à quatre jeux) — parfois, le bon coup perd après coup.',
  backupTitle: 'Sauvegarde',
  backupText: 'Votre progression est enregistrée uniquement dans ce navigateur. Enregistrez un fichier de sauvegarde pour la mettre à l’abri ou la transférer sur un autre appareil.',
  exportBtn: 'Enregistrer une sauvegarde',
  importBtn: 'Restaurer depuis un fichier',
  restored: 'Progression restaurée.',
  restoreFailed: 'Ce fichier n’est pas une sauvegarde de Bridge Tutor.',
};
