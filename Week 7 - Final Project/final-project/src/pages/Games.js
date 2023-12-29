// Name: Erick Diaz    Date: 11/26/23

import React, { useState } from 'react';
import gamesData from '../data/gamesData.json';

const Games = () => {

    const [newGameTitle, setNewGameTitle] = useState('');
    const [newGameDescription, setNewGameDescription] = useState('');
    const [newGameImageSrc, setNewGameImageSrc] = useState('');

    const handleAddGame = () => {
        const newGame = {
            id: gamesData.length + 1,
            title: newGameTitle,
            description: newGameDescription,
            imageSrc: newGameImageSrc || './images/default.png'
        };

        gamesData.push(newGame);

        setNewGameTitle('');
        setNewGameDescription('');
        setNewGameImageSrc('');
    };

  return (
    <div className="container mt-5">
      <h1 className="display-4">The Games That Started It All</h1>
      <section className="row">
        {gamesData.map((game) => (
            <div key={game.id} className="col-md-4 mb-4">
                <img
                src={game.imageSrc}
                alt={game.title}
                className="img-fluid"
                />
                <h2>{game.title}</h2>
                <p>{game.description}</p>
            </div>
            ))}
      </section>
      <section className="mt-5">
        <h2>Add Your Favorite Game</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="newGameTitle" className="form-label">Game Title</label>
            <input
              type="text"
              className="form-control"
              id="newGameTitle"
              value={newGameTitle}
              onChange={(e) => setNewGameTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newGameDescription" className="form-label">Game Description</label>
            <textarea
              className="form-control"
              id="newGameDescription"
              value={newGameDescription}
              onChange={(e) => setNewGameDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="newGameImageSrc" className="form-label">Image Source (URL)</label>
            <input
              type="text"
              className="form-control"
              id="newGameImageSrc"
              value={newGameImageSrc}
              onChange={(e) => setNewGameImageSrc(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddGame}>
            Add Game
          </button>
        </form>
      </section>
    </div>
  );
};

export default Games;
