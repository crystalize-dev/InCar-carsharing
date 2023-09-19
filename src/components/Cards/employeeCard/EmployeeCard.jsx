import React from 'react';
import cl from "./EmployeeCard.module.css"
import {useTranslationChange} from "i18nano";


const EmployeeCard = ({fullName, role, src}) => {
    const lang = useTranslationChange().lang

    return (
        <div className={cl.card}>
            <img alt={"employee"} src={src} draggable={false}/>

            <h1>{lang === 'ru' ? fullName.ru : fullName.en}</h1>

            <p>{lang === 'ru' ? role.ru : role.en}</p>
        </div>
    );
};

export default EmployeeCard;