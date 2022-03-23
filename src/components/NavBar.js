import React from "react";
import logo from '../imgs/logobuyit-small.png';
import { Nav, StyledBurger, StyledCartWidget } from "./styles/NavBar.styled";
import StyledContainer from "./styles/Container.styled";


const NavBar = () => {
    return(
        <StyledContainer>
            <Nav>
                    <img src={logo} alt=""/>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">PC de escritorio</a></li>
                    </ul>
                    <StyledCartWidget/>
                    <StyledBurger />
            </Nav>
        </StyledContainer>
    )
}

export default NavBar;