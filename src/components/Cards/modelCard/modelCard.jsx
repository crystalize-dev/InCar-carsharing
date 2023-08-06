import React from 'react';
import cl from "./modelCard.module.css"
import Icon from "../../Icon/icon";
import {useNavigate} from "react-router-dom"


const ModelCard = ({src, cost, model, doors, transmission, gas}) => {

    const navigate = useNavigate()

    return (
        <div className={cl.card}>
            <img alt={"preview"} src={src}/>

            <div className={cl.row}>
                <div className={cl.model}>
                    <h1>{model}</h1>
                    <Icon>star<Icon>star</Icon><Icon>star</Icon><Icon>star</Icon><Icon>star</Icon></Icon>
                </div>

                <div className={cl.price}>
                    <h1>${cost}</h1>
                    <p>per day</p>
                </div>
            </div>

            <div className={cl.row}>
                <div>
                    <Icon>directions_car</Icon>
                    <p>{model}</p>
                </div>

                <div>
                    <p>{doors}</p>
                    <Icon>door_front</Icon>
                </div>
            </div>

            <div className={cl.row}>
                <div>
                    <Icon>settings</Icon>
                    <p>{transmission}</p>
                </div>

                <div>
                    <p>{gas}</p>
                    <Icon>local_gas_station</Icon>
                </div>
            </div>

            <hr/>

            <button onClick={() => navigate("/?where=book")}>Book Ride</button>
        </div>
    );
};

export default ModelCard;