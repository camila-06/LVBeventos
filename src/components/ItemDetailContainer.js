import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    let { idItem } = useParams();

    useEffect (()=>{
        const servicios = [
            {id:"1", title: "Pack kids", description: "Cumpleaños infantiles de 2 a 8 años", price: 25000, pictureUrl: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/283062670_412010437601817_8538126107349788908_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_tIEmNqOEAMAX8eCZ9q&_nc_ht=scontent.faep8-1.fna&oh=00_AT8se_VVMmeXYZrdPN8RtchDpyqiLZvA3MrXzxSdkactAg&oe=62C87E25", detail: "Nos destacamos en la animacion , pensamos una propuesta dinamica compuesta por momentos de juego libre y exploracion en las estaciones propuestas. Complementando con 3 actividades guiadas: Actividad acrobatica, Actividad artistica (acorde a la tematica del evento), Actividad musical"},
            {id:"2", title: "Pack teens", description: "Cumpleaños infantiles de 9 a 13 años", price: 45000, pictureUrl: "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/283083607_412010490935145_689129247065167725_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=M3Ra5OCD8CMAX9bV7yY&_nc_ht=scontent.faep8-2.fna&oh=00_AT8y_WkjO5-7XhE2S5-JEOIetpj4CRO-mrDqIpIIcFLiiA&oe=62C8F66D", detail: "Nos destacamos en la animacion , pensamos una propuesta dinamica compuesta por momentos de juego libre y exploracion en las estaciones propuestas. Complementando con 3 actividades guiadas: Actividad acrobatica, Actividad artistica (acorde a la tematica del evento), Actividad musical" }
        ];

        new Promise((res, rej) =>{
            setTimeout(() => {
                res(servicios)
            }, 2000);
        })
        .then((resultado)=>{
            console.log('Success', resultado)
            let elegido = resultado.find((elem) => elem.id == idItem)
            setItem(elegido);
        })
        .catch((error)=>{
            console.log('Error', error)
        })
    }, [idItem])
    
    return (
        <>
        {/* <div>ItemDetailContainer</div> */}
        <ItemDetail item={item}/>
        </>

    )
}