import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import DeckContainer from '../containers/DeckContainer/DeckContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import GameContainer from '../containers/GameContainer/GameContainer';

export default withRouter(({ setCurrentUser, currentUser, history }) => {
    const PrivateRoute = ({ component: Component, ...rest}) => (
        <Route {...rest} render={(props) => (
            currentUser 
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <PrivateRoute path='/deck' component={ DeckContainer } />
            <PrivateRoute path='/profile' component={ ProfileContainer} />
            <Route path='/game' component={ GameContainer} />
        </Switch>
    );
});