import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { ReactTyped } from "react-typed";
import DollarSign from "@geist-ui/icons/dollarSign";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [balance, setBalance] = useState(0);
  const [valueOfItem, setValueOfItem] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleCalculation = (e) => {
    // Prevent submittion
    e.preventDefault();
    // Make sure values > 0
    if (
      balance === 0 ||
      valueOfItem === 0 ||
      balance === null ||
      valueOfItem === null
    ) {
      alert("Bank Balance and Item Price must be above 0");
    } else {
      // Make calculation
      const value = (valueOfItem / balance) * 100;
      // Format value
      const formattedValue = value;
      // Update value in the result box
      setResult(formattedValue);
      setAnimate(true);
    }
  };

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      onRest: setAnimate(false),
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(1))}</animated.div>;
  }

  return (
    <div className="h-full w-full mb-10 flex justify-center items-center">
      <form
        onSubmit={handleCalculation}
        className="h-fit py-10 w-full lg:w-[700px] bg-green-500 rounded-3xl shadow-lg flex flex-col gap-6 justify-start items-center"
      >
        <div className="flex justify-center items-center">
          <h1 className="font-semibold text-5xl text-white">worth</h1>
          <h1 className="font-semibold text-5xl text-white opacity-70">it.</h1>
        </div>
        <h1 className="font-medium text-2xl text-white">
          Is the{" "}
          {
            <ReactTyped
              className="text-[#cfffcd]"
              strings={["handbag", "car", "laptop", "watch"]}
              typeSpeed={100}
              backSpeed={100}
              loop
            ></ReactTyped>
          }{" "}
          worth it?
        </h1>
        <div className="h-fit w-fit relative">
          <input
            pattern="[0-9]*"
            type="text"
            placeholder="Enter Bank Balance"
            className="py-3 px-2 min-w-64 text-center rounded-lg"
            onChange={(e) => {
              setBalance(e.target.value);
            }}
          />
          <DollarSign
            size={20}
            className="absolute top-[50%] left-2 translate-y-[-50%] stroke-[#565656]"
          />
        </div>
        <div className="w-fit h-fit relative">
          <input
            pattern="[0-9]*"
            type="text"
            placeholder="Enter Item Price"
            className="py-3 px-2 min-w-64 text-center rounded-lg"
            onChange={(e) => {
              setValueOfItem(e.target.value);
            }}
          />
          <DollarSign
            size={20}
            className="absolute top-[50%] left-2 translate-y-[-50%] stroke-[#565656]"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white font-semibold p-4 rounded-lg"
        >
          calculate.
        </button>
        <div className="w-fit h-24 flex justify-center bg-opacity-0 items-center bg-white rounded-lg overflow-scroll flex-col gap-2">
          <p>This purchase will reduce your savings by</p>
          <p className="text-center font-black text-5xl text-[#1f1f1f] flex justify-center items-center w-fit">
            <Number n={result} />%
          </p>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
