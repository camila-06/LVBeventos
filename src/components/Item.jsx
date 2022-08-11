import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({id, title, description, price, pictureUrl}) {
    return (
            <Grid item xs={4} >
                <Paper elevation={3} style={{ maxWidth: '18rem' }}>
                    <img src={pictureUrl} alt="" className="img" width="100%"/>
                    <Box padding left ={1}>
                        <Typography variant="p" component="h2">
                            {title}
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}} marginTop={3}>
                            <Typography variant = "body2" component="p">
                                {description}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant = "h6" component="h3" marginTop={0}>
                                Precio: ${price}
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Link to={`/item/${id}`} style={{textDecoration: "none"}}><Button variant="contained">Detalle del servicio</Button></Link>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
    )
}