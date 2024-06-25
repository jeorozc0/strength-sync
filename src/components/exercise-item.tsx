import { ExercisePropsForLocal } from "../types/exercise-types";

const ExerciseItem = ({
  exercise_name,
  exercise_id,
  exercise_muscle,
  addExercise,
}: ExercisePropsForLocal) => {
  const handleClick = () => {
    if (exercise_name && exercise_id && exercise_muscle) {
      const newExercise = {
        exercise_id: exercise_id,
        exercise_name: exercise_name,
      };

      if (addExercise) {
        addExercise(newExercise);
      }
    }
  };
  return (
    <button
      className=" flex align-middle justify-center flex-col h-15 border-[#ECEDF0] dark:border-black border border-solid bg-white hover:bg-[#F9FAFB] dark:bg-[#2B2C32] dark:hover:bg-[#353740] rounded-md p-5 cursor-pointer"
      onClick={handleClick}
    >
      <div>
        <p className="w-full">{exercise_name}</p>
        <p className="w-full text-[#89998f] dark:text-[#c5c5d2] text-left">
          {exercise_muscle}
        </p>
      </div>
    </button>
  );
};

export default ExerciseItem;
