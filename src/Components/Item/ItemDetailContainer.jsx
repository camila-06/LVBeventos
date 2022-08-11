import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { Box, CircularProgress, Container } from '@mui/material';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { idItem } = useParams();

    useEffect (()=>{
        const db = getFirestore();
        const serviciosRef = doc(db, 'servicios', idItem);
        getDoc(serviciosRef)
        .then((res) =>{
                setItem ({...res.data(), id: res.id});
                setIsLoading(false);
        })
        .catch((error)=>{
            console.log('Error', error)
        })
        
    }, [idItem]);
        
        return (
            <Container>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignContent="center">
                        <CircularProgress />
                    </Box>
                ) : (
                    <ItemDetail item={item}/>
                )}
            </Container>
        );
    }