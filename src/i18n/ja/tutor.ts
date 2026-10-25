// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Same layout as src/i18n/en/tutor.ts (see the notes there on parameters).
// Japanese has no plural forms; counts take counters (枚, トリック, 個).

import type { Text } from '../en';
import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import { core } from './core';

/** Leading toward the honours in the other hand. */
const TOWARD = { aq: 'A-Q', king: 'キング', queen: 'クイーン', honours: 'オナー' };
const HONOUR: Record<number, string> = { 14: 'エース', 13: 'キング', 12: 'クイーン' };
/** "2か4", "1、3か5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join('、')}か${xs[xs.length - 1]}` : String(xs[0]);
};
/** How a signal card looks from across the table. */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'ハイロー' : 'ローハイ'}（${cardName(card)}、次に${cardName(l.echo)}）`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)}は常にローです`
      : l.sure
        ? `${cardName(card)}は${l.height === 'high' ? 'ハイ' : 'ロー'}です（それより${l.height === 'high' ? '高い' : '低い'}スポットカードはすべて所在がわかっています）`
        : `${cardName(card)}は${l.height === 'high' ? 'ハイ' : 'ロー'}に見えます（それより${l.height === 'high' ? '低い' : '高い'}スポットカードがまだ残っています）`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'オープニングリード',
      notStandard: (holding: string, rank: number, why: string) => `${holding}からの標準的なカードは${rankLabel(rank)}です: ${why}`,
    },

    // declarer's side on lead
    drawTrumps: {
      title: 'トランプを抜く',
      text: 'トランプをリードしてディフェンダーのトランプを取り除けば、こちらのウィナーをラフされなくなります。ダミーのトランプをラフに使う必要がない限り、早めに抜きましょう。',
    },
    trumpsDrawn: {
      title: 'トランプは抜き終わっている',
      text: 'ディフェンダーにはもうトランプがないので、このリードで抜くものはありません: トランプはどちらかのハンドでトリックを取ります（エントリーとして役立ちます）。トランプをキャッシュするたびに、ディフェンダーは2人ともディスカードしなければなりません。',
    },
    unblock: {
      title: 'アンブロック',
      text: '短い方のハンドの高いカードを先にキャッシュし、長い方のハンドにリードを残して、スートの残りを走らせられるようにします。',
    },
    cash: {
      title: 'ウィナーのキャッシュ',
      declarer: (card: Card) => `${cardName(card)}は残っている${core.suits[suitOf(card)]}の中で最も高いカードです: 誰かにラフされない限りトリックを取ります。`,
      defender: 'ディクレアラーがダミーの長いスートでルーザーを捨てる前に、確実なトリックを取っておきます。',
    },
    crossToOtherHand: {
      title: 'もう一方のハンドへ渡る',
      text: 'もう一方のハンドのウィナーへ低いカードをリードすると、それをエントリーとして使い、次はそちらからリードできます。',
    },
    leadTowardHonours: {
      title: 'オナーに向かってリードする',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `${TOWARD[toward]}に向かって低いカードをリードすれば、左のディフェンダーが先にカードを出さなければならず、あなたはそれを見てからもう一方のハンドのカードを選べます — フィネスの基本です。`,
    },
    develop: {
      title: 'スートの確立',
      text: 'このスートで今1トリックを失っておけば、他のスートをまだコントロールしているうちに、残りのカードがウィナーになります。',
    },

    // defenders on lead
    trumpLead: {
      title: 'トランプのリード',
      text: 'トランプのリードはディクレアラーがダミーでラフする回数を減らします — ダミーにショートスートがあるときに効果的です。',
    },
    lookForRuff: {
      title: 'ラフを狙う',
      text: 'ショートスートのリードは、パートナーがリードを取ってラフさせてくれることを期待するものです。',
    },
    returnPartner: {
      title: 'パートナーのスートを返す',
      text: 'パートナーが選んだスートです: これを返せば、パートナーの長いカードを確立する、あるいはパートナーにラフさせるというパートナーの計画を続けられ、ディクレアラーに新しいスートを開けずに済みます。',
    },
    continueSuit: {
      title: '自分のスートを続ける',
      text: 'このスートは前にもリードしています: 続けてリードすれば、自分たちがそこで確立しつつあるトリックの作業を続けられ、ディクレアラーに新しいスートを開けずに済みます。',
    },
    switchSuits: {
      title: 'スートを切り替える',
      text: 'ディクレアラーの強いスートを通してリードするか、ダミーの弱いスートに向かってリードします: 強いハンドの前に座るディフェンダーがそのスートをリードしましょう。',
    },

    // not following suit
    overruff: {
      title: 'オーバーラフ',
      text: 'すでに出ているトランプより高いトランプでラフすればトリックを取れます。',
    },
    underruff: {
      title: 'アンダーラフ',
      text: (forced: boolean) =>
        forced
          ? 'すでにもっと高いトランプが出ているので、あなたのトランプでは勝てません — ただし残りがトランプだけなので、1枚出すしかありません。'
          : 'すでにもっと高いトランプが出ているので、あなたのトランプでは勝てません: アンダーラフはトランプを無駄にするだけです。サイドスートを全部残す必要がない限り、代わりにサイドスートのルーザーを捨てましょう。',
    },
    ruffPartnersWinner: {
      title: 'パートナーのウィナーをラフする',
      text: 'たいていは無駄です: パートナーはすでにこのトリックを取っていました。',
    },
    ruff: {
      title: 'ラフ',
      defender: 'リードされたスートを持っていないので、ラフすればトリックを取れます。',
      short: 'このハンドのトランプはもう一方より多くないので、このラフで1トリック増えます: もう一方のハンドのトランプは、それはそれでトリックを取ります。',
      forced: 'ディフェンダーがリードしたスートを持っていないので、ラフしてトリックを取ります。トランプの長い方のハンドでのラフはトリックを増やさず、トランプを短くします: ディフェンダーに何度もラフさせられると、コントロールを失うおそれがあります。',
      long: 'トランプの多い方のハンドでのラフは、どのみちトリックを取るトランプを使うので、それだけでは何も得られません — スートの残りを確立するときや、このハンドにリードを移すときに役立ちます。',
    },
    discard: {
      title: 'ディスカード',
      defender: '不要なスートから捨て、ディクレアラーやダミーの長いスートを守る必要があるスートの長さは残しておきます。',
      declarer: 'トリックにならないスートのルーザーを捨て、まだ必要になりそうなカードは残しておきます。',
    },

    // defenders' signals
    countSignal: {
      title: 'カウントシグナル',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `ディクレアラーがこのスートをプレイしており、パートナーはカウントを期待しています: ${core.suits[suit]}が${n}枚（${n % 2 ? '奇数' : '偶数'}）なら、標準的なカードは${cardName(best)}です${n % 2 ? '' : '（次にそれより低いカードを出してハイロー）'}。${cardName(card)}では${n % 2 ? '偶数' : '奇数'}枚を示してしまいます。`
          : n % 2
            ? `ディクレアラーがこのスートをプレイしているので、カウントを示します: ${core.suits[suit]}が${n}枚（奇数）なので、最も低いカード${cardName(card)}を出します。これでパートナーはディクレアラーの枚数と、エースを取るタイミングがわかります。`
            : `ディクレアラーがこのスートをプレイしているので、カウントを示します: ${core.suits[suit]}が${n}枚（偶数）なので、ハイローをします — 今${cardName(card)}、次にそれより低いカード。これでパートナーはディクレアラーの枚数と、エースを取るタイミングがわかります。`,
    },
    attitudeSignal: {
      title: 'アティチュードシグナル',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `パートナーがこのスートをリードし、あなたのアティチュードを待っています: あなたはこのスートを${reason ? '続けてほしい' : '続けてほしくない'}ので、標準的なカードは${cardName(best)}です。${cardName(card)}では逆の意味になります。`
          : reason === 'honour'
            ? `パートナーがこのスートをリードしたので、アティチュードを示します。あなたは${HONOUR[honour]}を持っているので、出せる中で最も高いスポットカード${cardName(card)}でエンカレッジし、パートナーに続けてもらいます。`
            : reason === 'ruff'
              ? `パートナーがこのスートをリードしたので、アティチュードを示します。ダブルトンなので高い方のカード（${cardName(card)}）から出します: ハイローはパートナーに続けるよう求め、3巡目にあなたがラフします。`
              : `パートナーがこのスートをリードしたので、アティチュードを示します。続けてもらう価値のあるものがないので、最も低いカード${cardName(card)}でディスカレッジします。パートナーはスートの切り替えを考えます。`,
    },
    discardSignal: {
      title: 'ディスカード（アティチュード）',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `${core.suits[suit]}をリードしてほしいところですが、捨てられる${core.suits[suit]}にエンカレッジと読めるほど高いカードがありません。代わりに、リードしてほしくないスートから低いカードを捨てましょう。`
          : want
            ? right
              ? `高いカードのディスカードはエンカレッジです: ${cardName(card)}は、あなたが強さを持つ${core.suits[suit]}をリードするようパートナーに求めます。`
              : `${core.suits[suit]}をリードしてほしいのに、${cardName(card)}はあなたの最も低いカードなのでディスカレッジになります。高いカード（${cardName(best)}）ならエンカレッジになります — または、リードしてほしくないスートから低いカードを捨てましょう。`
            : right
              ? `低いカードのディスカードはディスカレッジです: ${cardName(card)}は、${core.suits[suit]}をリードしないようパートナーに伝えます。`
              : `高いカードのディスカードは、リードしてほしくない${core.suits[suit]}のリードを求めてしまいます。代わりに最も低いカード（${cardName(best)}）を捨てましょう。`,
    },
    preferenceSignal: {
      title: 'スートプリファレンスシグナル',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `パートナーはこれをラフし、あなたのカードをスートプリファレンスとして読みます。特に希望がないなら、${cardName(best)}のような中くらいのカードをリードします。`
            : `パートナーはこれをラフし、あなたのカードをスートプリファレンスとして読みます: ${core.suits[want === 'high' ? sides[1] : sides[0]]}を返してほしいので、${cardName(best)}をリードします。`
          : want === 'middle'
            ? 'パートナーはこれをラフします。あなたのカードは返してほしいスートも伝えます: 特に希望がないので、高くも低くもない中くらいのカードをリードします。'
            : `パートナーはこれをラフします。あなたのカードは返してほしいスートも伝えます: ${want === 'high' ? '高い' : '低い'}カードは、あなたがエースを持つ${core.suits[want === 'high' ? sides[1] : sides[0]]}（残り2つのサイドスートのうち${want === 'high' ? '上位' : '下位'}の方）を求めます。`,
    },

    // second hand
    coverHonour: {
      title: 'オナーにはオナーでカバー',
      text: 'カバーすれば、ディクレアラーは1トリックのために高いカードを2枚使わなければならず、あなたやパートナーの低いカードが昇格することがあります。',
      declarer: 'カバーすれば、ディフェンダーは1トリックのために高いカードを2枚使わなければならず、こちら側の低いカードが昇格することがあります。',
    },
    secondHandLow: {
      title: 'セカンドハンド・ロー',
      text: 'あなたの後にはリードした側のパートナーとあなたのパートナーがプレイするので、低いカードを出して高いカードを残しておけば、あとでもっと大きなカードを捕らえられます。',
    },
    sureTrick: {
      title: '確実なトリックを取る',
      text: (card: Card) => `${cardName(card)}はこのスートで残っている最も高いカードです。`,
      safe: (card: Card) => `${cardName(card)}はラフされない限りトリックを取ります: まだプレイしていないディフェンダーが、このスートでこれより高いカードを持っているはずはありません。`,
    },
    finesse: {
      title: 'フィネス',
      text: (card: Card) => `${cardName(card)}が勝つのは、あなたに欠けているこのスートの高いカードが、すでにプレイしたディフェンダーにある場合だけです — これがフィネスです。まだプレイしていないディフェンダーが持っていれば、あなたのカードは負けます。`,
    },
    splitHonours: {
      title: 'オナーを割って出す',
      text: '連続したオナーの1枚を出せば、ディクレアラーが低いカードで安くトリックを取るのを防げます。',
    },

    // third and fourth hand
    partnerWinning: {
      title: 'パートナーが勝っている',
      third: 'パートナーのカードがすでにトリックを取っているので、低いカードを出します（またはシグナルを出します）。',
      fourth: 'パートナーのトリックを奪ってはいけません: 最も低いカードを出します。',
      declarer: '今のところ味方のカードが勝っています: 低いカードを出し、高いカードは残しておきます。',
    },
    overtake: {
      title: 'オーバーテイク',
      text: '味方のカードがすでに勝っていました: オーバーテイクすると同じトリックに高いカードを2枚使うので、スートをアンブロックするときか、このハンドでリードを取りたいときだけにしましょう。',
    },
    thirdHandHighEquals: {
      title: 'サードハンド・ハイ — 同等なら低い方',
      text: '連続したカードのうち低い方を出します: そうすればパートナーは高い方のカードの位置を推理できます。',
      wrong: (card: Card, cheapest: Card) => `${cardName(cheapest)}は${cardName(card)}と同じ働きをします: 連続したカードのうち低い方を出せば、パートナーは高い方のカードの位置を推理できます。`,
    },
    thirdHandHigh: {
      title: 'サードハンド・ハイ',
      text: 'パートナーのリードがトリックを取れていないので、高いカードを出してトリックを取るか、大きなカードを出させます。',
    },
    cantWin: {
      title: 'トリックを取れない',
      third: '最も低いカードを出します（パートナーがリードしたスートならアティチュードを示します）。',
      fourth: 'そのスートの最も低いカードを出します。',
    },
    duck: {
      title: 'ダック',
      text: 'このトリックを取れるのに見送ります: ダックすれば高いカードを後のラウンドのために残せます — ストッパーを温存する、エントリーを残す、スートの連絡を保つためです。',
    },
    winCheaply: {
      title: '安く勝つ',
      text: '最後にプレイするので、トリックを取れる最も小さいカードで取ります。',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts — declarer's plan once dummy is down.
  plan: {
    allWinners: 'すべてウィナー',
    topTricks: (n: number) => `トップトリック${n}`,
    noTopTricks: 'トップトリックなし',
    cardsOut: (n: number) => `${n}枚`,

    // summary, notrump
    ntEnough: (total: number, need: number) =>
      `トップトリックが${total}あり、必要なのは${need}です: トリックを取りましょう — スートをブロックしないように注意します（短い方のハンドの高いカードを先にキャッシュ）。`,
    ntShort: (total: number, need: number) =>
      `トップトリックが${total}で、必要なのは${need}です: ディフェンダーが自分たちのスートを確立する前に、あと${need - total}トリックを見つけましょう。`,
    // summary, suit contracts
    losersOk: (losers: number, allowed: number) =>
      losers === 0
        ? '心配すべきルーザーはありません: 早めのラフやディスカードが必要でなければ、トランプを抜いてトリックを取りましょう。'
        : `ルーザーは約${losers}で、許されるのは${allowed}です: 早めのラフやディスカードが必要でなければ、トランプを抜いてトリックを取りましょう。`,
    tooManyLosers: (losers: number, allowed: number) =>
      `ルーザーは約${losers}ですが、許されるのは${allowed}だけです: ${losers - allowed}つを処理する必要があります（ラフする、余分なウィナーで捨てる、フィネスする）。`,

    // ideas
    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `${core.suits[suit]}を確立する: 両ハンドで${total}枚（相手に${missing}枚、${odds}）あるので、長い${SUIT_SYMBOLS[suit]}から約${extra}トリック余分に取れます。`,
    finesseAQ: (suit: number, holding: string) =>
      `${core.suits[suit]}のフィネス: A-Q（${holding}）に向かってリードし、キングが出なければクイーンを出します — 成功率は約50%です。`,
    leadTowardKing: (suit: number, holding: string) =>
      `${core.suits[suit]}では、キング（${holding}）に向かってリードします: エースが左の相手にあればキングがトリックになります — 約50%です。`,
    doubleFinesse: (suit: number) =>
      `${core.suits[suit]}のダブルフィネス（A-J-10）: 2回フィネスすれば、76%の確率で2トリック取れます。`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `${core.suits[suit]}のエースを追い出す: そうすればK-Q${withJack ? '-J' : ''}から${withJack ? '2トリック以上' : '1トリック以上'}取れます。`,
    ntDevelopEarly: 'ノートランプでは、まだ各スートをコントロールしているうちに早めに余分なトリックを確立しましょう — そして、リードを相手に渡せる回数を数えておきましょう。',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `トランプの短い方のハンドである${inDummy ? 'ダミー' : 'あなたのハンド'}でルーザーをラフします: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]}（${x.len ? `${x.len}枚` : 'ボイド'}）`).join('、')}。短い方のハンドでのラフは余分なトリックになりますが、トランプの長い方のハンドでのラフはそうなりません。`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `ディスカード: ${inDummy ? 'ダミー' : 'あなたのハンド'}には${SUIT_SYMBOLS[suit]}の余分なウィナーが${extra}枚あります — その上で、もう一方のハンドの${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')}のルーザーを捨てます（ふつうはトランプを抜いた後で）。`,
    trumpsOut: (n: number, odds: string) =>
      `トランプ: 相手に${n}枚残っています（${odds}）。ダミーのトランプをラフに使う必要があるか、先にサイドスートを確立しなければならない場合を除き、早めに抜きましょう。`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts — opening leads by the book
  leads: {
    card: {
      singleton: 'シングルトンです: それをリードします。',
      ak: 'A-Kからはエースをリードします: リードを保ったままダミーを見てから、次の手を決められます。',
      doubleton: 'ダブルトンのトップ: 高いカードを先に、次に低いカードを出します（ハイローでダブルトンを示し、ラフにつながることがあります）。',
      sequence: (holding: string) => `シークエンスのトップ（${holding}）: すぐ下のカードを約束し、すぐ上のカードを否定します。`,
      interior: (holding: string, rank: number) => `インテリアシークエンス（${holding}）: 連続したカードのいちばん上、${rankLabel(rank)}をリードします。`,
      touching: (holding: string) => `連続したオナーのトップ（${holding}）。`,
      nothing: '小さなカード3枚からのトップ・オブ・ナッシング: このスートにオナーがないことをパートナーに伝えます。',
      small: '小さなカード4枚以上からは、2番目に高いカードをリードします。パートナーがあなたにオナーがあると誤解しないようにするためです。',
      partnerLow: 'パートナーのスートで、オナーと他に2枚を持っているときは低いカード（3番目に高いカード）をリードします。',
      fourth: (holding: string) => `最も長く強いスート（${holding}）から4番目に高いカード（フォースベスト）をリードします。パートナーは11のルールを使えます。`,
      third: (holding: string) => `オナーと小さなカード2枚（${holding}）からは3番目に高いカードをリードします: オナーを残してディクレアラーのオナーを捕らえます。`,
    },
    suit: {
      partnerBid: (suit: number) => `パートナーが${core.suits[suit]}をビッドしました: パートナーのスートのリードはめったに間違いにならず、たいてい最善です。`,
      supported: (suit: number) => `あなたが${core.suits[suit]}を示し、パートナーがサポートしました: 自分たちのスートは自然なリードです。`,
      theyBid: (suit: number) => `相手が${core.suits[suit]}をビッドしました: 相手のスートのリードはたいていディクレアラーを助けてしまいます。`,
      slamRisky: 'スラムに対しては、連続したカードのないオナーからリードすると、ディクレアラーに本来取れないトリックを与えてしまうことがよくあります。',
      slamSafe: 'スラムに対しては安全なリードを: 低いカードからなら何も与えずに済み、1トリックを与えればたいていコントラクトが決まってしまいます。',
      // against notrump
      ntLong: (suit: number, n: number) =>
        `ノートランプに対しては最も長く強いスート（${core.suits[suit]}${n}枚）をリードします: 長いスートの残りのカードをウィナーにすることを狙います。`,
      ntSequence: '堅いシークエンス: 安全で、トリックを作れます。',
      ntShort: (n: number) => `${n === 1 ? 'シングルトン' : `${n}枚のスート`}: ノートランプに対しては理想的なリードではありません。`,
      // against a suit contract
      trump: 'トランプのリード: 安全で受け身なリードで、ダミーでのラフを減らします。',
      singleton: 'シングルトン: パートナーが早めにトリックを取ってラフさせてくれることを狙います。',
      aceAway: 'スートコントラクトに対してはエースのあるスートから小さなカードをリードしてはいけません — エースそのもののリードもめったに役立ちません。',
      sequence: (suit: number) => `${core.suits[suit]}のシークエンスのトップ: 安全で、トリックを確立できることがあります。`,
      plain: (suit: number, n: number) =>
        n === 1 ? `${core.suits[suit]}のシングルトン。` : `${core.suits[suit]}${n}枚の持ち札。`,
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts — what the opening lead and partner's signals tell you
  signals: {
    leadBy: {
      you: (card: Card) => `あなたのオープニングリード: ${cardName(card)}`,
      partner: (card: Card) => `パートナーのオープニングリード: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `${core.seats[seat]}のオープニングリード: ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'エース: ふつうはA-Kからです（ノートランプに対しては、パートナーにアンブロックを求めることもあります）。'
          : 'エース: ふつうはA-Kから、またはシングルトンかダブルトンのエースです。',
      king: (vsNT: boolean) =>
        vsNT ? 'キング: シークエンスのトップ — K-Q（またはA-K）。A-Kからでなければエースを否定します。' : 'キング: シークエンスのトップ — K-Q。エースを否定します。',
      queen: 'クイーン: シークエンスのトップ（Q-J…）で、キングを否定します。',
      jack: 'ジャック: J-10…のトップ、またはK-J-10のようなインテリアシークエンスから。クイーンを否定します。',
      ten: '10: 10-9…のトップ、またはインテリアシークエンス（Q-10-9、K-10-9）から。',
      nine: '9: 短いか価値のない持ち札のトップ、または9-8-x。',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `${core.suits[suit]}の低いカード: おそらくオナーを含む長いスートからの4番目に高いカードです。11のルールを使いましょう。`
          : `${core.suits[suit]}の低いカード: ふつうはオナーからの3番目か4番目に高いカード — またはシングルトンです。`,
    },
    ruleOf11: {
      title: '11のルール',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `11のルール: 11 − ${rankLabel(rank)} = ${above}。他の3つのハンドに${rankLabel(rank)}より高いカードが${above}枚あります。あなたに見えているのは${seen}枚（ダミーとあなたのハンド）なので、ディクレアラーは${declarer}枚持っています。`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${who === null ? 'パートナー' : core.seats[who]}の${cardName(card)}: カウント`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)}はハイともローとも取れます: カウントを読むには、${core.suits[suit]}の次のカードを待ちましょう。`
            : `${looks(card, look)}: ${look.sure ? '' : 'おそらく'}${core.suits[suit]}は${look.height === 'high' ? '偶数' : '奇数'}枚です${lengths.length ? `（${orList(lengths)}枚）` : ''}。${declarer ? 'ディフェンダーはフォールスカードを使うこともあるので、手がかりとして扱いましょう。' : ''}`,
      },
      attitude: {
        title: (card: Card) => `あなたのリードに対するパートナーの${cardName(card)}: アティチュード`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)}はハイともローとも取れます: パートナーがこのスートを好んでいるかはまだはっきりしません。`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'パートナーはこのスートを好んでいます — 続けましょう。' : 'パートナーはおそらくこのスートを好んでいます。') : `パートナーは${look.sure ? '' : 'おそらく'}このスートを好んでいません — スートの切り替えを考えましょう。`}`,
      },
      discard: {
        title: (card: Card) => `パートナーは${cardName(card)}をディスカードしました`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)}はハイともローとも取れます: パートナーが${core.suits[suit]}のリードを望んでいるかはまだはっきりしません。`
            : `${looks(card, look)}: パートナーは${look.sure ? '' : 'おそらく'}${core.suits[suit]}のリードを${look.height === 'high' ? '望んでいます' : '望んでいません'}。`,
      },
      preference: {
        title: (card: Card) => `パートナーはあなたにラフさせるために${cardName(card)}をリードしました: スートプリファレンス`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)}ははっきりハイともローとも言えません: パートナーには特に希望がないのかもしれません — あなたに都合のよいスートを返しましょう。`
            : `${looks(card, look)}: パートナーは${look.sure ? '' : 'おそらく'}、残り2つのサイドスートのうち${look.height === 'high' ? '上位' : '下位'}の${core.suits[look.height === 'high' ? sides[1] : sides[0]]}を返すよう求めています。`,
      },
    },
    badge: {
      count: (even: boolean) => `カウント: ${even ? '偶数' : '奇数'}`,
      attitude: (encourage: boolean) => `アティチュード: ${encourage ? 'エンカレッジ' : 'ディスカレッジ'}`,
      discard: (encourage: boolean, suit: number) => `ディスカード: ${SUIT_SYMBOLS[suit]}を${encourage ? 'エンカレッジ' : 'ディスカレッジ'}`,
      preference: (suit: number | null) => `スートプリファレンス: ${suit === null ? 'なし' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts — the hand-evaluation table: label, value, note
  eval: {
    hcp: 'HCP',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'トータル',
    totalNote: (lengthPts: number) => `HCP + 長さの点${lengthPts}`,
    shape: '分布',
    balanced: 'バランス型',
    semiBalanced: 'セミバランス型',
    unbalanced: 'アンバランス型',
    losers: 'ルーザー',
    losersNote: 'ルージングトリックカウント',
    quickTricks: 'クイックトリック',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: '最長スート',
    controls: (n: number) => `コントロール${n}`,
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts — the par contract in the review
  par: {
    /** "4♠X 南北（北）": the contract, the side, and the seat that declares it. */
    contract: (contract: string, declarer: number) =>
      `${contract} ${declarer & 1 ? '東西' : '南北'}（${core.seatLetters[declarer]}）`,
  },
};
