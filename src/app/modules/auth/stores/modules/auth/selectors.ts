import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../../app.stores';
import { State } from './state';

export const selectAuth = (state: AppState) => state.auth;

export const selectUsername = createSelector(
  selectAuth,
  (auth: State) => auth.username
);
