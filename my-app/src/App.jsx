// App.jsx — array con datos quemados (hardcoded)
import { useState } from 'react'
import Encabezado from './mis_componentes/Encabezado'
import Formulario from './mis_componentes/Formulario'
import Item from './mis_componentes/Item'
import Lista from './mis_componentes/Lista'
import PiePagina from './mis_componentes/PiePagina'
import Contador from './mis_componentes/Contador'
import './App.css'
function App() {
  // Datos de ejemplo que simulan estar guardados
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const entretenimiento = [
    { id: 1, texto: "hombre araña 3", completada: false },
    { id: 2, texto: "kimetsu no yaiba", completada: true },
    { id: 3, texto: "one piece", completada: false }
  ]
  return (
    <div className="app">
      <Encabezado
        titulo="Mis favoritos"
        subtitulo="mira las series que me gustan"
      />
      <button
      onClick={() => setMostrarFormulario(!mostrarFormulario)}
      className="boton-toggle">
      {mostrarFormulario ? 'Ocultar formulario' : 'Agregar tarea'}
      </button>
      {mostrarFormulario && <Formulario />}
      <Lista entretenimiento={entretenimiento} />
      <PiePagina />
      <Contador/>

    </div>
  )
}
export default App  