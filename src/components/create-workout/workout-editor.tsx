import { ExerciseProps } from "../../types/exercise-types";
import ExerciseEditorItem from "./exercise-editor-item";
import ExerciseItem from "./exercise-item";

interface WorkoutEditorProps {
  exercises: ExerciseProps[];
  addExercise: (newExercise: ExerciseProps) => void;
}

const WorkoutEditor = ({ exercises, addExercise }: WorkoutEditorProps) => {
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <input
          title="RoutineName"
          defaultValue="My Routine"
          className="font-medium text-base text-left w-full"
        />
      </div>
      {exercises.map((exercise: any) => (
        <ExerciseEditorItem
          key={exercise.exercise_id}
          exercise_name={exercise.exercise_name}
          exercise_id={exercise.exercise_id}
          addExercise={addExercise}
        />
      ))}
    </div>
  );
};

export default WorkoutEditor;
