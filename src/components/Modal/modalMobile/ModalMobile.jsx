import React from 'react';
import cl from "./ModalMobile.module.css"
import classnames from "classnames";
import Icon from "../../Icon/icon";
import {Link} from "react-router-dom";


const ModalMobile = ({menu, setMenu, setModal, setType}) => {

    const openModal = () => {
        setMenu(false)
        setModal(true)
        setType('login')
    }

    return (
        <div className={menu ? classnames(cl.modalMobile, cl.show) : cl.modalMobile}>
            <Icon onClick={() => setMenu(false)}>close</Icon>

            <Link onClick={() => setMenu(false)} to={"/"}>Home</Link>
            <Link onClick={() => setMenu(false)} to={"about"}>About</Link>
            <Link onClick={() => setMenu(false)} to={"models"}>Models</Link>
            <Link onClick={() => setMenu(false)} to={"testimonials"}>Testimonials</Link>
            <Link onClick={() => setMenu(false)} to={"team"}>Our team</Link>
            <Link onClick={() => setMenu(false)} to={"contact"}>Contact</Link>
            <a onClick={() => openModal()} href={"#modal"}>Sign In</a>
        </div>
    );
};

export default ModalMobile;