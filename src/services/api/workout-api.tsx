import supabase from "../supabase/supabase";

const fetchWorkout = async () => {
  const { data, error } = await supabase.from("workouts").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};
export { fetchWorkout };
