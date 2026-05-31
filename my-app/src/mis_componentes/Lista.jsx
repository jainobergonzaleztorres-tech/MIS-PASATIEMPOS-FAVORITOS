import Item from './Item'
function Lista({ favoritos, eliminarFavorito }) {
  return (
    <ul>
      {favoritos.map(favorito => (
        <Item
          key={favorito.id}
          favorito={favorito}
          eliminarFavorito={eliminarFavorito}
        />
      ))}
    </ul>
  )
}
export default Lista