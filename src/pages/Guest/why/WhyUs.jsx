import React from 'react';
import cl from "./WhyUs.module.css"
import MySection from "../../../components/section/MySection";
import {images} from "../../../img/Guest/img";
import {cars} from "../../../img/Guest/cars/cars";
import Icon from "../../../components/Icon/icon";
import {Link} from "react-router-dom";


const WhyUs = ({id}) => {
    return (
        <MySection id={id} className={cl.whyUs}>
            <img alt={"wheels"} src={images.wheels} draggable={false} className={cl.wheels}/>

            <div className={cl.container}>
                <img alt={"cars"} src={cars.threeCars} draggable={false} className={cl.header}/>

                <div className={cl.whyUsText}>
                    <div className={cl.leftBlock}>
                        <h2>Why Choose Us</h2>
                        <h1>Best valued deals you will ever find</h1>
                        <p>Discover the best deals you'll ever find with our unbeatable offers. We're
                            dedicated to providing you with the best value for your money, so you can enjoy
                            top-quality services and products without breaking the bank. Our deals are
                            designed to give you the ultimate renting experience, so don't miss out on your
                            chance to save big</p>

                        <Link to={"about#start"}>Find details<Icon>chevron_right</Icon></Link>
                    </div>
                    <div className={cl.rightBlock}>
                        <div className={cl.whyElem}>
                            <img alt={"why1"} src={images.why1} draggable={false}/>
                            <div className={cl.whyElemText}>
                                <h1>Cross Country Drive</h1>
                                <p>Take your driving experience to the next level with our top-notch
                                    vehicles for your cross-country adventures</p>
                            </div>
                        </div>
                        <div className={cl.whyElem}>
                            <img alt={"why1"} src={images.why2} draggable={false}/>
                            <div className={cl.whyElemText}>
                                <h1>All Inclusive Pricing</h1>
                                <p>Get everything you need in one convenient, transparent price with our
                                    all-inclusive pricing policy</p>
                            </div>
                        </div>
                        <div className={cl.whyElem}>
                            <img alt={"why1"} src={images.why3} draggable={false}/>
                            <div className={cl.whyElemText}>
                                <h1>No Hidden Charges</h1>
                                <p>Enjoy peace of mind with our no hidden charges policy. We believe in
                                    transparent and honest pricing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default WhyUs;