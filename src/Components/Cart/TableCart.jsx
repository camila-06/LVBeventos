import React, {useContext} from 'react';
import { myContext } from '../../Context/CartContext';
import { Button, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'


export default function TableCart() {
    const {cart, removeItem} = useContext(myContext);

return (
    <>
        <Typography variant='h3' component='h2' marginBottom={5}>
            Carrito de compras:
        </Typography>
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
    </>
)
}