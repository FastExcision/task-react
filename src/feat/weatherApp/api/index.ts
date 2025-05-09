import axios from "axios";
import {GeoItem, WeatherDataResponse} from "../types/weatherApi";


const apiKey: string = import.meta.env.VITE_WEATHER_API_KEY

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/"
});
instance.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appid: apiKey
    }
    return config;
});

const getWeatherDataByCoords = async (lat: GeoItem["lat"], lon: GeoItem["lon"]) => {
    const result = await instance.get<WeatherDataResponse>("data/2.5/forecast",
        {
            params: {
                lat: lat,
                lon: lon,
                units: "metric",
            }
        })
    return result.data
}
const getGeoByName = async (cityName: string) => {
    const result = await instance.get<GeoItem[]>("geo/1.0/direct",
        {
            params: {
                q: cityName,
                limit: 1,
            }
        })
    return result.data[0]
}


export const WeatherAppService = {getWeatherDataByCoords, getGeoByName}