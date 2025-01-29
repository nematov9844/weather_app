import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';

interface Forecast {
  day: string;
  temperature: number;
  condition: string;
}

const ForecastList: React.FC<{ forecasts: Forecast[] }> = ({ forecasts }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {forecasts.map((forecast) => (
        <Card key={`${forecast.day}-${forecast.temperature}`} className="bg-[rgba(255,255,255,0.2)] text-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">{forecast.day}</h4>
          <p className="flex items-center gap-2">
            {(forecast.temperature - 273.15).toFixed(1)}°C 
            <Image src={`/icons/${forecast.condition.includes('Rain') ? "cloud-rain.png" : "sun.png"}`} alt={forecast.condition} width={24} height={24} />
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ForecastList; 