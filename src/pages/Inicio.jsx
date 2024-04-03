import React from 'react'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <main>
      <div className='img__container'>
        <div className='inner__container'>
          <h1 className='h1__heroImg'>Bienvenido al último ejercicio</h1>
          <h2 className='h2__heroImg'>Aquí terminaremos por fin los ejercicios asíncronos</h2>
        
          <button className='button__heroImg'><Link to={'/Mobiliario'}>Entra en mobiliario aquí</Link></button>
         
        </div>
      </div>
    </main>
  )
}

export default Inicio