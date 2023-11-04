//import logo from './logo.svg';
import './App.css';
import SearchMovies from './SearchMovies';
import { useState } from'react';
import FavouritesList from './FavouritesList';
import MovieModal from './MovieModal';

function App() {
  const [favourites, setFavourites] = useState([]); //state of favourites movies in an array
  const [isModalOpen, setIsModalOpen] = useState(false);// check if modal is open or not
  const [selectedMovie, setSelectedMovie] = useState(null); //state of selected movie

  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  }
  
  const removeFavourite = (movie) => {
    //filter that returns a separate array given the id of the movie to remove
    setFavourites(favourites.filter(favourite => favourite.imdbID!== movie.imdbID));
  }

  const showModal = (movie) => { // fucntion to show the modal
    setIsModalOpen(true);
    setSelectedMovie(movie);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  }

  return (
    <div className="App">
      <SearchMovies addFavourite={addFavourite}/>
      <FavouritesList favourites={favourites}
      removeFavourite={removeFavourite}
      showModal={showModal}
      />
      {selectedMovie && (
      <MovieModal isModalOpen={isModalOpen} 
      movie={selectedMovie}
      closeModal={closeModal} 
      />)}
    </div>
  );
}

export default App;
