import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [dataUser, setDataUser] = useState({
    nombre: '',
    peliculaFav: '',
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataUser.nombre.trim().length > 2 && dataUser.peliculaFav.length > 5) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className='App'>
      <h1>Bienvenido!!</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>Nombre</label>
        <input type="text" onChange={(e) => setDataUser({ ...dataUser, nombre: e.target.value })} value={dataUser.nombre} />
        <label>Pelicula Favorita</label>
        <input type="text" onChange={(e) => setDataUser({ ...dataUser, peliculaFav: e.target.value })} value={dataUser.peliculaFav} />
        <div>
          <button className='button-form'>Enviar</button>
        </div>
        {error && <div><p className='error'>Por favor chequea que la informacion sea correcta</p></div>}
      </form>
      {show && !error && <Card item={dataUser} />}
    </div>
  )
}

export default App
