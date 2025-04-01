import React from "react";
import "animate.css";

const Box = (props) => {
  console.log("props", props);

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg w-40 h-60 md:h-130 md:w-60 mb-5 md:mb-10 animate__animated animate__bounceInLeft">
        <img src={props?.item?.img} />
      </div>
    </div>
  );
};

export default Box;
