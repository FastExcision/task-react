import React from 'react';

const TodayWeather = ({weather, cityName, temp}) => {

  return (
    <div className="todayWeather">
      <img
        className="todayWeather_icon"
        src={`/img/${weather.icon}.svg`}
        alt="Today Weather"
      />
      <div className="todayWeather__description">
        <strong>Today</strong>
        <h1>{cityName}</h1>
        <p>Temperature {temp}°C</p>
        <p>{weather.description}</p>
      </div>
    </div>
  );
};

export default TodayWeather;