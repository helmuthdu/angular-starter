import * as auth from './modules/auth';

export type State = Readonly<{
  auth: auth.State;
}>;

export const stores = [auth];

export { auth };
