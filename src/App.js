import React from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <CurrentWeather />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Footer />
      </div>
    </div>
  );
}

