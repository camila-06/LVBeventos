import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import './ItemDetail.css'
import ItemCount from './ItemCount';

export default function ItemDetail({item}) {
    let stock = 5
    let initial = 1

    function onAdd(count){
        alert(`${count} producto/s agregado/s al carrito`)
    }

    return (
        <>
        <div>
            <h2>Detalle del servicio</h2>
                <Container className='contenedorDetail'>
                    <Row>
                        <Col md="8">
                            <h3>{item.title}</h3>
                            <Row>
                                <Col md="6">{item.description}</Col>
                                <Col md="6">Precio: ${item.price}</Col>
                            </Row>
                            <Col md="12">
                            {item.detail}
                        </Col>
                        </Col>
                        <Col md="4"><Image src={item.pictureUrl} style={{ width: '18rem' }} /></Col>
                    </Row>
                </Container>
        </div>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        </>
    )
}
