import React, { useEffect, useState } from "react";
import './css/Content.css';
import Gameboard from "./Gameboard";
import useGetCards from "../hooks/useGetCards";
import useCards from "../hooks/useCards";
import uniqid from "uniqid";
import Scoreboard from "./Scoreboard";
import GameOver from "./GameOver";

const Content = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [level, setLevel] = useState(4);
    const [isOver, setIsOver] = useState(false);
    const [bestScoreUpdated, setBestScoreUpdated] = useState(false);
    const maxCards = useGetCards().length;
    
    useEffect(() => {
        if (bestScore < score) {
            setBestScore(score);
            setBestScoreUpdated(true);
        }
    }, [score]);
    
    const gameOver = (state) => {
        if (state === 'victory') {
            setScore(score + 1);
            
            setLevel(level + 2);
            if (level > maxCards) setLevel(maxCards);
            
            if (bestScore < score) {
                setBestScore(score);
                setBestScoreUpdated(true);
            }
        } else {
            setIsOver(true);
            setLevel(4);
        }
    }
    
    const restart = () => {
        setIsOver(false);
        setBestScoreUpdated(false);
        setScore(0);
    }
    
    const render = () => {
        if (isOver) {
            return (
                <GameOver restart={restart} bestScore={bestScore} bestScoreUpdated={bestScoreUpdated} />
            );
        }
        
        return (
            <>
                <Scoreboard score={score} bestScore={bestScore} />
                <Gameboard level={level} gameOver={gameOver} />
            </>
        );
    }
    
    return (
        <div id="content">
            {render()}
        </div>
    );
}

export default Content;