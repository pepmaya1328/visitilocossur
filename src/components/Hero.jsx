import "./Hero.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const API_key = `be362b1c6b2f958ea38c715718736d19`;

//API Key: be362b1c6b2f958ea38c715718736d19
//API Call: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function Hero (props) {
    const [latitude, setLatitude] = useState("16.956778");
    const [longitude, setLongitude] = useState("120.442333");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      // to get coordinates of the current location
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
      openWeatherReq()
    }, [])

    const openWeatherReq = async () => {
      try {
        const response = await axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric
        `);
        setWeatherData(response.data);
      }catch(e) {
        console.log(e);
      }
    }

    if(!weatherData) {
      return <div>Loading data...</div>
    }

    const {main, weather} = weatherData;

    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="heroImg" />
            </div>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <h2>{props.text}</h2>
                {/* <a href={props.url} className={props.btnClass}>{props.buttonText}</a> */}
                <div className="weather-app">
                    <CloudOutlinedIcon fontSize="medium" /> <span>Vigan City</span>
                    <p>Temperature: {main.temp} &deg;C</p>
                    <p>Description: {weather[0].description}</p>
                </div>

            </div>
        </>

    )
}

export default Hero;
