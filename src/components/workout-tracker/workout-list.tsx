import { useWorkoutSession } from "../../hooks/useWorkout";
import { WorkoutProps } from "../../types/workout-types";
import LoadingComponent from "../loading-component/loading-component";
import WorkoutSessionItem from "./workout-session-item";

const WorkoutTrackerList = () => {
  const { data: workouts, error, isLoading } = useWorkoutSession();

  if (error) {
    return <h1>This is an error</h1>;
  }

  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white min-h-[100vh] w-11/12 lg:w-3/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <>
          {workouts?.map((workout: WorkoutProps) => (
            <WorkoutSessionItem
              key={workout.session_id}
              workout_session_id={workout.session_id}
              workout_id={workout.workout_id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default WorkoutTrackerList;
