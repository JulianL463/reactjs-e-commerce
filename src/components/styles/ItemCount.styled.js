import styled from "styled-components";
import ItemCount from "../ItemCount";

export const StyledItemCount = styled(ItemCount)`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height:100%;

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
        cursor:pointer;
    }
    
`