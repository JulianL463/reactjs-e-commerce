import styled from "styled-components";
import ItemCount from "../ItemCount"

export const StyledItemCount = styled(ItemCount)`

    
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    text-decoration: none;

    margin: 0;

    
    div{
        display: flex;
        justify-content: space-around;
        align-items:center;
        width: 100%;
    }

    .minus, .plus{
        cursor: pointer;
    }

    div{
        height:100%;
    }
    div:first-child{
        margin-right:5px;
    }
    .cant{
        width: 50px;
        height: 1.5rem;
        text-align:center;
        font-size: 1.2rem;
        line-height:1.5rem;
        letter-spacing:0;
        border-radius:0.75rem;
        background-color: rgba(20, 20, 20, 0.6);
    }

    .itemCart{
        width:100%;
        height:100%;
        text-align:center;

        cursor:pointer;

        .addToCartIcon{
            width:2.5rem;
        }
    }

    
      
    button{
        cursor: pointer;
        width: 100%;
        height: 100%;

        font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;//'Saira Condensed',
        font-size: 2rem;
        letter-spacing: 0.2rem;
        

        border: none;
        color: ${({ theme }) => theme.colors.main};
        background:none;
        
        &:active{
            font-size: 1.9rem;
        }
    }
    
`