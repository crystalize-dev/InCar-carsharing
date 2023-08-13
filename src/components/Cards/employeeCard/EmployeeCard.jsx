import React from 'react';
import cl from "./EmployeeCard.module.css"


const EmployeeCard = ({fullName, role, src}) => {
    return (
        <div className={cl.card}>
            <img alt={"employee"} src={src} draggable={false}/>

            <h1>{fullName}</h1>

            <p>{role}</p>
        </div>
    );
};

export default EmployeeCard;