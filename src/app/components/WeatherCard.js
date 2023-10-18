"use-client";
import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherIcon";


const getBackgroundColor = (currentTemperature) => {
    if (currentTemperature >= 80) {
      return "hot";
    } else if (currentTemperature >= 65) {
      return "warm";
    } else {
      return "cold";
    }
  };


const WeatherCard =({
    cityName, 
    currentTemperature, 
    highTemperature, 
    lowTemperature, 
    weatherType, 
    humidity, 
    windspeed, 
    cloudiness
}) =>{

    const backgroundColor = getBackgroundColor(currentTemperature);

    
    
    
    
    return(
    <div className={`${styles.weatherCardWrapper} ${styles[getBackgroundColor(currentTemperature)]}`}>
        <div className={styles.weatherCardImg}>
            <WeatherIcon weatherType={weatherType} size="10x"/>
        </div>

        <div className = {styles.WeatherCardWrapper}>
            <h2> {cityName}</h2>

            <p>Weather Type: {weatherType}</p>
            <p>Current Temperature:{currentTemperature}</p>
            <p>High Temperature:{highTemperature}</p>
            <p>Low Temperature: {lowTemperature}</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity: {humidity}</p>
            <p>Wind speed:{windspeed}</p>
        </div>



    </div>
    );

    
};

export default WeatherCard;