import React, { useState } from "react";
import { observer } from "mobx-react";
import { LoginButton, LoginContainer, LoginInput, PasswordInput } from "../../styles/Login";
import { useStore } from "../../store/helpers";
import { AuthContext } from "../../store/Auth";

const Login = observer(({ style }: { style: React.CSSProperties }) => {
    const store = useStore(AuthContext);
    const {
        login: loginFunc,
    } = store;

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <LoginContainer id={'loginContainer'} style={style}>
            <LoginInput
                placeholder='enter login'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
            />
            <PasswordInput
                type='password'
                placeholder='enter password'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            />
            <LoginButton
                onClick={() => loginFunc(login, password)}
            />
        </LoginContainer>
    )
});

export default Login;