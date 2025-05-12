import {useEffect, useState} from 'react';
import './styles/weatherApp.css';
import TodayWeather from "./components/TodayWeather.tsx";
import NextDays from "./components/NextDays.tsx";
import SearchCityForm from "./components/searchCityForm.tsx";
import {getNextDays} from "../../utils/time.ts";
import {WeatherAppService} from "./api";
import {WeatherDataResponse} from "./types/weatherApi";
import {CityName, LoadWeatherData} from "./types/weatherApp";
import {useFetchLoading} from "../../hooks/useFetchLoading.ts";

const WeatherAppPage = () => {

  const [cityName, setCityName] = useState<CityName>("Санкт-Петербург");
  const [weatherData, setWeatherData] = useState<WeatherDataResponse | null>(null);

  const loadWeatherData: LoadWeatherData = async (city) => {
    const geoResponse = await WeatherAppService.getGeoByName(city);
    const {lat, lon} = geoResponse;
    const weatherResponse = await WeatherAppService.getWeatherDataByCoords(lat, lon);
    setWeatherData(weatherResponse);
  };
  const [fetchWeatherData, isLoading, error] = useFetchLoading(loadWeatherData);

  useEffect(() => {
    fetchWeatherData(cityName)
  }, [cityName])

  return (<div className="weatherPage">
    <SearchCityForm setCityName={setCityName}/>
    {isLoading ? (<img src="/img/weather/loading.gif" alt="Loading..."/>) : error
      ? (<div>Ошибка: {error}</div>)
      : weatherData ? (<>
      <TodayWeather
        weather={weatherData.list[0].weather}
        cityName={weatherData.city.name}
        temp={Math.round(weatherData.list[0].main.temp)}
      />
      <div className="anotherDayWeather_wrapper">
        {getNextDays(weatherData.list, 4, "dt_txt")
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