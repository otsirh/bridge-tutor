// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Suits and seats arrive as indexes (suit 0..3 = clubs, diamonds, hearts,
// spades; seat 0..3 = N, E, S, W), cards as card ids and ranks as numbers
// (14 = ace). Chinese needs no plural forms: one word per suit and seat.

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

const suit = (s: number) => core.suits[s];
/** Leading toward the honours in the other hand. */
const TOWARD = { aq: 'AQ', king: 'K', queen: 'Q', honours: '大牌' };
const HONOUR: Record<number, string> = { 14: 'A', 13: 'K', 12: 'Q' };
/** "2或4", "1、3或5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join('、')}或${xs[xs.length - 1]}` : String(xs[0]);
};
const HEIGHT = { high: '大', low: '小' };
/** How a signal card looks from across the table: "先大后小（♣8，然后♣3）", "♣7看起来是大牌（…）". */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? '先大后小' : '先小后大'}（${cardName(card)}，然后${cardName(l.echo)}）`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)}永远是小牌`
      : l.sure
        ? `${cardName(card)}是${HEIGHT[l.height!]}牌（比它${l.height === 'high' ? '大' : '小'}的点牌都已知道下落）`
        : `${cardName(card)}看起来是${HEIGHT[l.height!]}牌（还有一些比它${l.height === 'high' ? '小' : '大'}的点牌没有出现）`;

export const tutor: Text['tutor'] = {
  principles: {
    openingLead: {
      title: '首攻',
      notStandard: (holding: string, rank: number, why: string) => `从${holding}中，标准的出牌是${rankLabel(rank)}。${why}`,
    },

    drawTrumps: {
      title: '清将',
      text: '出将牌可以清除防守方的将牌，使他们无法将吃你的赢张。除非需要明手的将牌来将吃，否则应尽早清将。',
    },
    trumpsDrawn: {
      title: '将牌已清完',
      text: '防守方已经没有将牌，这张将牌清不到什么：它会在你的某一手赢得这一墩——可以当作进手——而你每兑现一张将牌，两个防守者都必须垫牌。',
    },
    unblock: {
      title: '解封',
      text: '先兑现短套一手中的大牌，这样长套一手能保持出牌权，接着兑现这门花色剩下的牌。',
    },
    cash: {
      title: '兑现赢张',
      declarer: (card: Card) => `${cardName(card)}是这门花色中剩下最大的牌：除非有人将吃，它就能赢得这一墩。`,
      defender: '在庄家把输张垫在明手的长套上之前，先拿到你稳赢的墩。',
    },
    crossToOtherHand: {
      title: '过桥到另一手',
      text: '出小牌到另一手的赢张，把它当作进手，下一墩就能从那一手出牌。',
    },
    leadTowardHonours: {
      title: '向大牌出牌',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `出小牌向另一手的${TOWARD[toward]}，让你下家的防守者先于你出牌，然后你再决定另一手出哪张——这是飞牌的基础。`,
    },
    develop: {
      title: '树立花色',
      text: '趁你还控制着其他花色，现在在这门花色中输掉一墩，就能把剩下的牌树立成赢张。',
    },

    trumpLead: {
      title: '攻将牌',
      text: '攻将牌能减少庄家在明手的将吃——当明手某个旁套很短时尤其有力。',
    },
    lookForRuff: {
      title: '寻求将吃',
      text: '攻短套，希望同伴上手后让你将吃。',
    },
    returnPartner: {
      title: '回攻同伴的花色',
      text: '这是同伴选择的花色：回攻它就是延续同伴的计划——树立同伴的长套或让同伴将吃——而不是给庄家打开一门新花色。',
    },
    continueSuit: {
      title: '继续出你的花色',
      text: '你之前已经出过这门花色：再出它，就是继续树立你方在这门花色中的赢墩，而不是给庄家打开一门新花色。',
    },
    switchSuits: {
      title: '换攻',
      text: '穿过庄家的强处出牌，或者朝明手的弱处出牌：坐在强手前面的防守者应该出这门花色。',
    },

    overruff: {
      title: '超将吃',
      text: '用比已出的将牌更大的将牌将吃，就能赢得这一墩。',
    },
    underruff: {
      title: '下将吃',
      text: (forced: boolean) =>
        forced
          ? '这一墩里已经有一张更大的将牌，你的将牌赢不了——但你手里只剩将牌，只能出一张。'
          : '这一墩里已经有一张更大的将牌，你的将牌赢不了：下将吃只是白白浪费一张将牌。除非你必须保留所有旁套牌，否则不如垫掉一张旁套输张。',
    },
    ruffPartnersWinner: {
      title: '将吃同伴的赢张',
      text: '通常是浪费：同伴本来已经赢得这一墩。',
    },
    ruff: {
      title: '将吃',
      defender: '你已经没有被领出的花色，将吃就能赢得这一墩。',
      short: '这一手的将牌不比另一手多，所以这次将吃是多出来的一墩：另一手的将牌仍然能赢它们自己的墩。',
      forced: '你已经没有防守方领出的花色，所以将吃来赢得这一墩。在将牌较长的一手将吃不会多赢一墩，还会缩短你的将牌：如果防守方能一再逼你将吃，你可能会失去控制。',
      long: '在将牌较多的一手将吃，用掉的是一张本来就能赢墩的将牌，本身并没有收益——只有当它能树立这门花色剩下的牌，或者让这一手取得出牌权时才有用。',
    },
    discard: {
      title: '垫牌',
      defender: '垫你不需要的花色，在需要防住庄家或明手长套的花色中保留长度。',
      declarer: '从不可能赢墩的花色中垫掉一个输张，保留以后可能还用得着的牌。',
    },

    countSignal: {
      title: '张数信号',
      text: (n: number, s: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `庄家正在打这门花色，同伴期待你给张数信号：你有${n}张${suit(s)}（${n % 2 ? '奇数' : '偶数'}张），标准的出牌是${cardName(best)}${n % 2 ? '' : '，下一轮再出一张更小的（先大后小）'}。${cardName(card)}会表示${n % 2 ? '偶数' : '奇数'}张。`
          : n % 2
            ? `庄家正在打这门花色，所以要表示你的张数：有${n}张${suit(s)}（奇数张），出你最小的牌${cardName(card)}。同伴就能推算出庄家有几张，以及什么时候该出A。`
            : `庄家正在打这门花色，所以要表示你的张数：有${n}张${suit(s)}（偶数张），先大后小——这一轮出${cardName(card)}，下一轮出一张更小的。同伴就能推算出庄家有几张，以及什么时候该出A。`,
    },
    attitudeSignal: {
      title: '态度信号',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `同伴攻了这门花色，期待你表明态度：你${reason ? '喜欢' : '不喜欢'}这门花色，所以标准的出牌是${cardName(best)}。${cardName(card)}表示的意思正好相反。`
          : reason === 'honour'
            ? `同伴攻了这门花色：表明态度。你有${HONOUR[honour]}，所以用你能腾出的最大点牌${cardName(card)}鼓励，同伴就会继续攻这门花色。`
            : reason === 'ruff'
              ? `同伴攻了这门花色：表明态度。你是双张，先出较大的一张（${cardName(card)}）：先大后小请同伴继续出，第三轮你就能将吃。`
              : `同伴攻了这门花色：表明态度。这里没有值得续攻的东西，所以出你最小的牌${cardName(card)}表示不鼓励；同伴会考虑换攻。`,
    },
    discardSignal: {
      title: '垫牌（态度）',
      text: (want: boolean, clear: boolean, s: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `你希望同伴出${suit(s)}，但你能腾出的${suit(s)}都不够大，看不出鼓励的意思；不如从你不想要的花色中垫一张小牌。`
          : want
            ? right
              ? `垫大牌表示鼓励：${cardName(card)}请同伴出${suit(s)}，你在这门花色中有实力。`
              : `你希望同伴出${suit(s)}，但${cardName(card)}是你最小的一张，表示不鼓励；垫一张大的（${cardName(best)}）才是鼓励——或者从你不想要的花色中垫小牌。`
            : right
              ? `垫小牌表示不鼓励：${cardName(card)}告诉同伴不要出${suit(s)}。`
              : `垫大牌是请同伴出${suit(s)}，而你并不希望这样；应该垫你最小的${cardName(best)}。`,
    },
    preferenceSignal: {
      title: '花色选择信号',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `同伴会将吃这张牌，并把你出的牌理解为花色选择信号；你没有偏好，应该出一张中间的牌，比如${cardName(best)}。`
            : `同伴会将吃这张牌，并把你出的牌理解为花色选择信号：你希望同伴回${suit(want === 'high' ? sides[1] : sides[0])}，所以应该出${cardName(best)}。`
          : want === 'middle'
            ? '同伴会将吃这张牌，你出的牌同时也告诉他该回哪门花色：你没有偏好，就出一张中间的牌——不大也不小。'
            : `同伴会将吃这张牌，你出的牌同时也告诉他该回哪门花色：出${HEIGHT[want]}牌要求回${suit(want === 'high' ? sides[1] : sides[0])}（另外两门旁套中${want === 'high' ? '较高' : '较低'}的一门），你在那里有A。`,
    },

    coverHonour: {
      title: '大牌盖大牌',
      text: '盖打迫使庄家用两张大牌才能赢一墩，这可能使你或同伴手中较小的牌升级成赢张。',
      declarer: '盖打迫使防守方用两张大牌才能赢一墩，这可能使你方较小的牌升级成赢张。',
    },
    secondHandLow: {
      title: '第二家出小',
      text: '同伴和领出者的同伴都在你之后出牌，所以出小牌，保留你的大牌，以后去捉更大的牌。',
    },
    sureTrick: {
      title: '拿下稳赢的一墩',
      text: (card: Card) => `${cardName(card)}是这门花色中剩下最大的牌。`,
      safe: (card: Card) => `${cardName(card)}除非被将吃，否则就能赢得这一墩：还没出牌的防守者不可能有这门花色中更大的牌。`,
    },
    finesse: {
      title: '飞牌',
      text: (card: Card) => `只有当你缺少的这门花色中更大的牌在已经出过牌的防守者手里时，${cardName(card)}才能赢——这就是飞牌。如果还没出牌的防守者有一张，就会压过你的牌。`,
    },
    splitHonours: {
      title: '拆出相连大牌',
      text: '出相连大牌中的一张，可以阻止庄家用较小的牌便宜地赢墩。',
    },

    partnerWinning: {
      title: '同伴正在赢这一墩',
      third: '同伴的牌已经在赢这一墩，所以出小牌（或者给信号）。',
      fourth: '不要超过同伴：出你最小的牌。',
      declarer: '你方的牌暂时在赢这一墩：出小牌，保留你的大牌。',
    },
    overtake: {
      title: '超过己方的牌',
      text: '你方的牌本来已经在赢这一墩：超过它会在同一墩里多用一张大牌，所以只有在解封这门花色或要让这一手取得出牌权时才这样做。',
    },
    thirdHandHighEquals: {
      title: '第三家出大——等值牌中出最小的',
      text: '相连的牌中出较小的一张：同伴就能推断出较大的牌在哪里。',
      wrong: (card: Card, cheapest: Card) => `${cardName(cheapest)}和${cardName(card)}的作用相同：相连的牌中出较小的一张，同伴就能推断出较大的牌在哪里。`,
    },
    thirdHandHigh: {
      title: '第三家出大',
      text: '同伴领出的牌赢不了这一墩时，出大牌去赢墩，或者逼出对方的大牌。',
    },
    cantWin: {
      title: '赢不了这一墩',
      third: '出你最小的牌（如果同伴领出这门花色，则表明态度）。',
      fourth: '出你这门花色中最小的牌。',
    },
    duck: {
      title: '忍让',
      text: '你本可以赢下这一墩，却让过去：忍让把大牌留到以后——为了保留止张、保留进手，或者保持这门花色的联通。',
    },
    winCheaply: {
      title: '用最小的牌赢',
      text: '你最后出牌：用能赢下这一墩的最小的牌去赢。',
    },
  },

  plan: {
    allWinners: '全是赢张',
    topTricks: (n: number) => `${n}个稳赢墩`,
    noTopTricks: '没有稳赢墩',
    cardsOut: (n: number) => `${n}张`,

    ntEnough: (total: number, need: number) =>
      `你有${total}个稳赢墩，需要${need}墩：拿下你的赢墩——注意不要堵塞某门花色（先兑现短套一手的大牌）。`,
    ntShort: (total: number, need: number) =>
      `你有${total}个稳赢墩，需要${need}墩：要在防守方树立他们的长套之前，再找到${need - total}墩。`,
    losersOk: (losers: number, allowed: number) =>
      `大约有${losers}个输张，你最多能输${allowed}个：清将，然后拿下你的赢墩，除非需要先将吃或先垫牌。`,
    tooManyLosers: (losers: number, allowed: number) =>
      `大约有${losers}个输张，但你最多只能输${allowed}个：需要消除${losers - allowed}个（将吃掉、垫在多余的赢张上，或者飞牌）。`,

    establish: (s: number, total: number, missing: number, odds: string, extra: number) =>
      `树立${suit(s)}：双方共有${total}张（外面有${missing}张，${odds}），${SUIT_SYMBOLS[s]}长套大约能多产生${extra}墩。`,
    finesseAQ: (s: number, holding: string) =>
      `${suit(s)}飞牌：向AQ（${holding}）出牌，如果K没有出现就放Q——成功率约50%。`,
    leadTowardKing: (s: number, holding: string) =>
      `${suit(s)}：向K出牌（${holding}），如果A在你的下家，K就能赢墩——成功率约50%。`,
    doubleFinesse: (s: number) =>
      `${suit(s)}双飞（AJ10）：飞两次；你有76%的机会赢得两墩。`,
    knockOutAce: (s: number, withJack: boolean) =>
      `逼出${suit(s)}A：之后KQ${withJack ? 'J' : ''}能为你赢得${withJack ? '2墩以上' : '至少1墩'}。`,
    ntDevelopEarly: '在无将定约中，要趁着还控制各门花色时尽早树立额外的赢墩——并算清你还能丢几次出牌权。',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `在${inDummy ? '明手' : '你手中'}（将牌较短的一手）将吃输张：${suits.map(x => `${SUIT_SYMBOLS[x.suit]}（${x.len ? `${x.len}张` : '缺门'}）`).join('，')}。在短将一手将吃能多赢一墩，在长将一手将吃则不能。`,
    discardOnWinners: (inDummy: boolean, extra: number, s: number, loserSuits: number[]) =>
      `垫牌：${inDummy ? '明手' : '你手中'}有${extra}个多余的${SUIT_SYMBOLS[s]}赢张——在上面垫掉另一手的${loserSuits.map(x => SUIT_SYMBOLS[x]).join('/')}输张（通常在清将之后）。`,
    trumpsOut: (n: number, odds: string) =>
      `将牌：外面还有${n}张（${odds}）。尽早清将，除非你需要明手的将牌来将吃，或者必须先树立一个旁套。`,
  },

  leads: {
    card: {
      singleton: '单张：就出它。',
      ak: '有AK时出A：你保持出牌权，看到明手后再决定下一步。',
      doubleton: '双张出大：先出大牌，再出小牌（先大后小表示双张，可能让你得到将吃）。',
      sequence: (holding: string) => `连张出顶张（${holding}）：保证有下面一张，否认有上面一张。`,
      interior: (holding: string, rank: number) => `内连张（${holding}）：出相连牌中最大的一张，即${rankLabel(rank)}。`,
      touching: (holding: string) => `相连大牌出顶张（${holding}）。`,
      nothing: '三张小牌出最大的（无大牌出大）：告诉同伴你在这门花色中没有大牌。',
      small: '四张或更多的小牌，出第二大的一张，免得同伴误以为你有大牌。',
      partnerLow: '在同伴的花色中，一张大牌带两张小牌时出小牌（第三大张）。',
      fourth: (holding: string) => `从你最长最强的花色中出第四大张（${holding}）。同伴可以使用11法则。`,
      third: (holding: string) => `一张大牌带两张小牌时出第三大张（${holding}）：保留大牌去捉庄家的牌。`,
    },
    suit: {
      partnerBid: (s: number) => `同伴叫过${suit(s)}：攻同伴的花色很少会错，通常是最好的。`,
      supported: (s: number) => `你表示过${suit(s)}，同伴给了支持：攻你方的花色是很自然的首攻。`,
      theyBid: (s: number) => `对手叫过${suit(s)}——攻他们的花色通常会帮庄家的忙。`,
      slamRisky: '防守满贯时，从没有相连牌的大牌下面首攻，常常会送给庄家一墩他本来拿不到的牌。',
      slamSafe: '防守满贯时要安全首攻：从小牌出不会送掉什么，而送掉一墩往往就是整个定约。',
      ntLong: (s: number, n: number) =>
        `防守无将定约时，攻你最长最强的花色（${n}张${suit(s)}）：希望树立长套赢张。`,
      ntSequence: '坚实的连张既安全，又能树立赢墩。',
      ntShort: (n: number) => `${n === 1 ? '单张' : `${n}张的花色`}：不是防守无将的理想首攻。`,
      trump: '攻将牌：安全、消极，还能减少明手的将吃。',
      singleton: '攻单张：希望同伴早早上手，让你将吃。',
      aceAway: '防守有将定约时，绝不要从带A的花色中出小牌——而直接出A通常也没什么帮助。',
      sequence: (s: number) => `${suit(s)}连张出顶张：安全，还可能树立赢墩。`,
      plain: (s: number, n: number) => (n === 1 ? `单张${suit(s)}。` : `${n}张${suit(s)}。`),
    },
  },

  signals: {
    leadBy: {
      you: (card: Card) => `你的首攻：${cardName(card)}`,
      partner: (card: Card) => `同伴的首攻：${cardName(card)}`,
      seat: (seat: number, card: Card) => `${core.seats[seat]}的首攻：${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? '首攻A：通常来自AK（防守无将时也可能是要求同伴解封）。'
          : '首攻A：通常来自AK，或者是单张A、双张A。',
      king: (vsNT: boolean) =>
        vsNT ? '首攻K：连张的顶张——KQ（或AK）。除非来自AK，否则否认有A。' : '首攻K：连张的顶张——KQ。否认有A。',
      queen: '首攻Q：连张的顶张（QJ…），否认有K。',
      jack: '首攻J：J10…的顶张，或者来自KJ10这样的内连张。否认有Q。',
      ten: '首攻10：109…的顶张，或者内连张（Q109、K109）。',
      nine: '首攻9：短套或没有价值的持牌中出最大的，或者98x。',
      low: (s: number, vsNT: boolean) =>
        vsNT
          ? `首攻小${suit(s)}：很可能是带大牌的长套中的第四大张。用11法则。`
          : `首攻小${suit(s)}：通常是带大牌的花色中的第三或第四大张——也可能是单张。`,
    },
    ruleOf11: {
      title: '11法则',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `11法则：11 − ${rankLabel(rank)} = ${above}，即其余三家手中比${rankLabel(rank)}大的牌共有${above}张。你能看到${seen}张（明手和你手中），所以庄家有${declarer}张。`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${who === null ? '同伴' : core.seats[who]}的${cardName(card)}：张数信号`,
        text: (card: Card, look: Look, s: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)}可能是大牌也可能是小牌：等${suit(s)}的下一张出来再判断张数。`
            : `${looks(card, look)}：${look.sure ? '' : '很可能'}有${look.height === 'high' ? '偶数' : '奇数'}张${suit(s)}${lengths.length ? `（${orList(lengths)}张）` : ''}。${declarer ? '防守方有时会出假牌，所以只把它当作线索。' : ''}`,
      },
      attitude: {
        title: (card: Card) => `同伴对你的首攻跟出${cardName(card)}：态度信号`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)}可能是大牌也可能是小牌：还看不出同伴是否喜欢这门花色。`
            : `${looks(card, look)}：${look.height === 'high' ? (look.sure ? '同伴喜欢这门花色——继续出。' : '同伴很可能喜欢这门花色。') : `同伴${look.sure ? '' : '很可能'}不喜欢这门花色——考虑换攻。`}`,
      },
      discard: {
        title: (card: Card) => `同伴垫了${cardName(card)}`,
        text: (card: Card, look: Look, s: number) =>
          look.height === null
            ? `${cardName(card)}可能是大牌也可能是小牌：还看不出同伴是否希望你出${suit(s)}。`
            : `${looks(card, look)}：同伴${look.sure ? '' : '很可能'}${look.height === 'high' ? '希望' : '不希望'}你出${suit(s)}。`,
      },
      preference: {
        title: (card: Card) => `同伴出${cardName(card)}让你将吃：花色选择信号`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)}说不上是大还是小：同伴可能没有偏好——回你认为最好的花色。`
            : `${looks(card, look)}：同伴${look.sure ? '' : '很可能'}要求你回${suit(look.height === 'high' ? sides[1] : sides[0])}，即另外两门旁套中${look.height === 'high' ? '较高' : '较低'}的一门。`,
      },
    },
    badge: {
      count: (even: boolean) => `张数：${even ? '偶数' : '奇数'}`,
      attitude: (encourage: boolean) => `态度：${encourage ? '鼓励' : '不鼓励'}`,
      discard: (encourage: boolean, s: number) => `垫牌：${encourage ? '鼓励' : '不鼓励'}${SUIT_SYMBOLS[s]}`,
      preference: (s: number | null) => `花色选择：${s === null ? '无' : SUIT_SYMBOLS[s]}`,
    },
  },

  eval: {
    hcp: '大牌点',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: '总点数',
    totalNote: (lengthPts: number) => `大牌点 + ${lengthPts}长度点`,
    shape: '牌型',
    balanced: '平均牌型',
    semiBalanced: '半平均牌型',
    unbalanced: '非平均牌型',
    losers: '输墩',
    losersNote: '输墩计算法',
    quickTricks: '快速赢墩',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: '最长花色',
    controls: (n: number) => `${n}个控制`,
  },

  par: {
    contract: (contract: string, declarer: number) =>
      `${contract}，${declarer & 1 ? '东西' : '南北'}方（${core.seatLetters[declarer]}主打）`,
  },
};
