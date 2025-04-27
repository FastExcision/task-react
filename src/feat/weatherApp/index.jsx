import React, {useEffect, useState} from 'react';
import WeatherAppService from "../../api/weatherApi/index.js";
import {useFetching} from "../../hooks/useFetching.jsx";
import './styles/weatherApp.css';
import TodayWeather from "./components/TodayWeather.jsx";
import AnotherDayWeather from "./components/AnotherDayWeather.jsx";
import SearchCityForm from "./components/searchCityForm.jsx";

const WeatherAppPage = () => {
  const [cityName, setCityName] = useState("Санкт-Петербург");
  const [weatherData, setWeatherData] = useState(null);

  const loadWeatherData = async (city) => {
    const geoResponse = await WeatherAppService.getGeo(city);
    const {lat, lon} = geoResponse.data[0];
    const weatherResponse = await WeatherAppService.getWeatherDataByCoords(lat, lon);
    setWeatherData(weatherResponse.data);
  };

  const [fetchWeatherData, isLoading, error] = useFetching(loadWeatherData);

  useEffect(() => {
    fetchWeatherData(cityName)
  }, [cityName])

  return (<div className="weatherPage">
    <SearchCityForm setCityName={setCityName}/>
    {isLoading ? (<img src="/img/loading.gif" alt="Loading..."/>) : error
      ? (<div>Ошибка: {error}</div>)
      : weatherData ? (<>
      <TodayWeather
        weather={weatherData.list[0].weather[0]}
        cityName={weatherData.city.name}
        temp={Math.round(weatherData.list[0].main.temp)}
      />
      <div className="anotherDayWeather_wrapper">
        {weatherData.list
          .filter((_, i) => [8, 16, 24, 32].includes(i))
          .map((item) => (<AnotherDayWeather
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