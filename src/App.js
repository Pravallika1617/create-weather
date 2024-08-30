import React, { useState } from 'react';
import fetchWeather from './components/api';
import Weather from './components/Weather';
import image from './components/image.png'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function getWeather(){
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather Report
        <img src={image} alt="" />
      </h1>
      <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeather}>Get Weather</button>
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;

