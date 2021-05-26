import { observer } from 'mobx-react';
import { useStore } from '../../../store/helpers';
import { UsersContext } from '../../../store/Users';
import { DefinedUser } from '../../../styles/Users';
import { Input } from '../../../styles/input';
import Grid from '@material-ui/core/Grid';
import { EditUser } from '../User/EditUser';
import { CarGetPayload } from '../../../store/Cars';
import { UserPostPayload } from '../../../store/Users/Users.interface';

export const User = observer(() => {
    const userStore = useStore(UsersContext);
    const { user, editUser, changeProps } = userStore;

    const onChange = (prop: keyof UserPostPayload, value: any) => {
        console.log('keyof', prop);
        changeProps(prop, value, false);
    };

    const onCancel = () => {
        window.location.href = window.location.href.slice(0, window.location.href.indexOf('users/') + 'users/'.length);
    }

    const onEdit = () => {
        if (user) {
            editUser(user);
        }
    }
    {console.log(user)}
    return (
        <DefinedUser>
            {user ? (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <EditUser cars={user.cars} user={user} onChange={onChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type="button"
                            value="Cancel"
                            onClick={onCancel}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type="button"
                            value='Edit'
                            onClick={(event: React.MouseEvent<HTMLInputElement>) => onEdit()}
                        />
                    </Grid>
                </Grid>
            ) : 'user not found'}
            {console.log('lastName', user?.lastName)}
        </DefinedUser>
    );
});

