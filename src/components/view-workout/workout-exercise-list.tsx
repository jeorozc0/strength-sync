import useWorkoutById from "../../hooks/useWorkoutById";
import { WorkoutProps } from "../../types/workout-types";
import WorkoutExerciseItem from "./workout-exercise-item";

const WorkoutExerciseList = (workout_id: WorkoutProps) => {
  const { data, error, isLoading } = useWorkoutById(workout_id);

  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      <WorkoutExerciseItem />
    </div>
  );
};

export default WorkoutExerciseList;
