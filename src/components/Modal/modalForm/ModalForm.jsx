import React, {useState} from 'react';
import cl from "./ModalForm.module.css"
import classnames from "classnames";
import {loginVia} from "../../../img/ModalForm/loginVia";
import MyInput from "../../Inputs/input/MyInput";
import Icon from "../../Icon/icon";
import {useTranslation} from "i18nano";
import FocusTrap from "focus-trap-react";


const ModalForm = ({modal, setModal, type, setType}) => {
    const [notification, setNotification] = useState("-1")

    const text = useTranslation()

    const submit = (e) => {
        e.preventDefault()

        setModal(false)
    }

    const sendNotification = async () => {
        setNotification(text('modal.notification'))

        await new Promise(resolve => setTimeout(resolve, 5000));

        setNotification('-1')
    }

    const switchType = () => {
        type === 'login' ? setType('register') : setType('login')
    }

    return (
        <div className={modal ? cl.wrapper : classnames(cl.wrapper, cl.hide)} onMouseDown={() => setModal(false)}>
            {modal && <FocusTrap>
                <form className={cl.window} onMouseDown={e => e.stopPropagation()} onSubmit={e => submit(e)}>
                    <Icon className={cl.close} onClick={() => setModal(false)}>close</Icon>

                    <h1>{type === 'login' ? text('modal.type.log') : text('modal.type.reg')}</h1>

                    <MyInput name={'login'} placeholder={text('modal.input.email')} type={"text"} icon={"mail"}/>
                    <MyInput name={'password'} placeholder={text('modal.input.pass')} type={"password"}
                             autocomplete={"off"}/>
                    {type === 'register' &&
                        <MyInput name={'passwordRepeat'} placeholder={text('modal.input.passr')} type={"password"}
                                 icon={null} autocomplete={"off"}/>}

                    {type === 'login' &&
                        <div className={cl.forgot}>
                            <p className={notification === '-1' ? classnames(cl.notification, cl.hide) : cl.notification}>{notification}</p>
                            <p onClick={() => sendNotification()}>{text('modal.forgot')}</p>
                        </div>}

                    <button type={"submit"}>{text('modal.button')}</button>

                    <div className={cl.textDel}>
                        <hr/>
                        <p>{text("modal.alt")}</p>
                    </div>

                    <div className={cl.other}>
                        <a href={"https://google.com"} target="_blank" rel="noreferrer"> <img alt={"google"}
                                                                                              src={loginVia.google}
                                                                                              draggable={false}/> </a>
                        <a href={"https://facebook.com/"} target="_blank" rel="noreferrer"> <img alt={"facebook"}
                                                                                                 src={loginVia.facebook}
                                                                                                 draggable={false}/>
                        </a>
                        <a href={"https://vk.com"} target="_blank" rel="noreferrer"> <img alt={"vk"}
                                                                                          src={loginVia.vk}
                                                                                          draggable={false}/> </a>
                    </div>

                    <p className={cl.switch}>{type === 'login' ? text('modal.dont') : text('modal.already')} {text('modal.acc')}<span
                        onClick={() => switchType()}>{type === 'login' ? text('modal.type.reg') : text('modal.type.log')}</span>
                    </p>
                </form>
            </FocusTrap>}
        </div>
    );
};

export default ModalForm;