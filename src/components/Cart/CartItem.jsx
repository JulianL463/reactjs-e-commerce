import React from 'react'
import { Link } from 'react-router-dom';

const CartItem = ({className, item, removeFromCart }) => {

    const { title, prodImg, cant, price } = item;

    return (
        <div className={className}>
            <div className='imgCell'><img src={prodImg} alt="prodimg" /></div>
            <Link className='titleCell frosted' to={`/details/${item.id}`}><h5>{title}</h5></Link>
            <button className='frosted' onClick={() => removeFromCart(item)}>x</button>
            <div className='cantCell frosted'><h5>Cantidad: {cant}</h5></div>
            <div className='priceCell frosted'><h5>${price}</h5></div>
        </div>
    )
}

export default CartItem