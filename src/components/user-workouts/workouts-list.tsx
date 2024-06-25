import RoutineName from "./workout-item";
import { useWorkout } from "../../hooks/useWorkout";
import { WorkoutProps } from "../../types/workout-types";
import LoadingComponent from "../loading-component/loading-component";
import AssignmentIcon from "@mui/icons-material/Assignment";

const WorkoutList = () => {
  const { data: workouts, error, isLoading }: any = useWorkout();

  if (error) {
    return <h1>This is an error</h1>;
  }

  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] h-auto w-11/12 lg:w-3/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {workouts?.length === 0 && (
        <div className="flex justify-center items-center flex-col h-auto border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] rounded-md p-10 gap-5 mb-6">
          <AssignmentIcon fontSize="large" />
          <h1 className="font-medium text-base text-center">No Routines</h1>
          <h1 className="text-sm text-center text-[#8A909A]">
            So far, you haven't added any routine. Click New Routine to create
            one.
          </h1>
        </div>
      )}
      <>
        {workouts?.map((workout: WorkoutProps) => (
          <RoutineName
            key={workout.workout_id}
            workout_name={workout.workout_name}
            workout_id={workout.workout_id}
          />
        ))}
      </>
    </div>
  );
};

export default WorkoutList;
