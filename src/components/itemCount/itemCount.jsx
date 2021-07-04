import React, {useState} from 'react';
import { Button } from 'react-bulma-components';
import './itemCount.css';


const ItemCount =({stock,onAdd})=>{
    const [count, setCount] = useState(0);

    const addItemcount =(cantidad)=>{
        setCount(count+cantidad);
    };

    const cantidadSelec =()=>{
        onAdd(count);
        setCount(0);
    };

    return (
        <>
        <div className="contenedor">
            <Button disabled={count===0} onClick={()=>addItemcount(-1)}>-</Button>
            <p className="count">{count} </p>
            <Button disabled={count===stock} onClick={()=>addItemcount(1)}>+</Button>
            
        </div>
        <div className="contenedor">
            <Button disabled={count===0} onClick={()=>cantidadSelec()}>Agregar al Carrito</Button>
        </div>
        </>
    )
};

export default ItemCount;