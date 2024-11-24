import React, { useEffect, useState } from "react";

const ColorFlipper = () => {
  const [colorValueInHex, setColorValueInHex] = useState("");

  const handleChangeColor = () => {
    let clrarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let str = "#";
    for (let i = 0; i < 6; i++) {
      let randomclr = Math.floor(Math.random() * 16);
      str = str + clrarr[randomclr];
    }
    setColorValueInHex(str);
  };
  return (
    <div className="w-full">
      <div
        style={{ backgroundColor: colorValueInHex }}
        className={` flex w-full justify-center items-center h-[92vh]`}
      >
        <button
          type="button"
          onClick={handleChangeColor}
          className="text-black rounded-md border-2 p-3"
        >
          Click to Change backgroundColor
        </button>
      </div>
    </div>
  );
};

export default ColorFlipper;
