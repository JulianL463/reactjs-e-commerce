import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledItemDetail } from "./styles/ItemDetail.styled";
import { StyledLoader } from "../Loader/styles/Loader.styled";
import { db } from "../../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {

    const productsCollection = collection(db, 'ItemCollection');
    const refDoc = doc(productsCollection, id);

    getDoc(refDoc)
    .then((result)=>{
      
      setItem({ 
        id,
        ...result.data()
      });
      
    })
    .catch(()=>{
      console.log('error, no se encontraron productos');
    })
    .finally(()=>{
      setShow(true);
    })

  }, [id]);

  return (
    <>
      {show ? <StyledItemDetail item={item}/> : <StyledLoader />}
    </>
  )
}

export default ItemDetailContainer