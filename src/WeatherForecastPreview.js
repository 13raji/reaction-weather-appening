import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastPreview(props){
    console.log(props.data.weather[0].icon)
    function hours(){
        let date = new Date(props.data.dt*1000);
        let hours = date.getHours();
        if (hours < 10) {
        hours = `0${hours}`;
        };
        return `${hours}:00`;
        }

    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°C`;
        }

    function feelsLike(){
        let feelsLike =  Math.round(props.data.main.feels_like);
        return `Feels like ${feelsLike}°C`;
    }
        
    return(
    <div className="Forecast col-2">
                <div className="Time">
                    <h6>{hours()}</h6>
                </div>
                <div className="Forecast-temp">
                    <h4>{temperature()}</h4>
                </div>
                <div className="Forecast-icon">
                    <WeatherIcon iconCode={props.data.weather[0].icon}/>
                </div>
                <div className="Feels-like">
                    <h6>{feelsLike()}</h6>
                </div>
            </div>
            )
}