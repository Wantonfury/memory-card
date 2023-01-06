import React, { useState } from "react";
import './css/Content.css';
import Gameboard from "./Gameboard";
import useGetCards from "../hooks/useGetCards";
import useCards from "../hooks/useCards";
import uniqid from "uniqid";
import Scoreboard from "./Scoreboard";

const Content = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [gameKey, setGameKey] = useState(uniqid()); // a simple var used to rerender Gameboard
    const maxCards = useGetCards().length;
    
    const gameOver = (state) => {
        console.log(state);
        setGameKey(uniqid());
        
        if (state === 'victory') {
            setLevel(level + 1);
            if (level > maxCards) setLevel(maxCards);
            
            setScore(score + 1);
            if (bestScore < score) setBestScore(score);
        } else {
            setLevel(1);
            
            if (bestScore < score) setBestScore(score);
            setScore(0);
        }
    }
    
    return (
        <div id="content">
            <Scoreboard score={score} bestScore={bestScore} />
            <Gameboard key={gameKey} level={level} gameOver={gameOver} />
        </div>
    );
}

export default Content;