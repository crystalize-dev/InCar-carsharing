import React, {useState} from 'react';
import cl from "./models.module.css"
import MySection from "../../../components/section/MySection";
import {carsInfo} from "../../../utility/hardcode/carsInfo";
import {getInfo} from "../../../utility/cars";


const Models = ({id}) => {
    const [choose, setChoose] = useState(carsInfo[0])
    const changeChoose = (e) => {
        let name = e.target.innerText

        setChoose(getInfo(name))
    }

    return (
        <MySection id={id}>
            <h2>Vehicle Models</h2>
            <h1>Our rental fleet</h1>
            <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business
                trip</p>

            <div className={cl.modelsArea}>
                <div className={cl.choose}>
                    <button onClick={e => changeChoose(e)}
                            className={choose.fullName === "Audi A1 S-Line" ? cl.activeChoose : null}>Audi
                        A1
                        S-Line
                    </button>
                    <button onClick={e => changeChoose(e)}
                            className={choose.fullName === "VW Golf 6" ? cl.activeChoose : null}>VW Golf
                        6
                    </button>
                    <button onClick={e => changeChoose(e)}
                            className={choose.fullName === "Toyota Camry" ? cl.activeChoose : null}>Toyota
                        Camry
                    </button>
                    <button onClick={e => changeChoose(e)}
                            className={choose.fullName === "BMW 320 ModernLine" ? cl.activeChoose : null}>BMW
                        320
                        ModernLine
                    </button>
                    <button onClick={e => changeChoose(e)}
                            className={choose.fullName === "Mercedes-Benz GLK" ? cl.activeChoose : null}>Mercedes-Benz
                        GLK
                    </button>
                    <button onClick={e => changeChoose(e)}
                            className={choose.fullName === "VW Passat CC" ? cl.activeChoose : null}>VW
                        Passat CC
                    </button>
                </div>

                <div className={cl.infoBlock}>
                    <img src={choose.img} alt={"model"} draggable={false}/>

                    <div className={cl.price}>
                        <div className={cl.table}>
                            <div className={cl.tableRow}>${choose.price} / rent per day</div>
                            <div className={cl.tableRow}>Model <hr/> {choose.model}</div>
                            <div className={cl.tableRow}>Mark <hr/> {choose.mark}</div>
                            <div className={cl.tableRow}>Year <hr/> {choose.year}</div>
                            <div className={cl.tableRow}>Doors <hr/> {choose.doors}</div>
                            <div className={cl.tableRow}>AC <hr/> {choose.ac}</div>
                            <div className={cl.tableRow}>Transmission <hr/> {choose.transmission}</div>
                            <div className={cl.tableRow}>Fuel <hr/> {choose.fuel}</div>
                        </div>

                        <a href={"#book"}>RESERVE NOW</a>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default Models;