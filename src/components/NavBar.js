//@ts-check
import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../logo.svg';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#servicios"> Servicios</Nav.Link>
                    <Nav.Link href="#galeria">Galería</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
            </Navbar>
        </>
    )
}
// }
