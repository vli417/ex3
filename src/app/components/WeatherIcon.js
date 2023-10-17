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

const WeatherIcon = ({weatherType}) => {
    switch (weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} />
        case "Rain":
            return <FontAwesomeIcon icon={faCloudRain} />
        case "Clear":
            return <FontAwesomeIcon icon={faRainbow} />
        case "Thunderstorm":
            return <FontAwesomeIcon icon={faBolt} />
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} />
        default:
            return <FontAwesomeIcon icon={faCloud} />
    } 
};

export default WeatherIcon