import React from "react";

import draghandIcon from "../assets/icons/drag.png";

const Hint = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border-solid border-red-600">
        <div className="fill-white transition-transform duration-100 ease-in-out animate-left-right top-10 w-10 h-10">
          <img src={draghandIcon} />
        </div>
        {/* <p className="text-slate-300">Click & drag to explore</p> */}
      </div>
    </>
  );
};

export default Hint;
