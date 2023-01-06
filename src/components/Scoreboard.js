import React from "react";

const Scoreboard = props => {
    return (
        <div id="scoreboard">
            <span>Score: {props.score}</span>
            <span>Best score: {props.bestScore}</span>
        </div>
    );
}

export default Scoreboard;