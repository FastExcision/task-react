import {FormEvent} from "react";

export type CityName = string;
export type LoadWeatherData = (city: CityName) => Promise<void>;

export type NextDaysProps = {
    temp: number;
    weather: [
        {
            main: string,
            description: string,
            icon: string
        }
    ],
    date: number;
}

export type TodayWeatherProps = {
    weather: [
        {
            main: string,
            description: string,
            icon: string
        }
    ],
    cityName: string,
    temp: number;
}

export type checkDayOfWeek = (dateInSeconds: number) => string;

export type SearchCityFormProps = {
    setCityName: (name: string) => void;
}
export type newCitySearch = (event: FormEvent<HTMLFormElement>) => void;
