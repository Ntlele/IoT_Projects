"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sunny from "../public/assets/sunny.gif";
import humidity from "../public/assets/humid.gif";
import location from "../public/assets/location.png";
import asl from "../public/assets/height.png";

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
const devName = "CubeSat";
const address = "https://api.waziup.io/";

const LeftCol = () => {
  const [sensorOneData, setSensorOneData] = useState<WaziupSensorData | null>(
    null
  );
  const [sensorTwoData, setSensorTwoData] = useState<WaziupSensorData | null>(
    null
  );

  // Fetch data for sensorOne (Temperature)
  useEffect(() => {
    const fetchSensorOneData = async () => {
      try {
        const response = await fetch(
          `${address}api/v2/devices/${devName}/sensors/${sensorOneName}`
        );
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
        const response = await fetch(
          `${address}api/v2/devices/${devName}/sensors/${sensorTwoName}`
        );
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

  return (
    <>
      <div className="flex-col flex w-full md:w-[100%] h-96 m-4">
        <div className="bg-white/15 backdrop-blur-sm shadow-lg h-full p-4 border-none rounded-lg flex flex-col">
          <div className="flex flex-row justify-between my-4">
            <div className="font-bold">Temperature</div>
            <div className="font-medium flex flex-row ">
              &nbsp;&nbsp;
              <Image className="w-5 h-5" src={location} alt="location" />
              Maseru, LSO
            </div>
          </div>
          <h1 className="text-xl font-bold">Sunny</h1>
          <hr className="my-4 border border-white" />
          <div className="flex justify-center flex-row h-full ">
            <div className="flex  justify-center items-center">
              <Image
                src={sunny}
                alt="sunny"
                className="w-40 h-40 2xl:h-3/4 bg-transparent"
              />
            </div>
            {sensorOneData ? (
              <div className=" flex items-center justify-center w-[50%] text-[3rem] md:text-[4rem] lg:text[3rem] 2xl:text-[5rem]">
                {sensorOneData.value}&deg;C{" "}
              </div>
            ) : (
              <div className="text-gray-500">Loading...</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-col flex w-full md:w-[100%] h-96 m-4">
        <div className="bg-white/15 backdrop-blur-sm shadow-lg h-full p-4 border-none rounded-lg flex flex-col ">
          <div className="flex flex-row justify-between my-4">
            <div className="font-bold font-roboto">Humidity</div>
            <div className="font-medium flex flex-row">
              &nbsp;&nbsp;
              <Image
                className="w-5 h-5"
                src={asl}
                alt="height above sea level"
              />{" "}
              10 000m (ASL)
            </div>
          </div>
          <h1 className="text-xl font-bold">High</h1>
          <hr className="my-4 border border-white" />
          <div className="flex justify-center flex-row h-full">
            <div className="flex justify-center items-center">
              <Image
                src={humidity}
                alt="Humidity"
                className="w-40 h-40 2xl:h-3/4"
              />
            </div>
            {sensorTwoData ? (
              <div className="flex items-center justify-center w-1/2 text-[3rem] md:text-[4rem] lg:text[3rem] 2xl:text-[5rem]">
                {sensorTwoData.value}%
              </div>
            ) : (
              <div className="text-gray-500">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftCol;
