import React, { useEffect, useState } from "react";

const useGetCards = () => {
    const [cards, setCards] = useState('');
    
    useEffect(() => {
        const path = require.context('../assets/img/cards', false, /\.svg$/);
        setCards(path.keys().map(path));
    }, []);
    
    
    return cards;
}

export default useGetCards;