import {FC} from 'react';
import {TodayWeatherProps} from "../types/weatherApp";
import {iconNameMap} from "../utils/iconNameMap.ts";


const TodayWeather:FC<TodayWeatherProps> = ({weather, cityName, temp}) => {
    const iconFromData = weather[0].icon

    return (
    <div className="todayWeather">
      <img
        className="todayWeather_icon"
        src={`/img/weather/${iconNameMap[iconFromData]}.svg`}
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