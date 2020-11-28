import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    const codeMapping ={
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "CLOUDY",
      "03n": "CLOUDY",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };
    const colourMapping ={
      "01d": "#C2B000",
      "01n": "#220044",
      "02d": "#708090",
      "02n": "#191970",
      "03d": "#8B8682",
      "03n": "#8B8682",
      "04d": "#8B8682",
      "04n": "#8B8682",
      "09d": "#007FC1",
      "09n": "#002B71",
      "10d": "#007FC1",
      "10n": "#002B71",
      "11d": "#007FC1",
      "11n": "#002B71",
      "13d": "#EECBAD",
      "13n": "#8B7765",
      "50d": "#A9A9A9",
      "50n": "#696969",
    };
    return  (
    <ReactAnimatedWeather
    icon={codeMapping[props.iconCode]}
    color={colourMapping[props.iconCode]}
    size={69}
    animate={true}
    />)
}