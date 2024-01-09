import { WorkoutExerciseProps } from "../../types/exercise-types";

const WorkoutExerciseItem = ({
  exercise_name,
  exercise_reps,
  exercise_sets,
  exercise_weight,
}: WorkoutExerciseProps) => {
  return (
    <div className=" flex align-middle justify-start flex-row h-15 border-[#ECEDF0] border-2 border-solid bg-white rounded-md py-4 px-2 gap-8">
      <img
        src="https://pump-app.s3.eu-west-2.amazonaws.com/exerci…-Lever-Incline-Chest-Press_Chest_thumbnail@3x.jpg
"
        title="Exercise"
        alt="Exercise of a man"
        className="rounded-3xl border-solid border-[#ECEDF0] border-1"
      ></img>
      <div className="flex flex-col justify-start gap-2">
        <div>
          <p className="font-medium text-base leading-6">{exercise_name}</p>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <p>{exercise_sets}</p>
          </div>
          <div>
            <p>{exercise_reps}</p>
          </div>
          <div>
            <p>{exercise_weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutExerciseItem;
