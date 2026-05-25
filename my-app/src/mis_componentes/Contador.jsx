// Contador.jsx — ejemplo didactico
import { useState } from 'react'
function Contador() {
 // contador es el valor actual; setContador es la funcion para cambiarlo
 const [contador, setContador] = useState(0)
 return (
 <div>
 <p>Llevas {contador} clicks</p>
 <button onClick={() => setContador(contador + 1)}>
 Sumar uno
 </button>
 <button onClick={() => setContador(0)}>
 Reiniciar
 </button>
 </div>
 )
}
export default Contador
