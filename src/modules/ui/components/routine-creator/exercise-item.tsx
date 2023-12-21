import React from "react";

const ExerciseItem = () => {
  return (
    <div className=" flex align-middle justify-center flex-col h-15 border-[#ECEDF0] border-2 border-solid bg-white hover:bg-[#F9FAFB] rounded-md p-5 cursor-pointer">
      <div>Exercise Name</div>
      <div className="flex flex-row">
        <div>Exercise Sets</div>
        <div>Rest Duration</div>
      </div>
    </div>
  );
};

export default ExerciseItem;
