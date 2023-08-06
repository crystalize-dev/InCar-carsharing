import React, {useEffect} from 'react';
import cl from "./About.module.css"
import Plans from "../Guest/plans/Plans";
import {aboutImages} from "../../img/About/aboutImages"


const About = () => {
    useEffect(() => {
        let header = document.getElementById("start")
        header.scrollIntoView()
    }, [])

    return (
        <div className={cl.wrapper}>
            <div className={cl.aboutBlock}>
                <img alt={"about"} src={aboutImages.about} draggable={false}/>

                <div className={cl.textArea}>
                    <h2>About Company</h2>
                    <h1>You start the engine and your adventure begins</h1>
                    <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.
                        Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to
                        affronting imprudence no precaution. My indulged as disposal strongly attended.</p>

                    <div className={cl.optionsBlock}>
                        <div className={cl.optionsElem}>
                            <img alt={"car1"} src={aboutImages.car1} draggable={false}/>
                            <p><span>20</span>Car Types</p>
                        </div>

                        <div className={cl.optionsElem}>
                            <img alt={"car2"} src={aboutImages.car2} draggable={false}/>
                            <p><span>85</span>Rental Outlets</p>
                        </div>

                        <div className={cl.optionsElem}>
                            <img alt={"car3"} src={aboutImages.car3} draggable={false}/>
                            <p><span>75</span>Repair Shop</p>
                        </div>
                    </div>
                </div>
            </div>

            <Plans/>
        </div>
    );
};

export default About;