import React from 'react';
import cl from "./Plans.module.css"
import MySection from "../../../components/section/MySection";
import {images} from "../../../img/Guest/img";


const Plans = ({id}) => {
    return (
        <MySection id={id} className={cl.plan}>
            <h2>Plan your trip now</h2>
            <h1>Quick & easy car rental</h1>
            <div className={cl.infoArea}>
                <div className={cl.planElem}>
                    <img alt={"info1"} src={images.info1} draggable={false}/>
                    <h1>Select Car</h1>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect
                        car
                        to meet your needs</p>
                </div>
                <div className={cl.planElem}>
                    <img alt={"info2"} src={images.info2} draggable={false}/>
                    <h1>Contact Operator</h1>
                    <p>Our knowledgeable and friendly operators are always ready to help with any
                        questions
                        or concerns</p>
                </div>
                <div className={cl.planElem}>
                    <img alt={"info3"} src={images.info3} draggable={false}/>
                    <h1>Let's Drive</h1>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range
                        of
                        cars</p>
                </div>
            </div>
        </MySection>
    );
};

export default Plans;