import React from 'react';
import cl from "./ModalMobile.module.css"
import classnames from "classnames";
import Icon from "../../Icon/icon";
import {Link} from "react-router-dom";
import {useTranslation} from "i18nano";
import LangSwitcher from "../../LangSwitcher/LangSwitcher";


const ModalMobile = ({menu, setMenu, setModal, setType}) => {
    const text = useTranslation()

    const openModal = () => {
        setMenu(false)
        setModal(true)
        setType('login')
    }

    return (
        <div className={menu ? classnames(cl.modalMobile, cl.show) : cl.modalMobile}>
                        <Icon onClick={() => setMenu(false)}>close</Icon>

                        <LangSwitcher text={true}/>s

                        <Link onClick={() => setMenu(false)} to={"/"}>{text('header.links.home')}</Link>
                        <Link onClick={() => setMenu(false)} to={"about"}>{text('header.links.about')}</Link>
                        <Link onClick={() => setMenu(false)} to={"models"}>{text('header.links.models')}</Link>
                        <Link onClick={() => setMenu(false)} to={"testimonials"}>{text('header.links.test')}</Link>
                        <Link onClick={() => setMenu(false)} to={"team"}>{text('header.links.team')}</Link>
                        <Link onClick={() => setMenu(false)} to={"contact"}>{text('header.links.contact')}</Link>

                        <a onClick={() => openModal()} href={"#modal"}>{text('header.button.log')}</a>
        </div>
    );
};

export default ModalMobile;