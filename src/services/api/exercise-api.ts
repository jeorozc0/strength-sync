import {
  EditExerciseProps,
  ExercisePropsForAPI,
  ExerciseSessionPropsForAPI,
  ExerciseSessionPropsForDelete,
} from "../../types/exercise-types";
import supabase from "../supabase/supabase";

const fetchExercise = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchExerciseSession = async (session_id: any) => {
  const { data, error } = await supabase
    .from("session_exercises")
    .select("*, workout_exercises(exercise_id)")
    .eq("session_id", session_id);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createWorkoutExercise = async (exercise: ExercisePropsForAPI[]) => {
  const { data, error } = await supabase
    .from("workout_exercises")
    .insert(exercise);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};
const createWorkoutExerciseSession = async (
  exerciseSession: ExerciseSessionPropsForAPI[]
) => {
  console.log(exerciseSession);
  const { data, error } = await supabase
    .from("session_exercises")
    .insert(exerciseSession);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};
const deleteWorkoutExercise = async (
  deletedExercises: ExerciseSessionPropsForDelete[]
) => {
  const exerciseIds = deletedExercises.map(
    (exercise) => exercise.workout_exercise_id
  );

  console.log(exerciseIds);
  const { error } = await supabase
    .from("workout_exercises")
    .delete()
    .in("workout_exercise_id", exerciseIds); 
  if (error) {
    throw new Error(error.message);
  }
};

const replaceWorkoutExercise = async (exercise: any, workout_id: any) => {
  const { data, error } = await supabase
    .from("workout_exercises")
    .upsert(exercise)
    .eq("workout_id", `${workout_id}`)
    .select();
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export {
  fetchExercise,
  fetchExerciseSession,
  createWorkoutExercise,
  createWorkoutExerciseSession,
  replaceWorkoutExercise,
  deleteWorkoutExercise,
};
