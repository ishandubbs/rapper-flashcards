import React, { useState } from "react";
import './Card.css';

const Card = ({ question, userGuess, setUserGuess, handleSubmit, answer, img, difficulty, onNext, onPrevious, onMaster, streak, maxStreak, isAnswerCorrect }) => {
    const handleInputChange = (event) => {
        setUserGuess(event.target.value);
      };
    
      return (
        <div className="card">
          <img src={img} alt={question} className="card-img" />
          <div className="card-info">
            <h2 className="card-question">{question}</h2>
            <p className="card-difficulty">Difficulty: {difficulty}</p>
    
            <input
              type="text"
              value={userGuess}
              onChange={handleInputChange}
              className="card-input"
              placeholder="Enter your guess"
            />
            <button onClick={handleSubmit} className="submit-btn">
              Submit
            </button>
    
            {isAnswerCorrect !== null && (
              <div className="answer-feedback">
                {isAnswerCorrect ? (
                  <p className="correct-feedback">Correct!</p>
                ) : (
                  <p className="incorrect-feedback">Incorrect! The correct answer is: {answer}</p>
                )}
              </div>
            )}
    
            <div className="card-actions">
              <button onClick={onPrevious} className="prev-btn">Previous</button>
              <button onClick={onNext} className="next-btn">Next</button>
              <button onClick={onMaster} className="master-btn">Mark as Mastered</button>
            </div>
    
            <div className="streak-info">
              <p>Current Streak: {streak}</p>
              <p>Max Streak: {maxStreak}</p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Card;