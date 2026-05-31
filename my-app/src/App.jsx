// Importar useState para manejar el estado
import { useState } from 'react'

// Importar los componentes
import Encabezado from './mis_componentes/Encabezado'
import Formulario from './mis_componentes/Formulario'
import Lista from './mis_componentes/Lista'
import PiePagina from './mis_componentes/PiePagina'

// Importar estilos
import './App.css'

function App() {

  // Estado que guarda los favoritos
  const [favoritos, setFavoritos] = useState([
    { id: 1, texto: "hombre araña 3", completada: false },
    { id: 2, texto: "kimetsu no yaiba", completada: true },
    { id: 3, texto: "one piece", completada: false }
  ])

  // Función para agregar un nuevo favorito
  const agregarFavorito = (textoNuevo) => {

    // Crear el nuevo objeto favorito
    const favoritoNuevo = {
      id: crypto.randomUUID(),      // ID único basado en la fecha actual
      texto: textoNuevo,   // Texto escrito en el formulario
      completada: false    // Empieza sin completar
    }

    // Crear un nuevo array con los favoritos actuales
    // y agregar el nuevo favorito al final
    setFavoritos((prev) => [...prev, favoritoNuevo])
  }

  return (
    <div className="app">

      {/* Encabezado de la aplicación */}
      <Encabezado
        titulo="Mis Favoritos"
        subtitulo="Organiza tus favoritos"
      />

      {/* Formulario que envía nuevos favoritos */}
      <Formulario alAgregar={agregarFavorito} />

      {/* Lista que muestra los favoritos */}
      <Lista favoritos={favoritos} />

      {/* Pie de página */}
      <PiePagina />

    </div>
  )
}

// Exportar el componente principal
export default App