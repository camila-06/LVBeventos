
import React from 'react'
import Item from './Item'
import './ItemList.css'

export default function ItemList({items}) {
    return (
        <div className='contenedorItems'>
            {items.map((item)=>{
                return(
                        <Item key={item.id}
                        id={item.id} tittle={item.tittle} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
                )
            })
            }   
        </div>
    )
}
