import Header from "../../components/header/Header";
import ModalMobile from "../../components/Modal/modalMobile/ModalMobile";
import {useInView} from "react-intersection-observer";
import React, {useEffect, useState} from "react";
import cl from "./mainWrapper.module.css"
import classnames from "classnames";
import Icon from "../../components/Icon/icon";
import {Outlet} from "react-router-dom"
import Footer from "../../components/footer/Footer";
import ModalForm from "../../components/Modal/modalForm/ModalForm";


const MainWrapper = () => {
    const [menu, setMenu] = useState(false) // modal menu for mobiles

    const [modal, setModal] = useState(false) // modal form
    const [type, setType] = useState('login') //modal form type

    // arrowUp button
    const {ref, inView} = useInView();
    const [arrowUp, setArrowUp] = useState(false)
    useEffect(() => {
        inView ? setArrowUp(false) : setArrowUp(true)
    }, [inView])

    return (
        <>
            <a href={"#start"} className={arrowUp ? cl.arrowUp : classnames(cl.arrowUp, cl.hideArrow)}>
                <Icon>arrow_upward</Icon>
            </a>

            <div className={cl.wrapper}>
                <Header id={"start"} header={ref} setMenu={setMenu} setModal={setModal} setType={setType}/>

                <ModalMobile menu={menu} setMenu={setMenu} setModal={setModal} setType={setType}/>

                <ModalForm setModal={setModal} modal={modal} type={type} setType={setType}/>

                <Outlet/>

                <Footer id={"end"}/>
            </div>
        </>
    );
};

export default MainWrapper;