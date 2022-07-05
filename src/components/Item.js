import React from 'react'
import {Card, Button} from 'react-bootstrap'

export default function Item({id, tittle, description, price, pictureUrl}) {
    return (
        
            <Card style={{ width: '18rem' }} className='tarjeta'>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>
                        {description} <br/>
                        ID: {id} | Precio: ${price}
                    </Card.Text>
                    <Button href={`/item/${id}`} variant="primary">Detalle del servicio</Button>
                </Card.Body>
            </Card>

    )
}
