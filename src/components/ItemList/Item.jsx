import React from "react";
import { Link } from "react-router-dom";

const Item = ({ className, product, initial }) => {

    const { id, title, prodImg, price } = product;


    return (
        <div className={className}>
            <Link to={`/details/${id}`} className="detailLink"><img src={prodImg} alt="" /></Link>
            <h3 className="frosted">{title}</h3>
            <div className="buy">
                <h5 className="price frosted">${price}</h5>
                <Link to={`/details/${id}`} className="buyLink">
                    <button className="frosted">COMPRAR</button>
                </Link>
            </div>
        </div>
    )
}

export default Item