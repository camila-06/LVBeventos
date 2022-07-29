
import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
                <h3 style = {{color: 'white'}}>LVB Eventos</h3>
                <Navbar.Brand>
                    <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/category/kids"> Kids</NavLink>
                    <NavLink className="nav-link" to="/category/teens">Teens</NavLink>
                </Nav>
                <NavLink to="/cart">
                        <CartWidget />
                    </NavLink>
            </Container>
            </Navbar>
        </>
    )
}
