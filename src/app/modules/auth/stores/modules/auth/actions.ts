import { Action } from '@ngrx/store';
import { AuthRequest } from '../../../enums/request.enum';
import { ActionTypes } from './types';

export class ActionGetUser implements Action {
  readonly type: ActionTypes.SetUser;
}

export class ActionLogin implements Action {
  readonly type: ActionTypes.SetUser;
  constructor(public payload: AuthRequest) {}
}

export class ActionLogout implements Action {
  readonly type: ActionTypes.SetUser;
  constructor(public payload: AuthRequest) {}
}

export type Actions = ActionGetUser | ActionLogin | ActionLogout;
