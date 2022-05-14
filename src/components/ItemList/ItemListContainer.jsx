import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StyledItemList from './styles/ItemList.styled';
import { StyledLoader } from '../Loader/styles/Loader.styled';
import { db } from '../../firebase/firebase'; 
import { collection, query, getDocs, where } from 'firebase/firestore';
import {toast} from 'react-hot-toast'


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
        toast.error('error, no se encontraron productos', {
            position: 'bottom-right',
            style: {
                borderRadius: '5px',
                background: '#fff',
                color: '#000000',
            },
        });
      })
      .finally(() => {
        setShow(true);
      })

  }, [category]);


  return (
    <div className={className}>
      {show ? <StyledItemList products={products}/>
        : <StyledLoader />}
    </div>
  )
}

export default ItemListContainer