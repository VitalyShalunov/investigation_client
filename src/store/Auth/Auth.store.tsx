import { sha3_512 } from 'js-sha3';
import { action, makeObservable } from 'mobx';
import { postFunctionApi } from '../helpers';

import Cookies from 'universal-cookie';
import { UserAuthState } from '../../constants/enum';
import { IUser } from '../Users/Users.interface';

interface LoginAnswer {
    access: string,
    refresh: string,
    user: any,
}

export class AuthStore {
    typeAuth: UserAuthState = UserAuthState.NOT_AUTHORIZED;
    user: IUser | null = null;

    constructor() {
        makeObservable(this, {
            login: action.bound
        });
        this.isAuthorization();
    }

    public login = async (login: string, password: string) => {
        try {
            this.typeAuth = UserAuthState.AUTHORIZING;
            const {
                access,
                refresh,
                user,
             } = await postFunctionApi<LoginAnswer>('/auth/login', {
                login: sha3_512(login),
                password: sha3_512(password),
            });

            const cookies = new Cookies();
            cookies.set('access_token', access, { path: '/' });
            cookies.set('refresh_token', refresh, { path: '/' });
            
            this.typeAuth = UserAuthState.AUTHORIZED;
            this.user = { ...user };
        } catch (error) {
            console.error('Unexpected error while login.', error);
        }
    }

    public isAuthorization = async () => {
        try {
            const isAuth = await postFunctionApi<LoginAnswer>('/auth/is-authorizations', {
                id: this.user?.id,
            });
            if (isAuth) {
                this.typeAuth = UserAuthState.AUTHORIZED;
            }
        } catch (error) {
            this.typeAuth = UserAuthState.NOT_AUTHORIZED;
        }
    }

    public logout = async () => {
        try {
            const cookies = new Cookies();
            cookies.remove('access_token');
            cookies.remove('refresh_token');

            this.typeAuth = UserAuthState.NOT_AUTHORIZED;
            this.user = null;
        } catch (error) {
            
        }
    }
}
