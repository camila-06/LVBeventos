import React, { useContext } from 'react'
import { myContext } from './CartContext';
import { Link } from 'react-router-dom';
import {Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
    const {totalProducts} = useContext(myContext);

    return (
        <>
            <Link to="/cart">
                <Badge badgeContent={totalProducts} color="error">
                    <ShoppingCartIcon fontSize='medium' style={{color: 'white'}} />
                </Badge>
            </Link>
        </>
    )
}
