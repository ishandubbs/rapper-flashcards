import React from 'react';
import FLASHCARDS from './Flashcards';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='app-container'>
        <h1>Guess the rapper!</h1>
        <h2>Use their real name to guess who the rapper is!</h2>
        <FLASHCARDS />
      </div>
    </div>
  );
};

export default App