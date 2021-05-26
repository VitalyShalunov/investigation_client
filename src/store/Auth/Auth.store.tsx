import { sha3_512 } from 'js-sha3';
import { action, makeObservable } from 'mobx';
import { postFunctionApi } from '../helpers';

import Cookies from 'universal-cookie';
import { UserAuthState } from '../../constants/enum';

interface LoginAnswer {
    access: string,
    refresh: string,
}

export class AuthStore {
    typeAuth: UserAuthState = UserAuthState.NOT_AUTHORIZED;
    constructor() {
        makeObservable(this, {
            login: action.bound
        });
    }

    public login = async (login: string, password: string) => {
        try {
            this.typeAuth = UserAuthState.AUTHORIZING;
            const {
                access,
                refresh,
             } = await postFunctionApi<LoginAnswer>('/auth/login', {
                login: sha3_512(login),
                password: sha3_512(password),
            });

            const cookies = new Cookies();
            cookies.set('access_token', access, { path: '/' });
            cookies.set('refresh_token', refresh, { path: '/' });
            
            this.typeAuth = UserAuthState.AUTHORIZED;
        } catch (error) {
            console.error('Unexpected error while login.', error);
        }
    }

    public isAuthorization = async () => {
        try {
            const isAuth = await postFunctionApi<LoginAnswer>('/auth/is-authorization', {});
        } catch (error) {
            
        }
    }

    public logout = async () => {
        try {
            const cookies = new Cookies();
            cookies.remove('access_token');
            cookies.remove('refresh_token');

            this.typeAuth = UserAuthState.NOT_AUTHORIZED;
        } catch (error) {
            
        }
    }
}
