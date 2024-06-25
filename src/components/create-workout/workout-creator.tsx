import { Button } from "@mui/material";
import { EditExerciseProps } from "../../types/exercise-types";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExerciseCreatorItem from "./exercise-creator-item";
import WorkoutCreateAIForm from "../user-workouts/workout-create-ai-form";
import { useCreateWorkoutWithAi } from "../../hooks/useExercise";

interface WorkoutEditorProps {
  exercises: EditExerciseProps[];
  setLocalExerciseDetails: any;
  deleteExerciseNow: any;
  submitWorkout: (workout: string, exerciseDetails: any) => void;
}

const WorkoutCreator = ({
  exercises,
  submitWorkout,
  setLocalExerciseDetails,
  deleteExerciseNow,
}: WorkoutEditorProps) => {
  const [routineName, setRoutineName] = useState("My Routine");
  const { mutateAsync: createWorkoutWithAi, isLoading } =
    useCreateWorkoutWithAi();
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

  async function createAi({ muscle, exercises, sets }: any) {
    await createWorkoutWithAi({
      muscle: muscle,
      exercises: exercises,
      sets: sets,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="flex flex-col w-screen h-auto ">
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <div className="flex flex-row justify-center align-middle items-center gap-2">
          <Link to={"/routine"}>
            <ArrowBackIcon />
          </Link>
          <h1 className="font-medium text-xl text-left h-auto items-center">
            Create Routine
          </h1>
        </div>
        <div className="flex flex-row gap-4">
          <WorkoutCreateAIForm
            createWorkoutWithAi={createAi}
            isLoading={isLoading}
          />
          <Button
            variant="contained"
            size="small"
            onClick={() => submitWorkout(routineName, exercises)}
          >
            Save Routine
          </Button>
        </div>
      </div>
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <h1 className="font-medium text-lg text-left h-auto items-center">
          Routine Name
        </h1>
      </div>

      <input
        title="RoutineName"
        className="font-medium text-base text-left w-full flex border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] h-auto  lg:w-full rounded-md p-3 mb-4"
        value={routineName}
        onChange={(e) => setRoutineName(e.target.value)}
      />
      {exercises.length > 0 ? (
        <>
          {exercises.map((exercise: any) => {
            return (
              <ExerciseCreatorItem
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
        <div className="flex justify-center items-center flex-col h-auto border-[#ECEDF0] dark:border-black border border-solid bg-[#FFFFFF] dark:bg-[#2B2C32] rounded-md p-10 gap-5 mb-6">
          <FitnessCenterIcon fontSize="large" />
          <h1 className="font-medium text-base text-center">No Exercises</h1>
          <h1 className="text-sm text-center text-[#8A909A] dark:text-[#c5c5d2]">
            So far, you haven't added any exercises to this routine.
          </h1>
        </div>
      )}
    </div>
  );
};

export default WorkoutCreator;
