import { Route, Switch } from 'react-router-dom';
import { UserContainer } from './User/UserContainer';
import { UsersContainer } from './UsersContainer';

export function UsersRouter() {
    return (
        <Switch>
            <Route exact path='/users' component={UsersContainer} />
            <Route path='/users/:id' component={UserContainer} />
        </Switch>
    );
}
