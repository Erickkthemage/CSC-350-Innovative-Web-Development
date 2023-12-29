// Name: Erick Diaz    Date: 11/26/23

import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4">Welcome to My Final Project Website!</h1>
      <p className="lead">
        As a child, my imagination soared through the virtual realms of video games, 
        and three titles held a special place in my heart: World of Warcraft, Kingdom Hearts, and Pokemon. 
        Join me on this nostalgic journey as we explore the captivating worlds, characters, and adventures that shaped my early gaming experiences.
      </p>
      <div className="pulsing-image-container">
        <img
          src="./images/keyblade.jpeg"
          alt="Pulsing Image"
          className="pulsing-image"
        />
      </div>
    </div>
  );
};

export default Home;
