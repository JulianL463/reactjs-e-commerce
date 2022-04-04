import { React, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Item = ({ className, product, initial, onAdd }) => {

    const {title, prodImg, price, stock} = product;

    const [cant, setcant] = useState(initial);

    const addOne = () =>{
        cant<stock && setcant(cant+1);
    }
    const subtractOne = () =>{
        cant>1 && setcant(cant-1);
    }

    const addToCart = () => {
        if(cant<=stock){
            onAdd(cant);
        }
    }

    return (
        <div className= {className}>
            <img src={prodImg} alt="" />
            <h3>{title}</h3>
            <div>
                <div className="itemCount">
                    <FaMinus onClick={subtractOne}/>
                    <h5 className="cant">{cant}</h5>
                    <FaPlus onClick={addOne}/>
                </div>
                <div className="buy">
                    <h5 className="price">${price*cant}</h5>
                    <button onClick={addToCart}>COMPRAR</button>
                </div>
            </div>
        </div>
    )
}

export default Item