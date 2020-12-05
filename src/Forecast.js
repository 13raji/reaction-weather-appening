import React, { useState } from 'react';
import './Forecast.css';
import axios from 'axios';
import WeatherForecastPreview from './WeatherForecastPreview';

export default function Forecast(props){
    const [loaded, setLoaded]= useState(false);
    const [forecast, setForecast]= useState(null);
    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }
   
    if (loaded && props.city=== forecast.city.name) {
        return( 
        <div className="Forecast-wrapper row">
            <WeatherForecastPreview data={forecast.list[0]}/>
            <WeatherForecastPreview data={forecast.list[1]}/>
            <WeatherForecastPreview data={forecast.list[2]}/>
            <WeatherForecastPreview data={forecast.list[3]}/>
            <WeatherForecastPreview data={forecast.list[4]}/>
            <WeatherForecastPreview data={forecast.list[5]}/>
        </div>
    )
        } else {
             const apiKey ="03ac878f5cd649f0cfd00e677d2c2dcc";
            let units = "metric";
            let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
            axios.get(apiUrl).then(handleForecastResponse);
            return null;
        }
}