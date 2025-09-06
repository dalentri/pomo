import { useState } from "react";

const TimerBox = ({ timer }) => {
  return (
    <>
      <div className="font-bold text-7xl m-5 bg-base-200 rounded-lg h-30 w-65 flex justify-center items-center">
        {timer}
      </div>
    </>
  );
};

export default TimerBox;
