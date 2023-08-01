import React, { createContext, useContext, useReducer } from 'react';
import { ParentProps } from '../pages/HomePage.tsx';
import reducer from '../states/reducer.ts';
import { ActionType } from '../states/action-types.ts';
import { Action } from '../states/actions.ts';

export interface ContextProps {
  user: string | null;
  isAuthenticated: boolean;
}

export interface UserProps {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface AuthContextProps extends ContextProps {
  dispatch?: (action: Action) => void;
  login?: (email: string, password: string) => void;
  logout?: () => void;
}

const initialState: ContextProps = {
  user: null,
  isAuthenticated: false,
}

const authInitialState: AuthContextProps = {
  ...initialState,
}

const AuthContext = createContext<AuthContextProps>(authInitialState);

const FAKE_USER: UserProps = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}

const AuthProvider: React.FC<ParentProps> = ({children}) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);
  const login = (email: string, password: string) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: ActionType.LOGIN, payload: FAKE_USER.name });
    }
  }

  const logout = () => {
    dispatch({ type: ActionType.LOGOUT });
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, login, logout} as AuthContextProps} >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext<AuthContextProps>(AuthContext);
  if (context === undefined) {
    throw new Error('AuthContext was used outside AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
