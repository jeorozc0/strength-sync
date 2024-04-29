import { useEffect, useState } from "react";
import { EditExerciseProps } from "../types/exercise-types";
import { useEditWorkout } from "../hooks/useWorkout";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteWorkoutExercise,
  useUpdateWorkoutExercise,
} from "../hooks/useExercise";
import { useWorkoutById, useWorkoutName } from "../hooks/useWorkoutById";
import { useAuth } from "../hooks/useAuth";
import WorkoutTracker from "../components/exercise-tracker/exercise-tracker-list";

const TrackerWorkoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
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
  const { mutateAsync: editWorkout } = useEditWorkout();
  const { mutateAsync: deleteExercises } = useDeleteWorkoutExercise();
  const { mutateAsync: editExercises } = useUpdateWorkoutExercise();

  const deleteExerciseNow = (exerciseID: any) => {
    const updatedExercises = localArrayofExercies?.filter(
      (exercise) => exercise.exercises.exercise_id !== exerciseID
    );

    setlocalArrayofExercies(updatedExercises);
  };

  async function EditWorkout(workout_name: string, exerciseDetails: any) {
    const newWorkout = await editWorkout({
      workout_name,
      workout_id: workout_id,
    });
    if (newWorkout) {
      const workoutExercises: any = exerciseDetails.map((exercise: any) => {
        return {
          workout_id: workout_id,
          exercise_id: exercise.exercises.exercise_id,
          sets: exercise.sets,
          reps: exercise.reps,
          rest: exercise.rest,
          user_id: user?.id,
        };
      });
      console.log(workoutExercises);
      await deleteExercises({ workout_id });
      console.log(workoutExercises);
      await editExercises({ exercise: workoutExercises, workout_id });
    } else {
      console.error("Failed to create new workout");
    }
    navigate(`/`);
  }

  return (
    <div className="min-h-screen p-10 flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutTracker
        workout_name={workoutName}
        exercises={localArrayofExercies}
        submitWorkout={EditWorkout}
        setLocalExerciseDetails={setlocalArrayofExercies}
        deleteExerciseNow={deleteExerciseNow}
      />
    </div>
  );
};

export default TrackerWorkoutPage;
