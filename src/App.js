//import logo from './logo.svg';
import './App.css';
import SearchMovies from './SearchMovies';
import { useState } from'react';
function App() {
  const [favourites, setFavourites] = useState([]); //state of favourites movies in an array
  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  }
  console.log(favourites);
  return (
    <div className="App">
      <SearchMovies addFavourite={addFavourite}/>
    </div>
  );
}

export default App;
