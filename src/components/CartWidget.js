import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';


const CartWidget = ({className}) =>{
  return (
    <Link to='/cart' className={className}><div ><FaShoppingCart size='100%'/></div></Link>
  );
};

export default CartWidget

