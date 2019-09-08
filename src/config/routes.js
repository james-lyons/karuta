import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import DeckContainer from '../containers/DeckContainer/DeckContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import GameContainer from '../containers/GameContainer/GameContainer';

export default withRouter(({ 
        setCurrentUser,
        currentUser,
        history,
        onEditInputChange,
        onDeckEdit,
        onDeckDelete,
        onCardEdit,
        onCardDelete,
        showDeckEditButton,
        showCardEditButton,
        edit_title,
        edit_description,
        edit_card_text,
        deck_cards,
        deck_id,
        card_id,
        deck_edit_display,
        card_edit_display,
    }) => {
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
            <PrivateRoute path='/deck' component = { DeckContainer } />
            <PrivateRoute path='/profile' component={ ProfileContainer} />
            <Route path='/game' component = { GameContainer}
                />
        </Switch>
    );
});