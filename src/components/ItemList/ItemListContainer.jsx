import React from 'react';
import { Heading } from 'react-bulma-components';


const ItemListContainer = ({greeting}) => {
    return (
        <Heading>{greeting}
        </Heading>
    );
}

export default ItemListContainer;
