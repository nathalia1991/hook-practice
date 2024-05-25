import React, {useState} from 'react'

export const SecondComponent = () => {

const [name, setName]= useState("Nathalia Camacho");//set para enviar, get para obtener

const [isNameChanged, setIsNameChanged]= useState(false);//is para variables boolenas

const changeName=(e)=>{
  if (isNameChanged){
    setName("Nathalia Camacho");
    } else {
      setName ("Luis Alberto");
    }
    setIsNameChanged(!isNameChanged);
}

  return (
    <div>
      <h3>Componente: Second Component</h3>
      <p>{name}</p>
<div>
  <button className='button-large' onClick={changeName}>
    Cambiar Nombre</button>
</div>

    </div>
  )
}

