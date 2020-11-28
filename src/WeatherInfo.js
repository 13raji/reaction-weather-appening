import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props){
    return (
    <div className="Current-wrapper">
                <div className="Current">
                    <div className="row">
                        <div className="City-name col-6">
                            <h2>{props.data.city}</h2>
                        </div>
                        <div className="Current-temp col-6">
                            <h2>
                                {Math.round(props.data.temperature)}°C 
                                <span className="Unit-conversion"><button type="button" className="btn btn-dark ">°F</button></span>
                            </h2>
                        </div>
                    </div>
                </div>
                
                <div className= "Current-specifics row">
                    <div className="Current-specifics-left col-6">
                        <span><em><FormattedDate date={props.data.date} /></em></span>
                        <h4 className="text-capitalize">{props.data.description}</h4>
                        <WeatherIcon iconCode={props.data.icon}/>
                    </div>
                    
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 13%</li>
                            <li>Humidity:{Math.round(props.data.humidity)}%</li>
                            <li>Wind:{Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
    </div>
    );
}