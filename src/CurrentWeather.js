import React from 'react';
import './CurrentWeather.css';

export default function Currentweather(){
    return(
        <div className="Weather">
            <div className="Current">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2">
                        <h2>Glasgow</h2>
                    </div>
                    <div className="col-2">
                        <h2>10°C</h2>
                        <h6>C|F</h6>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            <div className= "Current row">
                <div className="col-6">
                    <ul>
                        <li>Wednesday 12:00</li>
                        < li>Windy</li>
                        <li>🌬</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 13%</li>
                        <li>Humidity: 69%</li>
                        <li>Wind:40km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    
    );
}