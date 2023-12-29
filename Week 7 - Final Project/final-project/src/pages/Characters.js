// Name: Erick Diaz    Date: 11/26/23

import React from 'react';
import charactersData from '../data/charactersData.json';

const Characters = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4">Explore Characters</h1>

      {Object.keys(charactersData).map((gameName) => (
        <div key={gameName} className="mb-5">
          <h2>{gameName}</h2>
          <div className="row">
            {charactersData[gameName].map((character) => (
              <div key={character.id} className="col-md-4 mb-4">
                <img
                  src={character.imageSrc}
                  alt={character.name}
                  className="img-fluid mb-2"
                />
                <h3>{character.name}</h3>
                {character.race && <p>Race: {character.race}</p>}
                {character.class && <p>Class: {character.class}</p>}
                {character.species && <p>Species: {character.species}</p>}
                <p>{character.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
