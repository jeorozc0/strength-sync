import React from "react";
import { ExerciseProps } from "../../types";

interface WorkoutEditorProps {
  exercises: ExerciseProps[];
}

const WorkoutEditor = ({ exercises }: WorkoutEditorProps) => {
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <input
          title="RoutineName"
          defaultValue="My Routine"
          className="font-medium text-base text-left w-full"
        />
      </div>
      {exercises.map((exercise: any) => (
        <h1 key={exercise.exercise_id}>{exercise.name}</h1>
      ))}
    </div>
  );
};

export default WorkoutEditor;
