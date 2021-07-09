import React, { useState } from 'react';

const Item =({productos})=>{
    const [products] = useState([productos]);
    return(
        <>
            <div className="text-center">
            <p>{products[0].name}</p>
            <p>{products[0].price}</p>
            <p>{products[0].color}</p>
            </div>
            
        </>
    )
};

export default Item;