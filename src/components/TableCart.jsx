import React, {useContext} from 'react';
import { myContext } from './CartContext';
import { Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'


export default function TableCart() {
    const {cart, totalPrice, removeItem} = useContext(myContext);

return (
<div className='container cart-container'>
    <h2>Carrito de compras:</h2>
    <TableContainer className="table" component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">Producto</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">Precio</TableCell>
                            <TableCell align="center">Subtotal</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item) => (
                            <TableRow key={item.pictureUrl} >
                                <TableCell align="center" component="th" scope="row">
                                    <img width="100px" src={item.pictureUrl} alt={item.title} />
                                </TableCell>
                                <TableCell align="center">{item.title}</TableCell>
                                <TableCell align="center">{item.quantity}</TableCell>
                                <TableCell align="center">${item.price}</TableCell>
                                <TableCell align="center">${item.price * item.quantity}</TableCell>
                                <TableCell align="center"><Button variant="outlined" startIcon={<DeleteIcon/>} onClick={()=>removeItem(item.id)}>Eliminar</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
    </TableContainer>
    <div>
    <p>Total: ${totalPrice}</p>
    <Link to='/checkout'><Button variant="contained" size="large">Iniciar compra</Button></Link>
    </div>
</div>
)
}

     {/* // <div className='itemCart'>
            //     <img src={item.pictureUrl} alt={item.title} />
            //     <div>
            //     <p>Titulo: {item.title}</p>
            //     <p>Cantidad: {item.quantity}</p>
            //     <p>Precio u: ${item.price}</p>
            //     <p>Subtotal: ${item.quantity * item.price}</p>
            //     <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={()=>removeItem(item.id)}>Eliminar</Button>
            //     </div>
            // </div> */}