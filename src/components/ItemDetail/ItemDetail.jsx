import React, { useState } from 'react';


const ItemDetail =({itemProd})=>{

    const [products] = useState([itemProd]);
    console.log(products)
    return(
        <>
            <div className="text-center">
                <img src={itemProd.img} alt=""/>
                <h4>{itemProd.name}</h4>
                <h4>{itemProd.price}</h4>
            </div>
        </>
    )
}

export default ItemDetail;