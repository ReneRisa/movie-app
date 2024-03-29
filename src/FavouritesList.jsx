import FavouriteMovie from "./FavouriteMovie"
function FavouritesList(props) {
    return (
        <div className="favourites-container">
            <h2>My Favourite Movies</h2>
            {props.favourites.length > 0? (
            <ul className="favourites-list">
                {props.favourites.map((movie) => (
                    <FavouriteMovie key={movie.imdbID} movie={movie}
                    removeFavourite={props.removeFavourite}
                    showModal={props.showModal} 
                    />
                ))}
                
            </ul>): (
                <p>No Movies Yet</p>
            )}
        </div>
    )
}

export default FavouritesList