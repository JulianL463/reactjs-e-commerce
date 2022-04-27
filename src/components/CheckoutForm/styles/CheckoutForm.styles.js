import styled from "styled-components";
import CheckoutForm from "../CheckoutForm";

export const StyledCheckoutForm = styled(CheckoutForm)`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: 5rem auto;
    width:100vw;

    form{
        width: 85%;
    }

    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin: 1rem auto;
        

        label{
            flex:1;
            font-size:1.2rem;
        }
        input{
            flex:2;
            padding:0 10px;

            font-size: 1rem;

            &::placeholder{
                color: ${({ theme }) => theme.colors.main};
            }

        }
    }

    .submitPurchase{
        width:100%;
        height:2rem;
        margin: 1.5rem 0;

        cursor: pointer;

        font-size: 1.2rem;

        &:hover{
            color: ${({ theme }) => theme.colors.main};
        }

        &:active{
            background-color: ${({ theme }) => theme.colors.transparent.primary};
        }
    }


    @media (min-width: 725px){
        width:80vw;

        div{
            flex-direction:row;
        }
    }
    @media (min-width: 1100px){
        width:60vw;
    }

`