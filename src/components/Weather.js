import React from 'react';

function Weather({ weatherData }){

  return (
    <div className='weather'>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
