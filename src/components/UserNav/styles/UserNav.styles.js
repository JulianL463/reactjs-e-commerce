import styled from "styled-components";
import UserNav from "../UserNav";

export const StyledUserNav = styled(UserNav)`

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.transparent.primary};
    

    h3{
        color: ${({ theme }) => theme.colors.main};
        font-weight: 600;
        font-size: 1.3rem;
    }

    Button, .inputButton{
        padding:0 1rem;

        cursor: pointer;
        height: 100%;
        width:100%;



        font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;
        letter-spacing: 0.2rem;
        font-size: 1.2rem;

        border: none;
        
        color: ${({ theme }) => theme.colors.main};
        background-color: ${({theme}) => theme.colors.transparent.primary};

        &:hover{
            color: ${({ theme }) => theme.colors.secondary};
            background-color: ${({theme}) => theme.colors.main};
            transition: 0.5s;
        }
    }

    div{
        display: flex;
        gap: 1rem;
        flex-direction:column;
        width:70%;


        form{
            display: flex;
            gap: 1rem;
            flex-direction:column;
            height: 100%;


            input{
                height: 100%;
                border:0;
                padding:0 1rem;

                font-size: 1.2rem;
            }
        }

        
    }

    @media (min-width: 725px){

        flex-direction: row;

        h3{
            margin-right: 2rem;
        }

        Button, .inputButton{       
            width:auto;
        }

        div{
            width:auto;

            form{
                gap: 1rem;
                flex-direction:row;
                input{
                    
                }
            }        
        }
    }
    @media (min-width: 1100px){

        div{
            flex-direction:row;
       
        }
    }

`