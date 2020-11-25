import React from 'react';
import './Forecast.css';

export default function Forecast(props){
    return(
        <div classname="Forcast">
            <div className="row">
                <div className="col-2"></div>
                <div className="Time col-1">
                    <h6>18:00</h6>
                </div>
                <div className="Forecast-temp col-1">
                    <h4>13°C</h4>
                </div>
                <div className="Forecast-icon col-1">
                    <h4>☁</h4>
                </div>
                <div className="Feels-like col-2">
                    <h6>Feels like 12°C</h6>
                </div>
                <div className="col-2">
                    <h6>Precipitaion: 69%</h6>
                </div>
                <div className="col-3"></div>
                
            </div>
        </div>
    )
}