import React from 'react';
import cl from "./Header.module.css"
import {images} from "../../img/Guest/img";
import Icon from "../Icon/icon";
import {Link} from "react-router-dom";


const Header = ({id, header, setMenu}) => {
    return (
        <header id={id} ref={header} className={cl.header}>
            <img alt="logo" src={images.logo} draggable={false}/>

            <div className={cl.navigation}>
                <Link to={"/"}>Home</Link>
                <Link to={"about"}>About</Link>
                <Link to={"models"}>Models</Link>
                <Link to={"testimonials"}>Testimonials</Link>
                <Link to={"team"}>Our team</Link>
                <Link to={"contact"}>Contact</Link>
            </div>

            <div className={cl.btnsArea}>
                <Icon onClick={() => setMenu(true)}>menu</Icon>

                <button>Sign In</button>
                <button>Register</button>
            </div>
        </header>
    );
};

export default Header;