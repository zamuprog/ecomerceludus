import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemCount from '../itemCount/itemCount'


const ItemList =()=>{
    const stock = 10;
    const [cantidadCompra, setCantidadCompra] = useState();
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
      setTimeout(() => {
        const product = [
        {name:"Kimono", price:15800, color:'Azul'},
        {name:"Judogi", price:11700, color:'Blanco'},
        {name:"Lycra", price:6000, color:'Negro'}];
        resolve(product);
      }, 3000)
    });
    serverResponse.then(response => {
      setProducts(response);
    })
  }
  console.log('productos ItemList');

  return (
  <>
  {products.length === 0 ? (
    <p>Cargando...</p>

  ) : (

      <div>
        {products.map((product) => {
          return <><div>
            <Item productos={product} />
            <ItemCount stock={stock} onAdd={setCantidadCompra}/>
          </div>
          </>

        })}
      </div>
    )}

    </>
  )
};
export default ItemList;