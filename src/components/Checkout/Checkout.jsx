import React, { useState, useEffect, useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import { StyledCheckoutForm } from '../CheckoutForm/styles/CheckoutForm.styles';
import { StyledSuccesfullPurchase } from '../SucessfullPurchase/styles/SuccesfullPurchase.styles';

import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp, doc, updateDoc, getDoc } from 'firebase/firestore';


const Checkout = () => {

    const [bought, setBought]= useState(false);
    const [purchaseId, setPurchaseId] = useState('');

    const {cart, totalPrice, clearCart} = useContext(CartContext); 

    useEffect(() => {
        
    }, []);

    const finishPurchase = (buyer) => {
        
        if(cart.length !== 0){

            const purchase = {
                items: cart,
                totalPrice:totalPrice(),
                date: serverTimestamp()
            }
    
            const salesCollection = collection(db, 'salesCollection');
            addDoc(salesCollection, {
                buyer,
                purchase
            })
            .then(result=>{
                setPurchaseId(result.id);
                setBought(true);
            })

            cart.forEach((item)=>{
                const {cant, id} = item;

                const productsCollection = collection(db, 'ItemCollection');

                const toUpdate = doc(productsCollection, id);
                
                getDoc(toUpdate)
                .then((result)=>{
                    const newStock = result.data().stock-cant;
                    updateDoc(toUpdate, {stock: newStock});
                })
                
            })
            
            clearCart();
        }
        
    }

    return (
        <>
            {!bought ? <StyledCheckoutForm finishPurchase = {finishPurchase}/>: <StyledSuccesfullPurchase purchaseId={purchaseId}/>}
        </>

    )
}

export default Checkout