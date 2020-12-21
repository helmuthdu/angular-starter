import { Action } from '@ngrx/store';
import { UserPayload } from '../../../models';
import { UserActionTypes } from './types';

export class ActionGetUser implements Action {
  readonly type!: UserActionTypes.setUser;
}

export class ActionLogin implements Action {
  readonly type!: UserActionTypes.setUser;
  constructor(public payload: UserPayload) {}
}

export class ActionLogout implements Action {
  readonly type!: UserActionTypes.setUser;
  constructor(public payload: UserPayload) {}
}

export type Actions = ActionGetUser | ActionLogin | ActionLogout;
