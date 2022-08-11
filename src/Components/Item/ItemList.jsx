
import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    return (
        <Grid container spacing={5}>
            {items.map((item)=>{
                    return(
                        <Item key={item.id}
                        id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
                    )
                })
            }
        </Grid>
    )
}
