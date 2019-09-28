import { Action } from '@ngrx/store';
import { UserRequest } from '../../../models';
import { ActionTypes } from './types';

export class ActionGetUser implements Action {
  readonly type: ActionTypes.SetUser;
}

export class ActionLogin implements Action {
  readonly type: ActionTypes.SetUser;
  constructor(public payload: UserRequest) {}
}

export class ActionLogout implements Action {
  readonly type: ActionTypes.SetUser;
  constructor(public payload: UserRequest) {}
}

export type Actions = ActionGetUser | ActionLogin | ActionLogout;
