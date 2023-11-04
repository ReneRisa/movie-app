import FavouriteMovie from "./FavouriteMovie"
function FavouritesList(props) {
    return (
        <div>
            <h2>My Favourite Movies</h2>
            <ul>
                {props.favourites.map((movie) => (
                    <FavouriteMovie key={movie.imdbID} movie={movie}
                    removeFavourite={props.removeFavourite} />
                ))}
                
            </ul>
        </div>
    )
}

export default FavouritesList