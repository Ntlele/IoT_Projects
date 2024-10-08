import React from "react";
import SlidingDivs from "@/components/sliding_d_d";
import StationaryDivs from "@/components/stationary_d_d";
import LeftCol from "@/components/LeftCol";

function Hero() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] items-center justify-start w-full gap-6 md:gap-6">
      {/* Left Column */}
      <div className="flex flex-col py-4 px-4  items-center justify-center w-full md:w-auto ">
        <LeftCol/>
      </div>

      {/* Right Column */}
      <div className="flex flex-col py-4 w-full md:w-auto px-4 items-center justify-center">
        <div className="rounded-lg md:p-2 m-4 flex-col flex w-full md:w-[100%] h-96">
          {/* Render this div only on desktop screens */}
          <StationaryDivs />
          {/* Render the SlidingDivs component only on small screens */}
          <div className="md:hidden rounded-lg w-full h-full">
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
              <div className="py-5 px-2 rounded-[50%] w-20 h-20 bg-slate-900 font-bold text-3xl text-blue-200">
                <p className="">Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
