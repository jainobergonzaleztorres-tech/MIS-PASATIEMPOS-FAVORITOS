// Item.jsx — version con botones (solo visuales por ahora) 
import { useState } from 'react'
import './Item.css'

function Item({ favorito, eliminarFavorito }) {
  const [resaltado, setResaltado] = useState(false)

  const manejarCompletar = (evento) => {
    // Importante: detener la propagacion para que el click 
    // del boton no active el click del item completo 
    evento.stopPropagation()
    alert(`Marcar como completada: ${favorito.texto}`)
  }

  const manejarEliminar = (evento) => {
    evento.stopPropagation()
    alert(`Eliminar: ${favorito.texto}`)
  }

  return (
    <article
      className={resaltado ? 'item item--resaltado' : 'item'}
      onClick={() => setResaltado(!resaltado)}
    >
      <div className="item__contenido">
        <h3 className="item__texto">{favorito.texto}</h3>
        <p className="item__estado">
          {favorito.completada ? 'Completada' : 'Pendiente'}
        </p>
      </div>
      <div className="item__acciones">
        <button onClick={manejarCompletar}>✓</button>
        <button onClick={() => eliminarFavorito(favorito.id)}>✕</button>
      </div>
    </article>
  )
}

export default Item