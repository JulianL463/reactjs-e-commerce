import React from "react";
import { Nav, StyledBurger, StyledCartWidget } from "./styles/NavBar.styled";
import StyledContainer from "./styles/Container.styled";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return(
        <Nav>
                <Link to='/' className="logoLink"><img src='/imgs/logobuyit-small.png' alt=""/></Link>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="categories/tablets">Tablets</NavLink></li>
                    <li><NavLink to="categories/notebooks">Notebooks</NavLink></li>
                    <li><NavLink to="categories/pc">PC de escritorio</NavLink></li>
                </ul>
                <StyledCartWidget/>
                <StyledBurger />
        </Nav>
    )
}

export default NavBar;