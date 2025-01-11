import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue((val) => val + 1);
  };
  const handleDeccrement = () => {
    setValue((val) => val - 1);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white flex-col">
      <div className=" flex justify-center text-center pb-10">
        <h1 className="text-9xl ">{value}</h1>
      </div>
      <div className="btn-container flex w-80 h-11 gap-x-4 justify-center items-center">
        <button
          className="py-2 px-6 ring-1 ring-inset ring-zinc-700 rounded-xl hover:bg-zinc-300 transition-colors duration-300"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="py-2 px-6 ring-1 ring-inset ring-zinc-700 rounded-xl bg-zinc-950 text-white  hover:bg-zinc-800  transition-colors duration-300"
          onClick={handleDeccrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
