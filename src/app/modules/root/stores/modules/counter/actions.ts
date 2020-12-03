import { Action } from '@ngrx/store';
import { RootActionTypes } from './types';

export class AutoIncrement implements Action {
  readonly type = RootActionTypes.autoIncrement;
}

export class Increment implements Action {
  readonly type = RootActionTypes.increment;
}

export class Decrement implements Action {
  readonly type = RootActionTypes.decrement;
}

export class Reset implements Action {
  readonly type = RootActionTypes.reset;
}
