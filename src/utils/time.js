import {formatInTimeZone} from "date-fns-tz";

const today = formatInTimeZone(Date.now(), "UTC", "yyyy-MM-dd")

const getNextDaysNoon = (data, daysCount, dateField) => {
  return data.filter(date => !date[dateField].includes(today))
    .filter(date => date[dateField].includes("12:00:00"))
    .slice(0, daysCount)
}

export {getNextDaysNoon}