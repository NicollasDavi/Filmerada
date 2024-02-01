import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"

import {FaStar} from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

function MovieCard({movie, showLink = true}) {
  return (
      <div className={styles.movie_card}>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <div className={styles.circle}>
        <p>
            <FaStar /> {movie.vote_average.toFixed(1)}
        </p>
        </div>
        
        {showLink && <Link to={`/movie/${movie.id}`} className={styles.btn}> Detalhes</Link>}
    </div>
    
  )
}

export default MovieCard