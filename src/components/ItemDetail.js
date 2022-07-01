import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import './ItemDetail.css'

export default function ItemDetail({item}) {
    return (
        <>
        <div>
            <h2>Detalle del servicio</h2>
            {item.map((servicio)=>{
                return(
                <Container className='contenedorDetail'>
                    <Row>
                        <Col md="8">
                            <h3>{servicio.title}</h3>
                            <Row>
                                <Col md="6">{servicio.description}</Col>
                                <Col md="6">Precio: ${servicio.price}</Col>
                            </Row>
                            <Col md="12">
                            {servicio.detail}
                        </Col>
                        </Col>
                        <Col md="4"><Image src={servicio.pictureUrl} style={{ width: '18rem' }} /></Col>
                    </Row>
                </Container>
                )
            })

            }
        </div>
        </>
    )
}
