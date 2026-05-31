import Item from './Item'

function Lista({ favoritos }) {
  return (
    <ul className="lista">
      {favoritos.map(favorito => (
        <Item key={favorito.id} tarea={favorito} />
      ))}
    </ul>
  )
}

export default Lista