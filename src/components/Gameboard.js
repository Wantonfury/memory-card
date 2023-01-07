import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import useGetCards from "../hooks/useGetCards";
import useCards from "../hooks/useCards";
import useKnownCards from "../hooks/useKnownCards.js";
import './css/Gameboard.css';
import uniqid from "uniqid";

const Gameboard = props => {
    const [cards, generateCards, shuffleCards] = useCards();
    const [addKnownCard, hasKnownCard, resetKnownCards, knowsAllCards] = useKnownCards();
    const [renderKey, setRenderKey] = useState(uniqid());
    let loadedCards = 0;
    
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
    
    const cardLoaded = () => {
        loadedCards += 1;
        if (loadedCards === props.level) {
            
        }
    }
    
    useEffect(() => {
        generateCards(props.level);
    }, [props.level]);
    
    /*useEffect(() => {
        setRenderKey(uniqid());
    }, [props.level]);*/
    
    return (
        <div id="gameboard" className="gameboard-fade" key={renderKey}>
            {cards.map((card, index) => {
                return <Card key={uniqid()} img={card} activate={() => { activateCard(card) }} level={props.level} onLoad={cardLoaded} />
            })}
            
        </div>
    );
}

export default Gameboard;