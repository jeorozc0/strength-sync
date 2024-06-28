import WorkoutTrackerList from "../components/workout-tracker/workout-list";
import RoutineTrackerCreate from "../components/workout-tracker/workout-tracker-item";

const TrackerPage = () => {
  return (
    <div className="py-10 flex h-full items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#FFFFFF] dark:bg-[#212123]">
      <RoutineTrackerCreate />
      <WorkoutTrackerList />
    </div>
  );
};

export default TrackerPage;
