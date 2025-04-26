import React from 'react';

const AnotherDayWeather = ({...props}) => {

  const checkDayOfWeek = (dateInSeconds) => {
    const dayNum = new Date(dateInSeconds * 1000).getDay();
    return (
      dayNum === 0 ? "Sunday"
      : dayNum === 1 ? "Monday"
        : dayNum === 2 ? "Tuesday"
          : dayNum === 3 ? "Wednesday"
            : dayNum === 4 ? "Thursday"
              : dayNum === 5 ? "Friday"
                : "Saturday")
  }

  return (
    <div key={props.item.dt} className="anotherDayWeather__item">
      <strong>{checkDayOfWeek(props.item.dt)}</strong>
      <img className="anotherDayWeather__img"
           src={`/img/${props.item.weather[0].icon}.svg`}
           alt={props.item.weather[0].description}
      />
      <span>{Math.round(props.item.main.temp)}°C</span>
    </div>
  );
};

export default AnotherDayWeather;