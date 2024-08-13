import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] items-center justify-start w-full gap-6 md:gap-8">
      {/* Left Column */}
      <div className="flex flex-col py-8 bg-slate-500 items-center justify-center w-full md:w-auto px-4">
        <div className="border border-black rounded-lg p-6 flex-col flex w-full md:w-[80%] h-96 mb-6">
          <div className="flex flex-row justify-between mb-4">
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
        <div className="border border-black rounded-lg p-6 flex-col flex w-full md:w-[80%] h-96">
          <div className="flex flex-row justify-between mb-4">
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
      <div className="flex flex-col py-7 bg-green-500 w-full md:w-auto px-4">
        <div className="border border-black rounded-lg p-6 mb-6 flex-col flex w-full md:w-[43.75rem] h-96">
          <div className="flex flex-row justify-between mb-4">
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
        <div className="border border-black rounded-lg p-6 flex-col flex w-full md:w-[43.75rem] h-96">
          <div className="flex flex-row justify-between mb-4">
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
    </div>
  );
}

export default Hero;
