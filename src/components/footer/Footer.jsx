import React from 'react';
import cl from "./Footer.module.css";
import Icon from "../Icon/icon";
import MyInput from "../Inputs/input/MyInput";


const Footer = ({id}) => {
    return (
        <footer id={id} className={cl.footer}>
            <div className={cl.cutter}>
                <div className={cl.block}>
                    <h1><span>In</span>Car</h1>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your
                        needs</p>

                    <a href={"tel:89772954635"} className={cl.contactElem}><Icon>call</Icon>+7 (977) 295-46-35</a>
                    <a href={"mailto:man2123@mail.ru"} className={cl.contactElem}><Icon>mail</Icon>man2123@mail.ru</a>
                </div>
                <div className={cl.block}>
                    <h1>COMPANY</h1>
                    <div className={cl.compInfo}>Moscow</div>
                    <div className={cl.compInfo}>Careers</div>
                    <div className={cl.compInfo}>Mobile</div>
                    <div className={cl.compInfo}>Blog</div>
                    <div className={cl.compInfo}>How we work</div>
                </div>
            </div>

            <div className={cl.cutter}>
                <div className={cl.block}>
                    <h1>WORKING HOURS</h1>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>
                <form className={cl.block} onSubmit={e => e.preventDefault()}>
                    <h1>SUBSCRIPTION</h1>
                    <p>Subscribe your Email address for latest news & updates</p>
                    <MyInput type={"email"} name={"connection"} placeholder={"Enter Email Address"}/>
                    <button>Submit</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;