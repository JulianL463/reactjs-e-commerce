import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledItemCount } from './styles/ItemCount.styled';

const ItemDetail = ({ className, item }) => {

    const { id, title, prodImg, price, description, stock } = item;

    const [purchase, setPurchase] = useState({});


    const onAdd = (cant) => {
        let purchasedItem = {
            id: id,
            cant: cant,
            price: price,
            added: true,
        };
        setPurchase(purchasedItem);
        
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
                    {!purchase.added ? <div className='itemCount'>
                        <StyledItemCount onAdd={onAdd} initial={1} stock={stock} />
                    </div>
                    :<Link to='/cart' className='itemBuy frosted'>
                        <button>COMPRAR</button>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail