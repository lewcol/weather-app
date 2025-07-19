import { useEffect, useState } from 'react';
import { getWeatherAtCity } from './services/GetWeatherAtCity'

function App() {
  const [weather, setWeather] = useState<number>(0);
  const city = "Vancouver";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherAtCity(city);
        setWeather(Math.round(data.main.temp - 273.15));
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <>
      <p>Temperature in {city} is {weather}</p>
    </>
  );
}

export default App
