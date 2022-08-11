import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { Box, CircularProgress, Container } from '@mui/material';

export default function ItemListContainer () {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, 'servicios');
        const consulta = getDocs(collectionRef)
        
        consulta
        .then((res)=>{
            if (idCategory === undefined){
            const auxArray = res.docs.map((item) => ({ ...item.data(), id: item.id }));
            setItems (auxArray);
            }else{
                const filter = query(collection(db, 'servicios'), where ('category', '==', idCategory));
                getDocs(filter).then((res)=>{
                    const filtrado = res.docs.map((item) => ({ ...item.data(), id: item.id }));
                    setItems(filtrado);
                })
            }
            setIsLoading(false);
        })
}, [idCategory]);

    return (
        <>
        <Container sx={{marginY: 5}}>
            {isLoading ? (
                <Box display="flex" justifyContent="center" alignContent="center">
                    <CircularProgress />
                </Box>
            ) : (
                <ItemList items={items}/>
            )}
        </Container>
        </>
    )
}