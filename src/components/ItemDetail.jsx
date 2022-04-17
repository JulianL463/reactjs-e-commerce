import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { StyledItemCount } from './styles/ItemCount.styled';
import { CartContext } from './CartContext';

const ItemDetail = ({ className, item }) => {

    const { title, prodImg, price, description, stock } = item;

    const { addToCart } = useContext(CartContext);

    const [purchase, setPurchase] = useState({});


    const onAdd = (cant) => {

        const { description, ...purchasedItem } = { ...item, cant: cant };

        setPurchase(purchasedItem);
        addToCart(purchasedItem);


        cant > 1 ? console.log(`Se agregaron ${cant} productos al carrito`)
            : console.log(`Se agrego ${cant} producto al carrito`);
    }

    return (
        <div className={className}>
            <div className='detailContainer'>
                <div className='imgsContainer'>
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                </div>
                <div className='dataContainer'>
                    <div className='itemTitle frosted'><h2>{title}</h2></div>
                    <div className='itemPrice frosted'><h3>${price}</h3></div>
                    <div className='itemDescription frosted'>
                        <p>{description}</p>
                    </div>
                    <StyledItemCount onAdd={onAdd} initial={1} stock={stock} purchaseCant={purchase.cant}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail