// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';

export const practice: Text['practice'] = {
  title: 'トレーニング',
  close: '閉じる',
  tabs: { today: '今日', review: '復習', problems: '問題', skills: 'スキル', topics: 'トピック', history: '履歴' },

  skills: {
    'bid.opening': { name: 'オープニングビッド', desc: 'オープンするかどうか、そしてどのオープニングがハンドを表すか: 1スート、1NT、2♣、ウィークツー、プリエンプト。' },
    'bid.response': { name: 'レスポンス', desc: 'パートナーがオープンした後のコール: レイズ、ニュースート、ノートランプのレスポンス、ゲームの選択。' },
    'bid.rebid': { name: 'オープナーのリビッド', desc: 'オープンした後の2回目のコール: 強さと分布を示して、パートナーがコントラクトを決められるようにします。' },
    'bid.notrump': { name: 'ノートランプのオークション', desc: '1NTと2NTのオープンとそのレスポンス: ステイマン、トランスファー、インビテーション。' },
    'bid.competitive': { name: '競り合いのビッド', desc: '相手もビッドするとき: オーバーコール、テイクアウトダブルとネガティブダブル、ツースーター、バランシング、パートスコアの争い。' },
    'bid.slam': { name: 'スラムのビッド', desc: 'スラムを見極め、エースを尋ね、適切なところで止まること。' },
    'play.lead': { name: 'オープニングリード', desc: 'ダミーを見る前に、リードするスートとカードを選ぶこと。' },
    'play.declarer': { name: 'ディクレアラープレイ', desc: 'カウントとプランニング、フィネス、スートの確立、トランプの扱い、エントリー。' },
    'play.defense': { name: 'ディフェンス', desc: 'セカンドハンドとサードハンド、シグナル、スートの切り替え、ディクレアラーのハンドのカウント。' },
  },

  themes: {
    'openings': { name: 'オープニングビッド', desc: 'あなたが最初にオープンする番です。' },
    'responses': { name: 'パートナーへのレスポンス', desc: 'パートナーがオープンし、相手は黙っています: レスポンスを見つけましょう。' },
    'rebids': { name: 'オープナーのリビッド', desc: 'あなたがオープンし、パートナーがレスポンスしました: ハンドを説明しましょう。' },
    'notrump': { name: 'ノートランプのオークション', desc: 'あなたの側が1NTか2NTをオープンします。' },
    'stayman-transfers': { name: 'ステイマンとトランスファー', desc: 'パートナーが1NTか2NTをオープンし、あなたはメジャーを持っています: ステイマンかトランスファーか。' },
    'major-raises': { name: 'パートナーのメジャーのレイズ', desc: 'パートナーが1♥か1♠をオープンし、あなたにはサポートがあります: シングルレイズ、リミットレイズ、ジャコビー2NT、またはゲーム。' },
    'strong-2c': { name: 'ストロング2♣', desc: 'あなたの側に2♣でオープンする大きなハンドがあります。' },
    'preempts': { name: 'ウィークツーとプリエンプト', desc: 'あなたの側が長いスートと弱いハンドでオープンします。' },
    'competitive': { name: 'コントラクトの競り合い', desc: '両側がビッドします: 競るか、ダブルするか、ディフェンスするかを判断しましょう。' },
    'overcalls': { name: 'オーバーコール', desc: '相手がオープンし、あなたには示したいスートがあります。' },
    'takeout-doubles': { name: 'テイクアウトダブル', desc: 'テイクアウトのダブルをするか、パートナーのテイクアウトダブルに答えます。' },
    'negative-doubles': { name: 'ネガティブダブル', desc: 'パートナーがオープンし、相手がオーバーコールし、あなたはダブルでビッドされていないメジャーを示します。' },
    'two-suiters': { name: 'マイケルズとアンユージュアル2NT', desc: 'あなたの側が1回のビッドでツースーターを示します。' },
    'over-notrump': { name: '相手の1NTに対する競り合い', desc: '相手が1NTをオープンし、あなたの側がダブルするか長いスートをビッドします。' },
    'over-preempts': { name: 'プリエンプトに対する競り合い', desc: '相手がウィークツーやプリエンプトでオープンし、あなたの側がダブル、オーバーコール、またはノートランプをビッドします。' },
    'opening-doubled': { name: 'オープニングがダブルされたら', desc: 'あなたの側がオープンし、次のプレーヤーがダブルします。強さとフィットをすぐに示しましょう。' },
    'balancing': { name: 'バランシング', desc: '相手が低いレベルで止まり、パスアウトシートのあなたの番です。' },
    'partscore-battle': { name: 'パートスコアの争い', desc: '両側にフィットがあり、2レベルと3レベルで競り合います（トータルトリックの法則）。' },
    'slam': { name: 'スラム', desc: 'あなたの側にはスラムを探るだけの強さがあります。' },
    'declarer': { name: 'ディクレアラープレイ', desc: 'あなたの側がコントラクトをプレイします: カウントし、プランを立て、プレイしましょう。' },
    'nt-games': { name: 'ディクレアラーとして3NT', desc: '3NTをプレイします: ウィナーを数え、長いスートを確立し、ホールドアップし、エントリーに気を配りましょう。' },
    'suit-games': { name: 'ディクレアラーとしてスートのゲーム', desc: 'スートのゲームをプレイします: ルーザーを数え、ラフし、適切なときにトランプを抜きましょう。' },
    'leads': { name: 'オープニングリード', desc: '東がディクレアラーです: あなたがオープニングリードをします。' },
    'defense': { name: 'ディフェンス', desc: '相手がコントラクトをプレイし、あなたはパートナーとディフェンスします。' },
    'defense-nt': { name: 'ノートランプのディフェンス', desc: 'パートナーがノートランプに対してリードします: サードハンドのプレイと11のルール。' },
    'defense-suit': { name: 'スートコントラクトのディフェンス', desc: 'トランプのあるコントラクトをディフェンスします: キャッシュするか、ラフするか、受け身に構えるか。' },
  },

  dealing: (topic: string) => (topic ? `「${topic}」のボードを配っています…` : '配っています…'),
  notEnough: 'まだ判断の数が足りません',
  you: 'あなた',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return '両者ノンバルネラブル';
    if (v === 'Both') return '両者バルネラブル';
    return v === ours ? '味方だけバルネラブル' : '相手だけバルネラブル';
  },

  // header and table
  topicChip: (topic: string) => `トピック: ${topic}`,
  // importing a deal
  importTitle: '他の場所のディールをプレイ',
  importText: 'PBNファイル、BBOのハンド（LINまたはハンドビューアのリンク）、"N:AKQ2.K73.J52.Q8 …"のようなディール、またはブリッジ・チューターの共有コードかリンクを貼り付けてください。',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  共有コード',
  importBtnPlay: 'このディールをプレイ',
  importError: (code: string) => {
    if (code === 'empty') return 'まずディールを貼り付けてください。';
    if (code === 'share') return 'ディールではないようです: テキストやリンクが全部コピーされているか確認してください。';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'ディールが不完全か、同じカードが2回含まれています。';
    return 'ディールを読み込めませんでした。';
  },
  historyTitle: 'あなたのボード',
  // lessons
  practiseLesson: 'テーブルで練習する',
  practiseLessonText: 'このトピックが出てくるディールを、チューターと一緒にプレイします。',
  lessonDone: '合格',
  quizScore: (right: number, total: number) => `1回目: ${total}問中${right}問正解`,
  quizRetry: 'もう一度クイズに挑戦',
  practicedCount: (n: number) => `${n}ボード練習済み`,

  // Today
  tileStreak: '連続日数',
  tileStreakNote: (n: number) => (n ? 'この調子で続けましょう' : '今日1ボードプレイして始めましょう'),
  tileDue: '復習',
  tileDueNote: (total: number) => `復習待ちの判断: ${total}件`,
  tileBoards: 'プレイしたボード',
  tileBoardsNote: (date: string) => `最終: ${date}`,
  tileBoardsNone: '最初のボードをプレイしましょう',
  tileBidding: 'ビッドの正確さ',
  tileBiddingNote: (right: number, total: number) => `${total}コール中${right}コールがシステムどおり`,
  nextSteps: '次にやること',
  stepReviewTitle: (n: number) => `間違えた判断を復習する（${n}件）`,
  stepReviewText: '自分のミスは、正解できるようになるまで数日おきに出題されます — 同じミスを繰り返さなくなる最短の方法です。',
  startReview: '復習を始める',
  stepWeakTitle: (skill: string) => `強化しましょう: ${skill}`,
  stepWeakNew: 'この種類の判断はまだあまりプレイしていません。このために配られたボードをいくつか練習しましょう。',
  stepWeakText: (pct: string, n: number) => `直近${n}件の判断で正解率${pct} — あなたの最も弱い分野です。このために配られたボードで練習し、まだならレッスンを読みましょう。`,
  practiseAtTable: 'テーブルで練習',
  readLesson: (title: string) => `読む: ${title}`,
  stepCourseTitle: (title: string) => `コースを続ける: ${title}`,
  stepCourseText: (i: number, total: number) => `全${total}レッスン中の${i}番目。クイズの80%に1回目で正解すると、そのレッスンは完了になります。`,
  openLesson: 'レッスンを開く',
  stepProblemsTitle: '正しいプレイを見つける',
  stepProblemsText: '1枚のカードが明らかに最善になる、実際のディールからの問題: ディクレアラープレイ、ディフェンス、オープニングリード。',
  openProblems: '問題を解く',
  howItWorks: 'プレイし終えたボードはすべて分析とともに保存されます。システムと異なるコールや、（後知恵ではなく）その時点の情報で明らかに劣っていたカードは、復習リストに入ります。',

  // Review
  reviewEmptyTitle: '復習するミスはまだありません',
  reviewEmptyText: 'ボードをいくつかプレイしましょう: システムと異なるコールや、その時点の情報で損をしたカードがここに表示されます。',
  reviewDoneTitle: 'すべて完了',
  reviewDoneText: (total: number, next: string) => `${total}件の判断が後日に予定されています（次回は${next}）。`,
  sessionScore: (right: number, done: number) => `今回のセッション: ${done}問中${right}問正解`,
  itemFrom: (date: string, board: number) => `ボード${board}より、${date}`,
  freshDeal: '新しいディール、同じ考え方',
  itemFromDrill: (date: string) => `ビッド練習より、${date}`,
  itemFromProblem: (date: string) => `問題より、${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? '新規' : `ステップ ${box}/${last}`),
  dueLeft: (n: number) => `残り${n}件`,
  next: '次へ',
  nextIn: (days: number) => (days === 0 ? '今日のうちにもう一度出題されます。' : days === 1 ? '次の復習は明日です。' : `次の復習は${days}日後です。`),
  again: '正解できるまで、また出題されます。',
  showBoard: 'ボード全体を表示',
  simulating: 'わかっている情報に合う配置で、そのカードをシミュレートしています…',
  bidPrompt: 'あなたのコールです。',
  youAre: (seat: string, vul: string) => `あなたは${seat}、${vul}です。`,
  bidRight: (call: string, rule: string) => `正解: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `システムのビッドは${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `あなたの${call}は「${name}」と解釈されます: ${desc}`,
  atTableYouBid: (call: string) => `テーブルではあなたは${call}とビッドしました。`,
  cardPrompt: 'あなたのカードです。',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${declarer}の${contract}。第${trick}トリックで${seat}のカードを出します。`,
  dummyLabel: (seat: string) => `ダミー（${seat}）`,
  trickSoFar: 'このトリック:',
  yourHand: (seat: string) => `あなたのハンド（${seat}）`,
  cardRight: '正解 — それが最も良い結果になったカードです。',
  cardWrong: (cards: string) => `最善: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `ビッドとプレイに合う${n}通りの配置で、${best}はあなたの側に平均${bt}トリック（${bs}の割合で${declaring ? 'メイク' : 'ダウンさせる'}）。テーブルであなたが出した${yours}は平均${mt}トリック（${ms}）でした。`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `ビッドとプレイに合う${n}通りの配置で、${best}はあなたの側に平均${bt}トリック（${bs}の割合で${declaring ? 'メイク' : 'ダウンさせる'}）。問題へのあなたの答え${yours}は平均${mt}トリック（${ms}）でした。`,
  cardFresh: (card: string, t: string, s: string, n: number) => `新しい${n}通りの配置で、${card}は平均${t}トリック（${s}）でした。`,

  // Problems
  problems: {
    intro: '実際のディールから、シミュレーションで1枚のカードが明らかに最善とわかる局面を出題します — それを見つけてください。どのディールも、あなたの判断の場面までシステムがビッドし、ボットがプレイします。',
    filterLabel: '問題の種類',
    filters: { mixed: 'ミックス', declarer: 'ディクレアラープレイ', defense: 'ディフェンス', lead: 'オープニングリード' },
    kinds: { declarer: 'ディクレアラープレイ', defense: 'ディフェンス', lead: 'オープニングリード' },
    session: (right: number, done: number) => `今回のセッション: ${done}問中${right}問正解`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `通算: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `準備済み: ディクレアラー${declarer} · ディフェンス${defense} · リード${lead}`,
    boardLine: (board: number, vul: string) => `ボード${board}、${vul}。`,

    // waiting for the first problem
    preparing: '問題を準備しています…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'ディクレアラープレイのボードを配っています…' : kind === 'defense' ? 'ディフェンスのボードを配っています…' : 'オープニングリードの問題になるボードを配っています…',
    stagePlaying: (trick: number) => `ボットが第${trick}トリックをプレイしています…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `第${trick}トリックでの判断をテスト中: ${total}通り中${done}通りの配置…` : 'ディールを確認しています…',
    tried: (n: number) => `これまでに${n}ディールを試しました。`,
    waitNote: 'はっきりした答えのある局面だけを残すので、数ディールかかることがあります。このタブを開いている間、問題はバックグラウンドで準備され、種類ごとに最大6問が次回のために保存されます。',
    leadNote: 'はっきりしたオープニングリードの問題はまれです: 準備に1、2分かかることがあります。',

    // the question
    qDeclarer: (contract: string, seat: string) => `あなたは${contract}のディクレアラー（${seat}）です。`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer}が${contract}のディクレアラーです。あなたは${seat}としてディフェンスします。`,
    qLead: (contract: string, declarer: string) => `${declarer}が${contract}のディクレアラーで、あなたがリードする番です。`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `あなたは${card}をリードしました。` : who === 'partner' ? `パートナー（${seat}）が${card}をリードしました。` : `${seat}が${card}をリードしました。`,
    tally: (trick: number, won: number, lost: number) => `第${trick}トリック: ここまであなたの側が${won}トリック、相手が${lost}トリックです。`,
    askLead: 'どのカードをリードしますか？',
    askPlan: (fromDummy: boolean) => `プレイのプランを立てましょう: ${fromDummy ? 'ダミーから' : 'あなたのハンドから'}どのカードを出しますか？`,
    askDeclarer: (fromDummy: boolean) => `今、${fromDummy ? 'ダミーから' : 'あなたのハンドから'}どのカードを出しますか？`,
    askDefence: 'どのカードを出しますか？',

    // the answer
    right: (cards: string) => `正解！ 最善: ${cards}。`,
    wrong: (cards: string) => `今回は不正解です。最善: ${cards}。`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `ビッドとここまでのプレイに合う${n}通りの配置で、${best}はあなたの側に平均${t}トリックをもたらし、${s}の割合で${declaring ? 'コントラクトをメイクしました' : 'コントラクトをダウンさせました'}。`,
    yourLine: (card: string, t: string, s: string) => `あなたの${card}: ${t}トリック、${s}。`,
    nextBest: (card: string, t: string, s: string) => `残りの中で最善の${card}: ${t}トリック、${s}。`,
    colCard: 'カード',
    colTricks: 'トリック',
    colMakes: 'メイク',
    colSets: 'ダウン',
    addedToReview: '復習リストに追加しました: 正解できるまでこの局面が出題されます。',
    whyThisSuit: 'このスートを選ぶ理由:',
    next: '次の問題',
    skip: 'スキップ',
    showDeal: 'ディール全体を表示',
    hideDeal: 'ディールを隠す',
    playFromStart: 'このディールを最初からプレイ',
    declarerTag: 'ディクレアラー',
    dummyTag: 'ダミー',
  },

  // Skills
  skillsIntro: '各分野の直近の判断での正確さです。ビッドはシステムどおりのコールを、プレイはその時点の情報で最善のカードより明らかに劣っていなかったカードを数えます。',
  decisions: (n: number) => `${n}件の判断`,
  practise: '練習する',

  // Topics
  topicsIntro: 'トピックを選ぶと、それが出てくるように次のボードが配られます — テーブルでのプレイ、チューター、振り返りなどはいつもどおりです。',
  nowPractising: '練習中:',
  stopTopic: '通常のディールに戻る',
  dealAnother: '別のボードを配る',

  // History
  review: '振り返り',
  replay: 'もう一度プレイ',
  historyCols: ['日付', 'ボード', 'コントラクト', '結果', 'スコア（南北）', 'パーとのIMP差', 'コール', 'カードのミス · 失ったトリック'],
  historyEmpty: 'まだボードがありません。プレイし終えたボードはすべて、分析とともにここに保存されます。',
  historyNote: 'カードのミス: その時点の情報で明らかに劣っていたカード。失ったトリック: 全員が完璧にプレイした場合（ダブルダミー）と比べてあなたのカードが損をしたトリック数 — 正しいプレイが後知恵では損になることもあります。',
  backupTitle: 'バックアップ',
  backupText: 'あなたの進捗はこのブラウザにだけ保存されています。安全のため、または別の端末に移すために、バックアップファイルを保存しましょう。',
  exportBtn: 'バックアップを保存',
  importBtn: 'ファイルから復元',
  restored: '進捗を復元しました。',
  restoreFailed: 'このファイルはブリッジ・チューターのバックアップではありません。',
};
