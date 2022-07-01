import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);

    useEffect (()=>{
        let servicios = [
            {title: "Pack kids", description: "Cumpleaños infantiles de 2 a 8 años", price: 25000, pictureUrl: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/283062670_412010437601817_8538126107349788908_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=110474&_nc_ohc=X6BdR__NZswAX8L5l4k&_nc_ht=scontent.faep8-1.fna&oh=00_AT_fgjQYHISVnXcDAM12YO81BgTEO0QwaejRTPfzAy7Xow&oe=62BE9AE5", detail: "Nos destacamos en la animacion , pensamos una propuesta dinamica compuesta por momentos de juego libre y exploracion en las estaciones propuestas. Complementando con 3 actividades guiadas: Actividad acrobatica, Actividad artistica (acorde a la tematica del evento), Actividad musical"},
            {title: "Pack teens", description: "Cumpleaños infantiles de 9 a 13 años", price: 45000, pictureUrl: "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/283083607_412010490935145_689129247065167725_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=xCmBat7iGF8AX9H6bS8&_nc_ht=scontent.faep8-2.fna&oh=00_AT_Xo6-rjuIQklq7orvFKwG203luj-IqsPBghrRLatgR6w&oe=62C307AD", detail: "Nos destacamos en la animacion , pensamos una propuesta dinamica compuesta por momentos de juego libre y exploracion en las estaciones propuestas. Complementando con 3 actividades guiadas: Actividad acrobatica, Actividad artistica (acorde a la tematica del evento), Actividad musical" }
        ]

        new Promise((res, rej) =>{
            setTimeout(() => {
                res(servicios)
            }, 2000);
        })
        .then((resultado)=>{
            console.log('Success', resultado)
            setItem(resultado);
        })
        .catch((error)=>{
            console.log('Error', error)
        })
    }, [])
    
    return (
        <>
        {/* <div>ItemDetailContainer</div> */}
        {<ItemDetail item={item}/>}
        </>

    )
}