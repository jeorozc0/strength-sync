import { useQuery } from "react-query";
import {
  fetchWorkoutById,
  fetchWorkoutNameById,
} from "../services/api/workout-api";
import { WorkoutProps } from "../types/workout-types";

export function useWorkoutById(workout_id: WorkoutProps) {
  return useQuery(["workoutDetails", workout_id], () =>
    fetchWorkoutById(workout_id)
  );
}

export function useWorkoutName(workout_id: WorkoutProps) {
  return useQuery(["workout", workout_id], () =>
    fetchWorkoutNameById(workout_id)
  );
}
