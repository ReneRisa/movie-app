function FavouriteMovie({movie, removeFavourite, showModal}){

    const handleRemove = (e) => {
        e.stopPropagation();
        removeFavourite(movie)
    }

    const handleShowModal = (e) => {
        showModal(movie)
    }

    return (
        <li onClick={handleShowModal} className="favourite-movie">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="favourite-movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
            <button onClick={handleRemove} className="remove-button">
                Remove Movie
            </button>
        </li>
    )
}
export default FavouriteMovie