import { Button } from "@mui/material";
import { EditExerciseProps } from "../../types/exercise-types";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ExerciseTrackerItem from "./exercise-tracker-item";

interface WorkoutEditorProps {
  exercises: EditExerciseProps[];
  workout_name: string;
}

const WorkoutTracker = ({ exercises, workout_name }: WorkoutEditorProps) => {
  const [routineName, setRoutineName] = useState(workout_name);
  console.log(workout_name);
  useEffect(() => {
    setRoutineName(workout_name);
  }, [workout_name]);

  return (
    <div className="flex flex-col w-screen h-auto">
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <div className="flex flex-row justify-center align-middle items-center gap-2">
          <Link to={"/tracker"}>
            <ArrowBackIcon />
          </Link>
          <h1 className="font-medium text-xl text-left h-auto items-center">
            Track Routine
          </h1>
        </div>

        <Button
          variant="contained"
          size="small"
          onClick={() => console.log("Hi")}
        >
          Save Routine
        </Button>
      </div>
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <h1 className="font-medium text-lg text-left h-auto items-center">
          Routine Name
        </h1>
      </div>

      <div className="font-medium text-base text-left w-full flex border-[#ECEDF0] border border-solid bg-white h-auto  lg:w-full rounded-md p-3 mb-4">
        {routineName}
      </div>
      {exercises.length > 0 ? (
        <>
          {exercises.map((exercise: any) => {
            return (
              <ExerciseTrackerItem
                key={exercise.exercises.exercise_id}
                exercise_name={exercise.exercises.exercise_name}
                exercise_id={exercise.exercises.exercise_id}
                sets={exercise.sets}
                reps={exercise.reps}
                rest={exercise.rest}
              />
            );
          })}
        </>
      ) : (
        <div className="flex justify-center items-center flex-col h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-10 gap-5 mb-6">
          <FitnessCenterIcon fontSize="large" />
          <h1 className="font-medium text-base text-center">No Exercises</h1>
          <h1 className="text-sm text-center text-[#8A909A]">
            So far, you haven't added any exercises to this routine.
          </h1>
        </div>
      )}
    </div>
  );
};

export default WorkoutTracker;
