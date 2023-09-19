import React, {useEffect} from 'react';
import cl from "./About.module.css"
import Plans from "../Guest/plans/Plans";
import {aboutImages} from "../../img/About/aboutImages"
import {useTranslation} from "i18nano";


const About = () => {
    const text = useTranslation()

    useEffect(() => {
        let header = document.getElementById("start")
        header.scrollIntoView()
    }, [])

    return (
        <div className={cl.wrapper}>
            <div className={cl.aboutBlock}>
                <img alt={"about"} src={aboutImages.about} draggable={false}/>

                <div className={cl.textArea}>
                    <h2>{text('about.h2')}</h2>
                    <h1>{text('about.h1')}</h1>
                    <p>{text('about.p')}</p>

                    <div className={cl.optionsBlock}>
                        <div className={cl.optionsElem}>
                            <img alt={"car1"} src={aboutImages.car1} draggable={false}/>
                            <p><span>20</span>{text('about.info1')}</p>
                        </div>

                        <div className={cl.optionsElem}>
                            <img alt={"car2"} src={aboutImages.car2} draggable={false}/>
                            <p><span>85</span>{text('about.info2')}</p>
                        </div>

                        <div className={cl.optionsElem}>
                            <img alt={"car3"} src={aboutImages.car3} draggable={false}/>
                            <p><span>75</span>{text('about.info3')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Plans/>
        </div>
    );
};

export default About;