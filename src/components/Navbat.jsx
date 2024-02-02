import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
      <nav id='navbar' className={styles.navbar}>
        <h2>
          <Link to="/"><BiCameraMovie/>FILMERADA</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar Filmes' 
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit'>
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
  )
}

export default Navbar;
