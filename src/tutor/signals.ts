// Reading the play: what an opening lead or a signal tells the table under
// standard methods (only public information — never the hidden cards).

import { type Card, type Seat, suitOf, rankOf, SUIT_NAMES, SEAT_NAMES, rankLabel, cardName, NT, partnerOf } from '../core/cards';
import type { Trick } from '../core/play';

export interface Reading {
  title: string;
  text: string;
}

export function leadMeaning(card: Card, strain: number): string {
  const r = rankOf(card);
  const vsNT = strain === NT;

  switch (r) {
    case 14: return `Асо: обикновено от асо-поп${vsNT ? ' (срещу без коз може и да моли партньора да отблокира)' : ' или асо синглтон/дублетон'}.`;
    case 13: return `Поп: най-горната от поредица — K-Q${vsNT ? ' (или A-K)' : ''}. Отрича асото${vsNT ? ', освен ако е от A-K' : ''}.`;
    case 12: return 'Дама: най-горната от поредица (Q-J…), отрича попа.';
    case 11: return 'Вале: най-горната от J-10… или от вътрешна поредица като K-J-10. Отрича дамата.';
    case 10: return 'Десетка: най-горната от 10-9… или от вътрешна поредица (Q-10-9, K-10-9).';
    case 9: return 'Деветка: най-горната от къс цвят без фигури или от 9-8-x.';
    default:
      return vsNT
        ? `Малка карта в ${SUIT_NAMES[suitOf(card)]}: вероятно четвърта отгоре от дълъг цвят с фигура. Приложете правилото на 11.`
        : `Малка карта в ${SUIT_NAMES[suitOf(card)]}: обикновено трета/четвърта отгоре от фигура — или синглтон.`;
  }
}

/** Rule of 11 from the third player's point of view (needs the led card to be a 4th-best spot). */
export function ruleOf11(lead: Card, dummy: readonly Card[], mine: readonly Card[]): string | null {
  const r = rankOf(lead);
  if (r > 9) return null;
  const above = 11 - r;
  const su = suitOf(lead);
  const seen = [...dummy, ...mine].filter(c => suitOf(c) === su && rankOf(c) > r).length;
  const declarer = above - seen;
  if (declarer < 0) return null;
  return `Правило на 11: 11 − ${rankLabel(r)} = ${above} карти над ${rankLabel(r)} в другите три ръце. Виждате ${seen} от тях (в мъртвака и във вашата ръка), значи разиграващият има ${declarer}.`;
}

/** What the cards played so far tell you, from `viewer`'s seat. */
export function readPlay(tricks: readonly Trick[], strain: number, viewer: Seat, dummy: Seat, dummyCards: readonly Card[] | null, myCards: readonly Card[]): Reading[] {
  const out: Reading[] = [];
  const first = tricks[0];
  if (first && first.cards.length) {
    const lead = first.cards[0];
    const leader = first.leader;
    const who = leader === viewer ? 'Вашият първи извод' : leader === partnerOf(viewer) ? 'Първият извод на партньора' : `Първият извод на ${SEAT_NAMES[leader]}`;
    out.push({ title: `${who}: ${cardName(lead)}`, text: leadMeaning(lead, strain) });
    const third = (leader + 2) & 3;
    if (third === viewer && strain === NT && dummyCards && tricks.length === 1) {
      const dummySeen = [...dummyCards, ...(first.cards.length > 1 ? [first.cards[1]] : [])];
      const r11 = ruleOf11(lead, dummySeen, [...myCards, ...(first.cards.length > 2 ? [first.cards[2]] : [])]);
      if (r11) out.push({ title: 'Правило на 11', text: r11 });
    }
  }
  // partner's attitude/discard signals (defenders only)
  const defenders = (viewer & 1) !== (dummy & 1);
  if (defenders) {
    const partner = partnerOf(viewer);
    for (const t of tricks.slice(-3)) {
      t.cards.forEach((c, i) => {
        const seat = ((t.leader + i) & 3) as Seat;
        if (seat !== partner || i === 0) return;
        const led = suitOf(t.cards[0]);
        if (suitOf(c) !== led && suitOf(c) !== strain) {
          out.push({ title: `Партньорът изхвърли ${cardName(c)}`, text: rankOf(c) >= 8 ? `Високото изхвърляне насърчава: партньорът харесва ${SUIT_NAMES[suitOf(c)]} (стандартен сигнал за отношение).` : `Ниското изхвърляне казва, че партньорът не иска извод в ${SUIT_NAMES[suitOf(c)]}.` });
        } else if (t.leader === viewer && suitOf(c) === led && i === 2) {
          const winning = t.winner === partner;
          if (!winning && rankOf(c) <= 10) out.push({ title: `Партньорът изигра ${cardName(c)} на вашия извод`, text: rankOf(c) >= 7 ? 'Висока карта насърчава: продължете в цвета.' : 'Ниска карта обезкуражава: помислете за смяна на цвета.' });
        }
      });
    }
  }
  return out;
}
