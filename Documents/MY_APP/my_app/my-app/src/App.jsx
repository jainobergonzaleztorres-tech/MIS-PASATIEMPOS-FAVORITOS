// App.jsx — mi primer componente React 
import './App.css' 
  
function App() { 
  // TODO aprendiz: cambia este título por el nombre de tu proyecto 
  const tituloProyecto = "MIS PASATIEMPOS FAVORITOS" 
  
  return ( 
    <div className="app"> 
      <h1>{tituloProyecto}</h1> 
      <p>Si ves este texto, React está funcionando 🎉</p> 
    </div> 
  ) 
} 

export default App
