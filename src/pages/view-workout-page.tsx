import React from "react";
import WorkoutExerciseList from "../components/view-workout/workout-exercise-list";
import { useParams } from "react-router-dom";

const ViewWorkoutPage = () => {
  const { workout_id } = useParams();

  return (
    <div className="min-h-screen py-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutExerciseList workout_id={Number(workout_id)} />
    </div>
  );
};

export default ViewWorkoutPage;
