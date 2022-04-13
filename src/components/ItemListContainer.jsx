import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StyledItemList from './styles/ItemList.styled';
import { StyledLoader } from './styles/Loader.styled';

const ItemListContainer = ({className, user}) => {

  const {id} = useParams();

  const [products, setproducts] = useState([]);
  const [show, setshow] = useState(false);

  useEffect(() => {
    setshow(false);

    fetch('https://run.mocky.io/v3/5100376d-bbab-416e-8127-65ad2344d6a4')
    .then((res)=> res.json())
    .then((prods)=>{
      if(prods.some(prod => prod.category === id)){
        setproducts(prods.filter(prod => prod.category === id));
      }else{
        setproducts(prods);
      }
    })
    .catch(()=>{
      console.log('error, no se encontraron productos');
    })
    .finally(()=>{
      setshow(true);
    })
  }, [id]);
  

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