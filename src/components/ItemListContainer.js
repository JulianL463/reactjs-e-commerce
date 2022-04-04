import { React, useState, useEffect } from 'react'
import StyledItemList from './styles/ItemList.styled';
import { StyledLoader } from './styles/Loader.styled';


const productsList = [
  {
    id:1,
    title: 'Xiaomi Mi Pro i7',
    prodImg: './imgs/notebookTest.png',
    price:'109000',
    stock: 10
  },
  {
    id:2,
    title: 'Lenovo ideapad 5 AMD R5',
    prodImg: './imgs/notebookTest2.png',
    price:'92000',
    stock: 10
  },
  {
    id:3,
    title: 'Xiaomi Mi Pro i7',
    prodImg: './imgs/notebookTest.png',
    price:'109000',
    stock: 10
  },
  {
    id:4,
    title: 'Lenovo ideapad 5 AMD R5',
    prodImg: './imgs/notebookTest2.png',
    price:'92000',
    stock: 10
  },
  {
    id:5,
    title: 'Xiaomi Mi Pro i7',
    prodImg: './imgs/notebookTest.png',
    price:'109000',
    stock: 10
  },
  {
    id:6,
    title: 'Lenovo ideapad 5 AMD R5',
    prodImg: './imgs/notebookTest2.png',
    price:'92000',
    stock: 10
  }
]

const ItemListContainer = ({className, user}) => {

  const [products, setproducts] = useState([]);
  const [show, setshow] = useState(false);
  
  const promise = new Promise((res, rej) =>{
    setTimeout(()=>{
      res(productsList);
      setshow(true);
    },2000);
  })

  useEffect(() => {
    promise.then((prods)=>{
      setproducts(prods);
    })
    .catch(()=>{
      console.log('error, no se encontraron productos');
    })
  }, []);
  

  const onAdd = (cant) => {
    cant>1 ? 
    console.log(`Se agregaron ${cant} productos al carrito`)
    :console.log(`Se agrego ${cant} producto al carrito`);
  }

  return (
    <div className={className}>  
      <h2>Bienvenido {user}!</h2>
      {show ? <StyledItemList products={products} onAdd= {onAdd} /> 
      : <StyledLoader/>}
    </div>
  )
}

export default ItemListContainer