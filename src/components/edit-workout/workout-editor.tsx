import { Button } from "@mui/material";
import { EditExerciseProps } from "../../types/exercise-types";
import ExerciseEditorItem from "./exercise-editor-item";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface WorkoutEditorProps {
  exercises: EditExerciseProps[];
  deletedExercises: EditExerciseProps[];
  workout_name: string;
  setLocalExerciseDetails: any;
  deleteExerciseNow: any;
  submitWorkout: (
    workout: string,
    exerciseDetails: any,
    exerciseDeleted: any
  ) => void;
}

const WorkoutEditor = ({
  exercises,
  deletedExercises,
  submitWorkout,
  workout_name,
  setLocalExerciseDetails,
  deleteExerciseNow,
}: WorkoutEditorProps) => {
  const [routineName, setRoutineName] = useState(workout_name);
  useEffect(() => {
    setRoutineName(workout_name);
  }, [workout_name]);

  const updateExerciseDetails = (
    exercise_id: string,
    sets: number,
    reps: number,
    rest: number
  ) => {
    const updated: EditExerciseProps[] | undefined = exercises?.map(
      (subArray) => {
        if (subArray.exercises.exercise_id === exercise_id) {
          return {
            ...subArray,
            sets,
            reps,
            rest,
          };
        }
        return subArray;
      }
    );
    setLocalExerciseDetails(updated);
  };

  return (
    <div className="flex flex-col w-screen h-auto">
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <div className="flex flex-row justify-center align-middle items-center gap-2">
          <Link to={"/routine"}>
            <ArrowBackIcon />
          </Link>
          <h1 className="font-medium text-xl text-left h-auto items-center">
            Edit Routine
          </h1>
        </div>

        <Button
          variant="contained"
          size="small"
          onClick={() =>
            submitWorkout(routineName, exercises, deletedExercises)
          }
        >
          Save Routine
        </Button>
      </div>
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <h1 className="font-medium text-lg text-left h-auto items-center">
          Routine Name
        </h1>
      </div>

      <input
        title="RoutineName"
        className="font-medium text-base text-left w-full flex border-[#ECEDF0] border border-solid bg-white h-auto  lg:w-full rounded-md p-3 mb-4"
        value={routineName}
        onChange={(e) => setRoutineName(e.target.value)}
      />
      {exercises.length > 0 ? (
        <>
          {exercises.map((exercise: any) => {
            return (
              <ExerciseEditorItem
                key={exercise.exercises.exercise_id}
                exercise_name={exercise.exercises.exercise_name}
                exercise_id={exercise.exercises.exercise_id}
                sets={exercise.sets}
                reps={exercise.reps}
                rest={exercise.rest}
                removeExercise={deleteExerciseNow}
                updateExerciseDetails={updateExerciseDetails}
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

export default WorkoutEditor;
