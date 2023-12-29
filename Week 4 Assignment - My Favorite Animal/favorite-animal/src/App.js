// Name: Erick Diaz  Date: 10/29/23

import './App.css';
import { dogs } from './data';
import { getImageURL } from './utils';

function App() {
  const filteredDogs = dogs.filter(dog => Number.isInteger(dog.id))

  return (
    <div className="container">
      <h1 className="text-center my-5 text-success">Favorite Pets</h1>
      <div className = "row">
      {filteredDogs.map(dog =>
        <div key = {dog.id} className = "col-lg-4 col-md-6 mb-4">
          <div className = "card">
            <img src = {getImageURL(dog)} className = "img-fluid" alt = "Dog" />
            <div className = "card-body">
              <h5 className = "card-title">{dog.name}</h5>
              <p className = "card-text"> Animal: {dog.animal}</p>
              <p className = "card-text">Accomplishments: {dog.accomplishments}</p>
            </div>
          </div>
        </div>
      )};
      </div>
    </div>
  );
}

export default App;
