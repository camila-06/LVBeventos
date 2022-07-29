import React from 'react';
import { useState, useContext } from 'react';
import { myContext } from './CartContext';
import {collection, getFirestore, addDoc} from 'firebase/firestore';

export default function Checkout() {
    const {cart, totalPrice} = useContext(myContext);
    const [name, setName] = useState ('');
    const [tel, setTel] = useState ('');
    const [email, setEmail] = useState ('');
    const [idOrder, setIdOrder] = useState('')

    function handleClickComprar(){
        const order = {
            buyer: {name, tel, email},
            carrito: cart,
            total: totalPrice
        };

        if (!name || !tel || !email) return; /* validar el formulario */

        const db = getFirestore();
        const collectionRef = collection(db, 'orders');

        addDoc(collectionRef, order).then(({id})=> setIdOrder(id));
    }

return (
<div className='container'>
    <h1>Complete para terminar su compra</h1>
    <input onChange={(e)=> setName  (e.target.value)} type={'text'} placeholder={"ingrese nombre"}></input><br/>
    <input onChange={(e)=> setTel(e.target.value)} type={'tel'} placeholder={"ingrese tel"}></input><br/>
    <input onChange={(e)=> setEmail(e.target.value)} type={'email'} placeholder={"ingrese email"}></input>
    <br/>
    <button onClick={handleClickComprar}>Comprar</button>
    <p>Id de compra: {idOrder}</p>
</div>
)
}