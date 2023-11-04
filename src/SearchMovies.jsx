//Search Movies Component
import { useState } from "react"
function SearchMovies(props){
    const [movieTitle, setMovieTitle] = useState('')
    const searchMovie = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=a2af4a6&t=${movieTitle}`)
            const data = await res.json()
            props.addFavourite(data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="search-movies">
            <form onSubmit={searchMovie}>
                <label htmlFor="query">Movie Title</label>
                <input type="text" 
                name="query" 
                value={movieTitle} 
                onChange={(e) => setMovieTitle(e.target.value)}
                placeholder="Enter Movie Title" 
                role="Search"
                />
                <button type="submit">Search Movie</button>
            </form>
        </div>
    )
}

export default SearchMovies