import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const myContext = createContext([]);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find((elem) => elem.id === id) ? true : false;

    function addItem (item, quantity, setRemoveButton){
        if (isInCart(item.id)){
            setCart(cart.map(elem =>{
                return elem.id === item.id ? {...elem, quantity: elem.quantity + quantity} : elem
            }));
        }else{
            setCart([...cart, {...item, quantity}])
        }
        setRemoveButton(true);
    }

    function removeItem (itemId){
        setCart(cart.filter((elem)=> elem.id !== itemId));
    }

    function clear(){
        setCart([])
    }

    const totalPrice = cart.reduce((prev, item) => prev + (item.quantity * item.price), 0);

    const totalProducts = cart.reduce((acc, actualProd) => acc + actualProd.quantity, 0);

    return (
        <>
        <myContext.Provider value={{isInCart, addItem, removeItem, clear, cart, totalPrice, totalProducts}}>{children}</myContext.Provider>
        </>
    )
}
