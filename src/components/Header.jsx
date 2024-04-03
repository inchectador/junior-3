import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='nav'>
        <h3 className='site-title'>Mobiliario</h3>
        <ul>
            <li>
                <a href="" className='active'><Link to={'/'}>Inicio</Link></a>
            </li>
            <li>
                <a href=""><Link to={'/Mobiliario'}>Mobiliario</Link></a>
            </li>
        </ul>
    </nav>
  )
}

export default Header