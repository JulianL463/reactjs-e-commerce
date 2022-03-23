import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar.js';
import GlobalStyles from './components/styles/Global.styled.js';
import { StyledItemListContainer } from './components/styles/ItemListContainer.styled.js';

const theme = {
  colors: {
      main: 'white',
      test: 'red',
      primary: 'rgb(0,165,212)',
      secondary: 'rgb(65,65,67)',
  }
}

const user = {name:'Carlos', surname:'Perez', alias:' CarlosP_22'}

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <StyledItemListContainer user={user.alias} />
      </>
    </ThemeProvider>
  );
}

export default App;
