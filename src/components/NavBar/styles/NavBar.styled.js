import styled from "styled-components";
import Burger from "../Burger";
import CartWidget from "../CartWidget";


export const StyledBurger = styled(Burger)`

    height: 32px;
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    div{
        background-color: ${({ theme }) => theme.colors.main};
        height: 4px;
        width: ${({ open }) => !open ? '100%' : '115%'};
        border-radius: 2px;
        transition:0.5s;
    }

    div:first-child{
        transform: ${({ open }) => !open ? 'rotate(0) translateY(0)' : 'rotate(45deg)  translate(2px,9px)'}; 
    }
    div:not(:first-child):not(:last-child) {
        display: ${({ open }) => !open ? 'block' : 'none'};
    }
    div:last-child{
        transform: ${({ open }) => !open ? 'rotate(0) translateY(0)' : 'rotate(-45deg)  translate(2px,-9px)'}; 
    }

    @media (min-width: 725px){
        display: none;
    }
`;


export const StyledCartWidget = styled(CartWidget)` 
    color: ${({ theme }) => theme.colors.main};
    div{
        height: 25px;
        width: auto;
    }
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

    background-color: ${({ theme }) => theme.colors.transparent.main};
    backdrop-filter: blur(10px);

    ul{
        position: absolute;
        top: 50px;
        left: 0px;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.primary};
        width:100%;     
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}; 
        transition: 1s;

        .frostedMenu{
            background-color: ${({ theme }) => theme.colors.transparent.lightblue};
            backdrop-filter: blur(5px);
            box-sizing:border-box;
            box-shadow: -0px -0px 15px ${({ theme }) => theme.colors.transparent.lightblue} inset;
            border: 1px solid ${({ theme }) => theme.colors.transparent.lightblue};
        }

        li{
            display: block;
            margin: 1rem 1rem;
            font-size:1.2rem;
            
            
            a{
                display: block;
                font-size:1.2rem;
                color: ${({ theme }) => theme.colors.main};
                text-decoration: none;
                &:active{
                    color: ${({ theme }) => theme.colors.secondary};
                    background-color: ${({ theme }) => theme.colors.main};
                }
            }

        }
    }

    ${StyledBurger}{
        order: 0;
        justify-self: left;
    }
    .logoLink{
        order: 1;
        height:40px;
    }
    ${StyledCartWidget}{
        order: 2;
        justify-self: right;

        div{
            position:relative;
            

            .cantProds{
                position:absolute;
                top:44%;
                left:60%;
                transform: translate(-50%, -50%);
                text-align:center;
                
                h5{
                    color:black;
                    letter-spacing:0;
                    font-weight: bold;
                }
            }
        }
    }

    @media (min-width: 725px){
        .logoLink{
            order: 0;
        }
        ul{
            display: block;
            position: static;
            top: 50px;
            left: 0px;
            text-align: center;
            background-color: rgba(0,0,0,0);
            width:100%;     
            transform: translateX(0); 

            .frostedMenu{
                background-color: rgba(0,0,0,0);
                backdrop-filter: blur(0px);
                box-shadow: none;
                border: none;
            }

            li{
                display: inline-block;
                margin: 0 1rem;
                
                a{
                    font-size:1rem;
                    
                    text-decoration: none;
                }
            }
        }
    }
`;