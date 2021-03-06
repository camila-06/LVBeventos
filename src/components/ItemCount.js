import React from 'react'
import { useState } from 'react';
import { Card, Button } from "react-bootstrap";

export default function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);

  function removeItem(){
    if (count !== initial){
      setCount(count - 1);
    }
  }

  function addItem(){
    if (count !== stock){
      setCount (count + 1);
    }
  }

  return (
      <Card bg="dark" className = "text-center container">
        <Card.Header>Contador</Card.Header>
        <Card.Body className="d-flex flex-row justify-content-center">
          <Button variant="outline-primary" onClick={()=>removeItem()}>-</Button>
          <Card.Text>{count}</Card.Text>
          <Button variant="outline-primary" onClick={()=>addItem()}>+</Button>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={()=>onAdd(count)}>Agregar al carrito</Button>
        <Button variant="primary" href="/Cart">Comprar ahora</Button>
        </Card.Footer>
      </Card>
    )
}
