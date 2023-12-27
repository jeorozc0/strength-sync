import React from "react";
import WorkoutExerciseList from "../components/view-workout/workout-exercise-list";

const ViewWorkoutPage = () => {
  return (
    <div className="min-h-screen py-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutExerciseList/>
    </div>
  );
};

export default ViewWorkoutPage ;
