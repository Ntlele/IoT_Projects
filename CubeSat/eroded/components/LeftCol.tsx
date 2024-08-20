import React from "react";
import Image from "next/image";
import cloudy from "../public/assets/cloudy.png";
import humidity from "../public/assets/humidity.png";

const LeftCol = () => {
  return (
    <>
      <div className="flex-col flex w-full md:w-[100%] h-96 m-4">
        <div className="bg-white/15 backdrop-blur-sm shadow-lg h-full p-4 border-none rounded-lg flex flex-col">
          <div className="flex flex-row justify-between my-4">
            <div className="font-bold">Temperature</div>
            <div className="font-medium">Maseru, LSO</div>
          </div>
          <h1 className="text-xl font-bold">Partly Cloudy</h1>
          <hr className="my-4" />
          <div className="flex flex-row h-full">
            <div className="w-1/2 flex  justify-center items-center">
              <Image src={cloudy} alt="Cloudy" className="w-3/4 h-1/2 mt-12 md:h-3/4 md:mt-0" />
            </div>
            <div className="flex items-center justify-center w-1/2 text-[3rem] md:text-[4rem] 2xl:text-[5rem]">
              18 &deg;C
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex w-full md:w-[100%] h-96 m-4">
        <div className="bg-white/15 backdrop-blur-sm shadow-lg h-full p-4 border-none rounded-lg flex flex-col ">
          <div className="flex flex-row justify-between my-4">
            <div className="font-bold font-roboto">Humidity</div>
            <div className="font-medium">10 000m ASL</div>
          </div>
          <h1 className="text-xl font-bold">High</h1>
          <hr className="my-4" />
          <div className="flex flex-row h-full">
            <div className="w-1/2 flex  justify-center items-center">
              <Image src={humidity} alt="Humidity" className="w-3/4 h-1/2 mt-12 md:h-3/4 md:mt-0" />
            </div>
            <div className="flex items-center justify-center w-1/2 text-[3rem] md:text-[4rem] 2xl:text-[5rem]">
              64%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftCol;
