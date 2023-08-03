import React from 'react';
import cl from "./Header.module.css"
import {images} from "../../img/Guest/img";
import Icon from "../Icon/icon";


const Header = ({id, header, setMenu}) => {
    return (
        <header id={id} ref={header} className={cl.header}>
            <img alt="logo" src={images.logo} draggable={false}/>

            <div className={cl.navigation}>
                <a href={"home"}>Home</a>
                <a href={"about"}>About</a>
                <a href={"models"}>Models</a>
                <a href={"testimonials"}>Testimonials</a>
                <a href={"team"}>Our team</a>
                <a href={"contact"}>Contact</a>
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