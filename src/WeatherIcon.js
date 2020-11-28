import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    console.log(props.icon)
    return  <ReactAnimatedWeather
    icon="FOG"
    color="grey"
    size={69}
    animate={true}
  />
}