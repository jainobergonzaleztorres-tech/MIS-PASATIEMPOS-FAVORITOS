// Item.jsx — version con botones (solo visuales por ahora) 
import { useState } from 'react'
import './Item.css'

function Item({ favorito, eliminarFavorito, alternarCompletada }) {
  const [resaltado, setResaltado] = useState(false)

  const manejarCompletar = (evento) => {
    // Importante: detener la propagacion para que el click 
    // del boton no active el click del item completo 
    evento.stopPropagation()
    alternarCompletada(favorito.id)
  }

  const manejarEliminar = (evento) => {
    evento.stopPropagation()
    eliminarFavorito(favorito.id)
  }

  return (
    <article
      className={`item ${resaltado ? 'item--resaltado' : ''
        } ${favorito.completada ? 'item--completada' : ''
        }`}
      onClick={() => setResaltado(!resaltado)}
    >
      <div className="item__contenido">
        <h3 className="item__texto">{favorito.texto}</h3>
        <p className="item__estado">
          {favorito.completada ? 'Completada' : 'Pendiente'}
        </p>
      </div>
      <div className="item__acciones">
        <button
          className='boton-completar'
          onClick={manejarCompletar}
        >
          {favorito.completada ? '↺' : '✓'}
        </button>
        <button className='boton-eliminar' onClick={manejarEliminar}>✕</button>
      </div>
    </article>
  )
}

export default Item