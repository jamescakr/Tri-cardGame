import React, { useState } from "react";
import Box from "./components/Box";
import fireMage from "../src/assets/fire-mage.png";
import waterMage from "../src/assets/water-mage.png";
import droughtMage from "../src/assets/drought-mage.png";
import fireBg from "../src/assets/fire-bg.webp";
import droughtBg from "../src/assets/drought1.webp";
import waterBg from "../src/assets/water1.webp";
import "animate.css";

const choices = {
  fire: {
    name: "fireMage",
    img: fireMage,
    bg: fireBg,
  },
  drought: {
    name: "dryCard",
    img: droughtMage,
    bg: droughtBg,
  },
  water: {
    name: "waterCard",
    img: waterMage,
    bg: waterBg,
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [bgImage, setBgImage] = useState(null);

  const userPlay = (userChoice) => {
    setUserSelect(choices[userChoice]);
    setBgImage(choices[userChoice].bg);
  };

  const computerPlay = () => {
    const itemArray = Object.keys(choices);
    console.log("itemArray?", itemArray);
    const randomChoice = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomChoice];
    console.log("random??", randomChoice);
    setComputerSelect(choices[final]);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex gap-x-5 md:gap-x-20">
        <Box title="you" item={userSelect} />
        <Box title="computer" item={computerSelect} />
      </div>
      <div className="flex gap-x-5 bg-gray-600 rounded-full p-3 md:p-5 mt-30 md:mt-1">
        <button
          className="bg-[url('/images/fire-button.png')] bg-cover rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:scale-110"
          onClick={() => {
            userPlay("fire");
            computerPlay();
          }}
        />
        <button
          className="bg-[url('/images/drought-button.png')] bg-cover rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:scale-110"
          onClick={() => {
            userPlay("drought");
            computerPlay();
          }}
        />
        <button
          className="bg-[url('/images/water-button.png')] bg-cover rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:scale-110"
          onClick={() => {
            userPlay("water");
            computerPlay();
          }}
        />
      </div>
    </div>
  );
};

export default App;
