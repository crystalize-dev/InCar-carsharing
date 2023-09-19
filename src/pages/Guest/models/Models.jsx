import React, {useState} from 'react';
import cl from "./models.module.css"
import MySection from "../../../components/section/MySection";
import {carsInfo} from "../../../hardcode/carsInfo";
import {getInfo} from "../../../utility/cars";
import {useTranslation, useTranslationChange} from "i18nano";


const Models = ({id}) => {
    const [choose, setChoose] = useState(carsInfo[0])
    const changeChoose = (e) => {
        let name = e.target.innerText

        setChoose(getInfo(name))
    }

    const text = useTranslation()
    const lang = useTranslationChange().lang

    return (
        <MySection id={id}>
            <h2>{text('models.h2')}</h2>
            <h1>{text('models.h1')}</h1>
            <p>{text('models.p')}</p>

            <div className={cl.modelsArea}>
                <div className={cl.choose}>
                    {carsInfo.map(car =>
                        <button key={car.fullName} onClick={e => changeChoose(e)}
                                className={choose.fullName === car.fullName ? cl.activeChoose : null}>
                            {car.fullName}
                        </button>)}
                </div>

                <div className={cl.infoBlock}>
                    <img src={choose.img} alt={"model"} draggable={false}/>

                    <div className={cl.price}>
                        <div className={cl.table}>
                            <div className={cl.tableRow}>${choose.price} / {text('models.rent')}</div>
                            <div className={cl.tableRow}>{text('models.model')} <hr/> {choose.model}</div>
                            <div className={cl.tableRow}>{text('models.mark')} <hr/> {choose.mark}</div>
                            <div className={cl.tableRow}>{text('models.year')} <hr/> {choose.year}</div>
                            <div className={cl.tableRow}>{text('models.doors')} <hr/> {choose.doors}</div>
                            <div className={cl.tableRow}>{text('models.ac')} <hr/> {lang === 'ru' ? choose.ac.ru : choose.ac.en}</div>
                            <div className={cl.tableRow}>{text('models.trans')} <hr/> {lang === 'ru' ? choose.transmission.ru : choose.transmission.en}</div>
                            <div className={cl.tableRow}>{text('models.fuel')} <hr/> {lang === 'ru' ? choose.fuel.ru : choose.fuel.en}</div>
                        </div>

                        <a href={"#book"}>{text('book.modal.reserve')}</a>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default Models;