import React, {useContext} from 'react'
import {myContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'
import {Button, Card, Container, Stack, Typography} from '@mui/material'
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import TableCart from './TableCart'


export default function Cart() {
  const {cart, totalPrice, clear} = useContext(myContext);

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
    <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}}>
      <TableCart/>
      <Typography variant='h5' component='p' margin={3}>
                  Total: $ {totalPrice}
      </Typography>
      <Stack direction='row' spacing={2}>
          <Link to='/checkout' style={{textDecoration: "none"}}><Button variant="contained" size="large">Iniciar compra</Button></Link>
          <Button variant='contained' onClick={()=>clear()}>Vaciar carrito</Button>
      </Stack>
    </Container>
  )
}