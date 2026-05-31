// Formulario.jsx — recibe alAgregar y la llama al enviar 
import { useState } from 'react'
import './Formulario.css'

function Formulario({ alAgregar }) {
  const [nuevaTarea, setNuevaTarea] = useState("")

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (nuevaTarea.trim() === "") {
      alert("Por favor escribe un favorito antes de Agregar.")
      return
    }

    // Llamar a la funcion que vino del padre 
    alAgregar(nuevaTarea)

    // Limpiar el input 
    setNuevaTarea("")
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Agregar nuevo favorito</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe tu favorito..."
      />
      <p>{nuevaTarea}</p>
      <button type="submit">Agregar</button>
    </form>
  )
}
export default Formulario