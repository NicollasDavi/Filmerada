/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Carusel from "../components/Carussel";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl)

    }, [])

    return(
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
                <Carusel array={topMovies}/>
        </div>
        
    )
}

export default Home;