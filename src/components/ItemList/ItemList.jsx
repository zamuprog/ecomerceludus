import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import Kimono from '../../assets/img/kimonoAzul.jpg';
import Judogi from '../../assets/img/judogiBlanco.jpg';
import Lycra from '../../assets/img/lycra.jpg';

const ItemList =()=>{
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = () => {
    const serverResponse = new Promise(resolve => {
      setTimeout(() => {
        const product = [
        {id:'1', name:"Kimono", price:15800, color:'Azul', img: Kimono},
        {id:'2', name:"Judogi", price:11700, color:'Blanco', img: Judogi},
        {id:'3', name:"Lycra", price:6000, color:'Negro', img: Lycra}];
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
          </div>
          </>

        })}
      </div>
    )}

    </>
  )
};
export default ItemList;