import React from "react";
import { Nav, StyledBurger, StyledCartWidget } from "./styles/NavBar.styled";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return(
        <Nav>
                <Link to='/' className="logoLink"><img src='https://iili.io/MN1zqN.png' alt=""/></Link>
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