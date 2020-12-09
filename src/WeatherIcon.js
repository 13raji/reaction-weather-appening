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
      "01d": "#92817a",
      "01n": "#707070",
      "02d": "#92817a",
      "02n": "#707070",
      "03d": "#92817a",
      "03n": "#707070",
      "04d": "#92817a",
      "04n": "#707070",
      "09d": "#92817a",
      "09n": "#707070",
      "10d": "#92817a",
      "10n": "#707070",
      "11d": "#92817a",
      "11n": "#707070",
      "13d": "#92817a",
      "13n": "#707070",
      "50d": "#92817a",
      "50n": "#707070",
    };
    return  (
    <ReactAnimatedWeather
    icon={codeMapping[props.iconCode]}
    color={colourMapping[props.iconCode]}
    size={69}
    animate={true}
    />)
}