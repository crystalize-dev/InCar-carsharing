import React from 'react';
import cl from "./Testimonials.module.css"
import {images} from "../../../img/Guest/img";
import Icon from "../../../components/Icon/icon";
import {useTranslation} from "i18nano";


const Testimonials = ({id}) => {
    const text = useTranslation()

    return (
        <section id={id} className={cl.test}>
            <div className={cl.container}>
                <h2>{text('test.h2')}</h2>
                <h1>{text('test.h1')}</h1>
                <p>{text('test.p')}</p>

                <div className={cl.cardsArea}>
                    <div className={cl.card}>
                        <p>{text('test.test1')}</p>
                        <div className={cl.cardImg}>
                            <img alt={"cardImg"} src={images.gosling} draggable={false}/>
                            <div>
                                <h1>{text('test.test1.name')}</h1>
                                <h2>{text('moscow')}</h2>
                            </div>
                            <Icon>format_quote</Icon>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <p>{text('test.test2')}</p>
                        <div className={cl.cardImg}>
                            <img alt={"cardImg"} src={images.benedict} draggable={false}/>
                            <div>
                                <h1>{text('test.test2.name')}</h1>
                                <h2>{text('ekb')}</h2>
                            </div>
                            <Icon>format_quote</Icon>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;