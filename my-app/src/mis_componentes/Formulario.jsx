// Formulario.jsx — version con onSubmit 
import { useState } from 'react' 
import './Formulario.css' 
  
function Formulario() { 
  const [nuevaTarea, setNuevaTarea] = useState("") 
  
  const manejarEnvio = (evento) => { 
    // Evita que la pagina se recargue 
    evento.preventDefault() 
  
    // Validacion simple 
    if (nuevaTarea.trim() === "") { 
      alert("Por favor escribe algo") 
      return 
    } 
  
    alert(`Favorito capturado: ${nuevaTarea}`) 
    setNuevaTarea("") // limpia el input 
  } 
  
  return ( 
    <form className="formulario" onSubmit={manejarEnvio}> 
      <h2>Agregar nuevo favorito</h2> 
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Escribe algo..." 
      />      <button type="submit">Agregar</button> 
    </form> 
  ) 
} 
  
export default Formulario 