import React from "react";
import SlidingDivs from "@/app/sliding_d_d";
import StationaryDivs from "@/app/stationary_d_d";

function Hero() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] items-center justify-start w-full gap-6 md:gap-6">
      {/* Left Column */}
      <div className="flex flex-col py-4 px-4  items-center justify-center w-full md:w-auto ">
        <div className="border border-black rounded-lg p-6 flex-col flex w-full md:w-[100%] h-96 m-4">
          <div className="flex flex-row justify-between my-4">
            <div>cloud image</div>
            <div>search</div>
          </div>
          <h1 className="text-xl font-bold">Rainy Storms</h1>
          <hr className="my-4" />
          <div>
            <h1 className="text-lg">Location</h1>
            <h1 className="text-lg">Date and Time</h1>
          </div>
        </div>
        <div className="border border-black rounded-lg p-6 flex-col flex w-full md:w-[100%] h-96 m-4">
          <div className="flex flex-row justify-between m-4">
            <div>cloud image</div>
            <div>search</div>
          </div>
          <h1 className="text-xl font-bold">Rainy Storms</h1>
          <hr className="my-4" />
          <div>
            <h1 className="text-lg">Location</h1>
            <h1 className="text-lg">Date and Time</h1>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col py-4 w-full md:w-auto px-4 items-center justify-center">
        <div className="border border-black rounded-lg md:p-2 m-4 flex-col flex w-full md:w-[100%] h-96">
          {/* Render this div only on desktop screens */}
          <StationaryDivs />
          {/* Render the SlidingDivs component only on small screens */}
          <div className="md:hidden border border-white rounded-lg w-full h-full">
            <SlidingDivs />
          </div>
        </div>
        <div className="relative border border-black rounded-lg p-2 m-4 flex-col flex w-full md:w-[100%] h-96 overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
          >
            <source src="./overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10">
            <div className="flex flex-row justify-between mb-4">
              <div className="p-6 rounded-[50%] w-20 h-20 bg-blue-200">
                <p className="">Live</p>
              </div>
              <div>search</div>
            </div>
            <h1 className="text-xl font-bold">Rainy Storms</h1>
            <hr className="my-4" />
            <div>
              <h1 className="text-lg">Location</h1>
              <h1 className="text-lg">Date and Time</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
