import { Action } from '@ngrx/store';
import { initialState } from './state';
import { ActionTypes } from './types';

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
};
