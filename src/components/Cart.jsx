import './Cart.css'
import React, {useContext} from 'react'
import {myContext} from './CartContext'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import TableCart from './TableCart'


export default function Cart() {
  const {cart} = useContext(myContext);

    console.log(cart)

    if (cart.length === 0){
        return(
            <>
              <div className='container cart-container' >
                <ProductionQuantityLimitsRoundedIcon sx={{fontSize: 150}}/>
                <h4>No hay elementos en el carrito</h4>
                <Link to='/'><Button variant='contained'>Volver a la tienda</Button></Link>
              </div>
            </>
        );
    }

  return (
    <TableCart/>
  )
}


