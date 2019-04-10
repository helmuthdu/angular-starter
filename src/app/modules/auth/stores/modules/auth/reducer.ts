import { Actions } from './actions';
import { initialState, State } from './state';
import { ActionType } from './types';

export type Action = Readonly<{
  type: ActionType;
  payload: Actions;
}>;

// Reducer
export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.AUTH_SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
