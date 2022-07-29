import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';

export default function ItemListContainer ({ greeting }) {
    const [items, setItems] = useState([]);
    const { idCategory } = useParams();

    let productos = [
            {id: "1", title: "Pack kids", description: "Cumpleaños infantiles de 2 a 8 años", price: 25000, category: 'kids', pictureUrl: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/283062670_412010437601817_8538126107349788908_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_tIEmNqOEAMAX8eCZ9q&_nc_ht=scontent.faep8-1.fna&oh=00_AT8se_VVMmeXYZrdPN8RtchDpyqiLZvA3MrXzxSdkactAg&oe=62C87E25"},
            {id: "2", title: "Pack teens", description: "Cumpleaños infantiles de 9 a 13 años", price: 45000, category: 'teens', pictureUrl: "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/283083607_412010490935145_689129247065167725_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=M3Ra5OCD8CMAX9bV7yY&_nc_ht=scontent.faep8-2.fna&oh=00_AT8y_WkjO5-7XhE2S5-JEOIetpj4CRO-mrDqIpIIcFLiiA&oe=62C8F66D"}
        ]

    useEffect(() => {
        new Promise((res, rej) =>{
            setTimeout(() => {
                res(productos)
            }, 2000);
        })
        .then((resultado)=>{
            if (idCategory === undefined){
            setItems(resultado);
            }else{
                let filtrado = resultado.filter((item)=> item.category === idCategory);
                setItems(filtrado);
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [idCategory])

    return (
        <>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </>
    )
}
