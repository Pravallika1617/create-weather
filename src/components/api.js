const API_KEY = '5762d358c12382bb9f82b597dbae5be4'; 
async function fetchWeather(city) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&id=524901&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

export default fetchWeather;
