import React from 'react';
import cl from "./App.module.css"
import {images} from "../../../img/Guest/img";
import {useTranslation} from "i18nano";


const App = ({id}) => {
    const text = useTranslation()

    return (
        <section id={id} className={cl.app}>
            <div className={cl.textArea}>
                <h1>{text('app.h1')}</h1>
                <p>{text('app.p')}</p>

                <div className={cl.btnArea}>
                    <a href={"#google"}><img alt={"google"} src={images.google} draggable={false}/></a>
                    <a href={"#apple"}><img alt={"apple"} src={images.apple} draggable={false}/></a>
                </div>
            </div>

            <img alt={"app"} src={images.app} draggable={false}/>
        </section>
    );
};

export default App;