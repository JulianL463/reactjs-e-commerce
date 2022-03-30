import React from "react";
import { StyledItem } from "./styles/Item.styled";

const ItemList = ({className,products, onAdd}) => {

  return (
    <div className={className}>
        {products.map((prod, index) => <StyledItem key= {index} product={prod} initial={1} onAdd={onAdd}/>)}
    </div>
  )
}

export default ItemList