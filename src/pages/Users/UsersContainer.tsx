import React from 'react';
import { CarsProvider } from '../../store/Cars';
import { UsersProvider } from '../../store/Users';
import { UserContainer } from './User/UserContainer';
import { Users } from './Users';

export function UsersContainer() {
    console.log('UsersContainer');
    return (
        <CarsProvider>
            <UsersProvider>
                <Users />
            </UsersProvider>
        </CarsProvider>
    );
}
