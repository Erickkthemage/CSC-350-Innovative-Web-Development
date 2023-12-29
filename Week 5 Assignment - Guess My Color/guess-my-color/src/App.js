// Name: Erick Diaz  Date: 10/30/23

import React, { useState } from 'react';
import './App.css';

function App() {
  const colors = ["red", "blue", "green"]; // List of colors to choose from
  
  const [selectedColor, setSelectedColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === selectedColor) {
      setMessage("Correct! You guessed the color!");
      setShowImage(true);
    } else {
      setMessage("Wrong! Please try again.");
      setShowImage(false);
    }
    setInputValue("");
  };

  return (
    <div className="App">
      <h1 className="title">Color Guessing Game</h1>
        <form onSubmit={handleGuess}>
          <label htmlFor="colorInput">Guess the Color (Hint: RGB):</label>
          <input
            type="text"
            id="colorInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
        {showImage && (
          <div>
            <img className="image" src="/images/trophy.jpg" alt="Correct Guess" />
          </div>
        )
        }      
      </div>
  );
}

export default App;
