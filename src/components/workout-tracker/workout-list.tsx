import { useWorkoutSession } from "../../hooks/useWorkout";
import { WorkoutProps } from "../../types/workout-types";
import LoadingComponent from "../loading-component/loading-component";
import WorkoutSessionItem from "./workout-session-item";
import AssessmentIcon from "@mui/icons-material/Assessment";

const WorkoutTrackerList = () => {
  const { data: workouts, error, isLoading } = useWorkoutSession();
  const sortedWorkouts = workouts?.sort((a: WorkoutProps, b: WorkoutProps) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (error) {
    return <h1>This is an error</h1>;
  }

  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-auto w-11/12 lg:w-3/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      {isLoading && <LoadingComponent />}
      {workouts?.length === 0 && (
        <div className="flex justify-center items-center flex-col h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-10 gap-5 mb-6">
          <AssessmentIcon fontSize="large" />
          <h1 className="font-medium text-base text-center">
            No Tracked Routines
          </h1>
          <h1 className="text-sm text-center text-[#8A909A]">
            So far, you haven't tracked any routine. Click Track New Routine to
            start tracking.
          </h1>
        </div>
      )}
      <>
        {sortedWorkouts?.map((workout: WorkoutProps) => (
          <WorkoutSessionItem
            key={workout.session_id}
            workout_session_id={workout.session_id}
            workout_id={workout.workout_id}
            date={workout.date}
          />
        ))}
      </>
    </div>
  );
};

export default WorkoutTrackerList;
