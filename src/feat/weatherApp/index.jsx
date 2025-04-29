import React, {useEffect, useState} from 'react';
import WeatherAppService from "../../api/weatherApi/index.js";
import {useFetching} from "../../hooks/useFetching.jsx";
import './styles/weatherApp.css';
import TodayWeather from "./components/TodayWeather.jsx";
import NextDays from "./components/NextDays.jsx";
import SearchCityForm from "./components/searchCityForm.jsx";
import {getNextDaysNoon} from "../../utils/time.js";

const WeatherAppPage = () => {

  const [cityName, setCityName] = useState("Санкт-Петербург");
  const [weatherData, setWeatherData] = useState(null);

  const loadWeatherData = async (city) => {
    const geoResponse = await WeatherAppService.getGeoByName(city);
    const {lat, lon} = geoResponse;
    const weatherResponse = await WeatherAppService.getWeatherDataByCoords(lat, lon);
    setWeatherData(weatherResponse);
  };

  const [fetchWeatherData, isLoading, error] = useFetching(loadWeatherData);

  useEffect(() => {
    fetchWeatherData(cityName)
  }, [cityName])

  return (<div className="weatherPage">
    <SearchCityForm setCityName={setCityName}/>
    {isLoading ? (<img src="/img/weather/loading.gif" alt="Loading..."/>) : error
      ? (<div>Ошибка: {error}</div>)
      : weatherData ? (<>
      <TodayWeather
        weather={weatherData.list[0].weather[0]}
        cityName={weatherData.city.name}
        temp={Math.round(weatherData.list[0].main.temp)}
      />
      <div className="anotherDayWeather_wrapper">
        {getNextDaysNoon(weatherData.list, 4, "dt_txt")
          .map((item) => (<NextDays
            key={item.dt}
            date={item.dt}
            weather={item.weather}
            temp={Math.round(item.main.temp)}
          />))}
      </div>
    </>) : null}
  </div>)
};

export {WeatherAppPage};