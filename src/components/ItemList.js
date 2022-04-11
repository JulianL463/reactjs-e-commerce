import React from "react";
import { StyledItem } from "./styles/Item.styled";

const ItemList = ({className,products}) => {

  return (
    <div className={className}>
        {products.map((prod, index) => <StyledItem key= {index} product={prod} initial={1}/>)}
    </div>
  )
}

export default ItemList