import styled from "styled-components";
import Burger from "../Burger";
import CartWidget from "../CartWidget";


export const StyledBurger = styled(Burger)`

    height: 30px;
    width: 30px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    
    
    div{
        background-color: ${({theme})=>theme.colors.secondary};
        height: 4px;
        width: 100%;
        border-radius: 2px;
    }

    @media (min-width: 725px){
        display: none;
    }
`;


export const StyledCartWidget = styled(CartWidget)`
    height: 25px;
    width: auto;
`;

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-content:space-between;
    justify-items: center;
    align-items: center;
    padding: 5px 0;

    ul{
        display: none;
    }

    ${StyledBurger}{
        order: 0;
    }
    img{
        order: 1;
    }
    ${StyledCartWidget}{
        order: 2;
        justify-self: right;
    }

    @media (min-width: 725px){
        img{
            order: 0;
        }
        ul{
         display: block;
        }
        li{
            display: inline-block;
            margin: 0 1rem;
            
            a{
                color: ${({theme})=>theme.colors.secondary};
                text-decoration: none;
                font-weight: 600;
            }
        }
    }
`;