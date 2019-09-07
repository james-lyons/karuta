import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import DeckBuilder from '../../components/Deck/DeckBuilder/DeckBuilder';
import DeckBoard from '../../components/Deck/DeckBoard/DeckBoard';
import './DeckContainer.css';

class DeckContainer extends React.Component {
    state = {
        title: "",
        description: "",
        cards: [],
        deck_id: "",
        card_text: "",
        decks: [],
        deck_cards: [],
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onDeckSubmit = (event) => {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const cards = this.state.cards
        axios.post(`${API_URL}/deck`, {title, description, cards}, {withCredentials: true})
            .then((res)=>{
                this.setState({
                    deck_id: res.data.data._id
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    onCardSubmit = (event) => {
        event.preventDefault();
        const currentUser = localStorage.getItem('uid');
        const card_text = this.state.card_text;
        axios.post(`${ API_URL }/deck/${ this.state.deck_id }/card`, { card_text: card_text }, { withCredentials: true })
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response));
        axios.get(`${ API_URL }/user/${ currentUser }/deck/${ this.state.deck_id }/card`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    deck_cards: res.data.data
                });
                console.log(this.state)
            })
            .catch((err) => console.log(err.response.data))
    };

    showCards = (cards) => {
        const cardArr = cards.map((card) => <div className="deck-cards">
                                <h1 className="deck-card-text-h1">{card.card_text}</h1>
                            </div>
        );
        return cardArr
    };

    render() {

        return (
            <>
                <div className="deck-container-div">
                    <div className="deck-builder-div">
                        <DeckBuilder 
                            currentUser = { this.props.currentUser }
                            onInputChange = { this.onInputChange }
                            onDeckSubmit = { this.onDeckSubmit }
                            onCardSubmit = { this.onCardSubmit }
                            title = { this.state.title }
                            description = { this.state.description }
                            card_text = { this.state.card_text }/>
                    </div>
                    <div className="deck-board-div">
                        <DeckBoard
                            showCards = { this.showCards }
                            deck_id = { this.state.deck_id }
                            decks = { this.state.decks }
                            deck_cards = { this.state.deck_cards }
                            title = { this.state.title }
                            description = { this.state.description }
                            deck_Cards = { this.state.deck_cards }
                        />
                    </div>
                </div>
            </>
        );
    };
};

export default DeckContainer;