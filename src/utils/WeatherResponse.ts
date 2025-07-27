export default interface WeatherResponse {
    name: string;
    timezone: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    }
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
}