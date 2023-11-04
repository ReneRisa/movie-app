function FavouritesList(props) {
    return (
        <div>
            <h2>My Favourite Movies</h2>
            <ul>
                {props.favourites.map((movie) => (
                    <FavouriteMovie key={movie.imdbID} movie={movie} />
                ))}
                <button onClick={() => props.deleteFavourite(favourite)}>Delete</button>
            </ul>
        </div>
    )
}

export default FavouritesList