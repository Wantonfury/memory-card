import React, { useEffect, useState } from "react";
import './css/Card.css';

const Card = props => {
    const [activated, setActivated] = useState(false);
    
    return (
        <div 
            className={"card" + (activated ? " activated" : "")} 
            onClick={() => { setActivated(true) }}
            onAnimationEnd={(e) => {
                if (e.animationName === 'card-spin') {
                    setActivated(false);
                    props.activate();
                }
            }}
            onLoad={() => {
                props.onLoad();
            }}
            >
            <img src={props.img} />
        </div>
    );
}

export default Card;