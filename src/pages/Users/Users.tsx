import { observer } from 'mobx-react';
import moment from 'moment';

import { useStore } from '../../store/helpers';
import { UsersContext } from '../../store/Users';
import {
    UsersPage,
    CardUser,
    UsersContainer,
    ButtonContainer,
    DeleteIcon,
    EditIcon
} from '../../styles/Users';
import { SearchInput } from '../../styles/input';
import React, { useState } from 'react';
import { Popup } from '../../components/Popup';
import { CreateUser } from './User/CreateUser';
import { Header } from '../../components/Header';
import { Pages } from '../../store/helpers/arrayPages';
import { IUser } from '../../store/Users/Users.interface';

export const Users = observer(() => {
    const store = useStore(UsersContext);
    const { users, state, deleteUser: deleteUserStore } = store;
    const [search, setSearch] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
    const filter = (surname: string): boolean => surname !== undefined && surname.toLocaleLowerCase().includes(search);

    const openEditPage = (id: number) => {
        const slashOrEmpty = window.location.href.lastIndexOf('/') + 1 === window.location.href.length ? '' : '/';
        
        window.location.href = `${window.location.href}${slashOrEmpty}${id}`;
    }

    const deleteUser = (id: number) => {
        deleteUserStore(id);
    }
    
    return (
        <UsersPage>
            <Header activePage={Pages.Users}/>
            <SearchInput
                onChange={onChange}
            />
            <UsersContainer>
                {users ? users.filter((user) => filter(user.lastName)).map((user: IUser) =>
                    <CardUser key={user.id}>
                        <span>{user.firstName}</span>
                        <span>{user.lastName}</span>
                        <span>{moment(user.dateOfBirthday).format('DD/MM/YYYY')}</span>
                        <ButtonContainer>
                            <EditIcon
                                onClick={() => openEditPage(user.id)}
                            />
                            <DeleteIcon
                                onClick={() => deleteUser(user.id)}
                            />
                        </ButtonContainer>
                    </CardUser>
                ) : 'users'}
            </UsersContainer>
            <Popup>
                <CreateUser />
            </Popup>
        </UsersPage>
    );
});
