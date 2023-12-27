import supabase from "../supabase/supabase";
import { useQuery } from "react-query";

const fetchWorkout = async () => {
  const { data, error } = await supabase.from("workouts").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useWorkout() {
  return useQuery("workout", () => fetchWorkout());
}
