import React from 'react';
import cl from "./routeWrapper.module.css"
import {Link, Outlet, useHref} from "react-router-dom"
import carBackground from "../../img/carBackground.png"
import carRoof from "../../img/carRoof.png"
import Icon from "../Icon/icon";


const RouteWrapper = () => {

    const route = useHref()

    return (
        <>
            <img alt={"background"} src={carBackground} draggable={false} className={cl.background}/>

            <div className={cl.header}>
                <h1>{route.replace("/", "")}</h1>
                <p><Link to={""}>Home</Link> {route}</p>
            </div>

            <Outlet />

            <div className={cl.footer}>
                <img alt={"carRoof"} src={carRoof} draggable={false}/>

                <p>Book a car by getting in touch with us</p>
                <p><Icon>call</Icon> +7 (123) 456-7869</p>
            </div>
        </>
    );
};

export default RouteWrapper;