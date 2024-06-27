import { useEffect, useState } from "react";
import { EditExerciseProps } from "../types/exercise-types";
import { useParams } from "react-router-dom";

import { useWorkoutById, useWorkoutName } from "../hooks/useWorkoutById";

import WorkoutTracker from "../components/exercise-tracker/exercise-tracker-list";

const TrackerWorkoutPage = () => {
  const workout_id = useParams().workout_id;
  const { data: workout } = useWorkoutName({
    workout_id: workout_id,
  });
  const [workoutName, setWorkoutName] = useState<string>("");
  const { data: exerciseDetails } = useWorkoutById({
    workout_id: workout_id,
  });
  const [localArrayofExercies, setlocalArrayofExercies] = useState<
    EditExerciseProps[]
  >([]);
  useEffect(() => {
    if (exerciseDetails && workout) {
      setlocalArrayofExercies(exerciseDetails);
      setWorkoutName(workout?.[0]?.workout_name);
    }
  }, [exerciseDetails, workout]);

  return (
    <div className="h-full p-10 flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#FFFFFF] dark:bg-[#212123]">
      <WorkoutTracker
        workout_name={workoutName}
        workout_id={workout_id}
        exercises={localArrayofExercies}
      />
    </div>
  );
};

export default TrackerWorkoutPage;
