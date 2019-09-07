import React from 'react';
import './DeckBoard.css'

const DeckBoard = ({ showCards, deck_cards, title, description }) => {
    return (
        <>
            <div className="deckboard-div">
                <h1 className="deckboard-h1">Your Deck</h1>
                <h1 className="deckboard-h1">Title: { title }</h1>
                <h1 className="deckboard-h1">Description: { description }</h1>
                {deck_cards && showCards(deck_cards)}
            </div>
        </>
    );
};

export default DeckBoard;