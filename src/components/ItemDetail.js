import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import './ItemDetail.css'

export default function ItemDetail({item}) {
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
        </>
    )
}
