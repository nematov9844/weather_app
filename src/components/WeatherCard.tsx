import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from 'next/image'; // Next.js Image komponentini import qilish

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
          <Image src={`/icons/${weatherCondition.includes("Rain") ? "cloud-rain.png" : "sun.png"}`} alt={weatherCondition} width={24} height={24} />
        </p>
        <p className="flex items-center gap-2">
          Min: {(minTemp - 273.15).toFixed(1)}°C <Image src="/icons/sun.png" alt="Min Temp" width={24} height={24} />
        </p>
        <p className="flex items-center gap-2">
          Max: {(maxTemp - 273.15).toFixed(1)}°C <Image src="/icons/sun.png" alt="Max Temp" width={24} height={24} />
        </p>
        <p className="flex items-center gap-2">
          Humidity: {humidity}% <Image src="/icons/water.png" alt="Humidity" width={24} height={24} />
        </p>
        <p className="flex items-center gap-2">
          Wind Speed: {windSpeed} m/s <Image src="/icons/wind.png" alt="Wind Speed" width={24} height={24} />
        </p>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
