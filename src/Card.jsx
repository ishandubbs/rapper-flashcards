import React, { useState } from "react";
import './Card.css';

const Card = ({ question, answer, img, isFlipped, setIsFlipped, difficulty }) => {
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-container">
            <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                <div className="card-inner">
                    <div className={`card-front ${difficulty || 'default'}`}>
                        <p>{question}</p>
                    </div>
                    <div className={`card-back ${difficulty || 'default'}`}>
                        <p>{answer}</p>
                        <img src = {img} alt = "Answer" className="card-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card