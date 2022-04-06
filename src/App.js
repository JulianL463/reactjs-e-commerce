import { React } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled.js';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { StyledItemListContainer } from './components/styles/ItemListContainer.styled.js';
import { Routes, Route } from 'react-router-dom';

const theme = {
  colors: {
      main: 'white',
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

const user = {name:'Carlos', surname:'Perez', alias:' CarlosP_22'}

const App = () => {


  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route path='/' element = {<StyledItemListContainer user={user.alias} />} />
          <Route path='/details/:id' element = {<ItemDetailContainer />} />
          <Route path='/categories/:id' element = {<StyledItemListContainer user={user.alias} />} />
          <Route path='/cart' element = {<h1>Cart</h1>} />
          <Route path='*' element = {<h1>Error 404 No se encontró la página</h1>} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
