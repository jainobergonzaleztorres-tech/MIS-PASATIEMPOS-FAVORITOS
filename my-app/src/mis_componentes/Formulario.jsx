// Formulario.jsx — aquí se agregarán nuevos elementos
 
function Formulario() { 
  return ( 
    <section> 
      <p>Aqui podras agregar a favoritos tu series o peliculas</p>
      <input type="text" placeholder="escribe tu serie o pelicula favorita" />
      <button> ➕ </button>
      <br /><br/>
      <input type="text" placeholder="Buscar favoritos" />
      <button>🔎</button>
      <button>Ordenar</button>
    </section> 
  ) 
} 
  
export default Formulario