import React from 'react';
import cl from "./Testimonials.module.css"
import {images} from "../../../img/Guest/img";
import Icon from "../../../components/Icon/icon";


const Testimonials = ({id}) => {
    return (
        <section id={id} className={cl.test}>
            <div className={cl.container}>
                <h2>Reviewed by People</h2>
                <h1>Client's Testimonials</h1>
                <p>Discover the positive impact we've made on the our clients by reading through their
                    testimonials. Our clients have experienced our service and results, and they're eager to
                    share their positive experiences with you</p>

                <div className={cl.cardsArea}>
                    <div className={cl.card}>
                        <p>"We rented a car from this website and had an amazing experience! The booking was
                            easy and the rental rates were very affordable"</p>
                        <div className={cl.cardImg}>
                            <img alt={"cardImg"} src={images.gosling} draggable={false}/>
                            <div>
                                <h1>Juan Gosling</h1>
                                <h2>Los Angeles</h2>
                            </div>
                            <Icon>format_quote</Icon>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <p>"The car was in great condition and made our trip even better. Highly recommend
                            for this car rental website!"</p>
                        <div className={cl.cardImg}>
                            <img alt={"cardImg"} src={images.benedict} draggable={false}/>
                            <div>
                                <h1>Benedict Overwatch</h1>
                                <h2>New York</h2>
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