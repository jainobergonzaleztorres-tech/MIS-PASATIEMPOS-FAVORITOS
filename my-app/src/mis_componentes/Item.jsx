// Item.jsx — recibe una tarea (objeto) por props
function Item({ tarea }) {
 return (
 <article className="item">
 <h3>{tarea.texto}</h3>
 <p>Estado: {tarea.completada ? 'Completada' : 'Pendiente'}</p>
 </article>
 )
}
export default Item