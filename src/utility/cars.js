import {cars} from "../img/Guest/cars/cars";
import {carsInfo} from "./hardcode/carsInfo";


export const getCar = (car) => {
    switch (car) {
        case "Audi A1 S-Line":
            return cars.audi
        case "VW Golf 6":
            return cars.vwGolf
        case "Toyota Camry":
            return cars.camry
        case "BMW 320 ModernLine":
            return cars.bmw
        case "Mercedes-Benz GLK":
            return cars.mercedes
        case "VW Passat CC":
            return cars.vwPass
        default:
            return null
    }
}

export const getInfo = (car) => {
    switch (car) {
        case "Audi A1 S-Line":
            return carsInfo[0]
        case "VW Golf 6":
            return carsInfo[1]
        case "Toyota Camry":
            return carsInfo[2]
        case "BMW 320 ModernLine":
            return carsInfo[3]
        case "Mercedes-Benz GLK":
            return carsInfo[4]
        case "VW Passat CC":
            return carsInfo[5]
        default:
            return null
    }
}