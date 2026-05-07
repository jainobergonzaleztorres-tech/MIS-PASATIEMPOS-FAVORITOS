// Lista.jsx — recibe tareas y pinta un Item por cada una
import Item from './Item'
function Lista({ entretenimiento }) {
  return (
    <ul className="lista">
      {entretenimiento.map(entretenimiento => (
        <Item key={entretenimiento.id} tarea={entretenimiento} />
      ))}
    </ul>
  )
}
export default Lista