"use client"
import React, { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import SearchBar from '../components/SearchBar';

const api = "5193679eefb8b3240c39abeeadb7ed40";

const Home: React.FC = () => {
  const [todayWeather, setTodayWeather] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [city, setCity] = useState('Toshkent'); // Default city

  const fetchWeatherData = async (city: string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`);
    const data = await response.json();

    if (data.cod === "200") {
      // Bugungi ob-havo ma'lumotlarini olish
      const currentWeather = data.list[0];
      setTodayWeather({
        temperature: currentWeather.main.temp,
        city: data.city.name,
        date: new Date(currentWeather.dt_txt).toLocaleDateString(),
        weatherCondition: currentWeather.weather[0].description,
        minTemp: currentWeather.main.temp_min,
        maxTemp: currentWeather.main.temp_max,
        humidity: currentWeather.main.humidity,
        windSpeed: currentWeather.wind.speed,
      });

      // Taxminiy ob-havo ma'lumotlarini olish
      const forecasts = data.list.slice(0, 7).map((item: any) => ({
        day: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
        temperature: item.main.temp,
        condition: item.weather[0].description,
      }));
      setForecastData(forecasts);
    } else {
      alert("City not found");
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="p-8 flex w-full gap-5">
      <div className='w-1/5 h-screen'>
        <SearchBar onSearch={setCity} />
        {todayWeather && <WeatherCard {...todayWeather} />}
      </div>
      <div className='w-4/5 h-screen'>
        <h2 className="text-2xl mt-8">Weekly Forecast</h2>
        <ForecastList forecasts={forecastData} />
      </div>
    </div>
  );
};

export default Home;
