import Item from './Item'
function Lista({ favoritos, eliminarFavorito, alternarCompletada }) {
  if (favoritos.length === 0) {
    return <p className='lista__vacia'>No hay favoritos aún</p>
  }
  return (
    <ul>
      {favoritos.map(favorito => (
        <Item
          key={favorito.id}
          favorito={favorito}
          eliminarFavorito={eliminarFavorito}
          alternarCompletada={alternarCompletada}
        />
      ))}
    </ul>
  )
}
export default Lista