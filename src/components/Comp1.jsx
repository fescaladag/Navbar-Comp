
import React, {userState} from 'react';
import { useState } from 'react';


function Comp1(props) {

 //const name = " Fran"
  
const[name, setName] = useState(" Fran")


 const cambiaNombre = (nuevoNombre) =>{
    setName(nuevoNombre)
  }
 
 const lista = ["aaa","bbb","ccc","ddd"];

 return (
    <div>
     <h1>{props.titulo}</h1> 
      <p>Mi nombre es:{name}</p>
       <button onClick = { e => cambiaNombre(" Fran Escalada")}> Cambia Nombre </button>

      <ul>
      {
        lista.map((c,i)=>{
            return (<li>{c}</li>);

          })
      }
          

      </ul>
    
    
    
    </div>

      





  )
}

export default Comp1;