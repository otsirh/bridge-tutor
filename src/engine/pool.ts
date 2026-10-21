// A small pool of double-dummy workers with a priority queue.
// Falls back to solving on the main thread when workers are unavailable.
// A few positions take the solver minutes; a job that runs past its time
// limit is abandoned (its worker is replaced) so it cannot hold up the rest.

import DDWorker from './ddWorkerEntry?worker&inline';
import { DDSolver } from './dds';
import { handleDD, type DDRequest, type DDResponse } from './ddWorker';

type DistOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type Job = { req: DDRequest; resolve: (r: DDResponse) => void; priority: number; group: number; limitMs: number; timer?: ReturnType<typeof setTimeout> };

let nextId = 1;

/** How long one job may run before it is abandoned (ms). */
export const JOB_LIMIT_MS = 20_000;

export class DDPool {
  private workers: Worker[] = [];
  private idle: Worker[] = [];
  private queue: Job[] = [];
  private running = new Map<number, Job>();
  private byWorker = new Map<Worker, number>();
  private fallback: DDSolver | null = null;
  private fallbackBusy = false;

  constructor(size = Math.max(1, Math.min(6, (navigator.hardwareConcurrency || 4) - 1))) {
    try {
      for (let i = 0; i < size; i++) this.idle.push(this.spawn());
    } catch {
      this.workers = [];
      this.idle = [];
    }
  }

  private spawn(): Worker {
    const w = new DDWorker();
    w.onmessage = (e: MessageEvent<DDResponse>) => this.done(w, e.data);
    w.onerror = () => this.failWorker(w);
    this.workers.push(w);
    return w;
  }

  get size() {
    return Math.max(1, this.workers.length);
  }

  /**
   * Queue a request. Higher priority runs first. `group` lets callers cancel a
   * batch. A job still running after `limitMs` resolves with a 'timeout' error.
   */
  run(req: DistOmit<DDRequest, 'id'>, priority = 1, group = 0, limitMs = JOB_LIMIT_MS): Promise<DDResponse> {
    return new Promise(resolve => {
      const job: Job = { req: { ...req, id: nextId++ } as DDRequest, resolve, priority, group, limitMs };
      let i = this.queue.length;
      while (i > 0 && this.queue[i - 1].priority < priority) i--;
      this.queue.splice(i, 0, job);
      this.pump();
    });
  }

  /** Drop queued (not yet started) jobs of a group; their promises resolve with an error. */
  cancelGroup(group: number) {
    const keep: Job[] = [];
    for (const j of this.queue) {
      if (j.group === group) j.resolve({ id: j.req.id, kind: 'error', message: 'cancelled' });
      else keep.push(j);
    }
    this.queue = keep;
  }

  private pump() {
    if (!this.workers.length) {
      this.pumpFallback();
      return;
    }
    while (this.idle.length && this.queue.length) {
      const w = this.idle.pop()!;
      const job = this.queue.shift()!;
      this.running.set(job.req.id, job);
      this.byWorker.set(w, job.req.id);
      job.timer = setTimeout(() => this.abandon(w, job), job.limitMs);
      w.postMessage(job.req);
    }
  }

  private done(w: Worker, res: DDResponse) {
    const job = this.running.get(res.id);
    if (job?.timer) clearTimeout(job.timer);
    this.running.delete(res.id);
    this.byWorker.delete(w);
    this.idle.push(w);
    job?.resolve(res);
    this.pump();
  }

  /** A job ran too long: stop its worker, start a fresh one, and report the job as failed. */
  private abandon(w: Worker, job: Job) {
    if (this.byWorker.get(w) !== job.req.id) return;
    w.terminate();
    this.workers = this.workers.filter(x => x !== w);
    this.byWorker.delete(w);
    this.running.delete(job.req.id);
    try {
      this.idle.push(this.spawn());
    } catch {
      /* no more workers: the rest of the pool (or the main thread) carries on */
    }
    job.resolve({ id: job.req.id, kind: 'error', message: 'timeout' });
    this.pump();
  }

  private failWorker(w: Worker) {
    const id = this.byWorker.get(w);
    this.workers = this.workers.filter(x => x !== w);
    this.idle = this.idle.filter(x => x !== w);
    this.byWorker.delete(w);
    if (id !== undefined) {
      const job = this.running.get(id)!;
      if (job.timer) clearTimeout(job.timer);
      this.running.delete(id);
      this.queue.unshift(job);
    }
    this.pump();
  }

  private pumpFallback() {
    if (this.fallbackBusy || !this.queue.length) return;
    this.fallbackBusy = true;
    if (!this.fallback) this.fallback = new DDSolver(19);
    const job = this.queue.shift()!;
    setTimeout(() => {
      const res = handleDD(this.fallback!, job.req);
      this.fallbackBusy = false;
      job.resolve(res);
      this.pumpFallback();
    }, 0);
  }
}

let shared: DDPool | null = null;
export function ddPool(): DDPool {
  if (!shared) shared = new DDPool();
  return shared;
}
