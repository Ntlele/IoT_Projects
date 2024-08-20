"use client"  
import React, { useState, useEffect } from 'react';  

interface WaziupSensorData {  
    id: string;  
    name: string;  
    value: number;  
    unit: string;  
    timestamp: string;  
}  

// Sensor identifiers  
const sensorOneName = "TEMP200";  
const sensorTwoName = "HUM200";  
const sensorThreeName = "PRES200";  // Adjust as needed  
const devName = "CubeSat";  
const address = "https://api.waziup.io/";  

const StationaryDivs: React.FC = () => {  
    const [sensorOneData, setSensorOneData] = useState<WaziupSensorData | null>(null);  
    const [sensorTwoData, setSensorTwoData] = useState<WaziupSensorData | null>(null);  
    const [sensorThreeData, setSensorThreeData] = useState<WaziupSensorData | null>(null);  

    // Fetch data for sensorOne (Temperature)  
    useEffect(() => {  
        const fetchSensorOneData = async () => {  
            try {  
                const response = await fetch(`${address}api/v2/devices/${devName}/sensors/${sensorOneName}`);  
                const data = await response.json();  
                const processedData = {  
                    id: data.id,  
                    name: data.name,  
                    value: data.value.value,  
                    unit: data.unit,  
                    timestamp: data.value.timestamp,  
                };  
                setSensorOneData(processedData);  
            } catch (error) {  
                console.error("Error fetching sensor one data:", error);  
            }  
        };  
        fetchSensorOneData();  
    }, []);  

    // Fetch data for sensorTwo (Humidity)  
    useEffect(() => {  
        const fetchSensorTwoData = async () => {  
            try {  
                const response = await fetch(`${address}api/v2/devices/${devName}/sensors/${sensorTwoName}`);  
                const data = await response.json();  
                const processedData = {  
                    id: data.id,  
                    name: data.name,  
                    value: data.value.value,  
                    unit: data.unit,  
                    timestamp: data.value.timestamp,  
                };  
                setSensorTwoData(processedData);  
            } catch (error) {  
                console.error("Error fetching sensor two data:", error);  
            }  
        };  
        fetchSensorTwoData();  
    }, []);  

    // Fetch data for sensorThree (Pressure)  
    useEffect(() => {  
        const fetchSensorThreeData = async () => {  
            try {  
                const response = await fetch(`${address}api/v2/devices/${devName}/sensors/${sensorThreeName}`);  
                const data = await response.json();  
                const processedData = {  
                    id: data.id,  
                    name: data.name,  
                    value: data.value.value,  
                    unit: data.unit,  
                    timestamp: data.value.timestamp,  
                };  
                setSensorThreeData(processedData);  
            } catch (error) {  
                console.error("Error fetching sensor three data:", error);  
            }  
        };  
        fetchSensorThreeData();  
    }, []);  

    return (  
        <>  
            <div className="hidden md:flex flex-row justify-between mb-4 fir-parent">  
                <div className="flex flex-col items-center justify-center p-4 bg-white/15 backdrop-blur-sm rounded shadow-lg transition hover:shadow-xl">  
                    {sensorOneData ? (  
                        <>  
                            <div className="text-lg font-semibold">{sensorOneData.name}</div>  
                            <div className="text-2xl">{sensorOneData.value} {sensorOneData.unit}</div>
                            <hr className="my-2 border border-white/45 w-[80%]" />
                            <p className="text-sm text-center">{new Date(sensorOneData.timestamp).toLocaleString()}</p>
                        </>  
                    ) : <div className="text-gray-500">Loading...</div>}  
                </div>  
                <div className="flex flex-col items-center justify-center p-2 bg-white/15 backdrop-blur-sm rounded shadow-lg transition hover:shadow-xl">  
                    {sensorTwoData ? (  
                        <>  
                            <div className="text-lg font-semibold">{sensorTwoData.name}</div>  
                            <div className="text-2xl">{sensorTwoData.value} {sensorTwoData.unit}</div>
                            <hr className="my-2 border border-white/45 w-[80%]" />
                            <p className="text-sm text-center">{new Date(sensorTwoData.timestamp).toLocaleString()}</p>
                        </>  
                    ) : <div className="text-gray-500">Loading...</div>}  
                </div>  
                <div className="flex flex-col items-center justify-center p-4 bg-white/15 backdrop-blur-sm rounded shadow-lg transition hover:shadow-xl">  
                    {sensorThreeData ? (  
                        <>  
                            <div className="text-lg font-semibold">{sensorThreeData.name}</div>  
                            <div className="text-2xl">{sensorThreeData.value} {sensorThreeData.unit}</div>
                            <hr className="my-4 border border-white/45 w-[80%]" />
                            <p className="text-sm text-center">{new Date(sensorThreeData.timestamp).toLocaleString()}</p>
                        </>  
                    ) : <div className="text-gray-500">Loading...</div>}  
                </div>  
            </div>  

            <div className="hidden md:flex flex-row justify-between mb-4 sec-parent">  
                <div className="flex flex-col items-center  p-2 bg-gradient-to-b from-slate-100/25 to-slate-900/15 backdrop-blur-lg rounded shadow-lg">  
                    {sensorOneData ? (  
                        <>  
                            <div className="text-sm">{new Date(sensorOneData.timestamp).toLocaleString()}</div>  
                        </>  
                    ) : <div className="text-gray-500">Loading...</div>}  
                </div>  
                <div className="flex flex-col items-center p-2 bg-gradient-to-b from-slate-100/25 to-slate-900/15 backdrop-blur-lg rounded shadow-lg">  
                    {sensorTwoData ? (  
                        <>  
                            <div className="text-sm">{new Date(sensorTwoData.timestamp).toLocaleString()}</div>  
                        </>  
                    ) : <div className="text-gray-500">Loading...</div>}  
                </div>  
                <div className="flex flex-col items-center p-2 bg-gradient-to-b from-slate-100/25 to-slate-900/15 backdrop-blur-lg rounded shadow-lg">  
                    {sensorThreeData ? (  
                        <>  
                            <div className="text-sm">{new Date(sensorThreeData.timestamp).toLocaleString()}</div>  
                        </>  
                    ) : <div className="text-gray-500">Loading...</div>}  
                </div>  
            </div>  
        </>  
    );  
};  

export default StationaryDivs;