import { ExerciseProps } from "../../types/exercise-types";
import ExerciseEditorItem from "./exercise-editor-item";

interface WorkoutEditorProps {
  exercises: ExerciseProps[];
  removeExercise: (exercise_id: string) => void;
}

const WorkoutEditor = ({ exercises, removeExercise }: WorkoutEditorProps) => {
  return (
    <div className="flex flex-col w-screen h-auto pl-40">
      <h1 className="font-medium text-lg text-left">Routine Name</h1>
      <input
        title="RoutineName"
        defaultValue="My Routine"
        className="font-medium text-base text-left w-full flex border-[#ECEDF0] border border-solid bg-white h-auto  lg:w-full rounded-md p-3 mb-4"
      />

      {exercises.map((exercise: any) => (
        <ExerciseEditorItem
          key={exercise.exercise_id}
          exercise_name={exercise.exercise_name}
          exercise_id={exercise.exercise_id}
          removeExercise={removeExercise}
        />
      ))}
    </div>
  );
};

export default WorkoutEditor;
