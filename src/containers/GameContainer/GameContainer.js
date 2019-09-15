import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import GameBoard from '../../components/Game/GameBoard/GameBoard';
import ScoreBoard from '../../components/Game/ScoreBoard/ScoreBoard';
import GameDecksBoard from '../../components/Game/GameDeckBoard/GameDecksBoard';

class GameContainer extends React.Component {
    state = {
        easy_timer: [3,2,1],
        timer: [5,4,3,2,1],
        hard_timer: [8,7,6,5,4,3,2,1],
        score: 0,
        decks: [],
        shuffled_deck: [],
        narrator_deck: [{card_text: "Play a game!"}],
        deck_id: "",
    };

    componentDidMount = () => {
        axios.get(`${API_URL}/deck`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    decks: res.data.data
                });
            })
            .catch((err) => console.log(err))
    };

// Everything beyond this point is nonsense, don't say I didn't warn you...
// #PureJankieness

    selectDeck = (event) => {
        this.setState({
            deck_id: event.target.id
        });
        this.state.activated === "not-active" ?
        this.setState({activated: "active"}) :
        this.setState({activated: "not-active"})
    };

    timer = () => {
        if (this.state.narrator_deck[0].card_text === "Lets play a game...") {
            return;
        };
        let newTimer = [...this.state.timer];
        if (newTimer.length === 0 ) {
            newTimer = [5,4,3,2,1];
            this.setState({ timer: newTimer});
        };
        setTimeout(() => {
            if (newTimer.length > 0) {
                newTimer.shift();
                this.setState({timer: newTimer});
                this.timer();
            };
        }, 1000);
    };

    shuffleDeck = (arr1) => {
        var ctr = arr1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr1[ctr];
            arr1[ctr] = arr1[index];
            arr1[index] = temp;
        };
        return arr1;
    };

    clickedCard = (card) => {
        let score = this.state.score;
        if (card._id === this.state.narrator_deck[0]._id ) {
            score = score + 1;
            this.setState({ 
                score: score,
            });
            card.visibility = "hidden"
        };
    };

    playGame = (narrator_deck) => {
        this.setState({
            narrator_deck: narrator_deck
        });
        setTimeout(() => {
            if (narrator_deck.length === 1 ) {
                this.setState({narrator_deck: [{card_text: "Lets play a game..."}] })
                return;
            } else if (0 < narrator_deck.length) {
                narrator_deck.shift();
                this.playGame(narrator_deck)
            };
        }, 5000);
    };

    max18cards = (deck) => {
        if (deck.length > 18) {
            deck.pop();
            this.max18cards(deck);
        };
        return deck;
    };

    handleGameStart = () => {
        const deck_id = this.state.deck_id;
        this.setState({ score: 0})
        axios.get(`${API_URL}/deck/${deck_id}/card`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    cards: res.data.data
                });
                const narrator = this.shuffleDeck([...this.state.cards]);
                if (narrator.length > 18) {
                    this.max18cards(narrator);
                };
                this.setState({ narrator_deck: narrator });
                const shuffled_deck = this.shuffleDeck([...narrator]);
                this.setState({
                    narrator_deck: narrator,
                    shuffled_deck: shuffled_deck
                });
                this.playGame(narrator);
                this.timer();
            })
            .catch((err) => console.log(err.response))
    };

    render() {
        return (
            <>
                <div className="game-area-div">
                    <section className="game-area-section">
                        <ScoreBoard
                            timer = { this.state.timer }
                            score = { this.state.score }
                            narrator_deck = { this.state.narrator_deck }
                        />
                        <GameBoard
                            handleGameStart = { this.handleGameStart }
                            shuffled_deck = { this.state.shuffled_deck }
                            clickedCard = { this.clickedCard }
                        />
                    </section>
                    <section className="game-deck-area-section">
                        <GameDecksBoard
                            decks = { this.state.decks }
                            mapper = { this.mapper }
                            selectDeck = { this.selectDeck }
                            playGame={ this.playGame }
                        />
                    </section>
                </div>
            </>
        );
    };
};

export default GameContainer;