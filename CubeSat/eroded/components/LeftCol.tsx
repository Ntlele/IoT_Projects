import React from "react";

const LeftCol = () => {
  return (
    <>
      <div className="flex-col flex w-full md:w-[100%] h-96 m-4">
        <div className="bg-white/15 backdrop-blur-sm shadow-lg h-full p-4 border-none rounded-lg flex flex-col">
          <div className="flex flex-row justify-between my-4">
            <div>cloud image</div>
            <div>search</div>
          </div>
          <h1 className="text-xl font-bold">Rainy Storms</h1>
          <hr className="my-4" />
          <div className="flex flex-row border border-black h-full">
            <h1 className="text-lg border border-blue-300 w-1/2">Location</h1>
            <h1 className="text-lg">Date and Time</h1>
          </div>
        </div>
      </div>
      <div className="rounded-lg  flex-col flex w-full md:w-[100%] h-96 m-4">
        <div className="bg-white/15 backdrop-blur-sm shadow-lg h-full p-4 border-none rounded-lg">
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
    </>
  );
};

export default LeftCol;
