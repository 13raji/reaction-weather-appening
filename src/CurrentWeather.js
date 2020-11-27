import React, { useState } from 'react';
import './CurrentWeather.css';
import axios from "axios";

import WeatherInfo from './WeatherInfo';


export default function Currentweather(props){
    const [ weatherData, setWeatherData]= useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt*1000),
            city: response.data.name
        });
    }
        function search(){
    const apiKey ="03ac878f5cd649f0cfd00e677d2c2dcc";
    let units = "metric";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
        }
        function handleSubmit(event){
            event.preventDefault();
            search();
        }
        function handleCityChange(event){
            setCity(event.target.value);
        }
    if (weatherData.ready) {
        return (
            <div className="Weather">
            <div className="Search">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        
                        <div className="Current-location col-4 w-100">
                            <button type="button" className="btn btn-outline-secondary">Current Location</button>
                        </div>
                        <div className="col-5">
                            <input type="search" placeholder="City name..." autoFocus="on" className="form-control" onChange={handleCityChange}/>
                        </div>
                        <div className="Search-btn col-3">
                            <button type="button" className="btn btn-dark">Search</button>
                        </div>
                        
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
            </div>
        </div>    
         ) } else {
    search()
 
    return "Loading..."
        };
    }
   