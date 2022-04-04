import styled from "styled-components";
import Item from "../Item";

export const StyledItem = styled(Item)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem auto;
    overflow: hidden;

    /* border: 1px solid ${({theme}) => theme.colors.secondary}; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    width: 15rem;
    height: 18.75rem;

    user-select: none;

    position: relative;

    img{
        position: absolute;
        background-color: black;
        height: 100%;
        left:50%;
        transform: translateX(-50%);
    }

    h3{
        font-size: 1.1rem;
        line-height: 1.2rem;
        
        padding: 5px 0;

        background-color: ${({theme}) => theme.colors.transparent.lightblue};
        backdrop-filter: blur(2px);
    }

    div{
        .itemCount{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
            height: 2.2rem;

            background-color: ${({theme}) => theme.colors.transparent.lightblue};
            backdrop-filter: blur(2px);


            .cant{
                width: 50px;
                height: 1.5rem;
                font-size: 1.2rem;
                line-height:1.5rem;
                letter-spacing:0;
                border-radius:0.75rem;
                background-color: rgba(20, 20, 20, 0.6);
            }
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
                margin: 2px 0 0 0;

                font-size: 1.1rem;
                line-height:3.5rem;

                background-color: ${({theme}) => theme.colors.transparent.lightblue};
                backdrop-filter: blur(2px);
            }

            button{
                width: 49%;
                height: 100%;
                margin: 2px 0 0 0;

                font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;//'Saira Condensed',
                font-size: 1.1rem;
                letter-spacing: 0.2rem;

                border: none;
                background-color: ${({theme}) => theme.colors.transparent.lightblue};
                color: ${({theme}) => theme.colors.main};
                backdrop-filter: blur(2px);
                
                &:active{
                    font-size: 0.98rem;
                }
            }
        }
    }
`