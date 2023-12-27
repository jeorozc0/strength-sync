import { useState } from "react";
import WorkoutEditor from "../components/create-workout/workout-editor";
import ExerciseList from "../components/create-workout/exercise-list";
import { ExerciseProps } from "../types/exercise-types";

const CreateWorkoutPage = () => {
  const [localExercise, setLocalExercise] = useState<ExerciseProps[]>([]);
  //TODO: Make the exercises be added to a local array for creation of a workout
  const addExercise = (newExercise: ExerciseProps) => {
    if (
      localExercise.some(
        (exercise) => exercise.exercise_id === newExercise.exercise_id
      )
    ) {
      console.log("Exercise already exists");
      return;
    }
    const newExercisesToAdd = [...localExercise, newExercise];
    setLocalExercise(newExercisesToAdd);
  };
  return (
    <div className="min-h-screen py-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutEditor exercises={localExercise} />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default CreateWorkoutPage;
