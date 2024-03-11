import { useQuery } from "react-query";
import { fetchWorkoutById } from "../services/api/workout-api";
import { WorkoutProps } from "../types/workout-types";

export default function useWorkoutById(workout_id: WorkoutProps) {
  return useQuery(["workoutDetails", workout_id], () => fetchWorkoutById(workout_id));
}

