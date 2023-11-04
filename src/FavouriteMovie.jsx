function FavouriteMovie({movie, removeFavourite, showModal}){

    const handleRemove = (e) => {
        e.stopPropagation();
        removeFavourite(movie)
    }

    const handleShowModal = (e) => {
        showModal(movie)
    }

    return (
        <li onClick={handleShowModal}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
            <button onClick={handleRemove}>
                Remove Movie
            </button>
        </li>
    )
}
export default FavouriteMovie