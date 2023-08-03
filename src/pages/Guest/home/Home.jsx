import React from 'react';
import cl from "./Home.module.css"
import Icon from "../../../components/Icon/icon";
import {cars} from "../../../img/Guest/cars/cars";


const Home = ({id}) => {
    return (
        <section id={id} className={cl.home}>
            <div className={cl.textArea}>
                <h2>Plan your trip now</h2>
                <h1>Save <span>big</span> with our car rental</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more</p>
                <div className={cl.homeBtns}>
                    <a href={"#book"}>
                        <button>Book Ride <Icon>check_circle</Icon></button>
                    </a>
                    <button>Learn More<Icon>chevron_right</Icon></button>
                </div>
            </div>

            <img src={cars.main} alt={"car"} draggable={false}/>
        </section>
    );
};

export default Home;