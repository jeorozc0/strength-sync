import { useState } from "react";
import WorkoutEditor from "../components/create-workout/workout-editor";
import ExerciseList from "../components/create-workout/exercise-list";
import { ExerciseProps, ExercisePropsForAPI } from "../types/exercise-types";
import { useCreateWorkout } from "../hooks/useWorkout";
import { useCreateWorkoutExercise } from "../hooks/useExercise";

const CreateWorkoutPage = () => {
  const [localExercise, setLocalExercise] = useState<ExerciseProps[]>([]);
  const { mutateAsync: mutate1 } = useCreateWorkout();
  const { mutateAsync: mutate2 } = useCreateWorkoutExercise();
  const addExercise = (newExercise: ExerciseProps) => {
    if (
      localExercise.some(
        (exercise) => exercise.exercise_id === newExercise.exercise_id
      )
    ) {
      console.log("Exercise already exists");
      console.log(localExercise);
      return;
    }
    console.log(newExercise);
    const newExercisesToAdd = [...localExercise, newExercise];
    setLocalExercise(newExercisesToAdd);
  };

  const deleteExercise = (exerciseID: string) => {
    const updatedExercises = localExercise.filter(
      (exercise) => exercise.exercise_id !== exerciseID
    );

    setLocalExercise(updatedExercises);
  };
  interface WorkoutResponse {
    workout_id: number;
    // Add other properties of the response if needed
  }

  async function submitWorkout(workout_name: string) {
    // const newWorkout: WorkoutResponse | null = 
    await mutate1({ workout_name });

    // if (newWorkout) {
    //   const workout_id = (newWorkout as WorkoutResponse).workout_id;
    //   const workoutExercises: ExercisePropsForAPI[] = localExercise.map(
    //     (exercise) => {
    //       return {
    //         exercise: exercise,
    //         workout_id: workout_id,
    //         sets: 3,
    //         reps: 10,
    //         rest: 60,
    //       };
    //     }
    //   );
    //   console.log(workoutExercises);
    //   await mutate2(workoutExercises);
    // } else {
    //   console.error("Failed to create new workout");
    // }
  }

  return (
    <div className="min-h-screen p-10 flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutEditor
        exercises={localExercise}
        removeExercise={deleteExercise}
        submitWorkout={submitWorkout}
      />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default CreateWorkoutPage;
