import useWorkoutById from "../../hooks/useWorkoutById";
import { WorkoutProps } from "../../types/workout-types";
import LoadingComponent from "../loading-component/loading-component";
import WorkoutExerciseItem from "./workout-exercise-item";

const WorkoutExerciseList = (workout_id: WorkoutProps) => {
  const {
    data: exerciseDetails,
    error,
    isLoading,
  } = useWorkoutById(workout_id);

  if (error) {
    return <h1>This is an error</h1>;
  }
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {exerciseDetails?.map((exercise) => {
        const exerciseItems = Object.values(exercise.exercises);
        return (
          <WorkoutExerciseItem
            key={exerciseItems[0]}
            exercise_name={exerciseItems[1]}
            exercise_weight={exerciseItems[0]}
            exercise_reps={exerciseItems[0]}
            exercise_sets={exerciseItems[0]}
          />
        );
      })}
    </div>
  );
};

export default WorkoutExerciseList;
