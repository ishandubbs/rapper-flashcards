import React, { useState } from "react"
import Card from "./Card";
import "./Flashcards.css"

const FlashcardList = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [masteredCards, setMasteredCards] = useState([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }

    const handleMastered = () => {
        const masteredCard = cards[currentIndex];
        setMasteredCards([...masteredCards, masteredCard])
        setStreak(streak + 1)
        if (streak + 1 > maxStreak) setMaxStreak(streak + 1);

        const newDeck = cards.filter((_, index))
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