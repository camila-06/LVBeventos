import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import {  NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container >
                <Navbar.Brand>
                    <CelebrationIcon sx={{ mr: 1 }}></CelebrationIcon>
                    <Link to="/" style={{textDecoration: "none", color: 'white'}}>LVB Eventos</Link>
                </Navbar.Brand>
                <Nav>
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/category/packs">Cumpleaños infantiles</NavLink>
                    <NavLink className="nav-link" to="/category/integral">Servicio integral</NavLink>
                    <NavLink className="nav-link" to="/category/products">Productos</NavLink>
                </Nav>
                <CartWidget />
            </Container>
            </Navbar>
        </>
    )
}