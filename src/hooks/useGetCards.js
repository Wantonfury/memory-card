import {  useState } from "react";

const useGetCards = () => {
    const [cards, setCards] = useState('');
    
    if (cards === '') {
        const path = require.context('../assets/img/cards', false, /\.svg$/);
        setCards(path.keys().map(path));
    }
    
    return cards;
}

export default useGetCards;