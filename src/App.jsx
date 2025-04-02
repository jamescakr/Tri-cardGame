import React, { useState } from "react";
import Box from "./components/Box";
import fireMage from "../src/assets/fire-mage.png";
import waterMage from "../src/assets/water-mage.png";
import droughtMage from "../src/assets/drought-mage.png";
import fireBg from "../src/assets/fire-bg.webp";
import droughtBg from "../src/assets/drought-bg.webp";
import waterBg from "../src/assets/water-bg.webp";

import "animate.css";

const choices = {
  fire: {
    name: "fire",
    img: fireMage,
    bg: fireBg,
  },
  drought: {
    name: "drought",
    img: droughtMage,
    bg: droughtBg,
  },
  water: {
    name: "water",
    img: waterMage,
    bg: waterBg,
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  const [cardResetKey, setCardResetKey] = useState(0);
  const [result, setResult] = useState("");

  const whoIsWin = (userPickObj, computerPickObj) => {
    if (userPickObj.name === computerPickObj.name) {
      return "DRAW";
    } else if (userPickObj.name === "fire" && computerPickObj.name === "drought") {
      return "YOU WIN!";
    } else if (userPickObj.name === "drought" && computerPickObj.name === "water") {
      return "YOU WIN!";
    } else if (userPickObj.name === "water" && computerPickObj.name === "fire") {
      return "YOU WIN!";
    } else {
      return "YOU LOSE..";
    }
  };

  const play = (userChoice) => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
    setCardResetKey((prev) => prev + 1);

    //userPlay()
    const userPickObj = choices[userChoice];
    setUserSelect(userPickObj);
    setBgImage(userPickObj.bg);

    //computerPlay() >> delay 1.2s
    setTimeout(() => {
      const itemArray = Object.keys(choices);
      const randomChoice = Math.floor(Math.random() * itemArray.length);
      const computerPickObj = choices[itemArray[randomChoice]];
      setComputerSelect(computerPickObj);

      //judge who wins
      const gameResult = whoIsWin(userPickObj, computerPickObj);
      setResult(gameResult);
    }, 1200);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen gap-y-5 md:gap-y-2"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex gap-x-5 md:gap-x-20">
        <Box
          title="you"
          item={userSelect}
          resetKey={cardResetKey}
          userLose={result === "YOU LOSE.."}
          tie={result === "DRAW"}
        />
        <Box
          title="computer"
          item={computerSelect}
          resetKey={cardResetKey}
          userWin={result === "YOU WIN!"}
          tie={result === "DRAW"}
        />
      </div>
      <div className="bg-gray-600 text-white text-md md:text-2xl w-30 h-10 md:w-40 md:h-15 rounded-full flex justify-center items-center">
        {result}
      </div>

      <div className="flex gap-x-5 bg-gray-600 rounded-full p-3 md:p-5">
        <button
          className="bg-[url('/images/fire-button.png')] bg-cover rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:scale-110"
          onClick={() => play("fire")}
        />
        <button
          className="bg-[url('/images/drought-button.png')] bg-cover rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:scale-110"
          onClick={() => play("drought")}
        />
        <button
          className="bg-[url('/images/water-button.png')] bg-cover rounded-full w-15 h-15 md:w-24 md:h-24 cursor-pointer hover:scale-110"
          onClick={() => play("water")}
        />
      </div>
    </div>
  );
};

export default App;
