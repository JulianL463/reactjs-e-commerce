import React, { createContext, useState, useEffect } from "react";
import {toast} from 'react-hot-toast'


export const CartContext = createContext();
const { Provider } = CartContext;

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        getCartLocal();
    }, []);

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            const newCart = cart.map((itemInCart) => {
                if (itemInCart.id === item.id) {
                    return { ...itemInCart, cant: (itemInCart.cant + item.cant) }
                } else {
                    return itemInCart;
                }
            });

            setCart(newCart);

        } else {
            setCart([...cart, item]);
        }

        toast.success(`se agregó el ${item.title} al carrito`, {
            position: 'bottom-right',
            style: {
                borderRadius: '5px',
                background: '#fff',
                color: '#000000',
            },
        });

    }

    const removeFromCart = (item) => {
        setCart(cart.filter((itemInCart) => itemInCart.id !== item.id))
        toast.success(`se eliminó el producto del carrito`, {
            position: 'bottom-right',
            style: {
                borderRadius: '5px',
                background: '#fff',
                color: '#000000',
            },
        });
    }

    const clearCart = () => {
        setCart([]);
        toast.success(`se vació el carrito`, {
            position: 'bottom-right',
            style: {
                borderRadius: '5px',
                background: '#fff',
                color: '#000000',
            },
        });
    }

    const totalCantProds = ()=> {
        let total = 0;
        cart.forEach((prod)=>{
            total += prod.cant;
        });

        return total;
    }

    const totalPrice = ()=> {
        let total = 0;
        cart.forEach((prod)=>{
            total += (prod.price*prod.cant);
        });

        return total;
    }

    const getCartLocal = ()=> {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }

    return (
        <Provider value={{ cart, addToCart, removeFromCart, clearCart, totalCantProds, totalPrice }}>
            {children}
        </Provider>
    )
}

export default CartContextProvider