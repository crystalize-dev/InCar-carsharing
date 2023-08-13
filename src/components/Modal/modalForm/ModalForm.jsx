import React, {useState} from 'react';
import cl from "./ModalForm.module.css"
import classnames from "classnames";
import {loginVia} from "../../../img/ModalForm/loginVia";
import MyInput from "../../Inputs/input/MyInput";
import Icon from "../../Icon/icon";


const ModalForm = ({modal, setModal, type, setType}) => {

    const [notification, setNotification] = useState("-1")

    const submit = (e) => {
        e.preventDefault()

        setModal(false)
    }

    const sendNotification = async () => {
        setNotification('Email send!')

        await new Promise(resolve => setTimeout(resolve, 5000));

        setNotification('-1')
    }

    const switchType = () => {
        type === 'login' ? setType('register') : setType('login')
    }

    return (
        <div className={modal ? cl.wrapper : classnames(cl.wrapper, cl.hide)} onMouseDown={() => setModal(false)}>
            <form className={cl.window} onMouseDown={e => e.stopPropagation()} onSubmit={e => submit(e)}>
                <Icon className={cl.close} onClick={() => setModal(false)}>close</Icon>

                <h1>{type === 'login' ? "Sign in" : "Register"}</h1>

                <MyInput name={'login'} placeholder={"Enter email"} type={"text"} icon={"mail"}/>
                <MyInput name={'password'} placeholder={"Enter password"} type={"password"} autocomplete={"off"}/>
                {type === 'register' &&
                    <MyInput name={'passwordRepeat'} placeholder={"Repeat password"} type={"password"}
                                     icon={null} autocomplete={"off"}/>}

                {type === 'login' &&
                    <div className={cl.forgot}>
                        <p className={notification === '-1' ? classnames(cl.notification, cl.hide) : cl.notification}>{notification}</p>
                        <p onClick={() => sendNotification()}>Forgot password?</p>
                    </div>}

                <button type={"submit"}>Submit</button>

                <p className={cl.textDel}>Or {type === 'login' ? "sign in" : "register"} using</p>
                <div className={cl.other}>
                    <a href={"https://google.com"} target="_blank" rel="noreferrer"> <img alt={"google"}
                                                                                          src={loginVia.google}
                                                                                          draggable={false}/> </a>
                    <a href={"https://facebook.com/"} target="_blank" rel="noreferrer"> <img alt={"facebook"}
                                                                                             src={loginVia.facebook}
                                                                                             draggable={false}/> </a>
                    <a href={"https://vk.com"} target="_blank" rel="noreferrer"> <img alt={"vk"}
                                                                                            src={loginVia.vk}
                                                                                            draggable={false}/> </a>
                </div>

                <p className={cl.switch}>{type === 'login' ? "Don't" : "Already"} have an account?<span
                    onClick={() => switchType()}>{type === 'login' ? "Register" : 'Sign in'}</span></p>
            </form>
        </div>
    );
};

export default ModalForm;