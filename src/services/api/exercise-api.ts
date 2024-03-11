import supabase from "../supabase/supabase";

const fetchExercise = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createWorkoutExercise = async (exercise: any[]) => {
  const { data, error } = await supabase
    .from("workout_exercises")
    .insert([exercise]);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export { fetchExercise, createWorkoutExercise };
