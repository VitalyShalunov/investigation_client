import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CarsProvider } from '../../../store/Cars';
import { UsersProvider } from '../../../store/Users';
import { User } from './User';

export function UserContainer({ match }: RouteComponentProps<{ id: string }>) {
    const id = parseInt(match.params.id, 10);
    return (
        <CarsProvider>
            <UsersProvider id={id}>
                <User />
            </UsersProvider>
        </CarsProvider>
    );
}
