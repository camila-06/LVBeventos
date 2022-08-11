import React, { useContext } from 'react'
import ItemCount from './ItemCount';
import { myContext } from '../../Context/CartContext';
import { Typography, Box, Paper, Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function ItemDetail({item}) {
    let stock = 5
    let initial = 1

    const {addItem} = useContext(myContext)

    function onAdd(count, setRemoveButton){
        swal({
            title: 'Listo!',
            text: `${count} ${item.title} agregado/s al carrito`,
            icon: 'success',
            timer: 2000
        });
            addItem(item, count, setRemoveButton);
    }

    return(
        <Card sx={{width:'100%', borderRadius:'20px', marginTop: '50px', padding:'20px', display:'flex', flexWrap:'wrap', gap: 2, height:{xs:'column', md:'row'}}}>
            <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', width:{xs:'100%', md:'50%'}, height:{xs: '280px', sm: '420px', md: 'auto'}}}>
                <img src={item.pictureUrl} alt={item.title} height={500} sx={{width: '100%'}} />
            </Box>
            <Box sx={{display: 'flex', width: {xs: '100%', md: '50%'}, flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2,maxWidth: {xs: 'auto', md: '500px'},margin: 'auto'}}>
                <Typography variant="h3" component="h2" textAlign='center'>
                    {item.title}
                </Typography>
                <Typography variant="h5" component="h3">
                    {item.description}
                </Typography>
                <Typography variant="body1" component="p">
                    {item.detail}
                </Typography>
                <Typography variant="h6" component="p">
                    Precio: ${item.price}
                </Typography>
                <Paper sx={{padding: 2, width: 'fit-content'}}>
                    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
                </Paper>
                <Box >
                    <Link to="/cart" style={{textDecoration: "none"}}><Button variant='contained' size='large' sx={{marginTop:'5px', width:'500px'}}>Ir al carrito</Button></Link>
                </Box>
            </Box>
        </Card>
    )
}
