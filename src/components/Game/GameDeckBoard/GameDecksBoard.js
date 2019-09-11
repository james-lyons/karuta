import React from 'react';

const GameDecksBoard = ({ decks, mapper, selectDeck }) => {

    mapper = (decks) => {
        const deckArr = decks.map((deck) =>
                        <div 
                            onClick={ selectDeck }
                            id={deck._id}
                            className="game-decks-div">
                                <h1 className="game-decks-div-h1">
                                    Title: {deck.title}
                                </h1>
                                <h1 className="game-decks-div-h1">
                                    Description: {deck.description}
                                </h1>
                        </div>
        );
        return deckArr
    };

    return (
        <>
            <section className="game-deck-section">
                <div className="game-deck-section-div" >
                    { decks && mapper(decks) }
                </div>
            </section>
        </>
    );
};

export default GameDecksBoard;