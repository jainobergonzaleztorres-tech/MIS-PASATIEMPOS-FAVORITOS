// App.jsx — array con datos quemados (hardcoded)
import Encabezado from './mis_componentes/Encabezado'
import Lista from './mis_componentes/Lista'
import PiePagina from './mis_componentes/PiePagina'
import './App.css'
function App() {
  // Datos de ejemplo que simulan estar guardados
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
      <Lista entretenimiento={entretenimiento} />
      <PiePagina />
    </div>
  )
}
export default App 