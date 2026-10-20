// Worker entry point.
import { DDSolver } from './dds';
import { handleDD, type DDRequest } from './ddWorker';

const solver = new DDSolver(19);
self.onmessage = (e: MessageEvent<DDRequest>) => {
  (self as unknown as Worker).postMessage(handleDD(solver, e.data));
};
