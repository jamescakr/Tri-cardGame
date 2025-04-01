import React, { useState } from "react";
import fireButton from "../assets/fire-button.png";
import waterButton from "../assets/water-button.png";
import droughtButton from "../assets/drought-button.png";

const buttons = [
  {
    name: "fireButton",
    img: fireButton,
  },
  {
    name: "waterButton",
    img: waterButton,
  },
  {
    name: "droughtButton",
    img: droughtButton,
  },
];

const Button = () => {
  const [selectCard, setSelectCard] = useState(false);
  const play = () => {
    setSelectCard(true);
  };

  return (
    <div
      className="border border-green-400 rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:w-30 hover:h-30 hover:transition duration-300"
      onClick={() => play()}
    >
      {buttons.map((button, index) => {
        return (key = { index });
      })}
    </div>
  );
};

export default Button;
