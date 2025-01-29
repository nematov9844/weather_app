import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface WeatherCardProps {
  temperature: number;
  city: string;
  date: string;
  weatherCondition: string;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  windSpeed: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  city,
  date,
  weatherCondition,
  minTemp,
  maxTemp,
  humidity,
  windSpeed,
}) => {
  return (
    <Card className="bg-[rgba(255,255,255,0.2)] text-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <CardHeader className="text-center">
        <h1 className="text-5xl font-bold">{(temperature - 273.15).toFixed(1)}°C</h1>
        <h2 className="text-3xl font-medium">{city}</h2>
        <h3 className="text-lg text-gray-400">{date}</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="flex items-center gap-2">
          {weatherCondition} 
          <img src={`/icons/${weatherCondition.includes("Rain") ? "cloud-rain.png" : "sun.png"}`} alt={weatherCondition} className="w-6 h-6" />
        </p>
        <p className="flex items-center gap-2">
          Min: {(minTemp - 273.15).toFixed(1)}°C <img src="/icons/sun.png" alt="Min Temp" className="w-6 h-6" />
        </p>
        <p className="flex items-center gap-2">
          Max: {(maxTemp - 273.15).toFixed(1)}°C <img src="/icons/sun.png" alt="Max Temp" className="w-6 h-6" />
        </p>
        <p className="flex items-center gap-2">
          Humidity: {humidity}% <img src="/icons/water.png" alt="Humidity" className="w-6 h-6" />
        </p>
        <p className="flex items-center gap-2">
          Wind Speed: {windSpeed} m/s <img src="/icons/wind.png" alt="Wind Speed" className="w-6 h-6" />
        </p>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
