import { useQuery } from "react-query";
import { fetchWorkout } from "../services/api/workout-api";

export default function useWorkout() {
  return useQuery("workout", () => fetchWorkout());
}
