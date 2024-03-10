import ExerciseItem from "./exercise-item";
import useExercise from "../../hooks/useExercise";
import { ExerciseProps, ExercisePropsForLocal } from "../../types/exercise-types";
import LoadingComponent from "../loading-component/loading-component";

const ExerciseList = ({ addExercise }: ExercisePropsForLocal) => {
  const { data: exercise, error, isLoading } = useExercise();
  if (error) {
    return <h1>This is an error</h1>;
  }
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-screen w-11/12 lg:w-1/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {exercise?.map((exercise: ExerciseProps) => (
        <ExerciseItem
          key={exercise.exercise_id}
          exercise_name={exercise.exercise_name}
          exercise_id={exercise.exercise_id}
          addExercise={addExercise}
        />
      ))}
    </div>
  );
};

export default ExerciseList;
