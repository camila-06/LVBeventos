import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

export default function ItemListContainer ({ greeting }) {
    const [items, setItems] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, 'servicios');
        const consulta = getDocs(collectionRef)
        
        consulta
        .then((res)=>{
            // console.log(res.docs);
            if (idCategory === undefined){
            const auxArray = res.docs.map((item) => ({ ...item.data(), id: item.id }));
            setItems (auxArray);
            }else{
                const filter = query(collection(db, 'servicios'), where ('category', '==', idCategory));
                getDocs(filter).then((res)=>{
                    // console.log(res.docs);
                    const filtrado = res.docs.map((item) => ({ ...item.data(), id: item.id }));
                    setItems(filtrado);
                })
            }
        })
}, [idCategory]);

    return (
        <>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </>
    )
}
