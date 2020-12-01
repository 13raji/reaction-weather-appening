import React, { useState }from 'react';

export default function WeatherTemperature(props){
    const [ unit, setUnit ]= useState('celcius');
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }
    let fahrenheit = ((props.celcius*9)/5+32)

    if (unit === 'celcius') {
        return (
        <div className="WeatherTemperature">
            <h2>
                {Math.round(props.celcius)}°C 
                <span className="Unit-conversion"><button type="button" className="btn btn-dark " onClick={showFahrenheit}>°F</button></span>
            </h2>
        </div>
        );
}
     else {
         return(
             <div className="WeatherTemperature">
            <h2>
                {Math.round(fahrenheit)}°F 
                <span className="Unit-conversion"><button type="button" className="btn btn-dark " onClick={showCelcius}>°C</button></span>
            </h2>
        </div>
         )
        }
    
} 