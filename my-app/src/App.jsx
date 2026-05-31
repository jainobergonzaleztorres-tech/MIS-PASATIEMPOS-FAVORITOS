import { useState } from 'react'

import Encabezado from './mis_componentes/Encabezado'
import Formulario from './mis_componentes/Formulario'
import Lista from './mis_componentes/Lista'
import PiePagina from './mis_componentes/PiePagina'

import './App.css'

function App() {

  const [favoritos, setFavoritos] = useState([
    { id: 1, texto: "hombre araña 3", completada: false },
    { id: 2, texto: "kimetsu no yaiba", completada: true },
    { id: 3, texto: "one piece", completada: false }
  ])

  // Función auxiliar para guardar en React y localStorage
  const guardarFavoritos = (nuevosFavoritos) => {
    console.log("Guardando:", nuevosFavoritos)

    setFavoritos(nuevosFavoritos)

    localStorage.setItem(
      'favoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }

  // AGREGAR
  const agregarFavorito = (textoNuevo) => {
    const favoritoNuevo = {
      id: crypto.randomUUID(),
      texto: textoNuevo,
      completada: false
    }

    guardarFavoritos([...favoritos, favoritoNuevo])
  }

  // ELIMINAR
  const eliminarFavorito = (idAEliminar) => {
    guardarFavoritos(
      favoritos.filter(
        favorito => favorito.id !== idAEliminar
      )
    )
  }

  // COMPLETAR / VOLVER A PENDIENTE
  const alternarCompletada = (idAAlternar) => {
    guardarFavoritos(
      favoritos.map(favorito =>
        favorito.id === idAAlternar
          ? {
              ...favorito,
              completada: !favorito.completada
            }
          : favorito
      )
    )
  }

  return (
    <div className="app">

      <Encabezado
        titulo="Mis Favoritos"
        subtitulo="Organiza tus favoritos"
      />

      <Formulario alAgregar={agregarFavorito} />

      <Lista
        favoritos={favoritos}
        eliminarFavorito={eliminarFavorito}
        alternarCompletada={alternarCompletada}
      />

      <PiePagina />

    </div>
  )
}

export default App