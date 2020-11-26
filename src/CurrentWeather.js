import React from 'react';
import './CurrentWeather.css';

export default function Currentweather(){
    return(
        <div className="Weather">
            <div className="Search">
                <form>
                    <div className="row">
                        
                        <div className="Current-location col-4 w-100">
                            <button type="button" class="btn btn-light">Current Location</button>
                        </div>
                        <div className="col-5">
                            <input type="search" placeholder="City name..." autoFocus="on" className="form-control"/>
                        </div>
                        <div className="Search-btn col-3">
                            <button type="button" class="btn btn-dark">Search</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            <div className="Current-wrapper">
                <div className="Current">
                    <div className="row">
                        <div className="City-name col-6">
                            <h2>Glasgow</h2>
                        </div>
                        <div className="Current-temp col-6">
                            <h2>10°C</h2>  
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
                        <p><em>Wednesday 12:00</em></p>
                        <h4>Windy</h4>
                        <h2>🌬</h2>
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
        </div>
    
    );
}