import { useEffect, useState } from "react";
import WorkoutEditor from "../components/edit-workout/workout-editor";
import ExerciseList from "../components/create-workout/exercise-list";
import {
  EditExerciseProps,
  ExerciseProps,
  ExercisePropsForAPI,
} from "../types/exercise-types";
import { useCreateWorkout } from "../hooks/useWorkout";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateWorkoutExercise } from "../hooks/useExercise";
import useWorkoutById from "../hooks/useWorkoutById";

const EditWorkoutPage = () => {
  const navigate = useNavigate();
  const workout_id = useParams().workout_id;
  const { data: exerciseDetails } = useWorkoutById({
    workout_id: Number(workout_id),
  });

  const [localExercise, setLocalExercise] = useState<ExerciseProps[]>([]);
  const [localExerciseDetails, setLocalExerciseDetails] = useState<
    EditExerciseProps[]
  >([]);
  useEffect(() => {
    if (exerciseDetails) {
      setLocalExerciseDetails(exerciseDetails);
    }
  }, [exerciseDetails, localExerciseDetails]);
  console.log(localExerciseDetails);
  const { mutateAsync: createWorkout } = useCreateWorkout();
  const { mutateAsync: mutate2 } = useCreateWorkoutExercise();
  const addExercise = (newExercise: ExerciseProps) => {
    if (
      localExercise.some(
        (exercise) => exercise.exercise_id === newExercise.exercise_id
      )
    ) {
      return;
    }
    const newExercisesToAdd = [...localExercise, newExercise];
    setLocalExercise(newExercisesToAdd);
  };

  const deleteExercise = (exerciseID: string) => {
    const updatedExercises = localExercise.filter(
      (exercise) => exercise.exercise_id !== exerciseID
    );

    setLocalExercise(updatedExercises);
  };
  async function EditWorkout(
    workout_name: string,
    exerciseDetails: {
      [exercise_id: string]: { sets: number; reps: number; rest: number };
    }
  ) {
    const newWorkout = await createWorkout({ workout_name });
    if (newWorkout) {
      const workout_id = newWorkout[0].workout_id;
      const workoutExercises: ExercisePropsForAPI[] = localExercise.map(
        (exercise) => {
          const details = exerciseDetails[exercise.exercise_id];
          return {
            workout_id: workout_id,
            exercise_id: exercise.exercise_id,
            sets: details.sets,
            reps: details.reps,
            rest: details.rest,
          };
        }
      );
      await mutate2(workoutExercises);
    } else {
      console.error("Failed to create new workout");
    }
    navigate(`/`);
  }

  return (
    <div className="min-h-screen p-10 flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutEditor
        exercises={localExerciseDetails}
        removeExercise={deleteExercise}
        submitWorkout={EditWorkout}
      />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default EditWorkoutPage;
