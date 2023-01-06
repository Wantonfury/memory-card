import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import useGetCards from "../hooks/useGetCards";
import useCards from "../hooks/useCards";
import useKnownCards from "../hooks/useKnownCards.js";
import './css/Gameboard.css';

let generated = false;

const Gameboard = props => {
    const [cards, generateCards, shuffleCards] = useCards();
    const [addKnownCard, hasKnownCard, resetKnownCards, knowsAllCards] = useKnownCards();
    
    const activateCard = (img) => {
        if (knowsAllCards(cards.length - 1)) {
            resetKnownCards();
            props.gameOver('victory');
            return;
        }
        
        if (hasKnownCard(img)) {
            resetKnownCards();
            props.gameOver('loss');
            return;
        }
        
        addKnownCard(img);
        shuffleCards();
    }
    
    useEffect(() => {
        generateCards(2 + props.level*2);
    }, [props.level]);
    
    return (
        <div id="gameboard">
            {cards.map((card, index) => {
                return <Card key={index} img={card} activate={() => { activateCard(card) }} />
            })}
            
        </div>
    );
}

export default Gameboard;