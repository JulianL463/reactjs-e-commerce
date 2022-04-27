import styled from "styled-components";
import SuccesfullPurchase from "../SuccesfullPurchase";

export const StyledSuccesfullPurchase = styled(SuccesfullPurchase)`

    margin: 5rem auto;
    width:100vw;

    text-align:center;

    h2{
        padding: 1rem;
    }

    h3{
        margin: 20px auto;

        span{
            font-size: 1.2rem;
            color: ${({ theme }) => theme.colors.lightblue}
        }
    }
    
    .back{

        cursor: pointer;

        div{
            width: 100%;
            height:100%;
        }
        
        font-size: 2rem;
        
        color: ${({ theme }) => theme.colors.main};

        text-decoration:none;
    }

    @media (min-width: 725px){
        width:80vw;

        h3{
            margin: 20px auto;

            span{
                font-size: 1.5rem;
                color: ${({ theme }) => theme.colors.lightblue}
            }
        }   
    }
    @media (min-width: 1100px){
        width:60vw;

        h3{
            span{
                font-size: 1.7rem;
            }
        }
    }
`