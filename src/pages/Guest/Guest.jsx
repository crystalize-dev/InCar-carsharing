import React, {useEffect} from 'react';
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
import {useSearchParams} from "react-router-dom";


const Guest = () => {
    const params = useSearchParams()

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
                <h1>Save big with our cheap car rental!</h1>
                <h2>Top Airports. Local Suppliers. <span>24/7</span> Support</h2>
            </div>

            <WhyUs id={"why"}/>
            <Testimonials id={"testimonials"}/>
            <Faq id={"faq"}/>
            <App id={"app"}/>
        </>
    );
};

export default Guest;