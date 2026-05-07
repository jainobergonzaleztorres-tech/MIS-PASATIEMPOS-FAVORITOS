import Item from "./mis_componentes/Item"

function App() {

  const peliculasfavoritas   = {
    id: 1,
    titulo: "sonic 3",
    estrellas: 4.5,
    genero: "ficcion",
    visto: true
  }
     seriefavorita = [{
    id: 2,
    titulo: "flash",
    estrellas:5.0,
    genero: "accion",
    visto: false
  }]
      
  };

  return (
    <div>
      <Item tarea={tareaEjemplo} />
    </div>
  )


export default App