import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer ({ greeting }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        let productos = [
            {id: "1", title: "Pack kids", description: "Cumpleaños infantiles de 2 a 8 años", price: 25000, pictureUrl: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/283062670_412010437601817_8538126107349788908_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=110474&_nc_ohc=X6BdR__NZswAX8L5l4k&_nc_ht=scontent.faep8-1.fna&oh=00_AT_fgjQYHISVnXcDAM12YO81BgTEO0QwaejRTPfzAy7Xow&oe=62BE9AE5"},
            {id: "2", title: "Pack teens", description: "Cumpleaños infantiles de 9 a 13 años", price: 45000, pictureUrl: "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/283083607_412010490935145_689129247065167725_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=xCmBat7iGF8AX9H6bS8&_nc_ht=scontent.faep8-2.fna&oh=00_AT_Xo6-rjuIQklq7orvFKwG203luj-IqsPBghrRLatgR6w&oe=62C307AD"}
        ]

        new Promise((res, rej) =>{
            setTimeout(() => {
                res(productos)
            }, 2000);
        })
        .then((resultado)=>{
            setItems(resultado);
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])
    
    return (
        <>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </>
    )
}
