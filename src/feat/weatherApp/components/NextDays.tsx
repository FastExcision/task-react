import {checkDayOfWeek, NextDaysProps} from "../types/weatherApp";
import {iconNameMap} from "../utils/iconNameMap.ts";


const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const NextDays = ({temp, weather, date}: NextDaysProps) => {
    const iconFromData = weather[0].icon

    const checkDayOfWeek: checkDayOfWeek = (dateInSeconds) => {
        const dayNum = new Date(dateInSeconds * 1000).getDay();
    return daysArray[dayNum]
  }


  return (
    <div className="anotherDayWeather__item">
      <strong>{checkDayOfWeek(date)}</strong>
      <img className="anotherDayWeather__img"
           src={`/img/weather/${iconNameMap[iconFromData]}.svg`}
           alt={weather[0].description}
      />
      <span>{temp}°C</span>
    </div>
  );
};

export default NextDays;