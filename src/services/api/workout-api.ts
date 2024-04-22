import { WorkoutProps } from "../../types/workout-types";
import supabase from "../supabase/supabase";

const fetchWorkout = async () => {
  const { data, error } = await supabase.from("workouts").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchWorkoutNameById = async ({ workout_id }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workouts")
    .select("workout_name")
    // Filters
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
    // Filters
    .eq("workout_id", workout_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createWorkout = async ({ workout_name }: WorkoutProps) => {
  const { data, error } = await supabase
    .from("workouts")
    .insert([{ workout_name }])
    .select("workout_id");

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
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
  console.log(data);
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

export {
  fetchWorkout,
  fetchWorkoutById,
  createWorkout,
  editWorkout,
  deleteWorkout,
  fetchWorkoutNameById,
};
