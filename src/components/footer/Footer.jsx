import React from 'react';
import cl from "./Footer.module.css";
import Icon from "../Icon/icon";
import MyInput from "../Inputs/input/MyInput";
import {useTranslation} from "i18nano";


const Footer = ({id}) => {
    const text = useTranslation()

    return (
        <footer id={id} className={cl.footer}>
            <div className={cl.cutter}>
                <div className={cl.block}>
                    <h3><span>In</span>Car</h3>
                    <p>{text('footer.p')}</p>

                    <a href={"tel:+71234567869"} className={cl.contactElem}><Icon>call</Icon>+7 (123) 456-78-69</a>
                    <a href={"mailto:incar@gmail.com"} className={cl.contactElem}><Icon>mail</Icon>incar@gmail.com</a>
                </div>
                <div className={cl.block}>
                    <h3>{text('footer.options.header')}</h3>
                    <div className={cl.compInfo}>{text('moscow')}</div>
                    <div className={cl.compInfo}>{text('footer.options.career')}</div>
                    <div className={cl.compInfo}>{text('footer.options.mobile')}</div>
                    <div className={cl.compInfo}>{text('footer.options.blog')}</div>
                    <div className={cl.compInfo}>{text('footer.options.work')}</div>
                </div>
            </div>

            <div className={cl.cutter}>
                <div className={cl.block}>
                    <h3>{text('footer.time.header')}</h3>
                    <p>{text('footer.time.mon')}</p>
                    <p>{text('footer.time.sat')}</p>
                    <p>{text('footer.time.sun')}</p>
                </div>
                <form className={cl.block} onSubmit={e => e.preventDefault()}>
                    <h3>{text('footer.sub.header')}</h3>
                    <p>{text('footer.sub.p')}</p>
                    <MyInput type={"email"} name={"connection"} placeholder={text('footer.sub.input')}/>
                    <button>{text('footer.sub.submit')}</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;