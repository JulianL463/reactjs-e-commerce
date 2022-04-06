import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledItemDetail } from "./styles/ItemDetail.styled";
import { StyledLoader } from "./styles/Loader.styled";


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setitem] = useState({});
  const [show, setshow] = useState(false);

  // const getItem = () => {
    
  // }

  useEffect(() => {
    fetch('https://run.mocky.io/v3/5100376d-bbab-416e-8127-65ad2344d6a4')
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
  }, [id]);

  return (
    <>
      {show ? <StyledItemDetail item={item} /> : <StyledLoader />}
    </>
  )
}

export default ItemDetailContainer