import { ContextProps } from '../contexts/FakeAuthContext.tsx';
import { Action } from './actions.ts';
import { ActionType } from './action-types.ts';

const reducer = (state: ContextProps, action: Action): ContextProps => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case ActionType.LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

export default reducer;
