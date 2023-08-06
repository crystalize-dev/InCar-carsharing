import React from 'react';
import cl from "./Contact.module.css"
import Icon from "../../components/Icon/icon";
import MyInput from "../../components/Inputs/input/MyInput";
import MyTextArea from "../../components/Inputs/textArea/MyTextArea";


const Contact = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.textArea}>
                <h1>Need additional information?</h1>
                <h2>A multifaceted professional skilled in multiple fields of research, development as well as a
                    learning specialist. Over 15 years of experience.</h2>

                <a href={"tel:+71234567869"}><Icon>call</Icon>+7(123) 456-7869</a>
                <a href={"mailto:incar@gmail.com"}><Icon>mail</Icon>incar@gmail.com</a>
                <p><Icon>location_on</Icon>Russia, Moscow</p>
            </div>

            <form className={cl.inputsArea} onSubmit={e => e.preventDefault()}>
                <h1>Full Name <span>*</span></h1>
                <MyInput name={"contactName"} type={"text"} placeholder={"E.g: 'Joe Smith'"} />

                <h1>Email <span>*</span></h1>
                <MyInput name={"contactMail"} type={"email"} placeholder={"youremail@gmail.com"} />

                <h1>Tell us about it <span>*</span></h1>
                <MyTextArea placeholder={"Write here..."} name={"contactMore"} />

                <button><Icon>mail</Icon> Send Message</button>
            </form>
        </div>
    );
};

export default Contact;