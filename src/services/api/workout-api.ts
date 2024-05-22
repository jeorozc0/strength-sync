import { WorkoutProps } from "../../types/workout-types";
import supabase from "../supabase/supabase";

const FetchWorkout = async (user_id: any) => {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("user_id", user_id);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const FetchWorkoutSession = async (user_id: any) => {
  let { data, error } = await supabase
    .from("workout_session")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchWorkoutNameById = async ({ workout_id }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workouts")
    .select("workout_name")
    .eq("workout_id", workout_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchWorkoutById = async ({ workout_id }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workout_exercises")
    .select("sets,reps,rest, exercises!inner(exercise_name, exercise_id)")
    .eq("workout_id", workout_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createWorkout = async ({ workout_name, user_id }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workouts")
    .insert([{ workout_name, user_id }])
    .select("workout_id");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const createWorkoutSession = async ({ workout_id, user_id }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workout_session")
    .insert({ workout_id, user_id })
    .select("*");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const editWorkout = async ({ workout_name, workout_id }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workouts")
    .update({ workout_name: workout_name })
    .eq("workout_id", workout_id)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const deleteWorkout = async (workout_id: number) => {
  const { data, error } = await supabase
    .from("workouts")
    .delete()
    .eq("workout_id", workout_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
const deleteWorkoutSession = async (session_id: number) => {
  const { data, error } = await supabase
    .from("workout_session")
    .delete()
    .eq("session_id", session_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export {
  FetchWorkout,
  fetchWorkoutById,
  createWorkout,
  editWorkout,
  deleteWorkout,
  fetchWorkoutNameById,
  FetchWorkoutSession,
  createWorkoutSession,
  deleteWorkoutSession
};
