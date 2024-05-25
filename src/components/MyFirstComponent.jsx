import React from 'react'
import { useState } from 'react';

//Funcion useState, sirve como contador de los clicks de un boton
export const MyFirstComponent = () => {

     const [ counter, setCounter ] = useState(0);
   
     return (
       <div>
           <h3>El número del contador es {counter}</h3>
           <button type="submit" onClick={() => setCounter(counter +1)}>Sumar Contador</button>
       </div>
     )
}


