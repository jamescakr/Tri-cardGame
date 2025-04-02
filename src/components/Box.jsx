import React from "react";
import "animate.css";

const Box = (props) => {
  const { item, resetKey, userWin, userLose, tie } = props;

  let animation = "animate__fadeIn";
  if (userWin) {
    animation = "animate__delay-1s animate__fadeOutRight";
  } else if (userLose) {
    animation = "animate__delay-1s animate__fadeOutLeft";
  } else if (tie) {
    animation = "animate__delay-1s animate__fadeOutUp";
  }

  return (
    <div className="flex flex-col items-center">
      <div
        key={`${item?.name} - ${resetKey}`}
        className={`rounded-lg w-40 h-85 md:h-130 md:w-60 mb-5 md:mb-10 animate__animated ${animation}`}
      >
        <img src={item?.img} />
      </div>
    </div>
  );
};

export default Box;
