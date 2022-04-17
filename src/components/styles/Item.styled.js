import styled from "styled-components";
import Item from "../Item";

export const StyledItem = styled(Item)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem auto;
    overflow: hidden;

    border: 1px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    width: 15rem;
    height: 18.75rem;

    user-select: none;
    position: relative;

    
    .detailLink{
        position: absolute;
        top:0;
        height: 100%;
        left:50%;

        img{
            background-color: black;
            height: 100%;
            transform: translateX(-50%);
        }
    }
    

    h3{
        font-size: 1.1rem;
        line-height: 1.2rem;
        
        padding: 5px 0;
    }

    .buy{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: 3.5rem;
        margin: 2px 0 0 0;

        .price{
            width: 49%;
            height: 100%;

            font-size: 1.1rem;
            line-height:3.5rem;

        }

        .buyLink {
            width: 49%;
            height: 100%;

            button{
                cursor: pointer;
                width: 100%;
                height: 100%;

                font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;//'Saira Condensed',
                font-size: 1.1rem;
                letter-spacing: 0.2rem;

                border: none;
                color: ${({ theme }) => theme.colors.main};
                
                &:active{
                    font-size: 0.98rem;
                }
            }   
        }
    }
    
`