import { useEffect, useState } from "react";
import WorkoutEditor from "../components/edit-workout/workout-editor";
import ExerciseList from "../components/create-workout/exercise-list";
import {
  EditExerciseProps,
  ExercisePropsForAPI,
} from "../types/exercise-types";
import { useCreateWorkout } from "../hooks/useWorkout";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateWorkoutExercise } from "../hooks/useExercise";
import { useWorkoutById, useWorkoutName } from "../hooks/useWorkoutById";

const EditWorkoutPage = () => {
  const navigate = useNavigate();
  const workout_id = useParams().workout_id;
  const { data: workout, isLoading, error } = useWorkoutName({
    workout_id: Number(workout_id),
  });
  const workout_name: string = workout?.[0]?.workout_name || "";
  const { data: exerciseDetails } = useWorkoutById({
    workout_id: Number(workout_id),
  });


  const [localExerciseDetails, setLocalExerciseDetails] = useState<
    EditExerciseProps[]
  >([]);
  useEffect(() => {
    if (exerciseDetails) {
      setLocalExerciseDetails(exerciseDetails);
    }
  }, [exerciseDetails, localExerciseDetails]);
  console.log(exerciseDetails);
  const { mutateAsync: createWorkout } = useCreateWorkout();
  const { mutateAsync: mutate2 } = useCreateWorkoutExercise();
  const addExercise = (newExercise: EditExerciseProps) => {
    if (
      localExerciseDetails.some(
        (exercise) => exercise.exercises.exercise_id === newExercise.exercises.exercise_id
      )
    ) {
      return;
    }
    const newExercisesToAdd = [...localExerciseDetails, newExercise];
    setLocalExerciseDetails(newExercisesToAdd);
  };

  const deleteExercise = (exerciseID: string) => {
    const updatedExercises = localExerciseDetails.filter(
      (exercise) => exercise.exercises.exercise_id !== exerciseID
    );

    setLocalExerciseDetails(updatedExercises);
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
      const workoutExercises: ExercisePropsForAPI[] = localExerciseDetails.map(
        (exercise: any) => {
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
        workout_name={workout_name}
        exercises={localExerciseDetails}
        removeExercise={deleteExercise}
        submitWorkout={EditWorkout}
      />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default EditWorkoutPage;
