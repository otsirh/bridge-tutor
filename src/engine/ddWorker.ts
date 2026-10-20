// Web worker running the double-dummy solver.

import { DDSolver, ddTable, type DDPosition } from './dds';
import type { Card } from '../core/cards';

export type DDRequest =
  | { id: number; kind: 'analyze'; pos: DDPosition }
  | { id: number; kind: 'value'; pos: DDPosition }
  | { id: number; kind: 'table'; hands: Card[][] };

export type DDResponse =
  | { id: number; kind: 'analyze'; moves: { card: Card; nsTricks: number }[] }
  | { id: number; kind: 'value'; value: number }
  | { id: number; kind: 'table'; table: number[][] }
  | { id: number; kind: 'error'; message: string };

/** Run one request on a solver (shared by the worker and the main-thread fallback). */
export function handleDD(solver: DDSolver, req: DDRequest): DDResponse {
  try {
    if (req.kind === 'analyze') {
      solver.load(req.pos);
      return { id: req.id, kind: 'analyze', moves: solver.analyze() };
    }
    if (req.kind === 'value') {
      solver.load(req.pos);
      return { id: req.id, kind: 'value', value: solver.value() };
    }
    return { id: req.id, kind: 'table', table: ddTable(solver, req.hands) };
  } catch (e) {
    return { id: req.id, kind: 'error', message: String(e) };
  }
}
