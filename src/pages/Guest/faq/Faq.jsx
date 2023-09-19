import React, {useState} from 'react';
import cl from "./Faq.module.css"
import MySection from "../../../components/section/MySection";
import Icon from "../../../components/Icon/icon";
import classnames from "classnames";
import {useTranslation} from "i18nano";


const Faq = ({id}) => {
    const [active, setActive] = useState(null)

    const changeActive = (option) => {
        if (active === option) setActive(null)
        else setActive(option)
    }

    const text = useTranslation()

    return (
        <MySection id={id} className={cl.faq}>
            <div className={cl.container}>
                <h2>{text('faq.h2')}</h2>
                <h1>{text('faq.h1')}</h1>
                <p>{text('faq.p')}</p>

                <div className={cl.questions}>
                    <div className={active === "option1" ? classnames(cl.option, cl.active) : cl.option}
                         onClick={() => changeActive("option1")}>
                        <p>{text('faq.1.question')}</p>
                        <Icon>expand_more</Icon>
                    </div>
                    <div className={active === "option1" ? classnames(cl.expand, cl.expandShow) : cl.expand}>
                        <p>{text('faq.1.answer')}</p>
                    </div>

                    <div className={active === "option2" ? classnames(cl.option, cl.active) : cl.option}
                         onClick={() => changeActive("option2")}>
                        <p>{text('faq.2.question')}</p>
                        <Icon>expand_more</Icon>
                    </div>
                    <div className={active === "option2" ? classnames(cl.expand, cl.expandShow) : cl.expand}>
                        <p>{text('faq.2.answer')}</p>
                    </div>

                    <div className={active === "option3" ? classnames(cl.option, cl.active) : cl.option}
                         onClick={() => changeActive("option3")}>
                        <p>{text('faq.3.question')}</p>
                        <Icon>expand_more</Icon>
                    </div>
                    <div className={active === "option3" ? classnames(cl.expand, cl.expandShow) : cl.expand}>
                        <p>{text('faq.3.answer')}</p>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default Faq;