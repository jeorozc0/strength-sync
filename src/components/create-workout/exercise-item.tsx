import React from "react";
import { ExercisePropsForLocal } from "../../types/exercise-types";

const ExerciseItem = ({
  exercise_name,
  addExercise,
}: ExercisePropsForLocal) => {
  const handleClick = () => {
    // Assuming you have an ExerciseProps structure, adjust this accordingly
    if (exercise_name) {
      const newExercise = {
        exercise_id: 1 /* assign an appropriate value */,
        exercise_name: exercise_name,
        exercise_description: "2" /* assign an appropriate value */,
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
