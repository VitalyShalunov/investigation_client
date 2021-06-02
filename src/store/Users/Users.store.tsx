import { sha3_512 } from 'js-sha3';
import { observable, action, makeObservable } from 'mobx';
import { CarGetPayload } from '../Cars';
import { deleteFunctionApi, fetchFunctionApi, postFunctionApi, putFunctionApi } from '../helpers';
import { createPayloadObject } from '../helpers/createPayloadObject';
import { IUser, UserGetPayload, UserPostPayload, UserPutPayload } from './Users.interface';

export class UsersDataStore {
    public users: IUser[] = [];
    public user: IUser | null = null;
    public state: 'loading' | 'loaded' | 'error' = 'loading';

    constructor(id?: number) {
        //makeAutoObservable(this);
        makeObservable(this, {
            users: observable,
            user: observable,
            createdUser: observable,
            state: observable,
            deleteUser: action.bound,
            editUser: action.bound,
            createUser: action.bound,
        });

        id !== undefined && !Number.isNaN(id) ? this.loadUser(id) : this.loadUsers();
    }

    private clearUser = (): UserPostPayload => {
        return {
            lastName: '',
            firstName: '',
            dateOfBirthday: new Date(),
            cars: [],
            login: '',
            password: '',
        }
    }

    public createdUser: UserPostPayload = this.clearUser();

    public changeProps = <T extends keyof UserPostPayload, P extends UserPostPayload[T] >
        (prop: T, value: P, isCreated: boolean) => {
        const editedUser = (isCreated ? this.createdUser : this.user) as UserPostPayload;
        if (editedUser && value) {
            if (prop === 'firstName' || prop === 'lastName' || 'login' || 'password') {
                editedUser[prop] = value;
            } else if (prop === 'dateOfBirthday') {
                editedUser[prop] = value;
            } else if (prop === 'cars') {
                const getCars = (cars: any): CarGetPayload[] => {
                    const editCars = editedUser ? (cars as any[]) : (cars as any[]);
                    return editCars.map((car) => {
                        return {
                            id: car.id,
                            manufacturer: (car.name as string).split(' ')[0],
                            model: (car.name as string).split(' ')[1],
                        }
                    });
                }
                console.log('added car', getCars(value));

                editedUser.cars = getCars(value);
            }
        }
    }
    private async loadUsers() {
        this.state = 'loading';

        try {
            const users = await fetchFunctionApi<UserGetPayload[]>('/users');

            if (users && Array.isArray(users)) {
                //this.users.push(...users);
                this.users = users;
                this.state = 'loaded';
                console.log('this.users', this.users);
                console.log('this.state', this.state);

            } else {
                console.error('Could not get users from the response payload.');
                this.state = 'error';
            }
        } catch (error) {
            console.log('error');
            console.error('Unexpected error has occurred when loading users.', error);
            this.state = 'error';
        }
    }

    private async loadUser(id: number) {
        this.state = 'loading';

        try {
            console.log('before request');
            const user = await fetchFunctionApi<UserGetPayload>(`/users/${id}`);

            if (user && typeof user === 'object') {
                this.user = user;
                console.log('this.user', this.user);

                this.state = 'loaded';
            } else {
                console.error(`Could not get user with id ${id}  from the response payload.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error');
            console.error('Unexpected error has occurred when loading user.', error);
            this.state = 'error';
        }
    }

    public async deleteUser(id: number) {
        try {
            const user = await deleteFunctionApi<UserGetPayload>(`/users/${id}`);

            if (user && typeof user === 'object') {
                this.users.splice(this.users.findIndex((u) => u.id === id), 1);
            } else {
                console.error(`Could not delete user with id ${id}.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error');
            console.error(`Unexpected error has occurred when deleting user with id=${id}.`, error);
            this.state = 'error';
        }
    }

    public async editUser(updatedUser: IUser) {
        try {
            const userForRequest: IUser = createPayloadObject<IUser>(updatedUser);

            const user = await putFunctionApi<UserPutPayload>(`/users/${userForRequest.id}`, userForRequest);

            if (user && typeof user === 'object') {
                this.createdUser = user;
            } else {
                console.error(`Could not update user with id ${updatedUser.id}.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error', error);
            console.error(`Unexpected error has occurred when editing user with id=${updatedUser.id}.`, error);
            this.state = 'error';
        }
    }

    public async createUser(createdUser: UserPostPayload) {
        try {
            const userForRequest: IUser = createPayloadObject<UserPostPayload>(createdUser) as IUser;
            console.log('userForRequest', userForRequest);

            const user = await postFunctionApi<UserGetPayload>(`/users`, {
                ...userForRequest,
                login: sha3_512(userForRequest.login),
                password: sha3_512(userForRequest.password)
            });

            if (user && typeof user === 'object') {
                console.log('user', user);

                this.users.push(user);
                this.createdUser = this.clearUser();
            } else {
                console.error(`Could not create user with.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error', error);
            console.error(`Unexpected error has occurred when creating user.`, error);
            this.state = 'error';
        }
    }
}
