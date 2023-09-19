import React from 'react';
import cl from "./Models.module.css"
import {carsInfo} from "../../hardcode/carsInfo";
import ModelCard from "../../components/Cards/modelCard/modelCard";


const Models = () => {
    return (
        <div className={cl.wrapper}>
                {
                    carsInfo.map(car => <ModelCard gas={car.fuel}
                                                   src={car.imgAlt}
                                                   model={car.model}
                                                   cost={car.price}
                                                   doors={car.doors}
                                                   transmission={car.transmission}
                                                   key={car.fullName} />)
                }
        </div>
    );
};

export default Models;