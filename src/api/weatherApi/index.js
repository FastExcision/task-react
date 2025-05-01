import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export default class WeatherAppService {
  static async getWeatherDataByCoords(lat, lon) {
    const result = await axios.get("https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat: lat,
          lon: lon,
          units: "metric",
          appid: apiKey
      }
  })
    return result.data
}
  static async getGeoByName(cityName){
    const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`)
    return result.data[0]
  }
}