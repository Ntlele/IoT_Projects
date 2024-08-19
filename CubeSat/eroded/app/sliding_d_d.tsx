"use client"
import React, { useState, useEffect } from 'react';  

// Define types for the Waziup weather data
interface WaziupWeatherData {
    id: string;
    name: string;
    value: number;
    unit: string;
    dateReceived: string;
    timestamp: string;
}

const sensName = "Humidity";
const devName = "CubeSat";
const topic = `api/v2/devices/${devName}/sensors/${sensName}`;
const address = "https://api.waziup.io/";

const SlidingSlideshow: React.FC = () => {  
    const [currentSlide, setCurrentSlide] = useState<number>(0);  
    const [weatherData, setWeatherData] = useState<WaziupWeatherData | null>(null);  

    // Fetch weather data from Waziup
    useEffect(() => {  
        const fetchWeather = async () => {  
            try {  
                const response = await fetch(`${address}${topic}`, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                });  

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();  

                // Log the fetched data for debugging
                console.log("Fetched data:", data);

                // Process the fetched data
                const processedData = {
                    id: data.id,
                    name: data.name,
                    value: data.value.value,
                    unit: data.unit,
                    dateReceived: data.value.date_received,
                    timestamp: data.value.timestamp,
                };

                setWeatherData(processedData);  
            } catch (error) {  
                console.error("Error fetching weather data:", error);  
            }  
        };  
        fetchWeather();  
    }, []);  

    // Function to go to the next slide  
    const nextSlide = (): void => {  
        setCurrentSlide((prev) => (prev + 1) % 1);  // Only one slide, so loop over itself
    };  

    // Auto-advance to the next slide every 3 seconds (can be removed if unnecessary)
    useEffect(() => {  
        if (weatherData) {
            const interval = setInterval(nextSlide, 3000);  
            return () => clearInterval(interval);  
        }
    }, [weatherData]);  

    return (  
        <div className="flex flex-col items-center">  
            <div className={`flex overflow-hidden transition-all duration-500 w-72 h-72 relative`}>  
                {weatherData ? (
                    <div  
                        key={weatherData.id}  
                        className={`
                            w-72
                            h-72
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-white
                            text-2xl
                            bg-blue-400
                            absolute
                            transition-all
                            duration-500
                            ease-in-out
                            translate-x-0 opacity-100`}  
                    >  
                        <div className="text-xl font-bold">{weatherData.name}</div>
                        <div className="text-lg">{weatherData.id}</div>
                        <div className="text-5xl mt-4">{weatherData.value}{weatherData.unit}</div>
                        <div className="mt-2 text-sm">Received: {new Date(weatherData.dateReceived).toLocaleString()}</div>
                        <div className="mt-2 text-sm">Measured: {new Date(weatherData.timestamp).toLocaleString()}</div>
                    </div>  
                ) : (
                    <div className="w-72 h-72 flex items-center justify-center text-white text-2xl bg-red-400">
                        No data available
                    </div>
                )}
            </div>  
        </div>  
    );  
};  

export default SlidingSlideshow;
