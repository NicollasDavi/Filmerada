import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbat'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <h2>FILMERADA</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default App
