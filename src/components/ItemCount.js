import { React, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ItemCount = ({ className, stock, initial, onAdd }) => {

    const [cant, setcant] = useState(initial);
    const [itemStock, setitemStock] = useState(stock);

    const addOne = () =>{
        cant<stock && setcant(cant+1);
    }
    const subtractOne = () =>{
        cant>1 && setcant(cant-1);
    }

    const addToCart = () => {
        if(cant<=itemStock){
            onAdd(cant);
            setitemStock(itemStock-cant);
        }
    }

    return (
        <div className= {className}>
            <h3>Titulo</h3>
            <div>
                <div>
                    <FaMinus onClick={subtractOne}/>
                    <div>{cant}</div>
                    <FaPlus onClick={addOne}/>
                </div>
                <button onClick={addToCart}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount