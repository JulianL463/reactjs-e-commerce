import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const CartWidget = ({ className }) => {

  const { totalCantProds } = useContext(CartContext);

  return (
    <>
      {totalCantProds() !== 0 &&
        <Link to='/cart' className={className}>
          <div>
            <FaShoppingCart size='100%' />
            <div className='cantProds'><h5>{totalCantProds()}</h5></div>
          </div>
        </Link>
      }
    </>

  );
};

export default CartWidget

