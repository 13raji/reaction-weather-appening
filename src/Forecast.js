import React from 'react';
import './Forecast.css';

export default function Forecast(props){
    return(
        <div className="Forecast-wrapper">
            <div className="Forecast row">
                
                <div className="Time col-1">
                    <h6>18:00</h6>
                </div>
                <div className="Forecast-temp col-2">
                    <h4>13°C</h4>
                </div>
                <div className="Forecast-icon col-1">
                    <h4>☁</h4>
                </div>
                <div className="Feels-like col-4">
                    <h6>Feels like 12°C</h6>
                </div>
                <div className="Forecast-precip col-4">
                    <h6>Precipitaion: 69%</h6>
                </div>
                
                
            </div>
        </div>
    )
}