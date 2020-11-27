import React, { useState } from 'react';
import './CurrentWeather.css';
import axios from "axios";

export default function Currentweather(){
    const [ weatherData, setWeatherData]= useState({ready:false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
            date: "Friday 12:00",
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <div className="Search">
                <form>
                    <div className="row">
                        
                        <div className="Current-location col-4 w-100">
                            <button type="button" className="btn btn-outline-secondary">Current Location</button>
                        </div>
                        <div className="col-5">
                            <input type="search" placeholder="City name..." autoFocus="on" className="form-control"/>
                        </div>
                        <div className="Search-btn col-3">
                            <button type="button" className="btn btn-dark">Search</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            <div className="Current-wrapper">
                <div className="Current">
                    <div className="row">
                        <div className="City-name col-6">
                            <h2>{weatherData.city}</h2>
                        </div>
                        <div className="Current-temp col-6">
                            <h2>{Math.round(weatherData.temperature)}°C</h2>  
                        </div>
                    </div>
                </div>
                <div className="Units row">
                    <div className="col-5"></div>
                    <div className="col-2">
                        <h5>C|F</h5>
                    </div>
                    <div className="col-5"></div>
                </div>
                <div className= "Current-specifics row">
                    <div className="Current-specifics-left col-6">
                        <p><em>{weatherData.date}</em></p>
                        <h4 className="text-capitalize">{weatherData.description}</h4>
                        <h4><img src={weatherData.iconUrl} alt={weatherData.description}/></h4>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 13%</li>
                            <li>Humidity:{Math.round(weatherData.humidity)}%</li>
                            <li>Wind:{Math.round(weatherData.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
         ) } else {
 const apiKey ="03ac878f5cd649f0cfd00e677d2c2dcc";
    let city = "Glasgow";
    let units = "metric";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
        };
    }
   