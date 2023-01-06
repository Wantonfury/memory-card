import React from "react";
import './css/Card.css';

const Card = props => {
    return (
        <div className="card">
            <img src={props.img} />
        </div>
    );
}

export default Card;