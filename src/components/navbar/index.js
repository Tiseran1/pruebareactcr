import './navbar.css'

import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
        <Navbar className='bg-img'> 
            <Container>
                <Navbar.Brand>
                    <h5> !Pizzeria Mama Mia! </h5>

                    </Navbar.Brand>
                <Nav className='me-auto'>
                    <Link className='text-white ms-3 text decoration-none' to="/">Home</Link>
                    <Link className='text-white ms-3 text decoration-none' to="/carrito">Carrito</Link>

                    
                </Nav>
            </Container>
        </Navbar>


        </>
    )
};
