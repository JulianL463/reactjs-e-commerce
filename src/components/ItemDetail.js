import React from 'react'
import { FaMinus, FaPlus, FaCartArrowDown} from "react-icons/fa";

const ItemDetail = ({className, item}) => {

    const {title, prodImg, price, description, stock} = item;

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
                    <div className='itemCount frosted'>
                        {/*cambiar por ItemCount*/}
                        <div>
                            <FaMinus />
                            <h5>1</h5>
                            <FaPlus />
                        </div>
                    </div>
                    <div className='itemDescription frosted'>
                        <p>{description}</p>
                    </div>
                    <div className='itemCart frosted'><FaCartArrowDown className='addToCartIcon' size='100%'/></div>
                    <div className='itemBuy frosted'><h3>COMPRAR</h3></div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail