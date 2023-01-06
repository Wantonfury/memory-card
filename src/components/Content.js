import React from "react";
import './css/Content.css';
import Gameboard from "./Gameboard";

const Content = () => {
    return (
        <div id="content">
            <Gameboard level={50} />
        </div>
    );
}

export default Content;