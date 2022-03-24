import styled from "styled-components";
import ItemCount from "../ItemCount";

export const StyledItemCount = styled(ItemCount)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 2rem auto;

    border-radius: 5px;
    overflow: hidden;

    border: 1px solid ${({theme}) => theme.colors.secondary};

    background-color: ${({theme}) => theme.colors.main};
    color: ${({theme}) => theme.colors.secondary};

    width: 15rem;
    height: 18rem;

    user-select: none;

    h3{
        font-size: 1.5rem;
        line-height: 2rem;

        background-color: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.main};
    }

    div{
        button{
            width: 100%;
            height: 2rem;
            margin: 0;

            font-family: 'Saira Condensed', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;
            font-size: 1rem;
            letter-spacing: 0.2rem;
            line-height: 1.5rem;
            font-weight: 600;
            
            

            background-color: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.main};
            
            border: none;
            border-top: 1px outset ${({theme}) => theme.colors.secondary};
            border-radius: 0 0 5px 5px;
            
            &:active{
                font-size: 0.98rem;
                border: 2px inset ${({theme}) => theme.colors.primary};
            }
        }
    
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
            height: 2rem;

            div{
                font-size: 1.3rem;
                font-weight: 600;

                color: ${({theme}) => theme.colors.secondary};
            }
        }
        
    }
`