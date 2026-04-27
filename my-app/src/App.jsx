// App.jsx — el componente principal que reúne todo 
import Encabezado from './mis_componentes/Encabezado' 
import Formulario from './mis_componentes/Formulario' 
import Lista from './mis_componentes/Lista' 
import Item from './mis_componentes/Item' 
import PiePagina from './mis_componentes/PiePagina' 
import './App.css' 
  
function App() { 
  return ( 
    <div className="app"> 
      <Encabezado /> 
      <Formulario /> 
      <Lista /> 
      <Item /> 
      <PiePagina /> 
    </div> 
  ) 
} 
  
export default App