import RoutineName from "./routine-name";
import useWorkout from "../../hooks/useWorkout";
import { WorkoutProps } from "../../../types";
import LoadingComponent from "../loading-component/loading-component";

const RoutineList = () => {
  const { data: workouts, error, isLoading } = useWorkout();

  if (error) {
    return <h1>This is an error</h1>;
  }

  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <>
          {workouts?.map((workout: WorkoutProps) => (
            <RoutineName key={workout.workout_id} name={workout.workout_name} />
          ))}
        </>
      )}
    </div>
  );
};

export default RoutineList;
