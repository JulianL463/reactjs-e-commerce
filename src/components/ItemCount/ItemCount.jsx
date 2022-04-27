import React from 'react'
import { useState } from 'react';
import { FaMinus, FaPlus, FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ItemCount = ({ className, onAdd, initial, stock, purchaseCant }) => {

    const [cant, setcant] = useState(initial);

    const addOne = () => {
        cant < stock && setcant(cant + 1);
    }
    const subtractOne = () => {
        cant > 1 && setcant(cant - 1);
    }

    return (
        <>
            { !purchaseCant ?
                <div className={`${className} itemCount`}>
                    <div className='frosted'>
                        <FaMinus onClick={subtractOne} className="minus" />
                        <h5 className="cant">{cant}</h5>
                        <FaPlus onClick={addOne} className="plus" />
                    </div>
                    <div className='itemCart frosted' onClick={() => { onAdd(cant) }}><FaCartArrowDown className='addToCartIcon' size='100%' /></div>
                </div>
                : <Link className={`${className} itemBuy frosted`} to='/cart'>
                    <button>COMPRAR</button>
                </Link>
            }
        </>
    )
}

export default ItemCount