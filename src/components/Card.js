import React, { useState } from "react";
import './css/Card.css';

const Card = props => {
    const [animated, setAnimated] = useState(false);
    
    return (
        <div 
            className={"card" + (animated ? " activated" : "")} 
            onClick={() => { setAnimated(true) }}
            onAnimationEnd={() => { 
                setAnimated(false);
                props.activate();
            }}
            >
            <img src={props.img} />
        </div>
    );
}

export default Card;