import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';


const CartWidget = ({className}) =>{
  return (
    <div className={className}><FaShoppingCart size='100%'/></div>
  );
};

export default CartWidget

