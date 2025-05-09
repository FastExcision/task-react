import React from 'react';

const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const NextDays = ({temp, weather, date}) => {

  const checkDayOfWeek = (dateInSeconds) => {
    const dayNum = new Date(dateInSeconds * 1000).getDay();
    return daysArray[dayNum]
  }

  return (
    <div className="anotherDayWeather__item">
      <strong>{checkDayOfWeek(date)}</strong>
      <img className="anotherDayWeather__img"
           src={`/img/weather/${weather[0].icon}.svg`}
           alt={weather[0].description}
      />
      <span>{temp}°C</span>
    </div>
  );
};

export default NextDays;