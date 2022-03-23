import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';


const CartWidget = ({className}) =>{
  return (
    <div className={className}><FaShoppingCart size='100%' color='rgb(65,65,67)'/></div>
  );
};

export default CartWidget

