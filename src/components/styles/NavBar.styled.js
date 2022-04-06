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
        background-color: ${({theme})=>theme.colors.main};
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
    color: ${({theme})=>theme.colors.main};
`;

export const Nav = styled.nav`
    position:sticky;
    top:0;
    z-index:10;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-content:space-between;
    justify-items: center;
    align-items: center;
    padding: 5px 1rem;

    background-color: ${({theme}) => theme.colors.transparent.main};
    backdrop-filter: blur(10px);

    ul{
        display: none;
    }

    ${StyledBurger}{
        order: 0;
        justify-self: left;
    }
    .logoLink{
        order: 1;
    }
    ${StyledCartWidget}{
        order: 2;
        justify-self: right;
    }

    @media (min-width: 725px){
        .logoLink{
            order: 0;
        }
        ul{
         display: block;
        }
        li{
            display: inline-block;
            margin: 0 1rem;
            
            a{
                color: ${({theme})=>theme.colors.main};
                text-decoration: none;
            }
        }
    }
`;