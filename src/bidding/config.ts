// Which optional conventions the system plays.
//
// The base system is SAYC; each convention below can be switched on or off.
// Rules read getSystem() when they are built, so the bots and the tutor always
// play the same system. Names and descriptions for a settings screen are in
// T.bidding.conventions[id].

/** One switch per convention. */
export interface SystemConfig {
  splinters: boolean; // 1♥–3♠/4♣/4♦, 1♠–4♣/4♦/4♥: game raise with a singleton or void
  drury: boolean; // passed hand: 2♣ over partner's third/fourth-seat 1♥/1♠ = limit raise
  newMinorForcing: boolean; // 1m–1M–1NT–2(other minor) asks for support
  fourthSuitForcing: boolean; // the fourth suit by responder is artificial, game forcing
  texas: boolean; // 1NT/2NT–4♦/4♥ = transfer to 4♥/4♠
  controlBids: boolean; // cue bids showing controls once a major is agreed, game forcing
  rkcb: boolean; // Roman Key Card Blackwood 1430 instead of plain Blackwood
}

export type ConventionId = keyof SystemConfig;

export const DEFAULT_SYSTEM: Readonly<SystemConfig> = {
  splinters: true,
  drury: false, // a passed-hand convention, not part of SAYC proper
  newMinorForcing: true,
  fourthSuitForcing: true,
  texas: true,
  controlBids: true,
  rkcb: true,
};

/** The conventions in display order, with the lesson that teaches each. */
export const CONVENTIONS: { id: ConventionId; lesson?: string }[] = [
  { id: 'splinters', lesson: 'splinters-and-drury' },
  { id: 'drury', lesson: 'splinters-and-drury' },
  { id: 'newMinorForcing', lesson: 'new-minor-and-fourth-suit-forcing' },
  { id: 'fourthSuitForcing', lesson: 'new-minor-and-fourth-suit-forcing' },
  { id: 'texas', lesson: 'texas-transfers' },
  { id: 'controlBids', lesson: 'slam-controls-and-cue-bids' },
  { id: 'rkcb', lesson: 'roman-key-card-blackwood' },
];

let current: SystemConfig = { ...DEFAULT_SYSTEM };

export function getSystem(): Readonly<SystemConfig> {
  return current;
}

/** Switch conventions; anything left out takes its default (so old saved settings stay valid). */
export function setSystem(cfg: Partial<SystemConfig>) {
  current = { ...DEFAULT_SYSTEM };
  for (const c of CONVENTIONS) if (typeof cfg[c.id] === 'boolean') current[c.id] = cfg[c.id]!;
}

/** Every convention off: plain SAYC as the bots played it before these options existed. */
export const PLAIN_SAYC: Readonly<SystemConfig> = Object.fromEntries(CONVENTIONS.map(c => [c.id, false])) as unknown as SystemConfig;
