import React, { useState } from "react"
import Card from "./Card";
import "./Flashcards.css"

const FlashcardList = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }

    return (
        <div className="flashcard-container">
            {cards.length > 0 && (
                <Card
                question = {cards[currentIndex].question}
                answer = {cards[currentIndex].answer}
                img = {cards[currentIndex].img}
                difficulty = {cards[currentIndex].difficulty}
                isFlipped = {isFlipped}
                setIsFlipped = {setIsFlipped}
                />
            )}
            <div className="flashcard-buttons">
                <button onClick = {handleNext} disabled = {cards.length <= 1}>Next</button>
            </div>
        </div>
    );
}

export default FlashcardList