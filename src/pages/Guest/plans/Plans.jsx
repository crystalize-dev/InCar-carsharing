import React from 'react';
import cl from "./Plans.module.css"
import MySection from "../../../components/section/MySection";
import {images} from "../../../img/Guest/img";
import {useTranslation} from "i18nano";


const Plans = ({id}) => {
    const text = useTranslation()

    return (
        <MySection id={id} className={cl.plan}>
            <h2>{text('plan.h2')}</h2>
            <h1>{text('plan.h1')}</h1>
            <div className={cl.infoArea}>
                <div className={cl.planElem}>
                    <img alt={"info1"} src={images.info1} draggable={false}/>
                    <h1>{text('plan.select')}</h1>
                    <p>{text('plan.select.p')}</p>
                </div>
                <div className={cl.planElem}>
                    <img alt={"info2"} src={images.info2} draggable={false}/>
                    <h1>{text('plan.contact')}</h1>
                    <p>{text('plan.contact.p')}</p>
                </div>
                <div className={cl.planElem}>
                    <img alt={"info3"} src={images.info3} draggable={false}/>
                    <h1>{text('plan.drive')}</h1>
                    <p>{text('plan.drive.p')}</p>
                </div>
            </div>
        </MySection>
    );
};

export default Plans;