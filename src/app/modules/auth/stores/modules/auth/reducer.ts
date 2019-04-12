import { Actions } from './actions';
import { initialState, State } from './state';
import { ActionTypes } from './types';

export type Action = Readonly<{
  type: ActionTypes;
  payload: Actions;
}>;

// Reducer
export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.AUTH_SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
