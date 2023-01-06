import React, { useState } from "react";
import Card from "./Card.js";
import useGenerateCards from "../hooks/useGenerateCards";

const Gameboard = props => {
    const path = useGenerateCards();
    console.log(path);
    
    return (
        <div id="gameboard">
            <Card img={path[1]} />
        </div>
    );
}

export default Gameboard;