import React from "react";
import './NavBar.css';
import logo from '../imgs/logobuyit-small.png';


const NavBar = () => {
    return(
        <nav>
            <img src={logo} alt=""/>
            <ul className="navLinks">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Notebooks</a></li>
                <li><a href="#">PC de escritorio</a></li>
            </ul>
            <div className="hamburger"><img src="hambIcon" alt="" /></div>
        </nav>
    )
}

export default NavBar;