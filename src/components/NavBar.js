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
                <h3 style = {{color: 'white'}}>LVB Eventos</h3>
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
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/category/kids"> Kids</Nav.Link>
                    <Nav.Link href="/category/teens">Teens</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
            </Navbar>
        </>
    )
}
