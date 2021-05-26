import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { CarsDataStore } from './Cars.store';
import { ProviderProps } from '../../interface/interface';

export const CarsContext = createContext<CarsDataStore | null>(null);

export const CarsProvider = ({ children }: ProviderProps) => {
  const store = useLocalStore(() => new CarsDataStore());

  return <CarsContext.Provider value={store}>{children}</CarsContext.Provider>;
};
