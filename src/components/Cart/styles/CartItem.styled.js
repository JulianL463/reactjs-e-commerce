import styled from "styled-components";
import CartItem from "../CartItem";

export const StyledCartItem = styled(CartItem)`

    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 3fr 2fr 1fr;
    grid-gap: 0.2rem;
    width:100%;
    height:23.75vw;

    text-align:center;
    font-size:1rem;

    div{
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .imgCell{
        grid-column:1 / 2;
        grid-row: 1 / 3;
        overflow: hidden;

        background-color:black;
        border: 1px solid ${({ theme }) => theme.colors.transparent.lightblue};


        img{
            width:auto;
            height:100%;
        }

        
    }
    .titleCell{
        grid-row: 1 / 2;
        grid-column: 2 / 4;

        padding-left:1rem;

        text-decoration:none;
        width:100%;
        height:100%;

        color:${({ theme }) => theme.colors.main};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        display:flex;
        align-items:center;

        &:active{
            text-decoration:none;
        }
    }

    button{
        cursor: pointer;
        width: 100%;
        height: 100%;

        font-size: 1.2rem;
        
        color: ${({ theme }) => theme.colors.main};
        
        &:active{
            font-size: 1rem;
        }
    }
    .cantCell{
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
    .priceCell{
        grid-row: 2 / 3;
        grid-column: 3 / 5;
    }

    @media (min-width: 725px){
        height: 18.75vw;

        font-size:1.2rem;

        .titleCell{
            justify-content:center;
        }
    }
    @media (min-width: 1100px){
        height:12.5vw;
    }

`