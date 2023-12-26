import { useState } from "react";
import WorkoutEditor from "../modules/ui/components/routine-creator/workout-editor";
import WorkoutListAdd from "../modules/ui/components/routine-creator/exercise-list";
import { ExerciseProps } from "../modules/types";

const WorkoutCreator = () => {
  const [localExercise, setLocalExercise] = useState<ExerciseProps[]>([]);
  //TODO: Make the exercises be added to a local array for creation of a workout
  const addExercise = (newExercise: ExerciseProps) => {
    if (
      localExercise.some(
        (exercise) => exercise.exercise_id === newExercise.exercise_id,
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
      <WorkoutListAdd addExercise={addExercise} />
    </div>
  );
};

export default WorkoutCreator;
