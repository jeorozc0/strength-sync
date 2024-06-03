import { Button } from "@mui/material";
import { EditExerciseProps } from "../../types/exercise-types";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ExerciseTrackerItem from "./exercise-tracker-item";
import { useAuth } from "../../hooks/useAuth";
import { useCreateWorkoutSession } from "../../hooks/useWorkout";
import { useCreateWorkoutExerciseSession } from "../../hooks/useExercise";

interface WorkoutEditorProps {
  exercises: EditExerciseProps[];
  workout_name: string;
  workout_id: any;
}

const WorkoutTracker = ({
  exercises,
  workout_name,
  workout_id,
}: WorkoutEditorProps) => {
  const [routineName, setRoutineName] = useState(workout_name);
  const { user } = useAuth();
  const user_id = user?.id;
  const navigate = useNavigate();
  const { mutateAsync: createWorkoutSession } = useCreateWorkoutSession();
  const { mutateAsync: createExercisetSession } =
    useCreateWorkoutExerciseSession();
  useEffect(() => {
    setRoutineName(workout_name);
  }, [workout_name]);
  const [exerciseTrackList, setExerciseTrackList] = useState<any[]>([]);

  useEffect(() => {
  }, [exerciseTrackList]);

  async function logWorkout(workout_id: string, exerciseTrackList: any) {
    const newWorkout = await createWorkoutSession({
      workout_id,
      user_id,
    });
    if (newWorkout) {
      const sessionExercises: any[] = exerciseTrackList.map((exercise: any) => {
        return {
          session_exercise_id: exercise.session_exercise_id,
          session_id: newWorkout[0].session_id,
          workout_exercise_id: exercise.workout_exercise_id,
          reps_per_set: exercise.localReps,
          weight_per_set: exercise.localWeight,
          rpe_per_set: exercise.localRPE,
        };
      });
      await createExercisetSession(sessionExercises);
    } else {
      console.error("Failed to create new workout");
    }

    navigate(`/tracker`);
  }

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
          onClick={() => logWorkout(workout_id, exerciseTrackList)}
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
                workout_exercise_id={exercise.workout_exercise_id}
                sets={exercise.sets}
                reps={exercise.reps}
                rest={exercise.rest}
                setExerciseTrackList={setExerciseTrackList}
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
