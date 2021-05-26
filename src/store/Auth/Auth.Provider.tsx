import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { AuthStore } from './Auth.store';
import { ProviderProps } from '../../interface/interface';

export const AuthContext = createContext<AuthStore | null>(null);

export const AuthProvider = ({ children }: ProviderProps) => {
  const store = useLocalStore(() => new AuthStore());

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
