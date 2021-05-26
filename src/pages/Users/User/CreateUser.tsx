import { Grid, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
import { IClients } from '../../../../../interfaces/interface';
import { CarGetPayload } from '../../../store/Cars';
import { useStore } from '../../../store/helpers';
import { UsersContext } from '../../../store/Users';
import { UserPostPayload } from '../../../store/Users/Users.interface';
import { Button } from '../../../styles/Users';
import { EditUser } from './EditUser';

export const CreateUser = observer(() => {
    const { createdUser, createUser, changeProps } = useStore(UsersContext);

    const onChange = (prop: keyof UserPostPayload, value: any) => {
        changeProps(prop, value, true);
    };
    return (
        <>
            <Grid item xs={12}>
                <EditUser user={createdUser} cars={createdUser.cars} onChange={onChange} />
            </Grid>
            <Grid item xs={6}>
                <Button onClick={() => createUser(createdUser)}>Create</Button>
            </Grid>
        </>
    );
});