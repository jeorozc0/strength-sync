import React from "react";
import WorkoutList from "../components/user-workouts/workouts-list";
import WorkoutItem from "../components/user-workouts/workout-create";

const HomePage = () => {
  return (
    <div className="py-10 h-screen flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#FFFFFF] ">
      <WorkoutItem />
      <WorkoutList />
    </div>
  );
};

export default HomePage;
