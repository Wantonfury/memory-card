import { useState } from "react";
import useGetCards from "../hooks/useGetCards";

const useCards = () => {
    const [cards, setCards] = useState([]);
    const maxCards = useGetCards().length;
    const loadedCards = useGetCards();
    
    const generateCards = (count) => {
        let cardsNew = [];
        
        while (cardsNew.length < count && maxCards > 0) {
            const cardNumber = Math.floor(Math.random() * maxCards);
            const card = loadedCards[cardNumber];
            
            if (!cardsNew.includes(card)) cardsNew.push(card);
        }
        
        setCards(cardsNew);
    }
    
    const checkSameArrays = (a1, a2) => {
        if (a1.length !== a2.length) return false;
        
        let i = a1.length;
        while (i--) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    }
    
    const shuffleCards = () => {
        let shuffleCards = [...cards].sort(() => Math.random() - 0.5);
        
        while (checkSameArrays(shuffleCards, cards)) {
            shuffleCards.sort(() => Math.random() - 0.5);
        }
        
        setCards(shuffleCards);
    }
    
    return [cards, generateCards, shuffleCards];
}

export default useCards;