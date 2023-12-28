import useWorkoutById from "../../hooks/useWorkoutById";
import { WorkoutProps } from "../../types/workout-types";
import LoadingComponent from "../loading-component/loading-component";

const WorkoutExerciseList = (workout_id: WorkoutProps) => {
  const {
    data: exerciseDetails,
    error,
    isLoading,
  } = useWorkoutById(workout_id);

  if (error) {
    return <h1>This is an error</h1>;
  }
console.log(exerciseDetails)
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default WorkoutExerciseList;
