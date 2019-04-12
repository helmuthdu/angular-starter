import { Action } from '@ngrx/store';
import { ActionTypes } from './types';

export class AutoIncrement implements Action {
  readonly type = ActionTypes.AutoIncrement;
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}
