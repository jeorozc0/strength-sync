import {
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

const fetchExerciseByID = async (exercise_id: any) => {
  const { data, error } = await supabase
    .from("exercises")
    .select("exercise_name")
    .eq("exercise_id", exercise_id);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchExerciseSession = async (session_id: any) => {
  const { data, error } = await supabase
    .from("workout_exercises_and_session")
    .select("*")
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
  const { data, error } = await supabase
    .from("session_exercises")
    .insert(exerciseSession);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createWorkoutWithAi = async () => {
  const { data, error } = await supabase.functions.invoke("openai", {
    body: JSON.stringify({ query: "Create a workout routine" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  console.log(data.body);
  return data;
};

const deleteWorkoutExercise = async (
  deletedExercises: ExerciseSessionPropsForDelete[]
) => {
  const exerciseIds = deletedExercises.map(
    (exercise) => exercise.workout_exercise_id
  );
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
  fetchExerciseByID,
  fetchExerciseSession,
  createWorkoutExercise,
  createWorkoutExerciseSession,
  createWorkoutWithAi,
  replaceWorkoutExercise,
  deleteWorkoutExercise,
};
