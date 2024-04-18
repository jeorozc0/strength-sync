import { ExercisePropsForLocal } from "../../types/exercise-types";

const ExerciseItem = ({
  exercise_name,
  exercise_id,
  exercise_muscle,
  addExercise,
}: ExercisePropsForLocal) => {
  const handleClick = () => {
    // Assuming you have an ExerciseProps structure, adjust this accordingly
    if (exercise_name && exercise_id && exercise_muscle) {
      const newExercise = {
        exercise_id: exercise_id /* assign an appropriate value */,
        exercise_name: exercise_name, /* assign an appropriate value */
      };

      if (addExercise) {
        addExercise(newExercise);
      }
    }
  };
  return (
    <button
      className=" flex align-middle justify-center flex-col h-15 border-[#ECEDF0] border border-solid bg-white hover:bg-[#F9FAFB] rounded-md p-5 cursor-pointer"
      onClick={handleClick}
    >
      <div>
        <p className="w-full">{exercise_name}</p>
        <p className="w-full text-[#89998f] text-left">{exercise_muscle}</p>
      </div>
    </button>
  );
};

export default ExerciseItem;
