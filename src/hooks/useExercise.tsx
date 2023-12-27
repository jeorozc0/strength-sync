import { useQuery } from "react-query";
import { fetchExercise } from "../services/api/exercise-api";

export default function useExercise() {
  return useQuery("exercise", () => fetchExercise());
}
