import React from 'react';
import cl from "./Contact.module.css"
import Icon from "../../components/Icon/icon";
import MyInput from "../../components/Inputs/input/MyInput";
import MyTextArea from "../../components/Inputs/textArea/MyTextArea";
import {useTranslation} from "i18nano";


const Contact = () => {
    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            <div className={cl.textArea}>
                <h1>{text('contact.h1')}</h1>
                <h2>{text('contact.h2')}</h2>

                <a href={"tel:+71234567869"}><Icon>call</Icon>+7(123) 456-7869</a>
                <a href={"mailto:incar@gmail.com"}><Icon>mail</Icon>incar@gmail.com</a>
                <p><Icon>location_on</Icon>{text("moscow")}</p>
            </div>

            <form className={cl.inputsArea} onSubmit={e => e.preventDefault()}>
                <h1>{text('contact.fullname')} <span>*</span></h1>
                <MyInput name={"contactName"} type={"text"} placeholder={text('contact.fullname.example')} />

                <h1>Email <span>*</span></h1>
                <MyInput name={"contactMail"} type={"email"} placeholder={"youremail@gmail.com"} />

                <h1>{text('contact.tell')} <span>*</span></h1>
                <MyTextArea placeholder={text('contact.tell.example')} name={"contactMore"} />

                <button><Icon>mail</Icon> {text('contact.button')}</button>
            </form>
        </div>
    );
};

export default Contact;