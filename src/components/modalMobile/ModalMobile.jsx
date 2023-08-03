import React from 'react';
import cl from "./ModalMobile.module.css"
import classnames from "classnames";
import Icon from "../Icon/icon";


const ModalMobile = ({menu, setMenu}) => {
    return (
        <div className={menu ? classnames(cl.modalMobile, cl.show) : cl.modalMobile}>
            <Icon onClick={() => setMenu(false)}>close</Icon>

            <a onClick={() => setMenu(false)} href={"#home"}>Home</a>
            <a onClick={() => setMenu(false)} href={"#about"}>About</a>
            <a onClick={() => setMenu(false)} href={"#models"}>Models</a>
            <a onClick={() => setMenu(false)} href={"#testimonials"}>Testimonials</a>
            <a onClick={() => setMenu(false)} href={"#team"}>Our team</a>
            <a onClick={() => setMenu(false)} href={"#contact"}>Contact</a>
            <a onClick={() => setMenu(false)} href={"#contact"}>Sign In</a>
        </div>
    );
};

export default ModalMobile;