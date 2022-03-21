import React from "react";
import logo from '../imgs/logobuyit-small.png';
import Burger from "./Burger";
import { Nav } from "./styles/NavBar.styled";


const NavBar = () => {
    return(
        <>
            <Nav>
                <img src={logo} alt=""/>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Notebooks</a></li>
                    <li><a href="#">PC de escritorio</a></li>
                </ul>
                <Burger />
            </Nav>
        </>
    )
}

export default NavBar;