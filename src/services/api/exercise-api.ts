import { ExercisePropsForAPI } from "../../types/exercise-types";
import supabase from "../supabase/supabase";

const fetchExercise = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
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

const deletWorkoutExercise = async (workout_id: any) => {
  const { error } = await supabase
    .from("workout_exercises")
    .delete()
    .eq("workout_id", `${workout_id}`);

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
  createWorkoutExercise,
  replaceWorkoutExercise,
  deletWorkoutExercise,
};
