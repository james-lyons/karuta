import React from 'react';
import './DeckBoard.css'

const DeckBoard = ({ 
        onEditInputChange,
        onDeckDelete,
        onDeckEdit,
        showCards,
        description,
        title,
        edit_title,
        edit_description,
        deck_cards,
        deck_edit_display,
        showDeckEditButton,
    }) => {

    return (
        <>
            <section className="deck-board-section">
                <div className="deck-board-top-part-div">
                    <h1 className="deck-board-h1">Title: { title }</h1>
                    <h1 className="deck-board-h1">Description: { description }</h1>
                    <div className="deck-board-btns-div">
                        <button onClick={ showDeckEditButton }
                            className="deck-board-btn">Edit Deck
                        </button>
                        <button onClick={ onDeckDelete }
                            className="deck-board-btn">Delete Deck
                        </button>
                    </div>
                </div>
                <div className="edit-deck-form-div" style={{ display: deck_edit_display }}>
                    <form className="deck-form" onSubmit={ onDeckEdit }>
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="edit_title"
                            name="edit_title"
                            placeholder="Rap Deck"
                            value={ edit_title }
                        />
                        <br />
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="edit_description"
                            name="edit_description"
                            placeholder="This is my rap deck..."
                            value={ edit_description }
                        />
                        <br />
                        <button type="submit" id="edit-deck"
                            className="deck-btn">Edit Deck
                        </button>
                    </form>
                </div>
                <div className="deck-board-container-div">
                    <div className="deck-board-div">
                        { deck_cards && showCards(deck_cards) }
                    </div>
                </div>
            </section>
        </>
    );
};

export default DeckBoard;