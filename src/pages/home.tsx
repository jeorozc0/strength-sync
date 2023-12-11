import React from "react";
import RoutineList from "../modules/ui/components/routine-list/routine-list";
import RoutineCreate from "../modules/ui/components/routine-creator/routine-create";

const Home = () => {
  return (
    <div className="min-h-screen py-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <RoutineCreate />
      <RoutineList />
    </div>
  );
};

export default Home;
