import React, {useEffect, useState} from 'react';
import WeatherAppService from "./api/api.jsx";
import {useFetching} from "../../hooks/useFetching.jsx";
import './styles/weatherApp.css';
import TodayWeather from "./components/TodayWeather.jsx";
import AnotherDayWeather from "./components/AnotherDayWeather.jsx";


const WeatherAppPage = () => {
  const [cityName, setCityName] = useState("Санкт-Петербург");
  const [weatherData, setWeatherData] = useState(null);

  const [fetchWeatherData, isLoading, error] = useFetching(async (cityName) => {
    const response = await WeatherAppService.getGeo(cityName)
    setWeatherData(await weatherGet(response.data[0].lat, response.data[0].lon))
  });

  const weatherGet = async (lat, lon) => {
    return await WeatherAppService.getWeatherDataByCoords(lat, lon)
  }

  useEffect(() => {
    fetchWeatherData(cityName)
  }, [cityName])

  const newCitySearch = (event) => {
    event.preventDefault();
    if (event.target.citySearch.value === "") {
      return;
    }
    setCityName(event.target.citySearch.value);
    event.target.citySearch.value = "";
  }

  return (<div className="weatherPage">
    <form onSubmit={newCitySearch} className="weatherSearch">
      <input placeholder="Enter a City..." name="citySearch" className="weatherSearch__input"/>
    </form>
    {isLoading ? (<img src="/img/loading.gif" alt="Loading..."/>) : error
      ? (<div>Ошибка: {error}</div>)
      : weatherData ? (<>
      <TodayWeather
        weather={weatherData.data.list[0].weather[0]}
        cityName={weatherData.data.city.name}
        temp={Math.round(weatherData.data.list[0].main.temp)}
      />

      <div className="anotherDayWeather_wrapper">
        {weatherData.data.list
          .filter((item, i) => [8, 16, 24, 32].includes(i))
          .map((item) => (<AnotherDayWeather
            key={item.dt}
            item={item}
          />))}
      </div>
    </>) : null}
  </div>)
};

export {WeatherAppPage};