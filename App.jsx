

import React from 'https://esm.sh/react@18';

function Weather(props) {
  return (
    <div className="container">
      <h1>Weather Dashboard</h1>

      <h2>City: {props.city}</h2>
      <p>Date: {props.date}</p>

      <div className="card">
        <p>Temperature: {props.temperature} °C</p>
        <p>Humidity: {props.humidity} %</p>
        <p>Climate: {props.climate}</p>
        <p>Rainfall: {props.rainfall} mm</p>
        <p>Wind Speed: {props.windspeed} km/h</p>
        <p>Pollution (AQI): {props.pollution}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Weather
      city="Vijayawada"
      date="24-11-2026"
      temperature={29}
      humidity={65}
      climate="Cloudy"
      rainfall={5}
      windspeed={12}
      pollution={75}
    />
  );
}

export default App;
