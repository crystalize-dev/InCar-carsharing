import React from 'react';
import cl from "./Home.module.css"
import Icon from "../../../components/Icon/icon";
import {cars} from "../../../img/Guest/cars/cars";
import {Link} from "react-router-dom";
import {useTranslation} from "i18nano";


const Home = ({id}) => {
    const text = useTranslation()

    return (
        <section id={id} className={cl.home}>
            <div className={cl.textArea}>
                <h4>{text('home.h4')}</h4>
                <h1>{text('home.h1.before')} <span>{text('home.h1.colored')}</span> {text('home.h1.after')}</h1>
                <p>{text('home.p')}</p>
                <div className={cl.homeBtns}>
                    <a href={"#book"}>
                        <button>{text('home.button.book')} <Icon>check_circle</Icon></button>
                    </a>
                        <Link to="about">{text('home.button.more')}<Icon>chevron_right</Icon></Link>
                </div>
            </div>

            <img src={cars.main} alt={"car"} draggable={false}/>
        </section>
    );
};

export default Home;