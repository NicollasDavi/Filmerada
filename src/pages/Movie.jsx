import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {BsGraphUp} from "react-icons/bs"

import "./Movie.css"



const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG



const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`
        getMovie(movieURL)
    }, [])

    return(
        <div className="MoviesContain">
            <div>
                <section>
                    {movie && <><img src={imageUrl + movie.poster_path} alt="" /> </>}
                </section>
                <section>
                    {movie && <>{movie.title}</>}
                </section>
            </div>
            
        </div>
    )
}

export default Movie;