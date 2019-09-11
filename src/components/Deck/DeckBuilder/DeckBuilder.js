import React from 'react';
import CardBuilder from '../../Card/CardBuilder/CardBuilder';
import './DeckBuilder.css';
import '../../Card/CardBuilder/CardBuilder.css';

const DeckBuilder = (
    {
        onInputChange,
        onDeckSubmit,
        onCardSubmit,
        title,
        description,
        card_text
    }) => {
        
    return (
        <>
            <section className="deck-builder-section">
                <div className="deck-builder">
                    <form className="deck-form" onSubmit={ onDeckSubmit }>
                        <input 
                            onChange={ onInputChange }
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Rap Deck"
                            value={ title }
                        />
                        <br />
                        <input 
                            onChange={ onInputChange }
                            type="text"
                            id="description"
                            name="description"
                            placeholder="This is my rap deck..."
                            value={ description }
                        />
                        <br />
                        <button type="submit" id="add-deck"
                            className="deck-btn">Add Deck
                        </button>
                    </form>
                </div>
                <div>
                    <CardBuilder
                        onInputChange = { onInputChange }
                        onCardSubmit = { onCardSubmit }
                        card_text = { card_text }
                    />
                </div>
            </section>
        </>
    );
};

export default DeckBuilder;
