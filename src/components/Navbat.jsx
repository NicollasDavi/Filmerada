import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {
  return (
      <nav id='navbar'>
        <h2>
          <Link to="/"><BiCameraMovie/>FILMERADA</Link>
        </h2>
        <form>
            <input type="text" placeholder='Buscar Filmes' />
            <button type='submit'>
                <BiSearchAlt2/>
            </button>
        </form>
        <Link to="/movie/:id">Filmes</Link>
        <Link to="/search">Search</Link>
      </nav>
  )
}

export default Navbar;
