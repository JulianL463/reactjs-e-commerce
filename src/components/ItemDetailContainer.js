import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledItemDetail } from "./styles/ItemDetail.styled";
import { StyledLoader } from "./styles/Loader.styled";


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setitem] = useState({});
  const [show, setshow] = useState(false);

  const getItem = () => {

    fetch('https://run.mocky.io/v3/296258ec-f866-4469-8d02-1949952dce6e')
    .then((res)=> res.json())
    .then((prods)=>{
      setitem(prods.find(prods => prods.id === parseInt(id)));
    })
    .catch(()=>{
      console.log('error, no se encontraron productos');
    })
    .finally(()=>{
      setshow(true);
    })
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      {show ? <StyledItemDetail item={item} /> : <StyledLoader />}
    </>
  )
}

export default ItemDetailContainer