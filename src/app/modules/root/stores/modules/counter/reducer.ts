import { Action } from '@ngrx/store';
import { initialState } from './state';
import { RootActionTypes } from './types';

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case RootActionTypes.increment:
      return state + 1;

    case RootActionTypes.decrement:
      return state - 1;

    case RootActionTypes.reset:
      return 0;

    default:
      return state;
  }
};
