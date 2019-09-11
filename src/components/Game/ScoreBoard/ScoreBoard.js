import React from 'react';
import './ScoreBoard.css';

const Scoreboard = ({ timer, score, narrator_deck }) => {
    return (
        <>
            <section className="score-board-section">
                <div className="score-board-div">
                    <h1 className="score-board-h1">ScoreBoard</h1>
                    <div className="score-board-timer-and-score-area-div">
                        <h2 className="score-board-h2">timer: { timer.length }</h2>
                        <h2 className="score-board-h2">score: { score }</h2>
                    </div>
                </div>
                <div className="score-board-current-word-div">
                    <h1 className="score-board-current-word-h1">
                        { narrator_deck[0].card_text }
                    </h1>
                </div>
            </section>
        </>
    );
};

export default Scoreboard;