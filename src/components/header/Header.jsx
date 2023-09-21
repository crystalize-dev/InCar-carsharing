import React from 'react';
import cl from "./Header.module.css"
import {images} from "../../img/Guest/img";
import Icon from "../Icon/icon";
import {Link} from "react-router-dom";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import {useTranslation} from "i18nano";


const Header = ({id, header, setMenu, setModal, setType}) => {

    const text = useTranslation()

    const openForm = (type) => {
        setModal(true)
        setType(type)
    }

    return (
        <>
            <header id={id} className={cl.langHeader}>
                <LangSwitcher />
            </header>

            <header ref={header} className={cl.header}>
                <Link to={"/"}><img alt="logo" src={images.logo} draggable={false}/></Link>

                <div className={cl.navigation}>
                    <Link to={"/"}>{text('header.links.home')}</Link>
                    <Link to={"about"}>{text('header.links.about')}</Link>
                    <Link to={"models"}>{text('header.links.models')}</Link>
                    <Link to={"testimonials"}>{text('header.links.test')}</Link>
                    <Link to={"team"}>{text('header.links.team')}</Link>
                    <Link to={"contact"}>{text('header.links.contact')}</Link>
                </div>

                <div className={cl.btnsArea}>
                    <Icon onClick={() => setMenu(true)}>menu</Icon>

                    <button onClick={() => openForm('login')}>{text('header.button.log')}</button>
                    <button onClick={() => openForm('register')}>{text('header.button.reg')}</button>
                </div>
            </header>
        </>
    );
};

export default Header;