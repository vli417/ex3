import WeatherCard from "@/app/components/WeatherCard";
import Header from '../app/components/Header';
import "../app/globals.css";
import styles from '../app/pages.module.css';


//const OPEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${WEATHER_APP_API_KEY}`;

export async function getStaticProps( { params }) {
    const city = params && params.city || 'Tokyo';
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}Tokyo&appid=${process.env.WEATHER_API_KEY}&units=imperial`

    );

    console.log(res)

    const weatherData = await res.json();

    return{
        props:{
            weatherData,
        },
    };
}





export const getStaticPaths = async () => {
    return {
        paths:[],
        fallback: true,
    }
}



export default function Home({ weatherData }){

    console.log(weatherData)
    if(!weatherData) return null;
   
    

    return(
        <>
        
        <Header />
        <main>
            <h1>Weather App</h1>
            <WeatherCard 
            cityName={weatherData.name}
            weatherType={weatherData.weather[0].main}
            currentTemperature={weatherData.main.temp}
            highTemperature={weatherData.main.temp_max}
            lowTemperature={weatherData.main.temp_min}
            cloudiness={weatherData.clouds.all}
            humidity={weatherData.main.humidity}
            windspeed={weatherData.wind.speed}
            />

        





        </main>
        </>
    );
    

}