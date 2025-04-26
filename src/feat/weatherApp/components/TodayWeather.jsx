import React from 'react';


const TodayWeather = ({...props}) => {

  return (
    <div className="todayWeather">
      <img
        className="todayWeather_icon"
        src={`/img/${props.weather.icon}.svg`}
        alt="Today Weather"
      />
      <div className="todayWeather__description">
        <strong>Today</strong>
        <h1>{props.cityName}</h1>
        <p>Temperature {props.temp}°C</p>
        <p>{props.weather.description}</p>
      </div>
    </div>
  );
};

export default TodayWeather;