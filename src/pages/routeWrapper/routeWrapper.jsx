import React from 'react';
import cl from "./routeWrapper.module.css"
import {Link, Outlet, useHref} from "react-router-dom"
import carBackground from "../../img/carBackground.png"
import carRoof from "../../img/carRoof.png"
import Icon from "../../components/Icon/icon";
import {useTranslation, useTranslationChange} from "i18nano";


const RouteWrapper = () => {
    const text = useTranslation()
    const lang = useTranslationChange().lang

    const route = useHref()

    const translate = (string) => {
        switch (string.replace('/', '')) {
            case "about": return " О нас"
            case "models": return " Модели"
            case "testimonials": return " Отзывы"
            case "team": return " Команда"
            case "contact": return "Контакты"
            default: return null
        }
    }

    console.log(route)

    return (
        <>
            <img alt={"background"} src={carBackground} draggable={false} className={cl.background}/>

            <div className={cl.header}>
                <h2>{lang === 'ru' ? translate(route.replace("/", "")) :  route.replace("/", "")}</h2>
                <p><Link to={""}>{text('routing.home')}</Link>{" "} / {lang === 'ru' ? translate(route) : route.replace("/", "")}</p>
            </div>

            <Outlet />

            <div className={cl.footer}>
                <img alt={"carRoof"} src={carRoof} draggable={false}/>

                <p>{text("routing.delimiter.header")}</p>
                <a href={"tel:71234567869"}><p><Icon>call</Icon> +7 (123) 456-7869</p></a>
            </div>
        </>
    );
};

export default RouteWrapper;