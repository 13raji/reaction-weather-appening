import React from 'react';
import './CurrentWeather.css';

export default function Currentweather(){
    return(
        <div className="Weather">
            <div className="Search">
                <form>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-2">
                            <a href="" target="/" >Current Location</a>
                        </div>
                        <div className="col-3">
                            <input type="search" placeholder="City name..." className="form-control"/>
                        </div>
                        <div className="col-1">
                            <input type="submit" value="Search" className="btn btn-primary"/>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </form>
            </div>
            <div className="Current">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2">
                        <h2>Glasgow</h2>
                    </div>
                    <div className="col-2">
                        <h2>10°C</h2>
                        
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            <div className="units row">
                <div className="col-5"></div>
                <div className="col-2">
                    <h6>C|F</h6>
                </div>
                <div className="col-5"></div>
            </div>
            <div className= "Current-specifics row">
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