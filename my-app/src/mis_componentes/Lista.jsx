import Item from './Item'
function Lista({ favoritos, eliminarFavorito, alternarCompletada }) {
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