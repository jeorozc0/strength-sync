import RoutineName from "./routine-name";
import { useWorkoutList } from "../../hooks/useWorkout";
import {WorkoutProps} from "../../../types"

const RoutineList = () => {
 const workouts = useWorkoutList()
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {workouts?.map((workout: WorkoutProps) => (
        <RoutineName key={workout.workout_id} name={workout.workout_name} />
      ))}
    </div>
  );
};

export default RoutineList;
