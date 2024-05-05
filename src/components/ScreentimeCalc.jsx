import React from "react";

const ScreentimeCalc = () => {
  return (
    <div className="h-full w-full mb-10 flex justify-center items-center">
      <form className="h-fit py-10 w-[700px] bg-purple-700 rounded-3xl shadow-lg flex flex-col gap-6 justify-start items-center">
        <h1 className="font-semibold text-4xl text-white">screentime.</h1>
        <h1 className="font-semibold text-2xl text-white">
          how much time are you losing?
        </h1>
        <input
          pattern="[0-9]*"
          type="text"
          placeholder="Enter Screen Time"
          className="py-3 px-2 min-w-64 text-center rounded-lg"
        />

        <button
          type="submit"
          className="bg-purple-900 text-white font-semibold p-4 rounded-lg"
        >
          Moment of Truth
        </button>
        <div className="w-fit h-24 flex justify-center bg-opacity-0 items-center bg-white rounded-lg overflow-scroll flex-col gap-2">
          <p>Per Month</p>
          <p>Per Year</p>
          <p>Per Decade</p>
        </div>
      </form>
    </div>
  );
};

export default ScreentimeCalc;
