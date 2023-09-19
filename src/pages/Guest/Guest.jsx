import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "i18nano";
import cl from "./Guest.module.css"

import {images} from "../../img/Guest/img";
import Home from "./home/Home";
import Book from "./book/Book";
import Plans from "./plans/Plans";
import Models from "./models/Models";
import WhyUs from "./why/WhyUs";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import App from "./app/App";


const Guest = () => {
    const params = useSearchParams()
    const text = useTranslation()

    useEffect(() => {
        let header = document.getElementById('book')
        if (params[0].get('where') === 'book') header.scrollIntoView()
    }, [params])

    return (
        <>
            <div className={cl.container}>
                <div className={cl.content}>
                    <img alt={"background"} src={images.background} className={cl.background} draggable={false}/>

                    <Home id={"home"}/>
                    <Book id={"book"}/>
                    <Plans id={"plans"}/>
                    <Models id={"models"}/>
                </div>
            </div>

            <div className={cl.delimiter}>
                <h1>{text('delimiter.h1')}</h1>
                <h2>{text('delimiter.h2')}<span>24/7</span>{text('delimiter.h2.after')}</h2>
            </div>

            <WhyUs id={"why"}/>
            <Testimonials id={"testimonials"}/>
            <Faq id={"faq"}/>
            <App id={"app"}/>
        </>
    );
};

export default Guest;