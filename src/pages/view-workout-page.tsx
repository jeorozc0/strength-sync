import WorkoutExerciseList from "../components/view-workout/workout-exercise-list";
import { useParams } from "react-router-dom";

const ViewWorkoutPage = () => {
  const { workout_id } = useParams();

  return (
    <div className="h-full p-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#FFFFFF] dark:bg-[#212123]">
      <WorkoutExerciseList workout_id={workout_id} workout_name="" />
    </div>
  );
};

export default ViewWorkoutPage;