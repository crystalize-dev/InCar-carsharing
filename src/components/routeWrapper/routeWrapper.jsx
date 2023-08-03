import React from 'react';
import cl from "./routeWrapper.module.css"
import {Outlet} from "react-router-dom"


const RouteWrapper = () => {
    return (
        <>
            i'm wrapper !

            <Outlet />
        </>
    );
};

export default RouteWrapper;