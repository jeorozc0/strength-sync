import React from "react";
import { ExercisePropsForLocal } from "../../types/exercise-types";

const ExerciseItem = ({
  exercise_name,
  exercise_id,
  addExercise,
}: ExercisePropsForLocal) => {
  const handleClick = () => {
    // Assuming you have an ExerciseProps structure, adjust this accordingly
    if (exercise_name && exercise_id) {
      const newExercise = {
        exercise_id: exercise_id /* assign an appropriate value */,
        exercise_name: exercise_name,
      };

      addExercise(newExercise);
    }
  };
  return (
    <button
      className=" flex align-middle justify-center flex-col h-15 border-[#ECEDF0] border-2 border-solid bg-white hover:bg-[#F9FAFB] rounded-md p-5 cursor-pointer"
      onClick={handleClick}
    >
      <p>{exercise_name}</p>
    </button>
  );
};

export default ExerciseItem;
