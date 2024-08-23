"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import air from "@/public/assets/airQ.gif";
import sound from "@/public/assets/soundvib.gif";
import uv from "@/public/assets/uvP.gif";
import sunny from "@/public/assets/sunny.gif"
import humid from "@/public/assets/humid.gif"

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
const sensorThreeName = "PRES200";
const sensorFourName = "VIB200";
const sensorFiveName = "UV200";
const sensorSixName = "PART200";
const devName = "CubeSat";
const address = "https://api.waziup.io/";

const StationaryDivs: React.FC = () => {
  const [sensorOneData, setSensorOneData] = useState<WaziupSensorData | null>(
    null
  );
  const [sensorTwoData, setSensorTwoData] = useState<WaziupSensorData | null>(
    null
  );
  const [sensorThreeData, setSensorThreeData] =
    useState<WaziupSensorData | null>(null);
  const [sensorFourData, setSensorFourData] = useState<WaziupSensorData | null>(
    null
  );
  const [sensorFiveData, setSensorFiveData] = useState<WaziupSensorData | null>(
    null
  );
  const [sensorSixData, setSensorSixData] = useState<WaziupSensorData | null>(
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

  // Fetch data for sensorThree (Pressure)
  useEffect(() => {
    const fetchSensorThreeData = async () => {
      try {
        const response = await fetch(
          `${address}api/v2/devices/${devName}/sensors/${sensorThreeName}`
        );
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

  // Fetch data for sensorFour (Pressure)
  useEffect(() => {
    const fetchSensorFourData = async () => {
      try {
        const response = await fetch(
          `${address}api/v2/devices/${devName}/sensors/${sensorFourName}`
        );
        const data = await response.json();
        const processedData = {
          id: data.id,
          name: data.name,
          value: data.value.value,
          unit: data.unit,
          timestamp: data.value.timestamp,
        };
        setSensorFourData(processedData);
      } catch (error) {
        console.error("Error fetching sensor Four data:", error);
      }
    };
    fetchSensorFourData();
  }, []);

  // Fetch data for sensorFive (Pressure)
  useEffect(() => {
    const fetchSensorFiveData = async () => {
      try {
        const response = await fetch(
          `${address}api/v2/devices/${devName}/sensors/${sensorFiveName}`
        );
        const data = await response.json();
        const processedData = {
          id: data.id,
          name: data.name,
          value: data.value.value,
          unit: data.unit,
          timestamp: data.value.timestamp,
        };
        setSensorFiveData(processedData);
      } catch (error) {
        console.error("Error fetching sensor Five data:", error);
      }
    };
    fetchSensorFiveData();
  }, []);

  // Fetch data for sensorSix (Pressure)
  useEffect(() => {
    const fetchSensorSixData = async () => {
      try {
        const response = await fetch(
          `${address}api/v2/devices/${devName}/sensors/${sensorSixName}`
        );
        const data = await response.json();
        const processedData = {
          id: data.id,
          name: data.name,
          value: data.value.value,
          unit: data.unit,
          timestamp: data.value.timestamp,
        };
        setSensorSixData(processedData);
      } catch (error) {
        console.error("Error fetching sensor Six data:", error);
      }
    };
    fetchSensorSixData();
  }, []);

  return (
    <>
      <div className="hidden md:flex flex-row justify-between mb-4 fir-parent">
        <div className="flex flex-col items-center justify-center p-4 bg-white/15 backdrop-blur-sm rounded shadow-lg transition hover:shadow-xl">
          {sensorOneData ? (
            <>
              <div className="text-lg font-semibold">{sensorOneData.name}</div>
              <div className="flex flex-row justify-center space-x-3 !w-[80%]">
                  <Image src={sunny} alt="Air quality" className=" w-[20%]" />
                <div className=" text-2xl !w-[80%] overflow-hidden">
                  {sensorOneData.value} {sensorOneData.unit}
                </div>
              </div>
              <hr className="my-2 border border-white/45 w-[80%]" />
              <p className="text-sm text-center">
                {new Date(sensorOneData.timestamp).toLocaleString()}
              </p>
            </>
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-white/15 backdrop-blur-sm rounded shadow-lg transition hover:shadow-xl">
          {sensorTwoData ? (
            <>
              <div className="text-lg font-semibold">{sensorTwoData.name}</div>
              <div className="flex flex-row justify-center space-x-3 !w-[80%]">
                  <Image src={humid} alt="Air quality" className=" w-[20%]" />
                <div className=" text-2xl !w-[80%] overflow-hidden">
                  {sensorTwoData.value} {sensorTwoData.unit}
                </div>
              </div>
              <hr className="my-2 border border-white/45 w-[80%]" />
              <p className="text-sm text-center">
                {new Date(sensorTwoData.timestamp).toLocaleString()}
              </p>
            </>
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white/15 backdrop-blur-sm rounded shadow-lg transition hover:shadow-xl">
          {sensorThreeData ? (
            <>
              <div className="text-lg font-semibold">
                {sensorThreeData.name}
              </div>
              <div className="text-2xl">
                {sensorThreeData.value} {sensorThreeData.unit}
              </div>
              <hr className="my-4 border border-white/45 w-[80%]" />
              <p className="text-sm text-center">
                {new Date(sensorThreeData.timestamp).toLocaleString()}
              </p>
            </>
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-between mb-4 sec-parent">
        <div className="flex flex-col items-center  p-2 bg-gradient-to-b from-slate-100/25 to-slate-900/15 backdrop-blur-lg rounded shadow-lg">
          {sensorFourData ? (
            <>
              <div className="text-lg font-semibold">{sensorFourData.name}</div>
              <div className="flex flex-row justify-center space-x-3 !w-[80%]">
                  <Image src={sound} alt="Air quality" className=" w-[20%]" />
                <div className=" text-2xl !w-[80%] overflow-hidden">
                  {sensorFourData.value} {sensorFourData.unit}
                </div>
              </div>
            </>
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
        <div className="flex flex-col items-center p-2 bg-gradient-to-b from-slate-100/25 to-slate-900/15 backdrop-blur-lg rounded shadow-lg">
          {sensorFiveData ? (
            <>
              <div className="text-lg font-semibold">{sensorFiveData.name}</div>
              <div className="flex flex-row justify-center space-x-3 !w-[80%]">
                  <Image src={uv} alt="Air quality" className=" w-[20%]" />
                <div className=" text-2xl !w-[80%] overflow-hidden">
                  {sensorFiveData.value} {sensorFiveData.unit}
                </div>
              </div>
            </>
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
        {/* Air quality sensor */}
        <div className="flex overflow-hidden flex-col items-center p-1 bg-gradient-to-b from-slate-100/25 to-slate-900/15 backdrop-blur-lg rounded shadow-lg">
          {sensorSixData ? (
            <>
              <div className="text-lg font-semibold">{sensorSixData.name}</div>
              <div className="flex flex-row justify-center space-x-3 !w-[80%]">
                  <Image src={air} alt="Air quality" className=" w-[20%]" />
                <div className=" text-2xl !w-[80%] overflow-hidden">
                  {sensorSixData.value} {sensorSixData.unit}
                </div>
              </div>
            </>
          ) : (
            <div className="text-gray-500">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default StationaryDivs;
