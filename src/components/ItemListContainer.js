import { React, useState, useEffect } from 'react'
import StyledItemList from './styles/ItemList.styled';


const productsList = [
  {
    tittle: 'Xiaomi Mi Pro i7',
    prodImg: './imgs/notebookTest2.png',
    price:'109000',
    stock: 10
  },
  {
    tittle: 'Lenovo ideapad 5 AMD R5',
    prodImg: './imgs/notebookTest.png',
    price:'92000',
    stock: 10
  },
  {
    tittle: 'Xiaomi Mi Pro i7',
    prodImg: './imgs/notebookTest2.png',
    price:'109000',
    stock: 10
  },
  {
    tittle: 'Lenovo ideapad 5 AMD R5',
    prodImg: './imgs/notebookTest.png',
    price:'92000',
    stock: 10
  },
  {
    tittle: 'Xiaomi Mi Pro i7',
    prodImg: './imgs/notebookTest2.png',
    price:'109000',
    stock: 10
  },
  {
    tittle: 'Lenovo ideapad 5 AMD R5',
    prodImg: './imgs/notebookTest.png',
    price:'92000',
    stock: 10
  }
]

const ItemListContainer = ({className, user}) => {

  const [products, setproducts] = useState([]);
  
  const promise = new Promise((res, rej) =>{
    setTimeout(()=>{
      res(productsList);
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
      <StyledItemList products={products} onAdd= {onAdd} />
    </div>
  )
}

export default ItemListContainer