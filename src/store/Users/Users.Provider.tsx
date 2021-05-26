import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { UsersDataStore } from './Users.store';
import { ProviderProps } from '../../interface/interface';

export const UsersContext = createContext<UsersDataStore | null>(null);

export const UsersProvider = ({ children, id }: ProviderProps & { id?: number }) => {
    const store = useLocalStore(() => new UsersDataStore(id));

    return <UsersContext.Provider value={store}>{children}</UsersContext.Provider>;
};
