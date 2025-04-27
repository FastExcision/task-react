import React from 'react';

const AnotherDayWeather = ({temp, weather, date}) => {

  const checkDayOfWeek = (dateInSeconds) => {
    const dayNum = new Date(dateInSeconds * 1000).getDay();
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysArray[dayNum]
  }

  return (
    <div className="anotherDayWeather__item">
      <strong>{checkDayOfWeek(date)}</strong>
      <img className="anotherDayWeather__img"
           src={`/img/${weather[0].icon}.svg`}
           alt={weather[0].description}
      />
      <span>{temp}°C</span>
    </div>
  );
};

export default AnotherDayWeather;