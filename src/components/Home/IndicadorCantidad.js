import React , { useState } from 'react';
import './IndicadorCantidad.css'

const IndicadorCantidad =props=>{
const [cantidad, setcantidad] = useState(props.init)

const Incrementar =()=>{
    if (cantidad < parseInt(props.max)){
    setcantidad (parseInt(cantidad + 1));
    }
}

const Disminuir =()=>{
    if (cantidad >parseInt(props.min)){
    setcantidad (parseInt(cantidad -1 ))
    }
}

const handleAddToCart = ()=>{
    props.onAdd(cantidad);
}

const addtoCart = (counter) =>{
    if(counter===1){
        alert('Agrego un producto')
    } else {
    alert("Agrego " + counter + " productos")
    }
}







    return(
        <div className="InpCantidad"> 
        <label>
          Cantidad:
          <input type="number" disabled value={cantidad} />         
          <button onClick={()=>{Disminuir()}}>-</button>
          <button onClick={()=>{Incrementar()}}>+</button>
          <button onClick={()=>{handleAddToCart()}}>Agregar</button>
        </label>
        </div>
    )
}

export default IndicadorCantidad;