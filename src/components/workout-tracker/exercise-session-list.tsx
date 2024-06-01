import React from "react";

const ExericeSessionList = () => {
  return (
    <div className={`flex flex-row w-auto h-auto gap-8 my-2`}>
      <div className="w-10 h-10 flex items-center justify-center border border-solid border-[#e5e7eb]  text-black text-center">
        1
      </div>
      <div className="w-auto h-auto">
        <div className="flex items-center justify-center w-auto h-10  text-black text-center ">
          130 lbs x 6 reps
        </div>
      </div>
    </div>
  );
};

export default ExericeSessionList;
