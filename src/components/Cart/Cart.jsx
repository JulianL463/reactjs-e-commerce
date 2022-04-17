import React from 'react'
import { StyledCartItem } from './styles/CartItem.styled'

const Cart = ({className, cart, removeFromCart, totalCantProds, totalPrice, clearCart}) => {
  return (
    <div className={className}>
        <div className='title frosted'><h4>CARRITO</h4></div>
        {cart.map((cartItem) => {
            return <StyledCartItem key={cartItem.id} item={cartItem} removeFromCart={removeFromCart}/>
        })}
        <div className='cartSumary'>
          <div className='title frosted'><h4>Resumen de compra</h4></div>
          <div className='sumaryCant frosted'><h5>{totalCantProds()} productos</h5></div>
          <div className='sumaryPrice frosted'>${totalPrice()}</div>
          <button className='sumaryFinishButton frosted'>FINALIZAR COMPRA</button>
          <button className='sumaryClearButton frosted' onClick={clearCart}>VACIAR CARRITO</button>
        </div>
    </div>
  )
}

export default Cart