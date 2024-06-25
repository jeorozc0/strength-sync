import { useEffect, useState } from "react";
import WorkoutEditor from "../components/edit-workout/workout-editor";
import { EditExerciseProps } from "../types/exercise-types";
import { useEditWorkout } from "../hooks/useWorkout";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteWorkoutExercise,
  useUpdateWorkoutExercise,
} from "../hooks/useExercise";
import { useWorkoutById, useWorkoutName } from "../hooks/useWorkoutById";
import ExerciseList from "../components/exercise-list";
import { useAuth } from "../hooks/useAuth";
import { v4 as uuidv4 } from "uuid";

const EditWorkoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { workout_id } = useParams();
  const { data: workout } = useWorkoutName({
    workout_id: workout_id,
  });
  const uuid = uuidv4();
  const [workoutName, setWorkoutName] = useState<string>("");
  const { data: exerciseDetails } = useWorkoutById({
    workout_id: workout_id,
  });
  const [localArrayofExercies, setlocalArrayofExercies] = useState<
    EditExerciseProps[]
  >([]);
  const [localArrayofDelete, setlocalArrayofDelete] = useState<
    EditExerciseProps[]
  >([]);
  useEffect(() => {
    if (exerciseDetails && workout) {
      setlocalArrayofExercies(exerciseDetails);
      setWorkoutName(workout?.[0]?.workout_name);
    }
  }, [exerciseDetails, workout]);
  const { mutateAsync: editWorkout } = useEditWorkout();
  const { mutateAsync: editExercises } = useUpdateWorkoutExercise();
  const { mutateAsync: deleteExercises } = useDeleteWorkoutExercise();

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
    const deletedExercises = localArrayofExercies?.filter(
      (exercise) => exercise.exercises.exercise_id === exerciseID
    );
    setlocalArrayofDelete((prevArray) => [...prevArray, ...deletedExercises]);
    setlocalArrayofExercies(updatedExercises);
  };

  async function EditWorkout(
    workout_name: string,
    exerciseDetails: any,
    exerciseDeleted: any
  ) {
    const newWorkout = await editWorkout({
      workout_name,
      workout_id: workout_id,
    });
    if (newWorkout) {
      const deletedExercises: any = exerciseDeleted.map((exercise: any) => {
        return {
          workout_exercise_id: exercise.workout_exercise_id,
        };
      });
      await deleteExercises(deletedExercises);
    } else {
      console.error("Failed to create new workout");
    }
    if (newWorkout) {
      const workoutExercises: any = exerciseDetails.map((exercise: any) => {
        return {
          workout_id: workout_id,
          workout_exercise_id: exercise.workout_exercise_id
            ? exercise.workout_exercise_id
            : uuid,
          exercise_id: exercise.exercises.exercise_id,
          sets: exercise.sets,
          reps: exercise.reps,
          rest: exercise.rest,
          user_id: user?.id,
        };
      });
      await editExercises({ exercise: workoutExercises, workout_id });
    } else {
      console.error("Failed to create new workout");
    }

    navigate(`/`);
  }

  return (
    <div className="min-h-screen p-10 flex items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#FFFFFF] dark:bg-[#212123]">
      <WorkoutEditor
        workout_name={workoutName}
        exercises={localArrayofExercies}
        deletedExercises={localArrayofDelete}
        submitWorkout={EditWorkout}
        setLocalExerciseDetails={setlocalArrayofExercies}
        deleteExerciseNow={deleteExerciseNow}
      />
      <ExerciseList addExercise={addExercise} />
    </div>
  );
};

export default EditWorkoutPage;
