import { WorkoutProps } from "../../types/workout-types";
import supabase from "../supabase/supabase";

const fetchWorkout = async () => {
  const { data, error } = await supabase.from("workouts").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchWorkoutById = async (workout_id:WorkoutProps) => {
  const {data, error} = await supabase.from("workouts").select("*").eq("workout_id", workout_id)
  if (error) {
    throw new Error(error.message)
  }

  return data;
}
export { fetchWorkout, fetchWorkoutById };
