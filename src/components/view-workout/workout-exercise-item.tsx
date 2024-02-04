import { WorkoutExerciseProps } from "../../types/exercise-types";
import logo from "../../images/workout.jpeg"

const WorkoutExerciseItem = ({
  exercise_name,
  exercise_reps,
  exercise_sets,
  exercise_weight,
}: WorkoutExerciseProps) => {
  return (
    <div className=" flex align-middle justify-start flex-row h-15 border-[#ECEDF0] border-2 border-solid bg-white rounded-md py-4 px-2 gap-8">
      <img
        src={logo}
        title="Exercise"
        alt="Exercise of a man"
        className='object-contain'
      ></img>
      <div className="flex flex-col justify-start gap-2">
        <div>
          <p className="font-medium text-base leading-6">{exercise_name}</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="border-black border-solid border-4">
            <p>{exercise_sets}</p>
          </div>
          <div></div>
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
