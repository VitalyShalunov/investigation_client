import { observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components';
import { AboutContainer } from '../About';
import { CarsContainer } from '../Cars';
import { NotFound } from '../NotFound/NotFound';
import { UsersRouter } from '../Users/UsersRouter';

const MainAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
//   display: flex;
//   flex-direction: column;
`;

function App() {
    return (
        <MainAppContainer>
            <BrowserRouter>
                <Switch>
                    <Redirect path="/" exact to="/users/" />
                    <Route path="/users/" component={UsersRouter} />
                    <Route path="/about/" component={AboutContainer} />
                    <Route path="/cars/" component={CarsContainer} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </MainAppContainer>
    );
}

export default observer(App);
