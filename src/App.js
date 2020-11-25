import React from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <CurrentWeather />
      <Footer />
      </div>
    </div>
  );
}

