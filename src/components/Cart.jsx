import './Cart.css'
import React, {useContext} from 'react'
import {myContext} from './CartContext'
import {Link} from 'react-router-dom'
import {Button, Card, Container, Typography} from '@mui/material'
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import TableCart from './TableCart'


export default function Cart() {
  const {cart} = useContext(myContext);

    if (cart.length === 0){
        return(
            <Container>
              <Card sx={{width:'100%', borderRadius:'20px', marginTop: '50px', padding:'20px', display:'flex', flexDirection:'column', alignItems:'center', gap: 2}}>
                <ProductionQuantityLimitsRoundedIcon sx={{fontSize: 150}}/>
                <Typography variant='h4' component='h4'>
                  No hay elementos en el carrito
                </Typography>
                <Link to='/' style={{textDecoration: "none"}}><Button variant='contained' size='large'>Volver a la tienda</Button></Link>
              </Card>
            </Container>
        );
    }

  return (
    <TableCart/>
  )
}


