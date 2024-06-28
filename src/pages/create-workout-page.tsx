import { useState } from "react";
import {
  EditExerciseProps,
  ExercisePropsForAPI,
} from "../types/exercise-types";
import { useCreateWorkout } from "../hooks/useWorkout";
import { useNavigate } from "react-router-dom";
import { useCreateWorkoutExercise } from "../hooks/useExercise";
import WorkoutCreator from "../components/create-workout/workout-creator";
import ExerciseList from "../components/exercise-list";
import { useAuth } from "../hooks/useAuth";

const CreateWorkoutPage = () => {
  const { user } = useAuth();
  const user_id = user?.id;
  const navigate = useNavigate();
  const { mutateAsync: submitWorkout } = useCreateWorkout();
  const { mutateAsync: createWorkoutExercises } = useCreateWorkoutExercise();
  const [localArrayofExercies, setlocalArrayofExercies] = useState<
    EditExerciseProps[]
  >([]);

  const addExercise = (newExercise: any) => {
    if (
      localArrayofExercies.some(
        (exercise) => exercise.exercises.exercise_id === newExercise.exercise_id
      )
    ) {
      return;
    }
    const newExercisesToAdd: EditExerciseProps[] = [
      ...localArrayofExercies,
      { exercises: newExercise, sets: 0, reps: 0, rest: 0 },
    ];
    setlocalArrayofExercies(newExercisesToAdd);
  };
  const deleteExerciseNow = (exerciseID: any) => {
    const updatedExercises = localArrayofExercies?.filter(
      (exercise) => exercise.exercises.exercise_id !== exerciseID
    );

    setlocalArrayofExercies(updatedExercises);
  };

  async function EditWorkout(workout_name: string, exerciseDetails: any) {
    const newWorkout = await submitWorkout({
      workout_name,
      user_id,
    });
    if (newWorkout) {
      const workoutExercises: ExercisePropsForAPI[] = exerciseDetails.map(
        (exercise: any) => {
          return {
            workout_id: newWorkout[0].workout_id,
            exercise_id: exercise.exercises.exercise_id,
            sets: exercise.sets,
            reps: exercise.reps,
            rest: exercise.rest,
            user_id,
          };
        }
      );
      await createWorkoutExercises(workoutExercises);
    } else {
      console.error("Failed to create new workout");
    }
    navigate(`/`);
  }

  return (
    <div className="h-full w-full p-2 lg:p-10  flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#FFFFFF] dark:bg-[#212123]">
      <WorkoutCreator
        exercises={localArrayofExercies}
        submitWorkout={EditWorkout}
        setLocalExerciseDetails={setlocalArrayofExercies}
        deleteExerciseNow={deleteExerciseNow}
        addExercise={addExercise}
      />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default CreateWorkoutPage;
