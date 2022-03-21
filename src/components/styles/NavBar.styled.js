import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content:space-between;
    justify-items: right;
    align-items: center;
    padding: 5px 0;

    ul{
        display: none;
    }

    li{
        display: inline-block;
        margin-right: 2rem;
        
        a{
            color: rgb(65,65,67);
            text-decoration: none;
            font-weight: 600;
        }
    }

    @media (min-width: 600px){
        ul{
         display: block;
        }
    }
`;

export const StyledBurger = styled.div`

    height: 30px;
    width: 30px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    
    
    div{
        background-color: rgb(65,65,67);
        height: 5px;
        width: 100%;
    }

    @media (min-width: 600px){
        display: none;
    }
`;

/* rgb(0,165,212) Blue
rgb(65,65,67) DarkGrey */