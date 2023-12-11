import React from "react";
import RoutineName from "./routine-name";

const RoutineList = () => {
  const routines = [
    {
      id: "1",
      name: "Push A",
    },
    {
      id: "2",
      name: "Pull A",
    },
    {
      id: "3",
      name: "Legs A",
    },
    {
      id: "4",
      name: "Push B",
    },
    {
      id: "5",
      name: "Pull B",
    },
    {
      id: "6",
      name: "Legs B",
    },
  ];
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {routines.map((routine) => (
        <RoutineName key={routine.id} name={routine.name} />
      ))}
    </div>
  );
};

export default RoutineList;
