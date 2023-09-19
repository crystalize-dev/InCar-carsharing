import React from 'react';
import cl from "./WhyUs.module.css"
import MySection from "../../../components/section/MySection";
import {images} from "../../../img/Guest/img";
import {cars} from "../../../img/Guest/cars/cars";
import Icon from "../../../components/Icon/icon";
import {Link} from "react-router-dom";
import {useTranslation} from "i18nano";


const WhyUs = ({id}) => {
    const text = useTranslation()

    return (
        <MySection id={id} className={cl.whyUs}>
            <img alt={"wheels"} src={images.wheels} draggable={false} className={cl.wheels}/>

            <div className={cl.container}>
                <img alt={"cars"} src={cars.threeCars} draggable={false} className={cl.header}/>

                <div className={cl.whyUsText}>
                    <div className={cl.leftBlock}>
                        <h2>{text('why.h2')}</h2>
                        <h1>{text('why.h1')}</h1>
                        <p>{text('why.p')}</p>

                        <Link to={"about#start"}>{text('why.details')}<Icon>chevron_right</Icon></Link>
                    </div>
                    <div className={cl.rightBlock}>
                        <div className={cl.whyElem}>
                            <img alt={"why1"} src={images.why1} draggable={false}/>
                            <div className={cl.whyElemText}>
                                <h1>{text('why.elem1.h1')}</h1>
                                <p>{text('why.elem1.p')}</p>
                            </div>
                        </div>
                        <div className={cl.whyElem}>
                            <img alt={"why1"} src={images.why2} draggable={false}/>
                            <div className={cl.whyElemText}>
                                <h1>{text('why.elem2.h1')}</h1>
                                <p>{text('why.elem2.p')}</p>
                            </div>
                        </div>
                        <div className={cl.whyElem}>
                            <img alt={"why1"} src={images.why3} draggable={false}/>
                            <div className={cl.whyElemText}>
                                <h1>{text('why.elem3.h1')}</h1>
                                <p>{text('why.elem3.p')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default WhyUs;