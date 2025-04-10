import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  const changeColor = (newcolor) => {
    setColor(newcolor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className={`text-2xl ${color == "blue" ? "text-blue-700" : ""}
      ${color === "red" ? "text-red-700" : ""}
      ${color === "yellow" ? "text-yellow-600" : ""}
      ${color === "green" ? "text-green-700" : ""}`}
      >
        Hello !!!!
      </div>
      <div className="mt-4 flex gap-5">
        <button
          className="text-white bg-red-700 rounded-md p-4 text-xl"
          onClick={() => {
            changeColor("red");
          }}
        >
          Red
        </button>
        <button
          className="text-white bg-yellow-600 rounded-md p-4 text-xl"
          onClick={() => {
            changeColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="text-white bg-green-700 rounded-md p-4 text-xl"
          onClick={() => {
            changeColor("green");
          }}
        >
          Green
        </button>
        <button
          className="text-white bg-blue-700 rounded-md p-4 text-xl"
          onClick={() => {
            changeColor("blue");
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default App;
