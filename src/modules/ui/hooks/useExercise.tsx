import supabase from "../../../supabase/supabase";
import { useQuery } from "react-query";

const fetchExercise = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useExercise() {
  return useQuery("exercise", () => fetchExercise());
}
