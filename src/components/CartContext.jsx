import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //Provisorio para testing//
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    ///////////////////////////

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

        item.cant > 1 ? console.log(`Se agregaron ${item.cant} productos al carrito`)
            : console.log(`Se agrego ${item.cant} producto al carrito`);

    }

    const removeFromCart = (item) => {
        setCart(cart.filter((itemInCart) => itemInCart.id !== item.id))
    }

    const clearCart = () => {
        setCart([]);
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

    return (
        <Provider value={{ cart, addToCart, removeFromCart, clearCart, totalCantProds, totalPrice }}>
            {children}
        </Provider>
    )
}

export default CartContextProvider