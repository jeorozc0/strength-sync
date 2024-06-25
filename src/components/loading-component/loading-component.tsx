import React from "react";

function LoadingComponent() {
  return (
    <div className=" flex align-middle justify-center h-15 border-[#ECEDF0] dark:border-black  border border-solid bg-white hover:bg-[#F9FAFB] dark:bg-[#2B2C32] rounded-md p-5 cursor-pointer animate-pulse">
      <div className="w-full h-full flex justify-between align-middle">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default LoadingComponent;
