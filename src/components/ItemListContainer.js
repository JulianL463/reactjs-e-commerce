import React from 'react'
import { StyledItemCount } from './styles/ItemCount.styled';
const ItemListContainer = ({className, user}) => {

  const onAdd = (cant) => {
    cant>1 ? 
    console.log(`Se agregaron ${cant} productos al carrito`)
    :console.log(`Se agrego ${cant} producto al carrito`);
  }

  return (
    <div className={className}>  
      <h2>Bienvenido {user}!</h2>
      <StyledItemCount stock= {10} initial= {1} onAdd= {onAdd} /> 
    </div>
  )
}

export default ItemListContainer