//Search Movies Component
import { useState } from "react"
function SearchMovies(){
    const [movieTitle, setMovieTitle] = useState('')
    const searchMovie = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=a2af4a6&t=${movieTitle}`)
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
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