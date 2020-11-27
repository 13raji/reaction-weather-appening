import React from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-app">
          <CurrentWeather defaultCity="London" />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}

