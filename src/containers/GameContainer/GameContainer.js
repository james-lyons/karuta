import React from 'react';
import GameBoard from '../../components/Game/GameBoard/GameBoard';
import ScoreBoard from '../../components/Game/ScoreBoard/ScoreBoard';

class GameContainer extends React.Component {
    state = {

    };

    render() {
        return (
            <>
                <ScoreBoard />
                <GameBoard />
            </>
        );
    };
};

export default GameContainer;