import React from 'react';

const GameCards = ({ shuffled_deck, clickedCard }) => {

    const showCards = (shuffled_deck) => {
        const cardArr = shuffled_deck.map((card) =>
                        <div 
                            id={ card._id }
                            className="play-game-cards"
                            onClick={ ()=> clickedCard(card) }
                            style={{ visibility: card.visibility }}>
                                <h1 className="deck-card-text-h1">{ card.card_text }</h1>
                        </div>
        );
        return cardArr
    };

    return (
        <>
            { shuffled_deck && showCards(shuffled_deck) }
        </>
    );
};

export default GameCards;