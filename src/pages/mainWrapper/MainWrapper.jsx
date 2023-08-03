import Header from "../../components/header/Header";
import ModalMobile from "../../components/modalMobile/ModalMobile";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import cl from "../Guest/Guest.module.css";
import classnames from "classnames";
import Icon from "../../components/Icon/icon";
import {Outlet} from "react-router-dom"


const MainWrapper = () => {
    const [menu, setMenu] = useState(false) // modal menu for mobiles
    const [modal, setModal] = useState(null) // modalWindow in #book section

    // arrowUp button
    const {ref, inView} = useInView();
    const [arrowUp, setArrowUp] = useState(false)
    useEffect(() => {
        if (modal) setArrowUp(false)
        else {
            inView ? setArrowUp(false) : setArrowUp(true)
        }
    }, [inView, modal])

    return (
        <>
            <a href={"#start"} className={arrowUp ? cl.arrowUp : classnames(cl.arrowUp, cl.hideArrow)}>
                <Icon>arrow_upward</Icon>
            </a>

            <Header id={"start"} header={ref} setMenu={setMenu} />

            <ModalMobile menu={menu} setMenu={setMenu} />

            <Outlet />
        </>
    );
};

export default MainWrapper;