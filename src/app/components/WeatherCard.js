"use-client";
import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherIcon";


const WeatherCard =({cityName, currentTemperature, highTemperature, lowTemperature, weatherType, humidity, windspeed, cloudiness
}) =>(
    <div className={styles.weatherCardWrapper} style={{backgroundColor: `rgba(0,0,0,0.${cloudiness}`}}>
        <div className={styles.weatherCardImg}>
            <WeatherIcon weatherType={weatherType}/>
        </div>

        <div className = {styles.WeatherCardWrapper}>
            <h2>City Name: {cityName}</h2>

            <p>Weather Type: {weatherType}</p>
            <p>Current Temperature:{currentTemperature}</p>
            <p>High Temperature:{highTemperature}</p>
            <p>Low Temperature: {lowTemperature}</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity: {humidity}</p>
            <p>Wind speed:{windspeed}</p>
        </div>



    </div>
)

export default WeatherCard