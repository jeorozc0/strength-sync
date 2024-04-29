import WorkoutTrackerList from "../components/view-workout/workout-exercise-list";
import RoutineTrackerCreate from "../components/workout-tracker/workout-tracker-item";

const TrackerPage = () => {
  return (
    <div className="py-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <RoutineTrackerCreate />
      <WorkoutTrackerList />
    </div>
  );
};

export default TrackerPage;