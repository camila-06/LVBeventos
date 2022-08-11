import React from 'react';
import { useState, useContext } from 'react';
import { myContext } from '../../Context/CartContext';
import {collection, getFirestore, addDoc} from 'firebase/firestore';
import { Button, Card, Container, FormControl, TextField, Typography} from '@mui/material';
import swal from 'sweetalert';


export default function Checkout() {
    const {cart, totalPrice, clear} = useContext(myContext);
    const [name, setName] = useState ('');
    const [tel, setTel] = useState ('');
    const [email, setEmail] = useState ('');
    const [idOrder, setIdOrder] = useState('')

    function handleClickComprar(){
        const order = {
            buyer: {name, tel, email},
            items: cart,
            total: totalPrice
        };

        if (!name || !tel || !email){
            swal({
                icon: 'warning',
                title: 'Completá el formulario para finalizar la compra',
                timer: 2000
            });
            return;
        };

        const db = getFirestore();
        const collectionRef = collection(db, 'orders');
        addDoc(collectionRef, order).then(({id})=> {
            setIdOrder(id)
            swal({
                icon: 'success',
                title: 'Tu compra fue realizada con exito. ¡Muchas gracias!',
                timer: 3000
            });
        });

        clear();
    }

return (
    <Container>
        <Card sx={{width:'100%', borderRadius:'20px', marginTop: '50px', padding:'20px', display:'flex', flexDirection:'column', alignItems:'center', gap: 2}}>
            <Typography variant='h3' component='h1' marginBottom={5}>
                Complete para terminar su compra
            </Typography>
            <FormControl>
            <TextField required id="outlined-required" label="Nombre" helperText="Ingresá tu nombre completo" value={name} type="text" onChange={(e)=> setName  (e.target.value)}/>
            </FormControl>
            <FormControl>
            <TextField  required id="outlined-required" label="Teléfono" helperText="Ingresá tu teléfono" value={tel} type="number" onChange={(e)=> setTel  (e.target.value)}/>
            </FormControl>
            <FormControl>
            <TextField  required id="outlined-required" label="Email" helperText="Ingresá tu email" value={email} type="email" onChange={(e)=> setEmail  (e.target.value)}/>
            </FormControl>
            <Button variant='contained' onClick={handleClickComprar}>Comprar</Button>
            <Typography variant='body1' component='p'>Id de compra: {idOrder}</Typography>
        </Card>
    </Container>
)
}