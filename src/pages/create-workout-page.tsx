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

  return (
    <div className="min-h-screen p-10 flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutEditor
        exercises={localExercise}
        removeExercise={deleteExercise}
      />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default CreateWorkoutPage;
