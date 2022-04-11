import styled from 'styled-components'
import ItemList from '../ItemList'

const StyledItemList = styled(ItemList)`

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    

    margin: 1rem auto;

    @media (min-width: 725px){
        grid-template-columns: repeat(2, 18rem);
    }
    @media (min-width: 1100px){
        grid-template-columns: repeat(3, 18rem);
    }

`

export default StyledItemList