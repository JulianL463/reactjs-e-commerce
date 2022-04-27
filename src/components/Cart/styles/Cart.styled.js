import styled from "styled-components";
import Cart from "../Cart";

export const StyledCart = styled(Cart)`

    display:flex;
    flex-direction:column;
    row-gap: 1rem;
    width:95vw;
    background-color: ${({ theme }) => theme.colors.transparent.secondary};
    
    .title{
        grid-column: 1 / 3;
        font-size: 2rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .cartSumary{
        display:grid;
        grid-template-rows: 2fr 1fr 2fr 0.5fr 1fr;
        grid-template-columns: 1fr 1fr;
        margin-top:3rem;

        width:100%;

        text-align:center;
        
        font-size: 1.5rem;

        button{
            grid-column: 1 / 3;
            cursor: pointer;
            width: 100%;
            height: 100%;

            font-size: 1.2rem;
            
            color: ${({ theme }) => theme.colors.main};
            
            &:active{
                font-size: 1rem;
            }
        }

        .sumaryFinishButton{
            grid-column: 1 / 3;
        }

        .sumaryClearButton{
            grid-row: 5 / 6;
        }
    }

    

    @media (min-width: 725px){
        width:75vw;

        
    }
    @media (min-width: 1100px){
        width:50vw;
    }
    
`