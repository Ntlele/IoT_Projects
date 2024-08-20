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

const devName = "CubeSat";
const sensors = ["Humidity", "Temperature", "Pressure"];
const address = "https://api.waziup.io/";

const SlidingSlideshow: React.FC = () => {  
    const [currentSlide, setCurrentSlide] = useState<number>(0);  
    const [weatherData, setWeatherData] = useState<WaziupWeatherData[]>([]);  

    // Fetch weather data from Waziup
    useEffect(() => {  
        const fetchWeather = async () => {  
            try {  
                const dataPromises = sensors.map(async (sensor) => {
                    const topic = `api/v2/devices/${devName}/sensors/${sensor}`;
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

                    // Process the fetched data
                    return {
                        id: data.id,
                        name: data.name,
                        value: data.value.value,
                        unit: data.unit,
                        dateReceived: data.value.date_received,
                        timestamp: data.value.timestamp,
                    };
                });

                const fetchedData = await Promise.all(dataPromises);
                setWeatherData(fetchedData);
            } catch (error) {  
                console.error("Error fetching weather data:", error);  
            }  
        };  
        fetchWeather();  
    }, []);  

    // Function to go to the next slide  
    const nextSlide = (): void => {  
        setCurrentSlide((prev) => (prev + 1) % weatherData.length);  
    };  

    // Auto-advance to the next slide every 3 seconds
    useEffect(() => {  
        if (weatherData.length > 0) {
            const interval = setInterval(nextSlide, 3000);  
            return () => clearInterval(interval);  
        }
    }, [weatherData]);  

    return (  
        <div className="h-full flex flex-col items-center">  
            <div className={`flex overflow-hidden transition-all duration-500 w-full h-full relative`}>  
                {weatherData.length > 0 ? (
                    weatherData.map((data, index) => (
                        <div  
                            key={data.id}  
                            className={`
                                w-80
                                h-80
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
                                ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}  
                        >  
                            <div className="text-xl font-bold">{data.name}</div>
                            <div className="text-lg">{data.id}</div>
                            <div className="text-5xl mt-4">{data.value}{data.unit}</div>
                            <div className="mt-2 text-sm">Received: {new Date(data.dateReceived).toLocaleString()}</div>
                            <div className="mt-2 text-sm">Measured: {new Date(data.timestamp).toLocaleString()}</div>
                        </div>
                    ))
                ) : (
                    <div className="w-full rounded-md flex items-center justify-center text-white text-2xl bg-red-400">
                        No data available
                    </div>
                )}
            </div>  
        </div>  
    );  
};  

export default SlidingSlideshow;
