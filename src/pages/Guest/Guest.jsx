import React, {useEffect, useState} from 'react';
import {useInView} from "react-intersection-observer";
import cl from "./Guest.module.css"
import classnames from "classnames";
import Icon from "../../components/Icon/icon";

import {images} from "../../img/Guest/img";
import Home from "./home/Home";
import Header from "../../components/header/Header";
import ModalMobile from "../../components/modalMobile/ModalMobile";
import Book from "./book/Book";
import Plans from "./plans/Plans";
import Models from "./models/Models";
import WhyUs from "./why/WhyUs";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import App from "./app/App";
import Footer from "../../components/footer/Footer";


const Guest = () => {
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

            <div className={cl.wrapper}>
                <div className={cl.container}>
                    <Header id={"start"} header={ref} setMenu={setMenu} />

                    <ModalMobile menu={menu} setMenu={setMenu} />

                    <div className={cl.content}>
                        <img alt={"background"} src={images.background} className={cl.background} draggable={false} />

                        <Home id={"home"} />
                        <Book id={"book"} modal={modal} setModal={setModal} />
                        <Plans id={"plans"} />
                        <Models id={"models"} />
                    </div>
                </div>

                <div className={cl.delimiter}>
                    <h1>Save big with our cheap car rental!</h1>
                    <h2>Top Airports. Local Suppliers. <span>24/7</span> Support</h2>
                </div>

                <WhyUs id={"why"} />
                <Testimonials id={"testimonials"} />
                <Faq id={"faq"} />
                <App id={"app"} />

                <Footer id={"end"} />
            </div>
        </>
    );
};

export default Guest;