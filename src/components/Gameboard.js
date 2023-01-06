import React, { useState } from "react";
import Card from "./Card.js";
import useGetCards from "../hooks/useGetCards";

const Gameboard = props => {
    const path = useGetCards();
    console.log(path);
    
    return (
        <div id="gameboard">
            <Card img={path[1]} />
        </div>
    );
}

export default Gameboard;