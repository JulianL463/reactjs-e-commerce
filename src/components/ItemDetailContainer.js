import React from "react";
import { useState, useEffect } from "react";
import { StyledItemDetail } from "./styles/ItemDetail.styled";
import { StyledLoader } from "./styles/Loader.styled";

const prod = {
                id:1,
                title: 'Xiaomi Mi Pro i7',
                prodImg: './imgs/notebookTest.png',
                price:'109000',
                description: 'El nuevo equipo de Xiaomi destaca especialmente por su prometedora pantalla OLED con resolución 3.5K (no llega a 4K por poco), pero también por sus procesadores de alto rendimiento que además puedes combinar hasta con una RTX 3050 Ti para darle a estos equipos un toque gaming más que decente.',
                stock: 10
            }



const ItemDetailContainer = () => {

  const [item, setitem] = useState({});
  const [show, setshow] = useState(false);
  
  const promise = new Promise((res, rej) =>{
    setTimeout(()=>{
      res(prod);
      setshow(true);
    },2000);
  })

  const getItem = () =>{
    promise.then((selectedItem)=>{
      setitem(selectedItem);
    })
    .catch(()=>{
      console.log('error, no se encontro ese producto');
    })
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
     {show ? <StyledItemDetail item= {item}/> : <StyledLoader/>}
    </>
  )
}

export default ItemDetailContainer