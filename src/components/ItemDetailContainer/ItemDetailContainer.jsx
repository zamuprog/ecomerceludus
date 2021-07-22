import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../itemCount/itemCount';
import Kimono from '../../assets/img/kimonoAzul.jpg';
import Judogi from '../../assets/img/judogiBlanco.jpg';
import Lycra from '../../assets/img/lycra.jpg';

const ItemDetailContainer =()=>{
    const stock = 10;
    const [cantidadCompra, setCantidadCompra] = useState();
    const [items, setItems] = useState([]);
    

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
      setTimeout(() => {
        const item = [
            {id:'1',name:"Kimono", price:15800, color:'Azul', img: Kimono},
            {id:'2',name:"Judogi", price:11700, color:'Blanco', img: Judogi},
            {id:'3',name:"Lycra", price:6000, color:'Negro', img: Lycra}];
        resolve(item);
      }, 3000)
    });
    serverResponse.then(response => {
      setItems(response);
    })
  }

  return (
  <>
  {items.length === 0 ? (
    <p>Cargando...</p>

  ) : (

      <div>
        {items.map((item, idx) => {
          return <><div>
            <ItemDetail key={idx} itemProd={item} />
            <ItemCount stock={stock} onAdd={setCantidadCompra}/>
          </div>
          </>

        })}
      </div>
    )}
    </>
  )





};
export default ItemDetailContainer;