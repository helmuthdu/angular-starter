import * as counter from './modules/counter';

export type State = Readonly<{
  counter: counter.State;
}>;

export const stores = [counter];

export { counter };
