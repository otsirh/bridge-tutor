// English — the source language: its shape defines `Text` for every language.

import { core } from './core';
import { ui } from './ui';
import { bidding } from './bidding';
import { tutor } from './tutor';
import { practice } from './practice';

export const en = { core, ui, bidding, tutor, practice };

/** The shape every language must provide: English with literal types widened to string. */
export type Text = Widen<typeof en>;

type Widen<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => Widen<R>
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T;
