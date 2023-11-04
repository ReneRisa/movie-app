function FavouriteMovie({movie}){
    return (
        <li>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </li>
    )
}
export default FavouriteMovie