import React from 'react';
import GameCards from '../../Card/GameCards';
import './GameBoard.css';

const GameBoard = ({ handleGameStart, shuffled_deck, clickedCard }) => {
    return (
        <>
            <div className='game-board-div'>
                <div className="game-board-game-area-div">
                    <div className="play-game-top-div">
                        <button className="start-game-btn"
                            onClick={ handleGameStart }>
                            Start Game
                        </button>
                    </div>
                    <div className="play-game-board-area-div">
                        <GameCards
                            shuffled_deck={ shuffled_deck }
                            clickedCard={ clickedCard }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameBoard;