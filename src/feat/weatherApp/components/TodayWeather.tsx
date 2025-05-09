import {FC} from 'react';
import {TodayWeatherProps} from "../types/weatherApp";


const TodayWeather:FC<TodayWeatherProps> = ({weather, cityName, temp}) => {

  return (
    <div className="todayWeather">
      <img
        className="todayWeather_icon"
        src={`/img/weather/${weather[0].icon}.svg`}
        alt="Today Weather"
      />
      <div className="todayWeather__description">
        <strong>Today</strong>
        <h1>{cityName}</h1>
        <p>Temperature {temp}°C</p>
        <p>{weather[0].description}</p>
      </div>
    </div>
  );
};

export default TodayWeather;