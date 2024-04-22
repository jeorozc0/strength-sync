import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  fetchWorkout,
  createWorkout,
  deleteWorkout,
  editWorkout,
} from "../services/api/workout-api";
import { WorkoutProps } from "../types/workout-types";

export function useWorkout() {
  return useQuery("workout", () => fetchWorkout());
}
export function useCreateWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workout: WorkoutProps) => createWorkout(workout),
    onSuccess: () => {
      queryClient.invalidateQueries("workout");
    },
  });
}

export function useEditWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workout: WorkoutProps) => editWorkout(workout),
    onSuccess: () => {
      queryClient.invalidateQueries("workout");
    },
  });
}

export function useDeleteWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workout_id: number) => deleteWorkout(workout_id),
    onSuccess: () => {
      queryClient.invalidateQueries("workout");
    },
  });
}
