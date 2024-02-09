import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import styles from "./Searcg.module.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
    const [searchParamns] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParamns.get("q")

    const getSearchedMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL)

    }, [query])

    
    return(
        <div className={styles.DataCard}>
            <h2>Resultados para : <span>{query}</span></h2>
            <div className={styles.MoviesCard}>
                {movies.length > 0 &&
                movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default Search;