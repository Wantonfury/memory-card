import { useState } from "react";

const useKnownCards = () => {
    const [cards, setCards] = useState([]);
    
    const hasKnownCard = card => {
        if (cards.includes(card)) return true;
    }
    
    const addKnownCard = card => {
        let cardsNew = cards;
        cardsNew.push(card);
        
        setCards(cardsNew);
    }
    
    const resetKnownCards = () => {
        setCards([]);
    }
    
    const knowsAllCards = (count) => {
        return cards.length === count;
    }
    
    return [addKnownCard, hasKnownCard, resetKnownCards, knowsAllCards];
}

export default useKnownCards;