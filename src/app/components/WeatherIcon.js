'use-client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBolt,
    faCloud,
    faUmbrella,
    faSnowflake,
    faSun,
    faCloudRain,
    faRainbow,
    
    
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({weatherType, size}) => {

    const iconSize = size || "lg";


    switch (weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} size={iconSize}/>
        case "Rain":
            return <FontAwesomeIcon icon={faCloudRain} size={iconSize} />
        case "Clear":
            return <FontAwesomeIcon icon={faSun} size={iconSize} />
        case "Thunderstorm":
            return <FontAwesomeIcon icon={faBolt} size={iconSize}/>
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} size={iconSize} />
        default:
            return <FontAwesomeIcon icon={faCloud}  size={iconSize}/>
    } 
};

export default WeatherIcon