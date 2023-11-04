//import logo from './logo.svg';
import './App.css';
import SearchMovies from './SearchMovies';
import { useState } from'react';
import FavouritesList from './FavouritesList';

function App() {
  const [favourites, setFavourites] = useState([]); //state of favourites movies in an array

  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  }
  
  const removeFavourite = (movie) => {
    //filter that returns a separate array given the id of the movie to remove
    setFavourites(favourites.filter(favourite => favourite.imdbID!== movie.imdbID));
  }

  return (
    <div className="App">
      <SearchMovies addFavourite={addFavourite}/>
      <FavouritesList favourites={favourites}
      removeFavourite={removeFavourite}
      />
    </div>
  );
}

export default App;
