import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    <Link to={`/item/${id}`}><button variant="primary">Detalle del servicio</button></Link>
                </Card.Body>
            </Card>

    )
}
