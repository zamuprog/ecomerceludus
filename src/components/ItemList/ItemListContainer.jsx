import React, {useState} from 'react';
import ItemCount from '../itemCount/itemCount'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const stock = 10;
    const [cantidadCompra, setCantidadCompra] = useState();

    return (
        <div className="itemCount">
        <ItemCount stock={stock} onAdd={setCantidadCompra}/>
        {cantidadCompra >0 && <p>Se agregaron {cantidadCompra} articulos, al carrito de compras</p>}
        </div>
    );
}

export default ItemListContainer;
