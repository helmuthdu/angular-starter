import { Action } from '@ngrx/store';
import { UserPayload } from '../../../models';
import { ActionTypes } from './types';

export class ActionGetUser implements Action {
  readonly type: ActionTypes.SetUser;
}

export class ActionLogin implements Action {
  readonly type: ActionTypes.SetUser;
  constructor(public payload: UserPayload) {}
}

export class ActionLogout implements Action {
  readonly type: ActionTypes.SetUser;
  constructor(public payload: UserPayload) {}
}

export type Actions = ActionGetUser | ActionLogin | ActionLogout;
