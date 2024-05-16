import { useWorkoutById } from "../../hooks/useWorkoutById";
import { WorkoutProps } from "../../types/workout-types";
import LoadingComponent from "../loading-component/loading-component";
import WorkoutExerciseItem from "./workout-exercise-item";

const WorkoutExerciseList = (workout_id: WorkoutProps, {workout_name}: WorkoutProps) => {
  const {
    data: exerciseDetails,
    error,
    isLoading,
  } = useWorkoutById(workout_id);

  if (error) {
    return <h1>This is an error</h1>;
  }
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-full w-11/12 lg:w-full rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">{workout_name}</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {exerciseDetails?.map((exercise: any) => {
        return (
          <WorkoutExerciseItem
            key={exercise.exercises.exercise_id}
            exercise_name={exercise.exercises.exercise_name}
            exercise_reps={exercise.reps}
            exercise_sets={exercise.sets}
            exercise_rest={exercise.rest}
          />
        );
      })}
    </div>
  );
};

export default WorkoutExerciseList;