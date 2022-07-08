import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const myContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find((elem) => elem.id === id) ? true : false;

    function addItem (item, quantity){
        if (isInCart(item.id)){
            setCart(cart.map(elem =>{
                return elem.id === item.id ? {...elem, quantity: elem.quantity + quantity} : elem
            }));
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    function removeItem (itemId){
        setCart(cart.filter((elem)=> elem.id !== itemId));
    }

    function clear(){
        setCart([])
    }

    console.log("Carrito:", cart);

    return (
        <>
        <myContext.Provider value={{cart, addItem, removeItem, clear}}>{children}</myContext.Provider>
        </>
    )
}
