import React, { useState } from "react";
import './Card.css';

function Card({ question, answer, img, difficulty, onNext, onPrevious, onMaster }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('')

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setFeedback('');
    };

    const handleSubmit = () => {
        const normalizedInput = userInput.trim().toLowerCase();
        const normalizedAnswer = userInput.trim().toLowerCase();

        if (normalizedInput === normalizedAnswer) {
            setFeedback('✅ Correct!');
        } else {
            setFeedback('❌ Incorrect, try again!')
        }
    }

    return (
        <div className="card-container">
            <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                <div className="card-inner">
                    { /* FRONT */ }
                    <div className={`card-front ${difficulty || 'default'}`}>
                        <p>{question}</p>
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Your answer..."
                        />
                        <button onClick={handleSubmit}>Submit</button>
                        <p className="feedback">{feedback}</p>
                        <button onClick={handleFlip}>Flip</button>
                    </div>
                    { /* BACK */ }
                    <div className={`card-back ${difficulty || 'default'}`}>
                        <p>{answer}</p>
                        {img && <img src = {img} alt = "Answer" className="card-img"/>}
                        <button onClick={handleFlip}>Flip</button>
                        <button onClick={onMaster}></button>
                        <button onClick={onPrevious}></button>
                        <button onClick={onNext}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card