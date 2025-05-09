import {formatInTimeZone} from "date-fns-tz";
import {GetNextDay} from "../types/time";

const today: string = formatInTimeZone(Date.now(), "UTC", "yyyy-MM-dd")

const getNextDays: GetNextDay = (data, daysCount, dateField, options = {
  time: "12:00:00",
}) => {
  return data
      .filter(item => {
        const fieldValue = item[dateField];
        return typeof fieldValue === 'string' && !fieldValue.includes(today);
      })
      .filter(item => {
        const fieldValue = item[dateField];
        return typeof fieldValue === 'string' && fieldValue.includes(options.time);
      })
      .slice(0, daysCount);
}

export {getNextDays}