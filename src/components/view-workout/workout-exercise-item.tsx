import React from "react";
import { ExerciseProps } from "../../types/exercise-types";

const WorkoutExerciseItem = ({exercise_name, exercise_description, exercise_id}: ExerciseProps) => {

  return (
    <button
      className=" flex align-middle justify-center flex-col h-15 border-[#ECEDF0] border-2 border-solid bg-white hover:bg-[#F9FAFB] rounded-md p-5 cursor-pointer"
    >
      <p>{exercise_name}</p>
      <p>{exercise_description}</p>
      <p>{exercise_id}</p>
    </button>
  );
};

export default WorkoutExerciseItem;
