import React, {useState} from "react";
import { Nav, StyledBurger, StyledCartWidget } from "./styles/NavBar.styled";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const openMenu = () =>{
        setOpen(!open);
    }
    return(
        <Nav open={open}>
                <Link to='/' className="logoLink"><img src='https://iili.io/MN1zqN.png' alt=""/></Link>
                <ul>
                    <li className="frostedMenu"><NavLink to="/">Inicio</NavLink></li>
                    <li className="frostedMenu"><NavLink to="categories/tablets">Tablets</NavLink></li>
                    <li className="frostedMenu"><NavLink to="categories/notebooks">Notebooks</NavLink></li>
                    <li className="frostedMenu"><NavLink to="categories/pc">PC de escritorio</NavLink></li>
                </ul>
                <StyledCartWidget/>
                <StyledBurger open={open} openMenu={openMenu}/>
        </Nav>
    )
}

export default NavBar;