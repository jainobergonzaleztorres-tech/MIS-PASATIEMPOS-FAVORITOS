import { useState } from 'react'
import Encabezado from './mis_componentes/Encabezado'
import Formulario from './mis_componentes/Formulario'
import Lista from './mis_componentes/Lista'
import PiePagina from './mis_componentes/PiePagina'
import './App.css'
import Flitros from './mis_componentes/Filtros'
function cargarFavoritosIniciales() {
  try {
    const guardado = localStorage.getItem('favoritos')

    if (guardado === null) return []

    return JSON.parse(guardado)

  } catch (error) {
    console.error('Error al cargar favoritos:', error)
    return []
  }
}


function App() {
  const [favoritos, setFavoritos] = useState(cargarFavoritosIniciales)
  // ... resto igual 
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
  // App.jsx — estados nuevos para busqueda y filtro 
  const [busqueda, setBusqueda] = useState("")
  const [filtro, setFiltro] = useState("todas") // 'todas' | 'pendientes' | 'completadas'
  // App.jsx — calcular tareas filtradas 
  const favoritosFiltrados = favoritos
    .filter(favorito => {
      if (filtro === "pendientes") return !favorito.completada
      if (filtro === "completadas") return favorito.completada
      return true // 'todas': mostrar todas 
    })
    .filter(favorito => {
      return favorito.texto.toLowerCase().includes(busqueda.toLowerCase())
    })
  return (
    <div className="app">

      <Encabezado
        titulo="Mis Favoritos"
        subtitulo="Organiza tus favoritos"
      />

      <Formulario alAgregar={agregarFavorito} />
      <Flitros
        busqueda={busqueda}
        alCambiarBusqueda={setBusqueda}
        filtro={filtro}
        alCambiarFiltro={setFiltro}
      />
      <Lista
        favoritos={favoritosFiltrados}
        eliminarFavorito={eliminarFavorito}
        alternarCompletada={alternarCompletada}
      />

      <PiePagina />

    </div>
  )
}

export default App