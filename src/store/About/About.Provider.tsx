import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { AboutDataStore } from './About.store';
import { ProviderProps } from '../../interface/interface';

export const AboutContext = createContext<AboutDataStore | null>(null);

export const AboutProvider = ({ children }: ProviderProps) => {
  const store = useLocalStore(() => new AboutDataStore());

  return <AboutContext.Provider value={store}>{children}</AboutContext.Provider>;
};
