import React from 'react';
import './ScoreBoard.css';

class Scoreboard extends React.Component {
    state = {

    };

    render() {
        return (
            <>
                <section className="scoreboard-section">
                    <div className="scoreboard-div">
                        <h1 className="scoreboard-h1">ScoreBoard</h1>
                        <h2 className="scoreboard-h2">timer: </h2>
                        <h2 className="scoreboard-h2">score: </h2>
                    </div>
                </section>
            </>
        );
    };
};

export default Scoreboard;