import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { idItem } = useParams();

    useEffect (()=>{
        const db = getFirestore();
        const serviciosRef = doc(db, 'servicios', idItem);
        getDoc(serviciosRef)
        .then((res) =>{
            // console.log('Success', res)
            setItem ({...res.data(), id: res.id});
        })
        .catch((error)=>{
            console.log('Error', error)
        })
    }, [idItem]);
        
        return (
            <ItemDetail item={item}/>
        )
    }