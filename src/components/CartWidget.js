import React from 'react'
import { Button } from "react-bootstrap";
import carrito from '../carrito.png';


export default function CartWidget() {
    return (
    <Button variant="outline-light"><img src={carrito} /></Button>
    )
}
