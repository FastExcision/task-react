export type WeatherListItem = {
    dt: number,
    main: {
        temp: number,
    },
    weather: [
        {
            main: string,
            description: string,
            icon: string
        }
    ],

    dt_txt: string
}

export type WeatherDataResponse = {
    list: WeatherListItem[],
    city: {
        name: string,
    }
}

export type GeoItem = {
    name: string,
    lat: number,
    lon: number,
}

