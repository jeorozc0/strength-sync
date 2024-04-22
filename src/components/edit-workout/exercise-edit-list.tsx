import ExerciseItem from "./exercise-edit-item";
import useExercise from "../../hooks/useExercise";
import { ExerciseProps } from "../../types/exercise-types";
import LoadingComponent from "../loading-component/loading-component";

const ExerciseEditList = ({ addExercise }: any) => {
  const { data: exercise, error, isLoading } = useExercise();
  if (error) {
    return <h1>This is an error</h1>;
  }
  return (
    <div className="sticky top-0 flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-screen w-11/12 lg:w-1/5 rounded-md divide-y">
      <div className="px-4 pt-4">
        <h1 className="font-medium text-base text-left ">My Routines</h1>
      </div>
      <div className="flex flex-col w-full h-full overflow-auto gap-5 px-4 pt-4">
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

export default ExerciseEditList;
