import React, { useState } from "react";
import Card from "./Card.js";
import useGetCards from "../hooks/useGetCards";
import './css/Gameboard.css';

const Gameboard = props => {
    const cards = useGetCards();
    
    return (
        <div id="gameboard">
            {[...Array(props.level).keys()].map((v, i) => {
                return <Card img={cards[0]} />
            })}
            
        </div>
    );
}

export default Gameboard;