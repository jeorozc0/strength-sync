import useExercise from "../hooks/useExercise";
import { ExerciseProps, ExercisePropsForLocal } from "../types/exercise-types";
import ExerciseItem from "./exercise-item";
import LoadingComponent from "./loading-component/loading-component";

const ExerciseList = ({ addExercise }: ExercisePropsForLocal) => {
  const { data: exercise, error, isLoading } = useExercise();
  if (error) {
    return <h1>This is an error</h1>;
  }
  return (
    <div className="flex gap-5 flex-col sticky top-0 border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] min-w-[330px] rounded-md divide-y max-h-[85vh]">
      <div className="px-4 pt-4">
        <h1 className="font-medium text-base text-left ">My Routines</h1>
      </div>
      <div className="flex flex-col w-full h-full overflow-y-scroll gap-5 px-4 pt-4">
        {isLoading && <LoadingComponent />}
        {exercise?.map((exercise: ExerciseProps) => (
          <ExerciseItem
            key={exercise.exercise_id}
            exercise_name={exercise.exercise_name}
            exercise_muscle={exercise.exercise_muscle}
            exercise_id={exercise.exercise_id}
            addExercise={addExercise}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
