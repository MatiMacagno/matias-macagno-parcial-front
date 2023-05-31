import React from 'react'
import '../styles/Card.css'

const Card = ({item}) => {
  return (
    <div className='card'>
      <h1>Hola {item.nombre}!</h1>
      <h2>Sabemos que tu pelicula favorita es:</h2>
      <div className='pelicula-favorita'>
        <h3>{item.peliculaFav}</h3>
      </div>
    </div>
  )
}

export default Card