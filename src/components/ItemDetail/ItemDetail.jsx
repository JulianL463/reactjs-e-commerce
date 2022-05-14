import React, { useState, useContext } from 'react'
import { StyledItemCount  } from '../ItemCount/styles/ItemCount.styled';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ className, item }) => {

    const { title, prodImg, price, description, stock } = item;

    const { addToCart } = useContext(CartContext);

    const [purchase, setPurchase] = useState({});


    const onAdd = (cant) => {

        const { description, ...purchasedItem } = { ...item, cant: cant };

        setPurchase(purchasedItem);
        addToCart(purchasedItem);

    }

    return (
        <div className={className}>
            <div className='detailContainer'>
                <div className='imgsContainer'>
                    <div><img src={prodImg} alt="" /></div>
                    <div><img src={prodImg} alt="" /></div>
                    <div><img src={prodImg} alt="" /></div>
                    <div><img src={prodImg} alt="" /></div>
                    <div><img src={prodImg} alt="" /></div>
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