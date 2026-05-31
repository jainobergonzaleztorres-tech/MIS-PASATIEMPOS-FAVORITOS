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

  // 🔥 AGREGAR
  const agregarFavorito = (textoNuevo) => {
    const favoritoNuevo = {
      id: crypto.randomUUID(),
      texto: textoNuevo,
      completada: false
    }

    setFavoritos(prev => [...prev, favoritoNuevo])
  }

  // 🔥 ELIMINAR (FUERA, NO DENTRO)
  const eliminarFavorito = (idAEliminar) => {
    setFavoritos(prev =>
      prev.filter(f => f.id !== idAEliminar)
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
      />

      <PiePagina />

    </div>
  )
}

export default App