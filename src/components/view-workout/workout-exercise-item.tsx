import { WorkoutExerciseProps } from "../../types/exercise-types";
import SortIcon from "@mui/icons-material/Sort";
import RefreshIcon from "@mui/icons-material/Refresh";
import TimerIcon from "@mui/icons-material/Timer";

const WorkoutExerciseItem = ({
  exercise_name,
  exercise_reps,
  exercise_sets,
  exercise_rest,
}: WorkoutExerciseProps) => {
  const moment = require("moment");
  let minutes = moment.utc(exercise_rest * 1000).format("mm:ss");

  return (
    <div className=" flex align-middle justify-start flex-row h-15 border-[#ECEDF0] border border-solid bg-white rounded-md py-4 px-2 gap-8">
      <div className="flex flex-col justify-center gap-2 h-full w-full">
        <div>
          <p className="font-medium text-base leading-6">{exercise_name}</p>
        </div>
        <div className="flex flex-row gap-2 justify-between px-32">
          <div className="border-[#ECEDF0] border-solid border rounded-md p-1">
            <p>
              <SortIcon /> {exercise_sets} sets
            </p>
          </div>
          <div className="border-[#ECEDF0] border-solid border rounded-md p-1">
            <p>
              <RefreshIcon /> {exercise_reps} reps
            </p>
          </div>
          <div className="border-[#ECEDF0] border-solid border rounded-md p-1">
            <p>
              <TimerIcon /> {minutes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutExerciseItem;
