import React from "react";
import './css/GameOver.css';

const GameOver = props => {
    let bestScoreText = (<span>Your best score is: {props.bestScore}.</span>);
    if (props.bestScoreUpdated) {
        bestScoreText = (
            <span>Congratulations! New best score achieved: {props.bestScore}.</span>
        );
    }
    
    return (
        <div id="gameover">
            <h4>Game Over!</h4>
            {bestScoreText}
            <button onClick={props.restart}>Start a new game!</button>
        </div>
    );
}

export default GameOver;