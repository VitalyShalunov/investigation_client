import { Grid, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
import { Dropdown } from '../../../components/Dropdown';
import { CarGetPayload, CarsContext } from '../../../store/Cars';
import { useStore } from '../../../store/helpers';
import { IDropdownItem } from '../../../interface/interface';
import { UserPostPayload } from '../../../store/Users/Users.interface';
import { Input } from '../../../styles/input';

interface IEditUser {
    user: UserPostPayload;
    cars: CarGetPayload[],
    onChange: (prop: keyof UserPostPayload, value: any) => void;
}

export const EditUser = observer(({ user, onChange }: IEditUser) => {
    const carStore = useStore(CarsContext);
    const { cars } = carStore;
    console.log('cars', cars);
    console.log('user cars', user.cars);
    
    const onChangeCar = (value: IDropdownItem[]) => {
        onChange('cars', value)
    }
    const getMapCars = (cars: CarGetPayload[]): IDropdownItem[] => cars.map(i => {
        return {
            name: `${i.manufacturer} ${i.model}`,
            id: i.id,
        }
    });
    return (
        <Grid container spacing={8} style={{ marginTop: '50px' }}>
            <Grid item xs={12} sm={6}>
                <Input
                    type="text"
                    placeholder={'login'}
                    value={user?.login || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('login', event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input
                    type="password"
                    placeholder={'password'}
                    value={user?.password || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('password', event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input
                    type="text"
                    placeholder={'last name'}
                    value={user?.lastName || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('lastName', event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input
                    type="text"
                    placeholder={'first name'}
                    value={user?.firstName || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('firstName', event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={moment(user?.dateOfBirthday).format("yyyy-MM-DD")}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('dateOfBirthday', new Date(event.target.value))}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Dropdown
                    active={getMapCars(user.cars)}
                    list={getMapCars(cars)}
                    onChange={onChangeCar} />
            </Grid>
        </Grid>
    );
});