import React from 'react';
import cl from "./App.module.css"
import {images} from "../../../img/Guest/img";


const App = ({id}) => {
    return (
        <section id={id} className={cl.app}>
            <div className={cl.textArea}>
                <h1>Download our app to get most out of it</h1>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so
                    intention defective at convinced. Led income months itself and houses you.</p>

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