import { Actions } from './actions';
import { initialState, State } from './state';
import { UserActionTypes } from './types';

export type Action = Readonly<{
  type: UserActionTypes;
  payload: Actions;
}>;

// Reducer
export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case UserActionTypes.setUser:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
