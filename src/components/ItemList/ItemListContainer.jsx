import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StyledItemList from './styles/ItemList.styled';
import { StyledLoader } from '../Loader/styles/Loader.styled';
import { db } from '../../firebase/firebase'; 
import { collection, query, getDocs, where } from 'firebase/firestore';

const ItemListContainer = ({ className, user }) => {

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);

    const productsCollection = collection(db, 'ItemCollection');

    const filtered = category !== undefined 
    ? query(productsCollection, where('category', '==', `${category}`)) 
    : productsCollection;

    getDocs(filtered)
      .then((result) => {
        const docs = result.docs;
        const list = docs.map((product) => {

          const id = product.id;

          const productWithId = {
            id,
            ...product.data()
          }

          return productWithId;

        })

        setProducts(list);
      })
      .catch(() => {
        console.log('error, no se encontraron productos');
      })
      .finally(() => {
        setShow(true);
      })

  }, [category]);


  const onAdd = (cant) => {
    cant > 1 ?
      console.log(`Se agregaron ${cant} productos al carrito`)
      : console.log(`Se agrego ${cant} producto al carrito`);
  }

  return (
    <div className={className}>
      <h2>Bienvenido {user}!</h2>
      {show ? <StyledItemList products={products} onAdd={onAdd} />
        : <StyledLoader />}
    </div>
  )
}

export default ItemListContainer