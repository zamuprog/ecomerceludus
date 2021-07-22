import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item =({productos})=>{
    const [products] = useState([productos]);
    return(
        <><Link to={'/detail/'+productos.id}>
            <div className="text-center">
            <p>{products[0].name}</p>
            <p>{products[0].price}</p>
            <p>{products[0].color}</p>
            <img src={products[0].img} />
            </div>
            </Link>   
        </>
    )
};

export default Item;