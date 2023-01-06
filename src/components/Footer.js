import React from "react";
import GithubIcon from '../assets/img/github.png';
import './css/Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <span>Made by Wantonfury</span>
            <a href="https://github.com/Wantonfury/memory-card" target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} alt="Github link" />
            </a>
        </div>
    );
}

export default Footer;