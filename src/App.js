import { React } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles/Global.styled.js';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext.jsx';
import { StyledCartContainer } from './components/Cart/styles/CartContainer.styled.js';
import Checkout from './components/Checkout/Checkout.jsx';
import UserContextProvider from './context/UserContext.jsx';
import { StyledUserNav } from './components/UserNav/styles/UserNav.styles.js';
import {Toaster} from 'react-hot-toast';

const theme = {
  colors: {
    main: 'white',
    lightblue: 'rgb(208, 247, 255)',
    primary: 'rgb(0, 82, 106)',
    secondary: 'rgb(65,65,67)',

    transparent: {
      main: 'rgba(255, 255, 255, 0.2)',
      lightblue: 'rgba(208, 247, 255, 0.2)',
      primary: 'rgb(0,165,212,0.5)',
      secondary: 'rgb(65,65,67,0.2)',
    }
  }
}

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <CartContextProvider>
          <GlobalStyles />
          <NavBar />
          <StyledUserNav/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/details/:id' element={<ItemDetailContainer />} />
            <Route path='/categories/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={<StyledCartContainer/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/reactjs-e-commerceJulianLopez/' element={<ItemListContainer/>} />
            <Route path='*' element={<h1>Error 404 No se encontró la página</h1>} />
          </Routes>
          <Toaster/>
        </CartContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
