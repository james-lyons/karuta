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
        card_text: "",
        edit_title: "",
        edit_description: "",
        edit_card_text: "",
        deck_id: "",
        card_id: "",
        cards: [],
        decks: [],
        deck_cards: [],
        deck_edit_display: 'none',
        card_edit_display: 'none',
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onEditInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onDeckSubmit = (event) => {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const cards = this.state.cards;
        axios.post(`${API_URL}/deck`, { title, description, cards }, {withCredentials: true})
            .then((res) => {
                this.setState({
                    deck_id: res.data.data._id,
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    onDeckEdit = (event) => {
        event.preventDefault();
        const edit_title = this.state.edit_title;
        const edit_description = this.state.edit_description;
        const cards = this.state.deck_cards
        axios.put(`${ API_URL }/deck/${ this.state.deck_id }`,
            { title: edit_title, description: edit_description, cards: cards },
            { withCredentials: true })
                .then((res) => {
                    console.log(res)
                    this.setState({
                        edit_title: edit_title,
                        edit_description: edit_description,
                        cards: cards
                    });
                })
                .catch((err) => console.log(err.response))
    };

    onDeckDelete = () => {
        const deck_id = this.state.deck_id;
        axios.delete(`${ API_URL }/deck/${ deck_id }`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    title: '',
                    description: ''
                });
            })
            .catch((err) => console.log(err.response));
    };

    onCardSubmit = (event) => {
        event.preventDefault();
        const card_text = this.state.card_text;
        axios.post(`${ API_URL }/deck/${ this.state.deck_id }/card`,
            { card_text: card_text },
            { withCredentials: true })
                .then((res) => {
                    this.setState({
                        card_id: res.data.data._id,
                    });   
                    axios.get(`${ API_URL }/deck/${ this.state.deck_id }/card`,
                    { withCredentials: true })
                        .then((res) => {
                            this.setState({
                                deck_cards: res.data.data,
                            });
                        })
                        .catch((err) => console.log(err.response.data))
                })
                .catch((err) => console.log(err.response));
    };

    onCardEdit = (event) => {
        event.preventDefault();
        const edit_card_text = this.state.edit_card_text;
        const deck_id = this.state.deck_id;
        const card_id = event.target.id;
        axios.put(`${API_URL}/deck/${deck_id}/card/${card_id}`,
            { card_text: edit_card_text },
            { withCredentials: true })
                .then((res) => {
                    console.log(res);
                    this.setState({
                        edit_card_text: edit_card_text
                    });
                    axios.get(`${ API_URL }/deck/${ this.state.deck_id }/card`,
                        { withCredentials: true })
                            .then((res) => {
                                this.setState({
                                    deck_cards: res.data.data,
                                });
                            })
                            .catch((err) => console.log(err.response.data))
                })
                .catch((err) => console.log(err.response));
    };

    onCardDelete = (card) => {
        const deck_id = this.state.deck_id;
        axios.delete(`${API_URL}/deck/${deck_id}/card/${card._id}`,
            { withCredentials: true })
                .then((res) => {
                    axios.get(`${ API_URL }/deck/${ this.state.deck_id }/card`,
                        { withCredentials: true })
                            .then((res) => {
                                this.setState({
                                    deck_cards: res.data.data,
                                });
                            })
                            .catch((err) => console.log(err.response.data))
                })
                .catch((err) => console.log(err.response));
    };

    showDeckEditButton = () => {
        this.state.deck_edit_display === "none" ?
        this.setState({ deck_edit_display: '' }) :
        this.setState({ deck_edit_display:'none' })
    };
    
    showCardEditButton = () => {
        this.state.card_edit_display === "none" ?
        this.setState({ card_edit_display: '' }) :
        this.setState({ card_edit_display:'none' })
    };

    showCards = (cards) => {
        const cardArr = cards.map((card) =>
                            <div id={card._id} className="deck-cards">
                                <h1 className="deck-card-text-h1">{card.card_text}</h1>
                                <div className="edit-card-form-div"
                                    style={{ display: this.state.card_edit_display }}>
                                    <form id={ card._id } className="card-edit-form"
                                        onSubmit={ this.onCardEdit }>
                                        <input 
                                            onChange={ this.onEditInputChange }
                                            type="text"
                                            id="edit_card_text"
                                            name="edit_card_text"
                                            placeholder="Rap Deck"
                                            value={ this.state.edit_card_text }
                                        />
                                        <button type="submit"
                                            className="edit-card-btn">
                                                edit
                                        </button>
                                    </form>
                                </div>
                                <button onClick={ this.showCardEditButton }>
                                    Edit
                                </button>
                                <button onClick={ () => this.onCardDelete(card) }>
                                    Delete
                                </button>
                            </div>
        );
        return cardArr;
    };

    render() {

        return (
            <>
                <div className="deck-container-div">
                    <div className="deck-builder-div">
                        <DeckBuilder 
                            title = { this.state.title }
                            description = { this.state.description }
                            card_text = { this.state.card_text }
                            onInputChange = { this.onInputChange }
                            onDeckSubmit = { this.onDeckSubmit }
                            onCardSubmit = { this.onCardSubmit }
                        />
                    </div>
                    <div className="deck-board-div">
                        <DeckBoard
                            title = { this.state.title }
                            edit_title = { this.state.edit_title }
                            description = { this.state.description }
                            edit_description = { this.state.edit_description }
                            showCards = { this.showCards }
                            onDeckDelete = { this.onDeckDelete }
                            onDeckEdit = { this.onDeckEdit }
                            deck_cards = { this.state.deck_cards }
                            onEditInputChange = { this.onEditInputChange }
                            showDeckEditButton = { this.showDeckEditButton }
                            deck_edit_display = { this.state.deck_edit_display }
                        />
                    </div>
                </div>
            </>
        );
    };
};

export default DeckContainer;