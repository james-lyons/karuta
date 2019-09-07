import React from 'react';
import './CardBuilder.css'

const CardBuilder = ({ onInputChange, onCardSubmit, card_text }) => {
    return (
        <>
            <div className="card-builder-div">
                <form className="card-form" onSubmit={ onCardSubmit }>
                    <input 
                        onChange={ onInputChange }
                        type="text"
                        id="card_text"
                        name="card_text"
                        placeholder="In West Philadelphia, Born and Raised, on playgrounds is where I spent most of my days..."
                        value={ card_text }
                    />
                    <br />
                    <button type="submit" id="add-card" className="card-btn">Add Card</button>
                </form>
                <div className="example-card">
                    <h1 className="card-h1"> { card_text }</h1>
                </div>
            </div>
        </>
    );
};

export default CardBuilder;