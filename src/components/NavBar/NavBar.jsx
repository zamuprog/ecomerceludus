import React from 'react'
// import 'bulma/css/bulma.min.css';
import { Navbar, Button } from 'react-bulma-components';
import Cart from './Cart/Cart'


const NavBar =()=>{
    return(
        <>
            <Navbar.Container align={'right'}>
                <Navbar.Brand>
                    <Button>Inicio</Button>
                    <Button>Productos</Button>
                    <Button>Pagos</Button>
                    <Button>Contacto</Button>
                </Navbar.Brand>
                <Cart />
            </Navbar.Container>
        </>
    )
}

export default NavBar;