import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
      <nav id='navbar' className={styles.navbar}>
        <h2>
          <Link to="/"><BiCameraMovie/>FILMERADA</Link>
        </h2>
        <form>
            <input type="text" placeholder='Buscar Filmes' />
            <button type='submit'>
                <BiSearchAlt2/>
            </button>
        </form>
        <Link to="/movie/:id" className={styles.link}>Filmes</Link>
        <Link to="/search">Search</Link>
      </nav>
  )
}

export default Navbar;
