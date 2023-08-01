import { ActionType } from './action-types.ts';

export interface LoginAction {
  type: ActionType.LOGIN;
  payload: string;
}

export interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type Action =
  | LoginAction
  | LogoutAction;
