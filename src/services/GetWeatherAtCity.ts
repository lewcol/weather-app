import type WeatherResponse from "../utils/WeatherResponse.ts";

export async function getWeatherAtCity(city: string): Promise<WeatherResponse> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;
    
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Error ${response.status} Occurred`)
    }
    return await response.json()
}
